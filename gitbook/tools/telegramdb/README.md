---
description: >-
  TelegramDB is a searchable database service that allows users to explore
  public Telegram groups and channels via a dedicated bot.
---

# TelegramDB

## URL

[https://telegramdb.org](https://telegramdb.org)

## Description

TelegramDB is a comprehensive search service for Telegram, enabling users to explore and analyze public Telegram groups and channels. Through its dedicated bot, @tgdb\_bot, users can perform searches for public chats and obtain insights such as group membership numbers and chat statistics. This tool assists users in navigating Telegram's extensive network, enhancing both casual browsing and detailed investigations.\
At the time of this update, TelegramDB claims to have significantly increased its database, now encompassing over 340 million chats, 1.1 billion users, and 12.5 billion chat members.

#### Commands

The TelegramDB bot (@tgdb\_bot) offers a comprehensive set of commands to help users navigate and utilize Telegram data efficiently. Below is a detailed description of these commands and their functionalities:

<details>

<summary>Full Command Overview </summary>

* **/search** _(Free with limitations; Premium for extended results)_
  * **Function:** Perform keyword-based searches to find groups and channels.
  * **Details:** Specify whether to search for groups, channels, or both. The free version provides up to 20 results. Purchasing credits unlocks more detailed results and extended access.
* **/group** and **/channel** _(Free with limitations; Premium for extended results)_
  * **Function:** Specialized searches for groups or channels by name.
  * **Details:** **/group** limits results to groups; **/channel** limits to channels. Free version offers basic information with limited results. Premium access provides detailed information and additional results.
* **/where** _(Premium credits required)_
  * **Function:** Discover public groups where a specified user has been a member.
  * **Details:** Useful for tracking user activity and influence within Telegram. Requires premium credits to retrieve results.
* **/resolve** _(Free basic info; Premium credits for detailed info)_
  * **Function:** Convert Telegram IDs and usernames into detailed information.
  * **Details:** Free version offers basic info. Premium access reveals historical usernames, premium status, verification status, and flags for scams or fakes.
* **/language** _(Free)_
  * **Function:** Change the bot's interaction language.
  * **Details:** Supports English and Italian, enhancing accessibility for non-English speakers.
* **/members** _(Premium credits required)_
  * **Function:** Retrieve a list of all members in a specified group, including hidden members.
  * **Details:** Results provided in CSV format, suitable for data analysis and tools like Maltego. Requires premium credits.
* **/network** _(Premium credits required)_
  * **Function:** List groups and channels frequented by the same community or with similar content.
  * **Details:** Output is a CSV file ranked by relevance. Includes channels, groups, and forums. Compatible with Maltego. Requires premium credits.
* **/near** _(Premium credits required)_
  * **Function:** List users with the most interactions with a specified user.
  * **Details:** Provides a CSV file with ranked users and interaction stats. Includes users and bots with IDs and names. Requires premium credits.

</details>

## Cost

Without premium credits on **TelegramDB**, users can perform **basic searches and access limited results**. Specifically:

* **Basic search functions**: Users can use the `/search` command to find public groups and channels by keywords. However, they are limited to viewing only the top 20 results.
* **Limited group/channel exploration**: Users can use commands like `/group` and `/channel` to retrieve general information about public Telegram groups and channels, but advanced filtering options or detailed insights (e.g., member lists, group history) require premium credits.
* **Basic interaction**: The bot provides some limited functionality to explore public groups and channels, but detailed or more in-depth analysis commands (like `/members` or `/network`) are likely restricted to premium users.

{% hint style="info" %}
Specific pricing for premium credits is not provided directly but operates on a credit-based payment system, including support for cryptocurrencies. (If you have used the pay functionality or know more, please do let me know)
{% endhint %}

* [ ] Free
* [x] Partially Free
* [ ] Paid

- **Free**: Basic searches and functions with limited results.
- **Paid**: Advanced search functions and additional results are available through a credit-based payment system; payment works exclusively through cryptocurrency options.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* **Telegram Account:** Necessary to interact with @tgdb\_bot.
* **Premium Features:** Purchase of credits for advanced commands.
* **Data Analysis Skills:** For processing CSV files and using tools like Maltego.

## Limitations

* **Public Content Only:**
  * Does not access private groups or channels.
* **Telegram API Limitations:**
  * Subject to Telegram’s API restrictions, which may affect data retrieval limits.
  * Potential delays in data updates; information may not reflect real-time changes.
* **Data Accuracy:**
  * Depends on the availability and reliability of Telegram data.
  * Groups or channels may have changed or been deleted since the last update.

## Ethical Considerations

* **Data Privacy:**
  * Be mindful of ethical implications when accessing public group data.
  * Compliance with data protection laws is essential.
* **Jurisdictional Compliance:**
  * Adhere to regional regulations like GDPR (EU), CCPA (California), and others.
  * Users are responsible for ensuring their use complies with local laws.
* **GDPR Compliance:**
  * TelegramDB offers mechanisms for data deletion and rectification upon request.

## Guide

TelegramDB. (2024). _TelegramDB/TelegramDB_ \[Computer software]. [https://github.com/TelegramDB/TelegramDB](https://github.com/TelegramDB/TelegramDB) (Original work published 2022)

## Tool provider

TelegramDB.org

(No additional information about an incorporated entity is available.)

## Advertising Trackers

* [ ] This tool has not yet been checked for advertising trackers.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

