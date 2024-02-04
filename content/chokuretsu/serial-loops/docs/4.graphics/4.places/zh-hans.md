---
title: 'Places'
locale: 'en'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/place.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/chibis'
  next: '/chokuretsu/serial-loops/docs/graphics/system-textures'
---

Places represent the location graphics that appear in the top screen during
scripts. Serial Loops supports editing these through a simple text editor to
automatically produce valid place graphics.

## Overview
Places are the graphics which display the current location that a scene is taking place in. They are displayed on the top screen and
chosen with the [`SET_PLACE`](../scripts/commands#set_place) command.

## In Serial Loops
To edit a place graphic, replace the text in the box with your own, and Serial Loops will automatically generate a valid place graphic.
Note if the provided text exceeds the maximum width of the graphic, a horizontal ellipsis (...) will be inserted; so avoid long place names.
When editing place graphics from their default values, the background will turn green (which is rendered transparently in-game).

![Place Editor](/images/chokuretsu/serial-loops/place-editor.png)