title: How JavaScript Functions Created?
visible: false
date: 2024-03-05 20:46:16
tags: [code, javascript, programming, web, webdesign]
category: Programming
keywords: web design, javascript, programming, code
---
原來我以前也不知道，JavaScript engine下載完JavaScript文件，還要先掃一次，再run一次？Function有兩種建立方式？其實，function declaration跟function expression是很有用的！弄懂它們背後如何運作，應該可以為寫code生活帶來不少便利性。Function的兩種定義方式到底長什麼樣子呢？先直接來看看下面兩段程式碼：
<!-- more -->

# 兩種Function的定義方式
首先這裡是fucntion declaration的程式碼片段:
```javascript
function doSomething() {
  console.log("Do something");
}
```
再來是function expression的：
```javascript
var doSomething = function () {
  console.log("Do something");
}
```
用這兩種方法都可以得到名字叫`doSomething`的function，但程式碼長得卻完全不一樣呢！這有差別嗎？要知道它們的差別，我們首先要知道JavaScript engine如何處理下載好的JavaScript文件。

# JavaScript Engine如何處理JavaScript文件?

## Function Declarations
一開始，JavaScript engine會先從文件的開頭掃到文件的結尾，為的是找出所有的function declaration statements。每找到一個function declaration statement，JavaScript engine會在記憶體裡建立一個function物件，然後根據function的名稱來建立一個名字一模一樣的變數，並將一個指向function物件的reference指派給這個變數。到這裡，JavaScript engine就完成所有的function declaration工作啦！不過，JavaScript engine的工作還沒結束呢！

## Function Expressions
緊接著，JavaScript engine會再回到JavaScript文件的開頭，開始執行程式碼。如果在執行過程中看到function expression的程式碼，JavaScript engine會建立一個function物件到記憶體裡，並回傳它的reference出來，交給程式設計師使用。舉例來說，JavaScript程式設計師可以把這個reference指定給一個變數，儲存起來以便之後使用。咦，那function expression程式碼還沒被執行到，不就不能用這個function了嗎？

# 兩種建立方法，哪裡不一樣？
我認為它們最大的差別就是可以被存取到的地方不同啦！用function delcaration建立的function，在它被建立的scope裡的任何地方，都可以存取得到。這是因為JavaScript engine會把建立function後自行建立的變數移到目前scope的開頭，稱為hoisting，所以即使function declaration被寫在文件的尾端，我們也可以在JavaScript程式碼的開頭使用它：
```javascript
showMeYourAge(); // Humm, I'm always 18 years old, wherever I call that
// function declaration thing.

function showMeYourAge() {
  console.log("I'm always 18 years old.");
}

showMeYourAge(); // Humm, I'm still 18 years old, like I just said.
```
那麼用function expression建立的functions呢？恩，我們就只能在function expression程式碼被JavaScript engine evaluate之後才能使用了：
```javascript
showMeYourAge(); // We can't do this here

var showMeYourAge = function () {
  console.log("I'm 18 years old only after I was born.");
};

showMeYourAge(); // This is correct
```

快來掌握function declaration和function expression，開啟嶄新的JavaScript道路吧！
