---
title: &title '《串聯》ROM 破解挑戰第 1 部分：破解壓縮演算法！'
description: &desc 'Jonko 深入研究了 Shade 的壓縮演算法是如何被逆向工程，然後用來破解《涼宮春日的串聯》的。'
locale: 'zh-hant'
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
    content: 'A Nintendo DS featuring Haruhi Suzumiya saying edited text.'
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

大家好！這是一系列部落格文章中的第一篇，這些文章將深入探討翻譯《涼宮春日的串聯》（涼宮ハルヒの直列）所涉及的技術挑戰。這些部落格確實很有技術性，包括程式碼示例等內容，但它們的編寫是為了讓普通讀者能夠理解。如果你有任何問題或評論，請隨時[向我們轉推](https://twitter.com/haroohie)！

整個專案始於在 GBATemp 論壇上的[兩篇](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-from-japanese-to-english-and-russian-translation-idea.601434/)[帖子](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-translation-success-need-advice.601559/)，一位名叫 Cerber 的使用者（現在他是我們的圖形設計師之一！）請求幫助翻譯一款衍生自涼宮春日系列的鮮為人知的 DS 遊戲。他在遊戲中找到指令碼並將其替換為英文字元方面取得了一些進展，但在能夠完全重新插入文字方面遇到了困難。

![Cerber 的 DS，上面顯示著春日正在以全形字元說“Today is the”](/images/blog/0002/01_cerber_ds.png)

Cerber 所做的正是在十六進位制編輯器（一種直接修改二進位制檔案的工具，其中每個位元組都表示為十六進位制數）中開啟 ROM，並搜尋他在遊戲中看到的文字。他能夠找到指令碼，但他遇到的問題是如何處理他所謂的“遊戲程式碼”，該程式碼圍繞著他試圖替換的文字——修改用紅色標記的部分會讓遊戲徹底崩潰。

![一個十六進位制編輯器，顯示著上文的“Today is the”，而檔案的其它部分被以紅色高亮](/images/blog/0002/02_cerber_hex.png)

快速解釋一下我們在這裡看到的內容：在左側是檔案中的原始二進位制，用十六進位制表示為一系列位元組。十六進位制（基數為 16）——雖然我們通常使用十進位制（基數為 10，即 0、1、2、3、4、5、6、7、8、9），計算機使用二進位制（基數為 2，即 0、1），但程式設計師通常使用十六進位制，因為它允許我們用兩個字元表示單個位元組。在寫入數字時，為了區分基數，我們通常使用 0x 作為十六進位制數的字首（0x17 在十進位制中是 23），使用 0b 表示二進位制數（0b0000_0100 在十進位制下是 4）。

右側的字元表示我們在左側看到位元組，透過*編碼*來解釋。你可能熟悉 ASCII，這是最基本的編碼——字母表中的每個字母都由單個位元組表示。該遊戲使用名為 Shift-JIS 的編碼，這是 Unicode 出現之前日語的表示方式。

根據我過去的經驗，我做了一些調查，然後釋出了一個可能不太可靠的回覆：

![Jonko 於 2021 年 10 月 23 日釋出的一篇論壇帖子。帖子的內容參見下文的引文。](/images/blog/0002/03_jonko_hinged.png)

> 你好！它附近的並不是遊戲程式碼；而是這個場景的更多資料。我還不知道這一切都有什麼作用，但我可以告訴你的是，這整個塊被壓縮了，並且解壓縮的子程式位於 0x2026190。你必須先解壓縮它，然後才能開始編輯它，如果能夠解壓的話，我們可能會更加了解每部分是做什麼的，這將使我們能夠編輯它。
> 
> 你需要考慮的另一件事是字型寬度的修改（半形或可變寬度）。遊戲中有很多行填充了整個文字框，你不可能用全形字元把它塞進去，所以你也要調查一下這個。

讓我們一點一點地討論這個問題。

## 壓縮
我怎麼知道這個部分被壓縮了？請看他的螢幕截圖，我們可以清楚地看到遊戲中的文字顯示在十六進位制編輯器中（我在下面用黃色標記了一個例子），但文字的某些部分缺失了——例如，我在下面標記的“ハルヒの”中的一位（bit）被較短字元序列（高亮為了藍色）所取代。

![並排的《串聯》螢幕截圖。左邊的圖對應於黃色高亮的文字，顯示了春日的對話。右邊的圖突出顯示了 ROM 中的一段文字，該文字顯然是遊戲中文字的一部分](/images/blog/0002/04_compression_evidence.png)

這是所謂*執行長度編碼*的一個標誌——這是一種壓縮檔案的方法，專注於消除重複。好的，現在我們知道它被壓縮了——下一步該怎麼辦？嗯，我們知道最終目標是：**我們想用英語文字替換檔案中的文字**。為了做到這一點，我們必須能夠自己解壓縮文字，以便編輯檔案。然而，由於遊戲需要被壓縮的文字，我們還必須能夠重新壓縮檔案，以便將其重新插入遊戲。好了，讓我們開始吧。

## 查詢解壓縮子程式
實際上有很多資訊可供我們使用。我們得到了一個檔案，知道它被壓縮了，我們很清楚它解壓縮後會得到什麼，我們知道這個檔案在遊戲中的哪裡被使用。因此，讓我們在 DeSmuME（編寫本文時具有最佳記憶體搜尋器的模擬器）中載入遊戲，並搜尋遊戲中出現的一些文字。

![DeSmuME 的記憶體搜尋功能](/images/blog/0002/05_ram_search.png)

因此，我們搜尋 0x81CC82B1（DeSmuME 的 RAM 搜尋需要輸入與編碼順序相反的數值），它對應於文字中的“この、”。我們在地址 0x0223433C 處正好找到一個結果——非常棒。我們轉到這個記憶體地址……

![DeSmuME 的記憶體檢視器，高亮部分顯示了它與我們一直在檢視的檔案完全匹配。](/images/blog/0002/06_ram_found.png)

而且這是一處完全匹配！我們已經找到了壓縮後的檔案被載入到記憶體中的位置。所以現在，是時候開啟最糟糕、但也是唯一一個有函式偵錯程式的 DS 模擬器了——NO$GBA。

![在 NO$GBA 中設定斷點。正在設定的斷點是“[223433C]?”](/images/blog/0002/07_setting_breakpoint.png)

我們將為 0x0223433C 設定一個*讀取斷點*。正如我前面提到的，我們之所以使用 NO$GBA，是因為它有一個偵錯程式，而偵錯程式的功能之一是能夠設定*斷點*。偵錯程式允許我們在玩遊戲時逐步檢視正在執行的程式碼，而斷點會告訴偵錯程式在某一行執行時停止。在這種情況下，當遊戲從記憶體地址 0x0223433C 讀取內容時，這個讀取斷點會告訴偵錯程式暫停執行。我們之所以要這樣做，是因為遊戲對已壓縮的檔案進行解壓縮的時候，會在記憶體中讀取它，所以這將幫助我們找到解壓縮子程式。

![NO$GBA 的偵錯程式命中上述斷點。它目前已在指令 0202628C 處停止](/images/blog/0002/08_breakpoint_hit.png)

瞧，我們已經到達了斷點。遊戲按照 0x2026288 的指令從 0x223433C 處讀取。是時候開啟我們的第三個程式——IDA（互動式反彙編器）了。（值得注意的是，雖然我使用 IDA，但你可以在 Ghidra 中完成同樣的事情。Ghidra 是另一個常用的反彙編程式，而且它是免費的。）

因此，在 IDA 中，我們使用 NDS 載入外掛來反彙編《串聯》的 ROM，這樣我們就可以更容易地檢視彙編程式碼（準確來說應該稱之為“反彙編”）。IDA 做了一件非常好的事情，那就是它將程式碼分解為子程式（有時也稱為“函式”），這使得程式碼執行的開始和停止位置一目瞭然。

![IDA，0202628C 高亮顯示，以顯示我們之前找到的指令](/images/blog/0002/09_ida_find.png)

所以我們前往這個找到的地址……

![IDA，包含了一個已被我們重新命名為 arc_decompress 的子程式](/images/blog/0002/10_ida_subroutine.png)

我們找到了！當程式被編譯時，函式和變數等所有名稱都會被刪除，因此 IDA 預設情況下會將子程式命名為類似 `sub_2026190` 的名字——然而，我們手動將此子程式重新命名為 `arc_decompression`（在螢幕截圖中，我們已經完成了），這樣更容易找到和引用。（這裡的 `arc` 代表 *archive*（歸檔檔案）——但我們必須把它留給本系列的下一篇文章。）

這就是我所說的解壓縮子程式位於 0x2026190 的意思——只要向上滾動，我們就會發現子程式從那個地址開始。這是我回復 Cerber 的帖子時所得到的，但這也是真正有趣的開始——現在是時候對壓縮演算法進行逆向工程了。

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
