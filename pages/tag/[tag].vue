<template>
    <NuxtLayout>
        <div class="box" id="container">
            <h2>
                <IconifiedText icon="fa6-solid:tag">Latest posts tagged with "{{$route.params.tag}}"</IconifiedText>
            </h2>
            <BlogTagStack :tag="$route.params.tag" />
            <ButtonLink link="/" color="red" icon="fa6-solid:house">Back to Home</ButtonLink>
        </div>
    </NuxtLayout>
</template>

<script>
definePageMeta({
    title: 'Haroohie Translation Club - Tag',
    layout: 'common'
})
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 80%;
    justify-content: center;
    margin: 0 auto
}

.box {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: var(--main-shadow);
}
</style>