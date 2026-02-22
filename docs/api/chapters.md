# Chapter Endpoints

## List Chapters

```http
GET /api/manga/{slug}/chapters
```

### Response

```json
{
  "data": [
    {
      "id": 1,
      "chapter_number": "1",
      "title": "Romance Dawn",
      "slug": "chapter-1",
      "views": 5000,
      "created_at": "2024-01-01",
      "images_count": 18
    },
    {
      "id": 2,
      "chapter_number": "2",
      "title": "That Straw Hat",
      "slug": "chapter-2",
      "views": 4800,
      "created_at": "2024-01-02",
      "images_count": 20
    }
  ]
}
```

## Chapter Detail (with Images)

```http
GET /api/chapters/{id}
```

### Response

```json
{
  "data": {
    "id": 1,
    "manga_id": 1,
    "chapter_number": "1",
    "title": "Romance Dawn",
    "slug": "chapter-1",
    "views": 5000,
    "content": null,
    "images": [
      {
        "id": 1,
        "image_path": "https://example.com/ch1/page1.jpg",
        "order_index": 1
      },
      {
        "id": 2,
        "image_path": "https://example.com/ch1/page2.jpg",
        "order_index": 2
      }
    ],
    "prev_chapter": {
      "id": null,
      "slug": null
    },
    "next_chapter": {
      "id": 2,
      "slug": "chapter-2"
    },
    "manga": {
      "title": "One Piece",
      "slug": "one-piece"
    }
  }
}
```

## Image Proxy

For external images that may have CORS restrictions:

```http
GET /image-proxy?url={encoded_image_url}
```

This returns the image binary with proper headers, allowing it to be displayed in your app without CORS issues.
