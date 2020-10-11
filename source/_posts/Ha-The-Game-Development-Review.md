title: Ha - The Game Development Review
visible: show
date: 2020-10-09 18:06:20
tags: programming, management, reflection
category: Programming
---
Have you ever dreamed of building a product by yourself, selling it to the world? Here's my first experience of publishing a voice control mobile action game. Including a huge mistake I've made, did some adjustments, then succeeded in the end.
{% asset_img banner.png %}
<!-- more -->
When it comes to business, multiple factors needs to be taken into account. Our time, our resources, our skill set, our competitors... Resource and business goal are the both ends of the scale. We never want to put tremendous effort into small project, or the goal is so big that our resources are yet unable to support. For me, I ran into a disaster of the second situation.

# Defines Business Goal

> Goes niche market place when lacking of resources

At first, without any game making experience, me, an office worker, as a young fellow, started as a single-person-team, planed to create a 2D scrolling mobile game with complex fighting animation, flexible and rich touch control, complete story line, and beautiful character designs. I even planned to include voice control there! Do you see any problem there? Just ask some questions to the "young fellow":
1. How can a single-person-team competes against a formal company with five, ten, even hundreds of professional employees from different field in speed and quality?
2. What value your product delivers that makes you rising from the huge general market place?

The result was: It took me months to build an incomplete prototype. And then, my entire idea was realized by a mature company.

I failed. It hurt. Fortunately, only my resource was wasted by such impractical project. Been standing still a period of time. Later one day, in a playground, someone reminded me of the voice control game making again.

With the terrible experience, I won't challenge the general market again. After doing some research, the target was set to "voice control action game" that's rarely seen on mobile market. And it's very convenient, I can take advantage of the built-in microphone provided by mobile phones!

# Capability Analysis

> Analysis strength and weakness, design strategy to match goal and schedule

Capability and resources significantly influence schedule. For me I have terrible digital art ability, good object-oriented programming concept and C# coding skill. Zero screenwriting ability, **zero game making experience** (I think...). However... Humm.. I have Live2D modeling and animating experience. Oh! never forget I'm an office worker without much time! So the technical scopes were set to:
- Voice control: Requires programming related skills - my strength. The core technique and most challenge part of game
- Silhouette art style: Character design requires 2D digital art related skills - my weakness, so I made art style simple
- Live2D as modeling and animating technique: Strength, I have Live2D experience, and it's well integrated with Unity
- No online battle: For lack of time resource
- No database and account system: For lack of time resource
- One time gameplay: For lack of time resource

# Defines Milestones

> Integration and deployment are always tough, taking half of entire product release life time

Schedule estimation of programming related projects are always difficult. Accidents can always happen. I cannot clearly remember how I did the schedule estimation in detail, here's my way.
First, break down the tasks in very high-level point of view:
1. Core technical research and minimum prototype implementation: One month. Prototype and design level code are always fast
2. Character implementation loop of three monsters and two bosses: Two months. Lots of major implementation tasks
3. Game completeness implementation and integration + market test: Two months and more. Longest phase. The terrible "accidents" always happen when it comes to integration and deployment

Project was started on 2020/05/14, formal release date was set on 2020/10/24, five months in total.

The very number one task is core technique research since we don't want after a bunch of game art and game function implementation, the entire project fails in the end just because the most critical, most difficult core technique is impossible to be realized. Just like a Chinese proverb says: 頭過身就過.

# Implementation Process in Detail
After high-level milestones are set, here's the detail implementation flow.

## Minimum Valuable Prototype
The most important concept here is: DO NOT PUT MUCH RESOURCE HERE! We should keep the entire project as simple as possible and only focuses on the core technique research. Nothing gonna work if the research doesn't succeed. So do not put unnecessary effort or resource on other tasks. Focus, and break through the core technique.

Implementation flow:
1. Researches voice volume and pitch recognition
2. Implements voice recognition function with very simple UI
3. Makes voice recognition a class (a simple module)
4. Designs main character 2D art
5. Designs the skill set of main character
6. Paints and produces every parts of the main character with Clip Studio Paint (head, hair, eyes, arms, legs, etc)
7. Models the main character with Live 2D
8. Integrates the Live 2D module with Unity
9. Creates animation flow and implements the entity C# class
10. Performs integration test on Unity, making sure the idea of voice control can be realized
11. Creates a simple monster
12. Minimum valuable prototype completed

Technical research with "very very very" simple GUI
{% youtube ISUFTAOT7Sk %}

Minimum valuable prototype
{% youtube tMrjWXiKsAU %}



區塊實作 (loop)
	1. 美術設計
	2. 技能設計
		1. 美術實作
		2. 程式實作
		3. 整合測試
背景設計
背景實作
選單實作
手機整合測試
完整性優化
發佈相關資源實作
封閉測試 (Alpha)
開放測試 (Beta)
發佈上市

檢討:
1. 設定願望大小
2. 應盡早納入手機整合測試 (含效能考量)
3. 不要向客戶透漏開發中的資訊
4. 應減少繼承，把「動作」腳本與「資料」腳本切開
5. 先了解 Play Store 發布邏輯!!

自豪處:
1. 以最重要核心功能為優先導向實作
2. 實際於上市產品應用敏捷開發
3. 精準時程估算
4. 成功將 Live 2D 與 Unity 大量結合

未來展望:
1. 創立團隊 (商業)
2. 連線遊戲 + 帳戶系統 (內功)
3. 咒語放招 (語音辨識) (研發)
