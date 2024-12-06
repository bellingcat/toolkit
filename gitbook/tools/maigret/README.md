---
icon: user-magnifying-glass
description: >-
  Maigret is a Python script that retrieves user information by searching for
  usernames across various websites and social media platforms.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Maigret

## URL

[https://github.com/soxoj/maigret](https://github.com/soxoj/maigret)

## Description

Maigret is a command-line tool that collects information about a person using their username. It checks for accounts across over [3000](https://github.com/soxoj/maigret/blob/main/sites.md) sites, gathering available information directly from web pages, without the need for API keys. The tool itself is a fork of the[ Sherlock project.](https://github.com/sherlock-project/sherlock)

If not explicitly specified with a tag, Maigret will start its search with the top 500 sites from its database, including many popular social platforms. Users have the option to expand the search by including different options, ranging from specific sites to countries and identifiers.&#x20;

Identifiers refer to unique markers associated with user accounts on specific platforms, such as a **gaia\_id** (Google's internal numeric user identifier, previously found in Google Plus accounts) or other similar unique attributes. These allow Maigret to conduct more targeted and precise searches beyond ordinary usernames.

<figure><img src=".gitbook/assets/maigret.png" alt=""><figcaption><p>Search for  username "bellingcat" on Maigret </p></figcaption></figure>

To start a simple search on Maigret, all you need to do is provide one or more usernames for the individual you want to investigate. For example, searching for "bellingcat" will check if that username exists across the platforms supported by the tool (like social networks, forums, blogs and more). If an account is found, a report detailing where the username appears will be generated. This includes links to profile pages or relevant content on those platforms (e.g., Facebook, Instagram etc) and any available additional metadata like account creation dates or follower counts, if retrievable. In this case of "bellingcat," we discovered accounts on Telegram, Instagram, Github, TikTok and GithubGist.

In addition, Maigret scans account webpages(username bellingcat on X will return -[https://x.com/bellingcat](https://x.com/bellingcat)) to extract personal details and links to other profiles, displaying this information in the command line output and including it in reports. It also uses found IDs and usernames to start new searches automatically.&#x20;

The tool supports generating reports in various formats, including HTML, PDF, TXT, [XMind 8 mindmap](https://xmind.app/user-guide/xmind/), and JSON. HTML and PDF reports include profile photos, all gathered personal information, and additional data like full name, gender, and location based on the statistics of all found accounts.

A short text report is also shown in the command line after the search phase.

<figure><img src=".gitbook/assets/Maigret2.png" alt=""><figcaption><p>A short report for a username "bellingcat".</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

Python3

## Installation and usage

Maigret can be installed using pip3, Docker, or by cloning the GitHub repository. It is recommended to use Python 3.10 or higher versions.

To install from PyPl:

```python
// pip3 install maigret
```

Cloning the repository:

```python
// git clone https://github.com/soxoj/maigret && cd maigret
pip3 install .
```

To search for accounts with specific username, use:

```python
// maigret <username>
```

For more detailed searches, you can add options like '-a' to search all sites, or '-o' to save the output to a specific file format, such as HTML or PDF. Maigret also supports multiple usernames in a single search by listing them together: maigret  \<username1> \<username2> .

You can also create advanced queries using built-in categories, boolean operators, and substring matches for source names.&#x20;

For example, you can search for all accounts that have the username 'bellingcat' on websites categorized as 'social':"

```python
// maigret --filter "cat=social" --username bellingcat
```

## Limitations and Ethical Consideration

Maigret may miss valid results from various sources. Additionally, it may encounter issues with bot protection and CAPTCHAs, leading to errors in the search results. There is also a possibility of false positives, where the tool might incorrectly identify accounts belonging to the searched username.

## Guides and articles

* Information regarding the tool and documentation: [https://maigret.readthedocs.io/en/latest/index.html](https://maigret.readthedocs.io/en/latest/index.html)
* GitHub repo and instruction for installation: [https://github.com/soxoj/maigret](https://github.com/soxoj/maigret)

## Tool provider

The tool provider of Maigret is [Dmitry Danilov](https://www.linkedin.com/in/danilov-d/) , who is currently based in Amsterdam, Netherlands.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| tsvetelina      |
|                 |
