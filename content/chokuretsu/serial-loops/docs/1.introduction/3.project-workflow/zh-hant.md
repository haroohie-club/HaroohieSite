---
title: 'Project Workflow'
navigation:
  faicon: 'fa6-solid:folder-tree'
  previous: '/chokuretsu/serial-loops/docs/introduction/getting-started'
  next: '/chokuretsu/serial-loops/docs/scripts'
---

![Project workflow](/images/chokuretsu/serial-loops/project-workflow.png)

![Project workflow](/images/chokuretsu/serial-loops/project-workflow.png)

On the left is the **items panel**. It contains an organized tree of all the items available for editing in the game. Above the items panel is the **quick search bar**, letting you quickly search for items by name. To the right of the items panel is the **editors panel**. This is where the editors for the various items will appear when you open them.

## Finding Items to Edit
While navigating the items panel and filtering by name through quick search is perfectly adequate for browsing, Chokuretsu has a _lot_ of items. To carry out a more advanced search using filters, you can use the _Search_ function (Ctrl/Command-F) to find an item, filtering by type and searching more advanced metadata (albeit more complex queries may take some time to process).

![Item search](/images/chokuretsu/serial-loops/item-search.png)

### Renaming Items
Items in Serial Loops can be renamed, which lets you provide a more sensible name based on the changes you have made to that item. To rename an item, select the item in the item explorer panel on the left-hand side and press F2. Simply type a new name for the item and then press enter for the new name to take effect.

![Item renaming](/images/chokuretsu/serial-loops/item-renaming.png)

### Item References
If you want to see where a particular item is used in the game, an easy way to do that is to right-click it and select "Find References." This will show you what other items reference the selected item.

## Save, Build, Run
Anytime you edit an item, you can choose to save your changes by clicking _File_ &rarr; _Save_ or typing Ctrl-S (or Command-S on macOS). After you've saved your project, you can click _Build_ &rarr; _Build_ or the _Build_ button in the toolbar to build the project. You can also click _Build_ &rarr; _Build and Run_ or the _Run_ button in the toolbar to build the project and then launch the emulator you specified in preferences with the built ROM.

**It is highly recommended that you save frequently as Serial Loops is still in a beta state and may crash!**

![Build and run](/images/chokuretsu/serial-loops/build-and-run.png)

### A Note on Saving vs Building
When you save an item, a file is created on disk that represents that item. However, the item is not actually built into the archives until you _build_ the project. Because saving is much faster than building, we recommend that you save frequently and build only when you want to test your project.
In case you close your project without having built all your files, Serial Loops will auto-detect the existence of saved but uncommitted files and alert you of this on project load, at which point you can build to insert those items into the archives.

### Building from Scratch
In the _Build_ menu, there is also an option to _Build from Scratch_. This option is not usually needed and can safely be ignored unless instructed to use it by someone attempting to help you troubleshoot.
It is primarily used for recovering from corrupt archives or other errors.

## Project Settings
Clicking _Project_ &rarr; _Project Settings_ will open a dialog that allows you to edit the banner image and game title of your patched ROM. This is what will appear in the Nintendo DS menu when loading your patched ROM.

![Project Settings](/images/chokuretsu/serial-loops/project-settings.png)

## Exporting Your Project
While anyone can build off of your hack using your released patch, it is often expedient to share your project files with others directly. This can be done by navigating to _File_ &rarr; _Export Project_ and choosing a location to save the *.slzip* file. This file contains all of your project files but does not contain the game's ROM, executables, etc. The person you're sharing the project with will need the same base ROM to import the project.

## Exporting Your Patch
After you've completed work on your project, you'll want to be able to distribute it. The easiest way to do this is by distributing a **patch**.
Serial Loops has built-in functionality for creating xdelta patches for your ROM. Simply navigate to _File_ &rarr; _Export Patch_ and pick a base ROM and a place to save your patch.

For your base ROM, we **highly recommend using the clean, original Japanese ROM**, which has the following hashes:

| Algorithm | Hash |
|:---------:|:----:|
| CRC-32 | `8A58F646` |
| MD5 | `6536132EFDDD337AA5069E627591FEE5` |
| SHA-1 | `81D5C6316DBCEF9F4C51984ADCAAE171124EBB08` |

Doing this means that people trying to patch your game will not need anything other than the clean Japanese ROM (i.e., they won't need to first patch it somewhere else before playing). Serial Loops will detect the hash of the ROM you use when trying to create the patch and ensure that it matches the clean Japanese ROM.

## Renaming, Duplicating, and Deleting Your Project
Serial Loops contains built in functionality for renaming, duplicating, and deleting your project. These options are all available from the file menu; alternatively, you can right click recent projects on the home screen and make the changes there!

![Renaming a project](/images/chokuretsu/serial-loops/recent-rename.png)

## Migrating to a New Base ROM
Sometimes, you may migrate to a new base ROM &ndash; for example, if you're using v0.6 of a translation patch and v0.8 is released.
Serial Loops is capable of handling such a migration. Simply select _Project_ &rarr; _Migrate to new ROM_ and select the new ROM you want as the base for your hack.
Serial Loops will handle upgrading and building based on this new ROM, bringing all of your changes you've made so far along with you!

**NOTE: Migration is an irreversible change, so we highly recommend backing up your project by duplicating it before you migrate!**