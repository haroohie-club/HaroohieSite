---
title: 'Character Sprites'
locale: 'zh-hans'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/character-sprite.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/backgrounds'
  next: '/chokuretsu/serial-loops/docs/graphics/chibis'
---

The current version of Serial Loops only allows you to view character sprites, not edit them, so the documentation here will be sparse.
In a future update, Serial Loops will be capable of fully editing character sprites and this documentation will be updated to be more complete.

## Overview

A character sprite is a sprite representing a character that is used in dialogue when speaking to that character. Each sprite has three components:

1. A body
2. A mouth (animated for lip movements while speaking)
3. Eyes (animated for blinking)

Character sprites are controlled by the [`DIALOGUE`](../scripts/commands#dialogue) command in script files.

## In Serial Loops
In the current version of Serial Loops, character sprites can be opened so their animations can be viewed. Additionally, they can be exported either
as a series of frames (which will be the format for editing them in future versions) or as an animated GIF.