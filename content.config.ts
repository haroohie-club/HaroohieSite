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
        exclude: [ 'en/blog/posts/**', 'en/chokuretsu/guide/**', 'en/chokuretsu/serial-loops/docs/**' ],
      }
    })
  }
})