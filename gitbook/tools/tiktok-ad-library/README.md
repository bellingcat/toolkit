---
description: >-
  Search and review TikTok ads and related metadata for transparency and
  research.
---

# TikTok Ad Library

## URL

[https://library.tiktok.com/ads](https://library.tiktok.com/ads)&#x20;

## Description

TikTok Ad Library is part of TikTok’s Commercial Content Library. It allows anyone to browse ads that ran on TikTok in select regions and view key details, such as who paid for the ad, when it ran, where it ran, and a high-level summary of the intended audience. No account is required. [TikTok Support](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library)

Investigators use the Ad Library to map messaging and spending by advertiser, to verify claims about audience targeting, and to capture creative and copy before it disappears from timelines. TikTok launched the[ Commercial Content Library in 2023 to enhance ad transparency](https://newsroom.tiktok.com/en-eu/expanding-tiktoks-research-api-and-commercial-content-library), aligning with the European Union’s Digital Services Act.&#x20;

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>Faces blurred by the author.</p></figcaption></figure>

[A simple workflow](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library): choose **Ad Library**, select a target country, optionally set **Ad type** and **Ad published date**, then search by advertiser name or keywords. Open an ad’s details to see fields like advertiser, “ad paid for by”, first and last shown dates, estimated number of unique users who saw the ad, a targeting summary, and country‑level reach. Ads appear up to 24 hours after first view. Ads with policy violations may have details listed, but the creative is hidden.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Free; public web interface.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* No login required for the web interface; it works in a modern desktop browser.&#x20;
* Optional: A [separate Commercial Content API](https://developers.tiktok.com/products/commercial-content-api) exists for approved researchers; it is not needed for manual use.

## Limitations

* [Geographic scope](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library): includes ads targeted to users in the EEA, Switzerland, and the UK; other regions are not yet included.
* [Time scope](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library): contains ads published on or after 2022‑10‑01; items are retained for one year after last view.&#x20;
* [Metrics are coarse](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library); audience numbers are provided as ranges and targeting is summarized.&#x20;
* Delay: up to 24 hours before an ad appears after first view or campaign changes.&#x20;
* “Other commercial content” relies on creator disclosure labels; under‑reporting of influencer posts is possible.&#x20;
* The site is a JavaScript app; some pages can be more challenging to forensically archive than static pages. Archiving dynamic pages can be inconsistent; independent snapshots may miss embedded media; test your archiving method per investigation.

## Ethical Considerations

* Respect platform terms and local law; avoid republishing ad media with sensitive targeting without context.
* Be cautious when targeting vulnerable groups; targeted messaging can inadvertently reveal or imply sensitive attributes.
* Preserve provenance; when archiving, capture URLs and timestamps; consider adding independent web archive snapshots.

## Guide

[Commercial Content Library — Help Center](https://support.tiktok.com/en/account-and-privacy/personalized-ads-and-data/commercial-content-library)\
[Newsroom explainer on the Commercial Content Library](https://newsroom.tiktok.com/en-eu/expanding-tiktoks-research-api-and-commercial-content-library)\
[How to Investigate TikTok Like a Pro — Part II (Bellingcat)](https://www.bellingcat.com/resources/how-tos/2022/11/02/how-to-investigate-tiktok-using-tiktok-ukraine-research/)

## Tool provider

TikTok Technology Limited (TikTok); Ireland.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

