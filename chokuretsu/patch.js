// Fetches the latest releases from the releases repository and presents them in a nice dropdown
import {request} from "https://cdn.skypack.dev/@octokit/request";

const REPO_ORG = 'haroohie-club';
const REPO = 'ChokuretsuTranslationRelease';
let hasFetched = false;

// Fetch releases from GitHub API
request('GET /repos/{owner}/{repo}/releases', {
    owner: REPO_ORG,
    repo: REPO
}).then(releaseList => {
    if (releaseList.data.length === 0) {
        defaultToManualUpload('There are no releases yet! Come back soon!')
        return;
    }

    const select = document.createElement('select');
    select.disabled = true;
    select.id = 'input-file-patch';
    el('input-file-patch').parentElement.replaceChild(select, el('input-file-patch'));
    select.parentElement.title = '';

    // Iterate through releases and sort by date
    releaseList.data.forEach(release => {
        request('GET /repos/{owner}/{repo}/releases/{release_id}/assets', {
            owner: REPO_ORG,
            repo: REPO,
            release_id: release.id
        }).then(releaseAssetList => {
            releaseAssetList.data.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            }).forEach(releaseAsset => {
                let downloadUrl = CORS_PROXY + releaseAsset.browser_download_url;
                if (downloadUrl.endsWith('.xdelta')) {
                    let date = new Date(release.published_at);
                    let dateString = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD

                    let nameString = 'Version ' + release.tag_name + ' (' + dateString + ')';
                    if (CUSTOM_PATCHER.length === 0) {
                        nameString += ' (Latest)';
                    }

                    let i = CUSTOM_PATCHER.push({
                        file: downloadUrl,
                        name: nameString,
                    }) - 1;

                    CUSTOM_PATCHER[i].fetchedFile = false;

                    CUSTOM_PATCHER[i].selectOption = document.createElement('option');
                    CUSTOM_PATCHER[i].selectOption.value = i;
                    CUSTOM_PATCHER[i].selectOption.innerHTML = CUSTOM_PATCHER[i].name || CUSTOM_PATCHER[i].file;

                    select.appendChild(CUSTOM_PATCHER[i].selectOption);

                    if (typeof CUSTOM_PATCHER[i].patches === 'object') {
                        for (let j = 0; j < CUSTOM_PATCHER[i].patches.length; j++) {
                            if (j === 0) {
                                CUSTOM_PATCHER[i].patches[0].selectOption = CUSTOM_PATCHER[i].selectOption;
                                CUSTOM_PATCHER[i].selectOption = null;
                            } else {
                                CUSTOM_PATCHER[i].patches[j].selectOption = document.createElement('option');
                                select.appendChild(CUSTOM_PATCHER[i].patches[j].selectOption);
                            }

                            CUSTOM_PATCHER[i].patches[j].selectOption.value = i + ',' + j;
                            CUSTOM_PATCHER[i].patches[j].selectOption.innerHTML = CUSTOM_PATCHER[i].patches[j].name || CUSTOM_PATCHER[i].patches[j].file;
                        }
                    }

                    if (!hasFetched) {
                        fetchPatch(i, 0, request);
                        hasFetched = true;
                    }
                }
            })
        })
    })

    // Prepare patcher
    preparePatcher(request);
}).catch(() => {
    defaultToManualUpload('This page is currently experiencing heavy load; could not automatically download the latest patch.<br/>Please download the latest .xdelta patch file from the <a href="https://github.com/haroohie-club/ChokuretsuTranslationRelease" target="_blank"><i class="fa-brands fa-github"></i> GitHub releases repository</a> and select it in the \'Select patch file\' box, then select your ROM and apply the patch.')
});

function defaultToManualUpload(error) {
    document.getElementById('select-patch-version').innerHTML = 'Select patch file';
    document.getElementById('message-apply').innerHTML = error;
}