---
title: 'Comandi'
locale: 'it'
navigation:
  faicon: 'fa6-solid:code'
  previous: '/chokuretsu/serial-loops/docs/scripts'
  next: '/chokuretsu/serial-loops/docs/scripts/chibis-and-choices'
---

In questa pagina verranno illustrati tutti i comandi che ti serviranno per programmare.

## Nota bene
* Nei comandi il tempo viene chiamato in _frame_. Il gioco gira a 30 FPS, quindi, se vuoi far aspettare un secondo dovrai
scrivere `WAIT` per 30 frame.

## `AVOID_DISP`
**Parametro**: Nessuna

Mostra le "discussioni principali -> Senza usare le" grafiche.


## `BACK`
**Parametro**: Nessuna

Se usato all'inizio di una sezione di script, farà partire la prima sezione di quest'ultimi. Altrimenti, fa sì che lo script torni a ciò che lo ha chiamato (ad esempio, la fase puzzle)
o ritorna alla fase di investigazione.


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

`BG_DISPCG` funziona come [`BG_DISP`](#bg_disp) ma mostra più texture &ndash; principalmente mostra tali sfondi, `TEX_CG`, `TEX_CG_DUAL_SCREEN`,
`TEX_CG_WIDE`, e `TEX_CG_SINGLE`. Nota che le CG sono ben diverse dalle immagini VN. Prima di mostrare un'immagine BG, con il comando BG_DISPC,
digita [`BG_REVERT`](#bg_revert).


## `BG_FADE`
**Parametri**:
* `Sfondi`: Sfondi che vengono mostrati con [`BG_DISP`](#bg_disp)
* `Sfondi (Temp/CG)`: L'index degli sfondi che appare in [`BG_DISPCG`](#bg_dispcg); specificatamente diversi dai `Sfondi`
* `Tempo (Frame)`: Quanti frame dura quella scena

Funziona come gli altri comandi ma fa scomparire lo sfondo anziché farlo vedere.


## `BG_REVERT`
**Parametri**: Nessuno

Annulla l'ultimo cambiamento fatto agli sfondi `BG_DISP` (attenzione [`BG_FADE`](#bg_fade) e [`BG_DISPCG`](#bg_dispcg) verranno annullati).
Devi necessariamente digitare questo comando per tornare allo sfondo di prima `TEX_BG`.Se vuoi annullare i cambiamenti alle`TEX_CG_DUAL_SCREEN` BG, 
[`SET_PLACE`](#set_place) deve essere usato per impostare dove e cosa far apparire.

`BG_REVERT` cerca di ricaricare le stesse immagini CG, dopo che il comando `BG_REVERT` ha fatto
crashare/mandare in tilt/bloccare il gioco.
Se devi muoverti tra le varie CG, usa il comando [`BG_FADE`](#bg_fade).


## `BG_SCROLL`
**Parametri**:
* `Direzione scorrimento`: Come muoversi tra le varie immagini
* `Velocità scorrimento`: A quale velocità muoversi (tieni sempre questo parametro su 1)

Se lo schermo deve mostrare un'immagine molto grossa (tipo `TEX_CG_DUAL_SCREEN`, `TEX_CG_WIDE`, e `TEX_CG_SINGLE`),
fai scorrere lo sfondo in maniera PRECISA.


## `BGM_PLAY`
**Parametri**:
* `Music`: Quando far partire o interrompere la musica di sottofondo
* `Mode`: Quando far partire o interrompere la musica
* `Volume`: Volume della musica in sottofondo (0 iè il minimo, 100 è il massimo)
* `Assolvenza (Frames)`: Frame quando la canzone sta per iniziare
* `Dissolvenza (Frames)`: Frame quando la canzone sta per finire

Riproduce o interrompe la musica di sottofondo.


## `CHESS_CLEAR_ANNOTATIONS`
**Parametri**: None

Rimuove tutte le annotazioni della scacchiera. Inutilizzato.


## `CHESS_LOAD`
**Parametri**:
* `Scacchi`: Carica i file degli scacchi

Carica un file della modalità scacchi dalla memoria (se la sovrapposizione è attiva) lo caricherà sulla scacchiera.


## `CHESS_MOVE`
**Parametri**:
* `White Space Begin`: La casella di partenza di una pedina bianca
* `White Space End`: La casella di arrivo di una pedina bianca
* `Black Space Begin`: La casella di partenza di una pedina nera
* `Black Space End`: La casella di arrivo di una pedina nera

La traiettoria di spostamento di una pedina.


## `CHESS_RESET`
**Parametri**: Nessuno

Riporta la scacchiera ad inizio partita.


## `CHESS_TOGGLE_CROSS`
**Parametri**:
* `Cross Space 0-15`: Spazi sui quali aggiungere/togliere una croce su di essi

Rimuove tutti gli spazi con sopra una croce rossa. Se è già stato rimosso, questo comando annulla l'azione.


## `CHESS_TOGGLE_GUIDE`
**Parametri**:
* `Piece 1`: Uno spazio contente un pezzo con le sue possibili mosse
* `Piece 2`: Uno spazio contente un pezzo con le sue possibili mosse
* `Piece 3`: Uno spazio contente un pezzo con le sue possibili mosse
* `Piece 4`: Uno spazio contente un pezzo con le sue possibili mosse

Mostra le possibili mosse di un pezzo in rosso. Se quel pezzo è già evidenziato, il comando disattiverà l'azione.


## `CHESS_VGOTO`
**Parameters**:
* `Clear Block`: Script che carica la schermata di vittoria
* `Miss Block`: Script che carica la schermata di sconfitta
* `Miss 2 Block`: Script che carica una schermata di sconfitta inutilizzata

Controlla quale schermata caricare una volta finita una partita a scacchi.


## `CHESS_TOGGLE_HIGHLIGHT`
**Parametri**:
* `Highlight Space 0-15`: Spazi illuminati

illumina una casella della scacchiera in giallo. Se lo spazio è già segnalato, questo comando disattiverà l'azione.


## `CHIBI_EMOTE`
**Parametri**:
* `Chibi`: Chibi da mostrare
* `Emote`: L'emozioni che devono fare

Con questo comando potrai decidere quale emozione far apparire sopra la testa dei [chibi](../graphics/chibis) sullo schermo superiore.


## `CHIBI_ENTEREXIT`
**Parametri**:
* `Chibi`: Decidere quali chibi devono entrare o uscire di scena
* `Enter/Exit`: Decidere quando i chibi devono entrare o uscire di scena
* `Delay (Frames)`: Decidere il numero esatto di fotogrammi quali chibi devono entrare o uscire

Decide quando un [chibi](../graphics/chibis) entra o esce di scena. Assicurati, prima di attivare questo comandi, di dare ad un chibi l'animazione di camminata
(animation 01) assieme a quella dove rimane fermo (animation 00).


## `CONFETTI`
**Parametri**:
* `Visible`: Se spuntato dei coriandoli appariranno, se non è spuntato non appariranno.

Decidi se far vedere dei coriandoli che cadono sullo schermo superiore.


## `DIALOGUE`
**Parameters**:
* `Dialogue`: The dialogue line, composed of a speaker and the dialogue text
* `Sprite`: The character sprite to display when the dialogue is displayed
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

Piccole note sugli sprite:
* Gli sprite sono associati con uno speaker
* Gli sprite non appariranno finché non sarà data un'animazione di entrata al primo della serie
* Dopo che il primo sprite verrà associato da uno speaker, gli altri personaggi associati con quello speaker possono
  essere mostrati senza usare transizioni
* Se non darai agli sprite l'animazione di uscita, il personaggio non uscirà di scena

For dialogue, there are a number of operators available that have different effects:
| Operator | Example | Effect |
|----------|---------|--------|
| `$num` | `$9` | Adjust the speed at which text appears on the screen; used to sync text with voice lines |
| `#Wnum` | `#W20` | Waits for a number of frames before continuing to show text on the screen |
| `#Pnum` | `#P5` | Changes the color of the text; the available colors can be seen in the table below |
| `#DP` | `#DP` | "Dialogue placeholder," doesn't have much of a function |
| `#SEnum` | `#SE001` | Plays a sound effect as [`SND_PLAY`](#snd_play) |
| `#SK0` | `#SK0Shake#sk` | Shakes the text; terminated with `#sk` |

The colors available with the `#P` operator:
| Operator | Color |
|----------|-------|
| `#P00` | Standard white text |
| `#P01` | Yellow text like in Kyon's monologue |
| `#P02` | Slightly off-white text |
| `#P03` | Gray-ish text |
| `#P04` | Lavendar text used for the Info speaker |
| `#P05` | Red, used for mentioning topics |
| `#P06` | Faded gray |
| `#P07` | Black |

## `EPHEADER`
**Parametri**:
* `Episode Header`: Index delle texture dei titoli da usare, i.e. 1 = Episodio 1, 2 = Episodio 2, 3 = Episodio 3, 4 = Episodio 4, 5 = Episodio 5, 6 = Epilogo (Se sei furbo capirai che, -1 è il menù principale)

Imposta quale schermata del capitolo far apparire sullo schermo superiore.


## `FLAG`
**Parametri**:
* `Flag`: La flag da impostare
* `Set`: 1 = impostare, 0 = completato

Imposta i parametri delle flag.


## `GLOBAL2D`
**Parametri**:
* `Value`: Valore da impostare al parametro `global2D`

imposta un valore preciso ad una serie di parametri. Ancora non sappiamo bene quali parametri influenzi.


## `GOTO`
**Parametri**:
* `Script Section`: La sezione script da raggiungere

Passi ad una sezione di script scelta da te.


## `HARUHI_METER`
**Parametri**:
* `Add`: Valori da aggiungere al Haruhimetro (Valori positivi portano verso la distrazione, mentre quelli negativi portano alla concentrazione)
* `Set`: Valori da impostabili al Haruhimetro (Non visibili)

Cambia i valori del Haruhimetro. Il minimo è 0 (indicatore sul 10%) il massimo è 9 (indicatore sul 100%).


## `HARUHI_METER_NOSHOW`
**Parametri**:
* `Add`: Aggiunge valori al Haruhimetro

Aumenta o diminuisce il valore del Haruhimetro (i suoni si sentono ancora). In gioco non viene utilizzato.


## `HOLD`
**Parametri**: Nessuno.

Ferma lo scorrere dello script fino a quando il giocatore non interviene. 


## `INIT_READ_FLAG`
**Parametri**: Nessuno

Non sappiamo cosa faccia, inutilizzato in gioco.


## `INVEST_END`
**Parametri**: Nessuno

La fase investigazione viene interrotta e si torna in modalità visual novel. Lo schermo diventa nero per alcuni secondi.


## `ITEM_DISPIMG`
**Parametri**:
* `Item`: Oggetti da mostrare
* `X`
* `Y`

Mostra un oggetto specifico. in certe circostanze, funziona; comunque, c'è rischio di mandare in tilt il gioco. Inutilizzato.


## `INVEST_START`
**Parametri**:
* `unknown00`
* `unknown01`
* `unknown02`
* `unknown03`
* `End Script Section`: La sezione selezionata che finisce con il comando [`INVEST_END`](#invest_end).

Da il via alla modalità investigazione. C'è una transizione su schermo nero.


## `KBG_DISP`
**Parametri**:
* `"Kinetic" Background`: Lo sfondo cinetico viene mostrato sullo schermo superiore

Mostra uno (il nome l'ho scelto io) [sfondo cinetico](../graphics/backgrounds) sullo schermo superiore. Deve essere di tipo `KINETIC_SCREEN`.


## `LOAD_ISOMAP`
**Parametri**:
* `Map`: Carica la mappa

Carica una mappa isometrica che [`INVEST_START`](#invest_start) deve usare.

## `MODIFY_FRIENDSHIP`
**Parameters**:
* `Character`: Personaggi che vengono influenzati: Haruhi, Mikuru, Nagato, Koizumi e Tsuruya.
* `Modify By`: Il livello amicizia da cambiare per i vari personaggi

Modifica il "livello amicizia" dei personaggi, aggiungendo un valore specifico. Deve essere positivo o negativo. Il livello amicizia
iniziale è 1, e continua a cambiare per tutta la durata della partita. Ogni personaggio ha la sua variabile:

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

Non fa nulla.


## `NOOP2`
**Parametri**: Nessuno.

Non fa nulla.


## `NOOP3`
**Parametri**: Nessuno.

Non fa nulla.


## `OP_MODE` 
**Parametri**: Nessuno

Disattiva l'UI dello schermo superiore, la possibilità di saltare i dialoghi e fa apparire e muovere il Chibi di Kyon al centro dello schermo superiore.
Usato solo nel prologo.


## `PALEFFECT`
**Parametri**:
* `Mode`: Le palette da applicare (gli effetti disponibli sono: Defalut, invertita, scala di grigi, seppia e oscurato)
* `Time (Frames)`: Quanti fotogrammi deve durare la transizione della palette dello sfondo
* `Unknown`: Il codice dice che fa qualcosa, ma non capiamo cosa


## `PIN_MNL`
**Parametri**:
* `Dialogue`: Comando che controlla le linee di [`DIALOGO`](#dialogue)

Crea una linea di dialogo come monologo sopra gli altri dialoghi. Cancellabile dopo aver finito una partita a scacchi.


## `REMOVED`
Rimosso dalla versione finale (non si trova nulla nel codice.)


## `SCENE_GOTO`
**Parametri**:
* `Scene`: Nome dello script da raggiungere

Ti permette di raggiungere una certa scena. Non può portare a tutte le scene di gioco; ma solo quelle contenute
in un particolare vettore speciale del ARM9; inoltre, modificare la ROM modificherà i vettori.


## `SCENE_GOTO2`
**Parameters**:
* `Scene`: Name of the script file to go to

Behaves as [`SCENE_GOTO`](#scene_goto), except this command does not clear a flag before jumping. Otherwise, they seem to be identical.


## `SCREEN_FADEIN`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade In Percentage`: The percentage of darkness to fade into (where 0 is fully bright and 100 is fully dark; e.g. 50 means the screen will be 50% darker 
  than full brightness when the fade in is complete); only respected by custom color fades
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color set by a previous [`SCREEN_FADEOUT`](#screen_fadeout); this parameter must match
  that of the previous [`SCREEN_FADEOUT`](#screen_fadeout) call

Causes the screen to fade in.


## `SCREEN_FADEOUT`
**Parameters**:
* `Fade Time (Frames)`: The length of the fade in frames
* `Fade out Percentage`: The percentage darkness to fade into (where 0 is fully bright and 100 is fully dark; e.g. 50 means that the screen will be 50%
  brighter than full black when the fade is complete); only respected by color fades
* `Custom Color`: The color the fade will be if `Color` is set to `CUSTOM`
* `Location`: The screen(s) the fade will be applied to
* `Color`: Either black, white, or the custom color defined by `Custom Color`; this parameter must match that of the subsequent
  [`SCREEN_FADEIN`](#screen_fadein) call

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


## `SCREEN_SHAKE_STOP`
**Parameters**: None

Stops screen shaking from a [`SCREEN_SHAKE`](#screen_shake) command. (Used when the `Duration` parameter of said [`SCREEN_SHAKE`](#screen_shake)
is set to -1).


## `SELECT`
**Parameters**:
* `Option 1`: The first choice to be presented
* `Option 2`: The second choice to be presented
* `Option 3`: The third choice to be presented
* `Option 4`: The fourth choice to be presented
* `unknown08` 
* `unknown0A` 
* `unknown0C` 
* `unknown0E`

Presents the player with a series of choices that branch the dialogue tree. Choices are defined in their own section and have IDs that correspond to labels set in the labels section. When a choice is chosen, this ID is used to select which script block will be jumped to.

`SELECT` cannot be used in the initial, unnamed script block.


## `SET_PLACE`
**Parameters**:
* `Display?`: Whether to display the location graphic or not
* `Place`: The place to display

Modifies the displayed place name.


## `SKIP_SCENE`
**Parameters**:
* `Scenes to Skip`: Number of scenes that should be skipped

Sets up the [`NEXT_SCENE`](#next_scene) command to skip a specified number of scenes as defined in `SCENARIO.S` (evt.bin #580).


## `SND_PLAY`
**Parameters**: 
* `Sound`: The sound to be played from `snd.bin`
* `Mode`: Whether to start or stop the sound
* `Volume`: The volume of the sound
* `Crossfade Time (Frames)`: Time in frames that the sound will crossfade; only can be used when changing the volume of the same sound

Plays a sound from the SDAT `snd.bin`.

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


## `UNKNOWN0A`
**Parameters**: None

Unused in the game, unknown what this does.


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

## `WAIT_CANCEL`
**Parameters**:
* `Time (Frames)`: The number of frames to wait.

A command nearly identical to [`WAIT`](#wait), but allows for the wait to be canceled with a button press or screen tap.