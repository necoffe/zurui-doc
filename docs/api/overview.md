# API Overview

Zurui provides a REST API for mobile app integration (Flutter).

## Base URL

```
https://yourdomain.com/api
```

## Authentication

The API uses token-based authentication for protected endpoints.

### Login
```http
POST /api/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "token": "your-auth-token",
  "user": {
    "id": 1,
    "name": "User",
    "email": "user@example.com"
  }
}
```

### Using the Token
```http
Authorization: Bearer your-auth-token
```

## Rate Limiting

| Endpoint Type | Limit |
|--------------|-------|
| Public endpoints | 60 requests/minute |
| Auth endpoints | 5 requests/minute |
| Comment posting | 10 requests/minute |

## Response Format

All API responses follow this format:

**Success:**
```json
{
  "data": { ... },
  "message": "Success"
}
```

**Error:**
```json
{
  "error": "Error message",
  "code": 404
}
```

## Available Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/manga` | ❌ | List all manga |
| GET | `/api/manga/{slug}` | ❌ | Manga detail |
| GET | `/api/manga/{slug}/chapters` | ❌ | Chapter list |
| GET | `/api/chapters/{id}` | ❌ | Chapter detail with images |
| POST | `/api/manga/{id}/rate` | ✅ | Rate a manga |
| POST | `/api/bookmark/{manga}` | ✅ | Toggle bookmark |
| GET | `/api/library` | ✅ | User's bookmarked manga |
| GET | `/api/search?q=query` | ❌ | Search manga |

See individual endpoint docs for detailed request/response examples.
