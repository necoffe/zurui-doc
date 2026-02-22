# Requirements

Before installing Zurui, make sure your VPS meets the following requirements.

## Server Requirements

### Minimum Specs
| Component | Requirement |
|-----------|------------|
| **OS** | Ubuntu 20.04+ / Debian 11+ / CentOS 8+ |
| **RAM** | 1 GB minimum (2 GB recommended) |
| **Storage** | 10 GB+ (depends on manga content) |
| **CPU** | 1 vCPU minimum |

### Software Requirements

| Software | Version | Purpose |
|----------|---------|---------|
| **PHP** | 8.2+ | Laravel runtime |
| **Composer** | 2.x | PHP dependency manager |
| **Node.js** | 18+ | Vite build & scraper API |
| **npm** | 9+ | Node package manager |
| **MySQL/MariaDB** | 8.0+ / 10.6+ | Database |
| **Nginx** or **Apache** | Latest | Web server |
| **Git** | Latest | Source code management |

### Required PHP Extensions

```bash
# Check installed extensions
php -m

# Required extensions:
- BCMath
- Ctype
- cURL
- DOM
- Fileinfo
- JSON
- Mbstring
- OpenSSL
- PDO (with mysql driver)
- Tokenizer
- XML
- GD or Imagick
```

## Domain & DNS

- A registered domain name (e.g., `yourdomain.com`)
- DNS A record pointing to your VPS IP address
- Optional: Cloudflare for CDN and DDoS protection

## Recommended VPS Providers

| Provider | Starting Price | Notes |
|----------|---------------|-------|
| **DigitalOcean** | $4/mo | Great UI, good docs |
| **Vultr** | $3.50/mo | Many locations |
| **Hetzner** | €3.79/mo | Best value (EU) |
| **Contabo** | €4.99/mo | High specs for price |
| **IDCloudHost** | Rp50k/mo | Indonesia-based |

::: tip
For optimal performance with the scraper running, we recommend at least **2 GB RAM** and **2 vCPU**.
:::

## Next Step

Once your server meets these requirements, proceed to [Installation](/guide/installation).
