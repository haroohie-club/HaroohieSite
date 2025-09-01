<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const toast = useToast()

async function submit() {
    const formData = new FormData();
    formData.append('files', document.getElementById('input-file-sav').files[0].slice(0, 8192))
    await $fetch("http://localhost:5243/choku-wrapped", {
        method: "POST",
        body: formData,
    }).then(async (res) => {
        if (res == 'ERR_NOT_A_SAVE_FILE') {
            toast.error({ title: 'Error!', message: t('chokuretsu-wrapped-not-a-save-file'), timeout: 5000, position: 'center' });
            return;
        }
        if (res == 'ERR_INVALID_SAVE') {
            toast.error({ title: 'Error!', message: t('chokuretsu-wrapped-save-not-completed'), timeout: 5000, position: 'center' });
            return;
        }
        
        await navigateTo(localePath(`/chokuretsu/wrapped/${res}`));        
    }).catch((err) => {
        toast.error({ title: 'Error!', message: t('chokuretsu-wrapped-something-wrong'), timeout: 5000, position: 'center' })
        console.log(err);
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
                <div>
                    <ButtonLink :link="localePath('/chokuretsu/wrapped/results')" color="blue" icon="fa6-solid:chart-column">{{ $t('chokuretsu-wrapped-view-results') }}</ButtonLink>
                </div>
            </div>

            <div class="center paragraph">
                <input id="input-file-sav" @change="selectFile" class="input-file enabled" type="file" accept=".sav" />
            </div>
            <div class="center paragraph save-submit">
                <ButtonLink link="#" color="red" icon="fa6-solid:file-import" @click="submit">{{ $t('chokuretsu-wrapped-submit') }}</ButtonLink>
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

.input-file {
    margin: 3em 0 0 0;
    padding: 2em 2vw;
    border: #31343a dashed 0.2em;
    border-radius: 0.8em;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}


.input-file.enabled {
    cursor: pointer;
}

.input-file:hover {
    background-color: var(--main-light-gray);
}

.save-submit {
    margin: 1em;
}
</style>