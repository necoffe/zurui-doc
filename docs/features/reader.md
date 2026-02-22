# Manga Reader

The Zurui chapter reader provides a premium reading experience.

## Reading Modes

### Long Strip (Default)
- All pages displayed vertically in sequence
- Scroll through the entire chapter seamlessly
- Zero gaps between images for immersive reading
- Best for **Manhwa** and **Manhua** (vertical comics)

### Single Page
- Display one page at a time
- Navigate with arrow keys or on-screen buttons
- Best for traditional **Manga** format

### Double Page
- Two pages side by side
- Simulates reading a physical book
- Best on wide screens / tablets

## Controls

### Top Navigation Bar
- **Back button** — Return to manga detail page
- **Title & Chapter** — Current position
- **Home button** — Return to homepage
- Auto-hides on scroll down, reappears on scroll up

### Bottom Control Bar
- **← Previous Chapter** / **Next Chapter →**
- **⚙️ Settings** — Open reader settings panel
- **≡ Chapter List** — Browse all chapters
- **🚩 Report** — Report issues with the chapter

### Settings Panel
- Reading mode selector
- Fit to Width toggle + width slider (25%-100%)
- Auto-scroll speed (1x-10x) + start/stop
- Keyboard shortcuts reference

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous chapter |
| `→` | Next chapter |
| `↑` / `↓` | Scroll |
| `Ctrl + Space` | Toggle auto-scroll |
| `Esc` | Close settings/chapter list |

## Image Handling

- **Lazy Loading** — Images load as you scroll to them
- **Async Decoding** — Browser decodes images off-thread
- **No Cropping** — Images display at full resolution
- **Background Color** — Dark gray background prevents flash
- **Error Fallback** — Placeholder shown if image fails to load
- **Image Proxy** — External images served through proxy to avoid CORS

## Chapter Navigation

### Floating Scroll Buttons
- **⬆ Scroll to Top** — Appears when scrolled down
- **⬇ Scroll to Bottom** — Appears when not at bottom
- Positioned at bottom-right corner

### Chapter List Sidebar
- Searchable chapter list
- Current chapter highlighted with blue indicator
- Shows chapter number, title, and relative date
- Quick jump to any chapter

## Comments Section

Below the reader, users can:
- View and post comments on the current chapter
- Reply to existing comments (threaded)
- Sort by newest or oldest
- Character limit: 1000 per comment

## Mobile Experience

The reader is fully responsive:
- Full-width images on mobile
- Touch-friendly controls
- Swipe-friendly scrolling
- Compact bottom bar on small screens
