---
title: 'Применение взлома'
navigation:
  faicon: 'fa6-solid:file'
  previous: '/chokuretsu/serial-loops/docs/misc/topics'
  next: '/chokuretsu/serial-loops/docs/misc/ui-text'
---

Serial Loops имеет встроенный менеджер для применения хаков к вашему проекту.

**NOTE: If you are using the Docker path on Windows (which you most likely are!), ensure that you open Docker Desktop prior to applying hacks!**

![Меню «Применить взлом» в меню инструментов](/images/chokuretsu/serial-loops/tools-menu.png)

В меню представлен список хаков (см. ниже) и были ли они применены к проекту. Выберите взлом, который вы хотите применить, затем нажмите «СОХРАНИТЬ», чтобы применить его к проекту.

![Меню прмиенения взломов](/images/chokuretsu/serial-loops/apply-hacks.png)

![Apply Hacks menu](/images/chokuretsu/serial-loops/apply-hacks.png)

### Импорт кастомных хаков
Serial Loops поддерживает импорт хаков ASM, сериализованных в формате .slhack. Для этого в меню «Применить взлом» выберите «Импорт» и выберите файл `.slhack`, который вы хотите использовать.

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

![Create Hacks menu](/images/chokuretsu/serial-loops/create-hacks.png)

### Parameterizing Your Hacks
You can add parameters to your hacks by inserting `{{parameterNameHere}}` anywhere in your assembly. Serial Loops will automatically detect these and extract them as potential parameters
and then replace them on hack application.