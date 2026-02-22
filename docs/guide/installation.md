# Installation

This guide walks you through installing Zurui on a fresh VPS from scratch.

## Step 1: System Update

```bash
sudo apt update && sudo apt upgrade -y
```

## Step 2: Install PHP 8.2+

```bash
# Add PHP repository
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update

# Install PHP and required extensions
sudo apt install -y php8.2 php8.2-fpm php8.2-cli php8.2-common \
  php8.2-mysql php8.2-zip php8.2-gd php8.2-mbstring php8.2-curl \
  php8.2-xml php8.2-bcmath php8.2-intl php8.2-readline \
  php8.2-tokenizer php8.2-fileinfo

# Verify installation
php -v
```

## Step 3: Install Composer

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
composer --version
```

## Step 4: Install Node.js 18+

```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v
npm -v
```

## Step 5: Install MySQL/MariaDB

```bash
sudo apt install -y mariadb-server mariadb-client
sudo mysql_secure_installation

# Create database and user
sudo mysql -u root -p
```

```sql
CREATE DATABASE zurui_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'zurui'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON zurui_db.* TO 'zurui'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Step 6: Install Nginx

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

## Step 7: Clone & Setup Project

```bash
# Navigate to web directory
cd /var/www

# Clone the project
git clone https://github.com/your-repo/zurui.git
cd zurui

# Set ownership
sudo chown -R www-data:www-data /var/www/zurui
sudo chmod -R 775 /var/www/zurui/storage
sudo chmod -R 775 /var/www/zurui/bootstrap/cache
```

## Step 8: Install Dependencies

```bash
# PHP dependencies
composer install --optimize-autoloader --no-dev

# Node dependencies
npm install
```

## Step 9: Configure Environment

```bash
# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Edit environment variables
nano .env
```

Edit the following values in `.env`:

```env
APP_NAME=Zurui
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=zurui_db
DB_USERNAME=zurui
DB_PASSWORD=your_secure_password

SESSION_DRIVER=file
CACHE_STORE=file
QUEUE_CONNECTION=database
```

## Step 10: Database Migration

```bash
# Run migrations
php artisan migrate --force

# Seed initial data (admin user)
php artisan db:seed --force
```

## Step 11: Build Assets

```bash
# Build production assets
npm run build
```

## Step 12: Storage Link

```bash
# Create storage symlink
php artisan storage:link
```

## Step 13: Optimize

```bash
# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set correct permissions
sudo chown -R www-data:www-data storage bootstrap/cache
```

::: tip Default Admin Credentials
After seeding, the default admin account is:
- **Email:** `admin@zurui.com`
- **Password:** `password`

**Change this immediately after first login!**
:::

## What's Next?

- [Configure Nginx](/guide/nginx) as your web server
- [Set up SSL](/guide/ssl-domain) for HTTPS
- [Configure the Scraper](/guide/scraper) to start importing content
