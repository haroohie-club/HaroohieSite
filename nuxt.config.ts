import { readFileSync } from 'node:fs'
const urlBase = "https://haroohie.club"

// Nuxt config file (https://nuxt.com/docs/getting-started/configuration)
export default {
    // Modules
    modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/scripts'],

    imports: {
        presets: [
            {
                from: 'vue-i18n',
                imports: ['t', 'locale', 'availableLocales']
            }
        ]
    },

    // Fonts
    googleFonts: {
        download: true,
        inject: true,
        families: {
            'Nunito': [400, 700],
            'Notica Text': [700],
            'Noto Sans SC': [400],
        }
    },

    // Pre render the sitemap, 404, and RSS feeds
    nitro: {
        prerender: {
            routes: ['/404.html']
        }
    },

    // App config
    app: {
        head: {
            charset: 'utf-8',
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
            { code: 'de', iso: 'de', file: 'de.json', dir: 'ltr' },
            { code: 'en', iso: 'en', file: 'en.json', dir: 'ltr' },
            { code: 'it', iso: 'it-IT', file: 'it.json', dir: 'ltr' },
            { code: 'pt-br', iso: 'pt-BR', file: 'pt-br.json', dir: 'ltr' },
            { code: 'ru', iso: 'ru', file: 'ru.json', dir: 'ltr' },
            { code: 'zh-hans', iso: 'zh-Hans', file: 'zh-Hans.json', dir: 'ltr' },
            { code: 'zh-hant', iso: 'zh-Hant', file: 'zh-Hant.json', dir: 'ltr' },
        ],
        defaultLocale: 'en'
    },

    compatibilityDate: '2024-12-10'
};