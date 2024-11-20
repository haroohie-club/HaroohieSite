---
title: &title 'Serial Loops v0.1 è ora disponibile!'
description: &desc 'Oggi siamo davvero emozionati di annunciare la prima versione di Serial Loops, una nuova suite per modificare Suzumiya Haruhi no Chokuretsu!'
navigation:
  author: 'William'
  translator: 'Fuyuko Ayumu'
  year: 2023
  month: 04
  day: 15
  tags: ['chokuretsu', 'serial loops']
  image: '0006/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0006/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-04-16-serial-loops-0-1-now-available'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

![Uno screenshot dell'editor di script di Serial Loops](/images/blog/0006/01_serial_loops_script_editing.png)

Ciao a tutti!

Oggi siamo davvero emozionati di annunciare che stiamo rilasciando pubblicamente la prima versione di [Serial Loops](/chokuretsu/serial-loops) per Windows, macOS e Linux. Serial Loops è un nuovo editor per *Suzumiya Haruhi no Chokuretsu* (La Serie di Haruhi Suzumiya), il gioco sul quale stiamo attualmente lavorando per [tradurlo in inglese](/chokuretsu).

## Il percorso verso Serial Loops
Se avete seguito la nostra eccellente serie di post sulle [*Sfide nel ROM Hacking di Chokuretsu*](/it/blog/2022-10-19-chokuretsu-compression), saprete tutto sul lavoro che Jonko ha fatto per effettuare il reverse-engineering del gioco e permetterci di fare la nostra patch per la traduzione inglese. Prima, eccone la storia!

### Lavorando in Parallelo
Mentre stavamo finendo di lavorare sull'*Episodio 1: L'aula Mangiauomini*, iniziò un po' di lavoro preliminare per capire i meccanismi interni del gioco complementare di Chokuretsu, *Suzumiya Haruhi no Heiretsu* (Il Parallelo di Haruhi Suzumiya). Ai tempi, ne sapevamo relativamente poco su Chokuretsu, e capivamo meglio come funzionava Heiretsu. Le prime cose sulle quali abbiamo lavorato per Heiretsu includono il reverse-engineering degli ambienti 3D e dell'engine per gli script, i frutti che hanno portato a uno script d'importazione per il formato proprietario dei modelli 3D del gioco.

![Una versione al quanto scadente di Haruhi Suzumiya importata nella finestra di Blender](/images/blog/0006/02_haruhi_blender.png)

Come potete vedere sopra, ci abbiamo messo un po' per aggiustarlo! Mentre continuavamo a fare progressi con Heiretsu, capimmo una cosa&mdash;dovremmo *decisamente* fare un editor per questo gioco e lasciare gli altri fare quello che vogliono con esso!

Quest'idea diede inizio ad un progetto per creare *Parallel Loops* (prendendo il nome dai loop temporali nel gioco). La prima versione dell'editor Parallel Loops ci diede la possibilità di caricare le mappe di Heiretsu nell'editor del motore di gioco Unity, e di modificare le posizioni dei personaggi per cambiare la disposizione degli ambienti nel gioco.

![Un'immagine dell'ambiente del prologo di Suzumiya Haruhi no Heiretsu, da sopra, mostrando l'Oberon ancorato nel porto](/images/blog/0006/03_parallel_loops_unity.png)

Alla fine, il lavoro di gruppo su Heiretsu fu messo in pausa poiché decidemmo di focalizzarci nel finire il primo episodio di Chokuretsu. Quando finimmo di lavorare sull'*Episodio 2: La Canzone Infinita*, tuttavia, l'idea di creare un editor riemerse. Allora, gli sforzi di Jonko rivelò molto sui misteri irrisolti di Chokuretsu (della quale non vediamo l'ora di approfondire nei prossimi post!).

Dopo una buona discussione e qualche idea sul come Chokuretsu poteva essere adattato come base per fare altre Visual Novel sul DS, decidemmo di iniziare a pianificare e creare un programma completo per l'editing di esso&mdash;Serial Loops!

### Progettare un editor da zero
![Un'anteprima della schermata di creazione per i progetti di Serial Loops all'inizio dello sviluppo](/images/blog/0006/04_serial_loops_as_a_baby.png)

Il nostro obiettivo per Serial Loops era quello di creare un editor facile da usare e potente per Chokuretsu, fino al punto che poteva essere utilizzato per creare delle visual novel per DS completamente personalizzate; uno che poteva trarre vantaggio delle meccaniche uniche dell'engine di Chokuretsu, come le mappe isometriche e i rompicapi.

All'inizio, ci accordammo su alcune scelte di design fondamentali. Ne parleremo più a fondo nel corso dello sviluppo, ma per darvi un'idea delle scelte che abbiamo fatto:
* Rendere astratte le varie cose modificabili in Chokuretsu e dividerle in "elementi," senza rappresentare il file system del gioco stesso
* Usare una base e iterativa per il directory system per applicare i cambiamenti alla ROM di base
* Usare Eto.Forms per creare un'IU (Interfaccia Utente) multi-piattaforma, e rendere lo strumento facile da usare per i principianti

![Breve timelapse dello sviluppo di Serial Loops](/images/blog/0006/05_serial_loops_dev.gif)

L'attuale versione di Serial Loops che stiamo rilasciando oggi, v0.1, supporta le seguenti:
* Creazione, salvataggio, apertura, compilazione e avvio dei progetti dall'editor
* Strumenti per cercare gli elementi, incluso il testo all'interno di essi (battute dei dialoghi)
* Modifica dei dati del banner del gioco, includendo il suo nome e la sua icona
* Modifica degli script del gioco (inclusi i dialoghi, i layout dei personaggi sulla mappa, i dati nello schermo superiore e altro ancora), con un'anteprima in tempo reale
* Modifica il flusso degli scenari del gioco (ad esempio l'ordine di esecuzione degli script)
* Sostituzione degli sfondi, con ridimensionamento automatico
* Sostituzione e livellamento dell'audio, modifica dei parametri del loop del BGM, aggiornamento dei nomi delle tracce del BGM nella stanza bonus
* Sostituzione delle battute doppiate
* Visualizzazione (Senza modifica) di mappe, rompicapi, argomenti, grafica dei nomi dei posti, chibi (e animazioni), immagini dei personaggi (e animazioni), e un numero di altri elementi vari!

Per maggiori dettagli sulle possibilità, [dai un'occhiata alla documentazione](/it/chokuretsu/serial-loops/docs). Pensiamo che con gli strumenti disponibili oggi, non solo gli altri potranno tradurre per conto loro il gioco originale, ma potranno anche fare dei bei fan-game basati su Haruhi! Mentre continuiamo a construire l'app, speriamo di renderlo uno strumento potente per creare dei visual novel per DS.

### Dove andremo da qui?
Abbiamo molte cose in programma per Serial Loops, e abbiamo intenzione di condividere molte altre cose nel mentre ci lavoriamo nel nostro blog e negli aggiornamenti, quindi assicuratevi di [unirvi al nostro Discord](https://discord.gg/nesRSbpeFM) per ricevere notizie! Abbiamo intenzione di rilasciare le nightly build di Serial Loops con gli ultimi cambiamenti sottoforma di "pre-rilascio", insieme ai più distanti rilasci "stabili". Il controllo degli aggiornamenti in-app vi informerà quando è disponibile un aggiornamento per qualsiasi canale vogliate usare, il che potete configurare nella finestra delle impostazioni.

![Uno screenshot del controllo degli aggiornamenti di Serial Loops](/images/blog/0006/06_serial_loops_update_checker.png)

## Come usarlo
Vi piace quello che avete visto e volete provare Serial Loops per conto vostro? Abbiamo fatto [una nuova sezione](/it/chokuretsu/serial-loops) del nostro sito, includendo l'intera documentazione su come utilizzarlo. Serial Loops è disponibile per Windows, macOS and Linux, richiede [devkitARM](https://devkitpro.org/) e una ROM di Chokuretsu.

Speriamo che vi divertiate a modificare il gioco utilizzando Serial Loops, e non vediamo l'ora di vedere cosa ci farete con esso!