---
title: 'Installation'
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

* [Make](https://www.gnu.org/software/make/) è il programma che viene usato per costruire le assembly hacks. Ti permetterà di costruire le
   hack direttamente sul tuo sistema.
    - Per installare il programma su Windows, dovrai usare il terminale ed un package manager. Puoi installare un Winget (da Windows 10 in su) oppure
      [Chocolatey](https://chocolatey.org/). Come amministratore apri Powershell o il terminale (Winkey + X + A) e digita `winget install GnuWin32.make`
      per la Winget oppure `choco install make` per la Chocolatey. Se usi il Winget, dovrai accedere su preferenze di sistema e aggiungere Make.
    - Per installare su macOS si può fare con Xcode oppure Homebrew. Se usi XCode, apri il terminale e digita `xcode-select --install`. Se userai
      Homebrew, apri il terminale dopo aver installato Homebrew e digita `brew install make`.
    - Make è preinstallato su quasi tutte le distro di Linux. Se non c'è l'hai, puoi installarlo grazie al nostro package
      semplicemente digitando `[packagemanger] install make` dal terminale.
  
  Per vedere se il programma si è installato correttamente, digita `make --version`nel terminale.
* Se non installare Make oppure non funziona correttamente, puoi utilizzare Docker container. Per fare ciò, dovrai
     Installare [Docker Desktop](https://www.docker.com/products/docker-desktop/) o il Docker Engine.Assicurati che il programma funzioni e sicurati di
     attivare l'impostazione "Use Docker for ASM Hacks". Assicurati di cancellare i tanti container che andrà a creare il programma.
    - Su Windows, qua dovrai ti servirà, in aggiunta [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en/windows/wsl/install).

          Una volta fatto, come amministratore, su Powershell o sul terminale (tasto WIN + X + A) digita `wsl --install` per ultimare l'installazione.

In parole povere, Make è obbligatorio da installare, ma è difficile da usare su Windows. In quel caso, utilizza la versione Docker.

### Un emulatore del Nintendo DS.
Per poter provare le tue modifiche apportate alla ROM, ti servirà un emulatore. Noi ti consigliamo [melonDS](https://melonds.kuribo64.net/).

Una volta che avrai installato tutto, iniziamo a divertirci!