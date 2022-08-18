title: 'Learn to Code 8: Class and Object'
visible: show
date: 2022-08-17 23:25:12
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

Being written...

人們可能不曾想過，一款遊戲裡面的人物要如何快速擴充? 商品要如何一直更新? 關卡要如何一直增加? 我想要你想像一下，假設你需要幫一款遊戲加一個叫做「Fairy」的角色，你竟然得在同一份文件裡先新增給她用的變數，再擴充一段 `else if` statement，然後把某個角色的 code 複製到這個區段裡，最後再修改複製好的 code 來做特異化:
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

問題是隨著新角色不斷被擴充到遊戲中，這份文件裡的變數跟 `else if` statement 會愈來愈多。如果角色數量成長到 4 個、5 個、6 個、甚至是 7 個，這份文件會變得非常冗長、很難維護、類似的 code 也不斷出現。修改程式的時候會很容易改錯變數。

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