# Frequently Asked Questions

## General

### What is Zurui?
Zurui is a self-hosted manga/manhwa/manhua CMS platform. It lets you run your own manga reading website with a built-in scraper, premium reader, and user system.

### Is Zurui free?
Zurui requires a license for production use. Contact the team for licensing details.

### What hosting do I need?
A VPS with at least 1 GB RAM, Ubuntu 20.04+, PHP 8.2+, MySQL/MariaDB, and Node.js 18+. See [Requirements](/guide/requirements) for full details.

### Can I use shared hosting?
Zurui is designed for VPS deployment. Some features (background scraper, queue workers) may not work on shared hosting. A VPS is strongly recommended.

---

## Installation

### I get a "500 Internal Server Error" after install
Check `storage/logs/laravel.log` for the actual error. Common causes:
- Missing `.env` file
- Wrong database credentials
- Missing PHP extensions
- Permission issues on `storage/` and `bootstrap/cache/`

### How do I change the default admin password?
1. Login with default credentials (`admin@zurui.com` / `password`)
2. Go to Member → Profile
3. Change your password

### Images are not showing up
Run `php artisan storage:link` to create the storage symlink. Also check file permissions.

---

## Scraper

### How long does scraping take?
It depends on the amount of content. Scraping 100 pages with chapters can take 30-60 minutes. Use `--delay=1` for politeness.

### Can I scrape from other sources?
Currently, Komiku is the primary integrated source. You can add custom sources by modifying the Node.js scraper API.

### The scraper shows "already running" but nothing is happening
Delete the stale PID file:
```bash
rm storage/logs/scrape-bg.pid
```

### Can I run the scraper on a schedule?
Yes! Add a cron job:
```bash
0 2 * * * cd /var/www/zurui && php artisan komiku:scrape-all --end-page=5 --with-chapters --max-chapters=3 >> storage/logs/cron-scrape.log 2>&1
```

---

## Reader

### Images are cropped in the reader
This was fixed in the latest update. Make sure your CSS is rebuilt:
```bash
npm run build
```

### Can users change the reading mode?
Yes! The reader has Long Strip, Single Page, and Double Page modes accessible via the Settings panel.

### Does the reader support right-to-left reading?
Not currently. This can be added as a future enhancement.

---

## Users

### How do I set up Google login?
1. Create a project in [Google Cloud Console](https://console.cloud.google.com)
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Add redirect URI: `https://yourdomain.com/auth/google/callback`
5. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to `.env`

### How do I promote a user to admin?
Currently via database:
```sql
UPDATE users SET role = 'admin' WHERE email = 'user@example.com';
```

### Can users delete their own accounts?
This feature is not yet implemented. Admins can delete user accounts from the admin panel.

---

## Technical

### What PHP version is required?
PHP 8.2 or higher.

### Can I use PostgreSQL instead of MySQL?
Theoretically yes (Laravel supports it), but it hasn't been tested. Some raw SQL queries may need adjustment.

### How do I update to the latest version?
See the [Updating Guide](/guide/updating) for step-by-step instructions.

### Where are the logs?
- Laravel: `storage/logs/laravel.log`
- Scraper: `storage/logs/scrape-bg.log`
- Nginx: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`
