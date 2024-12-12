---
title: &title 'Вышла Serial Loops v0.2 – с более мощными редакторами и повышенной стабильностью!'
description: &desc 'Вторая версия Serial Loops делает редактор еще более мощным и интуитивно понятным, исправляет массу ошибок, повышая стабильность!'
navigation:
  description: *desc
  author: 'William'
  year: 2023
  month: 06
  day: 25
  tags: ['chokuretsu', 'serial loops']
  image: '0007/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0007/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2023-06-25-serial-loops-0-2-is-out-now'
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

Вторая версия Serial Loops делает редактор еще более мощным и интуитивно понятным, исправляет массу ошибок, повышая стабильность!

Мы обновили [документацию](/chokuretsu/serial-loops/), поэтому, пожалуйста, прочитайте её, чтобы понять как пользоваться этим инструментом!

## Список изменений
### Новые редакторы
В v0.2 добавлена возможность редактирования еще нескольких частей игры:
* Добавлена возможность редактировать строки субтитров, отображаемые при воспроизведении озвученных строк.
* Добавлена возможность редактировать элементы «места» (текст в верхних частях экрана может быть изменен, а графика будет сгенерирована автоматически)
* В этот редактор добавлена возможность редактировать таблички с именами персонажей и объединены конфигурации диалогов (можно менять имена персонажей, а графика будет генерироваться автоматически).
* Добавлено редактирование тем (темы также можно переименовывать, изменять связанные с ними сценарии, можно изменять для них веса выигрыша времени на этапе головоломки)
* Добавлена возможность редактировать и заменять системные текстуры (теперь можно заменить такие вещи, как логотипы начального экрана и много чего ещё)
* Добавлена возможность редактирования текста пользовательского интерфейса.

### Нововведения
Также было добавлено несколько новых функций:
* Добавлена возможность переименовывать элементы для лучшей кастомизации.
* Добавлено новое диалоговоеокно для обрезки/изменения размера, которое значительно упрощает замену графики в редакторе.
* Добавлен расширенный поиск, который позволяет гораздо проще находить и фильтровать элементы по ряду различных параметров.
* Добавлена возможность применять распространённые ромхаки (например, пропустить вступительный ролик)
* Чиби и спрайты персонажей теперь можно экспортировать в виде растровых изображений и GIF-файлов.
* Улучшен алгоритм уменьшения цвета, поэтому заменённая графика в игре выглядит намного лучше.

### User interface
v0.2 also brings a number of UI improvements:
* Fixed a number of accuracy issues with the script preview
* Progress bar dialogs will now always sit atop every other window
* Added quick search to the main project explorer on the left, to let you quickly filter items by name
* Added the Save button to the main toolbar
* Added several new icons and updated existing ones to the menu bar
* Added buttons to quickly re-order commands in the Scenario editor

### Linux
Finally, a few improvements for those running Serial Loops on Linux:
* Added an RPM package for Fedora/RHEL/CentOS users
* Improved the deb package for Ubuntu/Debian users

In addition, a number of bug and crash fixes and general program stability improvements (particularly related to the script editor) have been made for a better and more stable experience! Please enjoy using Serial Loops to create your own Haruhi stories!