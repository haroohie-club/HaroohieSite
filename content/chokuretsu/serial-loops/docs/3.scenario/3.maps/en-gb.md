---
title: 'Maps'
locale: 'en-gb'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/map.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/group-selections'
  next: '/chokuretsu/serial-loops/docs/scenario/puzzles'
---

The current version of Serial Loops only allows you to view maps, not edit them, so the documentation here will be sparse.
In a future update, Serial Loops will be capable of fully editing maps and this documentation will be updated to be more complete.

## Overview

In Chokuretsu, there are two different kinds of maps &ndash; investigation maps and puzzle maps. Investigation maps are used during
the investigation phase while puzzle maps are used for puzzle phases.

## In Serial Loops
In Serial Loops, map items can be opened and viewed. Additionally, the starting pathing overlay and starting camera location can be optionally
toggled on.

![Map editor](/images/chokuretsu/serial-loops/map-editing.png)

### Pathing Map Overlay
The pathing map overlay toggle allows viewing the map's internal understanding of which spaces are accessible.

| Space Color | Meaning |
|-------------|---------|
| Red | Impassable |
| Cyan | **Puzzle**: Impassable but singularity can spawn<br/>**Investigation**: Unknown, seems to indicate unused "exits" |
| Green | Passable |

![Pathing overlay](/images/chokuretsu/serial-loops/map-pathing-overlay.png)