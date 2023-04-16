<template>
    <div class="docs-list">
        <ContentList path="/chokuretsu/serial-loops/docs" v-slot="{ list }">
            <div v-for="guide in list.filter(g => g.title !== 'Sidebar')" :class="'list-item ' + ((guide._path.split('/').length > 5) ? 'indented' : '')" >
                <span class="icon">
                    <img v-if="guide.navigation.icon" :src="guide.navigation.icon" />
                    <Icon v-else-if="guide.navigation.faicon" :name="guide.navigation.faicon" />
                </span>
                <NuxtLink :to="guide._path">{{ guide.title }}</NuxtLink>
            </div>
        </ContentList>
    </div>
</template>

<script>
</script>

<style scoped>
.docs-list {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.list-item img {
    max-width: 18px;
    margin-right: 0.2rem;
}

.list-item .icon {
    margin-right: 0.3rem;
    color: var(--sl-green)
}

.indented {
    margin-left: 2rem;
}
</style>