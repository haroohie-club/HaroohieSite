import { readFileSync } from 'node:fs'
const urlBase = "https://haroohie.club"

// Nuxt config file (https://nuxt.com/docs/getting-started/configuration)
export default {
    // Modules
    modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/i18n', 'nuxt-feedme'],

    // Fonts
    googleFonts: {
        download: true,
        inject: true,
        families: {
            'Nunito': [400, 700],
            'Notica Text': [700],
        }
    },

    plugins: [
        { src: '~/plugins/vue-matomo.js', mode: 'client' },
    ],

    // Pre render the sitemap, 404, and RSS feeds
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/404.html', '/rss.xml', '/de/rss.xml', '/fr/rss.xml', '/it/rss.xml', '/pt-br/rss.xml', '/ru/rss.xml', '/zh-hans/rss.xml', '/zh-hant/rss.xml']
        }
    },

    // App config
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Haroohie Translation Club'
        }
    },

    content: {
        // https://content.nuxt.com/get-started/configuration
        highlight: {
            theme: 'github-light',
            langs: [
                JSON.parse(
                    readFileSync('./shiki/languages/arm.tmLanguage.json', 'utf-8'),
                ),
                'c',
                'cpp',
                'csharp',
                'python'
            ]
        }
    },

    i18n: {
        detectBrowserLanguage: {
            useCookie: false,
            redirectOn: 'root',
        },
        locales: [
            { code: 'ar', iso: 'ar', file: 'locales/ar.json', dir: 'rtl' },
            { code: 'de', iso: 'de', file: 'locales/de.json', dir: 'ltr' },
            { code: 'en', iso: 'en', file: 'locales/en.json', dir: 'ltr' },
            { code: 'fr', iso: 'fr', file: 'locales/fr.json', dir: 'ltr' },
            { code: 'it', iso: 'it-IT', file: 'locales/it.json', dir: 'ltr' },
            { code: 'pt-br', iso: 'pt-BR', file: 'locales/pt-br.json', dir: 'ltr' },
            { code: 'ru', iso: 'ru', file: 'locales/ru.json', dir: 'ltr' },
            { code: 'zh-hans', iso: 'zh-Hans', file: 'locales/zh-Hans.json', dir: 'ltr' },
            { code: 'zh-hant', iso: 'zh-Hant', file: 'locales/zh-Hant.json', dir: 'ltr' },
        ],
        defaultLocale: 'en'
    },

    feedme: {
        feeds: {
            '/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'en' },
            '/ar/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'ar' },
            '/de/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'de' },
            '/fr/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'fr' },
            '/it/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'it' },
            '/pt-br/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'pt-br' },
            '/ru/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'ru' },
            '/zh-hans/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'zh-hans' },
            '/zh-hant/rss.xml': { revisit: '6h', type: 'rss2', content: true, lang: 'zh-hant' },
        },
        content: {
            feed: {
                defaults: {
                    title: 'The Haroohie Translation Club\'s Blog',
                    description: 'Blog posts written by the various staff members of the Haroohie Translation Club',
                    copyright: `CC-BY-SA 4.0 ${new Date().getFullYear()} by The Haroohie Translation Club`,
                    link: urlBase,
                    id: urlBase,
                    author: { name: 'The Haroohie Translation Club' },
                },
            },
            item: {
                templateRoots: [true, 'feedme'],
                mapping: [
                    ['link', '_path'],
                    ['image', 'image', (image : any) => image],
                ],                
                query: {
                    where: [
                        { _path: /^\/blog\/[^\/]+\/en$/ },
                    ]
                },
            },
            tags: [
                [/^(?=\/)/, urlBase],
                [/blog\/([^\/]+)\/en/, 'blog/$1']
            ]
        }
    },

    compatibilityDate: '2024-12-10'
};