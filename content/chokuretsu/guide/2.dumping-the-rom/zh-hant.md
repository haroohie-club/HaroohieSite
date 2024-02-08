---
title: '轉儲 ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
locale: 'zh-hant'
---

要轉儲 ROM 檔案，除了需要一份遊戲外，你還需要一臺 Nintendo DS 或 3DS 主機。有些方法需要額外的裝置，例如 SD 卡或能夠設定不安全熱點的移動裝置。

---

**請選擇要用於轉儲 ROM 的平臺：**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS']
---
<div class="platform-filtered platform-nintendo_ds">

### 使用 Nintendo DS or DS Lite 轉儲
有兩種方法可以使用 Nintendo DS 或 Nintendo DS Lite 主機轉儲遊戲。這兩種方法都需要使用 Slot-1（DS 卡帶的插槽）燒錄卡。

第一種方法使用 Wi-Fi 破解，透過檔案傳輸協議（FTP）進行轉儲。第二種方法使用一對 Solt-1 和 Slot-2（GBA 卡帶的插槽）燒錄卡直接轉儲 ROM。

#### 透過 Wi-Fi 轉儲
**要求：**
* Nintendo DS 或 DS Lite 主機
* 《涼宮春日的串聯》
* Slot-1 燒錄卡帶（例如：R4 卡。此外，燒錄卡還需要一張 SD 卡或 microSD 卡以載入內容）
* 智慧手機、平板電腦或其他可以建立不安全或 WEP 協議 Wi-Fi 熱點的裝置
  - 不幸的是，大多數現代計算機無法做到這一點。最好的裝置是 Android 智慧手機。
  - 蘋果和 Windows 裝置（包括 iPhone）無法建立不安全或 WEP 協議的熱點。
* 一臺可以用來[下載 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) 的電腦，並將其連線到所述熱點
* 支援 Wi-Fi 的 DS 遊戲。服務已經結束，但這並不重要。不幸的是，《涼宮春日的串聯》不支援 Wi-Fi。

**方法：**
1. 使用智慧手機、平板電腦或其他可以建立無線熱點的裝置，建立不安全（無密碼）或 WEP 協議的熱點（必須是 WEP 協議；DS 不支援 WPA 和其他現代加密標準）。
2. 在另一臺電腦上，[下載 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/)。然後，將這臺電腦連線到你剛剛建立的熱點。
3. 將 wooddumper.nds（不是 Slot-2 版本）自制軟體安裝到燒錄卡的 SD 卡的正確位置。
4. 插入支援任天堂 Wi-Fi 連線的 Nintendo DS 遊戲，並進入配置 Wi-Fi 連線的選單。連線到剛剛建立的熱點。
5. 退出遊戲並取出卡帶。現在，插入你剛剛安裝的了 wooddumper 的燒錄卡，然後在 Nintendo DS 上找到並執行它。
6. 按照螢幕上的說明進行操作，並在提示時插入《涼宮春日的串聯》卡帶。繼續操作，直到軟體顯示需要透過 FTP 客戶端連線到的 IP 地址為止。
7. 使用 FTP 客戶端，如 [net2ftp](https://www.net2ftp.com/)、瀏覽器內建方式或其他軟體（例如 [FileZilla](https://filezilla-project.org/)），在相關輸入框中輸入 IP 地址。不需要指定使用者名稱或密碼。
8. 將 .nds ROM 檔案和 .txt 檔案複製到電腦上。接下來可以跳轉到[給 ROM 打補丁](/zh-hant/chokurestu/guide/patching the ROM)。

#### 使用雙插槽燒錄卡轉儲
**要求：**
* Nintendo DS 或 DS Lite 主機
* 《涼宮春日的串聯》
* Slot-1（DS 插槽）燒錄卡（例如 R4 卡）
* Slot-2（GBA插槽）燒錄卡，需要與 Slote-1 卡相容（例如 e-Link 卡）
* SD 或 microSD 卡（或正確的資料線），以便在必要時從燒錄卡中載入或刪除檔案
* 一臺可以用來下載 wooddumper 的電腦

**方法：**
1. [將 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) 下載到電腦上。
2. 將 wooddumper_slot2.nds 自制軟體安裝到 Slot-1 燒錄卡的 SD 卡的正確位置。
3. 將 Slot-1 和 Slot-2 燒錄卡插入 DS。
4. 透過燒錄卡開啟 wooddumper。
5. 按照螢幕上的說明操作，並在提示時插入《涼宮春日的串聯》卡帶。繼續操作，直到軟體顯示轉儲已完成。
6. 取出 Slote-2 燒錄卡，將燒錄卡中的 SD 卡插入到電腦（對於某些燒錄卡，請將其直接連線到電腦）
7. 將 .nds ROM 檔案和 .txt 檔案複製到電腦上。接下來可以跳轉到[給 ROM 打補丁](/zh-hant/chokurestu/guide/patching the ROM)。

</div>

<div class="platform-filtered platform-nintendo_dsi">

### 使用 Nintendo DSi 轉儲

要使用 Nintendo DSi 進行轉儲，需要在主機上安裝被稱為 Twilight Menu++ 和 Unlaunch 的自制韌體（CFW），以便執行 Godmode9i，從而將卡帶轉儲到 `.nds` 檔案中。

**要求：**
* Nintendo DSi 或 Nintendo DSi LL/XL 主機
* 《涼宮春日的串聯》
* 容量至少為 2GB 的 SD 卡
* 擁有 SD 卡讀卡器或 USB SD 卡讀卡器外設的計算機

**方法：**
::guide-notice
請按照以下步驟謹慎操作，以避免使主機變磚。
::
1. 遵循 [dsi.cfw.guide 上的步驟](https://dsi.cfw.guide/zh_CN/launching-the-exploit.html)，將 Twilight Menu++ 和 Unlaunch 安裝到 DSi 上。
2. [下載 GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) 並使用解壓軟體（例如 Windows 上的 7Zip 或 macOS 上的 UnArchiver）提取檔案。
3. 從 DSi 中取出 SD 卡，然後將其插入計算機。
4. 將提取的 GodMode9.nds 檔案放在 SD 卡上的任意位置。
5. 將 SD 卡插回 DSi。
6. 將《涼宮春日的串聯》遊戲卡帶插入 DSi。
7. 啟動 Twilight Menu++ 並執行 GodMode9i。
8. 選擇“NDS GAMECARD”選項。
9. 按下 A 按鈕選擇“Yes”以轉儲卡帶。
10. 完成後，你可以關閉 DSi 並從主機中取出 SD 卡。
11. 將 SD 卡插回電腦。導航到 SD 卡上的 (根目錄)/gm9i/out/。將 .nds 檔案複製到電腦上。


</div>

<div class="platform-filtered platform-nintendo_3ds">

### 使用 Nintendo 3DS 轉儲

要使用 Nintendo 3DS 或 2DS 主機進行轉儲，需要在系統上安裝名為 Luma3DS 和 bootstrap9 的自定義韌體（CFW），以便執行 Godmode9，從而將卡帶轉儲到 .nds 檔案中。

**要求：**
* Nintendo 3DS、3DS LL/XL、2DS、New 3DS、New 3DS LL/XL 或 New 2DS LL/XL 主機
* 《涼宮春日的串聯》
* 容量至少為 2GB 的 SD 卡
* 擁有 SD 卡讀卡器或 USB SD 卡讀卡器外設的計算機
  * 在某些情況下，你可能需要使用相容 DS 或 DSi 的燒錄卡。

**方法：**
::guide-notice
請按照以下步驟謹慎操作，以避免使主機變磚。
::
* 遵循 [3ds.hacks.guide 上的步驟](https://3ds.hacks.guide/zh_CN/get-started.html)，將 Luma3DS 和 bootstrap9 安裝到 3DS 上。
* 繼續遵循[安裝 GodMode9 的指南](https://3ds.hacks.guide/zh_CN/finalizing-setup.html)，並將其他必備的自制軟體安裝到 3DS 上。
* 關閉主機電源（不是進入睡眠模式，而是完全關閉電源）。
* 將《涼宮春日的串聯》遊戲卡帶插入 3DS。
* 按住 START 鍵，然後按下電源鍵開啟主機。這應該會啟動 GodMode9。如果沒有，請關閉電源，然後重試。
* 使用方向鍵導航到 `[C:]GAMECART`。
* 在 `[TitleID].nds` 上按下 A 鍵進行選擇。如果提示選擇轉儲型別，請再次按 A 鍵。
* 在下螢幕選擇“Copy to 0:/gm9/out”將其轉儲到SD卡。
* 轉儲完成後，關閉主機電源並取下 SD 卡。
* 將 SD 卡插回電腦。進入 SD 卡上的 /gm9/out/ 資料夾。將 .nds 檔案複製到電腦上。

</div>
::

---

## 在繼續之前
你現在應該已經將遊戲轉儲到可以用於打補丁的 `.nds` ROM 檔案中。將其移動到易於訪問的位置。

*ROM 轉儲資訊由 [dumping.guide](https://dumping.guide/carts/nintendo/ds)、[dsi.cfw.guide](https://dsi.cfw.guide/) 以及 [3ds.hacks.guide](https://3ds.hacks.guide/) 的貢獻者提供。*