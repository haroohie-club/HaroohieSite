---
title: &title 'Serial Loops v0.2 is out now – with more powerful editors and better stability!'
description: &desc 'The second version of Serial Loops makes the editor even more powerful and intuitive, fixes a ton of bugs, and improves stability!'
locale: 'en'
navigation:
  author: 'William'
  year: 2023
  month: 06
  day: 25
  tags: ['chokuretsu', 'serial loops']
  image: '0007/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0007/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-06-25-serial-loops-0-2-is-out-now'
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

The second version of Serial Loops makes the editor even more powerful and intuitive, fixes a ton of bugs, and improves stability!

We've updated the [documentation](/chokuretsu/serial-loops/), so please go read that in order to learn more about how to use the tool!

## Changelog
### New editors
The ability to edit several more parts of the game has been added in v0.2:
* Added the ability to edit subtitle lines that are displayed when voiced lines are played
* Added the ability to edit "place" items (the top screen locations can have their text changed and graphics will be auto-generated)
* Added the ability to edit character nameplates, and consolidated dialogue configs into this editor (can change character names and the graphics will be auto-generated)
* Added topic editing (topics can also be renamed, have their associated scripts changed, can change the weights of time gains in puzzle phase for them)
* Added the ability to edit and replace system textures (things like the opening screen logos and a bunch of random graphics can now be replaced)
* Added the ability to edit the user interface text

### New features
Several new features have also been added:
* Added the ability to rename items for better project organisation
* Added a new crop/resize dialog that makes replacing graphics much easier from within the editor
* Added advanced search that allows for finding and filtering items much more easily by a number of different parameters
* Added the ability to apply common romhacks (such as one to skip the opening movie)
* Chibi & character sprites can now be exported as bitmap sheets and GIFs
* Improved the color reduction algorithm so replaced graphics look a lot nicer in-game

### User interface
v0.2 also brings a number of UI improvements:
* Fixed a number of accuracy issues with the script preview
* Progress bar dialogs will now always sit atop every other window
* Added quick search to the main project explorer on the left, to let you quickly filter items by name
* Added the Save button to the main toolbar
* Added several new icons and updated existing ones to the menu bar
* Added buttons to quickly re-order commands in the Scenario editor

### Linux
Finally, a few improvements for those running Serial Loops on Linux:
* Added an RPM package for Fedora/RHEL/CentOS users
* Improved the deb package for Ubuntu/Debian users

In addition, a number of bug and crash fixes and general program stability improvements (particularly related to the script editor) have been made for a better and more stable experience! Please enjoy using Serial Loops to create your own Haruhi stories!