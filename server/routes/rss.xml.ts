import { serverQueryContent } from "#content/server";
import RSS from 'rss'

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'Haroohie Translation Club Blog',
        site_url: 'https://haroohie.club/',
        feed_url: 'https://haroohie.club/rss.xml',
        image_url: 'https://haroohie.club/images/sos-logo.png',
    })

    const docs = await serverQueryContent(event).find();
    const blogPosts = docs.filter((doc) => doc._path.includes('/blog/'))
        .sort().reverse();
    

    for (const doc of blogPosts) {
        feed.item({
            title: doc.title ?? '-',
            url: `https://haroohie.club${doc._path}`,
            date: `${doc.navigation.year}-${doc.navigation.month}-${doc.navigation.day}`,
            description: doc.description,
            custom_elements: [
                {
                    'image': [
                        { 'url': doc.navigation.image },
                        { 'title': doc.title },
                        { 'link': 'https://haroohie.club/blog' },
                    ]
                }
            ]
        })
    }

    const feedString = feed.xml({ indent: true });
    event.res.setHeader('content-type', 'text/xml');
    event.res.end(feedString);
})