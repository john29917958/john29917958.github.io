title: 'Learn to Code 7: Be An Artist - Coding Convention and Reusing'
visible: show
date: 2022-07-31 14:31:49
tags:tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

我們可以把程式寫得像小說或故事書一樣好讀!? 除了基本語法以外，這五項技巧改變了我的程式碼品質。進階的技巧不只可以讓程式碼像故事書一樣簡單易懂，可以被快快讀完，還可以把程式寫得像萬用工具組一樣，遇到任何螺絲釘都能完美應付! 今天我想跟大家分享五個成為程式藝術匠師的技巧，五個我不斷要求自己在 coding 時做的事。如果你想讓你的程式能力突破到下一個階段，點開這篇文章，免費獲得這五項技巧!

<!--more-->

Why we must learn these knowledge?

## 技巧一: Coding Convention
程式碼撰寫風格是讓你的變數名稱、功能名稱、屬性名稱還是任何變數任何物件的名稱，都符合程式語言約定好的格式。大家寫的風格都一樣，可以減少寫出隱含 bug 的程式碼、會讓程式碼更容易閱讀、比較容易一眼看出變數的類型跟特性、比較有段落，專案成員有異動的時候，交接也會更容易
我們先看來一個範例! 如果我們宣告兩個變數，而且都用它們記錄學生的身高:

```cpp
int a = 156;
int studentheight = 156;
```

你有什麼想法呢? 很顯然第二種寫法比較好。第二行用有意義的單字描述變數的用途；第一行卻只用一個「a」來當作變數的名字。如果程式碼裡面有 90 個沒意義的變數名稱，要讀懂還真有難度。如果程式碼裡面一樣有 90 個變數，每個都用有意義的單字命名。很明顯是第二種 code 會比第一種更加容易閱讀! 感覺到了嗎? 花點心思幫變數命名竟然可以讓程式的可讀性提升這麼多! 我們再來看看第二段 C++ 程式碼:

```cpp
int studentheight = 156;
int student_height = 156;
```

這次你有什麼想法呢? 在這段 C++ 程式碼裡面，第二個變數的命名又比第一個變數好。如果是在寫文章，我們會寫「student height」，把兩個單字用空白隔開，但程式碼的變數名稱卻不準有空白出現。為了讓程式碼讀起來更像在讀文章一樣，我們可以用底線「`_`」，把第一個單字跟第二個單字隔開，讓讀者在看「`student_height`」的時候產生有兩個單字的視覺效果，比把兩個單字黏在一起、很難看出有幾個單字的 `studentheight` 好讀多了! 像這類用底線「`_`」把單字隔開的方法有一種統一的命名風格叫「Snake Case - 蛇形命名法」。這種命名風格規定變數名稱可以把單字用底線隔開，而且每個字元都必須以小寫呈現。C、C++ 跟 Python 就都應該遵循 Snake Case 命名風格。

我們有很多種...

Being written...

「Camel Case - 小駝峰式命名法」。Camel case 風格規定變數名稱裡除了第一個字元保持小寫，其他每一個有意義的「單字」都要用大寫開始，例如 `int criticalPoint`、`String firstName`、`double bodyFatPercentage`。Java、C#、JavaScript 的變數就都遵循這種命名法。


Coding convention


縮排

## 技巧二: 用容易閱讀的名字包裝複雜的邏輯
命名風格 Use meaningful variable names and function names to replace complex logic


## 技巧三: 保持單層的 if 驗證邏輯
Nested if v.s. an if firewall

## 技巧四: 控制 function 長度跟職責
Function length and function responsibility

## 技巧五: Reusing
Reusing
減少重複的程式碼，讓程式碼更精簡、更容易閱讀、更容易被理解
可以讓一份程式碼被很多人或很多模組使用
修改程式碼或做擴充的時候會更有效率，只要改一兩個地方就好，不用到專案裡面的各個地方去改類似的功能
間接可以用有意義的名字把一段程式碼封裝起來


