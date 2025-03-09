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
                <Navbar />
            </template>
            <ContentDoc :path="`/chokuretsu/serial-loops/docs/${locale}`">
                <template v-slot="{ doc }">
                    <article>
                        <div class="breadcrumbs">
                            <SerialLoopsBreadcrumb :link="'/chokuretsu/serial-loops'" icon="fa6-solid:arrow-left">
                                {{ $t('chokuretsu-sl-home' )}}
                            </SerialLoopsBreadcrumb>
                            <SerialLoopsBreadcrumb v-if="doc.navigation.next" :link="doc.navigation.next"
                                :path="`${doc.navigation.next}/${locale}`" icon="fa6-solid:arrow-right"/>
                        </div>
                        <ContentRenderer :value="doc" />
                        <SerialLoopsBreadcrumb class="next-page" v-if="doc.navigation.next" :link="doc.navigation.next"
                            :path="`${doc.navigation.next}/${locale}`" icon="fa6-solid:arrow-right"/>
                    </article>
                </template>
            </ContentDoc>
        </NuxtLayout>
    </div>
</template>


<style scoped>
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
    description: 'Docs for our Suzumiya Haruhi no Chokuretsu Editing Suite',
    layout: 'serial-loops'
})
</script>