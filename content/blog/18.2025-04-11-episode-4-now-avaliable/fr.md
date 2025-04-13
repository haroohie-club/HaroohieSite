---
title: &title 'The Series of Haruhi Suzumiya – Episode 4 Now Available! (And More!)'
description: &desc 'Play Episode 4: Big Mum Flower in Version 0.8 of Suzumiya Haruhi no Chokuretsu''s English Patch, available now! Also, check out the new version of Serial Loops and the latest ROM hacking video from Jonko!'
navigation:
  description: *desc
  author: 'Jonko'
  year: 2025
  month: 04
  day: 11
  tags: ['chokuretsu', 'releases', 'serial loops', 'romhacking', 'video']
  image: '0018/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0018/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2025-04-11-episode-4-now-available'
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

::youtube-video
----
video: pOWearWDVJM
----
::

It's been a long time coming. You've all been very patient. And now... it's here! Enjoy playing the longest episode in the game, *Big Mum Flower*!

A huge thank you to Hans Harmony (check out his channel [here](https://www.youtube.com/@ManaSenpaiSeries)) for once again putting together our release trailer!

Of course, as well as Episode 4, we've been going back and improving other areas of our patch too. Take a look at our changelog below!

## What's new in v0.8
* *Episode 4: Big Mum Flower* has been translated and can now be played in English! This was a truly massive undertaking, so please enjoy!
* As usual, we have continued error-checking previous episodes for quality and consistency. This should be the smoothest experience yet!
* We have also fixed a number of issues we discovered in the base game to ensure the highest quality experience. Notably:
  - A miscolored Haruhi sprite has had its palette corrected
  - An issue where a very loud sound would play in one scene due to not properly spacing four separate sound effects has been remedied
  - A few improperly attributed dialogue lines have been changed to reflect who is actually speaking
  - A consistency error with a sprite has been rectified

### Known Issues
There is a known issue with using Mikuru's ability during the puzzle phase&mdash;occasionally, it can cause the game to freeze. The cause of this is currently
unknown but this will be fixed prior to the release of the v1.0 patch. In the meantime, please ensure you save prior to entering the puzzle phase! 

## Download the release
Please check [the guide](/chokuretsu/guide) for how to apply the patch to your Nintendo DS ROM file.

* [Online ROM patcher](/chokuretsu/patch)
* [Download patch file](https://github.com/haroohie-club/ChokuretsuTranslationRelease/releases/latest)

Oh, and by the way, there's actually more that we're releasing today! Presenting...

## Serial Loops v0.3
We're also releasing the long-awaited (probably?) update to our editing suite for *The Series of Haruhi Suzumiya*, **Serial Loops**! We've completed a complete
overhaul of the UI, fixed tons of bugs, and (of course) added a bunch of snazzy new features! Here's a curated changelog of what's new:

* New items have been added:
  - SFX items have been added but are not yet editable. This means you can preview/change a character's voice font now!
  - Tutorial mappings can now be edited
  - "Item" items (unused in the final version of the game!) can now be viewed and replaced
  - Layout items have been added&mdash;edit a few in-game displays (more to be added in future updates)
  - Chess puzzle items have been added and can be partially edited
* Multiple editors have been overhauled and have had their functionality expanded
  - The map editor now displays maps pixel-perfectly as they appear in-game and allows you to filter the content by layers; you can also now visualize things like interactive objects
  - The group selection editor has been redone completely to resemble in-game group selections and allow partial editing of them
  - Kinetic backgrounds ("KBGs") can now be replaced in the background editor
  - The sound editors (BGM & voice) have had their performance significantly improved on macOS and Linux
  - Background music tracks can now have their volume normalized to match the volume of other tracks in the game
  - In addition to having many bugs fixed and its performance significantly improved, the script editor now boasts an interactable objects editor as well
* Chibi animations can now be fully replaced
* A fully-functional save editor has been introduced&mdash;edit your Chokuretsu save games to your heart's content!
* More ASM hacks have been added, including hacks allowing you to control other characters in the isometric map investigation phases
  - Additionally, ASM hacks can now be created via an in-app dialog
* A "run-to-here" feature has been implemented in the way of allowing the user to right-click a command in the script editor and overwrite their quick save with that exact location
* Script previews are now animated
* Significant performance boosts in a variety of places
* Lots of new and convenient installation options: a packaged installer on Windows and macOS as well as a Flatpak on Linux!

For more information, check out our [documentation](/chokuretsu/serial-loops)!

## New Video from Jonko
Finally, the last announcement: Jonko has published a new video today! Check out the story of how he reverse-engineered Chokuretsu's script files in order to make Serial Loops!

::youtube-video
----
video: p3wq9NFU99c
----
::