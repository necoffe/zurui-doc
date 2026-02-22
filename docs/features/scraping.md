# Scraping Engine

Deep dive into Zurui's automated content scraping system.

## How It Works

The scraping system has two components:

### 1. Node.js Scraper API (Port 8001)

A lightweight Express.js service that acts as a middleware between Zurui and manga sources. It handles:
- HTML fetching and parsing
- Image URL extraction
- Pagination handling
- Rate limiting to be respectful to sources

### 2. Laravel Artisan Command

The `komiku:scrape-all` command orchestrates the scraping process:
1. Fetches manga list pages from the Scraper API
2. Extracts manga metadata (title, cover, genres, etc.)
3. Creates or updates manga records in the database
4. Optionally fetches chapter lists and images
5. Stores chapter images (URLs or downloaded files)

## Supported Sources

| Source | Status | Notes |
|--------|--------|-------|
| **Komiku** | ✅ Active | Primary source, full integration |
| **Custom API** | ✅ Active | Via `SCRAPER_API_URL` config |

## Scraping Workflow

```
Start
  │
  ▼
Fetch manga list page (Page N)
  │
  ▼
Parse manga entries from HTML
  │
  ├─▶ For each manga:
  │     │
  │     ▼
  │   Check if exists in DB
  │     │
  │     ├─ New → Create manga record
  │     └─ Exists → Update metadata
  │     │
  │     ▼
  │   If --with-chapters:
  │     │
  │     ▼
  │   Fetch chapter list
  │     │
  │     ▼
  │   For each chapter (up to --max-chapters):
  │     │
  │     ▼
  │   Fetch chapter images
  │     │
  │     ▼
  │   Store image records
  │
  ▼
Next page (Page N+1)
  │
  ▼
Repeat until end page reached
  │
  ▼
Done ✅
```

## Background Processing

When using Background Mode, the system:

1. **Generates a VBS script** (Windows) or uses `nohup` (Linux) for true process detachment
2. **Creates a PID file** (`scrape-bg.pid`) to track the process
3. **Redirects output** to a log file (`scrape-bg.log`)
4. **Frontend polls** the `/bg-status` endpoint every 3 seconds
5. **Reads logs safely** with fallback mechanisms for locked files (Windows)

## Safety Features

- **Duplicate Prevention** — PID file prevents multiple simultaneous runs
- **Graceful Error Handling** — Errors are logged, scraping continues
- **Rate Limiting** — Configurable delay between requests
- **File Locking** — Safe log reading even during active writes
