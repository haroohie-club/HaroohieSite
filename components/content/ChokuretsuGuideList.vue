<script setup>
</script>

<template>
    <ol>
        <ContentList :path="`/chokuretsu/guide/`" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.navigation && g._path.endsWith(locale))">
                <NuxtLink :to="`${locale == 'en' ? '' : '/' + locale}/chokuretsu/guide${guide.navigation.current}`">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ol>
</template>

<script>
</script>