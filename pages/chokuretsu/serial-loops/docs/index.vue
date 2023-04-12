<template>
    <NuxtLayout>
        <template #top>
            <div id="topbar">
                <div id="logo">
                    <TitleGraphic graphic="club-logo" to="/" />
                </div>
            </div>
        </template>
        <article>
            <ContentDoc>
                <template v-slot="{ doc }">
                    <ContentRenderer :value="doc" />
                </template>
                <template #not-found>
                    <h1>Invalid docs page</h1>
                    <p>Could not find a docs page at this address.</p>
                    <ButtonLink link="/chokuretsu/serial-loops/docs" color="red" icon="fa6-solid:house">Back to Start
                    </ButtonLink>
                </template>
            </ContentDoc>
        </article>
    </NuxtLayout>
</template>


<style scoped>
#topbar {
    margin: 0 auto;
    padding: 0;
}

#topbar #logo {
    max-width: 500px;
    width: 80vw;
    padding: 0.5rem;
}

#nagato-book {
    display: flex;
    justify-content: center;
    width: 100%;
}

#nagato-book img {
    max-width: 80px;
}
</style>

<script>
definePageMeta({
    title: 'Serial Loops Docs',
    description: 'Docs for our Suzumiya Haruhi no Chokuretsu Level Editor',
    layout: 'serial-loops'
})
</script>