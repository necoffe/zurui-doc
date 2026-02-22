# VPS Server Setup

Complete guide to setting up your VPS for production deployment.

## Initial Server Security

### Create a Non-Root User

```bash
adduser zurui
usermod -aG sudo zurui
su - zurui
```

### SSH Key Authentication

```bash
# On your LOCAL machine
ssh-keygen -t ed25519 -C "your@email.com"

# Copy to server
ssh-copy-id zurui@your_server_ip
```

### Disable Root Login & Password Auth

```bash
sudo nano /etc/ssh/sshd_config
```

```
PermitRootLogin no
PasswordAuthentication no
```

```bash
sudo systemctl restart sshd
```

### Setup Firewall (UFW)

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## Install Fail2Ban

```bash
sudo apt install -y fail2ban
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## Swap File (For Low-RAM VPS)

If your VPS has only 1 GB RAM:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## Directory Structure

```
/var/www/zurui/              # Main application
├── app/                     # Laravel application code
├── config/                  # Configuration files
├── database/                # Migrations & seeders
├── public/                  # Web root (point Nginx here)
├── resources/               # Views, CSS, JS
├── routes/                  # Route definitions
├── scraper_api/             # Node.js scraper service
├── storage/                 # Files, logs, cache
└── .env                     # Environment configuration
```

## Process Manager

Use **Supervisor** or **PM2** to keep services running:

- Laravel Queue Worker
- Node.js Scraper API (port 8001)

See [Supervisor & Queue](/guide/supervisor) for details.
