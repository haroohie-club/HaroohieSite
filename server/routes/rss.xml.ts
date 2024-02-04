import { serverQueryContent } from "#content/server";
import RSS from 'rss'

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'Haroohie Translation Club Blog',
        language: 'en',
        site_url: 'https://haroohie.club/',
        feed_url: 'https://haroohie.club/rss.xml',
        image_url: 'https://haroohie.club/images/sos-logo.png',
    })

    const docs = await serverQueryContent(event).find();
    const blogPosts = docs.filter((doc) => doc._path?.includes('/blog/')).filter(b => b.navigation)
        .sort().reverse();
    

    for (const doc of blogPosts) {
        const lang = doc._path?.substring(doc._path?.lastIndexOf('/')) == '/en' ? '' : doc._path?.substring(doc._path?.lastIndexOf('/'))
        feed.item({
            title: doc.title ?? '-',
            url: `https://haroohie.club${(lang ?? '') + doc._path?.substring(0, doc._path?.lastIndexOf('/'))}`,
            date: `${doc.navigation.year}-${doc.navigation.month}-${doc.navigation.day}`,
            description: doc.description,
            custom_elements: [
                {
                    'media:content': [
                        { 'url': `https://haroohie.club/images/blog/${doc.navigation.image}` },
                        { 'medium': 'image' },
                        { 'type': 'image/png' },
                    ]
                }
            ]
        })
    }

    const feedString = feed.xml({ indent: true });
    event.res.setHeader('content-type', 'text/xml');
    event.res.end(feedString);
})