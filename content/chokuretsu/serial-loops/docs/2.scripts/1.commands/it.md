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
**Parametri**:
* `Dialogue`: linea di dialogo, con interlocutore e il testo
* `Sprite`: lo sprite al quale viene associato il dialogo
* `Sprite Entrance Transition`: Transizione che fa entrare uno sprite in scena
* `Sprite Exit/Move Transition`: Transizione che fa uscire uno sprite di scena
* `Sprite Shake`: Fa scuotere lo sprite 
* `Voice Line`: Linea di dialogo da riprodurre
* `Text Voice Font`: Quando applicare un font quando un dialogo non è doppiato
* `Text Speed`: Velocità di caricamento di un testo
* `Text Entrance Effect`: Eventuali effetti da applicare ad un testo
* `Sprite Layer`: Determines which "layer" a sprite should be rendered on entrance; higher numbers are rendered on top of lower ones
* `Don't Clear Text`: Se spuntato, il prossimo dialogo verrà mostrato nella stessa nuvoletta di quello precedente
* `No Lip Flap`: Disabilità il movimento delle labbra

Mostra una linea di dialogo e/o cambia gli [Sprite dei personaggi](../graphics/sprites). Possono anche contenere un [testo doppiato](../sound/voice).

Piccole note sugli sprite:
* Gli sprite sono associati con uno speaker
* Gli sprite non appariranno finché non sarà data un'animazione di entrata al primo della serie
* Dopo che il primo sprite verrà associato da uno speaker, gli altri personaggi associati con quello speaker possono
  essere mostrati senza usare transizioni
* Se non darai agli sprite l'animazione di uscita, il personaggio non uscirà di scena

Esistono molti effetti da applicare ai dialoghi:
| Operatore | Esempio | Effetto |
|----------|---------|--------|
| `$num` | `$9` | Aggiusta la velocità con la quale il testo viene caricato, usalo per sincronizzarlo con un eventuale frase doppiata |
| `#Wnum` | `#W20` | Fa aspettare un determinato numero di frame prima di mostrare la prossima linea di testo |
| `#Pnum` | `#P5` | Cambia il colore del testo, i colori disponibili li trovi nella casella sottostante |
| `#DP` | `#DP` | "Dialoghi di placeholder" Non fanno nulla di speciale |
| `#SEnum` | `#SE001` | Riproduce un file audio dal file [`SND_PLAY`](#snd_play) |
| `#SK0` | `#SK0Shake#sk` | Fa scuotere il testo, da determinare con il comando `#sk` |

The colors available with the `#P` operator:
| Operator | Color |
|----------|-------|
| `#P00` | Bianco |
| `#P01` | Giallo come nei monologhi di Kyon |
| `#P02` | Bianco spento |
| `#P03` | Grigio |
| `#P04` | Lilla, colore usato dal tutorial |
| `#P05` | Rosso, per menzionare le discussioni |
| `#P06` | Grigio chiaro |
| `#P07` | nero|

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
**Parametri**:
* `Scene`: Nome dello script da raggiungere

Si comporta come [`SCENE_GOTO`](#scene_goto), ma non ripulisce i dati della pagina precedente. Del resto sono uguali.


## `SCREEN_FADEIN`
**Parametri**:
* `Fade Time (Frames)`: Quanto dura la transizione dello schermo nero
* `Fade In Percentage`: Quanto deve essere scuro lo schermo (0 è molto chiaro and 100 è molto scuro; es. 50 significa che lo schermo sarà più scuro del 50% 
  anziché essere più chiaro); solo le transizioni con colori personalizzati funziona
* `Location`: le schermate sulle quali applicare le transizioni
* `Color`: Sia bianco, che nero che qualsiasi altro colore impostato da [`SCREEN_FADEOUT`](#screen_fadeout); deve combaciare
  con quello della schermata precedente [`SCREEN_FADEOUT`](#screen_fadeout).

Fa apparire sullo schermo nero una transizione nera.


## `SCREEN_FADEOUT`
**Parametri**:
* `Fade Time (Frames)`: Quanto dura la transizione dello schermo nero
* `Fade out Percentage`: Quanto deve essere scuro lo schermo (0 è molto chiaro and 100 è molto scuro; es. 50 significa che lo schermo sarà più scuro del 50% 
  anziché essere più chiaro); solo le transizioni con colori personalizzati funziona
* `Custom Color`: Il colore che apparirà, a patto che tale `Colore` sia impostato su `Personalizzato`
* `Location`: le schermate sulle quali applicare le transizioni
* `Color`: Sia bianco, che nero che qualsiasi altro colore impostato da [`SCREEN_FADEOUT`](#screen_fadeout); deve combaciare
  con quello della schermata precedente [`SCREEN_FADEIN`](#screen_fadein).

Fa terminare la transizione sullo schermo nero.


## `SCREEN_FLASH`
**Parametri**:
* `Fade In Time (Frames)`: Porzione di tempo dove lo schermo inizia a flasha
* `Hold Time (Frames)`: Per quanto tempo deve durare la flashata con i colori
* `Fade Out Time (Frames)`: Porzione di tempo dove lo schermo finisce di flashare
* `Color`: Colore della flashata

Che colore e che durata dare alle flashate sullo schermo.


## `SCREEN_SHAKE`
**Parametri**:
* `Duration (Frames)`: Quanto dura lo scuotersi dello schermo (se si mette -1 come valore, lo schermo non smetterà mai di muoversi)
* `Horizontal Intensity`: Intensità dei movimenti orizzontali
* `Vertical Intensity`: Intensità dei movimenti verticali

Lo schermo inizia a scuotersi.


## `SCREEN_SHAKE_STOP`
**Parametri**: Nessuno

Disattiva il comando [`SCREEN_SHAKE`](#screen_shake) . (Da usare se il comando `Duration`[`SCREEN_SHAKE`](#screen_shake)
è impostato su -1).


## `SELECT`
**Parametri**:
* `Option 1`: Prima opzione da scegliere
* `Option 2`: Seconda opzione da scegliere
* `Option 3`: Terza opzione da scegliere
* `Option 4`: Quarta opzione da scegliere
* `unknown08` 
* `unknown0A` 
* `unknown0C` 
* `unknown0E`

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
* `Scenes to Skip`: Quante scene da saltare

Imposta il comando [`NEXT_SCENE`](#next_scene) per saltare le scene, seguendo le istruzioni all'interno di `SCENARIO.S` (evt.bin #580).


## `SND_PLAY`
**Parametri**: 
* `Sound`: Il suono che deve essere preso da `snd.bin`
* `Mode`: Quando far iniziare o smettere il file audio
* `Volume`: Il volume del file audio
* `Crossfade Time (Frames)`: Quando il suono dovrà dissolversi, può essere usato solo per cambiare volume all'effetto

Riproduce un suono preso dal file `snd.bin`.

## `STOP`
**Parametri**: Nessuno

Ferma tutti gli script e fa bloccare il gioco. Inutilizzato.


## `TOGGLE_DIALOGUE` 
**Parametri**:
* `Show`: Decide se mostrare il box di dialogo o meno

Mostra/nasconde il box di dialogo. Molti di questi comandi fanno già questa cosa (es `DIALOGUE` mostra automaticamente il box).


## `TOPIC_GET`
**Parametri**:
* `Topic`: Le discussioni che vengono date al giocatore

Consegna al giocatore una discussione.


## `TRANS_OUT`
**Parametri**:
* `Transition`: Transizioni da usare

Fa partire una transizione sullo schermo nero.

## `TRANS_IN`
**Parameters**:
* `Transition`: Transizione da usare

Parte una transizione che riporta alla scena.


## `UNKNOWN0A`
**Parametri**: Nessuno

Inutilizzato, non sappiamo cosa faccia.


## `VCE_PLAY`
* `Voice Line`: Fa partire un dialogo doppiato

Fa partire un file audio doppiato


## `VGOTO`
**Parametri**:
* `Conditional`: Condizioni da spuntare
* `Script Section`: Sezione script da raggiungere

Raggiunge una sezione di script precisa, se la condizione viene spuntata.

## `WAIT` 
**Parametri**:
* `Time (Frames)`: Quanti frame aspettare

Fa attendere un determinato numero di frame.

## `WAIT_CANCEL`
**Parametri**:
* `Time (Frames)`: Quanti frame aspettati.

Identico al comando [`WAIT`](#wait),ma l'azione si può cancellare toccando lo schermo o premendo un tasto.