title: 'Learn to Code: Closure'
visible: show
date: 2022-08-20 23:21:09
tags:
category:
---

你難道不覺得一份腳本裡各種用途的變數很多，會讓程式很難閱讀嗎? 要改這個腳本的程式，甚至很容易讓其中一個 `function` 去誤用到用途完全不一樣的物件。
我們今天要談的是 scope 跟 closure。今天這堂課我將把你從會寫 JavaScript 腳本的 coder 變成一個會保護物件，只暴露必要變數跟功能出來的優秀 programmer。

<!--more-->

## Window object
在我們談 closure 跟 scope 之前，讓我先教你跟 `window` 物件有關的知識。`window` 是 JavaScript 在網頁應用程式裡面的一個全域 (global) 物件。所有 JavaScript 的全域物件都被紀錄在 `window` 物件底下，讓我們來看一個例子:

```javascript
console.log(this);
```

當我們直接在 script 裡面存取到 `this` keyword，會直接去找到 global context 底下的 `window` 物件。連 `document` 物件也是。包括我們常用的 `document.querySelector()` 也是去存取 `window` 底下的 `document` 物件來呼叫 `querySelector()` method。(這樣你有明白是怎麼一回事嗎?) 來舉個例子吧! 如果要把最完整的 `document.querySelector()` 寫出來，我們應該在 `document` 前面加上什麼? 答案是 `window.document.querySelector()`。接下你必須知道，當腳本裡面用
 `var` 宣告的變數沒有用任何 `function` 或 `()` 包起來，或在 `function` 裡面沒有用 `var`、`let`、`const` 來宣告，就會直接被新增到 `window`，或被加到 `window` 變數裡，讓我給你一個例子:

```javascript
var number = 10;
let message = 'John Doe';

function f() {
    date = new Date();
}

f();

console.log(window.number); // no error
console.log(window.date); // no error
console.log(window.message); // undefined
```

我不認為宣告變數不用 `var`、`let` 跟 `const` 是好的做法。即便要宣告 global 變數，都養成寫 `window.variableName` 的好習慣。接著你需要知道一個在 `window` 物件底下很關鍵的屬性: `window.onload`。當我們腳本寫好，include 到 HTML 裡面，就可以用瀏覽器執行起來。但問題是，瀏覽器在 parse HTML 文件是一個元素一個元素在準備的。而且瀏覽器在載入 JavaScript 文件是在另外一條執行續進行。如果直接在 script 裡面寫許多程式碼，會選不到寫在 script 後面的 HTML 元素、也有機會用不到其他腳本的功能。所以你不要那麼做，其中有一個方法是綁定一個 callback `function` 到 `window.onload` 的屬性，作為整個程式開始存取元素的 code，可以想成類似 app 的進入點。Boom! 就像這樣，你可以很聰明得在瀏覽器 render 完呈現好所有 HTML 元素、圖片跟把 script 載入完成之後會觸發一個事件來調用指定給 `window.onload` 的 callback `function`。所以寫 JavaScript 的時候，應該總是指定 callback `function`，在資源準備好之後，再執行主邏輯。

> Context: 跟一項任務有關的資源集合。可以是一個跑起來的 process，中文叫做行程，例如跑起來的一個 Notepad 文字編輯器、一個 thread，中文叫做執行續，例如瀏覽器在下載檔案的時候，我們還可以繼續瀏覽其他頁面跟使用其他功能，或是一個 JavaScript 的 object，中文叫做物件，例如 `window` 物件。

接下來我要教你的是頂尖 JavaScript programmer 都一定會使用的一個非~常~重~要~的關鍵技巧: 叫做 closure (x2)。

## Closure
Closure 的中文名稱叫做閉包。你知道嗎? 當我們要控制物件的可見度，比方說要把物件藏好，只讓有關的 code 使用時，就可以用 closure 這種技巧。甚至可以用 closure 這種技巧做到 `private` member 的效果。讓我給你舉個完美的例子:

```javascript
let text;

function beginEdit(toDoId) {
    let input = document.querySelector(`input[data-id="${toDoId}"`);
    text = input.value;
    input.removeAttribute('readonly');
}

function cancelEdit(toDoId) {
    let input = document.querySelector(`input[data-id="${toDoId}"`);
    input.value = text;
    text = null;
    input.setAttribute('readonly', true);
}

function endEdit(toDoId) {
    let input = document.querySelector(`input[data-id="${toDoId}"`);
    text = null;
    input.setAttribute('readonly', true);
}
```

假設上面是一段 to-do app 的程式碼，裡面有三個 functions: `beginEdit`、`cancelEdit` 跟 `endEdit`。`beginEdit` 是用來讓某個 to-do 元素可以被編輯、`cancelEdit` 是用來把某個 to-do 元素變成唯獨狀態，而且復原這條 to-do 的文字、`endEdit` 是直接把某個 to-do 元素變成唯獨的狀態。最上面的 `let text;` 是一個用來暫存某個 to-do 元素原本的文字，讓 `cancelEdit` 被呼叫的時候來復原文字用的。這段程式碼看起來很完美，但問題是當使用者編輯第一條 to-do，接著編輯第二條 to-do，最後取消編輯第一條 to-do，bug 就發生了。

```javascript
function genToDo(text) {
    let date = new Date(),
        id = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() +
            date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString() +
            date.getMilliseconds().toString(),
        t = text,
        toDo = document.createElement('div'),
        input = document.createElement('input'),
        button = document.createElement('button'),
    
    input.style.display = 'inline-block';
    input.value = t;
    toDo.appendChild(input);
    toDo.appendChild(button);



        toDo = {
            id: id,

            beginEdit: function () {
                element.removeAttribute('readonly');
            },
            
            cancelEdit: function () {
                element.value = t;
                element.setAttribute('readonly', true);
            },

            endEdit: function () {
                t = element.value;
                element.setAttribute('readonly', true);
            }
        };

    element.value = t;
    element.setAttrribute('data-id', id);
    element.setAttribute('readonly', true);

    return {
        element: element,
        toDo: toDo
    };
}
```

```javascript
let user = (function () {
    let name = '',
        user = {
            setName: function (n) {
                name = n;
            },

            getName: function() {
                return name;
            }
        };

    return user;
})();
```

## Special Topics
### Visual Studio Code Debugger
- Break point
- Inspect variable value in memory
- Conditional break point

### Use shortcut keys to improve work efficiency:
- Control + Arrow Keys: Move cursor one word at a time
- Control + Shift + Arrow Keys: Select one word at a time
- Home / End: Return cursor to beginning of line / Move cursor to end of line
- Shift + Home or End: Select text from cursor to beginning or the end of a line
- Control + A: Select all
- Control + S: Save
- Control + Shift + S: Save all files
- Tab: Insert indentation
- Shift + Tab at beginning of line: Remove a indentation
- Control + F: Locate a specific character, word, or phrase in a document
- Control + Shift + F: Locate a specific character, word, or phrase in any document in a folder or project
