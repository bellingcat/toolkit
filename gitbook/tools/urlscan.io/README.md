---
description: >-
  urlscan.io is a powerful online tool that allows investigators to analyse,
  monitor, and document websites in real time.
---

# Urlscan.io

## URL

[https://urlscan.io/](https://urlscan.io/)

## Description

urlscan is a web-based service that provides detailed insights into the behaviour of websites by simulating user interactions and recording the resulting activities. When a URL is submitted, urlscan performs an automated browsing session, capturing various aspects such as the domains and IPs contacted, resources requested (like JavaScript and CSS), cookies set, and the Document Object Model (DOM) content. Additionally, it takes a screenshot of the page and records JavaScript global variables.

The platform offers different scan visibility options: Public, Unlisted, and Private. Public scans are visible to all users, Unlisted scans are not indexed or searchable but can be accessed via a direct link, and Private scans are only accessible to the submitter.

urlscan also provides a robust API that allows users to programmatically submit URLs for scanning, retrieve scan results, and search through past scans. The API supports features like search queries with filters, retrieval of scan details, and management of API keys.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Free for manual usage. API & Threat Hunting plan details: [https://urlscan.io/pricing/](https://urlscan.io/pricing/)

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

N/A – No account required for searching

## Limitations

Public Scans Visibility: By default, scans are public. If a URL contains sensitive information, it's advisable to set the scan visibility to "Unlisted" or "Private" to prevent unintended exposure.

Scope: urlscan will not work for all sites as some block automated scanners, are on deny lists and/or urlscan cannot reach them.

Authentication Requirements: If a site requires a session cookie, token, or login, urlscan can't get past the authentication wall. This could result in only the login page being captured or no result at all.

## Ethical Considerations

Avoid sensitive URLs: Scanning personal links, logins, or unique tracking tokens could expose personal data.

OpSec risk: Submitting URLs could alert the owner/operator if they monitor traffic. Archived scans may be safer.

Misinterpretation risk: A shared IP or script doesn’t automatically prove sites are related.

## Guides and articles

Tool documentation: [https://docs.urlscan.io/](https://docs.urlscan.io/)

Web browser extensions for Chrome and Firefox: [https://urlscan.io/blog/2025/05/12/urlscan-extension/](https://urlscan.io/blog/2025/05/12/urlscan-extension/)

OSINT usage guide: [https://www.osintafrica.net/how-to-use-urlscan-part1/](https://www.osintafrica.net/how-to-use-urlscan-part1/)

## Tool provider

urlscan GmbH

## Similar tools

No other tools listed with the same purpose... yet!

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Freya           |
