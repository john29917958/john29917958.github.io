title: Ha - The Game Development Review
visible: show
date: 2020-10-09 18:06:20
tags: programming, management, reflection
category: Programming
---
Have you ever dreamed of building a product by yourself, selling it to the world? Here's my first experience of publishing a voice control mobile action game. Including a huge mistake I've made, did some adjustments, then succeeded in the end.
As an office worker, I put my first step in and successfully published a production game App to Google Play and App Store. Now, it's your turn. Creating product after work can be very very hard. However, if you don't start, you're the same person after one year, five years, even ten years. **Never too late! Action, now!** To the "better you" in the future, the better you that you deserve!
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

> Don't waste your time! Only focus on core technique research!

The most important concept here is: Do not waste resource other then the core technique research! We should keep the entire project as simple as possible and only focuses on the core technique research. Nothing gonna work if the research doesn't succeed. So do not put unnecessary effort or resource on other tasks. Focus, and break through the core technique. DON'T WASTE TIME! PERIOD!

Implementation flow:
1. Researches voice volume and pitch recognition
2. Implements voice recognition function with very simple UI
3. Makes voice recognition a class (a simple module)
4. Designs main character 2D art
5. Designs the skill set of main character
6. Paints and produces every parts of the main character with Clip Studio Paint (head, hair, eyes, arms, legs, etc)
7. Models the main character with Live 2D
8. Creates character animations with Live 2D
9. Integrates the Live 2D model with Unity
10. Creates animation flow and implements the entity C# class
11. Performs integration test in Unity, making sure the idea of voice control can be realized
12. Creates a simple monster
13. Minimum valuable prototype completed

Technical research with "very very very" simple GUI
{% youtube ISUFTAOT7Sk %}

Minimum valuable prototype
{% youtube tMrjWXiKsAU %}

## Character Implementation Loop

> Continuous integration, small iteration

For major implementation task, we'd better divides codes into individual components:
1. Good for task dispatching and assigning (no need in single-person-team)
2. Better quality, less bug
3. Fast integration, fast for result review

{% asset_img component-code.png %}

Once project is divided into small pieces of components, it's easy to be integrated one after another. But why? Can't I just keep writing all the functions and hit Play button at release phase? We never what to do that. Programming is a very abstract and unintuitive task. The complexity of project can be exponential rising as it grows bigger. Small piece of complete function, small piece of implementation, and integrates, tests it iteratively can ensure entire product working all the time. If we have customer, it's also good for iterative function demonstration, good for wining customer's trust. The steps of each iteration loop goes here:
1. Designs 2D character art
2. Designs skill set of character
3. Paints and produces every parts of the main character with Clip Studio Paint
4. Models the main character with Live 2D
5. Creates character animations with Live 2D
6. Integrates the Live 2D model with Unity
7. Creates animation flow and implements the entity C# class
8. Performs integration test in Unity

{% youtube wDWf70g8BTk %}

# Difficulties When Brings to Market Test

> Things can always go wrong in market, don't afraid of second best

First here's final result with background and menu system

{% youtube 0HG2p7xPahU %}

Let's skip the background implementation flow and focus on the production market related problems. The nightmares I've faced with was the microphone privilege request in Android + IOS, and latency delay in iPhone. Oh! and the boss-like accident was pitch recognition accuracy.

## Microphone Privilege Request
Unity does great job at cross platform code generation. However, privilege request still differs on different platform. Here's the sample code for both IOS and Android, it took me lots of time building and testing in both operation systems:
```csharp
// Requests for microphone priviledge.
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

## Latency Delay
> If technique not popular, careful about lacking of online information

"Ha" is a real-time voice control action game, so instant playback of what microphone has recorded is a must-have function. I don't know why the playback speed always sync on PC and Android. But when tested on IOS, there existed a BIG LAG between player say "Ha" to phone, and the character actually fires or jumps. I searched through the internet, tried everything I counld, kept building and deploying to Android and IOS... No luck. Lot's of time spent, still no luck. Finally found a post [here](https://programmer.help/blogs/unity-sound-and-recording-and-real-time-microphone-play.html), the key point is to sync the playback position with the microphone recording position like this, so we can collect real-time voice information from player:
```csharp
if (Application.platform == RuntimePlatform.IPhonePlayer)
{
	_audio.timeSamples = Microphone.GetPosition(null);
}
```

One lesson learned was that, when the technique we use is not popular, be careful about lacking of online information.

## Pitch recognition accuracy

> Don’t be afraid of second best solution

Pitch recognition accuracy problem happened when I delivered the production App to specific player's phone. No matter how the player said "Ha" in high or low pitch voice, the recognition could always go wrong that the judge result jumped to extraodinary high frequency - 600 Hz while the avarage human voice pitch is around 80 to 1000 Hz.

First, I used an [online tone generation service](https://www.szynalski.com/tone-generator/) to test if I did anything wrong. Amazingly, the result was very beautiful and accurate. My system counld almost 100% recognize the pitch value sent out by the service.

The problem was that when we're talking, various frequency voice are sent out with different enery level. Thing can go wrong if all frequency enery are close, that is, no "solo frequency" is given. My system was almost 100% accurate because the ton generation service only sent out "single" frequency voice. Originally the game was designed to use high pitch voice for attack, low pitch voice for jump. Now, what would you do if the publish time is close?
Just abandon the pitch recognition. One friend reminded me of touch control, the plan B I've thought of in very early stage of design time but totally forgot it afterward. The input control was changed from: high pitch voice for attack, low pitch voice for jump to: voice for attack, touch input for jump. Did I resolve the problem? No, I took another path and preserved the "voice control" characteristic of the game at the same time.
Sometimes thing just go wrong. In real situation, never afraid of letting go, pick the second best solution. We can be stubborn only when our skill reaches beyond top professional level. And the last words: Pushes yourself one step further when you feel desperate.

Steps in detail goes here:
1. Background design
2. Paints background objects (stones, flying buildings, fog, snow)
3. Uses particle system in Unity and writes a background object generator class for background objects generation
4. Implements menu system
5. Produces publishing related resources like banner, trailer video, in different mobile sizes, in both Chinese and English. Fills game title, subtitle, and all other information that Google Play Console, App Store Connect requires 
5. Integration test on Android and IOS
6. Encounters problems described above
7. Resolves them one after another
8. Publish for internal test
9. Publish for alpha test
10. Publish for beta test
11. Formal release

Official trailer
{% youtube o4nCgV5WUHA %}

# Reflection and Review
Things that I didn't do well and designed adjustments:
1. Keeps the scale balanced between resource and business goal. Maximizes the quality of game under the capability cap of team
2. Puts phone integration test into iteration loop early on with Unity cloud build so problem can be discovered in early stage. Unity cloud build for minimizing effort of switching between platforms and build time
3. Never reveal developing process to users. They don't know what you're doing in most cases. No need for them to laugh on you or losing the confidence of customers. Only reveal development process to experts
4. Generates less inheritance. Encapsulates motion, action, animation control related codes into something like controller class and attach both entity class and controller class to Unity game object

Things that I'm proud of:
1. Appropriately design the flow of work, takes scrum discipline into praticle product implementation
2. Accurate schedule estimation
3. Integrates Live 2D with Unity successfully
4. I don't know it's good or not. I completed entire game making process by my own. Now I have complete vision of game making process

# Future Work and Expectation
1. Founds a team
2. Makes a game with online interaction and account system ability. Learns Unity shader editor.
3. Player chant (cast) spell to phone for character skill activation

Finally, an office worker, I put my first step in and successfully published a production game App to Google Play and App Store. Now, it's your turn. Creating product after work can be very very hard. I've experienced way more difficulties than the things described above, even thinking of giving up. However, if you don't start, you're the same person after one year, five years, even ten years. **Never too late! Action, now!** To the "better you" in the future, the better you that you deserve!

# Other Demonstrations

Main character Live 2D freestyle demonstration
{% youtube D7jhqH044vE %}

Main character Live 2D animation demonstration
{% youtube Me3KP61PfUI %}

Main character Live 2D animation demonstration 2
{% youtube LPdh_tdZlS8 %}

Live 2D modeling process demonstration
{% youtube qMDQkPJ2XUw %}

# Old Project Resources and Demonstrations

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
