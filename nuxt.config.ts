import { readFileSync } from 'node:fs'
const urlBase = "https://haroohie.club"

// Nuxt config file (https://nuxt.com/docs/getting-started/configuration)
export default {
  // Modules
  modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/google-fonts', '@nuxtjs/i18n', 'nuxt-feedme', '@nuxt/scripts', 'nuxt-toast', 'nuxt-echarts'],

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
          routes: ['/sitemap.xml', '/404.html', '/rss.xml', '/de/rss.xml', '/fr/rss.xml', '/it/rss.xml', '/pt-br/rss.xml', '/ru/rss.xml', '/zh-hans/rss.xml', '/zh-hant/rss.xml']
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
          { code: 'de', iso: 'de', file: 'locales/de.json', dir: 'ltr' },
          { code: 'en', iso: 'en', file: 'locales/en.json', dir: 'ltr' },
          { code: 'it', iso: 'it-IT', file: 'locales/it.json', dir: 'ltr' },
          { code: 'pt-br', iso: 'pt-BR', file: 'locales/pt-br.json', dir: 'ltr' },
          { code: 'ru', iso: 'ru', file: 'locales/ru.json', dir: 'ltr' },
          { code: 'zh-hans', iso: 'zh-Hans', file: 'locales/zh-Hans.json', dir: 'ltr' },
          { code: 'zh-hant', iso: 'zh-Hant', file: 'locales/zh-Hant.json', dir: 'ltr' },
      ],
      defaultLocale: 'en'
  },

  echarts: {
      renderer: ['svg', 'canvas'],
      charts: ['BarChart', 'PieChart', 'LineChart', 'ScatterChart', 'HeatmapChart', 'GaugeChart'],
      components: ['DatasetComponent', 'GridComponent', 'TooltipComponent', 'TitleComponent', 'LegendComponent', 'VisualMapComponent'],
      features: ['LabelLayout', 'UniversalTransition'],
  },

  feedme: {
      feeds: {
          '/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/en$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/en/, 'blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/ar/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/ar$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/de/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/de$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/fr/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/fr$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/it/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/it$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/pt-br/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/pt-br$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/ru/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/ru$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/zh-hans/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/zh-hans$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
          '/zh-hant/rss.xml': {
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
                      ['date', 'navigation', (nav: any) => new Date(nav.year, nav.month - 1, nav.day)],
                      ['description', 'navigation', (nav: any) => `<img src="/images/blog/${nav.image}"/><br/>${nav.description}`],
                  ],
                  query: {
                      where: [
                          { _path: /^\/blog\/[^\/]+\/zh-hant$/ },
                      ]
                  },
              },
              tags: [
                  [/^(?=\/)/, urlBase],
                  [/blog\/([^\/]+)\/([\w-]+)$/, '$2/blog/$1'],
              ],
              revisit: '6h',
              content: true
          },
      },
  },

  compatibilityDate: '2024-12-10',

  devtools: {
    timeline: {
      enabled: true
    }
  }
};