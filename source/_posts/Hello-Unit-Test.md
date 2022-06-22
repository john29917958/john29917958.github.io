---
layout: hello unit test
title: Hello! Unit Test
date: 2018-04-28 19:50:36
tags: programming
category: Programming
---
{% asset_img Hello-Unit-Test.jpg "Hello! Unit Test'Hello-Unit-Test.jpg Hello! Unit Test'" %}

Actually, it’s the first time I'm surprised and benefited from unit tests.
Recently, I added a new feature to a project in my company. After writing pseudo code for main logic and had it reviewed with my leader, seems like it’s time to jump in and code. For me, I prefer to have the feature tested before releasing it  for user acceptance tests.

<!--more-->

## Strategy
To achieve this, I separated the main logic with database related codes. An entity class was created for storing the raw data queried from database. As a result, the flow of the program is:
Database -> database related codes - (isolation is here) -> entity object -> main logic functions.
With such seperation, I can test main logic functions right away by faking the entity object without taking any database connection.

## Writing Unit Tests Is Also The Process Of Debugging
As most mature engineers say, writing unit tests is also a process of debugging. And yes, numerous bugs fixed right after I run the unit test cases I wrote. More critical test cases I added, more fixes I applied and more trusted my code is. After several red -> green process, the main logic was completed.

## Surprised
As a general project for several sites, it needs to switch how it queries data. For me, I didn’t have enough buffer for running integration tests before releasing the beta version. As expected, program failed right 	after the site run the deployment file I gave them. I then asked site-engineer to provide sample inputs and we dived into it and fixed all database query related bugs. After all database related bugs fixed, I had unit test cases run to ensure no broken main logic code exists.
Surprisingly, the release of 2nd. beta version succeeded immediately without any modification of main logic codes.

## Unit Test Or Not?
In my opinion, good unit tests can benefit both code quality and code correctness. About code quality, it’s really hard to write unit tests for highly coupled code since “faking” (stub) related objects for test environment control is pretty difficult. As for code correctness, once test cases are written, we can have it run again and again every time the code changed to ensure nothing’s broken.
The only drawback of writing unit test I can think of is, it needs to be maintained. For example, all unit test cases I’ve written require corrections after I change the parameters of my main logic functions. Even so, for code quality and code correctness concern, it’s worth it, I think.
Some day in the future, I should be benefited from these tests again once code changed.