<template>
    <NuxtLayout>
        <div id="tag-container">
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
    layout: 'blog'
})
</script>