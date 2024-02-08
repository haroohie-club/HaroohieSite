---
title: &title '《串联》ROM 破解挑战第 1 部分：破解压缩算法！'
description: &desc 'Jonko 深入研究了 Shade 的压缩算法是如何被逆向工程，然后用来破解《凉宫春日的串联》的。'
locale: 'zh-hans'
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

大家好！这是一系列博客文章中的第一篇，这些文章将深入探讨翻译《凉宫春日的串联》（涼宮ハルヒの直列）所涉及的技术挑战。这些博客确实很有技术性，包括代码示例等内容，但它们的编写是为了让普通读者能够理解。如果你有任何问题或评论，请随时[向我们转推](https://twitter.com/haroohie)！

整个项目始于在 GBATemp 论坛上的[两篇](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-from-japanese-to-english-and-russian-translation-idea.601434/)[帖子](https://gbatemp.net/threads/suzumiya-haruhi-no-chokuretsu-nds-translation-success-need-advice.601559/)，一位名叫 Cerber 的用户（现在他是我们的图形设计师之一！）请求帮助翻译一款衍生自凉宫春日系列的鲜为人知的 DS 游戏。他在游戏中找到脚本并将其替换为英文字符方面取得了一些进展，但在能够完全重新插入文本方面遇到了困难。

![Cerber 的 DS，上面显示着春日正在以全角字符说“Today is the”](/images/blog/0002/01_cerber_ds.png)

Cerber 所做的正是在十六进制编辑器（一种直接修改二进制文件的工具，其中每个字节都表示为十六进制数）中打开 ROM，并搜索他在游戏中看到的文本。他能够找到脚本，但他遇到的问题是如何处理他所谓的“游戏代码”，该代码围绕着他试图替换的文本——修改用红色标记的部分会让游戏彻底崩溃。

![一个十六进制编辑器，显示着上文的“Today is the”，而文件的其它部分被以红色高亮](/images/blog/0002/02_cerber_hex.png)

快速解释一下我们在这里看到的内容：在左侧是文件中的原始二进制，用十六进制表示为一系列字节。十六进制（基数为 16）——虽然我们通常使用十进制（基数为 10，即 0、1、2、3、4、5、6、7、8、9），计算机使用二进制（基数为 2，即 0、1），但程序员通常使用十六进制，因为它允许我们用两个字符表示单个字节。在写入数字时，为了区分基数，我们通常使用 0x 作为十六进制数的前缀（0x17 在十进制中是 23），使用 0b 表示二进制数（0b0000_0100 在十进制下是 4）。

右侧的字符表示我们在左侧看到字节，通过*编码*来解释。你可能熟悉 ASCII，这是最基本的编码——字母表中的每个字母都由单个字节表示。该游戏使用名为 Shift-JIS 的编码，这是 Unicode 出现之前日语的表示方式。

根据我过去的经验，我做了一些调查，然后发布了一个可能不太可靠的回复：

![Jonko 于 2021 年 10 月 23 日发布的一篇论坛帖子。帖子的内容参见下文的引文。](/images/blog/0002/03_jonko_hinged.png)

> 你好！它附近的并不是游戏代码；而是这个场景的更多数据。我还不知道这一切都有什么作用，但我可以告诉你的是，这整个块被压缩了，并且解压缩的子程序位于 0x2026190。你必须先解压缩它，然后才能开始编辑它，如果能够解压的话，我们可能会更加了解每部分是做什么的，这将使我们能够编辑它。
> 
> 你需要考虑的另一件事是字体宽度的修改（半角或可变宽度）。游戏中有很多行填充了整个文本框，你不可能用全角字符把它塞进去，所以你也要调查一下这个。

让我们一点一点地讨论这个问题。

## 压缩
我怎么知道这个部分被压缩了？请看他的屏幕截图，我们可以清楚地看到游戏中的文本显示在十六进制编辑器中（我在下面用黄色标记了一个例子），但文本的某些部分缺失了——例如，我在下面标记的“ハルヒの”中的一位（bit）被较短字符序列（高亮为了蓝色）所取代。

![并排的《串联》屏幕截图。左边的图对应于黄色高亮的文本，显示了春日的对话。右边的图突出显示了 ROM 中的一段文本，该文本显然是游戏中文本的一部分](/images/blog/0002/04_compression_evidence.png)

这是所谓*运行长度编码*的一个标志——这是一种压缩文件的方法，专注于消除重复。好的，现在我们知道它被压缩了——下一步该怎么办？嗯，我们知道最终目标是：**我们想用英语文本替换文件中的文本**。为了做到这一点，我们必须能够自己解压缩文本，以便编辑文件。然而，由于游戏需要被压缩的文本，我们还必须能够重新压缩文件，以便将其重新插入游戏。好了，让我们开始吧。

## 查找解压缩子程序
实际上有很多信息可供我们使用。我们得到了一个文件，知道它被压缩了，我们很清楚它解压缩后会得到什么，我们知道这个文件在游戏中的哪里被使用。因此，让我们在 DeSmuME（编写本文时具有最佳内存搜索器的模拟器）中加载游戏，并搜索游戏中出现的一些文本。

![DeSmuME 的内存搜索功能](/images/blog/0002/05_ram_search.png)

因此，我们搜索 0x81CC82B1（DeSmuME 的 RAM 搜索需要输入与编码顺序相反的数值），它对应于文本中的“この、”。我们在地址 0x0223433C 处正好找到一个结果——非常棒。我们转到这个内存地址……

![DeSmuME 的内存查看器，高亮部分显示了它与我们一直在查看的文件完全匹配。](/images/blog/0002/06_ram_found.png)

而且这是一处完全匹配！我们已经找到了压缩后的文件被加载到内存中的位置。所以现在，是时候打开最糟糕、但也是唯一一个有函数调试器的 DS 模拟器了——NO$GBA。

![在 NO$GBA 中设置断点。正在设置的断点是“[223433C]?”](/images/blog/0002/07_setting_breakpoint.png)

我们将为 0x0223433C 设置一个*读取断点*。正如我前面提到的，我们之所以使用 NO$GBA，是因为它有一个调试器，而调试器的功能之一是能够设置*断点*。调试器允许我们在玩游戏时逐步查看正在执行的代码，而断点会告诉调试器在某一行执行时停止。在这种情况下，当游戏从内存地址 0x0223433C 读取内容时，这个读取断点会告诉调试器暂停执行。我们之所以要这样做，是因为游戏对已压缩的文件进行解压缩的时候，会在内存中读取它，所以这将帮助我们找到解压缩子程序。

![NO$GBA 的调试器命中上述断点。它目前已在指令 0202628C 处停止](/images/blog/0002/08_breakpoint_hit.png)

瞧，我们已经到达了断点。游戏按照 0x2026288 的指令从 0x223433C 处读取。是时候打开我们的第三个程序——IDA（交互式反汇编器）了。（值得注意的是，虽然我使用 IDA，但你可以在 Ghidra 中完成同样的事情。Ghidra 是另一个常用的反汇编程序，而且它是免费的。）

因此，在 IDA 中，我们使用 NDS 加载插件来反汇编《串联》的 ROM，这样我们就可以更容易地查看汇编代码（准确来说应该称之为“反汇编”）。IDA 做了一件非常好的事情，那就是它将代码分解为子程序（有时也称为“函数”），这使得代码执行的开始和停止位置一目了然。

![IDA，0202628C 高亮显示，以显示我们之前找到的指令](/images/blog/0002/09_ida_find.png)

所以我们前往这个找到的地址……

![IDA，包含了一个已被我们重命名为 arc_decompress 的子程序](/images/blog/0002/10_ida_subroutine.png)

我们找到了！当程序被编译时，函数和变量等所有名称都会被删除，因此 IDA 默认情况下会将子程序命名为类似 `sub_2026190` 的名字——然而，我们手动将此子程序重命名为 `arc_decompression`（在屏幕截图中，我们已经完成了），这样更容易找到和引用。（这里的 `arc` 代表 *archive*（归档文件）——但我们必须把它留给本系列的下一篇文章。）

这就是我所说的解压缩子程序位于 0x2026190 的意思——只要向上滚动，我们就会发现子程序从那个地址开始。这是我回复 Cerber 的帖子时所得到的，但这也是真正有趣的开始——现在是时候对压缩算法进行逆向工程了。

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
