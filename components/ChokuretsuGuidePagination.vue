<template>
    <div v-if="doc.navigation" class="navigation-buttons">
        <div class="left">
            <ButtonLink v-if="doc.navigation.previous" :link="'/chokuretsu/guide' + doc.navigation.previous" color="red" icon="fa6-solid:arrow-left">Previous</ButtonLink>
        </div>
        <div class="right">
            <ButtonLink v-if="doc.navigation.next" :link="'/chokuretsu/guide' + doc.navigation.next" color="red" icon="fa6-solid:arrow-right">Next</ButtonLink>
        </div>
    </div>
</template>

<style scoped>
.navigation-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.5rem;
}
</style>

<script>
export default {
    props: {
        doc: {
            type: Object,
            required: true
        }
    }
}
</script>