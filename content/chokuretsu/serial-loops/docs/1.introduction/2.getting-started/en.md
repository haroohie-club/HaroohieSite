---
title: 'Getting Started'
navigation:
  faicon: 'fa6-solid:hands'
  previous: '/chokuretsu/serial-loops/docs/introduction/installation'
  next: '/chokuretsu/serial-loops/docs/introduction/project-workflow'
---

Upon launching Serial Loops for the first time, you may be greeted with a warning stating that it can't find your devkitARM installation.
This is okay! It just means that you installed devkitARM in a location that the program wasn't expecting. Determine where your devkitARM installation is located and save that for a later step.

## The Home Screen and Preferences
Firstly, you'll see the following screen:

![Serial Loops Home Screen](/images/chokuretsu/serial-loops/home-screen.png)

This is the main home screen for Serial Loops. Before you do anything else, we should go to _File_ &rarr; _Preferences_ (or _SerialLoops_ &rarr; _Preferences_ on macOS) or click the "Preferences" link under the Start heading.

![Preferences](/images/chokuretsu/serial-loops/preferences.png)

Let's briefly go over the different settings in this menu:

### Serial Loops
* **Language** &ndash; The display language for Serial Loops. Serial Loops is written in English, and the English (United States) version is used as the base for all other languages. If you'd like to contribute to translating Serial Loops, get in touch with us!
* **Display Font** &ndash; The font used by the Serial Loops UI.
* **Check For Updates On Startup** &ndash; Will check GitHub for new releases of Serial Loops on startup. **Highly recommended to leave this option checked.**
* **Use Pre-Release Update Channel** &ndash; Will use our nightly builds as the source for updates. **Highly recommended to leave this option unchecked.**

### Projects
* **Auto Re-Open Last Project** &ndash; Re-opens the last project on app start, bypassing the home screen.
* **Remember Project Workspace** &ndash; Re-opens all the tabs you had open when you last closed the project on re-open.
* **Remove Missing Projects** &ndash; Will remove missing (i.e. manually deleted) projects from the Recent Projects menu automatically.

### Build
* **devkitARM Path** &ndash; The path to your devkitARM installation. By default, Serial Loops looks in `C:\devkitPro\devkitARM` on Windows and `/opt/devkitpro/devkitARM` on macOS and Linux systems. If it can't find it one of those locations, you will need to specify it manually here!
* **Emulator Path** &ndash; The path to the emulator that will be used after clicking "Build & Run". Set this to your favorite Nintendo DS emulator's executable! As stated previously, our team highly recommends using melonDS.
* **Emulator Flatpak** *(Linux Only)* &ndash; On Linux systems, instead of specifying the path to the emulator you can instead specify a flatpak to be launched. Serial Loops will automatically look for installed flatpaks on first startup, but otherwise, simply type the ID of the flatpak to launch here (e.g. `net.kuribo64.melonDS`).
* **Use Docker for ASM Hacks** &ndash; Checking this will cause Docker to be used for ASM hacks. If you decided to install Docker rather than make, ensure this option is checked.
* **devkitARM Docker Tag** &ndash; The [tag](https://hub.docker.com/r/devkitpro/devkitarm/tags) of the devkitARM Docker image to use when using Docker for assembling ASM hacks. Typically, you should leave this as the default value (`latest`), unless you know what you're doing and want to use a different version of devkitARM.

After you've set your preferences, it's time to create a new project.

## Creating a New Project
To create a new project, click the "New Project" link under the Start heading or go to _File_ &rarr; _New Project_.

![New project menu](/images/chokuretsu/serial-loops/project-creation.png)

Create a name for your new project and select your project's language. (This should be the language of the base ROM you are using.) Finally, select the base ROM for your project and hit create.
Serial Loops will then unpack your ROM and create the directory for your project.

### A Note on Your Base ROM
It is highly recommended to use a translated ROM as your base ROM unless you are planning to make a Japanese-language project, in which case you should use the original ROM. Using the English ROM as a base is a great idea as it gives you access to all the modifications we have already made to make the
game run smoothly in English (or another language that uses a variable-width script) without needing to implement those hacks manually.

## Importing a Project
You may also opt to import someone else's exported *.slzip* project instead of creating your own from scratch. To do this, you can click the _Import Project_ link on the home screen or navigate to _File_ &rarr; _Import Project_. The exported project contains the hash of the base ROM that it was built off of; you should use the same base ROM when importing it.