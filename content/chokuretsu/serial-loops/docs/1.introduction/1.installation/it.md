---
title: 'Installation'
locale: 'it'
navigation:
  faicon: 'fa6-solid:box-open'
  previous: '/chokuretsu/serial-loops/docs/introduction'
  next: '/chokuretsu/serial-loops/docs/introduction/getting-started'
---

Serial Loops è disponibile per Windows, macOS e Linux. Scarica l'ultima versione [qui](https://github.com/haroohie-club/SerialLoops/releases/latest).

## Windows
La versione Windows, al momento, è portatile, il che significa, che non è installabile;
Dovrai estrare i file del programma in una cartella che più ti aggrada. Abbiamo in mente di
rilasciare un installer del programma in futuro.

## macOS
Per macOS, abbiamo delle versioni sia per dispositivi Intel (x64) e Apple Silicon (ARM). Per utilizzarli, apri il DMG
e trascina il programma nella cartella delle applicazioni. Sfortunatamente, Serial Loops non gira nativamente
su questo sistema, quindi dovrai fare un passo aggiuntivo, apri il terminale e digita il seguente comando:
```
xattr -cr /Applications/SerialLoops.Mac.app
```
Questo comando permetterà di far partire il programma senza problemi.

## Linux
* Per le distro basate su Debian (Come debian o Ubuntu) il programma si installa con il pacchetto debian creato da noi. Digita
  `sudo apt -f ./SerialLoops-{version}_amd64.deb` Per installarlo.
* Per le distro Red Hat (Come Fedora o CentOS) il programma si scarica con il pacchetto RPM creato da noi. Digita
  `sudo dnf install ./SerialLoops-{version}1.fc38.x86_64.rpm` per installarlo.
* Per le altre distro, usa i file in estensione tar.gz. Una volta estratti i file
  Assicurati di installare [OpenAL](https://www.openal.org/) per far partire il programma.

## Prerequisiti
### devkitARM
Prima di avviare Serial Loops, dovrai installare **devkitARM**. [La pagina della devkitPro organization](https://devkitpro.org/wiki/Getting_Started) (la quale distribuisce i devkitARM) spiega perfettamente come fare. Assicurati di installare i file di NDS Development workload.

### Make or Docker
Per utilizzare le ASM hacks, dovrai installare entrambi **Make** or **Docker**. Make viene installato automaticamente su le distro Debian e RPM
Quindi, ignora questi passi se ti trovi su uno di quei sistemi.

La versione Docker è **disponibile solo su Windows** per colpa dei limiti dei sistemi operativi. È possibile far partire il Docker
su Linux, avviando il programma dalla root (e.g. `sudo SerialLoops`), ma usare solo Make semplifica di più le cose. Su macOS è
tuttora impossibile far partire il Docker, quindi usa solo Make.

* [Make](https://www.gnu.org/software/make/) is the software used to assemble assembly hacks. Installing Make allows you to build the hacks
  directly on your system.
    - To install on Windows, you will have to use a terminal and a package manager. Your options are Winget (installed by default on Win10+) or
      [Chocolatey](https://chocolatey.org/). Open an admin PowerShell or Terminal window (Winkey + X + A) and enter `winget install GnuWin32.make`
      for Winget or `choco install make` for Chocolatey. If using Winget, you will then have to go into system preferences and add Make to the path.
    - Installation on macOS can be done through Xcode or Homebrew. If using Xcode, open a terminal and type `xcode-select --install`. If you would
      rather use Homebrew, open a terminal after installing Homebrew and type `brew install make`.
    - Make comes preinstalled on many Linux distributions. If it is not installed on yours, you will likely be able to install it with your package
      as simply as `[packagemanger] install make` from a terminal.
  
  To test if make is installed properly, type `make --version` into a terminal and see if it produces the version of make.
* If you would rather not install Make, or if it is not working properly, you can instead run it through a Docker container. To do this, you should
  install [Docker Desktop](https://www.docker.com/products/docker-desktop/) or the Docker Engine. Ensure the Docker engine is running and make sure
  to check the "Use Docker for ASM Hacks" option in Preferences. You may want to occasionally clean up containers created by Serial Loops, as it will
  create many of them.
    - On Windows, though, you will additionally need to install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en/windows/wsl/install).
      From an admin PowerShell or Terminal window (Winkey + X + A), simply type `wsl --install` to install it.

In parole povere, Make è obbligatorio da installare, ma è difficile da usare su Windows. In quel caso, utilizza la versione Docker.

### Un emulatore del Nintendo DS.
Per poter provare le tue modifiche apportate alla ROM, ti servirà un emulatore. Noi ti consigliamo [melonDS](https://melonds.kuribo64.net/).

Una volta che avrai installato tutto, iniziamo a divertirci!