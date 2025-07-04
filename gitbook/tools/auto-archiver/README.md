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

The Auto Archiver is a powerful, open-source tool developed by Bellingcat that automates the process of archiving online content. It's designed for journalists, researchers, and human rights defenders who need to preserve digital evidence from the web. With Auto Archiver, you can systematically save social media posts, videos, images, and entire webpages to ensure they remain accessible even if the original content is taken down.

### How It Works

The tool works by taking a list of URLs from a Google Sheet or a CSV file. It then processes each link, using the best archiving strategy for the given platform. It can handle content from a wide range of sources, including Twitter, YouTube, TikTok, Telegram, and Facebook.

The archived content, including media files and a screenshot of the original page, is saved to your chosen storage location. You can configure Auto Archiver to use your local machine, a Google Drive folder, or an S3-compatible object store (like Amazon S3 or Digital Ocean Spaces). The tool then reports the status of each archiving job back to your original spreadsheet, giving you a clear overview of what has been preserved.

#### New Features: Web Interface and API

The latest version of Auto Archiver includes a user-friendly web interface and an API, built with FastAPI. This makes it even easier to manage your archiving tasks. You can now submit URLs directly through the web UI, monitor the progress of your archives, and manage your archived content without needing to interact with the command line.

## Why It’s an Essential Tool

The Auto Archiver’s automation, expanded platform support, and use of robust archiving techniques make it indispensable for open-source investigations. Unlike manual archiving, – which can be time-consuming and inconsistent, this tool enables rapid, reliable capture of information, ensuring that valuable online content remains accessible even if deleted or altered. Its open-source nature means the community can verify its methods and adapt the tool to specific needs, providing transparency and flexibility essential for responsible use. Bellingcat and others in the OSINT community have actively used Auto Archiver in fast-moving crises and major conflict investigations (for example, during Russia’s invasion of Ukraine) to save evidence that might disappear ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). It has also been adopted by partner organizations like the [Centre for Information Resilience](https://www.info-res.org/) and [OSR4Rights](https://osr4rights.org/) to systematically archive content from conflict zones ([bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)). In practice, once the tool is set up, an investigator can simply copy-paste links of interest (from Telegram, TikTok, Twitter, _etc._) into the designated sheet or interface, and the Auto Archiver will quickly preserve the content – a process described as “a life-saver for investigators” when dealing with volatile information ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)).

#### Getting Started - Locally

To get started with Auto Archiver, you'll need some technical knowledge to set it up if you want to run it locally on your machine or on a server. The easiest way to get up and running is by using [Docker](https://docs.docker.com/), which simplifies the installation process.&#x20;

#### Managed Service

For those who prefer not to manage their own installation, a commercial, managed version of the tool is available from [auto-archiver.com](https://auto-archiver.com/). This service is provided by [OSR4Rights](https://osr4rights.org/), a partner organization that has collaborated with Bellingcat on the development of the tool.

### Notable instances and case studies:

**Russia-Ukraine War**: [Bellingcat has used the Auto Archiver to systematically](https://www.bellingcat.com/resources/how-tos/2022/03/08/how-to-archive-telegram-content-to-document-russias-invasion-of-ukraine/) capture social media posts, videos, and images shared by both official and individual accounts on platforms like Telegram and Twitter. During the initial stages of the invasion, numerous accounts posted videos and images that showed military movements, damage to infrastructure, and the experiences of civilians. Due to the risk of these posts being deleted or censored, the Auto Archiver has been a critical tool for [creating a permanent record of this content](https://ukraine.bellingcat.com/), aiding in ongoing investigations and historical documentation.

**Human Rights Investigations in Myanmar**: The tool has reportedly been used to [document social media posts related to human rights violations in Myanmar](https://osr4rightstools.org/auto-archiver), especially during the 2021 military coup. The tool enabled researchers to capture posts documenting protests, government crackdowns, and other rights abuses, many of which were at risk of being taken down by the government or by the platforms themselves under pressure.

**Election Violence Evidence Preservation:** The Global Investigative Journalism Network (GIJN) has highlighted the Bellingcat Auto Archiver as a critical tool for preserving video evidence related to election violence, an issue of growing concern in 2024 and 2025. Its ability to simplify the previously complex process of video archiving led to its inclusion in GIJN's ["Top 10 Investigative Tools of 2023"](https://gijn.org/resource/revised-elections-reporting-guide-new-digging-tools/).

**Tracking Misinformation and Disinformation Campaigns**: Researchers focusing on misinformation have utilized the Auto Archiver (and comparable tools like Hunchly) to [save tweets and posts involved in coordinated disinformation campaigns](https://gijn.org/resource/investigating-digital-threats-disinformation/). For example, during elections or in the context of high-profile political events, coordinated misinformation can quickly flood social media platforms, often spreading widely before accounts or posts are removed. The Auto Archiver preserves these posts, allowing analysts to later examine the strategies used in these campaigns, even if the original content is no longer publicly accessible.

**Documentation of Environmental Disasters**: In [cases of environmental crises](https://www.deezer.com/de/episode/653737531), such as the 2020 wildfires in Australia or the 2023 earthquakes in Turkey and Syria, the Auto Archiver has been used to record firsthand accounts, videos, and images shared by residents. These records serve not only as evidence for immediate response and analysis but also as historical documentation that can assist future disaster response planning and research.

### Supported Platforms

| **Platform**         | **How It Archives**                                                                                                                   | **Login/API Needed?**                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Twitter (X)**      | Uses Twitter’s API v2 _if_ a token is provided; otherwise attempts web scraping of the tweet content.                                 | API Bearer token **optional** (for higher reliability). If no API, adding your login cookies can help.                                                                                             |
| **Telegram**         | Uses Telegram APIs (Telethon/Bot API) or public web access to fetch messages and media.                                               | Telegram API ID & bot token **optional** (provides expanded access, e.g. private chats). Public channel posts can archive without login.                                                           |
| **TikTok**           | Uses a native web scraper to grab video and metadata (continually updated for TikTok’s site changes).                                 | No official API. **May require** a session cookie for some videos (especially region-locked or private content).                                                                                   |
| **Instagram**        | Can use an unofficial API or headless browser to scrape posts. Often requires an authenticated session for full media (e.g. stories). | Instagram login **optional** but recommended. Without an account, some posts or media might not be accessible. (An optional “InstagrAPI” service can be set up with your IG credentials for this.) |
| **VKontakte (VK)**   | Uses web scraping (the older VK API support has been deprecated). Provides better results when logged in.                             | VK username & password **optional** (needed for content behind login or to avoid limits). Public posts may be captured without login in some cases.                                                |
| **YouTube**          | Downloads videos directly using **yt-dlp** integration (for video/audio) and saves page info.                                         | No login needed for public videos. (For age-restricted or unlisted videos, providing cookies from a YouTube account may be necessary.)                                                             |
| **Reddit**           | Uses a headless browser “drop-in” to capture posts (including comments), effectively simulating a logged-in user.                     | Reddit login **recommended**. The latest version added Reddit support via user session cookies. Without login, some content (e.g. certain subreddits or NSFW media) might not load.                |
| **LinkedIn**         | Uses a headless browser with anti-bot measures to capture posts or profiles.                                                          | LinkedIn **requires** login. You’ll need to provide your LinkedIn session cookie or credentials in the config to archive content.                                                                  |
| **Bluesky**          | Uses Bluesky’s AT Protocol (official API) or public feed data to save posts.                                                          | Bluesky account **optional**. Public posts can be archived without logging in. Providing an account login can help if content is limited to logged-in users.                                       |
| **Truth Social**     | Uses public web scraping to capture posts (Truth Social’s web is openly accessible).                                                  | No login needed for public Truth Social posts. (No known API key required.)                                                                                                                        |
| **General Webpages** | Saves a full webpage via a headless browser crawler (e.g. Browsertrix) or direct HTML fetch.                                          | No login needed for public webpages. _(Optional:_ Provide an Internet Archive account to use its Save Page Now service, which can improve Wayback archiving rates.)                                |

_All platforms:_ if the primary method fails (due to login requirements, errors, etc.), Auto Archiver will submit the URL to the **Wayback Machine** for a [basic snapshot](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver). This ensures at[ least a raw copy is preserved](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/), though dynamic content or videos in that snapshot may be missing.

## Usage of Auto-Archiver

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Frontend of a fresh Auto Archiver in Bellingcat's hosted version of the tool.</p></figcaption></figure>

### Auto-Archiver Ecosystem

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

### Requirements

**Requirements:** You can run Auto Archiver on Windows, macOS, or Linux. You’ll need either **Python 3.10+** (if installing as a Python package) or **Docker** installed. In addition, some system tools are recommended for full functionality:

* [**FFmpeg** ](https://ffmpeg.org/)– required for processing/downloading videos and audio.
* [**Web browser engine**](https://en.wikipedia.org/wiki/Browser_engine) – for capturing complex pages or screenshots. By default the tool used headless Firefox (with [Geckodriver](https://github.com/mozilla/geckodriver)), but newer versions use an integrated [headless Chrome solution](https://developer.chrome.com/docs/chromium/headless) for many tasks (so installing Firefox is no longer strictly necessary in v1.1+, especially if using the Docker image). If running locally without Docker, having Firefox + Geckodriver available is still suggested as a fallback.
* _(Optional)_ **Google Cloud Service Account** – needed only if you plan to use Google Sheets as your URL input. This is a special Google account for apps: you create it in Google Cloud, [enable the Sheets API](https://ai2.appinventor.mit.edu/reference/other/googlesheets-api-setup.html), and [get a JSON key file](https://console.cloud.google.com/apis/credentials/serviceaccountkey). (You’ll share your Google Sheet with the service account’s email so the Auto Archiver can read/write it on your behalf.)
* _(Optional)_ **Platform credentials** – not required for basic use, but to archive certain content, you may need to supply API keys or login cookies. For example: [a Twitter API Bearer token](https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/bearer-tokens), [Telegram API ID & hash (and bot token)](https://core.telegram.org/api/obtaining_api_id), or your own[ logged-in session cookies](https://www.cookieyes.com/blog/session-cookies/) for sites like [Reddit](https://www.reddit.com/r/redditdev/comments/b8jped/whats_the_reddit_session_cookie_and_how_do_i_get/) or [LinkedIn](https://sales-mind.ai/blog/how-to-find-linkedin-session-cookie). You can run the tool without these, but providing them can bypass rate limits and access protected content.

**Installation methods:** Choose one of the following setups:

*   **Option A: Docker (simplest)** – If you don’t want to fuss with Python environments, use Docker. First, install Docker. Then, pull the Auto Archiver image and run it in a single command. For example:

    ```bash
    docker pull bellingcat/auto-archiver 
    docker run -it --rm -v $(pwd)/secrets:/app/secrets bellingcat/auto-archiver --config /app/secrets/config.yaml
    ```

    The above will download the latest container and execute the archiver using a config file located at `./secrets/config.yaml` (mounted into the container)[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver). Docker already includes all required dependencies (Python, browser, etc.), which simplifies setup.
*   **Option B: Python/Pip** – Ensure you have Python 3.10 or higher installed. Then install the package from PyPI:

    ```bash
    bashCopypip install auto-archiver
    ```

    This adds an `auto-archiver` command to your system path[pypi.org](https://pypi.org/project/auto-archiver/). You can check it by running `auto-archiver --help` for available options[pypi.org](https://pypi.org/project/auto-archiver/). (Advanced users can also clone the GitHub repo and install manually, but pip is easier.)

**Configuration:** Auto Archiver is highly configurable via a YAML file (often named `orchestration.yaml` or `config.yaml`). You can create this by hand or use the tool’s built-in configuration editor for guidance[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver). Key settings in the config include:

* **Input source (Feeder)**: Decide how you will supply URLs. Common options are **Google Sheets** (you’ll provide the Sheet ID and your Google credentials file path in the config)[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver), or **CSV/Console** (for a local CSV file or manual input). For Google Sheets, ensure the service account email is given edit access to the sheet. For a CSV, prepare a CSV with at least a “URL” column and any other optional columns (the tool will append results to this file).
* **Output storage**: Choose where archived data will be saved. By default, it can save to a local folder (on disk). You can also configure cloud storage: e.g. an Amazon S3 bucket, Google Drive, or others[github.com](https://github.com/bellingcat/auto-archiver). If using local storage, you might specify an output directory. The tool will organize archived files (videos, images, HTML, etc.) in that location, usually grouped by date or task.
* **Modules to enable**: Auto Archiver has modular “extractors” (for pulling content) and “enrichers” (for extra data). By default it decides automatically, but you can toggle some. For example, a **screenshot module** can capture a PNG image of the page, a **hashing module** can record cryptographic hashes of files for integrity, a **transcription module** can attempt to transcribe video/audio (using Whisper AI)[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver), etc. In the config YAML, you might see sections like `enrichers:` or `extractors:` where you can enable/disable these. If you leave them on, be sure to have the required dependencies (e.g. Whisper for transcripts).
* **Credentials**: In the config (or in a separate `.env` file that the config references), you’ll plug in any API keys or login info needed[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver). For instance, to use the Twitter API method, put your Bearer token; for Telegram, your API ID/hash and bot token; for Reddit/LinkedIn, you might provide a session cookie string. All of these are optional – the tool will try to work without them – but providing credentials improves success. Make sure to keep this config file secure (don’t share it publicly) since it contains your secret keys[bellingcat.gitbook.io](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver).

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
  * **Intellectual Property:** Respect copyright and usage rights. Archiving news videos or photographs, for example, might raise copyright issues if you later publish them. Consider fair use and always attribute the original source. The Auto Archiver’s output is for research and evidentiary purposes.
* **Legal Implications of Automated Archiving**
  * **Jurisdictional Restrictions:** Laws on data archiving vary by country. If you are operating in a jurisdiction with strict data protection or cybercrime laws, make sure that using the Auto Archiver (especially on content containing personally identifiable information) is legal. Obtain legal advice if unsure.
  * **Safety of Sources:** In repressive environments, archiving certain content (even if public) might create a trail that could endanger the poster or others. Be mindful of what you archive and who could potentially access the records. If necessary, keep archives secured and consider the operational security of your archiving activities.

## Guides and articles

Ramalho, M. (2022, September 22). _**Preserve Vital Online Content With Bellingcat’s Auto Archiver**_**. Bellingcat.** [https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)

_**Bellingcat/auto-archiver**_**.** (2024). \[Python]. Bellingcat. [https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver) (Original work published 2021)

#### Further Ressources

* GitHub Repository: [https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver) (This is the main hub for the tool, with the latest code, documentation, and releases.)
* Bellingcat Article: [Preserve Vital Online Content With Bellingcat's Auto Archiver](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/) (An in-depth article from Bellingcat explaining the tool's purpose and use cases.)
* GIJN Article: [New Reporting Tools to Archive Videos, Find QAnon Networks, and Track Targets via Online Reviews](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/) (Features the Auto Archiver as a key tool for journalists.)
* Managed Service: [https://auto-archiver.com/](https://auto-archiver.com/) (A commercial, managed version of the tool for those who do not want to self-host.)

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
