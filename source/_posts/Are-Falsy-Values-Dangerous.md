title: Falsy Values危險嗎？
visible: true
date: 2024-03-07 12:08:56
tags: [code, javascript, programming, web, webdesign]
category: Programming
keywords: web design, javascript, programming, code
---
JavaScript的falsy values很危險嗎？它們是什麼？我到處都在用啊？下面這段程式碼我這樣寫會出問題嗎？
```javascript
let address2 = "";
if (!address2) {
  console.log("Address2 is not initialized.");
} else {
  console.log("Checkout!");
}
```
如果我們真的這樣寫，執行後的結果會是：
<!-- more -->
{% asset_img unexpected-result.jpg %}
什麼！？我明明就用空字串`""`初始化第二地址`address2`變數了，怎麼程式碼還是把它看成沒有初始化呢？原來是JavaScript在conditional裡面會把空字串當成`false`，所以即使我們已經初始化好`address2`變數了，還是得到意料之外的結果。

# Falsy (Falsey) Values
這種會讓JavaScript engine在conditional裡面自動當成`false`的數值，叫做falsy values，又叫做falsey values。雖然直接這麼寫有時真的很方便，JavaScript的conditonal判斷實在有很多詭異的地方，我們還是多加注意吧！那麼，falsy values到底有哪些呢？讓我們熟記下面這五個吧！準備好了嗎？它們分別是：

| Falsy (Falsey) Values | 說明                                                                                             |
|-----------------------|--------------------------------------------------------------------------------------------------|
| `null`                | 應該要有值，但目前還沒辦法給值的物件變數。                                                              |
| `undefined`           | 沒有被初始化的變數。                                                                                |
| `""`                  | 空字串。                                                                                          |
| `0`                   | 數字0。                                                                                          |
| `NaN`                 | 沒辦法在JavaScript裡呈現的數字，例如對-1開根號，全名是Not a Number。<br />備註：`NaN`不等於任何數值，甚至是它自己。 |

一起熟記falsy values，避開JavaScript conditional地雷吧！
