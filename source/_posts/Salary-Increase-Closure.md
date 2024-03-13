title: 加薪閉包 - Closure
visible: show
date: 2024-03-10 14:05:08
tags: [code, javascript, programming, web, webdesign]
category: Programming
keywords: web design, javascript, programming, code
---
在{% post_link Free-Variable Free Variable %}這則貼文裡，我們已經看過了free variable是什麼啦，這次我們要來看看什麼是JavaScript的closure。在看closure之前，我們先一起回顧一下用closure的好處：有避免產生global變數、避免跟別人的程式碼發生衝突、避免讓變數意外得被外界程式修改而導致bug產生等。既然它有這麼多好處，一定要掌握它！要掌握closure首先我們要知道，當一個function用到了free variable，會發生什麼事，我們先看看下面的程式碼片段：
<!-- more -->
```javascript
function getIncreaseSalaryFunc() {
  let salary = 0;

  function increaseSalary() {
    let message = "Salary is ";
    salary = salary + 1000;
    console.log(message + salary);
  }

  return increaseSalary;
}

let increaseSalary = getIncreaseSalaryFunc();
for (let i = 0; i < 99999; i++) {
  increaseSalary(); // This prints my current salary
}
```
我們可以看到`increaseSalary` function裡面用的`salary`就是一個free variable，它在`increaseSalary` function裡面沒有被建立，而是被建立在外面的`getIncreaseSalaryFunc` function裡。在這種情況下，`increaseSalary` function還是可以存取到`salary`變數。這是怎麼一回事呢？我們先來看看closure是什麼意思：
Closure是一個function，附上一個包含所有free variables的referencing environment。
當`increaseSalary` function被建立時，closure就產生了，而當`increaseSalary` function被return出去時，可以想成是把整個closure回傳出去。於是，當包含free variable的function被執行時，JavaScript會從closure裡的referencing environment尋找free variable的數值。這也就是為什麼，在裡面的`increaseSalary` function可以存取到外面的`getIncreaseSalaryFunc` function的`salary`變數啦！