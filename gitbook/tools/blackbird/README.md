---
description: Check usernames and email addresses on websites and social networks
---

# Blackbird

## URL

[https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)

## Description

A command line tool to search for accounts by username and email address across social networks and websites.&#x20;

<figure><img src=".gitbook/assets/Screen Shot 2024-06-07 at 10.00.58 AM.png" alt=""><figcaption></figcaption></figure>

Blackbird is integrated with [WhatsMyName](https://github.com/WebBreacher/WhatsMyName) project, which has 600+ sites to perform accurate reverse username search. The data sources maintained by the WhatsMyName team can be found [here](https://github.com/WebBreacher/WhatsMyName/blob/main/wmn-data.json).&#x20;

For email address searches, it appears to query the servers of websites maintained by WhatsMyName to determine whether an account has been made with that email address. If the user has a valid account on the service, Blackbird will return a URL of the user profile in the results.&#x20;

Blackbird, like other username enumeration tools such as [Sherlock](https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock), checks usernames against a unique collection of sources, resulting in different results for the same username compared to Sherlock. For example, Blackbird covers more NSFW and alternative social media sources (including Gab and Truth Social), while Sherlock has better results in surfacing accounts on mainstream social networks that are currently or were in the past popular, such as Linkedin, ICQ, 9Gag, Letterboxd and similar, as well.

<div align="center"><figure><img src=".gitbook/assets/Screen Shot 2024-06-16 at 2.44.18 PM.png" alt="" width="375"><figcaption><p>Blackbird's list of results for "bellingcat" usernames</p></figcaption></figure></div>

<figure><img src=".gitbook/assets/Screen Shot 2024-06-16 at 2.46.36 PM.png" alt="" width="375"><figcaption><p><a href="https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock">Sherlock</a>'s list of results for "bellingcat" usernames</p></figcaption></figure>

On the other hand, the rate of false positives and invalid results are fairly low with Blackbird. As a result Blackbird complements other email address search tools by surfacing unique results and using it conjunction with other tools is recommended to get the widest breadth of results.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Python

## Limitations & Ethical Considerations

In terms of username investigations, the tool may miss valid results from various sources that can be surfaced with other tools like [Sherlock](https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock).&#x20;

## Guide

Installation and simple usage: [https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)

Full documentation, with advanced use cases: [https://p1ngul1n0.gitbook.io/blackbird](https://p1ngul1n0.gitbook.io/blackbird)

## Pro tips

If you are using Python 3, you may need to use pip3 when installing. So while following the guide, to install requirements do the following:

```
pip3 install -r requirements.txt
```

You can create advanced queries using built-in categories, boolean operators and substring matches for source names. For example, you can search for all accounts that have the username "bellingcat" on websites categorized as "social":

```
python blackbird.py --filter "cat=social" --username bellingcat 
```

For accounts with username "john" on different Mastodon servers:

```
python blackbird.py --filter "name~Mastodon" --username john 
```

## Tool provider

Original developer is [Lucas Antoniaci](https://www.linkedin.com/in/lucas-antoniaci/).

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
