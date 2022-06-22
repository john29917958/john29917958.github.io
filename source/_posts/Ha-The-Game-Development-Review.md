title: Ha - The Game Development Review
visible: show
date: 2020-10-09 18:06:20
tags: [programming, management, reflection]
category: Programming
---
Have you ever dreamed of building a product yourself and selling it to the world? Here's my first experience of publishing a voice control action game to [Google Play](https://play.google.com/store/apps/details?id=com.TzuChaoWang.Ha) and [App Store](https://apps.apple.com/tw/app/ha/id1534485753), including a huge mistake I've made, did some adjustments, then succeeded with 131 download count in the end.
As an office worker, I've successfully put my first step in. Now, it's your turn. Hustling after work can be extremely tough. However, if you never start, you're the same person after one year, five years, even ten years. **Never too late! Action, now!** To the "better you" in the future, the better you that you deserve!

{% asset_img banner.png "Ha - Lead me with your voice'Ha - Lead me with your voice'" %}
<!-- more -->
Outline:
1. [Set Business Target](#Set-Business-Target)
2. [Analizes Capability](#Analizes-Capability)
3. [Define Milestones](#Define-Milestones)
4. [Implementation Process in Detail](#Implementation-Process-in-Detail)
5. [Tragedies in Production Environment Test](#Tragedies-in-Production-Environment-Test)
6. [Advertisement](#Advertisement)
7. [Reflection and Review](#Reflection-and-Review)
8. [Future Work and Expectation](#Future-Work-and-Expectation)
9. [To Readers](#To-Readers)
10. [Capital](#Capital)

Others:
- [Game Making Records and Demonstrations](#Game-Making-Records-and-Demonstrations)
- [Records of 1st. Failed Project](#Records-of-1st-Failed-Project)

# Set Business Target

> Goes niche market when lacking of resources

When it comes to business, multiple factors must be taken into account: Our time, our resources, our skill set, our competitors... Resource and business target are the both ends of the scale. We never want to put tremendous effort into small project, or set a BIG goal that we are yet unable to afford. For me, I ran into a disaster of the second situation.
At first, without any game making experience, me, an office worker, as a young fellow, started as a single-person-team, planned to create a 2D scrolling mobile game with complex fighting animation, flexible, rich and SIMPLE touch control, complete story line, and beautiful character designs. I even planned to include voice control there! Do you see any problem? Just ask these questions to the "young fellow":
1. How can a single-person-team competes against formal companies with five, ten, even hundreds of professional employees from different fields in speed and quality?
2. What value your product delivers that makes you rising from the huge general market place?

The result was: It took me months to build an incomplete prototype. And then, my entire idea was realized by a mature company.

I failed. It hurt. Fortunately, only my resource was wasted. Been stopped for a long time. Later one day, in a playground, someone reminded me of the idea of voice control game again.

With the terrible experience, I won't challenge the general market again. After some research done, the target was set to "voice control action game" that's rarely seen on mobile market. With mobile phones, I can take advantage of the built-in microphone directly!

# Analizes Capability

> Strength v.s. weakness, leverages the scale

Schedule significantly affected by capability and resource. Here's the case study of mine abilities:
- Good object-oriented programming concept and C# coding skill
- Has Live 2D modeling and animating experience
- Terrible digital art ability
- **Zero game making experience** (I think...)
- Zero screenwriting ability
- Never forget I'm an office worker without much time!

So the technical scopes were set to:
- Voice control: Requires programming related skills - my strength. The core technique and most challenge part
- Live 2D as modeling and animating technique: My strength. I have Live 2D experience, and it's well-integrated with Unity
- Silhouette art style: 2D digital art ability is required for character design. That is, where my weakness exists. So I made art style simple
- No online battle: For lack of time resource
- No database and account system: For lack of time resource
- One-time gameplay: For lack of time resource

# Define Milestones

> Alwyas preserves much time for integration and deployment

Programming is a high-level and difficult skill in market place. Softwear engineering process changed from time to time. We have high communication effort of abstract code concepts. Accidents can always happen, obstacles can always come out. So that's why we programmers take DESIGN seriously, testing seriously, and small iteration and integration seriously. And I believe that's why in general cases, programmers are way more expensive than other job positions. Without doubte, schedule estimation of such projects are difficult as well. Here's mine way of figuring out the milestones of entire project:
First, break down the tasks in very high-level point of view:
1. Core technical research and minimum prototype implementation: One month. Prototype and design level code are always fast
2. Character implementation loop of three monsters and two bosses: Two months. Lots of major implementation tasks. Integrates and tests each character one after another once small piece of function completed
3. Production environment test: Two months and more. Longest phase. The terrible "accidents" always happen when it comes to production environment test

- Project was started on 2020/05/14
- Formal release date was set on 2020/10/24 (five months in total)
- App was ready for publishing on 2020/10/17

The very number-one task is the break-through of critical technical research since we don't want entire project fails after bunch of artworks and function implementations done, just because the most critical, most difficult core function cannot be realized. It's like squandering, wasting bunch of money. Never do that.

# Implementation Process in Detail
After high-level milestones are set, here's the detail implementation flow.

## Minimum Valuable Prototype

> Find bottleneck first and focus!

The most important concept here is: Do not waste any resource! Everything only works after the bottleneck is eliminated. We should keep the entire project as simple as possible and only focuses on the most critical technique research. Finds bottleneck, breaks through, proves it works, then starts the major implementation process.

Work flow step by step:
1. Researches voice volume and pitch recognition technique (bottleneck break-through)
2. Implements voice recognition function with very simple UI (keeps project as simple as possible)
3. Encapsulates voice recognition functions into a class (minimum workable function module)
4. Designs main character 2D art (then starts major implementation flow)
5. Designs skill set of main character
6. Paints and produces every parts of the main character with Clip Studio Paint (head, hair, eyes, arms, legs, etc)
7. Models the main character with Live 2D
8. Creates character animations with Live 2D
9. Integrates the Live 2D model with Unity
10. Creates animation flow and implements the entity C# class
11. Does integration test in Unity, making sure the idea of voice control can be realized
12. Creates a simple monster
13. Minimum valuable prototype completed

Technical research with "very very very" simple GUI
{% youtube ISUFTAOT7Sk %}

Minimum valuable prototype
{% youtube tMrjWXiKsAU %}

## Character Implementation Loop

> Continuous integration, small iteration

Before we start the major implementation process, we'd better divide codes or functions into individual component units:
1. Good for task dispatching and assigning
2. Better quality, less bug, easy for composition and testing
3. Fast integration, fast for result review

{% asset_img component-code.png %}

But why? Can't I just keep writing all the functions and hit Play button at the end of release phase? We never what to do that. Programming is very abstract and unintuitive task. Project complexity and implementation effort can be exponential rising as it grows bigger.
When project features are divided into components, like USBs, we can regards milestones, assignees, or game objects as USB slots. Just plugs the USB into any of the slots in need. Component concept can provide flexibility for rapid project task adjustment.

In addition, component concept encapsulates related functions together without exposing unnecessary information out. When we're developing, it's easy for locating target code; While debugging, it's easy for locating where potential error is. Also, with encapsulation, the data, that is, properties are hidden from outside the module. Data should be hard to be modified by whom not supposed to do that, thus controls the complexity of project.

With pluggable components, it means features can be integrated very fast. So small piece of complete function, small piece of implementation, and integrates, tests it iteratively to ensure entire product working all the time. If we do have customers, it's also good for iterative function demonstration, good for wining customers' trust.

Steps of each iteration loop goes here:
1. Designs 2D character art
2. Designs skill set of character
3. Paints and produces every parts of character with Clip Studio Paint
4. Models character with Live 2D
5. Creates character animations with Live 2D
6. Integrates Live 2D model with Unity
7. Creates animation flow and implements the entity C# class
8. Does integration test in Unity
9. Loops 5 ~ 8 untill all skills of character completed, then restarts from 1. for another character implementation process

{% youtube wDWf70g8BTk %}

# Tragedies in Production Environment Test

> Accidents always happen. Takes second best solution confidently

First here's final result with background and menu system

{% youtube 0HG2p7xPahU %}

Let's skip the background implementation flow and focus on the production environment related problems. The nightmares I've faced with was the microphone privilege request in Android + IOS, latency delay in iPhone, and the "god-like" accident - pitch recognition accuracy.

## Microphone Privilege Request
Unity does great job at cross platform code generation. However, privilege request still differs on different platform. First of all, I tested Unity official solution of checking if the App is granted with microphone privilege:
```csharp
if (Application.HasUserAuthorization(UserAuthorization.Microphone))
{
	// Microphone granted.
}
else
{
	Permission.RequestUserPermission(Permission.Microphone);
}
```
But... beyond my imagination, the `Application.HasUserAuthorization(UserAuthorization.Microphone)` always gave me `true`! Been taking me lots of time building and testing in both operation systems... The final solution goes as follows for both IOS and Android:
```csharp
// Requests for microphone privilege.
if (Application.platform == RuntimePlatform.Android)
{
	Permission.RequestUserPermission(Permission.Microphone);
}
else
{
	// Directly starts microphone once for iPhone players. IOS would prompt microphone privilege request dialog directly.
	int sampleRate = AudioSettings.outputSampleRate;
	Microphone.Start(null, true, 10, sampleRate);

	while (Microphone.GetPosition(null) <= 0) { }

	Microphone.End(null);
}
```
In Android, invokes `Permission.RequestUserPermission(Permission.Microphone);` so Android do prompt microphone request dialog to player, then uses `Microphone.Start()` to record player voice; While in IOS, just invokes `Microphone.Start()`, IOS do prompts the request dialog directly.
For both methods, privilege request dialog only prompts when player first opens the App. Once player rejects the request, pop-out dialog will never appear again. And last, remember to provide request message to player
{% asset_img microphone-request-message-setting.png %}

## Latency Delay
"Ha" is a real-time voice control action game, so instant playback of what microphone has recorded is a must-have feature. I don't know why the playback speed always sync on PC and Android. But while testing in IOS, a BIG LAG exists between the time player says "Ha" to phone, and the character actually fires or jumps. I first checks the FPS and make sure it's not game performance related issue. Then I searched through the internet, tried everything I counld, kept building and testing in Android and IOS... No luck. Lots of time spent, still no luck. Finally found a post [here](https://programmer.help/blogs/unity-sound-and-recording-and-real-time-microphone-play.html), the key point is to sync the playback position with the microphone recording position like this, so we can collect real-time voice information from player:
```csharp
if (Application.platform == RuntimePlatform.IPhonePlayer)
{
	_audio.timeSamples = Microphone.GetPosition(null);
}
```

One lesson learned was that, when the technique we use is unpopular, be careful about the lack of online information.

## Pitch Recognition Accuracy
Pitch recognition accuracy problem happened when I delivered the production App to specific player's phone. No matter how the player said "Ha" in high or low pitch voice, the recognition could always go wrong, jumping to extraodinary high frequency around 600 Hz, while the avarage pitch of human voice is around 80 to 1000 Hz.

First, I used an [online tone generation service](https://www.szynalski.com/tone-generator/) to test if I did anything wrong. Amazingly, the result was very beautiful and accurate. My system counld almost 100% recognize the pitch value sent out by the service.

The problem was that when we're talking, voice is sent out with various frequencies in which contains it's own enery level at the same time. Thing can go wrong if all frequency energies are close, that is, no "solo frequency" is given. My system was almost 100% accurate because the ton generation service only sent out "single" frequency voice. At first, the game was designed to use high pitch voice for attack, low pitch voice for jump. Now, what would you do if the publish date is close?
Just abandon the pitch recognition. One friend reminded me of touch control, the plan B I've thought of in very early stage of design time but totally forgot it afterward. The input control was changed from "high pitch voice for attack, low pitch voice for jump" to "voice for attack, touch input for jump". Did I resolve the problem? Absolutely no, I took another path, avoided the problem, and preserved the "voice control" characteristic of the game at the same time.
Sometimes thing just go wrong. In real situation, never afraid of letting go, pick the second best solution. Alwyas knowing which the most important goal is. And the last words: Pushes yourself one step further when you feel desperate, there's always another way. Sounds easy, hard to implement and keep in mind.

Implementation process goes here:
1. Background design
2. Paints background objects (stones, flying buildings, fog, snow)
3. Uses particle system to generate gravels. Writes a background object generator class for random generation of other background elements
4. Implements menu system
5. Makes publishing related resources like banner, trailer video, in different mobile sizes, in both Chinese and English. Fills game title, subtitle, and all other information that Google Play Console, App Store Connect requires 
5. Integration test on Android and IOS
6. Encounters problems described above
7. Resolves them one after another
8. Publish for internal test
9. Publish for alpha test
10. Publish for beta test
11. Formal release

Official trailer
{% youtube o4nCgV5WUHA %}

# Advertisement
I'm not an advertisement specialty so I'll keep it simple and clear:
1. Choose Google Display Network, that is, App Promotion solution if you use Google AD
2. Promots Android for more impressions and download count; promots IOS for revenue

At first, I don't even know Google Display Network solution exists XD. I uploaded the advertisement in text and picture mode, redirected it to a simple page with both Google Play and App Store links. What I didn't know was, customers should be pissed off and just leaved the page. They never want to click that god damn link by themselves!!! Later I enhanced the page, wrote some JavaScript to detect visiters' platform, then redirect the page to Google Play or AppStore automatically, so there's no need for visiters to "click" the links manually.
Still not work...
Again, when you think there's no way out, push yourself one step further. For me I just thought of the Youtube channel advertisement, then searched how it can be done... All I needed was to [switch from Smart Mode to Expert Mode](https://support.google.com/google-ads/answer/9520605?hl=en)!!!
{% asset_img switch-to-expert-mode.jpg %}
THEN I could create App Promotion advertisement...
{% asset_img app-promotion-ad.jpg %}
After App Promotion advertisement created, guess what? BOOM!! The impressions, clicks, and actual download count greatly improved with less time and money! Here're the actual analysis charts:

Inefficient text and picture advertisement: No actual download count influences, wasted lots of money...
{% asset_img advertisement-1.jpg "Inefficient advertisement in text and picture'Inefficient advertisement in text and picture'" %}

App Promotion advertisement for Android (from 11/04), improved Android download count immediately:
Impression and click count
{% asset_img advertisement-click-and-download-android.jpg "App promotion mode - Android click count'App promotion mode - Android click count'" %}
Actual download count
{% asset_img actual-download-count-android.jpg "Android download count'Android download count'" %}

App Promotion advertisement for IOS (from 11/04), improved IOS download count immediately:
Impression and click count
{% asset_img advertisement-click-and-download-ios.jpg "App promotion mode - IOS click count'App promotion mode - IOS click count'" %}
Actual download count
{% asset_img actual-download-count-ios.jpg "IOS downlaod count'IOS downlaod count'" %}

Extra interesting discovery: IOS users are generally richer, more tablet usage than Android XD

IOS distribution:
{% asset_img ratio-ios.jpg "IOS device distribution'IOS device distribution'" %}

Android distribution:
{% asset_img ratio-android.jpg "Android device distribution'Android device distribution'" %}

# Reflection and Review
Mistakes and improvements:
1. To keep the scale balanced between resource and business goal. Maximizes the quality of game under the capability cap of team
2. To put phone integration test into iteration loop early on so problems can be discovered in early stage
3. To never reveal developing process to users. They don't know what you're doing in most cases. Only reveal it to experts or those who can provide accurate advices
4. To make less inheritance. Encapsulates motion, action, animation control related codes into something like controller class and attach both entity class (data) and controller class (character performans) to Unity game object

Things that I'm proud of:
1. Management: Accurate schedule estimation, iterative integration in real practice
3. Skill: Integrates Live 2D with Unity successfully. Combines my skills of digital art and programming together
4. I don't know it's good or not. I completed entire game making process by my own. Now I have basic understanding of entire game making process at client side

# Future Work and Expectation
Game product related:
1. Founds or joins a team
2. Game art improvement
3. New game stage
4. New player character
5. Implements online interaction, account system, and cash flow abilities

Self-learning:
1. Learns Unity shader editor, HDR and universal pipeline techniques
2. Learns Unity cross platform responsive UI techniques, mobile optimization techniques
3. Improves my foundation of digital art including perspective, structure, coloring, value, shading, and body kinetic
4. Optional: Learns voice volumn and pitch related knowledge. Figures out why latency issue only happens on IOS. Last, learn natural language processing

# To Readers
Finally, as an office worker, I've put my first step in and successfully published a game application to Google Play and App Store. Now, it's your turn. Hustling after work can be extremely tough. I've experienced way more difficulties than the article documents. I'd even thought of giving up such voice recognition project. However, if you never start, you're the same person after one year, five years, even ten years. **Never too late! Action, now!** To the "better you" in the future, the better you that you deserve!

Ha is not a great App. It's the beginning to my success.
Time for your to start, to YOUR SUCCESS.

The end - Tzu-Chao, Wang (TC), 2020/10/09.

# Capital
Here're complete tools I used for creating such game application. If you want to start your project, here's the REAL summary from a single-person-team, no salary. Just for your reference.

| Tool                                                                                                                            | Purpose                                                            | Cost                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------|
| [NoteBook QX-350 GX from CJSCOPE](https://www.cjscope.com.tw/cht/product_detail.php?serial=151)                                 | Personal Notebook.                                                 | $34,900 (one-time buyout with discount -$2,000 from PChome).                 |
| iPhone 8                                                                                                                        | For game integration test. Personal mobile phone.                  | $25,500 (one-time buyout).                                                   |
| [Wacom Intous Pro](https://www.wacom.com/en-us/products/pen-tablets/wacom-intuos-pro)                                           | Graphic tablet for digital painting.                               | $12,900 (one-time buyout with discount -$1290 from PChome).                  |
| [Adobe Creative Cloud](https://www.adobe.com/creativecloud.html)                                                                | Icon, graphic design, audio engineering, video editing, and so on. | $11,520 (yearly pre-paid plan).                                              |
| [Live2D Cubism](https://www.live2d.com/en/)                                                                                     | Game animation modeling tool.                                      | $4,000 (yearly pre-paid plan).                                               |
| Apple Developer account                                                                                                         | For publishing IOS Apps to App Store.                              | $2,827 ($99 USD for individual account).                                     |
| [Clip Studio Paint](https://www.clipstudio.net/en/)                                                                             | 2D digital art creation tool.                                      | $2,500 (one-time buyout).                                                    |
| Network                                                                                                                         | To collect every resources in need                                 | $2,495 (499 per month).                                                      |
| [iOS Project Builder for Windows](https://assetstore.unity.com/packages/tools/utilities/ios-project-builder-for-windows-15522)  | For easily building IOS App on Windows.                            | $1,713 (one-time buyout).                                                    |
| Google AD                                                                                                                       | For advertisement.                                                 | $1,624 (only $443 significantly improves App impression and download count). |
| [Logitech G402 mouse](https://www.logitechg.com/zh-tw/products/gaming-mice/g402-hyperion-fury-fps-gaming-mouse.910-004071.html) | Mouse.                                                             | $799 (one-time buyout from PChome).                                          |
| Google Developer account                                                                                                        | For publishing Android Apps to Google Play.                        | $715 ($25 USD).                                                              |
| [Unity](https://unity.com/)                                                                                                     | Game engine for product development.                               | $0 (less than $100,000 in gross revenue, so it's free).                      |
| [Visual Studio Community 2017](https://visualstudio.microsoft.com/)                                                             | Code IDE which greatly integrated with Unity.                      | $0                                                                           |
| Total                                                                                                                           | Total cost                                                         | $101,493                                                                     |

Price not included (they're already existed when I was in college XD):
- Keyboard
- Monitor

A hundred thousand is too expensive? Try to simulate and calculate the price if you hire one programmer or an artist, don't remember to pay yourself, then you will get the answer.
I believe that's one of the reasons why 95% of a starting business fails. Like what Dan Lok says: Most entrepreneurs "think" they are entrepreneurs. They don't know aside from idea, it's WAY MORE about skillset, execution, persistence (money), and methodologies.
And last, the ruthless fact is, even you put tremendous time, effort, and money into it. You cultivate it as best as you could. The "success" is not defined by all factors described above. It's all about market acceptance. Whatever, I still have a long way to go. Such summary is free for you~

# Game Making Records and Demonstrations

Live 2D freestyle demonstration of main character
{% youtube D7jhqH044vE %}

Live 2D animation demonstration of main character
{% youtube Me3KP61PfUI %}

Live 2D animation demonstration of main character (2)
{% youtube LPdh_tdZlS8 %}

Demonstration of Live 2D modeling process
{% youtube qMDQkPJ2XUw %}

# Records of 1st. Failed Project

Main character Live 2D demonstration
{% youtube gMJR1fGN6ew %}

Trailer demonstration
{% youtube Q4IFpbpMRoU %}

Control action demonstration
{% youtube lYvbDJauJbo %}

Monster action demonstration
{% youtube qPbCSr0PCco %}

Main character three-view
{% asset_img old-game-project-character-three-view.png %}

Main character standing pose demonstration
{% youtube hll-U6VkCas %}

Main character attack animiation demonstration
{% youtube K-t1wbHi3IM %}

Animation poses design
{% asset_img old-game-animation-design.png %}
