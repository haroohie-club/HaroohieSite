---
title: 'Topics'
locale: 'en'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/topic.png'
  previous: '/chokuretsu/serial-loops/docs/misc/characters'
  next: '/chokuretsu/serial-loops/docs/misc/applying-hacks'
---

## Overview
Topics are items given to the player throughout Chokuretsu that represent things that can be used to distract Haruhi. They are granted
during the main visual novel portions by the [`TOPIC_GET`](../scripts/commands#topic_get) command and can be used during the puzzle phase
to trigger associate scenes.

All topics have an ID, a name/title, and a type. Topic types are either **Main**, **Haruhi**, **Character**, or **Sub**. Additionally,
topics all have an episode and group selection they are associated with. Main, Haruhi, and Character topics also have an associated script
file. Finally, all topics have information on how much time the player will gain after using said topic during the puzzle phase. The times
are weighted by the character accompanying Haruhi, giving each character a unique time gain from each topic.

## In Serial Loops
Serial Loops editing the topic name, associated script, episode group, and "puzzle phase group" (this last value is not fully understood).
Additionally, it allows for editing the time gained by using the topic and the associated character weights. Additionally, the ID and topic type
can be viewed but not edited. Topic IDs are inherently tied to the type of the topic, and thus changing the topic type or ID on its own would
cause errors. In a future version of Serial Loops, topics will be able to be added to the game, allowing new topics of specific types to be
created.

![Topic editor](/images/chokuretsu/serial-loops/topic-editing.png)