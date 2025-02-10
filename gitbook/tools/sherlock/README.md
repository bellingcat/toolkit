---
description: Check usernames across more than 400 websites and social networks.
---

# Sherlock

## URL

[https://github.com/sherlock-project/sherlock](https://github.com/sherlock-project/sherlock)

## Description

A command line tool by the Sherlock Project that can be used to find social media usernames across 400+ social networks. The tool allows users to search multiple usernames at once, limit searches to a list of websites, export results to a CSV file and more.&#x20;

<figure><img src=".gitbook/assets/Screen Shot 2024-06-06 at 3.26.06 PM.png" alt=""><figcaption><p>A sample query on Sherlock looking for accounts that have the username "bellingcat"</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Python 3.6 or higher
* Works on MacOS, Linux and Windows

## Limitations & Ethical Considerations

List of supported websites can be found [here](https://github.com/sherlock-project/sherlock/blob/master/docs/sites.md).

Sherlock does not allow for fuzzy keyword searches, the use of wildcards or regular expressions. It allows for bulk data input from a JSON file.

The results from Sherlock are fairly high-credibility, though accounts on various websites require authentication to view or are private. There are occasional false positives, though fewer number of them compared to browser-based tools like Namechk. The tool does not have visibility into Discord, and it misses accounts on more established social networking sites (like Facebook and LinkedIn) potentially due to these sources' anti-scraping efforts.

Please note that Sherlock has found a specific username on various platforms does not necessarily mean that this username belongs to a specific person or organisation. In the Bellingcat example from above, only some of the listed accounts really belong to Bellingcat (for example Github, Patreon etc.) Other accounts (including Instagram) have been created by people who are not part of Bellingcat.

There is an [API](https://github.com/sherlock-project/api) for the project but 1) requires knowledge of Django REST Framework (DRF) to use in development  2) has not been updated in at least 3 years.&#x20;

## Guide

The Sherlock Project maintains a usage and installation guide on Github: [https://github.com/sherlock-project/sherlock?tab=readme-ov-file](https://github.com/sherlock-project/sherlock?tab=readme-ov-file)

## Tool provider

Original creator is [Siddharth Dushantha](https://github.com/sdushantha). The Sherlock Project has more than 200+ contributors:

* [https://github.com/sherlock-project](https://github.com/sherlock-project)
* [https://sherlockproject.xyz/](https://sherlockproject.xyz/)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
