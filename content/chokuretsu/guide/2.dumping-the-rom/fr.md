---
title: 'Dumper la ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
---

Pour dumper votre fichier ROM, vous aurez besoin d'une Nintendo DS or 3DS en plus de votre jeu. Certaines méthodes requièrent des périphériques additionnels, comme une carte SD ou un appareil mobile capable de créer un point d'accès sans fil non sécurisé.

---

**Select platform to dump the ROM with:**
::guide-platform-filter
---
filters: ['Nintendo DS', 'Nintendo DSi', 'Nintendo 3DS']
---
<div class="platform-filtered platform-nintendo_ds">

### Dumping with a Nintendo DS or DS lite
There are two ways of dumping the game using a Nintendo DS or Nintendo DS lite system. Both require the use of a Slot-1 (DS cartridge slot) flash cart.

The first method uses a Wi-Fi hack to dump over File Transfer Protocol (FTP). The second method uses a pair of Slot-1 and Slot-2 (GBA cartridge slot) flash carts to dump the ROM directly.

#### Dump over Wi-Fi
**Requirements:**
* Nintendo DS or DS lite console
* *Suzumiya Haruhi no Chokuretsu*
* Slot-1 Flash cartridge (e.g. R4 cartridge. Also, an SD or microSD card to load stuff onto it as required)
* Smartphone, tablet or other device that can create an unsecured or WEP-secured Wi-Fi hotspot
  - Most modern computers aren't able to do this, unfortunately. The best devices for doing this are Android smartphones.
  - Apple and Windows devices (including the iPhone) are not capable of creating insecure or WEP-secured hotspots.
* A computer you can use to [download wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) and connect to said hotspot with
* A DS game with Wi-Fi support. It doesn't matter that the service has ended. Unfortunately, *Suzumiya Haruhi no Chokuretsu* does not have Wi-Fi support.

**Method:**
1. Using your smartphone, tablet or other device that can create a wireless hotspot, make an unsecured (no password) or WEP secured hotspot (must be WEP-secured; WPA and other modern encryption standards are not supported by the DS).
2. On the other computer, [download wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/). Then, connect that computer to the hotspot you just created.
3. Install the wooddumper.nds (not the Slot 2 version) homebrew app onto the right part of your flash cart via the SD card.
4. Insert the Nintendo DS game that has Nintendo Wi-Fi connection support and navigate to the menu that allows you to configure your Wi-Fi connection. Connect to the hotspot you made.
5. Exit the game and remove the cartridge. Now, insert your flash cartridge you just put wooddumper on and navigate to run it on your DS.
6. Follow the on-screen instructions and insert your *Suzumiya Haruhi no Chokuretsu* cart when prompted. Proceed until you are presented with an IP address to connect to using an FTP client.
7. Using an FTP client, such as [net2ftp](https://www.net2ftp.com/), a built-in browser one or another such as [FileZilla](https://filezilla-project.org/), enter the IP address into the relevant field. You do not need to specify a username or password.
8. Copy the .nds ROM file and .txt file to your computer. You can proceed to [patching your ROM](/chokuretsu/guide/patching-the-rom).

#### Dump using dual-slot flash cartridges
**Requirements:**
* Nintendo DS or DS lite console
* *Suzumiya Haruhi no Chokuretsu*
* Slot-1 (DS slot) Flash cartridge (e.g. R4 cartridge)
* Slot-2 (GBA slot) Flash cartridge that is compatible with your Slot-1 cart (e.g. E-Link card)
* SD or microSD cards (or correct connection cables) to load and remove stuff from your flash cartridges, if necessary
* A computer you can use to download wooddumper

**Method:**
1. [Download wooddumper](https://digiex.net/threads/wood-dumper-dump-nintendo-ds-roms-and-save-games-over-wi-fi-with-an-nintendo-ds.14729/) on your computer.
2. Install the wooddumper_slot2.nds homebrew app onto the right part of your Slot-1 flash cart via the SD card.
3. Insert your Slot-1 and Slot-2 flash carts into your DS.
4. Open wooddumper via your flash cart.
5. Follow the on-screen instructions and insert your *Suzumiya Haruhi no Chokuretsu* cart when prompted. Proceed until you see that the dump has completed.
6. Remove your Slot-2 cart and insert the SD card from it into your PC (or in the case of some carts, connect it directly to your PC)
7. Copy the .nds ROM file and .txt file to your computer. You can proceed to [patching your ROM](/chokuretsu/guide/patching-the-rom).

</div>

<div class="platform-filtered platform-nintendo_dsi">

### Dumping with a Nintendo DSi

To dump using a Nintendo DSi, we will need to install a Custom Firmware (CFW) onto the system known as Twilight Menu++ and Unlaunch to let us run Godmode9i, which lets us dump the cartridge to an `.nds` file.

**Requirements:**
* Nintendo DSi or Nintendo DSi XL console
* *Suzumiya Haruhi no Chokuretsu*
* SD card with at least 2GB capacity
* Computer with an SD card reader/USB SD card reader peripheral

**Method:**
::guide-notice
Please take caution following these steps to avoid bricking your system.
::
1. Follow [the steps on dsi.cfw.guide](https://dsi.cfw.guide/launching-the-exploit.html) to install Twilight Menu++ and Unlaunch onto your DSi.
2. [Download GodMode9i](https://github.com/DS-Homebrew/GodMode9i/releases) and extract the file using a utility such as 7Zip on Windows or The UnArchiver on macOS.
3. Remove the SD card from your DSi and insert it into your computer.
4. Place the extracted GodMode9.nds file anywhere on your SD card.
5. Insert the SD card back into your DSi.
6. Insert the *Suzumiya Haruhi no Chokuretsu* game cartridge into your DSi.
7. Launch Twilight Menu++ as you were shown and run GodMode9i.
8. Select the "NDS GAMECARD" option.
9. Press the A Button to select "yes" to dump your cartridge.
10. When complete, you can turn off your DSi and remove the SD card from the system.
11. Insert the SD card back into your computer. Navigate to (SD_CARD_ROOT)/gm9i/out/ on your SD card. Copy the .nds file to your computer.


</div>

<div class="platform-filtered platform-nintendo_3ds">

### Dumping with a Nintendo 3DS

To dump using a Nintendo 3DS or 2DS console, we will need to install a Custom Firmware (CFW) onto the system known as Luma3DS and bootstrap9 to let us run Godmode9, which lets us dump the cartridge to an .nds file.

**Requirements:**
* Nintendo 3DS, 3DS XL, 2DS, New 3DS, New 3DS XL or New 2DS XL console
* *Suzumiya Haruhi no Chokuretsu*
* SD card with at least 2GB capacity
* Computer with SD card reader/USB SD card reader peripheral
  * In some cases, you may need to use a DS or DSi-compatible flash cartridge.

**Method:**
::guide-notice
Please take caution following these steps to avoid bricking your system.
::
* Follow [the steps on 3ds.hacks.guide](https://3ds.hacks.guide/get-started) to install Luma3DS and bootstrap9 onto your 3DS.
* Continue following [the guide to install GodMode9](https://3ds.hacks.guide/finalizing-setup) as well as other prerequisite homebrew software onto your 3DS.
* Power off your console (not just sleep mode, a full power-off)
* Insert the *Suzumiya Haruhi no Chokuretsu* game cartridge into your 3DS.
* Hold the START button and press the Power Button to power on the console. This should launch GodMode9. If it doesn't, power off and try again.
* Use the D-Pad to navigate to `[C:] GAMECART`
* Press the A Button on `[TitleID].nds` to select it. If prompted to choose a dump type, press the A Button again.
* Select Copy to 0:/gm9/out on the lower screen to copy the dump to the SD card.
* When the dump has completed, power off your system and remove the SD card.
* Insert the SD card back into your computer. Navigate to /gm9/out/ on your SD card. Copy the .nds file to your computer.

</div>
::

---

## Before you proceed
You should now have dumped your game to a `.nds` ROM file that you can patch. Move this to somewhere easily accessible.

*ROM dumping information courtesy of [dumping.guide](https://dumping.guide/carts/nintendo/ds), [dsi.cfw.guide](https://dsi.cfw.guide/) & [3ds.hacks.guide](https://3ds.hacks.guide/) contributors.*