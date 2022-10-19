<template>
    <NuxtLayout>
        <ContentDoc>
            <template v-slot="{ doc }">
                <div class="header" v-if="doc.navigation">
                    <div class="brigade-logo">
                        <img src="/images/sos-logo.png" />
                    </div>
                    <div class="info">
                        <h1>{{ doc.title }}</h1>
                        <div class="meta">
                            <div class="date">
                                <IconifiedText icon="fa6-solid:newspaper">
                                    Written by <NuxtLink :to="'/author/' + doc.navigation.author.toLowerCase()">{{
                                    doc.navigation.author }}</NuxtLink> on {{
                                        publishedAt(doc.navigation.year, doc.navigation.month,
                                        doc.navigation.day) }}
                                </IconifiedText>
                            </div>
                            <div class="tags">
                                <IconifiedText icon="fa6-solid:tags">Tags:</IconifiedText>
                                <span class="tag" v-for="tag of doc.navigation.tags">
                                    <NuxtLink :to="'/tag/' + tag">{{ tag }}</NuxtLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ContentRenderer :value="doc" />
            </template>
            <template #not-found>
                <h1>Post not found</h1>
                <p>Could not find a blog post at this address.</p>
                <ButtonLink link="/blog" color="red" icon="fa6-solid:paper-plane">Back to the Blog
                </ButtonLink>
            </template>
        </ContentDoc>
    </NuxtLayout>
</template>

<script setup>
useHead({
    titleTemplate: (blogTitle) => { 
        return blogTitle ? `${blogTitle} - Haroohie Translation Club Blog` : `Haroohie Translation Club Blog`;
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
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
    }
}
</script>