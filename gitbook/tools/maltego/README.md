---
description: >-
  Maltego is an investigation platform that combines two things at once: (1) It
  acts as a search tool, and (2) It creates a graph establishing links between
  data you uncover from your search.
---

# Maltego

## URL

[https://www.maltego.com/](https://www.maltego.com/)

## Description

Maltego is both a search tool and a visualization tool. It can search for information and connect the pieces to show you how they are related. It's like a data map that helps you see the bigger picture of your investigation. This software allows a researcher to start with a particular item of information, such as an alias, an email address, phone number, company name, or IP address, and use this information as the basis to collect other information.           &#x20;

&#x20;_**How does it work?**_

&#x20;1\.     It is a centralized search tool

In theory, Maltego gathers information about a research subject without the researcher having to leave the software or go to another platform. It already integrates into the tool free publicly available sources or data from commercial vendors. These are what Maltego calls “data sources” which are like pre-packaged information catalogs. For instance, you can have data sources from FlightAware – which comprises digital aviation data. Or a data package from Pipl, which comprises personal details, social media, and contact info. These “data sources” are available to install in what it calls “Transform Hub.” This Transform Hub is a universe of data you can search in.

To perform searches, Maltego needs a good list of data sources in the hub to mine information from. The more data sources you have in your software, the better your search results are. More importantly, you need to have the right category of data sources to get good results. For example, if you are doing social media research, it is recommended that you install or have access to data sources that can mine Facebook, Instagram, TikTok, VK, OK, Twitter, Telegram, etc. Other examples of pre-packaged data sources are Bing, Google, TinEye, and LittleSis.

Begin with a piece of information you know (called “Entity” – which can be a name, email address, or phone number). Then, right-click to “run a transform” based on that information. This process uses a code, turns this Entity as if it were a search term, and finds it in multiple sources simultaneously.

For example, if you want to know about an individual whose alias is “Mr.A” , you will begin by entering that known Entity (in this case, the alias “Mr.A” ) -> right-click on it and request Maltego to “run a Transform”. -> You can ask the tool to look for that search term in one or more data sources. More importantly, you can specify what kind of information you are looking for. Running a transform on an alias can produce a name , a phone number, address, or more known aliases.

The researcher can hover over each search result returned. This will produce an “overview” window with detailed information about that search result.

2. It is a lead generator and data pivot tool

In Maltego, the search results produced by a transform act as a new lead or linking evidence. A researcher can use this new information to collect other information. If, for instance, a transform on the alias “Mr.A” shows it is associated with an email address. The researcher can use that email address, run a transform specifically looking for a name, and use that name to find a location.

3. It is a visualization and linkage tool

When running a series of transforms in Maltego, the relationship between the newly discovered data and the starting data is automatically plotted in a graph for link analysis.&#x20;

_**What problem does it solve?**_

1\.     Maltego solves a time management problem. It reduces the number of steps an investigation takes from discovery to link analysis. Instead of going to each individual website to search, the researcher can mostly search for info all in one spot. Maltego gathers information and plots the data in real-time.

2\.     Maltego also solves an efficiency problem. A beginner researcher usually searches for one piece of information at a time. On Maltego, a beginner researcher can search for two or more pieces of information (or "Entities") at a time.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Maltego for individuals has both free and paid editions.

_**Maltego CE**_ (Community Edition) – is a partially free version.

·       This is partially free because some data sources are free, and some require subscriptions.

·       This version is for those who want access to Maltego’s transform servers but not professionally.

·       Maximum of 10,000 entities per graph

·       Maximum amount of results per single transform is 12.

·       No access to tech support, but have email support. &#x20;

·       Have access to Standard Transforms, but not commercial ones. ([https://www.maltego.com/transform-hub/#transform-hub](https://www.maltego.com/transform-hub/#transform-hub))

·       Have free access to certain data sources IF owner has an API key(s) for various data providers. &#x20;

·       Has graph export and import features.

·       Has shared graphs for collaborative work.

·       Free data sources have a limit of transform requests per month, and may require individual subscriptions to those data providers

&#x20;_**Maltego Pro**_ – EUR 1.099, 00 / year

·       This version is intended for commercial use

·       Maximum of 1,000,000 entities per graph

·       Maximum amount of results per single Transform is 64,000

·       Has Access to commercial data

·       Has both dedicated technical support and email support

·       Has graph export and import features

·       Has shared graphs for collaborative work

For organizations, there are two editions: Maltego Enterprise CTI Package and Maltego Enterprise OSINT Package

&#x20;_**Maltego Enterprise CTI** –_ (Must contact Maltego for price quote)

&#x20;·      Intended for organizations working on Cyber Threat Intelligence

·       Data sources integrated in this edition are tailored specifically for cyber threat investigations

·       Maximum of 1,000,000 entities per graph

·       Maximum amount of results per single Transform is 64,000

·       Has Access to Commercial Data

·       Includes live and online training

·       Can be used on multiple devices

&#x20;_**Maltego Enterprise OSINT** –_ (Must contact Maltego for price quote)

&#x20;·      This edition is intended for governments or organizations doing trust and safety investigations

·       Includes access to “OSINT Profiler” – a web-based tool that non-technical users can use to search different personal data

·       Includes data tailored for researching persons of interest: data on identities, social media networks, company records, and breached data

·       Maximum of 1,000,000 entities per graph

·       Maximum amount of results per single Transform is 64,000

·       Has Access to Commercial Data

·       Includes live and online training

·       Can be used on multiple devices

_**Data Pass Subscriptions**_ (Must contact Maltego to get a price quote)

·       Pro and Enterprise users can subscribe to a Data Pass, which includes access to various data sources tailored to specific investigation needs. &#x20;

·       There is a Data Pass available for Person of Interest data, Cryptocurrency data, and more.

## &#x20;Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

## Requirements

Maltego CE requirements:

1. Register with a user name and password at Maltego.com&#x20;
2. Download the software from the website
3. Two-Factor Authentication&#x20;
4. Data provider subscription (if needed) &#x20;
5. API Keys

Maltego Pro requirements:

1. Purchase of commercial license
2. Download the software from website
3. Data provider subscription (if needed )
4. API Keys

Maltego Enterprise requirements:

1. Must work for an business/organization/government&#x20;
2. Purchase of commercial license
3. Advanced technical background

## &#x20;Limitations

Maltego's limitation for open source researchers, regardless of which editions, are:

1. **Steep learning curve:** Maltego is designed for people with some technical background. This background helps the user understand how to manipulate its features and take full advantage of them. It also has jargon and specific terminology that requires prior familiarization. However, Maltego's documentation does a good job defining most of these terminologies. In addition, transform requests sometimes produce error codes that may be a challenge to understand without a background in command line tools. Understanding terminology and features requires time and perhaps a live or in-person training. Note: As of May 2024, Maltego launched their "Maltego Academy" which has a series of short training videos for beginners ([https://www.maltego.com/blog/maltego-academy-learn-how-to-be-a-top-investigator/](https://www.maltego.com/blog/maltego-academy-learn-how-to-be-a-top-investigator/)). They also now have a monthly recurring trainings on on-demand topics in which participants can ask questions live ([https://academy.maltego.com/live-sessions](https://academy.maltego.com/live-sessions.)).&#x20;
2. **Requires understanding of data sources:** To get the full benefit of Maltego, the user needs to understand what data he is looking for and which ones will give him the best results. In this case, it requires some familiarity with the data sources which users place their queries from. A valuable list of research leads are only as good as your data source. For instance, if the user has access to some social media accounts, but not to some others, then results can be limited.
3. **Maltego CE users might need to supplement their investigations with alternative methods:** Community Edition users have a cap on how many times they can request a transform from a data provider. Most providers put the limit on 15 to 20 requests per month. This limits the capability to data pivot within the software unless you upgrade your subscription to various data sources. In this case, one may want to revert to other means, like Google dorking, using web scrapers, and researching on individual social media platforms. &#x20;
4. **Parsing search results can be tricky:** Maltego sometimes returns very generalized results. If you are searching a name, i.e. Graham Wilson, it will produce results containing either both "Graham Wilson" or results with just "graham" or just "wilson."
5. **Price:** Maltego can be pricey, especially for individual, beginner open-source researchers, freelancers, or non-profit organizations. Users may need to additional subscriptions to data sources to equip investigations with the right set of data. Some Maltego users may find that a maximum of 12 transform results per request is too limited to get a workable investigative lead. This means the researcher must wait after a month to get a new quota on transform requests. A cap on transform results plus a cap on data sources may not always provide the desired results. And may, for some, be time-consuming.&#x20;

## Ethical Considerations

1. **Misuse of sensitive information:** Maltego vets all its buyers and webinar attendees to make sure they don’t have access to sensitive information liable for misuse. They also do not sell “to individuals or organizations in high-risk countries.” In addition, they evaluate motivations of Enterprise buyers and use case prior to approval.&#x20;
2. **Use of breached data:** Users must check with company policy or laws and regulations to see if they are allowed or are comfortable working with information available as a result of a security breach. &#x20;
3. **Data privacy:** Users should be mindful of confidential personal information, consent and risks of doxing.
4. **Minimization of harm:**  Users should be mindful about minimizing harm to people or groups affected by investigations done by Maltego.&#x20;

## Guide

Maltego Essentials (offered by Maltego): [https://www.youtube.com/watch?v=ceQhIBKFp2A\&list=PLfRX-xJAc2yz6CjQVQuogJeCBoy8HbCOR](https://www.youtube.com/watch?v=ceQhIBKFp2A\&list=PLfRX-xJAc2yz6CjQVQuogJeCBoy8HbCOR)

## Tool provider

[Paterva](./#url)

Pretoria, South Africa&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |

