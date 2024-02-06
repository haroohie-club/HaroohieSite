---
title: 'Estrarre i dati di gioco'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
locale: 'it'
---

Per ottenere la ROM, ti servirà un Nintendo DS o 3DS, per alcuni metodi è richiesta ulteriore attrezzatura, come schede SD o un telefono cellulare in grado di garantire una connessione stabile ad internet.

---

**Seleziona la piattaforma sul quale vuoi estrarre il gioco:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS']
---
<div class="platform-filtered platform-nintendo_ds">

### Estrarre con DS o DS Lite
Esistono due modi per estrapolare dati di gioco con il Nintendo DS o DS Lite. Per entrambi i metodi è richiesto lo Slot-1 della Scheda DS (quello in alto).

Per il primo metodo avremmo bisogno di una connessione ad internet (trasferiremo i file con il metodo FTP). Il secondo, invece, avremmo bisogno di entrambi gli slot per le schede, Slot-1 e Slot-2 (quello sopra e quello dei giochi per GBA).

#### Tramite connessione ad internet
**Requisiti:**
* Un sistema DS o DS Lite
* Una copia di *Suzumiya Haruhi no Chokuretsu*
* Una flash cart (Schede DS che possono caricare dati da una scheda SD o MicroSD, come una R4.)
* Uno smartphone o dispositivi simili che possano garantire una connessione internet efficace (tramite WEP-secured Hotspot)
  - Molti computer di oggi non possono fare queste cose.
  - Vi consigliamo un sistema che supporti Android (i dispositivi Apple e Microsoft, non posseggono questa caratteristica).
* Un computer per poter [scaricare wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) e che sia collegato allo stesso hotspot
* Una copia di qualsiasi gioco per DS che possegga servizi ad internet. Ignorate che il servizio sia morto da diverso tempo. Purtroppo, *Suzumiya Haruhi no Chokuretsu* non supporta i servizi in rete.

**Procedimento:**
1. Utilizza il tuo telefono, tablet o altri dispositivi per creare un segnale Wireless non protetto (senza Password) o con modulo WEP. (Deve essere per forza WEP, altre estensioni non sono supportare dal Nintendo DS).
2. Sul tuo computer, [scarica wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/). Poi, collega il computer allo stesso hotspot del telefono.
3. Installa wooddumper.nds (ignora la versione slot 2) sulla scheda SD della tua flash cart.
4. Accendi ed inserisci il gioco che può collegarsi ad internet sul Nintendo DS, in modo da impostare una connessione ad internet, e collegati allo stesso hotspot.
5. Esci dal gioco e rimuovi la scheda DS. Ora, inserisci la flash cart e fai partire wooddumper.
6. Segui le istruzioni a schermo ed inserisci la scheda di *Suzumiya Haruhi no Chokuretsu*. Prosegui fino a quando non vedrai il tuo indirizzo IP per collegarsi al client FTP.
7. Usa programmi come [net2ftp](https://www.net2ftp.com/) o [FileZilla](https://filezilla-project.org/) e inserisci l'indirizzo IP dove richiesto (non hai bisogno di inserire un username o una password).
8. Trasferisci i file .nds e .txt sul tuo computer. Ora puoi [patchare la ROM](/it/chokuretsu/guide/patching-the-rom).

#### Usare entrambi gli slot
**Requisiti:**
* Un sistema DS o DS Lite
* Una copia di *Suzumiya Haruhi no Chokuretsu*
* Una flash cart per lo slot 1 (quello sopra, come una R4).
* Una flash cart per lo slot 2 (Quello per giochi GBA, che supporti la scheda nello slot 1, come E-link card).
* Una scheda SD o MicroSD
* Un computer con il quale scaricare wooddumper

**Procedimento:**
1. [Scarica wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) sul tuo computer.
2. Installa wooddumper_slot2.nds sulla scheda SD o MicroSD.
3. Inserisci entrambe le flash cart nella console.
4. Avvia Wooddumper.
5. Segui le istruzioni a schermo ed inserisci la scheda di *Suzumiya Haruhi no Chokuretsu* quando richiesto.
6. Rimuovi la scheda flash dallo slot 2 ed inserisci la scheda SD nel tuo computer.
7. Copia i file .nds e .txt sul computer. Ora puoi [patchare la ROM](/it/chokuretsu/guide/patching-the-rom).

</div>

<div class="platform-filtered platform-nintendo_dsi">

### Estrapolare con un Nintendo DSi

Per scaricare i dati di gioco con un DSi, dovrai scaricare un custom firmware chiamato "Twilight Menù++" e Unlaunch, per far partire un'altra applicazione chiamata GodMode9i, che ti permetterà di scaricare la ROM del gioco.

**Occorrente:**
* Un sistema Nintendo DSi oppure DSi XL
* Una copia di *Suzumiya Haruhi no Chokuretsu*
* Una scheda SD da almeno 2 GB di memoria
* Un computer o adattatore USB per leggere la scheda SD

**Procedura:**
::guide-notice
Segui questi consigli per evitare di danneggiare il tuo sistema.
::
1. Segui [la guida su dsi.cwf.guide ](https://dsi.cfw.guide/launching-the-exploit.html) per installare Twilight Menu++ e Unlaunch.
2. [Scarica GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) ed estrai i file.
3. Rimuovi la scheda SD dalla console ed inseriscila nel computer.
4. Metti il file GodMode9i.nds dove più ti aggrada sulla scheda SD.
5. Re-inserisci la scheda SD nel DSi.
6. Inserisci la cartuccia di *Suzumiya Haruhi no Chokuretsu* nel vano cartuccia.
7. Avvia Twilight Menu++ e fai partire GodMode9i.
8. Scegli l'opzione "NDS GAMECARD".
9. Pigia il pulsante A su "Yes" per scaricare i dati dalla cartuccia.
10. Una volta terminato, spegni il dispositivo e rimuovi, ancora una volta, la scheda SD dalla console.
11. Inserisci la scheda SD nel computer. Raggiungi SD_CARD_ROOT/gm9i/out e sposta il file sul tuo PC.


</div>

<div class="platform-filtered platform-nintendo_3ds">

### Estrapolare dati con un Nintendo 3DS

Per ricavare i dati di gioco con un 3DS o 2DS, devi prima installare un custom firmware, (come Luma 3DS e Bootstrap), per poter avviare GodMode9, che ti permetterà di arguire la ROM di gioco.

**Occorrente:**
* Un sistema della famiglia 3DS o 2DS
* *Suzumiya Haruhi no Chokuretsu*
* Una scheda SD con almeno 2GB di memoria
* Un computer con un lettore scheda SD od un adattatore USB che possa leggere schede SD 
  * Potrebbe servirti una scheda di gioco DS o DSi compatibile.

**Procedimento:**
::guide-notice
Segui questi consigli per evitare di danneggiare la tua console.
::
* Segui [la guida su 3ds.hacks.guide](https://3ds.hacks.guide/get-started) per installare Luma3DS e Bootstrap9 sul tuo 3DS.
* Continua [la guida fino ad installare GodMode9](https://3ds.hacks.guide/finalizing-setup) e tanti altri prerequisiti da seguire.
* Spegni la console.
* Iserisci *Suzumiya Haruhi no Chokuretsu* nel vano cartuccia.
* Accendi la console tenendo premuto il tasto "Power" assieme al tasto "START", per avviare GodMode9. Se non funziona, spegni il dispositivo e riprova.
* Utilizza la croce direzionale e raggiungi `[C:] GAMECART`
* Premi A sulla dicitura `[TitleID].nds`, se già evidenziato, scegli come estrapolare i dati e pigia di nuovo A.
* Scegli `Copy to 0:/gm9/out` sullo schermo inferiore per copiare i dati della cartuccia.
* Una volta finito, spegni la console e rimuovi la scheda SD.
* Inserisci la scheda SD (nel vano o nell'adattatore), raggiungi gm9/out sulla scheda SD e copia il file `.nds` sul tuo computer.

</div>
::

---

## Prima di iniziare
Ora hai scaricato i dati del gioco per patcharli. Mettili da qualche parte sul tuo PC.

*Si ringrazia [dumping.guide](https://dumping.guide/carts/nintendo/ds), [dsi.cfw.guide](https://dsi.cfw.guide/) & [3ds.hacks.guide](https://3ds.hacks.guide/) per averci fornito quest guide.*