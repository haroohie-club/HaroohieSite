---
title: 'Dumping the ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
---

要转储 ROM 文件，除了需要一份游戏外，你还需要一台 Nintendo DS 或 3DS 主机。有些方法需要额外的设备，例如 SD 卡或能够设置不安全热点的移动设备。

---

**请选择要用于转储 ROM 的平台：**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS']
---
<div class="platform-filtered platform-nintendo_ds">

### 使用 Nintendo DS or DS Lite 转储
有两种方法可以使用 Nintendo DS 或 Nintendo DS Lite 主机转储游戏。这两种方法都需要使用 Slot-1（DS 卡带的插槽）烧录卡。

第一种方法使用 Wi-Fi 破解，通过文件传输协议（FTP）进行转储。第二种方法使用一对 Solt-1 和 Slot-2（GBA 卡带的插槽）烧录卡直接转储 ROM。

#### 通过 Wi-Fi 转储
**要求：**
* Nintendo DS 或 DS Lite 主机
* 《凉宫春日的串联》
* Slot-1 烧录卡带（例如：R4 卡。此外，烧录卡还需要一张 SD 卡或 microSD 卡以加载内容）
* 智能手机、平板电脑或其他可以创建不安全或 WEP 协议 Wi-Fi 热点的设备
  - 不幸的是，大多数现代计算机无法做到这一点。最好的设备是 Android 智能手机。
  - 苹果和 Windows 设备（包括 iPhone）无法创建不安全或 WEP 协议的热点。
* 一台可以用来[下载 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) 的电脑，并将其连接到所述热点
* 支持 Wi-Fi 的 DS 游戏。服务已经结束，但这并不重要。不幸的是，《凉宫春日的串联》不支持 Wi-Fi。

**方法：**
1. 使用智能手机、平板电脑或其他可以创建无线热点的设备，创建不安全（无密码）或 WEP 协议的热点（必须是 WEP 协议；DS 不支持 WPA 和其他现代加密标准）。
2. 在另一台电脑上，[下载 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/)。然后，将这台电脑连接到你刚刚创建的热点。
3. 将 wooddumper.nds（不是 Slot-2 版本）自制软件安装到烧录卡的 SD 卡的正确位置。
4. 插入支持任天堂 Wi-Fi 连接的 Nintendo DS 游戏，并进入配置 Wi-Fi 连接的菜单。连接到刚刚创建的热点。
5. 退出游戏并取出卡带。现在，插入你刚刚安装的了 wooddumper 的烧录卡，然后在 Nintendo DS 上找到并运行它。
6. 按照屏幕上的说明进行操作，并在提示时插入《凉宫春日的串联》卡带。继续操作，直到软件显示需要通过 FTP 客户端连接到的 IP 地址为止。
7. 使用 FTP 客户端，如 [net2ftp](https://www.net2ftp.com/)、浏览器内置方式或其他软件（例如 [FileZilla](https://filezilla-project.org/)），在相关输入框中输入 IP 地址。不需要指定用户名或密码。
8. 将 .nds ROM 文件和 .txt 文件复制到电脑上。接下来可以跳转到[给 ROM 打补丁](/zh-hans/chokuretsu/guide/patching the ROM)。

#### 使用双插槽烧录卡转储
**要求：**
* Nintendo DS 或 DS Lite 主机
* 《凉宫春日的串联》
* Slot-1（DS 插槽）烧录卡（例如 R4 卡）
* Slot-2（GBA插槽）烧录卡，需要与 Slote-1 卡兼容（例如 e-Link 卡）
* SD 或 microSD 卡（或正确的数据线），以便在必要时从烧录卡中加载或删除文件
* 一台可以用来下载 wooddumper 的电脑

**方法：**
1. [将 wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) 下载到电脑上。
2. 将 wooddumper_slot2.nds 自制软件安装到 Slot-1 烧录卡的 SD 卡的正确位置。
3. 将 Slot-1 和 Slot-2 烧录卡插入 DS。
4. 通过烧录卡打开 wooddumper。
5. 按照屏幕上的说明操作，并在提示时插入《凉宫春日的串联》卡带。继续操作，直到软件显示转储已完成。
6. 取出 Slote-2 烧录卡，将烧录卡中的 SD 卡插入到电脑（对于某些烧录卡，请将其直接连接到电脑）
7. 将 .nds ROM 文件和 .txt 文件复制到电脑上。接下来可以跳转到[给 ROM 打补丁](/zh-hans/chokuretsu/guide/patching the ROM)。

</div>

<div class="platform-filtered platform-nintendo_dsi">

### 使用 Nintendo DSi 转储

要使用 Nintendo DSi 进行转储，需要在主机上安装被称为 Twilight Menu++ 和 Unlaunch 的自制固件（CFW），以便运行 Godmode9i，从而将卡带转储到 `.nds` 文件中。

**要求：**
* Nintendo DSi 或 Nintendo DSi LL/XL 主机
* 《凉宫春日的串联》
* 容量至少为 2GB 的 SD 卡
* 拥有 SD 卡读卡器或 USB SD 卡读卡器外设的计算机

**方法：**
::guide-notice
请按照以下步骤谨慎操作，以避免使主机变砖。
::
1. 遵循 [dsi.cfw.guide 上的步骤](https://dsi.cfw.guide/zh_CN/launching-the-exploit.html)，将 Twilight Menu++ 和 Unlaunch 安装到 DSi 上。
2. [下载 GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) 并使用解压软件（例如 Windows 上的 7Zip 或 macOS 上的 UnArchiver）提取文件。
3. 从 DSi 中取出 SD 卡，然后将其插入计算机。
4. 将提取的 GodMode9.nds 文件放在 SD 卡上的任意位置。
5. 将 SD 卡插回 DSi。
6. 将《凉宫春日的串联》游戏卡带插入 DSi。
7. 启动 Twilight Menu++ 并运行 GodMode9i。
8. 选择“NDS GAMECARD”选项。
9. 按下 A 按钮选择“Yes”以转储卡带。
10. 完成后，你可以关闭 DSi 并从主机中取出 SD 卡。
11. 将 SD 卡插回电脑。导航到 SD 卡上的 (根目录)/gm9i/out/。将 .nds 文件复制到电脑上。


</div>

<div class="platform-filtered platform-nintendo_3ds">

### 使用 Nintendo 3DS 转储

要使用 Nintendo 3DS 或 2DS 主机进行转储，需要在系统上安装名为 Luma3DS 和 bootstrap9 的自定义固件（CFW），以便运行 Godmode9，从而将卡带转储到 .nds 文件中。

**要求：**
* Nintendo 3DS、3DS LL/XL、2DS、New 3DS、New 3DS LL/XL 或 New 2DS LL/XL 主机
* 《凉宫春日的串联》
* 容量至少为 2GB 的 SD 卡
* 拥有 SD 卡读卡器或 USB SD 卡读卡器外设的计算机
  * 在某些情况下，你可能需要使用兼容 DS 或 DSi 的烧录卡。

**方法：**
::guide-notice
请按照以下步骤谨慎操作，以避免使主机变砖。
::
* 遵循 [3ds.hacks.guide 上的步骤](https://3ds.hacks.guide/zh_CN/get-started.html)，将 Luma3DS 和 bootstrap9 安装到 3DS 上。
* 继续遵循[安装 GodMode9 的指南](https://3ds.hacks.guide/zh_CN/finalizing-setup.html)，并将其他必备的自制软件安装到 3DS 上。
* 关闭主机电源（不是进入睡眠模式，而是完全关闭电源）。
* 将《凉宫春日的串联》游戏卡带插入 3DS。
* 按住 START 键，然后按下电源键打开主机。这应该会启动 GodMode9。如果没有，请关闭电源，然后重试。
* 使用方向键导航到 `[C:]GAMECART`。
* 在 `[TitleID].nds` 上按下 A 键进行选择。如果提示选择转储类型，请再次按 A 键。
* 在下屏幕选择“Copy to 0:/gm9/out”将其转储到SD卡。
* 转储完成后，关闭主机电源并取下 SD 卡。
* 将 SD 卡插回电脑。进入 SD 卡上的 /gm9/out/ 文件夹。将 .nds 文件复制到电脑上。

</div>
::

---

## 在继续之前
你现在应该已经将游戏转储到可以用于打补丁的 `.nds` ROM 文件中。将其移动到易于访问的位置。

*ROM 转储信息由 [dumping.guide](https://dumping.guide/carts/nintendo/ds)、[dsi.cfw.guide](https://dsi.cfw.guide/) 以及 [3ds.hacks.guide](https://3ds.hacks.guide/) 的贡献者提供。*