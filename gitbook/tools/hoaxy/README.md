---
description: >-
  Hoaxy is a web-based search and visualization tool. It tracks the spread of
  news and information on Bluesky and X (Twitter).
---

# Hoaxy

## URL

[https://hoaxy.osome.iu.edu/](https://hoaxy.osome.iu.edu/)

## Description

{% hint style="info" %}
NOTE: Hoaxy was [first developed in 2016](https://www.researchgate.net/publication/301841797\_Hoaxy\_A\_Platform\_for\_Tracking\_Online\_Misinformation). This toolkit description tested the most recent version and its features to date.&#x20;
{% endhint %}

Hoaxy assists in unraveling the complex web of information dissemination online, particularly in X (Twitter) and Bluesky. It primarily addresses the problem of misinformation and disinformation spreading rapidly on social media platforms. Users can search for a particular topic or keywords on either platform, and it will automatically generate a graph showing the spread of information.&#x20;

### What problem does it solve?

The tool providers saw that [false claims spread faster than fact-checked claims](https://www.researchgate.net/publication/301841797\_Hoaxy\_A\_Platform\_for\_Tracking\_Online\_Misinformation)(p.1). They described the structure of information spread as follows:  [“Structural features of the information exchange networks underlying social media create peculiar patterns of information access. Online social networks are characterized by homophily, polarization, algorithmic ranking, and social bubbles, information environments with low content diversity and strong social reinforcement” (p.1)](https://www.researchgate.net/publication/301841797\_Hoaxy\_A\_Platform\_for\_Tracking\_Online\_Misinformation). Social media networks often show us information from people who think like us, creating echo chambers where we see similar views and ideas repeatedly.

For open-source researchers wanting to verify false claims, it is important to recognize that the anatomy of information dissemination has multiple moving parts: When did a narrative start? Where did it first appear? Who is the source of the narrative? How credible is the source? And who are the receivers/audience? Among the receivers, which accounts forwarded the information? How fast did a particular narrative spread within a particular time frame?&#x20;

Hoaxy solves some of these questions through the following key features:&#x20;

1. Search:  This allows users to find specific keywords, URLs, or users in Bluesky and X/Twitter on a piece of news or information that needs verification or monitoring.
2. [Visualization:](https://hoaxy.osome.iu.edu/faq#faq-q11) This offers users a visual representation of data that can illustrate who is sharing the information, the connections between different users, and the chronological order in which the information is spread.&#x20;

### How does it work?

Step 1: Choose from either Bluesky or X/Twitter

Step 2: Enter your search terms

Step 3: Hoaxy automatically generates a visualization&#x20;

Step 4: Analyze the visualization map and its data&#x20;



<figure><img src=".gitbook/assets/Screenshot 2024-07-31 232233-marked1.png" alt=""><figcaption><p>The landing page of the Hoaxy tool automatically lets you choose your search preferences. You can choose to do a query on Bluesky or on X/Twitter or to import your own data. The bottom is search bar for keywords, account, URL, phrases. </p></figcaption></figure>

#### **DOING A BLUESKY SEARCH**

If the user is interested in tracking information spread on the Bluesky platform, users must select “Search Bluesky”, and then [users can enter the following input on the search bar](https://hoaxy.osome.iu.edu/faq#faq-q11):&#x20;

* Single term (i.e. airstrike)
* Phrases (enclosed in quotation marks, i.e. “Kyiv airstrike” )&#x20;
* Combine multiple terms using Boolean operators AND, OR, NOT (i.e. "Kyiv airstrike" AND (report OR news) NOT "false alarm")&#x20;

#### **DOING A X/TWITTER SEARCH**&#x20;

{% hint style="info" %}
NOTES:&#x20;

1. This function requires a Bearer Token available if a user purchased a Basic, Pro or Enterprise subscription on X.
2. [This will only retrieve posts from the last 7 days](https://hoaxy.osome.iu.edu/faq#faq-twitter-search).&#x20;
{% endhint %}

If the user is interested in tracking information spread on the X platform, users must select “Search X/Twitter”. Then, users can enter search terms in the same way they can use the advanced search feature of X (See X’s guide to building a query [here](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query) or [this guide](https://bellingcat.gitbook.io/toolkit/more/all-tools/twitter-advanced-search)). [This tool is compatible with X’s advanced search operators. ](https://hoaxy.osome.iu.edu/faq#faq-twitter-search)

For example: "Amazon deforestation" AND (illegal OR logging) has:videos&#x20;

#### **VISUALIZATION**&#x20;

Once users have entered the search terms, Hoaxy will generate a visualization containing two things:   “Diffusion networks” and “temporal trends”.&#x20;

<figure><img src=".gitbook/assets/Hoaxy Viz 1 (1) (1).png" alt=""><figcaption><p>This shows the visualization automatically generated by Hoaxy for a Bluesky query on the keyword "airstrikes". On the right panel shows "diffusion networks" (as described below), on the left panel is the "temporal trends" (also described below). In between these panels are a few features that users can modify and play around with to change how the graph looks for analysis. </p></figcaption></figure>

**Network Graphs or “Diffusion Networks”**&#x20;

Understand how information spreads between accounts. Identify influencers, clusters, and potential disinformation networks. The tool provider defines these “diffusion networks” as those that [“display how posts spread from person to person. Each node is a X/Twitter account and two nodes are connected if a post is passed between those two accounts. Larger nodes represent more influential accounts.”](https://hoaxy.osome.iu.edu/faq#faq-q5)&#x20;

Within the graphs, users will notice that there are different colors on the connecting line between accounts. According to the tool provider “[\[t\]he color of a connection indicates the type of post: reposts, replies, quotes, or mentions. Clicking on an edge (connecting line) reveals the post(s); clicking on a node reveals the X/Twitter account of the corresponding user.” ](https://hoaxy.osome.iu.edu/faq#faq-q5)

The edges are color-coded as follows:&#x20;

BLUE - reposts    ORANGE - Mentions   YELLOW - Replies    RED - Quotes

GREY - Multiple

**Timelines or “Temporal trends”**

Track the evolution of a topic over time, identifying peak interest and potential turning points. The tool provider describes this as plotting [“the cumulative number of posts over time. The user can zoom in on any time interval.” ](https://hoaxy.osome.iu.edu/faq#faq-q5)

{% hint style="info" %}
TIP: Hovering your mouse  over the graph to either the left or right will show the dates and the number of posts generated on that particular date. &#x20;
{% endhint %}

<div align="center">

<figure><img src=".gitbook/assets/Temporal trends 1.png" alt="" width="188"><figcaption><p>(Click to enlarge) This image shows the timeline of how a piece of information spread over time. In this example, the tool automatically generates a time frame from 13 March 2024 to 17 April 2024 (shown in orange square). On the top of the image are options to "add old posts" or "add new posts" (shown in green circles).  </p></figcaption></figure>

</div>

**Middle Panel**

The middle panel shows different features that users can change depending on their preferences. It consists of layout options, Export options, a 2D or 3D display, and a short clip showing how information spreads.



<figure><img src=".gitbook/assets/Middle Panel (1).png" alt=""><figcaption><p>These shows all the middle menu for the visualization and the different ways users can display their results for analysis. </p></figcaption></figure>

The tool also allows you to play a short animated clip showing how the nodes and connections are made, and how it unfolds over time, from the beginning date to the end date as displayed on the left panel.

<figure><img src=".gitbook/assets/ScreenRecording2024-08-03100939-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>Clicking on the "Play" icon in the middle panel shows users how the information spread from the beginning date, 29 April 2023 to end date 3 Aug 2024. This shows a Bluesky query looking for mentions of Bellingcat. </p></figcaption></figure>

#### CHECKING YOUR RESULTS

It would be advisable to check the graph to see what kind of data and content is being displayed and whether it matches your research topic. To do this, users can select a cluster and click on a node/user account. It will generate a pop-up window showing how the account mentions, replies to, or quotes. It will also share a link to the particular post being discussed. Users can also click on the edges (connecting lines) and this will generate a pop-up window showing the post itself.



<table data-card-size="large" data-view="cards" data-full-width="true"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><p></p><p>Click on a node, and it will show you actions made by that account and who it interacted with. In this example, we did a Bluesky search for @bellingcat.com. On the right side, we selected the account @scrippsnews.bsky.social, and to the left, a pop-up window appears to show the activity. Underneath (shown in green arrows) are links to the post or content being forwarded. </p></td><td></td><td></td><td><a href=".gitbook/assets/Bellingcat viz node feature 1.png">Bellingcat viz node feature 1.png</a></td></tr><tr><td></td><td>Click on an edge (the color-coded connecting lines) to automatically generate a pop-up window showing the content being shared from one account to another (or from one node to another). </td><td></td><td><a href=".gitbook/assets/Bellingcat viz Node 1.png">Bellingcat viz Node 1.png</a></td></tr></tbody></table>

\


## Cost

* [x] Partially Free

Twitter live search not free anymore but it is possible to upload own data

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

Bearer token. "Due to changes in Twitter's API policies, Hoaxy's live search is only available to users with [Basic, Pro or Enterprise access ](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api). " Live search retrieves tweets from the last 7 days.

## Limitations & Ethical Considerations

Not available for free anymore if you are interested in searching for tweet. You can only upload your own dataset.

## Tool provider

[Hoaxy](https://hoaxy.osome.iu.edu/faq#faq-q10) is a joint project of the Indiana University Network Science Institute ([IUNI](https://iuni.iu.edu/)) and the Center for Complex Networks and Systems Research ([CNetS](http://cnets.indiana.edu/)).

<table><thead><tr><th data-type="users" data-multiple>Page Maintainers</th></tr></thead><tbody><tr><td></td></tr><tr><td></td></tr></tbody></table>

