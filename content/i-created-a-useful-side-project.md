---
title: I Created a Useful Side Project
image:
imageMeta:
  attribution:
  attributionLink:
featured: true
authors: 
  - john
date: Sun Oct 25 2020 15:24:57 GMT-0400 (Eastern Daylight Time)
tags:
  - new
---

As a developer I have created countless side projects that didn't go far or weren't very useful.


I think the most functional among them [allows you to translate text into covefe](https://covfefe.coffeeintocode.com) 


Recently I have hacked something together that solves a problem.

All three of my kids are competitive swimmers for our local Y swim team. 

Due to COVID, we are only having virtual meets. We are competing in invitationals but
each team is swimming at its home pool. Which has brought up the problem of viewing results.
Usually results are published to active.com's Meet Mobile software, its the defacto app
for swimming results. I believe they even have a partnership with Hytek who creates the Meet Manager software. 
Because we now have multi-site meets, results aren't aggregated witht he meet host until later.

For all the meets we host, we publish our results using Hytek's meet manager software, 
which has the ability to upload results to a static site via FTP. The format unitilizes
static html with frames:

```html
<html>
  <head>
    <title>Meet Results: 2020 CFY Halloween Invitational-SPY</title>
  </head>
  <frameset cols="250,*">
    <frame name="index" src="evtindex.htm" />
    <frame marginHeight="1" name="main" src="main.htm" />
  </frameset>
</html>
```

While this works great for desktop it is not mobile friendly 


![Hytek live results sample](/images/live_results.png )  
