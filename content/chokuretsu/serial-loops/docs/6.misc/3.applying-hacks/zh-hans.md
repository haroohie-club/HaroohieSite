---
title: 'Applying Hacks'
locale: 'zh-hans'
navigation:
  faicon: 'fa6-solid:file'
  previous: '/chokuretsu/serial-loops/docs/misc/topics'
  next: '/chokuretsu/serial-loops/docs/misc/ui-text'
---

Serial Loops has a built-in manager for applying useful hacks to your project.

## Apply Hacks menu
The Apply Hacks menu can be accessed through the "Apply Hacks..." option in the Tools menu.

![Apply Hacks menu in the tools menu](/images/chokuretsu/serial-loops/tools-menu.png)

The menu presents a list of hacks (see below) and whether they have been applied to the project. Select the hacks you wish to apply, then press SAVE to apply the hack to the project.

![Apply Hacks menu](/images/chokuretsu/serial-loops/apply-hacks.png)

### Hacks with Parameters
Some hacks have parameters you can specify to change the precise behavior of the hack. These parameters persist for the duration the Apply Hacks menu is open, but Serial Loops will
forget about them as soon as the hacks have been applied. Thus, if you reopen the menu, you will not see your parameter selected. Don't worry though &ndash; the hack with the parameter
you selected has still been applied!

### Importing Custom Hacks
Serial Loops supports importing ASM Hacks serialized in the `.slhack` format. To do this through the Apply Hacks menu, choose "Import," and select the `.slhack` file you wish to use.