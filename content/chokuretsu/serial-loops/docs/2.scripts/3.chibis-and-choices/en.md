---
title: 'Chibis & Choices'
navigation:
  faicon: 'fa6-solid:question'
  previous: '/chokuretsu/serial-loops/docs/scripts/patterns-and-templates'
  next: '/chokuretsu/serial-loops/docs/scripts/investigation-phase'
---

Also on the right side of the editor are three tabs with three separate editors &ndash; Starting Chibis, Map Characters, and Choices.
This document will cover Starting Chibis and Choices, while the next document will cover the Map Characters tab.

## Starting Chibis
The first tab of the bunch is the Starting Chibis tab &ndash; this allows you to edit the chibis that will appear on the top screen when the scene is loaded. Simply click the chibis on the top of the tab to remove them and click the ones on the bottom to add them.

Over the course of the script, the [`CHIBI_ENTEREXIT`](./commands#chibi_enterexit) command can modify which chibis are on the top screen.

![Script editor - starting chibis](/images/chokuretsu/serial-loops/script-starting-chibis.png)

## Choices
The choices tab contains the list of choices that can be used by [`SELECT`](./commands#select) commands. 
Choices can be added or deleted, and each choice's text and associated script section can be edited.

![Script editor - choices](/images/chokuretsu/serial-loops/script-choices.png)