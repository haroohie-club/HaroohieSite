---
title: &title 'Welcome! and Why?'
description: &desc 'An introduction to the Haroohie Translation Club blog and an explanation of our motivations for translating Haruhi games.'
locale: 'en'
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
  - name: 'twitter:descripton'
    value: *desc
  - name: 'twitter:image'
    value: *img
  - name: 'twitter:site'
    value: '@haroohie'
  - name: 'twitter:card'
    value: 'summary_large_image'
---

You’re now reading the first Haroohie Translation Club blog post, which either means you scrolled pretty far back or you’re here pretty early. My name is Jonko, and I’m the project lead for the club. As a result of my position, the responsibility of writing most of the blog posts has fallen to me, but I can guarantee we’ll have other writers here from time to time. This blog is where we’re going to try to unscrew the casing and take a look at the internals of this project we’re all working so hard on. We’ll give an insider look at the reverse-engineering and ROM hacking we’ve done, examine the complexities of translating from Japanese to English, and maybe even delve into the world of project management. But before all that, in this first blog post, I’d like to answer a question that often gets asked: why?

Why stay up late getting into Discord arguments about whether Nagato should say “Fine” or “It’s fine”? Why take vacation time to reverse-engineer a proprietary scripting language? Why pour thousands of hours into hacking, translating, and graphics editing all to create patches for games that the publishers didn’t think worthy of official international releases?

Speaking personally, I happened to stumble into ROM hacking mostly by accident and found that it caused my neurons to fire in such a way that releases a constant stream of dopamine. That, however, still fails to answer the more specific questions: why translation then? Why translate these games specifically?

Asking the team will result in answers that fall into a few different categories:

* **We can make these stories more accessible** – This reason reminds me a lot of why the folks at [Redump](http://redump.org/) and [No-Intro](https://no-intro.org/) are obsessed with preserving games; the world is a better place when people have the opportunity to experience pieces of history or media they’re interested in. By translating games into English, we enable far more people to experience them.
* **We can leave our mark on something we love** –  The title of this bullet is lifted directly from one of our lead translators, Millie, who said it best: “The Haruhi series is my biggest obsession, so seeing a project like this, I knew there was no way I'd miss the chance to get involved. It's been great feeling like I can leave a mark on something I really love, and share that love with others.”
* **Being part of a passionate team is exhilarating** – This one comes from one of our other main translators, Isi: “Having a group of people pool their distinct talents towards the creation of a single thing, doing what they can while entrusting the rest to the others, learning more about yourself, the game, the series, the developers, the craft, the others, each small step of the way. And then seeing something tangible come of it. A physical proof of everyone's efforts that then many other people play and enjoy.” More succinctly from our other ROM Hacker, Ermii: “Our combined work and love for Haruhi is what allows this project to exist and what motivates us to keep going.”
* **It’s intrinsically rewarding** – Hey look, the dopamine reason is back!
* **The games are good, actually** – The games don’t have to be good for the first reason to apply, but I thought I’d mention here that they also happen to be very good. To quote our web dev and graphics guru Will, “Plus, it's really satisfying (not to mention on-brand) to want to ‘spread the excitement’ of [these] games all over the world. 😉”

* **我們可以讓這些故事更容易理解**——這個原因讓我想起了為什麼 [Redump](http://redump.org/) 和 [No-Intro](https://no-intro.org/) 的人們痴迷於儲存遊戲；當人們有機會體驗他們感興趣的歷史或媒體時，世界會變得更美好。透過將遊戲翻譯成英語，我們可以讓更多的人體驗它們。
* **我們可以在我們喜歡的東西上留下我們的印記**——這句話直接取自我們的首席翻譯之一，Millie，他的回答是：“涼宮春日系列是我最喜歡的系列，所以看到這個專案，我知道我不會錯過參與的機會。我感覺很好，我可以在我真正喜歡的東西上留下印記，並與他人分享這種愛。”
* **成為一個充滿激情的團隊的一員很令人振奮**——這句話來自我們的另一位主要翻譯，Isi：“讓一群人集中他們獨特的才能來創造一件事，盡他們所能，同時把剩下的交給其他人，更多地瞭解自己、遊戲、系列、開發人員、工藝、其他人、每一小步。然後看到從中誕生了一些實實在在的東西。這是每個人努力的實體證明，然後許多其他人都會玩得很開心。”我們的另一位 ROM 破解者 Ermii 說得更簡潔：“我們對涼宮春日系列的工作和熱愛是這個專案得以存在的原因，也是我們繼續前進的動力。”
* **它本質上是有回報的**——嘿，看，多巴胺的原因又回來了！
* **說實話，這些遊戲很好**——申請的第一個理由不一定是這些遊戲很優秀，但我想在這裡提到的是，它們碰巧也非常優秀。引用我們的網頁開發和影像專家 Will 的話，“此外，想要在全世界‘傳播這些遊戲的興奮感’真的很令人滿意（更不用說能夠展示自己）。😉”