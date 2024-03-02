<template>
    <div v-if="doc.navigation" class="navigation-buttons">
        <div class="left">
            <ButtonLink v-if="doc.navigation.previous" :link="localePath('/chokuretsu/guide' + doc.navigation.previous)" color="red" icon="fa6-solid:arrow-left">{{ $t('previous') }}</ButtonLink>
        </div>
        <div class="right">
            <ButtonLink v-if="doc.navigation.next" :link="localePath('/chokuretsu/guide' + doc.navigation.next)" color="red" icon="fa6-solid:arrow-right">{{ $t('next') }}</ButtonLink>
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

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()
const { doc } = defineProps({
  doc: {
    type: Object,
    required: true
  }
})
</script>