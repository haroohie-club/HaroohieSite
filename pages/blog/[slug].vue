<template>
    <div>
        <NuxtLayout>
            <ContentDoc :path="`/blog/${route.params.slug}/${locale}`">
                <template v-slot="{ doc }">
                    <div class="header" v-if="doc.navigation">
                        <div class="brigade-logo">
                            <img src="/images/sos-logo.png" class="modal-exclude" />
                        </div>
                        <div class="info">
                            <h1>{{ doc.title }}</h1>
                            <div class="meta">
                                <div class="date">
                                    <IconifiedText icon="fa6-solid:newspaper">
                                        {{ $t('byline-pre') }}<NuxtLink :to="localePath('/author/' + doc.navigation.author.replace(' ', '-').toLowerCase())">{{
                                            doc.navigation.author }}</NuxtLink>{{ $t('byline-post') }}{{ $t('on-date', { date: $t('date-short', { year: doc.navigation.year, month: $t(getMonth(doc.navigation.month)),
            day: doc.navigation.day }) }) }}
                                    </IconifiedText>
                                </div>
                                <div class="tags">
                                    <IconifiedText icon="fa6-solid:tags">{{ $t('tags-header') }}</IconifiedText>
                                    <span class="tag" v-for="tag of doc.navigation.tags">
                                        <NuxtLink :to="localePath('/tag/' + tag)">{{ $t(`${tag.replace(' ', '-')}-tag`) }}</NuxtLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContentRenderer :value="doc" />
                    </div>
                    <div id="author-details">
                        <ContentDoc :path="`/author/${doc.navigation.author.replace(' ', '-').toLowerCase()}/${locale}`" :head="false">
                            <template v-slot="doc">
                                <hr />
                                <i>
                                    <ContentRenderer :value="doc.doc" />
                                </i>
                                <AuthorSocials :author="doc.doc.author" />
                                <hr />
                            </template>
                        </ContentDoc>
                    </div>
                    <div v-if="doc.navigation.translator" id="translator-details">
                        <div>
                            {{ $t('translated-by-pre') }}<NuxtLink :to="localePath(`/author/${doc.navigation.translator.replace(' ', '-').toLowerCase()}`)">{{ doc.navigation.translator }}</NuxtLink>{{ $t('translated-by-post') }}
                        </div>
                        <ContentDoc :path="`/author/${doc.navigation.translator.replace(' ', '-').toLowerCase()}/${locale}`" :head="false">
                            <template v-slot="doc">
                                <i>
                                    <ContentRenderer :value="doc.doc" />
                                </i>
                                <AuthorSocials :author="doc.doc.author" />
                                <hr />
                            </template>
                        </ContentDoc>
                    </div>
                    <div id="giscus-comments">
                        <GiscusComments :slug="route.params.slug" :lang="locale" />
                    </div>
                </template>
                <template #not-found>
                    <h1>{{ $t('post-not-found') }}</h1>
                    <p>{{ $t('post-not-found-desc') }}</p>
                    <ButtonLink :link="localePath('/blog')" color="red" icon="fa6-solid:paper-plane">{{ $t('back-to-blog' )}}
                    </ButtonLink>
                </template>
            </ContentDoc>
        </NuxtLayout>
    </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

useHead({
    titleTemplate: (blogTitle) => {
        return blogTitle ? `${blogTitle} - Haroohie Translation Club` : "Haroohie Translation Club";
    }
})
</script>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Blog',
    layout: 'blog'
})

export default {
    methods: {
        publishedAt(year, month, day) {
            return day + " " + getMonth(month) + " " + year;
        }
    }
}

function getMonth(month) {
    switch (month) {
        case 1:
            return "january-short";
        case 2:
            return "february-short";
        case 3:
            return "march-short";
        case 4:
            return "april-short";
        case 5:
            return "may-short";
        case 6:
            return "june-short";
        case 7:
            return "july-short";
        case 8:
            return "august-short";
        case 9:
            return "september-short";
        case 10:
            return "october-short";
        case 11:
            return "november-short";
        case 12:
            return "december-short";
    }
}
</script>