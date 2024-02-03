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

    // Pre render the sitemap
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/404.html', '/rss.xml']
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
            { code: 'en-us', iso: 'en-US', file: 'locales/en-US.json', dir: 'ltr' },
            { code: 'en-gb', iso: 'en-GB', file: 'locales/en-GB.json', dir: 'ltr' },
            { code: 'it', iso: 'it-IT', file: 'locales/it.json', dir: 'ltr' },
            { code: 'ja', iso: 'ja-JA', file: 'locales/ja.json', dir: 'ltr' },
            { code: 'zh-hans', iso: 'zh-Hans', file: 'locales/zh-Hans.json', dir: 'ltr' },
        ],
        defaultLocale: 'en-us'
    }
}