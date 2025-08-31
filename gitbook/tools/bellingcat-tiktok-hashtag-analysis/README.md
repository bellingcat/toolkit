---
description: >-
  Archive content and metadata from TikTok posts that contain one or more
  specified hashtags
---

# Bellingcat TikTok Hashtag Analysis

## URL

[https://github.com/bellingcat/tiktok-hashtag-analysis](https://github.com/bellingcat/tiktok-hashtag-analysis)

## Description

This open-source tool enables researchers to download posts from TikTok for a specified list of hashtags and create a local database of posts. It utilizes the unofficial [TikTok API wrapper](https://tyk.io/blog/what-is-an-api-wrapper-and-why-would-you-use-one/) and [Playwright ](https://www.thoughtworks.com/en-us/radar/languages-and-frameworks/playwright)to fetch posts via a browser session, and optionally uses [Yt-dlp](https://wiki.archlinux.org/title/Yt-dlp) [to download the videos](https://raw.githubusercontent.com/bellingcat/tiktok-hashtag-analysis/main/README.md). The tool is run from the command line and can accept multiple hashtags at once; it stores posts in a structured `posts.json` file and [saves any downloaded media](https://raw.githubusercontent.com/bellingcat/tiktok-hashtag-analysis/main/README.md) to a `media` folder.

In addition to scraping, the tool includes simple analysis functions. Investigators can plot or print tables showing the most common co‑occurring hashtags for a selected hashtag. For example, a researcher could collect trending posts tagged with **#london** and then plot the top twenty hashtags that appear alongside that tag. Such analyses can help identify common themes or potential influence campaigns.

The tool provides a snapshot of what is currently trending on TikTok rather than a full archive. Running the tool repeatedly over time will gradually build a richer dataset. Command-line interface tool that downloads posts and videos from TikTok for a given set of hashtags over a period of time. Users can create a growing database of posts for specific hashtags, which can then be used for further analysis of hashtags. It utilizes the TikTokApi Python package to download posts and employs yt-dlp to download videos. Also provides basic analysis features, such as identifying and visualizing the most common co-occurring hashtags for a specified hashtag.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The software is open-source and can be installed at no charge.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

Requires comfort with the command line and Python package installation.

## Requirements

* Python 3.9 or later installed.
* Install the tool with `pip install tiktok‑hashtag‑analysis` (or directly from GitHub) and install Playwright using `python -m playwright install`
* Internet connection: TikTok may require a logged‑in browser session.
* Use the `--headed` flag if headless scraping fails, as TikTok often blocks headless browsers.
* Optional: [**yt‑dlp**](https://github.com/yt-dlp/yt-dlp) is used for video downloads.

## Limitations

* The tool [typically collects](https://www.bellingcat.com/resources/how-tos/2022/05/11/this-new-tool-lets-you-analyse-tiktok-hashtags/) only about 1,000 trending TikTok posts per hashtag, providing a snapshot rather than a complete archive.
* It cannot collect only the newest posts because TikTok’s hashtag pages display currently trending videos irrespective of posting date.
* Video downloads are time and data-intensive; download one hashtag at a time to avoid network issues.
* Scraping may fail in headless mode; using the `--headed` option opens a visible browser to improve reliability.&#x20;

## Ethical Considerations

* Scraping TikTok content may violate TikTok’s Terms of Service and local laws.
* Collected posts and videos may contain personal data; respect privacy, remove sensitive information, and obtain consent when sharing.
* Data gathered should only be used for legitimate investigative or research purposes.

## Guide

{% embed url="https://www.bellingcat.com/resources/how-tos/2022/05/11/this-new-tool-lets-you-analyse-tiktok-hashtags/" %}

{% embed url="https://github.com/bellingcat/tiktok-hashtag-analysis" %}

## Tool provider

Bellingcat, Netherlands

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
