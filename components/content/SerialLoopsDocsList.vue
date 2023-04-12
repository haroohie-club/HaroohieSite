<template>
    <ul>
        <ContentList path="/chokuretsu/serial-loops/docs" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.navigation)">
                <NuxtLink :to="guide._path">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ul>
</template>