import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    scrollBehavior(to, _, savedPosition) {
        const nuxtApp = useNuxtApp();

        // If history back
        if (savedPosition) {
            // Handle Suspense resolution
            return new Promise((resolve) => {
                nuxtApp.hooks.hookOnce("page:finish", () => {
                    setTimeout(() => resolve(savedPosition), 350);
                });
            });
        }
        // Scroll to heading on click
        if (to.hash) {
            setTimeout(() => {
                const el = document.querySelector(to.hash) as any;

                return window.scrollTo({
                    top: el.offsetTop,
                    behavior: "smooth",
                });
            });
            return;
        }

        // Scroll to top of window
        return { top: 0 };
    }
}