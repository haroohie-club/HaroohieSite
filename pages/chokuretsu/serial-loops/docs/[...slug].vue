<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const route = useRoute()
</script>
<template>
    <div>
        <NuxtLayout>
            <template #top>
                <div id="topbar">
                    <div id="logo">
                        <TitleGraphic graphic="club-logo" to="/" />
                    </div>
                </div>
            </template>
            <article>
                <ContentDoc :path="`/chokuretsu/serial-loops/docs/${route.params.slug.join('/')}/${locale}`">
                    <template v-slot="{ doc }">
                        <div class="navigation">
                            <span class="parent-crumb">
                                <SerialLoopsBreadcrumb v-if="(doc._path.split('/').length > 5)"
                                    :link="`/chokuretsu/serial-loops/docs/${doc._path.split('/')[4]}`">
                                    {{ doc._path.split('/')[4].charAt(0).toUpperCase() + doc._path.split('/')[4].slice(1) }}
                                </SerialLoopsBreadcrumb>
                                <SerialLoopsBreadcrumb v-else link="/chokuretsu/serial-loops/docs/" icon="fa6-solid:house">
                                    Home
                                </SerialLoopsBreadcrumb>
                            </span>
                            <span class="contextual-crumbs">
                                <SerialLoopsBreadcrumb v-if="doc.navigation.previous" :link="doc.navigation.previous"
                                    icon="fa6-solid:arrow-left">
                                    {{ doc.navigation.previous.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                        doc.navigation.previous.split('/').slice(-1)[0].slice(1).replaceAll("-", " ") }}
                                </SerialLoopsBreadcrumb>
                                <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next"
                                    icon="fa6-solid:arrow-right">
                                    {{ doc.navigation.next.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                        doc.navigation.next.split('/').slice(-1)[0].slice(1).replaceAll("-", " ") }}
                                </SerialLoopsBreadcrumb>
                            </span>
                        </div>
                        <div class="title">
                            <span class="icon">
                                <img v-if="doc.navigation.icon" :src="doc.navigation.icon" />
                                <Icon v-else-if="doc.navigation.faicon" :name="doc.navigation.faicon" />
                            </span>
                            <b class="sl-header">{{ doc.title }}</b>
                        </div>
                        <ContentRenderer :value="doc" />
                        <div class="pagination-buttons">
                            <SerialLoopsBreadcrumb v-if="doc.navigation.previous" :link="doc.navigation.previous"
                                icon="fa6-solid:arrow-left">
                                {{ doc.navigation.previous.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                    doc.navigation.previous.split('/').slice(-1)[0].slice(1).replaceAll("-", " ") }}
                            </SerialLoopsBreadcrumb>
                            <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next"
                                icon="fa6-solid:arrow-right">
                                {{ doc.navigation.next.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                    doc.navigation.next.split('/').slice(-1)[0].slice(1).replaceAll("-", " ") }}
                            </SerialLoopsBreadcrumb>
                        </div>
                    </template>
                    <template #not-found>
                        <h1>Invalid docs page</h1>
                        <p>Could not find a docs page at this address.</p>
                        <ButtonLink link="/chokuretsu/serial-loops/docs" color="red" icon="fa6-solid:file">Back
                        </ButtonLink>
                    </template>
                </ContentDoc>
            </article>
        </NuxtLayout>
    </div>
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

.title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.icon {
    margin-right: 0.5rem;
    font-size: 2rem;
    color: var(--sl-green);
}

.icon img {
    margin-top: 0.6rem;
    max-width: 1.8rem;
    margin-right: 0.4rem;
    box-shadow: none !important;
    border-radius: 0 !important;
}

.navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.navigation .contextual-crumbs {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.pagination-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
</style>

<script>
definePageMeta({
    title: 'Serial Loops Docs',
    description: 'Docs for our Suzumiya Haruhi no Chokuretsu Level Editor',
    layout: 'serial-loops'
})
</script>