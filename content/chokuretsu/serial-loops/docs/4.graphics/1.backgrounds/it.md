---
title: Sfondi
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/background.png'
  previous: '/chokuretsu/serial-loops/docs/graphics'
  next: '/chokuretsu/serial-loops/docs/graphics/sprites'
---

Gli sfondi vengono usati durante i dialoghi dei personaggi. È possibile modificare questi sfondi grazie all'editor apposta.

## Rimpiazzare
È possibile cambiare gli sfondi grazie all'editor apposta. Per farlo, clicca il tasto "Sostituisci" e scegli un'immagine dal tuo computer. Si aprirà uno strumento
per modificare e scalare le immagini per ridimensionarle per il gioco.

### Scalare
Puoi usare lo strumento per modificare e importare le immagini, starà a te scegliere quale immagine sostituire quella vecchia con quella nuova.

![Crop and Scale tool](/images/chokuretsu/serial-loops/crop-and-scale.png)

Una volta scelta l'immagine clicca "Sostituisci", apparirà una finestra. Usando il mouse, puoi modificare l'immagine trascinandola dentro la finestra, puoi anche scalarla dentro la finestra. Tenendo premuto CRTL e trascinando il mouse sposterai l'immagine. Puoi anche usare il tastierino numerico o le freccette per aggiustare l'immagine. Per ripristinare la posizione dell'immagine, premi "Applica" nella sezione "Posizione immagine".

Per ridimensionare l'immagine, premi CTRL e, usando la rotellina del mouse o il tastierino numerico, naviga nel menù. Per dimensionare l'immagine per farcela stare dentro i limiti del gioco, premi "Applica" nella sezione "Scala immagine". Di base, un'immagine manterrà le sue proporzioni, per rimuovere questa
caratteristica, rimuovi il check da "Mantieni proporzioni".

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