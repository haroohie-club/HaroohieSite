---
title: 'Group Selections'
locale: 'it'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/group-selection.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/game-flow'
  next: '/chokuretsu/serial-loops/docs/graphics'
---

The current version of Serial Loops only allows you to view group selections, not edit them, so the documentation here will be sparse.
In a future update, Serial Loops will be capable of fully editing group selections and this documentation will be updated to be more complete.

## Overview
Group selection items represent the sections of the game where you divide up the SOS Brigade to accomplish different tasks. The group selections are
triggered in game when the `GROUP_SELECTION` [Scenario](./game-flow) command is called. It brings up the following screen:

![Task assignment screenshot](/images/chokuretsu/screenshots/task-assignment.png)

On this screen, there are two to four boxes of different colors labeled A through D. These boxes represent the possible **tasks** characters can be
sent to do by dragging their character portraits into the box.

Every possible group of characters in a particular task defines a **route** for that task. Note that routes are defined as a subset of the tasks,
not as a property of the overall distribution of characters between all tasks (i.e., routes only depend on the characters in a particular task
and are independent of the character distribution in other tasks).

## In Serial Loops
The current group selection editor allows you to view the following properties:

* The two to four **tasks** available as part of the group selection. In the editor, you can see the title of the task as well as:
  - Whether Haruhi is present for that task (Haruhi's character portrait appears locked on the task when she is present)
  - If there is a required brigade member for that task (either a specific character locked in or just requiring a brigade member to be sent)
  - The "future tense" description of the task, which is seen on the group selection screen
  - The "past tense" description of the task, which is seen on the topics recap screen
  - The hardcoded "optimal group" &ndash; this doesn't seem to have a mechanical effect, but it's the group of characters that gather the most topics
    when they are sent on that task _without_ Kyon
  - The hardcoded "worst group" &ndash; again, no mechanical effect as far as we know, but it's the group of character that gather the least topics
    when they are sent on that task _without_ Kyon
* Inside each task are the descriptions of each **route** available in that task. In addition to the route's title (which can be seen in-game in Kyon's   
  dialogue bubble when the route is selected with Kyon present), the editor allows you to observe the following properties:
  - The script associated with the topic &ndash; this is the script that will be loaded the selected group (including Kyon) is sent on this task
  - Characters involved &ndash; the list of characters involved in this topic
  - Kyonless-topics &ndash; these are the topics gathered by the group when they are sent on that task _without_ Kyon

![Group selections editor](/images/chokuretsu/serial-loops/group-selections-editor.png)