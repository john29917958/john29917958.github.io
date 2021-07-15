title: Design Pattern
visible: show
date: 2021-07-14 22:11:19
tags: program, software, engineer, design, system, architecture
category: Programming
---

「他X的這糞 code 誰寫的!? 被我知道我一定做掉他!!」
「快不行了......一個功能我要捲 10 頁看...我好像迷路了 QAQ」
「東打斷一下西干擾一下，咦? 是時候了吃飯去吧~」
「忙了一天，一事無成......」
「改一下很簡單!? 他X的你怎麼不自己改? 啊啊啊啊啊啊啊~~」

上面這些對話，你說過幾種? XD
亦或是......你身邊的工程師朋友，講過哪幾句呢?

程式系統像難以掌控的猛獸
他小時候非常聽話，而且非常好養!! 兩三下就幫你征戰無數的物資回來
但隨著小獸一天一天成長，你卻發現，牠越來越「夭獸」，還越來越難掌控......
你幫牠裝上鞍，牠卻故意倒著走；你叫他，牠裝聾不來；你不動牠沒事，一摸牠就反咬你一口
這就宛如我們手上的系統，不動沒事，一動便驚滔駭浪，bug 與錯誤排山倒海襲來

你是否與我一樣，正經歷著這一切呢?
你曾否疑惑，為什麼? 是什麼原因導致這種結果?
已經成為工程師的我們，不是應該絕頂聰明嗎? 怎還會走入這攤焦油坑呢?

公司的員工，需要透過管理來達到高效合作、高效產出
程式系統，更需要透過管理來因應各種需求與變化

程式管理的起點是程式碼風格、物件導向，而後是設計模式，再來是軟體架構與軟體工程專案管理
學習成長中的我，想與你分享養出「夭獸」的原因、比較「糞 code」與優良程式的差別、帶入實戰的設計模式應用，並且......
在最後統整 19 種常見的情境、帶出對應的設計模式，並給出 19 份範例專案與程式碼

但願，這些可以協助你，過上更好的工程師生活！
準備好手邊的咖啡沒? Time to dig in!

<!-- more -->

# 軟體的格局，是全世界 - 需要的，是「軟體工程」
軟體的市場在全世界，你同意嗎? 開一家餐廳我們要做許多功課，要比較地段、普查客群、研究競爭對手、計算租金薪資與許多支出成本、預計獲利、估算損益平衡時間、回本時間......
來到軟體，也要設定目標客群、研究競爭對手、計算伺服器租賃費用、使用第三方服務的費用、昂貴的軟體工程師要幾個、預計獲利、預計回本...
看上去，做軟體與做傳產似乎差不多? 最大的不同，我想是「市場的極限」
- 餐廳要拓展市場，可能得用連鎖等方式實現
- 一個網站或 App 一發佈，可以立刻開放全世界，賺全世界的錢

軟體的全球化市場，令人熱血沸騰。軟體的起手資本，讓人垂涎欲滴
在家裡，一台筆電，一杯咖啡，配上一組不需太好的配備
只要你的技術夠強、UI 設計能力夠屌、~~肝夠健康~~，便可以開始揮灑創意，甚至上線你的創意

但這些誘因背後，存在無盡的深淵......

```csharp
public class RaceHitCountAchievement
{
    public bool IsAchieved { get; private set; }

    public Races Race { get; private set; }

    public int TargetCount { get; private set; }

    public int CurrentCount { get; private set; }

    public RaceHitCountAchievement(Races race, int targetCount)
    {
        Race = race;
        TargetCount = targetCount;
        IsAchieved = false;
    }

    public void OnEnemyHit(HitEnemySubject subject)
    {
        if (IsAchieved) return;

        if (subject.Victim.Race == Race)
        {
            CurrentCount += 1;
        }

        if (CurrentCount >= TargetCount)
        {
            IsAchieved = true;
            Console.WriteLine("Achievement reached: RaceHitCountAchievement");
        }
    }
}
```

以上是一段 C# 程式碼
也許你不是程式專業的人，也許你是程式高手
但即便是高手，若要管理幾十萬行的程式，需求的變動還頻頻出現
你，會怎麼做?
如果我們的系統要服務全世界、要做多國語言、要針對風土名情做客製化
我們一步一步的策略與方法，又是什麼?

軟體，可能只比你女朋友或男朋友難懂
他更像培養一個孩子，錯過了年幼的可塑期，過了一定年紀，觀念成形後，便很難撼動與扭轉
偏偏軟體開始受到關注時，都已成長到一定的規模
這時後悔，發現災難不斷，想擴充功能也綁手綁腳
一切，都為時已晚

軟體工程在談的，是各種方法論，如何讓軟體走向成功的方法論
怎麼讓艱澀的程式變好懂? 怎麼讓擴充可以快速實現賺錢? 怎麼讓專案活久一點，賺久一點? 怎麼讓一群人高效協作同份產品?
以上這些，都是軟體工程的一環

# 幹蠢事的聰明人
好吧我承認這句話取自我研究所教授 XD
會寫程式，想必腦袋一定不差吧? 那為何還需要模組切分、少量迭代開發、回歸測試這些有的沒的管理方法?
舉個例子，房子亂蓋結構亂綁，你用膝蓋想都知道，這房還沒漲價就要崩了，你連看施工圖的鋼筋數量與綁紮方式都可以略知一二
但你有聽過程式亂寫會發生什麼事嗎?
你有想過為什麼漆油漆可以說好你我各塗一半，兩三下工作就完成了
但來到程式，連講好你寫這邊我寫這邊都可以搞到兩人火冒三丈嗎? XD

先不說程式有什麼特性，我們先試想一幅「負傷但不服輸的美少女」
應該要畫成什麼樣子?
「寫程式跟畫圖有關係? 我書讀得少別騙我！」
不好意思還真的有那麼點關聯 XD 例如我可以畫成這樣

或這樣

或是... 恩...

發現了嗎? 光是「負傷但不服輸的美少女」就可以有無限種解釋方式
有些人還可以想到歪樓 (誰? 你在說誰!?)

我們說「programmer」，中文是程式「設計師」
撰寫程式本身是一項抽象的設計工作
我們收到的需求，跟程式碼本身沒什麼關聯，沒辦法直接聯想解決方案，必須經過抽象的轉換過程
轉換出來的產物，也不是動人的插畫，是難以下嚥的數學邏輯與資料關係，產出的是如天書般的詭異語法

發現了嗎? 即便在工業革命後，在提倡「專業分工」後，做同一件事我們都有機會出錯了
何況是本質抽象、搞入數學邏輯、產出天書的程式設計工作?
更因為本質抽象，你很難預見自己設計出來的邏輯順序，會不會按照自己所想，產生預期的結果
讓我們再看一眼程式碼的樣子...

```csharp
public void OnEnemyHit(HitEnemySubject subject)
{
    if (IsAchieved) return;

    if (subject.Victim.Race == Race)
    {
        CurrentCount += 1;
    }

    if (CurrentCount >= TargetCount)
    {
        IsAchieved = true;
        Console.WriteLine("Achievement reached: RaceHitCountAchievement");
    }
}
```

跟插畫的樣子

所以你說，聰明人會不會幹蠢事?
有關軟體工程師的人格特質就不多提了~ 既然程式碼這麼難搞，~~比你男女朋友還難搞~~
有什麼方法或思維模式，可以大幅提升專案 meet the schedule、meet the expectation、meet the measurable KPI 的機率呢?
想要改善，想要進化，必須先知道問題所在，知道好與壞，才有衡量進步、衡量品質的方法
就像你必須先一直被霸凌，才知道經過訓練後，~~霸凌別人的爽感~~可以保護自己、甚至保護最重要的人，是什麼感覺

# 糞 Code
在程式的世界，我們形容品質糟糕的程式碼，其實不稱作「糞 code」XD，而是有些專有名詞 (黑話)，如「Bad code smells」程式碼壞味道或「Anti-pattern」反模式
Bad code smell 是指一些不好的程式碼風格。例如同樣的程式碼出現多次，一個方法太長、太多參數等等
Anti-pattern 則是根據 GoF 出版的「Design Pattern」，得到靈感而提出的集合詞彙。包含例如「god object」，指一個物件包山包海，做太多事情；或「spaghetti code」，泛指程式碼流程複雜混亂，交雜在一起，難以理解的現象

舉個小編實際負責的某個專案，要做出類似 flow chart 的圖形化編輯器。流程圖裡每個節點都有不同功能，例如寄信、發送簡訊、查詢資料庫等等。
使用者拉完流程圖，按下執行按鈕後，系統會順過每個節點，執行對應的功能

這邊姑且稱小編為「小澄」吧
主管把小澄拉到身邊細語說道：「諾，這是最近大老闆很期待的專案。幫我搞定，給妳的好處不會少。先幫我實現流程系統的寄信功能吧！」
小澄收到需求後，非常開心、熱血地寫出下列程式碼:
```csharp
public static void DoJob(JObject op)
{
    string title = op["title"].Value<string>();
    string componentId = op["componentId"].Value<string>();

    string receivers = op["properties"]["receivers"].Value<string>();
    string mailTitle = op["properties"]["title"].Value<string>();
    string content = op["properties"]["content"].Value<string>();

    SmtpClient smtp = new SmtpClient(GetSmtpHost());
    MailMessage message = new MailMessage();
    message.From = GetSystemMailAccount();
    message.Subject = mailTitle;
    message.Body = content;
    message.IsBodyHtml = true;

    foreach (string address in receivers.Split(','))
    {
        message.To.Add(address);
    }

    smtp.Send(message);

    WriteLog(componentId, title, "Send mail executed");
}
```

「哈! 小菜一碟! 不知道主管會怎麼報答我呢?」
果然主管看了 DEMO 後非常滿意，說道「真不知道該如何感謝妳，也幫我實現寄信功能吧! 晚上請妳吃飯」
小澄為了今晚的勝利卯足了勁，完成了工作

```csharp
public static void DoJob(JObject op)
{
    string title = op["title"].Value<string>();
    string componentId = op["componentId"].Value<string>();

    // Executes different types of operator.
    if (componentId == "SendMail")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string mailTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SmtpClient smtp = new SmtpClient(GetSmtpHost());
        MailMessage message = new MailMessage();
        message.From = GetSystemMailAccount();
        message.Subject = mailTitle;
        message.Body = content;
        message.IsBodyHtml = true;

        foreach (string address in receivers.Split(','))
        {
            message.To.Add(address);
        }

        smtp.Send(message);

        WriteLog(componentId, title, "Send mail executed");
    }
    else if (componentId == "SendSMS")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string smsTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SendSms(receivers.Split(','), smsTitle, content);

        WriteLog(componentId, title, "Send SMS executed");
    }
}
```

「Good job!」主管說到: 「本來只想請妳吃麵攤的，沒想到這麼快!」
「幫我把每個節點串起來吧! 這樣才有 flow 的樣子。晚上請妳吃高級的牛排好了?」
小澄霎時頭有點暈，但為了主管的愛
戴

小澄咬緊牙答應，並把任務完成
這次小澄幫 DoJob() 多加了兩個參數來取得連接節點的線，並傳入所有節點
如此一來，可以在節點執行結束後往後找下一個節點，並執行他

```csharp
public static void DoJob(JObject op, JArray allLinks, JArray allOperators)
{
    string title = op["title"].Value<string>();
    string componentId = op["componentId"].Value<string>();

    // Executes different types of operator.
    if (componentId == "SendMail")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string mailTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SmtpClient smtp = new SmtpClient(GetSmtpHost());
        MailMessage message = new MailMessage();
        message.From = GetSystemMailAccount();
        message.Subject = mailTitle;
        message.Body = content;
        message.IsBodyHtml = true;

        foreach (string address in receivers.Split(','))
        {
            message.To.Add(address);
        }

        smtp.Send(message);

        WriteLog(componentId, title, "Send mail executed");
    }
    else if (componentId == "SendSMS")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string smsTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SendSms(receivers.Split(','), smsTitle, content);

        WriteLog(componentId, title, "Send SMS executed");
    }
    else
    {
        return;
    }

    // Finds operators to be executed next.
    List<JObject> nextOperators = new List<JObject>();

    foreach (JToken link in allLinks)
    {
        if (link["fromOp"].Value<string>() == op["id"].Value<string>())
        {
            foreach (JToken nextOp in allOperators)
            {
                if (nextOp["id"].Value<string>() == link["toOp"].Value<string>())
                {
                    // Executes next operator.
                    DoJob(JObject.FromObject(nextOp), allLinks, allOperators);
                }
            }
        }
    }
}
```

「呼~搞定! 我在主管心目中的地位，絕對是 ++ 的啦！」
晚上，主管與小澄度過愉悅的時光...

隔天，主管把小澄叫去：「小澄阿，妳做得不錯。上面的老闆有其他願望，希望系統可以接收 SQL 字串，並從資料庫把 data 拿出來。用途還不曉得，總之先做吧！」
小澄這次乾脆~~臉紅~~地答應! 興高采烈地做出擴充

```csharp
public static void DoJob(JObject op, JArray allLinks, JArray allOperators)
{
    string title = op["title"].Value<string>();
    string componentId = op["componentId"].Value<string>();

    if (componentId == "SendMail")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string mailTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SmtpClient smtp = new SmtpClient(GetSmtpHost());
        MailMessage message = new MailMessage();
        message.From = GetSystemMailAccount();
        message.Subject = mailTitle;
        message.Body = content;
        message.IsBodyHtml = true;

        foreach (string address in receivers.Split(','))
        {
            message.To.Add(address);
        }

        smtp.Send(message);

        WriteLog(componentId, title, "Send mail executed");
    }
    else if (componentId == "SendSMS")
    {
        string receivers = op["properties"]["receivers"].Value<string>();
        string smsTitle = op["properties"]["title"].Value<string>();
        string content = op["properties"]["content"].Value<string>();

        SendSms(receivers.Split(','), smsTitle, content);

        WriteLog(componentId, title, "Send SMS executed");
    }
    // Queries database.
    else if (componentId == "QueryDatabase")
    {
        string sql = op["sql"].Value<string>();
        Database database = GetDatabaseService();
        DataTable data = database.Query(sql);
        // Keep data here first

        WriteLog(componentId, title, "Queried database, data count is " + data.Rows.Count);
    }
    else
    {
        return;
    }

    List<JObject> nextOperators = new List<JObject>();

    foreach (JToken link in allLinks)
    {
        if (link["fromOp"].Value<string>() == op["id"].Value<string>())
        {
            foreach (JToken nextOp in allOperators)
            {
                if (nextOp["id"].Value<string>() == link["toOp"].Value<string>())
                {
                    DoJob(JObject.FromObject(nextOp), allLinks, allOperators);
                }
            }
        }
    }
}
```

正當小澄想去找主管邀功時，主管竟已發信請她把額外 30 種節點加入專案，2 周候看一下狀況
此時的小澄不知為何有點苦惱，但還是硬著頭皮把 30 項節點全部塞入 `if` / `else` 中......
新增的過程，小澄常常不小心誤刪不相干的程式碼，或改錯節點

程式碼略...可以想像一份擁有 30 條 branch 的 function...

休息了一個周末，周一上班的第一封信，主管要小澄讓 flow 可以透過 web API 從外部呼叫
小澄轉了轉眼珠，把整份 `if` / `else` 搬到 web API 專案中

接下來主管的一封信，讓小澄當場崩潰，無助地哭了起來
這裡是
「寄信」跟「寄簡訊」功能都要從資料庫拿收件人與內容
姑且先不管從資料庫取得幾筆資料，先一律拿第一列吧

# 設計模式實戰案例

# 統整 19 項設計模式
