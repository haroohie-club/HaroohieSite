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
                <Navbar />
            </template>
            <article>
                <ContentDoc :path="`/chokuretsu/serial-loops/docs/${route.params.slug.join('/')}/${locale}`">
                    <template v-slot="{ doc }">
                        <div class="navigation">
                            <span class="parent-crumb">
                                <SerialLoopsBreadcrumb v-if="(doc._path.split('/').length > 5)"
                                    :link="`/chokuretsu/serial-loops/docs/${doc._path.split('/')[4]}`"
                                    :path="`/chokuretsu/serial-loops/docs/${doc._path.split('/')[4]}/${locale}`"/>
                                <SerialLoopsBreadcrumb v-else link="/chokuretsu/serial-loops/docs/" :path="`/chokuretsu/serial-loops/docs/${locale}`" icon="fa6-solid:house">
                                    {{ $t('home') }}
                                </SerialLoopsBreadcrumb>
                            </span>
                            <span class="contextual-crumbs">
                                <SerialLoopsBreadcrumb v-if="doc.navigation.previous" :path="`${doc.navigation.previous}/${locale}`" :link="doc.navigation.previous" icon="fa6-solid:arrow-left" />
                                <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next" :path="`${doc.navigation.next}/${locale}`" icon="fa6-solid:arrow-right" />
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
                            <SerialLoopsBreadcrumb v-if="doc.navigation.previous" :link="doc.navigation.previous" :path="`${doc.navigation.previous}/${locale}`" icon="fa6-solid:arrow-left"/>
                            <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next" :path="`${doc.navigation.next}/${locale}`" icon="fa6-solid:arrow-right"/>
                        </div>
                    </template>
                    <template #not-found>
                        <h1>{{ $t('chokuretsu-sl-invalid-docs-page') }}</h1>
                        <p>{{ $t('chokuretsu-sl-invalid-docs-page-desc') }}</p>
                        <ButtonLink link="/chokuretsu/serial-loops/docs" color="red" icon="fa6-solid:file">Back
                        </ButtonLink>
                    </template>
                </ContentDoc>
            </article>
        </NuxtLayout>
    </div>
</template>

<style scoped>
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