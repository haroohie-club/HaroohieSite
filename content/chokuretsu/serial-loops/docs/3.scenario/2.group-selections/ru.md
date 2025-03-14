---
title: 'Выбор группы'
navigation:
  icon: '/images/chokuretsu/serial-loops/file-icon/group-selection.png'
  previous: '/chokuretsu/serial-loops/docs/scenario/game-flow'
  next: '/chokuretsu/serial-loops/docs/graphics'
---

Текущая версия Serial Loops позволяет вам только просматривать выбранные группы, но не редактировать их, поэтому документация здесь будет скудной.
В будущем с обновлениями Serial Loops позволит полностью редактировать выбранные группы, а эта документация будет дополнена.

## Обзор
Элементы группового выбора представляют собой разделы игры, в которых вы разделяете команду SOS для выполнения различных задач. Групповые выборы
появляются в игре при использовании команды `GROUP_SELECTION` [Scenario](./game-flow). Появится следующий экран:

![Скриншот назначения задачи](/images/chokuretsu/screenshots/task-assignment.png)

На этом экране есть от двух до четырех полей разного цвета, помеченных буквами от A до D. Эти поля обозначают возможные символы **задач**, на выполнение которых можно отправить персонажей, 
перетаскивая их портреты в коробку.

Каждая возможная группа персонажей в конкретной задаче определяет **маршрут** для этой задачи. Обратите внимание, что маршруты определяются как подмножество задач,
а не как свойство общего распределения персонажей между всеми задачами (т. е. маршруты зависят только от персонажей в конкретной задаче
и не зависят от распределения персонажей в других задачах).

##В Serial Loops
Текущий редактор выбора групп позволяет просматривать следующие свойства:

* От двух до четырех **заданий**, доступных как часть выбора группы. В редакторе вы можете увидеть название задания, а также:
  -Присутствует ли Харухи для этого задания (портрет персонажа Харухи отображается заблокированным на задании, когда она присутствует)
  -Требуется ли член бригады для этого задания (либо определенный персонаж заблокирован, либо просто требуется отправить члена бригады)
  -Описание задания в "будущем времени", которое отображается на экране выбора группы
  -Описание задания в "прошедшем времени", которое отображается на экране обзора тем
    -"оптимальная группа" &ndash; это, похоже, не имеет механического эффекта, но это группа персонажей, которые собирают больше всего тем,
  когда они отправляются на это задание _без_ Кёна
  - "худшая группа" &ndash; опять же, насколько нам известно, никакого механического эффекта, но это группа персонажей, которые собирают меньше всего тем,
    когда их отправляют на это задание _без_ Кёна
* Внутри каждого задания есть описания каждого **маршрута**, доступного в этом задании. В дополнение к названию маршрута (которое можно увидеть в игре в диалоговом 
  пузыре Кёна, когда маршрут выбран с присутствующим Кёном), редактор позволяет вам наблюдать следующие свойства:
  - Скрипт, связанный с темой &ndash; это скрипт, который будет загружен, когда выбранная группа (включая Кёна) отправляется на это задание
  - Персонажи, участвующие &ndash; список персонажей, участвующих в этой теме
  - Темы без Кёна &ndash; это темы, собранные группой, когда их отправляют на это задание _без_ Кёна

![Group selections editor](/images/chokuretsu/serial-loops/group-selections-editor.png)