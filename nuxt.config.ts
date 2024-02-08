import { readFileSync } from 'fs'
import { join } from 'path'

// Nuxt config file (https://nuxt.com/docs/getting-started/configuration)
export default {
    // Modules
    modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/i18n'],

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
            routes: ['/sitemap.xml', '/404.html', '/rss.xml', 'de/rss.xml', '/it/rss.xml', '/zh-hans/rss.xml', '/zh-hant/rss.xml']
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
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-light',
            preload: [
                'c',
                'cpp',
                'csharp',
                'python',
                {
                    name: 'arm',
                    ...JSON.parse(readFileSync('./tmLanguages/arm.tmLanguage.json', 'utf8'))
                }
            ]
        }
    },

    i18n: {
        detectBrowserLanguage: {
            useCookie: false,
            redirectOn: 'root',
        },
        locales: [
            { code: 'de', iso: 'de', file: 'locales/de.json', dir: 'ltr' },
            { code: 'en', iso: 'en', file: 'locales/en.json', dir: 'ltr' },
            { code: 'it', iso: 'it-IT', file: 'locales/it.json', dir: 'ltr' },
            { code: 'zh-hans', iso: 'zh-Hans', file: 'locales/zh-Hans.json', dir: 'ltr' },
            { code: 'zh-hant', iso: 'zh-Hant', file: 'locales/zh-Hant.json', dir: 'ltr' },
        ],
        defaultLocale: 'en'
    }
}