---
title: 'Getting Started'
locale: 'it'
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

* **Use Docker for ASM Hacks** &ndash; Checking this will cause Docker to be used for ASM hacks. If you decided to install Docker rather than make,
  ensure this option is checked.
* **DevkitARM Docker Tag** &ndash; The [tag](https://hub.docker.com/r/devkitpro/devkitarm/tags) of the devkitARM Docker image to use when using Docker
  for assembling ASM hacks. Typically, you should leave this as the default value, unless you know what you're doing and want to use a different version
  of devkitARM.
* **Auto Re-Open Last Project** &ndash; Re-opens the last project on app start, bypassing the home screen.
* **Remember Project Workspace** &ndash; Re-opens all the tabs you had open when you last closed the project on re-open.
* **Remove Missing Projects** &ndash; Will remove missing (i.e. manually deleted) projects from the Recent Projects menu automatically.
* **Check For Updates On Startup** &ndash; Will check GitHub for new releases of Serial Loops on startup. **Highly recommended to leave this option checked.**
* **Use Pre-Release Update Channel** &ndash; Will use our nightly builds as the source for updates. **Highly recommended to leave this option unchecked.**

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