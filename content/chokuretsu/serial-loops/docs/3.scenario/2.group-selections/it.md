---
title: 'Group Selections'
locale: 'it'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/group-selection.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/game-flow'
  next: '/chokuretsu/serial-loops/docs/graphics'
---

Al momento, puoi solo vedere le scelte possibili del gruppo, non puoi modificarle. In futuro sarà possibile modificarle, quando accadrà, torna qui per vedere questi appunti aggiornati.

## Spiegazione
In questa sezione vengono rappresentati gli istanti dove dovrai divere i personaggi per fargli svolgere dei compiti. Nel gioco, vengono segnalate quando viene menzionato nel codice il comando `GROUP_SELECTION` [Scenario](./game-flow). Ti porterà alla seguente schermata :

![Task assignment screenshot](/images/chokuretsu/screenshots/task-assignment.png)

In questa pagina ci saranno dalle 2 alle 4 scelte, marchiate con lettere che vanno dalla "A" alla "D". Le scelte rappresentano i **compiti* che i personaggi dovranno svolgere, per fare una scelta, trascina l'icona del personaggio sul riquadro che desideri.

Ogni gruppo farà la sua **strada** per completare quel compito. I percorsi sono composti da un sottoinsieme di compiti,
e non tutte le strade hanno le stesse proprietà (Dipende tutto dai personaggi ai quali affiderai i compiti).

## In Serial Loops
L'editor della divisione dei gruppi ti permette di vedere le seguenti caratteristiche:

* All'interno dell'editor troverai i seguenti parametri:
  - Se Haruhi è presente o meno(Non è possibile spostare la sua icona)
  - Se è obbligatorio o meno mandare un personaggio a fare una determinata mansione.
  - Una descrizione di quello che farai.
  - Una descrizione di quello che hai fatto.
  - La possibilità di vedere quale sia la combinazione migliore per ogni singolo compito (sia con o senza Kyon).
  - La possibilità di vedere quale sia la combinazione peggiore per ogni singolo compito (sia con o senza Kyon).
* Troverai anche una descrizione per quello che accadrà in quella strada. Troverai anche il nome del percorso:
  - The script associated with the topic &ndash; this is the script that will be loaded the selected group (including Kyon) is sent on this task
  - I personaggi coinvolti in quella discussione.
  - Se la discussione è senza Kyon, avvengono se Kyon non è assieme ad Haruhi.

![Group selections editor](/images/chokuretsu/serial-loops/group-selections-editor.png)