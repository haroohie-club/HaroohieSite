<template>
    <footer>
        <div id="copyright">
            <div>{{ $t('website') }} &copy; {{ current_year }}, <NuxtLink :to="localePath('/')">Haroohie Translation Club</NuxtLink></div>
            <div>{{ $t('original-copyright') }}</div>
        </div>
    </footer>
</template>

<style>
footer {
    display: flex;
    flex-direction: column;
    color: var(--main-dark-gray);
    width: 100vw;
    padding: 0.4rem 0;
    padding-top: 1.2rem;
    text-align: center;
    justify-self: flex-end;
    margin-top: auto;
}
</style>

<script setup>
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()

const current_year = new Date().getFullYear()
</script>