import { defineNuxtPlugin } from '#app'
import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueMatomo, {
    host: 'https://matomo.haroohie.club/',
    siteId: 1
  });
  
  new Vue({
    el: '#app',
    router,
    components: {App},
    template: ''
  })
})

window._paq.push(['trackPageView']); // To track a page view