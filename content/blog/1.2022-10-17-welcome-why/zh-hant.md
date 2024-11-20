---
title: &title '歡迎！以及為什麼？'
description: &desc '對 Haroohie Translation Club 部落格的簡要介紹，並解釋我們翻譯涼宮春日遊戲的動機。'
navigation:
  author: 'Jonko'
  translator: 'Xzonn'
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

你現在正在閱讀 Haroohie Translation Club 的第一篇部落格文章，這意味著你要麼向後翻了很多頁，或者你非常早地看到了這篇文章。我叫 Jonko，是俱樂部的專案負責人。由於我擔任的職務，寫大多數部落格文章的責任都落在了我身上，但我可以保證，不時會有其他作者在這裡分享。在這個部落格中，我們將嘗試開啟箱子，讓大家看到我們都在努力工作的這個專案的內部結構。我們將深入介紹我們所做的逆向工程和 ROM 破解，研究從日語翻譯成英語的複雜性，甚至可能深入研究專案管理的世界。但在此之前，在我的第一篇部落格文章中，我想回答一個經常被問到的問題：為什麼？

為什麼要熬夜，在 Discord 上爭論長門應該說“Fine”還是“It’s fine”？為什麼用休息時間對一種專有的指令碼語言進行逆向工程？為什麼要花數千小時進行破解、翻譯和美工，為了一款發行商認為不值得正式在海外發行的遊戲建立補丁？

就我個人而言，我偶然進入了破解 ROM 的工作，並發現它導致我的神經元以一種不斷釋放多巴胺的方式放電。然而，這仍然無法回答更具體的問題：為什麼要翻譯？為什麼要專門翻譯這些遊戲？

詢問團隊後，我得到幾個不同類別的答案：

* **我們可以讓這些故事更容易理解**——這個原因讓我想起了為什麼 [Redump](http://redump.org/) 和 [No-Intro](https://no-intro.org/) 的人們痴迷於儲存遊戲；當人們有機會體驗他們感興趣的歷史或媒體時，世界會變得更美好。透過將遊戲翻譯成英語，我們可以讓更多的人體驗它們。
* **我們可以在我們喜歡的東西上留下我們的印記**——這句話直接取自我們的首席翻譯之一，Millie，他的回答是：“涼宮春日系列是我最喜歡的系列，所以看到這個專案，我知道我不會錯過參與的機會。我感覺很好，我可以在我真正喜歡的東西上留下印記，並與他人分享這種愛。”
* **成為一個充滿激情的團隊的一員很令人振奮**——這句話來自我們的另一位主要翻譯，Isi：“讓一群人集中他們獨特的才能來創造一件事，盡他們所能，同時把剩下的交給其他人，更多地瞭解自己、遊戲、系列、開發人員、工藝、其他人、每一小步。然後看到從中誕生了一些實實在在的東西。這是每個人努力的實體證明，然後許多其他人都會玩得很開心。”我們的另一位 ROM 破解者 Ermii 說得更簡潔：“我們對涼宮春日系列的工作和熱愛是這個專案得以存在的原因，也是我們繼續前進的動力。”
* **它本質上是有回報的**——嘿，看，多巴胺的原因又回來了！
* **說實話，這些遊戲很好**——申請的第一個理由不一定是這些遊戲很優秀，但我想在這裡提到的是，它們碰巧也非常優秀。引用我們的網頁開發和影像專家 Will 的話，“此外，想要在全世界‘傳播這些遊戲的興奮感’真的很令人滿意（更不用說能夠展示自己）。😉”

從現在開始，這個部落格將主要討論專案的“什麼”和“如何”，但我認為首先討論我們的動機是合適的。我們希望你喜歡我們的工作！