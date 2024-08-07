
<template>
<div class="breadcrumb">
    <NuxtLink :to="localePath(link)">
        <IconifiedText v-if="icon" :icon="icon">
            <ContentDoc :path="path">
                <template v-slot="{ doc }">
                    {{ doc.title }}
                </template>
            </ContentDoc>
        </IconifiedText>
        <span v-else>
            <ContentDoc :path="path">
                <template v-slot="{ doc }">
                    {{ doc.title }}
                </template>
            </ContentDoc>
        </span>
    </NuxtLink>
</div>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: true
    }
})
const { locale } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
</script>

<style scoped>
.breadcrumb {
    background: linear-gradient(135deg, var(--sl-green) 0%, var(--sl-blue) 100%);
    padding: 0.15rem 0.45rem;
    border-radius: 1rem;
    width: fit-content;
}

.breadcrumb:hover {
    background: linear-gradient(135deg, var(--sl-blue) 0%, var(--sl-green) 100%);
    filter: brightness(1.1);
    transition: 0.2s;
}

.breadcrumb a {
    color: white !important;
    text-decoration: none;
}

.breadcrumb a:hover {
    filter: none !important;
}
</style>