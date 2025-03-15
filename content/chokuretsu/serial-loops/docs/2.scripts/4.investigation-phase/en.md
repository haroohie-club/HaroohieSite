---
title: 'Investigation Phase'
navigation:
  faicon: 'fa6-solid:magnifying-glass-arrow-right'
  previous: '/chokuretsu/serial-loops/docs/scripts/chibis-and-choices'
  next: '/chokuretsu/serial-loops/docs/scenario'
---

The next tab is the _Map Characters_ tab. In scripts with an investigation phase, this section allows editing where characters appear on the map and which script section is activated when you talk to them. If a script does not have map characters, simply add a `LOAD_ISOMAP` command somewhere in the script and then press the "Add Map Characters" button in this tab.

To move chibis around on the map, simply drag and drop them with your mouse. To edit their properties &ndash; which are the character, facing direction, and associated script section &ndash; simply click on a chibi. Doing so will also bring up a button that lets you remove the chibi from the map. To add a new chibi to the map, simply press the "Add Character" button in the bottom left; once added, you can change the chibi's properties and location as described above.

Ensure that the first chibi you add to the map is Kyon and that he does not have a script associated with him.

![Script editor - map characters](/images/chokuretsu/serial-loops/script-map-characters.png)

The last script editor tab is the _Interactable Objects_ tab. This tab has a list of all the interactable objects (such as the grand piano in episode 2) that have associated script sections when clicked. To view the interactable objects available on a particular map, open it in the [map editor](../scenario/maps). You can select an interactable object and remove it from the list or change its associated script section using the dropdown menu. Finally, you can add interactable objects from the available set on the map via the "Add Interactable Object" button.

![Script editor - interactable objects](/images/chokuretsu/serial-loops/script-interactables.png)