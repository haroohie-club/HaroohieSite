---
title: 'Banco da lavoro'
locale: 'it'
navigation:
  faicon: 'fa6-solid:folder-tree'
  previous: '/chokuretsu/serial-loops/docs/introduction/getting-started'
  next: '/chokuretsu/serial-loops/docs/scripts'
---

Una volta creato il progetto, ti apparirà la seguente schermata:

![Project workflow](/images/chokuretsu/serial-loops/project-workflow.png)

Sulla sinistra troverai il **Pannello oggetti**. Troverai tutta l'occorrente per modificare il gioco. Troverai anche una **barra di ricerca**, per permetterti di cercare gli oggetti che appaiono in gioco molto velocemente. Sulla tua destra, invece, troverai il **pannello editor**, qui ci sono diversi oggetti che ti aiuteranno a modificare il gioco

## Trovare gli oggetti
Chokuretsu ha un sacco di roba nel suo codice. per aiutarti nella ricerca ti consigliamo di usare questo filtro per trovare quello che ti serve (Ctrl/Command-F), filtrando esattamente quello che ti serve (le ricerche più complesse potrebbero richiedere più tempo).

![Item search](/images/chokuretsu/serial-loops/item-search.png)

### Rinominare
Gli oggetti su Serial Loops possono essere rinominati come più ti aggrada. Per rinominare un oggetto, scegli quello che ti serve nel pannello degli oggetti, presente sulla sinistra e premi F2 (o dal menù degli oggetti fai `Strumenti → Rinomina oggetto`) inserisci il nome e clicca "Rinomina" per applicare i cambiamenti.

![Item renaming](/images/chokuretsu/serial-loops/item-renaming.png)

### Riferimenti degli oggetti
Se vuoi vedere come viene usato un oggetto in gioco, clicca l'oggetto con il tasto destro e seleziona "Trova riferimenti". Ti mostrerà tutto in quanto all'elemento
selezionato.

## Salva, costruisci e avvia
Puoi salvare in qualsiasi momento, per farlo clicca _File_ &rarr; _Salva_ o digita Ctrl-S (o Command-S se sei su macOS). Dopo aver salvato, potrai cliccare _Costruisci_ &rarr; _Build_ oppure _tasto_ costruisci nella barra degli strumenti. Puoi anche cliccare _Build_ &rarr; _Costruisci e avvua_ o il _tasto_ avvia nella barra degli strumenti per far partire il progetto direttamente sul emulatore scelto in precedenza.

**Attenzione: Assicurati di salvare spesso, al momento il programma è molto instabile!**

### Salvataggio contro Commit
Quando salvi, verrà creato un oggetto che farà riferimento al progetto. Ma il progetto non riceverà una commit fino a quando non 
_costruirai_ il tutto. Ma dato che salvare è più veloce, ti consigliamo di farlo spesso e di costruire una volta che hai finito.

Nel caso dovessi uscire senza ricostruire i file, Serial loops troverà un salvataggio fatto in precedenza ma tutti i file non all'interno della commit, a quel punto
ti verrà chiesto di costruire quei file nell'archivio.

### Costruire da zero
Nel menù _costruisci_ , è presente un opzione per _Costruire da zero_. Non è un opzione molto utile, puoi anche ignorarla, a meno che tu non deva usarlo per eventuali risoluzioni di problemi. Essenzialmente serve per recuperare eventuali file corrotti.

## Impostazioni del progetto
Cliccando _File_ &rarr; _Impostazioni del progetto_ si aprirà una finestra di dialogo che ti permetterà di modificare il banner e il titolo della tua ROM. Alterandone l'aspetto che avrà sul menù principale del Nintendo DS.

![Project Settings](/images/chokuretsu/serial-loops/project-settings.png)

## Esportare
Una volta terminato il progetto, potrai distribuirlo. Il modo più facile è distribuire la **patch** direttamente a tutti.
Il programma ha una funzione che ti permette di creare dei file Xdelta da installare. Raggiungi _File_ &rarr; _Esporta patch_ e scegli su quale ROM applicare
la patch. Noi **ti consigliamo vivamente di usare una ROM giapponese non alterata**, dato che possiede le seguenti hash:

| Algorithm | Hash |
|:---------:|:----:|
| CRC | `8A58F646` |
| MD5 | `6536132EFDDD337AA5069E627591FEE5` |
| SHA-1 | `81D5C6316DBCEF9F4C51984ADCAAE171124EBB08` |

Facendo così, la gente che vorrà installare la patch, avrà solo bisogno della ROM base (Nota bene: La ROM non deve avere nessun'altra patch installata in precedenza).

## Cambiare ROM di base
Alle volte, sarà necessario cambiare ROM &ndash; per esempio, se stavi usando la v0.2 della versione italiana e un domani esce la v0.4. Serial Loops è in grado di gestire questi cambiamenti. Per farlo, seleziona _File_ &rarr; _Cambia ROM di base_ e seleziona la nuova ROM di riferimento.
Non preoccuparti per i cambiamenti apportati sulla vecchia ROM, Serial Loops li trasferirà su quella nuova!