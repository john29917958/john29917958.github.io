title: 'Learn to Code 7: Be An Artist - Coding Convention and Reusing'
visible: show
date: 2022-07-31 14:31:49
tags:tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

如何把程式寫得像故事書一樣好讀? `int a` 跟 `int apple` 哪一種讀起來比較有意義? 怎麼讓一段程式碼可以不斷被使用? 我也曾經以為掌握基本語法就夠了，沒想到這五項技巧改變了我的程式碼品質。今天我想跟大家分享五個讓程式更好讀、寫起來更有效率的技巧。這些也是我在 coding 時不斷要求自己做的事。如果你想讓你的程式能力突破到下一個階段，點開這篇文章來免費獲得這五項技巧!

<!--more-->

## 技巧一: Coding Convention
當我們談到 Coding Convention (程式碼規範)，都是在談怎麼遵循通用的規則來約束程式碼寫出來的樣子。例如規定該用什麼格式來命名你的變數、功能、屬性、類別，或是用約定好的方式來幫程式碼做排版。遵循好的規範不只可以讓程式碼更容易被閱讀、讓程式看起來比較有段落，也比較容易可以讓我們一眼看出變數的存取範圍。成員有異動的時候，專案也會更容易被交接。讓我先給你一個範例: 如果我們宣告兩個變數來記錄學生的身高

```cpp
int h = 156;
int studentheight = 156;
```

看完上面這段程式碼，你有什麼想法呢? 很顯然第二種寫法比較好。第二個變數的名稱是用有意義的單字組成的，可以一眼看出變數的用途；第一個變數卻只用一個「a」來當作變數的名字。假設程式碼裡面有 100 個變數，這些變數全都用 `a`、`b`、`c` 等等沒意義的字來命名，要讀懂這份程式還真不容易! 假設程式碼裡面一樣有 100 個變數，每個變數都用 `apple`、`banana`、`coconut` 這些有意義的單字來命名，很明顯會好讀非常多! 把功能寫出來賺錢當然重要，但問題是許多人都忽略了怎麼提升程式的「可讀性 (readability)」來提升工作效率! 讓我給你第二個例子:

```cpp
int studentheight = 156;
int student_height = 156;
```

這裡我想要你先想像一下，如果在寫信的時候要用英文寫「學生的身高」，我們會寫「student height」來把兩個單字用空白隔開，但變數名稱卻不準有空白出現。為了讓程式碼更貼近一般的文章，我們可以用底線「`_`」，把第一個單字跟第二個單字隔開，讓讀者在看「`student_height`」的時候產生有兩個單字的視覺效果。這比起把兩個單字黏在一起的 `studentheight` 好讀多了! 這種用底線「`_`」把單字隔開的方法有個統一的「命名規則 (naming convention)」叫「Snake Case - 蛇形命名法」。這種命名規則規定變數名稱裡的每個字元都要用小寫呈現，而且可以用底線把變數名稱裡的單字隔開。C、C++ 跟 Python 就都應該遵循 Snake Case 命名風格。

除此之外，有另一種很常見的命名規則叫做「Camel Case - 小駝峰式命名法」。這種規則規定變數名稱裡除了第一個字元以外，每個「單字」的第一個字都可以用大寫呈現，其它字元都要保持小寫。例如 `int criticalPoint`、`String firstName`、`double bodyFatPercentage`。Java、C#、JavaScript 的變數就都遵循這種命名法。這裡有三種最常見的命名規則讓你參考，接著，我要跟你分享該怎麼讓程式碼看起來有段落，讓讀者可以一眼辨識出每個相關聯的程式碼區段......

| 名稱                                           | 規則                                             | 範例             | 遵循案例                                        |
|------------------------------------------------|-------------------------------------------------|------------------|------------------------------------------------|
| Snake Case - 蛇形命名法                         | 用底線「`_`」隔開單字<br>讓所有字元保持小寫      | `student_height` | C, C++, Python                                  |
| Camel Case - 小駝峰式命名法                     | 除了第一個字元以外<br>用大寫字元隔開單字<br>其它字元保持小寫          | `studentHeight`  | Java, C#, PHP 等許多語言的變數名稱             |
| Pascal Case / Upper Camel Case - 大駝峰式命名法 | 讓每個單字的第一個字元呈現大寫<br>其它字元保持小寫 | `StudentHeight`  | 普遍許多語言的 class 名稱<br>Pascal 跟 C# 的 method 名稱 |

準備好了嗎? 這裡我想要你先看過這段程式碼:

```cpp
#include <stdexcept>

void bubble_sort(int arr[], int length)
{
if (length < 0)
{
throw std::invalid_argument("Length is set to negative integer");
}

if (length <= 1)
{
return;
}

bool is_sorted = false;

do
{
is_sorted = false;

for (int i = 0; i < length; i++)
{
if (arr[i] > arr[i + 1])
{
int temp = arr[i + 1];
arr[i + 1] = arr[i];
arr[i] = temp;
is_sorted = true;
}
}
} while (is_sorted);
}
```

這是一段經典的 bubble sort 演算法 function。這段 code 沒有任何縮排。然而，厲害的程式設計師一定都會這樣寫:

```cpp
#include <stdexcept>

void bubble_sort(int arr[], int length)
{
    if (length < 0)
    {
        throw std::invalid_argument("Length is set to negative integer");
    }

    if (length <= 1)
    {
        return;
    }

    bool is_sorted = false;

    do
    {
        is_sorted = false;

        for (int i = 0; i < length; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                int temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                is_sorted = true;
            }
        }
    } while (is_sorted);
}
```

在 function 內容區段的行首插入「四個空格」的縮排，讓程式碼看起來更有段落、讓讀者一眼看出 function 的內容區段在哪裡。甚至我們還可以看出每個 `if`、`do` - `while`、`for` 的區段程式碼在哪裡。這才是老練的排版方式。接著讓我告訴你另一個秘密: 如何善用進階的技巧，簡潔又精準地總結一段複雜的程式碼。

## 技巧二: 用好讀的名字包裝複雜的邏輯
高手除了會用有意義的文字來幫變數命名以外，還會用更進階的技巧來包裝複雜的指令。讓我先給你一段範例程式碼:

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

上面的程式是模擬在特定條件滿足時去發動人物的特殊技能。然而，當看到 `if` statement 裡面的條件邏輯時，你是不是和我一樣覺得有點冗長呢? 其實我們可以用一個技巧把程式碼包裝起來，讓程式碼變得更好讀:

```cpp
bool is_skill_cond_satisfied = input.is_key_pressed() &&
    command.size() > 1 &&
    std::find(attack_keys.begin(), attack_keys.end(), input.pressed_key()) != attack_keys.end();
if (is_skill_cond_satisfied)
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

`if` statement 裡複雜的條件已經用 `is_skill_cond_satisfied` 取代。跟我說說你的感覺，清楚好懂又可以一眼看出 `if` statement 的目的，對吧! 複雜的判斷邏輯已經被這個變數「包裝」起來，只要看變數名稱就已經幾乎知道判斷式的目的，完全不需要去了解細節。讓我再給你一個例子，如果我們把程式碼改成這樣:

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

bool is_skill_cond_satisfied = input.is_key_pressed() &&
command.size() > 1 &&
std::find(attack_keys.begin(), attack_keys.end(), input.pressed_key()) != attack_keys.end();

if (is_skill_cond_satisfied)
{
    fire_skill();
}
```

到這裡我想談談 `if` statement 的內容區段，你有什麼想法呢? 我們只要看到 `fire_skill()` 這個 function name 就幾乎可以知道，當 `if` 條件成立時會去發動角色的技能，根本不用去讀 `fire_skill()` function 裡面的程式碼。至於發動技能的細節就交給 `fire_skill()` function 去煩惱囉! 這是我最喜歡的一種技巧，而且並不像大多數人認為的那樣複雜。適當得幫變數或 function 命名不只可以讓名稱更有意義、更容易讓人的腦袋解讀，甚至可以用來包裝複雜的邏輯，讓程式碼的可讀性更上一層樓! 接下來我想跟你分享一個更進階的技巧...

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

大部分的人不理解為什麼要避免寫出太多層的 `if` statement。在我看來除了不好閱讀、容易用到不該用的變數以外，也很難設計測試案例來跑過功能裡的每條分支。我可以理解有時候很難避免得寫出朝狀判斷式，但我不太贊同寫出這種程式碼。上面的程式碼是模擬遊戲裡在每一幀的更新邏輯。這段邏輯的問題在於 `if` statements 一層又一層的出現。想像一下，如果我們的 `if` statements 出現了 5 ~ 6 層，這份程式碼肯定不怎麼好讀。那麼假設我們把程式碼改成這樣......

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

告訴我你看到了些什麼? 很明顯的，在這份 code 裡面一層一層的 `if` statements 已經全部消失，變成一段一段單層的 `if` 判斷式，並且在判斷式裡面的邏輯執行完之後用 `return` 中斷這段 function 回傳出去。這是一種簡化巢狀 `if` statements 的方法，但用這種方法得小心，必須要確定每段 `if` 邏輯執行完後不會因為中斷離開而漏掉後面任何必須被執行的指令。

## 技巧四: 控制 function 長度跟職責
你知道嗎!? 除了命名規則以外，寫程式還有一種 function 長度必須比 20 行還短的文化! 讓 function 長度保持在 20 行以內不只可以花比較少時間來讀一份 function，甚至可以避免寫出潛在的 bug。至於為什麼是 20 行，我想請你試試看，讓下面這段程式碼在螢幕內一次全部顯示出來:
```cpp
void display_message()
{
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
    printf("A long function!");
}
```

是不是很困難呢? 我想請你再試試下面這段只有 20 行的程式碼:

```cpp
void display_message()
{
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
    printf("A function with 20 lines of code.");
}
```

竟然完全沒有問題! 幾乎所有大家慣用的解析度，都可以讓 20 行以內的 function 全部顯示在畫面上。除此之外，我們在設計 function 的時候還有一個更進階的技巧 -「單一職責原則」，也是跟「物件導向」有關的「抽象思考 - abstract thinking」概念。這是一種頂尖程式設計師都奉行的概念。讓我先給你一個範例:

```cpp
void game_loop()
{
    if (input->is_attack_key_pressed())
    {
        std::string key_name = input->get_key();

        if (input->commands.size() > 1)
        {
            std::string command_str = "";
            for (std::string command : commands)
            {
                command_str += command;
            }
            fire_skill(command_str);
        }
    }

    for (game_obj &ui : scene->ui_comps)
    {
        ui.update();
    }

    for (game_obj &obj : scene->objs)
    {
        obj.update();
    }

    for (character &npc : scene->npcs)
    {
        npc.update();
    }

    for (character &enemy : scene->enemies)
    {
        enemy.update();
    }

    if (!player->is_dead) {
        if (player->health == 0) {
            player->die();
            scene->on_player_die();
        }
        else {
            player.update();
        }
    }
}
```

很明顯的，這段程式碼裡面包含了很多步驟，做了很多事: 先執行跟 I/O 輸入有關的指令、再執行跟場景有關的指令、接著執行跟物件有關的指令，最後再執行跟玩家有關的指令。這是一段模擬遊戲主迴圈的程式碼。主迴圈可以把系統的主要步驟寫在裡面，但這段程式把每個步驟的細節都寫了進去。我要你想像一下，如果步驟從 3 步變成 8 步、12 步、甚至是 16 步，這個主迴圈很顯然會變得非常複雜、非常冗長、非常難以維護。那該怎麼辦呢? 這裡有個你也許完全沒想過的方法，讓我給你一個例子:

```cpp
void update_input()
{
    if (input->is_attack_key_pressed())
    {
        std::string key_name = input->get_key();

        if (input->commands.size() > 1)
        {
            std::string command_str = "";
            for (std::string command : commands)
            {
                command_str += command;
            }
            fire_skill(command_str);
        }
    }
}

void update_scene()
{
    for (game_obj &ui : scene->ui_comps)
    {
        ui.update();
    }

    for (game_obj &obj : scene->objs)
    {
        obj.update();
    }

    for (character &npc : scene->npcs)
    {
        npc.update();
    }

    for (character &enemy : scene->enemies)
    {
        enemy.update();
    }
}

void update_player()
{
    if (!player->is_dead) {
        if (player->health == 0) {
            player->die();
            scene->on_player_die();
        }
        else {
            player.update();
        }
    }
}

void game_loop()
{
    update_input();

    update_scene();
    
    update_player();
}
```

非常好! 三個步驟的細節已經全部被從主迴圈搬到三個 functions 裡面。第一個 function 只執行跟輸入輸出有關的指令、第二個 function 只執行跟場景有關的指令、第三個 function 只執行跟玩家有關的指令。每個 function 各司其職，完全不做跟目的沒關係的事。因為主迴圈只呼叫這三個 functions，變得非常簡單易懂，而且可以藉由 function names 一眼看出每個步驟大略在做什麼事。最後，我們要談的是今天最進階的主題: Reusing。

## 技巧五: Reusing
你知道嗎? 頂尖的軟體工程師都會適當得把「重複程式碼」包裝起來，讓他可以像工具一樣在很多地方被使用。快點把功能寫好可以很快有進度，但是人們不一定知道，當系統慢慢長大，重複的程式碼也有機會跟著出現。如果類似的程式碼片段出現了兩三次，也可能有機會出現第四、第五、甚至第六次! 問題是未來如果要做類似的功能，重複的片段又會再出現一次。除此之外如果這些類似的功能都需要被修改，團隊的工程師就得辛苦得把所有片段全部找出來，一個又一個地修改。我可以理解如果盡快完成功能，可以有效得推動專案前進。但人們可能完全沒有想過，用有意義的名稱包裝重複出現的 code，反而可以提高未來的工作效率，也可以讓程式碼更精簡。想像一下，未來如果需要用到類似的功能，只要寫一行 code 來呼叫這個包裝好的 function 就好，不用再寫一次類似的指令。甚至如果未來有需要修改這段指令，也只要修改包裝好的 function，不用到專案裡把類似的功能全部找出來，再一個一個去修改。讓我給你一個例子:

```cpp
void attack()
{
    // attack logic
    if (is_target_damaged)
    {
        golds += get_gold(target);
        golds_label->set_golds(golds);
        golds_label->play_effects();
        game->notify_change('GOLD', golds);
    }
}

void occupy_stronghold(stronghold* s)
{
    s->set_team(team_id);
    int reward = get_occupy_reward(s);
    golds += reward;
    golds_label->set_golds(golds);
    golds_label->play_effects();
    game->notify_change('GOLD', golds);
}

void take_gold(int g)
{
    golds += g;
    golds_label->set_golds(golds);
    golds_label->play_effects();
    game->notify_change('GOLD', golds);
}

void rescue_hostage(hostage* h)
{
    golds += get_rescue_reward(h);
    golds_label->set_golds(golds);
    golds_label->play_effects();
    game->notify_change('GOLD', golds);
}
```

這段程式碼在模擬一個玩家可以做的四個動作: 攻擊、佔領據點、撿拾金錢跟解救人質。雖然是不同的動作，裡面都寫了一段類似的指令: 先增加金幣，再更新金幣面板的文字，接著播放得分特效，最後是通知所有註冊金幣更新事件的物件。很顯然如果未來遊戲越寫越大，人物可以做的動作越來越多，重複的程式碼片段也會跟著變多。如果我們把程式改成這樣:

```cpp
void add_gold(int g)
{
    golds += g;
    golds_label->set_golds(golds);
    golds_label->play_effects();
    game->notify_change('GOLD', golds);
}

void attack()
{
    // attack logic
    if (is_target_damaged)
    {
        add_gold(get_gold(enemy));
    }
}

void occupy_stronghold(stronghold* s)
{
    s->set_team(team_id);
    add_gold(get_occupy_reward(s));
}

void take_gold(int g)
{
    add_gold(g);
}

void rescue_hostage(hostage* h)
{
    add_gold(get_rescue_reward(h));
}
```

恩! 這的確奏效了! 每個 function 裡面的重複程式碼全被簡化成一行 function call。重複的指令則被包裝到一個可以被重複利用的 `add_gold(int s)` function。再給你一個情境: 某天這款遊戲的企劃小組開完會後，團隊要幫遊戲新增交易的功能。玩家可以把商品賣掉，賺取跟商品標價一樣的金幣。如果我們幫程式碼新增一個 `sell_merchandise()` function 來實作這項功能，在包裝程式碼之前，我們得把 4 行重複出現的指令全部寫到 function 裡

```cpp
void sell_merchandise(merchandise* m)
{
    golds += m->price;
    golds_label->set_golds(golds);
    golds_label->play_effects();
    game->notify_change('GOLD', golds);

    m->reset_owner();
}
```

那麼，在做完包裝之後只要寫一行 `add_gold(m->price);` 就已經完成跟更新金幣有關的邏輯:

```cpp
void sell_merchandise(merchandise* m)
{
    add_gold(m->price);
    m->reset_owner();
}
```

而且 `sell_merchandise()` function 竟然只需要兩行程式碼就寫完了! 這兩版 functions 的長度竟然可以有 5 行跟 1 行的差距! 想像一下，如果跟增加金幣有關的 functions 被擴充到 30 個，就相當是省了 120 行程式碼 (一個 function 省 4 行，總共有 30 個地方用到，等於省了 4 * 30 = 120 行程式碼)! 這就是今天最進階、價值最高的 reuse 技巧。但你知道嗎? 最後還有一個更驚人的效果才正要跟你分享。今天企劃小組開完會後，竟然決定如果增加的金幣數量比 1,000 還多，就讓玩家進入 10 秒的 fever 狀態來提升幸運 2 秒。假設這款遊戲沒有把 30 段跟*增加金幣*有關的程式碼包裝到一個通用的 function 裡面，遊戲的工程師就必須到這 30 個 functions 裡面一個一個做修改。幸運的是，專業的遊戲團隊早就包裝好 function，他們在兩天內改好這個 function 並且進入測試階段。讓我們看看修改完的程式碼:

```cpp
void add_gold(int g)
{
    golds += m->price;
    golds_label->set_golds(golds);
    golds_label->play_effects();
    if (g >= 1000)
    {
        game->player->add_buff(game->buff_factory->make("FEVER"));
    }
    game->notify_change('GOLD', golds);
    m->reset_owner();
}

void attack()
{
    // attack logic
    if (is_target_damaged)
    {
        add_gold(get_gold(enemy));
    }
}

void occupy_stronghold(stronghold* s)
{
    s->set_team(team_id);
    add_gold(get_occupy_reward(s));
}

void take_gold(int g)
{
    add_gold(g);
}

void rescue_hostage(hostage* h)
{
    add_gold(get_rescue_reward(h));
}
```

根據這次的需求，只有異動到 `add_gold()` function，其他的 functions 完全沒有被動到。與其找出這 30 個 functions，一個一個幫他們加上重複的程式碼，第二種改法是不是聰明多了呢? 希望你會喜歡今天的內容。有任何問題歡迎在下面留言讓我知道，拜拜，我們下次見!

Being written...
