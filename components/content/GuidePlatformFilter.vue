<template>
    <div class="filter-buttons">
        <div class="platforms-label">
            <IconifiedText icon="fa6-solid:gamepad"><b>{{ $t('click-to-filter') }}</b></IconifiedText>
        </div>
        <div class="platform-filters">
            <div v-for="platform of filters" :class="'filter filter-' + filterSuffix + ' deselected'"
                :id="'filter-' + platform.toLowerCase().replace(/ /g, '_')" @click="clickFilter(platform, filterSuffix, )">
                {{ platform }}
            </div>
        </div>
    </div>

    <div class="filtered-content">
        <slot />
    </div>
</template>

<script>
import IconifiedText from './IconifiedText.vue'
const selectedFilters = []

export default {
    props: {
        filters: {
            type: Array,
            required: true
        },
        filterSuffix: {
            type: String,
            required: false,
            default: 'main'
        }
    },
    methods: {
        clickFilter: function (filter, suffix) {
            if (selectedFilters.includes(filter)) {
                selectedFilters.splice(selectedFilters.indexOf(filter), 1);
                document.getElementById('filter-' + filter.toLowerCase().replace(/ /g, '_')).classList.add('deselected');
                
                // Get everything that has the filter class
                const filtered = document.getElementsByClassName('platform-' + filter.toLowerCase().replace(/ /g, '_'));
                for (let i = 0; i < filtered.length; i++) {
                    filtered[i].classList.add('platform-filtered');
                }
            }
            else {
                console.log
                selectedFilters.forEach(f => {
                    if (document.getElementById('filter-' + f.toLowerCase().replace(/ /g, '_')).classList.contains('filter-' + suffix)) {
                        this.clickFilter(f);
                    }
                });
                selectedFilters.push(filter);
                document.getElementById('filter-' + filter.toLowerCase().replace(/ /g, '_')).classList.remove('deselected');
                
                // Get everything that has the filter class
                const filtered = document.getElementsByClassName('platform-' + filter.toLowerCase().replace(/ /g, '_'));
                for (let i = 0; i < filtered.length; i++) {
                    filtered[i].classList.remove('platform-filtered');
                }
            }
            this.$emit("filter", selectedFilters);
        }
    },
    components: { IconifiedText }
}
</script>

<style scoped>
.filter-buttons {
    display: flex;
    flex-direction: row;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    user-select: none;
}

.filter-buttons .platforms-label {
    display: flex;
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
}

.platform-filters {
    display: flex;
    flex-direction: row;
}

.platform-filters .filter {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--main-blue);
    color: white;
    box-shadow: var(--main-shadow);
}

.filter:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transform: scale(1.05);
}

.platform-filters .deselected {
    filter: opacity(50%);
}
</style>

<style>
.platform-filtered {
    display: none;
}
</style>