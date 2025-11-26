---
description: >-
  Command line tool for checking if phone numbers are connected to Telegram
  accounts and retrieving related information where available.
---

# Telegram Phone Number Checker

## URL

[Try it on Google Colab](https://colab.research.google.com/github/bellingcat/open-source-research-notebooks/blob/main/notebooks/bellingcat/telegram-phone-number-checker.ipynb)

[Get the code from GitHub](https://github.com/bellingcat/telegram-phone-number-checker)

## Description

The Telegram Phone Number Checker is a Python-based command-line tool that takes phone numbers and uses the Telegram API to find information about the number. It does this by trying to add the number as a contact on your Telegram account.

When investigating a phone number of interest, this tool may help a user find more information about the owner of the phone number.\
\
If adding the contact is successful, the tool extracts public information that could include the account username, first name, last name, profile photo, and when they were last online.&#x20;

<details>

<summary>View the full list of data fields the tool attempts to collect.</summary>

id, username, usernames, first\_name, last\_name, fake, verified, premium, mutual\_contact, bot, bot\_chat\_history, restricted, restriction\_reason, user\_was\_online, phone

The profile\_photo can be optionally requested.

</details>

If adding the contact fails, it could be that the person is not on Telegram or has disabled contact adding in their Telegram privacy settings.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

A Telegram developer account and API key.

Basic to intermediate experience with the Python programming language.&#x20;

## Limitations

The tool can lead to your Telegram account being blocked, which seems more likely if you use the tool for large numbers of phone numbers or if you use a VPN (that could be associated with spam activity).&#x20;

To mitigate this risk, it is recommended to avoid using your personal account with this tool.

## Ethical Considerations

It is possible to gain access to people's names and images using this tool, and it should be used as part of tightly scoped investigations. Users should be cautious not to disclose personal information about individuals they are investigating when sharing their findings.&#x20;

## Guides and articles

[YouTube Tutorial](https://www.youtube.com/watch?v=TLJgnlilEBs)

Bellingcat article: ["How Code Notebooks Enable Open Source Research"](https://www.bellingcat.com/resources/2024/03/06/how-code-notebooks-enable-open-source-research/), Miguel Ramalho



## Tool provider

[Bellingcat](https://www.bellingcat.com/), Netherlands

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Galen Reich     |
| Afton           |
