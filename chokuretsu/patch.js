import {request} from "https://cdn.skypack.dev/@octokit/request";

const REPO_ORG = 'WiIIiam278'
const REPO = 'ChokuretsuTestReleases'
let hasFetched = false;

const select = document.createElement('select');
select.disabled = true;
select.id = 'input-file-patch';
el('input-file-patch').parentElement.replaceChild(select, el('input-file-patch'));
select.parentElement.title = '';

request('GET /repos/{owner}/{repo}/releases', {
    owner: REPO_ORG,
    repo: REPO
}).then(releaseList => {
    releaseList.data.forEach(release => {
        request('GET /repos/{owner}/{repo}/releases/{release_id}/assets', {
            owner: REPO_ORG,
            repo: REPO,
            release_id: release.id
        }).then(releaseAssetList => {
            releaseAssetList.data.forEach(releaseAsset => {
                let downloadUrl = CORS_PROXY + releaseAsset.browser_download_url;
                if (downloadUrl.endsWith(".xdelta")) {
                    let date = new Date(release.created_at);
                    let i = CUSTOM_PATCHER.push({
                        file: downloadUrl,
                        name: 'Version ' + release.tag_name + " (" + date.toLocaleDateString() + ")"
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
    preparePatcher(request);
});