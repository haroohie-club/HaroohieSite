---
title: &title 'Serial Loops - Level Editor for Suzumiya Haruhi no Chokuretsu'
description: &desc 'Serial Loops is a level editor for Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya), available for Windows, Mac and Linux.'
navigation:
  image: 'script-editor.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/chokuretsu/serial-loops/script-editor.png
  - property: 'og:image:alt'
    content: 'A Nintendo DS featuring Haruhi Suzumiya saying edited text.'
  - property: 'og:url'
    content: 'https://haroohie.club/chokuretsu/serial-loops/'
  - property: 'og:type'
    content: 'article'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:descripton'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---
<b class="sl-header">A level editor for Suzumiya Haruhi no Chokuretsu</b> 

Serial Loops is a level editor for [Suzumiya Haruhi no Chokuretsu](/chokuretsu) (The Series of Haruhi Suzumiya), available for Windows, Mac and Linux.

<br />
<br />

## News
::blog-tag-stack
---
tag: 'serial loops'
limit: 2
---
::

## Downloads
Downloads are available for Windows, macOS (Intel and Apple Silicon) and Linux (Debian Package) [on GitHub](https://github.com/haroohie-club/SerialLoops/releases). We offer both release (recommended) and nightly pre-release builds.


::button-link
---
color: 'sl-blue'
icon: 'fa6-solid:download'
link: 'https://github.com/haroohie-club/SerialLoops/releases/latest'
---
Download Latest
::


## Installation
The following prerequisites need to be installed in order to use Serial Loops:

* The [.NET 6.0 runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
* [devkitARM](https://devkitpro.org/wiki/Getting_Started)
    - Using the Windows graphical installer, you can simply select the devkitARM (Nintendo DS) workloads
    - On macOS and Linux, run `sudo dkp-pacman -S nds-dev` from the terminal after installing the devkitPro pacman distribution.

Additionally, on Linux, you will need to install OpenAL. On Ubuntu/Debian (which are the distros we test on), it can be installed in a single command:
```
sudo apt install libopenal-dev
```

## Bugs
Please file bugs on our [GitHub Issues Tracker](https://github.com/haroohie-club/SerialLoops). Please include the following information:
* The platform you are running Serial Loops on
* The version of the Chokuretsu ROM you are using (Japanese, patched English ROM, etc.)
* A description of the steps required to reproduce the issue
* The relevant logs for the issue (can be found in ~/SerialLoops/Logs)