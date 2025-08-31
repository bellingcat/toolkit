---
description: A command line tool for obtaining information about Google accounts.
---

# Ghunt

## URL

[https://github.com/mxrch/GHunt](https://github.com/mxrch/GHunt)\
(current version 2.2.0, released June 6th 2024, as of Aug. 2025)

## Description

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.49.53 PM.png" alt=""><figcaption></figcaption></figure>

Ghunt runs locally as a Python application. After installation with pipx and authenticating via the Ghunt Companion browser extension, users can run modules from the command line to search for information. The **email** module takes a Gmail address and returns the [GAIA ID](https://developers.google.com/issue-tracker/concepts/access-control), associated YouTube channel, public photos, Drive files and other data. The **gaia** module queries a GAIA ID to find related Google services; the **drive** module extracts metadata from a shared Drive link; the **geolocate** module geolocates a BSSID, showing the approximate location of a Wi‑Fi access point. Version 2 introduced **Spiderdal, which follows** [**digital asset links (DALs)**](https://developers.google.com/digital-asset-links) **to uncover assets, such as apps,** associated with the target.

Ghunt relies on your own Google session cookies to access publicly visible data. You authenticate by running `ghunt login` and selecting the option to paste base64‑encoded cookies from the browser extension. Once authenticated, you can run modules and optionally export results to JSON. The tool is widely used by OSINT practitioners, law enforcement, and journalists to pivot from basic identifiers into broader investigations.

GHunt is designed to gather detailed information about Google accounts using the target's Gmail address. By using publicly accessible data, Ghunt surfaces various aspects of a Google user's digital footprint, including their YouTube channels, Google Photos, Google Maps reviews, and more. By analyzing this information, GHunt can provide insights into the target's online activities and digital footprint.&#x20;

Ghunt has two supported browser extensions for [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/) and [Google Chrome](https://chromewebstore.google.com/detail/ghunt-companion/dpdcofblfbmmnikcbmmiakkclocadjab).

The developers have provided 2 scripts that leverage the tool [here](https://github.com/mxrch/GHunt/tree/master/examples).

The easiest way to authenticate into Ghunt is to use authentication option 2 alongside the Ghunt browser extension. After selecting option 2, go to your browser extension and obtain the base64-encoded credentials. You can use these to authenticate to Ghunt.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.47.52 PM.png" alt=""><figcaption></figcaption></figure>

Once authenticated, you have the following search options:

* **email**: Get information on an email address.&#x20;
* **gaia**: Get information on a [Gaia ID](https://developers.google.com/issue-tracker/concepts/access-control).&#x20;
* **drive**: Get information on a Drive file or folder.&#x20;
* **geolocate**: Geolocate a [BSSID](https://www.gorelo.io/blog/what-is-bssid/).

<figure><img src=".gitbook/assets/Screenshot 2024-08-20 at 12.06.20 PM.png" alt=""><figcaption><p>A sample search using a Gmail email address</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

Requires familiarity with the command line, installation of Python packages, and extraction of session cookies via a browser extension.

## Requirements

* **Python 3.11+** and `pipx` for isolated installation:contentReference\[oaicite:17]{index=17}; alternatively install with `pip` for library use.
* **Ghunt Companion browser extension** for Firefox or Chrome to obtain base64‑encoded cookies for authentication.
* A valid Google session (i.e., [a logged-in account](https://developers.google.com/identity/oauth2/web/guides/how-user-authz-works)) is required to generate the necessary cookies.
* Optional: GAIA ID, Google Drive share link, [BSSID](https://www.arubanetworks.com/techdocs/Glossary/Content/Glossary/B/BSSID.html), or digital asset link, depending on the module.

## Limitations

* Since April 2024, Ghunt no longer shows the name of the account holder in the results it returns. Ghunt developers [commented](https://github.com/mxrch/GHunt/issues/515#issuecomment-2040998530) that this was a feature that Google has actively tried to block and advised users not to expect the return of this feature.&#x20;
* Results depend on data that is publicly accessible via Google services; some modules may return incomplete or outdated information.
* Geolocation using a BSSID may only provide approximate results, and there is no guarantee every BSSID can be located.
* The tool may break if Google changes its internal APIs or login mechanisms.
* Running Ghunt against Google accounts without consent could violate Google’s terms of service and local laws.

## Ethical Considerations

* Ghunt is licensed under the [**AGPL v3**](https://opensource.org/license/agpl-v3)**,** and the developer emphasises it should be used only for personal, criminal investigations, penetration testing, or other lawful open‑source research.
* Always obtain consent where appropriate and respect privacy; do not use Ghunt to harass or stalk individuals.
* Be mindful that collecting personal data from public profiles can expose sensitive information; handle findings responsibly and store results securely.

## Guides and articles

Jake Creps: [OSINT Newsletter - Ghunt](https://osintnewsletter.com/p/ghunt)

Joseph Jones: [Investigating Google Accounts with GHunt](https://web.archive.org/web/20221116232718/https://os2int.com/toolbox/investigating-google-accounts-with-ghunt/)

## Tool provider

Ghunt is developed by French security researcher **Thomas “mxrch” Hertzog**. He is a member of [**HideAndSec**](https://hideandsec.sh/books/about-us/page/hideandsec), a group of cybersecurity enthusiasts interested in software security, binary analysis, web security, cryptography, and IoT; the group operates a Capture‑the‑Flag team from France, founded in 2019. HideAndSec’s members include mxrch and other researchers.

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
