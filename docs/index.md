---
layout: home

hero:
  name: "Zurui"
  text: "Manga CMS Platform"
  tagline: Premium self-hosted manga/manhwa/manhua CMS with built-in scraper, reader, and admin tools. Deploy on your VPS in minutes.
  actions:
    - theme: brand
      text: Get Started →
      link: /guide/introduction
    - theme: alt
      text: View Features
      link: /features/unggulan

features:
  - icon: 📚
    title: Complete Manga CMS
    details: Full-featured content management for manga, manhwa, and manhua. Create, edit, organize series and chapters with beautiful admin panel.
  - icon: 🤖
    title: Auto Scraper Engine
    details: Built-in scraper with Komiku integration. Bulk import thousands of manga with chapters and images — runs in background safely.
  - icon: 📖
    title: Premium Reader
    details: Long-strip, single page, and double page modes. Auto-scroll, keyboard shortcuts, fit-to-width controls, and seamless navigation.
  - icon: 👥
    title: User System
    details: Registration, Google OAuth, bookmarks, readlists, reading history, ratings, comments with reply threads, and user profiles.
  - icon: 🔍
    title: SEO Optimized
    details: Server-side rendered pages with proper meta tags, Open Graph, sitemap, and semantic HTML structure for maximum search engine visibility.
  - icon: 🛡️
    title: Admin Dashboard
    details: Comprehensive admin panel with manga/chapter management, user management, report handling, scraper controls, and cleanup tools.
  - icon: 🚀
    title: One-Click Web Installer
    details: 7-step browser installer with license activation, auto requirements check, database setup, admin creation, and auto symlink — no terminal needed.
  - icon: 📱
    title: Mobile App Ready
    details: Integrated REST API for mobile applications and Firebase Cloud Messaging (FCM) for real-time push notifications.
  - icon: 🔐
    title: Social Ecosystem
    details: Google OAuth login, user bookmarks, reading history, and threaded comments for higher user engagement.
---

<div class="unggulan-container">
  <h2 id="kenapa-memilih-zurui">Kenapa Memilih Zurui? 🇮🇩</h2>
  <div class="unggulan-grid">
    <div class="unggulan-card">
      <h3>🚀 Performa Kilat</h3>
      <p>Dibangun dengan Laravel & Tailwind CSS v4 untuk kecepatan maksimal dan performa SEO terbaik.</p>
    </div>
    <div class="unggulan-card">
      <h3>🤖 Scraper Otomatis</h3>
      <p>Impor manga dari sumber populer secara otomatis di latar belakang tanpa membebani browser Anda.</p>
    </div>
    <div class="unggulan-card">
      <h3>🛠️ Tanpa Terminal</h3>
      <p>Instalasi dan pembaruan dilakukan sepenuhnya melalui browser. Tidak perlu keahlian server yang rumit.</p>
    </div>
  </div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #6366f1, #a855f7, #ec4899);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #6366f1aa 50%, #a855f7aa 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.unggulan-container {
  margin-top: 64px;
  text-align: center;
}

.unggulan-container h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  background: -webkit-linear-gradient(120deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.unggulan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.unggulan-card {
  padding: 32px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
  text-align: left;
}

.unggulan-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

.unggulan-card h3 {
  margin-top: 0;
  font-size: 20px;
  color: var(--vp-c-brand-1);
}

.unggulan-card p {
  margin-bottom: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
