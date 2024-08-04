---
title: &title '《串聯》ROM 破解挑戰第 1 部分：破解壓縮演算法！'
description: &desc 'Jonko 深入研究了 Shade 的壓縮演算法是如何被逆向工程，然後用來破解《涼宮春日的串聯》的。'
locale: 'zh-hant'
navigation:
  author: 'Jonko'
  translator: 'Xzonn'
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

## 對壓縮演算法進行逆向工程
我做的第一件事是建立一個“彙編模擬器”——我將彙編指令一行接一行地反彙編，並移植到 C# 程式中。（在這裡，我選擇使用 C# 只是因為它是我最熟悉的高階語言；你可以選擇使用 Python、C++、JavaScript 或其他你喜歡的語言。）為什麼要這樣做？當時，我是彙編的初學者，所以這樣做有兩個目的：首先，這幫助我更加熟悉彙編；其次，這使我擁有了一個可以執行的程式，我知道它與彙編程式碼所做的事情是匹配的。

這個模擬器最終看起來是這樣的：

![Visual Studio，顯示了一個名為 AsmDecompressionSimulator（彙編解壓縮模擬器）的類。](/images/blog/0002/11_asm_simulator.png)

為了便於參考，我對程式碼行添加了註釋，以顯示它們在反彙編中對應的指令。完成後，我就可以單純地解壓縮檔案了！然而，它的效率相當低。因此，我嘗試理解彙編語句，以便將其轉化為真正的人類可讀的程式碼。

### 彙編入門
為了做到這一點，需要了解關於彙編的入門知識：彙編是*機器級別*的程式碼，這意味著它是處理器實際讀取以執行指令的內容。最後半句話很重要——彙編中最基本的單元是*指令*。例如，`ADD`（將兩個數字相加）或 `SUB`（將兩個數字相減）。

若要用匯編對值進行操作，必須首先將它們載入到*暫存器*中。暫存器可以被認為是“CPU變數”，它們擁有例如 R0、R1、R2 之類的編號。DS 有 15 個暫存器。這些值從*記憶體*（或者稱為 *RAM*）載入到暫存器中，前者是一個大空間的可快速訪問的二進位制檔案，CPU 可以隨時引用。

彙編程式碼因平臺而異——更具體地說，它因微晶片的*架構*（可以將其視為家族或型別）而異。DS 使用 ARM 指令集作為其主要可執行檔案，這是一種常見且擁有詳細文件的指令集。我學習 ARM 彙編的方法是直接進入並除錯 Nintendo DS 程式碼，同時在另一個視窗中查詢每條指令的作用。如果你正在尋找 ARM 的參考資料，我認為[官方文件](https://developer.arm.com/documentation/dui0068/b/ARM-Instruction-Reference)很有啟發性，儘管我也發現在谷歌上搜索“ARM \[想要理解的指令\]”會產生奇蹟。

### 深入其中

#### 開始

讓我們從頭開始：
```arm
RAM:02026198                 LDRB    R3, [R0],#1
RAM:0202619C                 CMP     R3, #0
RAM:020261A0                 BEQ     loc_20262A0
RAM:020261A4                 TST     R3, #0x80
RAM:020261A8                 BEQ     loc_2026224
```
讓我們分解一下這些說明：

* `LDRB R3, [R0], #1`{lang='arm'}——這將 R0 中包含的地址（這包含了檔案中的當前位置）處的位元組載入到暫存器 R3 中，然後將 R0 增加 1（意味著我們移動到檔案中下一個位元組的位置）。由於我們處於檔案的開頭，因此這將載入檔案中的第一個位元組。
* `CMP R3, #0`{lang='arm'}、`BEQ loc_20262A0`{lang='arm'}——`BEQ`{lang='arm'} 的意思是“如果相等則跳轉分支”，但實際上它只是指“如果最後一次比較等於 0 則跳轉分支”。因此，如果我們剛剛載入的值為 0，我們將跳轉到子程式的末尾。我們現在可以忽略這一點。
* `TST R3, #0x80`{lang='arm'}——`TST`{lang='arm'} 執行按位與且不儲存結果。按位與比較兩個位元組，並給出一個結果，其中只有當某個位（bit）在其比較的兩個位元組對應的位都是 1 時才為 1。在 R3 為 0xAA 的情況下，我們最終得到如下結果：
```
10101010 (0xAA)
10000000 (0x80)
_______
10000000 (0x80)
```
因此，這個 `BEQ`{lang='arm'} 後面跟著的 `TST`{lang='arm'} 只是在檢查第一個位是否為 0。如果它為 0，我們將會跳轉到 0x2026224。讓我們現在跳轉在那裡（我知道一些你不知道的事，所以我知道檢查這個分支會更簡單，哈哈）。但首先，我們將把它轉換成 C#：

```csharp
int blockByte = compressedData[z++];
if (blockByte == 0)
{
    break;
}

if ((blockByte & 0x80) == 0)
{
    // 做某些事
}
else
{
    // 做另一些事
}
```

到目前為止非常簡單——我們只是檢查第一個位是否為零。

#### 直接寫入

```arm
RAM:02026224                 TST     R3, #0x40
RAM:02026228                 BEQ     loc_2026268
```

* `TST R3, #0x40`{lang='arm'}——現在檢查第 2 位是否為 1。如果是，我們將跳轉到 0x2026268。我們稍後再回到這一節，但首先讓我們將其轉換為 C# 後跳轉到那裡：

```csharp
if ((blockByte & 0x80) == 0)
{
    if ((blockByte & 0x40) == 0)
    {
        // 做某些事 0x80
    }
    else
    {
        // 做另一些事 0x80
    }
}
else
{
    // 做另一些事
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

這是一個相當大的程式碼塊，但不要被嚇到。我們得到了這些：

* `TST R3, #0x20`{lang='arm'}、`ANDEQ R12, R3, #0x1F`{lang='arm'}——現在我們在這裡測試第 1 個位元組的第 3 位。如果它為 0，我們將取其最後 5 位（0x1F = 0xb0001_1111），並跳轉到分支 0x2026280。我們稍後去那裡。
* `LDRB R12, [R0], #1`{lang='arm'}——我們正在將檔案中的下一個位元組載入到暫存器（R12）中。因此，如果第 1 個位元組的第 3 位為 1，就意味著我們需要對下一個位元組做些什麼。
* `MOV R3, R3, LSL#27`{lang='arm'}、`ORR R12, R12, R3, LSR#19`{lang='arm'}——`LSL` 是“邏輯左移”，`LSR` 是“邏輯右移”，分別表示將 R3 中的位向左或向右移動 27 位和 19 位。將它們向左移 27 位和向右移 19 位意味著在清除前 3 位之後向左移 8 位，這相當於將“R3 & 0x1F”乘以 0x100。使用按位或，我們將剛讀取的第一個位元組和第二個位元組組合成一個 16 位整數。

這是在 if 語句中計算一些東西——我們可以在 C# 中這樣表示：
```csharp
int value;
if ((blockByte & 0x20) == 0)
{
    value = blockByte; // `&0x1F` 是不必要的，因為我們已經確定第 1-3 位為 0
}
else
{
    // 第 3 位 == 1 --> 需要兩個位元組來指示要讀取的資料量
    value = compressedData[z++] + ((blockByte & 0x1F) * 0x100);
}
```

我們還不清楚這個值的確切作用，但當我們看下一節時，這一點會變得很清楚。

* `CMP R12, #0`{lang='arm'}、`BLE loc_2026198`{lang='arm'}——如果我們剛剛計算的值為 0，我們立即返回到函式的頂部。
* `LDRB R3, [R0], #1`{lang='arm'}——正如我們現在習慣的那樣，我們把下一個位元組載入到 R3 。
* `SUB R12, R12, #1`{lang='arm'}——我們從前面計算的值中減去 1。
* `CMP R12, #0`{lang='arm'}——我們將前面計算的值與 0 進行比較。
* `STRB R3, [R1], #1`{lang='arm'}——我們將剛剛讀取的最新值儲存在解壓縮的資料緩衝區中，並在該緩衝區中向前移動一個值。
* `BGT loc_2026288`{lang='arm'}——如果兩步前得到的 R12 大於0，我們將轉到本節的第一步。啊哈——這是一個迴圈！
* `B loc_2026198`{lang='arm'}——如果它小於或等於 0，我們回到子程式的頂部。

這實際上非常簡單，因為我們知道這是一個迴圈。我們前面計算的 `value` 實際上是要直接從輸入緩衝區複製到輸出緩衝區的位元組數（`numBytes`）。因此，我們可以將該部分表示為：

```csharp
for (int i = 0; i < numBytes; i++)
{
    decompressedData.Add(compressedData[z++]);
}
```

更重要的是，我們每次返回函式頂部的事實意味著它也是一個迴圈。

到目前為止，我們編寫的程式如下所示：

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
            // 第 1 & 2 位 == 0 --> 直接讀取資料
            int numBytes;
            if ((blockByte & 0x20) == 0)
            {
                numBytes = blockByte; // `&0x1F` 是不必要的，因為我們已經確定第 1-3 位為 0
            }
            else
            {
                // 第 3 位 == 1 --> 需要兩個位元組來指示要讀取的資料量
                numBytes = compressedData[z++] + ((blockByte & 0x1F) * 0x100);
            }
            for (int i = 0; i < numBytes; i++)
            {
                decompressedData.Add(compressedData[z++]);
            }
        }
```

#### 解壓檔案

因此，解壓演算法的基本操作如下：讀入一個“控制位元組”，其前 3-4 位決定以下功能。解壓縮選項包括：
* 將一定數量的位元組直接讀入解壓縮的緩衝區
* 讀取單個位元組並重復一定次數
* 逆向引用解壓縮資料中的特定位置，並複製這些位元組

完整的解壓縮實現可以在[這裡](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Helpers.cs#L359-L446)找到。

如果我們嘗試解壓縮檔案……

![一個十六進位制編輯器，顯示先前完全解壓縮的指令碼檔案。](/images/blog/0002/12_decompressed_file.png)

這就是解壓縮的指令碼！好極了。

#### 建立壓縮程式

現在我們很好地理解了解壓縮演算法，可以解壓縮所有檔案，用英語文字替換日語文字。但如果我們想將它們重新插入遊戲，我們仍然需要重新壓縮編輯過的檔案。因此，我們必須實現一個壓縮程式。我們不能像解壓縮子程式那樣從程式集中複製一個，因為該程式不在遊戲中（檔案在遊戲建立時被壓縮，它們只在遊戲中被解壓縮）。但這並沒有那麼糟糕——既然我們知道解壓縮是如何工作的，我們只需要扭轉這個過程來壓縮東西。

例如，我們可以很容易地實現“直接寫入”模式：

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

首先，我們獲取要寫入的位元組數。如果該數字小於 0x20（即可以包含在控制位元組的低 5 位中），那麼我們只需將該數字寫入輸出緩衝區。否則，我們必須計算要寫入的兩個位元組來表示更大的數字。最後，我們簡單地將位元組寫入輸出緩衝區。

我們可以為重複模式和逆向引用模式實現類似（儘管更復雜）的功能。最終結果可以在[此處](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Helpers.cs#L182-L357)找到。

## 下一步是什麼
現在，我們已經實現了壓縮和解壓縮，但我們還沒有脫離困境。接下來，我們必須面對這樣一個事實，即這個檔案只是歸檔檔案中眾多檔案中的一個，我們必須找出如何正確地替換它。請閱讀我們的下一篇文章，我們將深入研究它。
