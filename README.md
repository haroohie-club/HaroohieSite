# haroohie.club site
![Members of the cast!](public/images/chokuretsu/characters.png)

The site for the [Haroohie Translation Club](https://haroohie.club), including the blog, project pages & documentation. Built with vue via [Nuxt@v3](https://v3.nuxtjs.org) and hosted on GitHub pages.

## Running
Make sure to install the dependencies:
```bash
npm install
```

Start the development server locally on http://localhost:3000 using:
```bash
npm run dev
```

We deploy statically on GitHub pages. To get nuxt to generate for static hosting:
```bash
npm run generate
```

## Adding a New Language
Our site is localized with nuxt-i18n and translations are handled via Weblate. When adding a new language, Weblate will handle the creation of most of the necessary files. However, you will need to:
* Create a file in `server/routes/{lang}/rss.xml.ts` and copy one of the other rss feeds into it, changing the lang code to the appropriate value
* Add that RSS feed to `nuxt.config.ts`
* Add the new language to the `i18n` block in `nuxt.config.ts`