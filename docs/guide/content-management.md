# Content Management

How to manage manga, chapters, and media content in Zurui.

## Manga Series

### Creating a Manga

Via Admin Panel:
1. Navigate to **Admin → Mangas → Create**
2. Fill in the details
3. Upload or link a cover image
4. Save

Via Scraper:
- Manga are automatically created when scraped from sources

### Manga Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Manga title |
| `slug` | ✅ | URL slug (auto-generated from title) |
| `description` | ❌ | Synopsis |
| `cover_image` | ❌ | Cover image path or URL |
| `author` | ❌ | Author name |
| `artist` | ❌ | Artist name |
| `type` | ❌ | Manga / Manhwa / Manhua |
| `status` | ❌ | Ongoing / Completed / Hiatus |
| `genres` | ❌ | Comma-separated genres |
| `score` | ❌ | Average rating (auto-calculated) |
| `views` | ❌ | View counter (auto-incremented) |

## Chapters

### Adding Chapters

1. Go to a manga's page
2. Click **Add Chapter**
3. Enter chapter number
4. Upload images or paste HTML content
5. Images are stored in `storage/app/public/chapters/`

### Chapter Image Storage

Images can be stored in two ways:

1. **Local Storage** — Uploaded directly to the server
   - Path: `/storage/chapters/{manga_slug}/chapter-{number}/`
   
2. **External URLs** — Hot-linked from external sources
   - Served via Image Proxy to prevent CORS issues

### HTML Content Chapters

Some chapters use raw HTML instead of individual images:
- Paste the HTML in the chapter editor
- Images within HTML are rendered inline
- Useful for text-based chapters or complex layouts

## Cover Images

### Supported Formats
- JPG, JPEG, PNG, GIF, WebP

### Storage Paths
- Local: `storage/app/public/covers/{filename}`
- External: URLs starting with `http://` or `https://`

## Genres

Genres are stored as comma-separated strings in the manga table. Common genres include:

```
Action, Adventure, Comedy, Drama, Fantasy, Horror, 
Isekai, Martial Arts, Mystery, Romance, Sci-Fi, 
Slice of Life, Sports, Supernatural, Thriller
```

## Duplicate Cleanup

Over time, duplicate chapters may accumulate from re-scraping. Use the cleanup tool:

**Admin → Settings → Cleanup Duplicate Chapters**

This removes chapters with the same `manga_id` and `chapter_number`, keeping only the newest entry.
