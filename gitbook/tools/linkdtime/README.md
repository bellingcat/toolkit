---
updated: '2026-05-03'
description: >-
  Build a clean timeline of any LinkedIn activity from a single URL or a whole
  list of links.
---

# LinkdTime

## URL

[https://github.com/Lucksi/LinkdTime](https://github.com/Lucksi/LinkdTime)\
No tagged releases. Latest repository commit: [2026-02-21](https://github.com/Lucksi/LinkdTime/commit/f2cc0be88cd7c8689511b45cc366e92d671fe225) (README update).

Last source/version check: 2026-10-29.

## Description

LinkdTime is a small CLI Python tool that **derives precise timestamps from LinkedIn activity URLs** (posts, comments/replies, profile‑photo/background‑image/company‑logo changes) and can assemble them into a chronological timeline (HTML/TXT). For timestamping, it **decodes the numeric ID embedded in LinkedIn URLs** rather than scraping page HTML, so the time extraction itself works **without network access**; optional flags can **save/download images** for timelines. Outputs are a single timestamp for one URL or an HTML/TXT timeline for a list, with **timezone, date, and clock format configurable**. (see [GitHub](https://github.com/Lucksi/LinkdTime)).

<figure><img src=".gitbook/assets/image (65) (1).png" alt=""><figcaption></figcaption></figure>

It accepts either:\
• **A single LinkedIn URL** – e.g. `https://www.linkedin.com/feed/update/urn:li:activity:...` or a comment permalink – and derives an activity-ID timestamp in the configured timezone; specify --timezone GMT+0:00 for UTC;\
• **A text file of many URLs** – one per line – and builds a chronological **HTML or TXT timeline**. Use `--save` to embed images as [Base64](https://en.wikipedia.org/wiki/Base64) inside the HTML or `--download` to save originals alongside it.

**Example use case**

> An analyst harvesting every post- and comment-URL authored by a suspected astroturf network feeds them to LinkdTime. The generated timeline shows that “independent” accounts replied within 90 seconds of each post – a pattern worth investigating alongside account behavior, content similarity and alternative explanations; timing alone does not establish coordination. [Astroturfing explained](https://en.wikipedia.org/wiki/Astroturfing)

## Typical Workflow

```
# Installation
git clone https://github.com/Lucksi/LinkdTime && cd LinkdTime

# Run (interactive)
python3 main.py

# At the prompt, paste ONE of the following:

# A) Single URL → print timestamp
https://www.linkedin.com/feed/update/urn:li:activity:1234567890123456789/

# B) Build timeline from file (one URL per line)
timeline links.txt --autoname --description --timezone GMT+0:00

# Optional (timeline only):
#   --save      # embed images as base64 into HTML
#   --download  # save original images to disk (also controlled by AUTO-DOWNLOAD config)

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
* Timestamp extraction needs a supported LinkedIn URL with its numeric ID. Optional image retrieval requires an accessible media URL; LinkdTime does **not** bypass LinkedIn log-in walls.

## Limitations

* Untested on Windows or macOS, manual tweaks may be necessary;
* Timestamp extraction depends on LinkedIn URL patterns and ID encoding; HTML changes may affect optional media retrieval.
* It cannot download inaccessible private media; decoding an already-obtained supported URL does not require opening the post.
* Optional image requests can be rate-limited or blocked; pace downloads. Offline timestamp decoding makes no requests to LinkedIn.
* No graphical interface, terminal only.
* LinkedIn's automated-access restrictions may affect optional image downloads; the timestamp-decoding step itself works offline.
* Timestamp extraction depends on LinkedIn URL patterns and the numeric ID encoding scheme (not HTML scraping).
* LinkdTime doesn’t log in; it can’t fetch private content. Image download features only work if the media URL is accessible and may trigger anti-bot controls if used at scale.

## Ethical Considerations

* Scraping LinkedIn may violate its [terms of service](https://www.linkedin.com/legal/user-agreement); check your legal context before large-scale use.
* Even offline timestamp decoding of an already obtained URL can expose activity patterns; assembling timelines may reveal behavioural or work-pattern insights that the subject did not expect to be profiled.

## Guides and articles

* “A LinkedIn Activity Date Finder – LinkdTime” – creator’s announcement on LinkedIn (Mar 2025, [LinkedIn](https://www.linkedin.com/posts/lucksi_github-lucksilinkdtime-a-linkedin-activity-activity-7297196149533216770-gXnx?utm_source=chatgpt.com)).
* Featured in _OSINT Newsletter 67_ – tool showcase with workflow tips (Apr 2025, [X (formerly Twitter)](https://twitter.com/osintnewsletter/status/1910012947725689196?utm_source=chatgpt.com)).
* Anti-scraping policy – [LinkedIn Safety Series](https://www.linkedin.com/blog/member/trust-and-safety/linkedin-safety-series-what-is-scraping).

## Tool provider

• **Developer:** Luca Garofalo (**Lucksi**) – GitHub profile and repository. [GitHub](https://github.com/Lucksi?utm_source=chatgpt.com)\
• **License:** **GPL‑3.0** (see LICENSE in repo). [GitHub](https://github.com/Lucksi/LinkdTime)

## Similar tools

| Tool                                                                                                                                                               | Strength                                       | Weakness                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [**LinkdTime**](https://github.com/Lucksi/LinkdTime)                                                                                                               | Precise timestamps, bulk timeline, open-source | Linux tested; macOS/Windows untested; URL/ID format changes can affect timestamp decoding |
| [**OSINT-Switzerland LinkedIn script**](https://www.linkedin.com/posts/osint-switzerland_having-recently-learned-the-technique-activity-7296041731815362560-rsk0/) | Exports post IDs fast                          | No timeline output; limited to posts                                                      |
| [**Wayback Machine**](https://bellingcat.gitbook.io/toolkit/more/all-tools/internet-archive)                                                                       | Full historical snapshots                      | No post times; manual link lookup                                                         |

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
