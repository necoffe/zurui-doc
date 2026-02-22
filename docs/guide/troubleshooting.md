# Troubleshooting

Common issues and their solutions.

## Installation Issues

### `php artisan key:generate` fails

**Error:** `Could not open input file: artisan`

**Solution:** Make sure you're in the project root directory:
```bash
cd /var/www/zurui
```

### Composer memory limit

**Error:** `Allowed memory size exhausted`

**Solution:**
```bash
COMPOSER_MEMORY_LIMIT=-1 composer install
```

### Permission denied errors

```bash
sudo chown -R www-data:www-data /var/www/zurui
sudo chmod -R 775 storage bootstrap/cache
```

## Runtime Issues

### 500 Internal Server Error

1. Check Laravel logs:
```bash
tail -f storage/logs/laravel.log
```

2. Common causes:
   - `.env` file missing or misconfigured
   - Database connection failed
   - Missing PHP extensions
   - Permission issues on storage/cache

### Images not showing

1. Check storage symlink:
```bash
php artisan storage:link
```

2. Verify file permissions:
```bash
ls -la public/storage
```

3. For external images, check the Image Proxy is working:
```bash
curl "https://yourdomain.com/image-proxy?url=https://example.com/image.jpg"
```

### Session / Login issues

```bash
# Clear session files
rm -rf storage/framework/sessions/*

# Rebuild cache
php artisan config:cache
php artisan route:cache
```

## Scraper Issues

### Scraper not starting

1. Verify Node.js scraper API is running:
```bash
curl http://localhost:8001/
```

2. Check Supervisor status:
```bash
sudo supervisorctl status zurui-scraper
```

3. View scraper logs:
```bash
tail -f storage/logs/scraper-api.log
```

### "Resource temporarily unavailable" error

The log file is locked by a running process. Solutions:
- Wait for the current scraping job to finish
- Kill stale scraper processes:
```bash
ps aux | grep "komiku:scrape-all"
kill <PID>
```
- Remove stale PID file:
```bash
rm storage/logs/scrape-bg.pid
```

### Scraper imported manga but no images

- Source might block direct image hotlinking
- Check if the Image Proxy is configured
- Try re-scraping with `--with-chapters` flag

## Database Issues

### MySQL connection refused

```bash
# Check MySQL is running
sudo systemctl status mysql

# Restart MySQL
sudo systemctl restart mysql

# Verify credentials
mysql -u zurui -p zurui_db
```

### Migration failed

```bash
# Check migration status
php artisan migrate:status

# Force run with seed
php artisan migrate:fresh --seed --force
```

::: danger
`migrate:fresh` will **drop all tables** and recreate them. Only use on a fresh install!
:::

## Performance Issues

### Slow page loads

1. Enable caching:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

2. Check PHP-FPM workers:
```bash
sudo systemctl status php8.2-fpm
```

3. Optimize database:
```sql
OPTIMIZE TABLE mangas, chapters, chapter_images, users;
```

### High CPU usage during scraping

- Use `--delay=2` to add delays between requests
- Reduce `--max-chapters` value
- Run scraping during off-peak hours

## Getting Help

If you can't resolve an issue:

1. Check the [FAQ](/faq) page
2. Search the [GitHub Issues](https://github.com/zurui/issues)
3. Join our [Discord community](https://discord.gg/zurui)
