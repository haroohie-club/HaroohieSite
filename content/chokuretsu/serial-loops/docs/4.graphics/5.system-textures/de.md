---
title: System Textures
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/system-texture.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/places'
  next: '/chokuretsu/serial-loops/docs/sound'
---

## Overview
System Textures represent the textures used for *Chokuretsu*'s user interface (such as buttons and menus) as well as other miscellaneous system graphics (such as text flashes and the Haruhi Meter).

## In Serial Loops
Similarly to [backgrounds](/chokuretsu/serial-loops/docs/graphics/backgrounds), System Textures can be exported to a `.png` format, and can be replaced by importing an image from a common format, then scaled to the necessary size with help from the [Crop & Scale tool](/chokuretsu/serial-loops/docs/graphics/backgrounds#crop-and-scale).

![System texture editor](/images/chokuretsu/serial-loops/system-texture-start.png)

Unlike backgrounds, however, the system texture editor presents you with two possible modes of replacement: **Replace** and **Replace with Palette**.
The first option will replace the image but leave the palette of the image unchanged, simply matching the colors on the image to the palette as best it
can. The second overwrite the original palette with a new one. Some system textures (particularly UI elements) share palettes with other system textures,
so replacing the palette can be dangerous and lead to unexpected behavior. For these, you should simply use the **Replace** button. Others, however, have
unique palettes (like the logos, the title screen, and the various episode headers). For these, you can (and should!) safely use **Replace with Palette**.
To help you better understand which images are which, the system texture editor provides a visualization of each texture's palette.

![System texture editor](/images/chokuretsu/serial-loops/system-texture-editing.png)