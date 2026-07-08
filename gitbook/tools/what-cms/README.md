---
updated: '2026-07-01'
description: >-
  WhatCMS is a web-based tool for anyone needing information about the
  technologies behind any website, including the content management system
  (CMS), e-commerce platforms, and hosting providers and web
---

# What CMS

## URL

[https://whatcms.org/](https://whatcms.org/)

## Description

WhatCMS is a tool that can quickly help you understand the CMS, like WordPress, Joomla, or Drupal, are used by a website, the company hosting it, the platform it was built on (such as Wix or Shopify), the programming language running on the server, the database storing its content, and any analytics or payment tools embedded in its pages.

Users working across a large number of websites, WhatCMS offers a domain-wide scan, a batch detection feature for uploading multiple URLs at once, and an API for automated queries. The batch and API features require registration and a paid subscription.

Paid subscriptions also allow batch processing which allows the user to upload lists of URL's to be analysed simultaneously. It also has Private Detections which gives you the option to detect other technologies such as databases.

<div align="center"><figure><img src="../../.gitbook/assets/Screenshot 2026-06-24 at 10.46.08.png" alt="" width="563"><figcaption><p>What CMS shows that Bellingcat uses Wordpress as its CMS. It also lists other categories like the programming language or type of databases that is used. In addition, it tries to identify some of Bellingcat's social media channels.</p></figcaption></figure></div>

Key Features

* Detects over [1,540](https://whatcms.org/) technology signatures across CMS, hosting, e-commerce, programming languages, databases, frameworks, analytics, and payment processors.
* Returns version numbers where the technology exposes them, which is useful for assessing whether software is current or has not been updated recently.
* JSON export for integration with other tools or databases.
* API access for automated, programmatic queries (free account required; rate-limited on the free tier).
* Batch URL detection for processing multiple sites in one operation (paid plans).

### Using WhatCMS

Go to whatcms.org, enter a URL, and click "Detect CMS". The results appear within seconds as a table listing each detected technology, its category, and version number where available. Users can analyse one URL every 10 seconds and perform up to 500 detections in total per month with a free account.

For larger investigations involving multiple websites, WhatCMS provides an API (Application Programming Interface), which allows researchers to automate detections instead of checking URLs manually. Batch detection, which involves submitting multiple URLs simultaneously, is only available on paid plans.

This makes the free tier suitable for small-scale investigations, while large infrastructure-mapping projects require a paid subscription.

<figure><img src="../../.gitbook/assets/batch detection CMS.png" alt=""><figcaption><p>Raw output from a batch detection submitted to the WhatCMS API. Each row represents one website from a list that was submitted all at once.</p></figcaption></figure>

The API batch detection feature returns structured data with one row per URL, including the number of detected technologies, the identified CMS, the full list of technologies, and their categories. For example, users can identify groups of websites using the same CMS, analytics services, JavaScript frameworks or other shared technologies.\
\
Batch detection is useful for infrastructure mapping, as it allows researchers to compare technical fingerprints across multiple websites. This can help identify clusters of sites using the same CMS, shared analytics tools, common JavaScript frameworks, or CDNs. Websites with unusually few detected technologies may also be flagged for further investigation, as this can indicate custom-built systems or deliberate attempts to obscure infrastructure. However, these results should be treated as indicators rather than proof, and ideally corroborated with additional sources such as domain registration or DNS analysis.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

The website has a free version with limited features which allows 500 detections and the API will allow you to request 1 URL every 10 seconds.\
The paid [subscriptions](https://whatcms.org/API/Plans) range from 15 to 600 euros per month, with options for Batch Processing and Private Detections.

## Requirements

You can use the basic features on the website for free, but registration is necessary if you want to use the API or other functions.

## Limitations

According to their own[ website](https://whatcms.org/), there are some limitations. Websites that use custom CMSs or security measures to hide their technologies might not be detected accurately. The free version also has limited usage which could restrict further/broader research.

## Ethical Considerations

Like every tool, ensure that the use of the tool is within the law, the site's terms of services, and ethical open source research guidelines.

## Guides and Articles

{% embed url="https://www.bellingcat.com/news/2022/05/24/fascist-fashion-how-mainstream-businesses-enable-the-sale-of-far-right-merchandise/" %}

## Tool Provider

whatcms.org, USA

| Paige Maintainer                                           |
| ---------------------------------------------------------- |
| Bellingcat Volunteer Team. Last updated in June/July 2026. |
