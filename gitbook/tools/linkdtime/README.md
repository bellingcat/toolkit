---
description: >-
  Build a clean timeline of any LinkedIn activity from a single URL or a whole
  list of links.
---

# LinkdTime

## URL

[https://github.com/Lucksi/LinkdTime](https://github.com/Lucksi/LinkdTime)\
**no tagged releases**; latest commit **2025‑04‑11 (as of October 31, 2025)**\


## Description

LinkdTime is a small CLI Python tool that **derives precise timestamps from LinkedIn activity URLs** (posts, comments/replies, profile‑photo/background‑image/company‑logo changes) and can assemble them into a chronological timeline (HTML/TXT). For timestamping, it **decodes the numeric ID embedded in LinkedIn URLs** rather than scraping page HTML, so the time extraction itself works **without network access**; optional flags can **save/download images** for timelines. Outputs are a single timestamp for one URL or an HTML/TXT timeline for a list, with **timezone, date, and clock format configurable**. (see [GitHub](https://github.com/Lucksi/LinkdTime)).\


It accepts either:\
• **A single LinkedIn URL** – e.g. `https://www.linkedin.com/feed/update/urn:li:activity:...` or a comment permalink – and prints the precise UTC time the action occurred;\
• **A text file of many URLs** – one per line – and builds a chronological **HTML or TXT timeline**. Use `--save` to embed images as [Base64](https://en.wikipedia.org/wiki/Base64) inside the HTML or `--download` to save originals alongside it.

**Example use case**

> An analyst harvesting every post- and comment-URL authored by a suspected astroturf network feeds them to LinkdTime. The generated timeline shows that “independent” accounts replied within 90 seconds of each post – a pattern typical of centrally scripted campaigns. [Astroturfing explained](https://en.wikipedia.org/wiki/Astroturfing)

## Typical Workflow

```
# Installation
git clone https://github.com/Lucksi/LinkdTime && cd LinkdTime

# Auth / first-run
# No login or API keys required for timestamp extraction (works offline).
# Ensure Python 3 is installed on Linux.  # Docs: see README.

# Example usage
# 1) Single URL → print timestamp
python3 main.py "https://www.linkedin.com/feed/update/urn:li:activity:1234567890123456789/"

# 2) Bulk timeline (one URL per line in links.txt), with auto-names and description
python3 main.py timeline links.txt --autoname --description "Subject A activity"

# Optional assets for timeline output:
#   --save      # embed images as Base64 into HTML
#   --download  # save original images alongside the HTML
#   --timezone "GMT+4:00"   # override default timezone
```

The script [returns ](https://github.com/Lucksi/LinkdTime)either a single timestamp or a full HTML / TXT timeline (optional embedded images or Base64). Investigators can therefore spot coordination patterns, for example, discovering that replies labelled “organic” landed within minutes of each other. The tool prints either one [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp or writes `timeline.html` / `timeline.txt`. Investigators can visualise coordination, e.g. _five “organic” replies_ landing **< 3 min** after a post may indicate **astroturfing** (see definition above).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Open-source under the GPL-3.0 licence; no paid tier ([GitHub](https://github.com/Lucksi/LinkdTime)).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Linux with Python 3 (officially tested; **MacOS & Windows may work but are untested, Jul 2025**).
* [Git installed](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
* Target URLs must be viewable without signing in. LinkdTime does **not** bypass LinkedIn log-in walls.

## Limitations

* Untested on Windows or macOS, manual tweaks may be necessary;
* Breaks if LinkedIn changes its HTML structure (pure scraping);
* Cannot access content behind the login wall or private-visibility posts;
* Heavy, rapid queries may trigger LinkedIn's anti-bot defences; use rate-limiting or rotating proxies;
* No graphical interface, terminal only.
* LinkedIn deploys rate-limits, CAPTCHAs and UA/velocity-based WAF rules against automated scraping. Plan pauses or proxy rotation. See LinkedIn’s own note on [anti-scraping defences](https://www.linkedin.com/blog/member/trust-and-safety/linkedin-safety-series-what-is-scraping).

## Ethical Considerations

* Scraping LinkedIn may violate its [terms of service](https://app.gitbook.com/s/y4PuseOaDGmxp1otYeL9/); check your legal context before large-scale use.
* LinkdTime extracts only information already **publicly visible**; nevertheless, assembling complete timelines can expose behavioural or work-pattern insights that the subject did not expect to be profiled.&#x20;

## Guides and articles

* “A LinkedIn Activity Date Finder – LinkdTime” – creator’s announcement on LinkedIn (Mar 2025, [LinkedIn](https://www.linkedin.com/posts/lucksi_github-lucksilinkdtime-a-linkedin-activity-activity-7297196149533216770-gXnx?utm_source=chatgpt.com)).
* Featured in _OSINT Newsletter 67_ – tool showcase with workflow tips (Apr 2025, [X (formerly Twitter)](https://twitter.com/osintnewsletter/status/1910012947725689196?utm_source=chatgpt.com).
* Anti-scraping policy – [LinkedIn Safety Series](https://www.linkedin.com/blog/member/trust-and-safety/linkedin-safety-series-what-is-scraping).

## Tool provider

• **Developer:** Luca Garofalo (**Lucksi**) – GitHub profile and repository. [GitHub](https://github.com/Lucksi?utm_source=chatgpt.com)\
• **License:** **GPL‑3.0** (see LICENSE in repo). [GitHub](https://github.com/Lucksi/LinkdTime)

## Similar tools

| Tool                                                                                                                                                               | Strength                                       | Weakness                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------- |
| [**LinkdTime**](https://github.com/Lucksi/LinkdTime)                                                                                                               | Precise timestamps, bulk timeline, open-source | Linux-only; breaks if LinkedIn changes |
| [**OSINT-Switzerland LinkedIn script**](https://www.linkedin.com/posts/osint-switzerland_having-recently-learned-the-technique-activity-7296041731815362560-rsk0/) | Exports post IDs fast                          | No timeline output; limited to posts   |
| [**Wayback Machine**](https://bellingcat.gitbook.io/toolkit/more/all-tools/internet-archive)                                                                       | Full historical snapshots                      | No post times; manual link lookup      |

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
