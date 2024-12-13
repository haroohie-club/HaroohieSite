---
title: &title 'Serial Loops v0.2 è ora disponibile – con editor più potenti e una migliore affidabilità!'
description: &desc 'La seconda versione Serial Loops che rende l''editor ancora più affidabile e intuitivo, aggiusta un sacco di bug, e migliorà la stabilità!'
navigation:
  description: *desc
  author: 'Will'
  translator: 'Fuyuko Ayumu'
  year: 2023
  month: 06
  day: 25
  tags: ['chokuretsu', 'serial loops']
  image: '0007/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0007/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-06-25-serial-loops-0-2-is-out-now'
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

La seconda versione Serial Loops che rende l'editor ancora più affidabile e intuitivo, aggiusta un sacco di bug, e migliorà la stabilità!

Abbiamo aggiornato la [documentazione](/it/chokuretsu/serial-loops/), quindi perfavore, andate a leggerla per imparare meglio come usare questo strumento!

## Novità
### Nuovi editor
La possibilità di modificare molte più parti del gioco è stata aggiunta in v0.2:
* Aggiunta l'abilità di modificare i sottotitoli che vengono mostrati quando vengono riprodotte le battute dei personaggi
* Aggiunta l'abilità di modificare gli elementi dei "posti" (il nome dei posti nello schermo superiore può essere cambiato e la grafica sarà automaticamente generata)
* Aggiunta l'abilità di modificare i nomi dei personaggi, e consolidare le configurazioni del dialogo in questo editor (può cambiare il nome dei personaggi e la grafica sarà automaticamente generata)
* Aggiunto l'editor degli argomenti (gli argomenti possono anche essere rinominati, avere i loro script associati cambiati, si può cambiare la quantità di tempo guadagnata nelle fasi dei rompicapi)
* Aggiunta la possibilità di modificare e sostituire le texture si sistema (cose come i logo all'inizio del gioco e un mucchio di grafica casuale può ora essere rimpiazzata)
* Aggiunta la possibilità di modificare il testo dell'interfaccia utente

### Nuove funzioni
Anche molte nuove funzioni sono state aggiunte:
* Aggiunta la possibilità di rinominare gli elementi per una migliore organizzazione del progetto
* Aggiunta una nuova finestra per tagliare/ridimensionare che facilita la sostituzione della grafica nell'editor
* Aggiunta una ricerca avanzata che permette di trovare e filtrare gli elementi molto più facilmente in base ad un numero o altri parametri
* Aggiunta la possibilità di applicare ROM hack comuni (come quella che permette di saltare la sigla iniziale)
* Gli sprite dei personaggi e dei chibi possono ora essere esportati in fogli bitmap e GIF
* Migliorato l'algoritmo di riduzione del colore in modo che la grafica sostituita abbia un aspetto migliore nel gioco

### Interfaccia Utente
v0.2 porta anche un numero di miglioramenti dell'IU:
* Aggiustati alcuni problemi con la precisione dell'anteprima dello script
* Le finestre con una barra del progresso saranno sempre in primo piano rispetto alle altre finestre
* Aggiunta una ricerca veloce all'explorer del progetto principale a sinistra, per poter filtrare velocemente gli elementi in base al nome
* Aggiunto il pulsante di Salvataggio nella barra degli strumenti principale
* Aggiunte molte nuove icone e aggiornate quelle già esistenti nella barra del menu
* Aggiunti i pulsanti per riordinare velocemente i comandi nell'editor degli scenari

### Linux
E infine, ecco alcuni miglioramenti per coloro che usano Serial Loops su Linux:
* Aggiunto un pacchetto RPM per gli utenti di Fedora/RHEL/CentOS
* Migliorato il pacchetto deb per gli utenti di Ubuntu/Debian

In più, un numero di bug e aggiustamenti per i crash e miglioramenti alla stabilità del programma (particolarmente correlati all'editor di script) sono stati fatti per una migliore esperienza! Continuate a divertirvi ad usare Serial Loops per creare le vostre storie su Haruhi!