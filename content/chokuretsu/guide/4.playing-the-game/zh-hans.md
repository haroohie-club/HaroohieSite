---
title: '游玩游戏'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
---

现在你已经有了打好了补丁的 ROM 文件，是时候准备开始玩了！

---

**请选择用于游玩的平台：**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS', '模拟器']
---

<div class="platform-filtered platform-nintendo_ds">

## 在 Nintendo DS 上玩
在 Nintendo DS 上玩游戏非常简单，只需把打好补丁的 ROM 放在烧录卡上并运行游戏。如果你按照前面的设置说明了操作，你应该已经有了一张烧录卡。

**Requirements:**
* Nintendo DS or DS lite console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo DS 中。启动游戏并享受吧！

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

**设置：**
1. 将 DSi 中的 SD 卡插入电脑，
2. 将之前创建的打过补丁的 .nds ROM 文件复制到 SD 卡上的任意位置。
3. 取出 SD 卡并将其插回 DSi。
4. 将你的 DSi 开机，启动 Twilight Menu++。
5. 导航到打过补丁的 .nds ROM 文件的位置并运行，然后开始游戏。享受游戏吧！

### Using a flash cartridge
**Requirements:**
* Nintendo DSi or DSi XL console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo DSi 中。启动游戏并享受吧！

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

**设置：**
1. 将 3DS 中的 SD 卡（已通过 Luma3DS 破解）插入计算机
2. 按照本指南使用 FBI 在 3DS 上安装 TWiLightMenu。当它要求你将 .nds ROM 复制到 SD 卡时，将你之前制作的打好补丁的 .nds ROM 文件复制到 /roms/ 文件夹中。
3. 继续按照说明至启动游戏。享受游戏吧！

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

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo 3DS 中。启动游戏并享受吧！

</div>

<div class="platform-filtered platform-模拟器">

## 在模拟器上游玩

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Mobile Emulator']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-电脑模拟器">

### 在 Windows、macOS 或 Linux 上模拟
电脑上的 DS 模拟器有几个可选项，但我们推荐 melonDS，因为它的模拟精度和性能较好。

#### melonDS 设置
**要求：**
* Windows、macOS 或 Linux 电脑

**设置：**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v1.0.0+**) from the project website for your platform (Windows, macOS, or Linux) and save it somewhere easily accessible to your computer. (If you are using macOS, consider placing the melonDS.app folder in your /Applications directory for ease of access.)

If you're running Linux, we also recommend the [official Flatpak](https://flathub.org/apps/net.kuribo64.melonDS) provided on Flathub. The stable release can sometimes lag behind the official one, so consider installing it from the [flathub-beta](https://docs.flathub.org/docs/for-users/installation/#flathub-beta-repository) repository.

**游玩游戏：**

With melonDS setup, all you need to do in order to play the game is select "File" &rarr; "Open ROM" in the top menu bar and choose the ROM file you patched earlier. You can also simply drag and drop the ROM file directly on the opened emulator, or associate `.nds` files with melonDS to open them via double clicking.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://github.com/TASEmulators/desmume)－The commonly-used older version of DeSMuME is not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects voiced lines). However, the latest release seems to run the game fine so long as the software renderer is used for graphics. That being said, melonDS is still recommended over this emulator for its superior accuracy, and especially for Linux where the functionality is much more limited.
* [no$gba](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-手机模拟器">

### 在移动设备上模拟

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

**使用 DraStic 模拟器游玩**

在 Google Play 商店下载 [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic)，并通过 Android 文件管理器将已打补丁的 ROM 文件传输给它。

**Play using melonDS Android Emulator**

Download [melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**使用 RetroArch 模拟器游玩**

1. Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store and launch it.
  - If you get an error at this step saying that your version of Android is too new to support RetroArch, you will have to download the apk manually from their site. To do this, [go to their downloads page](https://retroarch.com/?page=platforms) and scroll to the "Android" section. Below "Google Play" and "F-Droid", click "Download" to download the apk and then attempt to launch it. You will have to set several permissions in order to install the apk from an "untrusted source" &ndash; enable these settings by following the instructions on your screen and then launch the apk again to install it to your phone.
  - You might also consider downloading one of the nightly builds to get a more up-to-date version of the app.
2. Select "Load Core" and then "Download a Core", then select the "Nintendo DS - melonDS DS" core from the list to download it.
3. Go back, and then hit "Load Content" and select your patched ROM file through the RetroArch file picker.

</div>

::

</div>
