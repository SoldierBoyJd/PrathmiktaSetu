from fastapi import FastAPI
from app.api.v1 import health
from app.core.config import settings
from app.core.logging import setup_logging

setup_logging()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.include_router(health.router, prefix=f"{settings.API_V1_STR}", tags=["health"])
