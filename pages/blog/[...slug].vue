<template>
    <div id="blog-page">
        <div id="sidebar" class="box">
            <h2>Links</h2>
            <div id="links">
                <SocialLinks />
            </div>
            <h2>Blogs</h2>
            <BlogList />
        </div>
        <article class="box">
            <ContentDoc v-slot="{ doc }">
                <div id="blog-top" v-if="doc.navigation">
                    <div id="sos-dan">
                        <img src="/images/sos-logo.png" />
                    </div>
                    <div id="metadata">
                        <h1>{{ doc.navigation.title }}</h1>
                        <div id="blog-data">
                            <div id="blog-author-date">
                                <IconifiedText icon="fa6-solid:newspaper">
                                    <i>Written by <NuxtLink :to="'/author/' + doc.navigation.author.toLowerCase()">{{ doc.navigation.author }}</NuxtLink> on {{ doc.navigation.publishedAt
                                    }}</i>
                                </IconifiedText>
                            </div>
                            <div id="blog-tags">
                                <IconifiedText icon="fa6-solid:tags">
                                    <i>Tags: </i>
                                    <span class="tag" v-for="tag of doc.navigation.tags">{{ tag }}</span>
                                </IconifiedText>
                            </div>
                        </div>
                    </div>
                </div>
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </article>
    </div>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Blog',
    layout: 'common'
})
</script>

<style scoped>
#blog-page {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto
}

#blog-top {
    display: flex;
    flex-direction: row;
}

#blog-top #sos-dan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0.75rem;
}

#sos-dan img {
    height: 50px;
    box-shadow: none !important;
}

#metadata {
    width: 100%;
}

#blog-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

#sidebar {
    width: 20%;
    margin-right: 0.5rem;
    padding-right: 1.5rem;
    height: fit-content !important;
}

.blog-tags .tag {
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.1rem 0.25rem;
    margin: 0 0.2rem;
}

.box {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: var(--main-shadow);
}


article .tag {
    margin-left: 0.5rem;
    padding: 0.2rem;
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
}

article {
    display: flex;
    flex-direction: column;
    width: 80%;
    width: 960px;
}
</style>

<style>
article img {
    max-height: 350px;
    max-width: 700px;
    border-radius: 0.5rem;
    box-shadow: var(--main-shadow);
}

article pre {
    background-color: var(--main-light-gray);
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>