---
updated: '2026-06-26'
description: A command line tool for obtaining information about Google accounts.
---

# Ghunt

## URL

[https://github.com/mxrch/GHunt](https://github.com/mxrch/GHunt)\
(Current version: 2.3.4, released on PyPI on 2026-03-16. PyPI is the current release source to watch. GitHub Releases currently stop at v2.2.0, released on 2024-06-06; seen June 2026)

## Description

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.49.53 PM.png" alt=""><figcaption></figcaption></figure>

GHunt is a local command-line and Python framework for open-source research around Google accounts and Google-linked artefacts. It starts from identifiers such as a Gmail address, GAIA ID, Google Drive file or folder link, Wi-Fi BSSID, or Digital Asset Links data, then queries Google service surfaces and exposed metadata that are reachable to the authenticated session.

The usual workflow is: install GHunt with pipx, run ghunt login, authenticate with a Google session using GHunt Companion, then run a module from the command line. GHunt Companion can either send the required Google cookies to a local GHunt listener on port 60067 or copy base64-encoded cookie material for pasting into the login prompt. Since the v2.1.0 rewrite, GHunt uses an OAuth-token and Android-master-token based approach internally, while the Companion extension remains the supported helper for setup.

The main modules are email, gaia, drive, geolocate, and spiderdal. The email module pivots from a Gmail address; gaia pivots from a Google account identifier; drive extracts metadata from shared Drive links; geolocate estimates the location of a Wi-Fi access point from a BSSID; and spiderdal follows Google Digital Asset Links declarations to identify related web or Android app assets. Several modules support JSON export for documentation or later analysis.

GHunt should be treated as a pivot and enrichment tool, not as a verification tool. Returned account details, service associations, Drive metadata, BSSID locations, and linked assets should be corroborated with other sources before being used in reporting or evidence workflows.



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
