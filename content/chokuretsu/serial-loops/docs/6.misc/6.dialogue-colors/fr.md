---
title: 'Couleurs de Dialogue'
navigation:
  faicon: 'fa6-solid:palette'
  previous: '/chokuretsu/serial-loops/docs/misc/ui-text'
  next: '/chokuretsu/serial-loops/docs/misc/tutorial-mappings'
---

## Overview
While the default color for Chokuretsu's dialogue text is white, it can be styled through the use of an [operator on the `DIALOGUE` command](../scripts/commands#dialogue)
to appear in a number of other colors. The base game only uses seven colors (#P00, #P01, #P03, #P04, #P05, #P06, and #P07); however, there is room for up to 16 without needing hacks.

## In Serial Loops
To edit existing dialogue colors and add your own, you can go to "Tools" &rarr; "Edit Dialogue Colors" and open the dialogue colors editor. In this dialog, you will be presented
with 16 color pickers, each labeled with the color code they are represented by (0-15). Four of these colors are special:

* `#P00`: Default text color
* `#P01`: Monologue text color
* `#P04`: Information text color
* `#P07`: Black text color (used on white backgrounds) and subtitle shadow color in translation patch

`#P02` is not used in the base game and can safely be replaced without altering any existing scripts.

Simply select the color you want, change it, and hit save to modify it. If at any time you want to revert to one of the game's default colors,
simply click the middle "palette" button on the color picker and select one of the six original colors.

![Edit Dialogue Colors dialog](/images/chokuretsu/serial-loops/dialogue-color-editing.png)
