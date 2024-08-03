---
title: &title "Chokuretsu ROM Hacking Challenges from China – Character Conundrums!"
description: &desc "Xzonn explores how he went about modifying the character table and line height for the Chinese translation of Chokuretsu"
locale: 'en'
navigation:
  author: 'Xzonn'
  year: 2024
  month: 08
  day: 03
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

## A Foreword from Jonko
Hi everyone! Today's blog post is from Xzonn who is working on translating *Suzumiya Haruhi no Chokuretsu* into Chinese. I became aware of Xzonn a month or two after he forked some of our repos on GitHub (as he describes in this very post!) and as soon as I found out he was doing this work I knew I had to reach out to him. What you're reading today is a reproduction (in English courtesy the man himself, with prose edits by me) of a blog post [on Xzonn's site](https://xzonn.top/posts/Suzumiya-Haruhi-no-Chokuretsu-Chinese-Localization.html). The hope is that by translating his work into English, we can reach an even larger audience for his work (and vice-versa, since he's been translating our posts into Chinese as well 🥰). Please enjoy!

## Without Further Ado...
Recently, my enthusiasm for localizing games into Chinese has been high. There are several Haruhi Suzumiya games that have not been translated into Chinese, including two works released by Sega, "Suzumiya Haruhi no Chokuretsu" (*The Series of Haruhi Suzumiya*) and "Suzumiya Haruhi no Heiretsu" (*The Parallel of Haruhi Suzumiya*). A while back, someone wrote an article entitled ["NDS《凉宫春日的直列》的一些破解信息"](https://blog.csdn.net/LuckilyYu/article/details/5424928) (Some Hacking Information on the NDS game "Suzumiya Haruhi no Chokuretsu"), but due to its age, the <abbr title="Chinese Software Developer Network">CSDN</abbr> has started charging fees, so I was not able to read all of it.

However, I found an [English patch](https://haroohie.club/chokuretsu/) created by the [Haroohie Translation Club](https://haroohie.club/), and then found out that the [build code](https://github.com/haroohie-club/ChokuretsuTranslationUtility) is open source. I pulled it to my local machine and tried it out. The code is very functional and can definitely be used to create Chinese patches. Of course, there are still certain differences in the focus of work between English and Chinese localization, so it cannot be directly copied. However, the experience gained by one's predecessors is still worth learning and borrowing from. In the spirit of mutual communication, I will write down my research results and share them with everyone.

## Font
First, let me briefly introduce the file structure of the game ROM:

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

From the file names, it can be roughly inferred that `dat.bin` stores data files, `evt.bin` stores game storyline related scripts, and `grp.bin` stores image files. These three files are actually archive files, which store a large number of small files. The other files are all audio or video files. To modify the font used in this game, I need to edit the character table and the image of the font itself. The character table is file #`0x71` in `dat.bin`, and the font image is file #`0xE50` in `grp.bin`.

### Character Table
I extracted the character table file using the command-line tool "ChokuretsuTranslationCLI" in the ChokuretsuTranslationUtility, and opened it with the hex editor HxD:

``` plaintext
Offset(h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F

00000000 01 00 00 00 38 11 00 00 14 00 00 00 14 00 00 00 ....8...........
00000010 01 00 00 00 81 97 81 41 81 42 81 44 81 45 81 46 .....—.A.B.D.E.F
00000020 81 48 81 49 81 51 81 58 81 5B 81 5C 81 60 81 63 .H.I.Q.X.[.\.`.c
00000030 81 65 81 66 81 67 81 68 81 69 81 6A 81 73 81 74 .e.f.g.h.i.j.s.t
00000040 81 75 81 76 81 77 81 78 81 79 81 7A 81 7B 81 7C .u.v.w.x.y.z.{.|
```

The first `0x14` bytes are obviously the file header, where `0x04-0x07` is the size of the file[^1] (these bytes will need to be modified after expanding the character table). From `0x14` to the end is all the characters contained in the font image, in order. At first, I thought these two-byte characters might be UTF-16-LE encoded, but parsing with that encoding gave a garbled result. So I tried Shift-JIS encoding and found that it was consistent with the extracted image. I opened it with VS Code directly and change the encoding to Shift-JIS, and I got characters included in the file:

``` plaintext
＠、。．・：？！＿々ー―～…‘’“”（）《》「」『』【】＋－×＝°％＆☆■♪０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚぁあぃい...
```

Since the modified text is in Simplified Chinese, I need to find a way to map Simplified Chinese characters to Shift-JIS codes. I wanted to directly use the [GB18030 encoding](https://en.wikipedia.org/wiki/GB_18030) at first, but I found that GB18030 contained far more characters than Shift-JIS, so I gave up on that. The solution I settled on was to count the number of Simplified Chinese characters in the translated text, sort them according to frequency of use, and then check whether they are in the original character table. If they are present, the original Shift-JIS code is directly used; if not, we replace a Japanese character that does not appear in the translated text. This ensures that as many characters as possible can be displayed correctly. Finally, the replacement table was saved as a `.json` file for use when importing text.

The essential idea of how we process the character replacement is similar to that of the English project, but a Chinese localization needs to use far more characters than an English one. I extracted all the text and machine translated it to get an idea of which characters would be needed. The required Chinese characters number about 3,000, while the original character table only contains about 2,200 characters. The solution is either to simplify the use of words, or to expand the capacity of the character table. (By the way, the whole text of the game is about 800,000 words in Japanese, including many branches. So, if someone just wants to clear the game, it is very simple because there are only 5 chapters. But if one wants to play all the branches, it will take a long time. Of course, it is also hell to translate, and it even took me three days to finish just the machine translation.)

### Font Image
With a character table and replacement table, generating images becomes much simpler. The font size is 14px, which is exactly suitable for Chinese pixel fonts (you can refer to the article ["小点阵字体速览"](https://zhuanlan.zhihu.com/p/142419693) (Small Pixel Font Overview) written by 星夜之幻 (Xingyezhihuan)). I used SimSun, which is bundled with Microsoft Windows, to generate 13x14px characters. As for creating an automatically building workflow, the file `C:/Windows/Fonts/simsun.ttc` can be used.

However, there is a small issue here. As the line height of the text in the game is exactly 14px, using a 14px font will cause the text on the top and bottom lines to stick together. This problem needs to be solved by modifying the executable file of the game.

Additionally, due to the insufficient number of characters in the original character table that I mentioned earlier, the generated font image also needs to be larger than the original image. The original image size was 16x35328. If the image is imported directly using ChokuretsuTranslationCLI, only the top part of the image will be imported. The solution, without modifying the code, is to manually generate an empty binary file, import that empty binary file first, and then import the image. Then, ChokuretsuTranslationCLI will properly process the image with the new size.[^2]

## Images
Modifying images is very easy, just simply exporting, editing, and importing them. However, there are some differences in the sorting of exported tiles compared to the actual displayed image, which require manual processing. The steps are relatively simple, so I won't go into further detail.

## Executable File
Before delving deeper, I had limited knowledge about the executable files of NDS games. However, as I looked more into this game and [the Chinese localization revision project for the Pokémon Gen IV](https://xzonn.top/PokemonChineseTranslationRevise/), at least it was able to solve the problems I encountered in a straightforward manner.

Firstly, I'll briefly explain the executable files of the NDS game. They are divided into two parts: arm9 and arm7, which are further divided into the main program (`arm9.bin/arm7.bin`) and overlay programs (`overlay9_xxxx.bin/overlay7_xxxx.bin`). Taking arm9 as an example, the general part of the program is saved in `arm9.bin`, which will be loaded into the main memory at game startup (starting from `0x0200000000`); And `overlay9_xxxx. bin` files are dynamically loaded into memory as needed. All binary files are ARM machine code, so if I want to modify the logic of the game, it is necessary to modify the machine code. This requires the use of disassembly tools.

Referring to the article written by Haroohie Translation Club &ndash; ["Chokuretsu ROM Hacking Challenges Part 2 – Archive Archaeology"](https://haroohie.club/blog/2022-11-02-chokuretsu-archives), IDA can be used with [a plugin](https://github.com/kynex7510/nds_ida) to disassemble NDS ROM files. (By the way, the original author only implemented the disassembly function of `arm9.bin` and did not implement the function of `overay9_xxxx.bin`. I added the disassembly function of `overay9_xxxx.bin` based on the original author's work, see [here](https://github.com/Xzonn/NdsIda). The disassembly function of arm7 was not done since there is currently no need for it. If there is a need, I will conduct further research.)

### Font Line Height
In the Haroohie Translation Club's [build repository](https://github.com/haroohie-club/ChokuretsuTranslationBuild), I found that the [`src/symbols.x`](https://github.com/haroohie-club/ChokuretsuTranslationBuild/blob/main/src/symbols.x)[^3] file contains some functions that the team had already named:

``` javascript
MI_DmaCopy32 = 0x02006ED0;
MIi_CpuClearFast = 0x0200738C;
GX_SetBankForBG = 0x0200277C;
GX_SetGraphicsMode = 0x020025B8;
arc_loadFileAndResolvePointers = 0x02033FC4;
scene_renderDialogue = 0x0202D41C;
```

The function `scene_renderDialogue` looked very useful, so I took a look with IDA:

![The result of disassembly using IDA, where the content related to line height were highlighted in green](/images/blog/0013/01_disassembly.png)

Here, we can roughly see that `cmp r2, #0`, `cmp r2, #0x60`, `cmp r2, #0xa` and `cmp r2, #0x23` are comparing `r2` with certain numbers. `U+000A` is a line break, and there is a statement `mov r0, #0x0e` in the corresponding branch. `0x0e` is 14 in decimal, and the line height of text in games is exactly 14 as I mentioned earlier. Then I modified it to `0x10` (16 in decimal), and went back to the game and... perfect! We lucked out here and solved this one almost immediately.

![The result of modifying line height to 16px](/images/blog/0013/02_increased_line_height.png)

### Expanding the Character Table
This problem bothered me for quite a long time. Just changing the size of the character table is pointless on its own, as I have to modify the image size at the same time to make it display properly in the game. However, once the image contains approximately 2,500 Chinese characters (with only 300 characters expanded), importing it into the game will result in an error, which is manifested as a white screen after the manufacturers' logos are displayed. Obviously, this is due to the image being too large and causing insufficient memory, but I couldn't think of a better solution at first. Although I had made breakpoints in various places such as loading font image and displaying texts, I still hadn't figured out how to make the changes.

At that moment, I happened to look at the build repo of Haroohie Translation Club again and found [a commit](https://github.com/haroohie-club/ChokuretsuTranslationBuild/commit/f8884a8057f38a9f6b0f384acf7bf3f95541a096):

``` plaintext
commit f8884a8057f38a9f6b0f384acf7bf3f95541a096
Author: jonko0493 <email>
Date: Tue Oct 10 03:51:20 2023 -0700

 Print debug logs to no$ console
```

I pulled it down, built it locally, merged the modifications related to the executable file, and then opened the ROM file with DeSmuME:

![The console of DeSmuME, displaying debugging information](/images/blog/0013/03_emu_debug.png)

Wow, it really output the logs to the console of the emulator. Now it's easy to handle! I generated a very large image, and imported it into the game. Then I found that there was an error message showing the memory was not enough:

``` plaintext
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

After my calculation, the final address for memory allocation is `0x0221FAB0 + 0x2B90 = 0x02222640` (`11152` in decimal is `0x2B90`). I used the memory tool of DeSmuME to set a write breakpoint, and the last line of texts in the console during the write operation is as follows:

``` plaintext
gwork : s: 20e2660 e: 2242664: sz: 140000
```

I used IDA to locate this string, then jumped to the calling location, and I found the following assembly code:

``` plaintext
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

The first `#0x140000` is likely related to memory allocation, while the latter two `#0x140000` are associated with debug information output. Since I want to expand the character table capacity to around 3,000 characters, I calculated and changed these numbers to `#0x160000` to meet the requirements.

In addition, I found this `#0x140000` in another location as well:

``` plaintext
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

I modified this to `#0x160000` as well.

## Conclusion
Overall, my research results are largely based on the work of those who came before me. The solutions to several issues were somewhat accidental, but there were still some gains for me. The subsequent work will mainly involve translation. However, researching how to localize the game into Chinese is much more interesting than simply translating texts.

[^1]: This value is not actually the *size* of the file but rather a pointer to the "end pointers" section; because the character table has no end pointers, it ends up just being the end of the file.
[^2]: Sorry for putting you through this, Xzonn! I've since added the ability to specify that an image has a "new size" on import!
[^3]: This file now has a lot of functions in it, but at the time it really was just the function Xzonn shows (see [here](https://github.com/haroohie-club/ChokuretsuTranslationBuild/blob/80b63ce25528a31ed9d14139a34f8f52ae083945/src/symbols.x)). I actually added a bunch more functions in after I saw their blog post!