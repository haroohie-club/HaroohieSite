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

## `AVOID_DISP`
**Parametro**: Nessuna

Mostra le "discussioni principali -> Senza usare le" grafiche.


## `BACK`
**Parametro**: Nessuna

When used in the initial script section, starts execution to the first script block. Otherwise, makes the script return to whatever called it (e.g. the puzzle phase) or returns you to the investigation phase.


## `BG_DISP`
**Parametro**:
* `Sfondi`: Lo sfondo che viene mostrato

Mostra uno [sfondo](../graphics/backgrounds) sullo schermo inferiore. Le immagini selezionabili sono solo quelle del tipo `TEX_BG`.


## `BG_DISP2`
Nonostante sia un comando diverso, ha la stessa funzione di [`BG_DISP`](#bg_disp).


## `BG_DISPCG`
**Parametro**:
* `Sfondo`: le immagini CG che vengono mostrate
* `Mostra dal basso`: Se spuntata, verrà mostrata la parte inferiore di un'immagine grande (`TEX_CG_SINGLE`); se non è spuntata, solo la parte alta sarà mostrata

`BG_DISPCG` works as [`BG_DISP`](#bg_disp) but can display a larger variety of textures &ndash; namely, `TEX_CG`, `TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, and `TEX_CG_SINGLE` BGs. Notably, these are all CGs as opposed to VN backgrounds. Before displaying a standard BG after calling `BG_DISPCG`, one should call [`BG_REVERT`](#bg_revert).


## `BG_FADE`
**Parameters**:
* `Background`: The background to display as with [`BG_DISP`](#bg_disp)
* `Background (CG)`: The index of a background to display as [`BG_DISPCG`](#bg_dispcg); specify instead of `Background`
* `Fade Time (Frames)`: The time to fade in frames

Funziona come gli altri comandi ma fa scomparire lo sfondo anziché farlo vedere.


## `BG_REVERT`
**Parametri**: Nessuno

Reverts the background to the last call of `BG_DISP` (i.e. undoes any [`BG_FADE`](#bg_fade) or [`BG_DISPCG`](#bg_dispcg) calls).
This is required before returning to displaying standard `TEX_BG` BGs. Note that if reverting a `TEX_CG_DUAL_SCREEN` BG, [`SET_PLACE`](#set_place) must have been used to set the place location and have it displayed.

`BG_REVERT` cerca di ricaricare le stesse immagini CG, dopo che il comando `BG_REVERT` ha fatto
crashare/mandare in tilt/bloccare il gioco.
Se devi muoverti tra le varie CG, usa il comando [`BG_FADE`](#bg_fade).


## `BG_SCROLL`
**Parametri**:
* `Direzione scorrimento`: Come muoversi tra le varie immagini
* `Velocità scorrimento`: A quale velocità muoversi (tieni sempre questo parametro su 1)

When a background that is larger than the screen is shown (such as `TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, and `TEX_CG_SINGLE`), scrolls the background in a defined direction.


## `BGM_PLAY`
**Parametri**:
* `Musica`: Quando far partire o interrompere la musica di sottofondo
* `Modalità`: Quando far partire o interrompere la musica
* `Volume`: Volume della musica in sottofondo (0 iè il minimo, 100 è il massimo)
* `Assolvenza (Frames)`: Frame quando la canzone sta per iniziare
* `Dissolvenza (Frames)`: Frame quando la canzone sta per finire

Riproduce o interrompe la musica di sottofondo.


## `CHESS_CLEAR_ANNOTATIONS`
**Parametri**: Nessuno

Rimuove tutte le annotazioni della scacchiera. Inutilizzato.


## `CHESS_LOAD`
**Parametri**:
* `Scacchi`: Carica i file degli scacchi

Carica un file della modalità scacchi dalla memoria (se la sovrapposizione è attiva) lo caricherà sulla scacchiera.


## `CHESS_MOVE`
**Parameters**:
* `Move 1`: The first move that should be executed
* `Move 2`: The second move that should be executed (optional)

La traiettoria di spostamento di una pedina.


## `CHESS_RESET`
**Parametri**: Nessuno

Riporta la scacchiera ad inizio partita.


## `CHESS_TOGGLE_CROSS`
**Parameters**:
* `Cross Spaces`: The spaces to place/remove a cross on (select up to 16)

Rimuove tutti gli spazi con sopra una croce rossa. Se è già stato rimosso, questo comando annulla l'azione.


## `CHESS_TOGGLE_GUIDE`
**Parameters**:
* `Piece`: A space containing a piece whose potential moves to highlight

Highlights the potential moves of a piece in red. If a piece has already been highlighted, this command unhighlights it. Optionally, can specify to clear all guides currently on the board.


## `CHESS_TOGGLE_HIGHLIGHT`
**Parameters**:
* `Highlight Spaces`: The spaces to highlight (select up to 16)

illumina una casella della scacchiera in giallo. Se lo spazio è già segnalato, questo comando disattiverà l'azione.

## `CHESS_VGOTO`
**Parameters**:
* `Clear Block`: Script che carica la schermata di vittoria
* `Miss Block`: Script che carica la schermata di sconfitta
* `Miss 2 Block`: Script che carica una schermata di sconfitta inutilizzata

Controlla quale schermata caricare una volta finita una partita a scacchi.


## `CHIBI_EMOTE`
**Parametri**:
* `Chibi`: Chibi da mostrare
* `Emozione`: L'emozione che devono fare

Displays an emote in a speech bubble above a [chibi](../graphics/chibis) figure on the top screen.


## `CHIBI_ENTEREXIT`
**Parametri**:
* `Chibi`: Decidere quali chibi devono entrare o uscire di scena
* `Entrata/Uscita`: Decidere quando i chibi devono entrare o uscire di scena
* `Posticipare (Frame)`: Decidere il numero esatto di fotogrammi quali chibi devono entrare o uscire

Specifies a [chibi](../graphics/chibis) figure to enter or exit the top screen. To be used by this command, a chibi must have a walk cycle (animation 01) in addition to its default idle animation (animation 00).


## `CONFETTI`
**Parameters**:
* `Visible`: If true, turns confetti on. If false, turns it off.

Decidi se far vedere dei coriandoli che cadono sullo schermo superiore.


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

Mostra una linea di dialogo e/o cambia gli [Sprite dei personaggi](../graphics/sprites). Possono anche contenere un [testo doppiato](../sound/voice).

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
**Parametri**:
* `Numero Episodio`: Index delle texture dei titoli da usare, i.e. 1 = Episodio 1, 2 = Episodio 2, 3 = Episodio 3, 4 = Episodio 4, 5 = Episodio 5, 6 = Epilogo (Se sei furbo capirai che, -1 è il menù principale)

Imposta quale schermata del capitolo far apparire sullo schermo superiore.


## `FLAG`
**Parametri**:
* `Flag`: La flag da impostare
* `Impostare`: 1 = impostare, 0 = completato

Imposta i parametri delle flag.


## `GLOBAL2D`
**Parametri**:
* `Valori`: Valore da impostare al parametro `global2D`

imposta un valore preciso ad una serie di parametri. Ancora non sappiamo bene quali parametri influenzi.


## `GOTO`
**Parametri**:
* `Sezione Script`: La sezione script da raggiungere

Passi ad una sezione di script scelta da te.


## `HARUHI_METER`
**Parametri**:
* `Aggiungi`: Valori da aggiungere al Haruhimetro (Valori positivi portano verso la distrazione, mentre quelli negativi portano alla concentrazione)
* `Impostare`: Valori da impostabili al Haruhimetro (Non visibili)

Cambia i valori del Haruhimetro. Il minimo è 0 (indicatore sul 10%) il massimo è 9 (indicatore sul 100%).


## `HARUHI_METER_NOSHOW`
**Parametri**:
* `Aggiungi`: Aggiunge valori al Haruhimetro

Aumenta o diminuisce il valore del Haruhimetro (i suoni si sentono ancora). In gioco non viene utilizzato.


## `HOLD`
**Parametri**: Nessuno.

Ferma lo scorrere dello script fino a quando il giocatore non interviene. 


## `INIT_READ_FLAG`
**Parametri**: Nessuno

Seems to initialize read flags for the current script; however, it's utility is unknown as it is unused in the game.


## `INVEST_END`
**Parametri**: Nessuno

La fase investigazione viene interrotta e si torna in modalità visual novel. Lo schermo diventa nero per alcuni secondi.


## `INVEST_START`
**Parameters**:
* `Map Characters Set`: The set of map characters to use; in the retail game, this is always 0 as there is only one set of map characters specified for any given script. 
* `unknown01`
* `unknown02`
* `unknown03`
* `End Script Section`: The script section that starts with the [`INVEST_END`](#invest_end) command.

Da il via alla modalità investigazione. C'è una transizione su schermo nero.


## `ITEM_DISPIMG`
**Parameters**:
* `Item`: The item to display
* `Location`: The location on the screen where the item will be displayed
* `Transition`: The transition by which the item enters the screen

Displays the specified item image. The item system is entirely unused in the game, so this command goes unused as well.

## `KBG_DISP`
**Parametri**:
* `Sfondi "Cinetici"`: Lo sfondo cinetico viene mostrato sullo schermo superiore

Mostra uno (il nome l'ho scelto io) [sfondo cinetico](../graphics/backgrounds) sullo schermo superiore. Deve essere di tipo `KINETIC_SCREEN`.


## `LOAD_ISOMAP`
**Parametri**:
* `Mappa`: Carica la mappa

Carica una mappa isometrica che [`INVEST_START`](#invest_start) deve usare.

## `MODIFY_FRIENDSHIP`
**Parameters**:
* `Character`: Personaggi che vengono influenzati: Haruhi, Mikuru, Nagato, Koizumi e Tsuruya.
* `Modify By`: Il livello amicizia da cambiare per i vari personaggi

Modifies a character's "Friendship Level" by adding a particular value to it. The value can be positive or negative. Friendship levels start at 1, have a max of 64, and persist throughout a playthrough. They can be referenced in conditionals with the following variable names:

| Personaggio | Variabile |
|-----------|----------|
| Haruhi | `HFL` |
| Mikuru | `MFL` |
| Nagato | `NFL` |
| Koizumi | `KFL` |
| Tsuruya | `TFL` |

## `NEXT_SCENE`
**Parametri**: Nessuno

Chiude una scena e apre la prossima segnata sullo "Scenario Item".


## `NOOP1`
**Parametri**: Nessuno

Does nothing.


## `NOOP2`
**Parametri**: Nessuno.

Does nothing.


## `NOOP3`
**Parametri**: Nessuno.

Does nothing.


## `OP_MODE` 
**Parametri**: Nessuno

Suppresses the top screen UI, shows `BG_KBG04` on the top screen, disables dialogue skipping, and marks the center of the screen as the position the Kyon chibi walks to, and sends the Kyon chibi out. Used only in the opening text crawl.


## `PALEFFECT`
**Parametri**:
* `Modalità`: Le palette da applicare (gli effetti disponibli sono: Defalut, invertita, scala di grigi, seppia e oscurato)
* `Tempo (Frame)`: Quanti fotogrammi deve durare la transizione della palette dello sfondo
* `Sconosciuto`: Il codice dice che fa qualcosa, ma non capiamo cosa

Changes the color of currently displayed UI elements using a specified filter.


## `PIN_MNL`
**Parametri**:
* `Dialogo`: Comando che controlla le linee di [`DIALOGO`](#dialogue)

Crea una linea di dialogo come monologo sopra gli altri dialoghi. Cancellabile dopo aver finito una partita a scacchi.


## `REMOVED`
Rimosso dalla versione finale (non si trova nulla nel codice.)


## `SCENE_GOTO`
**Parametri**:
* `Scena`: Nome dello script da raggiungere

Goes to a particular scene. Note that this scene cannot be just any script file; it must be contained
within the event table.


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

Fa apparire sullo schermo nero una transizione nera.


## `SCREEN_FADEOUT`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade out Percentage`: The percentage of darkness to fade into (where 0 is fully bright and 100 is fully dark; e.g. 50 means that the screen will be 50% brighter than full black when the fade is complete); only respected by color fades
* `Custom Color`: The color the fade will be if `Color` is set to `CUSTOM`
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color defined by `Custom Color`; this parameter must match that of the subsequent [`SCREEN_FADEIN`](#screen_fadein) call

Fa terminare la transizione sullo schermo nero.


## `SCREEN_FLASH`
**Parametri**:
* `Inizio dissolvenza (Frame)`: Porzione di tempo dove lo schermo inizia a flasha
* `Attesa (Frame)`: Per quanto tempo deve durare la flashata con i colori
* `Fine Dissolvenza (Frames)`: Porzione di tempo dove lo schermo finisce di flashare
* `Colore`: Colore della flashata

Che colore e che durata dare alle flashate sullo schermo.


## `SCREEN_SHAKE`
**Parametri**:
* `Durata (Frame)`: Quanto dura lo scuotersi dello schermo (se si mette -1 come valore, lo schermo non smetterà mai di muoversi)
* `Intensità Orizzontale`: Intensità dei movimenti orizzontali
* `Intensità Verticale`: Intensità dei movimenti verticali

Lo schermo inizia a scuotersi.


## `SCREEN_SHAKE_STOP`
**Parametri**: Nessuno

Disattiva il comando [`SCREEN_SHAKE`](#screen_shake) . (Da usare se il comando `Duration`[`SCREEN_SHAKE`](#screen_shake)
è impostato su -1).


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

Da al giocatore una scelta da compiere. Le scelte vengono caricate dalla loro sezione tramite il loro ID che risponderanno alla scelta fatta.
Quando viene compiuta una scelta, l'ID andrà a caricare uno script preciso.

`SELECT` non si può usare nello script iniziale, senza nome.


## `SET_PLACE`
**Parameters**:
* `Display?`: Se mostrare la grafica di una zona o meno
* `Place`: Posto da mostrare

Modifica i nomi delle zone


## `SKIP_SCENE`
**Parametri**:
* `Salta Scene`: Quante scene da saltare

Sets up the [`NEXT_SCENE`](#next_scene) command to skip a specified number of scenes as defined in the [Scenario](../scenario/game-flow).


## `SND_PLAY`
**Parameters**: 
* `Sound`: The SFX to be played
* `Mode`: Whether to start or stop the sound
* `Volume`: The volume of the sound
* `Load Sound`: If true, loads the sound into memory before playing it (necessary when playing a sound for the first time)
* `Crossfade Time (Frames)`: Time in frames that the sound will crossfade; only can be used when changing the volume of the same sound

Plays a sound effect.


## `SND_STOP`
**Parameters**: None

Stops the currently playing sound. Unused in game.

## `STOP`
**Parametri**: Nessuno

Ferma tutti gli script e fa bloccare il gioco. Inutilizzato.


## `TOGGLE_DIALOGUE` 
**Parametri**:
* `Mostra`: Decide se mostrare il box di dialogo o meno

Mostra/nasconde il box di dialogo. Molti di questi comandi fanno già questa cosa (es `DIALOGUE` mostra automaticamente il box).


## `TOPIC_GET`
**Parametri**:
* `Discussioni`: Le discussioni che vengono date al giocatore

Gives the player a particular topic.


## `TRANS_IN`
**Parameters**:
* `Transition`: Transizione da usare

Parte una transizione che riporta alla scena.


## `TRANS_OUT`
**Parametri**:
* `Transizione`: Transizioni da usare

Fa partire una transizione sullo schermo nero.


## `VCE_PLAY`
* `Voice Line`: Fa partire un dialogo doppiato

Fa partire un file audio doppiato


## `VGOTO`
**Parametri**:
* `Condizioni`: Condizioni da spuntare
* `Sezione Script`: Sezione script da raggiungere

Raggiunge una sezione di script precisa, se la condizione viene spuntata.

## `WAIT` 
**Parametri**:
* `Tempo (Frame)`: Quanti frame aspettare

Fa attendere un determinato numero di frame.

## `WAIT_CANCEL`
**Parametri**:
* `Tempo (Frame)`: Quanti frame aspettati.

Identico al comando [`WAIT`](#wait),ma l'azione si può cancellare toccando lo schermo o premendo un tasto.