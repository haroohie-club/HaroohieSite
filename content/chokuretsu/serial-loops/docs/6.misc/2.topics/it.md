---
title: 'Discussioni'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/topic.png'
  previous: '/chokuretsu/serial-loops/docs/misc/characters'
  next: '/chokuretsu/serial-loops/docs/misc/applying-hacks'
---

## Analisi
Le discussioni sono un oggetto che vengono dati durante la partita, si usano per rallentare l'arrivo di Haruhi.
Si ottengono giocando la fase investigazione grazie al comando [`TOPIC_GET`](../scripts/commands#topic_get)
che andrà ad attivare quella scena.

Tutte le discussioni hanno un ID, un nome e un tipo, i quali sono **Principali**, **Su Haruhi**, **Personaggi** e **Secondarie**. Tutte le discussioni sono ottenibili in un determinato episodio e un gruppo preciso. Le discussioni Principali, Su Haruhi e sui personaggi sono associate a 
degli script.
Infine, tutte le discussioni hanno un'informazione per quanto tempo guadagnerà il giocatore usandole per rallentare Haruhi.
Un fattore molto importante è anche l'accompagnatore di Haruhi, che influenzerà il tempo e l'evolversi del dialogo.

## In Serial Loops
In Serial Loops potrai cambiare il nome, lo script collegato, l'episodio di ottenimento e "la puzzle phase group" (nome provvisorio, non abbiamo ancora capito come).
Inoltre, potrai cambiare il tempo che otterrai usando la discussione e l'importanza del personaggio. Ma, l'ID e il tipo si può vedere, ma non cambiare, 
se proverai a farlo correrai il rischio di causare errori.
In futuro, sarà possibile aggiungere discussioni al gioco, dandoti la possibilità di creare delle discussioni
nuove di zecca.

![Topic editor](/images/chokuretsu/serial-loops/topic-editing.png)