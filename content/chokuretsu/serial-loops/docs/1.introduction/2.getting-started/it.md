---
title: 'Getting Started'
locale: 'en'
navigation:
  faicon: 'fa6-solid:hands'
  previous: '/chokuretsu/serial-loops/docs/introduction/installation'
  next: '/chokuretsu/serial-loops/docs/introduction/project-workflow'
---

Quando avvierai il Serial Loops per la prima volta, potresti accolto da una schermata che dice che devkitARM non è stato installato.
Niente paura! Significa che il devkitARM è installato in punto dove il programma non riesce a trovarlo. Determina dove si trova il programma
ci servirà per dopo.

## Schermata di home e preferenze
Verrai accolto da questa schermata:

![Serial Loops Home Screen](/images/chokuretsu/serial-loops/home-screen.png)

Questa è la schermata home del programma. Prima di fare qualsiasi cosa, vai su _File_ &rarr; _Preferences_ (oppure _SerialLoops_ &rarr; _Preferences_ se sei su macOS) o clicca su "preferenze".

![Preferences](/images/chokuretsu/serial-loops/preferences.png)

In questo menù, potrai impostare i percorsi per il devkitARM ed anche per l'emulatore del Nintendo DS.

Per tutto il resto:

* **Usare Docker per ASM Hacks** &ndash; Spuntare questa funzione farai in modo che Docker sia usato per le ASM hacks se vorrai installare Docker,
  assicurati di spuntare questa voce.
* **DevkitARM Docker Tag** &ndash; Il [tag](https://hub.docker.com/r/devkitpro/devkitarm/tags) del devkitARM si usa per quando dovrai
  ricostruire la ROM per le ASM hacks. Noi ti consigliamo di lasciare questa opzione spuntata, a me no che tu sappia perfettamente cosa tu stia facendo e vuoi
  usare un'altra versione del devkitARM.
* **Ricarica progetto automaticamente** &ndash; Appari davanti all'ultimo progetto aperto, saltando la schermata d'avvio.
* **Ricorda ultimo progetto** &ndash; Riapre tutte le schede aperte l'ultima volta che si è chiuso il progetto alla riapertura.
* **Rimuovi progetti mancanti** &ndash; Ti permette di rimuovere i progetti contenuti nella barra dei progetti recenti.
* **Check For Updates On Startup** &ndash; Il programma controllerà se sono presenti nuove versioni all'avvio. **Ti consigliamo di spuntare questa voce.**
* **Aggiornamenti pre-rilascio** &ndash; Otterrai le versioni Nightly come aggiornamenti. **Non spuntare questa voce.**

Una volta impostato tutto, è ora di creare il progetto.

## Creare un nuovo progetto
Per farlo, clicca su "Nuovo progetto" oppure vai su _File_ &rarr; _New Project_.

![New project menu](/images/chokuretsu/serial-loops/project-creation.png)

Dai un nome al tuo progetto e seleziona la lingua di base (Per adesso il Serial Loops, non farà tanto riferimento alla lingua che sceglierai, almeno per
adesso,
Almeno che tu scelga Giapponese, in quel caso dovrai seguire delle regole diverse per mostrare il font) scegli la ROM che farà base per il tuo progetto e clicca crea. Serial Loops scompatterà la ROM e andrà a creare una cartella per il progetto.

### Attenzione.
Vi consigliamo vivamente di usare una ROM tradotta come base, a meno che tu non voglia fare un progetto in giapponese, in quel caso puoi usare la ROM
originale. Usare la ROM in inglese può tornare molto utile dato che ti darà accesso a tutte le modifiche che abbiamo fatto fino ad ora.
Il gioco gira molto meglio in Inglese (o nelle altre lingue disponibili) senza dover implementare delle modifiche manualmente.