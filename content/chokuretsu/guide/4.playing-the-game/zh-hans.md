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

## Play on Nintendo DS
Playing on the Nintendo DS is as simple as placing the patched ROM onto a flash cartridge and running the game. You probably already have the cartridge if you followed the setup instructions earlier.

**Requirements:**
* Nintendo DS or DS lite console
* Flash cartridge (e.g. R4 cartridge. Also, an SD or microSD card to load stuff onto it as required)

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct cable if required)
2. Drag over the patched .nds ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo DS. Fire up the game and enjoy!

</div>

<div class="platform-filtered platform-nintendo_dsi">

## Play on Nintendo DSi
Playing on the Nintendo DSi can either be done simply through the use of a flash cartridge, or putting the patched rom onto a SD card and making use of Twilight Menu++ on your system

### Using TWiLightMenu (nds-bootstrap)
::iconified-text
---
icon: fa6-solid:circle-info
unwrap: true
---
If you're using **TWiLightMenu** (aka nds-bootstrap), please be sure to launch the game in DSi Mode.
::

**Requirements:**
* Nintendo DSi or DSi XL console
* TwilightMenu++ custom firmware [setup on your system](https://dsi.cfw.guide/). If you followed the guide to dumping your ROM on Nintendo DSi earlier, you've probably already done this!
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**Setup:**
1. Insert your SD card from your DSi into your computer
2. Drag over the patched .nds ROM file you previously created into anywhere on the SD card.
3. Remove your SD card and insert it back into your DSi.
4. Power on your DSi and launch Twilight Menu++.
5. Navigate to and run the patched ROM .nds you copied into your SD card and start the game. Enjoy!

### Using a flash cartridge
**Requirements:**
* Nintendo DSi or DSi XL console
* Flash cartridge (e.g. R4 cartridge. Also, an SD or microSD card to load stuff onto it as required)

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct adapter if required).
2. Drag over the patched ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo DSi. Fire up the game and enjoy!

</div>

<div class="platform-filtered platform-nintendo_3ds">

## Play on (New) Nintendo 3DS or 2DS
Playing on a (New) Nintendo 3DS or 2DS can either be done simply through the use of a flash cartridge, or putting the patched rom onto a SD card and making use of Luma3DS on your system

### Using TwilightMenu++
**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* Luma3DS custom firmware setup on your system and FBI. If you followed the guide to dumping your ROM on Nintendo 3DS earlier, you've probably already done this!
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**Setup:**
1. Insert your SD card from your 3DS (hacked with Luma3DS) into your computer
2. Follow this guide to install TWiLightMenu on your 3DS using FBI. During the part where it asks you to drag over your .nds ROMS, drag your patched ROM .nds file you made earlier into the /roms/ folder.
3. Continue following the instructions through to launching the game. Enjoy!

### Using a flash cartridge
**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* Flash cartridge (e.g. R4 cartridge. Also, an SD or microSD card to load stuff onto it as required)

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct adapter if required).
2. Drag over the patched ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo 3DS. Fire up the game and enjoy!

</div>

<div class="platform-filtered platform-emulator">

## Play on Emulators

**请选择你想要使用的模拟器类型：**
::guide-platform-filter
---
filters: ['电脑模拟器', '手机模拟器', 'Wii U Virtual Console']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-电脑模拟器">

### Emulate on Windows, macOS, or Linux
There are a few options for PC DS emulators, but the one we recommend is melonDS for its emulation accuracy and performance.

#### melonDS setup
**Requirements:**
* Windows, macOS or Linux computer

**Setup:**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v0.9.4+**) from the project website for your platform (Windows, macOS, Linux) and save it somewhere easily accessible to your computer.

**Playing the game:**

With melonDS setup, all you need to do in order to play the game is select "File"  "Open ROM" in the top menu bar and choose the ROM file you patched earlier.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS Website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://desmume.org/)－Not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects cutscenes).
* [No$GBA](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-手机模拟器">

### Emulate on mobile devices

#### Emulate on iOS / iPadOS / tvOS
*Note: You may experience issues with sound emulation on iOS as RetroArch primarily supports DeSmuME for DS emulation and the MelonDS core is not yet stable enough to use.*

The best option for emulating on iOS and Apple TV devices is using RetroArch using the DeSmuME emulation core. You don't need a jailbroken device to run RetroArch (although it is easier if you have one)

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php)
(**v0.9.4+**) from the project website for your platform (Windows, macOS, Linux)
and save it somewhere easily accessible to your computer.

**Requirements:**
* iOS / iPadOS Device (iPhone, iPad, iPod Touch)
* iTunes installed on a PC/Mac OR A Mac capable of running XCode

**Recommended method: Install RetroArch through Cydia Impactor**
1. Follow the steps listed in [this guide](https://docs.libretro.com/guides/install-ios/) to install the RetroArch on your non-Jailbreak iOS device through Cydia Impactor.
2. Follow the guide's instructions on performing a ["Content transfer via iTunes"](https://docs.libretro.com/guides/install-ios/?device=emu#content-transfer-via-itunes) to transfer your patched ROM to the RetroArch content folder

**Mac Only Method: Install RetroArch by compiling it with XCode**
1. Follow the steps listed in [this guide](https://docs.libretro.com/guides/build-ios/) to install XCode on your Mac, clone RetroArch from source and build it, then transfer it to your device.
2. Transfer the patched ROM over to your device using a third party tool such as iFunBox or iExplorer. If you're running on an Apple TV, you'll be given a Web URL you can access locally to transfer ROMs to the emulator directly.

#### Emulate on Android
The best DS emulator on Android is [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic), which has a great interface and is simple to install, but it costs $4.99. [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) is a free alternative, although it comes with the caveat of the DS emulation being based on DeSmuME, which has a number of emulation issues with this game.

**Requirements:**
* Android Device with the Google Play store
* Drastic ($4.99) or RetroArch (free)

**Play using DraStic Emulator**

Download [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**Play using RetroArch Emulator**

Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

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
