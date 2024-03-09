title: First Class Function
visible: show
date: 2024-03-09 14:28:57
tags: [code, javascript, programming, web, webdesign]
category: Programming
keywords: web design, javascript, programming, code
---
如果你有寫過JavaScript，你一定也覺得有件事很有趣，就是functions可以被放在變數裡，然後丟來丟去……
```javascript
function execFuncCanBeThrownAround() {
  console.log("I can be thrown around, I was executed.");
}

function execFunc(func) {
  func();
}

let aFuncHasBeenThrownAround = execFuncCanBeThrownAround;
execFunc(aFuncHasBeenThrownAround);
```
啊啊啊！這是怎麼一回事啊？原來是JavaScript的functions也是物件啦！如果把function用console印出來，的確可以看到它有不少屬性呢！像下面這樣
<!-- more -->
```javascript
function createAFunctionIGotAnObject() {}
console.dir(createAFunctionIGotAnObject);
```
如果把上面的程式碼片段放到瀏覽器跑，會看到下面的結果：
{% asset_img print-function-object.jpg %}

既然function也是物件，那麼物件可以做的事，function應該也都可以做囉？這裡我們先來看看物件的特性，物件可以被指定給變數、被存在資料結構裡（例如Array）、被當作argument傳到function裡、被從function裡return出來。Function也是物件，所以前面說的那些操作，也都可以用在function上啦！而只要是可以被指定給變數、被存在資料結構裡、被當作argument傳給function、被從function裡return出來的數值，就叫做「first-class values」，而對function來說，就叫做「first-class function」啦！另外就傳遞物件來說，我們傳遞的是物件的reference，而在傳遞function時，我們傳遞的則是function的reference呢。

JavaScript有很多~詭異又~有趣的地方，恩……我們一起加油，繼續探究吧！有任何建議，也歡迎在下面留言給我喔！
