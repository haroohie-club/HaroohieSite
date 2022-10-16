<template>
    <div class="patcher-menu">
        <div class="patcher-left">
            <h3 class="patcher-header">Options</h3>
            <table id="patcher-options">
                <tbody>
                    <RomPatcherOptionDescription
                        title="OP/ED subtitles"
                        img="/images/chokuretsu/opening-subtitles.png"
                        alt="The opening movie with English subtitles and karaoke track">
                    Configure whether the opening movie and end credits should be subtitled in English with Japanese karaoke typesetting.
                    </RomPatcherOptionDescription>
                    <RomPatcherOption
                        optionName="op-ed-subtitling"
                        option1="Subtitled"
                        option2="Clean" />

                    <RomPatcherOptionDescription
                        title="Voiced line subtitles"
                        img="/images/chokuretsu/voiced-line-subtitles.png"
                        alt="The puzzle phase with a subtitled voice line">
                    Configure whether voiced lines in the puzzle phase should have supplementary English subtitles display on screen.
                    </RomPatcherOptionDescription>
                    <RomPatcherOption
                        optionName="voice-lines-subtitling"
                        option1="Subtitles"
                        option2="No Subtitles" />
                </tbody>
            </table>
        </div>
        <div class="patcher-right">
            <div>
                <h3 class="patcher-header">Select ROM</h3>
                <input id="input-file-rom" class="input-file enabled" type="file" accepts=".nds"
                    ondragenter="this.classList.add('patcher-file-dragging');" ondragleave="this.classList.remove('patcher-file-dragging');" />
            </div>
            <div>
                <h3 class="patcher-header">Select version & apply</h3>
                <label>
                    <b>Version:</b>
                    <select id="patcher-version-dropdown" />
                </label>
            </div>
        </div>
    </div>
</template>

<style scoped>
.patcher-menu {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, 48.5%);
    text-align: center;
    justify-content: center;
}

.patcher-header {
    text-align: left;
}

#patcher-options {
    text-align: left;
}

.patcher-menu .patcher-left {
    display: flex;
    flex-direction: column;
}

.patcher-menu .patcher-right {
    display: flex;
    flex-direction: column;
}

.input-file {
    padding: 2em 2vw;
    border: #31343a dashed 0.2em;
    border-radius: 0.8em;
}

select {
    border: black solid 0.15em;
    border-radius: 0.3em;
}
</style>

<script>
export default {
    methods: {

    }
}
</script>