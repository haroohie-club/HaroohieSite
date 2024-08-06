---
title: Texture di sistema
locale: 'it'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/system-texture.png'
  previous: '/chokuretsu/serial-loops/docs/graphics/places'
  next: '/chokuretsu/serial-loops/docs/sound'
---

## Analisi
Le texture di sistema vengono usate da l'interfaccia di *Chokuretsu* (come i pulsanti e i menù) ma anche da tante altre cose
(come i testi oppure l'Haruhimetro).

## In Serial Loops
Così come gli [sfondi](/chokuretsu/serial-loops/docs/graphics/backgrounds), le texture di sistema si possono esportare come`.png` e si possono sostituire importando un'immagine di qualsiasi formato, per ridimensionarle puoi usare lo strumento [ridimensiona immagine](/chokuretsu/serial-loops/docs/graphics/backgrounds#crop-and-scale).

Comunque, a differenza degli sfondi, le texture di sistema si possono cambiare in due modi: **Sostituisci** e **Sostituisci le palette**.
La prima opzione cambierà solo l'immagine ma la palette di colori non verranno cambiate, ma cercherà di far combinare i colori con la nuova immagine come meglio può. La seconda, sovrascriverà la palette. Attenzione: alcune texture di sistema (specialmente gli elementi dell'UI) condividono le stesse texture, quindi, cambiare le texture potrebbe comportare a spiacevoli conseguenze . TI consigliamo di usare il tasto **Sostituisci**. Others, Ma altre textures, hanno delle palette uniche (come il logo o lo schermo del titolo), per quello devi usare (ESCLUSIVAMENTE!) **Sostituisci le palette**.
Per capire meglio quale immagine fa così e quale no, l'editor ti aiuterà a capire meglio.

![System texture editor](/images/chokuretsu/serial-loops/system-texture-editing.png)