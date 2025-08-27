<script setup>
const { locale, t } = useI18n()

const state = reactive({
    save: undefined
})

const validate = (state) => {
    const errors = [];
    if (!state.save) {
        errors.push({ name: 'save', message: 'Required' })
    }
    return errors;
};

const onSubmit = async (event) => {
    const form = new FormData();
    form.append('files', save);
    const res = await $fetch('http://localhost:5243/choku-wrapped/', {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        method: 'POST',
        body: {
            'files': save,
        }
    })
}
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="center">
                <h1>{{ t('chokuretsu-wrapped') }}</h1>
            </div>
            <div class="center paragraph">
                <p>{{ t('chokuretsu-wrapped-explanation') }}</p>
                <p>{{ t('chokuretsu-wrapped-explanation2') }}</p>
            </div>

            <div class="center paragraph">
                <UForm :state="state" @submit="onSubmit">
                    <UFileUpload v-model="save" class="w-96 min-h-48" />
                </UForm>
            </div>
        </NuxtLayout>
    </div>
</template>

<script>
definePageMeta({
    title: 'Suzumiya Haruhi no Chokuretsu - English Translation (Nintendo DS) - (The Series of Haruhi Suzumiya) - Chokuretsu Wrapped',
    description: 'English Translation ROM patch for Nintendo DS game Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya) Chokuretsu Wrapped',
    layout: 'chokuretsu'
})
</script>

<style scoped>
.center {
    align-content: center;
    align-self: center;
    text-align: center;
    margin: 0 auto;
}
.paragraph {
    width: 50%;
}
</style>