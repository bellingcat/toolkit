---
description: >-
  Meta Content Library is a controlled-access tool that lets approved academic
  and non-profit researchers search the full public archive of Facebook,
  Instagram, and Threads posts, in near-real-time.
---

# Meta Content Library

## URL

[https://transparency.meta.com/researchtools/meta-content-library](https://transparency.meta.com/researchtools/meta-content-library)/\


{% hint style="info" %}
While this is a free tool, access is strictly limited to academic researchers and journalists working at not-for-profit organisations. Individuals can [apply for access](https://docs.google.com/document/d/1iN4KOvFaYGZro23cB4j1FveouXMBcZnKl-yTUyx6fCg/) to these tools at the[ Inter-university Consortium for Political and Social Research (ICPSR)](https://en.wikipedia.org/wiki/Inter-university_Consortium_for_Political_and_Social_Research) at the University of Michigan. If you intend to use it for research purposes, make sure to keep in mind the application time: The review process typically takes between [2-4 weeks](https://socialmediaarchive.org/pages/?page=FAQs\&ln=en), but can take up to[ 3-6 months](https://www.researchdatagov.org/faq) for multi-agency data access requests or if [additional reviews](https://socialmediaarchive.org/pages/?page=Meta%20Content%20Library%20FAQs\&ln=en) are needed.
{% endhint %}

<p align="center">(as of the most recent update from May 5th, 2025)<br></p>

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

## Description

The **Meta Content Library** is a research tool that provides vetted academic and non-profit researchers with access to public posts from Facebook, Instagram, and Threads. It enables near real-time and historical analysis of social media content, facilitating studies on political discourse, public health trends, misinformation, and other topics. (Replaces deprecated CrowdTangle for research at scale; the only Meta-sanctioned source that exposes view-count (“exposure”) data.)

The platform features:

* [**User Interface**](https://en.wikipedia.org/wiki/User_interface) **(UI):** A web-based dashboard for content search and filtering.
* [**API** ](https://en.wikipedia.org/wiki/API)**Access:** Programmatic access for large-scale queries (Python or R via ICPSR's secure Virtual Data Enclave).
* [Since Feb 2025](https://transparency.meta.com/researchtools/meta-content-library), the Library includes **all public Threads posts** that meet the 1 k-follower rule; engagement metrics and OCR text-in-image search work for Threads too.
* **Advanced Filtering:** Keyword searches, engagement metrics, date ranges, and language filters.
* **Engagement Insights:** View counts, reactions, shares, and comments with hashed user IDs.
* **Historical Data:** Access dating back to Facebook's launch (2004), with updates in near real-time.
* [**CSV** ](https://en.wikipedia.org/wiki/Comma-separated_values)**Downloads:** Available for accounts meeting the "widely known" criteria (e.g., **Facebook Pages** with ≥15,000 followers, **Instagram** accounts with ≥25,000 followers, **Threads** public profiles **≥ 1 000 followers**). CSV export is **only for Facebook & Instagram** posts that meet the “widely-known” criteria; Threads is UI-only for now.
* **Privacy Protection:** Content is subject to deletion/privacy settings, ensuring ethical use.

<details>

<summary>Details on Features and Limits</summary>

#### Features and Functionality

* **Search Capabilities:** The Meta Content Library allows researchers to search across public Facebook and Instagram content with advanced filters. This includes keyword [queries with support for exact phrase matching](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/). Notably, the platform can even search for **text contained within images**, thanks to Meta’s OCR integration – searches now include[ text found in images posted on Facebook or Instagram](https://developers.facebook.com/docs/content-library-and-api/content-library-api/changelog)​.
* **UI and API Access:** The tool is accessible via a [web-based **graphical User Interface (UI)**](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) as well as a [**programmatic API**](https://www.icpsr.umich.edu/web/about/cms/5231), both backed by the same near-real-time database of public content​​. This dual access means researchers can either interact with the data through a visual interface or query it using code, according to their needs.
* **Content Coverage:** Meta Content Library provides comprehensive access to public posts from [**Pages, Groups, and Events on Facebook**,](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) plus public content from [**Instagram creator and business accounts**](https://www.icpsr.umich.edu/web/about/cms/5231)**.** As of [September 2024](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/), it was expanded to include **Threads** posts as well, further broadening the cross-platform scope of publicly accessible content​. All data is updated in near real-time, ensuring timely analysis.

#### Engagement Metrics Available

* **Post Engagement Details:** For each post in the library, Meta provides engagement metrics. Researchers can see the number of **reactions** (including likes and other reactions), **comments**, and **shares** each post received​.
* **View Counts:** Importantly, the Content Library also surfaces **post view counts** – the number of times people viewed the post. This “exposure” data helps researchers understand reach, not just interaction. (For example, Meta notes that [_“the Content Library does provide view counts,”_](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) giving insight into how many people potentially saw a piece of content​.)
* **Comments Data:** In addition to posts, **public comments** on Facebook (and recently Instagram comments via the API) are accessible, allowing analysis of discussion threads in public forums​. All these metrics and content types are available both through the UI and via API output in the data.

#### Eligible Content and CSV Download Criteria

* **“Widely Known” Accounts:** The Content Library focuses on posts from high-profile public sources. According to Meta’s documentation, it includes: [**Facebook Pages** with **15,000 or more** likes _or_ followers, and **public personal accounts** that are either **verified** or have **25,000+ followers**​. ](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)(This covers prominent individuals and organizations on Facebook, as well as Instagram/Threads accounts meeting that follower threshold or verification status.) In other words, only content from these **widely-followed or verified accounts** is available for search and CSV export – aligning with Meta’s definition of “widely-known figures and organizations” ​([assets.mofoprod.net](https://assets.mofoprod.net/network/documents/Public_Data_Access_Programs__A_First_Look_Final_cExWfcH.pdf)).
* **Cross-Platform Inclusion:** This criterion applies across Facebook and Instagram. For example, Instagram **business and creator accounts** that are public and have at least 25k followers (or a verification badge) are included in the library ​([socialmediaarchive.org](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)). The same goes for Threads profiles (which are tied to Instagram accounts) meeting the 25k-follower mark. On Facebook, public profiles (personal accounts) with a [blue check or 25k followers qualify, as do Pages with 15k fans​.](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en) This ensures that CSV downloads are limited to content from Pages and users with significant public followings.
* **CSV Exports:** Researchers can download query results as **CSV files** through the Content Library interface for these eligible accounts. Meta officially enabled CSV exports of “certain publicly-accessible content posted by widely-known figures” in 2024 as part of the toolkit’s features​. This allows offline analysis of posts and their metrics. (For instance, a researcher could query all posts matching a keyword from high-follower accounts and export the data for analysis in a spreadsheet or statistical software.)

#### Query Limits and Data Usage Quotas

* **Weekly Query Budget:** Meta imposes a **rate limit** on how much data can be retrieved to ensure manageable use. Official documentation specifies a maximum of **500,000 content items** (posts, etc.) that each researcher can retrieve [in a rolling **seven-day** period, counting both UI and API queries together](https://code.peren.gouv.fr/hackathon-2024/challenge-2-contributions/team-12-ragtag/-/blob/main/platform-docs-versions/Facebook_Content-Library-API/Content-Library-API%20Documentation.md?ref_type=heads)​. In other words, the Content Library **caps results at 500,000 per week** per user. This limit is in line with Meta’s data access policies to prevent abuse while still allowing large-scale research queries.
* **CSV Download Limits:** Crucially, any results downloaded as CSV count toward that weekly quota. Meta notes that [_“results in downloaded CSV files from Content Library will be counted towards your 500,000 total search results limit_](https://developers.facebook.com/docs/content-library-and-api/content-library/)_”_&#x200B;. There is no separate higher limit for CSV exports – the same 500k/week cap applies. If a researcher exports 100k rows today, it consumes part of the 500k allotment for the current 7-day window.
* **Other Limits:** Aside from the 500k-per-week retrieval cap, all queries are subject to the platform’s standard rate limiting rules (e.g. requests per second via API, etc., as outlined in developer docs). The tool does not allow tracking beyond this limit, and it currently does [**not support historical post performance tracking over time**](https://www.icpsr.umich.edu/web/about/cms/5231) beyond the data returned at query time (unlike some features [CrowdTangle](https://apnews.com/article/meta-crowdtangle-research-misinformation-shutdown-facebook-977ece074b99adddb4887bf719f2112a) had). There is also an **access restriction** – the Content Library is **only available to vetted academic and non-profit researchers**, who must apply through the Meta Transparency Center/ICPSR process.

</details>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

Moderate difficulty: The UI is user-friendly, but API access requires coding knowledge and data analysis skills.

## Requirements

* Researchers must be affiliated with an[ academic or non-profit institution.](https://socialmediaarchive.org/pages/?page=FAQs\&ln=en)
* Applications are vetted by the **Inter-university Consortium for Political and Social Research**[ **(ICPSR)**](https://www.icpsr.umich.edu/).
* No [IRB approval](https://en.wikipedia.org/wiki/Institutional_review_board) required, but applicants must submit a research agenda.
* User interface access is available upon approval; API access requires a separate [virtual data enclave (VDE)](https://www.icpsr.umich.edu/web/pages/ICPSR/access/restricted/enclave.html) credential, which requires additional documentation (research proposal approved by your IRB). No raw-file download from the API; analysis must stay inside the VDE.

## Limitations

* **Restricted Access:** Only available to approved researchers (not the general public).
* **Data Privacy:** Deleted/private posts become unavailable; raw data cannot be exported from the API.
* **Query Limits:** API access has a weekly cap of 500,000 retrieved content items.
* **Replication Challenges:** Due to content deletion or privacy changes, perfect replication of results can be difficult.
* **No Personal Identifiers:** User data is[ hashed](https://www.edps.europa.eu/data-protection/our-work/publications/papers/introduction-hash-function-personal-data_en) unless the account is a public entity.
* [**Data-retention rule**](https://socialmediaarchive.org/pages/?amp%3Bln=en\&ln=en\&page=Meta+Content+Library+FAQs)**:** Researchers **must delete data older than 180 days** that is no longer in the library.

## Ethical Considerations

* **Privacy Compliance:** Researchers must respect data privacy and ethical standards.
* **No User Tracking:** The platform does not allow [longitudinal tracking](https://transparency.meta.com/researchtools/product-terms-meta-research) of individuals.
* **Use Limitations:** Data cannot be used for[ surveillance or commercial purposes](https://transparency.meta.com/researchtools/product-terms-meta-research).

## Guide

* **Official Documentation:** [Meta Transparency Center](https://transparency.meta.com/researchtools/meta-content-library)
* **ICPSR Social Media Archive:** [https://www.icpsr.umich.edu/](https://www.icpsr.umich.edu/)
* ["Public Data Access Programs: A First Look"](https://assets.mofoprod.net/network/documents/Public_Data_Access_Programs__A_First_Look_Final_cExWfcH.pdf) is a comprehensive evaluation by Hickey, Dowling, Navia, and Pershan (2024, Mozilla Foundation). The study assesses how major platforms, including Meta, provide researchers access to public data under the **Digital Services Act**, with a focus on usability, transparency, and technical limitations. It highlights the platform's dual-access approach via a user-friendly dashboard and API while also noting challenges such as data consistency and limited documentation that can affect replicability and broader research applications.
* In this **two-part webinar series**, led by [Professor Anja Neundorf](https://www.aneundorf.net/) under the [DEMED project](https://www.gla.ac.uk/research/az/democracyresearch/), researchers at the University of Glasgow and specialists from Meta discuss the Meta Content Library’s evolving capabilities. The [first session (2023)](https://youtu.be/zny6y4VgNM4?si=3eppfWKo8kTKGCPh) focuses on core concepts such as keyword-based searches and privacy safeguards for analyzing public Facebook and Instagram data. The [second session (2025)](https://youtu.be/3Qd3K82VTGg?si=gk5n7UGRYoKNWF5B) highlights newly added features, including comment-level data, text-in-image matching, and Threads integration, to support more advanced social media research.

## Tool provider

[Meta Platforms, Inc](https://en.wikipedia.org/wiki/Meta_Platforms). Menlo Park, California, U.S

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
