# Scraper System

Zurui includes a powerful scraping engine to bulk import manga content.

## Architecture

```
┌────────────────────┐     ┌──────────────────────┐
│  Admin Dashboard   │────▶│  BulkKomikuController │
│  (Browser)         │     │  (Laravel)            │
└────────────────────┘     └──────────┬───────────┘
                                      │
                           ┌──────────▼───────────┐
                           │  Scraper API          │
                           │  (Node.js :8001)      │
                           │  /pustaka endpoint    │
                           └──────────┬───────────┘
                                      │
                           ┌──────────▼───────────┐
                           │  Source: Komiku.id    │
                           │  (HTML Scraping)      │
                           └──────────────────────┘
```

## Scraping Modes

### 1. Normal Mode (Browser-Dependent)

- Streams output directly to the browser
- Requires keeping the tab open
- Good for small scraping tasks

### 2. Background Mode (Recommended) ⭐

- Runs as a **detached background process**
- **Safe to close the browser tab**
- Logs output to `storage/logs/scrape-bg.log`
- Live monitoring via Background Monitor panel
- Prevents duplicate runs via PID file locking

## Using the Scraper

### Access Scraper Page

Navigate to `https://yourdomain.com/admin/scrape-all-komiku`

### Configuration Options

| Setting | Description | Default |
|---------|-------------|---------|
| **Start Page** | Which page to start scraping from | 1 |
| **End Page** | Last page to scrape (0 = all) | 0 |
| **Max Chapters** | Max chapters to import per manga | 5 |
| **With Chapters** | Also import chapter images | Determined by max_chapters |

### Force Background Mode

1. Configure your scraping options
2. Click **Force Background** button
3. The scraper launches as a detached process
4. Monitor progress in the **Background Monitor** panel
5. You can safely **close the tab** — scraping continues

### Background Monitor

The monitor panel shows:
- **Status**: Live 🟢 or Completed
- **Pages Scraped**: Current page being processed
- **Created**: New manga entries created
- **Updated**: Existing manga entries updated  
- **Chapters**: Total chapters imported
- **Errors**: Any errors encountered
- **Live Log**: Real-time console output

## Artisan Command

The scraper can also be run via the command line:

```bash
php artisan komiku:scrape-all \
  --start-page=1 \
  --end-page=10 \
  --with-chapters \
  --max-chapters=5 \
  --delay=1
```

### Command Options

| Option | Description |
|--------|-------------|
| `--start-page=N` | Start from page N |
| `--end-page=N` | Stop at page N (0 = all) |
| `--with-chapters` | Import chapter images |
| `--max-chapters=N` | Max chapters per manga |
| `--delay=N` | Delay in seconds between requests |

## Log Files

| Log File | Purpose |
|----------|---------|
| `storage/logs/scrape-bg.log` | Background scraper output |
| `storage/logs/scrape-bg.pid` | Process ID tracking |
| `storage/logs/scraper-api.log` | Scraper API server log |

## Troubleshooting

### Scraper Not Starting
- Ensure Node.js scraper API is running on port 8001
- Check `php` is in your system PATH
- Verify the PID file is not stale: delete `storage/logs/scrape-bg.pid`

### Images Not Loading
- Some sources block direct hotlinking
- Use the built-in Image Proxy: images are served via `/image-proxy?url=...`
- Check scraper API logs for fetch errors

::: tip
For large imports (thousands of manga), use `--delay=1` to be respectful to source servers and avoid IP bans.
:::
