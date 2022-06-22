title: Journey to Real Object-Oriented Programming
visible: show
date: 2020-11-22 19:58:18
tags: programming
category: Programming
---

Not long ago, I've published the 1st. version of a voice control mobile game on [Google Play](https://play.google.com/store/apps/details?id=com.TzuChaoWang.Ha) and [App Store](https://apps.apple.com/tw/app/ha/id1534485753), gained 131 download count.
At first, I set it as a one-time game project, no maintenance effort will be put into. But after I wrote the post of {% post_link Ha-The-Game-Development-Review how I failed and restart, successfully published the game without marketing conflict %}, I decided to grow the project into a bigger, richer one. So here comes the refactoring process in real case! I've documented the **process** and the **methodology** about how refactoring done. Are you ready? Here we go!

<!-- more -->

# Quick View of Origin Architecture
The following diagram shows origin architecture of game application:

{% asset_img origin-architecture.jpg %}

It can be summarized into three key ideas:
- `InputController` listen to player's voice and touch event, invokes the registered objects that implements `IInputAction`, including `PlayerController`
- `PlayerController` sends actions to `Player`
- `Player` and each leaf nodes of `Character` do every calculations and stores data of the related entity game component

There're two problems there.

## Hard for Development Debugging
There's only one `InputController` that holds every I/O logics. Yes we can write `if` / `else` statements to switch between **each** platforms for **each** input events like tap, swing, press and hold, lower pitch voice, higher pitch voice, keyboard input... The problem is the `if` / `else` statements can be spread everywhere. Once some of the logics need to be modified, let's search through all the `if` / `else` statements... Never do that... For me I did not write `if` / `else` statements. But I needed to comment out the PC specific codes before publishing it to mobile phone, and retains them back if I want to develop and test on PC.
There's a design pattern called "adapter". See the new architecture later. It's also easy for platform extension if I need it someday.

## Unflexible, Unnecessary and Buggy Inheritance Chain
Always prefers composition over inheritance. For me I ran into a situation that, unnecessary function implementation speard through child classes. And I noticed many time that some functions are always overwritten by child classes as well. Sometimes I also ran into the bug that some properties modified by parent class so the children behaves strangely.
In fact, Unity have designed the entire game system into "Composite Design Pattern" liked environment. We just "attach" necessary components, abilities, logics, controllers to the game object in need.
For me I then combined the Unity component concept with interface to eliminate the long and unnecessary inheritance chain. See the new architecture as well.

# New Architecture: Component and Interface
First let's have a brief view of new architecture:

{% asset_img new-architecture.jpg %}

There're three major extension points in such architecture.

## InputAdapter
Compared to the old `InputController`, the adapter design pattern is implemented. The key concept is to create appropriate user input listener on different platforms. In `MobileInputAdapter`, it listens screen touch events; While in `PcInputAdapter`, it listens keyboard event. All events are dispatched through C# delegation. So `InputAdapters` never cares who catches the event, thus reaching the goal of decoupling. Furthermore, I can easily include new platform like XBOX by just creating a new `XBoxAdapter` and writes XBOX related I/O event, without modifying codes of other platforms.
{% asset_img input-adapter.jpg %}

## Controllers and Entity Class
No more complex inheritance. Instead, I create controllers for each new characters. Attaches the controller and `Character` class to the game object. So when there's new character to be created, just add new controller class and attach it to such character.
{% asset_img controllers.jpg %}

## Interface as Ability
For customized character abilities, I use interface. Character controllers implement it in their need. But how invoker knows if the target game object has specific ability? I take the powerful `GetComponent()` method of Unity:
```csharp
IDamageable damageable = target.GetComponent<IDamageable>();
if (damageable != null)
{
	damageable.TakeDamage(power);
}
```

# Refactoring Process
Never does all refactoring then test it. You'll put yourself in an unnecessary disaster. Just like product development cycle, split the entire refactoring task into small pieces of works. For example: Refactors one character then do integration and testing immediately. One after another. So we can control the debugging complexity by our own.
{% asset_img refactoring-process.jpg %}

## Conclusion
So the major refactoring purposes are to deal with platform I/O difference, simplifies how character extension is done, and "installs" interfaces to character in need to give them specific abilities.
Such architecture will be tested and challanged later I start the extension process. Let's see~