---
title: Backgrounds
locale: 'de'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/background.png'
  previous: '/chokuretsu/serial-loops/docs/graphics'
  next: '/chokuretsu/serial-loops/docs/graphics/sprites'
---

Backgrounds are used to display visual novel backgrounds as well as CGs (**c**omputer **g**raphics; a common term for full screen art in visual novels
that isn't overlaid with sprites). They can be viewed and edited through the background editor.

## Replacing
Backgrounds can easily be replaced in the background editor. Simply press the "Replace" button and select a new image file from disk. This will open the built-in crop & scale  tool to let you size your image to fit the standard set of background sizes (see below).

### Crop and Scale
You can use the built-in Crop and Scale tool on imported images to scale it and select the area of the image you wish to replace the original graphic with.

![Crop and Scale tool](/images/chokuretsu/serial-loops/crop-and-scale.png)

Once an image file has been selected after choosing "Replace,"" a box overlay cut-out will be layered over the imported bitmap. Using the mouse, you can click and drag this box to change the area of your crop. If you hold the `CONTROL` key, dragging with the mouse will instead move the image. You can also use both the numeric stepper boxes on the right hand side of the menu or the arrow keys to fine-tune the image's position. To reset the position of the image, press the "Apply" button in the "Position Image" section.

Finally, to scale the image, hold `CONTROL` and use your mouse's scroll wheel, or use the numeric steppers also positioned on the right hand side of the menu. To automatically scale an image to fit within the box, press the "Apply" button in the "Scale Image" section. By default, scaling an image will preserve the imported image's aspect ratio; to unlock this association, uncheck the "Preserve Aspect Ratio" check box.

![Background editing](/images/chokuretsu/serial-loops/background-editing.png)

### Background sizes
| Background Type      | Size (WxH in pixels) | Notes                                                                                                  |
|----------------------|----------------------|--------------------------------------------------------------------------------------------------------|
| `KINETIC_SCREEN`     | 256x192              | 16 color images, so make sure your image is exceedingly simple                                         |
| `TEX_BG`             | 256x192              |                                                                                                        |
| `TEX_CG`             | 256x192              |                                                                                                        |
| `TEX_CG_DUAL_SCREEN` | 256x512              | Displayed on both screens, but each portion is taller than the full screen (scrolled with `BG_SCROLL`) |
| `TEX_CG_WIDE`        | 512x192              | Displayed on bottom screen, but wider than the full screen (scrolled with `BG_SCROLL`)                   |
| `TEX_CG_SINGLE`      | 256x256              | Displayed on bottom screen, but taller than bottom screen (scrolled with `BG_SCROLL`)                  |

## CG Titles
Many CGs have titles associated with them that are shown in the Extras CG viewer. Where this is the case, a text box will be shown letting you modify the title.