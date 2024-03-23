title: 6 Characteristics of High Value Programmer
visible: hide
date: 2020-10-22 22:06:16
tags: programming
category: Programming
---
你也是人見人愛的合作對象嗎？
6 個高價值工程師的特質，你擁有幾個？

{% asset_img banner.png %}

<!-- more -->

## 1. 善於獨立搜索資源解決問題
看似一個簡單的 Google 能力，卻很少有工程師做得高端
通常我們遇過的問題，世界上的高手也遇過
遭遇問題時，快速、有效率地尋找資源解決，是效率的展現、是價值的展現，更是獨當一面的高手，必定具備的能力

另一方面，與業務工作不同
程式設計需要一段完整、不受干擾的「馳騁模式」來進行高價值產出
程式碼全是些艱澀難懂的天書
一旦「馳騁模式」被打斷，工程師需要花**非常久**的時間重新熱機（真的很久……）
強化 Google 並解決問題的能力，除了提升自己的競爭力，也可以減少對團員的干擾
溝通固然重要
但有效地安排會議或討論時間，避免讓「馳騁模式」消失
都是高價值工程師須思考的問題

這裡是一段範例程式碼。你說，像天書嗎？ XD
```csharp
/// <summary>
/// Gets the distance between two points in 2-dimensional system.
/// </summary>
/// <param name="x1">The x-axis value of first point.</param>
/// <param name="y1">The y-axis value of first point.</param>
/// <param name="x2">The x-axis value of second point.</param>
/// <param name="y2">The y-axis value of second point.</param>
/// <returns>
/// Returns the distance between two points.
/// </returns>
public double GetDistance2D(double x1, double y1, double x2, double y2)
{
    double distance = Math.Sqrt(Math.Pow(x1 - x2, 2) + Math.Pow(y1 - y2, 2));
    distance = Math.Abs(distance);
    return distance;
}
```

## 2. 善於優化工作效率
「工程師的美德，就是懶」
為了創造更高的價值，厲害的工程師會想盡辦法「自動化」繁雜的流程
或將不必要的內容排出腦外，用知識庫或文件等儲存起來
讓自己只專注在高價值任務上
程式設計所需的技術水準普遍高於一般產業，也更複雜
因此如何提升自己的工作效率、簡化或自動化自己每日的生活
都是高價值工程師關注的課題

## 3. 具備隨時接手系統的意識
進到職場工作，面臨的通常是行之有年，或已稍具規模的系統
大多時候的任務，都是優化功能或修正錯誤，鮮少有機會創造全新的專案
因此普遍來說，快速接手系統、立即開始維護的能力，比較被市場需要

接手專案時若有文件支撐，當然最好
但常常事與願違。職場上的專案要不沒有文件，要不文件已經失去維護沒有參考價值，要不文件零散四散毫無關聯，光搜拼湊文件就已經令人退卻
或是最可憐的，專案維護人已經全部消失，亦無文件支持，只能自己啃食程式碼理解他

追溯程式碼有方法，也有邏輯
系統通常都會有「進入點」
進入點不一定是程式起始的第一行 `main`
可能是一連串的初始化、是主介面、或是等待輸入來觸發事件，監聽中的迴圈
了解一份專案，得先想辦法找到「進入點」
從進入點出發，通常可以往外連結至任何使用情境

我們不會一開始就搞懂整個專案
了解專案，通常會由「使用情境」出發
可以的話，用 debugger 或整合開發環境
一步一步走過程式流程，踩過一個一個中斷點
我們對系統的了解，是漸進式的，有如收服疆土一般
隨著使用情境，順過相關的程式邏輯，逐漸拼湊起來
如此一來，比從頭到尾啃食程式碼、在 function 間逛來逛去，還要有效率有條理，也更能掌握產品的商業知識

## 4. 對產出品質的自我要求
程式本身抽象不直覺
隨著系統成長，偵錯難度也將指數上升
高價值工程師了解彼此的痛，會嚴守產出的品質與正確性
做好謹慎的模擬測試，盡量不讓自己拖垮團隊

在測試之前，會先設計使用情境
想辦法走過程式碼的每條分支
有了情境清單後，是設計模擬輸入
讓程式走過每條路線，確保沒有漏網之魚、確保每條路的正確性
在自我的品質意識養成後，則是自動化測試、整合測試等課題

## 5. 高度抽象思考能力
第五點因人而異，有數理邏輯達人，也有抽象思考高手。這邊探討的，是抽象思考能力。
抽象思考可以是物件導向分析、資料庫正規化，大到可以是模組或架構設計，甚至是服務設計都有
與一般工程產業不同，目前尚無「直觀」的方式來描述程式結構
舉建築的原型與設計圖來說，他們反映的，是真實房屋架構，人腦可以直覺反射出成品大概的樣貌
但來到程式的世界，全是令人看不懂的代碼天書與物件
該怎麼用直觀的方式形容這些「天書」？即便是 [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language)，也需要經過大腦翻譯，不像建築圖可以「直覺地」反射出成品的樣貌
抽象思考，一直是高價值工程師的核心能力
如何做高階的模組切分，到合理的類別設計，乃至於不重複且精準的功能設計
都需要抽象思考
將艱澀難懂的天書，拆解成一個一個可重複利用的「藍圖範本」
製作範本，就像 3D 列印中的「建模」程序
一旦模型完成，往後交給列印機量產即可
不需要手動重作每個部件
程式碼，會藉由「藍圖範本」來簡化複雜度，並增加未來維護的效率

## 6. 快速適應任何技術的能力
程式的進化速度比傳統產業快很多
高價值工程師具備的，是紮實的基礎知識，如 call stack、pass-by-value 或 pass-by-reference、pointer、function pointer，甚至是 process 記憶體結構
有了這些不變的內功，無論技術怎麼變，高價值工程師都具備快速上手的能力，進而不失競爭力
但很重要的，別忘記保有自己「核心」、「難以被取代」的關鍵技術力
他是自己的口碑、自己的商標、是自己的談判籌碼、更是自己的王牌武器！

另外一個面向，成熟的工程師，會具備全盤考量的心態，願意調整自己、快速進入特定技術、快速提供價值，並與團隊融為一體
商場講究的是品質與效率。如何讓團隊在舒適的技術水平下全力衝刺創造價值，是高價值工程師嚴謹考慮的面向
不是說新技術不好，是必須以團隊為考量
不是說不嘗試進步，是必須以團隊為考量！
一意引入不熟的新技術，非明智之舉。這會讓任務開始難以被 backup、被合作、被交接，甚至影響團隊前進的速度
然而當團隊需要進化，往下一個高度邁進，需要強化技術水平時
高價值工程師，定當勇闖第一，樂此不疲！

對你來說，高價值工程師應具備哪些特質？歡迎留言讓我知道 ^^