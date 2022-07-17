title: 'Learn to Code 1: My First Program - Hello, World!'
visible: show
date: 2022-07-17 13:00:34
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---
Have you ever dreamed of writing excellent codes? or like a "hacker" in a movie? Just 10 minutes, you can write your first program by yourself! Enter this article and start today's coding session!
<!--more-->
Let's do this, open your most commonly used browser and press "Ctrl + Shift + I" to open the developer tools, then navigate to the developer console.
{% asset_img terminal.jpg %}
See the right-angle icon on the screen? Looks like a terminal from a hacker movie, right? Now, you're like an excellent programmer facing a console. Attention! Do not copy any text in this article! Let's type something into the magical terminal: `console.log('Hello, world!');`. Have you finished inputing the code? Now, hit the enter key, and see what happens.
{% asset_img hello-world.jpg %}
Congratulations! You've finished your first program and it's actually working! Tell me how much time did you spend? It's less than 10 minutes right? In your first program, you used the JavaScript programming language. You used the `console` object, and called the `log` method of it, passing the text "Hello, world!" to the method. After hitting enter, the browser was asked to print it on the terminal window for us. And before start learning how to code, let's first understand what a program is.

We must be familiar with McDonald's, right? Suppose we order a meal and the waiter receives the request and sends it for production. The production unit begins to prepare the ingredients and all the necessary things according to the recipe, going through the production process, controlling many factors such as temperature and time to make a perfect meal. Recipes for producing meals are like programs. Actions in recipes are like statements. Controlling factors such as temperature and time can be considered as variables assigned with appropriate values. So writing a program can be thought of as making a recipe!

Now let's modify our code a little bit:
```javascript
var temperature = 10;
console.log('The temperature should be controlled at: ' + temperature);
```

Are you finished? Now press enter key to see what the console prints?

{% asset_img print-variable.jpg %}

It's amazing that the console prints `The temperature should be controlled at: 10` instead of `'The temperature should be controlled at: ' + number`. Let's first look at the first line code. This line of code can be split into five parts. First part is the `var` keyword. It's used to declare a variable, like we add a "temperature" controlling factor to the recipe and specify it to be controlled at 10 degree. In some programming languages it also defines the data type, like C:
```c
int temperature = 10;
printf("The value of temperature is: %d", temperature);
```
In these two versions of code, the `var` keyword can be mapped to C `int` keyword. In C the `int` keyword also defines which type of value can be stored into the variable, as well as how to access it. The second part is the name of the variable. We can access the value, and change the value of that variable by using the name. The third part is the assignment operator that tells us we must assign a value to the variable. And the fourth part is the integer literal 10, it represents a value. The fifth part is the semicolon, that is, a terminator which tells this is the end of a statement. So the whole statement meas that we declare a variable called temperature in the first line of code, and assign integer literal 10 to this variable then end the statement. As for the assignment operator `=`, it takes two operands, assigning the value on the right-hand-side to the operand on the left-hand-side. And it's because the second line of code, the browser takes the content of the number variable `10`, then concatenate it with the string `"The value of number is: "` before sending it to `console.log()` to ask the browser to print it. As a result, the console output is `The temperature should be controlled at: 10`!

Hope this article can give you some confidence in programming. Looking forward to your next programming journey. Until next time! See you in the next LTC learn-to-code session.

# Fun Quiz
Open the developer console again! Use two variables: one assigns a string, another assigns an integer. We want the browser to print `"I give myself 100 points today!"`
*Tip: Use addition operator `+` the concatenate two variables.*

# Special Topics
## 3 Good Programming Habits
1. Googling
2. Adopt tools to level up efficiency
3. Be prepared to join a project

### Googling
Like the example shown in the previous article, the code is full of special symbols and special statements. What's more, programmers not only need to convert the functions described in spoken language into these symbols and sentences, but make sure it runs without error to serve customers! Programmers spend most of their days designing and debugging, and the problems they encounter are even more bizarre and hard to explain. But we can't always ask a colleague once we encounter a problem. While the problems programmers face may seem clueless, in most cases, there are always others who have encountered them. So Google ability is critical for programmers!

### Adopt tools to level up efficiency
In order to cope with these special statements and symbols, and to write higher quality code in less time. Programmers who are willing to use tools to improve their work efficiency are more valuable! For example, rather than typing code word by word, it is better to install some useful packages to automatically generate some code snippets, and even automatically check whether statements have potential mistakes. There are examples of using tools to improve efficiency, also the ways that we can improve ourselves!

### Be prepared to join a project
Most of the time, programmers who have entered the workplace have little chance of joining new projects. Most of them would join an existing project and trace the code, cooperate with team members to fix bugs or add / enhance features. So it's also very important for programmers to have a right attitude to be ready to join existing projects at any time!