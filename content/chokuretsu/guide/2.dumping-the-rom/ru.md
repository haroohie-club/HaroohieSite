---
title: 'ROM Дампинг'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
---

Чтобы создать дамп ROM файла , помимо игры вам понадобится консоль Nintendo DS или 3DS. Для некоторых методов потребуются дополнительные устройства, такие как SD-карта или телефон, способный создать незащищённую точку доступа.

---

**Выберите платформу для дампа ROM файла:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS']
---
<div class="platform-filtered platform-nintendo_ds">

### Дампинг на Nintendo DS или DS lite
Существует два способа дампа игры с помощью Nintendo DS или Nintendo DS lite. Оба требуют использования флеш-картриджа в первом слоте (гнездо для картриджа DS).

Первый метод использует взлом через Wi-Fi для дампа по протоколу передачи файлов (FTP). Второй метод потребует пару флэш-карт в 1 и 2 слоте (слот для картриджа GBA) для прямого ROM дампа .

#### Дамп через WI-Fii
**Требования:**
* Консоль Nintendo DS или DS lite.
* *Последовательности Харухи Судзумии*
* Флэш-картридж в первом слоте (например, картридж R4. Также карта SD или microSD для загрузки на нее данных по мере необходимости)
* Смартфон, планшет или другое устройство, которое может создавать незащищенную или защищенную WEP точку доступа Wi-Fi.
  - К сожалению, большинство современных компьютеров не способны на это. Лучшими устройствами для этого являются Android-смартфоны.
  - Устройства Apple и Windows (включая iPhone) не способны создавать незащищенные или защищенные с помощью WEP точки доступа.
* Компьютер, который вы можете использовать для [загрузки wooddumper] (https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) и подключения к указанной точке доступа
* Игра DS с поддержкой Wi-Fi. Неважно, что поддержка закончилась. К сожалению, *Suzumiya Haruhi no Chokuretsu* не поддерживает Wi-Fi.

**Метод:**
1. С помощью смартфона, планшета или другого устройства, способного создать беспроводную точку доступа, создайте незащищенную (без пароля) или защищенную WEP точку доступа (должна быть защищена WEP, поскольку WPA и другие современные стандарты шифрования не поддерживаются DS).
2. На другом компьютере [загрузите wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/). Затем подключите этот компьютер к только что созданной точке доступа.
3. Установите wooddumper.nds (не версию для слота 2) в правую часть флэш-картриджа через SD-карту.
4. Вставьте игру Nintendo DS с поддержкой подключения Nintendo Wi-Fi и перейдите в меню Wi-Fi. Подключитесь к созданной вами точке доступа.
5. Выходим из игры и вынимаем картридж. Теперь вставьте флэш-картридж, на который вы только что установили Wooddumper, и запустите его на своем DS.
6. Следуйте инструкциям на экране и вставьте картридж с *Последовательностями Харухи Судзумии*, когда появится соответствующий запрос. Продолжайте, пока вам не будет предоставлен IP-адрес для подключения с помощью FTP-клиента.
7. Используя FTP-клиент, например [net2ftp](https://www.net2ftp.com/), встроенный браузер тот или иной, например [FileZilla](https://filezilla-project.org/), введите IP-адрес в соответствующее поле. Вам не нужно указывать имя пользователя или пароль.
8. Скопируйте .nds ROM и .txt файлына свой компьютер. Вы можете приступить к [Rom патчингу](/chokuretsu/guide/patching-the-rom).

#### Дамп с использованием двухслотовых флэш-картриджей
**Требования:**
* Консоль Nintendo DS или DS lite
* *Последовательности Харухи Судзумии*
* Флэш-картридж Slot-1 (слот DS) (например, картридж R4)
* Флэш-картридж Slot-2 (слот GBA), совместимый с вашим картриджем Slot-1 (например, карта E-Link)
* Карты SD или microSD (или правильные соединительные кабели) для загрузки и удаления данных с ваших флэш-картриджей, если это необходимо
* Компьютер, который вы можете использовать для загрузки wooddumper

**Метод:**
1. [Загрузите wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) на свой компьютер.
2. Установите приложение wooddumper_slot2.nds homebrew в правую часть вашего флеш-картриджа Slot-1 с помощью SD-карты.
3. Вставьте флеш-картриджи Slot-1 и Slot-2 в свой DS.
4. Откройте wooddumper через флеш-картридж.
5. Следуйте инструкциям на экране и вставьте картридж *Последовательности Харухи Судзумии*, когда будет предложено. Продолжайте, пока не увидите, что дамп завершен.
6. Извлеките картридж Slot-2 и вставьте SD-карту из него в ПК (или в случае некоторых картриджей подключите ее напрямую к ПК)
7. Скопируйте файл .nds ROM и файл .txt на свой компьютер. Вы можете приступить к [патчингу вашего ROM](/chokuretsu/guide/patching-the-rom).

</div>

<div class="platform-filtered platform-nintendo_dsi">

### Дампинг с помощью Nintendo DSi

Чтобы сделать дамп с помощью Nintendo DSi, нам понадобится установить на систему пользовательскую прошивку (CFW), известную как Twilight Menu++, и Unlaunch, чтобы запустить Godmode9i, который позволяет нам сделать дамп картриджа в файл `.nds`.

**Требования:**
* Консоль Nintendo DSi или Nintendo DSi XL
* *Последовательности Харухи Судзумии*
* Карта SD емкостью не менее 2 ГБ
* Компьютер с устройством чтения карт SD/адаптером для чтения USB SD карт

**Метод:**
::guide-notice
Пожалуйста, будьте внимательны, чётко следуйте этим шагам, чтобы избежать блокировки вашей системы.
::
1. Следуйте [шагам на dsi.cfw.guide](https://dsi.cfw.guide/launching-the-exploit.html), чтобы установить Twilight Menu++ и Unlaunch на ваш DSi.
2. [Загрузите GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) и извлеките файл с помощью утилиты, такой как 7Zip на Windows или The UnArchiver на macOS.
3. Извлеките SD-карту из вашего DSi и вставьте ее в компьютер.
4. Поместите извлеченный файл GodMode9.nds в любое место на вашей SD-карте.
5. Вставьте SD-карту обратно в ваш DSi.
6. Вставьте картридж с игрой *Suzumiya Haruhi no Chokuretsu* в DSi.
7. Запустите Twilight Menu++, как вам было показано, и запустите GodMode9i.
8. Выберите опцию «NDS GAMECARD».
9. Нажмите кнопку A, чтобы выбрать «да», чтобы сбросить картридж.
10. После завершения вы можете выключить DSi и извлечь SD-карту из системы.
11. Вставьте SD-карту обратно в компьютер. Перейдите в (SD_CARD_ROOT)/gm9i/out/ на SD-карте. Скопируйте файл .nds на компьютер.


</div>

<div class="platform-filtered platform-nintendo_3ds">

### Дампинг с помощью Nintendo 3DS

Чтобы выполнить дамп с помощью консоли Nintendo 3DS или 2DS, нам потребуется установить на систему пользовательскую прошивку (CFW), известную как Luma3DS, и bootstrap9, чтобы запустить Godmode9, который позволяет нам выполнить дамп картриджа в файл .nds.

**Требования:**
* Консоль Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL или New 2DS XL
* *Suzumiya Haruhi no Chokuretsu*
* Карта SD емкостью не менее 2 ГБ
* Компьютер с устройством чтения карт SD/адаптером для чтения USB SD карт
  * В некоторых случаях может потребоваться использовать совместимый с DS или DSi флэш-картридж.

**Метод:**
::guide-notice
Будьте осторожны, выполняя эти шаги, чтобы избежать блокировки вашей системы.
::
* Следуйте [шагам на 3ds.hacks.guide](https://3ds.hacks.guide/get-started) для установки Luma3DS и bootstrap9 на вашу 3DS.
* Продолжайте следовать [руководству по установке GodMode9](https://3ds.hacks.guide/finalizing-setup), а также другому необходимому программному обеспечению homebrew на вашу 3DS.
* Выключите консоль (не просто переведите ее в спящий режим, а полностью отключите)
* Вставьте игровой картридж *Последовательности Харухи Судзумии* в вашу 3DS.
* Удерживайте кнопку START и нажмите кнопку питания, чтобы включить консоль. Это должно запустить GodMode9. Если этого не произошло, выключите консоль и повторите попытку.
* Используйте D-Pad для перехода к `[C:] GAMECART`
* Нажмите кнопку A на `[TitleID].nds`, чтобы выбрать его. Если будет предложено выбрать тип дампа, нажмите кнопку A еще раз.
* Выберите Copy to 0:/gm9/out на нижнем экране, чтобы скопировать дамп на SD-карту.
* После завершения дампа выключите систему и извлеките SD-карту.
* Вставьте SD-карту обратно в компьютер. Перейдите к /gm9/out/ на SD-карте. Скопируйте файл .nds на компьютер.

</div>
::

---

## Прежде чем продолжить
Теперь вы должны были выгрузить свою игру в файл ROM `.nds`, который вы можете пропатчить. Переместите его в удобное место.

*Информация о ROM дампинге предоставлена участниками [dumping.guide](https://dumping.guide/carts/nintendo/ds), [dsi.cfw.guide](https://dsi.cfw.guide/) и [3ds.hacks.guide](https://3ds.hacks.guide/).*