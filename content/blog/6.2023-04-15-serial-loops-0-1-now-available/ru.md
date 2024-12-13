---
title: &title 'Serial Loops v0.1 теперь доступна!'
description: &desc 'Сегодня мы очень рады объявить о выпуске первой версии Serial Loops, нового пакета редактирования для Последовательностей Харухи Судзумии'
navigation:
  description: *desc
  author: 'William'
  year: 2023
  month: 04
  day: 15
  tags: ['chokuretsu', 'serial loops']
  image: '0006/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0006/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-04-16-serial-loops-0-1-now-available'
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

![Скриншот редактора скриптов Serial Loops](/images/blog/0006/01_serial_loops_script_editing.png)

Привет всем! 

Сегодня мы очень рады сообщить, что публично выпускаем первую версию [Serial Loops](/chokuretsu/serial-loops) для Windows, macOS и Linux. Serial Loops — это новый редактор для *Последовательностей Харухи Судзумии*, игры, над которой мы сейчас работаем [переводя на английский](/ru/chokuretsu).

## Путь к Serial Loops
Если вы следили за нашей замечательной серией постов в блоге [*Проблемы ромхакинга Последовательностей*](/blog/2022-10-19-chokuretsu-compression), вы будете знать всё о работе, которую Jonko проделал для обратного-инжиниринга игры. чтобы включить наш патч для перевода на английский язык. Сначала немного предыстории!

### Работа над Параллелями
Когда мы завершали работу над *Эпизод 1: Класс-людоед*, началась некоторая предварительная работа по пониманию внутренней работы родственной игры Порследовательностей для Wii, *Параллели Харухи Судзумии*. В то время мы относительно мало знали о Последовательностях и, на самом деле, лучше разбирались во внутреннем устройстве Параллелей. Наша ранняя работа над ними включала в себя обратный-инжиниринг 3D-среды и скриптового движка, результатом которого стал первоначальный прототип скрипта импорта в блендер для собственного формата 3D-модели игры.

![Несколько неуклюжая версия Харухи Судзумии, импортированная в окно блендера.](/images/blog/0006/02_haruhi_blender.png)

Как вы можете видеть выше, это заняло некоторое время, чтобы всё исправить! По мере продвижения работы над Параллелями мы пришли к выводу, что нам необходимо *полностью* создать редактор для этой игры, чтобы люди могли делать с ним что угодно!

Эта идея положила начало проекту по созданию *Параллельных циклов* (названных так в честь зацикливания времени в игре). Первая версия инструмента редактора Parallel Loops позволяет загружать карты Параллелей в редактор игрового движка Unity и изменять положения персонажей, чтобы настроить расположение окружения в игре. 

![Фотография пролога Последовательностей Харухи Судзумии сверху, на которой виден Оберон, пришвартованный в гавани.](/images/blog/0006/03_parallel_loops_unity.png)

Ultimately, our work on Heiretsu as a team had to be put on hold as we decided to focus more time on wrapping up Chokuretsu's first episode. As work on the translation of *Episode 2: The Unfinished Sonata* wrapped up, however, the thought of making an editor re-emerged. By this time, Jonko's efforts had revealed a lot of the unanswered mysteries around Chokuretsu (which we look forward to detailing in future blog posts!).

After some fun discussion and a few ideas got thrown around internally for how Chokuretsu could be adapted as a base for other DS visual novels, we decided to start planning and build out a full editing program for it&mdash;Serial Loops!

### Designing an editor from scratch
![A view of Serial Loops' project creation screen very early on in development](/images/blog/0006/04_serial_loops_as_a_baby.png)

Our objective for Serial Loops was to make an easy-to-use and powerful editor for Chokuretsu, to a point where it could be used to create a completely custom DS visual novel; one which could take advantage of the unique mechanics provided by the Chokuretsu engine, such as its isometric maps and puzzles.

Early on, we settled on a few key design choices. We'll elaborate more on these through development, but to give you an idea of some of the key choices we've made:
* Abstracting the different things in Chokuretsu you can edit into "items," but not representing the actual file system of the game itself
* Using a base and iterative directory system for laying on applied changes to a base ROM
* Using Eto.Forms to build out a cross-platform UI, to make the tool easy to use for newcomers

![Brief timelapse of Serial Loops in Development](/images/blog/0006/05_serial_loops_dev.gif)

The current version of Serial Loops which we're releasing today, v0.1, supports the following:
* Creating, saving, opening, building and running projects from within the editor
* Tools for searching items, including text within items (dialogue lines)
* Editing game banner data, including its icon and name
* Editing game scripts (including dialogue, character layouts on maps, top-screen data & more), with a live preview
* Editing the game scenario flow (i.e. which scripts get executed in which order)
* Replacing backgrounds, with automatic resizing
* Replacing and levelling audio, modifying BGM loop parameters, updating BGM track names as they appear in the bonus room
* Replacing voiced lines
* Viewing (but not editing) maps, puzzles, topics, place name graphics, chibis (and animations), character portraits (and animations), and a number of other miscellaneous items!

For more details on what's possible, [check the docs!](/chokuretsu/serial-loops/docs). We think with the tools being made available today, people will not only be able to make their own translations of the base game, but also put together some sweet Haruhi-based fan-games! As the app is built out further, we hope to make it a powerful tool for building out DS visual novels.

### Where to from here?
We've got a lot planned for Serial Loops and we intend to share more about our process of working on it on our blog and in updates, so be sure to [join our Discord](https://discord.gg/nesRSbpeFM) for updates! We plan on releasing nightly builds of Serial Loops with the latest changes as "pre-releases", as well as more distantly-spaced "stable" releases. The in-app update checker will inform you when an update is available for either release channel you wish to use, which you can configure through the preferences window.

![Скриншот средства проверки обновлений Serial Loops](/images/blog/0006/06_serial_loops_update_checker.png)

## How to use it
Like what you see and want to give Serial Loops a try for yourself? We've made [a new section](/chokuretsu/serial-loops) of our website, including full documentation on how to use it. Serial Loops is available for Windows, macOS and Linux, requiring [devkitARM](https://devkitpro.org/) and a Chokuretsu ROM.

Мы надеемся, что вам понравится редактировать игру с помощью Serial Loops, и с нетерпением ждём возможности увидеть того, что вы с ней сделаете!