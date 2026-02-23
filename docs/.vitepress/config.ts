import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Zurui Docs",
    description: "Documentation for Zurui - Premium Manga/Manhwa/Manhua CMS Platform",

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#6366f1' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Zurui Documentation' }],
        ['meta', { property: 'og:description', content: 'Complete installation & usage guide for Zurui CMS' }],
    ],

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/introduction' },
            { text: 'Features', link: '/features/unggulan' },
            { text: 'API Reference', link: '/api/overview' },
            { text: 'FAQ', link: '/faq' },
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/guide/introduction' },
                        { text: 'Requirements', link: '/guide/requirements' },
                        { text: 'Installation', link: '/guide/installation' },
                        { text: 'Configuration', link: '/guide/configuration' },
                    ]
                },
                {
                    text: 'VPS Deployment',
                    items: [
                        { text: 'Server Setup', link: '/guide/vps-setup' },
                        { text: 'Nginx Configuration', link: '/guide/nginx' },
                        { text: 'SSL & Domain', link: '/guide/ssl-domain' },
                        { text: 'Supervisor & Queue', link: '/guide/supervisor' },
                    ]
                },
                {
                    text: 'Usage',
                    items: [
                        { text: 'Admin Dashboard', link: '/guide/admin-dashboard' },
                        { text: 'Scraper System', link: '/guide/scraper' },
                        { text: 'Content Management', link: '/guide/content-management' },
                        { text: 'User Management', link: '/guide/user-management' },
                    ]
                },
                {
                    text: 'Maintenance',
                    items: [
                        { text: 'Backup & Restore', link: '/guide/backup' },
                        { text: 'Updating', link: '/guide/updating' },
                        { text: 'Troubleshooting', link: '/guide/troubleshooting' },
                    ]
                }
            ],
            '/features/': [
                {
                    text: 'Features',
                    items: [
                        { text: 'Fitur Unggulan 🇮🇩', link: '/features/unggulan' },
                        { text: 'Overview (EN)', link: '/features/overview' },
                        { text: 'Manga Reader', link: '/features/reader' },
                        { text: 'Scraping Engine', link: '/features/scraping' },
                        { text: 'User System', link: '/features/user-system' },
                        { text: 'SEO & Performance', link: '/features/seo-performance' },
                    ]
                }
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Overview', link: '/api/overview' },
                        { text: 'Manga Endpoints', link: '/api/manga' },
                        { text: 'Chapter Endpoints', link: '/api/chapters' },
                        { text: 'Scraper Endpoints', link: '/api/scraper' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/zurui' },
            { icon: 'discord', link: 'https://discord.gg/zurui' }
        ],

        editLink: {
            pattern: 'https://github.com/zurui/docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026-present Zurui Team'
        },

        search: {
            provider: 'local'
        },

        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    }
})
