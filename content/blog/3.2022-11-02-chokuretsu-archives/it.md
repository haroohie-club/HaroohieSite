---
title: &title "Sfide nel ROM Hacking di Chokuretsu Parte 2 - Archeologia dell'archivio"
description: &desc "Jonko mette l'archivio bin Shade sotto al microscopio e spiega come ha fatto a capire come spachettarlo."
locale: 'it'
navigation:
  author: 'Jonko'
  year: 2022
  month: 11
  day: 02
  tags: ['chokuretsu', 'romhacking']
  image: '0003/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0003/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-26-chokuretsu-archives'
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
[L'ultima volta](/it/blog/2022-10-19-chokuretsu-compression), abbiamo parlato di come ho fatto un reverse-engineering dell'algoritmo di compressione utilizzato in Suzumiya Haruhi no Chokuretsu. Oggi, guarderemo gli archivi che contengono i file di Chokuretsu. Vi chiedo di tenere a mente che mentre io cerco di tenere questi post separati, questo si basa completamente sui concetti fondati la scorsa volta, quindi Vi suggerisco di leggerla per prima! Inoltre, se avete già letto lo scorso post, ti avviso che questo è più po' più lungo e contiene più assembly!

Grazie alla proliferazione dei file .zip, sarai già a conoscenza degli archivi: sono file che contengono file, solitamente compressi per risparmiare spazio sul disco. Gli archivi più comuni sono i file `.zip`, `.rar`, `.7z` e `.tar.gz`. Chokuretsu utilizza un archivio personalizzato con l'estensione `.bin`. Visto che Shade è lo sviluppatore del gioco, questi file vengono riferiti come "archivi bin Shade" o semplicemente "archivi bin." Iniziamo scegliendo un archivio da guardare.

Per convenienza, prendiamo l'archivio che contiene il file che stavamo guardando la scorsa volta. Possiamo aprire il gioco in CrystalTile2 e navigare fino a dove eravamo arrivati… 

![La ROM aperta in CrystalTile2 che mostra che il file che stiamo cercando è evt.bin](/images/blog/0003/01_evt_ct2.png)

E nell'angolo in basso a sinistra ci dice che questi dati sono contenuti in `evt.bin` (Il che è quello che avremmo potuto pensare, essendo che questi dati sono delle stringhe).

## Esaminare `evt.bin`

Prima che lo apriamo nell'editor esadecimale, però, parliamo un po' di quello che dovremmo aspettarci di vedere in un archivio (in modo da confermare che `evt.bin` è infatti un archivio). Ecco gli attributi che gli darei:

* Il numero di file nell'archivio
* Una lista dei file nell'archivio – questa sarebbe composta da _i nomi dei file_ e dagli _offset_
* I dati di ciascun file

Una breve spiegazione del secondo punto – i nomi dei file sono abbastanza ovvi, ma gli offset sono dei modi per indicare la posizione dei dati in un file. In breve:

* Un _indirizzo_ è la posizione _assoluta_ dei dati in memoria. Quando impostiamo dei breakpoint, utilizziamo gli indirizzi.
* Un _offset_ è la posizione _relativa_ dei dati in un file. Quando abbiamo un singolo file aperto nell'editor esadecimale, parliamo di offset.
* Un _puntatore_ è un valore che _punta_ (indica) un indirizzo o un offset. Un puntatore che indica un indirizzo può sembrare un semplice numero intero come 0x0220B4A8, mentre un puntatore che indica un offset può essere semplice tanto quanto un 0x3800. Gli indirizzi vengono usati dai programmi per accedere alla memoria, mentre gli offset sono utilizzati per i file (visto che non vengono caricati in un punto preciso della memoria), lasciandoli comvertire in indirizzi dal programma stesso.

Quindi, mettendo da parte quello, apriamo `evt.bin`. Per prima cosa dobbiamo scorrere giù un pochino giusto per capire il layout di questo file…

![evt.bin aperto in CrystalTile2 che mostra una sezione di zeri sopra 0x2800](/images/blog/0003/02_lots_of_zeros_1.png)

![evt.bin aperto in CrystalTile2 che mostra una sezione di zeri sotto 0x2800](/images/blog/0003/02_lots_of_zeros_2.png)


Interessante! Dopo aver scorso un bel pezzo di dati, siamo finiti in un campo di zeri, seguito da un altro grande pezzo di dati seguito da un altro campo di zeri e così via. Inoltre, dopo aver scorso dopo la prima parte, ogni grande pezzo di dati sembra partire dopo un multiplo di 0x800 (un po' difficile da capire dalle immagini ma fidati, apri il file e vedrai il pattern). A me, questi sembrano i _dati dei file_ – e in più, ogni file è separato per bene con molto spazio in mezzo.

![evt.bin aperto in Crystal Tile 2 a 0x0000. I primi due byte sono evidenziati in rosso e un pattern di byte inizia a 0x22 con spazi da quattro byte sono evidenziati in ciano](/images/blog/0003/04_cyan_numbers.png)

Tornando in cima al file – ancora una volta, un sacco di numeri, ma ci sono dei pattern qui. Ma prima di guardare i numeri in ciano, ecco una breve spiegazione sull'_endianità_. Fin'ora, abbiamo principalmente pensato a queste in termini di byte, che hanno valori da 0 (0x00) a 255 (0xFF). Ma se dobbiamo invece rappresentare numeri interi più grandi? Per farlo, dobbiamo usare degli _interi multi-byte_. I tipi più comuni di questi sono:

| Numero di Byte | Nome Formale | Nome in C# |
|---|---|---|
| 2 | interi a 16-bit | `short`{lang='csharp'} (signed) or `ushort`{lang='csharp'} (non assegnati) |
| 4 | interi a 32-bit | `int`{lang='csharp'} (signed) or `uint`{lang='csharp'} (non assegnati) |
| 8 | interi a 64-bit | `long`{lang='csharp'} (signed) or `ulong`{lang='csharp'} (non assegnati) |

Ci sono due modi possibili per inserire un intero a 16-bit, tuttavia. Per esempio, prendi 512 (0x200). Potresti scegliere di metterlo iniziando dal _byte più significativo_ (es. `02 00`) o dal _byte meno significativo_ (es. `00 02`). Questa decisione è chimata _endianità_, dove il primo metodo è chiamato "endiano grande" e l'ultimo "endiano piccolo." Frequentemente, la decisione dipende da quello che l'architettura usa; ARM è un'architettura a endiani piccoli, quindi anche questi file saranno probabilmente a endiani piccoli.

Tornando alla parte evidenziata in ciano nell'immagine soprastante, possiamo vedere che se interpretiamo questi valori come degli interi a 16-bit a endiani piccoli, avremo una sequenza del tipo:

```
0x000A, 0x000C, 0x000E, 0x0010, 0x0014, 0x0016, 0x0018, 0x001A, 0x001C, 0x001E, 0x0020, 0x0022 …
```

Questi interi aumetano man mano che andiamo avanti! Infatti, continuano a crescere per ben altri 0x900 byte, con il pattern che termina all'intero finale 0x94E:

![evt.bin aperto in 0x900 che mostra che il pattern in ciano finisce in 0x950](/images/blog/0003/05_cyan_numbers_end.png)

Questi non sono di certo offset dei file (la differenza tra di loro è fin troppo poca – ad esempio, un file tra gli offset 0xB2E e 0xB32 sarebbero lunghi di solo 4 byte). Questo ci indica che forse c'è uno di questi valori per file – quindi quanti ce ne sono? I due valori sono lunghi due byte e sono divisi da due byte per un totale di quattro byte per iterazione. La sequenza inizia a 0x20 e finisce a 0x950. Quindi:

```
(0x950 - 0x20) / 0x04 = 0x24C
```

Oh! Guarda un po'! Sembra proprio che 0x24C sia il primo numero ad apparire nel file (evidenziato in rosso). Quindi possiamo credere che il primo numero è il numero dei file nell'archivio. (Per verificarlo, dovremmo controllare che il pattern sia consistente anche negli altri archivi – il che lo è.)

![evt.bin aperto su 0x0000 con evidenziazioni in verde vicine a quelle in ciano, creando una serie di interi a 32-bit](/images/blog/0003/06_magic_integers.png)

Invece, per quanto riguarda quelli vicini a quelli evidenziati in ciano – quelli verdi evidenziati di sopra? È difficile da capire adesso poiché non c'è nessun pattern ovvio. Tuttavia, abbiamo bisogno di un po' di nomenclatura qui, quindi mi riferirò alla combinazione delle parti evidenziate in verde e ciano come _interi magici_, visto che sono offuscati (magia) ma fanno anche della roba importante (altra magia). Il primo intero magico ha un intervallo da 0x20 a 0x23, questo è il motivo per i quali sono "interi" – più nello specifico, interi a 32-bit.

## Nel dettaglio, Ripresa
Lo scopo della sezione precedente era quello di dimostrare come a) identificare che un file è un archivio e b) usare un pattern basilare per effettuare un reverse-engineering su un archivio. Tuttavia, questo archivio è un po'strano e offuscato – mentre la maggior parte degli archivi in cima contengono i nomi dei file e i loro offset (posizione nell'archivio) per ogni file, non è di certo il caso con questo. Tutte quelle informazioni sono in qualche modo nascoste. Ci sono vari modi per avere a che fare con una cosa del genere, ma per me, l'opzione più facile è sembrata quella di tornare all'assembly.

### Caricamento Tabella dei File
Per prima cosa, dobbiamo trovare il codice che analizza questi archivi. Per farlo, dobbiamo andare attraverso lo stesso processo della scorsa volta – faremo una ricerca nella memoria per l'_intestazione_ (_header_, l'inizio del file, prima ancora dei file nell'archivio) dell'archivio, impostare un punto d'interruzione (breakpoint), e vedere come viene interpretata l'intestazione.

![evt.bin aperto in 0x20 che mostra i byte D1 00 0A 00 evidenziati, indicando che questi sono i byte che stiamo cercando](/images/blog/0003/07_what_we_want.png)

Quindi, torniamo in DeSmuME e cerchaimo per i byte nell'offset 0x20 (ricorda, DeSmuME si aspetta che nella ricerca nella memoria i byte vengano inseriti nell'ordine inverso, quindi al posto di `D1 00 0A 00` inseriremo `00 0A 00 D1`)...

![La finestra di ricerca di DeSmuME che mostra un singolo risultato in 0x020F7720](/images/blog/0003/08_memory_search.png)

E ancora una volta, abbiamo un singolo risultato. Quindi apriamo il visualizzatore di memoria in 0x020F7720…

![il visualizzatore di memoria di DeSmuME che mostra come la memoria in 0x020F7720 è uguale all'intestazione di evt.bin](/images/blog/0003/09_memory_find.png)

Ed è esattamente identico all'intestazione di `evt.bin`! Questo significa che l'intestazione di `evt.bin` è caricata in 0x020F7700. Quindi adesso caricheremo il gioco su no$GBA (la scorsa volta sono stato un po' duro su no$, ma i suoi strumenti di debug _sono_ molto convenienti) e impostiamo un punto d'interruzione in 0x020F7700.

![no$GBA che arriva a un punto d'interruzione in 0x020338C8](/images/blog/0003/10_breakpoint.png)

Bene, abbiamo trovato il punto d'interruzione nel momento stesso in cui abbiamo caricato il gioco. questo significa che le intestazioni degli archivi sono caricati all'avvio. Prendiamo questa subroutine in IDA.

```arm
RAM:02033818                 PUSH    {R3-R9,LR}
RAM:0203381C                 LDR     R2, =dword_20A9AB0
RAM:02033820                 MOV     R6, R0
RAM:02033824                 LDR     R1, [R2]
RAM:02033828                 LDR     R0, =aFiletblLoadSta ; "--- filetbl_load start <%d> ---\n"
RAM:0203382C                 ADD     R1, R1, #0x3F ; '?'
RAM:02033830                 BIC     R3, R1, #0x3F
RAM:02033834                 MOV     R1, R6
RAM:02033838                 STR     R3, [R2]
RAM:0203383C                 BL      dbg_print20228DC
```

Ecco qualcosa di utile! Quella stringa che contiene `"--- filetbl_load start <%d> ---\n"`{lang='c'} è un testo programmato nell'eseguibile del programma (arm9.bin) stesso. 

`=aFiletblLoadSta` è un nome che IDA dà all'indirizzo che contiene quella stringa, quindi `LDR R0, =aFiletblLoadSta`{lang='arm'} sta caricando l'indirizzo della stringa in R0. nell'ARM assembly, R0 è il primo parametro utilizzato quando si chiama un'altra subroutine, quindi il `BL` (branch-link o “chiama questa subroutine”) di sotto lo utilizza come parametro. Poiché questa stringa ha l'aspetto di una stringa di debug, possiamo pensare che sia usata in una funzione di debug di stampa (una funzione che scrive del testo nella console per scopi di debug), quindi rinominiamo la funzione in `dbg_print20228DC`.

Ma soprattutto, il fatto che questa stringa di debug viene stampata ci dice _qual'era il nome originale della funzione_ nel codice sorgente originale: `filetbl_load()`{lang='c'}. Da qui, possiamo assumere che questa funzione è pensata per caricare la "tabella dei file" dall'archivio – es., carica l'intestazione del file, che contiene tutti i nomi dei file proprio come avevamo pensato! Questo trucchetto (guardare alle stringhe di debug o degli errori per capire quello che una funzione fa) è qualcosa che faccio frequentemente – senza neanche esaminare il disassembly nel dettaglio, ora abbiamo una buona idea di cosa questa funzione fa.

### Caricare gli Interi Magici
Dopo aver provato ad analizzare questa routine nello stesso modo della routine di decompressione abbiamo scoperto che questa routine è un po'più astratta. Si riferisce a svariati indirizzi di memoria e altre cose di cui non ne ho il contesto – quindi andiamo a scoprirlo e vediamo quello che fa nel debugger. Dopotutto, il nostro obiettivo non è necessariamente quello di effettuare un reverse-engineering su quello che questa routine fa (al contrario della routine di decompressione), la utilizziamo per capire la struttura del file di archivio.

Quindi tornando in no$GBA. Andando avanti, arriviamo a questa funzione `STR`. `STR R2,[R0, R5]` dovrebbe contenere tutti i valori di R2 (0x24C, quello che sospettiamo sia il numero dei file) nella posizione in memoria R0+R5. 

![Il debugger di no$GBA con l'istruzione str descritta evidenziata](/images/blog/0003/11_str_instruction.png)

![Lo stesso screenshot del debugger di no$GBA di prima ma avanzato di un'istruzione, evidenziando il numero di file che sono contenuti nella memoria](/images/blog/0003/12_stored.png)

Dopo che sorpassiamo quella istruzione, possiamo infatti vedere che 0x24C è stato messo in 0x20C1A08 come ci aspettavamo. Quindi ora, impostiamo un punto d'interruzione per quell'indirizzo per vedere dove questo viene riferito.

![Il dialogo di creazione del punto d'interruzione in no$GBA che mostra come stiamo impostando un punto in 0x020C1A08](/images/blog/0003/13_second_break.png)

Facciamo partire il gioco…

![il debugger di no$GBA che mostra un punto d'interruzione in una nuova funzione](/images/blog/0003/14_new_subroutine.png)

E finiamo in questa nuova routine. Navigare questa routine in IDA ci rivela che è molto corta.

```arm
RAM:02033A58 sub_2033A58
RAM:02033A58                 MOV     R1, #0x18
RAM:02033A5C                 MUL     R1, R0, R1
RAM:02033A60                 LDR     R0, =dword_20C19D8
RAM:02033A64                 LDR     R0, [R0,R1]
RAM:02033A68                 BX      LR
```

`BX LR`{lang='arm'} ci fa tornare alla subroutine che ha chiamato questa, quindi tenendo a mente che sappiamo che l'istruzione precedente è quella di 0x24C caricata in R0 (il registro frequentemente utilizzato come valore di restituzione), potremmo essere in grado di postulare che l'intero scopo di questa subroutine è quella di caricare quel valore nella memoria. Quindi, rinominiamo questa funzione in `arc_getNumFiles` e vediamo cosa l'ha chiamata.

![no$GBA che mostra un punto d'interruzione nella chiamata della subroutine precedente](/images/blog/0003/15_subroutine_caller.png)

Apriamo questa sezione della subroutine in IDA:

```arm
RAM:02033CCC loc_2033CCC
RAM:02033CCC                 MOV     R0, #1
RAM:02033CD0                 MOV     R1, R0
RAM:02033CD4                 BL      sub_2025B08
RAM:02033CD8                 CMP     R9, #0
RAM:02033CDC                 BLE     loc_2033CF0
RAM:02033CE0                 MOV     R0, R10
RAM:02033CE4                 BL      arc_getNumFiles
RAM:02033CE8                 CMP     R9, R0
RAM:02033CEC                 BLE     loc_02033D04
RAM:02033CF0
RAM:02033CF0 loc_2033CF0
RAM:02033CF0                 LDR     R1, =sArchiveFileNames
RAM:02033CF4                 LDR     R0, =aFileIndexError ; "errore indice file : [%s],idx=%d\n"
RAM:02033CF8                 LDR     R1, [R1,R10,LSL#2]
RAM:02033CFC                 MOV     R2, R9
RAM:02033D00                 BL      dbg_printError
```

![no$GBA che arriva a un punto d'interruzione in 0x020338C8](/images/blog/0003/10_breakpoint.png)

Quando si chiama una funzione in un linguaggio di alto livello, si devono specificare i parametri che vengono passati alla funzione. Nell'ARM assembly, questi parametri sono passati impostando dei registri specifici a dei valori specifici – il primo parametro è impostato a R0, il secondo è impostato a R1, ecc. Quindi, sappiamo che questa subroutine `dbg_printError` stamperà quella stringa formattata. La stringa in questione è caricata in R0, il che significa che il primo parametro è la stringa stessa. Il parametro seguente (corrispondente a `%s`) dovrebbe essere caricato in R1, e l'ultimo parametro (corrispondente a `%d`) dovrebbe essere caricato in R2.

Ho già segnato il valore caricato in R1 con il nome `=sArchiveFileNames` - se noi prendessimo quell'indirizzo in IDA, possiamo vedere il perché:

![The RAM address of =sArchiveFileNames viewd in IDA showing a list of archive filenames](/images/blog/0003/16_archive_file_names.png)

It’s a list of our four archive names! So that line that says `LDR R1,[R1, R10, LSL#2]` is going to load the name of the archive in. If we look at R10 in the earlier screenshot, we can see that it’s set to 2. Typically, arrays start from index 0, so that means that index 2 here is going to be `aEvtBin` – `EVT.BIN` is the value of `%s`!

The next line is `MOV R2,R9` which is moving the value of R9 (our previous register of interest) into R2. From the text of the error message, we can conclude that **R9 stores the file index**, i.e. the position of the file we’re loading in the archive! We also know that the value we thought was the number of files in the archive was indeed that. Furthermore, based on the conditions that lead to the error message, we can also conclude that file indices start at 1 and end at the length of the archive (rather than starting at 0 and ending at `length - 1` as is more common in computing).


### Parsing the Magic Integer
Let’s continue:

```arm
RAM:02033D04 loc_2033D04
RAM:02033D04                 ADD     R2, SP, #8
RAM:02033D08                 ADD     R3, SP, #4
RAM:02033D0C                 MOV     R0, R10
RAM:02033D10                 MOV     R1, R9
RAM:02033D14                 BL      sub_2033A70
```

We’re calling `sub_2033A70` with the following parameters:

1. R0: The archive number (2 = `evt.bin`)
2. R1: The archive file index
3. R2: An address
4. R3: Another address

In other words:

```csharp
sub_2033A70(2, 0x24C, address1, address2)
```

Let’s dive into `sub_2033A70`.

```arm
RAM:02033A70                 PUSH    {R4,LR}
RAM:02033A74                 MOV     R12, #0x18
RAM:02033A78                 MUL     R4, R0, R12
RAM:02033A7C                 LDR     R0, =dword_20C19D4
RAM:02033A80                 LDR     R12, =dword_20C19D0
RAM:02033A84                 LDR     LR, [R0,R4]
RAM:02033A88                 LDR     R0, [R12,R4]
RAM:02033A8C                 LDR     LR, [LR,R1,LSL#2]
RAM:02033A90                 LDR     R1, [R0,#0xC]
RAM:02033A94                 LDR     R0, [R0,#4]
RAM:02033A98                 MOV     R1, LR,LSR R1
RAM:02033A9C                 MUL     R0, R1, R0
RAM:02033AA0                 STR     R0, [R2]
RAM:02033AA4                 LDR     R0, [R12,R4]
RAM:02033AA8                 LDR     R1, [R0,#0x10]
RAM:02033AAC                 LDR     R0, [R0,#8]
RAM:02033AB0                 AND     R1, LR, R1
RAM:02033AB4                 MUL     R0, R1, R0
RAM:02033AB8                 STR     R0, [R3]
RAM:02033ABC                 POP     {R4,PC}
```

After we step over that instruction, we can in fact see that 0x24C got stored in
0x20C1A08 as we would expect. So now, let’s set a read breakpoint for that
address to see where _it_ gets referenced.

![no$GBA with highlights showing instructions for loading the magic integer into the register](/images/blog/0003/17_initial_header_stuff.png)

After executing a few steps, we can see that the first part of this subroutine is just loading the address of the `evt.bin` header we’ve already found into R0. It’s also setting LR (which is called R14 in no$) to the address (highlighted in cyan) right before the first magic integer (highlighted in green). Interesting! The currently highlighted instruction is `LDR LR, [LR,R1,LSL#2]`{lang='arm'} – this is going to load the value at the address `LR + R1 * 4` into LR. R1, remember, is the file index – therefore, this is loading the magic integer that corresponds to that file index! (Recall that the magic integer array starts at 1 rather than 0, so to make it zero-indexed we need to start from the address directly before the first magic integer.)

In C#, we can represent this as:

```csharp
public void sub_2033A70(int archiveNumber, int index, uint address1, uint address2, byte[] archiveBytes)
{
    int numFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());
    uint magicInteger = BitConverter.ToUInt32(archiveBytes.Skip(0x1C + index * 4).Take(4).ToArray());
}
```

![no$GBA showing the magic integer highlighted](/images/blog/0003/18_loaded_magic_integer.png)

The address we should be loading from is `0x020F771C + 0x245 * 4 = 0x20F8030`, and indeed, when we step forward we see that value loaded in. Now that the magic integer is loaded in, let’s see what happens next.

```arm
RAM:02033A58 sub_2033A58
RAM:02033A58                 MOV     R1, #0x18
RAM:02033A5C                 MUL     R1, R0, R1
RAM:02033A60                 LDR     R0, =dword_20C19D8
RAM:02033A64                 LDR     R0, [R0,R1]
RAM:02033A68                 BX      LR
```

The next two instructions load the integers at offsets 0x0C (green) and 0x04 (pink) in `evt.bin` into R1 and R0, respectively. These instructions are then used in some calculations:

* `MOV R1, LR,LSR R1`{lang='arm'} – This instruction shifts the magic integer right by the value of R1 (0x11 or 17) and stores the result in R1. Since magic integers are 32-bit integers, this gives us the 15 most-significant bits of the magic integer.
* `MUL R0, R1, R0`{lang='arm'} – This instruction multiplies R1 by R0 (0x800) and stores the result in R0.

`BX LR`{lang='arm'} returns us to the subroutine that called this one, so given
that we know the previous instruction is the one that loaded 0x24C into R0 (the
register that is frequently used as a return value), we might be able to posit
that the entire purpose of this subroutine is to load that value from memory.
So, let’s rename this function to `arc_getNumFiles` and then step forward and
see what called it.

```csharp
public void sub_2033A70(int archiveNumber, int index, uint address1, uint address2, byte[] archiveBytes)
{
    int numFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());
    uint magicInteger = BitConverter.ToUInt32(archiveBytes.Skip(0x1C + index * 4).Take(4).ToArray());

    int msbShift = BitConverter.ToUInt32(archiveBytes.Skip(0x0C).Take(4).ToArray());
    int msbMultiplier = BitConverter.ToUInt32(archiveBytes.Skip(0x04).Take(4).ToArray());
    uint value1 = (magicInteger >> msbShift) * msbMultiplier;
}
```

After executing these two instructions…

![no$GBA showing two instructions highlighted which calculate the file offset from its magic integer](/images/blog/0003/20_find_offset.png)

The value of R0 is now 0x2D5000. Wait a second – we just multiplied the top part of the magic integer (the one we saw consistently increasing!) by 0x800 (which every offset is divisible by). Could we have just calculated a file offset?

![CrystalTile2 showing evt.bin at 0x2D5000; above it is a sea of zeros indicating it's the beginning of a file](/images/blog/0003/21_the_offset.png)

We did indeed! We just found the routine for calculating the offset of a file given its index! But the magic integer is still loaded into LR, so we’re not done with it yet.

The next instruction stores our freshly-calculated offset in memory. The instruction after that loads the starting address of the `evt.bin` header again. After that, we have two instructions that are similar to what we saw before.

![no$GBA showing the below two instructions highlighted](/images/blog/0003/22_find_magic_length_int.png)

This time, we’re loading the values at offsets 0x10 and 0x08 into R1 and R0, respectively. Once again, we’re going to use these values to do some math on the magic integer.

* `AND R1, LR, R1`{lang='arm'} – this instruction is performing a bitwise-and between the contents of R1 (0x1FFFF) and the magic integer. This effectively gets the 17 least-significant bits of the magic integer (the complement to the 15 most-significant bits we calculated above).
* `MUL R0, R1, R0`{lang='arm'} – this instruction multiplies R1 by R0 (0x08) and stores the result in R0.

In C#:

```csharp
public void sub_2033A70(int archiveNumber, int index, uint address1, uint address2, byte[] archiveBytes)
{
    int numFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());
    uint magicInteger = BitConverter.ToUInt32(archiveBytes.Skip(0x1C + index * 4).Take(4).ToArray());

    int msbShift = BitConverter.ToInt32(archiveBytes.Skip(0x0C).Take(4).ToArray());
    int msbMultiplier = BitConverter.ToInt32(archiveBytes.Skip(0x04).Take(4).ToArray());
    uint offset = (uint)((magicInteger >> msbShift) * msbMultiplier);

    int lsbBitwiseAnd = BitConverter.ToInt32(archiveBytes.Skip(0x10).Take(4).ToArray());
    int lsbMultiplier = BitConverter.ToInt32(archiveBytes.Skip(0x08).Take(4).ToArray());
    uint value2 = (uint)((magicInteger & lsbBitwiseAnd) * lsbMultiplier);
}
```

When calling a function in a higher-level language, you specify parameters that
get passed to the function. In ARM assembly, these parameters are passed by
setting specific registers to specific values – the first parameter is set to
R0, the second parameter is set to R1, etc. So, we know that this
`dbg_printError` subroutine is going to print that format string. The string
itself is loaded into R0, meaning that the first parameter is the string itself.
The next parameter (corresponding to `%s`) should be loaded into R1, and the
final parameter (corresponding to `%d`) should be loaded into R2.

![The special length integer being calculated in no$GBA](/images/blog/0003/23_magic_length_int.png)

And that’s the end of the function. So we’ve found the offset, but what’s that 0x5398 number? Let’s head back to the caller function in IDA and see if we can figure it out.

```arm
RAM:02033D04                 ADD     R2, SP, #0x30+var_28
RAM:02033D08                 ADD     R3, SP, #0x30+var_2C
RAM:02033D0C                 MOV     R0, R10
RAM:02033D10                 MOV     R1, R9
RAM:02033D14                 BL      arc_processMagicInteger
RAM:02033D18                 MOV     R0, #0x18
RAM:02033D1C                 MUL     R1, R10, R0
RAM:02033D20                 LDR     R0, =dword_20C19D0
RAM:02033D24                 LDR     R6, [SP,#0x30+var_2C]
RAM:02033D28                 LDR     R0, [R0,R1]
RAM:02033D2C                 LDR     R5, [R0,#4]
RAM:02033D30                 ADD     R0, R6, R5
RAM:02033D34                 MOV     R1, R5
RAM:02033D38                 SUB     R0, R0, #1
RAM:02033D3C                 BL      sub_201D310
RAM:02033D40                 MUL     R4, R5, R0
RAM:02033D44                 ADD     R0, R6, #0xFF
RAM:02033D48                 ADD     R1, R0, #0x300
RAM:02033D4C                 MOV     R0, R1,ASR#9
RAM:02033D50                 ADD     R0, R1, R0,LSR#22
RAM:02033D54                 MOV     R0, R0,ASR#10
RAM:02033D58                 STR     R0, [SP,#0x30+var_30]
RAM:02033D5C                 LDR     R1, =sArchiveFileNames
RAM:02033D60                 LDR     R0, =aReadSIdxDOfs0x ; "read:[%s],idx=%d,ofs=0x%x,sz=%dKB"
RAM:02033D64                 LDR     R1, [R1,R10,LSL#2]
RAM:02033D68                 LDR     R3, [SP,#0x30+var_28]
RAM:02033D6C                 MOV     R2, R9
RAM:02033D70                 BL      dbg_print20228DC
```

Note the debug string five lines from the bottom (`"read:[%s],idx=%d,ofs=0x%x,sz=%dKB"`{lang='c'}). After the magic integer is processed, we have a debug string explicitly referencing the file index, offset, and _size_. However, 0x5398 is not the length of this file (we know its offset, so we can check its length manually; including padding, the file is 0x5800 bytes in length). So let’s have a look at the one subroutine call in between `arc_processMagicInteger` and that debug string: `sub_201D310`.

### The Unhinged File Length Routine
Beware, this one’s a long one. Don’t worry about understanding all of it, it’s not really important for the purposes of this article. It’s an extremely obfuscated way of determining file length.

```arm
RAM:0201D310                 CMP     R1, #0
RAM:0201D314                 BXEQ    LR
RAM:0201D318                 CMP     R0, R1
RAM:0201D31C                 MOVCC   R1, R0
RAM:0201D320                 MOVCC   R0, #0
RAM:0201D324                 BXCC    LR
RAM:0201D328                 MOV     R2, #0x1C
RAM:0201D32C                 MOV     R3, R0,LSR#4
RAM:0201D330                 CMP     R1, R3,LSR#12
RAM:0201D334                 SUBLE   R2, R2, #0x10
RAM:0201D338                 MOVLE   R3, R3,LSR#16
RAM:0201D33C                 CMP     R1, R3,LSR#4
RAM:0201D340                 SUBLE   R2, R2, #8
RAM:0201D344                 MOVLE   R3, R3,LSR#8
RAM:0201D348                 CMP     R1, R3
RAM:0201D34C                 SUBLE   R2, R2, #4
RAM:0201D350                 MOVLE   R3, R3,LSR#4
RAM:0201D354                 MOV     R0, R0,LSL R2
RAM:0201D358                 RSB     R1, R1, #0
RAM:0201D35C                 ADDS    R0, R0, R0
RAM:0201D360                 ADD     R2, R2, R2,LSL#1
RAM:0201D364                 ADD     PC, PC, R2,LSL#2
RAM:0201D368 ; ---------------------------------------------------------------------------
RAM:0201D368                 NOP
RAM:0201D36C
RAM:0201D36C loc_201D36C
RAM:0201D36C                 ADCS    R3, R1, R3,LSL#1
RAM:0201D370                 SUBCC   R3, R3, R1
RAM:0201D374                 ADCS    R0, R0, R0
RAM:0201D378                 ADCS    R3, R1, R3,LSL#1
RAM:0201D37C                 SUBCC   R3, R3, R1
RAM:0201D380                 ADCS    R0, R0, R0
RAM:0201D384                 ADCS    R3, R1, R3,LSL#1
RAM:0201D388                 SUBCC   R3, R3, R1
RAM:0201D38C                 ADCS    R0, R0, R0
RAM:0201D390                 ADCS    R3, R1, R3,LSL#1
RAM:0201D394                 SUBCC   R3, R3, R1
RAM:0201D398                 ADCS    R0, R0, R0
RAM:0201D39C                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3A0                 SUBCC   R3, R3, R1
RAM:0201D3A4                 ADCS    R0, R0, R0
RAM:0201D3A8                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3AC                 SUBCC   R3, R3, R1
RAM:0201D3B0                 ADCS    R0, R0, R0
RAM:0201D3B4                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3B8                 SUBCC   R3, R3, R1
RAM:0201D3BC                 ADCS    R0, R0, R0
RAM:0201D3C0                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3C4                 SUBCC   R3, R3, R1
RAM:0201D3C8                 ADCS    R0, R0, R0
RAM:0201D3CC                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3D0                 SUBCC   R3, R3, R1
RAM:0201D3D4                 ADCS    R0, R0, R0
RAM:0201D3D8                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3DC                 SUBCC   R3, R3, R1
RAM:0201D3E0                 ADCS    R0, R0, R0
RAM:0201D3E4                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3E8                 SUBCC   R3, R3, R1
RAM:0201D3EC                 ADCS    R0, R0, R0
RAM:0201D3F0                 ADCS    R3, R1, R3,LSL#1
RAM:0201D3F4                 SUBCC   R3, R3, R1
RAM:0201D3F8                 ADCS    R0, R0, R0
RAM:0201D3FC                 ADCS    R3, R1, R3,LSL#1
RAM:0201D400                 SUBCC   R3, R3, R1
RAM:0201D404                 ADCS    R0, R0, R0
RAM:0201D408                 ADCS    R3, R1, R3,LSL#1
RAM:0201D40C                 SUBCC   R3, R3, R1
RAM:0201D410                 ADCS    R0, R0, R0
RAM:0201D414                 ADCS    R3, R1, R3,LSL#1
RAM:0201D418                 SUBCC   R3, R3, R1
RAM:0201D41C                 ADCS    R0, R0, R0
RAM:0201D420                 ADCS    R3, R1, R3,LSL#1
RAM:0201D424                 SUBCC   R3, R3, R1
RAM:0201D428                 ADCS    R0, R0, R0
RAM:0201D42C                 ADCS    R3, R1, R3,LSL#1
RAM:0201D430                 SUBCC   R3, R3, R1
RAM:0201D434                 ADCS    R0, R0, R0
RAM:0201D438                 ADCS    R3, R1, R3,LSL#1
RAM:0201D43C                 SUBCC   R3, R3, R1
RAM:0201D440                 ADCS    R0, R0, R0
RAM:0201D444                 ADCS    R3, R1, R3,LSL#1
RAM:0201D448                 SUBCC   R3, R3, R1
RAM:0201D44C                 ADCS    R0, R0, R0
RAM:0201D450                 ADCS    R3, R1, R3,LSL#1
RAM:0201D454                 SUBCC   R3, R3, R1
RAM:0201D458                 ADCS    R0, R0, R0
RAM:0201D45C                 ADCS    R3, R1, R3,LSL#1
RAM:0201D460                 SUBCC   R3, R3, R1
RAM:0201D464                 ADCS    R0, R0, R0
RAM:0201D468                 ADCS    R3, R1, R3,LSL#1
RAM:0201D46C                 SUBCC   R3, R3, R1
RAM:0201D470                 ADCS    R0, R0, R0
RAM:0201D474                 ADCS    R3, R1, R3,LSL#1
RAM:0201D478                 SUBCC   R3, R3, R1
RAM:0201D47C                 ADCS    R0, R0, R0
RAM:0201D480                 ADCS    R3, R1, R3,LSL#1
RAM:0201D484                 SUBCC   R3, R3, R1
RAM:0201D488                 ADCS    R0, R0, R0
RAM:0201D48C                 ADCS    R3, R1, R3,LSL#1
RAM:0201D490                 SUBCC   R3, R3, R1
RAM:0201D494                 ADCS    R0, R0, R0
RAM:0201D498                 ADCS    R3, R1, R3,LSL#1
RAM:0201D49C                 SUBCC   R3, R3, R1
RAM:0201D4A0                 ADCS    R0, R0, R0
RAM:0201D4A4                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4A8                 SUBCC   R3, R3, R1
RAM:0201D4AC                 ADCS    R0, R0, R0
RAM:0201D4B0                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4B4                 SUBCC   R3, R3, R1
RAM:0201D4B8                 ADCS    R0, R0, R0
RAM:0201D4BC                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4C0                 SUBCC   R3, R3, R1
RAM:0201D4C4                 ADCS    R0, R0, R0
RAM:0201D4C8                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4CC                 SUBCC   R3, R3, R1
RAM:0201D4D0                 ADCS    R0, R0, R0
RAM:0201D4D4                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4D8                 SUBCC   R3, R3, R1
RAM:0201D4DC                 ADCS    R0, R0, R0
RAM:0201D4E0                 ADCS    R3, R1, R3,LSL#1
RAM:0201D4E4                 SUBCC   R3, R3, R1
RAM:0201D4E8                 ADCS    R0, R0, R0
RAM:0201D4EC                 MOV     R1, R3
RAM:0201D4F0                 BX      LR
```

Here it is in all its glory: what I have dubbed the “unhinged file length routine.” That 0x5398 number was indeed not the actual compressed length, but rather an encoded compressed length that was decoded by this routine. A quick FAQ:

```csharp
public void sub_2033A70(int archiveNumber, int index, uint address1, uint address2, byte[] archiveBytes)
{
    int numFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());
    uint magicInteger = BitConverter.ToUInt32(archiveBytes.Skip(0x1C + index * 4).Take(4).ToArray());

## Out of the Woods
Whew! That was a lot of assembly. We could keep going down through subroutines, but we’ve accomplished our main task now: we understand a lot about how Shade bin archives work. If we return to our original list of what we expected an archive might have:

* We found the number of files (it’s the first four bytes of the archive).
* While there don’t seem to be obviously-located filenames, we did find the mapping between a file’s _index_ (which appears to be how it’s looked up), its offset, and its compressed length
* The file data is definitely present and padded to be 0x800-byte aligned.

Nice! That’s great progress. Let’s see if we can write something to parse the archive now.

The end-result of this calculation is 0x5398.

```csharp
public partial class FileInArchive
{
    public uint MagicInteger { get; set; }
    public int Index { get; set; }
    public int Offset { get; set; }
    public List<byte> Data { get; set; }
    public byte[] CompressedData { get; set; }
    public bool Edited { get; set; } = false;

    public FileInArchive()
    {
    }
}
```

Pretty basic stuff – we have properties for the magic integer, the index, the offset, and the compressed/uncompressed data. We also have an `Edited` property to indicate if we’ve modified the file or not. Finally, we have a blank constructor for now – we’ll let derived classes implement that.

Now to make the generic archive file:

```csharp
public class ArchiveFile<T>
    where T : FileInArchive, new()
{
    public const int FirstMagicIntegerOffset = 0x20;

    public string FileName { get; set; } // e.g. evt.bin
    public int NumFiles { get; set; }
    public int MagicIntegerMsbMultiplier { get; set; }
    public int MagicIntegerLsbMultiplier { get; set; }
    public int MagicIntegerLsbAnd { get; set; }
    public int MagicIntegerMsbShift { get; set; }
    public List<uint> MagicIntegers { get; set; } = new();
    public List<T> Files { get; set; } = new();
}
```

All of this is stuff we’ve seen before. Now, to the constructor.

```csharp
public ArchiveFile(byte[] archiveBytes)
{
    NumFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());

    MagicIntegerMsbMultiplier = BitConverter.ToInt32(archiveBytes.Skip(0x04).Take(4).ToArray());
    MagicIntegerLsbMultiplier = BitConverter.ToInt32(archiveBytes.Skip(0x08).Take(4).ToArray());

    MagicIntegerLsbAnd = BitConverter.ToInt32(archiveBytes.Skip(0x10).Take(4).ToArray());
    MagicIntegerMsbShift = BitConverter.ToInt32(archiveBytes.Skip(0x0C).Take(4).ToArray());

    for (int i = FirstMagicIntegerOffset; i < (NumFiles * 4) + 0x20; i += 4)
    {
        MagicIntegers.Add(BitConverter.ToUInt32(archiveBytes.Skip(i).Take(4).ToArray()));
    }
```

Here, we’re just extracting the values we found from the header and then looping through and extracting all the magic integers.

Before we get to adding files to the archive, we have to convert that compressed length function. I could go through and explain how I converted from the assembly step-by-step, but that would be a lengthy and tedious explanation. So instead, here’s the final code:

```csharp
public int GetFileLength(uint magicInteger)
{
    // absolutely unhinged routine
    int magicLengthInt = 0x7FF + (int)((magicInteger & (uint)MagicIntegerLsbAnd) * (uint)MagicIntegerLsbMultiplier);
    int standardLengthIncrement = 0x800;
    if (magicLengthInt < standardLengthIncrement)
    {
        magicLengthInt = 0;
    }
    else
    {
        int magicLengthIntLeftShift = 0x1C;
        uint salt = (uint)magicLengthInt >> 0x04;
        if (standardLengthIncrement <= salt >> 0x0C)
        {
            magicLengthIntLeftShift -= 0x10;
            salt >>= 0x10;
        }
        if (standardLengthIncrement <= salt >> 0x04)
        {
            magicLengthIntLeftShift -= 0x08;
            salt >>= 0x08;
        }
        if (standardLengthIncrement <= salt)
        {
            magicLengthIntLeftShift -= 0x04;
            salt >>= 0x04;
        }

        magicLengthInt = (int)((uint)magicLengthInt << magicLengthIntLeftShift);
        standardLengthIncrement = 0 - standardLengthIncrement;

        bool carryFlag = Helpers.AddWillCauseCarry(magicLengthInt, magicLengthInt);
        magicLengthInt *= 2;

        int pcIncrement = magicLengthIntLeftShift * 12;

        for (; pcIncrement <= 0x174; pcIncrement += 0x0C)
        {
            // ADCS
            bool nextCarryFlag = Helpers.AddWillCauseCarry(standardLengthIncrement, (int)(salt << 1) + (carryFlag ? 1 : 0));
            salt = (uint)standardLengthIncrement + (salt << 1) + (uint)(carryFlag ? 1 : 0);
            carryFlag = nextCarryFlag;
            // SUBCC
            if (!carryFlag)
            {
                salt -= (uint)standardLengthIncrement;
            }
            // ADCS
            nextCarryFlag = Helpers.AddWillCauseCarry(magicLengthInt, magicLengthInt + (carryFlag ? 1 : 0));
            magicLengthInt = (magicLengthInt * 2) + (carryFlag ? 1 : 0);
            carryFlag = nextCarryFlag;
        }
    }

    return magicLengthInt * 0x800;
}
```

Now we have a function that can determine the compressed length of a file from its magic integer. But here’s the problem – when we save the file, we’ll have to reverse that and go from the compressed length back to the magic integer. How do we accomplish that?

Well, at some point, someone had a program that could do that, but I am not that person. What’s more, this function is way over my head and I have no idea how to even begin trying to reverse it. But it’s not the end of the line for us – remember that the 0x5398 value is only 17-bits in length. That means that the possible values of the encoded integer (i.e. the input to the unhinged file length routine) range from 0 to 0x1FFFF. That’s only 131,072 possible values which in the scope of things isn’t that many. So we just… calculate all the possible encoded values based on file length and add them to a dictionary. (Since these values are constant, we do this only once in the constructor.)

```csharp
for (int i = 0; i <= MagicIntegerLsbAnd; i++)
{
    int length = GetFileLength((uint)i);
    if (!LengthToMagicIntegerMap.ContainsKey(length))
    {
        LengthToMagicIntegerMap.Add(length, i);
    }
}
```

Then when we want a new magic integer, we just do:

```csharp
public uint GetNewMagicInteger(T file, int compressedLength)
{
    uint offsetComponent = (uint)(file.Offset / MagicIntegerMsbMultiplier) << MagicIntegerMsbShift;
    int newLength = (compressedLength + 0x7FF) & ~0x7FF; // round to nearest 0x800
    int newLengthComponent = LengthToMagicIntegerMap[newLength];

    return offsetComponent | (uint)newLengthComponent;
}
```

Finally, we’re ready to start parsing the files. All we have to do is loop through the magic integers, get the file offset and compressed length from each, and then use those to take the file data and initialize a `FileInArchive` derivative.

```csharp
for (int i = 0; i < MagicIntegers.Count; i++)
{
    int offset = GetFileOffset(MagicIntegers[i]);
    int compressedLength = GetFileLength(MagicIntegers[i]);
    byte[] fileBytes = archiveBytes.Skip(offset).Take(compressedLength).ToArray();
    if (fileBytes.Length > 0)
    {
        T file = new();
        try
        {
            file = FileManager<T>.FromCompressedData(fileBytes, offset); // Don’t worry about this function, all it’s doing is initializing the file.
        }
        catch (IndexOutOfRangeException)
        {
            Console.WriteLine($"Failed to parse file at 0x{i:X8} due to index out of range exception (most likely during decompression)");
        }
        file.Offset = offset;
        file.MagicInteger = MagicIntegers[i];
        file.Index = i + 1;
        file.Length = compressedLength;
        file.CompressedData = fileBytes.ToArray();
        Files.Add(file);
    }
}
```

So we have a functional parser now. We can write up a quick GUI to show us how file loading will look and…

![A GUI interface showing the extracted script from the game](/images/blog/0003/24_archive_interface.png)

Here it is in all its glory: what I have dubbed the “unhinged file length
routine.” That 0x5398 number was indeed not the actual compressed length, but
rather an encoded compressed length that was decoded by this routine. A quick
FAQ:

### Saving the Archive
The ideal way to save the archive is to reconstruct it from scratch, but because there’s data in the header we don’t understand fully we’ll have to settle for editing the header in place. So, we’ll start by just adding the whole header we took while parsing.

```csharp
public byte[] GetBytes()
{
    List<byte> bytes = new();

    bytes.AddRange(Header);
```

Next, we’re going to loop through all the files and add them to the archive in order. If the file hasn’t been edited, then we’ll just add it directly to the archive. If the file has been edited, though, we’ll have to compress the edited data.

```csharp
    for (int i = 0; i < Files.Count; i++)
    {
        byte[] compressedBytes;
        if (!Files[i].Edited || Files[i].Data is null || Files[i].Data.Count == 0)
        {
            compressedBytes = Files[i].CompressedData;
        }
        else
        {
            compressedBytes = Helpers.CompressData(Files[i].GetBytes());
        }
        bytes.AddRange(compressedBytes);
```

* We found the number of files (it’s the first four bytes of the archive).
* While there don’t seem to be obviously-located filenames, we did find the
  mapping between a file’s _index_ (which appears to be how it’s looked up), its
  offset, and its compressed length
* The file data is definitely present and padded to be 0x800-byte aligned.

Why is moving things down tedious? Well it comes back to the magic integers – those contain _offsets_ for each file. By moving the file down, we’re changing its offset, which means the magic integer will change as well. So we need to write code to do that. 

```csharp
        if (i < Files.Count - 1) // If we aren’t on the last file
        {
            int pointerShift = 0; // Assume we’re not going to be shifting offsets at all
            while (bytes.Count % 0x10 != 0) // ensure our file is 16-byte aligned
            {
                bytes.Add(0);
            }
            // If the current size of the archive we’ve constructed so far is greater than
            // the next file’s offset, that means we need to adjust the next file’s offset
            if (bytes.Count > Files[i + 1].Offset)
            {
                // Calculate how much we need to shift the magic integer by
                pointerShift = ((bytes.Count - Files[i + 1].Offset) / MagicIntegerMsbMultiplier) + 1;
            }
            if (pointerShift > 0)
            {
                // Calculate the new magic integer factoring in pointer shift
                Files[i + 1].Offset = ((Files[i + 1].Offset / MagicIntegerMsbMultiplier) + pointerShift) * MagicIntegerMsbMultiplier;
                int magicIntegerOffset = FirstMagicIntegerOffset + (i + 1) * 4;
                uint newMagicInteger = GetNewMagicInteger(Files[i + 1], Files[i + 1].Length);
                Files[i + 1].MagicInteger = newMagicInteger;
                MagicIntegers[i + 1] = newMagicInteger;
                bytes.RemoveRange(magicIntegerOffset, 4);
                bytes.InsertRange(magicIntegerOffset, BitConverter.GetBytes(Files[i + 1].MagicInteger));
            }
            // Add file padding
            while (bytes.Count < Files[i + 1].Offset)
            {
                bytes.Add(0);
            }
        }
```

```csharp
public class ArchiveFile<T>
    where T : FileInArchive, new()
{
    public const int FirstMagicIntegerOffset = 0x20;

![Haruhi Suzumiya in the opening lines saying Hello my friend! A lovely day!](/images/blog/0003/25_dialogue_replaced.png)

I present to you the first text I ever edited into the game. 🥰

If you’re interested in seeing the end-result of the archive code, you can [check out the code on GitHub](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Archive/ArchiveFile.cs)!

## What’s Next
We’ve now parsed and repacked the archive successfully. The next thing we’ll talk about is the first files I reverse-engineered: the event files, which contained the script for the game. But before that, I’ll be posting an addendum to these two posts which will contain answers to commonly-asked questions and a few historical notes on the actual process we underwent to get this all working. Thanks for reading and please look forward to it!
