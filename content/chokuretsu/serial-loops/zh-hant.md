---
title: &title 'Serial Loops - Editing Suite for Suzumiya Haruhi no Chokuretsu'
description: &desc 'Serial Loops is an editing suite for Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya), available for Windows, Mac and Linux.'
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
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---
<b class="sl-header">An editing suite for Suzumiya Haruhi no Chokuretsu</b> 

Serial Loops 是一個用於[《涼宮春日的串聯》](/zh-hant/chokuretsu)（涼宮ハルヒの直列）的編輯套件，可在 Windows、Mac 和 Linux 上執行。

<br />
<br />

## 新聞
::blog-tag-stack
---
tag: 'serial loops'
limit: 2
---
::

## Downloads
Downloads are available for Windows, macOS (Intel and Apple Silicon) and Linux [on GitHub](https://github.com/haroohie-club/SerialLoops/releases). We offer both release (recommended) and nightly pre-release builds.


::loopy-download-stack
---
buttonLink: 'https://github.com/haroohie-club/SerialLoops/releases/latest'
color: 'sl-blue'
flathubId: 'club.haroohie.SerialLoops'
---
::


## Bug 彙報
請在我們的 [GitHub Issues](https://github.com/haroohie-club/SerialLoops) 上提交錯誤。請提供以下資訊：
* 執行 Serial Loops 的平臺
* 你正在使用的《串聯》ROM 的版本（日文版、漢化版 ROM 等）
* 描述再現問題所需的步驟
* 該問題的相關日誌（可在 ~/SerialLoops/Logs 中找到）