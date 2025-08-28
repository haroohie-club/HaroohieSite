<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const customized = route.params.sha != 'results';
const sha = customized ? route.params.sha : '';

const json : any = await $fetch(`http://localhost:5243/choku-wrapped/${sha}`)
console.log(json);

let friendshipLegend: any = [ t('chokuretsu-wrapped-average-data') ]
let friendshipSeries: any = [
    {
        name: t('chokuretsu-wrapped-average-data'),
        type: 'bar',
        data: [ json.haruhiFriendshipLevel, json.mikuruFriendshipLevel, json.nagatoFriendshipLevel, json.koizumiFriendshipLevel, json.tsuruyaFriendshipLevel ],
        barGap: '20%',
    },
]
if (customized && json.hasFriendship) {
    friendshipLegend.push(t('chokuretsu-wrapped-your-data'))
    friendshipSeries.push(
        {
            name: t('chokuretsu-wrapped-your-data'),
            type: 'bar',
            data: [ 10, 1, 5, 7, 8 ],
            barGap: '20%',
        }
    )
}
const friendshipOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-friendship-level'),
        left: 'center',
    },
    legend: {
        data: friendshipLegend,
    },
    series: friendshipSeries,
    xAxis: [
        {
            type: 'category',
            data: [ t('chokuretsu-wrapped-haruhi-ending'), t('chokuretsu-wrapped-mikuru-ending'), t('chokuretsu-wrapped-nagato-ending'), t('chokuretsu-wrapped-koizumi-ending'), t('chokuretsu-wrapped-tsuruya-ending') ]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ]
});

const endingOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-ending'),
        left: 'center',
    },
    series: {
        type: 'bar',
        data: Object.values(json.endingChart),
        barGap: '20%'
    },
    xAxis:{
        type: 'category',
        data: Object.keys(json.endingChart).map(k => t(k)),
    },
    yAxis: {
        type: 'value'
    }
})

const initOptions = computed(() => ({
    height: 300,
    width: 500,
}))

provide(THEME_KEY, 'light')
provide(INIT_OPTIONS_KEY, initOptions);
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="center">
                <h1>{{ customized ? $t('chokuretsu-wrapped-yours') : $t('chokuretsu-wrapped') }}</h1>
                <div v-if="json != null" class="charts">
                    <div>
                        <VChart :option="friendshipOptions"/>
                    </div>
                    <div>
                        <VChart :option="endingOptions"/>
                    </div>
                </div>
                <div v-else>
                    <h2>{{ $t('chokuretsu-wrapped-no-data') }}</h2>
                </div>
            </div>            
        </NuxtLayout>
    </div>
</template>

<script lang="ts">
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

.charts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: content;
}
</style>