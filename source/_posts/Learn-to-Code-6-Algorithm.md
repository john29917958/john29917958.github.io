title: 'Learn to Code 6: Algorithm'
visible: show
date: 2022-07-28 00:02:54
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

我們今天要談的是怎麼寫出更有效率、使用更少資源的程式碼。想像一下! 如果特斯拉自動車發現前車開始減速後，沒辦法短時間內做好計算跟減速，不就有損特斯拉專業又先進的招牌? 為什麼要了解演算法? 為什麼要在寫 code 之前先設計步驟跟邏輯? 為什麼要先預先計算程式的最糟執行時間跟耗費的資源? 如果你正頭痛該怎麼設計解決方案、如果你想突破只會寫程式的程度，秘密就在今天的內容裡，快點開這篇文章吧!

<!-- more -->

## 演算法是什麼
人們收到需求後，可能會直接開始把雙手放到鍵盤上，敲敲打打寫出一段 code 來解決問題。問題是我們要解決的問題如果很複雜、程式必須在一定時間內跑完、或這個問題預計得花很多資源、只能花一定的資源來解決，我就不太贊同直接開始寫程式。很多人都不相信，但在寫程式之前先設計好邏輯跟步驟，會更有機會、也更容易寫出符合需求的程式碼。我想要你先看看這個例子，如果今天有兩位學生，我們要找出比較高的那一位。我們可以先開一份空白的文字檔，並寫上我們該怎們找到比較高的學生:

1. 問第一位學生的身高，把他的身高記下來
2. 問第二位學生的身高，把他的身高也記下來
3. 比較兩位學生的身高之後，找出比較高的那一位
4. 問比較高的學生叫什麼名字
5. 把這個名字給出來

上面這種用比較好懂的方式來設計要用什麼步驟、什麼順序、什麼邏輯來解決一個問題，就是演算法。好的演算法可以讓程式變得很簡單、很有效率，或是花少少的資源就可以把問題解決；糟糕的演算法甚至可以讓程式跑好幾天都跑不出來! 讓我照上面的演算法給你一段寫好的範例程式碼:

```cpp
std::string find_taller(student* student1, student* student2)
{
    int height1 = student1->get_height();
    int height2 = student2->get_height();
    student* taller_student = nullptr;

    if (height1 > height2)
    {
        taller_student = student1;        
    }
    else
    {
        taller_student = student2;
    }

    std::string name = taller_student->get_name();

    return name;
}
```

這段 function 首先在第一行取得第一位學生的身高，再到第二行取得第二位學生的身高，然後在第 7 到第 14 行做比較，找出比較高的那位，接著在第 16 行問到比較高的學生叫什麼名字，最後在第 18 行把這個名字給出去。告訴我你看到了些什麼? 演算法裡面的描述是不是一行一行轉換成對應的程式碼呢? 這才是遇到複雜的問題時應該進行的流程: 先寫好演算法，做好設計後再把程式寫出來。事實上，當遇到更複雜的問題時，厲害的工程師會在寫好演算法，而且還沒開始寫程式之前，預先估算演算法寫成 code 之後最多會花多少時間或多少資源，也就是計算演算法的「複雜度」。

## 複雜度
談到演算法都一定會提到如何用「複雜度」來描述「最糟的狀況」，例如最多可能花多少時間的時間複雜度 (time complexity) 或花多少資源的空間複雜度 (space complexity)。演算法不同，計算出來的複雜度也會不一樣。在計算複雜度的時候，工程師會用世界通用的 big-O 標記 `O(n)` (念作 big-O n) 來用小括弧裡面的方程式描述複雜度會怎麼隨著輸入量變化。例如 `O(n)` 可以看做是 `Complexity = n` 的多項式、`O(2n + 1)` 可以看做是 `Complexity = 2n + 1` 的多項式。複雜度的成長速度大略可以概括成常數、線性、log 跟次方這幾種程度，讓我給你這四類複雜度的解釋：

1. O(1)：代表資料量增加不會影響複雜度
2. O(n)：代表複雜度會隨著資料量增加跟著以線性成長
3. O(n log(n))：代表複雜度一開始會隨著資料量增加跟著遽增，但隨著資料量持續增加，複雜度的成長會趨緩
4. O(n<sup>2</sup>)：複雜度會隨著資料量增加跟著以指數上升。上升的速度會由次方數決定

在寫程式之前先計算出複雜度可以避免寫出不符合期待、不符合需求的程式。複雜度本身分成兩類，讓我解釋 time complexity (時間複雜度) 跟 space complexity (空間複雜度) 給你聽:
1. 時間複雜度 (time complexity): 程式每次跑完花的時間可能都不一樣。時間複雜度是用來預估程式跑完最多可能會花多少時間。我們通常會去算指令的執行量來衡量演算法的時間複雜度
2. 空間複雜度 (space complexity): 程式每次跑完使用的記憶裡大小都有機會不一樣。空間複雜度是用來預估程式跑完最多可能會使用多少 memory space。我們可以去算有多少變數被建立了幾次，並且乘上變數使用的記憶體大小來計算演算法的空間複雜度

非常好! 你已經了解所有演算法跟複雜度的基礎知識。接著讓我給你一個經典的演算法，帶你看過如何幫問題設計演算法、計算複雜度，一直到最後把程式寫出來的過程。

## 泡沫排序演算法 (Bubble Sort algorithm)
讓我給你一個例子吧！今天有一位老師在幫一列身高高低不一的小學生排隊。老師想把學生的身高從最高排到最低。但問題是，這位老師該怎麼做呢? 首先，這位老師先走到隊伍最前面，比較頭兩位學生的身高，如果學生沒有由高排到低就幫兩位學生交換位置。接著老師會看第二跟第三位、第三跟第四位……一直到最後兩位。如果中間有幫任何學生交換位置，老師就會再走到最前面從頭檢查一輪，一直到有任何一輪老師都沒有幫學生交換位置為止。

簡單來說，這段演算法總共由這三步組成:
1. 老師會不斷從隊伍裡的第一位學生開始兩兩檢查學生的身高
2. 如果後面的學生比前面的高，就幫兩位學生交換位置
3. 不斷循環做第 1. 跟第 2. 步，直到有一輪完全沒有交換位置為止

這段演算法已經描述麼把學生「由高排到低」。接著讓我帶你一起算算這段演算法的「時間複雜度」。

```cpp
int[] student_heights = {149, 151, 152, 153, 156};
```

如果我們有一個陣列，裡面存放了每位學生的身高。依照上面的「演算法」，我們應該先從第一跟第二位學生開始檢查。檢查之後發現，第二位學生竟然比第一位學生高! 於是我們幫這二位學生交換位置。接下來我們檢查第二位跟第三位學生，發現第三位竟然又比第二位學生高，於是我們又幫第二跟第三位學生交換位置。一直到第四跟第五位學生，我們總共做了 4 次交換位置的動作。如果我們用一個代數「n」來表示學生的數量，那排完第一輪學生之後，我們總共檢查了 4 次 = 5 - 1 次 = n - 1 次、交換了 4 次 = 5 - 1 次 = n - 1 次

> == 第一輪 ==
> 檢查了 n - 1 次
> 交換了 n - 1 次
> [151, 152, 153, 156, 149]

___

接著老師一樣從第一跟第二位學生開始比較，發現第二位學生一樣比第一位高，所以老師幫頭兩位學生交換位置。然後老師往後比較第二跟第三位學生後發現，第三位比第二位高。所以老師再幫第三位跟第二位學生交換位置。一路來到最後兩位學生，老師比較後發現，第四位學生比第五位學生高。所以這一次不幫學生交換位置。於是這輪我們一樣檢查了 n - 1 次，但只交換了 n - 2 也就是 3 次

> == 第二輪 ==
> 檢查了 n - 1 次
> 交換了 n - 2 次
> [152, 153, 156, 151, 149]

___

是不是很像讓越矮的學生像「氣泡 (bubble)」一樣不斷往後冒出來呢? 再來一輪吧! 這次做完檢查跟交換之後，總共檢查了 n - 1 次，交換了 n - 3 也就是 2 次

> == 第三輪 ==
> 檢查了 n - 1 次
> 交換了 n - 3 次
> [153, 156, 152, 151, 149]

___

依此類推，當第五輪結束後老師做了 n - 1 次檢查，交換了 n - 5 = 0 次

> == 第五輪 ==
> 檢查了 n - 1 次
> 交換了 n - 5 次
> [156, 153, 152, 151, 149]

___

讓我們看一眼每一輪的歷史紀錄:

| 第幾輪 | 檢查次數 | 交換次數 |
| ----- | -------- | ------- |
| 第一輪 | n - 1   | n - 1   |
| 第二輪 | n - 1   | n - 2   |
| 第三輪 | n - 1   | n - 3   |
| 第四輪 | n - 1   | n - 4   |
| 第五輪 | n - 1   | n - 5   |
| Total | 5n - 5  | 5n - 15 |

以檢查動作來看，我們總共會做 n(n - 1) 次動作
以交換動作來看，我們總共會做 (n - 1) + (n - 2) + (n - 3) + ... + (n - n) = n(n - 1) / 2 次動作
所以我們總共會做 n(n - 1) + n(n - 1) / 2 = 3n(n - 1) / 2 = 3(n<sup>2</sup> - n) / 2 次動作
如果我們把常數都去掉，可以得到時間複雜度是 n<sup>2</sup> - n
如果 n 不斷往上增加，我們把 n 看成是可以忽略的因素，只保留 n<sup>2</sup>，結論就是，我們得到 bubble sort 演算法的時間複雜度是 O(n<sup>2</sup>)

## Mathematical Style Pseudocode

上面是用比較高階、比較口語的方式來描述排學生的邏輯。接著，我們用比較低階的 pseudo code 把演算法寫出來:

```
algorithm bubble-sort is
    input: Array A with capacity l
    output: Array s such that s is a sorted version of array A

    s <- [] empty array

    if l = 1
        return s

    for i <- 0 to l - 2 do
        ith element in b <- ith element in A

    has_swap_op <- true

    while has_swap_op = true
        has_swap_op <- false
        for i <- 0 to l - 1 do
            if ith element in b < (i+1)th element in b
                temp <- (i+1)th element in b
                (i+1)th element in b <- ith element in b
                ith element in b <- temp
                has_swap_op <- true
    
    return s
```

是不是已經很像程式碼了呢? 上面的演算法有個專有名詞叫做「Mathematical Style Pseudocode」。第一行 `algorithm bubble-sort is` 是在定義一個名字叫做「bubble-sort」的演算法。第二行 `input:` 是用來定義這個演算法要接收什麼參數。以這個演算法來看要接收一個陣列，陣列的長度是 l。第三行 `output:` 是用來描述這個演算法要輸出什麼結果。以這個演算法來說，要輸出一個排序過的陣列。在 `output:` 之後就是演算法的內容啦! 內容跟前面的描述很類似，只是比較詳細了些。內容裡面有使用 pseudo code 常用的一些符號，例如 `<-` 代表把右邊的數值指定到左邊的變數、`=` 代表的是比較左邊跟右邊兩個運算子的數值是不是相等、`for ... to ...` 代表的是要從某個數值開始一直重複做迴圈內定義的事情，直到某個終止數值為止。這邊有常見的 pseudo code 數學符號:

| 運算種類        | 符號                         |
| -------------- | ---------------------------- |
| Assignment     | `<-` 或是 `:=`                |
| Comparison     | `=`, `≠`, `<`, `>`, `≤`, `≥` |
| Arithmetic     | `+`, `-`, `*`, `/`, `mod`    |
| Floor/ceiling  | `⌊ ⌋`, `⌈ ⌉`                  |
| Logical        | `and`, `or`                  |
| Sums, products | `Σ`, `Π`                     |

到這裡我們已經知道演算法的目的，也知道怎麼把解法用比較口語、比較簡單的方式寫出來。接下來，就是屬於你的挑戰時間啦! 把上面的 pseudo code 用程式碼寫出來吧!

## Implementation
這裡是把設計好的 bubble sort 演算法用 C++ 程式語言寫出來:
```
#include <stdio.h>

void bubble_sort(int array[], int length) {    
    bool has_swapped = false;

    for (int i = 0; i < length; i++) {
        array[i] = array[i];
    }

    if (length == 1) {
        return;
    }

    do {
        has_swapped = false;

        for (int i = 0; i < length - 1; i++) {
            if (array[i] < array[i + 1]) {
                int temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                has_swapped = true;
            }
        }
    } while (has_swapped);
}

int main(int argc, char* argv[]) {
    int student_heights[] = { 149, 151, 152, 153, 156 };
    int length = sizeof(student_heights) / sizeof(int);
    bubble_sort(student_heights, length);

    for (int i = 0; i < length; i++) {
        printf("%dth student's height is: %d\n", i + 1, student_heights[i]);
    }

    return 0;
}
```

從這份 C++ 程式碼我們可以發現，如果演算法設計的很好，寫出來的程式碼其實不會跟演算法差太多。
讓我們再來看一份 PHP 程式碼:

```php
<?php
    $array = array(149, 151, 152, 153, 156);

    function bubbleSort($array) {
        $hasSwapped = false;
        $sortedArray = [];

        foreach ($array as $key => $value) {
            array_push($sortedArray, $value);
        }

        do {
            $hasSwapped = false;

            for ($i = 0; $i < count($sortedArray) - 1; $i++) {
                if ($sortedArray[$i] < $sortedArray[$i + 1]) {
                    $temp = $sortedArray[$i + 1];
                    $sortedArray[$i + 1] = $sortedArray[$i];
                    $sortedArray[$i] = $temp;
                    $hasSwapped = true;
                }
            }
        } while ($hasSwapped);

        return $sortedArray;
    }

    foreach ($array as $key => $value) {
        echo("<li>Student $key's height is: $value</li>");
    }

    $array = bubbleSort($array);

    foreach ($array as $key => $value) {
        echo("<li>Student $key's height is: $value</li>");
    }
?>
```

發現了嗎? 兩份程式碼的寫法幾乎差不多! 用這次的例子我們也可以知道演算法寫好之後，不一定只能用某種語言寫出來。我們可以用演算法來設計跟描述怎麼解決一個問題。等方法設計出來之後，再用任何一種程式語言實作他!
希望今天的內容對您有幫助，有任何建議或想發問的地方歡迎在下面留言，我們下次 Learn to Code 見!
