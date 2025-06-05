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

## Replacement
All background music can be replaced with a click of a button. The replacement currently supports conversion from WAV, FLAC, MP3, and OGG (Vorbis/Opus) formats.
If at any point you want to revert to the game's original music, you can hit the "Restore" button to do so.

## Регулировка громкости
Нажатие кнопки «Регулировка громкости» вызывает окно для её изменения. Музыка в Последовательностях тише, чем у многих других треков, поэтому возможность
уменшить громкость очень полезна и может быть легко сделана (и визуально) отсюда. Для максимального удобства использования можно просто нажать кнопку «нормализовать», и
громкость трека будет автоматически отрегулирована в соответствии со средней пиковой громкостью существующих игровых треков.

![Background music volume adjust dialog](/images/chokuretsu/serial-loops/bgm-volume-editing.png)

## Управление зацикливанием треков
Под капотом Chokuretsu использует формат CriWare ADX для фоновой музыки. Основной особенностью этого формата является возможность кодирования циклического кода.
информацию непосредственно в аудиофайл. Serial Loops предоставляет простой способ визуализировать и настроить это вручную. После нажатия кнопки «Управление циклом»
Появитсяокно управления циклом. Отсюда нажатие кнопки воспроизведения приведет к воспроизведению последних пяти секунд перед точкой цикла и первых пяти секунд.
после точки цикла. Вы можете перетаскивать ползунки или вручную вводить числовые шаговые регуляторы, чтобы настроить временные метки начала и окончания цикла.