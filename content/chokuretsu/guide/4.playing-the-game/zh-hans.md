---
title: '游玩游戏'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
locale: 'zh-hans'
---

::guide-notice
对于模拟器玩家：由于存在各种模拟问题，不建议使用 DeSmuME。
::

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

**要求：**
* Nintendo DS 或 DS Lite 主机
* 烧录卡（例如 R4 卡。此外，可能还需要 SD 卡或 microSD 卡来加载内容）

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo DS 中。启动游戏并享受吧！

</div>

<div class="platform-filtered platform-nintendo_dsi">

## 在 Nintendo DSi 上玩
在 Nintendo DSi 上玩游戏可以简单地通过使用烧录卡来完成，也可以将打好补丁的 ROM 放在 SD 卡上，并在系统上使用 Twilight Menu++。

### 使用 TWiLightMenu（nds-bootstrap）
::iconified-text
---
icon: fa6-solid:circle-info
unwrap: true
---
如果你正在使用 **TWiLightMenu**（又名 nds-bootstrap），请确保在 DSi 模式下启动游戏。
::

**要求：**
* Nintendo DSi 或 DSi LL/XL 主机
* [在您的系统上设置](https://dsi.cfw.guide/)了 TwilightMenu++ 自定义固件。如果你之前按照指南在 Nintendo DSi 上转储了 ROM，你可能已经完成了！
* 容量至少为 2GB 的 SD 卡
* 拥有 SD 卡读卡器或 USB SD 卡读卡器外设的计算机

**设置：**
1. 将 DSi 中的 SD 卡插入电脑，
2. 将之前创建的打过补丁的 .nds ROM 文件复制到 SD 卡上的任意位置。
3. 取出 SD 卡并将其插回 DSi。
4. 将你的 DSi 开机，启动 Twilight Menu++。
5. 导航到打过补丁的 .nds ROM 文件的位置并运行，然后开始游戏。享受游戏吧！

### 使用烧录卡
**要求：**
* Nintendo DSi 或 DSi LL/XL 主机
* 烧录卡（例如 R4 卡。此外，可能还需要 SD 卡或 microSD 卡来加载内容）

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo DSi 中。启动游戏并享受吧！

</div>

<div class="platform-filtered platform-nintendo_3ds">

## 在 (New) Nintendo 3DS 或 2DS 上玩
在 (New) Nintendo 3DS 或 2DS 上玩游戏可以简单地通过使用烧录卡来完成，也可以将打好补丁的 ROM 放在 SD 卡上，并在系统上使用 Luma3DS。

### 使用 TwilightMenu++
**要求：**
* Nintendo 3DS、3DS LL/XL、2DS、New 3DS、New 3DS LL/XL 或 New 2DS LL/XL 主机
* 系统上已经设置了 Luma3DS 自定义固件和 FBI。如果你之前按照指南在 Nintendo 3DS 上转储了 ROM，你可能已经完成了！
* 容量至少为 2GB 的 SD 卡
* 拥有 SD 卡读卡器或 USB SD 卡读卡器外设的计算机

**设置：**
1. 将 3DS 中的 SD 卡（已通过 Luma3DS 破解）插入计算机
2. 按照本指南使用 FBI 在 3DS 上安装 TWiLightMenu。当它要求你将 .nds ROM 复制到 SD 卡时，将你之前制作的打好补丁的 .nds ROM 文件复制到 /roms/ 文件夹中。
3. 继续按照说明至启动游戏。享受游戏吧！

### 使用烧录卡
**要求：**
* Nintendo 3DS、3DS LL/XL、2DS、New 3DS、New 3DS LL/XL 或 New 2DS LL/XL 主机
* 烧录卡（例如 R4 卡。此外，可能还需要 SD 卡或 microSD 卡来加载内容）

**设置：**
1. 将 SD 卡从烧录卡中取出并插入计算机（如果需要，也可以通过正确的数据线连接）
2. 将之前创建的打好补丁的 .nds ROM 文件复制到 SD 卡中正确的目录里。
3. 移除 SD 卡并插回到烧录卡中，将其插入你的 Nintendo 3DS 中。启动游戏并享受吧！

</div>

<div class="platform-filtered platform-模拟器">

## 在模拟器上游玩

**请选择你想要使用的模拟器类型：**
::guide-platform-filter
---
filters: ['电脑模拟器', '手机模拟器', 'Wii U Virtual Console']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-电脑模拟器">

### 在 Windows、macOS 或 Linux 上模拟
电脑上的 DS 模拟器有几个可选项，但我们推荐 melonDS，因为它的模拟精度和性能较好。

#### melonDS 设置
**要求：**
* Windows、macOS 或 Linux 电脑

**设置：**

只需在项目网站下载对应你的平台（Windows、macOS 或 Linux）的 [melonDS](https://melonds.kuribo64.net/downloads.php)（**v0.9.4+**），并将其保存在电脑易于访问的位置。（如果你需要汉化版，请点击[这里](https://github.com/Wokann/melonDS_CHN)）

**游玩游戏：**

在 melonDS 设置完成后，只需在顶部菜单栏中选择“File”（文件）→“Open ROM”（打开 ROM），然后选择之前打好补丁的 ROM 文件即可玩游戏。

melonDS 具有许多高级功能，例如配置手柄和调整显示设置。你可以查看 [melonDS 的网站](https://melonds.kuribo64.net/)了解更多信息。

#### 其他电脑模拟器
* [DeSmuME](https://desmume.org/)——由于有害的图形和声音模拟问题（后者特别影响过场动画），不推荐使用。
* [No$GBA](https://www.nogba.com/)——由于严重的常见的模拟精度问题，不建议使用。它也很少更新，对用户也不太友好。

</div>

<div class="platform-filtered platform-手机模拟器">

### 在移动设备上模拟

#### 在 iOS / iPadOS / tvOS 上模拟
*注意：你可能会在 iOS 上遇到声音模拟问题，因为 RetroArch 主要支持用于 DS 模拟的 DeSmuME，而 melonDS 核心还不够稳定，无法使用。*

在 iOS 和 Apple TV 设备上进行模拟的最佳选择是使用带有 DeSmuME 模拟核心的 RetroArch。你不需要越狱设备来运行 RetroArch（尽管如果你有越狱设备会更容易）。

有两种方法可以做到这一点。建议使用第一种方法，并使用 Cydia Impactor 将 RetroArch IPA 传输到你的 macOS 设备。对于拥有能够运行 XCode 的现代 Mac 的用户来说，还有一种替代方法，包括使用 XCode 构建 RetroArch 并将其加载到你的设备上，尽管这有点复杂。

**要求：**
* iOS / iPadOS设备（iPhone、iPad、iPod Touch）
* 已安装在 PC / Mac 上的 iTunes，或一台能够运行 XCode 的 Mac

**推荐方法：通过 Cydia Impactor 安装 RetroArch**
1. 遵循[本指南](https://docs.libretro.com/guides/install-ios/)中列出的步骤，通过 Cydia Impactor 在你的非越狱 iOS 设备上安装 RetroArch。
2. 按照指南中的说明，执行“[Content transfer via iTunes](https://docs.libretro.com/guides/install-ios/?device=emu#content-transfer-via-itunes)”（通过 iTunes 传输内容），将已打补丁的 ROM 传输到 RetroArch 内容文件夹。

**仅限 Mac 的方法：通过 XCode 编译 RetroArch 来安装它**
1.遵循[本指南](https://docs.libretro.com/guides/build-ios/)中列出的步骤，在 Mac 上安装 XCode，从源代码克隆 RetroArch 并构建它，然后将其传输到你的设备。
2. 使用 iFunBox 或 iExplorer 等第三方工具将打好补丁的 ROM 转移到你的设备上。如果你在 Apple TV 上运行，你会得到一个 Web URL，可以在本地访问，直接将 ROM 传输到模拟器。

#### 在 Android 上模拟
Android 上最好的 DS 模拟器是 [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic)，它有一个很棒的界面，安装简单，但价格为 4.99 美元 / 38 港币 / 160 新台币 / 6.99 新加坡元。[RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) 是一个免费的替代方案，尽管它附带的 DS 模拟内核是基于 DeSmuME 的，对本游戏来说存在许多模拟问题。

**要求：**
* 带有 Google Play 商店的 Android 设备
* Drastic（4.99 美元）或 RetroArch（免费）

**使用 DraStic 模拟器游玩**

在 Google Play 商店下载 [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic)，并通过 Android 文件管理器将已打补丁的 ROM 文件传输给它。

**使用 RetroArch 模拟器游玩**

在 Google Play 商店下载 [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch)，并通过 Android 文件管理器将已打补丁的 ROM 文件传输给它。

</div>

<div class="platform-filtered platform-wii_u_virtual_console">

### Emulate on Wii U by injecting the Virtual Console
If you own a Wii U console, Nintendo's official Virtual Console DS emulator provides accurate emulation, complemented nicely by the Wii U Gamepad, which works great with the touchscreen used frequently in this game.

To do this, you'll need to homebrew your Wii U, use UWUVCI to convert the ROM into a WUP (Wii U title) and then install it to your system using WUP Installer GX2.

**Requirements:**
* Wii U system with internet access
* SD card with at least 4GB capacity
* Windows PC to run UWUVCI

#### Part 1 - Homebrew your Wii U
1. Follow the steps [on this guide](https://wiiu.hacks.guide/) to install a CFW (Custom Firmware) Wrapper, Tiramisu, onto your system from your SD card via an exploit in the Internet Browser.
2. Continue [following the steps](https://wiiu.hacks.guide/#/tiramisu/finalizing-setup?id=additional-homebrew-apps) to install the Homebrew App Store to your system.
3. Boot into the Homebrew App Store through Tiramisu by launching into Tiramisu on the Health & Safety screen of your console when powering it on.
4. On the Homebrew App Store, navigate to or search for WUP Installer GX2 (it should be near the top). Download and install it to your system, following the on-screen instructions.
5. Once successfully installed, power off your Wii U system and remove the SD card. Re-insert it into your computer.

#### Part 2 - Make ROM into WUP with UWUVCI
1. Ensure your SD Card is back inserted into your computer
2. On your PC, download and install the latest release of [UWUVCI](https://github.com/stuff-by-3-random-dudes/UWUVCI-AIO-WPF/releases/). If you are prompted by Microsoft Defender/Windows StartScreen, click "More Details" and "Run Anyway". The program may take some time to download tools and data.
3. When the program loads up, select the DS icon on the left-hand side of the screen.
4. Select the following options:
    - On the "Base ROM" dropdown, choose "Mario Kart DS (US)" or "Mario Kart DS (EU)" (depending on your region; if you aren't in the US or EU, just pick either one, it doesn't really matter)
    - Click the "Enter CKey" button. Click "Read from otp.bin" and select the otp.bin file on your SD card that you created earlier when installing the Custom Firmware as part of the NAND Dump process. If you don't have this for whatever reason, you'll need to find the Wii U common key and write it in manually instead.
    - Click on the "Enter TKey" button. You will now need to insert the title key for Mario Kart DS for the region you selected. There's no easy way of getting this other than by looking it up online. Make sure you enter the key for the Mario Kart DS region you selected.
    - Click "Choose File" next to "ROM PATH" and choose the patched *The Series of Haruhi Suzumiya* ROM file
    - On the "Icon Image" box, click "Create File". Download [this image](/images/chokuretsu/virtual-console-icon.png) (or use your own) and choose it under "Select File". Feel free to customise the appearance, this is the icon that will appear on your Wii U system menu. Then, click "Finish"
    - On the "TV Image" box, click "Create File", enter the name of the game on the two lines ("The Series of Haruhi", "Suzumiya"), the release year (2009) and the number of players (1). Then select the same file for the icon image (or choose your own!). Then, click "Finish".
    - Enter in the "Game Name" box: `The Series of|Haruhi Suzumiya`
    - You can also optionally choose some other pieces of art that will appear on your Wii U menu when launching the game, such as a splash image and boot sound.
5. When you're done, click "Inject". Your ROM will be injected into a Wii U WUP title.
6. Once done, click "WUP Installable". Wait for it to pack the WUP into the format, then click "Copy to SD". Your WUP file will be copied to the correct directory on your Wii U, so you can add it to your system using WUP Installer GX2.
7. Remove your SD card from your computer and put it back into your Wii U.

#### Part 3 - Install WUP with WUP Installer GX2
1. Power on your Wii U with the SD card re-inserted.
2. Launch WUP Installer GX2 you previously installed through Tiramisu
3. Select the WUP title you created and proceed through WUP Installer GX's on-screen instructions to install the title to your system menu. You can also optionally install WUP Installer GX to your Wii U menu here, too.
4. When the installation has completed, you can launch the game from your system menu.

</div>

::

</div>
