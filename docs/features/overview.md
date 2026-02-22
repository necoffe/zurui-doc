# Features Overview

A complete list of all features in Zurui CMS.

## Core Features

### 📚 Manga Management
- Create, edit, delete manga series
- Support for **Manga**, **Manhwa**, and **Manhua** types
- Auto-generated slugs for SEO-friendly URLs
- Cover image upload (local or external URL)
- Genre tagging with comma-separated values
- Status tracking (Ongoing, Completed, Hiatus)
- View counter with automatic increment
- Rating system with average score calculation

### 📖 Chapter Management
- Unlimited chapters per manga
- Image-based chapters (uploaded or external URLs)
- HTML content chapters
- Automatic ordering by chapter number
- Decimal chapter numbers (e.g., 10.5)
- Bulk chapter import via scraper

### 🤖 Scraping Engine
- **Komiku** source integration
- Paginated bulk scraping (scrape entire catalogs)
- Background mode (safe to close browser)
- Live progress monitoring
- Configurable: start page, end page, max chapters, delay
- Duplicate detection and prevention
- Both CLI and web interface

### 👥 User System
- Email/password registration & login
- Google OAuth social login
- User roles: `user` and `admin`
- Profile management with photo upload
- Rate-limited authentication

### 📑 Reading Features
- **Bookmarks** — Save manga to personal library
- **Readlists** — Create custom reading lists
- **Reading History** — Track last read chapter
- **Continue Reading** — Quick resume button
- **Star Ratings** — 5-star rating per manga
- **Comments** — Threaded discussions on manga & chapters

### 📖 Premium Reader
- **Long Strip Mode** — Scroll through all pages
- **Single Page Mode** — One page at a time
- **Double Page Mode** — Two pages side by side
- **Fit to Width** — Adjustable image width slider
- **Auto-scroll** — Configurable speed
- **Keyboard shortcuts** — Arrow keys, Ctrl+Space
- **Floating UI** — Auto-hide on scroll

### 🛡️ Admin Panel
- Dashboard with statistics
- Full CRUD for manga, chapters, users
- User report management system
- Scraper control panel
- Duplicate chapter cleanup
- Cache management

### 🔍 SEO & Discovery
- Server-side rendered pages
- Dynamic meta tags and Open Graph
- Semantic HTML structure
- Search functionality
- Comics browse page with filters
- Genre-based filtering
- Sort by: latest, popular, rating, title
- Related manga suggestions

### 📱 Mobile Integration
- REST API for Flutter mobile app
- Push notifications via Firebase (FCM)
- API authentication

### 🎨 Design
- Modern dark/light theme
- Glassmorphism effects
- Responsive design (mobile-first)
- Smooth animations and transitions
- Tailwind CSS v4
- Alpine.js interactivity

## Feature Matrix

| Feature | User | Admin |
|---------|:----:|:-----:|
| Browse manga | ✅ | ✅ |
| Read chapters | ✅ | ✅ |
| Search & filter | ✅ | ✅ |
| Bookmark manga | ✅ | ✅ |
| Create readlists | ✅ | ✅ |
| Rate manga | ✅ | ✅ |
| Post comments | ✅ | ✅ |
| Report issues | ✅ | ✅ |
| Manage manga | ❌ | ✅ |
| Manage chapters | ❌ | ✅ |
| Manage users | ❌ | ✅ |
| Run scraper | ❌ | ✅ |
| View reports | ❌ | ✅ |
| Site settings | ❌ | ✅ |
