# Scraper Endpoints

These are internal admin-only endpoints for the scraping system.

::: warning
These endpoints require **admin authentication** and are not intended for public API use.
:::

## Scrape All Komiku

### Start Background Scraping

```http
POST /admin/scrape-all-komiku/force
```

**Parameters (Form Data):**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `start_page` | integer | 1 | Starting page |
| `end_page` | integer | 0 | End page (0 = all) |
| `max_chapters` | integer | 5 | Max chapters per manga |

**Response:** Redirects back with success/error flash message.

### Check Background Status

```http
GET /admin/scrape-all-komiku/bg-status
```

**Response:**

```json
{
  "running": true,
  "log": "📄 Page 5/100\n✚ Created: New Manga Title\n↻ Updated: Existing Manga\n...",
  "stats": {
    "created": 15,
    "updated": 42,
    "chapters": 120,
    "errors": 2,
    "page": 5
  }
}
```

## Scraper API (Node.js)

The Node.js scraper service runs on port `8001` and provides these internal endpoints:

### Manga List

```http
GET http://localhost:8001/pustaka?page=1
```

Returns parsed manga list from the source.

### Manga Detail

```http
GET http://localhost:8001/manga/{slug}
```

Returns manga metadata from the source.

### Chapter Images

```http
GET http://localhost:8001/chapters/{slug}
```

Returns chapter image URLs from the source.
