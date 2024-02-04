import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://haroohie.club'
  })

  for (const doc of docs) {
    const lang = doc._path?.substring(doc._path?.lastIndexOf('/')) == '/en-us' ? '' : doc._path?.substring(doc._path?.lastIndexOf('/'))
    sitemap.write({
      url: (lang ?? '') + doc._path?.substring(0, doc._path?.lastIndexOf('/')),
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
