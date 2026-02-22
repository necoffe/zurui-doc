# SSL & Domain Setup

Secure your Zurui installation with HTTPS using Let's Encrypt.

## Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

## Obtain SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts:
1. Enter your email address
2. Agree to terms of service
3. Choose whether to redirect HTTP to HTTPS (recommended: **Yes**)

## Auto-Renewal

Certbot automatically sets up a cron job. Verify:

```bash
sudo certbot renew --dry-run
```

## Using Cloudflare (Recommended)

If using Cloudflare as your DNS/CDN:

### DNS Settings

| Type | Name | Value | Proxy |
|------|------|-------|-------|
| A | @ | Your VPS IP | ☁️ Proxied |
| A | www | Your VPS IP | ☁️ Proxied |

### SSL/TLS Mode

Set SSL/TLS mode to **Full (Strict)** in Cloudflare dashboard.

### Page Rules (Optional)

| URL Pattern | Setting |
|-------------|---------|
| `*yourdomain.com/*` | Cache Level: Standard |
| `*yourdomain.com/admin/*` | Cache Level: Bypass |
| `*yourdomain.com/storage/*` | Cache Level: Cache Everything, Edge TTL: 1 month |

## Update APP_URL

After setting up SSL, update your `.env`:

```env
APP_URL=https://yourdomain.com
SESSION_SECURE_COOKIE=true
```

Then clear cache:

```bash
php artisan config:cache
```

## Force HTTPS

If not using Certbot's auto-redirect, add to Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```
