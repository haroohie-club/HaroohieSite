<template>
    <article>
        <ContentDoc />
    </article>
</template>

<style>
article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 1000px;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    /* Drop shadow */
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
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