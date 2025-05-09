---
description: >-
  Bellingcat's tool to automatically archive social media posts, videos, and
  images. Free and Open-Source.
---

# Auto Archiver

## URL

[https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver)

## Description

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>A screen grab of an Auto Archiver execution for the Tajik-Kyrgyz border conflict. <a href="https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/">Source</a>.</p></figcaption></figure>

The Auto Archiver, developed by Bellingcat, is an [open-source tool](https://github.com/bellingcat/auto-archiver) designed for journalists and researchers to systematically archive digital content from social media and the web. Users can input URLs (for example, into a Google Sheets document or a CSV file), and the tool will automatically archive the posts, videos, images, or webpages at those URLs. It supports multiple platforms – including Twitter (X), Telegram, TikTok, **Instagram**, VKontakte, **Bluesky**, **Truth Social**, and even general websites – using the optimal method for each (e.g. [official APIs, headless browsing,](https://data.safetycli.com/changelogs/auto-archiver/) or direct download via yt-dlp). If all else fails, it will submit the link to the Internet Archive’s Wayback Machine as a fallback for basic preservation ([bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/), [gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). Archived content can be **enriched** with additional data (such as cryptographic hashes, timestamps, screenshots, transcripts, and metadata) and saved either locally or to remote storage (for instance, a cloud bucket or Google Drive). The status and results of each archiving attempt are logged back to the source (e.g. appended to the Google Sheet or an output CSV), providing a clear record of what was captured.

## Why It’s an Essential Tool

The Auto Archiver’s automation, expanded platform support, and use of robust archiving techniques make it indispensable for open-source investigations. Unlike manual archiving – which can be time-consuming and inconsistent – this tool enables rapid, reliable capture of information, ensuring that valuable online content remains accessible even if deleted or altered. Its open-source nature means the community can verify its methods and adapt the tool to specific needs, providing transparency and flexibility essential for responsible use. Bellingcat and others in the OSINT community have actively used Auto Archiver in fast-moving crises and major conflict investigations (for example, during Russia’s invasion of Ukraine) to save evidence that might disappear ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). It has also been adopted by partner organizations like the Centre for Information Resilience and OSR4Rights to systematically archive content from conflict zones ([bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)). In practice, once the tool is set up, an investigator can simply copy-paste links of interest (from Telegram, TikTok, Twitter, _etc._) into the designated sheet or interface, and the Auto Archiver will quickly preserve the content – a process described as “a life-saver for investigators” when dealing with volatile information ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)).

### &#x20;Notable instances and case studies:

**Russia-Ukraine War**:[ Bellingcat has used the Auto Archiver to systematically](https://www.bellingcat.com/resources/how-tos/2022/03/08/how-to-archive-telegram-content-to-document-russias-invasion-of-ukraine/) capture social media posts, videos, and images shared by both official and individual accounts on platforms like Telegram and Twitter. During the initial stages of the invasion, many accounts posted videos and images showing military movements, damage to infrastructure, and civilian experiences. Due to the risk of these posts being deleted or censored, the Auto Archiver has been a critical tool for creating a permanent record of this content, aiding in ongoing investigations and historical documentation.

**Human Rights Investigations in Myanmar**: The tool has reportedly been used to [document social media posts related to human rights violations in Myanmar](https://osr4rightstools.org/auto-archiver), especially during the 2021 military coup. The tool enabled researchers to capture posts documenting protests, government crackdowns, and other rights abuses, many of which were at risk of being taken down by the government or by the platforms themselves under pressure.

**Election Violence Evidence Preservation:** The Global Investigative Journalism Network (GIJN) has highlighted the Bellingcat Auto Archiver as a critical tool for preserving video evidence related to election violence, an issue of growing concern in 2024 and 2025. Its ability to simplify the previously complex process of video archiving led to its inclusion in GIJN's ["Top 10 Investigative Tools of 2023"](https://gijn.org/resource/revised-elections-reporting-guide-new-digging-tools/).

**Tracking Misinformation and Disinformation Campaigns**: Researchers focusing on misinformation have utilized the Auto Archiver (and comparable tools like Hunchly) to [save tweets and posts involved in coordinated disinformation campaigns](https://gijn.org/resource/investigating-digital-threats-disinformation/). For example, during elections or in the context of high-profile political events, coordinated misinformation can quickly flood social media platforms, often spreading widely before accounts or posts are removed. The Auto Archiver preserves these posts, allowing analysts to later examine the strategies used in these campaigns, even if the original content is no longer publicly accessible.

**Documentation of Environmental Disasters**: In [cases of environmental crises](https://www.deezer.com/de/episode/653737531), such as the 2020 wildfires in Australia or the 2023 earthquakes in Turkey and Syria, the Auto Archiver has been used to record firsthand accounts, videos, and images shared by residents. These records serve not only as evidence for immediate response and analysis but also as historical documentation that can assist future disaster response planning and research.

### Supported Platforms

| Platform         | Primary Archiving Method                                     | Fallback Method | Key API/Credential Requirements (Optional/Required)                   |
| ---------------- | ------------------------------------------------------------ | --------------- | --------------------------------------------------------------------- |
| Telegram         | Native Scraper                                               | Wayback Machine | Telegram API keys & bot token (Optional, for enhanced access)         |
| TikTok           | Native Scraper (under active development/refinement)         | Wayback Machine | Potentially session cookies or other authentication tokens (evolving) |
| Twitter (X)      | Native Scraper (utilizing API v2)                            | Wayback Machine | Twitter API V2 bearer token (Optional, for API access)                |
| VKontakte (VK)   | Native Scraper                                               | Wayback Machine | VKontakte username & password (Optional, for authenticated access)    |
| YouTube          | `yt-dlp` integration                                         | Wayback Machine | None typically required for public videos                             |
| General Webpages | Browsertrix Crawler (likely development goal) / Direct Fetch | Wayback Machine | Internet Archive account (Optional, for Save Page Now submissions)    |

## Usage of Auto-Archiver

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Frontend of a fresh Auto Archiver in Bellingcat's hosted version of the tool.</p></figcaption></figure>

#### Auto-Archiver Ecosystem

{% tabs %}
{% tab title="Purpose" %}
The Auto Archiver API serves as a crucial intermediary layer, designed to manage users, Google Sheets containing URLs for archiving, and individual URL submissions. It leverages Celery workers to asynchronously process these archive requests by invoking the capabilities of the core `bellingcat/auto-archiver` tool. This architecture allows for scalable and non-blocking archival operations. The API supports authentication via Google OAuth Apps, providing a secure method for user access, and can also grant full control via an API token. Cross-Origin Resource Sharing (CORS) is enabled, permitting web applications from different domains to interact with the API. The entire API is designed to be run using Docker, simplifying its deployment and management.  &#x20;
{% endtab %}

{% tab title="User Management" %}
A key feature of the API is its sophisticated user management and access control system, configured via a `user-groups.yaml` file. This file defines user groups, which in turn dictate access levels, operational quotas, and the specific orchestrator configurations to be used for archiving tasks. Users can be assigned to groups either explicitly by their email address or implicitly based on their email domain. Individuals not fitting into predefined groups are assigned to a default group, whose permissions can be restricted as needed. Permissions are granular, allowing administrators to control aspects such as:  &#x20;

* `read`: Defines which groups' archives a user can access (all, none, or a specific list of groups).  &#x20;
* `read_public`: A boolean enabling search access to public archives.  &#x20;
* `archive_url`: A boolean enabling the archiving of individual URLs within that group.  &#x20;
* `archive_sheet`: A boolean enabling the archiving of entire spreadsheets.  &#x20;
* `manually_trigger_sheet`: Allows manual triggering of sheet archiving.  &#x20;
* `sheet_frequency`: Defines options for how often sheets are archived (e.g., "hourly," "daily").  &#x20;
* `max_sheets`: Limits the total number of spreadsheets a user can manage.  &#x20;
* `max_archive_lifespan_months`: Sets a retention period for archives in S3 storage.  &#x20;
* `max_monthly_urls` / `max_monthly_mbs`: Imposes quotas on the number of URLs or total data size a user can archive per month.  &#x20;
* `priority`: Assigns a "high" or "low" priority to archiving tasks from that group.
{% endtab %}

{% tab title="Auto-Archiver UI" %}
**Purpose and Current Status:** The Auto Archiver UI, also referred to as the Auto Archiver Setup Tool, was initially presented as a prototype demo service hosted by Bellingcat at `auto-archiver.bellingcat.com`. Access to this instance is managed by Bellingcat's team and is typically granted to open-source researchers, journalists, or aligned groups, with limited quotas per user. The UI aims to provide a more user-friendly graphical interface for interacting with the Auto Archiver system, likely simplifying tasks such as submitting URLs for archiving and managing existing archives, by communicating with the backend API.  &#x20;

Significantly, the code for this UI is now open-source under an MIT license and is available on GitHub (repository `bellingcat/auto-archiver-ui`, formerly potentially `bellingcat/auto-archiver-setup-tool`). This development allows organizations to deploy their own instances of the UI, providing their teams with an accessible front-end to their self-hosted Auto Archiver API and core tool. The UI is built using Vue.js and JavaScript.  &#x20;
{% endtab %}
{% endtabs %}

### Self-Hosting: Step-by-Step Setup (Updated)

1. **Set Up Google Cloud (if using Google Sheets):** Create a Google Cloud project and enable the Google Sheets (and Drive) APIs for it. Set up a Service Account in Google Cloud, download its JSON credentials, and share your Google Sheet with the service account’s email. This “non-human” account will allow the Auto Archiver to read and update your sheet on your behalf. ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/).)
2. **Download and Install the Tool:** You can install Auto Archiver on your own machine or server in a few ways:
   * **Option A – Docker:** Install Docker, then pull and run the pre-built image. For example: `docker pull bellingcat/auto-archiver && docker run -it --rm -v ./secrets:/app/secrets bellingcat/auto-archiver --config secrets/orchestration.yaml`. (This command downloads the image and runs the archiver using a configuration file in a local `secrets` folder.)
   * **Option B – Pip:** Ensure you have **Python 3.10+** installed, then install the Auto Archiver package from PyPI by running `pip install auto-archiver`. This will add an `auto-archiver` command to your system. (Alternatively, you can still clone the repository and install its requirements manually, but the PyPI package and Docker image simplify this process.)
3. **Install System Dependencies:** Make sure additional system tools are available:
   * **FFmpeg** – for processing and saving video or audio content.
   * **Firefox** (or another supported browser) **and Geckodriver** – for any web automation tasks like capturing screenshots or loading dynamic pages (headless Firefox is used by default for certain modules).
   * _(Optional)_ **Fonts (Noto)** – installing the Noto font family is recommended to ensure Unicode characters render correctly in screenshots/PDF printouts (especially for non-Latin scripts).
4. **Configure Environment and Credentials:** The Auto Archiver uses a YAML configuration (commonly `orchestration.yaml`) to enable/disable modules and specify credentials. You can create or edit this config file manually, or use the built-in[ **configuration editor** tool ](https://data.safetycli.com/changelogs/auto-archiver/)for guided setup. In the config (or a separate `.env` file referenced by it), provide the paths and keys it will need:
   * The path to your Google service account JSON file.
   * API keys, tokens, or login credentials for any platforms you plan to archive from (Telegram API ID and bot token, Twitter API bearer token or login cookies, VK username/password, etc.). **Instagram** archiving may require setting up the optional InstagrAPI service and [providing an Instagram account’s credentials](https://data.safetycli.com/changelogs/auto-archiver/) for it.
   * Choose your _feeder_ (input source) module – e.g., Google Sheets (requires sheet ID and credentials), CSV/console, or others – and your desired _storage_ module (e.g,. local disk, an S3 bucket, Google Drive). Enable or disable any extra _enricher_ modules (like screenshot, hashing, transcription) as needed. The modular design allows you to load only what you need.
   * **Note:** Keep all secret keys/tokens in the secure `.env` or the config file (which you should not share publicly) rather than hard-coding them. This protects your credentials and maintains data integrity.
5. **Run the Archiver:** Start the tool using your chosen method. For example, if installed via pip, run the command `auto-archiver --config orchestration.yaml` (adjusting the path to your config). If using Docker, the container may already be running the service (depending on the run command). Once running, begin feeding it URLs:
   * If using **Google Sheets**, paste or enter the target URLs into the designated sheet and watch as the Auto Archiver processes each entry. The status (success or error, archive identifiers, etc.) will be written back to the sheet in adjacent columns.
   * If using a **CSV or CLI input**, run the archiver with the CSV file or input the URLs as prompted, and check the output log or report file for results.
   * The tool will automatically determine which extractor module to use for each URL based on its domain/platform. For example, a TikTok link will invoke the TikTok extractor, a YouTube link will use the generic/yt-dlp extractor, a Telegram post will use the Telegram or Telethon extractor, and so on. Content and metadata will be saved according to your configuration (either on local storage or uploaded to your chosen cloud storage). The Wayback Machine extractor may also run as a backup to capture a snapshot of the page ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)).

_Secure your keys:_ Remember to store API keys and credentials in a protected file or environment variable, not in plain code. Avoid exposing these secrets in any public repository or shared environment to prevent abuse or unauthorized access.

<details>

<summary>Configuration Deep Dive</summary>

Configuration is central to tailoring the Auto Archiver's behavior:

* **Orchestration Files (`orchestration.yaml`):** This YAML file is the primary configuration for the core Auto Archiver. It defines archiving strategies for different platforms, specifies storage backends (local, S3, Google Drive), configures media processing options, and sets other operational parameters. When using the Auto Archiver API, at least one `secrets/orchestration.yaml` file must be created and referenced. If the API's "archive sheets" feature is used with a database feeder for Google Sheets, an additional `orchestrationsheets-sheets.yaml` file with the `gsheet_feeder_db` feeder and database enabled and configured is also necessary.  &#x20;
* **Environment Variables (`.env` files):** To securely manage sensitive information such as API keys, paths to credential files (like the Google Service Account JSON), and other deployment-specific settings, the Auto Archiver utilizes `.env` files. The core tool typically looks for a `.env` file in its project directory. The API component uses distinct files for different environments, specifically `.env.prod` for production and `.env.dev` for development setups.  &#x20;
* **The New Configuration Editor:** Recognizing that manually editing YAML files can be complex and error-prone, the v1.0.0 release introduces a "Configurations Editor". This tool, accessible via the new documentation website (`auto-archiver.readthedocs.io`), is designed to simplify the creation and modification of `orchestration.yaml` files. The build process for the documentation site includes steps to generate this editor as an HTML page (`scripts/generate_settings_schema.py` and `npm run build` for `scripts/settings`). This suggests a web-based utility, possibly running client-side, that provides a guided interface for configuring the Auto Archiver, thereby lowering the technical barrier and potentially reducing configuration errors. This is a significant usability improvement, directly addressing one of the tool's noted limitations regarding setup complexity.  &#x20;

- **API Deployment:** The Auto Archiver API is designed for Docker-based deployment. The GitHub repository provides Makefiles with targets like `make dev` for spinning up a development environment (which may include services like Redis) and `make prod` for production deployment. Setup involves configuring the appropriate `.env` file (`.env.dev` or `.env.prod`) and the `user-groups.yaml` file to define user access and permissions.  &#x20;
- **UI Deployment (Self-hosted):** For organizations wishing to deploy the Auto Archiver UI, the process involves fetching the Vue.js-based source code from its GitHub repository (`bellingcat/auto-archiver-ui`). The project is built using `yarn` (e.g., `yarn build`). The resulting static assets can then be deployed to any web hosting service that supports static sites (e.g., Firebase Hosting, Netlify, AWS S3 with CloudFront, or a traditional web server). Critical to this setup is ensuring the UI is correctly configured to communicate with the organization's self-hosted instance of the Auto Archiver API. The original setup instructions mention dependencies on Firebase and Google Cloud projects , which self-hosters may need to replicate or adapt based on their infrastructure.  &#x20;

The varied deployment options reflect a tiered approach to complexity. Docker offers a streamlined path for the core tool, while pip provides flexibility for Python-centric users. Full self-hosting of the API and UI offers maximum control for organizations but demands greater technical expertise and infrastructure management. This flexibility caters to a wide spectrum of users, from individual researchers to large investigative teams, though the "setup complexity" limitation becomes more pronounced as one moves towards deploying the full ecosystem.  &#x20;

</details>

{% hint style="warning" %}
To secure API keys, store them in a protected environment file (e.g., `.env`) rather than directly in the code, use environment variables to access them; avoid sharing or exposing keys in public repositories to prevent unauthorized access and ensure data integrity.
{% endhint %}

This setup covers the essentials to get the Auto Archiver running. More detailed troubleshooting and configuration options can be found in the [Bellingcat GitHub repository](https://github.com/bellingcat/auto-archiver).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* **Google Cloud Service Account** (JSON credentials) – _required if using Google Sheets integration or Google Drive storage_.
* **Python 3.10 or above** – _required if installing via pip or running from source_.
* **Docker** – _optional, if you choose to deploy via Docker container instead of local installation_.
* **FFmpeg** – for handling video/audio downloads and conversions.
* **Firefox browser** and **Geckodriver** – for automated web content rendering (e.g. to take screenshots or navigate pages).
* **Telegram API ID & Hash and a Bot Token** – _optional, for archiving Telegram messages via the API/Bot_.
* **Twitter API Bearer Token** – _optional, for Twitter API extraction (if using the official API method; not needed if using cookie-based or generic extraction)_.
* **VKontakte** login (username & password) – _optional, for archiving content from VK that isn’t publicly accessible without login_.
* **Instagram credentials** – _optional, for Instagram content that requires authentication (used with the Instagram API extractor/InstagrAPI service)_.
* **Bluesky account** – _optional, not required for public Bluesky posts (_[_the tool includes an unauthenticated method_](https://data.safetycli.com/changelogs/auto-archiver/)_)_
* **Internet Archive account** – _optional,_ [_for using the Wayback Machine API_](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/) _with your own credentials (to increase archiving rate limits)_
* **Stable Internet connection** – required for the tool to access and archive online content.

_(Most platform credentials are only needed if you intend to archive from that platform and the content isn’t publicly accessible. Public content from many sites – e.g. YouTube, Facebook, TikTok – can often be archived without logging in, thanks to the integrated yt-dlp backend.)_

## Limitations

* **Initial Setup Complexity:** While improved, the setup can be complex for first-time users. It involves configuring cloud credentials, API keys, and installing system dependencies. The new configuration wizard and Docker images have reduced this burden, but a basic technical proficiency is still necessary to get the tool running correctly ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). Users may need to troubleshoot environment issues or adjust configurations for their specific use case.
* **Platform & API Dependence:** The Auto Archiver relies on third-party platforms’ APIs and front-end structures, which are subject to change. If a social media platform alters its URL format, API access, or introduces new anti-scraping measures, some extractor modules might break until updated. The tool’s maintainers actively push updates (and the tool can auto-update its yt-dlp component) to adapt to changes, but there may be short lapses in functionality for certain sites ([data.safetycli.com](https://data.safetycli.com/changelogs/auto-archiver/)). Additionally, some platforms (e.g. Instagram, Facebook) do not provide easy methods for third-party archiving of content, meaning the Archiver might not capture those perfectly without an authorized session or may require workarounds like providing your login cookies.
* **Archiving Gaps for Certain Content:** The Wayback Machine fallback does **not** fully preserve videos or interactive media ([bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)). While the Auto Archiver attempts to download media content directly (using platform APIs or scraping) so that videos are saved, if all automated methods fail and only a Wayback snapshot is taken, the result may be a page without the actual video or dynamic elements. Highly dynamic or encrypted content (such as livestreams, ephemeral stories, or posts behind certain paywalls) may not be captured completely. Furthermore, very large files or high volumes of links could hit rate limits or timeouts on some services. Users should be aware of these edge cases and, when possible, manually verify that critical videos/images have been successfully saved (for example, by checking the output folder or cloud storage to see that media files are present).

## Ethical Considerations

* **Respect Privacy and Consent**
  * **Public vs. Private Content:** Only archive content that is publicly accessible and intended for public consumption. Avoid archiving private materials or data that could infringe on someone’s privacy rights without clear public-interest justification.
  * **Sensitive Data:** Be cautious with content involving minors, vulnerable individuals, or personal information (e.g. medical or legal details). Even if publicly posted, such content should be handled with care and probably avoided unless crucial to an investigation.
* **Ensure Content Authenticity and Accuracy**
  * **Verify Content:** Archiving is not a substitute for verification. Always verify the source and context of the content before using it in reporting. False or misleading information can be archived just as easily as accurate information. Treat archived material as evidence to be corroborated, not automatically as truth.
  * **Preserve Metadata:** When possible, preserve metadata (timestamps, author, geolocation tags, etc.) during archiving. This information can be vital for establishing authenticity and timeline, especially if the content is later used in legal or historical contexts.
* **Minimize Harm and Avoid Misrepresentation**
  * **Context Matters:** Consider the context in which archived material will be presented. Content from conflict zones or sensitive events can be misinterpreted if taken out of context. Provide appropriate context when sharing archived clips to avoid fueling misinformation.
  * **Avoid Manipulation:** Do not alter archived content. Present the material as it was originally, and refrain from editing or manipulating screenshots/videos in a way that could mislead. The goal is to preserve, not to create new distortions.
* **Adhere to Platform Terms and Legal Constraints**
  * **Platform Policies:** Check each platform’s terms of service and API usage policies. Some platforms may prohibit automated scraping or require permission for certain kinds of data collection. Use the tool in a way that does not flagrantly violate terms, to avoid legal or account repercussions.
  * **Intellectual Property:** Respect copyright and usage rights. Archiving news videos or photographs, for example, might raise copyright issues if you later publish them. Consider fair use and always attribute the original source. The Auto Archiver’s output is for research and evidentiary purposes – if you publish archived material, ensure you have the right to do so.
* **Legal Implications of Automated Archiving**
  * **Jurisdictional Restrictions:** Laws on web scraping and data archiving vary by country. If you are operating in a jurisdiction with strict data protection or cybercrime laws, make sure that using the Auto Archiver (especially on content created by others) is legal. Obtain legal advice if unsure.
  * **Safety of Sources:** In repressive environments, archiving certain content (even if public) might create a trail that could endanger the poster or others. Be mindful of what you archive and who could potentially access the records. If necessary, keep archives secured and consider the operational security of your archiving activities.

## Guides and articles

Ramalho, M. (2022, September 22). _**Preserve Vital Online Content With Bellingcat’s Auto Archiver**_**. Bellingcat.** [https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)

_**Bellingcat/auto-archiver**_**.** (2024). \[Python]. Bellingcat. [https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver) (Original work published 2021)

## Tool provider

Bellingcat

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.&#x20;

_The tool itself does not appear to use any advertising trackers._ However, if you use the Google Sheets integration, be aware that Google’s services use tracking cookies. In operational use, the Auto Archiver runs locally or on your own server, so your data stays under your control.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
