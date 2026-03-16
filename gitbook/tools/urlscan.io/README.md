---
description: >-
  urlscan.io is an online tool that allows investigators to analyse, monitor,
  and document websites in real time.
---

# Urlscan.io

## URL

[https://urlscan.io/](https://urlscan.io/)

## Description

urlscan is a web-based service that provides detailed insights into the behaviour of websites by simulating user interactions and recording the resulting activities. When a URL is submitted, urlscan performs an automated browsing session, capturing various aspects such as the domains and IPs contacted, resources requested (like [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)), cookies set, and the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) content. Additionally, it takes a screenshot of the page and records [JavaScript global variables](https://developer.mozilla.org/en-US/docs/Glossary/Global_variable).

Investigators can use urlscan to analyse suspicious websites and online infrastructure without directly interacting with them. urlscan allows investigators to safely observe how a webpage behaves when loaded - capturing screenshots, network requests, links, redirects, and third-party resources. These artefacts can prove useful when examining disinformation portals, scam campaigns, or state-linked influence operations. For example, redirects can expose traffic-laundering infrastructure, shared scripts can indicate common operators, and embedded analytics or hosting details can link otherwise separate domains. These signals allow investigators to pivot using urlscan’s search functionality and connect individual sites to broader coordinated networks. By [searching archived scans](https://urlscan.io/search/#*), researchers can identify historical versions of sites, uncover infrastructure reuse across campaigns, link domains via shared IPs, certificates, or hosting providers, and build timelines showing when specific narratives or operations first appeared. This makes urlscan useful for attribution analysis, tracking coordinated online activity, and corroborating findings alongside other open source investigation sources, such as [WHOIS data](https://bellingcat.gitbook.io/toolkit/more/all-tools/domaintools-whois-lookup), [social media](https://bellingcat.gitbook.io/toolkit/categories/social-media), and leaked datasets.&#x20;

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

OpSec risk: Submitting URLs could alert the owner/operator if they monitor traffic. Archived scans, i.e. those already run previously by you or another user, may be safer. Archived scans can be found using the "Search" tab.

Misinterpretation risk: A shared IP or script doesn’t automatically prove sites are related.

## Guides and articles

Tool documentation: [https://docs.urlscan.io/](https://docs.urlscan.io/)

Web browser extensions for Chrome and Firefox: [https://urlscan.io/blog/2025/05/12/urlscan-extension/](https://urlscan.io/blog/2025/05/12/urlscan-extension/)

OSINT usage guide: [https://www.osintafrica.net/how-to-use-urlscan-part1/](https://www.osintafrica.net/how-to-use-urlscan-part1/)

## Tool provider

urlscan GmbH (Germany)

## Similar tools

No other tools listed with the same purpose... yet!

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Freya           |
