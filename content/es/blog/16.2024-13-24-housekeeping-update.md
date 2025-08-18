---
title: &title 'December 2024 Haroohie Housekeeping Update'
description: &desc 'Jonko debriefs the status of the translation patches as well as provides updates on new website features and upcoming blog posts.'
navigation:
  description: *desc
  author: 'Jonko'
  year: 2024
  month: 12
  day: 14
  tags: ['chokuretsu', 'heiretsu', 'chinese']
  image: '0016/00_thumbnail.png'
head:
  meta:
  - property: 'og:title'
    content: *title
  - property: 'og:description'
    content: *desc
  - property: 'og:image'
    content: &img https://haroohie.club/images/blog/0016/00_thumbnail.png
  - property: 'og:image:alt'
    content: ''
  - property: 'og:url'
    content: 'https://haroohie.club/blog/2024-13-24-housekeeping-update'
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

Hey folks! It's been all of 2024 without a substantial update on the patches themselves, so I figured it's high time we give a status update. That's this post!

## Chokuretsu Progress

We're still hard at work and progress on Episode 4 has been consistent, if slow-going. For context, here's a graph prepared by our lead translator, Millie, detailing the translation progress over the course of the entire project.

![Graph showing the rate of translation being very fast for the first three episodes and then significantly slowing for Episode 4](/images/blog/0016/01_translation_rate.png)

You can see that inflection point hit directly after we released Episode 3 on 31 October, 2023. While we've had bursts of pretty good progress and the rate of translation has overall remained steady, things have definitely slowed down over the past year. So what's taking us so long? Well, it essentially boils down to three main issues:

1. A lot of the progress you see on the graph is Millie completing the overall base translation. Millie is an absolute machine who is built for turning Japanese into English, and works at a rate that would destroy most others. We cannot hold mere mortals to her standard. Now that she's done with the base translation, it's up to our editors and other translators to finish the task of smoothing out the prose and double checking it to ensure its quality.
2. Episode 4 is massive, clocking in at about 90% the size of Episodes 1 and 2 combined. While there have been bursts of progress, the sheer gravity of the episode has certainly taken its toll.
3. Finally, we really pushed to get Episode 3 out the door quickly, and to be honest, several of our editors and translators kind of burned out after that and had to take some breaks. What's more, life got busy this past year for a lot of people working on this project, and they had to take time for themselves (I include myself in this group&mdash;this year has been a bit rough for me, personally, and I haven't been able to dedicate as much time to this project as I would have liked).

While there are some stretches with essentially no progress over the last year on this graph, you can see that the overall slope has remained steadily increasing, even if it's slowed down significantly compared to what it was at before. However, you may also notice that spike at the very edge of the graph&mdash;recently, we've had a lot of folks free up and return to the project, so it's looking likely that we'll have the v0.8 patch released in early 2025.

This is not as fast as we would have liked to get it done, but life is unpredictable and sometimes that's what happens. We hope to reward your patience handsomely in 2025, where you can expect the v0.8 and (hopefully!) the v1.0 patch as well. Episode 5 is the shortest episode by a long shot, so it should be an easy jog over the finish line once we've called a wrap on Episode 4.

Thank you for sticking with us, and we hope to spread excitement all over the world with our translations of more Haruhi games in the future!

## Website Updates

We've made a couple of updates to the website that I think are worth noting. Firstly, you can take a gander at the languages we now/are planning to support in the top right corner&mdash;this will also provide a clue as to which patches are upcoming. 😎 To be less opaque, there is active work on Italian, Russian, and Brazilian Portuguese patches for this game, in addition to preliminary work on French and Arabic translations. Of these, the Italian translation is the farthest along, and you can expect a release from them in the coming months. If you speak any of these languages and wish to help with these translations, please join our Discord and let us know!

Additionally, we now shout out some "friends of the club", including [Qi Busiyi Hanhuazu (七不思议汉化组)](/friend/qi-busiyi-hanhuazu), the translation group headed by [Xzonn](/author/xzonn) that's working to translate Chokuretsu into Chinese. If you speak Chinese and either English or Japanese, please consider reaching out to us and we can put you in touch with them to aid in that effort, or reach out to them directly on [their site](https://7.xzonn.top/). However, of note for our purposes here is that the v0.1 beta release of the Simplified Chinese patch for Chokuretsu is now available through the ROM patcher! It's mostly a proof-of-concept patch, so no need to rush to play the game quite yet, but it's very exciting to see our first non-English patch available on the site!

That segues neatly into our next topic, which is that this website seems to get quite a few visitors from mainland China (likely due to a lot of the work Xzonn has done translating our site into Chinese as well&mdash;thanks!). Our ROM patcher works by downloading our patch releases directly from where they are hosted on GitHub. This works nicely for most people and gives us good analytics to check how many people are playing our translation, but unfortunately, GitHub is inaccessible from mainland China. Thus, we have introduced patch mirroring to the patcher&mdash;if it detects that the GitHub patch failed to download, it will attempt to pull it from our own servers instead. This will mean that Chinese users will find the patcher actually works now, whereas it likely didn't previously. Nice!

The final update is that we have improved our RSS feed for this very blog&mdash;it now includes thumbnail images and there are also localized variants for each language we translate the site into. Very fun!

## Parallel Futures

While Chokuretsu remains our primary focus, Millie has been plugging away at the Heiretsu translation as well. We don't have a planned release date in mind as we are not going to begin editing/translation checking that project until after Chokuretsu is completed, but so far it's coming along very nicely.

![A screenshot of Heiretsu showing the latest beta version of the translation](/images/blog/0016/02_heiretsu_preview.png)

There does remain some ROM hacking work (mostly centering around the cutscenes, which have to be reverse-engineered to modify the title sequence and make things run more smoothly in Dolphin&mdash;more details on that in a future blog post!) and we also have to work on modifying the graphics, but most of the challenges have been solved and the majority of the remaining work is the task of translating yet another massive game. This time, we think we're going to release the translation in one batch rather than space it out over several episodes, so while you may have to wait a while longer, you'll be able to play the full game when the patch does finally drop.

That's all the updates I have for now! Again, thank you so much for supporting us and showing interest in our work&mdash;it really does mean the world to us and motivates us to continue working on these games. Please look forward to our upcoming releases, and we hope you have a wonderful holiday season and a very Happy New Year!