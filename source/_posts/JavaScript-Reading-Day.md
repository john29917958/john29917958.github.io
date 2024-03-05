title: JavaScript的New Operator背後做了些什麼？
visible: show
date: 2024-03-05 20:31:21
tags: code, javascript, programming
category: programming
---
今天學到了一個很重要的JavaScript觀念，是`new` operator在執行時，背後做了些什麼。以前都不知道，原來我們如果用`new` operator來呼叫constructor function，JavaScript執行環境會先建立一個空物件，然後把`this`指派給它。`this`其實是指向這個空物件，讓constructor function body可以使用的東西。接著，JavaScript執行環境會呼叫constructor function，把參數指派給它，再執行constructor function body，最後讓執行完的constructor function回傳`this`出來，讓JavaScript programmer決定要怎麼使用它。學到這些感覺很新鮮，以後看到它就知道背後在運行的時候，是怎麼一回事了。