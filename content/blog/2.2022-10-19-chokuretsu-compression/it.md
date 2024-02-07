---
title: &title 'Chokuretsu ROM Hacking Challenges Part 1 – Cracking a Compression Algorithm!'
description: &desc "Jonko parla di come riuscì a decompilare l'algoritmo di compressione Shade per modificare Suzumiya Haruhi no Chokuretsu."
locale: 'it'
navigation:
  author: 'Jonko'
  year: 2022
  month: 10
  day: 19
  tags: ['chokuretsu', 'romhacking']
  image: '0002/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0002/00_thumbnail.png
  - property: 'og:image:alt'
    content: 'Un Nintendo DS con Haruhi Suzumiya che dice del testo modificato.'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-19-chokuretsu-compression'
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

Benvenuti! Questo è il primo di una serie di post del blog che andrà nel dettaglio riguardo le sfide tecniche che coinvolgono la traduzione di Suzumiya Haruhi no Chokuretsu (La Serie Di Haruhi Suzumiya). Questi blog tendono ad essere al quanto dettagliati e includeranno cose come stringhe di codice, ma scritte in modo di essere capili da un pubblico generale. Se hai delle domande o dei commenti, puoi sempre [mandarci un tweet](https://twitter.com/haroohie)!

Tutto questo progetto iniziò con [due](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-from-japanese-to-english-and-russian-translation-idea.601434/) [post](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-translation-success-need-advice.601559/) sul forum di GBATemp da un utente chiamato Cerber (che ora è uno dei nostri grafici!) che stava chiedendo aiuto a tradurre un oscuro gioco per DS basato sulla serie di Haruhi. Aveva fatto molti progressi nel trovare lo script e rimpiazzarlo con dei caratteri inglesi, ma non riusciva ad inserire il testo per intero.

![Il DS di Cerber con Haruhi che dice "Today is the" in caratteri in piena-larghezza](/images/blog/0002/01_cerber_ds.png)

Quello che Cerber stava facendo esattamente era aprire la ROM in un editor esadecimale (un programma che permette di modificare direttamente i file in binario) e cercare il testo che vedeva nel gioco. Lui riuscì a trovare lo script, ma fu messo in difficoltà da quello che chiamò "codice di gioco" che stava attorno al testo che provò a cambiare -- modificare le sezioni che lui mise in rosso avrebbe rotto completamente il gioco.

![Un editor esadecimale con il "Today is the" di prima visibile mentre il resto del file è evidenziato in rosso](/images/blog/0002/02_cerber_hex.png)

Ecco una spiegazione veloce di quello che vediamo: a sinistra, abbiamo il binario nel file, rappresentato da una serie di byte in esadecimale. L'esadecimale è anche chiamato base 16 -- mentre noi utilizziamo solitamente il decimale (base 10 -- 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9) e i computer utilizzano il binario (base 2 -- 0 e 1), i programmatori spesso fanno uso dell'esadecimale perché ci permette di rappresentare ogni singolo byte in due caratteri. Quando scriviamo un numero, per distinguere la base utilizziamo spesso 0x come prefisso per l'esadecimale (0x17 è 23 in decimale) e 0b per rappresentare numeri in binario (0b0000_0100 è 4 in decimale).

I caratteri sulla destra rappresentano i byte che vediamo a sinistra interpretati attraverso un _encoding_. Potresti aver sentito parlare dell'ASCII, l'encoding più basilare -- ogni lettera dell'alfabeto è rappresentata da un singolo byte. Questo gioco utilizza un encoding chiamato Shift-JIS, che è come il giapponese veniva rappresentato prima dell'Unicode.

Pensando alle mie esperienze in passato, feci qualche investigazione per poi postare una risposta probabilmente da squilibrato:

![Un post del forum che Jonko pubblicò l'Ottobre 23 del 2021. Il testo del post è incluso in una citazione al di sotto."](/images/blog/0002/03_jonko_hinged.png)

> Ciao! Allora, quello non è codice del gioco; sono dati per questa scena. Non so ancora cosa fa tutto questo, ma posso dirti che tutto questo pezzo è compresso e che la subroutine di decompressione è al 0x2026190. Dovrai decomprimerlo prima di poterlo modificare e una volta che è decompresso sarà più facile farsi un'idea di cosa fa ogni parte dandoci un aiuto nel modificarle.
> 
> Un altra cosa a cui dovrai pensare è una modifica per la larghezza del font (di lunghezza media o variabile). Ci sono alcune linee nel gioco che riempiono tutto il box del testo, e sarebbe impossibile farci stare la traduzione per intero con dei caratteri a piena larghezza, quindi dovrai investigare pure quello.

Quindi facciamolo passo dopo passo.

## Compressione
Come facevo a sapere che questa scena era compressa? Beh, guardando al suo screenshot, possiamo vedere chiaramente come il testo di gioco viene mostrato nell'editor esadecimale (ho marcato un esempio in giallo), ma alcune porzioni di testo mancano -- Per esempio, la parte con "ハルヒの" che ho marcato è rimpiazzata da una sequenza di caratteri più corta che ho marcato in blu.

![Screenshot di Chokuretsu posti uno di fianco all'altro. Il primo corrisponde al testo evidenziato in giallo mostrando che il dialogo di Haruhi è presente. Il secondo ha una sezione evidenziata del testo nella ROM, dove apparentemente manca una porzione del testo originale.](/images/blog/0002/04_compression_evidence.png)

Questo è un segno di quello che chiamiamo _run-length encoding_ -- un metodo per comprimere file che si focalizza ad eliminare ripetizioni. Va bene, ora sappiamo che è compresso, e ora cosa facciamo? Sappiamo in nostro obiettivo: **vogliamo rimpiazzare il testo nel file con del testo inglese**. Per farlo, dovremo decomprimere il testo noi stessi in modo da modificare il file. Tuttavia, poiché il gioco si aspetta di avere il testo compresso, dovremo anche ricomprimere il file in modo da reinserirlo nel gioco. Bene, iniziamo.

## Trovare la Subroutine di Decompressione
Ora abbiamo moltissime informazioni a nostra disposizione qui. Abbiamo un file del quale sappiamo già che è compresso, abbiamo una buona idea di come diventa una volta decompresso, e sappiamo dove il gioco utilizza quel file. Quindi, carichiamo il gioco in DeSmuME (l'emulatore che, quando scrissi questo, ha il miglior cercatore di memoria) e cercare un po' del testo che appare nel gioco.

![Ricerca nella RAM su DeSmuME.](/images/blog/0002/05_ram_search.png)

Qui stiamo cercando per 0x81CC82B1 (la ricerca nella RAM di DeSmuME esprime i byte in ordine inverso) che corrisponde alla porzione del “この、” nel testo. Troviamo esattamente un risultato nell'indirizzo 0x0223433C -- fantastico. Andiamo in quell'indirizzo di memoria…

![Il visualizzatore di memoria di DeSmuME con delle sezioni evidenziate che mostrano come il testo coincide esattamente con il file che stavamo cercando.](/images/blog/0002/06_ram_found.png)

E coincide esattamente! Abbiamo trovato dove il file compresso viene caricato nella memoria. Quindi adesso, è ora di aprire il peggior emulatore per DS, ma anche l'unico con un debugger funzionante, no$GBA.

![Impostando un breakpoint in no$GBA. Il breakpoint impostato è "[223433C]?"](/images/blog/0002/07_setting_breakpoint.png)

Andremo ad impostare un _breakpoint di lettura_ per 0x0223433C. Come dissi prima, il motivo per il quale stiamo usando no$ è perché è l'unico che ha un debugger, e una delle funzioni dei debugger è la possibilità di aggiungere dei _breakpoint_. Un debugger ci permette di vedere quale codice è in esecuzione mentre il gioco gira, ed un breakpoint dice al debugger di fermarsi ad una certa linea di esecuzione. In questo caso questo breakpoint di lettura dice al debugger di fermare l'esecuzione appena legge l'indirizzo 0x0223433C. Il motivo per il quale dobbiamo fare questo, è perché la memoria fa accesso ad un file compresso quando viene decompresso, quindi ci aiuterà a trovare la subroutine di decompressione.

![Il debugger di no$GBA che arriva al punto menzionato prima. Attualmente è fermo all'istruzione 0202628C.](/images/blog/0002/08_breakpoint_hit.png)

Voilà, abbiamo raggiunto il nostro breakpoint. Il gioco legge da 0x223433C all'istruzione in 0x2026288. Ora dobbiamo aprire il nostro terzo programma, IDA (l'Interactive Disassembler). (È meglio notare che mentre io uso IDA, potete fare la stessa cosa usando Ghidra, un altro disassemblatore comunemente usato che è pure gratis.)

Quindi in IDA, utilizziamo il plugin del caricatore di NDS per disassemblare la ROM di Chokuretsu in modo da vedere il codice assembly (spesso riferito come "disassembly") più facilmente. IDA fa qualcosa di abbastanza utile, ossia dividere il codice in subroutine (dette anche "funzioni"), che rende più facile vedere dove il codice inizia e finisce.

![IDA con 0202628C evidenziato per mostrare l'istruzione che abbiamo trovato prima.](/images/blog/0002/09_ida_find.png)

Quindi andiamo nell'indirizzo che abbiamo trovato…

![IDA con una subroutine che abbiamo rinominato in arc_decompress visibile.](/images/blog/0002/10_ida_subroutine.png)

E l'abbiamo trovato! Quando un programma viene compilato, tutti i nomi delle cose come le funzioni e le variabili vengono tolti, quindi IDA rinominerà le subroutine in qualcosa come `sub_2026190` di default -- tuttavia, lo andremo a cambiare in `arc_decompress` (che abbiamo già fatto nello screenshot) in modo che è più facile da trovare e richiamare. (`arc` sta per _archivio_ -- ma ne parleremo nel prossimo post di questa serie.)

Questo è quello che intendevo quando dissi che la subroutine di decompressione si trova in 0x2026190 -- Scorrendo in sù scopriremo che la subroutine inizia in quel punto. Questo fu quanto riuscì a scoprire quando risposi al post di Cerber, ma è anche dove il divertimento inizia veramente -- è ora di decompilare l'algoritmo di decompressione.

## Algoritmo di Reverse-Engineering
La prima cosa che ho fatto è stato creare una specie di "simulatore di assembly" -- Ho riscritto ogni stringa di codice dell'assembly in un programma C#. (La scelta di usare C# l'ho fatta solo perché è un linguaggio di alto livello con il quale mi trovo meglio io; si può usare anche Python, C++, JavaScript o qualsiasi linguaggio.) Perché farlo? Ai tempi ero ancora un principiante con assembly, quindi questo esercizio mi è servito per due motivi: primo, mi aiutò a conoscere meglio il disassembly; secondo, mi ha dato un programma che potevo eseguire sapendo per bene che sarebbe stato uguale a quello in assembly.

Il simulatore finì per essere così:

![Visual Studio che mostra una classe chiamata AsmDecompressionSimulator.](/images/blog/0002/11_asm_simulator.png)

Per facilitare i riferimenti, ho annotato le stringhe di codice con dei commenti che mostrano quello che fa ogni istruzione nel disassembly alla quale corrispondono. Una volta completato, sono stato in grado di decomprimere i file in modo nativo! Tuttavia, è abbastanza inefficiente. Quindi proveremo invece a capire questo assembly in modo da renderlo del codice leggibile da un essere umano.

### Un'Introduzione all'Assembly
Per farlo, dobbiamo prima capire cos'è l'assembly: assembly è un linguaggio a _livello macchina_, il che significa che è quello che il processore legge per eseguire le istruzioni. Quell'ultima parola è importante -- L'unità più basilare dell'assembly è un'_istruzione_. Ad esempio code come `ADD` (aggiunge due numeri) o `SUB` (sottrare due numeri).

Per operare sui valori in assembly, devono prima essere caricati in un _registro_. I registi possono essere visti come "le variabili della CPU" e sono numerati come R0, R1, R2, ecc. Il DS ne ha 15. I valori sono caricati nei registri dalla _memoria_ (detta anche _RAM_), che ha uno spazio largo di binari accessibili che possono essere richiamati dalla CPU velocemente.

Il codice in assembly varia di piattaforma in piattaforma -- più nello specifico, varia in base all'_architettura_ (che può essere vista come la famiglia o il tipo) del microchip. Il DS utilizza l'assembly ARM per il suo eseguibile principale, che è abbastanza comune e ben documentato. Il modo in cui io imparai assembly ARM fu provare a fare il debug dei codici per il Nintendo DS mentre cercavo su un'altra finestra quello che ogni istruzione faceva. Se vuoi dei buoni punti di riferimento per ARM, la [documentazione officiale](https://developer.arm.com/documentation/dui0068/b/ARM-Instruction-Reference) è molto istruttiva, tutta trovo che cercare su Google "ARM \[istruzione che voglio capire meglio\]" funzionare a meraviglia.

### Nel Dettaglio

#### L'Inizio

Partiamo dall'inizio:
```arm
RAM:02026198                 LDRB    R3, [R0],#1
RAM:0202619C                 CMP     R3, #0
RAM:020261A0                 BEQ     loc_20262A0
RAM:020261A4                 TST     R3, #0x80
RAM:020261A8                 BEQ     loc_2026224
```
Vediamo cosa fa ognuna di queste istruzioni:

* `LDRB R3, [R0], #1`{lang='arm'} – This loads the byte at the address contained in R0 (which contains the current position in the file) into the register R3 and then increments R0 by one (meaning we move to the position of the next byte in the file). Since we’re at the beginning of the file, this loads the first byte in the file.
* `CMP R3, #0`{lang='arm'} ; `BEQ loc_20262A0`{lang='arm'} – `BEQ`{lang='arm'} means “branch if equal,” but really it just means “branch if the last comparison is equal to zero.” Therefore, if that value we just loaded is zero, we’re going to branch to the end of the subroutine. We can ignore this for now.
* `TST R3, #0x80`{lang='arm'} – `TST`{lang='arm'} performs a bitwise-and without storing the result. A bitwise-and compares two bytes and gives a result where each bit is 1 only if that bit is 1 in both of the two bytes it compares. In the case where R3 is 0xAA, we end up with something like:
```
10101010 (0xAA)
10000000 (0x80)
_______
10000000 (0x80)
```
So this `TST`{lang='arm'} followed by the `BEQ`{lang='arm'} is just checking whether the first bit is zero or not. If it is zero, we branch to 0x2026224. Let’s branch there now (I have knowledge you don’t so I know checking this branch is going to be simpler lol). But first, we’ll convert this into C#:

```csharp
int blockByte = compressedData[z++];
if (blockByte == 0)
{
    break;
}

if ((blockByte & 0x80) == 0)
{
    // Do something
}
else
{
    // Do something else
}
```

![IDA with 0202628C highlighted to show the instruction we found
previously.](/images/blog/0002/09_ida_find.png)

So we go to the address we found…

```arm
RAM:02026224                 TST     R3, #0x40
RAM:02026228                 BEQ     loc_2026268
```

* `TST R3, #0x40`{lang='arm'} – This is now checking whether the second bit is set. If it is, we’re going to jump to 0x2026268. We’ll get back to this section in a sec, but first let’s jump there after we convert this bit to C# as well:

```csharp
if ((blockByte & 0x80) == 0)
{
    if ((blockByte & 0x40) == 0)
    {
        // Do something 0x80
    }
    else
    {
        // Do something else 0x80
    }
}
else
{
    // Do something else
}
```

```arm
RAM:02026268 loc_2026268                             ; CODE XREF: arc_decompress+98↑j
RAM:02026268                 TST     R3, #0x20
RAM:0202626C                 ANDEQ   R12, R3, #0x1F
RAM:02026270                 BEQ     loc_2026280
RAM:02026274                 LDRB    R12, [R0],#1
RAM:02026278                 MOV     R3, R3,LSL#27
RAM:0202627C                 ORR     R12, R12, R3,LSR#19
RAM:02026280
RAM:02026280 loc_2026280                             ; CODE XREF: arc_decompress+E0↑j
RAM:02026280                 CMP     R12, #0
RAM:02026284                 BLE     loc_2026198
RAM:02026288
RAM:02026288 loc_2026288                             ; CODE XREF: arc_decompress+108↓j
RAM:02026288                 LDRB    R3, [R0],#1
RAM:0202628C                 SUB     R12, R12, #1
RAM:02026290                 CMP     R12, #0
RAM:02026294                 STRB    R3, [R1],#1
RAM:02026298                 BGT     loc_2026288
RAM:0202629C                 B       loc_2026198
```

This is a pretty big chunk of code, but don’t let it scare you. We got this.

* `TST R3, #0x20`{lang='arm'} ; `ANDEQ R12, R3, #0x1F`{lang='arm'} – Now we’re testing the third bit of our first byte here. If it’s zero, we’re going to take its last five bits (0x1F = 0xb0001_1111) and branch to 0x2026280. We’ll get there in a sec.
* `LDRB R12, [R0], #1`{lang='arm'} – We’re loading the next byte from the file into a register (R12). So if the third bit of that first byte was set, it means we need to do something with the next byte.
* `MOV R3, R3, LSL#27`{lang='arm'} ; `ORR R12, R12, R3, LSR#19`{lang='arm'} – `LSL` is “logical shift left” and `LSR` is “logical shift right,” respectively meaning to shift the bits in R3 to the left or right by 27 and 19. Shifting them left 27 and right 19 effectively means shifting left 8 after clearing the top 3 bits, which is equivalent to multiplying `R3 & 0x1F` by 0x100. With a bitwise-or, we combine the first byte and the second byte we just read into a 16-bit integer.

This is calculating something in an if-statement – we can represent it in C# like this:
```csharp
int value;
if ((blockByte & 0x20) == 0)
{
    value = blockByte; // the `& 0x1F` is unnecessary since we've already determined bits 1-3 to be 0
}
else
{
    // bit 3 == 1 --> need two bytes to indicate how much data to read
    value = compressedData[z++] + ((blockByte & 0x1F) * 0x100);
}
```

We don’t yet understand exactly what the value does, but that will become clear when we look at the next section.

* `CMP R12, #0`{lang='arm'} ; `BLE loc_2026198`{lang='arm'} – If the value we just calculated is zero, we immediately return to the top of the function.
* `LDRB R3, [R0], #1`{lang='arm'} – As we’re used to by now, we’re going to load in the next byte to R3.
* `SUB R12, R12, #1`{lang='arm'} – We subtract 1 from the value we calculated earlier.
* `CMP R12, #0`{lang='arm'} – We compare the value we calculated earlier to 0.
* `STRB R3, [R1], #1`{lang='arm'} – We store the most recent value we just read in the decompressed data buffer and move one forward in that buffer.
* `BGT loc_2026288`{lang='arm'} – If R12 was greater than 0 two steps ago, we go to the first step in this section. Aha – this is a loop!
* `B loc_2026198`{lang='arm'} – If it’s less than or equal to 0, we go back to the top of the subroutine.

This is actually super straightforward now that we understand that it’s a loop. The `value` we were calculating earlier is actually the number of bytes (`numBytes`) to copy directly from the input buffer to the output buffer. Thus we can represent this section as:

```csharp
for (int i = 0; i < numBytes; i++)
{
    decompressedData.Add(compressedData[z++]);
}
```

What’s more, the fact that we return to the top of the function each time implies that it too is a loop.

The program we have written so far looks like this:

* `LDRB R3, [R0], #1`{lang='arm'} – This loads the byte at the address contained
  in R0 (which contains the current position in the file) into the register R3
  and then increments R0 by one (meaning we move to the position of the next
  byte in the file). Since we’re at the beginning of the file, this loads the
  first byte in the file.
* `CMP R3, #0`{lang='arm'} ; `BEQ loc_20262A0`{lang='arm'} – `BEQ`{lang='arm'}
  means “branch if equal,” but really it just means “branch if the last
  comparison is equal to zero.” Therefore, if that value we just loaded is zero,
  we’re going to branch to the end of the subroutine. We can ignore this for
  now.
* `TST R3, #0x80`{lang='arm'} – `TST`{lang='arm'} performs a bitwise-and without
  storing the result. A bitwise-and compares two bytes and gives a result where
  each bit is 1 only if that bit is 1 in both of the two bytes it compares. In
  the case where R3 is 0xAA, we end up with something like:
```
10101010 (0xAA)
10000000 (0x80)
_______
10000000 (0x80)
```
So this `TST`{lang='arm'} followed by the `BEQ`{lang='arm'} is just checking
whether the first bit is zero or not. If it is zero, we branch to 0x2026224.
Let’s branch there now (I have knowledge you don’t so I know checking this
branch is going to be simpler lol). But first, we’ll convert this into C#:

    if ((blockByte & 0x80) == 0)
    {
        if ((blockByte & 0x40) == 0)
        {
            // bits 1 & 2 == 0 --> direct data read
            int numBytes;
            if ((blockByte & 0x20) == 0)
            {
                numBytes = blockByte; // the `& 0x1F` is unnecessary since we've already determined bits 1-3 to be 0
            }
            else
            {
                // bit 3 == 1 --> need two bytes to indicate how much data to read
                numBytes = compressedData[z++] + ((blockByte & 0x1F) * 0x100);
            }
            for (int i = 0; i < numBytes; i++)
            {
                decompressedData.Add(compressedData[z++]);
            }
        }
```

#### Decompressing a File

So essentially, the decompression algorithm operates as follows: A “control byte” is read in and the first three to four bits determine the following functions. The decompression options are:
* Read a certain number of bytes directly into the decompressed buffer
* Read a single byte and repeat it a certain number of times
* Backreference to a particular location in the decompressed data and copy those bytes forward

* `TST R3, #0x40`{lang='arm'} – This is now checking whether the second bit is
  set. If it is, we’re going to jump to 0x2026268. We’ll get back to this
  section in a sec, but first let’s jump there after we convert this bit to C#
  as well:

And if we try decompressing a file…

![A hex editor showing the fully decompressed script file from earlier.](/images/blog/0002/12_decompressed_file.png)

There’s the decompressed script! Fantastic.

#### Creating the Compression Routine

So now we understand the decompression algorithm pretty well and can decompress all the files to replace the Japanese text with English text. But if we want to reinsert them into the game, we still have to be able to recompress our edited files. So, we have to implement a compression routine. There isn’t going to be one to copy from assembly like we did with the decompression subroutine since that routine isn’t in-game (files were compressed at game creation time, they’re only decompressed in-game). But this isn’t so bad – since we know how decompression works, we just have to reverse that process to compress things.

For example, we can implement the “direct write” mode pretty easily:

```csharp
private static void WriteDirectBytes(byte[] writeFrom, List<byte> writeTo, int position, int numBytesToWrite)
{
    if (numBytesToWrite < 0x20)
    {
        writeTo.Add((byte)numBytesToWrite);
    }
    else
    {
        int msb = 0x1F00 & numBytesToWrite;
        byte firstByte = (byte)(0x20 | (msb / 0x100));
        byte secondByte = (byte)(numBytesToWrite - msb);
        writeTo.AddRange(new byte[] { firstByte, secondByte });
    }
    writeTo.AddRange(writeFrom.Skip(position - numBytesToWrite).Take(numBytesToWrite));
}
```

First, we take the number of bytes we’re going to write. If that number is less than 0x20 (i.e. can be contained in the lower five bits of the control byte), then we simply write that number to the output buffer. Otherwise, we have to calculate the two bytes to write to represent a larger number. Finally, we simply write the bytes to the output buffer.

We can implement similar (albeit more complex) functionality for the repeater and lookback modes. The end result can be found [here](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Helpers.cs#L182-L357).

## What’s Next
Now we have working compression and decompression implementations, but we’re not out of the woods yet. Next, we have to contend with the fact that this file is just one of many in an archive, and we have to figure out how to properly replace it. Join us in our next post where we delve into that.
