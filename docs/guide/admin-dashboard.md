# Admin Dashboard

Complete guide to using the Zurui admin panel.

## Accessing the Dashboard

Navigate to `https://yourdomain.com/admin/dashboard` and log in with your admin credentials.

## Dashboard Overview

The admin dashboard shows key statistics at a glance:

- **Total Manga** — Number of manga series in the database
- **Total Chapters** — Total chapters across all manga
- **Total Users** — Registered user count
- **Total Views** — Cumulative page views

## Navigation

The admin sidebar provides access to:

| Section | Description |
|---------|-------------|
| **Dashboard** | Overview statistics |
| **Mangas** | Create, edit, delete manga series |
| **Chapters** | Manage chapters and images |
| **Users** | User management and roles |
| **Reports** | View user-submitted reports |
| **Scraper** | Scraping tools and automation |
| **Settings** | Site configuration and tools |

## Managing Manga

### Create Manga

1. Go to **Mangas → Create New**
2. Fill in the required fields:
   - **Title** — Manga name
   - **Slug** — URL-friendly name (auto-generated)
   - **Description** — Synopsis/summary
   - **Cover Image** — Upload or paste URL
   - **Type** — Manga, Manhwa, or Manhua
   - **Status** — Ongoing, Completed, or Hiatus
   - **Author** / **Artist**
   - **Genres** — Comma-separated list
3. Click **Save**

### Bulk Delete

1. Go to **Mangas** list
2. Check the manga you want to delete
3. Click **Bulk Delete**
4. Confirm the action

::: danger
Bulk delete removes all associated chapters, images, bookmarks, and ratings permanently!
:::

## Managing Chapters

### Add Chapter

1. Navigate to a manga's edit page
2. Click **Add Chapter**
3. Enter **Chapter Number** and optional **Title**
4. Upload chapter images or paste **HTML content**
5. Images are automatically ordered by upload sequence

### Edit Chapter

- Rearrange image order
- Delete individual images
- Update chapter metadata

## Settings Page

The settings page provides utility tools:

| Tool | Description |
|------|-------------|
| **Cleanup Duplicate Chapters** | Remove duplicate chapters across all manga |
| **Clear Cache** | Purge application cache |
| **Fix Symlink** | Recreate the storage symlink |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Quick search |
| `Esc` | Close modal/sidebar |
