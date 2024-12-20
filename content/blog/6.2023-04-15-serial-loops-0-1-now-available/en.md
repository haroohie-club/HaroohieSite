---
title: &title 'Serial Loops v0.1 is now available!'
description: &desc 'Today we are very exicted to announce the release of the first version of Serial Loops, a new editing suite for Suzumiya Haruhi no Chokuretsu!'
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

![A screenshot of Serial Loops' script editor](/images/blog/0006/01_serial_loops_script_editing.png)

Hello, everyone! 

Today we're very excited to announce that we're publicly releasing the first version of [Serial Loops](/chokuretsu/serial-loops) for Windows, macOS and Linux. Serial Loops is a new editor for *Suzumiya Haruhi no Chokuretsu* (The Series of Haruhi Suzumiya), the game we're currently working on [translating to English](/chokuretsu).

## The road to Serial Loops
If you've been following our excellent [*Chokuretsu ROM Hacking Challenges*](/blog/2022-10-19-chokuretsu-compression) blog post series, you'll know all about the work Jonko's been doing to reverse engineer the game to enable our English translation patch. First, a bit of background!

### Working in Parallel
As we were wrapping up the work for *Episode 1: The Man-Eating Classroom*, some preliminary work began on starting to understand the inner workings of Chokuretsu's sister game for the Wii, *Suzumiya Haruhi no Heiretsu* (The Parallel of Haruhi Suzumiya). At the time, we knew relatively little about Chokuretsu, and actually had more of an understanding of Heiretsu's internals. Our early work on Heiretsu included reverse-engineering its 3D-environments and scripting engine, the fruits of which yielded an initial prototype of a blender import script for the game's proprietary 3D model format.

![A somewhat janky version of Haruhi Suzumiya imported into the blender window](/images/blog/0006/02_haruhi_blender.png)

As you can see above, this took a while to get right! As work on Heiretsu progressed, we came to a realisation&mdash;we should *totally* make an editor for this game to let people do their own stuff with it!

This idea set in motion the start of a project to build *Parallel Loops* (so named after the time-looping in the game). The first version of the Parallel Loops editor tool enables loading Heiretsu's maps into the Unity game engine editor, and modifying character positions to adjust how environments are laid out in game. 

![A picture of Suzumiya Haruhi no Heiretsu's prologue environment, from above, showing the Oberon docked in the harbour](/images/blog/0006/03_parallel_loops_unity.png)

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

![A screenshot of Serial Loops' update checker](/images/blog/0006/06_serial_loops_update_checker.png)

## How to use it
Like what you see and want to give Serial Loops a try for yourself? We've made [a new section](/chokuretsu/serial-loops) of our website, including full documentation on how to use it. Serial Loops is available for Windows, macOS and Linux, requiring [devkitARM](https://devkitpro.org/) and a Chokuretsu ROM.

We hope you enjoy editing the game using Serial Loops, and look forward to seeing what you make with it!