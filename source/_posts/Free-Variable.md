title: Free Variable
visible: show
date: 2024-03-06 20:29:39
tags: web design, javascript, programming, code
category: Programming
---
有人說，懂JavaScript的closure可以加薪，那closure（閉包）到底是什麼？為什麼會closure可以避免產生global變數？避免跟別人的程式碼發生衝突？避免讓變數意外得被外界程式修改而導致bug產生？其實，在學習如何加薪（X）closure（O）之前，必須先建立free variable的觀念，它對closure來說非常重要
<!-- more -->
那究竟，什麼是free variable呢？就不賣關子了，free variable其實是在function body裡沒有被定義，但有被用到的變數。先看看下面的範例程式碼：
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
這段程式碼宣告了3個變數，一個是`salary`，一個是`message`，還有一個是`increaseSalary`，那究竟哪個是free variable呢？Ladies and gentlemen，答案是：`salary`！它在`increaseSalary` function裡有被用到，但卻沒有被宣告在`increaseSalary` function裡，而是被宣告在外面的`getIncreaseSalaryFunc` function裡。這裡我們就可以說，`salary`變數是`increaseSalary` function的free variable。
好啦，那這跟我們的加薪閉包，也就是closure，有什麼關係呢？恩，我書看到一半，沒辦法，下次再寫吧～
（恩……上面的範例程式碼就製造了一個加薪閉包～）。