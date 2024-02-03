<script setup>
const { locale } = useI18n({
  useScope: 'local'
})
</script>

<template>
    <ol>
        <ContentList :path="`/chokuretsu/guide/`" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.navigation && g.locale == locale)">
                <NuxtLink :to="`${locale == 'en-us' ? '' : '/' + locale}/chokuretsu/guide${guide.navigation.current}`">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ol>
</template>

<script>
</script>