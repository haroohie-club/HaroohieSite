---
title: 'Playing the game'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
---

Now that you've got the patched ROM file, it's time to get ready to start playing!

---

**Select the platform you want to play on:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS', 'Emulator']
---

<div class="platform-filtered platform-nintendo_ds">

## Play on Nintendo DS
Playing on the Nintendo DS is as simple as placing the patched ROM onto a flash cartridge and running the game. You probably already have the cartridge if you followed the setup instructions earlier.

**Requirements:**
* Nintendo DS or DS lite console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct cable if required)
2. Drag over the patched .nds ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo DS. Fire up the game and enjoy!

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

**Setup:**
1. Insert your SD card from your DSi into your computer
2. Drag over the patched .nds ROM file you previously created into anywhere on the SD card.
3. Remove your SD card and insert it back into your DSi.
4. Power on your DSi and launch Twilight Menu++.
5. Navigate to and run the patched ROM .nds you copied into your SD card and start the game. Enjoy!

### Using a flash cartridge
**Requirements:**
* Nintendo DSi or DSi XL console
* Flash cartridge (e.g. R4 cartridge)
* An SD or microSD card as required by your flash cartridge
* Computer with an SD card reader/USB SD card reader peripheral

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct adapter if required).
2. Drag over the patched ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo DSi. Fire up the game and enjoy!

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

**Setup:**
1. Insert your SD card from your 3DS (hacked with Luma3DS) into your computer
2. Follow this guide to install TWiLightMenu on your 3DS using FBI. During the part where it asks you to drag over your .nds ROMS, drag your patched ROM .nds file you made earlier into the /roms/ folder.
3. Continue following the instructions through to launching the game. Enjoy!

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

**Setup:**
1. Insert your SD card from your flash cartridge into your computer (or connect it through the correct adapter if required).
2. Drag over the patched ROM file you previously created into the correct directory on the flash cart's storage.
3. Disconnect the flash cartridge and insert it into your Nintendo 3DS. Fire up the game and enjoy!

</div>

<div class="platform-filtered platform-emulator">

## Play on Emulators

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Mobile Emulator']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-pc_emulator">

### Emulate on Windows, macOS, or Linux
There are a few options for PC DS emulators, but the one we recommend is melonDS for its emulation accuracy and performance.

#### melonDS setup
**Requirements:**
* Windows, macOS or Linux computer

**Setup:**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v1.0.0+**) from the project website for your platform (Windows, macOS, or Linux) and save it somewhere easily accessible to your computer. (If you are using macOS, consider placing the melonDS.app folder in your /Applications directory for ease of access.)

If you're running Linux, we also recommend the [official Flatpak](https://flathub.org/apps/net.kuribo64.melonDS) provided on Flathub. The stable release can sometimes lag behind the official one, so consider installing it from the [flathub-beta](https://docs.flathub.org/docs/for-users/installation/#flathub-beta-repository) repository.

**Playing the game:**

With melonDS setup, all you need to do in order to play the game is select "File" &rarr; "Open ROM" in the top menu bar and choose the ROM file you patched earlier. You can also simply drag and drop the ROM file directly on the opened emulator, or associate `.nds` files with melonDS to open them via double clicking.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://github.com/TASEmulators/desmume)－The commonly-used older version of DeSMuME is not recommended due to detrimental graphical and sound emulation issues (the latter of which particularly affects voiced lines). However, the latest release seems to run the game fine so long as the software renderer is used for graphics. That being said, melonDS is still recommended over this emulator for its superior accuracy, and especially for Linux where the functionality is much more limited.
* [no$gba](https://www.nogba.com/)－Not recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-mobile_emulator">

### Emulate on mobile devices

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

**Play using DraStic Emulator**

Download [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**Play using melonDS Android Emulator**

Download [melonDS Android](https://play.google.com/store/apps/details?id=me.magnum.melonds) off the Google Play Store and transfer the patched ROM file over to it via the Android file picker.

**Play using RetroArch Emulator**

1. Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store and launch it.
  - If you get an error at this step saying that your version of Android is too new to support RetroArch, you will have to download the apk manually from their site. To do this, [go to their downloads page](https://retroarch.com/?page=platforms) and scroll to the "Android" section. Below "Google Play" and "F-Droid", click "Download" to download the apk and then attempt to launch it. You will have to set several permissions in order to install the apk from an "untrusted source" &ndash; enable these settings by following the instructions on your screen and then launch the apk again to install it to your phone.
  - You might also consider downloading one of the nightly builds to get a more up-to-date version of the app.
2. Select "Load Core" and then "Download a Core", then select the "Nintendo DS - melonDS DS" core from the list to download it.
3. Go back, and then hit "Load Content" and select your patched ROM file through the RetroArch file picker.

</div>

::

</div>
