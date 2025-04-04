---
title: '遊玩遊戲'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
---

現在你已經有了打好了補丁的 ROM 檔案，是時候準備開始玩了！

---

**請選擇用於遊玩的平臺：**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS', '模擬器']
---

<div class="platform-filtered platform-nintendo_ds">

## 在 Nintendo DS 上玩
在 Nintendo DS 上玩遊戲非常簡單，只需把打好補丁的 ROM 放在燒錄卡上並運行遊戲。如果你按照前面的設定說明了操作，你應該已經有了一張燒錄卡。

**Requirements:**
* Nintendo DS or DS lite console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**設定：**
1. 將 SD 卡從燒錄卡中取出並插入計算機（如果需要，也可以透過正確的資料線連線）
2. 將之前建立的打好補丁的 .nds ROM 檔案複製到 SD 卡中正確的目錄裡。
3. 移除 SD 卡並插回到燒錄卡中，將其插入你的 Nintendo DS 中。啟動遊戲並享受吧！

</div>

<div class="platform-filtered platform-nintendo_dsi">

## Play on Nintendo DSi
Playing on the Nintendo DSi can either be done through the use of a flash cartridge or putting the patched ROM onto an SD card and launching it through TWiLightMenu++.

### Using TWiLightMenu++ (nds-bootstrap)

**Requirements:**
* Nintendo DSi or DSi XL console
* TWiLightMenu++ custom firmware [setup on your system](https://dsi.cfw.guide/). If you followed the guide to dumping your ROM on Nintendo DSi earlier, you've probably already done this!
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**設定：**
1. 將 DSi 中的 SD 卡插入電腦，
2. 將之前建立的打過補丁的 .nds ROM 檔案複製到 SD 卡上的任意位置。
3. 取出 SD 卡並將其插回 DSi。
4. 將你的 DSi 開機，啟動 Twilight Menu++。
5. 導航到打過補丁的 .nds ROM 檔案的位置並執行，然後開始遊戲。享受遊戲吧！

### Using a flash cartridge
**Requirements:**
* Nintendo DSi or DSi XL console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**設定：**
1. 將 SD 卡從燒錄卡中取出並插入計算機（如果需要，也可以透過正確的資料線連線）
2. 將之前建立的打好補丁的 .nds ROM 檔案複製到 SD 卡中正確的目錄裡。
3. 移除 SD 卡並插回到燒錄卡中，將其插入你的 Nintendo DSi 中。啟動遊戲並享受吧！

</div>

<div class="platform-filtered platform-nintendo_3ds">

## Play on (New) Nintendo 3DS or 2DS
Playing on a (New) Nintendo 3DS or 2DS can either be done through the use of a flash cartridge, or putting the patched ROM onto a SD card launching it through TWiLightMenu++ or NDS forwarder.

### Using TWiLightMenu++
**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* Luma3DS custom firmware [setup on your system](https://3ds.hacks.guide) and FBI. If you followed the guide to dumping your ROM on Nintendo 3DS earlier, you've probably already done this!
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**設定：**
1. 將 3DS 中的 SD 卡（已透過 Luma3DS 破解）插入計算機
2. 按照本指南使用 FBI 在 3DS 上安裝 TWiLightMenu。當它要求你將 .nds ROM 複製到 SD 卡時，將你之前製作的打好補丁的 .nds ROM 檔案複製到 /roms/ 資料夾中。
3. 繼續按照說明至啟動遊戲。享受遊戲吧！

#### Using an NDS Forwarder
If you would instead like to be able to launch the game directly from the home screen without running TWiLightMenu++, you can use an NDS forwarder to do so.

**Setup**:
1. Follow steps 1-2 of the setup for TWiLightMenu++ instructions above.
2. Install the [ndsForwarder](https://github.com/MechanicalDragon0687/ndsForwarder/releases) application either from Universal Updater or by following the instructions to install it manually on your SD card.
3. Boot up your 3DS and run the Homebrew Launcher application, then launch NDS Forwarder Generator from that.
4. Navigate to the /roms/nds/ folder and select the ROM you placed there. Select "Yes" at the prompt for whether you want to install the forwarder, and then select "OK" when the installation is complete.
5. Press Start to exit the forwarder generator and then Home Button to return to the home menu. You will be shown the newly installed forwarder on your home screen and can then launch the game directly from that.

### Using a flash cartridge
**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge

**設定：**
1. 將 SD 卡從燒錄卡中取出並插入計算機（如果需要，也可以透過正確的資料線連線）
2. 將之前建立的打好補丁的 .nds ROM 檔案複製到 SD 卡中正確的目錄裡。
3. 移除 SD 卡並插回到燒錄卡中，將其插入你的 Nintendo 3DS 中。啟動遊戲並享受吧！

</div>

<div class="platform-filtered platform-模擬器">

## 在模擬器上游玩

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Mobile Emulator']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-電腦模擬器">

### 在 Windows、macOS 或 Linux 上模擬
電腦上的 DS 模擬器有幾個可選項，但我們推薦 melonDS，因為它的模擬精度和效能較好。

#### melonDS 設定
**要求：**
* Windows、macOS 或 Linux 電腦

**設定：**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v1.0.0+**) from the project website for your platform (Windows, macOS, or Linux) and save it somewhere easily accessible to your computer. (If you are using macOS, consider placing the melonDS.app folder in your /Applications directory for ease of access.)

If you're running Linux, we also recommend the [official Flatpak](https://flathub.org/apps/net.kuribo64.melonDS) provided on Flathub. The stable release can sometimes lag behind the official one, so consider installing it from the [flathub-beta](https://docs.flathub.org/docs/for-users/installation/#flathub-beta-repository) repository.

**遊玩遊戲：**

With melonDS setup, all you need to do in order to play the game is select "File" &rarr; "Open ROM" in the top menu bar and choose the ROM file you patched earlier. You can also simply drag and drop the ROM file directly on the opened emulator, or associate `.nds` files with melonDS to open them via double clicking.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://github.com/TASEmulators/desmume)－The commonly-used older version of DeSMuME is not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects voiced lines). However, the latest release seems to run the game fine so long as the software renderer is used for graphics. That being said, melonDS is still recommended over this emulator for its superior accuracy, and especially for Linux where the functionality is much more limited.
* [no$gba](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-手機模擬器">

### 在移動裝置上模擬

#### Emulate on iOS / iPadOS
**Requirements:**
* iOS / iPadOS Device (iPhone, iPad, iPod Touch)

**Play Using Delta Emulator**

In the past, Apple did not permit emulators officially on their store. However, times have changed and now you can simply download [Delta Emulator](https://faq.deltaemulator.com/) from the [App Store](https://apps.apple.com/us/app/delta-game-emulator/id1048524688).

Simply run Delta Emulator and load the patched ROM file to begin playing.

#### Emulate on Android
There are several options for emulation on Android. [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) has a great interface, is simple to install, and is now free to download. There is also an unofficial [Android port of melonDS](https://play.google.com/store/apps/details?id=me.magnum.melonds) that similarly will run well, but (at time of writing, Dec 2024) is not quite up to date with the PC version of melonDS's feature set. Finally, [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) can run the melonDS DS core which usually maintains exact parity with the PC version of melonDS.

**Requirements:**
* Android Device with the Google Play store

**使用 DraStic 模擬器遊玩**

在 Google Play 商店下載 [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic)，並透過 Android 檔案管理器將已打補丁的 ROM 檔案傳輸給它。

**Play using melonDS Android Emulator**

Download [melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**使用 RetroArch 模擬器遊玩**

1. Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store and launch it.
  - If you get an error at this step saying that your version of Android is too new to support RetroArch, you will have to download the apk manually from their site. To do this, [go to their downloads page](https://retroarch.com/?page=platforms) and scroll to the "Android" section. Below "Google Play" and "F-Droid", click "Download" to download the apk and then attempt to launch it. You will have to set several permissions in order to install the apk from an "untrusted source" &ndash; enable these settings by following the instructions on your screen and then launch the apk again to install it to your phone.
  - You might also consider downloading one of the nightly builds to get a more up-to-date version of the app.
2. Select "Load Core" and then "Download a Core", then select the "Nintendo DS - melonDS DS" core from the list to download it.
3. Go back, and then hit "Load Content" and select your patched ROM file through the RetroArch file picker.

</div>

::

</div>
