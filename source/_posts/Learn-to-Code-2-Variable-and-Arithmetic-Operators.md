title: 'Learn to Code 2: Variable and Arithmetic Operators'
visible: false
date: 2022-07-18 23:39:56
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

Have you ever noticed that we can always see stunning critical strike effects in the game?
When awesome numbers keep popping up, do you feel hot-blooded and a sense of accomplishment? And when you go to the mall, it's full of beautiful, personalized, and attractive items. After reading through the name of each product, don't you think how satisfying would it be if I could buy it all regardless of the price? However, have you ever wondered that how programmers can get the computer or mobile phone to calculate critical strikes, display the product names, and label the prices?
The answer lies in today's article on "variable types and operands". Click the more button and let me show you how data types and operators do it!

<!--more-->

When it comes to games, what's your favorite ones? Today we gonna make a critical rate calculator with reference to "[Honkai Impact 3](https://honkaiimpact3.hoyoverse.com/global/en-us/fab)"! Let's first take a quick look at the critical rate calculation formula:


> critical rate = critical point / (75 + level * 5)

It's the formula for stunning critical hits in the game! Look at the formula again, how many control factors do you see? For example, there's a control factor called "critical point", but there're two more. Can you figure them out? Tada! The others are "critical rate" and "level". So in the Honkai Impact 3 critical rate formula, we have three control factors:
1. critical rate
2. critical point
3. level

And you must have noticed, all these three factors can be different as player continues to play the game. The level can increase, and the critical point can be increased with the level, or by wearing equipments. Finally, the critical rate varies with critical point and level. These "control factors" are almost the same as "variables" in programming language. Let's first look at the following sample code:

```cpp
std::string name = "Jack";
int level = 80;
int health = 2639;
int mana = 196;
int attack = 938;
int defense = 308;
int critical_point = 128;
```

Level, health, mana, attack, defense, critical_point... Each variable is related to an attribute of a game character. And the name,
is related to the character's name - Jack. In the sample code, we can see two data types: a name variable of type `string` and the other variables of type `integer`.

# Below is my note and will be deleted before publishing the article
Primitive data types
- int
- double
- string
- boolean
Operators
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators

Special topic: Shortcut keys

Condition
- if
- else
- else if

How to write a story to include all these concepts...
Remember to write outline
Remember to teach how to install and use XAMPP
1. Install XAMPP
2. Install PHP Debug
3. Open C:\xampp\htdocs\index.php, type <?php phpinfo(); ?>
4. Launch http://localhost/
5. Copy all then go to https://xdebug.org/wizard and paste it
6. Click "Analyse my phpinfo() output
7. Follow instructions to place and rename the DLL to php_xdebug.dll at C:\xampp\php\ext
8. Add settings below to php.ini
    zend_extension = xdebug
    [XDebug]
    xdebug.remote_enable = 1
    xdebug.remote_autostart = 1
9. Add below configurations to user settings
    "php.validate.executablePath": "C:\\xampp\\php\\php.exe",
    "php.debug.executablePath": "C:\\xampp\\php"
10.  Create a launch.json

```c
#include <stdio.h>
#include <cstdlib>
#include <string.h>
#include <stdbool.h>
#include <time.h>

int main(int argc, char* argv[]) {
    srand(time(NULL));
    
    int num = rand() % 11;
    char high_low[5];
    printf("Choose high or low: ");
    scanf("%4s", high_low);

    int op_num = rand() % 11;
    bool is_op_choose_high = rand() % 2;
    char op_high_low[5];
    if (is_op_choose_high) {
        strcpy(op_high_low, "high");
    }
    else {
        strcpy(op_high_low, "low");
    }

    printf("You chose \"%s\" and number is \"%d\"\n", high_low, num);
    printf("Opponent chose \"%s\" and number is \"%d\"\n", op_high_low, op_num);

    bool is_winning = false;
    bool is_op_winning = false;
    
    if (strcmp(high_low, "high") == 0) {
        if (num > op_num) {
            is_winning = true;            
        }
        else {
            is_winning = false;
        }
    }
    else {
        if (num < op_num) {
            is_winning = true;        
        }
        else {
            is_winning = false;
        }
    }

    if (strcmp(op_high_low, "high") == 0) {
        if (op_num > num) {
            is_op_winning = true;
        }
        else {
            is_op_winning = false;
        }
    }
    else {
        if (op_num < num) {
            is_op_winning = true;
        }
        else {
            is_op_winning = false;
        }
    }

    if (is_winning && !is_op_winning) {
        printf("You won!");
    }
    else if (is_op_winning && !is_winning) {
        printf("Opponent won.");
    }
    else {
        printf("Draw");
    }

    return 0;
}
```