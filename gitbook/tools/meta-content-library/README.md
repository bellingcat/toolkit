---
description: >-
  Meta Content Library provides researchers with access to public Facebook,
  Instagram, and Threads content with search, filtering, and engagement metrics.
---

# Meta Content Library

## URL

[https://transparency.fb.com/tools/meta-content-library/](https://transparency.fb.com/tools/meta-content-library/)

## Description

The **Meta Content Library** is a research tool providing vetted academic and non-profit researchers access to public posts from Facebook, Instagram, and Threads. It allows near real-time and historical analysis of social media content, facilitating studies on political discourse, public health trends, misinformation, and more.

The platform features:

* **User Interface (UI):** A web-based dashboard for content search and filtering.
* **API Access:** Programmatic access for large-scale queries (Python or R via ICPSR's secure Virtual Data Enclave).
* **Advanced Filtering:** Keyword searches, engagement metrics, date ranges, and language filters.
* **Engagement Insights:** View counts, reactions, shares, and comments with hashed user IDs.
* **Historical Data:** Access dating back to Facebook's launch (2004), with updates in near real-time.
* **CSV Downloads:** Available for accounts meeting the "widely known" criteria (e.g., Facebook Pages with ≥15,000 followers, Instagram/Threads accounts with ≥25,000 followers).
* **Privacy Protection:** Content is subject to deletion/privacy settings, ensuring ethical use.

<details>

<summary>Details on Features and Limits</summary>

### Features and Functionality

* **Search Capabilities:** The Meta Content Library allows researchers to search across public Facebook and Instagram content with advanced filters. This includes keyword [queries with support for exact phrase matching](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/). Notably, the platform can even search for **text contained within images**, thanks to Meta’s OCR integration – searches now include[ text found in images posted on Facebook or Instagram](https://developers.facebook.com/docs/content-library-and-api/content-library-api/changelog)​.
* **UI and API Access:** The tool is accessible via a [web-based **graphical User Interface (UI)**](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) as well as a [**programmatic API**](https://www.icpsr.umich.edu/web/about/cms/5231), both backed by the same near-real-time database of public content​​. This dual access means researchers can either interact with the data through a visual interface or query it using code, according to their needs.
* **Content Coverage:** Meta Content Library provides comprehensive access to public posts from [**Pages, Groups, and Events on Facebook**,](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) plus public content from [**Instagram creator and business accounts**](https://www.icpsr.umich.edu/web/about/cms/5231)**.** As of September 2024, it was expanded to include **Threads** posts as well, further broadening the cross-platform scope of publicly accessible content​. All data is updated in near real-time, ensuring timely analysis.

### Engagement Metrics Available

* **Post Engagement Details:** For each post in the library, Meta provides engagement metrics. Researchers can see the number of **reactions** (including likes and other reactions), **comments**, and **shares** each post received​.
* **View Counts:** Importantly, the Content Library also surfaces **post view counts** – the number of times people viewed the post. This “exposure” data helps researchers understand reach, not just interaction. (For example, Meta notes that [_“the Content Library does provide view counts,”_](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) giving insight into how many people potentially saw a piece of content​.)
* **Comments Data:** In addition to posts, **public comments** on Facebook (and recently Instagram comments via the API) are  accessible, allowing analysis of discussion threads in public forums​. All these metrics and content types are available both through the UI and via API output in the data.

### Eligible Content and CSV Download Criteria

* **“Widely Known” Accounts:** The Content Library focuses on posts from high-profile public sources. According to Meta’s documentation, it includes: [**Facebook Pages** with **15,000 or more** likes _or_ followers, and **public personal accounts** that are either **verified** or have **25,000+ followers**​. ](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)(This covers prominent individuals and organizations on Facebook, as well as Instagram/Threads accounts meeting that follower threshold or verification status.) In other words, only content from these **widely-followed or verified accounts** is available for search and CSV export – aligning with Meta’s definition of “widely-known figures and organizations” ​([assets.mofoprod.net](https://assets.mofoprod.net/network/documents/Public_Data_Access_Programs__A_First_Look_Final_cExWfcH.pdf)).
* **Cross-Platform Inclusion:** This criterion applies across Facebook and Instagram. For example, Instagram **business and creator accounts** that are public and have at least 25k followers (or a verification badge) are included in the library ​([socialmediaarchive.org](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)). The same goes for Threads profiles (which are tied to Instagram accounts) meeting the 25k-follower mark. On Facebook, public profiles (personal accounts) with a [blue check or 25k followers qualify, as do Pages with 15k fans​.](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en) This ensures that CSV downloads are limited to content from Pages and users with significant public followings.
* **CSV Exports:** Researchers can download query results as **CSV files** through the Content Library interface for these eligible accounts. Meta officially enabled CSV exports of “certain publicly-accessible content posted by widely-known figures” in 2024 as part of the toolkit’s features​. This allows offline analysis of posts and their metrics. (For instance, a researcher could query all posts matching a keyword from high-follower accounts and export the data for analysis in a spreadsheet or statistical software.)

### Query Limits and Data Usage Quotas

* **Weekly Query Budget:** Meta imposes a **rate limit** on how much data can be retrieved to ensure manageable use. Official documentation specifies a maximum of **500,000 content items** (posts, etc.) that each researcher can retrieve [in a rolling **seven-day** period, counting both UI and API queries together](https://code.peren.gouv.fr/hackathon-2024/challenge-2-contributions/team-12-ragtag/-/blob/main/platform-docs-versions/Facebook_Content-Library-API/Content-Library-API%20Documentation.md?ref_type=heads)​. In other words, the Content Library **caps results at 500,000 per week** per user. This limit is in line with Meta’s data access policies to prevent abuse while still allowing large-scale research queries.
* **CSV Download Limits:** Crucially, any results downloaded as CSV count toward that weekly quota. Meta notes that [_“results in downloaded CSV files from Content Library will be counted towards your 500,000 total search results limit_](https://developers.facebook.com/docs/content-library-and-api/content-library/)_”_&#x200B;. There is no separate higher limit for CSV exports – the same 500k/week cap applies. If a researcher exports 100k rows today, it consumes part of the 500k allotment for the current 7-day window.
* **Other Limits:** Aside from the 500k-per-week retrieval cap, all queries are subject to the platform’s standard rate limiting rules (e.g. requests per second via API, etc., as outlined in developer docs). The tool does not allow tracking beyond this limit, and it currently does [**not support historical post performance tracking over time**](https://www.icpsr.umich.edu/web/about/cms/5231) beyond the data returned at query time (unlike some features CrowdTangle had). There is also an **access restriction** – the Content Library is **only available to vetted academic and non-profit researchers**, who must apply through the Meta Transparency Center/ICPSR process.&#x20;

</details>



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Access is free but limited to approved researchers through the ICPSR application process.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

Moderate difficulty: The UI is user-friendly, but API access requires coding knowledge and data analysis skills.

## Requirements

* Researchers must be affiliated with an academic or non-profit institution.
* Applications are vetted by the **Inter-university Consortium for Political and Social Research**[ **(ICPSR)**](https://www.icpsr.umich.edu/).
* No IRB approval required, but applicants must submit a research agenda.
* UI access is available upon approval; API access requires a separate virtual data enclave (VDE) credential.

## Limitations

* **Restricted Access:** Only available to approved researchers (not general public or journalists).
* **Data Privacy:** Deleted/private posts become unavailable; raw data cannot be exported from API.
* **Query Limits:** API access has a weekly cap of 500,000 retrieved content items.
* **Replication Challenges:** Due to content deletion or privacy changes, perfect replication of results can be difficult.
* **No Personal Identifiers:** User data is hashed unless the account is a public entity.

## Ethical Considerations

* **Privacy Compliance:** Researchers must respect data privacy and ethical standards.
* **No User Tracking:** The platform does not allow longitudinal tracking of individuals.
* **Use Limitations:** Data cannot be used for surveillance or commercial purposes.

## Guide

* **Official Documentation:** [Meta Transparency Center](https://transparency.fb.com/tools/meta-content-library/)
* **ICPSR Social Media Archive:** [https://www.icpsr.umich.edu/](https://www.icpsr.umich.edu/)

## Tool provider

Meta Platforms, Inc.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |

