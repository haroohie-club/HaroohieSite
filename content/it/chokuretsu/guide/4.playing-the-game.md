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
* Console Nintendo DS o DS lite
* Flashcart (ad esempio una scheda R4)
* Una scheda SD o microSD, richiesta dalla tua flashcart
* Un computer con un lettore di schede SD/periferica USB per leggere le schede SD

**Installazione:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore, se necessario).
2. Trascina la ROM .nds che hai creato prima nel percorso giusto della memoria della flashcart.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_dsi">

## Giocare su Nintendo DSi
Puoi giocare sul Nintendo DSi o utilizzando una scheda flash o inserendo la ROM patchata su una scheda SD e caricarla tramite TWilightMenu++.

### Usando TWiLightMenu++ (nds-bootstrap)

**Occorrente:**
* Console Nintendo DSi or DSi XL
* Custom Firmware TWilightMenu++ [installato sul tuo sistema](https://dsi.cfw.guide/). se prima hai seguito la guida per il dumping della ROM sul Nintendo DSi, dovresti averlo già fatto!
* Scheda SD con almeno 2GB di memoria
* Computer con un lettore di schede SD/periferica USB per leggere le schede SD

**Procedimento:**
1. Inserisci la scheda SD nel tuo computer
2. Trascina il file .NDS nella cartella dei giochi.
3. Re-inserisci la scheda SD nel computer.
4. Riaccendi la console e avvia Twilight Menu++.
5. Cerca il gioco patchato e avvialo. Buon divertimento!

### Usando una scheda flash
**Occorrente:**
* Console Nintendo DSi o DSi XL
* Flashcart (ad esempio una scheda R4)
* Una scheda SD o microSD, richiesta dalla tua flashcart
* Un computer con un lettore di schede SD/periferica USB per leggere le schede SD

**Installazione:**
1. Inserisci la scheda SD della flash cart nel tuo computer (o usa un adattatore, se necessario).
2. Trascina la ROM .nds che hai creato prima nel percorso giusto della memoria della flashcart.
3. Rimuovi la scheda SD ed infilala nella flashcart, per poi metterla nel DS. Bene, è arrivato il momento di giocare!

</div>

<div class="platform-filtered platform-nintendo_3ds">

## Giocare su (New) Nintendo 3DS o 2DS
Puoi giocare sul (New) Nintendo 3DS o 2DS usando una scheda flash o inserendo la ROM patchata nella scheda SD e caricarla tramite TWiLightMenu++ o NDS forwarder.

### Usando TWiLightMenu++
**Occorrente:**
* Console Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL o New 2DS XL
* Custom firmware Luma3DS [installato sul tuo sistema](https://dsi.cfw.guide/). se prima hai seguito la guida per il dumping della ROM sul Nintendo 3DS, dovresti averlo già fatto!
* Scheda SD con almeno 2GB di memoria
* Computer con un lettore di schede SD/periferica USB per leggere le schede SD

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

### Usando una scheda flash
**Occorrente:**
* Console Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL o New 2DS XL
* Flashcart (ad esempio una scheda R4)
* Una scheda SD o microSD, richiesta dalla tua flashcart
* Un computer con un lettore di schede SD/periferica USB per leggere le schede SD

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

Se lo stai girando su Linux, consigliamo anche il [Flatpak ufficiale](https://flathub.org/apps/net.kuribo64.melonDS) distribuito su Flathub. Il rilascio stabile può a volte rimanere indietro rispetto a quello ufficiale, quindi consigliamo di installarlo dalla repository [flathub-beta](https://docs.flathub.org/docs/for-users/installation/#flathub-beta-repository).

**Giocare il gioco:**

Una volta installato melonDS, tutto quello che devi fare per giocare il gioco è selezionare "File" &rarr; "Open ROM" nella barra del menu in alto e selezionare il file ROM che hai patchato prima. Puoi anche semplicemente trascinare il file direttamente nella finestra dell'emulatore o associare i file `.nds` a melonDS per aprirli tramite doppio click.

melonDS ha un mucchio di funzioni avanzate, come la configurazione dei controller e l'aggiustamento delle impostazioni del display. Puoi anche controllare il [sito di melonDS](https://melonds.kuribo64.net/) per ulteriori informazioni.

#### Altri emulatori per PC
* [DeSmuME](https://github.com/TASEmulators/desmume)－La vecchia versione di DeSmuME tipicamente usata non è consigliata a causa di problemi con l'emulazione della grafica e dell'audio (quest'ultimo in particolare ha effetto sulle battute doppiate). Tuttavia, l'ultima versione sembra far girare il gioco per bene affinché viene utilizzato il renderer del software per la grafica. Detto questo, melonDS è comunque consigliato rispetto a questo emulatore per una maggiore accuratezza, soprattutto su Linux dove la funzionalità e molto più limitata.
* [no$gba](https://www.nogba.com/)－Non consigliato a causa della bassa accuratezza nell'emulazione. È anche aggiornato poco frequentemente e non molto user-friendly.

</div>

<div class="platform-filtered platform-emulatore_mobile">

### Emulare su dispositivi mobili

#### Emulare su iOS/iPadOS
**Occorrente:**
* Dispositivo iOS/iPadOS (iPhone, iPad, iPod Touch)

**Giocare Usando l'Emulatore Delta**

In passato, Apple non permetteva gli emulatori nel loro store. Tuttavia, le cose sono cambiate e ora ti basta scaricare [l'Emulatore Delta](https://faq.deltaemulator.com/) attraverso [l'App Store](https://apps.apple.com/us/app/delta-game-emulator/id1048524688).

Ti basta avviare l'Emulatore Delta e caricare il file ROM patchato per iniziare a giocare.

#### Emulare su Android
Ci sono diverse opzioni per l'emulazione su Android. [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) ha una buona interfaccia, è semplice da installare ed ora è gratis da installare. C'è anche [una port non ufficiale di melonDS per Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) che gira abbastanza bene, ma (al momento della scrittura, Dicembre 2024) non è aggiornato rispetto alla versione per PC. Infine, [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) può girare il core di melonDS DS che solitamente è al pari della versione per PC di melonDS.

**Occorrente:**
* Dispositivo Android con Google Play Store

**Giocare utilizzando DraStic**

Scarica [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) dal Google Play Store e trasferisci la ROM patchata sul tuo dispositivo tramite Android file picker.

**Giocare usando l'Emulatore Android melonDS**

Scarica [melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) dal Google Play Store e trasferisci la ROM patchata attraverso l'Android file picker.

**Giocare utilizzando RetroArch**

1. Scarica [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) dal Google Play Store e avvialo.
  -Se in questo passaggio appare un errore che dice che la tua versione di Android è troppo recente per supportare RetroArch, dovrai scaricare manualmente l'APK dal loro sito. Per farlo, [vai nella loro pagina di download](https://retroarch.com/?page=platforms) e scorri fino alla sezione "Android". Sotto "Google Play" ed "F-Droid", clicca "Download" per scaricare l'APK e prova ad avviarlo. Dovrai impostare alcuni permessi per poter installare l'APK da una "fonte non sicura" &ndash; abilita queste impostazioni seguendo le istruzioni sul tuo schermo e avvia di nuovo l'APK per installarlo sul tuo telefono.
  - Puoi anche scaricare una delle versioni "nightly" per avere una versione più aggiornata dell'app.
2. Seleziona "Carica Core" e "Scarica un core", poi seleziona il core "Nintendo - DS (melonDS DS)" dalla lista per scaricarlo.
3. Vai indietro e premi "Carica Contenuto" e seleziona il file ROM patchato attraverso il selettore di file di RetroArch.

</div>

::

</div>
