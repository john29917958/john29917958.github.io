title: 'Learn Coding: Write My First Program - Hello, World!'
visible: show
date: 2022-09-04 19:13:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

This is the question I hear the most: I want to start to learn coding today! But would it be difficult? Would I fail? Today I'm gonna turn you from a complete beginner to a coder. This is an article I wish I saw when I first started learning coding. Click the more button below, you'll write your first program today.

<!--more-->

Now you got to open the browser and press "Ctrl + Shift + J" on Windows or "Ctrl + Option + J" on Mac to open the developer console.
{% asset_img terminal.jpg %}
See the right-angle icon on the screen? I want you to type this magic text after the icon and press enter key: `console.log('Hello, world!');`: 
{% asset_img hello-world.jpg %}
Boom! You've written your first program! It works like a charm! It's as simple as doing that and this must have taken you only less than 10 minutes, isn't it? In your program, the programming language you use is called "JavaScript". You use the `console` object, call its `log` function, and pass the text "Hello, world!" to it. After you hit enter, the browser executed the code you've written, printed the message "Hello, world!" on the terminal.

Now all you need to do is take a look at 5 uses of programming languages. I'll explain the concept behind your code after this table.

| Purpose                                        | Language                                                      | Example                                                    |
| ---------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| AI and machine learning, data analytics        | Python                                                        | Spotify uses Python and Hadoop to implement user recommendation system |
| Web development                                | JavaScript, Java, Ruby, PHP, C#, Node.js (JavaScript), Python | Facebook is written in PHP, LinkedIn is written in Node.js             |
| Mobile app                                     | Java (Android), Swift (IOS), Kotlin, React Native, Python     | Telegram mobile                                                        |
| Computer graphics and high-performance systems | C, C++                                                        | Adobe Photoshop                                                        |
| Games                                          | C# (Unity), C++ (Unreal)                                      | Fall Guys: Ultimate Knockout, Hellblade: Senua’s Sacrifice             |

You've already known the uses of programming languages. Before diving into the code, I think it's incredibly important that you understand what a program is. I swear to you it is going to help you tremendously in the future. Let me give you a perfect example.

When you order a dish in a restaurant, a chef will follow a set of instructions in a recipe to make the meal. There're many control variables specified in a recipe, like temperature and time. To make a perfect meal, the chef have to control them in the cooking process.

Now I want you to imagine that a program is like a recipe, code is like instructions in a recipe, variables in source code are like temperature and time control variables. The chef? is like the computer. Chef "cooks" a meal is like the computer "executes" a program producing outputs. I want you to look at an example below:
```javascript
var temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

All you need to do now is type it in the developer console and press enter to see what will happen:

{% asset_img print-variable.jpg %}

Surprisingly, the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + temperature`. All I want you to do now is look at the first line of code. It can be split into five parts: The first part is the `var` keyword. It's used to declare a variable, like a "temperature" control variable in a recipe. In some programming languages it also defines the data type, like C:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
In C the `int` keyword also specifies which type of value can be stored into the variable, as well as how to operate it. Let's first understand in this way. Specifying `int` keyword is like specifying the chef can only control the temperature at 90, 95, 100 and any integer degree. I want you to see the previous JavaScript example. After the first `var` keyword is the second part, the variable name `temperature`. It's like the control factor name "temperature" in a recipe. You can access that variable by using the variable name. Then the third part is the assignment operator `=` that takes two operands. It's used to assign a value at the right-hand side to the variable at the left-hand side. The fourth part is an integer value `10` (a rvalue). The last part is the semicolon `;` - a terminator which tells this is the end of a statement. So the entire first statement meas declaring an integer variable called temperature, assigning integer value 10 to it, then the statement ends. The second line of code means taking value `10` from variable `temperature`, concatenating it with the string `"The value of number is: "` then calling `console.log()` function and passing the string `"The value of number is: 10"` to it. As a result, the `console.log()` function takes the string and prints it as `The temperature should be controlled at: 10`!

Hope this article give you some confidence in learning coding. You better be confident in learning coding. Looking forward to the beginning of your programming journey. If you have any question, comment below. Until next time, I'll see you in the next article.

# Fun Quiz
Open the developer console again! I want you to use two variables: one assigns a string, another assigns an integer. You have to have the browser print `"I give myself 100 points today!"`.
*Tip: Use addition operator `+` to concatenate two variables.*
