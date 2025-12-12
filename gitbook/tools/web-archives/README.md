---
description: >-
  A browser extension to view archived and cached versions of a website on
  multiple archiving sites.
---

# Web Archives

## URL

[https://github.com/dessant/web-archives](https://github.com/dessant/web-archives)

[Chrome](https://chrome.google.com/webstore/detail/web-archives/hkligngkgcpcolhcnkgccglchdafcnao) | [Firefox](https://addons.mozilla.org/firefox/addon/view-page-archive/) | [Edge](https://microsoftedge.microsoft.com/addons/detail/web-archives/apcfghlggldjdjepjnahfdjgdcdekhda) | [Opera](https://addons.opera.com/extensions/details/view-page-archive-cache/) | [Safari](https://apps.apple.com/us/app/web-archives-for-safari/id1603181853?platform=mac)\
(current version: 7.1.0, Oct 2025)

## Description

Web Archives is a browser extension that opens archived or cached versions of a URL across multiple services (e.g., Internet Archive’s Wayback Machine, Archive.today, Memento). You trigger lookups from the toolbar or the context menu; the extension then **sends the selected URL to the chosen archive** and opens results in a new tab. It does not crawl or store pages itself. Typical pivots include checking historical versions, retrieving removed pages, and comparing captures across archives.

**Example use case:** You are investigating a website that frequently updates its content or might remove sensitive pages. Web Archives enables you to quickly check archived versions from different platforms to track changes or retrieve deleted content.

## How to use

You can start searches directly from the context menu or the browser toolbar.&#x20;

### Fetch the archives of a current page from the extension menu

Open the extension menu and select the desired engine. This will open a new tab with the results.

<figure><img src=".gitbook/assets/demo (5).gif" alt=""><figcaption><p>You can also fetch on all engines simultaneously</p></figcaption></figure>

### Fetch the archives for a link using the context menu

If your target is a link available in the current page, you can right-click on the link, select "Web Archives" context menu and then select the desired engine.

<figure><img src=".gitbook/assets/demo2 (1).gif" alt=""><figcaption><p>You can use Web Archives' context menu on a link</p></figcaption></figure>

### Fetch the archive of a given URL from the clipboard

From the extension menu, select the URL Mode and then copy-paste the target URL.



<figure><img src=".gitbook/assets/demo3url (1).gif" alt=""><figcaption><p>The URL Mode allows you to fetch for a URL without opening it, that makes you check a resource passively, without interacting with the target.</p></figcaption></figure>

### Change behavior to open new tabs in the background

By default, Web Archives will open the results in a new tab and switch focus to it. If you prefer to open the tab in the background and view the results later, you can adjust this behavior in **Options > Miscellaneous >&#x20;**_**Open new tabs in the background**_.

<figure><img src=".gitbook/assets/demo4 (1).gif" alt=""><figcaption><p>Now tabs will open in the background and you can switch focus to it later.</p></figcaption></figure>

You can also choose the desired engines and re-order them in the Options.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open source.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Platforms/browsers**: Chrome, Firefox (also on Android), Edge, Opera, and Safari (macOS). **Safari requires macOS ≥12.0**. [Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/view-page-archive/)
* **Install**: Store listings — **Chrome** v7.1.0 (updated **2025‑10‑13**), **Firefox** v7.1.0 (updated **2025‑10‑12**), **Safari** v7.1.0 (updated **2025‑10‑13**). **Opera** listing currently **v4.1.0 (2023‑07‑20)**. Edge listing exists, but the version/date isn’t visible in the static page capture here. _To verify_: open the Edge listing in a browser for the precise version/date.&#x20;
* **Auth/tokens**: None. The tool only forwards the URL you choose to the selected archive. [Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/view-page-archive/)
* **Supported engines/features** (examples):\
  – [Wayback Machine](https://web.archive.org/); Archive.today (aka [**archive.is**](https://archive.is/) **/ archive.ph**); [**Memento Time Travel**](https://timetravel.mementoweb.org/); [**Megalodon**](https://megalodon.jp/) (JP); [**Perma.cc**](https://perma.cc/); [**Ghostarchive**](https://ghostarchive.org/); [**WebCite**](https://webcitation.org/); [**Yandex Cache**](https://www.yandex.com/). [GitHub](https://github.com/dessant/web-archives/wiki/Search-engines)\
  – **New in v7.1.0**: search archived repositories on **Software Heritage**. [Apple](https://apps.apple.com/us/app/web-archives-for-safari/id1603181853?mt=12)\
  – Search modes: **Tab** (current page) and **URL** (custom). Trigger via toolbar or right‑click. [Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/view-page-archive/)
* **Permissions**: Requires access to tabs and to read the current page URL; on Firefox, “Access your data for all websites” is listed. Chromium‑based variants may need a setting to allow access to search results pages (Opera notes this explicitly). [Mozilla Add-on](https://addons.mozilla.org/firefox/addon/view-page-archive/)

## Limitations

* Results depend entirely on third‑party archives’ coverage and uptime; no capture is guaranteed. Wayback’s help notes gaps and that some pages aren’t archived or may only have nearest‑date captures. [help.archive.org](https://help.archive.org/help/using-the-wayback-machine/?utm_source=chatgpt.com)
* **Google Cache is deprecated**: Google removed cache links (Feb 2024) and later killed the `cache:` operator (Sep 2024), so any “Google cache” engine entries will not work. [The Verge](https://www.theverge.com/2024/2/2/24058985/google-search-cache-feature-discontinued?utm_source=chatgpt.com)
* Archives may exclude pages due to robots policies or site‑owner/legal requests; password‑protected or form‑gated content generally isn’t archived. [help.archive.org](https://help.archive.org/help/wayback-machine-general-information/?utm_source=chatgpt.com)
* Privacy context: the extension **sends the URL you select** to the chosen service (discloses investigative interest to that service). [Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/view-page-archive/)
* Store version skew: [Opera’s public listing](https://addons.opera.com/extensions/details/view-page-archive-cache/) is older (v4.1.0, 2023‑07‑20) while Chrome/Firefox/Safari are on 7.1.0; confirm Edge store version manually if needed.

## Ethical Considerations

Use lawfully and proportionately. Be mindful that querying archives can reveal interest in a target resource to third‑party services; minimize unnecessary lookups and avoid soliciting or sharing sensitive personal data. For methodology and evidentiary handling, align with the **Berkeley Protocol on Digital Open Source Investigations** (OHCHR) and your organizational policies.

### Guides and articles

**GitHub README (project overview & screenshots),** dessant/web‑archives. [GitHub](https://github.com/dessant/web-archives/blob/main/README.md)\
**Search engines list (official wiki),** supported archives and notes. [GitHub](https://github.com/dessant/web-archives/wiki/Search-engines)\
**Firefox Add‑ons “About this extension”**, usage, permissions, modes. [Mozilla Add-ons](https://addons.mozilla.org/firefox/addon/view-page-archive/)\
**Chrome Web Store overview**, description, version/date, privacy declaration. [chrome.google.com](https://chrome.google.com/webstore/detail/web-archives/hkligngkgcpcolhcnkgccglchdafcnao)\
**Wayback Machine help: Using the Wayback Machine**, how captures/coverage work. [help.archive.org](https://help.archive.org/help/using-the-wayback-machine/)

## Tool provider

Armin Sebastian ([@dessant on GitHub](https://github.com/dessant)) is an EU-based developer specializing in open source browser extensions. Presences: [**armin.dev**](https://armin.dev/) (listed on Chrome store).

**License**: **GPL‑3.0‑only,** see LICENSE in the repository and AMO license field

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

Extension declares **“no data collected”** on the Chrome Web Store, and **“Data Not Collected”** on the Mac App Store. Individual archive services set their own cookies/policies; not assessed here. The tool itself does not use tracking cookies but the archving sites/search engines may use them. Be mindful of the their privacy policies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

