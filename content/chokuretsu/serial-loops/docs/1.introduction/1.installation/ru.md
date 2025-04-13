---
title: 'Установка'
navigation:
  faicon: 'fa6-solid:box-open'
  previous: '/chokuretsu/serial-loops/docs/introduction'
  next: '/chokuretsu/serial-loops/docs/introduction/getting-started'
---

Serial Loops доступен для Windows, macOS и Linux. Вы можете получить последнюю версию [здесь](https://github.com/haroohie-club/SerialLoops/releases/latest).

## Prerequisites
It is recommended that you use a distribution of Serial Loops that automatically installs or comes with the necessary prerequisites. For each platform, these are:

* Linux: Flatpak
* macOS: Installer (also installs devkitARM and Xcode tools for make)
* Windows: Installer (also installs [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) and is bundled with the Docker installer and devkitPro installer for devkitARM)

Using these will ensure Serial Loops is ready to use after installation. However, if you would rather use a portable build on Windows/Linux, please check the information on installing
these prerequisites below.

<details>
    <summary>View prerequisites for non-Flatpak/installer distributions</summary>

### Installing devkitARM
[devkitARM](https://devkitpro.org/wiki/Getting_Started) is required to use Serial Loops on all platforms.

* Using the Windows graphical installer, you can simply select the devkitARM (Nintendo DS) workloads
* On macOS and Linux, run `sudo dkp-pacman -S nds-dev` from the terminal after installing the devkitPro pacman distribution.

### Installing Make or Docker
To assemble ASM hacks you want to apply, you will need to decide whether to use Make or Docker. Make is automatically installed when using the Debian and RPM
packages we distribute, so you don't need to worry about this step if you're using either of those.

В настоящее время путь Docker **поддерживается только в Windows** из-за ограничений операционной системы и платформы. Docker можно запустить 
в дистрибутивах Linux, если запустить SerialLoops от имени пользователя с root правами (например, `sudo SerialLoops`), но проще просто использовать Make. В macOS неизвестно
как заставить Docker работать, поэтому вам придётся использовать Make.

* [Make](https://www.gnu.org/software/make/) is the software used to assemble assembly hacks. Installing Make allows you to build the hacks
  directly on your system.
    - To install on Windows, you will have to use a terminal and a package manager. Your options are Winget (installed by default on Win10+) or
      [Chocolatey](https://chocolatey.org/). Open an admin PowerShell or Terminal window (Winkey + X + A) and enter `winget install GnuWin32.make`
      for Winget or `choco install make` for Chocolatey. If using Winget, you will then have to go into system preferences and add Make to the path.
    - Installation on macOS can be done through Xcode or Homebrew. If using Xcode, open a terminal and type `xcode-select --install`. If you would
      rather use Homebrew, open a terminal after installing Homebrew and type `brew install make`.
    - Make comes preinstalled on many Linux distributions, and if you're using the Debian or RPM package, it was definitely installed when you installed
      Serial Loops. If you're using the tar.gz it is not installed on yours, you will likely be able to install it as simply as
      `[packagemanger] install make` from a terminal.

  To test if make is installed properly, type `make --verison` into a terminal and see if it produces the version of make.
* If you would rather not install Make, or if it is not working properly, you can instead run it through a Docker container. To do this, you should
  install [Docker Desktop](https://www.docker.com/products/docker-desktop/) or the Docker Engine. Ensure the Docker engine is running and make sure
  to check the "Use Docker for ASM Hacks" option in Preferences. You may want to occasionally clean up containers created by Serial Loops, as it will
  create many of them.
    - On Windows, you will additionally need to install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install).
      From an admin PowerShell or Terminal window (Winkey + X + A), simply type `wsl --install` to install it.

### Installing SDL2 (Linux)
If you're running on Linux and _not using one of the package releases_ (the Flatpak, `.deb`, or `.rpm`), you will also need to install SDL2 which is used for audio processing.

</details>

### Running the installer on macOS
Because we do not sign our installer, macOS will by default prevent you from running it. In order to give macOS explicit approval to run the file, you will need to open a terminal and run `xattr -cr ~/Downloads/[name_of_installer].pkg`, replacing `[name_of_installer]` with the name of the installer file you downloaded. Every release has the specific command you need to run.

### A Nintendo DS Emulator
To test the game easily, you will want to have a Nintendo DS emulator installed. We recommend using [melonDS](https://melonds.kuribo64.net/) for its accuracy.

On Linux, you can install the official [melonDS Flatpak from Flathub](https://flathub.org/apps/net.kuribo64.melonDS) to use as your emulator. We recommend installing it from the [flathub-beta](https://docs.flathub.org/docs/for-users/installation/#flathub-beta-repository) repository as that is where the most up-to-date versions tend to be pushed.

## Download & Install
Once you have installed any necessary prerequisites, to install Serial Loops, download the latest release for your platform from the [Releases tab](https://github.com/haroohie-club/SerialLoops/releases).
