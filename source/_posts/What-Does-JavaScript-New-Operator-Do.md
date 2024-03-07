title: JavaScript的New Operator背後做了些什麼？
visible: show
date: 2024-03-05 20:31:21
tags: code, javascript, programming
category: programming
---
以前都不知道，原來我們用`new` operator來呼叫constructor function，JavaScript執行環境會做下面幾件事：
1. 先建立一個空物件，這個空物件會存在JavaScript執行環境的記憶體裡
2. 然後把`this`指派給這個空物件。`this`其實是指向這個空物件，讓constructor function body可以用的東西，通常會被用來新增物件的屬性，例如：
   ```javascript
   function Dog(name, age, weight) {
     this.name = name; // Uses this keyword to initialize object property "name"
     this.age = age;
     this.weight = weight;
   }
   ```
3. 接著，JavaScript執行環境會呼叫constructor function，把參數指派進去
4. 執行constructor function body，讓程式碼來擴充物件的屬性
5. 最後讓執行完的constructor function回傳`this`出來，讓JavaScript programmer決定要怎麼使用它。例如把它放到變數裡存起來：
   
   ```javascript
   let jack = new Dog("Jack", 5, 7);
   ```

學到這些感覺很新鮮，以後看到new operator時就知道，它背後是如何運行了。