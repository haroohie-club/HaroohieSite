import { serverQueryContent } from "#content/server";
import RSS from 'rss'
import ufs from 'url-file-size'

export default defineEventHandler(async (event) => {
    const locale = 'en'
    const docs = await serverQueryContent(event).find();
    const blogPosts = docs.filter((doc) => doc._path?.includes('/blog/')).filter(b => b.navigation).filter(b => b._path?.endsWith(locale))
        .sort().reverse();

    const feed = new RSS({
        title: 'Haroohie Translation Club Blog',
        language: 'en',
        site_url: 'https://haroohie.club/',
        feed_url: "https://haroohie.club " + (locale ?? '') + "/rss.xml`",
        image_url: 'https://haroohie.club/images/sos-logo.png',
    })

    for (const doc of blogPosts) {
        feed.item({
            title: doc.title ?? '-',
            url: `https://haroohie.club${doc._path?.substring(0, doc._path?.lastIndexOf('/'))}`,
            date: `${doc.navigation.year}-${doc.navigation.month}-${doc.navigation.day}`,
            description: doc.description,
            enclosure: {
                url: `https://haroohie.club/images/blog/${doc.navigation.image}`,
                type: 'image/png',
                size: await ufs(`https://haroohie.club/images/blog/${doc.navigation.image}`)
            }
        })
    }

    const feedString = feed.xml({ indent: true });
    event.node.res.setHeader('content-type', 'text/xml');
    return feedString;
})