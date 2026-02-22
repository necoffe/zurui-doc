# Introduction

**Zurui** is a premium, self-hosted manga/manhwa/manhua CMS platform built with **Laravel 12** and modern web technologies. It provides everything you need to run a professional manga reading website.

## What is Zurui?

Zurui is a complete content management system designed specifically for manga/comic websites. Think of it as WordPress, but purpose-built for manga with:

- **Automated content scraping** from sources like Komiku
- **Premium chapter reader** with multiple reading modes
- **Built-in user system** with social login, bookmarks, and readlists
- **Admin dashboard** for full content and user management
- **REST API** for mobile app integration (Flutter)

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Laravel 12** | Backend framework |
| **Tailwind CSS v4** | Styling |
| **Alpine.js** | Frontend interactivity |
| **Vite** | Asset bundling |
| **MySQL/MariaDB** | Database |
| **Node.js** | Scraper API service |

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   FRONTEND                       │
│  Blade Templates + Alpine.js + Tailwind CSS     │
├─────────────────────────────────────────────────┤
│                 LARAVEL BACKEND                  │
│  Controllers → Models → Database (MySQL)        │
├──────────────────┬──────────────────────────────┤
│  Scraper API     │      REST API               │
│  (Node.js:8001)  │   (Laravel Routes)           │
│  Komiku Source   │   Flutter App Client          │
└──────────────────┴──────────────────────────────┘
```

## Who is it for?

- **Manga website operators** who want a complete, self-hosted solution
- **Developers** looking for a ready-to-deploy manga CMS
- **Content creators** who need a beautiful, fast manga reader platform

## Next Steps

Ready to get started? Head over to [Requirements](/guide/requirements) to see what you need, then follow the [Installation Guide](/guide/installation).
