---
title: 'Scorrere del gioco'
locale: 'it'
navigation:
  faicon: 'fa6-solid:book-open'
  previous: '/chokuretsu/serial-loops/docs/scenario'
  next: '/chokuretsu/serial-loops/docs/scenario/group-selections'
---
Puoi alterare lo scorrere del gioco grazie all'editor degli _Scenari_ . Gli scenari sono una lista di comandi che dicono cosa far caricare il gioco e
in che ordine. Nella tabella qua sotto troverai i vari comandi:

## Comandi scena
| Comando | Descrizione |
|---------|-------------|
| `NEW_GAME` | Con questo comando ti permette di cambiare dove ti porterà il menu "New Game". Per esempio, `NEW_GAME 5`ti farà iniziare dal quinto episodio |
| `SAVE` | Questo comando ti permette di salvare. |
| `LOAD_SCENE` | Questo comando ti permette di caricare lo script che più ti aggrada. |
| `PUZZLE_PHASE` | Questo comando farà partire una fase puzzle. |
| `ROUTE_SELECT` | Questo comando ti fa partire dalla divisione dei compiti. |
| `STOP` | Questo comando fa bloccare il gioco. Non serve a molto. |
| `SAVE2` | Anche con questo comando potrai salvare. Non sappiamo ancora la differenza con il comando `SAVE`|
| `TOPICS` | Con questo comando potrai vedere tutte le discussioni che hai sbloccato. |
| `COMPANION_SELECT` | Potrai caricare la schermata di "scelta del compagno" facendo scegliere quale personaggio farà da compagnia ad Haruhi durante le fasi puzzle. |
| `PLAY_VIDEO` | Riproduce un video, 0 mostra la sigla d'apertura, 1 riproduce i crediti. |
| `NOP` | Non fa nulla |
| `UNKNOWN0B` | Funzione sconosciuta. |
| `UNLOCK` | Sblocca alcune cose. Ancora non sappiamo cosa sblocchi di preciso. |
| `END` | Torna alla schermata del titolo. |

## Editing
Gli script dei comandi e scenari possono essere aggiunti o tolti, grazie alle icone + e del cestino, sopra la lista dei comandi.

Cliccando sul razzo cancellerai tutti gli script. Puoi modificare gli script individualmente (sia tutto il comando o solo un singolo parametro) nel pannello a sinistra.

![Scenario Editing](/images/chokuretsu/serial-loops/scenario-editing.png)