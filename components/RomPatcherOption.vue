<template>
    <tr :id="`${optionName}-opt-row`">
        <td>
            <table>
                <tbody>
                    <tr>
                        <td class="patcher-option-radio">
                            <div>
                                <label>
                                    <input type="radio" v-on:click="select1Function" :name="optionName" :value="option1value" checked="" v-if="defaultOption == 1" />
                                    <input type="radio" v-on:click="select1Function" :name="optionName" :value="option1value" v-else />
                                    {{ option1 }}
                                </label>
                            </div>
                        </td>
                        <td class="patcher-option-radio">
                            <div>
                                <label>
                                    <input type="radio" v-on:click="select2Function" :name="optionName" :value="option2value" checked="" v-if="defaultOption == 2" />
                                    <input type="radio" v-on:click="select2Function" :name="optionName" :value="option2value" v-else />
                                    {{ option2 }}
                                </label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td :class="{ hidden: !recommendFirst }" style="text-align: center">
                            <small>{{ $t('chokuretsu-rom-patcher-option-recommended') }}</small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</template>

<style scoped>
.patcher-option-radio {
    text-align: center;
    max-width: 50%;
    width: 50%;
}

input[type="radio"] {
    appearance: none;
    font: inherit;
    width: 1em;
    height: 1em;
    border: 0.1em solid currentColor;
    border-radius: 50%;
    display: inline-block;
}

input[type="radio"]:checked {
    background-color: var(--main-red);
}
</style>

<script>
export default {
    name: 'RomPatcherOption',
    props: {
        optionName: {
            type: String,
            required: true,
        },
        option1: {
            type: String,
            required: true,
        },
        option1value: {
            type: String,
            required: true,
        },
        option2: {
            type: String,
            required: true,
        },
        option2value: {
            type: String,
            required: true,
        },
        defaultOption: {
            type: Number,
            required: false,
            default: 1,
        },
        recommendFirst: {
            type: Boolean,
            required: false
        },
        select1Function: {
            type: Function,
            required: false,
            default: () => {},
        },
        select2Function: {
            type: Function,
            required: false,
            default: () => {},
        },
    }
}
</script>