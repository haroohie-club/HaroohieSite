<template>
    <form>
        <label class="shadow" for="locale-select">
            <Icon name="fa6-solid:language" />
        </label>
        <select class="shadow" id="locale-select" :value="locale" v-model="$i18n.locale">
            <option v-for="l in availableLocales" :value="l">
                <span>{{ getLanguageName(l) }}</span>
                <span class="lozonge" v-if="locale == l">&nbsp;&#x23F7;</span>
            </option>
        </select>
    </form>
</template>

<script setup>
const { availableLocales } = useI18n()
const { locale } = useI18n({
    useScope: 'local'
})
const localePath = useLocalePath()
function getLanguageName(languageCode) {
    const nameGenerator = new Intl.DisplayNames(languageCode, { type: 'language' });
    const displayName = nameGenerator.of(languageCode);
    return displayName[0].toUpperCase() + displayName.substring(1);
}
</script>

<style scoped>
form {
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    gap: 0.5rem;
}

form label {
    color: var(--main-red);
}

/* custom select */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--main-red);
    border: none;
    border-radius: 0.45rem;
    color: white;
    font-family: 'Nunito', sans-serif;
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    box-shadow: inset 0.5vh 0.5vh 0.7vh rgb(0 0 0 / 20%);
}

select:hover {
    background-color: var(--main-dark-gray);
    transition: background-color 0.15s ease;
}

.shadow {
    filter: drop-shadow(0.4vh 0.4vh 0.2vh rgba(0, 0, 0, 0.3));
}

</style>