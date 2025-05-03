---
title: Sfondi
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/background.png'
  previous: '/chokuretsu/serial-loops/docs/graphics'
  next: '/chokuretsu/serial-loops/docs/graphics/sprites'
---

Gli sfondi vengono usati durante i dialoghi dei personaggi. È possibile modificare questi sfondi grazie all'editor apposta.

## Replacing
Backgrounds can easily be replaced in the background editor. Simply press the "Replace" button and select a new image file from disk. This will open the built-in crop & scale tool to let you size your image to fit the standard set of background sizes (see below).

### Crop and Scale
Once an image file has been selected after choosing "Replace", a box overlay cut-out will be layered over the imported bitmap. Using the mouse, you can click and drag the image to adjust its crop; the portion that is
uncovered in the box will be the final image. Additionally, you can use the mouse wheel to scale the image up and down. Additionally, you can use the arrow keys to move the image in any direction more precisely.

![Crop and Scale tool](/images/chokuretsu/serial-loops/crop-and-scale.png)

Finally, you can press the "Apply" button to scale the image to fit the crop, preserving its aspect ratio.

![Background editing](/images/chokuretsu/serial-loops/background-editing.png)

### Background sizes
| Tipo di sfondo      | Dimensioni (AxL in pixel) | Note                                                                                                  |
|----------------------|----------------------|--------------------------------------------------------------------------------------------------------|
| `KINETIC_SCREEN`     | 256x192              | massimo 16 colori, assicurati che le immagini da aggiungere siano semplici                                         |
| `TEX_BG`             | 256x192              |                                                                                                        |
| `TEX_CG`             | 256x192              |                                                                                                        |
| `TEX_CG_DUAL_SCREEN` | 256x512              | L'immagine appare su ambo gli schermi, ma le immagini sono più alte (naviga con `BG_SCROLL`) |
| `TEX_CG_WIDE`        | 512x192              | L'immagine appare sullo schermo inferiore, ma è molto più larga (naviga con `BG_SCROLL`)                   |
| `TEX_CG_SINGLE`      | 256x256              | L'immagine appare sullo schermo inferiore ma è molto più alta, (naviga con `BG_SCROLL`)                  |

## CG
Le immagini CG (Computer Graphics, termine molto usato nel campo delle visual novel), hanno dei titles che si possono trovare nel album di gioco. Se sarà possibile ti verrà data la possibilità di modificare i loro nomi.