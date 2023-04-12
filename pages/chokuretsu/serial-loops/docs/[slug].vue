<template>
    <NuxtLayout>
        <div id="topbar">
            <div id="logo">
                <TitleGraphic graphic="club-logo" to="/" />
            </div>
        </div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1 v-if="doc.navigation"> {{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
                <ChokuretsuGuidePagination :doc="doc" />
            </template>
            <template #not-found>
                <h1>Invalid docs page</h1>
                <p>Could not find a docs page at this address.</p>
                <ButtonLink link="/chokuretsu/serial-loops/docs" color="red" icon="fa6-solid:file">Back
                </ButtonLink>
            </template>
        </ContentDoc>
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

#sidebar {
    background-color: var(--main-light-gray);
    min-height: inherit;
    width: 15rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 1rem;
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