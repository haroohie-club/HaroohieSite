<template>
    <div>
        <ButtonLink color="black" icon="fa6-brands:github" fullwidth type="top-piece"
            link="https://github.com/haroohie-club/SerialLoops/releases/latest">
            {{ $t('github') }}
        </ButtonLink>
        <ButtonLink color="sl-green" icon="fa6-solid:book" fullwidth type="mid-piece"
            :link="localePath('/chokuretsu/serial-loops/docs')">
            {{ $t('chokuretsu-sl-docs') }}
        </ButtonLink>
        <ButtonLink color="red" icon="fa6-solid:language" fullwidth type="mid-piece"
            :link="localePath('/chokuretsu')">
            {{ $t('chokuretsu-patch') }}
        </ButtonLink>
        <ButtonLink color="blue" icon="fa6-solid:house" fullwidth type="mid-piece"
            :link="localePath('/')">
            {{ $t('home') }}
        </ButtonLink>
        <ButtonLink rgb-color="#7289DA" icon="fa6-brands:discord" fullwidth type="bottom-piece"
            link="https://discord.gg/nesRSbpeFM">
            {{ $t('discord-server') }}
        </ButtonLink>
    </div>
    <div>
        <h2>{{  $t('chokuretsu-sl-docs') }}</h2>
        <SerialLoopsDocsList/>
    </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>