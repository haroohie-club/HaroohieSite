// Nuxt config file (https://v3.nuxtjs.org/api/configuration/nuxt.config)
export default defineNuxtConfig({
    // Modules
    buildModules: ['@nuxtjs/google-fonts'],
    modules: ['nuxt-icon', '@nuxt/content'],

    // Fonts
    googleFonts: {
        families: {
            Nunito: [400, 700],
        }
    },

    content: {
        // https://content.nuxtjs.org/api/configuration
    },

    // Static rendering
    ssr: true
})
