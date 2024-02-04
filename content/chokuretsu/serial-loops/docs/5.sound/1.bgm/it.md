---
title: 'Background Music'
locale: 'it'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/bgm.png'
  previous: '/chokuretsu/serial-loops/docs/sound'
  next: '/chokuretsu/serial-loops/docs/sound/voice'
---

Background music items can be opened and played. However, due to limitations with how sound output is implemented, Serial Loops does not allow
seeking for background tracks. 

![Background music editor](/images/chokuretsu/serial-loops/sound-editing.png)

## Replacement
All background music can be replaced with a click of a button. The replacement currently supports conversion from WAV, FLAC, MP3, and OGG (Vorbis) formats.
If at any point you want to revert to the game's original music, you can hit the "Restore" button to do so.

## Adjusting Volume
Pressing the "Adjust Volume" button brings up a modal for doing just that. Chokuretsu's music is quieter than a lot of other tracks, so being able to tamp
down the volume is very useful and can be done easily (and visually) from here.

## Managing Track Looping
Under the hood, Chokuretsu uses the CriWare ADX format for its background music. A primary feature of this format is the ability to encode looping
information directly into the audio file. Serial Loops provides an easy way to visualize and manually adjust this. After clicking "Manage Loop," the
loop management modal will appear. From here, pressing the play button will play the last five seconds before the loop point and the first five seconds
after the loop point. You can drag the sliders or manually type in the numeric steppers to adjust the timestamps of where the loop begins and ends.