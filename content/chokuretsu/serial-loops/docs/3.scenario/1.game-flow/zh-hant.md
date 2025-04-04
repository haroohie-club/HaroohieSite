---
title: 'Game Flow'
navigation:
  faicon: 'fa6-solid:book-open'
  previous: '/chokuretsu/serial-loops/docs/scenario'
  next: '/chokuretsu/serial-loops/docs/scenario/group-selections'
---
The game's flow can be edited with the _Scenario_ editor. The scenario is essentially a list of commands which execute in order to load various game
components. The commands are explained in the following table:

## Scenario Commands
| Command | Description |
|---------|-------------|
| `NEW_GAME` | This command defines where the "New Game" menu item takes the player. For example, if `NEW_GAME 5` defines where selecting _New Game_ &rarr; _Episode 5_ will take the player. |
| `SAVE` | This command prompts the user to save the game. |
| `LOAD_SCENE` | This command loads a particular script file. |
| `PUZZLE_PHASE` | This command starts a particular puzzle phase. |
| `ROUTE_SELECT` | This command starts a particular group selection. |
| `STOP` | This command stops the game. It is not actually used. |
| `SAVE2` | This command also prompts the user to save the game. The difference between this command and `SAVE` are unknown. |
| `TOPICS` | This command displays which topics the player has collected over the previous scene(s) following group selection. |
| `COMPANION_SELECT` | This loads a companion selection screen, allowing the player to select which Brigade member will accompany Haruhi during the puzzle phase. |
| `PLAY_VIDEO` | Plays a video; 0 plays the OP and 1 plays the ED. |
| `NOP` | Does nothing |
| `UNKNOWN0B` | This command is used but its function is currently unknown. |
| `UNLOCK` | Unlocks particular functionality. The exact mapping between the parameter specified and which functionality is unlocked is currently unknown. |
| `END` | Ends the scenario and returns to the title screen. |

## Editing
As with script commands, scenario commands can be added and removed with the + and garbage can buttons above the command list. 

The entire scenario can be cleared using the rocket ship button. Individual commands can be edited (changing the command itself as well as its single parameter) in the editor panel to the right.

The entire scenario can be cleared using the rocket ship button. Individual
commands can be edited (changing the command itself as well as its single
parameter) in the editor panel to the right.