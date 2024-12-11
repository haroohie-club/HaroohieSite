---
title: 'Giocare il gioco'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
---

Ora che hai la versione patchata del file ROM, è ora di prepararsi a giocare!

---

**Scegli dove giocare il gioco:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS', 'Emulatore']
---

<div class="platform-filtered platform-nintendo_ds">

## Giocare su Nintendo DS
Giocare su Nintendo DS è molto semplice, basta inserire la ROM sulla flash cart e il più è fatto. È probabile che tu ne sia già in possesso di una, se hai seguito la guida d'installazione prima.

**Occorrente:**
* Una console Nintendo DS o DS Lite.
* Una flashcart (come una R4. Inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Installazione:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore, se necessario).
2. Trascina la ROM .nds che hai creato prima nel percorso giusto della memoria della flashcart.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_dsi">

## Giocare su Nintendo DSi
Giocare sul Nintendo DSi è possibile attraverso l'uso di una flashcart o mettendo la ROM patchata in una scheda SD e usando TWilightMenu++ sul tuo sistema

### Usando TWilightMenu (nds-bootstrap)

**Occorrente:**
* Un sistema Nintendo DSi o DSi XL
* TwilightMenu++ [installato sulla tua console](https://dsi.cfw.guide/). Se prima hai seguito la guida per l'estrazione della ROM dal Nintendo DSi, avrai già questo programma!
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
* Una console Nintendo DSi o DSi XL
* Una flashcard (come una R4. inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Installazione:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore, se necessario).
2. Trascina la ROM .nds che hai creato prima nel percorso giusto della memoria della flashcart.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_3ds">

## Giocare sul (New) Nintendo 3DS o 2DS
Giocare sul (New) Nintendo 3DS o 2DS è possibile attraverso l'uso di una flashcard, o mettendo la ROM patchata in una scheda SD e utilizzando Luma3DS sul tuo sistema

### Usare TWilightMenu++
**Occorrente:**
* Una console Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL o New 2DS XL
* Il custom firmware Luma3DS installato sul tuo sistema insieme ad FBI. Se hai seguito la guida per l'estrazione della ROM dal Nintendo 3DS, probabilmente li hai già installati!
* Scheda SD con una capacità minima di 2GB
* Un computer con un lettore di schede SD/una periferica USB di lettura per schede SD

**Procedura:**
1. Inserisci la scheda SD del tuo 3DS (con Luma3DS installato) nel tuo computer
2. Segui la guida per installare TwilightMenu utilizzando FBI. Quando ti sarà richiesto, trascina la ROM .nds che hai creato prima all'intero della cartella '/roms/'.
3. Continua a seguire le istruzioni fino alla fine. Buon divertimento!

#### Usare un NDS Forwarder
Se vuoi poter aprire il gioco direttamente dal menu HOME senza dover far partire TWilightMenu++, ti basta usare un NDS forwarder.

**Procedura:**
1. Segui i passi 1-2 dell'installazione di TWilightMenu++ spiegata sopra.
2. Installa l'applicazione |ndsForwarder|(https://github.com/MechanicalDragon0687/ndsForwarder/releases) da Universal Updater o seguendo le istruzioni per installarlo manualmente sulla tua scheda SD.
3. Accendi il tuo 3DS e fai partire l'applicazione Homebrew Launcher, poi avvia NDS Forwarder Generator.
4. Naviga fino alla cartella '/roms/nds/' e seleziona la ROM che hai messo in essa. Seleziona "Yes" alla schermata in cui ti chiede se vuoi installare il forwarder e seleziona "OK" una volta completata l'installazione.
5. Premi Start per uscire dal generatore dei forwarder e poi premi il Pulsante HOME per tornare nel menu HOME. Ti verrà mostrato il nuovo forwarder appena installato nella tua schermata home e potrai far partire il gioco direttamente da lì.

### Tramite flashcart
**Occorrente:**
* Una console Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL o New 2DS XL
* Una flashcart (come una R4. inoltre, ti servirà una scheda SD o Micro SD per caricare altri file)

**Procedura:**
1. Inserisci la scheda SD della flashcart nel tuo computer (o usa un adattatore).
2. Trascina il gioco in una cartella che hai creato in precedenza. Assicurati di metterla nella cartella giusta.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel 3DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-emulatore">

## Giocare sugli Emulatori

**Seleziona il tipo di emulatore che desideri usare:**
::guide-platform-filter
---
filters: ['Emulatore PC', 'Emulatore Mobile']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-emulatore_pc">

### Emulare su Windows, MacOS oppure Linux
Esistono diversi emulatori del Nintendo DS per PC, noi ti consigliamo d'usare melonDS per ottenere delle performance migliori.

#### Impostare melonDS
**Occorrente:**
* Un computer con Windows, macOS oppure Linux

**Procedimento:**

Devi semplicemente [scaricare melonDS[(https://melonds.kuribo64.net/downloads.php) (**v1.0.0+**) dal sito del loro progetto per la tua piattaforma (Windows, macOS o Linux) e salvarlo in una posizione facilmente accessibile del tuo computer. (Se vuoi usarlo su macOS, è consigliato di spostare la cartella melonDS.app nel tuo percorso /Applications per facilitarvi l'accesso.)

Se stai usando Linux, consigliamo anche di usare il [Flatpak ufficiale[(https://flathub.org/apps/net.kuribo64.melonDS) disponibile su Flathub, anche se a volte può essere indietro con le nuove versioni di rilascio.

**Giocare il gioco:**

With melonDS setup, all you need to do in order to play the game is select "File" &rarr; "Open ROM" in the top menu bar and choose the ROM file you patched earlier. You can also simply drag and drop the ROM file directly on the opened emulator, or associate `.nds` files with melonDS to open them via double clicking.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://github.com/TASEmulators/desmume)－The commonly-used older version of DeSMuME is not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects voiced lines). However, the latest release seems to run the game fine so long as the software renderer is used for graphics. That being said, melonDS is still recommended over this emulator for its superior accuracy, and especially for Linux where the functionality is much more limited.
* [no$gba](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-emulatore_mobile">

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
