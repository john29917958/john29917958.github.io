title: Object-Oriented Practical Application
visible: show
date: 2021-05-08 20:59:41
tags: programming
category: Programming
---
在台積工作也三年了，經手了些專案。有些要在歷史悠久、用老舊技術寫出的高雜度系統中，快速擴充先進的功能；有些則是發起全新的專案，並要在短時間內完成。這篇算是舉個最經典的核心概念與方法，分享如何在高壓或高亂度系統下迅速擴充，達到主管期望並守護系統品質的實際案例，讓大家作為參考。

<!-- more -->

# 為什麼需要物件導向 (軟體工程)?

軟體算是起手非常快速又便宜的產業。 有想法、有創意，只要用手邊的電腦，裝好免費工具，就可以開始迅速地揮灑，將想法落實為產品。 軟體特性也很有趣，不用像製造業一直投原料跟出貨、運貨。軟體一寫完，可以立刻無限複製甚至發行全球。往後也只會對「同一個」產品做擴充、優化，或是往外延伸周邊服務。想起來令人熱血沸騰，但我們沒有見到的，是軟體維護的無盡深淵。
他抽象、他難懂，全是一些令人費解的代碼天書。例如建築工程有建築圖，可以讓人一眼看出成品的樣貌，但軟體沒辦法。這邊……光溝通軟體架構就是個問題。另外也因為軟體起手速度太快太便宜，往往讓人忽略了，軟體的變更成本，會隨著技術債累積呈指數上升 (不是線性成長吶！)

{% asset_img technical-debt.png "Technical Debt'Technical Debt'" %}
{% asset_img extension-hell.png "Extension Hell'Extension Hell'" %}

其實做到現在，發現物件導向的核心莫過於：
1. 根據需求，控制程式碼複雜度，將變動收斂到單一位置，提升變更效率
2. 精準職責切分，讓人腦易於辨識與理解
3. 定義介面，簡化溝通，促進團隊合作

講歸講，下面來看看實際於戰場上的應用吧！

# 物件導向實戰案例

假設今天我們要發起一個系統，他可以像 flow chart 一樣拉流程圖。而每個流程圖的「節點」都有特殊功能，如寄信、發簡訊、查詢資料庫、串接某個網頁服務等等……我們該怎麼設計？
第一步，是根據需求找出擴充點。以這個系統來說，有一個很明顯的擴充點是「節點」的種類。

{% asset_img flow-operators.png "Flow Operators'Flow Operators'" %}

我們可以預想，往後會有其他節點的衍生諸如印出訊息、寫入資料庫、輸出檔案等等。當潛在擴充出現，我們可以用介面或是抽象類別，將變動保護、收斂起來，與外界或核心程式碼隔絕。

{% asset_img interface-and-implementation.png "Interface and Implementation'Interface and Implementation'" %}

一旦潛在的擴充被收斂，不管要新增幾種節點，其他核心程式碼都不需要變更。而且，新功能的實作我們僅要「新增」一個 class 即可完成。

Execution loop:
```csharp
foreach (string operatorId in operatorIds)
{
	Operator operator = OperatorFactory.Make(jsonData, systemParameters);
	Dictionary<string, object> dataPack = operator.Execute();
	MergeParameters(dataPack, systemParameters);
}
```

Factory - Operator creation:
```csharp
public class OperatorFactory
{
	public static Operator Make(string jsonData, Dictionary<string, object> systemParameters)
	{
		JsonConfig config = JsonConvert.DeserializeObject<JsonConfig>(jsonData);
		string operatorId = config.OperatorId;

		switch (operatorId)
		{
			case "SendMail":
				return new SendMail((MailAddress[]) config.Param["recipients"], (MailAddress[]) config.Param["ccList"], config.Param["subject"], config.Param["mailBody"], systemParameters);
			case "SendSMS":
				return new SendSMS(/*...*/);
			// Extension point here...
			default:
				throw new ArgumentException("No such operator: " + config.OperatorId);
		}
	}
}
```

Operator Implementation:
```csharp
// The base interface-level abstract class
public class Operator
{
	protected Dictionary<string, object> Parameters;

	protected Operator(Dictionary<string, object> parameters)
	{
		Debug.Assert(parameters != null);
		Parameters = parameters;
	}

	public abstract void Execute();
}

// Creates a new class for extension without modifying any code
public class SendMail : Operator
{
	private MailAddress[] _recipients;
	private MailAddress[] _ccList;
	private string _mailBody;

	public SendMail(MailAddress[] recipients, MailAddress[] ccList, string subject, string mailBody, Dictionary<string, object> parameters) : base(parameters)
	{
		Debug.Assert(recipients != null && recipients.Length > 0);
		Debug.Assert(!string.IsNullOrWhitespace(mailBody));

		_recipients = recipients;
		_ccList = ccList;
		_mailBody = mailBody;
	}

	public override void Execute()
	{
		SmtpClient client = new SmtpClient(GetCompanySmtpHost());
		MailMessage message = new MailMessage(GetCompanyNoReplySender(), recipients);
		message.Subject = subject;
		message.Body = mailBody;
		client.SendAsync(message);
	}
}
```

這只是一個非常簡單，也經典的物件導向實作範例。現實生活中，遇到的問題不同，設計方法也不一樣~

# 伯樂與千里馬
這部分跟物件導向就沒什麼關聯了，單純是個人的一些心得感想。我看過一些程式高手，包括以前的自己，都會有一股傲氣。不太能夠聽進別人的意見，也比較自我為中心。
這是一種極需改進的缺點。
一匹千里馬，不一定會有賞識他的伯樂，不一定會得到良好栽培，不一定會有優質的舞台發揮。維持這種自傲，更是難以讓伯樂接納你並提拔你，讓你成為富有影響力的成熟人物。
況且事實上，世界上一定有比自己強的人，且厲害的地方也不盡相同。商場如戰場，談的是合作。只有虛懷若谷，可以團隊合作的人物，才能互補相輔相成，幹出一番大業。兩匹無法合作的獅子，做不出成績。兩匹合作無間的獅子，會創造出令人難以置信的成果。
謙虛代表值得提拔，值得在對的時機得到伯樂的賞識；謙虛代表合作，發揮一加一遠大於二的超群效果。

> Be Humble, and Be Confident In Yourself