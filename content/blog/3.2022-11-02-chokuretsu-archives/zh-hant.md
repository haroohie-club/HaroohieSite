---
title: &title '《串聯》ROM 破解挑戰第 2 部分：歸檔檔案考古學'
description: &desc 'Jonko 把 Shade 的二進位制歸檔檔案放在顯微鏡下，解釋了他是如何開啟它的。'
locale: 'zh-hant'
navigation:
  author: 'Jonko'
  translator: 'Xzonn'
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
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---
[在上一次](/zh-hant/blog/2022-10-19-chokuretsu-compression)，我們討論了我如何對《涼宮春日的串聯》中使用的壓縮演算法進行逆向工程。今天，我們來看看包含在《串聯》檔案中的歸檔檔案。請注意，雖然我通常會盡量將這些部落格文章分開，但這篇文章絕對是建立在我們上次討論的概念之上的，所以我強烈建議您先閱讀它！此外，如果您是從上篇文章來到這裡的，請注意，這篇文章有點長，包含更多的程式集！

由於 zip 檔案數量的激增，你可能已經熟悉了歸檔檔案：它們是包含檔案的檔案，通常儲存了壓縮的版本，以幫助節省磁碟空間。常見的歸檔檔案包括 `.zip`、`.rar`、`.7z` 和 `.tar.gz` 檔案。《串聯》使用了副檔名為 `.bin` 的自定義歸檔檔案格式。由於 Shade 是《串聯》的開發商，這些檔案也可以被稱為“Shade 二進位制歸檔檔案”或簡稱為“二進位制歸檔檔案”。讓我們選擇一個歸檔檔案開始研究。

為了方便起見，讓我們選擇包含了上次所檢視的檔案的歸檔檔案。我們可以在 CrystalTile2 中開啟遊戲，並導航到我們上次看到的位置……

![用 CrystalTile2 中開啟 ROM，顯示了我們要查詢的檔案是 evt.bin](/images/blog/0003/01_evt_ct2.png)

在左下角，它告訴我們這個資料包含在 `evt.bin` 中（這也是我們可能已經猜到了的，因為它是字串資料）。

## 檢查 `evt.bin`

不過，在我們用十六進位制編輯器開啟它之前，讓我們談談我們希望在歸檔檔案中看到什麼（以確認 `evt.bin` 確實是一個歸檔檔案）。以下是我要列出的屬性：

* 歸檔檔案中的檔案數量
* 歸檔檔案中的檔案列表，包括*檔名*和*偏移量*
* 所有檔案的檔案資料

關於第二個的快速解釋——檔名不言自明，偏移量是指檔案中資料所在的位置。簡單來說：

* *地址*（address）是資料在記憶體中的絕對位置。當我們在偵錯程式中設定記憶體斷點時，我們使用地址。
* *偏移量*（offset）是檔案中資料的相對位置。當我們在十六進位制編輯器中開啟一個檔案時，我們會討論偏移量。
* *指標*（pointer）是*指向*地址或偏移量的值。指向地址的指標可能看起來像值為 0x0220B4A8 的整數，而指向偏移量的指標可能簡單到 0x3800。地址由程式在訪問記憶體時使用，而偏移量在檔案中使用（因為它們可以載入到記憶體中的任意位置），因此由程式本身將這些偏移量轉換為地址。

既然這樣，讓我們開啟 `evt.bin`。我們要做的第一件事是向下滾動一點，以瞭解這個檔案的佈局……

![在 CrystalTile2 中開啟的 evt.bin，顯示 0x2800 以上的一段 0](/images/blog/0003/02_lots_of_zeros_1.png)

![在 CrystalTile2 中開啟的 evt.bin，顯示 0x2800 以下的一段 0](/images/blog/0003/03_lots_of_zeros_2.png)


有趣！當我們滾動經過一大塊資料後，我們最終會進入一個包含 0 的區域，然後是另一大塊資料，然後是一個包含 0 的區域，以此類推。更重要的是，當我們滾動過第一段之後，每一大塊資料似乎都以 0x800 的倍數開始（很難從兩個影像中獲得這種感覺，但相信我，如果你開啟檔案，你就會看到這種模式）。對我來說，這看起來像*檔案資料*——而且，每個檔案之間都有整齊的填充。

![在 CrystalTile2 中開啟的 evt.bin，顯示了 0x0000 處。前兩個位元組以紅色高亮，從 0x22 開始每隔四個位元組間隔的位元組模式以青色高亮](/images/blog/0003/04_cyan_numbers.png)

讓我們回到檔案的頂部——再說一遍，有很多數字，但這裡有一些模式。但在我們看一下青色高亮的數字之前，先來快速解釋一下*位元組序*。到目前為止，我們主要考慮的是位元組，位元組的值可以在 0（0x00）到 255（0xFF）之間。但是，當我們需要表示比這更大的整數時呢？當我們需要這樣做時，我們使用*多位元組整數*。常見的型別包括：

| 位元組數量 | 正式名字 | C# 名字 |
|---|---|---|
| 2 | 16 位整數 | `short`{lang='csharp'}（有符號）或 `ushort`{lang='csharp'}（無符號） |
| 4 | 32 位整數 | `int`{lang='csharp'}（有符號）或 `uint`{lang='csharp'}（無符號） |
| 8 | 64 位整數 | `long`{lang='csharp'}（有符號）或 `ulong`{lang='csharp'}（無符號） |

然而，有兩種可能的方式來儲存 16 位整數。以 512（0x200）為例。你可以選擇將*最高有效位元組*先儲存（即 `02 00`）或*最低有效位元組*先儲存（即 `00 02`）中。這種決定被稱為*位元組序*（endianness），其中前者是“大端序”（big-endian），後者是“小端序”（little-endian）。通常，做出這個決定只是為了與體系結構使用的任何東西保持一致；ARM 是一個小端序體系結構，所以這些檔案也可能是小端序的。

回到上圖中的青色高亮，我們可以看到，如果我們將高亮顯示的值解釋為 16 位的小端序整數，我們會得到如下序列：

```
0x000A, 0x000C, 0x000E, 0x0010, 0x0014, 0x0016, 0x0018, 0x001A, 0x001C, 0x001E, 0x0020, 0x0022 …
```

隨著我們繼續前進，這些整數正在增加！事實上，它們繼續增加 0x900 位元組，模式終止於最後一個整數 0x94E：

![開啟到 0x900 的 evt.bin，顯示青色高亮的整數模式在 0x950 處停止](/images/blog/0003/05_cyan_numbers_end.png)

這些絕對不是檔案偏移量（它們之間的差異太小了——例如，偏移量 0xB2E 和 0xB32 之間的檔案只有 4 個位元組長），但它們可能會以某種方式對映到檔案偏移量，因為它們正在穩步增加。這意味著每個檔案可能有一個這樣的值——那麼有多少呢？值為兩個位元組長，間隔兩個位元組，每次迭代總共四個位元組。序列從 0x20 開始，到 0x950 結束。因此：

```
(0x950 - 0x20) / 0x04 = 0x24C
```

哦！看這個！0x24C 恰好是檔案中出現的第一個數字（以紅色突出顯示）。因此，我們可以猜測第 1 個數字是歸檔檔案中的檔案數。（為了二次確認，我們應該檢查其他歸檔檔案的模式是否一致——事實確實如此。）

![開啟到 0x0000 的 evt.bin，青色高亮旁邊有綠色高亮，建立了一系列 32 位整數](/images/blog/0003/06_magic_integers.png)

那麼，青色高亮顯示旁邊的數字——上面用綠色高亮顯示的數字是什麼呢？現在很難說，因為沒有明顯的模式。然而，我們在這裡需要一些命名法，所以我將把綠色和青色高亮的組合稱為*魔數*（magic integer），因為它們是模糊的（magic），但起著重要的作用（也是 magic）。第一個魔數從 0x20 到 0x23，這就是為什麼它們是“整數”（interger）——準確來說，32 位整數。

## 深入其中，重演
上一節的目的是演示如何：a) 確定檔案是歸檔檔案；b) 使用一些基本的模式匹配開始對歸檔檔案進行逆向工程。然而，這個歸檔檔案有點奇怪和模糊——雖然大多數歸檔檔案可能只是在頭部加入了一個表，其中包含了每個檔案的檔名和偏移量（在歸檔檔案中的位置），但這個歸檔檔案顯然沒有。這些資訊在某種程度上被隱藏了。有多種方法可以解決這個問題，但對我來說，最簡單的選擇似乎是再次回到彙編中。

### 檔案表載入
首先，我們應該嘗試找到解析這些歸檔檔案的程式碼。要做到這一點，我們將執行與上次基本相同的過程——我們將進行記憶體搜尋，以在記憶體中找到歸檔檔案的*檔案頭*（檔案的頂部，在歸檔檔案中的檔案資料之前），在該記憶體地址設定讀取斷點，並檢視哪些程式碼使用了歸檔檔案的檔案頭。

![開啟到 0x20 的 evt.bin，高亮區域顯示了 D1 00 0A 00 位元組，表示這些是我們將要搜尋的位元組](/images/blog/0003/07_what_we_want.png)

因此，我們回到 DeSmuME，搜尋偏移量 0x20 處的四個位元組（記住，DeSmuME 的記憶體搜尋要求按相反的順序輸入位元組，因此我們輸入的不是 `D1 00 0A 00`，而是 `00 0A 00 D1`）……

![DeSmuME 的記憶體搜尋視窗，顯示了我們在 0x020F7720 的搜尋結果](/images/blog/0003/08_memory_search.png)

我們又一次找到了一個匹配。所以，讓我們開啟記憶體檢視器，轉到 0x020F7720……

![DeSmuME 的記憶體檢視器，顯示了 0x020F7720 處的記憶體，看起來與 evt.bin 的檔案頭完全相同](/images/blog/0003/09_memory_find.png)

它與 `evt.bin` 的檔案頭完全匹配！這意味著 `evt.bin` 的檔案頭被載入到了 0x020F7700 中。所以現在，我們將在 No$GBA 中載入遊戲（我上次使用 No$ 的時候有點吃力，但它的除錯工具*確實*非常方便），併為 0x020F7700 設定一個讀取斷點。

![No$GBA 在 0x020338C8 處命中斷點](/images/blog/0003/10_breakpoint.png)

很好，遊戲一載入，我們就命中了斷點。這意味著歸檔檔案的檔案頭是在啟動時載入的。讓我們在 IDA 中調出這個子程式。

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

我們找到了一些有用的東西！你可以看到的 `"--- filetbl_load start <%d> ---\n"`{lang='c'} 字串是可執行程式（arm9.bin）本身中硬編碼的文字。

`=aFiletblLoadSta` 是 IDA 為儲存該字串的地址命名的名稱，因此 `LDR R0, =aFiletblLoadSta`{lang='arm'} 將該字串的名稱載入到 R0 中。在 ARM 彙編中呼叫另一個子程式時，R0 被用作第一個引數，因此下面的 `BL`（branch-link，分支連結，或稱為“呼叫此子程式”）將其用作引數。因為這個字串看起來很像除錯字串，我們可以猜測這個函式是一個除錯列印函式（為了除錯的目的，它會將文字列印到控制檯），這就是為什麼我們將這裡的函式重新命名為 `dbg_print20228DC`。

但更重要的是，這個除錯字串被列印到這裡的事實告訴我們，*這個函式的名稱*在原始原始碼中是什麼：`filetbl_load()`{lang='c'}。由此，我們可以推測，這個函式的目的是從歸檔檔案中載入“檔案表”（file table）——也就是說，它載入了我們剛剛看到的檔案頭，而該檔案頭正是我們認為的檔案列表！這個技巧（檢視除錯或錯誤字串以瞭解函式的作用）是我經常使用的東西——甚至不用詳細檢查反彙編，我們現在就對這個函式的作用有了很好的瞭解。

### 載入魔數
在嘗試像我們分析解壓縮程式時那樣分析這個程式之後，我發現這個程式有點抽象。它引用了一堆記憶體地址和其他我沒有任何上下文的東西——所以讓我們獲取一些上下文，看看它在偵錯程式中做什麼。畢竟，我們在這裡的目標不一定是對這個程式所做的事情進行逆向工程（與解壓縮程式不同），而是使用這個程式來理解歸檔檔案的結構。

所以，回到 No$GBA。單步執行，我們來到這個 `STR` 指令。`STR R2,[R0, R5]` 將 R2 的值（0x24C，我們懷疑是檔案數）儲存在記憶體位置 R0+R5 中。

![高亮顯示所述 str 指令的 No$GBA 偵錯程式](/images/blog/0003/11_str_instruction.png)

![與以前相同的 No$GBA 偵錯程式的螢幕截圖，但向前執行了一條指令，高亮顯示了記憶體中儲存的檔案數](/images/blog/0003/12_stored.png)

在我們執行過該指令之後，我們實際上可以看到 0x24C 被儲存在 0x20C1A08 中，就像我們所期望的那樣。現在，讓我們為該地址設定一個讀取斷點，看看*它*在哪裡被引用。

![no$GBA 的斷點建立視窗，顯示我們將讀取斷點設定為 0x020C1A08](/images/blog/0003/13_second_break.png)

我們執行這個遊戲……

![No$GBA 偵錯程式，顯示在新函式中的斷點](/images/blog/0003/14_new_subroutine.png)

並在這個新的子程式停止。在 IDA 中導航到這個程式會發現它非常短。

```arm
RAM:02033A58 sub_2033A58
RAM:02033A58                 MOV     R1, #0x18
RAM:02033A5C                 MUL     R1, R0, R1
RAM:02033A60                 LDR     R0, =dword_20C19D8
RAM:02033A64                 LDR     R0, [R0,R1]
RAM:02033A68                 BX      LR
```

`BX LR`{lang='arm'} 讓我們返回到呼叫此處的子程式，因此，如果我們知道前一條指令是將 0x24C 載入到 R0（經常用作返回值的暫存器）的指令，我們可能能夠假設該子程式的全部目的是從記憶體載入該值。因此，讓我們將此函式重新命名為 `arc_getNumFiles`，然後單步執行，看看是什麼呼叫了它。

![No$GBA，顯示了呼叫上一個子程式的程式中的斷點](/images/blog/0003/15_subroutine_caller.png)

讓我們在 IDA 中彈出此子程式的這一部分：

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

請記住，在 `arc_getNumFiles` 中，R0 被設定為（我們猜測是）檔案數。我們可以看到它隨後立即與 R9 進行比較，如果它小於或等於 R9，我們就在跳轉到我展示的部分的末尾。因此，讓我們將注意力集中在 R9 上——早些時候，我們可以看到 R9 也與 0 進行了比較，如果它小於或等於零，則跳轉到 loc_2033CF0。如果 R9 大於 R0，我們將跳轉相同的位置。如果檢查該部分，我們可以看到另一條除錯訊息——`"file index error : [%s],idx=%d\n"`{lang='c'}（檔案索引錯誤）！對於不熟悉 C 語言的人介紹一下，這是*格式化*字串——`%s` 和 `%d` 表示要插入到字串中的引數。`%s` 需要字串（**s**tring），`%d` 需要十進位制數字（**d**ecimal）。根據字串指示發生錯誤的事實，我們確定 `BL` 要跳轉到的函式是“列印除錯錯誤訊息”的函式，該字串為我們提供了更多的線索。因此，在較高的級別上，這一節將檢查 R9 是否大於 0 並且小於或等於檔案數。如果不是，則丟擲錯誤。

在高階語言中呼叫函式時，可以指定傳遞給函式的引數。在 ARM 彙編中，透過將特定暫存器設定為特定值來傳遞這些引數——第一個引數設定為 R0，第二個引數設定為 R1，等等。因此，我們知道這個 `dbg_printError` 子程式將列印該格式的字串。字串本身被載入到 R0 中，這意味著第一個引數是字串本身。下一個引數（對應於 `%s`）應載入到 R1 中，最後一個引數應載入到 R2 中（對應於 `%d`）。

我已經將載入到 R1 中的值標記為了 `=sArchiveFileNames`——如果我們在 IDA 中跳轉到該地址，我們可以看到原因：

![IDA 中檢視的 =sArchiveFileNames 處的記憶體地址，顯示歸檔檔案的檔名列表](/images/blog/0003/16_archive_file_names.png)

這是一個包含了四個歸檔檔名稱的列表！因此，`LDR R1,[R1, R10, LSL#2]` 這行將會載入的歸檔檔案的名稱。如果我們在前面的螢幕截圖中檢視 R10，我們可以看到它被設定為 2。通常，陣列從索引 0 開始，因此這意味著這裡的索引 2 將是 `aEvtBin`——也就是說 `%s` 的值是 `EVT.BIN`！

下一行是 `MOV R2,R9`，它將 R9（我們之前感興趣的暫存器）的值載入到 R2 中。從錯誤訊息的文字中，我們可以得出結論，**R9 儲存了檔案的索引**，即我們在歸檔檔案中載入的檔案的位置！我們還知道，我們認為的值確實是歸檔檔案中的檔案數量。此外，根據導致錯誤訊息的條件，我們還可以得出這樣的結論：檔案索引從 1 開始，到歸檔檔案長度結束（而不是像在計算機中更常見的那樣從 0 開始，到 `length - 1` 結束）。


### 解析魔數
讓我們繼續：

```arm
RAM:02033D04 loc_2033D04
RAM:02033D04                 ADD     R2, SP, #8
RAM:02033D08                 ADD     R3, SP, #4
RAM:02033D0C                 MOV     R0, R10
RAM:02033D10                 MOV     R1, R9
RAM:02033D14                 BL      sub_2033A70
```

我們使用以下引數呼叫 `sub_2033A70`：

1. R0：歸檔檔案的編號（2 = `evt.bin`）
2. R1：歸檔檔案中檔案的索引
3. R2：一個地址
4. R3：另一個地址

換句話說：

```csharp
sub_2033A70(2, 0x24C, address1, address2)
```

讓我們深入研究 `sub_2033A70`。

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

這個子程式不太長，所以我們應該能夠弄清楚它在做什麼；然而，它從一些記憶體地址載入了許多位，我不知道這些地址中儲存了什麼。因此，讓我們回到偵錯程式。

![No$GBA，高亮了將魔數載入到暫存器的指令](/images/blog/0003/17_initial_header_stuff.png)

在執行了幾個步驟之後，我們可以看到這個子程式的第一部分只是將我們已經找到的 `evt.bin` 的頭部的地址載入到 R0 中。它還將 LR（在 No$GBA 中被稱為 R14）設定為第一個魔數（以綠色突出顯示）之前的地址（以青色突出顯示）。有趣！當前高亮的指令是 `LDR LR, [LR,R1,LSL#2]`{lang='arm'}——這條指令把地址 `LR + R1 * 4` 處的值載入到 LR 中。記住，R1 是檔案索引——因此，這將載入與該檔案索引對應的魔數！（回想一下，魔數陣列從 1 開始，而不是從 0 開始，所以要使其為從零開始的索引，我們需要從第一個魔數之前的地址開始。）

在 C# 中，我們可以將其表示為：

```csharp
public void sub_2033A70(int archiveNumber, int index, uint address1, uint address2, byte[] archiveBytes)
{
    int numFiles = BitConverter.ToInt32(archiveBytes.Take(4).ToArray());
    uint magicInteger = BitConverter.ToUInt32(archiveBytes.Skip(0x1C + index * 4).Take(4).ToArray());
}
```

![no$GBA，高亮顯示了魔數](/images/blog/0003/18_loaded_magic_integer.png)

我們應該載入的地址是 `0x020F771C + 0x245 * 4 = 0x20F8030`，事實上，當我們繼續執行時，可以看到該值已載入。現在，魔數已載入，讓我們看看接下來會發生什麼。

![No$GBA，顯示接下來要載入的兩個元件及其說明](/images/blog/0003/19_second_header_stuff.png)

接下來的兩條指令將 `evt.bin` 中偏移量為 0x0C（綠色）和 0x04（粉紅色）處的整數分別載入到 R1 和 R0 中。這些指令隨後用於某些計算：

* `MOV R1, LR,LSR R1`{lang='arm'}——該指令將魔數右移 R1（0x11 或 17）的值，並將結果儲存在 R1 中。由於魔數是 32 位整數，這步獲得了魔數的最高 15 個有效位。
* `MUL R0, R1, R0`{lang='arm'}——該指令將 R1 與 R0（0x800）相乘，並將結果儲存在 R0 中。

繼續翻譯為 C#，得到：

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

執行完這兩條指令後……

![No$GBA，高亮顯示了兩條指令，它們從其魔數計算檔案偏移量](/images/blog/0003/20_find_offset.png)

R0 的值現在為 0x2D5000。等一下——我們剛剛將魔數的頂部（我們看到的一直在增加的整數！）乘以 0x800（每個偏移量都可以被其整除）。我們可以計算某個檔案偏移量嗎？

![CrystalTile2，顯示 0x2D5000 處的 evt.bin；上面是一片 0 的海洋，表示它是檔案的開頭](/images/blog/0003/21_the_offset.png)

我們確實做到了！我們剛剛找到了計算給定索引的檔案偏移量的程式！但是魔數仍然會被載入到 LR 中，所以我們還沒有完成。

下一條指令將我們新計算的偏移量儲存在記憶體中。之後的指令再次載入 `evt.bin` 頭部的起始地址。在那之後，有兩個與我們之前看到的類似的指令。

![No$GBA，高亮顯示了以下兩個指令](/images/blog/0003/22_find_magic_length_int.png)

這一次，我們將偏移量 0x10 和 0x08 處的值分別載入到 R1 和 R0 中。我們將再一次使用這些值對魔數進行一些數學運算。

* `AND R1, LR, R1`{lang='arm'}——該指令將 R1（0x1FFFF）的內容和魔數逐位求和。這有效地得到了魔數的最低 17 個有效位（我們上面計算出的最高 15 個有效位的補碼）。
* `MUL R0, R1, R0`{lang='arm'}——該指令將 R1 與 R0（0x08）相乘，並將結果儲存在 R0 中。

寫成 C#：

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

此計算的最終結果為 0x5398。

![在 No$GBA 中計算的特殊長度整數](/images/blog/0003/23_magic_length_int.png)

這就是函式的結束。所以我們找到了偏移量，但 0x5398 是什麼意思？讓我們回到 IDA 中的呼叫函式，看看我們是否能弄清楚。

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

注意倒數第五行的除錯字串（`"read:[%s],idx=%d,ofs=0x%x,sz=%dKB"`{lang='c'}）。處理完魔數後，我們得到了一個除錯字串，顯式引用了檔案索引、偏移量和*大小*。但是，0x5398 不是這個檔案的長度（我們知道它的偏移量，所以我們可以手動檢查它的長度；加上填充位元組後，檔案的長度是 0x5800 位元組）。因此，讓我們來看看 `arc_processMagicInteger` 和除錯字串之間的一個子程式呼叫：`sub_201D310`。

### 令人精神錯亂的檔案長度程式
請小心，這個程式很長。不要擔心你不理解所有內容，這對本文的目的來說並不重要。這是一種極其模糊的確定檔案長度的方法。

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

我稱之為“令人精神錯亂的檔案長度程式”。0x5398 這個數字實際上不是實際的壓縮後的陣列長度，而是被編碼後的壓縮長度，需要被此程式解碼。一個快速的問答：

* 問：為什麼這個程式有這麼多重複？<br/>
  答：這是一些編譯器（包括 ARM 編譯器）的一個名為*迴圈展開*的函式的結果。通常情況下，當編譯器可以靜態地確定編譯時將發生多少迴圈時，會在執行時間與程式空間之間進行權衡。
* 問：這是什麼意思？<br/>
  答：別擔心，這其實並不重要。重點是，這是一個迴圈，所以我們可以把它當作一個迴圈。
* 問：我看到了很多 `ADCS` 和 `SUBCC` 指令。它們是什麼意思？<br/>
  答：`ADCS` 表示“加和並進位，設定標誌”。本質上來說，這意味著將兩個數字相加，如果上一次運算產生“進位”，我們就在和上加 1。然後，我們根據加和是否導致進位來設定或清除進位標誌。這裡的“進位”指的是“無符號溢位”——即 32 位整數超過其最大值並迴圈。`SUBCC` 表示“如果沒有進位則相減”。這意味著如果前一個運算沒有導致進位，我們令兩個數字相減。
* 問：為什麼開發者會這樣做？<br/>
  答：他們他媽的給我添麻煩。

## 走出森林
哇！這裡有很多彙編指令。我們可以繼續往下看子程式，但我們現在已經完成了主要任務：我們對 Shade 的二進位制歸檔檔案的工作原理有了很多瞭解。如果我們回顧一下我們最初期望的歸檔檔案可能具有的內容列表：

* 我們找到了檔案的數量（這是歸檔檔案的前四個位元組）。
* 雖然似乎沒有明顯定位的檔名，但我們確實找到了檔案的*索引*（這似乎是它的查詢方式）、偏移量和壓縮長度之間的對映。
* 檔案資料肯定存在，並且以每 0x800 位元組對齊。

很好！這是一個巨大的進步。讓我們看看現在是否可以編寫一些東西來解析歸檔檔案。

### 編寫我們自己的解析器
讓我們從思考如何在 C# 中表示歸檔檔案開始。有四個不同的歸檔檔案，每個歸檔檔案都有自己的檔案型別——對我來說，似乎需要編寫一個泛型類。首先，我們將建立一個泛型類來表示歸檔檔案中的檔案。

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

這非常基本——有魔數、索引、偏移量和壓縮/未壓縮資料的屬性。我們還有一個 `Edited` 屬性，用於指示是否修改了檔案。最後，有一個空白建構函式——我們將讓派生類實現它。

現在製作通用的歸檔檔案：

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

所有這些都是我們以前見過的。現在，轉到建構函式。

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

在這裡，我們只是從檔案頭提取我們找到的值，然後迴圈並提取所有的魔數。

在將檔案新增到歸檔檔案之前，我們必須轉換壓縮長度函式。我可以一步一步地瀏覽並解釋我是如何從彙編程式碼轉換過來的，但這將會非常冗長乏味。因此，以下是最終程式碼：

```csharp
public int GetFileLength(uint magicInteger)
{
    // 完全精神錯亂的函式
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

現在我們得到了一個函式，可以根據檔案的魔數來確定檔案的壓縮長度。但問題是，當我們儲存檔案時，我們必須將其反轉，並從壓縮的長度返回到魔數。我們如何做到這一點？

嗯，在某個時候，有人有一個程式可以做到這一點，但我不是那個人。更重要的是，這個函式超出了我的想象，我甚至不知道如何開始嘗試對它逆向。但這對我們來說還不是終點——請記住， 0x5398 值的長度只有 17 位。這意味著被編碼的整數的可能值（即，對精神錯亂的檔案長度函式的輸入）的範圍是從 0 到 0x1FFFF。這隻有 131,072 個可能的值，在這一範圍內並沒有那麼多。所以我們只是……根據檔案長度計算所有可能的編碼值，並將它們新增到字典中。（由於這些值是常量，因此我們在建構函式中只執行一次。）

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

然後，當我們想要一個新的魔數時，我們只需要：

```csharp
public uint GetNewMagicInteger(T file, int compressedLength)
{
    uint offsetComponent = (uint)(file.Offset / MagicIntegerMsbMultiplier) << MagicIntegerMsbShift;
    int newLength = (compressedLength + 0x7FF) & ~0x7FF; // 四捨五入到最接近的 0x800
    int newLengthComponent = LengthToMagicIntegerMap[newLength];

    return offsetComponent | (uint)newLengthComponent;
}
```

最後，我們準備好開始解析檔案了。我們所要做的就是迴圈遍歷魔樹，從魔數中獲得檔案偏移量和壓縮後的長度，然後使用它們來獲取檔案資料並初始化 `FileInArchive` 衍生類。

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
            file = FileManager<T>.FromCompressedData(fileBytes, offset); // 不用擔心這個函式，它所做的只是初始化檔案。
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

我們現在得到了一個函式解析器。我們可以編寫一個快速的 GUI，向我們展示檔案載入看起來如何，以及……

![顯示從遊戲中提取的指令碼的 GUI 介面](/images/blog/0003/24_archive_interface.png)

看上去很不錯！（右邊的文字是對即將到來的事情的預覽——我在解析歸檔檔案的同時，也在解析事件/指令碼檔案，但我不會在這篇文章中討論事件檔案的逆向工程。）所以現在我們可以開啟 `evt.bin`，甚至編輯其中的檔案。不過，還有一步——我們必須能夠在編輯完二進位制歸檔檔案後儲存它們。

### 儲存歸檔檔案
儲存歸檔檔案的理想方法是從頭開始重建，但由於頭部中有我們不完全理解的資料，我們將不得不接受在適當的位置編輯檔案頭。因此，我們首先新增在解析時獲取的整個檔案頭。

```csharp
public byte[] GetBytes()
{
    List<byte> bytes = new();

    bytes.AddRange(Header);
```

接下來，我們將遍歷所有檔案，並按順序將它們新增到歸檔檔案中。如果檔案沒有經過編輯，那麼我們將直接將其新增到歸檔檔案中。但是，如果檔案已被編輯，我們將不得不壓縮已編輯的資料。

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

在這裡，我們遇到了一個障礙——在某些情況下，編輯後的檔案會比原始檔案長，對吧？這種情況會比我們想象中發生得更頻繁，因為我的壓縮演算法的實現明顯不如開發人員使用的實現更高效，所以即使解壓後的檔案保持相同大小，重新壓縮的時間也會更長。這個問題的解決方案實際上很簡單，只是有點乏味：我們把所有東西都往下移動。

為什麼把東西搬下來很乏味？好吧，這又回到了魔數——它們包含了每個檔案的*偏移量*。透過向下移動檔案，我們改變了它的偏移量，這意味著魔數也會改變。所以我們需要編寫程式碼來做到這一點。

```csharp
        if (i < Files.Count - 1) // If we aren’t on the last file
        {
            int pointerShift = 0; // Assume we’re not going to be shifting offsets at all
            while (bytes.Count % 0x10 != 0) // ensure our file is 16-byte aligned
            {
                bytes.Add(0);
            }
            // 如果我們構建的歸檔檔案的當前大小大於下一個檔案的偏移量，
            // 這意味著我們需要調整下一個歸檔檔案的偏移量
            if (bytes.Count > Files[i + 1].Offset)
            {
                // 計算我們需要將魔數移動多少
                pointerShift = ((bytes.Count - Files[i + 1].Offset) / MagicIntegerMsbMultiplier) + 1;
            }
            if (pointerShift > 0)
            {
                // 計算指標移位後的新魔數
                Files[i + 1].Offset = ((Files[i + 1].Offset / MagicIntegerMsbMultiplier) + pointerShift) * MagicIntegerMsbMultiplier;
                int magicIntegerOffset = FirstMagicIntegerOffset + (i + 1) * 4;
                uint newMagicInteger = GetNewMagicInteger(Files[i + 1], Files[i + 1].Length);
                Files[i + 1].MagicInteger = newMagicInteger;
                MagicIntegers[i + 1] = newMagicInteger;
                bytes.RemoveRange(magicIntegerOffset, 4);
                bytes.InsertRange(magicIntegerOffset, BitConverter.GetBytes(Files[i + 1].MagicInteger));
            }
            // 新增檔案填充
            while (bytes.Count < Files[i + 1].Offset)
            {
                bytes.Add(0);
            }
        }
```

砰。我們得到了能用的程式碼，可以移動魔數。所以，讓我們測試一下——修改一個檔案並儲存存檔，看看是否可以更改一些文字。

![涼宮春日在開場白中說“Hello my friend! A lovely day!”（你好，我的朋友！美好的一天！）](/images/blog/0003/25_dialogue_replaced.png)

我向你展示了我在遊戲中編輯的第一段文字。🥰

如果你有興趣檢視歸檔檔案程式碼的最終結果，你可以[在 GitHub 上檢視程式碼](https://github.com/haroohie-club/ChokuretsuTranslationUtility/blob/main/HaruhiChokuretsuLib/Archive/ArchiveFile.cs)！

## 下一步是什麼
我們現在已經成功地解析並重新打包了歸檔檔案。接下來我們要討論的是我逆向工程的第一個檔案：事件檔案，其中包含遊戲的指令碼。但在此之前，我將釋出這兩篇帖子的附錄，其中將包含常見問題的答案，以及關於我們實現這一切所經歷的實際過程的一些歷史筆記。感謝閱讀，敬請期待！
