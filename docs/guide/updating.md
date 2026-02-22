# Updating Zurui

How to update your Zurui installation to the latest version.

## Update Process

### 1. Backup First

```bash
# Always backup before updating!
/usr/local/bin/zurui-backup.sh
```

### 2. Enter Maintenance Mode

```bash
cd /var/www/zurui
php artisan down --secret="your-secret-token"
```

::: tip
The `--secret` flag lets you bypass maintenance mode by visiting `/your-secret-token`.
:::

### 3. Pull Latest Code

```bash
git pull origin main
```

### 4. Update Dependencies

```bash
# PHP dependencies
composer install --optimize-autoloader --no-dev

# Node dependencies
npm install
```

### 5. Run Migrations

```bash
php artisan migrate --force
```

### 6. Rebuild Assets

```bash
npm run build
```

### 7. Clear Caches

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

### 8. Restart Services

```bash
# Restart queue workers
sudo supervisorctl restart zurui-worker:*

# Restart scraper API
sudo supervisorctl restart zurui-scraper

# Restart PHP-FPM
sudo systemctl restart php8.2-fpm
```

### 9. Exit Maintenance Mode

```bash
php artisan up
```

## Quick Update Script

Save this as `/usr/local/bin/zurui-update.sh`:

```bash
#!/bin/bash
cd /var/www/zurui

echo "🔒 Entering maintenance mode..."
php artisan down

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
composer install --optimize-autoloader --no-dev
npm install

echo "🗄️ Running migrations..."
php artisan migrate --force

echo "🔨 Building assets..."
npm run build

echo "🧹 Clearing caches..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "🔄 Restarting services..."
sudo supervisorctl restart zurui-worker:*
sudo supervisorctl restart zurui-scraper
sudo systemctl restart php8.2-fpm

echo "✅ Going live..."
php artisan up

echo "🎉 Update complete!"
```

```bash
chmod +x /usr/local/bin/zurui-update.sh
```
