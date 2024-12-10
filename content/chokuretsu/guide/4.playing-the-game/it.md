---
title: 'Giocare il gioco'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
---

Ora che la Patch è installata, è ora di giocare!

---

**Scegli dove giocare il gioco:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS', 'Emulator']
---

<div class="platform-filtered platform-nintendo_ds">

## Giocare su Nintendo DS
Giocare su Nintendo DS è molto semplice, basta inserire la ROM sulla flash cart e il più è fatto. Forse già ne possiedi una, se sei arrivato fino qua.

**Occorrente:**
* Un sistema DS o DS Lite.
* Una flashcart (come una R4. Inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Procedura:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore).
2. Trascina il gioco in una cartella che hai creato in precedenza. Assicurati di metterla nella cartella giusta.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_dsi">

## Giocare su Nintendo DSi
Per poter giocare il titolo sul vostro Nintendo DSi, esistono due metodi. Tramite l'ausilio di una flash cart oppure installando la ROM patchata sulla Scheda SD e utilizzarla grazie a Twilight Menu++

### Using TWiLightMenu (nds-bootstrap)

**Occorrente:**
* Un sistema Nintendo DSi o DSi XL
* TwilightMenu++ [installato sulla tua console](https://dsi.cfw.guide/). Se hai seguito la guida per modificare il DSi, avrai già questo programma!
* Una scheda SD con almeno 2GB di memoria
* Un computer con lettore di schede SD (o un adattatore USB)

**Procedimento:**
1. Inserisci la scheda SD nel tuo computer
2. Trascina il file .NDS nella cartella dei giochi.
3. Re-inserisci la scheda SD nel computer.
4. Riaccendi la console e avvia Twilight Menu++.
5. Cerca il gioco patchato e avvialo. Buon divertimento!

### Tramite flashcard
**Occorrente:**
* Un sistema della famiglia DSi o DSi XL
* Una flashcard (come una R4. inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Procedura:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore).
2. Trascina il gioco in una cartella che hai creato in precedenza. Assicurati di metterla nella cartella giusta.
3. Rimuovi la scheda SD ed infilala nella flashcard, per poi metterla nel DSi. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_3ds">

## Giocare su (New) Nintendo 3DS o 2DS
Giocare su Nintendo 3DS è molto semplice, basta inserire la ROM sulla flash cart o in una cartella precisa della scheda SD e il più è fatto

### Using TWiLightMenu++
**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* Luma3DS custom firmware setup on your system and FBI. If you followed the guide to dumping your ROM on Nintendo 3DS earlier, you've probably already done this!
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**Procedura:**
1. Inserisci la scheda SD del tuo 3DS (con Luma3DS installato) nel tuo computer
2. Segui la guida per installare TwilightMenu con FBI. Quando ti sarà richiesto, trascina la ROM all'intero della cartella corretta.
3. Continua a seguire le istruzioni fino alla fine. Infine, divertiti!

#### Using an NDS Forwarder
If you would instead like to be able to launch the game directly from the home screen without running TWiLightMenu++, you can use an NDS forwarder to do so.

**Setup**:
1. Follow steps 1-2 of the setup for TWiLightMenu++ instructions above.
2. Install the [ndsForwarder](https://github.com/MechanicalDragon0687/ndsForwarder/releases) application either from Universal Updater or by following the instructions to install it manually on your SD card.
3. Boot up your 3DS and run the Homebrew Launcher application, then launch NDS Forwarder Generator from that.
4. Navigate to the /roms/nds/ folder and select the ROM you placed there. Select "Yes" at the prompt for whether you want to install the forwarder, and then select "OK" when the installation is complete.
5. Press Start to exit the forwarder generator and then Home Button to return to the home menu. You will be shown the newly installed forwarder on your home screen and can then launch the game directly from that.

### Tramite flashcart
**Occorrente:**
* Un sistema della famiglia 3DS o 2DS
* Una flashcart (come una R4. inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Procedura:**
1. Inserisci la scheda SD della flashcart nel tuo computer (o usa un adattatore).
2. Trascina il gioco in una cartella che hai creato in precedenza. Assicurati di metterla nella cartella giusta.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel 3DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-emulator">

## Gioca su emulatore

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Mobile Emulator']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-emulatore_per_pc">

### Emulare su Windows, MacOS oppure Linux
Esistono diversi emulatori del Nintendo DS per PC, noi ti consigliamo d'usare melonDS per ottenere delle performance migliori.

#### Impostare melonDS
**Occorrente:**
* Un computer con Windows, macOS oppure Linux

**Procedimento:**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v1.0.0+**) from the project website for your platform (Windows, macOS, or Linux) and save it somewhere easily accessible to your computer. (If you are using macOS, consider placing the melonDS.app folder in your /Applications directory for ease of access.)

If you're running Linux, we also recommend the [official Flatpak](https://flathub.org/apps/net.kuribo64.melonDS) provided on Flathub, though that can sometimes lag behind the direct download releases.

**Giocare il gioco:**

With melonDS setup, all you need to do in order to play the game is select "File" &rarr; "Open ROM" in the top menu bar and choose the ROM file you patched earlier. You can also simply drag and drop the ROM file directly on the opened emulator, or associate `.nds` files with melonDS to open them via double clicking.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://github.com/TASEmulators/desmume)－The commonly-used older version of DeSMuME is not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects voiced lines). However, the latest release seems to run the game fine so long as the software renderer is used for graphics. That being said, melonDS is still recommended over this emulator for its superior accuracy, and especially for Linux where the functionality is much more limited.
* [no$gba](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-emulatore_per_telefono">

### Emulare su dispositivi mobili

#### Emulate on iOS / iPadOS
**Requirements:**
* iOS / iPadOS Device (iPhone, iPad, iPod Touch)

**Play Using Delta Emulator**

In the past, Apple did not permit emulators officially on their store. However, times have changed and now you can simply download [Delta Emulator](https://faq.deltaemulator.com/) from the [App Store](https://apps.apple.com/us/app/delta-game-emulator/id1048524688).

Simply run Delta Emulator and load the patched ROM file to begin playing.

#### Emulate on Android
There are several options for emulation on Android. [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) has a great interface, is simple to install, and is now free to download. There is also an unofficial [Android port of melonDS](https://play.google.com/store/apps/details?id=me.magnum.melonds) that similarly will run well, but (at time of writing, Dec 2024) is not quite up to date with the PC version of melonDS's feature set. Finally, [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) can run the melonDS DS core which usually maintains exact parity with the PC version of melonDS.

**Requirements:**
* Android Device with the Google Play store

**Giocare utilizzando DraStic**

Scarica [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) dal Google Play Store e trasferisci la ROM patchata sul tuo dispositivo tramite Android file picker.

**Play using melonDS Android Emulator**

Download [melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**Giocare utilizzando RetroArch**

1. Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store and launch it.
  - If you get an error at this step saying that your version of Android is too new to support RetroArch, you will have to download the apk manually from their site. To do this, [go to their downloads page](https://retroarch.com/?page=platforms) and scroll to the "Android" section. Below "Google Play" and "F-Droid", click "Download" to download the apk and then attempt to launch it. You will have to set several permissions in order to install the apk from an "untrusted source" &ndash; enable these settings by following the instructions on your screen and then launch the apk again to install it to your phone.
  - You might also consider downloading one of the nightly builds to get a more up-to-date version of the app.
2. Select "Load Core" and then "Download a Core", then select the "Nintendo DS - melonDS DS" core from the list to download it.
3. Go back, and then hit "Load Content" and select your patched ROM file through the RetroArch file picker.

</div>

::

</div>
