<template>
    <div id="blog-page">
        <div id="sidebar" class="box">
            <h2>Links</h2>
            <div id="links">
                <ButtonLink link="/" color="red" type="top-piece" icon="fa6-solid:house" fullwidth>Back home</ButtonLink>
                <ButtonLink link="/" color="discord" type="mid-piece" icon="fa6-brands:discord" fullwidth>Join our Discord!</ButtonLink>
                <ButtonLink link="/" color="twitter" type="bottom-piece" icon="fa6-brands:twitter" fullwidth>Follow on Twitter!</ButtonLink>
            </div>
            <h2>Blogs</h2>
            <BlogList />
        </div>
        <article class="box">
            <ContentDoc />
        </article>
    </div>
</template>

<style>
#blog-page {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto
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
}

img {
    max-height: 350px;
    max-width: 700px;
    margin: 0 auto;
    justify-self: center;
}

pre {
    background-color: var(--main-light-gray);
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>

<script>
definePageMeta({
    title: 'Blog Post',
    description: 'Just a blog post',
    layout: 'common'
})
</script>