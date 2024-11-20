---
title: &title 'Benvenuti! E perché?'
description: &desc "Un'introduzione al blog dell'Haroohie Translation Club ed una spiegazione dei nostri motivi per tradurre i giochi di Haruhi."
navigation:
  author: 'Jonko'
  translator: 'Fuyuko Ayumu'
  year: 2022
  month: 10
  day: 17
  tags: ['general']
  image: '0001/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img 'https://haroohie.club/images/blog/0001/00_thumbnail.png'
  - name: 'og:image:alt'
    value: 'La Brigata SOS (Box art di Suzumiya Haruhi no Chokuretsu)'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-17-welcome-why'
  - property: 'og:type'
    content: 'article'
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

Stai leggendo il primo post dell'Haroohie Translation Club, il che significa che hai scorso parecchio in fondo. Il mio nome è Jonko, e sono il capo progetto di questo club. A causa della mia posizione, la responsabilità di scrivere questi post è caduta su di me, ma ti posso garantire che avremo altri scrittori una volta ogni tanto. In questo blog, sviteremo il case e vedremo l'interno del progetto. Mostreremo i processi di reverse-engineering e di ROM hacking, esamineremo le complessità di tradurre dal giapponese all'inglese, e forse entreremo pure nel mondo del project management. Ma prima di tutto ciò, in questo primo post per il blog, vorrei rispondere a delle domande che mi vengono chieste spesso: perché?

Perché stare a discutere su Discord fino a tardi per decidere se Nagato dovrebbe dire "È okay." o "Va tutto bene."? Perché passare le ferie a decompilare un gioco programmato con un suo linguaggio di programmazione proprietario? Perché metterci migliaglia di ore in hackerare, tradurre e modificare la grafica, solo per creare patch di giochi che neanche i produttori stessi ritenevano meritevoli di rilasciarli internazionalmente?

Personalmente, iniziai ad indulgermi nel mondo del ROM hacking per puro caso, e scoprì che causava i miei neuroni a sparare in un modo che rilasciava un flusso costante di dopamina. Tuttavia, non risponde alla domanda principale: perché tradurli? Perché tradurre questi giochi in particolare?

Chiedere al team darà risposte di vario tipo, tra le quali:

* **‌Possiamo rendere queste storie più accessibili** – Questa ragione mi ricorda perché la gente di [Redump](http://redump.org/) e [No-Intro](https://no-intro.org/) sono così ossessionati al preservare i giochi; il mondo è un posto migliore quando le persone hanno la possibilità di usare i pezzi di storia o di media al quale sono interessati. Traducendo giochi in inglese, diamo una maggiore opportunità alle persone di giocarli.
* **‌Possiamo lasciare il nostro segno su qualcosa che amiamo** – Il titolo di questo punto l'ho preso direttamente da una dei nostri capi traduttori, Millie, che lo disse nel modo migliore possibile: “La serie di Haruhi è la mia più grande ossessione, quindi vedere un progetto del genere, sapevo che non mi sarei persa l'opportunità di farne parte. È stato fantastico sentirmi come se potessi lasciare il mio segno su qualcosa che amo, e condividere quell'amore con gli altri
* **‌Essere parte di un team appassionato è esilarante** – Questo viene da uno dei nostri traduttori principali, Isi: “Avere un gruppo di persone che mostrano i loro talenti individuali verso una cosa sola, fare quello che riescono e lasciare il resto agli altri, scoprire più cose di sé stessi, dei giochi, della serie, degli sviluppatori, del lavoro dietro, degli altri, ogni piccolo passo fino alla fine. E poi vedere qualcosa di tangibile uscirne fuori. Una prova fisica dei nostri sforzi, al quale molte altre persone possono giocare.” O in modo più sintetico, dal nostro ROM hacker, Ermii: “L'unione del nostro lavoro ed il nostro amore per Haruhi è ciò che permette a questo progetto di esistere e di andare avanti.”
* **‌È decisamente soddisfacente** – y, guarda, il motivo della dopamina è tornato!
* **‌I giochi sono fatti bene, in realtà** – I giochi non devono essere necessariamente belli o fatti bene per applicare il primo motivo, ma ho pensato di dirlo comunque visto che sono fatti veramente bene. Citando il nostro sviluppatore web e guru della grafica, Will, “Inoltre, è davvero soddisfacente (per non parlare di come è a tema) voler ‘spargere l'eccitazione’ di questi giochi in tutto il mondo. 😉”

Da qui in poi, questo blog parlerà del "cosa" e del "come" di questo progetto, ma penso sia appropriato iniziare con il "perché". Speriamo che il nostro lavoro ti piaccia!