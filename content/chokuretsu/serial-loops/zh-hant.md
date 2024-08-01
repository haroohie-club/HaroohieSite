---
title: &title 'Serial Loops - 涼宮春日的串聯關卡編輯器'
description: &desc 'Serial Loops 是一個用於《涼宮春日的串聯》（涼宮ハルヒの直列）的關卡編輯器，可在 Windows、Mac 和 Linux 上執行。'
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
    content: '顯示著涼宮春日說出已編輯的文字的 Nintendo DS。'
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
<b class="sl-header">用於《涼宮春日的串聯》的編輯套件</b> 

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

## 下載
可以[在 GitHub 上](https://github.com/haroohie-club/SerialLoops/releases)下載用於 Windows、macOS（Intel 和 Apple Silicon 晶片）和 Linux（RPM & Debian 包）的軟體。我們提供釋出版（推薦）和 nightly 預釋出版本。


::button-link
---
color: 'sl-blue'
icon: 'fa6-solid:download'
link: 'https://github.com/haroohie-club/SerialLoops/releases/latest'
---
下載最新版
::


## Bug 彙報
請在我們的 [GitHub Issues](https://github.com/haroohie-club/SerialLoops) 上提交錯誤。請提供以下資訊：
* 執行 Serial Loops 的平臺
* 你正在使用的《串聯》ROM 的版本（日文版、漢化版 ROM 等）
* 描述再現問題所需的步驟
* 該問題的相關日誌（可在 ~/SerialLoops/Logs 中找到）