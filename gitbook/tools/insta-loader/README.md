---
description: >-
  Download pictures (or videos) along with their captions and other metadata
  from Instagram.
---

# InstaLoader

## URL

[https://instaloader.github.io](https://instaloader.github.io)

## Description

Instaloader is an open-source tool that facilitates downloading and archiving content from Instagram. Available as both a command-line tool and a Python module, it allows researchers to retrieve and organize data, including media posts, stories, metadata, and more. Its versatility and ability to work with both public and private profiles (with proper authorization) can make it a valuable resource for open source investigations.

1. **Media Downloading**:
   * Downloads photos and videos from public and private Instagram profiles, hashtags, stories, feeds, saved media, IGTV, and reels.
   * Captures metadata such as captions, comments, geotags (as Google Maps links), timestamps, and more.
   * Allows downloading from private profiles if you follow the account or provide valid credentials.
   * Offers optional parameters to limit downloads (e.g., specific sidecar slides, date ranges, post filters).
2. **Automation and Customization**:
   * Automatically detects profile name changes and renames the target directory accordingly.
   * Supports resuming downloads from previously interrupted sessions—both at the command-line level (JSON resume files) and via the Python API.
   * Offers fine-grained control over what to download through various filters (e.g., specific date ranges, post types) and customization of directory and filename patterns.
   * Can be configured for automated tasks (e.g., cron jobs) using `--quiet` mode and persistent session files.

### Key Features

1. **Targeted Content Retrieval**:
   * **Profiles**: Download posts, profile pictures, tagged posts, reels, IGTV videos, stories, and highlights.
   * **Hashtags and Locations**: Fetch posts associated with specific hashtags or geographical locations (requires login for location-based queries).
   * **User Feed and Saved Posts**: For logged-in accounts, retrieve posts from a user’s feed or saved collections.
   * **Individual Posts**: Download specific posts using their unique shortcode (e.g., `instaloader -- -SHORTCODE`).
   * **Followee List**: Download all profiles followed by a user using `@username` syntax (requires login).
2. **Metadata Extraction**:
   * Captures detailed metadata for each post, such as captions, comments (requires login), geotags, likes count, and hashtags.
   * Customizable text or JSON output for metadata, including caption and comment details.
3. **Efficient File Management**:
   * Customizable directory and file naming conventions using patterns such as `{profile}`, `{date_utc}`, and `{shortcode}`.
   * Options to organize content chronologically or by category for better archival workflows.
4. **Incremental Updates**:
   * `--fast-update` stops downloading as soon as Instaloader sees a post that’s already present locally.
   * `--latest-stamps` uses timestamps instead of local files to handle updates (so you can move or delete files without confusing Instaloader).
5. **Python Module**:
   * Provides a Python API to script custom OSINT workflows, such as analyzing likes, tracking deleted posts, or filtering content by date.
6. **Automation**:
   * Designed for cron jobs with options like `--quiet` mode and session persistence, enabling scheduled and automated downloads.
7. **Advanced Filters**:
   * Python-like expressions allow precise filtering by date, hashtags, mentions, engagement metrics, and more.
8. **Error Handling**:
   * Manages rate limits (HTTP 429), login errors, and download interruptions.
   * Provides distinct exit codes (0 to 5) to indicate different failure or partial-success states

<details>

<summary>Instaloader &#x26; Bellingcat Auto Archiver</summary>

**`When you're working with the`** [**`Bellingcat Auto Archiver`**](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver)**`, you may be asked to provide instaloader.session`**

**`instaloader.session`** is a file created by the Instaloader tool (which Auto Archiver uses under the hood for Instagram content). Essentially, it is a small data file that stores your **login session** (including cookies) for Instagram so that you don’t have to log in every time you run Instaloader or the Auto Archiver.

1. **Why It Exists**
   * Instagram requires users to log in for certain types of data access (especially if you need to see private or protected content). When you enter your username and password in Instaloader for the first time, the tool authenticates with Instagram and fetches a session token (a cookie).
   * Instaloader then **saves** that session token locally to a file called `instaloader.session`.
2. **How It Is Created**
   * The **first time** you run Instaloader (or Auto Archiver with the `instagram_archiver` step enabled) and attempt to archive from a private Instagram account or any content that requires login; Instaloader will prompt you for Instagram credentials.
   * After successful login, a file named `instaloader.session` appears in the working directory (or wherever the tool is configured to store session data).
3. **What’s Inside**
   * Internally, it contains **cookies** that represent your authenticated session on Instagram. These cookies let Instaloader reuse your login, so you don’t have to type your username and password on each run.
   * It also ensures Instagram recognizes you in the same way as if you’d logged in via your browser.
4. **Where to Store It**
   * For **Auto Archiver**, best practice is to place `instaloader.session` (once generated) in your `secrets/` folder. That way, the Docker container or local script knows where to find your session, and you’re not repeatedly asked for credentials.
   * Remember to keep this file **private** and avoid committing it to version control (e.g., GitHub). Anyone with access to it could theoretically use your Instagram session.
5. **Expiration & Re-authentication**
   * Sometimes, Instagram invalidates session cookies (e.g., for security or if you change your password). If that happens, Instaloader may prompt you to log in again and create a **new** `instaloader.session` file.
   * If you notice archiving stops working for Instagram, you might need to **delete** the old session file and let Instaloader recreate it with fresh credentials.
6. **Security Considerations**
   * Treat `instaloader.session` as if it’s your actual Instagram login. Anyone who obtains a valid session file might have the same access to your account.
   * Use a dedicated Instagram account for archiving whenever possible (instead of a personal one), and store that account’s session file in a secure place.

</details>



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Instaloader is a free, open source project.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

While basic usage (e.g., downloading all posts from a profile) is straightforward, some command-line or scripting familiarity helps when applying advanced filters, scheduling automation, or handling custom workflows.

## Requirements

### **System Requirements**

* Instaloader is platform-independent and can run on most operating systems (Linux, macOS, Windows, etc.).

### **Python Environment**

* **Python 3.8 or higher**
* Primary dependencies (installed automatically with pip):
  * `requests`
  * `lxml`
  * `BeautifulSoup4` (optional; only needed for certain features)

### **Access Requirements**

* **Anonymous Access**: Instaloader can scrape public profiles, hashtags, and posts without login.
* **Logged-In Access**: To scrape private profiles or retrieve user-specific data (e.g., user feed, saved posts), you must log in with valid Instagram credentials. Instaloader stores a session file to avoid repeated logins.

## Limitations

1. **Technical Barriers**:
   * Command-line usage can pose a challenge for non-technical users.
   * Python module usage requires programming knowledge.
2. **Rate Limits and Restrictions**:
   * Instagram imposes strict rate limits that can trigger “429 Too Many Requests” errors if requests exceed certain thresholds.
   * Using proxies or VPNs may result in stricter rate limits.
3. **Data Integrity**:
   * Instaloader lacks built-in hashing to verify the authenticity of downloaded content.
4. **Ethical and Legal Constraints**:
   * Scraping private profiles or sensitive data without authorization can violate ethical norms and Instagram’s Terms of Service.
   * **Disclaimer**: Instaloader is unaffiliated with Instagram and comes with no warranty. Always review local regulations and platform rules before usage.

## Ethical Considerations

* Profiles with common names or aliases can be misidentified if relying on metadata alone.
* Posts can contain sensitive data (location, contact info).
* Make sure you have the right to view or store the content you are downloading.

## Guides and articles

[Official documentation and setup guide](https://instaloader.github.io/)

## Tool provider

The software is developed primarily by Alexander Graf (GitHub: [aandergr](https://github.com/aandergr)) and is currently sponsored by [@rocketapi-io](https://rocketapi.io), Estonia.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.



| Page Maintainer |
| --------------- |
| Martin Sona     |
