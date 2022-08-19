title: 'Learn to Code 8: Class and Object'
visible: show
date: 2022-08-17 23:25:12
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

Being written...

人們可能不曾想過，一款遊戲裡面的人物要如何快速擴充? 商品要如何一直更新? 關卡要如何一直增加? 我想要你想像一下，假設有位工程師需要幫一款遊戲加一個叫做「Fairy」的角色，他竟然得在同一份文件裡先新增給她用的變數，再擴充一段 `else if` statement，然後把某個角色的 code 複製到這個區段裡，最後再修改複製好的 code 來做特異化:
```cpp
std::string character_name = get_character_name();
std::string knight_name = get_player_nick_name();
std::string magician_name = get_player_nick_name();
std::string fairy_name = get_player_nick_name(); // Added code
int knight_health = 100;
int magician_health = 100;
int fairy_health = 100; // Added code
int knight_mana = 100;
int magician_mana = 100;
int fairy_mana = 100; // Added code

while (should_run_update_logic())
{
    std::string input_key = input::get_key();
    if (character_name == "knight") {
        // Existing code...
    }
    else if (character_name == "magician") {
        // Existing code...
    }
    else if (character_name == "fairy") {
        // Added code...
    }
}
```

問題是隨著新角色不斷被擴充到遊戲中，這份文件裡的變數跟 `else if` statement 會愈來愈多。如果角色數量成長到 4 個、5 個、6 個、甚至是 7 個，這份文件會變得非常冗長、很難維護、類似的 code 也不斷出現。修改程式的時候會很容易改錯變數。實際上，所有頂尖的軟體工程師都會用程式裡的「藍圖」系統: class 跟 object 來解決這個問題。今天我要教你 3 個能把你變成專業工程師的技巧跟觀念。點開這篇文章來免費獲得它們。

<!--more-->

## 主題一: Class 與物件
現在你知道了，當系統裡的物件不斷被擴充，類似的程式碼有機會跟著出現。如果沒有管理好 code，程式碼也會變得非常難維護。不要再這麼寫了! 你需要 class 與物件的觀念跟技巧來解決這些問題! 如果程式碼可以像 3D 列印的模型一樣，做好 model、設定好參數之後，交給 3D 列印機印出實物來。每個實物可以有自己的風格例如配色，而且要印多少就印多少。


## 主題二: Pass by Value and Pass by Reference

## 主題三: Namespace and Include

1. ~~程式記憶體配置方式~~
2. Why use class and object?
3. Class 與物件概念介紹
  - class name
  - members
  - methods
  - constructor, $this keyword, and new keyword
  - public, protected, and private
4. 指標、pass by value、pass by reference
5. Why use namespace and include?
6. Namespace, include, and use as

主題分享：
1. 程式碼風格：直接更改物件內容 v.s. 製造新物件並 return
2. try / catch 意外處理

```cpp
std::string character_name = get_character_name();
std::string knight_name = get_player_nick_name();
std::string magician_name = get_player_nick_name();
std::string fairy_name = get_player_nick_name();
int knight_health = 100;
int magician_health = 100;
int fairy_health = 100;
int knight_mana = 100;
int magician_mana = 100;
int fairy_mana = 100;

while (should_run_update_logic())
{
    std::string input_key = input::get_key();
    if (character_name == "knight") {
        game_object* knight_obj = get_game_object("knight");

        if (knight_health == 0)
        {
            destroy(knight_obj);
        }
        else if (input_key == "Ctrl")
        {
            if (knight_mana > 10)
            {
                knight_obj->play_animation("slash");
                knight_obj->add_force("FORWARD", 5);
                knight_mana -= 10;
            }
        }
        else if (input_key == "Space")
        {
            knight_obj->add_force("UP", 10);
        }
    }
    else if (character_name == "magician") {
        game_object* magician_obj = get_game_object("magician");

        if (magician_health == 0)
        {
            destroy(magician_obj);
        }
        else if (input_key == "Ctrl")
        {
            if (magician_mana > 20)
            {
                magician_obj->play_animation("fire");
                magician_obj->add_force("FORWARD", 1);
                magician_mana -= 10;
            }
        }
        else if (input_key == "Space")
        {
            magician_obj->add_force("UP", 5);
        }
    }
    else if (character_name == "fairy") {
        game_object* fairy_obj = get_game_object("fairy");

        if (magician_health == 0)
        {
            destroy(fairy_obj);
        }
        else if (input_key == "Ctrl")
        {
            if (fairy_mana > 30)
            {
                fairy_obj->play_animation("range_atk");
                fairy_obj->add_force("FORWARD", -5);
                magician_mana -= 30;
            }
            else if (fairy_mana > 5)
            {
                fairy_obj->play_animation("melee_atk");
                fairy_obj->add_force("FORWARD", 3);
                magician_mana -= 5;
            }
        }
        else if (input_key == "Space")
        {
            fairy_obj->add_force("UP", 20);
        }
    }
}
```