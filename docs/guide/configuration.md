# Configuration

Detailed explanation of all configuration options in Zurui.

## Environment Variables

### Application Settings

```env
APP_NAME=Zurui                    # Site name (shown in title, header)
APP_ENV=production                # Environment: local, staging, production
APP_KEY=base64:...                # Auto-generated encryption key
APP_DEBUG=false                   # NEVER true in production!
APP_URL=https://yourdomain.com    # Full URL of your site
```

### Database

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=zurui_db
DB_USERNAME=zurui
DB_PASSWORD=your_secure_password
```

### Session & Cache

```env
SESSION_DRIVER=file               # Options: file, database, redis
SESSION_LIFETIME=120              # Minutes before session expires
CACHE_STORE=file                  # Options: file, database, redis
QUEUE_CONNECTION=database         # For background jobs
```

### Scraper Settings

```env
SCRAPER_STRATEGY=local            # Scraper source strategy
SCRAPER_API_URL=                  # External scraper API URL (if using remote)
```

::: warning
The scraper API runs on port `8001` by default. Make sure this port is not blocked by your firewall if you need external access.
:::

### Google OAuth (Optional)

To enable Google login, add these to your `.env`:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=https://yourdomain.com/auth/google/callback
```

### Mail Configuration (Optional)

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your@gmail.com
MAIL_PASSWORD=your_app_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"
```

## Manga URL Prefix

By default, manga URLs use the pattern `/series/{slug}`. This is configured in `routes/web.php`:

```php
$mangaPrefix = 'series';
```

You can change this to `manga`, `komik`, `read`, etc.

## File Storage

Zurui stores uploaded images in the `storage/app/public` directory with a symlink from `public/storage`. The structure is:

```
storage/app/public/
├── covers/          # Manga cover images
├── chapters/        # Chapter page images
└── profiles/        # User profile photos
```

## Performance Tuning

### PHP-FPM Configuration

Edit `/etc/php/8.2/fpm/pool.d/www.conf`:

```ini
pm = dynamic
pm.max_children = 20
pm.start_servers = 5
pm.min_spare_servers = 3
pm.max_spare_servers = 10
pm.max_requests = 500
```

### MySQL Optimization

Add to `/etc/mysql/mariadb.conf.d/50-server.cnf`:

```ini
[mysqld]
innodb_buffer_pool_size = 512M
innodb_log_file_size = 128M
query_cache_size = 64M
max_connections = 100
```

## Next Steps

- [VPS Nginx Setup](/guide/nginx)
- [SSL & Domain](/guide/ssl-domain)
