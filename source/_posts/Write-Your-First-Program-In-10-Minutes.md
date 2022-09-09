title: 'Write Your First Program In 10 Minutes'
visible: show
date: 2022-09-04 19:13:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

This is the question I have heard the most: I want to start learning programming today! But would it be difficult? would I fail? Today I will turn you from a complete beginner, a person who just started coding to a "little expert" who can not only write a program by yourself but understands the concept behind the program. This is an article I wish I saw when I first started learning programming. Click the more button below, you'll write your first program and understands the concept behind the execution of it today.

<!--more-->

So here's the first thing I want you to do: Open the browser and press "Ctrl + Shift + J" on Windows or "Ctrl + Option + J" on Mac to open the developer console.
{% asset_img terminal.jpg %}
As soon as the developer console opened you must see a right-angle icon on the screen. I want you to type this magic text after the icon. Don't copy! Just type it and press the enter key to see what happens: `console.log('Hello, world!');`: 
{% asset_img hello-world.jpg %}
Boom! It's as simple as doing that. You wrote your first program in 10 minutes! In your program, you use "JavaScript" programming language. You use the `console` object, call its `log` function, and pass the text "Hello, world!" to it. After you hit enter, the browser executed the code you've written, printed the message "Hello, world!" to the console.

Now all you need to do is take a look at 5 uses of programming languages. I'll explain the concept behind your code afterwards.

| Uses                                           | Languages                                                     | Example                                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| AI, machine learning, data analytics           | Python                                                        | Recommendation engine of Amazon                                                          |
| Web development                                | JavaScript, Java, Ruby, PHP, C#, Node.js (JavaScript), Python | Facebook is written in PHP, LinkedIn is written in Node.js                               |
| Mobile app                                     | Java (Android), Swift (IOS), Kotlin, React Native, Python     | Telegram for iPhone and iPad is written in Swift                                         |
| Computer graphics and high-performance systems | C, C++                                                        | Adobe Photoshop is written in C++                                                        |
| Games                                          | C# (Unity), C++ (Unreal)                                      | Fall Guys: Ultimate Knockout is made with Unity (C#). Fortnite is made with Unreal (C++) |

You've already known 5 uses of programming languages. Now I want to talk about what a program is. I think it's incredibly important that you understand what a computer program is. I swear to you it is going to help you tremendously in the future. Let me give you a perfect example.

When you order food at a restaurant, a chef will follow a set of instructions in a recipe to make. There're many control variables in a recipe like baking time and temperature. To make perfect food, the chef has to control the variables as the food is made. I want you to imagine that making a recipe card is like writing a program. A recipe is like a program. Instructions are like code. You need to write lines of instructions on a recipe card, you need to write lines of code to make a program. Baking time and temperature are like variables. You may specify baking time and temperature in a recipe, you may define variables in your code as well! A chef is like a computer. A recipe needs a chef to follow, you need a computer to execute a program, too! Now it's all you need to know, let me explain in detail: A computer program is a set of machine instructions. These machine instructions are compiled or interpreted from the source code written by developers. And the "Human-readable programs" are called "source code". I want you to see the example below:
```javascript
let temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

All you need to do now is type it in the developer console. Type it yourself, don't copy, press the enter key and see what happens:

{% asset_img print-variable.jpg %}

As you can see, the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + temperature`. There's a reason behind it. Firstly let me divide the first line of code into five parts. The first part is the `let` keyword. It's used to declare a block-level variable, like specifying a "baking temperature" control variable in a recipe. In some programming languages like C, it also defines the data type that specifies how the computer explains the data stored in the memory address where the variable points to:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
Let's first understand in this way. In C the `int` keyword also specifies which type of value can be stored into the variable, as well as how to operate it. Use `int` keyword to declare a variable is like specifying the "baking temperature" can be controlled at 90, 95, 100 and any **integer** temperature. Now let's look back to the previous JavaScript example. After the `var` keyword is the second part: the variable name `temperature`. After a variable is declared, a memory space is allocated for storing data there. A variable name is like a "label" to the allocated memory space. You can access the data stored in that memory space by using the variable name. The third part is the assignment operator `=`. The assignment operator takes two operands. It's used to assign the right-hand side operand value to the one on the left-hand side. The fourth part is an integer value `10`. Unlike the variable `temperature`, it's a "rvalue" that does not have any "label" pointing to an occupied memory space. The last part is the semicolon `;` - a terminator which tells this is the end of a statement. So the entire first line of code means declaring an integer variable called `temperature` then assigning an integer value `10` to it. The second line of code means taking value `10` from variable `temperature`, concatenating it with the string `"The value of number is: "`, then calling the function `console.log()`, passing the string `"The value of number is: 10"` to it. As a result, the `console.log()` function prints `"The temperature should be controlled at: 10"` on the console!

Now you're one step closer to a great programmer. Hope this article gives you some confidence in learning coding. You better be confident in learning coding. If you have any question, comment below. Until next time, see you in the next article.

# Fun Quiz
Practice right after learning is an extremely fast way to improve yourself. Now you got to open the developer console! I want you to make the browser print `"I give myself 100 points today!"` as soon as you can. You have to use three variables to pass the quiz. Let me give you two tips:
1. Assigns a string to each of the two variables, assigns an integer to the other one
2. Use addition operator `+` to concatenate these variables
