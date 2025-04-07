---
title: 'Applicare delle hack'
navigation:
  faicon: 'fa6-solid:file'
  previous: '/chokuretsu/serial-loops/docs/misc/topics'
  next: '/chokuretsu/serial-loops/docs/misc/ui-text'
---

Serial Loops dispone di uno strumento per gestire delle hack utili per il tuo progetto.

**NOTE: If you are using the Docker path on Windows (which you most likely are!), ensure that you open Docker Desktop prior to applying hacks!**

Il menù dispone di diverse hack (trovi nella casella qua sotto) e cosa fanno quando le applicherai al gioco. Quando finisci, clicca SALVA per aggiungere le hack.

Il menù dispone di diverse hack (trovi nella casella qua sotto) e cosa fanno quando le applicherai al gioco. Quando finisci, clicca SALVA per aggiungere le hack.

![Apply Hacks menu](/images/chokuretsu/serial-loops/apply-hacks.png)

![Apply Hacks menu](/images/chokuretsu/serial-loops/apply-hacks.png)

### Importare hack personalizzate
Le hack personalizzate sono supportate nel formato `.slhack`. Per farlo, scegli "Importa" e seleziona il file `.slhack`che desideri importare.

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