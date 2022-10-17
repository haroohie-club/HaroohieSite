// Nuxt config file (https://v3.nuxtjs.org/api/configuration/nuxt.config)
export default defineNuxtConfig({
    // Modules
    buildModules: ['@nuxtjs/google-fonts'],
    modules: ['nuxt-icon', '@nuxt/content'],

    // Fonts
    googleFonts: {
        families: {
            'Nunito': [400, 700],
            'Notica Text': [700],
        }
    },

    // Pre render the sitemap
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/404.html']
        }
    },

    // App config
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Haroohie Translation Club',
            meta: [
                {
                    name: 'description',
                    content: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!'
                },
                {
                    name: 'og:title',
                    content: 'Haroohie Translation Club - Haruhi Game Translations!'
                },
                {
                    name: 'og:description',
                    content: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!'
                },
                {
                    name: 'og:site_name',
                    content: 'Haroohie Translation Club - Translating the Haruhi Suzumiya games into English!'
                },
                {
                    name: 'og:url',
                    content: 'https://haroohie.club/'
                },
                {
                    name: 'og:type',
                    content: 'product'
                },
                {
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    name: 'twitter:site',
                    content: '@haroohie'
                },
                {
                    name: 'twitter:title',
                    content: 'Haroohie Translation Club'
                },
                {
                    name: 'twitter:description',
                    content: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!'
                },
                {
                    name: 'twitter:image',
                    content: '/images/icon.png'
                },
                {
                    name: 'twitter:image:alt',
                    content: 'Suzumiya Haruhi no Chokuretsu logo overlaid with the SOS Brigade Mysterique Sign emblem'
                }
            ],
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
                'asm',
                'python'
            ]
        }
    }
})
