---
title: 'Фоновая музыка'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/bgm.png'
  previous: '/chokuretsu/serial-loops/docs/sound'
  next: '/chokuretsu/serial-loops/docs/sound/voice'
---

Элементы фоновой музыки можно открывать и воспроизводить. Однако из-за ограничений реализации вывода звука Serial Loops не позволяет
поиск фоновых треки. 

![Редактор фоновой музыки](/images/chokuretsu/serial-loops/sound-editing.png)

## Замена
Всю фоновую музыку можно заменить одним нажатием кнопки. В настоящее время замена поддерживает преобразование из форматов WAV, FLAC, MP3 и OGG (Vorbis).
Если в какой-то момент вы захотите вернуться к исходной музыке из игры, вы можете нажать кнопку «Восстановить», чтобы сделать это.

## Регулировка громкости
Нажатие кнопки «Регулировка громкости» вызывает окно для этого. Музыка из Последовательностей тише, чем многие другие треки, поэтому возможность
Уменьшить громкость очень полезно, и это можно легко (и визуально) сделать отсюда.

## Управление зацикливанием треков
Под капотом Chokuretsu использует формат CriWare ADX для фоновой музыки. Основной особенностью этого формата является возможность кодирования циклического кода.
информацию непосредственно в аудиофайл. Serial Loops предоставляет простой способ визуализировать и настроить это вручную. После нажатия кнопки «Управление циклом»
Появитсяокно управления циклом. Отсюда нажатие кнопки воспроизведения приведет к воспроизведению последних пяти секунд перед точкой цикла и первых пяти секунд.
после точки цикла. Вы можете перетаскивать ползунки или вручную вводить числовые шаговые регуляторы, чтобы настроить временные метки начала и окончания цикла.