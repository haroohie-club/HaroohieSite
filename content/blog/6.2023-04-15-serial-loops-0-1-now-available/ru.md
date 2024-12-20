---
title: &title 'Serial Loops v0.1 теперь доступна!'
description: &desc 'Сегодня мы очень рады объявить о выпуске первой версии Serial Loops, нового пакета редактирования для Последовательностей Харухи Судзумии'
navigation:
  description: *desc
  author: 'William'
  year: 2023
  month: 04
  day: 15
  tags: ['chokuretsu', 'serial loops']
  image: '0006/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0006/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-04-16-serial-loops-0-1-now-available'
  - name: 'twitter:title'
    value: *title
  - name: 'twitter:description'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

![Скриншот редактора скриптов Serial Loops](/images/blog/0006/01_serial_loops_script_editing.png)

Привет всем! 

Сегодня мы очень рады сообщить, что публично выпускаем первую версию [Serial Loops](/chokuretsu/serial-loops) для Windows, macOS и Linux. Serial Loops — это новый редактор для *Последовательностей Харухи Судзумии*, игры, над которой мы сейчас работаем [переводя на английский](/ru/chokuretsu).

## Путь к Serial Loops
Если вы следили за нашей замечательной серией постов в блоге [*Проблемы ромхакинга Последовательностей*](/blog/2022-10-19-chokuretsu-compression), вы будете знать всё о работе, которую Jonko проделал для обратного-инжиниринга игры. чтобы включить наш патч для перевода на английский язык. Сначала немного предыстории!

### Работа над Параллелями
Когда мы завершали работу над *Эпизод 1: Класс-людоед*, началась некоторая предварительная работа по пониманию внутренней работы родственной игры Порследовательностей для Wii, *Параллели Харухи Судзумии*. В то время мы относительно мало знали о Последовательностях и, на самом деле, лучше разбирались во внутреннем устройстве Параллелей. Наша ранняя работа над ними включала в себя обратный-инжиниринг 3D-среды и скриптового движка, результатом которого стал первоначальный прототип скрипта импорта в блендер для собственного формата 3D-модели игры.

![Несколько неуклюжая версия Харухи Судзумии, импортированная в окно блендера.](/images/blog/0006/02_haruhi_blender.png)

Как вы можете видеть выше, это заняло некоторое время, чтобы всё исправить! По мере продвижения работы над Параллелями мы пришли к выводу, что нам необходимо *полностью* создать редактор для этой игры, чтобы люди могли делать с ним что угодно!

Эта идея положила начало проекту по созданию *Параллельных циклов* (названных так в честь зацикливания времени в игре). Первая версия инструмента редактора Parallel Loops позволяет загружать карты Параллелей в редактор игрового движка Unity и изменять положения персонажей, чтобы настроить расположение окружения в игре. 

![Фотография пролога Последовательностей Харухи Судзумии сверху, на которой виден Оберон, пришвартованный в гавани.](/images/blog/0006/03_parallel_loops_unity.png)

В конечном итоге нашу работу над «Параллелями» как команде пришлось приостановить, поскольку мы решили уделить больше времени завершению первого эпизода «Последовательностей». Однако когда работа над переводом *Эпизода 2: Неоконченная соната* была завершена, мысль о создании редактора возникла вновь. К этому времени, благодаря усилиям Jonko раскрылсоь множество загадок вокруг Последовательностей, оставшихся без ответа (о чём мы расскажем в будущих постах в блоге!).

После некоторого весёлого обсуждения внутри компании появилось несколько идей о том, как можно адаптировать Последовательности в качестве основы для других визуальных новелл DS, мы решили начать планировать и создать для него полноценную программу редактирования — Serial Loops!

### Проектирование редактора с нуля
![Вид экрана создания проекта Serial Loops на самом раннем этапе разработки](/images/blog/0006/04_serial_loops_as_a_baby.png)

Нашей целью при создании Serial Loops было сделать простой в использовании и мощный редактора для Последовательностей, который можно было бы использовать для создания кастомного визуального романа для DS; тот, который мог бы взаимодействовать с уникальными механиками движка этой игры, такой как изометрические карты и головоломки.

Вначале мы остановились на нескольких ключевых вариантах дизайна. Мы рассмотрим их подробнее в ходе разработки, но чтобы дать вам представление о некоторых ключевых решениях, которые мы сделали:
* Абстрагируя разные вещи в Последовательностях, которые можно редактировать в «предметах», но не представляющие актуальную файловую систему самой игры.
* Использование базовой и итеративной системы каталогов для внесения изменений в базовую ROM.
* Использование Eto.Forms для создания кроссплатформенного пользовательского интерфейса, чтобы сделать инструмент простым в использовании для новичков

![Краткий таймлапс создания Serial Loops](/images/blog/0006/05_serial_loops_dev.gif)

Текущая версия Serial Loops, которую мы выпускаем сегодня, v0.1, поддерживает следующее:
* Создание, сохранение, открытие, сборка и запуск проектов из редактора.
* Инструменты для поиска элементов, включая текст внутри элементов (диалоговые строки)
* Редактирование данных игрового баннера, включая его значок и название.
* Редактирование игровых сценариев (включая диалоги, расположение персонажей на картах, данные верхнего экрана и многое другое) с предварительным просмотром в реальном времени.
* Редактирование потока игровых сценариев (т. е. какие сценарии в каком порядке выполняются)
* Замена фона, с автоматическим изменением размера
* Замена и выравнивание звука, изменение параметров петли фоновой музыки, обновление названий дорожек фоновой музыки по мере их появления в бонусной комнате.
* Замена реплик
* Просмотр (но не редактирование) карт, головоломок, тем, изображений географических названий, чиби (и анимации), портретов персонажей (и анимации) и ряда других разных предметов!

Для получения более подробной информации о том, на что он способен [проверьте документацию!](/chokuretsu/serial-loops/docs). Мы думаем, что благодаря инструментам, которые стали доступны сегодня, люди смогут не только делать свои собственные переводы, но и создавать свои игры по мотивам Харухи! По мере дальнейшего развития приложения мы надеемся сделать его мощным инструментом для создания визуальных новелл на DS.

### Куда отсюда?
У нас много планов на Serial Loops, и мы намерены больше рассказывать о процессе работы над ним в нашем блоге и в обновлениях, поэтому обязательно [присоединяйтесь к нам в Discord](https://discord.gg/nesRSbpeFM)! Мы планируем выпускать ночные сборки Serial Loops с последними изменениями в качестве «пре-релизов», а также более поздние «стабильные» релтзы. Средство проверки обновлений в приложении сообщит вам, когда будет доступно обновление для релиза, который вы хотите получить, настроить это вы можете в окне настроек.

![Скриншот средства проверки обновлений Serial Loops](/images/blog/0006/06_serial_loops_update_checker.png)

## Как пользоваться
Хотите попробовать Serial Loops самостоятельно? Мы создали [новый раздел](/chokuretsu/serial-loops) нашего веб-сайта, включая полную документацию по его использованию. Serial Loops доступен для Windows, macOS и Linux, для чего требуется [devkitARM](https://devkitpro.org/) и ROM файл Последовательностей.

Мы надеемся, что вам понравится редактировать игру с помощью Serial Loops, и с нетерпением ждём возможности увидеть того, что вы с ней сделаете!