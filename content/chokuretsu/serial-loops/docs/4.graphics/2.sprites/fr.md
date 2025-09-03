---
title: 'Images de Personnages'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/character-sprite.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/backgrounds'
  next: '/chokuretsu/serial-loops/docs/graphics/chibis'
---

Character sprites can be replaced in the current version of Serial Loops, but there is little support for doing so. In the next version,
more complete support will be added for this.

## Overview

A character sprite is a sprite representing a character that is used in dialogue when speaking to that character. Each sprite has three components:

1. A body
2. A mouth (animated for lip movements while speaking)
3. Eyes (animated for blinking)

Character sprites are controlled by the [`DIALOGUE`](../scripts/commands#dialogue) command in script files.

## In Serial Loops
In the current version of Serial Loops, character sprites can be opened so their animations can be viewed. Additionally, they can be exported either
as a series of frames or as an animated GIF. You can also view and change the character the sprite is associated with and toggle whether the sprite is considered
"large" by the game or not.

![Character Sprite Editor](/images/chokuretsu/serial-loops/chrsprite-editing.png)

Character sprites _can_ be replaced in the current version of Serial Loops, though it is not recommended at this time. The reason for this is that many sprites
share the *body* component listed above, so currently, changing any individual sprite's body affects all of the sprites that share that same body. In a future version
of Serial Loops, you will be able to view all the sprites that share the same body and choose to replace them all simultaneously or instead opt to add a new body for
a replaced sprite.

To replace sprites in the current version, first export the sprite's frames to a folder with the "Export Frames" button. Then, replace the body as well as the mouth
and eye frames. Each image is appended with the number of frames it is on screen for; for example, a frame that is on screen for three frames will be appended with `_3f`.
Ensure you keep these timings intact, changing them as appropriate for your new animation.