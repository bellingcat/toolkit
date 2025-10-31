---
description: >-
  TelegramDB is a searchable database service that allows users to explore
  public Telegram groups and channels via a dedicated bot.
---

# TelegramDB

## URL

[https://www.telegramdb.org/](https://www.telegramdb.org/)\
(October 2025, [github](https://github.com/TelegramDB/TelegramDB))

## Description

TelegramDB (“TgDB”) is a searchable index of public Telegram spaces exposed through two products: **TgDB Search Lite** (a free bot at `@tgdb_search_bot`) and **TgDB Search Plus** (a web bot/webchat at tgdb.org for advanced/credit‑based queries). Core functions include keyword discovery of public channels, groups and bots, resolving IDs/usernames, and footprinting a user’s public group/channel history. Recent additions include network/affinity discovery (similar users or “near” users; groups with similar communities) and expanded result volumes for paid searches.

\
The bot lets you:

1. **Look up public chats** by keyword, name or username.
2. **Check a user’s public footprint** (`/where`) and see which groups they’ve joined.
3. **Export data** (CSV) such as full member lists, overlapping users or “near” users for network analysis tools.
4. **See live stats** on the TelegramDB index (`/stats`).

Usage has grown fast – TelegramDB passed **1.5 million monthly active users in April 2025** ([TGStat.com](https://tgstat.com/channel/%40tgdatabase)).\
&#xNAN;_&#x4E;otable 2024-25 updates:_ a redesigned menu (`/search`), searches that can now return **up to 1 000 results** instead of 20, a contact-picker for user-centric commands, and a new website where you can manage your account and buy credits.

### Commands

The TelegramDB bot (@tgdb\_bot) offers a comprehensive set of commands to help users navigate and utilize Telegram data efficiently. Below is a detailed description of these commands and their functionalities:

<details>

<summary>Full Command Overview </summary>

**Free Commands**

* **`/search`** – Opens an interactive menu to search by title, user, group, channel, or bot. (The legacy keyword search functionality is now under `/title`)
* **`/title [name]`** – Search for public groups and channels by title or keyword (text-based search).
* **`/info [id or @username]`** – Show basic profile information for a given user, group, or channel. (With premium credits, this includes historical details and alerts like scam/fake account flags​.)
* **`/resolve [id or @username]`** – Convert a user, group, or channel ID to its username (and vice versa) and display additional information such as past usernames, Telegram Premium status, verification badge, or scam flags.
* **`/group [name]`** / **`/channel [name]`** – Find public groups or channels by name. (Free mode returns limited results.)
* **`/bot [name]`** – Search for public bot accounts by name.
* **`/add [id or @username]`** – Add a user, group, or channel to TelegramDB’s index (useful for newly created or previously unindexed entities).
* **`/help`**, **`/faq`**, **`/terms`**, **`/support`**, **`/language`** – Access help and info: usage instructions, FAQs, terms and conditions, a link to the support chat, and language settings (English, Italian, etc.).
* **`/stats`** – Show live database statistics (total chats, groups, users, bots, etc.) indexed by TelegramDB​.
* **`/cancel`** – Cancel the current operation or menu.

#### Premium Commands (Credits Required)

* **`/where [id or @username]`** – Reveal the public groups in which a user has been a member. (Requires credits for a full list; without credits it will only report the count of groups, up to 5 uses per day​.)
* **`/members [id or @username]`** – Retrieve a CSV list of members of a specified group, including hidden or historical members (useful for archival member lists).
* **`/network [chat]`** – Identify related chats (groups, channels, or forums) that share a significant number of members with the target, returned as a CSV ranked by overlap relevance.
* **`/near [id or @username]`** – Find “nearest” users to a given user based on shared group memberships, outputting a CSV of users who have the most groups in common (with usernames and overlap counts)​.
* **`/credits`** – Check your credit balance and purchase additional credits through the bot’s payment interface​.

</details>

## Cost

* **Partially Free**
* **Free tier** (Search Lite): discovery commands remain 100% free on `@tgdb_search_bot`. [Telegram](https://t.me/s/tgdatabase?before=318\&utm_source=chatgpt.com)
* **Credits** (Search Plus / web bot): first \~20 results per search are free; requesting more or running premium commands consumes credits purchased in‑bot via `/credits` (Telegram Payments) or via the site (crypto payments are periodically available). Exact pricing is shown in‑app before purchase.

**Pricing:** TelegramDB uses credits. The **first 20 results of every search are free**; any additional results or premium commands consume credits.

_Inside the bot:_ Since April 2025, you can only buy credits with **Telegram Stars** due to Telegram and Apple rules ([TGStat.com](https://tgstat.com/channel/%40tgdatabase)). The bot shows the exact price before you confirm.\
&#xNAN;_&#x4F;n the website:_ At ([tgdb.org](https://tgdb.org)) you can register and pay with **cryptocurrency, credit/debit card, or PayPal** [TGStat.com](https://tgstat.com/channel/%40tgdatabase). Prices fluctuate, but typical bundles remain in the €2 – €10 range.

Each command tells you how many credits it will cost before it runs. Example: `/where` costs 3 credits plus 1 credit for every 40 results, while `/members` uses a sliding scale.

#### Free

Basic keyword searches (/search, /title)

* Limited results (up to \~20)
* Basic info from `/info`

#### Paid

* Premium commands: `/where`, `/members`, `/network`, `/near`
* Larger result sets (beyond the free limit)
* Historical data, CSV exports, user overlap analytics

{% hint style="info" %}
Specific pricing for premium credits is not provided directly but operates on a credit-based payment system, including support for cryptocurrencies. (If you have used the pay functionality or know more, please do let me know)
{% endhint %}

* [ ] Free
* [x] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

* For most workflows this is **easy**: you interact with a Telegram bot or a simple web UI—no CLI, coding, or API keys. Investigators should be comfortable with Telegram usernames/IDs and basic search/refinement. Advanced outputs (CSV exports, larger result sets, user/network analysis) require using the web bot and credit management.
* Premium features (CSV exports, group network mapping) can be used for deeper OSINT investigations or data analytics.

## Requirements

* **Platform/runtime:** Any modern browser (tgdb.org web bot) or Telegram app (bot). [tgdb.org](https://www.tgdb.org/bot?utm_source=chatgpt.com)
* **Access & install:** No local install. Start the bot at `@tgdb_search_bot` (Lite) or sign in to the web bot at https://tgdb.org/bot (Plus). [Telegram](https://t.me/tgdb_search_bot)
* **Auth/tokens:** Telegram account required. Credits purchased via `/credits` in bot (Telegram Payments) or site account; card/crypto availability varies over time. [GitHub](https://github.com/TelegramDB/TelegramDB)
* **Telegram Account**: You must have Telegram to interact with the bot [@tgdb\_bot](https://t.me/tgdb_bot).
* **Credits**: Needed for premium features (purchased in-bot)
* **Data Analysis Skills**: Helpful for interpreting CSV files, especially if you plan to load them into visualization tools (e.g., Maltego).

## Limitations

* **Public Content Only:** TelegramDB only indexes data from public or open Telegram chats. Private, invite-only, or deleted chats are not accessible via this tool. (All data is obtained by crawling public groups/channels visible to anyone, and TelegramDB is _not_ affiliated with Telegram itself​.
* **Unfiltered Data:** TelegramDB does not moderate or filter collected content, so search results may include pornography, hate speech, graphic violence, or other illegal or offensive material on Telegram. Users should exercise caution; content takedown requests can be made to remove personal data (see `/terms`)​.
* **API Constraints:** The service relies on Telegram’s infrastructure (APIs and network). Data may be subject to Telegram’s rate limits or outages, and information might not instantly reflect edits or deletions. For example, if a user leaves a group or a message is removed, it may still appear in TelegramDB’s cache until the next update or a removal request​.
* **Search Costs:** Extensive querying can become costly in credits. High-volume searches or bulk member exports may consume credits quickly, which can be a practical limitation for some users (though result previews and incremental costs are provided).
* **Data Accuracy:** Information retrieved might not reflect very recent changes on Telegram. There can be lag in indexing new groups or updating member lists, and some data (like historical usernames or group membership) may be incomplete if the crawler didn’t capture it in time. Always double-check critical information on Telegram itself if possible.

### Terms & Conditions (Key Points Summary)

* **Age Requirement:** You must be at least 18 years old (or the legal age in your jurisdiction) to use TelegramDB services and the @tgdb\_bot.
* **User Obligations:** Users must not use automated scripts or bots to scrape TelegramDB’s data without permission. All usage must comply with applicable laws – you may not use TelegramDB to harass, stalk, or inflict harm on others or for any unlawful purposes.
* **Prohibited Activities:** Unauthorized mass collection or resale of TelegramDB’s data is forbidden, as is any attempt to commercially exploit the service’s data or to post abusive content via the bot. Attempts to circumvent the bot’s security or access controls are strictly prohibited.
* **Governing Law & Disputes:** Use of TelegramDB is governed by the laws of Italy. In the event of disputes, the Terms specify resolution via arbitration in Milan, Italy, conducted in English (unless otherwise required by law).
* **Account Termination:** TelegramDB reserves the right to suspend or terminate your access for violations of the Terms of Use. If an account is terminated, creating substitute accounts to bypass the ban is not allowed without explicit permission.

_(Refer to the full Terms of Service via the `/terms` command in the bot for complete details. TelegramDB’s policies also outline GDPR compliance – personal data removal requests can be sent to the admins if content has been removed from Telegram but remains on TelegramDB​_

## Ethical Considerations

* **Data Privacy:** Even though TelegramDB only uses publicly available data, be mindful of privacy implications. Avoid using the tool to expose private individuals unnecessarily, and remember that public membership in a group does not always imply endorsement.
* **Compliance:** Ensure your use of TelegramDB aligns with data protection laws (e.g. GDPR) and ethical OSINT guidelines. If you retrieve personal data (like lists of users), handle it responsibly and respect any deletion requests.
* **Content Verification:** Results from TelegramDB might include misinformation, extremist propaganda, or spam accounts. Always verify content and identities through additional sources. Treat data as leads or clues rather than absolute facts until confirmed.
* **Responsible Usage:** Use TelegramDB for **lawful, proportionate and necessary** OSINT only. Minimize collection of personal data, preserve context, and document methods. For methodology and evidentiary handling, see the **Berkeley Protocol on Digital Open Source Investigations** (OHCHR) and related guidance. Toolkit volunteers should also follow Bellingcat’s internal standards on neutrality and updates.

## Guide

* TelegramDB – **README / product overview** (commands, credits, policies). [GitHub](https://github.com/TelegramDB/TelegramDB)
* TelegramDB – **Introduction** (service summary). [telegramdb.org](https://www.telegramdb.org/article/introduction?utm_source=chatgpt.com)
* TgDB Search Lite – **Bot page** (`@tgdb_search_bot`). [Telegram](https://t.me/tgdb_search_bot)
* TelegramDB – **Data removal / GDPR page** (process & contact). [tgdb.org](https://www.tgdb.org/page/data_removal?utm_source=chatgpt.com)
* Authentic8 – **Understanding Telegram for OSINT research** (contextual how‑to, 2025‑06‑05). [authentic8](https://www.authentic8.com/blog/telegram-osint-research?blaid=7711207\&utm_source=chatgpt.com)

## Tool provider

[TelegramDB.org](https://telegramdb.org) maintains the service and its infrastructure (the developers have not publicly disclosed organizational details). The service operates[ servers in Europe​](https://telegramdb.org/article/introduction).

But they're listening to the community:\
![](.gitbook/assets/image.png)

## Advertising Trackers

* [ ] This tool has not yet been checked for advertising trackers.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

