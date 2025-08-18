---
title: &title 'Chokuretsu ROM Hacking Challenges Part 1 – Cracking a Compression Algorithm!'
description: &desc 'Jonko delves into how the Shade compression algorithm was reverse engineered to hack Suzumiya Haruhi no Chokuretsu.'
navigation:
  description: *desc
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
    content: 'A Nintendo DS featuring Haruhi Suzumiya saying edited text.'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-19-chokuretsu-compression'
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

Howdy Leute! Dies ist der erste Beitrag in einer Blogreihe, in der wir uns mit den technischen Herausforderungen bei der Übersetzung von Suzumiya Haruhi no Chokuretsu (The Series of Haruhi Suzumiya) beschäftigen. Die Beiträge gehen durchaus ins Technische und enthalten zum Beispiel Codebeispiele, sind aber so geschrieben, dass sie auch für ein allgemeines Publikum verständlich bleiben. Wenn ihr Fragen oder Kommentare habt, könnt ihr uns gerne auf [Twitter anschreiben](https://twitter.com/haroohie)!

Dieses ganze Projekt begann mit [zwei](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-from-japanese-to-english-and-russian-translation-idea.601434/) [Posts](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-translation-success-need-advice.601559/) im GBATemp-Forum von einem Nutzer namens Cerber (heute einer unserer Grafikdesigner!), der um Hilfe bei der Übersetzung eines eher unbekannten DS-Spiels aus dem Haruhi-Universum bat. Er hatte bereits einige Fortschritte gemacht, etwa das Auffinden des Skripts im Spiel und das Ersetzen durch englische Zeichen, kam jedoch nicht weiter, wenn es darum ging, den Text vollständig wieder ins Spiel einzufügen.

![Cerbers DS zeigt Haruhi mit dem Text "Today is the" - komplett in sogenannten Full-Width-Zeichen](/images/blog/0002/01_cerber_ds.png)

Was Cerber genau machte, war, das ROM in einem Hex-Editor zu öffnen – einem Tool, mit dem man Binärdateien direkt bearbeiten kann, wobei jedes Byte als hexadezimale Zahl dargestellt wird. Dort suchte er nach dem Text, den er im Spiel sah. Er konnte das Skript tatsächlich finden, aber das eigentliche Problem war der Umgang mit dem, was er als „Game Code“ bezeichnete: Abschnitte rund um den Text, die offenbar für das Funktionieren des Spiels wichtig waren. Wenn er diese – in seinem Editor meist rot markierten – Bereiche veränderte, stürzte das Spiel ab oder funktionierte nicht mehr richtig. Das machte das einfache Austauschen von Texten deutlich komplizierter als erwartet.

![Ein Hex-Editor mit dem zuvor sichtbaren „Today is the" , während der Rest der Datei rot markiert ist.](/images/blog/0002/02_cerber_hex.png)

Eine kurze Erklärung dazu, was wir hier sehen: Links befindet sich der rohe Binärcode der Datei, dargestellt als eine Reihe von Bytes in hexadezimaler Schreibweise. Hexadezimal bedeutet „Basis 16“ – während wir im Alltag das Dezimalsystem (Basis 10 – also 0 bis 9) verwenden und Computer intern mit Binärzahlen (Basis 2 – also 0 und 1) arbeiten, nutzen Programmierer häufig das Hexadezimalsystem, weil sich damit ein Byte bequem mit zwei Zeichen darstellen lässt. Zur Unterscheidung der Zahlensysteme verwendet man oft bestimmte Präfixe: 0x steht für Hexadezimalzahlen (z. B. ist 0x17 gleich 23 im Dezimalsystem), 0b steht für Binärzahlen (z. B. ist 0b0000_0100 gleich 4 im Dezimalsystem).

Die Zeichen auf der rechten Seite stellen die Bytes von links dar – allerdings interpretiert durch eine _Kodierung_. Vielleicht kennst du ASCII – die einfachste und bekannteste Kodierung, bei der jeder Buchstabe des Alphabets durch genau ein Byte dargestellt wird. Dieses Spiel verwendet jedoch eine Kodierung namens Shift-JIS. Dabei handelt es sich um eine ältere japanische Zeichenkodierung, die vor der Einführung von Unicode weit verbreitet war.

Ausgehend von meiner bisherigen Erfahrung habe ich etwas recherchiert und dann eine vielleicht etwas unüberlegte Antwort gepostet:

![Ein Forenbeitrag von Jonko, veröffentlicht am 23. Oktober 2021. Der Text des Beitrags ist im folgenden Blockzitat enthalten."](/images/blog/0002/03_jonko_hinged.png)

> Hi! Das ist kein Game-Code, der den Text umgibt, sondern eher Daten für diese Szene. Ich weiß noch nicht genau, was es macht, aber ich kann dir sagen, dass dieser gesamte Abschnitt komprimiert ist und dass die Dekomprimierungsroutine bei 0x2026190 liegt. Ihr müsst ihn erst dekomprimieren, bevor ihr mit dem Bearbeiten anfangen könnt. Sobald er dekomprimiert ist, haben wir eine bessere Vorstellung davon, was die einzelnen Teile machen, und das hilft uns beim Bearbeiten.
> 
> Das andere, worüber ihr nachdenken müsst, ist ein Font-Width-Hack (Halbbreite oder variable Breite). Im Spiel gibt es mehrere Zeilen, die den gesamten Textrahmen füllen, und mit Full-Width-Zeichen wird das einfach nicht passen. Das solltet ihr also auch noch genauer untersuchen.

Also gehen wir das Punkt für Punkt durch.

## Kompression
Woher wusste ich, dass dieser Abschnitt komprimiert ist? Nun, wenn man sich seinen Screenshot ansieht, sieht man deutlich, dass der Ingame-Text im Hex-Editor angezeigt wird (ein Beispiel habe ich unten gelb markiert), aber einige Textstellen fehlen – zum Beispiel der Abschnitt „ハルヒの“, den ich unten blau markiert habe und der durch eine kürzere Zeichenfolge ersetzt ist.

![Side-by-side Screenshots von Chokuretsu. Der erste zeigt den im Spiel sichtbaren Text, der im Hex-Editor gelb markiert ist und Haruhis Dialog enthält. Der zweite hebt einen Bereich im ROM hervor, bei dem offenbar ein Teil des im Spiel sichtbaren Textes fehlt.](/images/blog/0002/04_compression_evidence.png)

Das ist ein Hinweis auf sogenannte _Run-Length Encoding_ – eine Kompressionsmethode, die Wiederholungen im Text reduziert. Gut, jetzt wissen wir, dass der Text komprimiert ist – was machen wir als Nächstes? Unser Ziel ist klar: **Wir wollen den Text in der Datei durch englischen Text ersetzen. Dafür müssen wir den Text zunächst selbst dekomprimieren, um die Datei bearbeiten zu können. Da das Spiel aber erwartet, dass der Text komprimiert ist, müssen wir die Datei nach der Bearbeitung auch wieder komprimieren, um sie ins Spiel zurück einzufügen. Also, legen wir los!

## Auffinden der Dekomprimierungsroutine
Tatsächlich haben wir hier schon ziemlich viele Informationen zur Hand. Wir haben eine Datei, von der wir wissen, dass sie komprimiert ist, wir haben eine ziemlich gute Vorstellung davon, wie sie nach der Dekomprimierung aussieht, und wir wissen, wo genau diese Datei im Spiel verwendet wird. Also laden wir das Spiel in DeSmuME (dem Emulator, der zum Zeitpunkt des Schreibens den besten Speichersucher bietet) und suchen nach einem der Texte, die im Spiel angezeigt werden.

![DeSmuMEs RAM-Suche.](/images/blog/0002/05_ram_search.png)

Also suchen wir hier nach 0x81CC82B1 (DeSmuME erwartet die Bytes in umgekehrter Reihenfolge im RAM-Sucher), was einem Teil des „この、“ im Text entspricht. Wir finden genau einen Treffer an der Adresse 0x0223433C – großartig. Wir springen zu dieser Speicheradresse…

![Der Memory-Viewer von DeSmuME zeigt die hervorgehobenen Bereiche, die exakt mit der Datei übereinstimmen, die wir zuvor untersucht haben.](/images/blog/0002/06_ram_found.png)

Und es ist ein exakter Treffer! Wir haben gefunden, wo die komprimierte Datei im Speicher geladen wird. Jetzt ist es an der Zeit, den schlechtesten DS-Emulator, aber leider auch den einzigen mit einem funktionierenden Debugger, zu öffnen: no$GBA.

![Einen Breakpoint in no$GBA setzen. Der gesetzte Breakpoint ist "[223433C]?"](/images/blog/0002/07_setting_breakpoint.png)

Wir setzen einen _Read-Breakpoint_ bei 0x0223433C. Wie schon erwähnt, benutzen wir no$GBA, weil es über einen Debugger verfügt und eine der wichtigsten Funktionen eines Debuggers ist die Möglichkeit, Breakpoints zu setzen. Ein Debugger erlaubt es uns, Schritt für Schritt zu beobachten, welcher Code beim Ausführen des Spiels gerade läuft. Ein Breakpoint weist den Debugger an, die Ausführung an einer bestimmten Stelle zu pausieren. In diesem Fall bedeutet der Read-Breakpoint, dass der Debugger die Ausführung stoppt, sobald auf die Speicheradresse 0x0223433C zugegriffen wird. Der Grund hierfür liegt darin, dass der Zeitpunkt, an dem auf die komprimierte Datei im Speicher zugegriffen wird, der Zeitpunkt ist, an dem sie dekomprimiert wird. Dies wird uns also dabei helfen, die Dekomprimierungs-Subroutine zu finden.

![Der Debugger von no$GBA erreicht den oben genannten Haltepunkt. Er wird derzeit bei der Anweisung 0202628C gestoppt.](/images/blog/0002/08_breakpoint_hit.png)

Voila, wir haben unseren Breakpoint erreicht. Das Spiel liest von 0x223433C aus die Anweisung bei 0x2026288. Es ist Zeit, unser drittes Programm zu öffnen, IDA (den Interactive Disassembler). (Obwohl ich IDA verwende ist es erwähnenswert, dass du dasselbe mit Ghidra erreichen kannst, einem anderen häufig verwendeten und kostenlosen Disassembler.)

In IDA verwenden wir daher das NDS-Loader-Plugin, um das Chokuretsu-ROM zu disassemblieren und so den Assemblercode (korrekterweise „Disassemblierung“ genannt) einfacher anzuzeigen. IDA zerlegt den Code in Unterprogramme (manchmal auch „Funktionen“ genannt), wodurch auf einen Blick klar wird, wo die Codeausführung beginnt und endet.

![IDA with 0202628C highlighted to show the instruction we found previously.](/images/blog/0002/09_ida_find.png)

Also gehen wir zu der Adresse, die wir gefunden haben…

![IDA with a subroutine we've renamed arc_decompress visible.](/images/blog/0002/10_ida_subroutine.png)

And we’ve found it! When a program is compiled, all the names of things like functions and variables get stripped away, so IDA will name the subroutine something like `sub_2026190` by default – however, we’re going to manually rename this subroutine to `arc_decompress` (which we’ve already done in the screenshot) so that it’s easier to find and reference. (The `arc` there stands for _archive_ – but we’ll have to leave that for the next entry in this series.)

So this is what I meant when I said the decompression subroutine lives at 0x2026190 – just by scrolling up we’ll find the subroutine begins at that point. This is as far as I had gotten when I replied to Cerber’s post, but this is also where the real fun begins – now it’s time to actually reverse engineer the compression algorithm.

## Reverse-Engineering the Compression Algorithm
The first thing I did was to create a sort of “assembly simulator” – I ported the assembly steps line-by-line out of the disassembly and into a C# program. (The choice to use C# here is just because it’s the higher-level language I’m most comfortable with; you could choose instead to use Python, C++, JavaScript, or whatever else you’d like.) Why do this? At the time, I was a beginner with assembly, so this exercise served two purposes: firstly, it helped me become more familiar with the disassembly; secondly, it gave me a program I could run that I knew for a fact would match what the assembly code was doing.

The simulator ended up looking like this:

![Visual Studio showing a class called AsmDecompressionSimulator.](/images/blog/0002/11_asm_simulator.png)

For ease of reference, I’ve annotated the lines of code with comments showing what instructions in the disassembly they correspond to. Once I completed it, I was able to decompress files naively! However, it’s pretty inefficient. So we’re actually going to try to understand this assembly in order to turn it into truly human-readable code.

### An Assembly Primer
In order to do this, a quick primer on assembly: assembly is _machine level_ code, meaning it is what the processor actually reads to execute instructions. That last word is important – the most basic unit of assembly is an _instruction_. Examples include things like `ADD` (adds two numbers) or `SUB` (subtracts two numbers).

To operate on values in assembly, they must first be loaded into a _register_. Registers can be thought of as “CPU variables” and are numbered like R0, R1, R2, etc. The DS has 15 of them. The values are loaded into registers from _memory_ (or _RAM_), which is a large space of quickly accessible binary that can be referenced by the CPU on the fly.

Assembly code varies from platform to platform – more specifically, it varies depending on the _architecture_ (which you can think of as the family or type) of microchip. The DS uses ARM assembly for its main executable, which is common and well-documented. The way I learned ARM assembly was getting right into it and debugging Nintendo DS code while looking up what each instruction was doing in another window. If you’re looking for good references for ARM, the [official documentation](https://developer.arm.com/documentation/dui0068/b/ARM-Instruction-Reference) is pretty instructive, though I also find just googling “ARM \[instruction I want to better understand\]” to work wonders.

### Into the Thick of It

#### The Beginning

Let’s start at the beginning:
```arm
RAM:02026198                 LDRB    R3, [R0],#1
RAM:0202619C                 CMP     R3, #0
RAM:020261A0                 BEQ     loc_20262A0
RAM:020261A4                 TST     R3, #0x80
RAM:020261A8                 BEQ     loc_2026224
```
Let’s break down these instructions:

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

Pretty simple so far – we’re just checking if the first byte is zero.

#### Direct Write

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

```csharp
for (int z = 0; z < compressedData.Length;)
{
    int blockByte = compressedData[z++];
    if (blockByte == 0)
    {
        break;
    }

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

The full decompression implementation can be found [here](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Helpers.cs#L359-L446).

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
