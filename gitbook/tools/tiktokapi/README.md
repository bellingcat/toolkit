---
description: >-
  TikTok-Api is an open-source Python library (unofficial TikTok API) that
  allows developers and researchers to retrieve various public data from TikTok
---

# TikTok-Api

## URL

[https://github.com/davidteather/TikTok-Api/](https://github.com/davidteather/TikTok-Api/)\
(v7.3.3, released April 2026, last checked June 2026)

{% hint style="info" %}
Keep in mind that because this is an unofficial solution, it may break whenever TikTok updates its site, and maintaining the library’s functionality is an ongoing effort by the open-source community. Always refer to the latest documentation and user discussions for troubleshooting tips if something stops working.
{% endhint %}

## Description

TikTok-Api (also known as **TikTokApi** on PyPI) is an unofficial API wrapper for TikTok written in Python. It enables programmatic **retrieval of public TikTok data** without using TikTok’s official API. Using this tool, you can fetch **trending videos**, gather videos associated with a specific **hashtag**, retrieve information and posts from **user profiles**, and even collect **comments** from TikTok videos. The library essentially acts as a web scraper that mimics a regular user’s browser to gather data from TikTok’s public web interface, since the official TikTok API is restrictive or inaccessible to most users.

Under the hood, TikTok-Api uses a [headless browser](https://www.ituonline.com/tech-definitions/what-is-a-headless-browser/) (powered by [Playwright](https://www.lambdatest.com/playwright)) to **simulate human browsing** on TikTok. This approach allows it to bypass basic scraping countermeasures and retrieve dynamic content. However, because TikTok frequently updates its site and [anti-scraping measures](https://en.wikipedia.org/wiki/Bot_prevention), the library may require additional setup such as using cookies or proxies for reliable results. For instance, **some requests require a** [**TikTok session cookie (called `MS_TOKEN`)**](https://github.com/davidteather/TikTok-Api/discussions/1101) **from your own browser** to authenticate as a real user. This cookie can be obtained by logging into TikTok in a web browser and copying the `ms_token` value from your cookies. TikTok-Api does not handle user login or official [OAuth](https://en.wikipedia.org/wiki/OAuth). it only accesses content available to an ordinary viewer (so it **cannot retrieve private or age-restricted data**, nor can it post content on a user’s behalf. All data collection is read-only).

### **Key capabilities of TikTok-Api**

Retrieving the current **Trending feed** (popular public videos), scraping **videos under a specific hashtag** or **sound**, fetching a **user’s profile information and their latest videos**, and extracting **comments** from a given video. The data returned is typically in the form of [Python dictionaries](https://www.tutorialspoint.com/python/python_dictionary.htm) or [custom objects ](https://docs.python.org/3/tutorial/classes.html)that contain metadata such as video IDs, captions, statistics (likes, shares), comment text, author info, etc. This allows journalists or researchers to programmatically collect TikTok data for analysis – for example, to analyze trends in popular videos, track how a particular hashtag is being used, or gather user engagement metrics on certain posts.

Behind the scenes, the library’s use of a browser means it sometimes needs to load TikTok’s web content fully. This can make it a bit slow or resource-intensive compared to calling a typical [JSON API. ](https://en.wikipedia.org/wiki/Web_API)Additionally, TikTok has measures like [CAPTCHAs](https://www.techtarget.com/searchsecurity/definition/CAPTCHA) and request throttling: if the tool’s requests are detected as **bot activity**, TikTok might return empty responses or block the requests. In many cases, using **residential or rotating proxies** can help avoid blocks if you are scraping a large volume of data. The developer of TikTok-Api notes that an `EmptyResponseException` usually indicates TikTok is blocking the scrape, in which case changing your network (using a proxy or different IP) or adjusting parameters is needed[GitHub](https://github.com/davidteather/TikTok-Api/blob/62a8cfa8ab7bb5bbdd0f8c8b13e84731fff7ac75/README.md#L102-L105).

Overall, TikTok-Api provides a way for semi-technical users to **collect TikTok data without official API access**. It [has](https://lab.imedd.org/en/investigating-data-available-on-social-media-platforms) [been](https://www.researchgate.net/publication/377002340_Covid-19_Vaccine_on_TikTok_A_Study_of_Emotional_Expression_in_The_Brazilian_Context) used in data journalism and research to gather insights from TikTok.&#x20;

### Installation and usage

To install TikTok-Api, use pip. (It’s recommended to do this in a Python virtual environment if possible):

```bash
pip install TikTokApi
```

After installing the library, **install the Playwright browsers** by running:

```bash
python -m playwright install
```

This will download a headless Chromium (or other browser engines) that the API uses to scrape TikTok. (If you are on macOS, you might need to install Command Line Developer Tools with `xcode-select --install` before running Playwright.)

Once installation is done, you can start using the library in your Python scripts. Here’s a simple example that fetches the latest trending TikTok videos:

```python
import asyncio
from TikTokApi import TikTokApi

# Your TikTok session cookie (ms_token) retrieved from your browser.
MS_TOKEN = "paste_your_ms_token_cookie_here"

async def fetch_trending_videos():
    async with TikTokApi() as api:
        # Initialize an API session using your TikTok cookie
        await api.create_sessions(ms_tokens=[MS_TOKEN])
        # Get an async iterator for trending videos (let's fetch 5 for demo)
        trending_iter = api.trending.videos(count=5)
        # Iterate through trending videos and print some basic info
        async for video in trending_iter:
            video_data = video.as_dict  # convert video object to a dictionary
            print(f"Video ID: {video_data['id']}, Likes: {video_data['stats']['diggCount']}, Description: {video_data['desc'][:50]}...")
```

To run the above asynchronous code, save it in a Python file (e.g., `tiktok_trending.py`) and execute it with `python3 tiktok_trending.py`. The script will open a Chromium instance in the background, navigate TikTok’s site, and retrieve data. In the example, we print each video’s unique ID, the number of likes, and the beginning of its description. You can adjust the fields or loop through the `video_data` dictionary to get other details (such as comment count, share count, etc.). The library provides data in a structured way – for example, `video_data['author']` would contain the uploader’s profile info, and `video_data['music']` the details of the soundtrack.

Besides trending videos, TikTok-Api allows similar access to other types of content:

* **User posts**: You can retrieve a specific user’s videos by username. For example, `api.user(username="therock")` returns a user object, and you could then iterate over `user.videos` to get that user’s recent TikToks.
* **Hashtag search**: You can fetch videos under a given hashtag. For example, `api.hashtag(name="funny")` would give a hashtag object, and then `hashtag.videos(count=10)` yields videos tagged with #funny.
* **Video comments**: Given a video object (or ID), you can request its comments. For example, `video = api.video(id="7181234567890")` followed by iterating `video.comments(count=50)` would yield up to 50 comments on that video.
* **Other endpoints**: The API also exposes trending **hashtags** and **music** (sounds) through `api.discoverHashtags()` and `api.discoverMusic()`, as well as search functions for users or music by keywords (note: text search for videos is **not available** due to TikTok’s limitations).

**Note:** The library’s interface evolves, so function names or usage might differ slightly in newer versions. Always check the [official documentation](https://davidteather.github.io/TikTok-Api/) for the latest usage patterns. For example, older versions used `TikTokApi.get_instance()` (synchronous) while newer versions use asynchronous context managers as shown above. The documentation and example scripts on the GitHub repository provide up-to-date code samples for various tasks.

If you encounter **errors or empty data**, common causes include missing/expired cookies, TikTok detecting automated scraping, or changes in TikTok’s site structure. In such cases, consider these troubleshooting steps:

* Ensure your `ms_token` cookie is fresh (visit TikTok in a browser again to get a new one if needed).
* Try running the browser in **headed mode** (visible browser) instead of headless. You can do this by setting an environment variable, for example: `export TIKTOK_BROWSER=chromium` (Playwright’s default) and possibly configure it to show the browser window. Running in headed mode can solve certain CAPTCHA or anti-bot challenges that fail in headless mode.
* Use a **proxy** if your IP is being rate-limited or blocked by TikTok. Residential proxies tend to work better if scraping at scale.
* Check the GitHub issues page – many common problems and their solutions are documented by other users and the developer. For instance, errors like `Browser closed unexpectedly` or `EmptyResponseException` have been discussed with fixes (often related to the points above).

By following the installation steps and using the example code, you should be able to collect TikTok data for analysis or journalistic projects. Always remember to respect TikTok’s terms and user privacy when using the data (see Ethical Considerations below).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open-source to install and use. (Note: The developer also offers a hosted version of this API via RapidAPI with a free tier, but using the open-source library directly is completely free aside from any infrastructure costs on your end.)

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

Using TikTok-Api requires **intermediate technical skills**. Basic knowledge of Python programming and command-line usage is needed to install the package and write scripts. Users should also be comfortable obtaining browser cookies and possibly troubleshooting environment issues. For a researcher with limited coding experience, initial setup might be challenging – likely requiring assistance from an IT colleague to set up Python 3.9+, install Playwright, and handle any CAPTCHA or proxy considerations. Once set up, collecting data with provided examples is straightforward, but maintaining the tool (e.g. updating when TikTok changes) also requires some technical engagement. In summary, non-coders may find it difficult, while those with some scripting experience will find it manageable.

## Requirements

* **Python 3.9+** – TikTok-Api requires Python version 3.9 or higher.
* **Playwright** – The library uses Playwright for browser automation. After installing TikTok-Api, you must run `python -m playwright install` to download the necessary browser drivers.
* **TikTok cookie (ms\_token)** – Some data endpoints **require a valid TikTok session cookie** from a real user session. Specifically, you often need to provide an `ms_token` cookie value (and sometimes a `s_v_web_id` or `verifyFp` token, depending on the TikTok-Api version) to access certain features like the trending feed or video comments. This means you should have a TikTok account (for obtaining cookies) or at least visit TikTok’s website to grab the cookie. No official API key is needed (since this is unofficial), but cookies act as a form of authentication/verification.
* **Internet connection** – As this is a web-scraping tool, it requires network access to TikTok’s website. In restrictive network environments, you might need to use [proxies ](https://en.wikipedia.org/wiki/Proxy_server)or VPNs.
* **Headed browser environment (optional)** – If running on a headless server, note that sometimes the tool works more reliably in a non-headless (headed) mode. If headless mode fails, the environment should support opening a browser UI or use [Xvfb on Linux](https://elementalselenium.com/tips/38-headless).

## Ethical Considerations

* **Terms of Service Violations:** Using TikTok-Api likely **violates TikTok’s Terms of Service**. TikTok’s terms generally prohibit scraping or unauthorized use of their platform’s content. Users of this tool should be aware of the legal and ethical implications. While TikTok-Api provides access to data for research or journalism, you are technically bypassing restrictions set by the platform. This could result in your IP or accounts being banned by TikTok if detected. More importantly, if you publish or use the data, you should consider the legal position – for instance, whether the data usage falls under fair use or research exemptions.
* **Privacy and Consent:** Even though TikTok content is publicly viewable, collecting it in bulk raises **privacy concerns**. Videos often contain personal information about creators or subjects. Journalists and researchers should consider ethical guidelines when analyzing or republishing data obtained via scraping. It’s advisable to aggregate or anonymize where possible, and to **avoid targeting individuals** in ways that could be invasive. Always think about the potential impact on content creators if their data is collected and analyzed without consent.
* **Data Accuracy and Context:** Scraped data can be **misleading without context**. For example, a video’s metrics (like view counts or likes) are snapshots in time and might not reflect context such as algorithmic amplification or later changes. Also, TikTok’s platform is dynamic – content can be removed or altered, and the tool might not capture such updates if you’re working with saved data. Ethically, ensure that any conclusions drawn from the data acknowledge these limitations and uncertainties.
* **Attribution:** If you use data gathered via TikTok-Api in published work, consider **disclosing your data collection method** (at least in general terms) so that readers or stakeholders understand that the information comes from scraping. This transparency is part of ethical research and journalism practice, especially if questioned about data provenance.

## Guides and articles

* [**Official Documentation (GitHub Pages):** ](https://davidteather.github.io/TikTok-Api/)_TikTokApi v7.x Documentation_ – Detailed documentation of classes, methods, and parameters, plus some troubleshooting tips and notes on updates.
* [**GitHub Repository (Examples & Issues):** ](https://github.com/davidteather/TikTok-Api)_TikTok-Api on GitHub_ – – The repository’s README and the `examples/` directory contain code samples for common tasks (trending, user videos, comments, etc.). The Issues section is also useful to see how others solved problems when using the tool.
* **Tutorial Article:** [“_Get TikTok Data_”](https://archive.is/nUjPr) by David Teather on Dev Genius ([Medium](https://blog.devgenius.io/tiktok-api-python-41d76c67a833)) – _(September 2020)_ A step-by-step tutorial introducing TikTok-Api usage in Python, written by the developer _(Note: This covers an older version using the `verifyFp` cookie, but the general approach to installation and usage is explained in a beginner-friendly way.)_

## Guide

[https://davidteather.github.io/TikTok-Api/](https://davidteather.github.io/TikTok-Api/)

## Tool provider

**David Teather**, independent software developer (United States). The tool is open-source and maintained via GitHub by David Teather and community contributors.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

