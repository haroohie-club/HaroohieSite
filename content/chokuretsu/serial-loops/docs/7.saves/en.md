---
title: 'Save Files'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/save.png'
  previous: '/chokuretsu/serial-loops/docs/misc/tutorial-mappings'
---

In addition to editing the Chokuretsu ROM, Serial Loops is also able to edit Chokuretsu save files. This can be done either from within
an opened project (in which case the save will open as a tab) or from the main menu (in which case the save editor will take up the entire window).
This can be done by going to "File" &rarr; "Edit Save File" or by clicking the "Edit Save File" link on the home screen.

## Overview
Chokuretsu save files are composed of three primary components: common save data, checkpoint save data, and quicksave data.
_Common save data_ is the most persistent data: things like configuration and unlocked achievements. The two _checkpoint save slots_
comprise the next level of persistence: these can be made only when prompted by the scenario and store information about the progress
in that particular run of the game. Finally, the _quicksave slot_ can be accessed at almost any time throughout the game and allows
the player.

## Main Editor Screen
The main editor screen presents you with the three save slots, each of which has a button to edit them and a rocket ship button to clear them.
Additionally, there is a button for editing common save data. Clicking any of the edit buttons brings up a dialog to edit that portion of the
save file, divided into tabs. All three kinds of save data have a "Flags" tab that will be covered in a separate section at the end.

## Common Save Data
The common save data is divided into two tabs: Config Data and Flags. The Config Data tab is primarily composed of the options seen
on the configuration screen. However, it additionally has a section for editing the character "power statuses". These represent the level
of each of the three characters with puzzle phase powers (Asahina, Nagato, and Koizumi), their progress toward leveling up, and how many
remaining uses of their power they currently have.

## Checkpoint Save Data
The checkpoint save data is divided into two tabs: Save Data and Flags. The save data contains the time at which the game was saved as well
as the current position in the scenario and current episode. (Note that this means that the episode number will not be automatically adjusted
if you change the scenario position to lie in a different episode.)

There is also data for the character assignment on the most recent group selection (objectives) which is referenced by the game in conditionals.
In addition to the regular character assignments, there are also switches for Episode 3's split group selection to indicate that Objectives A and
B occurred separately from Objectives C and D.

Finally, there is stored data for the current friendship level with each character. This variable is increased by various in-game actions (obtaining
character topics, assigning the character to good/bad objectives during group selection, the [`MODIFY_FRIENDSHIP`](scripts/commands#modify_friendship)
command, etc.) and determines some in-game events and unlocks particular game endings.

## Quicksave Data
The quicksave data is divided into three tabs: Save Data, Script Position, and Flags. Save Data is the same as the checkpoint saves, but the script
position indicates the exact position in the script that the game was saved at. Specifically, it allows for specifying the exact script, script section,
and command that was active when the game was saved. The script preview to the right automatically updates as you change these options &ndash; technically,
this preview is specified manually, so this is done for convenience.

## Flags
As mentioned earlier, all three types of save data have a Flags tab. There are 5120 total flags in the game. The first 100 or so act as scratch flags for
scripts to use to temporarily mark events that occur within the script. After this, flags are associated with various objects in the game such as topics,
BGMs, CGs, tutorials, and more. Additionally, flags indicate whether certain features have been unlocked. Serial Loops allows for editing _all_ of these
flags.