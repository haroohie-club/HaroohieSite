---
title: 'Chibis'
locale: 'en-us'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/chibi.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/sprites'
  next: '/chokuretsu/serial-loops/docs/graphics/places'
---

The current version of Serial Loops only allows you to view chibis, not edit them, so the documentation here will be sparse.
In a future update, Serial Loops will be capable of fully editing chibis and this documentation will be updated to be more complete.

## Overview
Chibis are small animated sprites used on the top screen during regular visual novel segments and controlled/interacted with during the
investigation and puzzle phases.

Chibis can have a number of animations associated with them:

| Animation Number | Description |
|------------------|-------------|
| 00 | Default idle animation |
| 01 | Walk cycle animation |
| 02 | "Searching" animation (puzzle phase) |
| 03 | "Cleaning" animation (puzzle phase) |
| 04 | Lose animation (puzzle phase) |
| 05 | Win animation (puzzle phase) |
| 06 | Technique animation (puzzle phase) |
| 07 | Technique failed animation (puzzle phase) |
| 08 | Running animation (Haruhi has a different one for this) |
| 10 | Alternate idle animation |
| 97-99 | Still poses |

Additionally, each animation can have variants for the direction the chibi is facing (back right, back left, front right, front left), though not all have all directions.

## In Serial Loops
In the current version of Serial Loops, chibis can be opened and their animations viewed. Animations can be selected with a drop down and the direction 
faced can be chosen with a series of buttons. In addition to the full animation displayed up top, the individual frames can be seen in a box below.
Finally, like character sprites, chibis can be exported as a series of frames (for editing in the future) or as an animated GIF.

![Chibi editor](/images/chokuretsu/serial-loops/chibi-editing.png)