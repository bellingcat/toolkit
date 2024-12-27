---
description: >-
  Download pictures (or videos) along with their captions and other metadata
  from Instagram.
---

# InstaLoader

## URL

[https://instaloader.github.io](https://instaloader.github.io)

## Description

**Instaloader** is an open-source tool that facilitates downloading and archiving content from Instagram. Available as both a command-line tool and a Python module, it allows researchers to retrieve and organize data, including media posts, stories, metadata, and more. Its versatility and ability to work with both public and private profiles (with proper authorization) make it a valuable resource for Open Source Intelligence (OSINT) investigations.

1. **Media Downloading**:
   * Downloads photos and videos from public and private Instagram profiles, hashtags, stories, feeds, and saved media.&#x20;
   * Captures metadata such as captions, comments, geotags, and timestamps associated with each post.
   * Allows downloading from private profiles if the user follows the account.
2. **Automation and Customization**:
   * Automatically detects profile name changes and adjusts the directory structure accordingly.
   * Supports resuming downloads from previously interrupted sessions.
   * Offers fine-grained control over what to download through various filters (e.g., specific date ranges, post types) and customization of the directory and filename patterns.&#x20;

### Key Features

1. **Targeted Content Retrieval**:
   * **Profiles**: Download posts, profile pictures, tagged posts, reels, IGTV videos, stories, and highlights.
   * **Hashtags and Locations**: Fetch posts associated with specific hashtags or geographical locations.
   * **User Feed and Saved Posts**: For logged-in accounts, retrieve posts from a user’s feed or saved collections.
   * **Individual Posts**: Download specific posts using their unique shortcode.
   * **Followee List**: Retrieve all profiles followed by a user.
2. **Metadata Extraction**:
   * Captures detailed metadata for posts, such as captions, comments, geotags (as Google Maps links), likes, and hashtags.
   * Customizable templates for storing metadata in text files or JSON format.
3. **Efficient File Management**:
   * Customizable directory and file naming conventions using patterns such as `{profile}`, `{date_utc}`, and `{shortcode}`.
   * Options to organize content chronologically or by category for better archival workflows.
4. **Incremental Updates**:
   * Supports efficient updates with `--fast-update` or timestamp-based methods (`--latest-stamps`), reducing redundant downloads.
5. **Python Module**:
   * Offers an intuitive API for scripting custom workflows, such as analyzing likes, tracking deleted posts, or filtering content by date.
6. **Automation**:
   * Designed for cron jobs with options like `--quiet` mode and session persistence, enabling scheduled and automated downloads.
7. **Advanced Filters**:
   * Python expressions allow precise filtering based on attributes like date, hashtags, mentions, or engagement metrics.
8. **Error Handling**:
   * Robust mechanisms for managing rate limits, login issues, and interruptions in downloads.



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Instaloader is a free, open source project.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

1. **System Requirements**

* Instaloader is platform-independent and runs on most operating systems.

2. **Python Environment**

* 3.6 or higher
* dependencies: Requests, ixml, BeautifulSoup (optional) - (are installed when using pip)

3. **Access Requirements**

* **Anonymous Access**:
  * Instaloader can scrape public profiles, hashtags, and posts without requiring login credentials.
* **Logged-In Access**:
  * To scrape private profiles or retrieve user-specific data (e.g., saved posts or user feed), you must log in with valid Instagram credentials.

## Limitations

1. **Technical Barriers**:
   * The command-line interface may pose challenges for non-technical users.
   * Scripts using the Python module require programming knowledge.
2. **Rate Limits and Restrictions**:
   * Instagram imposes strict rate limits that can interrupt high-volume downloads.
   * The use of public proxies or VPNs can lead to stricter limits.
3. **Data Integrity**:
   * Instaloader lacks built-in hashing to verify the authenticity of downloaded content.
4. **Ethical and Legal Constraints**:
   * Scraping private profiles or sensitive data without proper authorization may breach ethical guidelines and Instagram's terms of service.

## Ethical Considerations

* Individuals with common names or aliases can be misidentified without using additional information about the target.
* Data contains sensitive information such as geolocation and contact information (email address).&#x20;
* Consider legal constraints on scraping private instagram accounts.

## Guides and articles

[Official documentation and setup guide](https://instaloader.github.io/)

## Tool provider

This is an open source software project developed by [Alexander Graf](https://github.com/aandergr) and sponsored by [rocketapi-io](https://github.com/rocketapi-io).

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.



| Page Maintainer |
| --------------- |
| Shiva           |
