---
description: >-
  TelegramDB is a searchable database service that allows users to explore
  public Telegram groups and channels via a dedicated bot.
---

# TelegramDB

## URL

[https://telegramdb.org](https://telegramdb.org)

## Description

TelegramDB is a comprehensive search service for Telegram, enabling users to explore and analyze **public** Telegram groups, channels, and user information. Through its dedicated bot, @tgdb\_bot, researchers and casual users can:

1. **Find** public chats (groups and channels) by keyword or name.
2. **Obtain** information about a user’s public presence (e.g., what groups they have joined).
3. **Generate** CSV files of members, cross-group data, or user “nearby” interactions for advanced analysis.
4. **Access** up-to-date statistics on the Telegram network in the TelegramDB database.

Recent improvements include a **redesigned interface** with an **interactive menu** triggered by `/search`, a **better search algorithm** that provides more relevant results, and an expanded database.

#### Commands

The TelegramDB bot (@tgdb\_bot) offers a comprehensive set of commands to help users navigate and utilize Telegram data efficiently. Below is a detailed description of these commands and their functionalities:

<details>

<summary>Full Command Overview </summary>

**Free Commands**

* **/search**
  * Presents an interactive menu allowing you to “Search by title,” “Search by user,” “Search by group,” “Search by channel,” or “Search by bot.”
  * The **old** `/search` functionality (finding groups/channels by keyword) is now mostly under `/title [name]`.
* **/title \[name]**
  * Search for public groups and channels by a specific title or keyword.
* **/info \[id or @username]**
  * Show basic information for a given user, group, or channel. Premium credits unlock more historical details and alerts (e.g., scam or fake flags).
* **/group \[name]** / **/channel \[name]**
  * Find public groups or channels by name (limited results in free mode).
* **/bot \[name]**
  * Search for bot accounts.
* **/add \[id or @username]**
  * Add a user, group, or channel to TelegramDB’s index (particularly useful for newly created entities).
* **/help, /faq, /terms, /support, /language**
  * Help: Overview of commands and usage.
  * FAQ: Frequently asked questions.
  * Terms: Terms and conditions.
  * Support: Direct link to support chat.
  * Language: Switch the bot’s interface language (English, Italian, etc.).
* **/stats**
  * Shows live database stats (chats, groups, users, bots, and more).
* **/cancel**
  * Cancel current operation.

#### Premium Commands (Credits Required)

* **/where \[id or @username]**
  * Reveal public groups in which a user has been a member.
* **/members \[id or @username]**
  * Retrieve a CSV list of group members (including hidden or historical memberships).
* **/network \[id or @username]**
  * List related groups, channels, or forums that share a similar community or member overlap. Results come as a CSV file, ranked by relevance.
* **/near \[id or @username]**
  * Identify “nearest users” based on shared group activity, producing a CSV file of user handles and interaction metrics. (“Near” refers to social connection distance, not physical location.)
* **/credits**
  * View your current credit balance and purchase additional credits.

</details>

## Cost

TelegramDB uses a **credit-based** model:

* **Free**: Basic searches (up to \~20 results), limited user info.
* **Paid**: Advanced or larger-result commands (e.g., `/where`, `/members`, `/network`, `/near`) require credits.
* **Pricing**:
  * Example tiers: 20 credits \~€1.99, 50+ credits \~€4.99, 100+ credits \~€9.99, etc.
  * In a non-representative convenience sample of searches, prices ranged between 10 and 27 credits with a median price of 14 credits.
  * The **/where** command charges a base 3 credits + 1 credit for every 40 results.
  * The **/members** command uses the formula: **3 + 0.6x^0.8** for x results.

_(Prices and offers may vary; check `/credits` in the bot for current details. Purchases can be made via credit card, Paypal, and cryptocurrencies.)_

#### Free

* Basic keyword searches (/search, /title)
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

* **Beginner**: Basic searches are straightforward via simple commands.
* **Intermediate to Advanced**: Premium features (CSV exports, group network mapping) can be used for deeper OSINT investigations or data analytics.

## Requirements

* **Telegram Account**: You must have Telegram to interact with the bot [@tgdb\_bot](https://t.me/tgdb_bot).
* **Credits**: Needed for premium features (purchased in-bot)
* **Data Analysis Skills**: Helpful for interpreting CSV files, especially if you plan to load them into visualization tools (e.g., Maltego).

## Limitations

* **Public Content Only**: Private or invite-only chats remain inaccessible.
* **API Constraints**: Dependent on Telegram’s API and rate limits; data may be out of date or incomplete.
* **Search Costs**: Premium commands use credits; high-volume searching can be expensive.
* **Data Accuracy**: Info may not reflect immediate changes or deletions in groups/chats.

### Terms & Conditions (Key Points Summary)

* **Age Requirement**
  * You must be at least 18 years old to use TelegramDB services and the @tgdb\_bot.
* **User Obligations**
  * Users must not employ automated scripts, bots, or scrapers to extract data without permission.
  * Users must adhere to all applicable laws and not use TelegramDB to harass, abuse, or harm others.
* **Prohibited Activities**
  * No unauthorized data compilation, commercial exploitation, or posting of harmful content.
  * Circumventing the Bot’s security measures is strictly prohibited.
* **Governing Law & Disputes**
  * Governed by the laws of Italy.
  * Disputes generally resolved by arbitration in Milan, Italy, conducted in English.
* **Termination**
  * TelegramDB may suspend or terminate access for violation of the Terms of Use.
  * Creating new accounts post-termination is prohibited without permission.

## Ethical Considerations

* **Data Privacy:**
  * Be mindful of ethical implications when accessing public group data.
  * Compliance with data protection laws is essential.
* **Privacy & Data Protection**: Public data usage only; always comply with privacy regulations (GDPR, etc.).
* **Responsible Usage**: Verify content authenticity; some Telegram accounts may be spam or fake.
* **User Accountability**: You are solely responsible for how you use TelegramDB’s data—respect local laws and individual privacy.

## Guide

TelegramDB. (2024). _TelegramDB/TelegramDB_ \[Computer software]. [https://github.com/TelegramDB/TelegramDB](https://github.com/TelegramDB/TelegramDB) (Original work published 2022)

## Tool provider

[TelegramDB.org](https://telegramdb.org) maintains the service and database.\
&#xNAN;_(No additional incorporation details publicly available.)_

But they're listening to what the community wants:\
![](.gitbook/assets/image.png)

## Advertising Trackers

* [ ] This tool has not yet been checked for advertising trackers.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

