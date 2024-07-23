---
title: &title 'Sfide nel ROM Hacking di Chokuretsu– Seguito della Compressione & Archivi'
description: &desc 'Jonko risponde ai feedback e dà più dettagli riguardanti gli aticoli sulla compressione e sugli archivi'
locale: 'it'
navigation:
  author: 'Jonko'
  translator: 'Fuyuko Ayumu'
  year: 2023
  month: 03
  day: 10
  tags: ['chokuretsu', 'romhacking']
  image: '0005/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0005/00_thumbnail.png
  - property: 'og:image:alt'
    content: 'Un Nintendo DS che mostra Suzumiya dire una frase modificata.'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-03-10-chokuretsu-compression-archive-followup'
  - property: 'og:type'
    content: 'article'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:descripton'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

La mia bozza iniziale del post sui file di archivio bin Shade era lungo. Tipo, molto lungo. C'era molta roba che ho dovuto necessariamente tagliare nella versione finale per poter parlare di come ho eseguito il reverse-engineering della struttira dell'archivio e far funzionare il reinserimento dei file. Inoltre, un bel po' di domande chieste frequentemente arrivarono in risposta ai primi due post e spero di poter usare questo post per catalogare le mie risposte ad alcune di esse.

## Nessuno Sa Quello Che Fa
Quando iniziai a scrivere il codice sull'archivio, l'ho fatto volendo semplicemente estrarre i file e senza capire nulla della struttura dell archivio bin. Quindi, scrissi del codice che cercava semplicemente per gli spazi tra un file e l'altro per identificare i loro offset. Anche mentre imparavo sempre di più sulla struttura degli archivi, il reverse-engineer degli interi magici, e lavorando nella sostituzione dei file ed eventualmente il loro inserimento, continuai quest'architettura piena di problemi. Impressivamente, questo codice rimase tale _fino a quando scrissi il post precedente_ (lol). Ha causato un bel numero di bug, fui pure in grado di corrompere un file nell'archivio della grafica perché non aveva spazi intorno a sé ed il file precedente (il file precedente finiva circa in 0x7F8 e l'altro iniziava in 0x800).

Credo che il post precedente possa aver dato l'impressione che le cose andarono perfettamente dall'inizio e volevo evidenziare che non è stato assolutamente così. Questo è un processo di prova dopo prova e un insegnamento costante per me – non avevo neanche capito che questi erano archivi mentre ne stavo facendo il reverse-engineering e i stavo invece chiamando "filesystem personalizzati"

!|Un messaggio su Discord con scritto Custom Filesystem|(/images/blog/0005/01_custom_filesystem_blunder.png)

Fu così fino a quando [Ermii](https://www.ermiisoft.net/) chiese gentilmente se erano file di archivio, e lì realizzai che... sì, erano proprio quelli.

## La Lunghezza dei File
Qualcosa di cui non parlai nel post sugli archivi era il fatto che non ho fatto tutto il reverse-engineer dell'intero archivio in una sola volta. Il codice che ho scritto era ad-hoc mentre scoprivo svariate cose qua e là. Ho scoperto gli offset prima ancora di capire che il resto degli interi magici codificavano la lunghezza, quindi stavo rimpiazzando i file negli archivi senza cambiarne la lunghezza. Questo risultò in cose stupende come questa:

!|La schermata principale di Chokuretsu con una significante corruzione sparsi su molteplici elementi della UI|(/images/blog/0005/02_haruohno.png)

Provare a rimpiazzare i file della grafica portava alla corruzione perché la mia routine di compressione risultava meno efficace rispetto a quella che gli sviluppatori avevano utilizzato, il che significa che i file compressi che stavo reinserendo nel gioco erano più lunghi del previsto. Ho passato molto tempo a provare a capire cosa stava succedendo finco a quando non determinai la [codificazione della lunghezza dei file](/it/blog/2022-11-02-chokuretsu-archives#the-unhinged-file-length-routine).

!|La schermata principale di Chokuretsu senza corruzioni e con haruhi cool scritto sulla faccia di Haruhi|(/images/blog/0005/03_haruhi_cool.png)

Molto meglio!

## Scrivendo le Prove
Quindi ci furono moltissime prove e moltissimi errori, il che significa che dovevo essere in grado di verificare che cose come i programmi della routine di compressione o il reinserimento dell'archivio funzionassero in maniera consistente. Un modo fantastico di farlo è _scrivendo le prove_ ed è esattamente quello che ho fatto. Ecco una prova per l'implementazione della compressione che ho scritto sotto:

```csharp
[Test]
[TestCase("evt_000", TestVariables.EVT_000_DECOMPRESSED, TestVariables.EVT_000_COMPRESSED)]
[TestCase("evt_66", TestVariables.EVT_66_DECOMPRESSED, TestVariables.EVT_66_COMPRESSED)]
[TestCase("evt_memorycard", TestVariables.EVT_MEMORYCARD_DECOMPRESSED, TestVariables.EVT_MEMORYCARD_COMPRESSED, false)]
[TestCase("grp_c1a", TestVariables.GRP_C1A_DECOMPRESSED, TestVariables.GRP_C1A_COMPRESSED, false)]
[TestCase("evt_test", TestVariables.EVT_TEST_DECOMPRESSED, TestVariables.GRP_TEST_COMPRESSED)]
[TestCase("grp_test", TestVariables.GRP_TEST_DECOMPRESSED, TestVariables.GRP_TEST_COMPRESSED)]
public void CompressionMethodTest(string filePrefix, string decompressedFile, string originalCompressedFile)
{
	byte[] decompressedDataOnDisk = File.ReadAllBytes(decompressedFile);
	byte[] compressedData = Helpers.CompressData(decompressedDataOnDisk);
	File.WriteAllBytes($".\\inputs\\{filePrefix}_prog_comp.bin", compressedData);

	if (!string.IsNullOrEmpty(originalCompressedFile))
	{
    	Console.WriteLine($"Criterio Originale di Compressione: {(double)File.ReadAllBytes(originalCompressedFile).Length / decompressedDataOnDisk.Length * 100}%");
	}
	Console.WriteLine($"Il Nostro Criterio di Compressione: {(double)compressedData.Length / decompressedDataOnDisk.Length * 100}%");

	byte[] decompressedDataInMemory = Helpers.DecompressData(compressedData);
	File.WriteAllBytes($".\\inputs\\{filePrefix}_prog_decomp.bin", decompressedDataInMemory);
	Assert.AreEqual(StripZeroes(decompressedDataOnDisk), StripZeroes(decompressedDataInMemory), message: "Implementazione Fallita.");
}
```

Questo test comprime un po' di dati e poi li decomprime per validare che la decompressione dei file è identica a quella originale. Questo fu usato ripetutamente durante il debug della routine di compressione per assicurare che funzionasse mentre ne implementavo ogni parte. A proposito di quello…

## La Routine di compressione
Ho avuto un bel po' di domande su come ho implementato la routine di compressione, quindi ho pensato di parlarne un po' qui.

Penso che il processo di base sia semplice da capire: in pratica, stiamo solamente facendo il reverse-engineering di quello che la routine di decompressione fa. Ad esempio, quando decomprimiamo un file, potremmo incontrare un byte con il primo bit a zero ed il secondo impostato (es. `0b01xxxxxx`), che stando all'algoritmo [del quale abbiamo effettuato il reverse-engineer](/blog/2022-10-19-chokuretsu-compression) significa che prendiamo gli ultimi 6 bit e gli aggiungiamo 4, per poi ripetere quel numero un po' di volte (ad esempio, se dovessimo incontrare `43 05` nel buffer di compressione, dovremmo scrivere sette byte `05` nel buffer di decompressione). Quindi, quando lo comprimiamo, dobbiamo cercare per almeno quattro byte ripetuti di fila – se dovessimo incontrare quella ripetizione, allora codifichiamo il byte di controllo seguito dal byte ripeturo (es. se dovessimo incontrare `05 05 05 05 05 05 05` nel buffer decompresso dovremmo scrivere `43 05` nel buffer compresso).

```csharp
[Test]
[TestCase("evt_000", TestVariables.EVT_000_DECOMPRESSED, TestVariables.EVT_000_COMPRESSED)]
[TestCase("evt_66", TestVariables.EVT_66_DECOMPRESSED, TestVariables.EVT_66_COMPRESSED)]
[TestCase("evt_memorycard", TestVariables.EVT_MEMORYCARD_DECOMPRESSED, TestVariables.EVT_MEMORYCARD_COMPRESSED, false)]
[TestCase("grp_c1a", TestVariables.GRP_C1A_DECOMPRESSED, TestVariables.GRP_C1A_COMPRESSED, false)]
[TestCase("evt_test", TestVariables.EVT_TEST_DECOMPRESSED, TestVariables.GRP_TEST_COMPRESSED)]
[TestCase("grp_test", TestVariables.GRP_TEST_DECOMPRESSED, TestVariables.GRP_TEST_COMPRESSED)]
public void CompressionMethodTest(string filePrefix, string decompressedFile, string originalCompressedFile)
{
	byte[] decompressedDataOnDisk = File.ReadAllBytes(decompressedFile);
	byte[] compressedData = Helpers.CompressData(decompressedDataOnDisk);
	File.WriteAllBytes($".\\inputs\\{filePrefix}_prog_comp.bin", compressedData);

## Trovare i Nomi dei File↵
Ho trascurato un dettaglio importante riguardo l'header dell'archivio – c'è altro oltre alla sezione dell'intero magico! Scorrendo sotto gli interi magici, c'è un'altra sezione della stessa lunghezza di quella precedente e poi un'altra sezione che non aveva una lunghezza ben definita ma i quali elementi sembravano seguire un pattern. Per praticamente l'intero sviluppo degli strumenti
per Chokuretsu, ho completamente ignorato queste due sezioni – saltandole letteralmente nel codice.

![Un editor esadecimale
 che mostra la sezione di un archivio bin con molto testo incomprensibile in ASCII](/images/
blog/0005/04_filenames_
section.png)

Mentre stato scrivendo l'ultimo post, stato dando un'altra occhiata a queste due sezioni che ho trovato affascinanti.
C'era sicuramente qualcosa qui – all'inizio, commentai che potessero essere i nomi dei file, ma ovviamente non sembravano avere un senso…giusto?

Ora che avevo fatto molti progressi nel progetto,
 però, avevo molta conoscenza a mia disposizione, ricordai che i file degli eventi avevano dei titoli come `EV1_000`.

![Un editor esadecimale
 che mostra una porzione di un file di evento con il testo EV1_
001](/images/
blog/0005/05_filename.png)

Quindi, decisi di prendere tutti i "nomi dei file" e iniziai a fare un trova/sostituisci in VS Code una lettera per volta. In poco tempo, divenne apparente che questi erano infatti i nomi, semplicemente cifrati. Scrissi velocemente una routine per decifrarli e improvvisamente, navigare tra i file divenne un po' più facile!

![An editor with all of the files in dat.bin listed alongside their filenames](/images/blog/0005/06_deciphered_filenames.png)

This test compresses some data and then decompresses it to validate that the
decompressed file is identical to the original one. This was used repeatedly
while debugging the compression routine to ensure it was working as I
implemented each part of it. Speaking of which…

### The Unhinged File Length Routine Revealed
Something else fun: after the second blog post, a person named Ethanol dropped into the Haroohie Discord server and dropped the bomb on what the unhinged file length routine actually does:

![A Discord message from a user named Ethanol; the message contents are reproduced below this image](/images/blog/0005/07_ethanol_division.png)

> Yup! But I noticed something that I’m not sure it’s been brought up before about the “unhinged file length routine”
>
> And I wanted to mention it
>
> Jonko just remade division with his implementation \:P
>
> The unhinged function is just a fast integer division function the compiler did

That’s right, it’s just division. 🙃 I’ve tested this since then and indeed, that’s what it is. A bit faster to just divide than to do my weird thing haha.

I think the core process is actually pretty easy to understand: essentially,
we’re just reversing what the decompression routine does. For example, when
decompressing a file, we might first encounter a byte with the top bit cleared
and the second bit set (i.e. `0b01xxxxxx`), which according to [the algorithm we
reverse-engineered](/blog/2022-10-19-chokuretsu-compression) means that we take
the lower 6 bits and add 4, then repeat the following byte that number of times
(e.g., if we encounter `43 05` in the compressed buffer, we would write seven
`05` bytes to the decompressed buffer). So, when compressing, we look for four
or more repeated bytes in a row – if we encounter that repetition, then we
encode the control byte followed by the repeated byte (e.g., if we encounter `05
05 05 05 05 05 05` in the decompressed buffer, we would write `43 05` to the
compressed buffer).

At the recommendation of my editor, I’d like to take this opportunity to apologize to the Chokuretsu devs, who were not, in fact, fucking with me specifically in this particular instance.

### Hardcoded Max File Length
One problem we ran into soon after we had the archive decoded was that the game started crashing when attempting to load one of the earliest event files. As we’ll get into in later posts, the event files necessarily become longer after we edit them. After a lot of investigation, it turned out that we were running into a problem where the game had a hardcoded max file length that we were exceeding. This is something that was outside of the archive entirely and coded as a constant in the actual game code. There were four places where it was coded, but here’s one:

```arm
RAM:02033F00                 MOV     R0, #0x12000
RAM:02033F04                 BL      sub_202E1C8
```

In a later post, we’ll cover how we do assembly hacking, but in short this required an assembly hack to fix as we had to patch in a new file length:

```arm
ahook_02033F00:
    mov r0, #0x16000
    bx lr
```

![A hex editor showing a section of a bin archive file with tons of
incomprehensible ASCII text in it](/images/blog/0005/04_filenames_section.png)

## See You Soon!
This is a shorter post, but I wanted to make sure I addressed some of the stuff that I left unsaid in the previous posts. Please look forward to the next posts in the series that will delve into how I reverse-engineered specific game files!
