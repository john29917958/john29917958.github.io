title: 'Learn Coding: Write My First Program - Hello, World!'
visible: show
date: 2022-09-04 19:13:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

This is the question I hear the most: I want to start to learn coding today! But would it be difficult? Would I fail? Today I'm gonna turn you from a complete beginner to a coder. This is an article I wish I saw when I first started learning coding. Click the more button, you'll write your first program today.

<!--more-->

Let's do this, open the browser and press "Ctrl + Shift + J" on Windows or "Ctrl + Option + J" on Mac to open the developer console.
{% asset_img terminal.jpg %}
See the right-angle icon on the screen? You are an excellent programmer in front of a console now! Try not to copy any text in this article. Let's type something in the magic terminal then hit the enter key: `console.log('Hello, world!');`
{% asset_img hello-world.jpg %}
Congratulations! You've written your first program and it's actually working! Tell me how much time did you spend? It's less than 10 minutes right? In your first program, you used the JavaScript programming language. You used the `console` object, called its `log` function, and passed the text "Hello, world!" to it. After hitting enter, the browser execute the code you wrote, print the message "Hello, world!" in the terminal.

Take a break! Let's take a look at five uses of programming languages:

| Purpose                                        | Language                                                      | Example                                                    |
| ---------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| AI and machine learning, data analytics        | Python                                                        | Spotify uses Python and Hadoop to give user suggestions    |
| Web development                                | JavaScript, Java, Ruby, PHP, C#, Node.js (JavaScript), Python | Facebook written in PHP, LinkedIn written in Node.js       |
| Mobile app                                     | Java (Android), Swift (IOS), Kotlin, React Native, Python     | Telegram                                                   |
| Computer graphics and high-performance systems | C, C++                                                        | Adobe Photoshop                                            |
| Games                                          | C# (Unity), C++ (Unreal)                                      | Fall Guys: Ultimate Knockout, Hellblade: Senua’s Sacrifice |

Break time is over! Before we dive into the code, let's first understand what a program is.

We place an order at McDonald's. The waiter receives the request and sends it for production. The production unit begins to prepare the ingredients and all the necessary things according to the recipe, going through the production process, controlling many factors such as temperature and time to make a perfect meal. Recipes for producing meals are like programs. Actions in recipes are like statements. Controlling factors such as temperature and time can be considered as variables assigned with appropriate values. So writing a program can be thought of as making a recipe! Computer follows the instructions of the program is like we cook according to the recipe. When we specify temperature in a recipe should be adjusted to 10 degree, it's like declare a variable and assign 10 to it.

Now let's modify our code a little bit:
```javascript
var temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

Are you finished? Now press enter key to see what the console prints?

{% asset_img print-variable.jpg %}

It's amazing that the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + number`. Let's first look at the first line code. This line of code can be split into five parts. First part is the `var` keyword. It's used to declare a variable, like we add a "temperature" controlling factor to the recipe. In some programming languages it also defines the data type, like C:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
In these two versions of code, the `var` keyword can be mapped to `int` keyword in C. `int` keyword in C also defines which type of value can be stored into the variable, as well as how to access it. The second part is the variable name, the identifier. We can access the value, and change the value of that variable by using the name. The third part is the assignment operator that tells us we must assign a value to the variable. And the fourth part is the integer literal 10, it represents a value. The fifth part is the semicolon, that is, a terminator which tells this is the end of a statement. So the whole statement meas that we declare a variable called temperature in the first line of code, and assign integer literal 10 to this variable then end the statement. As for the assignment operator `=`, it takes two operands, assigning the value on the right-hand-side to the operand on the left-hand-side. And it's because the second line of code, the browser takes the content of the number variable `10`, then concatenate it with the string `"The value of number is: "` before sending it to `console.log()` to ask the browser to print it. And the `console.log()` is to call a function already supported by browser to print text on the console. A function is like a useful tool to encapsulate commonly used instructions into a function. As a result, the `console.log()` function took the string and printed it as `The temperature should be controlled at: 10`!

Hope this article can give you some confidence in programming. Looking forward to the beginning of your programming journey. See you in the next learn-to-code article.

# Fun Quiz
Open the developer console again! Use two variables: one assigns a string, another assigns an integer. We want the browser to print `"I give myself 100 points today!"`
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