---
description: >-
  4CAT is a tool designed for the easy collection and analysis of online
  datasets. It allows researchers to uncover patterns and trends in data  from
  social media and other digital platforms.
---

# 4CAT

## URL

[https://4cat.nl/](https://4cat.nl/)\
(Latest release: v1.55, 2026-06-22; last checked: 2026-06-26)

## Description

4CAT is an open-source, containerized web application ([commonly deployed via Docker](https://docs.docker.com/get-started/)) for capturing, importing, and analyzing online data through an accessible browser interface. Researchers create datasets from supported platforms or import datasets collected with companion tools; they can then run a large library of “processors” to explore trends, content, networks, and media. 4CAT is designed to make repeatable capture and analysis workflows available without requiring programming for day-to-day use, but installation and maintenance do require technical setup.

### **Features**

#### Data Sources

**Direct capture in 4CAT** (actively supported in the project README)

* 4chan and 8kun
* Bluesky
* Telegram
* TikTok (from a list of TikTok post URLs)
* Tumblr

**Import via** [**Zeeschuimer**](https://bellingcat.gitbook.io/toolkit/more/all-tools/zeeschuimer) (browser-based capture, then import to 4CAT)

* TikTok (posts and comments)
* Instagram (posts only)
* X/Twitter
* LinkedIn
* 9gag
* Imgur
* Douyin
* Gab
* Truth Social
* Threads
* Pinterest
* RedNote/Xiaohongshu

**Import from other tools or files**

* Facebook and Instagram: via [Facepager exports](https://github.com/strohne/Facepager) (CrowdTangle is discontinued; only legacy exports apply if already obtained)
* YouTube videos and comments: via [YouTube Data Tools](https://ytdt.digitalmethods.net/)
* Weibo: via [Bazhuayu](https://www.bazhuayu.com/)
* Generic imports: CSV files and common media formats (audio, video, images) can also be uploaded for analysis.

#### Scheduling

Once data sources are configured, 4CAT can be used in ongoing workflows (repeated collection + scheduled processor runs), depending on the connector and your deployment setup.

#### _**Processors**_

Processors are 4CAT’s built-in tools for working with a dataset after it has been collected or imported. They can clean, filter, transform, visualise, export, or analyse the data. For example, a processor might create a frequency chart, show activity over time, extract terms, prepare a network export, or run a more advanced text-analysis workflow. In short: data sources get data into 4CAT; processors help you turn that data into something you can inspect, interpret, or export.<br>

* Filtering and transformation: filter by value/date/keywords; anonymise fields; convert between common formats (CSV, JSON, NDJSON)
* Metrics and exploration: counts and distributions over time; “top terms” style summaries; thread and post metrics
* Text analysis: entity extraction, topic modeling, word counts, and other NLP-style processors
* Networks: exports and processors for network analysis and visualization (including GEXF outputs)
* Media analysis: image walls, media downloads, and image-oriented processors; newer releases also add processors that support LLM-assisted annotation and evaluation, depending on configuration.

#### Examples

The example below shows creating a new dataset and then visualizing results with a stream graph (a stacked time-series view that helps you compare how topics/terms rise and fall over time).

In this example, Tumblr is selected to collect posts/comments. Here, the dataset is defined via tags entered in the Tags/blogs field (e.g., `#liminalspaces`), and the results are visualized over time to compare term/topic trends.&#x20;

<figure><img src="https://lh7-us.googleusercontent.com/iEJanp6kHwwHU7RW7A9eYfTC3N6hBkdvZz5AUyBYE8yDyHUgfGeKS6KuqxaOLT0GF1Dg_bSSVQipQtb6_K4jX2bVpxXGfCQ-RRwq_nL5mil3COBxkOBWou14ETrr0XFQILrbko-g3TkFMumnDTjCx-o" alt="[Screenshot: “Create dataset” screen showing Tumblr selected + Tags/blogs field filled]"><figcaption><p>4CAT’s “Create new dataset” screen for Tumblr. This example searches by tag, using <code>liminal spaces</code>, so 4CAT retrieves posts explicitly tagged with that phrase rather than generic keyword matches. The query is intentionally narrow to reduce load on the shared instance and avoid large, slow collections. Before creating the dataset, author information is pseudonymised/replaced and “Make dataset private” is enabled. Use the date range fields to narrow the collection further, then check the output for missing time periods or gaps.</p></figcaption></figure>

Example of the customization of a steam graph visualization in 4Cat.

<figure><img src="https://lh7-us.googleusercontent.com/qjR2UY8Xbt_M-Vb4DiRJZJcWhBtaeXgdekAo_Bl6eeYvJoGlZ7sFczznJDuxXnDkX1c2PvPCYhNh4qnbY0Xa6F6IjFmM8aCNQEp6laPkT4RTICZ90GwocoJ-bOwW9m2YDHqA82bo3lneCdNhair9Fw" alt=""><figcaption><p>Example of a 4CAT stream graph. Each colour is a selected term/category, and thicker bands mean more matching posts/items in that time period. The large peak near late summer 2021 marks a short burst of activity worth inspecting in the underlying dataset. Downward bands are not negative values; stream graphs are centred, so the important signal is band thickness over time.</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Hosting cost may apply if 4Cat is deployed as a web application for a team.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

Installation/server maintenance (often via Docker) is the main hurdle; day-to-day use in the web UI is typically easier once an instance is running.)

## Requirements

* **Platforms**: runs on Linux, Windows and macOS.
* **Docker:** the application has been containerised with [Docker](https://www.docker.com/) so Docker needs to be installed for the application to run.
* **Memory Requirements:** 16GB of RAM
* **API key**: Some of the custom datasets may require an API key to be configured.

For more information on hardware requirements see: [https://github.com/digitalmethodsinitiative/4cat/wiki/What-hardware-do-I-need-to-run-4CAT%3F](https://github.com/digitalmethodsinitiative/4cat/wiki/What-hardware-do-I-need-to-run-4CAT%3F)&#x20;

## Limitations

* **Technical Installation:** the primary limitation of 4Cat is that to install it you need specialised technical knowledge of tools like [Docker](https://www.docker.com/) and a server to run it on.    &#x20;
* **Data Access:** coverage and depth vary by platform. The [project notes](https://github.com/digitalmethodsinitiative/4cat) that some built-in sources are untested or require special API access, and platform policy/technical changes can reduce what is collectible.
* **Complex Queries:** Users with limited technical expertise may find it challenging to construct complex queries or fully utilize the tool's capabilities without a steep learning curve.
* **Processing Time:** Large datasets or complex analysis tasks may require significant processing time, which could impact efficiency for time-sensitive research.
* **Update Frequency:** Platform coverage can change quickly. The [4CAT project notes](https://github.com/digitalmethodsinitiative/4cat) that some built-in platform support is untested or requires special API access, and platform policy/technical changes can break capture. Treat the platform list as “as of last checked” and verify against the README/wiki before relying on it for time-sensitive work.
* **Cost:** While 4CAT itself may be free to use, certain analyses may require substantial computational resources or access to premium data sources, which may incur costs.
* **Rate Limits**: some services throttle collection. In 4CAT’s own docs, some sources are explicitly documented as hard to scrape “within 4CAT itself” due to aggressive rate limiting (e.g., [TikTok comments](https://docs.4cat.nl/datasources/tiktok_comments/search_tiktok_comments.html), [Imgur](https://docs.4cat.nl/datasources/imgur/search_imgur.html)), with a recommendation to import data collected elsewhere.&#x20;

## Ethical Considerations

When using 4CAT for research, several ethical considerations must be taken into account:

* **Privacy and Consent:** Researchers must navigate the complex landscape of user privacy, especially when collecting data from social media platforms. It is crucial to ensure that data collection complies with platform privacy policies and respects users' consent, especially when users have not explicitly agreed to share their data for research purposes.
* **Data Anonymization:** Ensuring data is anonymized to protect individuals' identities is paramount. This involves removing or obfuscating any identifiable information before analysis or publication of the research findings.
* **Bias and Representation:** The tool's reliance on accessible platform data may introduce bias, as not all voices and perspectives are equally represented online. Researchers should be aware of these limitations and consider them when drawing conclusions from their data.
* **Impact on Subjects:** There should be careful consideration of the potential impact of the research on the subjects being studied, especially if the findings could adversely affect them or their communities.
* **Compliance with Legal Standards:** Ensuring adherence to applicable laws and regulations, such as the GDPR in the European Union, is essential. Researchers must be mindful of the legal implications of data collection, storage, and analysis practices.

## Guides and articles

To effectively use 4Cat, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* [https://github.com/digitalmethodsinitiative/4cat/wiki](https://github.com/digitalmethodsinitiative/4cat/wiki)
* [https://computationalcommunication.org/ccr/article/view/120](https://computationalcommunication.org/ccr/article/view/120)

**Tutorials and Articles**

* 4CAT exercises (no date). Available via the official 4cat.nl “Exercises” link ([Accessed](https://docs.google.com/document/d/1po-sOB8tDRZlvWrEayu97cGh_qsBuW0URd4md0_tv7k/edit?usp=embed_facebook): 2026-01-31).
* ‘CAT4SMR – Capture and Analysis Tools for Social Media Research’ (no date). Available at: [https://cat4smr.humanities.uva.nl/](https://cat4smr.humanities.uva.nl/) (Accessed: 13 May 2024).Peeters, S. and Hagen, S. (2022) ‘The 4CAT Capture and Analysis Toolkit: A Modular Tool for Transparent and Traceable Social Media Research’, _Computational Communication Research_, 4(2), pp. 571–589.
* _"As a researcher, this tool saves me a lot of work and stress” - News - Utrecht University_ (2023). Available at: [https://www.uu.nl/en/news/as-a-researcher-this-tool-saves-me-a-lot-of-work-and-stress](https://www.uu.nl/en/news/as-a-researcher-this-tool-saves-me-a-lot-of-work-and-stress) (Accessed: 13 May 2024).

#### Video Tutorials

* _4CAT Tutorial - Creating a Dataset - YouTube_ (no date). Available at: [https://www.youtube.com/watch?v=VZH9SQM3dmI\&list=PLWukutaRyIn31H0uPfkYlmbWvo83PnXXo\&index=2](https://www.youtube.com/watch?v=VZH9SQM3dmI\&list=PLWukutaRyIn31H0uPfkYlmbWvo83PnXXo\&index=2) (Accessed: 13 May 2024).
* _4CAT Tutorial: Analysing a dataset using processors_ (2021). Available at: [https://www.youtube.com/watch?v=XIpGt3uzqNQ](https://www.youtube.com/watch?v=XIpGt3uzqNQ) (Accessed: 13 May 2024).
* _4CAT Tutorial: Installing via Docker - YouTube_ (no date). Available at: [https://www.youtube.com/watch?v=oWsB7bvNfOY\&list=PLWukutaRyIn31H0uPfkYlmbWvo83PnXXo\&index=4](https://www.youtube.com/watch?v=oWsB7bvNfOY\&list=PLWukutaRyIn31H0uPfkYlmbWvo83PnXXo\&index=4) (Accessed: 13 May 2024).

#### Developer Resources

* [https://github.com/digitalmethodsinitiative/4cat](https://github.com/digitalmethodsinitiative/4cat)

**Community and Support**

* [https://www.facebook.com/groups/678943026381479](https://www.facebook.com/groups/678943026381479)

## Tool provider

Digital Methods Initiative [https://digitalmethods.net/](https://digitalmethods.net/), Netherlands

## Similar Tools

[Zeeschuimer ](https://bellingcat.gitbook.io/toolkit/more/all-tools/zeeschuimer)- Best if you mainly need in-browser capture from hard-to-scrape platforms and do not yet need 4CAT’s processor library.&#x20;

[Facepager](https://github.com/strohne/Facepager) - Better for API-based or custom web/API collection workflows; less of an end-to-end analysis environment than 4CAT.&#x20;

[YouTube Data Tools](https://ytdt.digitalmethods.net/) - Better if your project is only about YouTube and you want dedicated extractors rather than a multi-platform toolkit.&#x20;

[Gephi ](https://bellingcat.gitbook.io/toolkit/more/all-tools/gephi)- Better for advanced network exploration and visual styling after exporting GEXF or edge lists from 4CAT.&#x20;

[Voyant Tools](https://voyant-tools.org/) - Better for lightweight browser-based text exploration when you already have a clean corpus and do not need 4CAT’s capture or import workflow.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
