# Constituency Intelligence Platform - Backend

This is the backend scaffold for the AI-Powered Constituency Intelligence Platform. It is built using FastAPI, PostgreSQL/PostGIS, Celery, Redis, and Alembic.

## Prerequisites

- Docker and Docker Compose (recommended)
- Python 3.12+ (if running locally without Docker)
- PostgreSQL with PostGIS extension
- Redis

## Setup

1. Copy the example environment variables:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables in `.env`. The database will be hosted on Railway, so update `DATABASE_URL` with your Railway credentials when available.

## Running with Docker (Recommended)

1. Build and start the services:
   ```bash
   docker-compose up --build
   ```

2. The FastAPI application will be available at `http://localhost:8000`.
3. The interactive API documentation is available at `http://localhost:8000/api/v1/openapi.json` and Swagger UI at `http://localhost:8000/docs`.

## Database Migrations (Alembic)

To create a new migration after modifying models in `app/db/base.py`:
```bash
alembic revision --autogenerate -m "migration message"
```

To apply migrations to the database:
```bash
alembic upgrade head
```

## Running Celery Worker Locally

If running outside Docker:
```bash
celery -A app.core.celery_app worker --loglevel=info
```

## Manual Testing

1. Check the health endpoint: `curl http://localhost:8000/api/v1/health`
2. Verify it returns `{"status": "ok", "message": "FastAPI backend is running!"}`
