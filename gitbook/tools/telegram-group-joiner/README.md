---
description: >-
  Automate joining multiple Telegram groups and channels. Ideal for researchers
  who are interested in monitoring specific research topics on Telegram.
---

# Telegram Group Joiner

## URL

[https://bellingcat.github.io/telegram-group-joiner/](https://bellingcat.github.io/telegram-group-joiner/)\

## Description

The Telegram Group Joiner is a web-based automation tool that facilitates the addition of a Telegram account to multiple groups. It is particularly useful for researchers who are focusing on a specific research topic and who need to monitor key Telegram groups, including private channels with invite links.&#x20;

The tool allows preloading of group URLs by appending them to a base URL, separated by semicolons. This automation is executed fully client-side using tdlib for a robust Telegram API experience. It is worth mentioning that the tool only operates client-side, ensuring no data retention on servers.

Github Project: [https://github.com/bellingcat/telegram-group-joiner](https://github.com/bellingcat/telegram-group-joiner)\

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

Users must obtain Telegram API keys (API ID and API HASH) from my.telegram.org and authenticate the tool.&#x20;

## Limitations

The primary risk is Telegram potentially blocking the automated account used for group additions. Users are advised to use non-personal accounts for this purpose. Use a dedicated number ('burner number') for your research purposes, as well as a VPN.&#x20;

## Ethical Considerations

This tool may raise ethical concerns about privacy and consent, particularly when adding users to private groups without clear permission. Users should ensure compliance with Telegram's terms of service to avoid misuse of the platform.

## Guide

Visit [https://bellingcat.github.io/telegram-group-joiner/](https://bellingcat.github.io/telegram-group-joiner/) and fill in your API ID and API HASH.&#x20;

You can preload a URL with links if you separate them by `;` in the URL using `links=` parameter:

```
# these 2 links
https://t.me/bellingcat
https://t.me/+privateInvite,123id
# should be put into the same line and separated by `;`
https://t.me/bellingcat;https://t.me/+privateInvite,123id
```

resulting in

https://bellingcat.github.io/telegram-group-joiner/?links=https://t.me/bellingcat;https://t.me/+privateInvite,123id



## Tool provider

Bellingcat

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

