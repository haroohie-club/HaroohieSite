---
title: &title 'Welcome! and Why?'
description: &desc 'An introduction to the Haroohie Translation Club blog and an explanation of our motivations for translating Haruhi games.'
navigation:
  author: 'Jonko'
  year: 2022
  month: 10
  day: 17
  tags: ['general']
  image: '0001/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img 'https://haroohie.club/images/blog/0001/00_thumbnail.png'
  - name: 'og:image:alt'
    value: 'The SOS Brigade (Suzumiya Haruhi no Chokuretsu box art)'
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2022-10-17-welcome-why'
  - property: 'og:type'
    content: 'article'
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

你现在正在阅读 Haroohie Translation Club 的第一篇博客文章，这意味着你要么向后翻了很多页，或者你非常早地看到了这篇文章。我叫 Jonko，是俱乐部的项目负责人。由于我担任的职务，写大多数博客文章的责任都落在了我身上，但我可以保证，不时会有其他作者在这里分享。在这个博客中，我们将尝试打开箱子，让大家看到我们都在努力工作的这个项目的内部结构。我们将深入介绍我们所做的逆向工程和 ROM 破解，研究从日语翻译成英语的复杂性，甚至可能深入研究项目管理的世界。但在此之前，在我的第一篇博客文章中，我想回答一个经常被问到的问题：为什么？

为什么要熬夜，在 Discord 上争论长门应该说“Fine”还是“It’s fine”？为什么用休息时间对一种专有的脚本语言进行逆向工程？为什么要花数千小时进行破解、翻译和美工，为了一款发行商认为不值得正式在海外发行的游戏创建补丁？

就我个人而言，我偶然进入了破解 ROM 的工作，并发现它导致我的神经元以一种不断释放多巴胺的方式放电。然而，这仍然无法回答更具体的问题：为什么要翻译？为什么要专门翻译这些游戏？

询问团队后，我得到几个不同类别的答案：

* **我们可以让这些故事更容易理解**——这个原因让我想起了为什么 [Redump](http://redump.org/) 和 [No-Intro](https://no-intro.org/) 的人们痴迷于保存游戏；当人们有机会体验他们感兴趣的历史或媒体时，世界会变得更美好。通过将游戏翻译成英语，我们可以让更多的人体验它们。
* **我们可以在我们喜欢的东西上留下我们的印记**——这句话直接取自我们的首席翻译之一，Millie，他的回答是：“凉宫春日系列是我最喜欢的系列，所以看到这个项目，我知道我不会错过参与的机会。我感觉很好，我可以在我真正喜欢的东西上留下印记，并与他人分享这种爱。”
* **成为一个充满激情的团队的一员很令人振奋**——这句话来自我们的另一位主要翻译，Isi：“让一群人集中他们独特的才能来创造一件事，尽他们所能，同时把剩下的交给其他人，更多地了解自己、游戏、系列、开发人员、工艺、其他人、每一小步。然后看到从中诞生了一些实实在在的东西。这是每个人努力的实体证明，然后许多其他人都会玩得很开心。”我们的另一位 ROM 破解者 Ermii 说得更简洁：“我们对凉宫春日系列的工作和热爱是这个项目得以存在的原因，也是我们继续前进的动力。”
* **它本质上是有回报的**——嘿，看，多巴胺的原因又回来了！
* **说实话，这些游戏很好**——申请的第一个理由不一定是这些游戏很优秀，但我想在这里提到的是，它们碰巧也非常优秀。引用我们的网页开发和图像专家 Will 的话，“此外，想要在全世界‘传播这些游戏的兴奋感’真的很令人满意（更不用说能够展示自己）。😉”

从现在开始，这个博客将主要讨论项目的“什么”和“如何”，但我认为首先讨论我们的动机是合适的。我们希望你喜欢我们的工作！