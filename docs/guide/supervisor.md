# Supervisor & Queue Workers

Keep your background services running with Supervisor.

## Install Supervisor

```bash
sudo apt install -y supervisor
```

## Laravel Queue Worker

Create a Supervisor config for the Laravel queue:

```bash
sudo nano /etc/supervisor/conf.d/zurui-worker.conf
```

```ini
[program:zurui-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/zurui/artisan queue:work database --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/var/www/zurui/storage/logs/worker.log
stopwaitsecs=3600
```

## Node.js Scraper API

Create a Supervisor config for the scraper API:

```bash
sudo nano /etc/supervisor/conf.d/zurui-scraper.conf
```

```ini
[program:zurui-scraper]
process_name=%(program_name)s
command=node /var/www/zurui/scraper_api/index.js
directory=/var/www/zurui/scraper_api
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/www/zurui/storage/logs/scraper-api.log
environment=NODE_ENV="production",PORT="8001"
```

## Apply & Start

```bash
# Re-read configs
sudo supervisorctl reread

# Update
sudo supervisorctl update

# Start all
sudo supervisorctl start all

# Check status
sudo supervisorctl status
```

## Expected Output

```
zurui-worker:zurui-worker_00   RUNNING   pid 12345, uptime 0:05:30
zurui-worker:zurui-worker_01   RUNNING   pid 12346, uptime 0:05:30
zurui-scraper                  RUNNING   pid 12347, uptime 0:05:28
```

## Common Commands

```bash
# Restart queue workers (after code changes)
sudo supervisorctl restart zurui-worker:*

# Restart scraper
sudo supervisorctl restart zurui-scraper

# View logs
tail -f /var/www/zurui/storage/logs/worker.log
tail -f /var/www/zurui/storage/logs/scraper-api.log

# Stop all
sudo supervisorctl stop all
```

## Alternative: PM2 for Node.js

If you prefer PM2 for the scraper API:

```bash
# Install PM2
npm install -g pm2

# Start scraper
cd /var/www/zurui/scraper_api
pm2 start index.js --name zurui-scraper

# Auto-start on boot
pm2 startup
pm2 save
```

::: tip After Deployment
After any code changes, always restart the workers:
```bash
sudo supervisorctl restart zurui-worker:*
php artisan queue:restart
```
:::
