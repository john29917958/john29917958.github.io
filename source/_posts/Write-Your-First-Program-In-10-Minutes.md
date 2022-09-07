title: 'Write Your First Program In 10 Minutes'
visible: show
date: 2022-09-04 19:13:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

This is the question I have heard the most: I want to start learning programming today! But would it be difficult? would I fail? Today I'm gonna turn you from a complete beginner to a person who can build something for yourself. This is an article I wish I saw when I first started learning programming. Click the more button below, you'll write your first program today.

<!--more-->

So here's the first thing I want you to do: Open the browser and press "Ctrl + Shift + J" on Windows or "Ctrl + Option + J" on Mac to open the developer console.
{% asset_img terminal.jpg %}
As soon as you press these keys you must see a right-angle icon on the screen. I want you to type this magic text after the icon. Don't copy! Just type it and press the enter key to see what happens: `console.log('Hello, world!');`: 
{% asset_img hello-world.jpg %}
Boom! You wrote your first program in 10 minutes. It's as simple as doing that. In your program, you use "JavaScript" programming language. You use the `console` object, call its `log` function, and pass the text "Hello, world!" to it. After you hit enter, the browser executed the code you've written, printed the message "Hello, world!" on the terminal.

Now all you need to do is take a look at 5 uses of programming languages. I'll explain the concept behind your code afterwards.

| Use                                            | Language                                                      | Example                                                                |
| ---------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| AI and machine learning, data analytics        | Python                                                        | Spotify uses Python and Hadoop to implement user recommendation system |
| Web development                                | JavaScript, Java, Ruby, PHP, C#, Node.js (JavaScript), Python | Facebook is written in PHP, LinkedIn is written in Node.js             |
| Mobile app                                     | Java (Android), Swift (IOS), Kotlin, React Native, Python     | Telegram app                                                           |
| Computer graphics and high-performance systems | C, C++                                                        | Adobe Photoshop                                                        |
| Games                                          | C# (Unity), C++ (Unreal)                                      | Fall Guys: Ultimate Knockout, Hellblade: Senua’s Sacrifice             |

You've already known the uses of programming languages. Before diving into the code, I think it's incredibly important that you understand what a program is. I swear to you it is going to help you tremendously in the future. Let me give you a perfect example.

When you order food at a restaurant, a chef will follow a set of instructions in a recipe to cook. There're many control variables in a recipe like baking time and temperature. To make perfect food, the chef have to control them while cooking. I want you to imagine that writing a program is like making a recipe card. You need to write lines of instructions on a recipe card, you need to write lines of code to make a program. You need to specify baking time and temperature in a recipe, you need to define variables in your code as well! You need to use a computer to execute a program, a restaurant needs a chef to cook the food, too! I want you to think writing program is as simple as writing a recipe card. Let me give you another example:
```javascript
var temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

All you need to do now is type it in the developer console. Type it yourself, don't copy, press the enter key and see what happens:

{% asset_img print-variable.jpg %}

Surprisingly, the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + temperature`. There's a reason behind it. Look at the first line of code, it can be split into five parts. The first part is the `var` keyword. It's used to declare a variable, like specifying a "temperature" control variable in a recipe. In some programming languages it also defines the data type, like C:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
Let's first understand in this way. In C the `int` keyword also specifies which type of value can be stored into the variable, as well as how to operate it. Using an `int` keyword is like specifying that the chef can only control the temperature at 90, 95, 100 and any integer degree. I want you to see the previous JavaScript example. After the first `var` keyword is the second part, the variable name `temperature`. It's like the control factor name "temperature" in a recipe. You can access that variable by using the variable name. Then the third part is the assignment operator `=` that takes two operands. It's used to assign a value at the right-hand side to the variable at the left-hand side. The fourth part is an integer value `10` (a rvalue). The last part is the semicolon `;` - a terminator which tells this is the end of a statement. So the entire first statement meas declaring an integer variable called temperature, assigning integer value 10 to it, then the statement ends. The second line of code means taking value `10` from variable `temperature`, concatenating it with the string `"The value of number is: "` then calling `console.log()` function and passing the string `"The value of number is: 10"` to it. As a result, the `console.log()` function takes the string and prints it as `The temperature should be controlled at: 10`!

Hope this article give you some confidence in learning coding. You better be confident in learning coding. Looking forward to the beginning of your programming journey. If you have any question, comment below. Until next time, I'll see you in the next article.

# Fun Quiz
Open the developer console again! I want you to use two variables: one assigns a string, another assigns an integer. You have to have the browser print `"I give myself 100 points today!"`.
*Tip: Use addition operator `+` to concatenate two variables.*

# Special Topics
## 3 Good Programming Habits
1. Googling
2. Use powerful tools to increase your productivity
3. Be prepared to join a project

### Googling
As you can see in this article code is full of special symbols, logical statements, control statements, objects, and so on. Programmers not only have to understand specifications described in spoken language and turn it to lines of code, but make sure it runs without error to serve customers. Trust me there're always another bug in a program even you've solved 1, 5, 10 even 20 bugs. Programmers spend most of their days designing and debugging. In fact, although some of the problems a programmer encounters may seem hard to solve, in most cases, there's always another programmer who has solved a similar problem in the world. You can almost find ways to solve all your programming problems on Google. Like I say Googling ability is incredibly important to programmers. For example, you can insert the double quotes `"` before and after a phrase or sentence to keep these words together in a search.

### Use Powerful Tools to Increase Your Productivity
To write higher quality code faster, a valuable programmer always loves great tools and extensions to increase their productivity. For example, rather than typing code word by word, it is better to install some useful extensions to automatically generate some code snippets, and even automatically check whether statements have potential mistakes. These are examples of using tools to improve efficiency.

### Be Prepared to Join A Project
Most of the time, programmers have little chance to join a new project. Most of them would join an existing project and trace the code, cooperate with team members to fix bugs or add / enhance features. So it's also very important for programmers to have a right attitude to be ready to join existing projects at any time!

## Meet A Powerful Editor: Visual Studio Code
![Visual Studio Code](https://code.visualstudio.com/assets/home/home-screenshot-win.png)

Programmers love great tools, and Visual Studio Code is one of them. It's a code editor for programmers to complete daily tasks. It not only supports every languages, but can be installed with many powerful extensions that make coding easier. It's highly recommended for both beginners and experienced programmers. Now it's time to [install it](https://code.visualstudio.com/) on your computer and start coding!

<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.3.0/mdb.min.js"
></script>
<div style="text-align: center;">
    <a class="btn btn-primary" href="https://code.visualstudio.com/" style="color: white; text-decoration: none;">
        <i class="fa-solid fa-download me-2"></i>
        Get Latest Visual Studio Code
    </a>
</div>

After installed the Visual Studio Code (let's say VSCode), run the editor and hit "Ctrl + N" to open a new file, then click the language name in the bottom right corner, type JavaScript and select it.
![Visual Studio Code change language mode](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/change_syntax.gif)

Everything's ready now! Type `console.log('Hello, world!');` again, and you'll see the syntax highlighting effect.

{% asset_img vs-code-hello-world.jpg %}

And we can also hit "Ctrl + Shift + X" to bring up the Extensions view.

![Visual Studio Code Extensions view](https://code.visualstudio.com/assets/docs/editor/extension-marketplace/extensions-popular.png)

There're rich extensions there, let's type "JavaScript (ES6) code snippets" to the search bar and install it.

{% asset_img vs-code-javascript-es6-extension.jpg %}

Then we can test the feature provided by the extension. Try input code as follows:
```javascript
class HelloWorld {

}
```
Then move the cursor to second line and type `con`

{% asset_img es6-suggestion.jpg %}

Now let's select 1st. option, then the extension would automatically write some code for us

{% asset_img es6-constructor-code-snippet.jpg %}

This is an example of using a powerful extension. Visual Studio Code is very versatile, and has a rich extension library. If you haven't installed it yet, click the link to start the installation now!

<div style="text-align: center;">
    <a class="btn btn-primary" href="https://code.visualstudio.com/" style="color: white; text-decoration: none;">
        <i class="fa-solid fa-download me-2"></i>
        Get Latest Visual Studio Code
    </a>
</div>

What about you? What is your favorite programming language and editor? Please leave a comment below to share what they are good at with me!
