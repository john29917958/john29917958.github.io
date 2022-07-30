title: 'Learn to Code 6: Algorithm'
visible: show
date: 2022-07-28 00:02:54
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---
想像一下! 如果在前面車子剎車後特斯拉自動車沒辦法在「短時間」內做好計算，判斷了好久才減速，不就有損特斯拉專業又先進的招牌? 為什麼要了解演算法呢? 為什麼要寫出更有效率、用更少資源的程式碼? 如果你正頭痛該怎麼寫出更有效率、使用更少資源的程式碼，秘密就在裡面，快點開這篇文章吧!

<!-- more -->

如果我們要解決的問題很複雜、程式必須得在一定時間內跑完、或這個問題看起來要花很多資源、或只能花一定的資源就把問題解決。通常，我們就可以先用演算法在寫程式之前，用比較口語的方式來設計要用什麼步驟、什麼順序、什麼邏輯來解決一個問題。好的演算法可以讓解決方案變得很簡單、很有效率，或是花少少的資源就可以把問題解決；糟糕的演算法甚至可以讓程式跑幾天都跑不出來!  所以，特斯拉自動車可以在路上隨時掌握周邊車子的位置、距離還有速度。前面的車子一剎車，特斯拉可以根據距離、車速還有各種因素在一定時間內把速度降到 0。這種在「某個最長的耗時之下達成目標」的概念，就是演算法講的「時間複雜度」 - time complexity

## 複雜度
談到演算法，我們都會提到 time complexity (時間複雜度) 或 space complexity (空間複雜度)，標記會像「O(n)」這樣來表示時間或資源花最兇的程度。O 念作 big-O，指的是極限的概念，也就是最糟糕的程度到哪裡；複雜度在這裡指的是「有多糟」。常見的複雜度有幾個層級：
1. O(1)：代表複雜度不會隨著資料量增加而受到影響
2. O(n)：代表複雜度會隨著資料量增加以線性成長
3. O(n log(n))：代表複雜度一開始會隨著資料量增加而遽增，但隨著資料量持續增加，複雜度的成長會趨緩
4. O(n<sup>2</sup>)：代表資料量如果不斷成長，複雜度會跟著以指數上升

## 經典的演算法：泡沫排序 (Bubble Sort)
來舉個例子吧！今天有一列身高都不一樣的小學生在排隊下學。有一位老師想把學生的身高照最高排到最低。這位老師先走到隊伍最前面，看最前面兩位學生的身高，如果身高沒有由大到小排就交換兩位學生的位置。看完最前面兩位，就看第二跟第三位、第三跟第四位……一直到最後兩位。如果中間有交換任何學生的位置，老師就會走到最前面，再從前面兩位開始看一輪。一直到老師從最前面走到最後面，中間都沒有交換任何學生為止。
上面用文字描述怎麼把學生「由高排到低」，就是「演算法」。(看需不需要寫得更正式一點)。如果照這樣幫學生調整隊伍，老師排學生的「時間複雜度」會是多少呢?

```cpp
int[] student_heights = {149, 151, 152, 153, 156};
```

如果我們有一列學生，就像上面的陣列一樣。陣列裡面的每個元素都是一位學生的身高。
依照上面的「演算法」來進行，我們應該先從第一跟第二位學生開始檢查。檢查之後發現，第二位學生竟然比第一位學生高! 於是我們請第一位學生跟第二位學生交換位置。接下來我們檢查第二位跟第三位學生，發現第三位竟然又比第二位學生高，於是我們又請第二位學生跟第三位學生交換位置。一直到第四跟第五位學生，我們總共做了 4 次交換位置的動作。
如果我們把學生的數量，也就是 5 用一個代數「n」，來表示，那第一輪幫學生安排位置的動作做完後，我們總共檢查了 4 次 = 5 - 1 次 = n - 1 次、交換了 4 次 = 5 - 1 次 = n - 1 次

> n = 5
> == 第一輪 ==
> 檢查了 n - 1 次
> 交換了 n - 1 次
> [151, 152, 153, 156, 149]

接著我們一樣從第一跟第二位學生開始檢查，這次我們發現第一位學生一樣比第二位矮，所以我們請第一位跟第二位學生交換位置。接著我們往後檢查第二位跟第三位學生發現，還是需要交換位置，一直來到最後兩位學生，我們檢查後發現，第四位學生比第五位學生高。所以這一次不請學生交換位置。於是這輪我們一樣檢查了 n - 1 次，但交換了 n - 2 也就是 3 次

> n = 5
> == 第二輪 ==
> 檢查了 n - 1 次
> 交換了 n - 2 次
> [152, 153, 156, 151, 149]

是不是很像讓越矮的學生像「氣泡 (bubble)」一樣不斷往後冒出來呢? 再來一輪吧! 這次做完檢查跟交換之後，總共檢查了 n - 1 次，交換了 n - 3 也就是 2 次

> n = 5
> == 第三輪 ==
> 檢查了 n - 1 次
> 交換了 n - 3 次
> [153, 156, 152, 151, 149]

依此類推，當我們來到第五輪我們做了 n - 1 次檢查，交換了 n - 5 = 0 次

> n = 5
> == 第五輪 ==
> 檢查了 n - 1 次
> 交換了 n - 5 次
> [156, 153, 152, 151, 149]

讓我們看一眼所有的動作歷史紀錄:
n = 5

| 第幾輪 | 檢查次數 | 交換次數 |
| ----- | -------- | ------- |
| 第一輪 | n - 1   | n - 1   |
| 第二輪 | n - 1   | n - 2   |
| 第三輪 | n - 1   | n - 3   |
| 第四輪 | n - 1   | n - 4   |
| 第五輪 | n - 1   | n - 5   |
| Total | 5n - 5  | 5n - 15 |

以檢查來看，我們總共會做 n(n - 1) 次動作
以交換來看，我們總共會做 (n - 1) + (n - 2) + (n - 3) + ... + (n - n) = n(n - 1) / 2 次動作
所以我們總共會做 n(n - 1) + n(n - 1) / 2 = 3n(n - 1) / 2 = 3(n<sup>2</sup> - n) / 2 次動作
如果我們把常數都去掉，可以得到時間複雜度是 n<sup>2</sup> - n
如果 n 不斷往上增加，我們把 n 看成是可以忽略的因素，只保留 n<sup>2</sup>，結論就是我們得到 bubble sort 演算法的時間複雜度是 O(n<sup>2</sup>)

準備好了嗎? 我們接下來要把上面的描述用比較精簡的方法描述出來:

1. 老師會不斷從隊伍裡的第一位學生開始兩兩檢查學生的身高
2. 如果前面的學生比後面的學生矮，就請兩位學生交換位置
3. 不斷循環做第 1. 跟第 2. 步，直到有一輪老師完全沒有請學生交換位置為止

上面是比較高階、比較像用口語說話的方式來講排學生的邏輯。接著，我們用比較低階的 pseudo code 寫出來:

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

是不是已經很像程式碼了呢? 上面的演算法有個專有名詞叫做「Mathematical Style Pseudocode」。第一行 `algorithm bubble-sort is` 代表的是定義一個演算法，名字叫做「bubble-sort」。第二行 `input:` 是用來定義這個演算法要接收什麼參數。以 bubble-sort 演算法來看要接收一個陣列，陣列的長度是 l。第三行 `output:` 是用來描述這個演算法要輸出什麼結果。以這次的演算法來說，要輸出一個排序過的陣列。在 `output:` 之後就是演算法的內容啦! 內容跟前面的描述很類似，只是比較詳細了些。內容裡面有使用 pseudo code 常用的一些符號，例如 `<-` 代表把右邊的數值指定到左邊的變數、`=` 代表的是比較左邊跟右邊兩個運算子的數值是不是相等、`for ... to ...` 代表的是要從某個數值開始一直重複做迴圈內定義的事情，直到某個終止數值為止。這邊有常見的 pseudo code 數學符號:

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