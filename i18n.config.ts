import enUS from './locales/en-US.json'
import enGB from './locales/en-GB.json'
import ja from './locales/ja.json'
import zhHans from './locales/zh-Hans.json'

export default {
    legacy: false,
    fallbackLocale: {
        'zh-Hant': ['zh-Hans'],
        'pt-PT': ['pt-BR'],
        'en-CA': ['en-GB'],
        'en-GB': ['en-US'],
        'default': ['en-US']
    },
    messages: {
        'en-us': enUS,
        'en-gb': enGB,
        'ja': ja,
        'zh-hans': zhHans
    }
}