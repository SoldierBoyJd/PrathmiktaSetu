from sqlalchemy import Column, Integer, String, Boolean, Enum
import enum
from app.db.base import Base

class RoleEnum(str, enum.Enum):
    citizen = "citizen"
    mp = "mp"
    admin = "admin"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(Enum(RoleEnum), default=RoleEnum.citizen, nullable=False)
    is_active = Column(Boolean, default=True)
