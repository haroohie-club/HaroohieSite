// Fetches the latest release .xdelta download URL and version from the releases repository
import {request} from "https://cdn.skypack.dev/@octokit/request";

const REPO_ORG = 'WiIIiam278';
const REPO = 'ChokuretsuTestReleases';

// Fetch the latest release from GitHub API and get the patch download version and URL
request('GET /repos/{owner}/{repo}/releases/latest', {
    owner: REPO_ORG,
    repo: REPO
}).then(release => {
    request('GET /repos/{owner}/{repo}/releases/{release_id}/assets', {
        owner: REPO_ORG,
        repo: REPO,
        release_id: release.data.id
    }).then(releaseAssetList => {
        let hasSet = false;
        releaseAssetList.data.forEach(releaseAsset => {
            if (hasSet) {
                return;
            }
            let downloadUrl = releaseAsset.browser_download_url;
            let version = release.data.tag_name;
            if (downloadUrl.endsWith('.xdelta')) {
                document.getElementById('latest-patch-download-url').href = downloadUrl;
                document.getElementById('latest-patch-download-version').innerHTML = 'v' + version + '<br/><span style="font-size: small">latest</span>';
                hasSet = true;
            }
        })
    })
});