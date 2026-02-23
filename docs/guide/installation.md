# Installation

Zurui comes with a **built-in Web Installer** — just upload the files, set up Nginx, and complete the installation from your browser. No terminal commands needed for database setup or admin creation.

## Server Preparation

### Step 1: System Update

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install PHP 8.2+

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

### Step 3: Install Composer

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
composer --version
```

### Step 4: Install Node.js 18+

```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v
npm -v
```

### Step 5: Install MySQL/MariaDB

```bash
sudo apt install -y mariadb-server mariadb-client
sudo mysql_secure_installation

# Create database
sudo mysql -u root -p
```

```sql
CREATE DATABASE zurui_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'zurui'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON zurui_db.* TO 'zurui'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Step 6: Install Nginx

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Step 7: Upload & Setup Project

```bash
# Navigate to web directory
cd /var/www

# Clone or upload the project
git clone https://github.com/your-repo/zurui.git
cd zurui

# Install dependencies
composer install --optimize-autoloader --no-dev
npm install

# Build frontend assets
npm run build

# Copy environment file
cp .env.example .env

# Set permissions
sudo chown -R www-data:www-data /var/www/zurui
sudo chmod -R 775 /var/www/zurui/storage
sudo chmod -R 775 /var/www/zurui/bootstrap/cache
```

### Step 8: Configure Nginx

Set up your Nginx config (see [Nginx Configuration](/guide/nginx) for full details), then:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## Web Installer Wizard

Once the server is prepared and Nginx is pointing to your domain, **open your browser** and navigate to:

```
https://yourdomain.com/install
```

The Web Installer will guide you through **7 steps**:

### Step 1: License Activation 🔑

Enter your **purchase code / license key** to verify your license.

- Your license will be **bound to your domain** (one license per domain)
- The installer verifies the key against the Zurui License Server
- The license is automatically saved to the database after migration

::: tip
Your license key was provided when you purchased Zurui CMS. Each key is valid for one domain.
:::

### Step 2: Server Requirements ✅

The installer automatically checks if your server meets all requirements:

| Requirement | Minimum |
|------------|---------|
| PHP Version | 8.1+ |
| BCMath | Required |
| Ctype | Required |
| cURL | Required |
| DOM | Required |
| Fileinfo | Required |
| GD | Required |
| JSON | Required |
| Mbstring | Required |
| OpenSSL | Required |
| PDO | Required |
| Tokenizer | Required |
| XML | Required |

All items must show **PASS** (green) to proceed.

### Step 3: Folder Permissions 📁

The installer checks that required directories are writable:

| Directory | Required Permission |
|-----------|-------------------|
| `storage/framework/` | Writable (775) |
| `storage/logs/` | Writable (775) |
| `storage/app/public/` | Writable (775) |
| `bootstrap/cache/` | Writable (775) |
| `.env` file | Writable |

If any folder is not writable, the installer shows the fix command:
```bash
sudo chmod -R 775 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache
```

### Step 4: Configuration ⚙️

Fill in your site and database details:

**Site Settings:**
| Field | Example |
|-------|---------|
| Site Name | `Mangakoi` |
| Site URL | `https://yourdomain.com` |

**Database Connection:**
| Field | Example |
|-------|---------|
| Host | `127.0.0.1` |
| Port | `3306` |
| Database Name | `zurui_db` |
| Username | `zurui` |
| Password | `your_password` |

::: warning
The database must **already exist** on your server. The installer will create the tables, but not the database itself.
:::

The installer will automatically:
- Write the `.env` file with your configuration
- Generate the `APP_KEY` encryption key
- Clear configuration cache

### Step 5: Database Migration 🗄️

Click **"Run Migrations"** to create all database tables.

The installer will:
- Create 30+ tables (users, mangas, chapters, bookmarks, ratings, etc.)
- Seed initial data
- Save your license key to the `settings` table with encrypted verification

You'll see a progress indicator while migrations run, and a success message with the migration log when complete.

### Step 6: Create Admin Account 👤

Set up your administrator account:

| Field | Requirements |
|-------|-------------|
| Full Name | Your admin display name |
| Email | Valid email address |
| Password | Minimum 8 characters |
| Confirm Password | Must match |

::: tip
This is your **primary admin account** for managing the site. You can create additional admins later from the admin panel.
:::

### Step 7: Finish 🎉

The installer automatically:
- ✅ Creates the **storage symlink** (`public/storage → storage/app/public`)
- ✅ Clears all caches and optimizes
- ✅ Marks the application as **installed**
- ✅ **Deletes all installer files** for security (controller, views, cache)
- ✅ Locks the installer route — `/install` redirects to homepage

You'll see two buttons:
- **Visit Homepage** — See your new site in action
- **Admin Dashboard** — Start managing content

---

## Post-Installation

After the web installer completes, you may want to:

### 1. Set up SSL

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

See [SSL & Domain](/guide/ssl-domain) for full instructions.

### 2. Configure Supervisor

Set up background workers for the scraper and queue:

```bash
sudo apt install -y supervisor
```

See [Supervisor & Queue](/guide/supervisor) for configuration.

### 3. Start Scraping Content

Navigate to `Admin → Scraper` to start importing manga from sources.

See [Scraper System](/guide/scraper) for detailed usage.

---

## Security Notes

::: danger Post-Install Security
After installation completes:

1. **Installer files are auto-deleted** — The controller, blade views, and compiled cache are automatically removed
2. **Route is locked** — `CheckIfInstalled` middleware blocks access to `/install/*`
3. **To re-install** — Delete `storage/installed` and redeploy the installer files
4. **Set `APP_DEBUG=false`** — Never leave debug mode on in production
5. **Set `APP_ENV=production`** — Ensures proper error handling and security
:::
