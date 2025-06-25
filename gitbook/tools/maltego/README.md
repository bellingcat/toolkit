---
description: >-
  Maltego Graph is an investigation platform that combines two things at once:
  (1) It acts as a search tool, and (2) It creates a graph establishing links
  between data you uncover from your search.
---

# Maltego Graph

## URL

[https://www.maltego.com/](https://www.maltego.com/)

## Description

Maltego Graph is both a search tool and a visualization tool. It can search for information and connect the pieces to show you how they are related. It's like a data map that helps you see the bigger picture of your investigation. This software allows a researcher to start with a particular item of information, such as an alias, an email address, phone number, company name, or IP address, and use this information as the basis to collect other information.

{% hint style="info" %}
We tested Maltego Graph CE (Community Edition) version for this toolkit description.
{% endhint %}

_**How does it work?**_

1\. It is a centralized search tool

In theory, Maltego Graph gathers information about a research subject without the researcher having to leave the software or go to another platform. It already integrates into the tool free publicly available sources or data from commercial vendors. These are what Maltego calls “data sources” which are like pre-packaged information catalogs. For instance, you can have data sources from FlightAware – which comprises digital aviation data. Or a data package from Pipl, which comprises personal details, social media, and contact info. These “data sources” are available to install in what it calls “Transform Hub.” This Transform Hub is a universe of data you can search in.

To perform searches, Maltego Graph needs a good list of data sources in the hub to mine information from. The more data sources you have in your software, the better your search results are. More importantly, you need to have the right category of data sources to get good results. For example, if you are doing social media research, it is recommended that you install or have access to data sources that can mine Facebook, Instagram, TikTok, VK, OK, Twitter, Telegram, etc. Other examples of pre-packaged data sources are Bing, Google, TinEye, and LittleSis.

Begin with a piece of information you know (called “Entity” – which can be a name, email address, or phone number). Then, right-click to “run a transform” based on that information. This process uses a code, turns this Entity as if it were a search term, and finds it in multiple sources simultaneously.

For example, if you want to know about an individual whose alias is “Mr.A” , you will begin by entering that known Entity (in this case, the alias “Mr.A” ) -> right-click on it and request Maltego to “run a Transform”. -> You can ask the tool to look for that search term in one or more data sources. More importantly, you can specify what kind of information you are looking for. Running a transform on an alias can produce a name , a phone number, address, or more known aliases.

The researcher can hover over each search result returned. This will produce an “overview” window with detailed information about that search result.

2. It is a lead generator and data pivot tool

In Maltego Graph, the search results produced by a transform act as a new lead or linking evidence. A researcher can use this new information to collect other information. If, for instance, a transform on the alias “Mr.A” shows it is associated with an email address. The researcher can use that email address, run a transform specifically looking for a name, and use that name to find a location.

3. It is a visualization and linkage tool

When running a series of transforms in Maltego, the relationship between the newly discovered data and the starting data is automatically plotted in a graph for link analysis.

_**What problem does it solve?**_

1\. Maltego Graph solves a time management problem. It reduces the number of steps an investigation takes from discovery to link analysis. Instead of going to each individual website to search, the researcher can mostly search for info all in one spot. It gathers information and plots the data in real-time.

2\. Maltego Graph also solves an efficiency problem. A beginner researcher usually searches for one piece of information at a time. On Maltego Graph, a beginner researcher can search for two or more pieces of information (or "Entities") at a time.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Maltego has both free and paid editions. They all include [Maltego Graph](https://www.maltego.com/graph/):

_**Maltego CE**_ (Community Edition):

* This is a partially free version meaning that some data sources come for free while others require access through external APIs which are paid. Find a list of available data sources for Maltego CE [here](https://www.maltego.com/transform-hub/?q=available-for-licenses-maltego-community). The free data sources have a limit of transform requests per month, and may require individual subscriptions to those data providers
* Limitation: Maximum of 10,000 entities per graph and maximum amount of results per single transform is 12.
* Learn more about this plan [here.](https://www.maltego.com/maltego-community/#maltegoEssentials)

_**Maltego Professional**_

* See the available data sources for this plan [here](https://www.maltego.com/transform-hub/?q=available-for-licenses-maltego-pro).
* Learn more about this plan [here](https://get.maltego.com/maltego-professional).

_**Maltego Organization**_

* Cost: Requirement to contact Maltego to learn more
* Learn more about this plan [here](https://get.maltego.com/maltego-organization).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

## Requirements

Depending on the product, users can either sign up on the Maltego website (for Maltego CE) or they need to purchase a license via their web shop (Maltego Professional) or by contacting Maltego directly (Maltego Organization), see [here](https://www.maltego.com/pricing-plans/).

## Limitations

Maltego's limitation for open source researchers, regardless of which editions, are:

1. **Steep learning curve:** Maltego is designed for people with some technical background. This background helps the user understand how to manipulate its features and take full advantage of them. It also has jargon and specific terminology that requires prior familiarization. However, Maltego's documentation does a good job defining most of these terminologies. In addition, transform requests sometimes produce error codes that may be a challenge to understand without a background in command line tools. Understanding terminology and features requires time and perhaps a live or in-person training. Note: As of May 2024, Maltego launched their "Maltego Academy" which has a series of short training videos for beginners ([https://www.maltego.com/blog/maltego-academy-learn-how-to-be-a-top-investigator/](https://www.maltego.com/blog/maltego-academy-learn-how-to-be-a-top-investigator/)). They also now have a monthly recurring trainings on on-demand topics in which participants can ask questions live ([https://academy.maltego.com/live-sessions](https://academy.maltego.com/live-sessions.)).
2. **Requires understanding of data sources:** To get the full benefit of Maltego, the user needs to understand what data he is looking for and which ones will give him the best results. In this case, it requires some familiarity with the data sources which users place their queries from. A valuable list of research leads are only as good as your data source. For instance, if the user has access to some social media accounts, but not to some others, then results can be limited.
3. **Significant Set Up and Preparation:** Using Maltego Transforms requires significant setup and preparation. It is not an “out-of-the-box” instant solution. Based on our tests, users must install the data sources (both free and commercial) they intend to use, many of which require API keys, even for free tiers. This means users need to manually request and manage credentials for each provider. [Additionally, users who need higher query limits or access to premium datasets may need to subscribe to Maltego Data Pass or acquire separate licenses for individual data sources.](https://docs.maltego.com/en/support/solutions/articles/15000058711-data-pass-and-connectors-for-maltego-community-edition-version-4-8-0-?utm_source=chatgpt.com#overview-0-0)
4. **Maltego CE users might need to supplement their investigations with alternative methods:** Community Edition users have a cap on how many times they can request a transform from a data provider. Most providers put the limit on 15 to 20 requests per month. This limits the capability to data pivot within the software unless you upgrade your subscription to various data sources. In this case, one may want to revert to other means, like Google dorking, using web scrapers, and researching on individual social media platforms.
5. **Parsing search results can be tricky:** Maltego sometimes returns very generalized results. If you are searching a name, i.e. Graham Wilson, it will produce results containing either both "Graham Wilson" or results with just "graham" or just "wilson."
6. **Price:** Maltego can be pricey, especially for individual, beginner open-source researchers, freelancers, or non-profit organizations. Users may need to additional subscriptions to data sources to equip investigations with the right set of data. Some Maltego users may find that a maximum of 12 transform results per request is too limited to get a workable investigative lead. This means the researcher must wait after a month to get a new quota on transform requests. A cap on transform results plus a cap on data sources may not always provide the desired results. And may, for some, be time-consuming.

Overall, Maltego allows investigators to visualize connections between different pieces of information, making it easier to identify patterns and relationships. Unlike other tools, it automatically maps links between data points if the information is available. While transforms help gather data, they require manual effort to ensure sources are accurately recorded. Every data point is carefully linked through defensible relationships, ensuring a clear, traceable investigative process. However, keep these limitations in mind when testing the tool.&#x20;

## Ethical Considerations

1. **Misuse of sensitive information:** Maltego vets all its buyers and webinar attendees to make sure they don’t have access to sensitive information liable for misuse. They also do not sell “to individuals or organizations in high-risk countries.” In addition, they evaluate motivations of Enterprise buyers and use case prior to approval.
2. **Use of breached data:** Users must check with company policy or laws and regulations to see if they are allowed or are comfortable working with information available as a result of a security breach.
3. **Data privacy:** Users should be mindful of confidential personal information, consent and risks of doxing.
4. **Minimization of harm:** Users should be mindful about minimizing harm to people or groups affected by investigations done by Maltego.

## Guide

Maltego Essentials (offered by Maltego): [https://www.youtube.com/watch?v=ceQhIBKFp2A\&list=PLfRX-xJAc2yz6CjQVQuogJeCBoy8HbCOR](https://www.youtube.com/watch?v=ceQhIBKFp2A\&list=PLfRX-xJAc2yz6CjQVQuogJeCBoy8HbCOR)

Maltego an online learning platform called [Maltego Academy ](https://academy.maltego.com/home)(only accessible with a Maltego ID).

## Tool provider

Maltego Technologies, Germany

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
