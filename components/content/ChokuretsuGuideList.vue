<template>
    <ol>
        <ContentList path="/chokuretsu/guide" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.navigation)">
                <NuxtLink :to="guide._path">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ol>
</template>