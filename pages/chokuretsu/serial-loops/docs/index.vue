<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
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
            <ContentDoc :path="`/chokuretsu/serial-loops/docs/${locale}`">
                <template v-slot="{ doc }">
                    <article>
                        <div class="breadcrumbs">
                            <SerialLoopsBreadcrumb :link="'/chokuretsu/serial-loops'" icon="fa6-solid:arrow-left">
                                {{ $t('chokuretsu-sl-home' )}}
                            </SerialLoopsBreadcrumb>
                            <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next"
                                icon="fa6-solid:arrow-right">
                                {{ doc.navigation.next.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                    doc.navigation.next.split('/').slice(-1)[0].slice(1) }}
                            </SerialLoopsBreadcrumb>
                        </div>
                        <ContentRenderer :value="doc" />
                        <SerialLoopsBreadcrumb class="next-page" v-if="doc.navigation.next" :link="doc.navigation.next"
                            icon="fa6-solid:arrow-right">
                            {{ doc.navigation.next.split('/').slice(-1)[0].charAt(0).toUpperCase() +
                                doc.navigation.next.split('/').slice(-1)[0].slice(1).replaceAll("-", " ") }}
                        </SerialLoopsBreadcrumb>
                    </article>
                </template>
            </ContentDoc>
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

#nagato-book {
    display: flex;
    justify-content: center;
    width: 100%;
}

#nagato-book img {
    max-width: 80px;
}

.breadcrumbs {
    display: flex;
    justify-content: space-between;
}

.next-page {
    margin-left: auto;
}
</style>

<script>
definePageMeta({
    title: 'Serial Loops Docs',
    description: 'Docs for our Suzumiya Haruhi no Chokuretsu Level Editor',
    layout: 'serial-loops'
})
</script>