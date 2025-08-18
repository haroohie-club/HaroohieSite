---
title: 'Installation'
navigation:
  faicon: 'fa6-solid:box-open'
  previous: '/chokuretsu/serial-loops/docs/introduction'
  next: '/chokuretsu/serial-loops/docs/introduction/getting-started'
---

Serial Loops is available for Windows, macOS, and Linux. You can get the latest release from [here](https://github.com/haroohie-club/SerialLoops/releases/latest).

## Prerequisites
It is recommended that you use a distribution of Serial Loops that automatically installs or comes with the necessary prerequisites. For each platform, these are:

* Linux: [Flatpak from Flathub](https://flathub.org/apps/club.haroohie.SerialLoops)
  - The AppImage, deb, and rpm packages are also easy to use, but if you're not sure which to choose, go with the Flatpak
* macOS: Installer
* Windows: Installer

Using these will ensure Serial Loops is ready to use after installation. However, if you would rather use a portable build on Windows/Linux, please check the information on installing these prerequisites in the next section.

#### Dependencies for Non-Packages Releases
If you opt to use one of the non-packaged releases on Windows or Linux, you will need to install a few dependencies. These are:

* Clang and LLD from [LLVM](http://llvm.org) (on Windows, it's best to just use the LLVM installer as it will install both of these; on Linux, you can opt to install just the `clang`, `lld`, and possibly `llvm` packages from your package manager)
* [Ninja](https://ninja-build.org)
* On Linux, you will also need SDL2

#### A Nintendo DS Emulator
To test the game easily, you will want to have a Nintendo DS emulator installed. We recommend using [melonDS](https://melonds.kuribo64.net/) for its accuracy. If you are using the Flatpak release, melonDS comes pre-packaged with it.

For non-Flatpak Linux releases, you can also install the official [melonDS Flatpak from Flathub](https://flathub.org/apps/net.kuribo64.melonDS) to use as your emulator.

### Running the installer on macOS
Because we do not sign our installer, macOS will by default prevent you from running it. In order to give macOS explicit approval to run the file, you will need to open a terminal and run `xattr -cr ~/Downloads/[name_of_installer].pkg`, replacing `[name_of_installer]` with the name of the installer file you downloaded. Every release has the specific command you need to run.

## Download & Install
Once you have installed any necessary prerequisites, to install Serial Loops, download the latest release for your platform from the [Releases tab](https://github.com/haroohie-club/SerialLoops/releases).
