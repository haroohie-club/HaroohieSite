<script setup>
function fixupChineseLocale(locale) {
    if (locale == "zh-hans") {
        return "zh-CN";
    } else if (locale == "zh-hant") {
        return "zh-TW";
    } else {
        return locale;
    }
}
</script>

<template>
    <div>
        <Giscus
            id="comments"
            repo="haroohie-club/HaroohieSite"
            repoId="R_kgDOG5Llsw"
            category="Announcements"
            categoryId="DIC_kwDOG5Lls84Cc20X"
            mapping="specific"
            :term="slug"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            :lang="fixupChineseLocale(lang)"
        />
    </div>
</template>

<script>
import Giscus from '@giscus/vue';

export default {
    components: { Giscus },
    name: 'GiscusComments',
    props: {
        slug: {
            type: String,
            required: true,
        },
        lang: {
            type: String,
            required: true
        }
    }
}
</script>