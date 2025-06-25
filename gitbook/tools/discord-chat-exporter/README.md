---
description: A tool for exporting Discord chat logs in multiple formats.
---

# Discord Chat Exporter

## URL

[https://github.com/Tyrrrz/DiscordChatExporter](https://github.com/Tyrrrz/DiscordChatExporter)

## Description

**DiscordChatExporter** is an open-source tool designed to export chats as HTML, CSV, JSON or Plain Text. It can be used for archiving and offline analysis of conversations in an investigation context.

It comes as a command-line interface or a graphical interface and allows users to export messages from various sources: Discord's direct messages, group chats, servers' channels and threads.&#x20;

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>The GUI allows you to list and select the threads to export</p></figcaption></figure>

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption><p>The CLI is more configurable but needs familiarity with command-line tools</p></figcaption></figure>

Some features include:

* Filtering Options: by date ranges, keywords, user or message type (only export pinned messages for example)
* Selecting multiple threads to export at once
* Support for Markdown, reactions and attachments
* The CLI version can be used to schedule exports

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>Exporting comes up with various options</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open-source.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

GUI is beginner-friendly. CLI requires command-line familiarity. Both versions need a Discord Account and an API Token.

## Requirements

**Platform support:** Windows, Linux, MacOS. Also available as a Docker Image.

**Discord Account Token**:

* **Personal Token**: Obtained from browser developer tools.
* **Bot Token**: Obtainable from the [Discord Developer Portal](https://discord.com/developers/docs/intro) with message content intent enabled.

## Limitations

* **Access Limitations**: Only exports content accessible by the logged-in account or authorized bot.
* **Terms of Service Compliance** (**Important):** Automating personal accounts is against Discord's [Terms of Service ](https://discord.com/terms)and may result in account termination if excessive requests are done. Use with caution.
* **Bot Tokens limitations:** The use of Bots requires some knowledge on the Discord Developer API and reduce the scope of the tool to servers owned by the user and which the bot has been granted access to.
* **Unavailable features:** Exporting a forum thread is currently not implemented in the GUI version.

## Ethical Considerations

* Only export chats you have permission to access; unauthorized exporting may violate privacy laws.
* Consider anonymizing data if used for a public work.

## Guides and articles

* [Official Documentation on Github](https://github.com/Tyrrrz/DiscordChatExporter/tree/master/.docs)
* ["Mobile Forensic Analysis of Discord Services Cyberbullying Case using National Institute of Justice Method"](https://www.ijcaonline.org/archives/volume186/number35/putri-2024-ijca-923927.pdf)_by Hafizhah Dyanty Putri and Imam Riadi on International Journal of Computer Applications (0975 – 8887) Volume 186 – No.35, August 2024_

## Tool provider

Oleksii Holub ([Tyrrrz](https://github.com/Tyrrrz) on GitHub) is an open-source software developer from Ukraine.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |

