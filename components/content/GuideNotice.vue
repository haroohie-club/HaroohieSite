<template>
    <div class="guide-notice">
        <IconifiedText :icon="icon">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </IconifiedText>
    </div>
</template>

<style scoped>
.guide-notice {
    background-color: var(--main-light-gray);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
}
</style>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false,
            default: 'fa6-solid:circle-info'
        }
    }
}
</script>