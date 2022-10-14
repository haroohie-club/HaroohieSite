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
            <ContentDoc>
                <template v-slot="{ doc }">
                    <div id="blog-top">
                        <div id="sos-dan">
                            <img src="/images/sos-logo.png" />
                        </div>
                        <div>
                            <h1>{{ doc.navigation.title }}</h1>
                            <div id="blog-data">
                                <div id="blog-author-date">
                                    <IconifiedText icon="fa6-solid:newspaper">
                                        <i>Written by {{ doc.navigation.author }} on {{ doc.navigation.publishedAt
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
                </template>
                <template #not-found>
                    <p>Blog entry not found :-(</p>
                </template>
            </ContentDoc>
        </article>
    </div>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Blog',
    description: 'Welcome to the Haroohie Translation Club! We\'re dedicated to translating games from the Haruhi Suzumiya series into English!',
    layout: 'common'
})
</script>

<style>
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

#blog-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.tag {
    margin-left: 0.5rem;
    padding: 0.2rem;
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
}

.box {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    padding-right: 1.5rem;

    /* Drop shadow */
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
}

#sidebar {
    width: 20%;
    margin-right: 1rem;
    height: fit-content !important;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    width: 960px;
}

img {
    max-height: 350px;
    max-width: 700px;
    border-radius: 0.5rem;

    /* Drop shadow */
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
}

pre {
    background-color: var(--main-light-gray);
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>