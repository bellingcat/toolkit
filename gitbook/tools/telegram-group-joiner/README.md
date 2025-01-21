---
description: >-
  Automate joining multiple Telegram groups and channels, ideal for researchers
  monitoring specific topics.
---

# Telegram Group Joiner

## URL

[https://bellingcat.github.io/telegram-group-joiner/](https://bellingcat.github.io/telegram-group-joiner/)

## Description

The Telegram Group Joiner is a web-based automation tool that facilitates the addition of a Telegram account to multiple groups. It is particularly useful for researchers who are focusing on a specific research topic and who need to monitor key Telegram groups, including private channels with invite links.

<figure><img src=".gitbook/assets/grafik.png" alt=""><figcaption></figcaption></figure>

The tool allows preloading of group URLs by appending them to a base URL, separated by semicolons. This automation is executed fully client-side using tdlib for a robust Telegram API experience. It is worth mentioning that the tool only operates client-side, ensuring no data retention on servers.

{% hint style="info" %}
Be mindful when using this tool. It's easy to add channels, but removal is on you, the user. &#x20;
{% endhint %}

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

**Telegram API Keys:** Obtain your API ID and API Hash from [my.telegram.org](https://my.telegram.org). This involves registering an application to receive these credentials.

## Limitations

**Account Blocking Risk:** There is a risk that Telegram may block the automated account used for group additions. To mitigate this:

* Use a non-personal Telegram account dedicated to research purposes.
* Consider using a dedicated phone number ("burner number") when setting up the account.
* Utilize a VPN to enhance privacy and avoid potential geo-restrictions.

## Ethical Considerations

* **Privacy and Consent:** Automating the joining of groups may raise ethical concerns, especially when it involves private groups. Ensure you have permission to join any private groups and comply with Telegram's terms of service.
* **Compliance with Platform Policies:** Users should familiarize themselves with Telegram's policies to avoid misuse of the platform.

## Guide

**Guide**

1.  **Access the Tool:**

    Visit the [Telegram Group Joiner](https://bellingcat.github.io/telegram-group-joiner/) webpage.
2.  **Authenticate:**

    Enter your Telegram **API ID** and **API Hash** to authenticate the tool.
3.  **Prepare Group Links:**

    * You can preload group or channel links by using the `links` parameter in the URL.
    * Separate multiple links with a semicolon (`;`).

    **Example:**

    *   **Links:**

        ```
        https://t.me/bellingcat
        https://t.me/+privateInvite,123id
        ```
    * Combined Links:\
      `https://t.me/bellingcat;https://t.me/+privateInvite,123id`
    * Resulting URL:\
      `https://bellingcat.github.io/telegram-group-joiner/?links=https://t.me/bellingcat;https://t.me/+privateInvite,123id`
4. **Join Groups:**
   * Use the tool interface to automatically join the specified groups or channels.

## Tool provider

* **Developed by:** [Bellingcat](https://www.bellingcat.com/)
* **Repository:** [GitHub - telegram-group-joiner](https://github.com/bellingcat/telegram-group-joiner)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
