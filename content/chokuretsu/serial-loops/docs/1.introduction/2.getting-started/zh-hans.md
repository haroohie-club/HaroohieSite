---
title: 'Getting Started'
locale: 'zh-hans'
navigation:
  faicon: 'fa6-solid:hands'
  previous: '/chokuretsu/serial-loops/docs/introduction/installation'
  next: '/chokuretsu/serial-loops/docs/introduction/project-workflow'
---

Upon launching Serial Loops for the first time, you may be greeted with a warning stating that it can't find your devkitARM installation.
This is okay! It just means that you installed devkitARM in a location that the program isn't expecting. Determine where your devkitARM installation
is located and save that for a later step.

## The Home Screen and Preferences
Firstly, you'll see the following screen:

![Serial Loops Home Screen](/images/chokuretsu/serial-loops/home-screen.png)

This is the main home screen for Serial Loops. Before you do anything else, we should go to _File_ &rarr; _Preferences_ (or _SerialLoops_ &rarr; _Preferences_ on macOS) or click the "Preferences" link under the Start heading.

![Preferences](/images/chokuretsu/serial-loops/preferences.png)

In this menu, if it's not already set, make sure you set your devkitARM path. Additionally, pick your favorite Nintendo DS emulator and set the path to
it as the Emulator Path.

In this menu, if it's not already set, make sure you set your devkitARM path.
Additionally, pick your favorite Nintendo DS emulator and set the path to it as
the Emulator Path.

* **Use Docker for ASM Hacks** &ndash; Checking this will cause Docker to be used for ASM hacks. If you decided to install Docker rather than make,
  ensure this option is checked.
* **DevkitARM Docker Tag** &ndash; The [tag](https://hub.docker.com/r/devkitpro/devkitarm/tags) of the devkitARM Docker image to use when using Docker
  for assembling ASM hacks. Typically, you should leave this as the default value, unless you know what you're doing and want to use a different version
  of devkitARM.
* **Auto Re-Open Last Project** &ndash; Re-opens the last project on app start, bypassing the home screen.
* **Remember Project Workspace** &ndash; Re-opens all the tabs you had open when you last closed the project on re-open.
* **Remove Missing Projects** &ndash; Will remove missing (i.e. manually deleted) projects from the Recent Projects menu automatically.
* **Check For Updates On Startup** &ndash; Will check GitHub for new releases of Serial Loops on startup. **Highly recommended to leave this option checked.**
* **Use Pre-Release Update Channel** &ndash; Will use our nightly builds as the source for updates. **Highly recommended to leave this option unchecked.**

After you've set your preferences, it's time to create a new project.

## Creating a New Project
To create a new project, click the "New Project" link under the Start heading or go to _File_ &rarr; _New Project_.

![New project menu](/images/chokuretsu/serial-loops/project-creation.png)

Create a name for your new project and select the language it will be in. (Serial Loops doesn't really care much about the language you choose right now
unless you pick Japanese in which case it follows different rules for displaying the font). Finally, select the base ROM for your project and hit create.
Serial Loops will then unpack your ROM and create the directory for your project.

### A Note on Your Base ROM
It is highly recommended to use a translated ROM as your base ROM unless you are planning to make a Japanese-language project, in which case you should use the original ROM. Using the English ROM as a base is a great idea as it gives you access to all the modifications we have already made to make the
game run smoothly in English (or another language that uses a variable-width script) without needing to implement those hacks manually.