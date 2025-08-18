---
title: 'Group Selections'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/group-selection.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/game-flow'
  next: '/chokuretsu/serial-loops/docs/scenario/maps'
---

The current version of Serial Loops only allows partial editing of group selections. In a future version of Serial Loops, all aspects of group selections will be editable.

## Overview
Group selection items represent the sections of the game where you divide up the SOS Brigade to accomplish different _objectives_. The group selections are triggered in-game when the `GROUP_SELECTION` [Scenario](./game-flow) command is called. It brings up the following screen:

![Objective assignment screenshot](/images/chokuretsu/screenshots/task-assignment.png)

On this screen, there are two to four boxes of different colors labeled A through D. These boxes represent the possible **objectives** characters can be sent to complete by dragging their character portraits into the box.

Every possible group of characters in a particular task defines a **route** for that task. Note that routes are defined as a subset of the objectives, not as a property of the overall distribution of characters between all tasks (i.e., routes only depend on the characters in the objective Kyon is assigned to and are independent of the character distribution in other objectives). However, the characters assigned to objectives other than the one Kyon is doing are able to collect topics, defined here as "Kyonless topics".

## In Serial Loops
L'editor della divisione dei gruppi ti permette di vedere le seguenti caratteristiche:

* The two to four **objectives** available as part of the group selection. In the editor, you can see the title and position of the objective as well as whether Haruhi is assigned to that objective and if there are any required brigade members for it. Clicking on the objective reveals:
  - The title of the objective as an editable field
  - The "future tense" description of the task, which is seen on the group selection screen
  - The "past tense" description of the task, which is seen on the topics recap screen

Additionally, inside each objective are the descriptions of each **route** for that objective. In addition to the route's title (which can be seen in-game in Kyon's dialogue bubble when the route is selected with Kyon present), the editor allows you to observe the following properties:
  - The script associated with the topic &ndash; this is the script that will be loaded for the selected group (including Kyon) is sent on this task
  - Characters involved &ndash; the list of characters involved in this topic
  - Kyonless-topics &ndash; these are the topics gathered by the group when they are sent on that task _without_ Kyon

![Group selections editor](/images/chokuretsu/serial-loops/group-selections-editor.png)