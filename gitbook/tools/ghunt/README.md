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

The GHunt CLI and Python package are free and open source.

The upstream GHunt README points to [OSINT Industries](https://osint.industries/) as “GHunt Online”. OSINT Industries’ public pricing page currently lists Basic at £19/month for 30 credits, Intermediate at £49/month for 100 credits, Advanced at £99/month for 300 credits, and GOV / Enterprise from £1,000/month. The pricing page defines credits as the total number of searches per month. Treat the hosted OSINT Industries platform as a separate service from the local GHunt CLI, with its own pricing, account requirements, data sources, and terms.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

You’ll need to be comfortable with the command line, installing Python packages with **pipx** or **pip**, and completing the login flow using the Companion browser extension. Running modules and reading JSON output require basic CLI literacy.

## Requirements

* **Runtime**: Python >=3.10. The project also states that it is compatible with Python 3.13.
* **Install**: pipx install ghunt is the recommended isolated install. Use pip install ghunt instead if you want to import GHunt as a Python library.
* **Authentication**: run ghunt login and use GHunt Companion. The extension can either send required cookies to GHunt while it listens on port 60067, or copy base64-encoded cookie material for pasting into GHunt. Manual cookie entry is also available.
*   **Companion extension**: available through [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/) and the [Chrome Web Store](https://chromewebstore.google.com/detail/ghunt-companion/dpdcofblfbmmnikcbmmiakkclocadjab) as of 2026-06-26. Both listings show version 2.0.0, last updated on 2022-12-03.

    Supported modules: email, gaia, drive, geolocate, and spiderdal. JSON export is supported for email, gaia, drive, and geolocate.

## Limitations

* **Account name retrieval is unreliable/absent** since \~**April 2024**; [multiple](https://github.com/mxrch/GHunt/issues/515) [issues](https://github.com/mxrch/GHunt/issues) remain open.
* Google log‑in endpoints and anti‑abuse systems change; expect **intermittent login errors** (e.g., 403s) and throttling/“Sorry” pages.
* Recent open GitHub [issues](https://github.com/mxrch/GHunt/issues/515) show that email lookup, account-name retrieval, and Google Maps review retrieval can still break after successful installation or authentication. Treat a failed or partial GHunt result as an operational limitation, not proof that an account, service association, review history, or other artefact does not exist.
* **Geolocate** returns approximate positions and won’t resolve every BSSID.
* Data scope is limited to what is **publicly visible** (or metadata exposed via share links); private data is out of scope.
* Using GHunt without permission may violate Google’s Terms or local laws; investigators should ensure a lawful basis and respect platform ToS. (General caution.)
* Results depend on data that is publicly accessible via Google services; some modules may return incomplete or outdated information.
* The tool may break if Google changes its internal APIs or login mechanisms.

## Ethical Considerations

* Ghunt is licensed under the [**AGPL v3**](https://opensource.org/license/agpl-v3)**,** and the developer emphasises it should be used only for personal, criminal investigations, penetration testing, or other lawful open‑source research.
* Use GHunt only for lawful, proportionate purposes and with appropriate authority or consent. Minimize collection and retention, avoid targeting vulnerable individuals, and document your methods. For good‑practice standards on online investigations, see the **Berkeley Protocol on Digital Open Source Investigations** (OHCHR/UC Berkeley).
* GHunt requires a logged-in Google session and uses credential material obtained through GHunt Companion or manual cookie entry. Treat cookies, copied base64 values, OAuth tokens, terminal logs, JSON exports, and screenshots as sensitive material. Do not paste them into shared chats, tickets, cloud notes, or public bug reports; redact them before sharing internal documentation.
* Use a dedicated research account and a separate browser profile or virtual machine rather than a personal Google account. GHunt activity can expose the research account to Google anti-abuse checks, login challenges, throttling, temporary lockouts, or account suspension if Google treats the activity as abusive or non-compliant.
* Google’s Terms of Service prohibit abuse of its services and state that Google may suspend or terminate access or delete a Google Account for material or repeated breaches, legal requirements, or conduct that causes harm or liability, including scraping content that does not belong to the user. This creates a concrete account-continuity and access risk for GHunt workflows.
* The upstream README’s own usage note limits intended use to personal investigations, criminal investigations, pentesting, or open-source projects; do not treat that as permission to target people without a lawful, proportionate basis.
* Document the lawful basis and proportionality of each query before using GHunt on a person. The tool can enrich a single email address into broader account and service clues, so collect only what is necessary, record uncertainty, and corroborate findings before publication or evidentiary use.
* Be careful with the Companion extension. It requires access to google.com data, and its Chrome Web Store listing says it handles authentication information. Install it only from the official store or source repository, remove it when not needed, and avoid running it in a browser profile used for personal accounts or unrelated investigations.
* Do not present GHunt output as private-data access. Its results are limited by what Google surfaces through public or semi-public service metadata and by whichever internal endpoints still work at the time of collection.

## Guides and articles

Joseph Jones: [Investigating Google Accounts with GHunt](https://web.archive.org/web/20221116232718/https://os2int.com/toolbox/investigating-google-accounts-with-ghunt/) attempted 2026-06-26;

&#x20; ; [https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/), seen 2026-06-26.

Jake Creps: [OSINT Newsletter - Ghunt](https://osintnewsletter.com/p/ghunt); attempted 2026-06-26;

**GHunt** [**README** ](https://github.com/mxrch/GHunt)**(setup & usage).** [https://github.com/mxrch/GHunt](https://github.com/mxrch/GHunt), seen 2026-06-26;

[**PyPI**](https://pypi.org/project/ghunt/) **project page (install, releases)** [https://pypi.org/project/ghunt/](https://pypi.org/project/ghunt/), seen 2026-06-26

[**GHunt Companion**](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/) **Firefox Add‑ons listing.** [https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/), seen 2026-06-26.

### Similar Tools

[Hunchly:](https://app.gitbook.com/o/WQpOq5ZFue4N6m65QCJq/s/UhIc563AQe7US5suleau/) use when you need to capture, hash, tag, and report the web pages you visit during a Google-account investigation. It preserves the browsing trail; it does not enumerate Google account metadata like GHunt.

[Maltego ](https://app.gitbook.com/o/WQpOq5ZFue4N6m65QCJq/s/zN2THeKre3FW0PtY09jc/)Google Social Network / Google Programmable Search Engine transforms: use when you want graph-based pivots from names or aliases into broader web and social profile discovery. It is better for relationship mapping than for GHunt’s Google-specific account and Drive metadata workflow.

[Sherlock](https://app.gitbook.com/o/WQpOq5ZFue4N6m65QCJq/s/jONzWxigquVNbAeyCM28/): use when your starting point is a username or alias rather than a Gmail address. Sherlock checks for matching usernames across hundreds of social networks, while GHunt focuses on Google-linked identifiers and artefacts.

[OSINT Industries:](https://osint.industries/) use when you need a hosted, paid identity-search platform instead of a local command-line workflow. Treat it as a separate service with its own pricing, data sources, and terms, even though the GHunt README points to it as an online version.

## Tool provider

GHunt is maintained by mxrch, a France-based security researcher and member of HideAndSec. [**HideAndSec**](https://hideandsec.sh/books/about-us/page/hideandsec), describes itself as a group of cybersecurity enthusiasts interested in software security, binary analysis, web security, cryptography, and IoT; the group operates a Capture‑the‑Flag team from France, founded in 2019. HideAndSec’s members include mxrch and other researchers.

**License:** **AGPL‑3.0‑only** (see LICENSE in repo / PyPI meta).

Github: [https://github.com/mxrch](https://github.com/mxrch)

Twitter: [https://twitter.com/mxrchreborn](https://twitter.com/mxrchreborn)

Website: [https://hideandsec.sh/books/about-us](https://hideandsec.sh/books/about-us)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

The GHunt CLI runs locally, but the login workflow relies on GHunt Companion. The Chrome Web Store listing states that GHunt Companion handles authentication information, and the Firefox Add-ons listing requires access to data for google.com. Review extension permissions and remove the extension when it is not in active use.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
