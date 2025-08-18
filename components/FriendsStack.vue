<template>
    <!-- <ContentList path="/friend" v-slot="{ list }">
        <div class="stack">
            <ButtonLink v-for="friend in list.filter(f => f._path.endsWith(locale))" :icon="friend.friend.icon" :link="localePath(friend._path.substring(0, friend._path.lastIndexOf('/')))" rel="me"
                :rgb-color="friend.friend.color" :type="list.indexOf(friend) === (list.length - 1) ? 'bottom-piece' : (list.indexOf(friend) === 0 ? 'top-piece' : 'mid-piece')" fullwidth>
                {{ friend.friend.name }}
            </ButtonLink>
        </div>
    </ContentList> -->
</template>

<script setup>
const localePath = useLocalePath()
</script>

<script>
export default {
    name: 'listStack'
}
</script>

<style scoped>
.stack {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
}
</style>