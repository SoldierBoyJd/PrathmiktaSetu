from typing import Any
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.api import deps
from app.core import security
from app.db.session import get_db
from app.db.models import User
from app.schemas.auth import UserCreate, UserOut, Token

router = APIRouter()

@router.post("/register", response_model=UserOut)
async def register(
    *,
    db: AsyncSession = Depends(get_db),
    user_in: UserCreate,
) -> Any:
    """
    Create new user.
    """
    result = await db.execute(select(User).where(User.email == user_in.email))
    user = result.scalars().first()
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this username already exists in the system.",
        )
    user = User(
        email=user_in.email,
        hashed_password=security.get_password_hash(user_in.password),
        full_name=user_in.full_name,
        role=user_in.role,
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user

@router.post("/login", response_model=Token)
async def login(
    db: AsyncSession = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    result = await db.execute(select(User).where(User.email == form_data.username))
    user = result.scalars().first()
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    return {
        "access_token": security.create_access_token(user.id, role=user.role),
        "refresh_token": security.create_refresh_token(user.id, role=user.role),
        "token_type": "bearer",
    }

@router.post("/refresh", response_model=Token)
async def refresh_token(
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Refresh access token.
    """
    return {
        "access_token": security.create_access_token(current_user.id, role=current_user.role),
        "refresh_token": security.create_refresh_token(current_user.id, role=current_user.role),
        "token_type": "bearer",
    }

@router.post("/logout")
async def logout(current_user: User = Depends(deps.get_current_user)) -> Any:
    """
    Logout (Note: proper implementation requires token blacklisting in Redis)
    """
    return {"message": "Successfully logged out"}

@router.get("/me", response_model=UserOut)
async def read_users_me(
    current_user: User = Depends(deps.get_current_user)
) -> Any:
    """
    Get current user.
    """
    return current_user
