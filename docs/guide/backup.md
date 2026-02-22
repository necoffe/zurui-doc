# Backup & Restore

Keep your Zurui data safe with proper backup strategies.

## What to Backup

| Component | Location | Priority |
|-----------|----------|----------|
| **Database** | MySQL `zurui_db` | 🔴 Critical |
| **Environment** | `/var/www/zurui/.env` | 🔴 Critical |
| **Uploaded Media** | `/var/www/zurui/storage/app/public/` | 🟡 Important |
| **Application Code** | `/var/www/zurui/` | 🟢 Can re-clone from Git |

## Database Backup

### Manual Backup

```bash
mysqldump -u zurui -p zurui_db > ~/backups/zurui_$(date +%Y%m%d_%H%M%S).sql
```

### Automated Daily Backup

Create a backup script:

```bash
sudo nano /usr/local/bin/zurui-backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/home/zurui/backups"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="zurui_db"
DB_USER="zurui"
DB_PASS="your_password"

# Create backup directory
mkdir -p $BACKUP_DIR

# Database backup
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# Media backup (incremental)
tar -czf $BACKUP_DIR/media_$DATE.tar.gz -C /var/www/zurui/storage/app/public .

# Keep only last 7 days
find $BACKUP_DIR -type f -mtime +7 -delete

echo "Backup completed: $DATE"
```

```bash
chmod +x /usr/local/bin/zurui-backup.sh
```

### Schedule with Cron

```bash
crontab -e
```

```
# Daily backup at 3 AM
0 3 * * * /usr/local/bin/zurui-backup.sh >> /var/log/zurui-backup.log 2>&1
```

## Restore

### Database Restore

```bash
# From plain SQL
mysql -u zurui -p zurui_db < backup_file.sql

# From gzipped backup
gunzip < db_backup.sql.gz | mysql -u zurui -p zurui_db
```

### Media Restore

```bash
tar -xzf media_backup.tar.gz -C /var/www/zurui/storage/app/public/
sudo chown -R www-data:www-data /var/www/zurui/storage
```

## Off-Site Backup

### Using rclone to Cloud Storage

```bash
# Install rclone
curl https://rclone.org/install.sh | sudo bash

# Configure (follow prompts for Google Drive, S3, etc.)
rclone config

# Sync backups to cloud
rclone sync ~/backups remote:zurui-backups
```

::: warning
Always test your restore process periodically. A backup that can't be restored is useless!
:::
