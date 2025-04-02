---
title: 'Чиби'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/chibi.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/sprites'
  next: '/chokuretsu/serial-loops/docs/graphics/places'
---

## Обзор
Чибиши — это небольшие анимированные спрайты, используемые на верхнем экране во время обычных сегментов визуальной новеллы и управляемые/взаимодействующие во время
фазы расследования и головоломки.

С Чибишами связано несколько анимаций:

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
| 97-99 | Still poses used for good, neutral, and bad group selection |

Кроме того, каждая анимация может иметь варианты направления, в котором смотрит чиби (сзади вправо, сзади слева, спереди справа, спереди слева), хотя не все имеют все направления.

## In Serial Loops
In the current version of Serial Loops, chibis can be opened and their animations viewed. Animations can be selected with a drop down and the direction 
faced can be chosen with a series of buttons. In addition to the full animation displayed up top, the individual frames can be seen in a box below.
Like character sprites, chibis can be exported as a series of frames (for editing in the future) or as an animated GIF.

Chibis can be fully replaced using the "Replace Frames" button. Simply select a series of images to import (optionally suffixed with the number of frames they should last, e.g. `_30f`)
and the editor will import them to replace the current animation. After you have imported the animation, you can edit the timing of each frame using the numeric steppers in the frames
display.

![Редактор Чиби](/images/chokuretsu/serial-loops/chibi-editing.png)

In a future version of Serial Loops, you will be able to add more chibis and animations for each chibi.