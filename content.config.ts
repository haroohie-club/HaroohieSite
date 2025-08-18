import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogPostSchema = z.object({
    title: z.string(),
    description: z.string(),
    navigation: z.object({
        description: z.string(),
        author: z.string(),
        translator: z.string().optional(),
        year: z.number(),
        month: z.number(),
        day: z.number(),
        tags: z.array(z.string()),
        image: z.string()
    }),
    head: z.object({
        meta: z.array(
            z.object({
                property: z.string(),
                content: z.string()
            })
        )
    })
});

const authorSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.object({
        name: z.string(),
        github: z.string().optional(),
        youtube: z.string().optional(),
        bilibili: z.string().optional(),
        twitter: z.string().optional(),
        bluesky: z.string().optional(),
        mastodon: z.string().optional(),
        instagram: z.string().optional(),
        threads: z.string().optional(),
        pixelfed: z.string().optional(),
        website: z.string().optional()
    })
})

const friendSchema = z.object({
    title: z.string(),
    friend: z.object({
        name: z.string(),
        original: z.string().optional(),
        icon: z.string(),
        color: z.string(),
        website: z.string().optional(),
        discord: z.string().optional(),
        github: z.string().optional(),
        tumblr: z.string().optional(),
        youtube: z.string().optional()
    })
})

const chokuGuideSchema = z.object({
    title: z.string(),
    navigation: z.object({
        current: z.string(),
        previous: z.string().optional(),
        next: z.string().optional()
    })
})

const serialLoopsDocsSchema = z.object({
    title: z.string(),
    navigation: z.object({
        icon: z.string().optional(),
        faicon: z.string().optional(),
        previous: z.string().optional(),
        next: z.string().optional()
    })
})

export default defineContentConfig({
  collections: {
    en_pages: defineCollection({
      type: 'page',
      source: {
        include: 'en/**/*.md',
        exclude: [ 'en/blog/**', 'en/chokuretsu/guide/**', 'en/chokuretsu/serial-loops/docs/**' ],
        prefix: '/'
      }
    }),
    ar_pages: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**/*.md',
        exclude: [ 'ar/blog/**', 'ar/chokuretsu/guide/**', 'ar/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    de_pages: defineCollection({
      type: 'page',
      source: {
        include: 'de/**/*.md',
        exclude: [ 'de/blog/**', 'de/chokuretsu/guide/**', 'de/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    es_pages: defineCollection({
      type: 'page',
      source: {
        include: 'es/**/*.md',
        exclude: [ 'es/blog/**', 'es/chokuretsu/guide/**', 'es/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    fr_pages: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**/*.md',
        exclude: [ 'fr/blog/**', 'fr/chokuretsu/guide/**', 'fr/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    it_pages: defineCollection({
      type: 'page',
      source: {
        include: 'it/**/*.md',
        exclude: [ 'it/blog/**', 'it/chokuretsu/guide/**', 'it/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    ja_pages: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**/*.md',
        exclude: [ 'ja/blog/**', 'ja/chokuretsu/guide/**', 'ja/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    pt_br_pages: defineCollection({
      type: 'page',
      source: {
        include: 'pt-br/**/*.md',
        exclude: [ 'pt-br/blog/**', 'pt-br/chokuretsu/guide/**', 'pt-br/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    ru_pages: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**/*.md',
        exclude: [ 'ru/blog/**', 'ru/chokuretsu/guide/**', 'ru/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    zh_hans_pages: defineCollection({
      type: 'page',
      source: {
        include: 'zh-hans/**/*.md',
        exclude: [ 'zh-hans/blog/**', 'zh-hans/chokuretsu/guide/**', 'zh-hans/chokuretsu/serial-loops/docs/**' ],
      }
    }),
    zh_hant_pages: defineCollection({
      type: 'page',
      source: {
        include: 'zh-hant/**/*.md',
        exclude: [ 'zh-hant/blog/**', 'zh-hant/chokuretsu/guide/**', 'zh-hant/chokuretsu/serial-loops/docs/**' ],
      }
    }),

    en_authors: defineCollection({
      type: 'data',
      source: 'en/author/*.yml',
      schema: authorSchema
    }),

    en_blogs: defineCollection({
      type: 'page',
      source: {
        include: 'en/blog/**/*.md',
        exclude: ['index.md'],
        prefix: '/blog'
      },
      schema: blogPostSchema
    }),

    en_guide: defineCollection({
      type: 'page',
      source: {
        include: 'en/chokuretsu/guide/**/*.md',
        prefix: '/chokurestu/guide'
      },
      schema: chokuGuideSchema
    }),

    en_sl_docs: defineCollection({
      type: 'page',
      source: {
        include: 'en/chokuretsu/serial-loops/docs/**/*.md',
        prefix: '/chokurestu/serial-loops/docs'
      },
      schema: serialLoopsDocsSchema
    }),

    en_friends: defineCollection({
        type: 'data',
        source: 'en/friend/*.yml',
        schema: friendSchema
    })
  }
})