---
title: '地图'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/map.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/group-selections'
  next: '/chokuretsu/serial-loops/docs/scenario/puzzles'
---

The current version of Serial Loops only allows you to view maps, not edit them.
In a future update, Serial Loops will be capable of fully editing maps and this documentation will be updated to be more complete.

## Overview
In Chokuretsu, there are two different kinds of maps &ndash; investigation maps and puzzle maps. Investigation maps are used during the investigation phase while puzzle maps are used for puzzle phases.
All maps are composed of _layers_. The three main layers are the background layer, the occlusion layer, and the object layer. These layers are defined by **occlusion**:
the background layer occludes nothing, the occlusion layer occludes everything, and the object layer occludes on a case-by-case basis. (The background layer can further be subdivided into the "background object layer",
which is composed of the non-occluding components of the objects.) There are a few additional layers, most notably the "scrolling background" which defines the background that scrolls by in the puzzle phase maps,
and the "boundary" which defines the limits of camera movement on the map.

Aside from the graphical layers, the map is also defined by an isometric grid. This grid has an origin point that is defined to be at the top of the map and extends in two directions diagonally.
The most significant definer of this grid is the **pathing map**, which defines where characters can and cannot walk (and in the puzzle phase, where singularities can and cannot spawn).
Each object layer entry's position is also defined on the grid which is how the game calculates whether a particular object is occluding a character or other object on the map at any given time.
Finally, interactable objects are also defined here, with each interactable object being given an associated entry in one of the aforementioned layers and a position on the grid that the player
should walk toward when interacting with the object.

### Additional Superfluous Information
* There are two "junk" layers which are composed of leftover development items and an "info" layer which is rarely used but defines extra information about the scene.
* There is a series of unknown objects defined on the grid
* There is a feature called "camera trucking" that is only used in a single test map which pans the camera to several predefined positions

## In Serial Loops
In Serial Loops, map items can be opened and viewed. The middle mouse wheel can be used to zoom in and out of the map and the left button can be used to pan around it.

Each of the defined layers above can be toggled on and off.

![Map editor](/images/chokuretsu/serial-loops/map-editing.png)

### Interactable Objects Overlay
When interactable objects are toggled on, each interactable object's walk-to tile will be highlighted and the clickable layer entry will be outlined.
Hovering over this outline will reveal a tooltip with the map's description of that object.

![Interactable objects overlay](/images/chokuretsu/serial-loops/map-interactables.png)

### Pathing Map Overlay
The pathing map overlay toggle allows viewing the map's internal understanding of which spaces are accessible.

| Space Color | Meaning |
|-------------|---------|
| Red | Impassable |
| Cyan | **Puzzle**: Impassable but singularity can spawn<br/>**Investigation**: Unknown, seems to indicate unused "exits" |
| Green | Passable |

![Pathing overlay](/images/chokuretsu/serial-loops/map-pathing-overlay.png)