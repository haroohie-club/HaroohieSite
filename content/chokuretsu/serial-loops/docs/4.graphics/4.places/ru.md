---
title: 'Места'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/place.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/chibis'
  next: '/chokuretsu/serial-loops/docs/graphics/system-textures'
---

Places represent the location graphics that appear on the top screen during scripts. Serial Loops supports editing these through a simple text editor to automatically produce valid place graphics.

## Обзор
Места — это графические элементы, отображающие текущее местоположение, в котором происходит сцена. Они отображаются на верхнем экране и
выбираются с помощью команды [`SET_PLACE`](../scripts/commands#set_place).

## В Serial Loops
Чтобы отредактировать графику места, замените текст в поле на свой собственный, и Serial Loops автоматически сгенерирует допустимую графику места.
Обратите внимание, что если предоставленный текст превышает максимальную ширину графики, будет вставлено горизонтальное многоточие (...); поэтому избегайте длинных названий мест.
При редактировании графики места из значений по умолчанию фон станет зеленым (который отображается прозрачно в игре).

![Place Editor](/images/chokuretsu/serial-loops/place-editor.png)