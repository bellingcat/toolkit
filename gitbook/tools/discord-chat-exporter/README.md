---
updated: '2026-06-26'
description: A tool for exporting and backing up Discord chat logs in multiple formats.
---

# Discord Chat Exporter

## URL

[https://github.com/Tyrrrz/DiscordChatExporter](https://github.com/Tyrrrz/DiscordChatExporter)

## Description

**DiscordChatExporter** is an open-source tool designed to export chats as HTML, CSV, JSON or plain text (TXT). In the context of an investigation, it can be used for archiving and offline analysis of conversations.

The tool allows for the archiving of messages, images and attachments. Usernames, timestamps and date stamps are also included in the export files.

DiscordChatExporter comes either as a command-line interface or a graphical interface. It allows users to export messages from various sources, including Discord's direct messages, group chats, servers' channels and threads.

For open-source investigation, including but not limited to cybercrime investigations, this tool can be used to archive information shared on Discord, including usernames and timestamps for messages sent. Export formats such as HTML provide a similar view to actual Discord servers, allowing for user-friendly browsing of messages.

## How to use it

#### Step 1

In the Download section of Github, you can either choose the desktop app with a graphical user interface (GUI), or the terminal app with a command-line interface (CLI). Download the file adapted to your operating system (e.g. win-x64 file for most Windows PCs, osx-arm64 file for M1-M5 Macs, osx-x64 for older Macs).

<figure><img src=".gitbook/assets/Screenshot 2026-06-24 at 17.03.21.png" alt=""><figcaption><p>Download options on Github.</p></figcaption></figure>

{% hint style="info" %}
The CLI allows for more in-depth configuration but requires familiarity with command-line tools. The GUI is easier to navigate and more user friendly.
{% endhint %}

<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption><p>Layout of DiscordChatExporter's command-line interface.</p></figcaption></figure>

#### Step 2

Once downloaded and installed, the app requires the token linked to either a bot or personal account. A walkthrough of the different steps to get this token shows up when opening the DiscordChatExporter app.

<div align="center"><figure><img src=".gitbook/assets/Screenshot 2026-06-24 at 15.59.04.png" alt=""><figcaption><p>Instructions provided on the DiscordChatExporter graphical user interface.</p></figcaption></figure></div>

#### Step 3

After inputting the token, the app allows to browse through joined Discord channels and direct messages. Channels and/or messages can be archived directly from the app, in different export formats.

<div align="center"><figure><img src=".gitbook/assets/Screenshot 2026-06-24 at 18.14.18.png" alt=""><figcaption><p>Exporting comes up with various options (shown here is the graphical user interface).</p></figcaption></figure></div>

#### Features

Key features of DiscordChatExporter include:

* Choosing Different Export Formats: TXT, HTML, CSV or JSON.
* Filtering Options: by date ranges, keywords, user or message type (only export pinned messages, or those sent by an individual user, for example).
* Selecting multiple threads to export at once.
* Support for Markdown, reactions and attachments.
* With the CLI version, exports can be scheduled in the future.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open-source. The developer has a donation page to support the development/updating of the platform.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

The GUI is beginner-friendly. The CLI requires command-line familiarity. Both versions need a Discord Account and an API Token.

## Requirements

**Platform support:** Windows, Linux, MacOS.

**Discord Account Token**

* **Personal Token**: Obtained from browser developer tools (CTRL+Shift+I).
* **Bot Token**: Obtainable from the [Discord Developer Portal](https://discord.com/developers/docs/intro) with message content intent enabled.

## Limitations

* **Important - Terms of Service Compliance:** Automating personal accounts is against Discord's [Terms of Service](https://discord.com/terms) (ToS) and may result in account termination. Carefully consider ethical and legal questions before you decide to use the tool. Discord has reportedly been taking additional measure to enforce its ToS, with DiscordChatExporter users [reporting increased risks](https://github.com/Tyrrrz/DiscordChatExporter/issues/1497) of account restriction, warnings and termination.
* **Access Limitations**: Only exports content accessible by the logged-in account or authorized bot. Accessing DiscordChatExporter requires verification through a valid phone number on Discord. Keep in mind: only one Discord account can be associated with a phone number.
* **Bot Tokens:** Using a bot allows for more privacy and mitigates risks of account termination. However, bots only allow for the export of channels, and not direct messages. The use of bots requires some knowledge on the Discord Developer API. It can limit the tool's functionality to servers.
* **Unavailable Features:** Exporting a forum thread is currently not available in the GUI version.

## Ethical Considerations

* Consider consulting your organization’s legal team to discuss Discord's [Terms of Service](https://discord.com/terms) and other legal and ethical questions before using this tool.
* Only export chats you have permission to access. Exporting large group messages or Discord channels without consent may violate privacy and/or copyright laws.
* Consider anonymizing data if used for public work.

## Guides and articles

* [Official Documentation on Github](https://github.com/Tyrrrz/DiscordChatExporter/tree/master/.docs).
* ["Mobile Forensic Analysis of Discord Services Cyberbullying Case using National Institute of Justice Method"](https://www.ijcaonline.org/archives/volume186/number35/putri-2024-ijca-923927.pdf)_by Hafizhah Dyanty Putri and Imam Riadi on International Journal of Computer Applications (0975 – 8887) Volume 186 – No.35, August 2024._
* A number of recent investigations have used Discord servers/archives, from the [2023 Pentagon Leaks](https://www.theguardian.com/us-news/2023/apr/14/pentagon-leaks-how-discord-gaming-platform-landed-in-the-spotlight), to the [Brazilian police to prevent attacks in schools](https://www.gov.br/mj/pt-br/assuntos/noticias/ministerio-da-justica-e-seguranca-publica-apoia-operacao-de-prevencao-de-ataques-em-escolas).

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
