# SEO & Performance

How Zurui is optimized for search engines and performance.

## SEO Features

### Meta Tags
Every page includes proper meta tags:
```html
<title>Manga Title - Chapter 1 | Zurui</title>
<meta name="description" content="Read Manga Title Chapter 1...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="cover.jpg">
<meta property="og:type" content="website">
```

### URL Structure
Clean, readable URLs:
```
/series/one-piece              → Manga detail
/series/one-piece/chapter-1    → Chapter reader
/comics                        → Browse all
/populer                       → Popular manga
/latest-updates                → Latest manga
/latest-chapters               → Latest chapters
```

### Semantic HTML
- Single `<h1>` per page
- Proper heading hierarchy
- Semantic elements (`<article>`, `<nav>`, `<section>`)
- `alt` attributes on all images

### Structured Data
- Open Graph tags for social sharing
- Twitter Card tags
- Proper canonical URLs

## Performance Optimizations

### Frontend
- **Vite** asset bundling with tree-shaking
- **Tailwind CSS v4** with JIT compilation (minimal CSS)
- **Lazy loading** images with `loading="lazy"`
- **Async decoding** with `decoding="async"`
- **Alpine.js** (14KB gzipped) instead of heavy frameworks
- **Static asset caching** (30 days via Nginx)

### Backend
- **Route caching** (`php artisan route:cache`)
- **Config caching** (`php artisan config:cache`)
- **View caching** (`php artisan view:cache`)
- **Eager loading** relationships to prevent N+1 queries
- **Database indexing** on frequently queried columns
- **Session write closing** for concurrent requests

### Image Optimization
- External images served via **Image Proxy** (single origin)
- Lazy loading prevents unnecessary downloads
- CDN-compatible asset pipeline

### Database
- Indexed columns: `slug`, `manga_id`, `user_id`, `chapter_number`
- Efficient pagination with `paginate()`
- Subquery sorting for latest chapters
- Minimal SELECT clauses where possible

## Lighthouse Score Targets

| Metric | Target |
|--------|--------|
| Performance | 85+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 95+ |

## CDN Recommendations

For optimal global performance:

1. **Cloudflare** (Free tier) — CDN + DDoS protection
2. **BunnyCDN** — Low cost, fast global delivery
3. **AWS CloudFront** — Enterprise-grade
