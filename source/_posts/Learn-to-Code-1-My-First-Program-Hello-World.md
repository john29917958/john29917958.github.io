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
var number = 10;
console.log('The value of number is: ' + number);
```

Are you finished? Now press enter key to see what the console prints?

{% asset_img print-variable.jpg %}

It's amazing that the console prints `The value of number is: 10` instead of `'The value of number is: ' + number`. Because at the second line of code, the browser takes the content of the number variable `10`, and concatenate it with the string `"The value of number is: "` before sending it to `console.log()` to ask the browser to print it.

Hope this article can give you some confidence in programming. Looking forward to your next programming journey. Until next time! See you in the next LTC learn-to-code session.
