<template>
    <Icon :name="icon" class="iconified-text-icon" />
    <span class="iconified-text-text">
        <ContentSlot v-if="unwrap" :use="$slots.default" unwrap="p" />
        <slot v-else="" />
    </span>
</template>

<style scoped>
.iconified-text-icon {
    font-size: 1.4rem;
    margin-right: 0.25rem;
    margin-bottom: 0.1rem;
}
.iconified-text-text {
    margin-left: 0.25rem;
    font-style: normal;
}
</style>

<script>
export default {
    name: 'IconifiedText',
    props: {
        icon: {
            type: String,
            required: true,
        },
        unwrap: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>