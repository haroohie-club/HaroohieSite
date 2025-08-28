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
            barGap: '20%'
        }
    )
}
const friendshipOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-friendship-level'),
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: friendshipLegend,
    },
    series: friendshipSeries,
    xAxis: [
        {
            type: 'category',
            data: [ t('chokuretsu-wrapped-haruhi'), t('chokuretsu-wrapped-mikuru'), t('chokuretsu-wrapped-nagato'), t('chokuretsu-wrapped-koizumi'), t('chokuretsu-wrapped-tsuruya') ]
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
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    series: {
        type: 'pie',
        data: Object.keys(json.endingChart).map(k => Object({
            name: t(k),
            value: json.endingChart[k],
            itemStyle: customized && json.saveData?.unlockedEnding == k ? { color: 'gold' } : {},
        }))
    },
    legend: {
        left: 'center'
    },
})

const topicsObtainedOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-topics'),
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: {
        type: 'bar',
        barWidth: '2%',
        data: Object.keys(json.topicsObtainedChart).map(k => Object({
            value: [ parseInt(k), json.topicsObtainedChart[k] ],
            itemStyle: customized && json.saveData?.topicsObtained == k ? { color: 'gold' } : {},
        }))
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value'
    }
})

const sawGameOverTutorialOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-game-over-tutorial'),
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    series: {
        type: 'pie',
        data: Object.keys(json.sawGameOverTutorialChart).map(k => Object({
            name: t(k),
            value: json.sawGameOverTutorialChart[k],
            itemStyle: customized && ((json.saveData?.sawGameOverTutorial && k == 'chokuretsu-wrapped-game-over-saw') || (!json.saveData?.sawGameOverTutorial && k == 'chokuretsu-wrapped-game-over-didnt-see')) ? { color: 'gold' } : {},
        }))
    },
    legend: {
        left: 'center'
    },
})

const ep1ActivityGuessOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-ep1-activity'),
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    series: {
        type: 'pie',
        data: Object.keys(json.ep1ActivityGuessChart).map(k => Object({
            name: t(k),
            value: json.ep1ActivityGuessChart[k],
            itemStyle: customized && json.saveData?.ep1ActivityGuess == k ? { color: 'gold' } : {},
        }))
    },
    legend: {
        left: 'center'
    },
})

const ep1NumCompSocMembersInterviewedOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-ep1-comp-soc-interviews'),
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    series: {
        type: 'bar',
        barWidth: '20%',
        data: Object.keys(json.numCompSocMembersInterviewedChart).map(k => Object({
            value: [ parseInt(k), json.numCompSocMembersInterviewedChart[k] ],
            itemStyle: customized && json.saveData?.numCompSocMembersInterviewed == k ? { color: 'gold' } : {},
        })),
        barGap: '10%',
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value'
    }
})

provide(THEME_KEY, 'light')
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="center">
                <h1>{{ customized ? $t('chokuretsu-wrapped-yours') : $t('chokuretsu-wrapped') }}</h1>
                <p>
                    <em>Number of saves submitted: {{ json.numSubmissions }}</em>
                </p>
                <div v-if="json != null">
                    <h2>{{ t('chokuretsu-wrapped-game-stats') }}</h2>
                    <div class="charts">
                        <div>
                            <VChart :option="friendshipOptions" class="normal-chart"/>
                        </div>
                        <div>
                            <VChart :option="endingOptions" class="normal-chart"/>
                        </div>
                        <div>
                            <VChart :option="topicsObtainedOptions" class="normal-chart"/>
                        </div>
                    </div>
                    <h2>{{ t('chokuretsu-wrapped-ep1') }}</h2>
                    <div class="charts">
                        <div>
                            <VChart :option="sawGameOverTutorialOptions" class="normal-chart"/>
                        </div>
                        <div>
                            <VChart :option="ep1ActivityGuessOptions" class="normal-chart"/>
                        </div>
                        <div>
                            <VChart :option="ep1NumCompSocMembersInterviewedOptions" class="normal-chart"/>
                        </div>
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
    justify-content: space-around;
}

.normal-chart {
    height: 300px;
}

@media screen and (min-width: 300px) {
    .normal-chart {
        width: 300px;
    }
}
@media screen and (min-width: 400px) {
    .normal-chart {
        width: 400px;
    }
}
@media screen and (min-width: 500px) {
    .normal-chart {
        width: 500px;
    }
}
</style>