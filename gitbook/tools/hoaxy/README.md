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

Hoaxy assists in unraveling the complex web of information dissemination online, particularly in X (Twitter) and Bluesky. It primarily addresses the problem of misinformation and disinformation spreading rapidly on social media platforms. Users can search for a particular topic or keywords on either platform, and it will automatically generate a visual graph of the spread of information.&#x20;

### What problem does it solve?

The tool providers saw that [false claims spread faster than fact-checked claims](https://www.researchgate.net/publication/301841797\_Hoaxy\_A\_Platform\_for\_Tracking\_Online\_Misinformation)(p.1). They described the structure of information spread as follows:  [“Structural features of the information exchange networks underlying social media create peculiar patterns of information access. Online social networks are characterized by homophily, polarization, algorithmic ranking, and social bubbles, information environments with low content diversity and strong social reinforcement” (p.1)](https://www.researchgate.net/publication/301841797\_Hoaxy\_A\_Platform\_for\_Tracking\_Online\_Misinformation). Social media networks often show us information from people who think like us, creating echo chambers where we see similar views and ideas repeatedly.

For open-source researchers wanting to verify false claims, it is important to recognize that the anatomy of information dissemination has multiple moving parts: When did a narrative start? Where did it first appear? Who is the source of the narrative? How credible is the source? And who are the receivers/audience? Among the receivers, which accounts forwarded the information? How fast did a particular narrative spread within a particular time frame?&#x20;

Hoaxy solves some of these questions through the following key features:&#x20;

1. Search:  This allows users to find specific keywords, URLs, or users in Bluesky and Twitter related to a piece of news or information that needs verification or monitoring.
2. [Visualization:](https://hoaxy.osome.iu.edu/faq#faq-q11) This offers users a visual representation of data that can illustrate who is sharing the information, the connections between different users, and the chronological order in which the information is spread. It examines networks of social media accounts engaging with a piece of information and the time frame during which this spread transpired.&#x20;

### How does it work?

(placeholder)

Step 1: Do a search on either platform

Step 2: Hoaxy automatically generates a visualization&#x20;

Step 3: Analyze the visualization map and its data&#x20;



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

If the user is interested in tracking information spread on the X platform, users must select “Search X/Twitter”. Then, users can enter search terms as if they are using the advanced search feature of X (See X’s guide to building a query [here](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query) or [this guide](https://bellingcat.gitbook.io/toolkit/more/all-tools/twitter-advanced-search)). [This tool is compatible with X’s advanced search operators. ](https://hoaxy.osome.iu.edu/faq#faq-twitter-search)

For example: "Amazon deforestation" AND (illegal OR logging) has:videos&#x20;

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

