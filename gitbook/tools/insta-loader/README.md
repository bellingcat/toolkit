---
description: >-
  Download pictures (or videos) along with their captions and other metadata
  from Instagram.
---

# InstaLoader

## URL

[https://instaloader.github.io](https://instaloader.github.io)

(as of May 9th, 2025)

{% hint style="warning" %}
Usage may lead to the loss of the Instagram account being used. Please see Limitations and Ethical Considerations before using this tool.&#x20;
{% endhint %}

## Description

Instaloader is an open-source tool for downloading and archiving content from Instagram. It is available as a command-line tool and a Python module. It allows researchers to retrieve and organize data, including media posts, stories, metadata, etc. Its versatility and ability to work with both public and private profiles (with proper authorization) can make it a valuable resource for open-source investigations.

1. **Media Downloading**:
   * Downloads photos and videos from public and private Instagram profiles, hashtags, Stories, feeds, saved media, **long-form videos (formerly IGTV)** and **Reels** (`--reels` flag).
   * It captures metadata such as captions, comments, geotags (such as Google Maps links), timestamps, and more.
   * Allows downloading from private profiles if you follow the account or provide valid credentials.
   * Offers optional parameters to limit downloads (e.g., specific sidecar slides, date ranges, post filters).
2. **Automation and Customization**:
   * Automatically detects profile name changes and renames the target directory accordingly.
   * It supports resuming downloads from previously interrupted sessions, both at the command-line level (JSON resume files) and via the Python API.
   * Offers fine-grained control over what to download through various filters (e.g., specific date ranges, post types) and customization of directory and filename patterns.
   * Can be configured for automated tasks (e.g., cron jobs) using `--quiet` mode and persistent session files.

### Key Features

1. **Targeted Content Retrieval**:
   * **Profiles**: Download posts, profile pictures, tagged posts, reels, long-form videos (formerly IGTV, stories, and highlights.
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

**`instaloader.session`** is a file created by the Instaloader tool (which Auto Archiver uses under the hood for Instagram content). It is a small data file that stores your **login session** (including cookies) for Instagram so that you don’t have to log in every time you run Instaloader or the Auto Archiver.

1. **Why It Exists**
   * Instagram requires users to log in for certain types of data access (especially if you need to see private or protected content). When you enter your username and password in Instaloader for the first time, the tool authenticates with Instagram and fetches a session token (a cookie).
   * Instaloader then **saves** that session token locally to a file called `instaloader.session`.
2. **How It Is Created**
   * The **first time** you run Instaloader (or Auto Archiver with the `instagram_archiver` step enabled) and attempt to archive from a private Instagram account or any content that requires login; Instaloader will prompt you for Instagram credentials.
   * After successful login, a file named `instaloader.session` appears in the working directory (or wherever the tool is configured to store session data).
3. **What’s Inside**
   * Internally, it contains **cookies** that represent your authenticated session on Instagram. These cookies let Instaloader reuse your login, so you don’t have to type your username and password on each run.
   * It also ensures Instagram recognizes you in the same way as if you logged in via your browser.
4. **Where to Store It**
   * For **Auto Archiver**, best practice is to place `instaloader.session` (once generated) in your `secrets/` folder. That way, the Docker container or local script knows where to find your session, and you’re not repeatedly asked for credentials.
   * Remember to keep this file **private** and avoid committing it to version control (e.g., GitHub). Anyone with access to it could theoretically use your Instagram session.
5. **Expiration & Re-authentication**
   * Sometimes, Instagram invalidates session cookies (e.g., for security or if you change your password). If that happens, Instaloader may prompt you to log in again and create a **new** `instaloader.session` file.
   * If you notice Instagram's archiving stops working, you might need to delete the old session file and let Instaloader recreate it with fresh credentials.
6. **Security Considerations**
   * Treat `instaloader.session` as if it’s your actual Instagram login. Anyone who obtains a valid session file might have the same access to your account.
   * Use a dedicated Instagram account for archiving whenever possible (instead of a personal one), and store that account’s session file in a secure place.

</details>



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Instaloader is a free, open-source project.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

While basic usage (e.g., downloading all posts from a profile) is straightforward, some command-line or scripting familiarity helps when applying advanced filters, scheduling automation, or handling custom workflows.

## Requirements

### **System Requirements**

* Instaloader is platform-independent and can run on most operating systems (Linux, macOS, Windows, etc.).

### **Python Environment**

* **Python 3.9 or higher** (tested up to 3.13, 3.8 support was dropped in v4.14)
* Primary dependencies (installed automatically with pip):
  * `requests`
  * `lxml`
  * `BeautifulSoup4` (optional; only needed for certain features)

### **Access Requirements**

* **Anonymous Access**: Instaloader can scrape public profiles, hashtags, and posts without login.
* **Logged-In Access**: To scrape private profiles or retrieve user-specific data (e.g., user feed, saved posts), you must log in with valid Instagram credentials. Instaloader stores a session file to avoid repeated logins.

## Limitations

_**Heavy scripted use can trigger temporary locks or permanent bans.**_

1. **Technical Barriers**:
   * Command-line usage can pose a challenge for non-technical users.
   * Python module usage requires programming knowledge.
2. **Rate Limits and Restrictions**:
   * Instagram imposes strict rate limits that can trigger “429 Too Many Requests” errors if requests exceed certain thresholds.
   * Using proxies or VPNs may result in stricter rate limits.
   * Instagram does **not publicly disclose** the exact thresholds for the web endpoints, so the limits can change without notice. Based on user experiences, the thresholds have become **much stricter in recent years**. For example, one user noted that previously, you could make on the order of _\~200 requests per minute_ without issues. Current [anecdotal](https://github.com/instaloader/instaloader/issues/2307) [ceiling ](https://github.com/instaloader/instaloader/issues/2524)is closer to **1–2 requests / 30s** for unauthenticated scrapes; thresholds vary by endpoint and change frequently. Community reports now place anonymous limits around 1–2 requests every 30 seconds, sometimes lower. In other words, Instagram dramatically lowered the allowed request rate for scraping. [Another Instaloader user](https://stackoverflow.com/questions/65067929/instagram-responded-with-http-error-429-too-many-requests) observed getting a 429 after analyzing just 2–3 posts in a row, even from different machines, indicating a very low threshold in effect​. The exact limit may vary over time or by content type – for instance, story downloads seem to [trigger limits faster than](https://github.com/instaloader/instaloader/issues/1711) regular posts (Instagram appears to “heavily rate-limit stories” requests).
   * Checkpoint/401 [errors are common](https://github.com/instaloader/instaloader/issues/1937); importing browser cookies (`-b chrome` etc.) is a recommended workaround.
3. **Data Integrity**:
   * Instaloader lacks built-in hashing to verify the authenticity of downloaded content.
4. **Ethical and Legal Constraints**:
   * Scraping private profiles or sensitive data without authorization can violate ethical norms and [Instagram’s Terms of Service](https://help.instagram.com/termsofuse).
   * **Disclaimer**: Instaloader is unaffiliated with Instagram and comes with no warranty. Always review local regulations and platform rules before usage.

<details>

<summary>Rate Limiting Mitigation Strategies</summary>

If you encounter 429 errors or want to avoid them, consider these practices:

* **Stay Logged In:** Always use `--login` with Instaloader so that you leverage a logged-in session (and reuse a session file). This not only grants access to more content but [may raise the rate limit ceiling](https://instaloader.github.io/troubleshooting.html) compared to anonymous use​. The Instaloader team advises [keeping the session file to avoid re-login](https://instaloader.github.io/troubleshooting.html) each run which prevents frequent login attempts that could trigger Instagram’s security checks.
* **Do Not Parallelize or Re-run Quickly:** [Run a single instance of Instaloader at a time](https://stackoverflow.com/questions/65067929/instagram-responded-with-http-error-429-too-many-requests) and avoid launching multiple scrapes in parallel​. Also, avoid scheduling runs back-to-back without sufficient delay. Give some breathing room between Instaloader runs (or between different scraping scripts) so that Instagram’s counters can reset. For example, if you update a profile archive, you might schedule it hourly or daily, not every minute.
* **Limit Request Frequency:** Instaloader already inserts delays between requests, but if you still hit 429s, you may need to slow down further. You can insert additional **sleep/delay** in your scraping logic or use a custom `RateController`. One user found success by **randomizing delays** between actions: e.g., waiting 10–30 seconds between different profiles or hashtag scrapes, 1–3 seconds between individual post downloads, and 3–10 seconds between story fetches​. These pauses mimic human browsing patterns and can help avoid tripping the automated limits.
* **Use `--fast-update` or Smaller Batches:** If you are downloading a very large number of items (e.g. stories from hundreds of profiles, or thousands of posts), consider breaking the job into smaller chunks. The `--fast-update` option can help by stopping when you reach media that’s already downloaded, [reducing total requests on repeated runs](https://instaloader.github.io/cli-options.html). You can also specify `--count` to limit how many posts or items to fetch in one go​. Fetching in batches spread over time will be gentler on the rate limit.
* **Rotate User Agents:** Instagram might flag automated clients partly by their HTTP User-Agent string. Instaloader by default uses its own UA, but you can override it. Some developers suggest [using a common browser User-Agent](https://stackoverflow.com/questions/65002504/would-it-be-possible-to-use-ip-rotation-to-avoid-the-exception-toomanyrequestsex) so the requests look more like normal web traffic​. In code, you can initialize Instaloader with a custom `user_agent`. For multiple runs, rotating through a list of user-agent strings for each session[ may slightly reduce the chance of detection](https://stackoverflow.com/questions/65002504/would-it-be-possible-to-use-ip-rotation-to-avoid-the-exception-toomanyrequestsex)​. _(Note: This is not foolproof, but may help at the margins.)_
* **Avoid Obvious Scraping Patterns:** Try not to scrape the same data repeatedly in a short period of time. For example, do not repeatedly download the same profile or hashtag in rapid succession. Likewise, if you are scraping stories, be aware that grabbing many stories in quick succession is a known trigger​. [Spreading out story downloads](https://github.com/instaloader/instaloader/issues/1711) (or limiting the number of story feeds you scrape per hour) can help.
* **Handle 429 Gracefully:** If you do get a 429 error during a script or cron job, the best course is to **stop making requests and wait**. Let Instaloader’s back-off mechanism pause the execution. If you’re running a custom script and catch a `TooManyRequestsException`, implement a wait (e.g. sleep for 10-15 minutes or longer) before retrying. [Do not aggressively retry failed requests](https://github.com/instaloader/instaloader/issues/834) or you risk extending the ban​.
* **IP and Account Rotation (last resort):** In extreme cases, if one IP address is consistently getting blocked, you might try switching to another network/IP or using a proxy with a different IP. This can bypass an IP-based throttle, but use caution: Instagram might detect account sharing or unusual IP changes. If you have multiple Instagram accounts, you could distribute your queries among them (log in with different accounts for different tasks) to stay under per-account limits. Only do this with accounts you control, and **never** on accounts you don’t have permission to use.

Ultimately, [**there is no way to completely “bypass” Instagram’s rate limits**](https://stackoverflow.com/questions/65002504/would-it-be-possible-to-use-ip-rotation-to-avoid-the-exception-toomanyrequestsex) – you must work within them​. The key is to slow down and behave more like a normal user. If you hit a limit, patience is the only guaranteed solution (wait until the block lifts). Trying to outsmart Instagram’s anti-scraping measures (with rapid IP rotations, etc.) often only works briefly, if at all, and can risk longer-term bans.

</details>

## Ethical Considerations

* Profiles with common names or aliases can be misidentified if relying on metadata alone.
* Posts can contain sensitive data (location, contact info).
* Make sure you have the right to view or store the content you are downloading.

## Guides and articles

[Official documentation and setup guide](https://instaloader.github.io/)

## Tool provider

The software is developed primarily by Alexander Graf (GitHub: [aandergr](https://github.com/aandergr)) and is currently sponsored by [@rocketapi-io](https://rocketapi.io), Estonia.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.



| Page Maintainer |
| --------------- |
| Martin Sona     |
