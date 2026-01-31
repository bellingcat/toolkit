---
description: >-
  4CAT is a tool designed for the easy collection and analysis of online
  datasets. It allows researchers to uncover patterns and trends in data  from
  social media and other digital platforms.
---

# 4CAT

## URL

[https://4cat.nl/](https://4cat.nl/)\
(Latest release: v1.52, 2025-12-19; last checked: 2026-01-31)

## Description

4CAT is an open-source, containerised web application (commonly deployed via Docker) for capturing, importing, and analysing online data through an accessible browser interface. Researchers create datasets from supported platforms or import datasets collected with companion tools; they can then run a large library of “processors” to explore trends, content, networks, and media. 4CAT is designed to make repeatable capture and analysis workflows available without requiring programming for day-to-day use, but installation and maintenance do require technical setup.

### **Features**

#### Data Sources

**Direct capture in 4CAT** (actively supported in the project README)

* 4chan and 8kun
* Bluesky
* Telegram
* TikTok (from a list of TikTok post URLs)
* Tumblr

**Import via Zeeschuimer** (browser-based capture, then import to 4CAT)

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

_**Processors**_

&#x20;(examples; the library evolves across releases)

* Filtering and transformation: filter by value/date/keywords; anonymise fields; convert between common formats (CSV, JSON, NDJSON)
* Metrics and exploration: counts and distributions over time; “top terms” style summaries; thread and post metrics
* Text analysis: entity extraction, topic modelling, word counts, and other NLP-style processors
* Networks: exports and processors for network analysis and visualisation (including GEXF outputs)
* Media analysis: image walls, downloading media, and image-oriented processors; newer releases also add processors that support LLM-assisted annotation and evaluation depending on configuration.

#### Examples

The example below shows creating a new dataset and then visualising results with a stream graph (a stacked time-series view that helps you compare how topics/terms rise and fall over time).

+In this example, Tumblr is selected to collect posts/comments. Here, the dataset is defined via tags entered in the Tags/blogs field (e.g., `#liminalspaces`), and the results are visualised over time to compare term/topic trends.&#x20;

<figure><img src="https://lh7-us.googleusercontent.com/iEJanp6kHwwHU7RW7A9eYfTC3N6hBkdvZz5AUyBYE8yDyHUgfGeKS6KuqxaOLT0GF1Dg_bSSVQipQtb6_K4jX2bVpxXGfCQ-RRwq_nL5mil3COBxkOBWou14ETrr0XFQILrbko-g3TkFMumnDTjCx-o" alt="[Screenshot: “Create dataset” screen showing Tumblr selected + Tags/blogs field filled]"><figcaption><p>Screenshot of 4Cat create new dataset screen.</p></figcaption></figure>

Example of the customisation of a steam graph visualisation in 4Cat.

<figure><img src="https://lh7-us.googleusercontent.com/qjR2UY8Xbt_M-Vb4DiRJZJcWhBtaeXgdekAo_Bl6eeYvJoGlZ7sFczznJDuxXnDkX1c2PvPCYhNh4qnbY0Xa6F6IjFmM8aCNQEp6laPkT4RTICZ90GwocoJ-bOwW9m2YDHqA82bo3lneCdNhair9Fw" alt=""><figcaption><p>screenshot of steam graph customisation screen. </p></figcaption></figure>

4Cat, once installed, is available in the following formats:

* Web

Latest changes: [https://github.com/digitalmethodsinitiative/4cat/releases](https://github.com/digitalmethodsinitiative/4cat/releases)

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
* **Data Access:** coverage and depth vary by platform. Some sources require special API access, and some “built-in” sources are described as untested; platform policy changes can also break capture.
* **Complex Queries:** Users with limited technical expertise may find it challenging to construct complex queries or fully utilize the tool's capabilities without a steep learning curve.
* **Processing Time:** Large datasets or complex analysis tasks may require significant processing time, which could impact efficiency for time-sensitive research.
* **Update Frequency:** The tool’s ability to keep pace with rapid changes in social media platforms and internet technology may be limited, potentially affecting its long-term utility.
* **Cost:** While 4CAT itself may be free to use, significant analyses might require substantial computational resources or access to premium data sources, incurring potential costs.
* **Rate Limits:** some services throttle or block collection (e.g., aggressive rate limiting can force you to import externally collected data instead of capturing directly).

## Ethical Considerations

When using 4CAT for research, several ethical considerations must be taken into account:

* **Privacy and Consent:** Researchers must navigate the complex landscape of user privacy, especially when collecting data from social media platforms. It is crucial to ensure that data collection complies with the privacy policies of the platforms and respects the consent of the users, especially in cases where users have not explicitly agreed to share their data for research purposes.
* **Data Anonymization:** Ensuring that data is anonymized to protect the identities of individuals is paramount. This involves removing or obfuscating any identifiable information before analysis or publication of the research findings.
* **Bias and Representation:** The tool's dependence on accessible data from platforms may introduce bias, given that not all voices and perspectives are equally represented online. Researchers should be aware of these limitations and consider them when drawing conclusions from their data.
* **Impact on Subjects:** There should be careful consideration of the potential impact of the research on the subjects being studied, especially if the findings could negatively affect them or the communities they belong to.
* **Compliance with Legal Standards:** Ensuring compliance with applicable laws and regulations, such as GDPR in the European Union, is essential. Researchers must be mindful of the legal implications of data collection, storage, and analysis practices.

## Guides and articles

To effectively use 4Cat, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* [https://github.com/digitalmethodsinitiative/4cat/wiki](https://github.com/digitalmethodsinitiative/4cat/wiki)
* [https://computationalcommunication.org/ccr/article/view/120](https://computationalcommunication.org/ccr/article/view/120)

**Tutorials and Articles**

* 4CAT exercises (no date). Available via the official 4cat.nl “Exercises” link ([Accessed](https://docs.google.com/document/d/1po-sOB8tDRZlvWrEayu97cGh_qsBuW0URd4md0_tv7k/edit?usp=embed_facebook): 2026-01-31).
* ‘CAT4SMR – Capture and Anaysis Tools for Social Media Research’ (no date). Available at: [https://cat4smr.humanities.uva.nl/](https://cat4smr.humanities.uva.nl/) (Accessed: 13 May 2024).Peeters, S. and Hagen, S. (2022) ‘The 4CAT Capture and Analysis Toolkit: A Modular Tool for Transparent and Traceable Social Media Research’, _Computational Communication Research_, 4(2), pp. 571–589.
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

Digital Methods Initiative [https://digitalmethods.net/](https://digitalmethods.net/) - Amsterdam

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
