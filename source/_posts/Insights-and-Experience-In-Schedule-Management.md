title: Insights and Experience In Schedule Management
date: 2016-05-21 22:15:59
tags: management
category: Programming
---
{% asset_img deadline.png "Wait me my dear deadline~~~'Wait me my dear deadline~~~'" %}
I believe you should have read a lot of diaries or articles that mention about working overtime, staying at office until 11, 12 PM., even 3, 4 AM. You may notice that lots of people complained about they're suddenly assigned many extra works which result in that they needed to spend extra time to finish it. They may get a unreasonable due date. They may need to complete bunch of tasks in a extremely tight schedule.
<!--more-->
In general, if the schedule is tight with lots of tasks to be completed, put additional staff should be a good choice. However, this may be a bad idea in software industries. The book [The Mythical Man-Month: Essays on Software Engineering](https://en.wikipedia.org/wiki/The_Mythical_Man-Month) by [Fred Brooks](https://en.wikipedia.org/wiki/Fred_Brooks) describes and explains it very well.
For me, I experienced two tight schedules: one for one month and another for only ten days. Here, I want to share my experience with you. Hope this helps when you are a leader of a software project and are facing with a situation described above.

## Avoid Adding A Lot of Manpower
In software development process, adding a lot of additional manpower when schedule is tight is dangerous.

### Background
I can clearly remember that our lab was facing with a terrible schedule. We needed to meet a one month deadline. At that time, I and my partner are two freshmans of OO Lab. My boss (my advising professor) added totally four people as developers into this C# project: me, my lab partner, and additional two university students. In addition, two university students were added as Quality Assurances. The interesting thing is, all of these additional manpower are completely new to this project, also new to C# and testing, but we're about to stick together and try our best to meet the terrible deadline.
As a full stack developer of [NCU Service Desk](https://sd.cc.ncu.edu.tw/), I know that developing a product is really **not** that easy. You need to think what user needs, you need to design the user interface, you need to design the structure of modules, you need to design database schema (not required by this C# project), you need to give implementations, you need to test if your code acts correctly, you need to handle exceptions to deal with unexpected user behavior, you need to pay some time to review and communicate what you have done with your customer / PM. Because I understand a little bit about the difficulty of developing a real product, I wrote an e-mail to my advising professor, describing how dangerous it is, asking for postponing the deadline. Unfortunately, I made my professor unhappy about this. He had a Skype with me and telling me that under this situation, you (me) should try your best to meet the deadline. You should complain only after you tried really hard but finally fail to complete it on time. Furthermore, how hard your task is? Under this situation, we have a teammate (me) keep complaining about the terrible schedule, how can we be successful?
Alright, what I could say that time? I told my professor there's no problem for me to meet the deadline at the end. The result is, I paid every nights on it, even weekends. I usually work until midnight. If there're bugs right before the demonstration days, I jumped in and fixed it, although the bugs weren't made by me. I spent my health to try to ensure the success of project.
Also, we needed to teach and train the two QA students in writing test cases, designing test cases, and applying their test cases to our product. Apart from acting as a developer, we needed to act as a mentor as well. Furthermore, we sent e-mails to communicate with the company ourselves, too. We learned C#, we traced code, we modified / expanded / wrote new codes, we tested codes, we review codes from university students, we replied e-mail to company, we taught students how to design and apply test cases. We needed to handle so many tasks at the same time. So! how can you expect the quality of the codes I wrote? A lot of ugly type castings, a lot of workarounds were produced by me. I really felt ashamed! My brain fought with what I've actually done because I think codes cannot be written in this way.

### Insight
Because of adding so many people into this project, we needed to pay a lot of extra effort on discussing interfaces of modules and how exactly our modules communicate with each other.
In general industries, putting extra manpower works because the communications between workers are easier. However, communication in software industries is not that easy at all. In general industries, Civil Engineering for example, what design diagram shows is what the final product exactly looks like. Doors, windows, walls, and so on. What drawn on the design diagram can be easily related with the goods in real life. But! it is totally different in software industries. How would you explain the structure of the code you wrote? You may use [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) for help, but the question is, does the drawn UML diagram looks exactly as same as the code that you've finally produced? No! Codes are not rectangles or lines. So even if you use professional UML tool, engineers still need to convert the shape drawn on the UML diagram into codes. This small and easy example indicates the communication effort in software industries is much more higher than general industries. Programming needs ability of abstraction very much. Because we need to transform the design diagram or design documents into reusable codes, but codes are completely different from the design diagrams or documents, thus make communication difficult in software industries. As a result, adding many human resources into a project will cause the communication effort raises incredibly. So if you are a leader of a software project, maybe you should think twice before you decided to add large amount of additional people for help, especially when the deadline is near or tight.

## Try To Give Reasonable Schedule And Avoid Compressing It
Good project managers take design, test, review, change, and implementation into account for schedule estimation. Also, they do reserve some extra buffers for unforeseen situations.

### Background
Recently, I'm responsible of a real time web application prototype. This prototype needed to be written in code instead of using some prototyping tools such as [InVision](https://www.invisionapp.com/) and [POP](https://popapp.in/) (I did not know why...). And, I am the only one person who is responsible of it. At first, the company as my customer asked for the schedule estimation. So I scanned over the PDF prototype document, split and wrote down all tasks to be completed, balanced it with my school homeworks and exams, code implementation of another project, and tasks from teaching assistant, then did some estimation. Because this project was urgent, so I discarded the testing and extra buffers then replied to them that I need at least one month for all feature completion. But after several days, they suddenly told me that I need to finish it within about three weeks. The result is, after deducted all other time buffer for stuffs described above, and additional three days for my unforeseen sick leave, I only had ten days buffer for completing the web APP prototype.

### Insight
Mess code and dead code. A lot of workaround. If this prototype APP needs to be modified into production level web application, what I want to say is: It must be a lot of pain. During the implementation phase, we still had meetings. In each meetings, they did propose a lot of modification. Some of them make sense while the other doesn't. Furthermore, some made the APP inconsistent. So I needed to deal with these changes, inconsistent modifications, and chasing the terrible deadline at the same time. To met the deadline they gave, I put large amount of workarounds into my codes thus made it difficult to be converted into a production level web application (shame on me... = =). So if you are a leader of a software project, maybe you should think twice before you decided to compress the schedule (especially compress it a lot). It may cause your product becomes an unmaintainable trash, leading this project to the road to death.

## Final Words
I do have these experience just because it happened on me. I had my skill level and background at that time. Maybe it won't be a problem for you or your team. Hope my experience do provide some help for you to make decisions to your team. If you have any insights to the schedule management, or if you think some of my descriptions are unreasonable, please comment on this article and I'll appreciate your share very much :)