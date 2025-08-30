<script setup lang="ts">
import { format } from 'echarts';

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
if (customized && json.saveData?.hasFriendship) {
    friendshipLegend.push(t('chokuretsu-wrapped-your-data'))
    friendshipSeries.push(
        {
            name: t('chokuretsu-wrapped-your-data'),
            type: 'bar',
            data: [ json.saveData?.haruhiFriendshipLevel, json.saveData?.mikuruFriendshipLevel, json.saveData?.nagatoFriendshipLevel, json.saveData?.koizumiFriendshipLevel, json.saveData?.tsuruyaFriendshipLevel ],
            itemStyle: { color: 'gold' },
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
            name: t('chokuretsu-wrapped-friendship-level-axis'),
            type: 'value',
            nameLocation: 'middle',
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
        data: Object.keys(json.topicsObtainedChart).map(k => Object({
            value: [ parseInt(k), json.topicsObtainedChart[k] ],
            itemStyle: customized && json.saveData?.topicsObtained == k ? { color: 'gold' } : {},
        }))
    },
    xAxis: {
        name: t('chokuretsu-wrapped-obtained'),
        type: 'value',
        nameLocation: 'middle',
    },
    yAxis: {
        name: t('chokuretsu-wrapped-num-players'),
        type: 'value',
        nameLocation: 'middle',
    }
})

let haruhiMeterData: any[] = [
    {
        value: json.averageHaruhiMeter,
        name: t('chokuretsu-wrapped-average-data'),
        title: {
            offsetCenter: ['0%', '60%']
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '80%'],
            formatter: (value: number) => `${value}%`
        }
    }
]
if (customized) {
    haruhiMeterData[0].title.offsetCenter = [ '35%', '80%' ]
    haruhiMeterData[0].detail.offsetCenter = ['35%', '100%' ]
    haruhiMeterData.push({
        value: json.saveData?.haruhiMeter,
        name: t('chokuretsu-wrapped-your-data'),
        title: {
            offsetCenter: ['-35%', '80%']
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ['-35%', '100%'],
            formatter: (value: number) => `${value}%`
        },
        itemStyle: { color: 'gold' },
    })
}
const haruhiMeterOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-haruhi-meter'),
        left: 'center',
    },
    series: {
        type: 'gauge',
        progress: {
            show: true,
            width: 18,
            overlap: false,
        },
        axisLine: {
            lineStyle: {
                width: 18,
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            },
        },
        axisLabel: {
            distance: 25,
            color: '#999',
        },
        anchor: {
            show: true,
            showAbove: true,
            itemStyle: {
                borderWidth: 10,
            },
        },
        data: haruhiMeterData,
    },
})

const routeMapXAxis = ['Episode 1', 'Episode 2', 'Episode 3A', 'Episode 3B', 'Episode 4A', 'Episode 4B', 'Episode 5'];
let routeYAxisDict: { name: string, idx: number }[] = []
let routeMapData: any[] = []
for (let i = 0; i < json.routesTaken.length; i++) {
    let currentY = 0
    for (let j = 0; j < json.routesTaken[i].length; j++) {
        currentY++;
        routeYAxisDict.push({ name: json.routesTaken[i][j].route.name, idx: currentY });
        routeMapData.push(Object({
            name: t(json.routesTaken[i][j].route.name),
            value: [ routeMapXAxis[i], currentY, json.routesTaken[i][j].count ],
        }))
    }
}
let routeMapSeries: any[] = [
    {
        type: 'heatmap',
        data: routeMapData,
        emphasis: {
            itemStyle: {
                borderColor: '#aaa',
                borderWidth: 1
            }
        },
        progressive: 1000,
    }
];
if (customized) {
    let saveRouteData: any[] = []
    for (let i = 0; i < json.saveData.routesTaken.length; i++) {
        saveRouteData.push(Object({
            name: t(json.saveData.routesTaken[i].name),
            value: [ routeMapXAxis[i], routeYAxisDict.filter(y => y.name == json.saveData.routesTaken[i].name)[0].idx ]
        }))
    }
    routeMapSeries.push({
        name: t('chokuretsu-wrapped-your-route'),
        type: 'line',
        data: saveRouteData,
        lineStyle: { color: 'goldenrod' }
    })
}

const routeMapOption = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-route-map'),
        left: 'center',
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        data: routeMapXAxis,
    },
    yAxis: {
        type: 'category',
        data: [...new Set(routeYAxisDict.map(y => y.idx))],
        axisLabel: {
            show: false
        }
    },
    visualMap: {
        min: 0,
        max: json.routesCountMax,
        calculable: true,
        realtime: false,
        left: 'left',
        inRange: {
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#5de9af',
                '#9df899',
                '#fffa72',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ]
        }
    },
    series: routeMapSeries,
})

let routeByCharactersLegend: any = [ t('chokuretsu-wrapped-average-data') ]
let routeByCharactersSeries: any = [
    {
        name: t('chokuretsu-wrapped-average-data'),
        type: 'bar',
        data: Object.values(json.averageRoutesWithCharacter),
        barGap: '20%',
    },
]
if (customized) {
    routeByCharactersLegend.push(t('chokuretsu-wrapped-your-data'))
    routeByCharactersSeries.push(
        {
            name: t('chokuretsu-wrapped-your-data'),
            type: 'bar',
            data: Object.values(json.saveData?.routesWithCharacter),
            itemStyle: { color: 'gold' },
            barGap: '20%'
        }
    )
}
const routeByCharactersOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-routes-with-char'),
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: routeByCharactersLegend,
    },
    series: routeByCharactersSeries,
    xAxis: [
        {
            type: 'category',
            data: Object.keys(json.averageRoutesWithCharacter).map(c => t(c)),
        }
    ],
    yAxis: [
        {
            name: t('chokuretsu-wrapped-num-routes'),
            type: 'value',
            nameLocation: 'middle',
        }
    ]
});

let routeBySideCharactersLegend: any = [ t('chokuretsu-wrapped-average-data') ]
let routeBySideCharactersSeries: any = [
    {
        name: t('chokuretsu-wrapped-average-data'),
        type: 'bar',
        data: Object.values(json.averageRoutesWithSideCharacter),
        barGap: '20%',
    },
]
if (customized) {
    routeBySideCharactersLegend.push(t('chokuretsu-wrapped-your-data'))
    routeBySideCharactersSeries.push(
        {
            name: t('chokuretsu-wrapped-your-data'),
            type: 'bar',
            data: Object.values(json.saveData?.routesWithSideCharacter),
            itemStyle: { color: 'gold' },
            barGap: '20%'
        }
    )
}
const routeBySideCharactersOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-routes-meeting-side-char'),
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: routeBySideCharactersLegend,
        bottom: -4,
    },
    series: routeBySideCharactersSeries,
    xAxis: [
        {
            type: 'category',
            data: Object.keys(json.averageRoutesWithSideCharacter).map(c => t(c)),
            axisLabel: {
                rotate: 80,
            },
        }
    ],
    yAxis: [
        {
            name: t('chokuretsu-wrapped-num-routes'),
            type: 'value',
            nameLocation: 'middle',
        }
    ]
});

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
        name: t('chokuretsu-wrapped-num-interviews'),
        type: 'value',
        nameLocation: 'middle',
    },
    yAxis: {
        name: t('chokuretsu-wrapped-num-players'),
        type: 'value',
        nameLocation: 'middle',
    }
})

const ep1RouteOptions = ref<ECOption>({
    title: {
        text: t('chokuretsu-wrapped-route-selection'),
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        position: 'right',
    },
    series: {
        type: 'pie',
        data: json.routesTaken[0].map((r: { route: any; count: number; }) => Object({
            name: t(r.route.name),
            value: r.count,
            itemStyle: customized && json.saveData?.routesTaken[0].name == r.route.name ? { color: 'gold' } : {},
        })),
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
})

provide(THEME_KEY, 'light')
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="center">
                <h1>{{ customized ? $t('chokuretsu-wrapped-yours') : $t('chokuretsu-wrapped') }}</h1>
                <p>
                    <em>{{ t('chokuretsu-wrapped-num-submissions') }}{{ json.numSubmissions }}</em>
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
                        <div>
                            <VChart :option="haruhiMeterOptions" class="normal-chart"/>
                        </div>
                    </div>
                    <h2>{{ t('chokuretsu-wrapped-routes') }}</h2>
                    <div class="charts">
                        <VChart :option="routeMapOption" class="large-chart"/>
                    </div>
                    <div class="charts">
                        <div>
                            <VChart :option="routeByCharactersOptions" class="normal-chart"/>
                        </div>
                        <div>
                            <VChart :option="routeBySideCharactersOptions" class="normal-chart"/>
                        </div>
                    </div>
                    <h2>{{ t('chokuretsu-wrapped-ep1') }}</h2>
                    <div class="charts">
                        <div>
                            <VChart :option="ep1RouteOptions" class="normal-chart"/>
                        </div>
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

.large-chart {
    height: 500px;
}

@media screen and (min-width: 300px) {
    .normal-chart {
        width: 300px;
    }

    .large-chart {
        width: 300px;
    }
}
@media screen and (min-width: 400px) {
    .normal-chart {
        width: 400px;
    }

    .large-chart {
        width: 400px;
    }
}
@media screen and (min-width: 500px) {
    .normal-chart {
        width: 500px;
    }

    .large-chart {
        width: 900px;
    }
}
</style>