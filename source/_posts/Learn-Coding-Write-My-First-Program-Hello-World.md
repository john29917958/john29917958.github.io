title: 'Learn Coding: Write My First Program - Hello, World!'
visible: show
date: 2022-09-04 19:13:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

This is the question I hear the most: I want to start to learn coding today! But would it be difficult? Would I fail? Today I'm gonna turn you from a complete beginner to a coder. This is an article I wish I saw when I first started learning coding. Click the more button, you'll write your first program today.

<!--more-->

Now you got to open the browser then press "Ctrl + Shift + J" on Windows or "Ctrl + Option + J" on Mac to open the developer console.
{% asset_img terminal.jpg %}
See the right-angle icon on the screen? I want you to type this magic text after the right-angle then press enter key: `console.log('Hello, world!');`: 
{% asset_img hello-world.jpg %}
Boom! You've written your first program and it works like a charm! It's as simple as doing that and this must have taken you only less than 10 minutes. In your program, the programming language you use is called "JavaScript". You use the `console` object, call its `log` function, and pass the text "Hello, world!" to it. After you hit enter, the browser executed the code you've written, printed the message "Hello, world!" on the terminal.

Now all you need to do is take a look at 5 uses of programming languages. I'll explain the concept behind your code after you read it.

| Purpose                                        | Language                                                      | Example                                                    |
| ---------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| AI and machine learning, data analytics        | Python                                                        | Spotify uses Python and Hadoop to implement user recommendation system |
| Web development                                | JavaScript, Java, Ruby, PHP, C#, Node.js (JavaScript), Python | Facebook is written in PHP, LinkedIn is written in Node.js             |
| Mobile app                                     | Java (Android), Swift (IOS), Kotlin, React Native, Python     | Telegram mobile                                                        |
| Computer graphics and high-performance systems | C, C++                                                        | Adobe Photoshop                                                        |
| Games                                          | C# (Unity), C++ (Unreal)                                      | Fall Guys: Ultimate Knockout, Hellblade: Senua’s Sacrifice             |

Before diving into the code, I think it's incredibly important that you understand what a program is. I swear to you it is going to help you tremendously in the future. Let me give you a perfect example.

When you place an order in a restaurant, the waiter gets the name of the meal you order, then the chef have to follow a set of instructions in a recipe to make the meal. There're many control variables specified in a recipe, like temperature and time. To make a perfect meal, the chef have to control them in the cooking process.

Now I want you to imagine that a program is like a recipe, code is like instructions in a recipe, variables in source code are like temperature and time that can be adjusted while cooking. The chef? is like the computer. Chef "cooks" a meal is like the computer "executes" a program producing outputs. I want you to look at an example below:
```javascript
var temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

All you need to do now is type it in the developer console then press enter to see what will happen:

{% asset_img print-variable.jpg %}

Surprisingly, the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + temperature`. All I want you to do now is look at the first line of code. It can be split into five parts: The first part is the `var` keyword. It's used to declare a variable, like a "temperature" control variable in a recipe. In some programming languages it also defines the data type, like C:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
In C the `int` keyword also specifies which type of value can be stored into the variable, as well as how to operate it. Let's first understand in this way. Specifying `int` keyword is like specifying the chef can only control the temperature at 90, 95, 100 and any integer degree. I want you to see the previous JavaScript example. After the first `var` keyword is the second part, the variable name `temperature`. It's like the control factor name "temperature" in a recipe. You can access that variable by using the variable name. Then the third part is the assignment operator `=` that takes two operands. It's used to assign a value at the right-hand side to the variable at the left-hand side. The fourth part is an integer value `10` (a rvalue). The last part is the semicolon `;` - a terminator which tells this is the end of a statement. So the entire first statement meas declaring an integer variable called temperature, assigning integer value 10 to it, then the statement ends. The second line of code means taking value `10` from variable `temperature`, concatenating it with the string `"The value of number is: "` then calling `console.log()` function and passing the string `"The value of number is: 10"` to it. A function is like a useful tool that encapsulates commonly used instructions. As a result, the `console.log()` function takes the string and prints it as `The temperature should be controlled at: 10`!

Hope this article give you some confidence in learning coding. You better be confident in learning coding. Looking forward to the beginning of your programming journey. See you in the next article.

# Fun Quiz
Open the developer console again! I want you to use two variables: one assigns a string, another assigns an integer. You need to have the browser print `"I give myself 100 points today!"`
*Tip: Use addition operator `+` to concatenate two variables.*

# Special Topics
## 3 Good Programming Habits
1. Googling
2. Adopt tools to level up efficiency
3. Be prepared to join a project

### Googling
Like the example shown in the previous article, the code is full of special symbols and special statements. What's more, programmers not only need to convert the functions described in spoken language into these symbols and sentences, but make sure it runs without error to serve customers! Programmers spend most of their days designing and debugging, bugs and errors can always come up, but we just can't keep asking colleagues each time we encounter a problem. While the problems programmers face may seem clueless, in most cases, there are always others who have encountered them. So Google ability is critical for programmers!

### Adopt Tools to Level Up Efficiency
In order to cope with these special statements and symbols, and to write higher quality code in less time. Programmers who are willing to use tools to improve their work efficiency are more valuable! For example, rather than typing code word by word, it is better to install some useful extensions to automatically generate some code snippets, and even automatically check whether statements have potential mistakes. These are examples of using tools to improve efficiency.

### Be Prepared to Join A Project
Most of the time, programmers who have entered the workplace have little chance of joining new projects. Most of them would join an existing project and trace the code, cooperate with team members to fix bugs or add / enhance features. So it's also very important for programmers to have a right attitude to be ready to join existing projects at any time!

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