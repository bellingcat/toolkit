---
description: Archive any webpage, including Facebook and search for archived pages.
---

# Archive.today

## URL

[https://archive.today](https://archive.today)

## Description

Archive.today is a web archiving service that allows users to manually save snapshots of webpages. Each snapshot keeps an exact copy of the page as it looked at that moment, including text, images, and design. This way the content is preserved, even if the original page changes or is taken down. Open source researchers can use Archive.today to save online information for future reference or to search for archived information. It can therefore also be used as a search tool.

**Features**

**Snapshot Creation:** You can save a page by entering the URL, and Archive.today creates a link to a permanent, static copy of the website.

#### What the snapshot captures

* **HTML, CSS, JS-generated content & images** rendered at a fixed viewport of 1 024 px.
* A lossless **PNG screenshot** of the same page for visual evidence.
* Basic video files from certain domains (e.g. X/Twitter).
* All files are served from Archive.today mirrors and remain accessible even if the origin disappears.

#### What is **not** preserved

* PDFs, XML feeds, RTF, Office documents, Flash/Java applets and most streaming-video containers.[Wikipedia](https://en.wikipedia.org/wiki/Archive.today?utm_source=chatgpt.com)
* Live server-side functions (comments, search boxes, forms) – they appear frozen.
* WARC files; the archive cannot be replayed in standard Wayback software.

| Hidden trick                                          | How it helps                                                                                                                                                                                     |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Bookmarklet**                                       | Drag the red button on the front page to the bookmarks bar for one-click archiving.[bellingcat](https://www.bellingcat.com/resources/how-tos/2018/02/22/archive-open-source-materials/)          |
| **Advanced search operators** (`insite:`, quotes, \*) | Narrow results inside a domain or find _all_ snapshots containing a phrase.[Wikipedia](https://en.wikipedia.org/wiki/Archive.today?utm_source=chatgpt.com)                                       |
| **API / Memento TimeGate**                            | Automate retrieval with any Memento-aware client (`Accept-Datetime:`).[ws-dl.blogspot.com](https://ws-dl.blogspot.com/2013/07/2013-07-09-archiveis-supports-memento.html?utm_source=chatgpt.com) |
| **ZIP download (legacy)**                             | Grab a bundled copy of pre-2019 captures for offline evidence.[Wikipedia](https://en.wikipedia.org/wiki/Archive.today?utm_source=chatgpt.com)                                                    |

**Searchable Archive:** Previous snapshots are searchable, making it easy to find and review earlier versions of a page.

**Time Travel:** You can check earlier versions of a page to track how content has changed over time. Just type in the URL of the site of interest in the second search box on the site to see whether you get any results.

**Browser Extension:** There’s a browser extension for quick snapshots, so you don’t have to go through the main site each time. The extension will open a new tab in your browser and will start archiving right away. You can also right click on a page and in the menu you will see the option to archive or search the link.

<figure><img src="https://lh7-qw.googleusercontent.com/docsz/AD_4nXdrq2mFIlW2W9kpCJsJMO_Nxi-Osq0LlD4XF4Dk9387XdKtUgMKj3FPafHUHPfkRlIOb1r_EVPKVKtgBWJJE3b77QjdBQgxH52pOnbJWUiKCobJuy0kl0zDhZnd9eIEZRIgOphy3hab-jh-67YXHtVibhZo?key=N8n3IJmjukzCQxoDPVpaj1B7" alt="" width="375"><figcaption></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Archive.today is completely free. There are no paid features, and it relies on donations to cover its operating costs.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

Archive.today doesn’t require a lot, only an internet connection, a browser and the URL of the public page you want to archive. Pages behind a login might not be captured well.

## Limitations

| Category                       | Limitation                                                                                                                                                                                                                                                                                                                                                                      | Why it matters                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **File-type support**          | <p>• No native capture of <strong>PDF, Flash, audio or most video containers</strong>; such pages resolve as blank or “unsupported” screens (<a href="https://en.wikipedia.org/wiki/Help%3AUsing_archive.today">Wikipedia</a>)<br>• Large pages over <strong>50 MB</strong> are rejected (<a href="https://en.wikipedia.org/wiki/Help%3AUsing_archive.today">Wikipedia</a>)</p> | Critical evidence embedded in those formats will be lost unless you save an external copy.      |
| **Dynamic & gated content**    | • Snapshots rely on the crawler’s public view; pages behind paywalls, log-ins or geoblocks often render partially or not at all ([Wikipedia](https://en.wikipedia.org/wiki/Help%3AUsing_archive.today))                                                                                                                                                                         | Don’t assume a pay-walled Facebook post or subscriber-only article will be preserved.           |
| **Robots & takedown**          | • The service **ignores robots.txt** and meta-noindex; it rarely removes pages except for DMCA/abuse cases ([Wikipedia](https://en.wikipedia.org/wiki/Help%3AUsing_archive.today))                                                                                                                                                                                              | Once archived, material is effectively permanent and may expose private or copyrighted data.    |
| **Performance & availability** | • High load, DDoS mitigation and **Cloudflare/DNS quirks** can cause outages or slow saves ([Wikipedia](https://de.wikipedia.org/wiki/Archive.today)) ([Reddit](https://www.reddit.com/r/DataHoarder/comments/118haqg/archiveph_webpage_archive_as_site_is/?utm_source=chatgpt.com))                                                                                            | Time-sensitive captures may fail; retry later or use a secondary archiver.                      |
| **Operator transparency**      | • Run by a largely **anonymous owner (“Denis Petrov”, likely an alias)** with no institutional backing ([Gyrovague](https://gyrovague.com/2023/08/05/archive-today-on-the-trail-of-the-mysterious-guerrilla-archivist-of-the-internet/))                                                                                                                                        | Long-term continuity is uncertain; treat the service as convenient but not canonical storage.   |
| **Longevity & redundancy**     | • Past funding gaps and DoS attacks prompted mirror moves and emergency Cloudflare shields ([Wikipedia](https://de.wikipedia.org/wiki/Archive.today))                                                                                                                                                                                                                           | Always dual-archive crucial evidence (e.g., Wayback + local WARC) to hedge against sudden loss. |

## Ethical Considerations

* **Copyright** – archiving paywalled or copyrighted pages may infringe local law; use for evidence, not redistribution.
* **Privacy** – snapshots freeze personal data that subjects might later delete; weigh necessity vs. exposure.
* **Redundancy** – for mission-critical evidence, double-save to Wayback or a local WARC because Archive.today offers no public deletion policy and no institutional preservation mandate.[bellingcat](https://www.bellingcat.com/resources/how-tos/2018/02/22/archive-open-source-materials/)

## Guides and articles

* **Bellingcat guide to archiving OSINT** (compares Archive.today & Wayback). ([bellingcat](https://www.bellingcat.com/resources/how-tos/2018/02/22/archive-open-source-materials/))
* **Chrome “Archive Page” button** – community extension for one-click saves and look-ups. ([Chrome](https://chrome.google.com/webstore/detail/archive-page/gcaimhkfmliahedmeklebabdgagipbia?catego...=\&hl=fil\&utm_source=chatgpt.com))
* **WS-DL blog on Memento support** – technical walk-through of the TimeGate API. ([blogspot.com](https://ws-dl.blogspot.com/2013/07/2013-07-09-archiveis-supports-memento.html))

## Tool provider

Unknown, you might want to read ["archive.today: On the trail of the mysterious guerrilla archivist of the Internet".](https://gyrovague.com/2023/08/05/archive-today-on-the-trail-of-the-mysterious-guerrilla-archivist-of-the-internet/)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Bellingcat Team |
|                 |
