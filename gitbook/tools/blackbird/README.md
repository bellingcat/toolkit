---
description: Check usernames and email addresses on websites and social networks
---

# Blackbird

## URL

[https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)

## Description

A command line tool to search for accounts by username and email address across social networks and websites.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Python

## Limitations & Ethical Considerations

In terms of username investigations, the tool misses valid results from popular sourcees that can be surfaced with other tools like Sherlock.&#x20;

For email address searches, it appears to query the public API endpoints of services and websites to determine whether an account has been made with that email address. This is a unique functionality compared to services like Spokeo which only take the local/username part of the address and bring back results from websites where there is an account with that username. As a result, while Blackbird may miss some valid results, it complements other email address search tools by surfacing unique results. &#x20;

## Guide

Installation and simple usage: [https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)

Full documentation, with advanced use cases: [https://p1ngul1n0.gitbook.io/blackbird](https://p1ngul1n0.gitbook.io/blackbird)

## Pro tips

If you are using Python 3, you may need to use pip3 when installing. So while following the guide, to install requirements do:

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

Original developer is [Lucas Antoniaci](https://www.linkedin.com/in/lucas-antoniaci/)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
