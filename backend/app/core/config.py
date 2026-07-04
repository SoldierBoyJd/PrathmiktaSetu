from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import validator

class Settings(BaseSettings):
    PROJECT_NAME: str = "Constituency Intelligence Platform"
    API_V1_STR: str = "/api/v1"
    
    DATABASE_URL: str
    REDIS_URL: str = "redis://redis:6379/0"
    
    @validator("DATABASE_URL", pre=True)
    def assemble_db_connection(cls, v: str) -> str:
        if v and v.startswith("postgresql://"):
            return v.replace("postgresql://", "postgresql+asyncpg://", 1)
        return v
    
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True, extra="ignore")

settings = Settings()
