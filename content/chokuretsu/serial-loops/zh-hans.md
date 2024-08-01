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
可以[在 GitHub 上](https://github.com/haroohie-club/SerialLoops/releases)下载用于 Windows、macOS（Intel 和 Apple Silicon 芯片）和 Linux（RPM & Debian 包）的软件。我们提供发布版（推荐）和 nightly 预发布版本。


::button-link
---
color: 'sl-blue'
icon: 'fa6-solid:download'
link: 'https://github.com/haroohie-club/SerialLoops/releases/latest'
---
下载最新版
::


## Bug 汇报
请在我们的 [GitHub Issues](https://github.com/haroohie-club/SerialLoops) 上提交错误。请提供以下信息：
* 运行 Serial Loops 的平台
* 你正在使用的《串联》ROM 的版本（日文版、汉化版 ROM 等）
* 描述再现问题所需的步骤
* 该问题的相关日志（可在 ~/SerialLoops/Logs 中找到）