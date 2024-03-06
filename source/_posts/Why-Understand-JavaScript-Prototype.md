title: 為什麼要知道JavaScript Prototype?
visible: show
date: 2024-03-06 14:38:47
tags: web design, javascript, programming, code
category: Programming
---
我好久以前只知道JavaScript有prototype這東西，但完全不知道為什麼要用它建立物件？今天終於知道，原來prototype可以用來「避免讓物件的method被重複建立」。可以想像嗎？我們不斷用new operator建立物件，做了上百個instances出來，結果裡面的method全都是複製出來的，佔了一堆記憶體。我有reuse code啊？每個instances的method都是由constructor function建立出來的，沒有重寫，也沒有複製貼上啊？例如下面這段code：
<!-- more -->
```javascript
function Cat(name, age) {
 this.name = name;
 this.age = age;
 this.meow = function () {
   console.log(this.name + " meowed.");
 }
}
```
# 被重複建立的Method Function
依照上面的範例來看，如果我們用這個Cat constructor function建立物件，的確不需要幫每個instances都寫一次meow method，只要在constructor裡面寫好就好。那麼，這段code有什麼問題嗎？原來問題就出在this.meow的定義。直接寫function expression並指定給meow屬性，會讓Cat物件被建立時，不斷產生新的meow function到記憶體中，即便function的內容都一樣。
天哪！那我（其實是筆者我啦）還真是個壞傢伙，寫出了這份糟code。我知道，沒有方法可以避免method function被不斷複製，還可以在呼叫物件方法時，讓JavaScript去呼叫到記憶體中的同一個function，我知道，這只是個幻想……而我，就只能是那個壞傢伙……

# 將將將，prototype登場！
如果有個地方有很多工具，大家都知道地點，有需求但自己又沒有工具時，就可以去那裡找，不用自己準備……等等，如果functions也可以這樣放在一個共享的地方，那每個instance需要工具自己卻沒有時，就可以去那個地方找，而不用自己存一份*重複的function*，那不就省了很多記憶體嗎？原來，我們在存取物件屬性的時候，JavaScript會先去物件身上找有沒有這屬性，如果有就直接用，如果沒有，就去找物件的prototype屬性裡面有沒有。那麼prototype屬性又是什麼呢？原來我們在定義constructor function時，這個constructor function object被建立後就會有一個prototype屬性。用constructor function建立的instances都會有個prototype屬性指向constructor function object的prototype。那我們如果把建立method的程式碼從constructor function body裡搬出來，並且把method建立到constructor function object的prototype裡面，那用constructor建立instance時，就不會重複建立到內容一樣的method function了，當JavaScript在instance裡找不到要呼叫的method時，會自己去prototype裡找，這麼一來記憶體的使用就更省更有效率囉！
