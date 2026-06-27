---
updated: '2026-06-19'
description: Check usernames and email addresses on websites and social networks
---

# Blackbird

## URL

[https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)\
latest main-branch commit seen: 2025-07-13; no GitHub releases or tags, as of 2026-06-18

## Description

Blackbird is a Python command-line tool that searches for accounts associated with a given username or email address across social networks and websites.

For username searches, the tool is integrated with the [WhatsMyName](https://github.com/WebBreacher/WhatsMyName) project, which maintains a community dataset of 700+ websites for reverse username lookups. The data sources maintained by the WhatsMyName team can be found [here](https://github.com/WebBreacher/WhatsMyName/blob/main/wmn-data.json).

<figure><img src=".gitbook/assets/blackbird.png" alt=""><figcaption><p>Blackbird's logo, displayed in the terminal upon launching the tool</p></figcaption></figure>

For email address searches, it queries the servers of websites in the WhatsMyName database to check whether an account exists for a given address. When a valid account is found, a direct URL to the user's profile is returned.

Beyond simply listing matched accounts, the tool automatically extracts publicly available metadata from discovered profiles, such as names, locations, and profile images, and supports exporting results in PDF, CSV, JSON, or HTTP response formats for further analysis.

Like other username enumeration tools such as [Sherlock](https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock), it checks usernames against its own distinct collection of sources, meaning results for the same username will differ between tools. It provides broader coverage of NSFW and alternative social media platforms, including Gab and Truth Social, while Sherlock tends to surface stronger results on mainstream social networks that are currently or were previously popular, such as LinkedIn, ICQ, 9Gag, and Letterboxd.

<figure><img src=".gitbook/assets/bellingcat.png" alt=""><figcaption><p>Blackbird's results for the username "bellingcat", showing 731 sites checked in 44.1 seconds, with matched accounts found on platforms including Tiktok, GitHub and Twitch.</p></figcaption></figure>

A built-in AI analysis feature interprets discovered profiles to generate behavioural and technical summaries. This is available free of charge within daily usage limits. The documentation says only discovered site names are sent for AI analysis, but the setup prompt in the current code says the user's IP address is registered for API-key management and abuse prevention.

The rate of false positives and invalid results is generally low. Because it surfaces unique results compared to similar tools, using it in conjunction with other username and email search tools is recommended to achieve the widest possible coverage.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Python3
* Basic familiarity with the command line, as the tool is operated entirely through a terminal.

## Limitations

The enhanced Instagram metadata workflow requires setting an Instagram session ID in the .env file. Treat this as a higher-risk workflow: use an account and browser environment appropriate for the investigation, and avoid exposing personal cookies or personal accounts.

In terms of username investigations, the tool may miss valid results from various sources that can be surfaced with other tools like [Sherlock](https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock). Beyond simply listing matched accounts, the tool automatically extracts publicly available metadata from discovered profiles, such as names, locations, and profile images, and supports exporting results in PDF, CSV, JSON, or HTTP response formats for further analysis.

## Ethical Considerations

Treat Blackbird matches as leads rather than confirmed identities. The official documentation warns that Blackbird can make mistakes, and WhatsMyName notes that websites can change profile URLs, response codes, and page content, which can break detections.

## Guide

* Installation and simple usage: [https://github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird)
* Full documentation, with advanced use cases: [https://p1ngul1n0.gitbook.io/blackbird](https://p1ngul1n0.gitbook.io/blackbird)

## Installation

Clone the repository and navigate into the project folder:

```
git clone https://github.com/p1ngul1n0/blackbird
cd blackbird
```

Install the required dependencies:

```
pip install -r requirements.txt
```

> **Note:** If you are using Python 3, you may need to use `pip3` instead of `pip`. See the Pro Tips section for details.

## Usage And Pro tips

You can search for multiple usernames or email addresses in a single command by listing them together:

```
python blackbird.py --username bellingcat username2 username3
```

Alternatively, if you have a long list, pass a text file directly:

```
python blackbird.py --username-file usernames.txt
python blackbird.py --email-file emails.txt
```

Results can be exported in multiple formats using dedicated flags:

```
python blackbird.py --username bellingcat --pdf
python blackbird.py --username bellingcat --csv
python blackbird.py --username bellingcat --json
```

To route all requests through a proxy, for example for anonymity or to bypass regional restrictions:

```
python blackbird.py --username bellingcat --proxy "http://myproxy:9090"
```

Advanced queries can be built using built-in categories, boolean operators, and substring matches on source names. To search for all accounts with a given username on sites categorised as "social":

```
python blackbird.py --filter "cat=social" --username bellingcat
```

The tool includes a built-in AI analysis feature that generates behavioural summaries based on the platforms where a username or email is found. To enable it, first generate a local API key:

```
python blackbird.py --setup-ai
```

Then run a search with the `--ai` flag:

```
python blackbird.py --username bellingcat --ai
```

AI-generated summaries are also included in exported PDF reports. Usage is free but subject to a daily quota. Importantly, only the names of the discovered sites are sent to the API, no personal data or profile content is transmitted.\
For AI analysis, the documentation says only discovered site names are sent to the API and no profile content is transmitted. During setup, the current code also displays a prompt stating that the user's IP address is registered for API-key management and abuse prevention.

## Similar Tools

Blackbird sits in the middle ground between quick, browser-based username checkers and deeper enumeration tools that extract extensive metadata. Its strength lies in alternative and NSFW platform coverage through its WhatsMyName integration, but  OSINT investigators will often need to combine it with other tools to cover mainstream social networks and extract richer profile data.

* [**Namechk**](https://bellingcat.gitbook.io/toolkit/more/all-tools/namechk) **-** a username and domain availability checker across multiple platforms. While it overlaps with Blackbird in checking username presence, Namechk is primarily aimed at verifying availability for registration purposes rather than OSINT investigations.
* [**WhatsMyName**](https://bellingcat.gitbook.io/toolkit/more/all-tools/whats-my-name) **-** a browser-based username checker searching across 500+ platforms. Unlike Blackbird, it requires no installation and can be used directly in a browser, making it well suited for quick checks, though it lacks Blackbird's advanced querying options and email search capability.
* [**Maigret**](https://bellingcat.gitbook.io/toolkit/more/all-tools/maigret) **-** a CLI tool that searches for usernames across 3000+ sites and extracts additional profile metadata such as account creation dates and follower counts. Maigret covers significantly more sites than Blackbird, but Blackbird has the advantage of also supporting email address searches alongside username lookups.
* [**Sherlock**](https://bellingcat.gitbook.io/toolkit/more/all-tools/sherlock) **-** an open-source CLI tool that searches for usernames across 400+ websites and social networks. Like Blackbird, it returns direct links to found profiles, but has stronger coverage of mainstream social networks such as LinkedIn and Letterboxd, while Blackbird covers more NSFW and alternative platforms such as Gab and Truth Social. Both require installation, but Blackbird additionally offers a web interface.
* [**Skopenow**](https://bellingcat.gitbook.io/toolkit/more/all-tools/skopenow) **-** a paid, all-in-one people intelligence platform that searches social media usernames alongside addresses, corporate records, dark web leaks, and vehicle information. Unlike Blackbird, which is a free, open-source username enumeration tool, Skopenow is a commercial product aimed at professional investigators requiring consolidated reporting across multiple data types.

## Tool provider

Original developer is [Lucas Antoniaci](https://www.linkedin.com/in/lucas-antoniaci/), Brasil.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Paige Maintainer           |
| -------------------------- |
| tsvetelina and Martin Sona |
