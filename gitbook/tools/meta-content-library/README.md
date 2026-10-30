---
updated: '2026-10-29'
description: >-
  Meta Content Library is a controlled-access tool that lets approved academic
  and non-profit researchers search eligible public Facebook, Instagram, and
  Threads posts, in near-real-time.
---

# Meta Content Library

## URL

[https://transparency.meta.com/researchtools/meta-content-library](https://transparency.meta.com/researchtools/meta-content-library)

Last source/version check: 2026-10-29.

{% hint style="info" %}
While this is a free tool, access is strictly limited. However, _any_ researcher affiliated with an academic institution or another not‑for‑profit organisation whose core activity is scientific or public‑interest research can apply. Use Meta’s [current access instructions](https://developers.facebook.com/docs/content-library-and-api/get-access) for the route you intend to use. For MCL API access, SOMAR states that Meta has managed applications through Research Tools Manager since 8 December 2025. Approved API researchers choosing SOMAR’s VDE must complete its separate onboarding process. Allow time for application review and any separate environment onboarding; consult the current application instructions for processing times.
{% endhint %}

{% hint style="warning" %}
**UPDATE: Researcher access fees (Meta Content Library API via SOMAR VDE)**

SOMAR’s [Summer 2026 newsletter](https://www.icpsr.umich.edu/sites/somar/somar-newsletter-archive/somar-newsletter-summer-2026) lists a **$1,000 USD one-time setup fee for new VDE instances** and a **$371 USD monthly fee for the duration of the research project**. Confirm the payment instructions and terms for your research environment with SOMAR before budgeting. Meta’s [FAQ](https://developers.facebook.com/docs/content-library-and-api/support/faqs) states that there are no access or computation fees for the Content Library web interface or API on Meta’s Secure Research Environment.
{% endhint %}

<p align="center">(as of June, 2026)<br></p>

<figure><img src=".gitbook/assets/image (55) (1).png" alt=""><figcaption></figcaption></figure>

## Description

**Meta Content Library (MCL)** is Meta’s controlled‑access research interface for exploring the **eligible public content** of Facebook and Instagram, with Threads content available in the **web UI**. It supports near-real-time search, powerful filters, and dashboards. The companion Content Library API (used within a secure environment) enables programmatic queries across more than 100 data fields. CSV export is available for a subset of **widely‑known** accounts (see thresholds below).

The platform features:

* [**User Interface**](https://en.wikipedia.org/wiki/User_interface) **(UI):** A web-based dashboard for content search and filtering.
* [**API** ](https://en.wikipedia.org/wiki/API)**Access:** Programmatic access for large-scale queries (Python or R via ICPSR's secure Virtual Data Enclave).
  * [**Asynchronous search**](https://transparency.meta.com/researchtools/meta-content-library)**:** the API supports background queries, letting users run large queries and monitor progress separately
* [Since September 2024](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/), the Library includes **Threads content** in its web interface. Check Meta’s current Threads coverage, metrics and export criteria separately; do not infer them from Instagram thresholds. Meta’s [June 2025](https://developers.facebook.com/docs/content-library-and-api/changelog/) update shows the library now covers more surfaces, including Facebook Marketplace listings, Facebook and Instagram fundraisers, story highlights and gaming videos.
* [**Real‑time dashboards and collaboration tools**](https://transparency.meta.com/MCL-API-update-supporting-independent-research) – the web UI lets users build dashboards based on keywords and producer lists and allows team collaboration and auto‑refresh
* **Search‐in‑images:** text‑in‑image search covers approximately the last 180 days (previously \~90) and supports story highlights
* **Advanced Filtering:** Keyword searches, engagement metrics, date ranges, and language filters.
  * A **verified‑filter** allows users to restrict searches to verified, unverified or all accounts across Facebook, Instagram and Threads
  * **Comment‑text search and sorting** – researchers can search within the comments of a Facebook/Instagram post or Threads reply and filter by date
* **Engagement Insights:** View counts, reactions, shares, and comments with hashed user IDs.
* **Historical coverage:** Available history and refresh schedules vary by content type and access route. Consult Meta’s [current coverage documentation](https://developers.facebook.com/docs/content-library-and-api/content-library) for the dataset required; a complete archive of all Facebook content since 2004 is not established here.
* [**CSV** ](https://en.wikipedia.org/wiki/Comma-separated_values)**Downloads:** Available for accounts meeting the "widely known" criteria
  * **Facebook Pages**: eligible for “widely‑known” if they have **15,000+ likes or followers**.
  * **Public profiles (Facebook & Instagram)**: eligible if **verified** or have **25,000+ followers**.
  * **Threads:** available in the web UI; check Meta’s current account-coverage and export rules before designing a collection.
* **Privacy Protection:** Content is subject to deletion/privacy settings.

<details>

<summary>Details on Features and Limits</summary>

**Features and Functionality**

* **Search Capabilities:** The Meta Content Library allows researchers to search across public Facebook and Instagram content with advanced filters. This includes keyword [queries with support for exact phrase matching](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/). Notably, the platform can even search for **text contained within images**, thanks to Meta’s OCR integration – searches now include[ text found in images posted on Facebook or Instagram](https://developers.facebook.com/docs/content-library-and-api/content-library-api/changelog)​.
* **UI and API Access:** The tool is accessible via a [web-based **graphical User Interface (UI)**](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) as well as a [**programmatic API**](https://www.icpsr.umich.edu/web/about/cms/5231), with coverage, refresh schedules and usage rules that depend on the access route. Researchers must check the rules for the UI or API dataset they intend to use. API data must remain in approved research environments; [local downloading of API data is prohibited](https://developers.facebook.com/docs/content-library-and-api/content-library-api/overview).
* **Content Coverage:** Meta Content Library provides access to eligible public posts from [**Pages, Groups, and Events on Facebook**,](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) plus public content from [**Instagram creator and business accounts**](https://www.icpsr.umich.edu/web/about/cms/5231)**.** As of [September 2024](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/), it was expanded to include **Threads** posts as well, further broadening the cross-platform scope of publicly accessible content​. Confirm freshness for the content and collection route used before relying on it for time-sensitive analysis.

**Engagement Metrics Available**

* **Post Engagement Details:** For each post in the library, Meta provides engagement metrics. Researchers can see the number of **reactions** (including likes and other reactions), **comments**, and **shares** each post received​.
* **View Counts:** Importantly, the Content Library also surfaces **post view counts** – the number of times people viewed the post. This “exposure” data helps researchers understand reach, not just interaction. (For example, Meta notes that [_“the Content Library does provide view counts,”_](https://about.fb.com/news/2023/11/new-tools-to-support-independent-research/) giving insight into how many people potentially saw a piece of content​.)
* **Comments Data:** In addition to posts, **public comments** on Facebook (and recently Instagram comments via the API) are accessible, allowing analysis of discussion threads in public forums​. Check current documentation for the content types and metrics available through the selected web interface or API route; do not assume identical availability.

**Eligible Content and CSV Download Criteria**

* **“Widely Known” Accounts:** CSV download eligibility is restricted to certain widely-known public sources; searchable coverage is broader. According to Meta’s documentation, it includes: [**Facebook Pages** with **15,000 or more** likes _or_ followers, and **public personal accounts** that are either **verified** or have **25,000+ followers**​. ](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)(Do not generalize Facebook or Instagram download thresholds to Threads; check its current coverage and export criteria separately.) These thresholds concern eligible CSV downloads; they do not define the full scope of content searchable within the Library. Meta’s download rules concern **widely-followed or verified accounts** – aligning with Meta’s definition of “widely-known figures and organizations” ​([assets.mofoprod.net](https://assets.mofoprod.net/network/documents/Public_Data_Access_Programs__A_First_Look_Final_cExWfcH.pdf)).
* **Cross-Platform Inclusion:** This criterion applies across Facebook and Instagram. For example, Instagram **business and creator accounts** that are public and have at least 25k followers (or a verification badge) meet the CSV download criteria described above ​([socialmediaarchive.org](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en)). Threads coverage and download eligibility require a separate check; an Instagram-linked account does not by itself establish the same collection rules. On Facebook, public profiles (personal accounts) with a [blue check or 25k followers qualify, as do Pages with 15k fans​.](https://socialmediaarchive.org/pages/?page=Meta+Content+Library+FAQs\&ln=en) This ensures that CSV downloads are limited to content from Pages and users with significant public followings.
* **CSV Exports:** Researchers can download query results as **CSV files** through the Content Library interface for these eligible accounts. Meta officially enabled CSV exports of “certain publicly-accessible content posted by widely-known figures” in 2024 as part of the toolkit’s features​. This allows offline analysis of posts and their metrics. (For instance, a researcher could query all posts matching a keyword from high-follower accounts and export the data for analysis in a spreadsheet or statistical software.)

**Query Limits and Data Usage Quotas**

* **UI search budget:** Meta’s [current UI documentation](https://developers.facebook.com/docs/content-library-and-api/content-library) limits each researcher to 500,000 total UI search results per rolling seven-day window. Downloaded CSV results count toward that UI limit. API usage rules must be checked separately; this is not a combined UI-and-API budget.
* **CSV Download Limits:** Crucially, any results downloaded as CSV count toward that weekly quota. Meta notes that [_“results in downloaded CSV files from Content Library will be counted towards your 500,000 total search results limit_](https://developers.facebook.com/docs/content-library-and-api/content-library/)_”_&#x200B;. CSV exports are available for Facebook and Instagram posts by widely‑known accounts. Facebook Pages qualify at 15,000+ likes or followers; public profiles on Facebook or Instagram qualify if verified or at 25,000+ followers.
* **Other limits:** UI and API queries have route-specific usage rules and rate limits. Before planning longitudinal analysis, check the selected dataset’s coverage, metric refresh schedules and query budgets in Meta’s [current documentation](https://developers.facebook.com/docs/content-library-and-api/content-library). Access requires an approved researcher application and eligible institutional affiliation.

</details>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

**UI access:** free for approved researchers.

**API compute:** free on Meta’s Secure Research Environment (SRE).

**SOMAR VDE:** The provider’s [Summer 2026 fee notice](https://www.icpsr.umich.edu/sites/somar/somar-newsletter-archive/somar-newsletter-summer-2026) lists a one-time USD 1,000 setup fee for new VDE instances and USD 371 per month for the research project’s duration.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

The **web UI** is point‑and‑click and suitable for non‑coders. The **API** requires comfort with **Python or R** inside a secure Jupyter environment and familiarity with paginated queries, asynchronous jobs, and result vetting before export. Accessing Meta’s SRE uses **Amazon WorkSpaces Secure Browser**.

## Limitations

* **Access limits:** Each researcher has a UI search budget of 500,000 results per rolling seven-day window, including downloaded CSV results. API usage limits are separate; consult Meta’s [API documentation](https://developers.facebook.com/docs/content-library-and-api/content-library-api/overview) for the chosen route.
* **Coverage notes:** Check Threads coverage separately from Facebook and Instagram CSV eligibility in the [current Meta documentation](https://transparency.meta.com/researchtools/meta-content-library).
* **Feature scope:** OCR matches are **not phrase‑searchable** and are limited to ≈**180 days** of images. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library/)
* **Changelog awareness:** Meta’s 2025‑06‑30 update added new surfaces (e.g., Instagram **Story highlights**, **Facebook Gaming** videos) and filters; **MCL v3.0** was deprecated on **2025‑07‑31**. [Transparency](https://transparency.meta.com/MCL-API-update-supporting-independent-research)
* **Legal/ToS:** Use is governed by Meta’s research-tool terms and any agreements for the selected research environment; some fields/surfaces vary by region or legal restrictions. [somar.atlassian.net](https://somar.atlassian.net/wiki/spaces/somardocs/pages/249397299/SOMAR%2BData%2BAccess%2BApplication%2BGuide?utm_source=chatgpt.com)

## Requirements

* **Eligibility & application:** An eligible institutional affiliation and approved research program are required. Follow Meta’s [current access instructions](https://developers.facebook.com/docs/content-library-and-api/get-access) for the selected route. MCL API applications are managed through Meta’s Research Tools Manager; researchers choosing SOMAR’s VDE must also complete its separate onboarding. The published UI documentation requires ICPSR or CASD approval of the Content Library application and consent to Meta’s research-tool terms for CSV downloads. Search access does not automatically grant download permission.
* **Environments:** Choose **SOMAR Virtual Data Enclave (VDE)** or **Meta Secure Research Environment (SRE)** for API work. UI access is hosted by Meta and is separate. [somar.atlassian.net](https://somar.atlassian.net/wiki/spaces/somardocs/pages/249397299/SOMAR%2BData%2BAccess%2BApplication%2BGuide)
* **Access & auth:** After approval, log in to SRE and launch a **Jupyter** session via **Amazon WorkSpaces Secure Browser** to use the API client. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library-api/getting-started/)
* **Supported modules/features (selected):**\
  – **Dashboards** in the UI for monitoring queries. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library/dashboards/)\
  – **Text‑in‑image search (OCR)** covering ≈**180 days**. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library/)\
  – **Verified filter** (include/exclude verified accounts). [Transparency](https://transparency.meta.com/MCL-API-update-supporting-independent-research)\
  – **Comments** (Facebook & Instagram) via API. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library-api/guides/fb-comments/)\
  – **Asynchronous searches & ID‑based retrieval** for large jobs. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library-api/guides/search-guide/)\
  – **Marketplace listings** and **Fundraisers** (Facebook). [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library-api/guides/fb-marketplace/)\
  – **Threads** content visible in the **UI**. [Transparency](https://transparency.meta.com/researchtools/meta-content-library)\
  – **CSV downloads** for “widely‑known” accounts (see thresholds) and counted toward rate quota. [Transparency](https://transparency.meta.com/researchtools/meta-content-library)
* **“Widely‑known” thresholds for downloadable data:** **Facebook Pages ≥15,000** likes/followers; **public profiles ≥25,000** followers or **verified badge**. (Developer docs/Meta comms.) [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library/)
* **Optional dependencies:** None installed locally; code runs within SRE/VDE notebooks provided by Meta/ICPSR. [developers.facebook.com](https://developers.facebook.com/docs/content-library-and-api/content-library-api/getting-started/)
* **API version:** The [current Meta Content Library API documentation](https://developers.facebook.com/docs/content-library-and-api/content-library-api/) shows **v6.0**, checked 2026-10-29. A publication date was not established; confirm the version available in your approved research environment.

## Ethical Considerations

* **Privacy Compliance:** Researchers must respect data privacy and ethical standards.
* **No User Tracking:** The platform does not allow [longitudinal tracking](https://transparency.meta.com/researchtools/product-terms-meta-research) of individuals.
* **Use Limitations:** Data cannot be used for[ surveillance or commercial purposes](https://transparency.meta.com/researchtools/product-terms-meta-research).

## Guide

* **Official Documentation:** [Meta Transparency Center](https://transparency.meta.com/researchtools/meta-content-library)
* **ICPSR Social Media Archive:** [https://www.icpsr.umich.edu/](https://www.icpsr.umich.edu/)
* ["Public Data Access Programs: A First Look"](https://assets.mofoprod.net/network/documents/Public_Data_Access_Programs__A_First_Look_Final_cExWfcH.pdf) is a comprehensive evaluation by Hickey, Dowling, Navia, and Pershan (2024, Mozilla Foundation). The study assesses how major platforms, including Meta, provide researchers access to public data under the **Digital Services Act**, with a focus on usability, transparency, and technical limitations. It highlights the platform's dual-access approach via a user-friendly dashboard and API while also noting challenges such as data consistency and limited documentation that can affect replicability and broader research applications.
* In this **two-part webinar series**, led by [Professor Anja Neundorf](https://www.aneundorf.net/) under the [DEMED project](https://www.gla.ac.uk/research/az/democracyresearch/), researchers at the University of Glasgow and specialists from Meta discuss the Meta Content Library’s evolving capabilities. The [first session (2023)](https://youtu.be/zny6y4VgNM4) focuses on core concepts such as keyword-based searches and privacy safeguards for analyzing public Facebook and Instagram data. The [second session (2025)](https://youtu.be/3Qd3K82VTGg?si=gk5n7UGRYoKNWF5B) highlights newly added features, including comment-level data, text-in-image matching, and Threads integration, to support more advanced social media research.

<details>

<summary>New and notable Features and Changes in 2025</summary>

* **Threads in the UI:** verify current source eligibility and export availability in [Meta’s current documentation](https://transparency.meta.com/researchtools/meta-content-library).
* **Comments search across FB, IG, Threads** in the web UI; filter and sort by date. [Transparency](https://transparency.meta.com/MCL-API-update-supporting-independent-research?utm_source=chatgpt.com)
* **Text‑in‑image search window** extended to \~180 days on FB and IG. [Facebook for Developers](https://developers.facebook.com/docs/content-library-and-api/changelog/?utm_source=chatgpt.com)
* **Dashboards, collaboration, auto‑refresh, query‑budget tracking** in the UI. [Transparency](https://transparency.meta.com/MCL-API-update-supporting-independent-research?utm_source=chatgpt.com)
* **Asynchronous search**; **100,000** results per asynchronous query; separate 1M sizing limit on comment searches for estimation. [Facebook for Developers](https://developers.facebook.com/docs/content-library-and-api/content-library-api/guides/rate-limiting/?utm_source=chatgpt.com)
* **Endpoints expansion** documented: FB posts, pages, groups, events, profiles, comments, Marketplace listings, fundraisers; IG accounts, posts, comments, fundraisers, channels. [Transparency](https://transparency.meta.com/researchtools/meta-content-library)
* **Two API compute options**: Meta SRE or SOMAR VDE. [Transparency](https://transparency.meta.com/researchtools/meta-content-library)

</details>

## Tool provider

[Meta Platforms, Inc](https://en.wikipedia.org/wiki/Meta_Platforms). Menlo Park, California, U.S

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
