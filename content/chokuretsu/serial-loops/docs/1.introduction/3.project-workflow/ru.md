---
title: 'Рабочий процесс проекта'
navigation:
  faicon: 'fa6-solid:folder-tree'
  previous: '/chokuretsu/serial-loops/docs/introduction/getting-started'
  next: '/chokuretsu/serial-loops/docs/scripts'
---

После создания проекта вы увидите следующий экран:

![Project workflow](/images/chokuretsu/serial-loops/project-workflow.png)

Слева находится **панель предметов**. Она содержит организованное дерево всех предметов, доступных для редактирования в игре. Над панелью предметов находится **панель быстрого поиска**, позволяющая быстро находить предметы по названию. Справа от панели предметов находится **панель редакторов**. Здесь будут отображаться редакторы для различных предметов, когда вы их откроете.

## Поиск элементов для редактирования
Хотя навигация по панели элементов и фильтрация по имени с помощью быстрого поиска вполне достаточны для просмотра, у Последовательностей _много_ элементов. Чтобы выполнить более расширенный поиск с использованием фильтров, вы можете использовать функцию _Поиск_ (Ctrl/Command-F), чтобы найти элемент, фильтруя по типу и выполняя поиск более сложных метаданных (хотя обработка более сложных запросов может занять некоторое время).

![Item search](/images/chokuretsu/serial-loops/item-search.png)

### Renaming Items
Items in Serial Loops can be renamed, which lets you provide a more sensible name based on the changes you have made to that item. To rename an item, select the item in the item explorer panel on the left-hand side and press F2. Simply type a new name for the item and then press enter for the new name to take effect.

![Item renaming](/images/chokuretsu/serial-loops/item-renaming.png)

### Item References
If you want to see where a particular item is used in the game, an easy way to do that is to right-click it and select "Find References." This will show you what other items reference the selected item.

## Сохранить, собрать, запустить
В любой момент, когда вы редактируете элемент, вы можете сохранить изменения, нажав _Файл_ &rarr; _Сохранить_ или нажав Ctrl-S (или Command-S в macOS). После сохранения проекта вы можете нажать _Build_ &rarr; _Build_ или кнопку _Build_ на панели инструментов, чтобы построить проект. Вы также можете нажать _Build_ &rarr; _Build and Run_ или кнопку _Run_ на панели инструментов, чтобы построить проект, а затем запустить эмулятор, указанный вами в настройках, со встроенным ROM.

**Настоятельно рекомендуется сохраняться как можно чаще, так как Serial Loops все еще находится в стадии бета-тестирования и может крашиться!**

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