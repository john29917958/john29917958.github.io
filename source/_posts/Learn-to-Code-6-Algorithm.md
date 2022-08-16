title: 'Learn to Code 6: Algorithm'
visible: show
date: 2022-07-28 00:02:54
tags: [programming, coding, program, code, class, course, education, teaching]
category: Programming
---

我們今天要談的是怎麼寫出更有效率、使用更少資源的程式碼。想像一下! 今天我們上傳一張圖到 Google 的圖片搜尋頁面，按下搜尋按鈕後等了五天才搜完。這很顯然不是一個可接受的執行時間。為什麼要了解演算法? 為什麼要在寫 code 之前先設計步驟跟邏輯? 為什麼要先計算程式的最糟執行時間跟耗費的資源? 如果你正頭痛該怎麼設計解決方案、如果你想從會 coding 的程度進一步突破，我想要你點開這篇文章，讓我跟你分享設計演算法的秘密!

<!-- more -->

## 演算法是什麼
人們收到需求後，可能會直接開始把雙手放到鍵盤上，敲敲打打寫出一段 code 來解決問題。問題是，這情境如果很複雜、程式必須在一定時間內跑完、或這個問題預計得花很多資源、或只能花一定的資源來解決，我就不太贊同直接開始寫程式。很多人都不相信，但在寫程式之前先設計好邏輯跟步驟，會更有機會、也更容易寫出可以成功解決問題的程式碼。我想要你先看看這個例子，如果今天有兩位學生，我們要找出比較高的那一位。我們可以先開一份空白的文字檔，並寫上應該怎麼找到比較高的學生:

1. 問第一位學生的身高，把他的身高記下來
2. 問第二位學生的身高，把他的身高也記下來
3. 比較兩位學生的身高之後，找出比較高的那一位
4. 問比較高的學生叫什麼名字
5. 把這個名字提供出來

這種用比較口語的方式來設計要如何解決一個問題，就是演算法。好的演算法可以讓程式變得很簡單、很有效率，或是花少少的資源就可以把問題解決；糟糕的演算法甚至可以讓程式跑好幾天都跑不出來! 讓我給你一段照上面的演算法寫出來的程式:

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

我想要你先看這段 code 的第三行。這段程式在這裡取得第一位學生的身高。接著，在第二行取得第二位學生的身高。然後在第 7 到第 14 行做比較，找出比較高的學生，接著在第 16 行問到比較高的學生叫什麼名字，最後在第 18 行把這個名字給出去。告訴我你看到了些什麼? 在這個例子裡，演算法的描述一行一行轉換成對應的程式碼。這才是應對複雜的問題應該進行的流程: 先寫好演算法，做好設計後再把程式寫出來。事實上，當遇到更複雜的問題時，厲害的工程師會在寫好演算法，而且還沒開始寫程式之前，預先估算演算法寫成 code 之後最多會花多少時間或多少資源，也就是計算演算法的「複雜度」。

## 複雜度
談到演算法都一定會提到如何用「複雜度」來描述「最糟的狀況」，例如最多可能花多少時間的時間複雜度 (time complexity) 或花多少資源的空間複雜度 (space complexity)。演算法不一樣，複雜度也會不一樣。在計算複雜度的時候，工程師會用世界通用的 big-O 標記 `O(n)` (念作 big-O n) 來用小括弧裡面的方程式描述複雜度會怎麼隨著輸入量變化。例如 `O(n)` 可以看做是 `Complexity = n` 的多項式、`O(2n + 1)` 可以看做是 `Complexity = 2n + 1` 的多項式。複雜度的成長速度大略可以概括成常數、線性、log 跟次方這幾種，讓我解釋這四類複雜度給你知道：

1. O(1)：代表資料量增加不會影響複雜度
2. O(n)：代表複雜度會隨著資料量增加跟著以線性成長
3. O(n log(n))：代表複雜度一開始會隨著資料量增加跟著遽增，但隨著資料量持續增加，複雜度的成長會趨緩
4. O(n<sup>2</sup>)：複雜度會隨著資料量增加跟著以指數上升。上升的速度會由次方數決定

先計算出複雜度可以避免根據效能或資源用量不符合目標、不符合需求的演算法來寫出可以實現功能的程式碼。複雜度主要關注在時間跟空間兩種需求，分別是 time complexity (時間複雜度) 跟 space complexity (空間複雜度)。讓我分別解給你聽:
1. 時間複雜度 (time complexity): 程式每次跑完花的時間可能都不一樣。時間複雜度是用來評估程式跑完最多可能會花多少時間。我們通常會去算指令執行的數量來計算一個演算法的時間複雜度
2. 空間複雜度 (space complexity): 程式每次跑完使用的記憶體可能都不一樣。空間複雜度是用來評估程式跑完最多可能會用多少 memory space。我們可以去算每個變數分別被建立了幾次，並分別乘上變數使用的記憶體大小，最後把它們全部加起來，來得到一個演算法的空間複雜度

太好了! 你已經了解所有要實際應用前必須具備的演算法跟複雜度的知識。接著讓我給你一個經典的演算法，帶你看過如何幫問題設計演算法、計算複雜度，一直到最後把程式寫出來的完整流程。

## 泡沫排序演算法 (Bubble Sort algorithm)
讓我給你一個例子: 今天有一位老師在幫五位身高不等的小學生排隊。老師想把學生的身高從最高排到最低。但問題是，這位老師該怎麼做呢? 首先，這位老師先走到隊伍最前面來比較頭兩位學生的身高。如果學生沒有由高排到低就幫兩位學生交換位置。接著老師會比較第二跟第三位、第三跟第四位……一直到最後兩位。如果中間有幫任何學生交換位置，老師就會再走到最前面從頭檢查一輪，直到有任何一輪結束後老師都沒有幫學生交換位置為止。簡單來說，這段演算法總共由這三個步驟組成:
1. 老師會不斷從隊伍裡的第一位學生開始兩兩比較學生的身高
2. 如果後面的學生比前面的還高，就幫兩位學生交換位置
3. 不斷循環做第 1. 跟第 2. 步，直到有一輪完全沒有幫學生交換位置為止

這段演算法已經描述了麼把學生由高排到低。接著讓我帶你一起算算這段演算法的時間複雜度。

```cpp
int[] student_heights = { 149, 151, 152, 153, 156 };
```

我想要你先看過上面這個陣列，裡面儲存了每位學生的身高。依照寫出來的演算法，在第一輪的流程裡面總共會比較學生的身高 4 次，幫學生交換位置 4 次。如果我們用一個代數「n」來表示學生的數量，那麼在進行完第一輪流程之後總共比較了 n - 1 次 (4 次 = 5 - 1 次 = n - 1 次)、交換了 n - 1 次 (4 次 = 5 - 1 次 = n - 1 次)

> == 第一輪 ==
> 檢查了 n - 1 次
> 交換了 n - 1 次
> [151, 152, 153, 156, 149]

___

接著老師會回到隊伍的最前面，一樣再進行一輪演算法定義的流程。然而在第二輪流程裡面，第四位學生已經比第五位學生還要高，不需要被交換位置，所以當第二輪流程進行完之後，在過程中總共比較了 n - 1 次 (實際上是 4 次)，但只交換了 n - 2 次 (實際上是 3 次)。

> == 第二輪 ==
> 檢查了 n - 1 次
> 交換了 n - 2 次
> [152, 153, 156, 151, 149]

___

在開始第三輪的排序流程之前，我想要你感受一下: 在兩輪的排序過程之中，先是最矮的學生被不斷被往後排到隊伍的最後面，接著是第二矮的學生不斷被往後排到隊伍裡的倒數第二個位置。這個過程會讓越矮的學生一位一位往後排，就像「氣泡 (bubble)」一樣不斷往上冒出水面。這種不斷把最大或最小元素往陣列的某個方向交換過去的過程就是 bubble sort 演算法的特點。再來一輪吧! 這次做完比較跟交換的動作之後，總共做了 n - 1 次比較 (實際上是 4 次) 跟 n - 3 次交換 (實際上是 2 次)。

> == 第三輪 ==
> 檢查了 n - 1 次
> 交換了 n - 3 次
> [153, 156, 152, 151, 149]

___

依此類推，在第五輪的流程結束之後，總共在這次的流程裡做了 n - 1 次比較 (實際上是 4 次) 跟 n - 5 次交換 (實際上是 0 次)。

> == 第五輪 ==
> 檢查了 n - 1 次
> 交換了 n - 5 次
> [156, 153, 152, 151, 149]

___

最後我想要你看過總共五輪的排序歷史紀錄:

| 第幾輪 | 檢查次數 | 交換次數 |
| ----- | -------- | ------- |
| 第一輪 | n - 1   | n - 1   |
| 第二輪 | n - 1   | n - 2   |
| 第三輪 | n - 1   | n - 3   |
| 第四輪 | n - 1   | n - 4   |
| 第五輪 | n - 1   | n - 5   |
| Total | 5n - 5  | 5n - 15 |

首先以檢查動作來看，可以得到總共做了 n(n - 1) 次動作
接著以交換動作來看，可以得到總共做了 (n - 1) + (n - 2) + (n - 3) + ... + (n - n) = n(n - 1) / 2 次動作
最後把檢查跟交換動作的次數都加起來之後，會得到總共做了 n(n - 1) + n(n - 1) / 2 = 3n(n - 1) / 2 = 3(n<sup>2</sup> - n) / 2 次動作
到這邊讓我們再稍微修改一下這個複雜度:
1. 因為 n 的數值如果非常大，常數 3 跟 2 對複雜度就幾乎沒有影響，所以都可以被忽略掉。把常數都去掉之後會得到簡化過的時間複雜度: n<sup>2</sup> - n
2. 如果 n 的數值不斷往上增加，n 跟 n<sup>2</sup> 比起來也可以被看成是可被忽略的運算元。把 n 去掉之後會得到簡化過的時間複雜度: n<sup>2</sup>
   
結論就是，我們得到 bubble sort 演算法的時間複雜度是 O(n<sup>2</sup>)

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
