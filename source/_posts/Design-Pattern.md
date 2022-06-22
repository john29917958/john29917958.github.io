title: Design Pattern
visible: show
date: 2021-07-14 22:11:19
tags: [program, software, engineer, design, system, architecture]
category: Programming
---

{% asset_img tactics.jpg %}

「他X的這糞 code 誰寫的!? 被我知道一定做掉他!!」
「快不行了......一個功能我要捲 10 頁看...我好像迷路了 QAQ」
「改一下很簡單!? 他X的你怎麼不自己改? 啊啊啊啊啊啊啊~~」

上面這些對話，你說過幾種?
亦或是......你身邊的工程師朋友，講過幾句呢?

系統像難以掌控的猛獸
他小時候非常聽話，而且非常好養!! 兩三下就幫你征戰無數物資回來
但隨著小獸一天一天成長，你卻發現，牠越來越「夭獸」，還越來越難掌控......
你幫牠裝上鞍，牠卻故意倒著走；你叫他，牠裝聾不來；你不動牠沒事，一摸牠就反咬你一口
這宛如我們手上的系統，不動沒事，一動便驚滔駭浪，bug 與錯誤排山倒海襲來

公司的員工，需要透過管理來達到高效合作、高效產出
程式系統，更需要透過管理來因應各種變化

養出「夭獸」有原因，讓系統聽話有方法
設計模式在看的，就是識別出「使用情境」，並套入對應的程式結構
就像對弈時，觀察對手的一舉一動，根據不同情境使出不同戰法一樣

接下來，我們將一起看過養出「夭獸」的原因、比較程式的好壞、帶入實戰的設計模式應用，並且......
在最後統整 23 種常見情境、帶出對應的設計模式，並給出份範例專案與程式碼

但願，這些可以協助你，過上更好的工程師生活！
準備好手邊的咖啡沒? Let's dig in!

<!-- more -->

# 軟體的格局，在全世界 - 需要的，是「軟體工程」

{% asset_img www.png %}

軟體業與傳產最大的不同在哪?
做軟體與做傳產一樣，都要普查客群、研究競爭對手、計算資本、估算損益平衡時間、回本時間......
看上去，做軟體與做傳產似乎差不多? 最大的不同，我想是「市場的極限」
- 餐廳要拓展市場，可能得用連鎖或加盟等方式實現。否則，就得透過程式或網路的力量
- 一個網站或 App 一發佈，可以立刻開放全世界，賺全世界的錢

軟體的全球化市場，令人垂涎欲滴。軟體的起手資本，讓人熱血沸騰
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

若要管理幾十萬行的程式，需求、變動還頻頻出現
我們該怎麼做?
如果我們的系統要服務全世界、要做多國語言、要針對風土民情做客製化
我們一步一步的策略與方法，又是什麼?

做軟體，就像養孩子
錯過可塑期、觀念成形後，便很難撼動與扭轉
偏偏軟體開始受到關注時，都已成長到一定規模
這時後悔，發現災難不斷，想擴充功能也綁手綁腳
一切，為時已晚

軟體工程在談的，是各種方法論，如何讓軟體走向成功的方法論
讓艱澀的程式變好懂、讓擴充迅速實現賺取收入、讓專案活久一點，賺久一點、讓一群人高效協作同份產品
以上這些，都是軟體工程的一環

# 幹蠢事的聰明人

{% asset_img abstract-thinking.jpg %}

會寫程式，腦袋一定不差吧? 那為何還需要模組切分、少量迭代開發、回歸測試這些有的沒的管理方法?
舉個例子，房子亂蓋鋼筋亂綁，我們可以很輕易聯想到，~~這房還沒漲價就要倒了~~這房子住了很容易出人命!!
我們連看施工圖的鋼筋數量與綁紮方式都能略知一二
但你有聽過程式亂寫會發生什麼事嗎?
你有想過，為什麼漆油漆可以說好你我各塗一半，兩三下工作就完成了
但來到程式，連講好你寫這邊我寫這邊、要分工，都可以搞很久?

我們說「programmer」，中文是程式「設計師」
寫程式本身是一項「抽象」的「設計工作」
我們收到需求時，跟程式碼毫無連結，沒辦法直接聯想解決方案，必須經過抽象的轉換過程
轉換出來的產物，也不是動人的插畫、明確的指示，是難以下嚥的數學邏輯與資料關係。Yes! 是「邏輯」與「關係」這種抽象概念!!
更何況最後產出的，是如天書般的詭異語法

發現了嗎? 即便在工業革命提倡「專業分工」後，做同一件事我們都有機會出錯了
何況是本質抽象、搞入數學邏輯、產出天書的複合式程式設計工作?
更因為本質抽象，你很難預見設計被做出來後，會不會按照自己所想，會不會產生預期的結果
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

所以你說，聰明人會不會幹蠢事?
既然程式碼這麼難搞
有什麼方法或思維模式，可以大幅提升專案 meet the schedule、meet the expectation、meet the measurable KPI 的機率呢?
想要改善、想要進化，必須先知道問題所在。知道好與壞，才有衡量進步、衡量品質的方法
就像你必須先吃過噁心的黑暗料理，才知道什麼叫「好廚藝」
必須先經歷糟糕的健康狀況，才知道一點一滴回復的喜悅

# 糞 Code

{% asset_img spaghetti.jpg %}

在程式的世界，我們其實不用「糞 code」來形容糟糕的程式碼 XD，而是有些黑話，如「Bad code smell」程式碼壞味道；或「Anti-pattern」反模式
Bad code smell 是指程式碼風格很糟糕。例如同樣的程式碼出現多次，一個方法太長、太多參數等等
Anti-pattern 則是集合詞彙 (根據 GoF 出版的「Design Pattern」衍伸出來)。包含如「god object」，指一個物件包山包海，做太多事情；或「spaghetti code」，泛指程式碼流程複雜混亂，交雜在一起，難以理解的現象

那 bad code smell 或 anti-pattern code 到底長什麼樣子呢?

{% asset_img flow-editor-system.jpg "The Flow Editor System'The Flow Editor System'" %}

有天，某主管把工程師「筱娍」叫到身邊：「諾，這是最近大老闆很期待的專案。要做出類似 flow chart 的圖形化編輯器。流程圖裡每個節點都有不同功能，使用者拉完流程圖，按下執行按鈕後，系統會跑過每個節點，把功能都順過。」
「幫我搞定它，給妳的好處不會少。先幫我實現寄信功能吧！」
筱娍是個到職不久，充滿熱忱的小**小程**式設計師
她收到需求後非常開心，熱血地拚出第一版程式:「哈! 小菜一碟! 趕快給主管看看!」

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

果然主管看了 DEMO 後非常滿意:「真不知該如何感謝妳，發送簡訊也一並幫我實現吧! 晚上請妳吃飯」
筱娍為今晚的勝利卯足了勁，用 `if` / `else` 擴充，快快完成了工作

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
    // Feature extension: Send phone message.
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
        throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
    }
}
```

「Good job!」主管說到: 「本來只想請妳吃麵攤的，沒想到這麼快!」
「幫我把節點都串起來吧! 這樣才有 flow 的樣子。晚上請妳吃高級牛排好了?」
筱娍頓了一下，但為了主管的愛
戴

筱娍咬緊牙答應，並把任務完成
這次筱娍幫 DoJob() 多加了兩個參數來取得「連接線」與所有「節點」
並在 function 結尾找下一個節點、執行它

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
        throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
    }

    // Finds operators to be executed next.
    List<JObject> nextOperators = new List<JObject>();

    foreach (JToken link in allLinks)
    {
        if (link["fromOpId"].Value<string>() == op["id"].Value<string>())
        {
            foreach (JToken nextOp in allOperators)
            {
                if (nextOp["id"].Value<string>() == link["toOpId"].Value<string>())
                {
                    // Executes next operator.
                    DoJob(JObject.FromObject(nextOp), allLinks, allOperators);
                }
            }
        }
    }
}
```

「呼~搞定!」
晚上，筱娍與主管度過愉悅的時光 (???)

這時的筱娍覺得，自己是世界上最快樂的人

{% asset_img victory-night.jpg %}

隔天，主管把筱娍叫去：「筱娍阿，妳做得不錯。上面的老闆有其他願望。諾，這裡有 30 種節點。這兩周，就麻煩妳啦!」
「Fighting fighting!」筱娍乾脆地答應，興高采烈寫 `if` / `else` 擴充去...

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
    // Yet another new operator: Queries database...
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
        throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
    }

    List<JObject> nextOperators = new List<JObject>();

    foreach (JToken link in allLinks)
    {
        if (link["fromOpId"].Value<string>() == op["id"].Value<string>())
        {
            foreach (JToken nextOp in allOperators)
            {
                if (nextOp["id"].Value<string>() == link["toOpId"].Value<string>())
                {
                    DoJob(JObject.FromObject(nextOp), allLinks, allOperators);
                }
            }
        }
    }
}
```

擴充到一半時，筱娍不知為何有點苦惱，但還是硬著頭皮把 30 種節點全塞入 `if` / `else` 中......
過程中，筱娍常常不小心誤動不相干的程式碼或改錯節點，在 `if` / `else` 間翻來覆去
好不容易快寫完了，主管卻馬上冒出來: 「筱娍! 讓 flow 可以透過 web API 從外部呼叫，我們要跟其他系統串接。」
「阿，別忘了讓每個元件可以被單獨呼叫」
筱娍轉了轉又大又圓的眼珠，把整份 `if` / `else` 複製一份到 web API function 中
並把 `if` / `else` 中的節點程式再複製一份，貼到獨立的 web API methods 裡......

```csharp
// In origin project.
public static void DoJob(JObject op, JArray allLinks, JArray allOperators)
{
    // Duplicate code...
}

// In web API project.
public string Run(string systemId, string parameters)
{
    JObject p = JObject.Parse(parameters);
    JObject startingOp = p.Value<JArray>("startingOp");
    JArray allLinks = p.Value<JArray>("links");
    JArray allOperators = p.Value<JArray>("operators");

    // Duplicate code...
}

// Invokes individual operator: "Send e-mail".
public string SendMail(string parameters)
{
    // Duplicate...
    JObject op = JObject.Parse(parameters);
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
    // Code...
}

// Invokes individual operator: "Send phone message".
public string SendSms(string parameters)
{
    // Duplicate...
    JObject op = JObject.Parse(parameters);
    string receivers = op["properties"]["receivers"].Value<string>();
    string smsTitle = op["properties"]["title"].Value<string>();
    string content = op["properties"]["content"].Value<string>();

    SendSms(receivers.Split(','), smsTitle, content);

    WriteLog(componentId, title, "Send SMS executed");
    // Code...
}

// A lot of individual methods...
// Duplicate code paradise...

```
接下來的日子裡，主管頻頻要筱娍加新節點、改特定節點的參數
筱娍則頻頻改了這忘了那，加了這邊忘了加那邊，節點種類已經來到 100 個......

這陣子，公司也總是出現老人離職、新血加入等異動
筱娍身上掛越來越多系統，但很不巧......大家的程式風格都一樣!
`if` / `else` 滿天飛，重複程式碼四散，公用變數比吃過的飯粒還多...
筱娍常常遭受漏改、改錯東西的譴責
她花非常多時間在尋找相關程式碼，或釐清變數被誰動過......

晚上 11 點，筱娍的位置還亮著燈
「原來...努力不一定有回報......」
今天，筱娍終於再也忍不住，她揉著水汪汪的眼睛低聲啜泣
「也許......我不適合這裡，我也不適合作工程師......」
她纖細的手顫抖著，慢慢將滑鼠移向「離職」鈕
游標離按鈕越來越近，筱娍的心也越來越刺、越來越痛，好像快要裂開了一樣
「對不起!」筱娍的食指努力朝滑鼠按下

{% asset_img despiration.jpg %}

「啊!!!」一隻手突然搭在筱娍肩上
筱娍猛然回頭，一股強大的概念矗立在她面前

{% asset_img design-pattern.jpg %}

# 設計模式實戰案例
我們的腦袋，不適合處理龐大又複雜的訊息
筱娍為了追尋主管認同，不計一切火速達成要求
換來的，是:
1. 冗長、難以閱讀的程式
2. 四散的初始化片段
3. 到處都是雷同的功能實作

當要新增節點時，筱娍得在許多地方修改程式碼
當特定節點要修改，筱娍一樣得在多個地方做異動

隨著需求增加，重複的地方越來越多、功能越來越長、越來越複雜
做一項異動所需的時間，慢慢呈指數成長 (出錯的機會亦然)

> 起初貪快沒做好足量設計，反而拖慢系統成長、締造出寸步難行的「焦油坑」

其實，這一切都可以避免
需求千奇百怪，但大多都可歸納成幾種「patterns」，並用適合人腦閱讀、適合理解、適合擴充的方式管理起來
這一套心法，叫做「Design Pattern」 - 設計模式

{% asset_img gang-of-four-design-patterns.jpg "The Gang of Four - Design Patterns'The Gang of Four - Design Patterns'" %}

以筱娍的「類流程編輯系統」來看，我們可以發現 `if` / `else` 無論出現幾種，都可以歸納成同一種概念
舉人種來說，有美國人、韓國人、日本人，當然也有台灣人。
每種人的行為模式皆不同，但以本質來看，我們都是「人類」，有相同的「介面」。如走路、說話、思考......
以流程系統來說，我們有寄信節點、發簡訊節點、讀取資料庫節點......
每種節點的 operation (功能) 不盡相同，但以本質來說，都是「Operator」節點
為此，我們可以把 operators 收入一個繼承或實作介面中

{% asset_img operators-inheritance-structure.jpg "Operators inheritance structure'Operators inheritance structure'" %}

如此一來，無論節點類型怎麼增生，我們的「使用端」程式碼，都可以透過統一介面來呼叫它們
```csharp
Operator sendMailOp = new SendMailOperator();
Operator sendSmsOp = new SendSmsOperator();
Operator databaseOp = new DatabaseOperator();

// Always uses "Execute()" to invoke operator function without caring who they are.
sendMailOp.Execute();
sendSmsOp.Execute();
databaseOp.Execute();
```

套入原本的實作大約長這樣
```csharp
public static void DoJob(JObject json, JArray allLinks, JArray allOperators)
{
    string title = json["title"].Value<string>();
    string componentId = json["componentId"].Value<string>();
    Operator op;

    if (componentId == "SendMail")
    {     
        SendMailOperator sendMail = new SendMailOperator();
        sendMail.SetSubject(json["properties"]["subject"].Value<string>());
        sendMail.SetContent(json["properties"]["content"].Value<string>());
        sendMail.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
        op = sendMail;
    }
    else if (componentId == "SendSMS")
    {
        SendSmsOperator sendSms = new SendSmsOperator();
        sendSms.SetSubject(json["properties"]["subject"].Value<string>());
        sendSms.SetContent(json["properties"]["content"].Value<string>());
        sendSms.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
        op = sendSms;
    }
    else if (componentId == "QueryDatabase")
    {
        DatabaseOperator database = new DatabaseOperator();
        database.SetSql(json["sql"].Value<string>());
        op = database;
    }
    else
    {
        throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
    }

    op.SetTitle(json["properties"]["title"].Value<string>());
    Result result = op.Execute();
    WriteLog(op.ComponentId, op.Title, result.Message);
}
```

有發現 `if` / `else` 開始變短了嗎?
至於 operator 本身的功能，如「寄信」，會怎麼實作呢?
首先，先看過抽象的 `Operator` class
#### Operator.cs
```csharp
public abstract class Operator
{
    protected string Title;

    public abstract string ComponentId { get; }

    public void SetTitle(string title)
    {
        Title = title;
    }

    protected Operator()
    {

    }

    public abstract Result Execute();
}
```

再來，就是「寄信」功能的實作片段
#### SendMailOperator.cs
```csharp
public class SendMailOperator : Operator
{
    public override string ComponentId
    {
        get
        {
            return "SendMail";
        }
    }

    private string _subject;

    private string _content;

    private MailAddress[] _receivers;

    public void SetSubject(string subject)
    {
        _subject = subject;
    }

    public void SetContent(string content)
    {
        _content = content;
    }

    public void SetReceivers(string[] receivers)
    {
        List<MailAddress> addresses = new List<MailAddress>();

        foreach (string receiver in receivers)
        {
            addresses.Add(new MailAddress(receiver));
        }

        _receivers = addresses.ToArray();
    }

    // The concrete "send mail" implementation.
    public override Result Execute()
    {
        SmtpClient smtp = new SmtpClient(GetSmtpHost());
        MailMessage message = new MailMessage();
        message.From = GetSystemMailAccount();
        message.Subject = _subject;
        message.Body = _content;
        message.IsBodyHtml = true;

        foreach (MailAddress receiver in _receivers)
        {
            message.To.Add(receiver);
        }

        smtp.Send(message);

        return new Result(true, "Mail sent");
    }
}
```

到這邊設計模式還沒出場，不過我們已經改善了 3: 到處都是雷同的功能實作
例如「用 web API 呼叫特定 operator」，我們可以這樣寫
```csharp
public string SendMail(string parameters)
{
    JObject op = JObject.Parse(parameters);
    SendMailOperator sendMail = new SendMailOperator();
    sendMail.SetTitle(op["properties"]["title"].Value<string>());
    sendMail.SetSubject(op["properties"]["subject"].Value<string>());
    sendMail.SetContent(op["properties"]["content"].Value<string>());
    sendMail.SetReceivers(op["properties"]["receivers"].Value<string>().Split(','));
    Result result = sendMail.Execute(); // Just invoke the method of SendMail operator!

    return result.Message;
}
```

「實作」的部分，已經被收入「SendMailOperator」裡面。我們可以重複利用它，來避免「到處都是雷同的功能實作」這個問題
但目前為止，`if` / `else` 仍四處可見，「冗長、難以閱讀的程式」未獲改善
而且「四散的初始化片段」一樣困擾著我們

接下來，就是「Factory Design Pattern」 - 工廠模式出廠的時候啦!
當我們的物件會不斷擴充，可以把「生產物件」的地方統一起來管理
系統其他部分要用，一律透過這座「工廠」取得，避免物件的初始化片段四散在系統各處:

{% asset_img factory.jpg "Factory'Factory'" %}

讓我們先看一眼呼叫端的程式，可以被精簡到什麼程度:
```csharp
public static void DoJob(JObject json, JArray allLinks, JArray allOperators)
{
    Operator op = opOperatorFactory.Make(json.ToString());
    Result result = op.Execute();
    WriteLog(op.ComponentId, op.Title, result.Message);
}
```

恩...至於 web API 部分呢?
```csharp
public string SendMail(string parameters)
{
    Operator op = OperatorFactory.Make(parameters);
    Result result = op.Execute();
    return result.Message;
}
```

很驚人吧? 我們進一步重用 (reuse) 程式碼，重構 (refactor) 了所有「初始化」程式片段
到此，「冗長、難以閱讀的程式」以及「四散的初始化片段」全部解決!
讓我們看一眼「工廠」的核心程式碼:

#### OperatorFactory.cs
```csharp
public static class OperatorFactory
{
    public static Operator Make(string config)
    {
        JObject json = JObject.Parse(config);
        string componentId = json["componentId"].Value<string>();
        string title = json["title"].Value<string>();
        Operator op;

        switch (componentId)
        {
            case "SendMail":
                SendMailOperator sendMail = new SendMailOperator();
                sendMail.SetTitle(json["properties"]["title"].Value<string>());
                sendMail.SetSubject(json["properties"]["subject"].Value<string>());
                sendMail.SetContent(json["properties"]["content"].Value<string>());
                sendMail.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
                op = sendMail;
                break;
            case "SendSMS":
                SendSmsOperator sendSms = new SendSmsOperator();
                sendSms.SetSubject(json["properties"]["subject"].Value<string>());
                sendSms.SetContent(json["properties"]["content"].Value<string>());
                sendSms.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
                op = sendSms;
                break;
            case "QueryDatabase":
                DatabaseOperator database = new DatabaseOperator();
                database.SetSql(json["sql"].Value<string>());
                op = database;
                break;
            default:
                throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
        }

        op.SetTitle(json["properties"]["title"].Value<string>());
        return op;
    }
}
```

產出物件的程式片段，現在完全由「工廠」管理
更進一步的是，這座工廠只暴露抽象 (abstract) 的介面物件出去
這有什麼好處?
有了公版介面來控管，形塑了一道「隔離網」
隔離網之外，不會再因為節點種類，出現特異化的 `if` / `else` 片段，不會再有「改了這邊、漏了那邊」的情境出現
即便要擴充新節點，或異動特定節點，也只會收斂在專案中的某處......

「筱娍!」
「呃...恩...?」
「幫我多加個邏輯判斷用的節點」

重構完系統之後，現在的筱娍對擴充胸有成竹
第一步，筱娍在專案中「新增」了一個 class，叫做「IfElseOperator.cs」
{% asset_img extension-of-new-operators.jpg "Extension of New Operators'Extension of New Operators'" %}

第二步，讓 `IfElseOperator` 繼承抽象的 `Operator` 類別
並且!! 「只在」 `IfElseOperator` 中實作相關功能
```csharp
public class IfElseOperator : Operator
{
    private string _logicalSqlText;

    public override string ComponentId
    {
        get
        {
            return "IfElse";
        }
    }

    public void SetLogic(string logicSql)
    {
        _logicalSqlText = logicSql;
    }

    public override Result Execute()
    {
        // Implementation goes here.

        return new Result(true, "Logical operation executed");
    }
}
```

第三步，在工廠中多加一條 `IfElse` 類別的產出片段
```csharp
public static class OperatorFactory
{
    public static Operator Make(string config)
    {
        JObject json = JObject.Parse(config);
        string componentId = json["componentId"].Value<string>();
        string title = json["title"].Value<string>();
        Operator op;

        switch (componentId)
        {
            case "SendMail":
                SendMailOperator sendMail = new SendMailOperator();
                sendMail.SetTitle(json["properties"]["title"].Value<string>());
                sendMail.SetSubject(json["properties"]["subject"].Value<string>());
                sendMail.SetContent(json["properties"]["content"].Value<string>());
                sendMail.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
                op = sendMail;
                break;
            case "SendSMS":
                SendSmsOperator sendSms = new SendSmsOperator();
                sendSms.SetSubject(json["properties"]["subject"].Value<string>());
                sendSms.SetContent(json["properties"]["content"].Value<string>());
                sendSms.SetReceivers(json["properties"]["receivers"].Value<string>().Split(','));
                op = sendSms;
                break;
            case "QueryDatabase":
                DatabaseOperator database = new DatabaseOperator();
                database.SetSql(json["sql"].Value<string>());
                op = database;
                break;
            // New "If Else" operator
            case "IfElse":
                IfElseOperator ifElse = new IfElseOperator();
                ifElse.SetLogic(json["logic"].Value<string>());
                op = ifElse;
                break;
            default:
                throw new UnsupportedOperatorException("Unsupported operator ID: \"" + componentId + '"');
        }

        op.SetTitle(json["properties"]["title"].Value<string>());
        return op;
    }
}
```

簡單三個步驟，筱娍便完成了擴充
更甚者，所有用到工廠的地方，都不需要異動
這，就是物件導向原則中的「Open-closed principle」:「Open for extension, closed for modification」
意指程式碼要:
1. 夠「開放」，讓「擴充」可以非常容易達成
2. 夠「封閉」，讓「修改」只異動少量程式碼

Design Pattern 在筱娍的生命中出現後，同事頻頻被這項概念震驚，甚至帶起了一股「設計風潮」
公司內開始追求開發效率，將公司帶入嶄新的世代......

然而，安逸總是不會持續太久，挑戰總是不斷出現
過度熱衷於設系模式，公司的系統開始大量出現「過度設計」這種現象
過度去耦合、過度抽象化，搞得程式又開始沒有人看得懂，追溯程式碼也要繞好幾圈，才能找到「實作」到底在哪，就像走迷宮一樣......
在成長為真 ● 軟體公司前，公司正面臨可怕的過渡期。已經被封為「架構師」的筱娍，要如何面對嶄新的挑戰呢?

{% asset_img tactics.jpg %}

<center>全文完</center>

---

總結物件導向 / 設計模式的好處:
- 提升可讀性。類別若有精準切分，他們就像百科全書的索引般，引導設計師快速進入目標功能開始作業。「類別」本身，就是有助人腦理解的書籤
- 提高效率。程式碼大量重用，做異動時只須改一次、改一處，就全面生效。完全不需盤點相關程式碼，也進而避免漏改的情形
- 易於擴充。新增功能只需在一個地方「新增類別」並異動一點點程式碼，不需要東加西加，降低 bug 產生的機會
- 易於分工。任務的切分可以從 class 類別出發: 你做這個 class、我做那個 class，不再因為任務切分搞得面紅耳赤

再列下去你頭都要暈了? 到此為止吧! XD

# 統整 23 項設計模式
設計模式最初由「The Gang of Four」四人幫提出
他們統整使用情境成 23 種，並提出對應的程式碼結構
下面是表列出使用時機、使用範例，並附上範例程式碼供參考

設計模式，非常看重「使用情境」
在不對的情境下套用，只會搞得系統更難維護，就像筱娍在最後碰上的全新挑戰

| Pattern | Scenario | Example |
|--|--|--|
| [State Machine](https://github.com/john29917958/Design-Patterns/tree/master/StateMachine) | 當系統存在著多種狀態，這些狀態會彼此轉移，且狀態在未來可能會不斷擴充。 | 遊戲角色狀態: Idle -> Jump -> Idle -> Attack -> Idle。 |
| Facade | 某個子系統或 library 由許多子功能組成。要初始化它們非常繁瑣、或使用方式以及使用順序非常複雜。 | 有一款多人連線的服務叫做「Photon」。有經驗的人都知道 client - server 多人連線有多麼複雜、多麼麻煩。Photon 這套 library 便將複雜的 library code 用簡單的介面包起來。我們只要使用這簡單的介面，就可以實現強大的多人連線能力。 |
| [Singleton](https://github.com/john29917958/Design-Patterns/tree/master/Singleton) | 某物件在整個系統只會存在一個。| 一個太陽、一條對伺服器的連線。 |
| [Mediator](https://github.com/john29917958/Design-Patterns/tree/master/Mediator) | 許多子系統間彼此要交互合作，且子系統有機會在未來被擴充。 | 戰略遊戲中的兵營系統使用士兵系統、士兵系統又使用資源系統、資源系統又再使用 UI 狀態頁系統...... |
| [Bridge](https://github.com/john29917958/Design-Patterns/tree/master/Bridge) | 存在兩群物件。A 群物件可以使用 B 群裡的任意物件，且這兩群物件在未來會不斷被擴充。 | 遊戲中的法師可以使用任一種魔法 (火球術、急凍術、召雷術......)。 |
| [Strategy](https://github.com/john29917958/Design-Patterns/tree/master/Strategy) | 某段演算邏輯可以被動態替換，且未來有機會不斷擴充。 | 遊戲角色的數值計算邏輯，會跟據人物處於不同模式下，有不同的表現。 |
| [Template Method](https://github.com/john29917958/Design-Patterns/tree/master/TemplateMethod) | 某段邏輯的「步驟順序」非常雷同，而這些步驟的「內容實作」有機會不一樣 (可以被客製化)。 | 遊戲人物施放魔法前有一定的檢查順序: 法力是否足夠、冷卻時間是否結束、是否有任何敵人在施放範圍內 <- 施放範圍步驟對於全域系魔法沒有必要，一律回傳 true，進行全場攻擊。 |
| [Factory](https://github.com/john29917958/Design-Patterns/tree/master/Factory) | 某群物件的種類會不斷擴充，且創建物件的程序挺麻煩、或是創建方式有機會做替換。 | 需要建立精靈、蜘蛛、骷髏頭、狼人等怪物，且他們的數值在不同關卡、或不同玩家等級下，會有不同表現。 |
| [Builder](https://github.com/john29917958/Design-Patterns/tree/master/Builder) | 建立某樣物件的程序非常多，或非常複雜。 | 初始化一個遊戲角色需要設定非常多屬性，如基礎數值、數值計算方式、角色 AI 等等。 |
| [Flyweight](https://github.com/john29917958/Design-Patterns/tree/master/Flyweight) | 存在某些瑣碎的屬性，且這些屬性不會被異動，可以分享給所有物件。 | 遊戲角色的基礎數值包含力量、敏捷、智力、幸運......，這些數值可以共用給該角色的所有實例。 |
| [Composite](https://github.com/john29917958/Design-Patterns/tree/master/Composite) | 系統存在類似樹狀節點結構。 | 檔案系統中，包含資料夾與檔案兩種節點，且資料夾底下可以有數個資料夾或檔案節點。 |
| [Command](https://github.com/john29917958/Design-Patterns/tree/master/Command) | 當動作或操作行為可以被自由排序、佇列等待、取消、復原、重作或記錄等等。 | Adobe PhotoShop 的復原、重作功能以及步驟紀錄器面板。或是 WarCraft III 的兵營系統，可以排入許多生產士兵的命令。當然! 這些命令也可以被取消。 |
| [Chain of Responsibility](https://github.com/john29917958/Design-Patterns/tree/master/ChainOfResponsibility) | 當一個指令可以被多個處理者決定是否執行、實際執行、是否 pass 給下一位處理者等等。 | 公司中的公文傳簽流程、打電話到電信局的轉接專員 (或服務台直接掛你電話?) 等等。 |
| [Observer](https://github.com/john29917958/Design-Patterns/tree/master/Observer) | 當事件發生時，可以有一個至多個物件被通知。 | 社群網站的通知功能，或是遊戲中任何事件發生時，會通知多個「成就系統」檢查成就是否達成。 |
| [Memento](https://github.com/john29917958/Design-Patterns/tree/master/Memento) | 當我們需要輸出或是載入某個物件的狀態，又不希望暴露該物件太多屬性時。 | 現代化的編輯器在災難性閃退後，會在重開時自動載入出錯前的狀態。 |
| [Visitor](https://github.com/john29917958/Design-Patterns/tree/master/Visitor) | 我們需要順過某群物件來取得資訊做整理，或對每個物件做出操作。這些「操作」與「物件類型」會不斷被擴充。 | 在背包中移除所有耐用值歸零的裝備。裝備的種類會不斷被擴充，且未來可能會有其他操作，如取得總負重量、丟掉所有武器並展示每種武器的拋棄特效等等。 |
| [Decorator](https://github.com/john29917958/Design-Patterns/tree/master/Decorator) | 希望在穩定的系統功能中加入新的優化。 | 在一杯奶茶中加入珍珠、蒟蒻、芋頭、仙草等等。每加一種，價格會做相對應的更新。或是遊戲中的角色在帶上一至多個裝備後，會出現字首/字尾標記，角色數值也會跟著做客製化疊加。 |
| [Adapter](https://github.com/john29917958/Design-Patterns/tree/master/Adapter) | 當介面不一致的情形發生時 (Adapter 的功能就有如轉接頭)。 | 有時我們的系統要提供使用者「輸出文字檔」的功能，輸出的格式可以是純文字、JSON、XML 等等。網路上都有找到現存的序列化套件，但這些套件的使用方式 (介面) 全都不一樣。 |
| [Proxy](https://github.com/john29917958/Design-Patterns/tree/master/Proxy) | 在執行某項既有功能之前，我們希望在不同情況下插入前置處理動作。 | 載入遊戲角色未完成時，系統會先套入低階的預設模組給玩家看。在精緻模組載入完成後，角色的外觀會立即被替換成精緻版。 |
| [Iterator](https://github.com/john29917958/Design-Patterns/tree/master/Iterator) | 當我們需要輕易地遍歷某種物件時。 | 支援 `foreach` 語法的 C# generic `List<T>` 容器。Iterator 在現代化語言通常都有支援，因此放在表格尾端。 |
| Prototype | 當我們需要輕易複製，或參考範本建立全新物件時。 | Unity 遊戲開發引擎的 `Instantiate` 語法，從打包好的「prefab 預置物」創建一份遊戲物件到場景上。 |
| Interpreter | 當要解析一串符合特定語法的文字時。 | 解析文字是否符合定義的 regular expression。或者，程式語言的編譯器 (compiler)、直譯器也都是。 |
| [Abstract Factory](https://github.com/john29917958/Design-Patterns/tree/master/AbstractFactory) | 當有幾種物件需要根據不同環境，而建立不同實作出來時。 | UI 系統中的 banner、menu 選單、popup 對話框需要根據一般模式、節慶模式等作不同變化。 |