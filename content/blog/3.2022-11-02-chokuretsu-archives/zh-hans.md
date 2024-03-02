---
title: &title '《串联》ROM 破解挑战第 2 部分：归档文件考古学'
description: &desc 'Jonko 把 Shade 的二进制归档文件放在显微镜下，解释了他是如何打开它的。'
locale: 'zh-hans'
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
[在上一次](/zh-hans/blog/2022-10-19-chokuretsu-compression)，我们讨论了我如何对《凉宫春日的串联》中使用的压缩算法进行逆向工程。今天，我们来看看包含在《串联》文件中的归档文件。请注意，虽然我通常会尽量将这些博客文章分开，但这篇文章绝对是建立在我们上次讨论的概念之上的，所以我强烈建议您先阅读它！此外，如果您是从上篇文章来到这里的，请注意，这篇文章有点长，包含更多的程序集！

由于 zip 文件数量的激增，你可能已经熟悉了归档文件：它们是包含文件的文件，通常保存了压缩的版本，以帮助节省磁盘空间。常见的归档文件包括 `.zip`、`.rar`、`.7z` 和 `.tar.gz` 文件。《串联》使用了扩展名为 `.bin` 的自定义归档文件格式。由于 Shade 是《串联》的开发商，这些文件也可以被称为“Shade 二进制归档文件”或简称为“二进制归档文件”。让我们选择一个归档文件开始研究。

为了方便起见，让我们选择包含了上次所查看的文件的归档文件。我们可以在 CrystalTile2 中打开游戏，并导航到我们上次看到的位置……

![用 CrystalTile2 中打开 ROM，显示了我们要查找的文件是 evt.bin](/images/blog/0003/01_evt_ct2.png)

在左下角，它告诉我们这个数据包含在 `evt.bin` 中（这也是我们可能已经猜到了的，因为它是字符串数据）。

## 检查 `evt.bin`

不过，在我们用十六进制编辑器打开它之前，让我们谈谈我们希望在归档文件中看到什么（以确认 `evt.bin` 确实是一个归档文件）。以下是我要列出的属性：

* 归档文件中的文件数量
* 归档文件中的文件列表，包括*文件名*和*偏移量*
* 所有文件的文件数据

关于第二个的快速解释——文件名不言自明，偏移量是指文件中数据所在的位置。简单来说：

* *地址*（address）是数据在内存中的绝对位置。当我们在调试器中设置内存断点时，我们使用地址。
* *偏移量*（offset）是文件中数据的相对位置。当我们在十六进制编辑器中打开一个文件时，我们会讨论偏移量。
* *指针*（pointer）是*指向*地址或偏移量的值。指向地址的指针可能看起来像值为 0x0220B4A8 的整数，而指向偏移量的指针可能简单到 0x3800。地址由程序在访问内存时使用，而偏移量在文件中使用（因为它们可以加载到内存中的任意位置），因此由程序本身将这些偏移量转换为地址。

既然这样，让我们打开 `evt.bin`。我们要做的第一件事是向下滚动一点，以了解这个文件的布局……

![在 CrystalTile2 中打开的 evt.bin，显示 0x2800 以上的一段 0](/images/blog/0003/02_lots_of_zeros_1.png)

![在 CrystalTile2 中打开的 evt.bin，显示 0x2800 以下的一段 0](/images/blog/0003/03_lots_of_zeros_2.png)


有趣！当我们滚动经过一大块数据后，我们最终会进入一个包含 0 的区域，然后是另一大块数据，然后是一个包含 0 的区域，以此类推。更重要的是，当我们滚动过第一段之后，每一大块数据似乎都以 0x800 的倍数开始（很难从两个图像中获得这种感觉，但相信我，如果你打开文件，你就会看到这种模式）。对我来说，这看起来像*文件数据*——而且，每个文件之间都有整齐的填充。

![在 CrystalTile2 中打开的 evt.bin，显示了 0x0000 处。前两个字节以红色高亮，从 0x22 开始每隔四个字节间隔的字节模式以青色高亮](/images/blog/0003/04_cyan_numbers.png)

让我们回到文件的顶部——再说一遍，有很多数字，但这里有一些模式。但在我们看一下青色高亮的数字之前，先来快速解释一下*字节序*。到目前为止，我们主要考虑的是字节，字节的值可以在 0（0x00）到 255（0xFF）之间。但是，当我们需要表示比这更大的整数时呢？当我们需要这样做时，我们使用*多字节整数*。常见的类型包括：

| 字节数量 | 正式名字 | C# 名字 |
|---|---|---|
| 2 | 16 位整数 | `short`{lang='csharp'}（有符号）或 `ushort`{lang='csharp'}（无符号） |
| 4 | 32 位整数 | `int`{lang='csharp'}（有符号）或 `uint`{lang='csharp'}（无符号） |
| 8 | 64 位整数 | `long`{lang='csharp'}（有符号）或 `ulong`{lang='csharp'}（无符号） |

然而，有两种可能的方式来存储 16 位整数。以 512（0x200）为例。你可以选择将*最高有效字节*先存储（即 `02 00`）或*最低有效字节*先存储（即 `00 02`）中。这种决定被称为*字节序*（endianness），其中前者是“大端序”（big-endian），后者是“小端序”（little-endian）。通常，做出这个决定只是为了与体系结构使用的任何东西保持一致；ARM 是一个小端序体系结构，所以这些文件也可能是小端序的。

回到上图中的青色高亮，我们可以看到，如果我们将高亮显示的值解释为 16 位的小端序整数，我们会得到如下序列：

```
0x000A, 0x000C, 0x000E, 0x0010, 0x0014, 0x0016, 0x0018, 0x001A, 0x001C, 0x001E, 0x0020, 0x0022 …
```

随着我们继续前进，这些整数正在增加！事实上，它们继续增加 0x900 字节，模式终止于最后一个整数 0x94E：

![打开到 0x900 的 evt.bin，显示青色高亮的整数模式在 0x950 处停止](/images/blog/0003/05_cyan_numbers_end.png)

这些绝对不是文件偏移量（它们之间的差异太小了——例如，偏移量 0xB2E 和 0xB32 之间的文件只有 4 个字节长），但它们可能会以某种方式映射到文件偏移量，因为它们正在稳步增加。这意味着每个文件可能有一个这样的值——那么有多少呢？值为两个字节长，间隔两个字节，每次迭代总共四个字节。序列从 0x20 开始，到 0x950 结束。因此：

```
(0x950 - 0x20) / 0x04 = 0x24C
```

哦！看这个！0x24C 恰好是文件中出现的第一个数字（以红色突出显示）。因此，我们可以猜测第 1 个数字是归档文件中的文件数。（为了二次确认，我们应该检查其他归档文件的模式是否一致——事实确实如此。）

![打开到 0x0000 的 evt.bin，青色高亮旁边有绿色高亮，创建了一系列 32 位整数](/images/blog/0003/06_magic_integers.png)

那么，青色高亮显示旁边的数字——上面用绿色高亮显示的数字是什么呢？现在很难说，因为没有明显的模式。然而，我们在这里需要一些命名法，所以我将把绿色和青色高亮的组合称为*魔数*（magic integer），因为它们是模糊的（magic），但起着重要的作用（也是 magic）。第一个魔数从 0x20 到 0x23，这就是为什么它们是“整数”（interger）——准确来说，32 位整数。

## 深入其中，重演
上一节的目的是演示如何：a) 确定文件是归档文件；b) 使用一些基本的模式匹配开始对归档文件进行逆向工程。然而，这个归档文件有点奇怪和模糊——虽然大多数归档文件可能只是在头部加入了一个表，其中包含了每个文件的文件名和偏移量（在归档文件中的位置），但这个归档文件显然没有。这些信息在某种程度上被隐藏了。有多种方法可以解决这个问题，但对我来说，最简单的选择似乎是再次回到汇编中。

### 文件表加载
首先，我们应该尝试找到解析这些归档文件的代码。要做到这一点，我们将执行与上次基本相同的过程——我们将进行内存搜索，以在内存中找到归档文件的*文件头*（文件的顶部，在归档文件中的文件数据之前），在该内存地址设置读取断点，并查看哪些代码使用了归档文件的文件头。

![打开到 0x20 的 evt.bin，高亮区域显示了 D1 00 0A 00 字节，表示这些是我们将要搜索的字节](/images/blog/0003/07_what_we_want.png)

因此，我们回到 DeSmuME，搜索偏移量 0x20 处的四个字节（记住，DeSmuME 的内存搜索要求按相反的顺序输入字节，因此我们输入的不是 `D1 00 0A 00`，而是 `00 0A 00 D1`）……

![DeSmuME 的内存搜索窗口，显示了我们在 0x020F7720 的搜索结果](/images/blog/0003/08_memory_search.png)

我们又一次找到了一个匹配。所以，让我们打开内存查看器，转到 0x020F7720……

![DeSmuME 的内存查看器，显示了 0x020F7720 处的内存，看起来与 evt.bin 的文件头完全相同](/images/blog/0003/09_memory_find.png)

它与 `evt.bin` 的文件头完全匹配！这意味着 `evt.bin` 的文件头被加载到了 0x020F7700 中。所以现在，我们将在 No$GBA 中加载游戏（我上次使用 No$ 的时候有点吃力，但它的调试工具*确实*非常方便），并为 0x020F7700 设置一个读取断点。

![No$GBA 在 0x020338C8 处命中断点](/images/blog/0003/10_breakpoint.png)

很好，游戏一加载，我们就命中了断点。这意味着归档文件的文件头是在启动时加载的。让我们在 IDA 中调出这个子程序。

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

我们找到了一些有用的东西！你可以看到的 `"--- filetbl_load start <%d> ---\n"`{lang='c'} 字符串是可执行程序（arm9.bin）本身中硬编码的文本。

`=aFiletblLoadSta` 是 IDA 为保存该字符串的地址命名的名称，因此 `LDR R0, =aFiletblLoadSta`{lang='arm'} 将该字符串的名称加载到 R0 中。在 ARM 汇编中调用另一个子程序时，R0 被用作第一个参数，因此下面的 `BL`（branch-link，分支链接，或称为“调用此子程序”）将其用作参数。因为这个字符串看起来很像调试字符串，我们可以猜测这个函数是一个调试打印函数（为了调试的目的，它会将文本打印到控制台），这就是为什么我们将这里的函数重命名为 `dbg_print20228DC`。

但更重要的是，这个调试字符串被打印到这里的事实告诉我们，*这个函数的名称*在原始源代码中是什么：`filetbl_load()`{lang='c'}。由此，我们可以推测，这个函数的目的是从归档文件中加载“文件表”（file table）——也就是说，它加载了我们刚刚看到的文件头，而该文件头正是我们认为的文件列表！这个技巧（查看调试或错误字符串以了解函数的作用）是我经常使用的东西——甚至不用详细检查反汇编，我们现在就对这个函数的作用有了很好的了解。

### 加载魔数
在尝试像我们分析解压缩程序时那样分析这个程序之后，我发现这个程序有点抽象。它引用了一堆内存地址和其他我没有任何上下文的东西——所以让我们获取一些上下文，看看它在调试器中做什么。毕竟，我们在这里的目标不一定是对这个程序所做的事情进行逆向工程（与解压缩程序不同），而是使用这个程序来理解归档文件的结构。

所以，回到 No$GBA。单步执行，我们来到这个 `STR` 指令。`STR R2,[R0, R5]` 将 R2 的值（0x24C，我们怀疑是文件数）存储在内存位置 R0+R5 中。

![高亮显示所述 str 指令的 No$GBA 调试器](/images/blog/0003/11_str_instruction.png)

![与以前相同的 No$GBA 调试器的屏幕截图，但向前执行了一条指令，高亮显示了内存中存储的文件数](/images/blog/0003/12_stored.png)

在我们执行过该指令之后，我们实际上可以看到 0x24C 被存储在 0x20C1A08 中，就像我们所期望的那样。现在，让我们为该地址设置一个读取断点，看看*它*在哪里被引用。

![no$GBA 的断点创建窗口，显示我们将读取断点设置为 0x020C1A08](/images/blog/0003/13_second_break.png)

我们运行这个游戏……

![No$GBA 调试器，显示在新函数中的断点](/images/blog/0003/14_new_subroutine.png)

并在这个新的子程序停止。在 IDA 中导航到这个程序会发现它非常短。

```arm
RAM:02033A58 sub_2033A58
RAM:02033A58                 MOV     R1, #0x18
RAM:02033A5C                 MUL     R1, R0, R1
RAM:02033A60                 LDR     R0, =dword_20C19D8
RAM:02033A64                 LDR     R0, [R0,R1]
RAM:02033A68                 BX      LR
```

`BX LR`{lang='arm'} 让我们返回到调用此处的子程序，因此，如果我们知道前一条指令是将 0x24C 加载到 R0（经常用作返回值的寄存器）的指令，我们可能能够假设该子程序的全部目的是从内存加载该值。因此，让我们将此函数重命名为 `arc_getNumFiles`，然后单步执行，看看是什么调用了它。

![No$GBA，显示了调用上一个子程序的程序中的断点](/images/blog/0003/15_subroutine_caller.png)

让我们在 IDA 中弹出此子程序的这一部分：

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
RAM:02033CF4                 LDR     R0, =aFileIndexError ; "file index error : [%s],idx=%d\n"
RAM:02033CF8                 LDR     R1, [R1,R10,LSL#2]
RAM:02033CFC                 MOV     R2, R9
RAM:02033D00                 BL      dbg_printError
```

请记住，在 `arc_getNumFiles` 中，R0 被设置为（我们猜测是）文件数。我们可以看到它随后立即与 R9 进行比较，如果它小于或等于 R9，我们就在跳转到我展示的部分的末尾。因此，让我们将注意力集中在 R9 上——早些时候，我们可以看到 R9 也与 0 进行了比较，如果它小于或等于零，则跳转到 loc_2033CF0。如果 R9 大于 R0，我们将跳转相同的位置。如果检查该部分，我们可以看到另一条调试消息——`"file index error : [%s],idx=%d\n"`{lang='c'}（文件索引错误）！对于不熟悉 C 语言的人介绍一下，这是*格式化*字符串——`%s` 和 `%d` 表示要插入到字符串中的参数。`%s` 需要字符串（**s**tring），`%d` 需要十进制数字（**d**ecimal）。根据字符串指示发生错误的事实，我们确定 `BL` 要跳转到的函数是“打印调试错误消息”的函数，该字符串为我们提供了更多的线索。因此，在较高的级别上，这一节将检查 R9 是否大于 0 并且小于或等于文件数。如果不是，则抛出错误。

在高级语言中调用函数时，可以指定传递给函数的参数。在 ARM 汇编中，通过将特定寄存器设置为特定值来传递这些参数——第一个参数设置为 R0，第二个参数设置为 R1，等等。因此，我们知道这个 `dbg_printError` 子程序将打印该格式的字符串。字符串本身被加载到 R0 中，这意味着第一个参数是字符串本身。下一个参数（对应于 `%s`）应加载到 R1 中，最后一个参数应加载到 R2 中（对应于 `%d`）。

我已经将加载到 R1 中的值标记为了 `=sArchiveFileNames`——如果我们在 IDA 中跳转到该地址，我们可以看到原因：

![[IDA 中查看的 =sArchiveFileNames 处的内存地址，显示归档文件的文件名列表](/images/blog/0003/16_archive_file_names.png)

这是一个包含了四个归档文件名称的列表！因此，`LDR R1,[R1, R10, LSL#2]` 这行将会加载的归档文件的名称。如果我们在前面的屏幕截图中查看 R10，我们可以看到它被设置为 2。通常，数组从索引 0 开始，因此这意味着这里的索引 2 将是 `aEvtBin`——也就是说 `%s` 的值是 `EVT.BIN`！

下一行是 `MOV R2,R9`，它将 R9（我们之前感兴趣的寄存器）的值加载到 R2 中。从错误消息的文本中，我们可以得出结论，**R9 存储了文件的索引**，即我们在归档文件中加载的文件的位置！我们还知道，我们认为的值确实是归档文件中的文件数量。此外，根据导致错误消息的条件，我们还可以得出这样的结论：文件索引从 1 开始，到归档文件长度结束（而不是像在计算机中更常见的那样从 0 开始，到 `length - 1` 结束）。


### 解析魔数
让我们继续：

```arm
RAM:02033D04 loc_2033D04
RAM:02033D04                 ADD     R2, SP, #8
RAM:02033D08                 ADD     R3, SP, #4
RAM:02033D0C                 MOV     R0, R10
RAM:02033D10                 MOV     R1, R9
RAM:02033D14                 BL      sub_2033A70
```

我们使用以下参数调用 `sub_2033A70`：

1. R0：归档文件的编号（2 = `evt.bin`）
2. R1：归档文件中文件的索引
3. R2：一个地址
4. R3：另一个地址

换句话说：

```csharp
sub_2033A70(2, 0x24C, address1, address2)
```

让我们深入研究 `sub_2033A70`。

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

这个子程序不太长，所以我们应该能够弄清楚它在做什么；然而，它从一些内存地址加载了许多位，我不知道这些地址中存储了什么。因此，让我们回到调试器。

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

![no$GBA showing the next two components being loaded and their instructions](/images/blog/0003/19_second_header_stuff.png)

The next two instructions load the integers at offsets 0x0C (green) and 0x04 (pink) in `evt.bin` into R1 and R0, respectively. These instructions are then used in some calculations:

* `MOV R1, LR,LSR R1`{lang='arm'} – This instruction shifts the magic integer right by the value of R1 (0x11 or 17) and stores the result in R1. Since magic integers are 32-bit integers, this gives us the 15 most-significant bits of the magic integer.
* `MUL R0, R1, R0`{lang='arm'} – This instruction multiplies R1 by R0 (0x800) and stores the result in R0.

Continuing our C# translation, we have:

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

The end-result of this calculation is 0x5398.

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

* Q: Why is there so much repetition in this routine?<br/>
  A: This is the result of a function of some compilers (including ARM compilers) called _loop unrolling_. Basically, there is a tradeoff made in favor of execution time over program space when the compiler can statically determine how many loops will occur at compile time.
* Q: What does that mean?<br/>
  A: Don’t worry, it doesn’t really matter. Point is, that’s a loop, so we can treat it as a loop.
* Q: I’m seeing a lot of `ADCS` and `SUBCC` instructions here. What’s up with those?<br/>
  A: `ADCS` is “add with carry, set flags.” Essentially, this means that we add two numbers and, if the previous operation resulted in a “carry,” we add one to the sum. We then set or clear the carry flag depending on whether that addition resulted in a carry. A “carry” here refers to “unsigned overflow” – when a 32-bit integer exceeds its maximum value and loops back around. `SUBCC` is “sub if carry clear.” This means we subtract two numbers if the previous operation did _not_ result in a carry.
* Q: Why would the devs do it this way?<br/>
  A: They want to fuck with me specifically.

## Out of the Woods
Whew! That was a lot of assembly. We could keep going down through subroutines, but we’ve accomplished our main task now: we understand a lot about how Shade bin archives work. If we return to our original list of what we expected an archive might have:

* We found the number of files (it’s the first four bytes of the archive).
* While there don’t seem to be obviously-located filenames, we did find the mapping between a file’s _index_ (which appears to be how it’s looked up), its offset, and its compressed length
* The file data is definitely present and padded to be 0x800-byte aligned.

Nice! That’s great progress. Let’s see if we can write something to parse the archive now.

### Writing Our Own Parser
Let’s start by thinking about how we want to represent our archive file in C#. There are four different archives, each with their own file type – to me, this screams like a time for a generic class. To begin, we’ll make a generic class to represent files in the archives.

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

Very nice looking! (The text on the right is a preview of what’s to come – II was working on parsing the event/script files at the same time as I was working on parsing the archives, but we won’t be covering event file reverse-engineering in this post.) So now we can open `evt.bin` and even edit the files inside it. There’s still one step left, though – we have to be able to save the bin archives once we’re done editing them.

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

Here, we hit a snag – in some cases, the edited file is going to be longer than the original file, right? This will happen more often than we think since my implementation of the compression algorithm is noticeably less efficient than the implementation the developers used, so even files that stay the same size decompressed will end up longer on recompression. The solution to this problem is actually pretty simple, just a bit tedious: we move everything further down.

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

Bam. We have working code that will shift the magic integers. So let’s test it – let’s modify a file and save the archive and see if we can change some text.

![Haruhi Suzumiya in the opening lines saying Hello my friend! A lovely day!](/images/blog/0003/25_dialogue_replaced.png)

I present to you the first text I ever edited into the game. 🥰

If you’re interested in seeing the end-result of the archive code, you can [check out the code on GitHub](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Archive/ArchiveFile.cs)!

## What’s Next
We’ve now parsed and repacked the archive successfully. The next thing we’ll talk about is the first files I reverse-engineered: the event files, which contained the script for the game. But before that, I’ll be posting an addendum to these two posts which will contain answers to commonly-asked questions and a few historical notes on the actual process we underwent to get this all working. Thanks for reading and please look forward to it!
