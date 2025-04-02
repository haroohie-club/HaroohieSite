---
title: 'Commands'
navigation:
  faicon: 'fa6-solid:code'
  previous: '/chokuretsu/serial-loops/docs/scripts'
  next: '/chokuretsu/serial-loops/docs/scripts/patterns-and-templates'
---

The following document explains what every command in the game does. This document is intended for a general audience; for a more detailed, technical explanation of the commands, please reference the [Chokuretsu Translation Utility's wiki](https://github.com/haroohie-club/ChokuretsuTranslationUtility/wiki/Event-File-Commands).

## Notes
* Time in these commands is always defined in terms of _frames_. The game assumes a frame is 1/60 of a second, i.e. 60 frames per second. Thus, to wait one second, one would `WAIT` for 60 frames.

Displays the "Main Topic -> Avoid" graphics.

Displays the "Main Topic -> Avoid" graphics.


## `BACK`
**Parameters**: None

When used in the initial script section, starts execution to the first script block. Otherwise, makes the script return to whatever called it (e.g. the puzzle phase) or returns you to the investigation phase.


## `BG_DISP`
**Parameters**:
* `Background`: The background to be displayed

Displays a [background](../graphics/backgrounds) image on the lower screen. The
background image can only be of type `TEX_BG`.


## `BG_DISP2`
While this is listed as a separate command, it uses the same routine as [`BG_DISP`](#bg_disp).


## `BG_DISPCG`
**Parameters**:
* `Background`: The CG background to be displayed
* `Display from Bottom`: If true, displays the bottom of a tall background (`TEX_CG_SINGLE`); if false, displays the top

`BG_DISPCG` works as [`BG_DISP`](#bg_disp) but can display a larger variety of textures &ndash; namely, `TEX_CG`, `TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, and `TEX_CG_SINGLE` BGs. Notably, these are all CGs as opposed to VN backgrounds. Before displaying a standard BG after calling `BG_DISPCG`, one should call [`BG_REVERT`](#bg_revert).


## `BG_FADE`
**Parameters**:
* `Background`: The background to display as with [`BG_DISP`](#bg_disp)
* `Background (CG)`: The index of a background to display as [`BG_DISPCG`](#bg_dispcg); specify instead of `Background`
* `Fade Time (Frames)`: The time to fade in frames

Like the other BG display commands but crossfades the background rather than just displaying it.


## `BG_REVERT`
**Parameters**: None

Reverts the background to the last call of `BG_DISP` (i.e. undoes any [`BG_FADE`](#bg_fade) or [`BG_DISPCG`](#bg_dispcg) calls).
This is required before returning to displaying standard `TEX_BG` BGs. Note that if reverting a `TEX_CG_DUAL_SCREEN` BG, [`SET_PLACE`](#set_place) must have been used to set the place location and have it displayed.

`BG_REVERT` does something odd to previously displayed CGs that makes attempting to display them again after the `BG_REVERT` crash/freeze/soft lock the game.
If you need to go back and forth between the same CGs, consider using [`BG_FADE`](#bg_fade).


## `BG_SCROLL`
**Parameters**:
* `Scroll Direction`: The direction to scroll the BG
* `Scroll Speed`: Speed at which to scroll (1 is a good default)

When a background that is larger than the screen is shown (such as `TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, and `TEX_CG_SINGLE`), scrolls the background in a DEFINED direction.


## `BGM_PLAY`
**Parameters**:
* `Music`: The background music to start or stop playing
* `Mode`: Whether to start or stop the music
* `Volume`: The volume of the BGM (0 is silent, 100 is max)
* `Fade In Time (Frames)`: Time in frames that the BGM will fade in
* `Fade Out Time (Frames)`: Time in frames that the BGM will fade out

When a background that is larger than the screen is shown (such as
`TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, and `TEX_CG_SINGLE`), scrolls the
background in a DEFINED direction.


## `CHESS_CLEAR_ANNOTATIONS`
**Parameters**: None

Clears all chessboard annotations. Unused.


Plays or stops background music.

Loads a chess file into memory and (if the chess overlay is loaded) places it on the chessboard.


## `CHESS_MOVE`
**Parameters**:
* `Move 1`: The first move that should be executed
* `Move 2`: The second move that should be executed (optional)

Moves a piece (or pieces) on the chessboard.


## `CHESS_RESET`
**Parameters**: None

Resets the chessboard to its original state.


## `CHESS_TOGGLE_CROSS`
**Parameters**:
* `Cross Spaces`: The spaces to place/remove a cross on (select up to 16)

Crosses out spaces on the chessboard with a red X. If a space is already crossed out, this command uncrosses it out.


## `CHESS_TOGGLE_GUIDE`
**Parameters**:
* `Piece`: A space containing a piece whose potential moves to highlight

Highlights the potential moves of a piece in red. If a piece has already been highlighted, this command unhighlights it. Optionally, can specify to clear all guides currently on the board.


## `CHESS_TOGGLE_HIGHLIGHT`
**Parameters**:
* `Highlight Spaces`: The spaces to highlight (select up to 16)

Highlights spaces on the chessboard in yellow. If a space is already highlighted, this command unhighlights it.

## `CHESS_VGOTO`
**Parameters**:
* `Clear Block`: Script block to go to if the chess game is cleared
* `Miss Block`: Script block to go to if the chess game is failed
* `Miss 2 Block`: Script block to go to if the chess game is failed in some unused way

Monitors for the end of the chess game and then jumps to a specified script block depending on the outcome.


## `CHESS_VGOTO`
**Parameters**:
* `Clear Block`: Script block to go to if the chess game is cleared
* `Miss Block`: Script block to go to if the chess game is failed
* `Miss 2 Block`: Script block to go to if the chess game is failed in some
  unused way

This command displays an emote in a speech bubble above a [chibi](../graphics/chibis) figure on the top screen.


## `CHIBI_ENTEREXIT`
**Parameters**:
* `Chibi`: Specifies the chibi to enter or exit
* `Enter/Exit`: Specifies whether the chibi is entering or exiting
* `Delay (Frames)`: Specifies the number of frames after which the chibi should enter or exit

Specifies a [chibi](../graphics/chibis) figure to enter or exit the top screen. To be used by this command, a chibi must have a walk cycle (animation 01) in addition to its default idle animation (animation 00).


## `CONFETTI`
**Parameters**:
* `Visible`: If true, turns confetti on. If false, turns it off.

Displays falling confetti on the top screen.


## `DIALOGUE`
**Parameters**:
* `Dialogue`: The dialogue line, composed of a speaker and the dialogue text
* `Sprite`: The character sprite to display when the dialogue is displayed; this *must be set* for lip flaps to occur!
* `Sprite Entrance Transition`: Transition that makes the sprite enter
* `Sprite Exit/Move Transition`: Transition that makes the sprite exit or moves it around
* `Sprite Shake`: Applies a shaking effect to the sprite 
* `Voice Line`: The voice line to play
* `Text Voice Font`: The voice font to be applied when no voiced line is used, as defined by the dialogue config item
* `Text Speed`: The speed at which the text is rendered, as defined by the dialogue config item
* `Text Entrance Effect`: The effect to use as the text is printed to the screen
* `Sprite Layer`: Determines which "layer" a sprite should be rendered on entrance; higher numbers are rendered on top of lower ones
* `Don't Clear Text`: If true, continues displaying the next dialogue line in the same box
* `No Lip Flap`: Manually disables lip flaps for dialogue that would otherwise have them

## `CONFETTI`
**Parameters**:
* `Visible`: If true turns confetti on. If false, turns it off.

A couple of notes on sprites:
* Sprites are associated with a speaker
* Sprites will not be displayed unless the first sprite is given an entrance transition
* After the first sprite is displayed for a speaker, other sprites of that speaker can be switched to without entrance transitions
* Sprites must be specified for every dialogue command where a character appears on screen; without them, lip flaps & transitions will not take place
* Sprites will not exit unless the sprite is specified with an exit transition

For dialogue, there are a number of operators available that have different effects:
| Operator | Example | Effect |
|----------|---------|--------|
| `$num` | `$9` | Adjust the speed at which text appears on the screen; used to sync text with voice lines |
| `#Wnum` | `#W20` | Waits for a number of frames before continuing to show text on the screen |
| `#Pnum` | `#P5` | Changes the color (or more specifically the **p**alette) of the text; the available colors can be seen and edited in the [dialogue text color editor](../misc/dialogue-colors) |
| `#DP` | `#DP` | "Dialogue placeholder," doesn't have much of a function |
| `#SEnum` | `#SE001` | Plays a sound effect as [`SND_PLAY`](#snd_play) |
| `#SK0` | `#SK0Shake#sk` | Shakes the text; terminated with `#sk` |
| `#n` | `Hello#nnew line` | Inserts a line break... but then again, so does a line break |
| `#xnum` | `#x05` | Adds `num` pixels to the character width spacing (note: overrides our custom font spacing routine in the translation patches!) |
| `#ynum` | `#y05` | Adds `num` pixels to the line break spacing |
| `#X` | `#X` | Pins the newline indent to the current character (so the next line will start exactly where the next character is rendered) (works even with translation patch) |
| `#Ynum` | `#Y30` | Unknown (not implemented in Serial Loops preview) |

## `EPHEADER`
**Parameters**:
* `Episode Header`: The index of the title texture to use, i.e. 1 = Episode 1, 2 = Episode 2, 3 = Episode 3, 4 = Episode 4, 5 = Episode 5, 6 = Epilogue (if you want to be really clever, -1 is the main menu title)

Sets the upper screen to be an episode title texture.


## `FLAG`
**Parameters**:
* `Flag`: The flag to set or clear
* `Set`: 1 = set, 0 = clear

Sets or clears a flag.


## `GLOBAL2D`
**Parameters**:
* `Value`: The value to set variable `global2D` to

Sets a global variable to a specified value. Only used in one place so it's difficult to determine what it affects.


## `GOTO`
**Parameters**:
* `Script Section`: The section to jump to

Jumps to a particular script section.


## `HARUHI_METER`
**Parameters**:
* `Add`: The value to add to the Haruhi Meter (positive values move the meter toward Distracted while negative values move it toward Focused)
* `Set`: The value to set the Haruhi Meter at (does not show the meter)

## `EPHEADER`
**Parameters**:
* `Episode Header`: The index of the title texture to use, i.e. 1 = Episode 1, 2
  = Episode 2, 3 = Episode 3, 4 = Episode 4, 5 = Episode 5, 6 = Epilogue (if you
  want to be really clever, -1 is the main menu title)


## `HARUHI_METER_NOSHOW`
**Parameters**:
* `Add`: The value to add to the Haruhi Meter

Adds to the Haruhi Meter without showing the Haruhi Meter UI (the sound effects are still played). Unused in the game.


## `HOLD`
**Parameters**: None

Stops script execution until input is received from the player. 


## `INIT_READ_FLAG`
**Parameters**: None

Seems to initialize read flags for the current script; however, it's utility is unknown as it is unused in the game.


## `GOTO`
**Parameters**:
* `Script Section`: The section to jump to

Jumps to a particular script section.


## `INVEST_START`
**Parameters**:
* `Map Characters Set`: The set of map characters to use; in the retail game, this is always 0 as there is only one set of map characters specified for any given script. 
* `unknown01`
* `unknown02`
* `unknown03`
* `End Script Section`: The script section that starts with the [`INVEST_END`](#invest_end) command.

Starts investigation mode. Automatically fades screen in from black.


## `ITEM_DISPIMG`
**Parameters**:
* `Item`: The item to display
* `Location`: The location on the screen where the item will be displayed
* `Transition`: The transition by which the item enters the screen

Displays the specified item image. The item system is entirely unused in the game, so this command goes unused as well.

## `KBG_DISP`
**Parameters**:
* `"Kinetic" Background`: The "kinetic" background to display on the top screen

Displays a particular "kinetic" (my word) [background](../graphics/backgrounds) on the top screen. Must be of type `KINETIC_SCREEN`.


## `LOAD_ISOMAP`
**Parameters**:
* `Map`: The map to load

## `INVEST_END`
**Parameters**: None

## `MODIFY_FRIENDSHIP`
**Parameters**:
* `Character`: The character to modify: Haruhi, Mikuru, Nagato, Koizumi or Tsuruya.
* `Modify By`: The value to modify the friendship level by for the selected character

Modifies a character's "Friendship Level" by adding a particular value to it. The value can be positive or negative. Friendship levels start at 1, have a max of 64, and persist throughout a playthrough. They can be referenced in conditionals with the following variable names:

| Character | Variable |
|-----------|----------|
| Haruhi | `HFL` |
| Mikuru | `MFL` |
| Nagato | `NFL` |
| Koizumi | `KFL` |
| Tsuruya | `TFL` |

## `NEXT_SCENE`
**Parameters**: None

Ends the scene and moves to the next one as listed in the Scenario item.


Starts investigation mode. Automatically fades screen in from black.

Does nothing.


## `NOOP2`
**Parameters**: None.

Does nothing.


## `NOOP3`
**Parameters**: None.

Does nothing.


## `OP_MODE` 
**Parameters**: None

Suppresses the top screen UI, shows `BG_KBG04` on the top screen, disables dialogue skipping, and marks the center of the screen as the position the Kyon chibi walks to, and sends the Kyon chibi out. Used only in the opening text crawl.


Modifies a character's "Friendship Level" by adding a particular value to it.
The value can be positive or negative. Friendship levels start at 1 and persist
throughout a playthrough. They can be referenced in conditionals with the
following variable names:


## `PIN_MNL`
**Parameters**:
* `Dialogue`: Dialogue line as in the [`DIALOGUE`](#dialogue) command

Draws a dialogue line as monologue over all other dialogue. Undone by completing a chess game.


## `NEXT_SCENE`
**Parameters**: None


## `SCENE_GOTO`
**Parameters**:
* `Scene`: Name of the script file to go to

Does nothing.


## `SCENE_GOTO_CHESS`
**Parameters**:
* `Scene`: Name of the script file to go to

Behaves as [`SCENE_GOTO`](#scene_goto) except that it's used to go to scripts that contain chess puzzles.


## `SCREEN_FADEIN`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade In Percentage`: The percentage of darkness to fade into (where 0 is fully bright and 100 is fully dark; e.g. 50 means the screen will be 50% darker 
  than full brightness when the fade in is complete); only respected by custom color fades
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color set by a previous [`SCREEN_FADEOUT`](#screen_fadeout); this parameter must match that of the previous [`SCREEN_FADEOUT`](#screen_fadeout) call

Causes the screen to fade in.


## `SCREEN_FADEOUT`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade out Percentage`: The percentage of darkness to fade into (where 0 is fully bright and 100 is fully dark; e.g. 50 means that the screen will be 50% brighter than full black when the fade is complete); only respected by color fades
* `Custom Color`: The color the fade will be if `Color` is set to `CUSTOM`
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color defined by `Custom Color`; this parameter must match that of the subsequent [`SCREEN_FADEIN`](#screen_fadein) call

Causes the screen to fade out.


## `SCREEN_FLASH`
**Parameters**:
* `Fade In Time (Frames)`: Time for the fade in portion of the flash in frames
* `Hold Time (Frames)`: Time to hold on the flash color in frames
* `Fade Out Time (Frames)`: Time for the fade out portion of the flash in frames
* `Color`: The color of the flash

Flashes the screen a specified color for a specified amount of time.


## `SCREEN_SHAKE`
**Parameters**:
* `Duration (Frames)`: Effect duration in frames (if -1, shakes indefinitely)
* `Horizontal Intensity`: Intensity of the shake in the horizontal direction
* `Vertical Intensity`: Intensity of the shake in the vertical direction

Shakes the bottom screen.


## `SCENE_GOTO2`
**Parameters**:
* `Scene`: Name of the script file to go to

Behaves as [`SCENE_GOTO`](#scene_goto), except this command does not clear a
flag before jumping. Otherwise, they seem to be identical.


## `SELECT`
**Parameters**:
* `Option 1`: The first choice to be presented
* `Option 2`: The second choice to be presented
* `Option 3`: The third choice to be presented
* `Option 4`: The fourth choice to be presented
* `Display Flag 1`: A flag indicating that Option 1 should be displayed; if -1, the option is always displayed
* `Display Flag 2`: A flag indicating that Option 2 should be displayed; if -1, the option is always displayed
* `Display Flag 3`: A flag indicating that Option 3 should be displayed; if -1, the option is always displayed
* `Display Flag 4`: A flag indicating that Option 4 should be displayed; if -1, the option is always displayed

Presents the player with a series of choices that branch the dialogue tree. Choices are defined in their own section and have IDs that correspond to labels set in the labels section. When a choice is chosen, this ID is used to select which script block will be jumped to.

`SELECT` cannot be used in the initial, unnamed script block.


## `SET_PLACE`
**Parameters**:
* `Display?`: Whether to display the location graphic or not
* `Place`: The place to display

Modifies the displayed place name.


## `SCREEN_FADEOUT`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade out Percentage`: The percentage darkness to fade into (where 0 is fully
  bright and 100 is fully dark; e.g. 50 means that the screen will be 50%
  brighter than full black when the fade is complete); only respected by color
  fades
* `Custom Color`: The color the fade will be if `Color` is set to `CUSTOM`
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color defined by `Custom Color`;
  this parameter must match that of the subsequent
  [`SCREEN_FADEIN`](#screen_fadein) call

Causes the screen to fade out.


## `SND_PLAY`
**Parameters**: 
* `Sound`: The sound to be played from `snd.bin`
* `Mode`: Whether to start or stop the sound
* `Volume`: The volume of the sound
* `Load Sound`: If true, loads the sound into memory before playing it (necessary when playing a sound for the first time)
* `Crossfade Time (Frames)`: Time in frames that the sound will crossfade; only can be used when changing the volume of the same sound

Flashes the screen a specified color for a specified amount of time.


## `SND_STOP`
**Parameters**: None

Stops the currently playing sound. Unused in game.

## `STOP`
**Parameters**: None

Stops script execution and soft locks the game. Unused.


## `TOGGLE_DIALOGUE` 
**Parameters**:
* `Show`: Whether to show the dialogue box or not

Shows/hides the dialogue box. Note that plenty of other commands already do one of these (e.g., `DIALOGUE` automatically shows the dialogue box).


## `TOPIC_GET`
**Parameters**:
* `Topic`: The topic to give the player

Give the player a particular topic.


## `TRANS_OUT`
**Parameters**:
* `Transition`: The transition to use

Plays a transition to black.

## `TRANS_IN`
**Parameters**:
* `Transition`: The transition to use

Plays a transition from black into the scene.


## `VCE_PLAY`
* `Voice Line`: The voiced line to play

Plays a voice file.


## `VGOTO`
**Parameters**:
* `Conditional`: The conditional to check
* `Script Section`: The script section to jump to

Goes to a specified script section if a specified conditional is true.

## `WAIT` 
**Parameters**:
* `Time (Frames)`: The number of frames to wait

Waits a particular number of frames.

Plays a sound from the SDAT `snd.bin`.

A command nearly identical to [`WAIT`](#wait), but allows for the wait to be canceled with a button press or screen tap.