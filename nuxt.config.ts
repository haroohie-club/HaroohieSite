// Nuxt config file (https://v3.nuxtjs.org/api/configuration/nuxt.config)
export default defineNuxtConfig({
    // Modules
    buildModules: ['@nuxtjs/google-fonts'],
    modules: ['nuxt-icon'],

    // Fonts
    googleFonts: {
        families: {
            Nunito: [400, 700],
        }
    },

    // GitHub pages
    target: 'static',
    router: {
        base: '/wiiiiam278.github.io/HaroohieSite/',
    },
})
