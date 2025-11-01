---
description: >-
  RedditMetis is an online tool that analyses any public Reddit profile and
  returns charts and statistics on the user’s activity, language, sentiment and
  favourite sub-communities.
---

# RedditMetis

## URL

[https://redditmetis.com](https://redditmetis.com)

## Description

RedditMetis is a free, web-based dashboard for quick, one-off checks on any **public** Reddit account.\
Type a username (without the `u/` prefix) and the [site fetches](https://redditmetis.com/) the last 1,000 comments **and** the last 1,000 submissions made by that user, then builds an interactive report in your browser.

{% tabs %}
{% tab title="Basic Information" %}
<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Public Profile of Steve Huffman aka "spez" - the CEO of Reddit</p></figcaption></figure>

* **About** — Lists the username, account creation date (“cake day”), link karma, comment karma, and total karma. It also notes detected interests and topics (for instance, pets like “dog,” and preferred discussion topics like “finance”).
* **Text Readability** — Provides a _Gunning Fog Index_ score of 12, rated as _medium_ complexity, indicating the average education level needed to understand the user’s writing.
* **Wholesomeness Meter** — Uses machine learning and natural-language analysis to estimate the tone of the user’s comments, here rating the account as 94 % “wholesome.” It also highlights the most and least wholesome comments, including subreddit sources, upvotes, and timestamps.
* **Synopsis** — A brief summary panel that aggregates the findings visually.
{% endtab %}

{% tab title="Activity Patterns" %}
<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

This screenshot from **RedditMetis** shows the _Activity Pattern_ section of a Reddit profile summary.

It visualizes when and how often the user posts and earns karma through three main charts:

1. **Activity Heatmap** — Displays posting activity across the past year, with darker yellow squares marking higher activity days. Most of the user’s activity appears concentrated between **May and August**, while earlier months show little to no posting.
2. **Posts by Weekday** — A bar chart comparing post frequency and karma across days of the week. The user is most active on **Wednesdays and Fridays**, with notable spikes in karma on Fridays and Saturdays, indicating that weekend posts are particularly effective.
3. **Posts by Hour of Day** — A time-of-day histogram that reveals two main posting clusters: one around **midnight to early morning**, and another between **6 p.m. – 9 p.m.**, both yielding significant karma.

Overall, this visualization summarizes the user’s **temporal posting habits**, highlighting their peak engagement periods both weekly and daily.
{% endtab %}

{% tab title="Usage Breakdown" %}
<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Each colored block represents a category of subreddits, with size proportional to the **number of posts or comments** (the selected mode).

* The largest section, **“Meta”**, dominates the chart with **56 entries**, indicating that most of the user’s activity involves Reddit-related discussions, moderation, or community issues.
* **“Other”** follows with **25 posts/comments**, suggesting a spread across smaller or less-defined subreddits.
* **“Business”** accounts for **7**, and **“General”** for **4**, reflecting minor but distinct participation in those categories.

This layout offers a quick visual overview of the user’s posting distribution, revealing that their engagement is **heavily concentrated in Meta-oriented subreddits** with lighter activity in business and general-interest communities.
{% endtab %}

{% tab title="Comment Statistics" %}
<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

It summarizes how the user engages through comments, combining quantitative data, qualitative highlights, and subreddit-based breakdowns:

* **Overview Metrics:**\
  The user has made **80 comments**, earning a total of **752.64k karma**—averaging **9.41k karma per comment**. They’ve written about **7,650 words** (with **1,740 unique words**) and spent roughly **3 hours typing**, averaging an impressive **98 karma per word**. Six of their comments have been **gilded**, signaling high community appreciation.
* **Best and Worst Comments:**\
  The _best comment_ (with **+654 karma**, 5 years old) was a personal reflection shared on **r/wallstreetbets**, while the _worst comment_ (at **–22 karma**) appeared on **r/modnews**, discussing Reddit community management.
* **Top Subreddits by Number of Comments:**\
  The user’s most frequent activity is in **r/ModSupport (25)** and **r/modnews (13)**, showing an emphasis on moderation-related discussions.
* **Top Subreddits by Comment Karma:**\
  The greatest karma impact comes from **r/wallstreetbets**, **r/redditstock**, and **r/AskReddit**, revealing that while moderation forums dominate their activity, the highest engagement occurs in broader, high-traffic communities.
{% endtab %}

{% tab title="Post Statistics" %}
<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

This screenshot summarizes how and where the user posts, including performance and subreddit activity patterns:

* **Overview Metrics:**\
  The user has made **12 posts**, earning a total of **179.78k karma** and receiving **no gilded posts**.
* **Best and Worst Posts:**\
  The _best post_—“I am Steve Huffman, the new CEO of reddit. AMA.”—appeared on **r/IAmA**, gaining **41.4k karma** about ten years ago.\
  The _worst post_, made to **r/modnews**, introduced a discussion on political ads and received **0 karma**.
* **Top Subreddits by Number of Posts:**\
  The user’s posting activity is spread mainly across **r/modnews** and **r/ModSupport** (4 posts each), with single posts in **r/Snoo**, **r/redditdev**, **r/u\_spez**, and **r/IAmA**.
* **Top Subreddits by Post Karma:**\
  The highest karma originates from **r/IAmA**, followed by **r/modnews**, **r/ModSupport**, and **r/u\_spez**, indicating that while moderation-related subreddits dominate the posting frequency, the most visible engagement came from the AMA announcement.

Overall, this panel captures a **concise posting history**, showing that most of the user’s karma and visibility stem from a single high-profile announcement post, while their routine engagement centers on internal Reddit and moderation communities.
{% endtab %}

{% tab title="Corpus" %}
<figure><img src=".gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

This screenshot illustrates the **Corpus Statistics** section of a Reddit profile analysis, highlighting the user’s most frequently used words.

It consists of two linked visualizations:

* **Word Cloud (left):**\
  Displays the user’s most common vocabulary, with word size reflecting frequency. The largest terms—**“reddit,” “community,” and “communities”**—show the user’s consistent focus on platform-related discussions. Other recurring words like _“make,” “people,” “ads,”_ and _“working”_ suggest frequent commentary on Reddit’s functionality, policies, and community management.
* **Word Frequency Table (right):**\
  Lists the top words numerically:
  * _reddit_ — 87 occurrences
  * _community_ — 35
  * _communities_ — 35
  * _make_ — 26
  * _time_ — 22
  * _people_ — 19
  * _ads_ — 18
  * _working_ — 17
  * _users_ and _things_ — 16 each

Together, these graphics summarize the **linguistic themes** of the user’s writing, showing a strong emphasis on **Reddit itself, community dynamics, and site operations**, rather than personal or off-topic subjects.
{% endtab %}
{% endtabs %}

**What the report shows**

* **Activity statistics** – a heat-map of posting hours plus monthly counts of comments and submissions (helpful for spotting time zones or daily routines).
* **Comment analysis** – sentiment (positive / neutral / negative),[ readability scores (Flesch)](https://plainenglish.ie/readability-test/), average length, and keyword cloud.
* **Submission analysis** – top link types and external domains.
* **Corpus overview** – most-used words, top subreddits, potentially controversial comments, and entities that the user has self-disclosed (profession, nationality, etc.) with a link back to the original post for context.
* **Export** – copy-ready CSV/JSON for offline archiving.

RedditMetis was inspired by SnoopSnoo (now defunct) and rebuilt from a fork of its open-source code ([GitHub repo](https://github.com/jibalio/redditmetis)).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Enter a username, press **Analyse** – no technical skills required.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

Enter a username, press **Analyse** – no technical skills required.

## Requirements

* **No login is needed – all data is sourced** from Reddit’s public API.
* **Modern browser** – Chrome, Firefox, Edge or Safari 15 +. Older browsers may not render the interactive charts correctly.
* **Network speed** – the report is built client-side; a slow connection will delay the fetch.

## Limitations

* **Public data only** – the tool cannot read private messages, private subreddits, or removed content.
* **Fixed scope** – each run covers exactly the latest **1,000 comments and 1,000 submissions**; older posts are ignored ([Site FAQ](https://redditmetis.com/faq)).
* **Caching** – results are cached for **≈ 2 hours** to save API calls; very recent activity may not appear ([FAQ](https://redditmetis.com/faq)).
* **Reddit rate limit** – the current free API ceiling is **100 requests per minute**; very busy accounts may take a minute or two to finish ([Reddit Data API wiki](https://www.reddit.com/r/redditdev/wiki/api/)).
* **NLP accuracy** – sentiment and entity extraction can misread sarcasm or joking self-descriptions.
* **Profile not found** – typos, shadow-bans or aggressive ad-blockers can break a lookup (FAQ).

## Ethical Considerations

* **Pattern revelation** – heat maps can expose a user’s daily schedule or time zone.
* **Context matters** – automated sentiment may misclassify humour or irony; always read the source comment.
* **No consent** – the analysed user does not need to approve the lookups; share results responsibly and within your local data-protection laws.
* **Tool unaffiliated** – RedditMetis is not endorsed by Reddit.

## Guides and articles

[Guide: Using Reddit in OSINT](https://authentic8.com/osint-guide-reddit) (Aug 2024);\
[Week in OSINT #2022-13](https://sector035.nl/articles/2022-13) (Apr 2022);\
[Reddit for E-commerce – user-behaviour tips](https://buddyinfotech.com/reddit-ecommerce) (Dec 2024)

## Tool provider

Created by GitHub user **jibalio** and hosted on AWS. Codebase is a fork of u/orionmelt’s open-source SnoopSnoo analyser ([GitHub](https://github.com/jibalio/redditmetis)).

## Similar tools

* [**Redective**](https://www.redective.com/) – comparable free report with activity charts and top subreddits.
* [**Reddit User Analyser**](https://reddit-user-analyser.netlify.app/) _(various mirrors)_ – fast, lightweight overview of favourites and word counts.
* [**Pushshift API**](https://github.com/pushshift/api) – historical Reddit dataset for developers; requires scripting.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

Cookies are limited to site preferences, Google Analytics and AdSense ads (Cookie policy).

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
