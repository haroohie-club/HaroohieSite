---
title: 'Installation'
locale: 'zh-hans'
navigation:
  faicon: 'fa6-solid:box-open'
  previous: '/chokuretsu/serial-loops/docs/introduction'
  next: '/chokuretsu/serial-loops/docs/introduction/getting-started'
---

Serial Loops is available for Windows, macOS, and Linux. You can get the latest release from [here](https://github.com/haroohie-club/SerialLoops/releases/latest).

## Windows
For Windows, we currently only distribute a "portable" style app in a zip file. This means there is no installer;
instead, you simply extract Serial Loops to a folder and begin editing. In the future, we plan to offer a standard
installer experience.

## macOS
For macOS, we provide DMGs for both Intel (x64) and Apple Silicon (ARM) devices. To use these, you simply open the DMG
and drag the application to the Applications folder. However, because we don't codesign Serial Loops, there is one
additional step: you'll need to open your terminal and run the following command:
```
xattr -cr /Applications/SerialLoops.Mac.app
```
This command makes macOS allow the application to be run.

## Linux
* On Debian-based Linux distros (e.g. Debian & Ubuntu), the application can be installed using the Debian package we distribute. Simply run
  `sudo apt -f ./SerialLoops-{version}_amd64.deb` to install it.
* On Red Hat-based Linux distros (e.g. Fedora, RHEL, and CentOS), the application can be installed using the RPM package we distribute. Simply run
  `sudo dnf install ./SerialLoops-{version}1.fc38.x86_64.rpm` to install it.
* For other Linux distros, we distribute portable binaries in a tar.gz file. After extracting the files to a location
  of your preference, make sure you install [OpenAL](https://www.openal.org/) through the appropriate process for your distro.

## General Prerequisites
### devkitARM
Before you run Serial Loops, you'll need to also install **devkitARM**. The devkitPro organization (which distributes devkitARM) has detailed
installation instructions [on their website](https://devkitpro.org/wiki/Getting_Started). When deciding which workloads to install, ensure you at least
install the NDS Development workload, as that's what contains devkitARM.

### Make or Docker
Additionally, to apply ASM hacks, you'll need to install either **Make** or **Docker**. Make is automatically installed when using the Debian and RPM
packages we distribute, so you don't need to worry about this step if you're using either of those.

Currently, the Docker path is **only supported on Windows** due to operating system and framework limitations. It is possible to get Docker running
just fine on Linux distros by running SerialLoops as root (e.g. `sudo SerialLoops`), but it's easier to just use Make. On macOS, there is no known
way of getting the Docker path to work, so you will have to use Make.

* [Make](https://www.gnu.org/software/make/) is the software used to assemble assembly hacks. Installing Make allows you to build the hacks
  directly on your system.
    - To install on Windows, you will have to use a terminal and a package manager. Your options are Winget (installed by default on Win10+) or
      [Chocolatey](https://chocolatey.org/). Open an admin PowerShell or Terminal window (Winkey + X + A) and enter `winget install GnuWin32.make`
      for Winget or `choco install make` for Chocolatey. If using Winget, you will then have to go into system preferences and add Make to the path.
    - Installation on macOS can be done through Xcode or Homebrew. If using Xcode, open a terminal and type `xcode-select --install`. If you would
      rather use Homebrew, open a terminal after installing Homebrew and type `brew install make`.
    - Make comes preinstalled on many Linux distributions. If it is not installed on yours, you will likely be able to install it with your package
      as simply as `[packagemanger] install make` from a terminal.
  
  To test if make is installed properly, type `make --verison` into a terminal and see if it produces the version of make.
* If you would rather not install Make, or if it is not working properly, you can instead run it through a Docker container. To do this, you should
  install [Docker Desktop](https://www.docker.com/products/docker-desktop/) or the Docker Engine. Ensure the Docker engine is running and make sure
  to check the "Use Docker for ASM Hacks" option in Preferences. You may want to occasionally clean up containers created by Serial Loops, as it will
  create many of them.
    - On Windows, though, you will additionally need to install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en/windows/wsl/install).
      From an admin PowerShell or Terminal window (Winkey + X + A), simply type `wsl --install` to install it.

In general, Make is recommended, but it can be more difficult to get working on Windows systems sometimes. In this case, feel free to use Docker.

### A Nintendo DS Emulator
Finally, to be able to test your game, you'll want a Nintendo DS emulator installed. Our team recommends [melonDS](https://melonds.kuribo64.net/).

After you've installed Serial Loops, devkitARM, and either Docker or Make, you're ready to get started!