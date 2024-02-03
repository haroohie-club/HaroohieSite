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
                                        {{ $t('byline-pre') }}<NuxtLink :to="localePath('/author/' + doc.navigation.author.toLowerCase())">{{
                                            doc.navigation.author }}</NuxtLink>{{ $t('byline-post') }}{{ $t('on-date', { date: $t('date-short', { year: doc.navigation.year, month: $t(getMonth(doc.navigation.month)),
            day: doc.navigation.day }) }) }}
                                    </IconifiedText>
                                </div>
                                <div class="tags">
                                    <IconifiedText icon="fa6-solid:tags">Tags:</IconifiedText>
                                    <span class="tag" v-for="tag of doc.navigation.tags">
                                        <NuxtLink :to="localePath('/tag/' + tag)">{{ tag }}</NuxtLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContentRenderer :value="doc" />
                    </div>
                    <div id="author-details">
                        <ContentDoc :path="`/author/${doc.navigation.author.toLowerCase()}/${locale}`" :head="false">
                            <template v-slot="doc">
                                <hr />
                                <i>
                                    <ContentRenderer :value="doc.doc" />
                                </i>
                                <AuthorSocials :author="doc.doc.author" />
                            </template>
                        </ContentDoc>
                    </div>
                </template>
                <template #not-found>
                    <h1>Post not found</h1>
                    <p>Could not find a blog post at this address.</p>
                    <ButtonLink :link="localePath('/blog')" color="red" icon="fa6-solid:paper-plane">Back to the Blog
                    </ButtonLink>
                </template>
            </ContentDoc>
        </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: (blogTitle) => {
        return blogTitle ? `${blogTitle} - Haroohie Translation Club Blog` : `Haroohie Translation Club Blog`;
    }
})
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
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