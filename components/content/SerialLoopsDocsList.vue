<template>
    <ul>
        <ContentList path="/chokuretsu/serial-loops/docs" v-slot="{ list }">
            <li v-for="guide in list.filter(g => g.title !== 'Sidebar')" >
                <NuxtLink :to="guide._path">{{ guide.title }}</NuxtLink>
            </li>
        </ContentList>
    </ul>
</template>

<script>
</script>