---
description: >-
  TelegramDB is a searchable database service for exploring public Telegram
  groups and channels via a dedicated bot.
---

# TelegramDB

## URL

[https://telegramdb.org](https://telegramdb.org)

## Description

TelegramDB is a comprehensive search service for Telegram, allowing users to explore and (according to their website) analyze over 30 million Telegram groups and channels. Utilizing a bot (@tgdb\_bot) as its primary interface, TelegramDB facilitates searches for public chats, offering insights such as group membership numbers and chat statistics. This tool is tailored to assist users in navigating and extracting valuable information from Telegram’s extensive network, enhancing both casual browsing and detailed investigations.

#### Commands

The TelegramDB bot (@tgdb\_bot) offers a comprehensive set of commands to help users navigate and utilize Telegram data efficiently. Below is a detailed description of these commands and their functionalities:

<details>

<summary>Command Overview</summary>

**/search**

This command allows users to perform keyword-based searches to find groups and channels on Telegram. Users can specify whether they want to find only groups, only channels, or both. The basic search is free and provides up to 20 results, but users can extend this with purchased credits for more detailed results.

**/group and /channel**

These commands are specialized versions of the /search command, tailored specifically to either groups or channels. Using /group will limit the search results to groups only, while /channel will do the same for channels. These commands help users quickly access specific types of Telegram communities.

**/where**

The /where command is used to discover public groups in which a specified user has been a member. This function is particularly useful for tracking user activity or understanding the reach and influence of users within the Telegram ecosystem. It requires premium access, paid for through credits, to retrieve more than the basic number of results.

**/resolve**

This command converts Telegram IDs and usernames into detailed information about a user, group, or channel. It helps users quickly gather detailed data about entities on Telegram without having to navigate through the app or website. The /resolve command now includes additional information such as a user’s historical usernames, whether the user is premium, if the chat is verified, and if it is flagged for scams or fakes.

**/language**

Allows users to change the language of the bot interactions. Currently, it supports English and Italian, making it accessible to a broader audience. This command enhances the user experience by allowing non-English speakers to utilize the bot in their native language.

**Inline mode**

This feature enables users to resolve usernames and IDs directly from any chat without having to navigate to the bot chat. It streamlines the process of information retrieval, making it faster and more integrated into the regular use of Telegram.

**/members**

The /members command allows users to retrieve a list of all members within a specified group, including those with hidden membership. The results are provided in a .csv file format, suitable for data analysis and further processing in tools like Maltego.

**/network**

The new /network command provides a list of groups and channels frequented by the same community or containing similar content. The output is shown in a .csv file and is ranked with an advanced algorithm, ensuring the most similar community and/or content appear at the top. The result list includes channels, groups, and forums and is compatible with Maltego.

**/near**

The newly added /near command lists users who have the most interactions with a specified user. The output is shown in a .csv file, ranked with an advanced algorithm, ensuring the most relevant users appear at the top. The list includes users and bots, along with their IDs, names, and usernames, and is compatible with Maltego.

</details>

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

<!---->

* **Free**: Basic searches and functions with limited results.
* **Paid**: Advanced search functions and additional results are available through a credit-based payment system, including cryptocurrency options.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Telegram account to interact with @tgdb\_bot.
* Purchase of credits for premium features.

## Limitations

* It focuses solely on public Telegram content and does not access private group chats or channels.
* Dependence on the availability and legality of the data on Telegram, which might include sensitive or inappropriate content.

## Ethical Considerations

The service collects and indexes public Telegram data, raising potential concerns regarding privacy and data use. Users must consider the ethical implications of accessing and using data from public groups, especially in regions with stringent privacy laws. TelegramDB commits to GDPR compliance, offering mechanisms for data deletion and rectification.

## Guide

TelegramDB. (2024). _TelegramDB/TelegramDB_ \[Computer software]. [https://github.com/TelegramDB/TelegramDB](https://github.com/TelegramDB/TelegramDB) (Original work published 2022)

## Tool provider

TelegramDB.org

(The author did not find further information about an incorporated entity that can clearly be attributed to the service.)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

