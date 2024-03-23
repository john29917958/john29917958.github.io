title: Lexical Scope和Closure有什麼關係?
visible: show
date: 2024-03-23 19:08:03
tags: [code, javascript, programming, web, webdesign]
category: Programming
keywords: web design, javascript, programming, code
---
在前一篇的{% post_link Salary-Increase-Closure 加薪閉包 %}裡，我們看過了JavaScript closure是怎麼施展魔法，避免產生global變數。但為什麼我們可以知道，一個function的free variables被定義在哪裡呢？今天我們就要來一探究竟！是的，答案就在標題上，是因為JavaScript的lexical scope特性啦！我們先來看看lexical scope的說明：
<!-- more -->
Lexical scope是，我們可以藉由閱讀程式碼的結構，知道存取到的變數被定義位置。舉例來說，我們可以看看下面這段程式碼：
```javascript
var number = 20;

function getDoSomethingFunc() {
  var number = 10;

  function doSomething() {
    console.log(number);
  }

  return doSomething;
}

var doSomething = getDoSomethingFunc();
doSomething();
```
執行這段程式碼之後，會在console裡印出什麼呢？答案是`10`，而不是`20`呢！因為要尋找`doSomething` function的free variable「`number`」，我們應該從`doSomething` function開始找，發現找不到，接著我們往外面一層scope找，也就是`getDoSomethingFunc` function的scope，在這裡找到了variable「`var number = 10;`」的定義。所以，程式碼執行之後印出來的，是`10`，而不是在最外層的`number`變數，其數值是`20`囉！也就是跟`doSomething` function在哪裡被執行沒有關係啦！
最後我們再來看一次，藉由JavaScript的lexical scope，我們可以只閱讀程式碼，就知道存取的變數被定義的位置了！
