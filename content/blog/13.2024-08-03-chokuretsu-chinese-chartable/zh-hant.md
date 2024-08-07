---
title: &title "來自中國的《串聯》ROM 破解挑戰：字型檔難題"
description: &desc "Xzonn 探討了他如何修改《串聯》漢化的碼錶和行高。"
locale: 'zh-hant'
navigation:
  author: 'Xzonn'
  year: 2024
  month: 08
  day: 04
  tags: ['chokuretsu', 'romhacking', 'chinese']
  image: '0013/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0013/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2024-08-03-chokuretsu-chinese-chartable'
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

## Jonko 的前言
大家好！今天的部落格來自 Xzonn，他正在將《涼宮春日的串聯》翻譯成中文。Xzonn 在 GitHub 上 fork 了我們的一些倉庫（就像他在這篇文章中所說的那樣！）一兩個月後，我注意到了他。當我發現他在做這項工作時，我就知道我應該聯絡他。你今天讀的是[在 Xzonn 的網站上](https://xzonn.top/posts/Suzumiya-Haruhi-no-Chokuretsu-Chinese-Localization.html)的一篇文章的副本（由他本人提供，並由我進行了英語編輯）。希望透過將他的作品翻譯成英文，可以為他的作品吸引更多的觀眾（反之亦然，因為他也一直在將我們的帖子翻譯成中文🥰）。敬請閱讀！

## 閒話少說……
最近我對遊戲漢化熱情高漲，正好涼宮春日相關的遊戲有幾部作品至今沒有漢化，其中就包括了世嘉發行的兩部作品《涼宮春日的串聯》《並聯》（日文漢字寫作為“直列”“並列”）。之前有一位前輩寫過一篇[“NDS《涼宮春日的直列》的一些破解資訊”](https://blog.csdn.net/LuckilyYu/article/details/5424928)，但是由於年代久遠，CSDN 開始收費了，這篇文章的全文也沒法看了。

不過，我在英文網站上找到了 [Haroohie Translation Club](https://haroohie.club/) 製作的[英文化補丁](https://haroohie.club/chokuretsu/)，並且[構建程式碼](https://github.com/haroohie-club/ChokuretsuTranslationUtility)是開源的。我拉取到本地試了一下，程式碼功能很完善，完全可以直接拿過來製作漢化補丁。當然，英文化和中文化的工作重心還是有一定區別的，不能直接照搬，但是前輩們取得的經驗還是值得借鑑和學習的。本著互相交流的精神，我就把我的研究成果寫出來和大家分享。

## 字型檔
先簡單介紹一下這個遊戲 ROM 的檔案結構：

``` plaintext
├── dat.bin
├── evt.bin
├── grp.bin
├── scn.bin
├── snd.bin
├── bgm
│   ├── BGM001.bin
│   ├── BGM002.bin
│   ├── ...
│   └── BGM034.bin
├── movie
│   ├── MOVIE00.mods
│   └── MOVIE01.mods
└── vce
 ├── ANZ_ANOTHER00.bin
 ├── ANZ_ANOTHER01.bin
 ├── ...
 └── TRY_WRITE00.bin
```

從檔名可以大概看出，`dat.bin` 存放資料檔案，`evt.bin` 存放遊戲劇情相關的指令碼，`grp.bin` 存放圖片檔案，這三個檔案實際上都是一個檔案包，其中儲存了較多的小檔案。其他檔案和音訊或影片相關。要修改的字型檔包括了碼錶和圖片，碼錶是 `dat.bin` 中的第 `0x71` 個檔案，圖片是 `grp.bin` 中的第 `0xE50` 個檔案。

### 碼錶
用 ChokuretsuTranslationUtility 中的命令列工具“ChokuretsuTranslationCLI”提取碼錶檔案，用 HxD 開啟：

``` plaintext
Offset(h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F

00000000 01 00 00 00 38 11 00 00 14 00 00 00 14 00 00 00 ....8...........
00000010 01 00 00 00 81 97 81 41 81 42 81 44 81 45 81 46 .....—.A.B.D.E.F
00000020 81 48 81 49 81 51 81 58 81 5B 81 5C 81 60 81 63 .H.I.Q.X.[.\.`.c
00000030 81 65 81 66 81 67 81 68 81 69 81 6A 81 73 81 74 .e.f.g.h.i.j.s.t
00000040 81 75 81 76 81 77 81 78 81 79 81 7A 81 7B 81 7C .u.v.w.x.y.z.{.|
```

前 `0x14` 個位元組顯然是檔案頭，其中 `0x04-0x07` 是檔案的大小[^1]（後續擴充碼錶需要修改此處）。從 `0x14` 到最後是字型圖片包含的所有字元，按順序排列。這種雙位元組的字元首先考慮 UTF-16-LE 編碼，但是發現是亂碼，於是嘗試了一下 Shift-JIS 編碼，發現和提取出來的圖片是一致的。直接拿 VS Code 開啟，改一下編碼，就能得到包含的字元：

``` plaintext
＠、。．・：？！＿々ー―～…‘’“”（）《》「」『』【】＋－×＝°％＆☆■♪０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚぁあぃい...
```

因為匯入的文字是簡體中文，所以需要想辦法把簡體中文漢字對應到 Shift-JIS 編碼中。我本來想直接拿 GB18030 編碼直接扔進去，但是發現 GB18030 包含的中文漢字遠多於 Shift-JIS 包含的日文漢字，因此作罷。最後的解決方案是，統計翻譯後的文字中出現的簡體中文漢字次數，按照使用次數從多到少排序，然後依次檢查是否在原有的碼錶中。如果在，就直接用原有的 Shift-JIS 編碼；如果不在，就用未在翻譯後的文字中出現的日文漢字替換掉。這樣就能保證儘可能多的字元能夠正確顯示。最後將替換的對應表儲存成 `.json` 檔案，供匯入文字時使用。

碼錶的處理思路與英文化專案類似，不過中文化需要用到的漢字遠遠多於英文化。我提取出了全部文字並且用機翻測試了一下，需要用到的漢字大概有 3000 字，而原有的碼錶只包含了約 2200 字。解決方法要麼是精簡用字，要麼對碼錶擴容。（順帶一提，這個遊戲全部文字大概 80 萬字，其中包含了很多分支，所以如果只是想通關的話很簡單，五章就結束了，但是要看完全部分支的話就需要很長時間了。當然，對於翻譯來說也是個地獄，就連機翻我都用了 3 天才處理完。）

### 字型圖片
有了碼錶和對應表，生成圖片就簡單了很多。字型大小是 14px，這個大小正好適合中文畫素字型（可以參考星夜之幻前輩寫的文章[“小點陣字型速覽”](https://zhuanlan.zhihu.com/p/142419693)）。我用的是 Windows 自帶的宋體，實際生成是 13x14px 的字元。自動構建的時候也可以讀取 `C:/Windows/Fonts/simsun.ttc`。

不過這裡有一個小小的問題，由於遊戲中文字的行高正好就是 14px，如果用 14px 的字型就會出現上下兩行的文字有粘連。這個問題就需要透過修改遊戲的可執行檔案來解決了。

另外，同樣是基於前文所說的碼錶包含字元不夠多的原因，生成的字型圖片也需要比原來的圖片更大。原來的圖片尺寸是 16x35328 的，如果直接用 ChokuretsuTranslationCLI 匯入，將會只匯入圖片的前面一部分。在不修改程式碼的前提下，解決辦法是先手動生成一個空的二進位制檔案匯入進去，然後再匯入圖片，此時 ChokuretsuTranslationCLI 就會以新的尺寸處理圖片。[^2]

## 圖片
圖片的修改沒什麼好說的，就是簡單地匯出、修改、匯入。只不過有些圖片匯出後的圖塊排序和實際顯示的圖塊排序有些差異，需要手動處理一下，也比較簡單，不再贅述了。

## 可執行檔案
在我深入研究之前，我對 NDS 遊戲的可執行檔案的瞭解不多。不過隨著我深入研究了這個遊戲以及[《寶可夢》第四世代的漢化修正專案](https://xzonn.top/PokemonChineseTranslationRevise/)，至少也算是歪打正著地解決了我遇到的問題。

首先大致說明一下 NDS 遊戲的可執行檔案。其分為 arm9 和 arm7 兩部分，而這兩部分又分為主程式（`arm9.bin/arm7.bin`）和補丁程式（`overlay9_xxxx.bin/overlay7_xxxx.bin`）。以 arm9 為例，`arm9.bin` 中儲存了程式的通用部分，會在遊戲啟動時載入到主記憶體（起始點為 `0x0200000000`）；而 `overlay9_xxxx. bin` 則根據需要動態載入到記憶體中。所有的二進位制檔案都是 ARM 的機器碼，所以要想修改遊戲的邏輯，就需要對機器碼進行修改。這裡就需要用到反彙編工具了。

參考了 Haroohie Translation Club 寫的文章[“Chokuretsu ROM Hacking Challenges Part 2 – Archive Archaeology”](https://haroohie.club/blog/2022-11-02-chokuretsu-archives)，可以使用 IDA 搭配[外掛](https://github.com/kynex7510/nds_ida)對 NDS 的 ROM 檔案進行反彙編。（順帶一提，原作者僅實現了反彙編 `arm9.bin` 的功能，沒有實現 `overay9_xxxx.bin` 的功能，我在原作者的基礎上添加了 `overay9_xxxx.bin` 的反彙編功能，參見[此處](https://github.com/Xzonn/NdsIda)。arm7 的反彙編沒有做，目前也沒什麼需求，如果有需求再說。）

### 字型行高
在 Haroohie Translation Club 的構建專案[“ChokuretsuTranslationBuild”](https://github.com/haroohie-club/ChokuretsuTranslationBuild)中我發現 [`src/symbols.x`](https://github.com/haroohie-club/ChokuretsuTranslationBuild/blob/main/src/symbols.x)[^3] 檔案有一些該團隊已經命名的函式：

``` javascript
MI_DmaCopy32 = 0x02006ED0;
MIi_CpuClearFast = 0x0200738C;
GX_SetBankForBG = 0x0200277C;
GX_SetGraphicsMode = 0x020025B8;
arc_loadFileAndResolvePointers = 0x02033FC4;
scene_renderDialogue = 0x0202D41C;
```

其中 `scene_renderDialogue` 這個函式看著很有用，拿 IDA 看一眼：

![使用 IDA 反彙編結果，其中與行高相關的內容已經高亮為了綠色](/images/blog/0013/01_disassembly.png)

這裡大概能看出來 `cmp r2, #0`、`cmp r2, #0x60`、`cmp r2, #0xa`、`cmp r2, #0x23` 是在比較，正好 `U+000A` 是換行符，而對應的分支裡面有個 `mov r0, #0x0e`。`0x0e` 剛好又是十進位制的 14，前面說過遊戲中文字的行高是 14，這不是正好對上了嗎？修改一下，改成 `0x10`（十進位制的 16），回到遊戲裡一看，沒錯！就這樣歪打正著地解決了。

![修改行高為 16px 的結果](/images/blog/0013/02_increased_line_height.png)

### 字型檔擴容
這個問題困擾了我挺久，單純修改碼錶大小沒用，必須得同時修改圖片大小才能讓遊戲中正常顯示。但是，如果讓圖片包含大約 2500 個漢字（僅擴容 300 字），匯入到遊戲裡就會出錯，具體表現為遊戲在廠商圖示顯示完畢後白屏。這顯然應該是圖片太大導致記憶體不夠用了，但我一開始沒有想到較好的解決辦法。儘管我在字型檔圖片讀取、文字顯示等多個地方都打了斷點，但是還是沒琢磨清楚該怎麼改。

這個時候我碰巧又看了 Haroohie Translation Club 的構建專案，發現了[一個提交](https://github.com/haroohie-club/ChokuretsuTranslationBuild/commit/f8884a8057f38a9f6b0f384acf7bf3f95541a096)：

```plaintext
commit f8884a8057f38a9f6b0f384acf7bf3f95541a096
Author: jonko0493 <email>
Date: Tue Oct 10 03:51:20 2023 -0700

 Print debug logs to no$ console
```

拉下來在本地構建一下，把可執行檔案相關的修改匯入進去，然後拿 DeSmuME 開啟 ROM 檔案：

![DeSmuME 的控制檯，展示了除錯資訊](/images/blog/0013/03_emu_debug.png)

好傢伙，真的把日誌輸出到模擬器的控制檯裡了。這下就好辦了，生成一個超級大的圖片，匯入到遊戲裡，發現報錯記憶體不夠了：

```plaintext
memory is not enough[32256Byte]
--memory report start--
--use
list: 0 addr:021A2230 size: 16
list: 1 addr:021A2240 size: 32
list: 2 addr:021A2260 size: 224
...
list: 23 addr:02217CB0 size: 32256
--free
list: 24 addr:0221FAB0 size: 11152
use memory size : 514176 503KB
free memory size : 11152 11KB
--memory report end--
```

計算了一下，記憶體分配的最終地址是 `0x0221FAB0 + 0x2B90 = 0x02222640` （十進位制的 `11152` 即為 `0x2B90`），拿 DeSmuME 的記憶體工具設一下寫入斷點，發現寫入的時候控制檯的最後一行文字是這樣的：

```plaintext
gwork : s: 20e2660 e: 2242664: sz: 140000
```

拿 IDA 找這個字串，然後跳轉到呼叫的位置，發現瞭如下彙編程式碼：

```arm
loc_202A980:
LDR R1, =dword_20A9AC8
MOV R0, #0x140000
LDR R2, [R1,#8]
ORR R2, R2, #1
STR R2, [R1,#8]
BL sub_2024750
MOV R1, R0
LDR R4, =dword_20A9AAC
LDR LR, =dword_20A9AB4
LDR R12, =dword_20A9AB0
LDR R0, =aGworkSXEXSzX ; "gwork : s: %x e: %x: sz: %x\n"
ADD R2, R1, #0x140000
MOV R3, #0x140000
STR R1, [R4]
STR R1, [LR]
STR R1, [R12]
BL dbg_print20228DC
```

第一個 `#0x140000` 應該是和記憶體分配有關的，後面兩個 `#0x140000` 是和除錯資訊輸出有關的。因為想要把字型檔容量擴容到 3000 字左右，計算了一下，將這幾個數字改為 `#0x160000` 即可滿足需求。

此外，在另一個地方也發現了這個 `#0x140000`：

```arm
sub_202E158:
LDR R0, =dword_20A9AB0
LDR R1, =dword_20C0D38
LDR R3, [R0]
LDR R2, =dword_20A9AC8
ADD R12, R3, #0x1400
LDR R3, [R1]
STR R12, [R0]
STR R12, [R2]
STR R3, [R1,#4]
MOV R12, #0
STR R12, [R3,#0xC]
LDR R3, [R1,#4]
LDR R0, =dword_20A9AAC
STR R12, [R3,#0x10]
LDR R12, [R2]
LDR R3, [R1,#4]
STR R12, [R3,#4]
LDR R0, [R0]
LDR R2, [R2]
ADD R3, R0, #0x140000
LDR R0, [R1,#4]
SUB R1, R3, R2
STR R1, [R0,#8]
POP {R3,PC}
```

也同樣修改為 `#0x160000`。

## 結語
總體來說，我的研究成果基本上都是基於前輩們已有的結果，幾個問題的解決方式也算是歪打正著，不過也算是有所收穫。後續的工作主要就是翻譯了，不過，研究如何漢化可比翻譯文字有意思多了。

[^1]: 這個值實際上不是檔案的“大小”，而是指向“結束指標”部分的指標；因為字元表沒有結束指標，所以它最終只是檔案的結尾。
[^2]: 很抱歉讓你經歷了這些，Xzonn！在這之後我添加了在匯入時修改影像的“新尺寸”的功能！
[^3]: 這個檔案現在有了很多的函式，但當時它確實只有 Xzonn 展示的這些函式（參見[這裡](https://github.com/haroohie-club/ChokuretsuTranslationBuild/blob/80b63ce25528a31ed9d14139a34f8f52ae083945/src/symbols.x)）。實際上，在我看到他的文章後，我添加了更多的函式！