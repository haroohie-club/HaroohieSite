---
title: 'Applying Hacks'
navigation:
  faicon: 'fa6-solid:file'
  previous: '/chokuretsu/serial-loops/docs/misc/topics'
  next: '/chokuretsu/serial-loops/docs/misc/ui-text'
---

Serial Loops has a built-in manager for applying useful hacks to your project.

## Apply Hacks Menu
The Apply Hacks menu can be accessed through the "Apply Hacks..." option in the Tools menu.

![Apply Hacks menu in the tools menu](/images/chokuretsu/serial-loops/tools-menu.png)

The menu presents a list of hacks (see below) and whether they have been applied to the project. Select the hacks you wish to apply, then press SAVE to apply the hack to the project.

![Apply Hacks menu](/images/chokuretsu/serial-loops/apply-hacks.png)

### Hacks with Parameters
Some hacks have parameters you can specify to change the precise behavior of the hack. These parameters persist for the duration the Apply Hacks menu is open, but Serial Loops will
forget about them as soon as the hacks have been applied. Thus, if you reopen the menu, you will not see your parameter selected. Don't worry though &ndash; the hack with the parameter
you selected has still been applied! This will be fixed in a future update.

### Importing Custom Hacks
Serial Loops supports importing ASM Hacks serialized in the `.slhack` format. To do this through the Apply Hacks menu, choose "Import," and select the `.slhack` file you wish to use.

## Creating Hacks
The ability to import hacks implies the ability to export them, and indeed Serial Loops provides functionality to do that. The "Create ASM Hack" option in the Tools menu will open a dialog
that allows you to package an assembly hack.

The first step is to click "Select Hack Files" and select *all* the files you need for your hack. It is imperative that you select all the files you need on the first attempt; not doing so
may result in errors!

After you have selected your hack files, give your hack a name and a description. Then, you can select each file and edit its options. Firstly, you should choose whether that file should be
applied to the main ARM9 binary or an overlay (and if an overlay, which overlay in particular it should be applied to). Afterward, if there are any unknown symbols you reference in this file,
you should define their RAM addresses here. Finally, any parameters you have created in the files should be defined here. You are able to define multiple options for each parameter and give
them a name and value.

### Parameterizing Your Hacks
You can add parameters to your hacks by inserting `{{parameterNameHere}}` anywhere in your assembly. Serial Loops will automatically detect these and extract them as potential parameters
and then replace them on hack application.