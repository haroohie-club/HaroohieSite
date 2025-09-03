---
title: Arrière-plans
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/background.png'
  previous: '/chokuretsu/serial-loops/docs/graphics'
  next: '/chokuretsu/serial-loops/docs/graphics/sprites'
---

Les arrières-plans sont utilisés pour afficher les arrières plans de ce "visual novel" aussi bien que des CGs (**c**omputer **g**raphics ; un terme commun pour de l'art plein-écran/full-screen dans les "visual novels"
qui n'est pas superposé/overlaid avec des sprites). Ils peuvent être visionnés et édités avec l'éditeur d'arrières plans.

## Replacing
Les Arrières-Plans peuvent êtres remplacés avec facilité dans l'éditeur d'arrière-plan. Appuyez simplement sur le bouton "Remplacer" et sélectionnez une nouveau fichier image file depuis votre disque dur. Ceci ouvrira l'outil built-in de crop & scale pour vous permettre de redimensionner votre image pour remplir le set standard de tailles d'arrière-plan (voir ci-dessous).

### Crop and Scale
Once an image file has been selected after choosing "Replace", a box overlay cut-out will be layered over the imported bitmap. Using the mouse, you can click and drag the image to adjust its crop; the portion that is
uncovered in the box will be the final image. Additionally, you can use the mouse wheel to scale the image up and down. Additionally, you can use the arrow keys to move the image in any direction more precisely.

![Crop and Scale tool](/images/chokuretsu/serial-loops/crop-and-scale.png)

Finally, you can press the "Apply" button to scale the image to fit the crop, preserving its aspect ratio.

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