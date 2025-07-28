---
description: >-
  Bellingcat's tool to automatically archive social media posts, videos, and
  images. Free and Open-Source.
---

# Auto Archiver

## URL

[https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver)

## Description

<figure><img src=".gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>A screen grab of an Auto Archiver execution for the Tajik-Kyrgyz border conflict. <a href="https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/">Source</a>.</p></figcaption></figure>

The Auto Archiver is an open-source tool developed by Bellingcat that automates the process of archiving online content. It's designed for journalists, researchers, and human rights defenders who need to preserve digital evidence from the web. With Auto Archiver, you can systematically save social media posts, videos, images, and entire webpages to ensure they remain accessible even if the original content is taken down.

### How It Works

The tool works by taking a list of URLs from a Google Sheet or a CSV file. It then processes each link, using the best archiving strategy for the given platform. It can handle content from a wide range of sources, including Twitter, YouTube, TikTok, Telegram, and Facebook.

The archived content, including media files and a screenshot of the original page, is saved to your chosen storage location. You can configure Auto Archiver to use your local machine, a Google Drive folder, or an S3-compatible object store (like Amazon S3 or Digital Ocean Spaces). The tool then reports the status of each archiving job back to your original spreadsheet, giving you a clear overview of what has been preserved.

#### New Features: Web Interface and API

The latest version of Auto Archiver includes a user-friendly web interface and an API, built with FastAPI. This makes it even easier to manage your archiving tasks. You can now submit URLs directly through the web UI, monitor the progress of your archives, and manage your archived content without needing to interact with the command line.

## An archiving tool for open source researchers

The Auto Archiver’s automation, expanded platform support, and use of robust archiving techniques can make it s udrful tool for open-source investigations. Unlike manual archiving, which can be time-consuming and inconsistent, this tool enables a more rapid and reliable capture of information, ensuring that valuable online content remains accessible even if it is deleted or altered. Its open-source nature means the community can verify its methods and adapt the tool to specific needs, providing transparency and flexibility essential for responsible use. Bellingcat and others in the OSINT community have actively used Auto Archiver in fast-moving crises and major conflict investigations (for example, during Russia’s invasion of Ukraine) to save evidence that might disappear ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). It has also been adopted by partner organizations like the [Centre for Information Resilience](https://www.info-res.org/) and [OSR4Rights](https://osr4rights.org/) to systematically archive content from conflict zones ([bellingcat.com](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)). In practice, once the tool is set up, an investigator can simply copy-paste links of interest (from Telegram, TikTok, Twitter, _etc._) into the designated sheet or interface, and the Auto Archiver will quickly preserve the content – a process described as “a life-saver for investigators” when dealing with volatile information ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)).

### Getting Started

To run Auto Archiver locally, some technical knowledge is needed for the initial setup. The easiest method is using Docker, which bundles all dependencies and simplifies the installation process.

For those who prefer not to manage their own installation, a commercial, managed version of the tool is available from [auto-archiver.com](https://auto-archiver.com/). This service is provided by [OSR4Rights](https://osr4rights.org/), a partner organization that has collaborated with Bellingcat on the development of the tool.

## Notable instances and case studies:

* **Russia-Ukraine War**: [Bellingcat used the Auto Archiver to systematically capture social media posts](https://www.bellingcat.com/resources/how-tos/2022/03/08/how-to-archive-telegram-content-to-document-russias-invasion-of-ukraine/) from platforms like Telegram and X, creating a permanent record of military movements, civilian harm, and other evidence.
* **Human Rights in Myanmar**: The tool has been used to document social media posts related to [human rights violations during the 2021 military coup](https://osr4rightstools.org/auto-archiver), preserving evidence of protests and crackdowns.
* **Election Violence Evidence:** The Global Investigative Journalism Network (GIJN) highlighted the Auto Archiver as a critical tool for preserving video evidence of election-related violence, naming it one of its ["Top 10 Investigative Tools of 2023."](https://gijn.org/resource/revised-elections-reporting-guide-new-digging-tools/)
* **Misinformation Campaigns**: Researchers use the tool to [save posts from coordinated disinformation campaigns](https://gijn.org/resource/investigating-digital-threats-disinformation/) before they are removed, allowing for later analysis of tactics.
* **Environmental Disasters**: [Firsthand accounts from events](https://www.deezer.com/de/episode/653737531) such as the 2020 wildfires in Australia or the 2023 earthquakes in Turkey and Syria, have been archived to serve as evidence for response analysis and historical documentation.

## Usage of Auto-Archiver

<figure><img src=".gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Frontend of a fresh Auto Archiver in Bellingcat's hosted version of the tool.</p></figcaption></figure>

### Supported Platforms

The tool uses a modular system of "extractors" to target different sites. If a primary method fails, it defaults to submitting the URL to the Wayback Machine for a basic snapshot.

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

<details>

<summary>Core Engine Deep Dive</summary>

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p><em>Auto-Archiver processing pipeline.</em> The orchestrator runs each URL through configured modules in sequence. <strong>Feeder</strong> modules supply URLs (from user input, CSV, Google Sheets, etc.), then <strong>Extractor</strong> modules fetch the content (using site-specific archivers or web downloaders). <strong>Enricher</strong> modules add metadata (e.g. screenshots, hashes, timestamps). Outputs are written via <strong>Storage</strong> modules (saving files locally or to cloud storage) and <strong>Database</strong> modules (updating a Google Sheet, CSV log, etc.). A <strong>Formatter</strong> can generate a human-friendly report (e.g. an HTML page linking the archived media). The default pipeline (v1.0.1) uses the CLI feeder, generic and site-specific extractors (Twitter, Telegram, etc.), several enrichers (screenshot, SSL info, hashes, thumbnails, etc.), local storage, CSV/console logging, and an HTML formatter</p></figcaption></figure>

* Input Feeders: The tool is designed to ingest lists of URLs from a variety of sources, which it refers to as "feeders". The most common and well-documented method is using a Google Sheet, where a user simply pastes URLs into a designated column. This method requires the user to create a Google Cloud Service Account, generate a JSON credentials file, and share the target Google Sheet with the service account's unique email address, granting it editor permissions. The tool also supports simpler feeders, such as local CSV files or direct URL input from the command-line interface (CLI).  &#x20;
* Modular Extractors: A key strength of the Auto Archiver is its modular design for handling different platforms. Upon receiving a URL, the tool intelligently routes it to a platform-specific "extractor" module designed to handle the unique structure and characteristics of that site. For example, a TikTok URL will be processed by the TikTok extractor, a YouTube link by the YouTube extractor, and a Telegram post by the Telegram extractor. This modularity allows the tool to be flexible and extensible, with the community able to contribute new extractors or update existing ones as platforms change.  &#x20;
* Underlying Dependencies: The core engine's power comes from its integration with other robust open-source libraries. For downloading videos from a vast array of sites, it leverages the industry-standard `yt-dlp` library. For interacting with Telegram, it utilizes libraries such as Telethon. To capture screenshots and render complex, JavaScript-heavy webpages, it employs a headless browser, such as an integrated version of Google Chrome.  &#x20;

- Configurable Storage Backends: The user has complete control over where the archived data is stored. The configuration file allows for specifying a storage backend, which can be a folder on the local machine, a cloud-based object storage bucket compatible with the Amazon S3 API (such as Digital Ocean Spaces or AWS S3), or a folder within the user's Google Drive.  &#x20;
- Feedback Loop: One of the tool's most user-friendly features, particularly when using the Google Sheets feeder, is its ability to provide real-time feedback. As it processes each URL, the tool writes the status of the job—such as "in progress," "success," or a specific error message—back into the adjacent columns of the same spreadsheet. Upon successful archival, it populates these columns with valuable information, including a direct link to the archived content in the configured storage location, a link to the screenshot, and any extracted metadata like the post's title or duration

</details>

### **Installation methods:** Choose one of the following setups:

**Option A: Docker (simplest)**&#x20;

*   If you don’t want to fuss with Python environments, use Docker. First, install Docker. Then, pull the Auto Archiver image and run it in a single command. For example:

    ```bash
    docker pull bellingcat/auto-archiver 
    docker run -it --rm -v $(pwd)/secrets:/app/secrets bellingcat/auto-archiver --config /app/secrets/config.yaml
    ```

    The above will download the latest container and execute the archiver using a config file located at `./secrets/config.yaml` (mounted into the container). Docker already includes all required [dependencies](https://www.sonatype.com/resources/articles/what-are-software-dependencies) (Python, browser, etc.), which simplifies setup.

**Option B: Python/**[**Pip**](https://packaging.python.org/tutorials/installing-packages/)&#x20;

Ensure you have Python 3.10 or higher installed. Then install the package from PyPI:

```bash
pip install auto-archiver
```

This adds an `auto-archiver` command to your [system path](https://realpython.com/add-python-to-path/). You can check it by running `auto-archiver --help` for available options. (Advanced users can also [clone the GitHub repo](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) and install manually, but pip is easier.)

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>Diagram: How Auto Archiver routes finished files to different storage back-ends—Local disk, S3, Google Drive, or Atlos DB—and returns the corresponding public/CDN or Drive URLs.</p></figcaption></figure>

### **Configuration**

Auto Archiver is highly configurable via a [YAML file](https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/) (often named `orchestration.yaml` or `config.yaml`). You can create this by hand or use the tool’s [built-in configuration editor](https://auto-archiver.readthedocs.io/en/v1.0.1/installation/config_editor.html) for guidance.&#x20;

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption><p>Auto Archiver’s web-based <strong>Configuration Editor</strong>: upload an existing <code>orchestration.yaml</code> (step 1), then tick or drag modules—Feeders, Extractors, Enrichers, Databases, Storages, Formatters—to build a custom archiving pipeline before saving the new YAML or copying it to your clipboard (steps 2-4).</p></figcaption></figure>

Key settings in the config include:

* **Input source (**[**Feeder**](https://auto-archiver.readthedocs.io/en/latest/modules/feeder.html)**)**: _Decide how you will supply URLs_. Common options are [**Google Sheets**](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/feeder/gsheet_feeder_db.html) (you’ll provide the [Sheet ID](https://developers.google.com/workspace/sheets/api/guides/concepts#sheet_and_spreadsheet_ids) and your [Google credentials file path](https://cloud.google.com/docs/authentication/application-default-credentials#setting_the_environment_variable) in the config), or [**CSV**](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/feeder/csv_feeder.html)**/**[**Console**](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/feeder/cli_feeder.html) (for a local CSV file or manual input). For Google Sheets, ensure the [service account email](https://app.gitbook.com/s/zTseAuK8omzvmNw475qA/) is[ given edit access to the sheet](https://stackoverflow.com/questions/27067825/how-to-access-google-spreadsheets-with-a-service-account-credentials). For a CSV, prepare a CSV with at least a “URL” column and any other optional columns (the tool will append results to this file).
* **Output storage**: Choose where archived data will be saved. By default, it can save to a [local folder](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/storage/local_storage.html) (on disk). You can also configure cloud storage: e.g. an [Amazon S3 bucket](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/storage/s3_storage.html), [Google Drive](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/storage/gdrive_storage.html), or [others](https://auto-archiver.readthedocs.io/en/latest/modules/storage.html). If using local storage, you might specify an output directory. The tool will organize archived files (videos, images, HTML, etc.) in that location, usually grouped by date or task.
* **Modules to enable**: Auto Archiver has modular “[extractors](https://auto-archiver.readthedocs.io/en/latest/modules/extractor.html)” (for pulling content) and [“enrichers”](https://auto-archiver.readthedocs.io/en/latest/modules/enricher.html) (for extra data). By default, it decides automatically, but you can toggle some. For example, a [**screenshot module**](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/enricher/wacz_extractor_enricher.html) can capture a PNG image of the page or even save the page in a [WACZ archive](https://specs.webrecorder.net/wacz/1.1.1/), a [**hashing module**](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/enricher/pdq_hash_enricher.html) can record cryptographic hashes of files for integrity, a [**transcription module**](https://app.gitbook.com/s/zTseAuK8omzvmNw475qA/) can attempt to transcribe video/audio (using [Whisper AI](https://en.wikipedia.org/wiki/Whisper_\(speech_recognition_system\))) etc. In the config YAML, you might see sections like `enrichers:` or `extractors:` where you can enable/disable these. If you leave them on, be sure to have the required dependencies (e.g. [Whisper for transcripts](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/enricher/whisper_enricher.html)).
* [**Credentials**](https://cloud.google.com/docs/authentication/application-default-credentials#setting_the_environment_variable): In the config (or in a separate `.env` file that the config references), you’ll plug in any [API keys](https://konghq.com/blog/learning-center/what-are-api-keys) or login info needed. For instance, to use the [Twitter API method](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/extractor/twitter_api_extractor.html), put [your Bearer token](https://auto-archiver.readthedocs.io/en/latest/how_to/01_authentication_how_to.html); for [Telegram](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/extractor/telegram_extractor.html), [your API ID/hash and bot token](https://core.telegram.org/api/obtaining_api_id); for Reddit/LinkedIn, you might [provide a session cookie string](https://auto-archiver.readthedocs.io/en/v1.0.1/how_to/authentication_how_to.html). All of these are optional – the tool will try to work without them – but providing credentials improves success.&#x20;

{% hint style="warning" %}
Make sure to keep this config file secure (don’t share it publicly) since it contains your secret keys.
{% endhint %}

<details>

<summary>YAML setup example</summary>

{% code overflow="wrap" lineNumbers="true" fullWidth="true" %}
```yaml
feeder:
  module: GoogleSheetsFeeder
  options:
    sheet_id: "YourGoogleSheetID"
    credentials_file: "path/to/service_account.json"

storage:
  module: LocalStorage
  options:
    output_dir: "archives_output"

# Enable screenshot capture
enrichers:
  - ScreenshotEnricher

# Credentials
credentials:
  twitter_bearer_token: "YOUR_TWITTER_BEARER_TOKEN"
  telegram_api_id: "YOUR_TELEGRAM_ID"
  telegram_api_hash: "YOUR_TELEGRAM_HASH"
  telegram_bot_token: "YOUR_TELEGRAM_BOT_TOKEN"
  # ... etc.
  
  # In practice, you would adjust this to your needs and ensure the modules listed match the latest version’s naming (note: in v1.1+, ScreenshotEnricher has been replaced under the hood by an Antibot mechanism, but you can still enable screenshots in config and the tool will handle it)
```
{% endcode %}

</details>

## Usage Examples

Once everything is installed and configured, using Auto Archiver is straightforward. You typically run it via the command line. Common use cases include:

### **Archiving from a Google Sheet**

If you set up a Google Sheet with URLs, just run the tool and point it to your config. For example:

```bash
auto-archiver --config config.yaml
```

Upon running, Auto Archiver will connect to the [Google Sheet you specified](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/feeder/gsheet_feeder_db.html). It will read each new URL in the sheet and begin archiving them one by one. You can watch the progress in the terminal. For each URL, the sheet will get updated with new data columns, such as an “Archive Status” (e.g. ✅ _Archived_ or ❌ _Failed_) and links to the archived results. For instance, the sheet might show the direct URL to [an archived video file](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/extractor/generic_extractor.html), a [link to a screenshot image](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/screenshot_enricher/screenshot_enricher/index.html), a [hash value](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/enricher/hash_enricher.html), or a [timestamp of when it was archived](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/enricher/timestamping_enricher.html). This gives you an easy overview within the spreadsheet itself of what’s been captured.

### **Using a CSV or list of URLs**

If you prefer not to use Google Sheets, you can[ supply a simple CSV file](https://auto-archiver.readthedocs.io/en/v1.0.1/feeder-modules/csv_feeder.html). Put your URLs under a header (e.g. `URL`) in the CSV. Adjust your config to use the CSV feeder (point it to the file path). Then run:

```bash
auto-archiver --config my_csv_config.yaml
```

&#x20;The tool will read the CSV and process each link similarly. It can either update the same CSV with results or output a new report CSV. This is handy for one-off batches of links. _(You can also run a single URL directly via the console feeder, or even script multiple `auto-archiver` calls for individual URLs. In general, it’s designed to handle a list rather than one URL at a time, but nothing stops you from making a CSV with just one link_

### **Downloading from social media**&#x20;

You don’t need separate commands for each platform – just put the links in your input, and **Auto Archiver picks the right approach**. You just drop the links into your input source (for example, the “URL” column of a Google Sheet [configured with the `gsheet_feeder_db` module](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/feeder/gsheet_feeder_db.html)). Auto Archiver’s [orchestrator ](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/core/orchestrator/index.html)checks each link, chooses the matching extractor, runs it, then writes the results back to the sheet.\
For example: to [**save a Telegram post**](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/extractor/telegram_extractor.html) (or an entire public channel’s history), you might paste the Telegram message URL or channel URL in the sheet. The archiver will download the text of the post, any images or video in it, and even stickers or files if possible. If you provided Telegram API credentials,[ it can retrieve a long history of a channel more reliably via Telethon](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/extractor/telethon_extractor.html), including content that a simple scraper might miss. \
As another example, to [**archive a Twitter/X post**](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/extractor/twitter_api_extractor.html), you’d put the tweet URL. With a [Twitter API key set](https://developer.x.com/en/docs/tutorials/step-by-step-guide-to-making-your-first-request-to-the-twitter-api-v2), the tool will fetch the tweet data (text, author, timestamp) through the API; if no key, it will try to scrape the tweet from the web or rely on a Wayback snapshot. In both cases, if the tweet has a video, Auto Archiver uses **yt-dlp** (or a similar downloader) to grab the video file for you. All of that gets saved and logged without you having to run separate download commands.

### **Capturing screenshots**

By enabling the [screenshot module](https://auto-archiver.readthedocs.io/en/v1.0.1/modules/autogen/enricher/screenshot_enricher.html) in your config, the tool will save a full-page screenshot of webpages or posts as it archives them. This is useful for visual evidence.&#x20;

For instance, when archiving a Facebook post (note: Facebook support is experimental and may require cookies), the archiver might save the HTML content and also generate a PNG image showing how the post appeared in the browser. Auto Archiver treats Facebook links just like any other platform: you paste the URL into your input (Google Sheet, CSV, CLI list) and the orchestrator routes it to the [facebook extractor module](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/generic_extractor/facebook/index.html). The screenshot file will be stored in your output (e.g. local folder or Drive) and a reference to it (filename or link) will appear in the sheet/CSV log. The same goes for tweets or Telegram messages: a screenshot of the post/chat can be captured in addition to text and video.&#x20;

Keep in mind that to take screenshots, a headless browser is used; the new [_Antibot Extractor_](https://auto-archiver.readthedocs.io/en/latest/modules/autogen/extractor/antibot_extractor_enricher.html) module in v1.1 handles this more robustly, even navigating login or cookie walls in many cases. (Facebook rate-limits datacenter addresses; the devs recommend running from a local connection, also referred to as a [residential IP](https://rayobyte.com/blog/what-is-residential-ip).) If a site is very hostile to automation (using CAPTCHAs), the screenshot might show a login or challenge page; in such cases, you might need to provide your login or skip the screenshot for that site.

### **Saving to cloud or remote storage**

By default, archives save to your local disk (or wherever you run the Docker container). But you can configure remote storage. For example, if you set up Google Drive storage in the config, the tool will upload each archived file to a specified Drive folder. So if you’re archiving from a newsroom computer, everyone with access to the Drive can instantly see the saved videos/images there. Another advanced option is saving each page as a [WARC/WACZ file (Web Archive Format)](https://archive-it.org/blog/the-stack-warc-file/) for forensic archiving purposes. It preserves full fidelity (headers, payloads, redirects), supports deduplication via “revisit” records, and is recognised by national libraries as a preferred preservation format. If enabled, the archiver will produce a `.wacz` web archive that you can later open with tools like Webrecorder. This can capture interactive page elements and scripts better than a simple HTML. Such advanced use is optional – for most users, having the screenshot plus the raw media files and a link to a Wayback snapshot covers the bases.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

You can run Auto Archiver on Windows, macOS, or Linux. You’ll need either **Python 3.10+** (if installing as a Python package) or **Docker** installed. In addition, some system tools are recommended for full functionality:

* [**FFmpeg** ](https://ffmpeg.org/)– required for processing/downloading videos and audio.
* [**Web browser engine**](https://en.wikipedia.org/wiki/Browser_engine) – for capturing complex pages or screenshots. By default the tool used [headless ](https://www.techtarget.com/whatis/definition/headless-browser)Firefox (with [Geckodriver](https://github.com/mozilla/geckodriver)), but newer versions use an integrated [headless Chrome solution](https://developer.chrome.com/docs/chromium/headless) for many tasks (so installing Firefox is no longer strictly necessary in v1.1+, especially if using the Docker image). If running locally without Docker, having Firefox + Geckodriver available is still suggested as a fallback.
* _(Optional)_ **Google Cloud Service Account** – needed only if you plan to use Google Sheets as your URL input. This is a special Google account for apps: you create it in Google Cloud, [enable the Sheets API](https://ai2.appinventor.mit.edu/reference/other/googlesheets-api-setup.html), and [get a JSON key file](https://console.cloud.google.com/apis/credentials/serviceaccountkey). (You’ll share your Google Sheet with the service account’s email so the Auto Archiver can read/write it on your behalf.)
* _(Optional)_ **Platform credentials** – not required for basic use, but to archive certain content, you may need to supply API keys or login cookies. For example: [a Twitter API Bearer token](https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/bearer-tokens), [Telegram API ID & hash (and bot token)](https://core.telegram.org/api/obtaining_api_id), or your own[ logged-in session cookies](https://www.cookieyes.com/blog/session-cookies/) for sites like [Reddit](https://www.reddit.com/r/redditdev/comments/b8jped/whats_the_reddit_session_cookie_and_how_do_i_get/) or [LinkedIn](https://sales-mind.ai/blog/how-to-find-linkedin-session-cookie). You can run the tool without these, but providing them can bypass rate limits and access protected content
* **Stable Internet connection** – required for the tool to access and archive online content.

_(Most platform credentials are only needed if you intend to archive from that platform and the content isn’t publicly accessible. Public content from many sites – e.g. YouTube, Facebook, TikTok – can often be archived without logging in, thanks to the integrated yt-dlp backend.)_

## Limitations

* **Initial Setup Complexity:** While improved, the setup can be complex for first-time users. It involves configuring cloud credentials, API keys, and installing system dependencies. The new configuration wizard and Docker images have reduced this burden, but a basic technical proficiency is still necessary to get the tool running correctly ([gijn.org](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/)). Users may need to troubleshoot environment issues or adjust configurations for their specific use case.
* **Platform & API Dependence:** The Auto Archiver relies on third-party platforms’ APIs and front-end structures, which are subject to change. If a social media platform alters its URL format, API access, or introduces new anti-scraping measures, some extractor modules might break until updated. The tool’s maintainers actively push updates (and the tool can auto-update its yt-dlp component) to adapt to changes, but there may be [short lapses in functionality for certain sites](https://data.safetycli.com/changelogs/auto-archiver/). Additionally, some platforms (e.g. Instagram, Facebook) do not provide easy methods for third-party archiving of content, meaning the Archiver might not capture those perfectly without an authorized session or may require workarounds like providing your login cookies.
* **Archiving Gaps for Certain Content:** The [Wayback Machine fallback does **not** fully preserve videos](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/) or interactive media. While the Auto Archiver attempts to download media content directly (using platform APIs or scraping) so that videos are saved, if all automated methods fail and only a Wayback snapshot is taken, the result may be a page without the actual video or dynamic elements. Highly dynamic or encrypted content (such as livestreams, ephemeral stories, or posts behind certain paywalls) may not be captured completely. Furthermore, very large files or high volumes of links may exceed rate limits or cause timeouts on some services. Users should be aware of these edge cases and, when possible, manually verify that critical videos and images have been successfully saved (for example, by checking the output folder or cloud storage to confirm that media files are present).

## Ethical Considerations

#### **Select and Queue URLs Responsibly** 

* **Serve the Public Interest, u**se only what is truly public and news‑worthy. Ask first: _Does archiving/publishing this URL, image, or video materially advance an investigation in the public interest?_
* **Handle vulnerable subjects with extra care.** If minors or at‑risk individuals appear in the footage, consider redacting faces or withholding the post after archiving.
* **Keep sensitive sheets private.** When you use the [**Google Sheets Feeder**](https://auto-archiver.readthedocs.io/en/v1.0.1/how_to/gsheets_setup.html) share the sheet only with your service‑account email, not “Anyone with the link,” to avoid leaking raw evidence.
* **Import only the cookies you truly need.** The “Logging in to sites” guide shows how to attach a single `cookies.txt` per domain; don’t dump your whole browser profile.

#### **Verify, don't assume.**

* **Archiving ≠ verification.** Treat every capture as _potential_ evidence. After the run, treat each capture as unverified until you geolocate, chronolocate, and cross‑check it.
* **Preserve metadata.** Keep timestamps, hashes, and context intact so future reviewers can retrace your steps.

**Capture With Integrity - Let the Modules Do the Work**

| Risk                   | Auto Archiver feature                                                     | How to enable                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tampering claims**   | **Hash Enricher** writes SHA‑256 hashes to your sheet                     | add `hash_enricher` to `steps.enrichers` ([auto-archiver.readthedocs.io](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/hash_enricher/hash_enricher/index.html))                            |
| **Timestamp disputes** | **Timestamping Enricher** signs each file via OpenTimestamps              | add `timestamping_enricher`; keep `.ots` files with media ([auto-archiver.readthedocs.io](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/timestamping_enricher/index.html))                 |
| **Missing visuals**    | **Screenshot Enricher** grabs a full‑page PNG                             | set `screenshot: true` or include `screenshot_enricher` ([auto-archiver.readthedocs.io](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/screenshot_enricher/screenshot_enricher/index.html)) |
| **Link rot**           | **Wayback Extractor/Enricher** saves a snapshot if primary download fails | enabled by default in the fallback chain ([auto-archiver.readthedocs.io](https://auto-archiver.readthedocs.io/en/v1.0.1/autoapi/wayback_extractor_enricher/wayback_extractor_enricher/index.html))  |

#### **Context is non‑negotiable**

* Contextualise or withhold. A geotag without narrative can mislead; always explain what the material shows, what it _doesn’t_ show, and any unanswered questions. Transparency sometimes means _showing less._
* **Show restraint.** If full disclosure endangers a source or civilian, publish a redacted version, or withhold entirely, after consulting peers.

**Be Transparent but Not Reckless**

* **Explain your method.** Document how the file was found, downloaded, and verified so others can replicate the process (Bellingcat’s “radical transparency”).
* **No hidden edits.** Do not crop, enhance, or subtitle in ways that could distort meaning; any necessary edits must be disclosed.

**Comply with Law and Platform Rules**

* **Review terms & local law.** Many sites forbid automated scraping; weigh legal exposure against public‑interest value and seek permission or legal advice when needed.
* **Respect copyright.** Archive for evidentiary use; if publishing excerpts, rely on fair‑dealing/fair‑use principles and credit the original creator.

**Protect Sources, Researchers, and Data**

* **Secure working copies, and k**eep originals immutable. Store raw archives and sensitive spreadsheets in access‑controlled drives; share only with partners who follow the same standards.
* **Anticipate retaliation.** Geolocation or doxxing can endanger the uploader; weigh disclosure against possible harm, and anonymise when prudent.

## Guides and articles

Ramalho, M. (2022, September 22). _**Preserve Vital Online Content With Bellingcat’s Auto Archiver**_**. Bellingcat.** [https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/](https://www.bellingcat.com/resources/2022/09/22/preserve-vital-online-content-with-bellingcats-auto-archiver-tool/)

_**Bellingcat/auto-archiver**_**.** (2024). \[Python]. Bellingcat. [https://github.com/bellingcat/auto-archiver](https://github.com/bellingcat/auto-archiver) (Original work published 2021)

GIJN Article: [New Reporting Tools to Archive Videos, Find QAnon Networks, and Track Targets via Online Reviews](https://gijn.org/stories/new-reporting-tools-to-archive-videos-find-qanon-networks-and-track-targets-via-online-reviews/) (Features the Auto Archiver as a key tool for journalists.)

Managed Service: [https://auto-archiver.com/](https://auto-archiver.com/) (A commercial, managed version of the tool for those who do not want to self-host.)

#### Resources and Support

* **Current Version:** Auto Archiver is under active development. As of July 2025, the latest version is **v1.1.1** (released June 30, 2025).
* **Documentation:** Official docs are available on [_ReadTheDocs_](https://auto-archiver.readthedocs.io/en/v1.0.1/index.html) (covering [installation](https://auto-archiver.readthedocs.io/en/latest/installation/installation.html), [modules](https://auto-archiver.readthedocs.io/en/latest/core_modules.html), and [usage in detail](https://auto-archiver.readthedocs.io/en/latest/how_to.html)). The documentation includes a [configuration guide](https://auto-archiver.readthedocs.io/en/latest/development/settings_page.html) and examples of advanced setups. _(Note:_ The docs may lag a bit behind the very latest features, so community forums can help fill the gaps.)
* **GitHub:** The source code is on GitHub at [**bellingcat/auto-archiver**](https://github.com/bellingcat/auto-archiver). The README there provides installation instructions and links to the docs. Check the GitHub **issues** page if you encounter bugs – you might find that others have reported the same, along with fixes or workarounds. You can also open a new issue to ask questions or report problems. The project is open-source (MIT License) and [welcomes contributions](https://auto-archiver.readthedocs.io/en/latest/development/creating_modules.html).
* **Community & Support:** For direct support, consider the following:
  * Bellingcat’s tech team occasionally provides guidance through Bellingcat’s online channels. Keep an eye on the Bellingcat [website’s **Guides** section](https://bellingcat.gitbook.io/toolkit/resources/guides-and-handbooks) or their Twitter/Mastodon for any updated tutorials.
  * The [**online community**](https://www.bellingcat.com/follow-bellingcat-on-social-media/) (on Twitter, Reddit, or [Discord groups](https://discord.gg/bellingcat)) is very helpful – many researchers use Auto Archiver, so if you ask in a forum like the _r/OSINT_ subreddit or the GIJN mailing list, someone might have an answer.
  * The GitHub repository has a [**Discussions** tab](https://github.com/bellingcat/auto-archiver/discussions) where you can ask how-to questions outside of formal bug reports.

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
