---
title: 'Playing the game'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
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
1. 遵循[本指南](https://docs.libretro.com/guides/build-ios/)中列出的步骤，在 Mac 上安装 XCode，从源代码克隆 RetroArch 并构建它，然后将其传输到你的设备。
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

### 通过注入 Virtual Console 在 Wii U 上进行模拟
如果你拥有一台 Wii U 游戏机，任天堂的官方 Vitrual Console DS 模拟器可以提供准确的模拟，Wii U Gamepad 也很好地补充了这一点，它与本游戏中经常使用的触摸屏配合得很好。

要做到这一点，你需要破解你的 Wii U，使用 UWUVCI 将 ROM 转换为 WUP（Wii U 游戏），然后使用 WUP Installer GX2 将其安装到你的系统中。

**要求：**
* Wii U 系统，可上网
* 至少 4GB 容量的 SD 卡
* 运行 UWUVCI 的 Windows 电脑

#### 第 1 部分：破解你的 Wii U
1. 遵循[本指南中](https://wiiu.hacks.guide/) 的步骤，通过互联网浏览器中的漏洞，从 SD 卡将 CFW（自定义固件）包 Tiramisu 安装到你的系统上。
2. 继续[按照步骤](https://wiiu.hacks.guide/#/zh_CN/tiramisu/finalizing-setup?id=additional-homebrew-apps)将 Homebre App Store 安装到你的系统上。
3. 开机，当主机显示健康与安全屏幕时启动 Tiramisu，然后通过 Tiramisu 启动 Homebrew App Store。
4. 在 Homebrew App Store 上，导航到或搜索 WUP Installer GX2（它应该在顶部附近）。按照屏幕上的说明下载并将其安装到你的系统上。
5. 成功安装后，关闭 Wii U 系统电源并取出 SD 卡。将其重新插入电脑。

#### 第 2 部分：使用 UWUVCI 将 ROM 制作成 WUP
1. 确保你的 SD 卡已重新插入电脑
2. 在你的电脑上，下载并安装最新版本的 [UUVCI](https://github.com/stuff-by-3-random-dudes/UWUVCI-AIO-WPF/releases/)。如果 Microsoft Defender / Windows StartScreen 显示提示，请点击“更多详细信息”和“无论如何运行”。该程序可能需要一些时间来下载工具和数据。
3. 当程序加载时，选择屏幕左侧的 DS 图标。
4. 选择以下选项：
    - 在“Base ROM”（基本 ROM）下拉列表中，选择“Mario Kart DS (US)”（马力欧卡丁车 DS 美版）或“Mario Kart DS (EU)”（马力欧卡丁车 DS 欧版）（取决于主机所在的区域；如果区域不是美国或欧洲，只需选择其中一个，这并不重要）。
    - 点击“Enter CKey”（输入 CKey）按钮。单击“Read from otp.bin”（从otp.bin读取），然后选择 SD 卡上的 otp.bin 文件，该文件是安装自定义固件时作为 NAND 转储过程的一部分创建的。如果你因为某些原因没有这个文件，你需要找到 Wii U 通用密钥，然后手动写入。
    - 点击“Enter TKey”（输入 TKey）按钮。现在，你需要输入你选择的区域的《马力欧卡丁车 DS》的 title key。除了在网上查找外，没有什么简单的方法可以得到它。请确保输入了所选区域的《马力欧卡丁车 DS》的 title key。
    - 点击“ROM PATH”（ROM 路径）旁边的“Choose File”（选择文件），然后选择已打补丁的《凉宫春日的串联》ROM 文件。
    - 在“Icon Image”（图标图像）框中，点击“Create File”（创建文件）。下载[此图像](/images/chokuretsu/virtual-console-icon.png)（或使用你自制的），并通过“Select File”（选择文件）选择它。请随意定制外观，这是将出现在 Wii U 系统菜单上的图标。然后，点击“Finish”（完成）。
    - 在“TV Image”（电视图像）框中，点击“Create File”（创建文件），输入游戏名称（“凉宫春日的串联”）、发布年份（2009 年）和玩家数量（1）。然后为图标图像选择相同的文件（或者选择你自己的！）。然后，点击“Finish”（完成）。
    - 在“Game Name”（游戏名称）框中输入：`凉宫春日的串联`
    - 你还可以向启动游戏时出现在 Wii U 菜单上的界面添加其他一些艺术作品，例如启动图像和启动声音。
5. 完成后，点击“Inject”（注入）。你的 ROM 将被注入到 Wii U WUP 游戏中。
6. 完成后，点击“WUP Installable”（WUP 可安装）。等待它打包为 WUP 格式，然后点击“Copy to SD”（复制到 SD 卡）。你的 WUP 文件将被复制到 Wii U 上正确的目录中，因此你可以使用 WUP Installer GX2 将其添加到系统中。
7. 从电脑中取出 SD 卡，然后将其放回 Wii U 中。

#### 第 3 部分：使用 WUP Installer GX2 安装 WUP
1. 重新插入 SD 卡，打开 Wii U 电源。
2. 启动之前通过 Tiramisu 安装的 WUP Installer GX2。
3. 选择你创建的 WUP 游戏，然后继续执行 WUP Installer GX2 的屏幕说明，将游戏安装到系统菜单中。你也可以选择在 Wii U 菜单中安装 WUP Installer GX2。
4. 安装完成后，你可以从系统菜单启动游戏。

</div>

::

</div>
