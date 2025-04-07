---
title: 'Фоновая музыка'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/bgm.png'
  previous: '/chokuretsu/serial-loops/docs/sound'
  next: '/chokuretsu/serial-loops/docs/sound/voice'
---

Элементы фоновой музыки можно открывать и воспроизводить. Однако из-за ограничений реализации вывода звука Serial Loops не позволяет
поиск фоновых треки. 

![Background music editor with loop editing](/images/chokuretsu/serial-loops/bgm-loop-editing.png)

## Замена
Всю фоновую музыку можно заменить одним нажатием кнопки. В настоящее время замена поддерживает преобразование из форматов WAV, FLAC, MP3 и OGG (Vorbis).
Если в какой-то момент вы захотите вернуться к исходной музыке из игры, вы можете нажать кнопку «Восстановить», чтобы сделать это.

## Adjusting Volume
Pressing the "Adjust Volume" button brings up a modal for doing just that. Chokuretsu's music is quieter than a lot of other tracks, so being able to tamp
down the volume is very useful and can be done easily (and visually) from here. For maximum ease of use, one can simply hit the "normalize" button and the
track will have its volume auto-adjusted to match the average peak loudness of the existing in-game tracks.

![Background music volume adjust dialog](/images/chokuretsu/serial-loops/bgm-volume-editing.png)

## Управление зацикливанием треков
Под капотом Chokuretsu использует формат CriWare ADX для фоновой музыки. Основной особенностью этого формата является возможность кодирования циклического кода.
информацию непосредственно в аудиофайл. Serial Loops предоставляет простой способ визуализировать и настроить это вручную. После нажатия кнопки «Управление циклом»
Появитсяокно управления циклом. Отсюда нажатие кнопки воспроизведения приведет к воспроизведению последних пяти секунд перед точкой цикла и первых пяти секунд.
после точки цикла. Вы можете перетаскивать ползунки или вручную вводить числовые шаговые регуляторы, чтобы настроить временные метки начала и окончания цикла.