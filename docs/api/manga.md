# Manga Endpoints

## List All Manga

```http
GET /api/manga?page=1&sort=latest&type=all
```

### Query Parameters

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `sort` | string | latest | Sort: `latest`, `popular`, `rating`, `title` |
| `type` | string | all | Filter: `all`, `Manga`, `Manhwa`, `Manhua` |
| `search` | string | - | Search by title |

### Response

```json
{
  "data": [
    {
      "id": 1,
      "title": "One Piece",
      "slug": "one-piece",
      "cover_image": "https://...",
      "type": "Manga",
      "status": "Ongoing",
      "score": 9.2,
      "views": 15000,
      "genres": "Action, Adventure, Comedy",
      "chapters_count": 1100,
      "latest_chapter": {
        "chapter_number": "1100",
        "created_at": "2024-01-15"
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 50,
    "per_page": 18,
    "total": 900
  }
}
```

## Manga Detail

```http
GET /api/manga/{slug}
```

### Response

```json
{
  "data": {
    "id": 1,
    "title": "One Piece",
    "slug": "one-piece",
    "description": "Monkey D. Luffy...",
    "cover_image": "https://...",
    "author": "Oda Eiichiro",
    "artist": "Oda Eiichiro",
    "type": "Manga",
    "status": "Ongoing",
    "score": 9.2,
    "views": 15000,
    "genres": "Action, Adventure, Comedy",
    "created_at": "2024-01-01",
    "updated_at": "2024-01-15",
    "chapters_count": 1100,
    "user_rating": 5,
    "is_bookmarked": true
  }
}
```

## Rate Manga

```http
POST /api/manga/{id}/rate
Authorization: Bearer {token}
Content-Type: application/json

{
  "rating": 5
}
```

### Response

```json
{
  "message": "Rating submitted successfully",
  "rating": 5,
  "average_score": 8.6,
  "total_raters": 42
}
```
