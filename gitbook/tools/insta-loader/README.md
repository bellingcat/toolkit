---
description: >-
  Download pictures (or videos) along with their captions and other metadata
  from Instagram.
---

# InstaLoader

## URL

[https://instaloader.github.io](https://instaloader.github.io)

(as of July 13th, 2025)

{% hint style="warning" %}
Usage may lead to the loss of the Instagram account being used. Please see Limitations and Ethical Considerations before using this tool.&#x20;
{% endhint %}

## Description

Instaloader is an open-source tool for downloading and archiving content from Instagram. It is available as a command-line tool and a Python module. It allows researchers to retrieve and organize data, including media posts, stories, metadata, etc. Its versatility and ability to work with both public and private profiles (with proper authorization) can make it a valuable resource for open-source investigations.

1. **Media Downloading**:
   * Downloads photos and videos from public and private Instagram profiles, hashtags, Stories, feeds, saved media, **long-form videos (formerly IGTV),** and **Reels** (`--reels` flag).
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
   * Designed for cron jobs with options like `--quiet` mode and session persistence enable scheduled and automated downloads.
7. **Advanced Filters**:
   * Python-like expressions allow precise filtering by date, hashtags, mentions, engagement metrics, and more.
8. **Error Handling**:
   * Manages rate limits (HTTP 429), login errors, and download interruptions.
   * Provides distinct exit codes (0 to 5) to indicate different failure or partial-success states

### How to [install](https://instaloader.github.io/installation.html) Instaloader

{% tabs %}
{% tab title="Option 1: pip" %}
**Recommended one‑liner:** reliably works on Linux, macOS, WSL, and Windows (PowerShell)

```
python3 -m pip install --upgrade instaloader
```
{% endtab %}

{% tab title="Option 2: pipx " %}
**For isolated environments:** [Pipx](https://app.gitbook.com/s/yDhVwWl9OPwarG1Cwar3/regions) is a tool to install and run end-user Python applications in isolated virtual environments. It's an automation layer over pip and venv specifically for Python CLI applications. That means each app gets its own virtual environment (venv) to avoid conflicts with other installed scripts while still enabling console scripts globally.

```bash
pipx install instaloader
```
{% endtab %}

{% tab title="Option 3: Conda" %}
**For users of**[ **Anaconda via conda-forge**](https://github.com/pypa/pipx)**:**\
[Anaconda](https://domino.ai/data-science-dictionary/anaconda) is an open-source distribution of the Python and R languages for data science that simplifies package management and deployment by using the conda environment manager to resolve dependencies and avoid conflicts. [Conda](https://en.wikipedia.org/wiki/Conda_\(package_manager\)) is the cross-platform package and environment manager included in Anaconda; it supports multiple channels for sourcing packages. “[Conda-forge](https://conda-forge.org/docs/)” is a community-driven packaging effort and GitHub organization that maintains recipes for building conda packages. Built distributions are published to anaconda.org/conda-forge and can be installed into any conda-based environment, providing an open-source alternative to the default Anaconda channel.

Just use your terminal or PowerShell, and make sure that the environment you want to install (just substitute "\<env-name>" with "myenvironment", the name is up to you), this package is activated:

```bash
conda create -n <env-name>
conda activate <env-name>
```

```bash
conda install -c conda-forge instaloader
```
{% endtab %}

{% tab title="Option 4: standalone script" %}
```bash
git clone https://github.com/instaloader/instaloader.git
cd instaloader
python setup.py install
```

**When to use this option**

* **Need the latest dev version:** grab unreleased fixes or features that aren’t on PyPI yet.
* **Plan to tweak the code:** cloning the repo puts the full source on your machine so you can patch or extend Instaloader, then reinstall instantly.
* **Audit / offline install:** You can inspect every line before it touches your system, or vendor a specific commit for reproducibility.

**What the three commands do**

1. `git clone …`  downloads the Instaloader source code into a new folder.
2. `cd instaloader`  moves into that folder.
3. `python -m pip install .` (or `python setup.py install`)  builds and installs the package from the source you just checked out.\
   &#xNAN;_&#x54;ip: run this inside a virtual-env so it won’t clash with other Python tools._
{% endtab %}
{% endtabs %}

### Example Use Cases: CLI

* Download & **continuously update** one public profile

```bash
# First run (creates folder instagram/)
instaloader instagram

# Daily cron job – only grab *new* posts & stories
instaloader --login YOUR_USER --stories --fast-update instagram
```

***

* Archive only the **last 100 posts with the hashtag "#ukraine"**

```bash
instaloader --count 100 "#ukraine"
```

***

* Fetch **Stories only** (no posts) from **multiple private accounts** you follow

```bash
instaloader --login YOUR_USER --stories --no-posts --quiet user_a user_b user_c
```

The `--stories` flag is documented in the [CLI reference.](https://instaloader.github.io/cli-options.html)&#x20;

***

* Download all **available posts between two dates** (server‑side filter)

```bash
# Posts from 1 Jan 2024 – 31 Dec 2024
instaloader --login YOUR_USER \
  --post-filter="date_utc >= datetime(2024,1,1) and date_utc < datetime(2025,1,1)" \
        instagram
```

The filter expression syntax is Python‑like and evaluated per post.

***

* **Resume** an interrupted job

```bash
instaloader --resume-prefix myrun instagram
```

Instaloader writes a JSON checkpoint so the next invocation restarts exactly where it left off. You can define the `--resume-prefix` and `--no-resume` flags for resuming interrupted download loops. When resuming is enabled, Instaloader writes a compressed JSON “checkpoint” file into the target directory, containing all information needed to pick up where it left off. ([https://instaloader.github.io/cli-options.html](https://instaloader.github.io/cli-options.html))

### Example Use Cases: Python

{% hint style="info" %}
All snippets require `pip install instaloader` and should live in their own virtual environment or notebook.
{% endhint %}

<details>

<summary>Download the N most recent posts from a profile</summary>

```python
from itertools import islice
import instaloader

PROFILE = "instagram"
MAX_POSTS = 10

L = instaloader.Instaloader()
L.context.log("Logging in…")
L.load_session_from_file("my_user")          # reuse saved session, or:
# L.login("my_user", "PASSWORD")

posts = instaloader.Profile.from_username(L.context, PROFILE).get_posts()
for post in islice(posts, MAX_POSTS):
    L.download_post(post, target=PROFILE)

print("Done.")
```

</details>

<details>

<summary>List (and optionally download) stories of accounts you follow</summary>

```python
import instaloader, datetime as dt

L = instaloader.Instaloader()
L.load_session_from_file("my_user")

for story in L.get_stories():                       # generator of Story objects
    print(f"{story.owner_username} has {story.itemcount} items")
    for item in story.get_items():
        age = dt.datetime.utcnow() - item.date_utc
        if age.days < 1:                            # only today’s stories
            L.download_storyitem(item, f"stories_{story.owner_username}")
```

(API details: [“Python Module instaloader”](https://instaloader.github.io/as-module.html) docs.)

</details>

<details>

<summary>Detect deleted posts (advanced)</summary>

The project ships a full example, but here is the distilled logic:

```python
pythonCopyEditfrom instaloader import Instaloader, Profile
from pathlib import Path

L = Instaloader()
L.load_session_from_file("my_user")
target = "example_account"

profile = Profile.from_username(L.context, target)
online = {p.shortcode for p in profile.get_posts()}     # existing on IG
offline = {f.stem.split('_')[2]                        # existing locally
           for f in Path(target).glob("*.json.xz")}

deleted = offline - online
new     = online  - offline

print("Deleted on IG:", deleted)
print("Not yet downloaded:", new)
```

_(The full script is in Instaloader’s_ [_`docs/codesnippets/` folder_](https://instaloader.github.io/codesnippets.html)_.)_&#x20;

</details>

<details>

<summary>Batch download + export metadata to CSV</summary>

```python
"""
Download posts from multiple profiles (Jan–Mar 2025) and write core
metadata (caption, likes, timestamp) to posts.csv
"""
import csv, datetime as dt, instaloader
from dateutil.tz import UTC

PROFILES = ["cnn", "bbcnews", "dwnews"]
START, END = dt.datetime(2025,1,1,tzinfo=UTC), dt.datetime(2025,4,1,tzinfo=UTC)

L = instaloader.Instaloader(dirname_pattern="downloads/{target}", quiet=True)
L.load_session_from_file("YOUR_USER")

rows = []
for username in PROFILES:
    profile = instaloader.Profile.from_username(L.context, username)
    for post in profile.get_posts():
        if post.date_utc < START:
            break                       # posts are reverse-chronological → done
        if START <= post.date_utc < END:
            L.download_post(post, target=username)
            rows.append({
                "user": username,
                "shortcode": post.shortcode,
                "date": post.date_utc.isoformat(),
                "likes": post.likes,
                "caption": post.caption or ""
            })

with open("posts.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=rows[0].keys())
    writer.writeheader(); writer.writerows(rows)

print(f"Exported {len(rows)} rows to posts.csv")

```



</details>

<details>

<summary>Detect new followers &#x26; unfollowers overnight</summary>

```python
"""
Run daily via cron; prints who followed / unfollowed you since yesterday.
"""
import json, instaloader, pathlib, datetime as dt

TS = dt.date.today().isoformat()
STATE = pathlib.Path("followers_history.json")
L = instaloader.Instaloader(quiet=True); L.load_session_from_file("YOUR_USER")

me = instaloader.Profile.from_username(L.context, "YOUR_USER")
today = sorted({f.username for f in me.get_followers()})

if STATE.exists():
    yesterday = json.loads(STATE.read_text())
else:
    yesterday = []

new       = sorted(set(today) - set(yesterday))
unfollow  = sorted(set(yesterday) - set(today))

print("New followers:",    new if new else "—")
print("Unfollowers:",      unfollow if unfollow else "—")

STATE.write_text(json.dumps(today, indent=2))

```

</details>

<details>

<summary>Generate a hashtag frequency list from one username</summary>

```python
"""
Build hashtag counts across the latest 400 posts of a target profile.
Output TSV sorted by frequency.
"""
import re, collections, instaloader, itertools, csv

TARGET = "nasa"
MAX_POSTS = 400

hashtag_re = re.compile(r"#(\w+)")
freq = collections.Counter()

L = instaloader.Instaloader(quiet=True)
for post in itertools.islice(instaloader.Profile.from_username(L.context, TARGET).get_posts(), MAX_POSTS):
    freq.update(hashtag_re.findall(post.caption or ""))

with open(f"{TARGET}_hashtags.tsv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f, delimiter="\t")
    writer.writerow(["hashtag", "count"])
    for tag, count in freq.most_common():
        writer.writerow([tag.lower(), count])

print("Top 10:", freq.most_common(10))
```

</details>

<details>

<summary>Rate-limit-aware bulk hashtag scraper with progress-bar (via tqdm)</summary>

```python
"""
Scrape 1 000 #ukraine posts, obeying a minimum 2-second delay between requests.
"""
import time, itertools, instaloader, tqdm

HASHTAG   = "ukraine"
TARGET    = f"hashtag_{HASHTAG}"
MAX_ITEMS = 1_000
MIN_DELAY = 2.0                     # seconds

L = instaloader.Instaloader(quiet=True)
posts = itertools.islice(instaloader.Hashtag.from_name(L.context, HASHTAG).get_posts(), MAX_ITEMS)

for post in tqdm.tqdm(posts, total=MAX_ITEMS):
    start = time.time()
    try:
        L.download_post(post, target=TARGET)
    except instaloader.exceptions.QueryReturnedNotFoundException:
        continue                     # skip removed posts
    # enforce polite delay
    elapsed = time.time() - start
    if elapsed < MIN_DELAY:
        time.sleep(MIN_DELAY - elapsed)

```

</details>

{% hint style="info" %}
#### How to integrate these scripts

* **One-shot analysis:** run directly from your project folder after activating the virtual-env.
* **Scheduled jobs:** wrap in a shell script and call via cron (`crontab -e`) or Windows Task Scheduler.
* **Notebook workflow:** import functions from each script to mix Scraping + Pandas analysis in Jupyter.

Feel free to remix flags (e.g., add `download_comments=True`) or combine ideas (geofilter + hashtag counter) to suit your investigation.
{% endhint %}

### CLI-to-Python “cheat sheet” (v 4.14.1, 12 Jul 2025)

Below you’ll find **every current command-line flag** grouped by purpose, with the _canonical_ Python call or argument that achieves the same effect.\
Where the Instaloader **constructor** accepts a parameter mapped 1-to-1 to the flag, it is shown like `Instaloader(download_pictures=False)`.\
When the flag controls behaviour **per download call**, the mapping is shown next to the relevant high-level method (e.g. `download_profiles(..., fast_update=True)`).

> _Tip:_ create one configured loader and reuse it:
>
> ```python
> from instaloader import Instaloader
> L = Instaloader(dirname_pattern="{target}", quiet=True, download_geotags=True)
> ```

<details>

<summary><strong>Open full length "cheat-sheet"...</strong></summary>

| **CLI flag**                                   | **What it does**                          | **Python equivalent**                                                                                               |
| ---------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `--login USER`, `--password PASS`              | Interactive/password login & save session | `L.login(user, passwd)` or `L.interactive_login(user)`                                                              |
| `--load-cookies BROWSER` / `--cookiefile FILE` | Import cookies from browser / file        | `L.context.load_cookies(browser='chrome')` `L.context.load_cookies(cookiefile="cookies.txt")`                       |
| `--sessionfile FILE`                           | Use custom session path                   | `L.load_session_from_file("USER", filename="my.session")`                                                           |
| **Download‐what flags (profile scope)**        |                                           |                                                                                                                     |
| `--stories`                                    | Stories of targets                        | `download_profiles(..., stories=True)`                                                                              |
| `--highlights`                                 | Highlights                                | `download_profiles(..., highlights=True)`                                                                           |
| `--tagged`                                     | Tagged-in posts                           | `download_profiles(..., tagged=True)`                                                                               |
| `--reels`                                      | Reels videos                              | `download_profiles(..., reels=True)` _(added 4.14)_                                                                 |
| `--igtv`                                       | IGTV / long-form                          | `download_profiles(..., igtv=True)`                                                                                 |
| `--no-posts`                                   | Skip normal posts                         | `download_profiles(..., posts=False)`                                                                               |
| `--no-profile-pic`                             | Skip profile pic                          | `download_profiles(..., profile_pic=False)`                                                                         |
| **Download‐what flags (post scope)**           |                                           |                                                                                                                     |
| `--no-pictures`                                | Skip photos                               | `Instaloader(download_pictures=False)`                                                                              |
| `--no-videos`                                  | Skip videos                               | `Instaloader(download_videos=False)`                                                                                |
| `--no-video-thumbnails`                        | Skip video thumbs                         | `Instaloader(download_video_thumbnails=False)`                                                                      |
| `--geotags`                                    | Save geotags                              | `Instaloader(download_geotags=True)`                                                                                |
| `--comments`                                   | Fetch comments                            | `Instaloader(download_comments=True)`                                                                               |
| `--no-captions`                                | Skip `.txt` caption files                 | `Instaloader(post_metadata_txt_pattern="")`                                                                         |
| `--post-metadata-txt PAT`                      | Custom post-txt template                  | `Instaloader(post_metadata_txt_pattern=PAT)`                                                                        |
| `--storyitem-metadata-txt PAT`                 | Custom story-txt template                 | `Instaloader(storyitem_metadata_txt_pattern=PAT)`                                                                   |
| `--slide 1-3`                                  | Only N-th slide(s) of sidecars            | `Instaloader(slide="1-3")`                                                                                          |
| `--no-metadata-json`                           | Disable JSON sidecars                     | `Instaloader(save_metadata=False)`                                                                                  |
| `--no-compress-json`                           | Pretty, uncompressed JSON                 | `Instaloader(compress_json=False)`                                                                                  |
| **Which posts to download**                    |                                           |                                                                                                                     |
| `--fast-update`                                | Stop at first already-downloaded item     | `download_profiles(..., fast_update=True)` (also in `download_hashtag`, `download_stories`, etc.)                   |
| `--latest-stamps FILE`                         | Use timestamp DB instead of local files   | `from instaloader import LatestStamps; stamps = LatestStamps("FILE"); download_profiles(..., latest_stamps=stamps)` |
| `--post-filter EXPR`                           | Python-style per-post filter              | pass `post_filter=lambda p: <expr>`                                                                                 |
| `--storyitem-filter EXPR`                      | Per-story filter                          | `storyitem_filter=lambda s: <expr>`                                                                                 |
| `--count N`                                    | Max N posts                               | `download_hashtag(..., max_count=N)` (or `download_profiles(max_count=N)`)                                          |
| **Paths & naming**                             |                                           |                                                                                                                     |
| `--dirname-pattern PAT`                        | Target dir template                       | `Instaloader(dirname_pattern=PAT)`                                                                                  |
| `--filename-pattern PAT`                       | File template                             | `Instaloader(filename_pattern=PAT)`                                                                                 |
| `--title-pattern PAT`                          | Title-pic template                        | `Instaloader(title_pattern=PAT)`                                                                                    |
| `--sanitize-paths`                             | Cross-platform safe names                 | `Instaloader(sanitize_paths=True)`                                                                                  |
| `--resume-prefix PREF` / `--no-resume`         | JSON resume checkpoint                    | `Instaloader(resume_prefix="PREF")` or `Instaloader(resume_prefix=None)`                                            |
| **Networking / rate control**                  |                                           |                                                                                                                     |
| `--user-agent UA`                              | Custom UA                                 | `Instaloader(user_agent=UA)`                                                                                        |
| `--max-connection-attempts N`                  | Retry count                               | `Instaloader(max_connection_attempts=N)`                                                                            |
| `--request-timeout SECS`                       | Socket timeout                            | `Instaloader(request_timeout=SECS)`                                                                                 |
| `--abort-on 302,429`                           | Fatal HTTP codes                          | `Instaloader(fatal_status_codes=[302,429])`                                                                         |
| `--no-iphone`                                  | Disable iPhone-quality fetch              | `Instaloader(iphone_support=False)`                                                                                 |
| **Misc.**                                      |                                           |                                                                                                                     |
| `--quiet`                                      | Non-interactive / cron-safe               | `Instaloader(quiet=True)`                                                                                           |
| `+args.txt`                                    | Read arguments from file                  | Call: `instaloader @args.txt` (no direct Python analogue; embed logic in script)                                    |

All mappings verified against Instaloader 4.14.1 docs and source.

</details>

**Minimal runnable Python template for** [**“CLI parity”**](https://martinfowler.com/articles/patterns-legacy-displacement/feature-parity.html)

(= smallest amount of Python code you need to get a working command-line interface whose commands exactly mirror (i.e., have feature parity with) your underlying API or library.)

{% code overflow="wrap" %}
```python
"""
Replicates: instaloader --login USER --quiet --stories --no-pictures --geotags profile1 profile2
"""
import instaloader, itertools

L = instaloader.Instaloader(
        quiet=True,
        download_pictures=False,
        download_geotags=True)

L.login("USER", "PASSWORD")            # or L.load_session_from_file("USER")

targets = ["profile1", "profile2"]
profiles = {instaloader.Profile.from_username(L.context, t) for t in targets}

L.download_profiles(profiles,
                    stories=True,
                    posts=True)         # posts=True because we only disabled pictures
```
{% endcode %}

***

<details>

<summary>Special Relationship: Instaloader &#x26; Bellingcat Auto Archiver</summary>

When you're working with the [Bellingcat Auto Archiver](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver), you may be asked to provide instaloader.session

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
  * [`requests`](https://pypi.org/project/requests/) Requests lets you send HTTP/1.1 requests effortlessly, with automatic query-string encoding, JSON support, and more
  * &#x20;[`lxml`](https://github.com/lxml/lxml) is a feature-rich and easy-to-use library for processing XML and HTML in the Python language, with good performance, and memory efficiency,
  * &#x20;[`BeautifulSoup4`](https://pypi.org/project/beautifulsoup4/) Python package for parsing HTML/XML (including malformed markup) into a navigable parse tree for data extraction. Provides idiomatic tools for iterating, searching, and modifying the parse tree (optional; only needed for certain features)

### **Access Requirements**

* **Anonymous Access**: Instaloader can scrape public profiles, hashtags, and posts without login.
* **Logged-In Access**: To scrape private profiles or retrieve user-specific data (e.g., user feed, saved posts), you must log in with valid Instagram credentials. Instaloader stores a session file to avoid repeated logins.

## Limitations

_**Heavy scripted use can trigger temporary locks or permanent bans.**_

1. **Technical Barriers**:
   * Command-line usage can pose a challenge for non-technical users.
   * Using the Python module requires basic programming knowledge.&#x20;
2. **Rate Limits and Restrictions**:
   * Instagram actively attempts to detect and restrict automated scraping. Even moderate usage of Instaloader can lead to security warnings or [temporary locks](https://github.com/instaloader/instaloader/issues/2555) on your account.
   * Instagram imposes strict rate limits that can trigger **429 Too Many Requests** errors if requests exceed certain thresholds.
   * Using proxies or VPNs may result in stricter rate limits for anonymous scraping.
3. Instagram does **not publicly disclose** the exact thresholds for the web endpoints, so the limits can change without notice. Based on user experiences, the thresholds have become **much stricter in recent years**. For example, one user noted that previously, you could make on the order of _\~200 requests per minute_ without issues. Current [anecdotal](https://github.com/instaloader/instaloader/issues/2307) [ceiling ](https://github.com/instaloader/instaloader/issues/2524)is closer to **1–2 requests / 30s** for unauthenticated scrapes; thresholds vary by endpoint and change frequently. Community reports now place anonymous limits around 1–2 requests every 30 seconds, sometimes lower. In other words, Instagram dramatically lowered the allowed request rate for scraping. [Another Instaloader user](https://stackoverflow.com/questions/65067929/instagram-responded-with-http-error-429-too-many-requests) observed getting a 429 after analyzing just 2–3 posts in a row, even from different machines, indicating a very low threshold in effect​. The exact limit may vary over time or by content type – for instance, story downloads seem to [trigger limits faster than](https://github.com/instaloader/instaloader/issues/1711) regular posts (Instagram appears to “heavily rate-limit stories” requests).
   * Checkpoint/401 (login verification prompts) [errors are common](https://github.com/instaloader/instaloader/issues/1937); importing browser cookies (using `-b chrome` or similar) is a recommended workaround.
4. **Data Integrity**:
   * Instaloader lacks built-in hashing to verify the authenticity of downloaded content.
5. **Ethical and Legal Constraints**:
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
* **Handle 429 Gracefully:** If you get a 429 error, **stop requests and wait**. Instaloader’s built-in backoff will pause execution; respect it. If you’re writing a custom script and catch a `TooManyRequestsException`, implement a long sleep (e.g., 10–15 minutes or more) before retrying. [Do not aggressively retry failed requests](https://github.com/instaloader/instaloader/issues/834) or you risk extending the ban​.
* **IP and Account Rotation (Last resort):** In extreme cases, if one IP address is consistently getting blocked, you might try switching to another network/IP or using a proxy with a different IP. This can bypass an IP-based throttle, but use caution: Instagram might detect account sharing or unusual IP changes. If you have multiple Instagram accounts, you could distribute your queries among them (log in with different accounts for different tasks) to stay under per-account limits. Only do this with accounts you control, and **never** use accounts without permission.e.

Ultimately, [**there is no way to completely “bypass” Instagram’s rate limits**](https://stackoverflow.com/questions/65002504/would-it-be-possible-to-use-ip-rotation-to-avoid-the-exception-toomanyrequestsex) – you must work within them​. The key is to slow down and behave more like a normal user. If you hit a limit, patience is the only guaranteed solution (wait until the block lifts). Trying to outsmart Instagram’s anti-scraping measures (with rapid IP rotations, etc.) often only works briefly, if at all, and can risk longer-term bans.

</details>

## Ethical Considerations

* Profiles with common names or aliases can be misidentified if relying on metadata alone.
* Posts may contain sensitive data (location, contact info, etc.).
* Ensure you have the right to view or store the content you are downloading, and respect privacy and permissions.

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
