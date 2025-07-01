---
description: >-
  Build a clean timeline of any LinkedIn activity from a single URL or a whole
  list of links.
---

# LinkdTime

## URL

[https://github.com/Lucksi/LinkdTime](https://github.com/Lucksi/LinkdTime)\


## Description

LinkdTime is a command-line Python tool that scrapes LinkedIn pages to recover the precise date and time of posts, comments, replies and profile-image changes, then lays them out chronologically. You can feed it one URL to see when that action happened or pass a text file of many links to generate an HTML or TXT timeline with optional embedded images. Recognised activities include posts, comments, profile-picture changes, background-image changes and company-logo swaps (see [GitHub](https://github.com/Lucksi/LinkdTime)).

**Example use case** – An investigator collects all post and comment URLs made by a LinkedIn account suspected of astroturfing using LinkdTime. Running LinkdTime reveals that the “organic” replies appeared within minutes of the original posts, supporting the hypothesis of coordinated behaviour.

## Typical Workflow

```
git clone https://github.com/Lucksi/LinkdTime
```

The script [returns ](https://github.com/Lucksi/LinkdTime)either a single timestamp or a full HTML / TXT timeline (optional embedded images or Base64). Investigators can therefore spot coordination patterns, for example, discovering that replies labelled “organic” landed within minutes of each other.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Open-source under the GPL-3.0 licence; no paid tier ([GitHub](https://github.com/Lucksi/LinkdTime)).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* **Linux** with Python 3 (only platform officially tested, see [GitHub](https://github.com/Lucksi/LinkdTime));
* Git to clone the repo;
* Target LinkedIn URLs must load without being signed in (no login cookies needed).

## Limitations

* Untested on Windows or macOS—manual tweaks may be necessary;
* Breaks if LinkedIn changes its HTML structure (pure scraping);
* Cannot access content behind the login wall or private-visibility posts;
* Heavy, rapid queries may trigger LinkedIn's anti-bot defences; use rate-limiting or rotating proxies;
* No graphical interface—terminal only.

## Ethical Considerations

Scraping LinkedIn may violate its terms of service; check your legal context before large-scale use. Avoid publishing timelines that expose private individuals’ non-public activity without consent.

## Guides and articles

* “A LinkedIn Activity Date Finder – LinkdTime” – creator’s announcement on LinkedIn (Mar 2025, [LinkedIn](https://www.linkedin.com/posts/lucksi_github-lucksilinkdtime-a-linkedin-activity-activity-7297196149533216770-gXnx?utm_source=chatgpt.com)).
* Featured in _OSINT Newsletter 67_ – tool showcase with workflow tips (Apr 2025, [X (formerly Twitter)](https://twitter.com/osintnewsletter/status/1910012947725689196?utm_source=chatgpt.com).

## Tool provider

Created and maintained by [**Luca Garofalo**](https://github.com/Lucksi) **(Lucksi)**, an Italy-based open-source developer.

## Similar tools

| Tool                                  | Strength                                       | Weakness                               |
| ------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| **LinkdTime**                         | Precise timestamps, bulk timeline, open-source | Linux-only; breaks if LinkedIn changes |
| **OSINT-Switzerland LinkedIn script** | Exports post IDs fast                          | No timeline output; limited to posts   |
| **Wayback Machine**                   | Full historical snapshots                      | No post times; manual link lookup      |

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
