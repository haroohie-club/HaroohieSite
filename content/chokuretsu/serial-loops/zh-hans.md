---
title: &title 'Serial Loops - 凉宫春日的串联关卡编辑器'
description: &desc 'Serial Loops 是一个用于《凉宫春日的串联》（涼宮ハルヒの直列）的关卡编辑器，可在 Windows、Mac 和 Linux 上运行。'
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
    content: '显示着凉宫春日说出已编辑的文本的 Nintendo DS。'
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
<b class="sl-header">用于《凉宫春日的串联》的编辑套件</b> 

Serial Loops 是一个用于[《凉宫春日的串联》](/zh-hans/chokuretsu)（涼宮ハルヒの直列）的编辑套件，可在 Windows、Mac 和 Linux 上运行。

<br />
<br />

## 新闻
::blog-tag-stack
---
tag: 'serial loops'
limit: 2
---
::

## 下载
可以[在 GitHub 上](https://github.com/haroohie-club/SerialLoops/release)下载用于 Windows、macOS（Intel 和 Apple Silicon 芯片）和 Linux（RPM & Debian 包）的软件。我们提供发布版（推荐）和 nightly 预发布版本。


::button-link
---
color: 'sl-blue'
icon: 'fa6-solid:download'
link: 'https://github.com/haroohie-club/SerialLoops/releases/latest'
---
下载最新版
::


## Bugs
Please file bugs on our [GitHub Issues Tracker](https://github.com/haroohie-club/SerialLoops). Please include the following information:
* The platform you are running Serial Loops on
* The version of the Chokuretsu ROM you are using (Japanese, patched English ROM, etc.)
* A description of the steps required to reproduce the issue
* The relevant logs for the issue (can be found in ~/SerialLoops/Logs)