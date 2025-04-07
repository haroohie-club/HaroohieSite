---
title: 'Ход игры'
navigation:
  faicon: 'fa6-solid:book-open'
  previous: '/chokuretsu/serial-loops/docs/scenario'
  next: '/chokuretsu/serial-loops/docs/scenario/group-selections'
---
Ход игры можно редактировать с помощью редактора _Сцераниев_. Сценарий по сути представляет собой список команд, которые выполняются для загрузки различных игровых
компонентов. Команды описаны в следующей таблице:

## Scenario Commands
| Command | Description |
|---------|-------------|
| `NEW_GAME` | This command defines where the "New Game" menu item takes the player. For example, if `NEW_GAME 5` defines where selecting _New Game_ &rarr; _Episode 5_ will take the player. |
| `SAVE` | This command prompts the user to save the game, creating a checkpoint save. Typically, the first save in an episode is denoted by setting the parameter to `2` and incrementing it for each checkpoint after that. |
| `LOAD_SCENE` | This command loads a particular script file. |
| `PUZZLE_PHASE` | This command starts a particular puzzle phase. |
| `ROUTE_SELECT` | This command starts a particular group selection. |
| `STOP` | This command stops the game. It is not actually used. |
| `SAVE2` | This command also prompts the user to save the game. While the precise mechanical differences between this and `SAVE` are not well understood, it is known that it is used after the `UNLOCK` command and before the `NEW_GAME` or `END` commands. This implies that it interacts more directly with the common save than do checkpoint saves. Its parameter is always `0`. |
| `TOPICS` | This command displays which topics the player has collected over the previous scene(s) following group selection. |
| `COMPANION_SELECT` | This loads a companion selection screen, allowing the player to select which Brigade member will accompany Haruhi during the puzzle phase. |
| `PLAY_VIDEO` | Plays a video; 0 plays the OP and 1 plays the ED. |
| `NOP` | Does nothing |
| `UNLOCK_ENDINGS` | This command unlocks a character ending scene based on the friendship levels. Used at the end of the game. |
| `UNLOCK` | Unlocks particular functionality. The exact mapping between the parameter specified and which functionality is unlocked is currently unknown. |
| `END` | Ends the scenario and returns to the title screen. |

## Редактирование
Как и в случае со скриптами, команды сценария можно добавлять и удалять с помощью кнопок + и корзины над списком команд. 

Весь сценарий можно очистить с помощью кнопки ракеты. Отдельные команды можно редактировать на панели редактора справа.

![Scenario Editing](/images/chokuretsu/serial-loops/scenario-editing.png)