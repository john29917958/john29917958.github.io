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

你有什麼想法呢? 很顯然第二種寫法比較好。第二行用有意義的單字描述變數的用途；第一行卻只用一個「a」來當作變數的名字。如果程式碼裡面有 90 個沒意義的變數名稱，要讀懂還真有難度。如果程式碼裡面一樣有 90 個變數，每個都用有意義的單字命名。很明顯是第二份 code 會比第一種更容易閱讀! 感覺到了嗎? 花點功夫幫變數命名竟然可以讓可讀性提升這麼多! 把功能寫出來賺取收入當然重要，但問題是許多人都忽略了怎麼讓程式碼更好讀，讓工作效率更好! 我們再來看看第二段 C++ 程式碼:

```cpp
int studentheight = 156;
int student_height = 156;
```

這次你有什麼想法呢? 在這段 C++ 程式碼裡面，第二個變數的命名方式又比第一個好。我想要你先想像一下，如果在寫信的時候要用英文提到「學生的身高」，我們會寫「student height」來把兩個單字用空白隔開，但程式碼的變數名稱卻不準有空白出現。為了讓程式碼讀起來更像在讀文章一樣，我們可以用底線「`_`」，把第一個單字跟第二個單字隔開，讓讀者在看「`student_height`」的時候產生有兩個單字的視覺效果。這比起把兩個單字黏在一起、很難看出有幾個單字的 `studentheight` 好讀多了! 這就是所謂的「命名風格」。像這類用底線「`_`」把單字隔開的方法有個統一的命名風格叫「Snake Case - 蛇形命名法」。這種命名風格規定變數名稱可以把單字用底線隔開，而且每個字元都必須以小寫呈現。C、C++ 跟 Python 就都應該遵循 Snake Case 命名風格。

有另一種也很常見的命名風格叫做「Camel Case - 小駝峰式命名法」。這種風格規定名稱裡除了第一個字元要保持小寫以外，其他每個有意義的「單字」都要用大寫開始，例如 `int criticalPoint`、`String firstName`、`double bodyFatPercentage`。Java、C#、JavaScript 的變數就都遵循這種命名法。

命名風格有很多種，下面是常見的命名風格讓你做參考。如果你今天寫的是某個特定的程式語言，例如 Python，那你應該直接搜尋這種語言的命名風格。

| 名稱                                           | 規則                                             | 範例             | 遵循案例                                        |
|------------------------------------------------|-------------------------------------------------|------------------|------------------------------------------------|
| Snake Case - 蛇形命名法                         | 用底線「`_`」隔開單字<br>讓所有字元保持小寫      | `student_height` | C, C++, Python                                  |
| Camel Case - 小駝峰式命名法                     | 用大寫字元隔開單字<br>其它字元保持小寫          | `studentHeight`  | Java, C#, PHP 等許多語言的變數名稱             |
| Pascal Case / Upper Camel Case - 大駝峰式命名法 | 讓每個單字的第一個字元呈現大寫<br>其它字元保持小寫 | `StudentHeight`  | 普遍許多語言的 class 名稱<br>Pascal 跟 C# 的 method 名稱 |

那麼，除了命名風格以外我們來談談，你要怎麼讓程式碼看起來有段落，一眼辨識出程式碼的各個區段呢? 我想要你先看過這段程式碼:

```cpp
void sum(int a, int b)
{
return a + b;
}
```

這是一段把兩個整數相加後，回傳結果出去的 function。這段程式碼的第三行 `return a + b;` 前面沒有任何縮排。然而，厲害的程式設計師一定都會這樣寫:

```cpp
void sum(int a, int b)
{
    return a + b;
}
```

這段程式碼在 `return a + b;` 前面有四個空格讓程式碼看起來更有段落，一眼就看出 function 的邏輯區段在哪裡，這也就是善用縮排的好處。接著讓我告訴你為什麼命名的觀念甚至可以用來簡潔地總結一段複雜的程式碼。

## 技巧二: 用容易閱讀的名字包裝複雜的邏輯
高手的程式碼除了會用有意義的文字來幫變數命名以外，也會用更進階的技巧來包裝一段複雜的邏輯或程式碼。讓我先給你一段範例程式碼:

```cpp
if (input.is_key_pressed() &&
    command.size() > 1 &&
    std::find(attack_keys.begin(), attack_keys.end(), input.pressed_key()) != attack_keys.end())
{
    std::string command_str = "";
    for (std::string key : command)
    {
        command_str += key;
    }

    if (command_str == "DownUpAtk")
    {
        character.uppercut();
    }
    else if (command_str == "DownRightAtk" || command_str == "DownLeftAtk")
    {
        character.superman_punch();
    }
    else if (command_str == "RightDownRightAtk" || command_str == "LeftDownLeftAtk")
    {
        character.dragon_punch();
    }
}
```

上面的程式是模擬在特定條件滿足時去發放人物的特殊技能。然而當看到 `if` statement 裡面的條件邏輯時，你是不是和我一樣覺得有點冗長呢? 其實我們可以用一個包裝技巧讓程式碼變好讀，假設我們把程式碼改成這樣:

```cpp
bool is_skill_cond_satisfied = input.is_key_pressed() &&
    command.size() > 1 &&
    std::find(attack_keys.begin(), attack_keys.end(), input.pressed_key()) != attack_keys.end();
if (is_skill_cond_satisfied)
{
    // logic...
}
```

`if` statement 裡面的條件已經用有意義的變數名稱 `is_skill_cond_satisfied` 取代，複雜的判斷邏輯則是被「包裝到」這個變數裡面。我們不用再每次都費心去理解判斷式的目的，只要看變數的名稱就已經幾乎可以知道判斷式想檢查什麼，不用一個條件一個條件去了解判斷邏輯的內容。讓我再給你一個例子，如果我們把程式碼改成這樣:

```cpp

void fire_skill()
{
    std::string command_str = "";
    for (std::string key : command)
    {
        command_str += key;
    }

    if (command_str == "DownUpAtk")
    {
        character.uppercut();
    }
    else if (command_str == "DownRightAtk" || command_str == "DownLeftAtk")
    {
        character.superman_punch();
    }
    else if (command_str == "RightDownRightAtk" || command_str == "LeftDownLeftAtk")
    {
        character.dragon_punch();
    }
}

void main_loop()
{
    bool is_skill_cond_satisfied = input.is_key_pressed() &&
    command.size() > 1 &&
    std::find(attack_keys.begin(), attack_keys.end(), input.pressed_key()) != attack_keys.end();

    if (is_skill_cond_satisfied)
    {
        fire_skill();
    }
}
```

這次看到 `if` statement 程式碼片段，你有什麼想法呢? 我們這次甚至不用去了解那些按鍵組合要觸發角色的哪個技能。我們只要看到 `fire_skill()` 這個 function name 就幾乎可以知道，`if` statement 裡面做的事是去觸發適合的角色技能。組合鍵跟技能要怎麼配合就交給 `fire_skill()` function 去煩惱囉! 由這兩個例子可以發現，適當得幫變數或 function 命名不只可以讓名稱更有意義、更容易讓人的腦袋解讀，甚至可以用來包裝複雜的邏輯，讓程式碼的可讀性更上一層樓! 接下來我們要看一個更進階的程式碼撰寫方法，用來避免難懂的巢狀 `if` statement 出現。

## 技巧三: 保持單層的 if 判斷邏輯

```cpp
if (!is_dead)
{
    if (character.hp == 0)
    {
        character.dead();
    }
    else
    {
        if (!character.is_attacking)
        {
            run_attack_logic();
        }
        else
        {
            if (input.is_jump_key_pressed() && !character.is_jumping())
            {
                character.jump();
            }
        }        
    }    
}
```

上面的程式碼在模擬遊戲裡的每一幀應該怎麼對遊戲人物做更新。在這個範例我們可以發現 `if` statements 一層又一層的出現。想像一下，如果我們的 `if` statements 出現了 5 ~ 6 層，這份程式碼肯定不怎麼好讀。如果我們把程式碼改成這樣......

```cpp
if (is_dead)
{
    return;
}

if (character.hp == 0)
{
    character.dead();
    return;
}

if (!character.is_attacking)
{
    run_attack_logic();
    return;
}

if (input.is_jump_key_pressed() && !character.is_jumping())
{
    character.jump();
}
```

一層一層的 `if` statements 已經全部消失，變成一段一段單層的 `if` statements。在這個例子裡面我們一是反轉 `if` statement 裡面的判斷式，在不適當的條件下直接中斷這段程式碼往外回傳出去、一是 `if` statement 執行完之後如果不允許執行這段程式的其他邏輯，我們也可以直接把 `if` statement 往外抽，一樣在 `if` 內的邏輯執行完之後用 `return` 來中斷這段程式碼並且往外回傳。這是一種簡化巢狀 `if` statements 的方法，但使用這種方法要小心，必須要很清楚每段程式碼執行完並且中斷之後不會因此漏掉後面必須被執行的指令。

## 技巧四: 控制 function 長度跟職責
你知道嗎!? 除了命名風格這些潛規則以外，在寫程式這種行業裡還有一種文化叫做: function 的長度必須小於 20 行! 控制 function 長度不只可以避免讀 function 時要讀很久，甚至可以避免因為 function 太長而寫出潛在的 bug。至於為什麼是 20 行，我想請你試著把下面這段程式碼一次全部打在螢幕上:
```cpp
void display_message()
{
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
    printf("You cannot let all these codes displayed on the screen at once!");
}
```

是不是很困難呢? 那...如果要讓下面這段程式碼一次全部打在螢幕上呢?

```cpp
void display_message()
{
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
    printf("These codes can be all displayed on the screen most of the time.");
}
```

是不是相對容易很多呢? 之所以是「20」行，就是因為程式設計師使用的解析度普遍都可以讓長度在 20 行以內的程式碼一次全部被顯示在螢幕上! 除此之外，我們在設計 function 的時候還有一個更進階的技巧 -「單一職責原則」，也是跟「物件導向」有關的「抽象思考 - abstract thinking」概念。這是一種頂尖程式設計都奉行的概念，讓我們先看看下面這段程式碼:

```cpp
void attack()
{
    std::vector<character*> characters = collider.get_entered_characters();
    if (characters->size() > 0)
    {
        return;
    }

    for (int i = 0; i < characters->size(); i++)
    {
        character ch = characters->at(i);
        if (ch->team_id != this->team_id)
        {
            ch->damage(this->attack_point);            
        }
    }
}
```

## 技巧五: Reusing
Reusing
減少重複的程式碼，讓程式碼更精簡、更容易閱讀、更容易被理解
可以讓一份程式碼被很多人或很多模組使用
修改程式碼或做擴充的時候會更有效率，只要改一兩個地方就好，不用到專案裡面的各個地方去改類似的功能
間接可以用有意義的名字把一段程式碼封裝起來

### Techniques
凝聚注意力用:
- 我想要你 XX (例如想像)
- 所有頂尖的人都...
- 讓我給你一個例子
- 你知道嗎?

凝聚注意力在問題點用:
- 問題是... (代表希望你修正某種不好的習慣，或可以提升自己的地方)

凝聚注意力在改進點用:
- 完全沒有想過 (提起興趣)

承接上下文用: 接著、除此之外、最後、從上到下可以讓描述感覺起來有連貫性

營造感同身受的感覺，或拉近距離:
- 我可以理解
- 他們就是不...

製造範例用:
- 假設
- 想像一下