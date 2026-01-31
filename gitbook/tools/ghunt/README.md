---
updated: '2025-10-31'
description: A command line tool for obtaining information about Google accounts.
---

# Ghunt

## URL

[https://github.com/mxrch/GHunt](https://github.com/mxrch/GHunt)\
(current [version 2.3.3](https://pypi.org/project/ghunt/), Jan 25, 2025; latest on PyPI. GitHub tag: **v2.2.0** released 2024‑06‑06)

## Description

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.49.53 PM.png" alt=""><figcaption></figcaption></figure>

GHunt is a local, CLI‑based framework for investigating Google accounts and artifacts. It authenticates with a Google session (via the [**GHunt Companion** browser extension](https://github.com/mxrch/ghunt_companion); [Mozilla addon](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/)) and exposes modules to pivot from inputs such as Gmail address, GAIA ID, Google Drive links, Wi‑Fi BSSID, and Digital Asset Links (DAL). Typical outputs include GAIA ID discovery from an email, service associations, Drive file/folder metadata, and approximate BSSID geolocation; JSON export is supported for several modules. As of v2.1.0, GHunt moved to an OAuth‑token based login flow while remaining compatible with the Companion extension.

Ghunt runs locally as a Python application. After installation with pipx and authenticating via the Ghunt Companion browser extension, users can run modules from the command line to search for information. The **email** module takes a Gmail address and returns the [GAIA ID](https://developers.google.com/issue-tracker/concepts/access-control), associated YouTube channel, public photos, Drive files and other data. The **gaia** module queries a GAIA ID to find related Google services; the **drive** module extracts metadata from a shared Drive link; the **geolocate** module geolocates a BSSID, showing the approximate location of a Wi‑Fi access point.

Version 2 introduced **Spiderdal, which follows** [**digital asset links (DALs)**](https://developers.google.com/digital-asset-links) **to uncover assets, such as apps,** associated with the target.

Ghunt relies on your own Google session cookies to access publicly visible data. You authenticate by running `ghunt login` and selecting the option to paste base64‑encoded cookies from the browser extension. Once authenticated, you can run modules and optionally export results to JSON. The tool is widely used by OSINT practitioners, law enforcement, and journalists to pivot from basic identifiers into broader investigations.

GHunt is designed to gather detailed information about Google accounts using the target's Gmail address. By using publicly accessible data, Ghunt surfaces various aspects of a Google user's digital footprint, including their YouTube channels, Google Photos, Google Maps reviews, and more. By analyzing this information, GHunt can provide insights into the target's online activities and digital footprint.

The developers have provided 2 scripts that leverage the tool [here](https://github.com/mxrch/GHunt/tree/master/examples).

The easiest way to authenticate into Ghunt is to use authentication option 2 alongside the Ghunt browser extension. After selecting option 2, go to your browser extension and obtain the base64-encoded credentials. You can use these to authenticate to Ghunt.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.47.52 PM.png" alt=""><figcaption></figcaption></figure>

Once authenticated, you have the following search options:

* **email**: Get information on an email address.
* **gaia**: Get information on a [Gaia ID](https://developers.google.com/issue-tracker/concepts/access-control).
* **drive**: Get information on a Drive file or folder.
* **geolocate**: Geolocate a [BSSID](https://www.gorelo.io/blog/what-is-bssid/).

<figure><img src=".gitbook/assets/Screenshot 2024-08-20 at 12.06.20 PM.png" alt=""><figcaption><p>A sample search using a Gmail email address</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The CLI is free and open‑source.

A hosted “GHunt Online” is offered by [OSINT Industries](https://www.osint.industries/pricing) with plans advertised at **£19/month (30 searches)**, **£49/month (100)**, **£99/month (300)**, and **Gov/Enterprise from £1,000/month.**

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

You’ll need to be comfortable with the command line, installing Python packages with **pipx** or **pip**, and completing the login flow using the Companion browser extension. Running modules and reading JSON output require basic CLI literacy.

## Requirements

* **Runtime:** Python **≥3.11** (project notes 3.13 compatibility). \[1] [PyPI](https://pypi.org/project/ghunt/)
* **Install:** `pipx install ghunt` (recommended isolated install) or `pip install ghunt` for library use.
* **Auth:** Run `ghunt login` and use the **GHunt Companion** extension to either (1) send cookies to a local listener or (2) paste base64‑encoded cookies; manual entry also exists. Since **v2.1.0 (2024‑01‑16)** GHunt internally uses an **OAuth token** approach; the extension remains compatible.
* **Companion extension:** Available on **Firefox Add‑ons** and the **Chrome Web Store**.
* **Supported modules/features:**\
  – `email` — enumerate info from a Gmail address (e.g., GAIA ID, linked services); `--json` supported.\
  – `gaia` — query a GAIA ID for related Google services; `--json` supported.\
  – `drive` — extract metadata from shared Drive file/folder; `--json` supported.\
  – `geolocate` — geolocate a BSSID (no Google API key required).\
  – `spiderdal` — follow Digital Asset Links (DAL) to surface associated assets.\
  • **Optional:** Use `pip` (instead of `pipx`) if importing GHunt as a Python library.

## Limitations

* **Account name retrieval is unreliable/absent** since \~**April 2024**; [multiple](https://github.com/mxrch/GHunt/issues/515) [issues](https://github.com/mxrch/GHunt/issues) remain open.
* Google log‑in endpoints and anti‑abuse systems change; expect **intermittent login errors** (e.g., 403s) and throttling/“Sorry” pages.
* **Geolocate** returns approximate positions and won’t resolve every BSSID.
* Data scope is limited to what is **publicly visible** (or metadata exposed via share links); private data is out of scope.
* Using GHunt without permission may violate Google’s Terms or local laws; investigators should ensure a lawful basis and respect platform ToS. (General caution.)
* Results depend on data that is publicly accessible via Google services; some modules may return incomplete or outdated information.
* The tool may break if Google changes its internal APIs or login mechanisms.

## Ethical Considerations

* Ghunt is licensed under the [**AGPL v3**](https://opensource.org/license/agpl-v3)**,** and the developer emphasises it should be used only for personal, criminal investigations, penetration testing, or other lawful open‑source research.
* Use GHunt only for lawful, proportionate purposes and with appropriate authority or consent. Minimize collection and retention, avoid targeting vulnerable individuals, and document your methods. For good‑practice standards on online investigations, see the **Berkeley Protocol on Digital Open Source Investigations** (OHCHR/UC Berkeley).

## Guides and articles

Jake Creps: [OSINT Newsletter - Ghunt](https://osintnewsletter.com/p/ghunt)

Joseph Jones: [Investigating Google Accounts with GHunt](https://web.archive.org/web/20221116232718/https://os2int.com/toolbox/investigating-google-accounts-with-ghunt/)

**GHunt** [**README** ](https://github.com/mxrch/GHunt)**(setup & usage).**

[**PyPI**](https://pypi.org/project/ghunt/) **project page (install, releases).**

[**GHunt Companion**](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/) **Firefox Add‑ons listing.**

## Tool provider

Ghunt is developed by French security researcher **Thomas “mxrch” Hertzog**. He is a member of [**HideAndSec**](https://hideandsec.sh/books/about-us/page/hideandsec), a group of cybersecurity enthusiasts interested in software security, binary analysis, web security, cryptography, and IoT; the group operates a Capture‑the‑Flag team from France, founded in 2019. HideAndSec’s members include mxrch and other researchers.

**License:** **AGPL‑3.0‑only** (see LICENSE in repo / PyPI meta).

Github: [https://github.com/mxrch](https://github.com/mxrch)

Twitter: [https://twitter.com/mxrchreborn](https://twitter.com/mxrchreborn)

Website: [https://hideandsec.sh/books/about-us](https://hideandsec.sh/books/about-us)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
