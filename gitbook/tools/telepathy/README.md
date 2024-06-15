---
description: >-
  Telepathy is a versatile Telegram toolkit for OSINT analysts, enabling chat
  archiving, memberlist gathering, user location lookup, top poster analysis,
  message mapping, and more.
---

# Telepathy

## URL

[https://github.com/jordanwildon/Telepathy](https://github.com/jordanwildon/Telepathy)

## Description

#### Introduction

Telepathy is an Open Source Intelligence (OSINT) toolkit tailored for analyzing Telegram communications. It extracts and examines data from Telegram, differentiating clearly between Telegram channels and groups (referred to here as "chats").

The tool can be used to either target chats (as in public or private groups/channels) or users. The specified chat must be public or have a private link. When searching by User (ID or @nickname), your account must have previously interacted with the user in some way, such as after archiving a group. However, when searching by username, prior interaction with the user is not required.

The toolkit facilitates detailed insights into **Telegram channels**. It captures information such as the channel's description, total participant count, identifiable members, username, URL, type of chat, chat ID, access hash, the date of the first post, and any restrictions that might be applied. Channels on Telegram are designed for broadcasting messages to a large audience, and they do not allow members to see each other or directly interact within the channel itself.

Conversely, for **Telegram groups**, Telepathy enables the export of member lists into CSV files. This includes details like each member's number, name, username, and ID. This function is useful for analyzing the dynamics and engagement within groups, where members can see each other and interact freely, facilitating discussions and community building.

The tool offers several functionalities for **user operations** within Telegram. Users can be searched by User ID or @nickname. The location option allows users to find others near specific coordinates, provided their Telegram account displays a publicly viewable profile image. However, rapid successive location searches may be limited by Telegram's rate limits, currently about ten minutes between changes.&#x20;

Additionally, telepathy supports using **alternative numbers** (ie. more than one account at a time) or API details for simultaneous operations, ideal for extensive scanning activities, though it comes with certain limitations related to user ID management and simultaneous account operations.\
\
The **export** function allows users to export all the chats they are a part of into a CSV file, which can be useful for organizing chat memberships or potentially assisting with setting up new accounts to automatically join these groups in the future. A **reply feature** facilitates the archiving of replies within channel communications, listing users who have interacted with messages, thus enhancing engagement tracking and analysis. Additionally, the **translate function** offers automatic translation of messages into English, providing a valuable tool for users needing to bridge language barriers in international communications. These functionalities collectively improve the utility of the platform for managing extensive communication networks and integrating multilingual content seamlessly.

#### API management: Bots vs Sessions

Creating a Telegram bot and initiating a Telegram session are two distinct processes within the Telegram platform, each serving different purposes and functionalities.

**Creating a Telegram Bot:** Creating a Telegram bot involves registering a new bot with the BotFather, which is Telegram’s official bot for creating and managing other bots. Here’s how this process typically unfolds:

1. **Initiation**: You start by sending a message to BotFather on Telegram. The command `/newbot` initiates the creation process.
2. **Naming**: You will be prompted to provide a name for your bot, which will be displayed in conversations.
3. **Username Assignment**: After naming the bot, you need to assign it a unique username that ends in ‘bot’ (e.g., example\_bot).
4. **Receive API Token**: Once the bot is registered, BotFather provides an API token, which is essential for programming the bot’s behavior using the Telegram Bot API.
5. **Programming**: With the API token, developers can use the Telegram Bot API to define the bot’s functionalities, such as sending automated responses, managing groups, or integrating with other services.

**Creating a Telegram Session:** In contrast, initiating a Telegram session is about starting a new instance of interaction with the Telegram system, usually through a user interface or an API for individual users. This process generally involves:

1. **Authentication**: The user logs into their Telegram account using their mobile number, which involves receiving and entering a verification code sent via SMS or call.
2. **Session Creation**: Once verified, a session is created on the device or application being used. This session maintains the user’s state, settings, and interaction history with Telegram.
3. **Data Encryption**: Telegram sessions are encrypted, ensuring that the messages are only readable by the sender and the receiver.&#x20;
   * **Cloud Chats** (anything that isn't a 'secret chat') are encrypted between the client and the server, meaning that Telegram can decrypt and access the messages stored on their servers. This allows users to sync their messages across multiple devices.
   * **Secret Chats**, on the other hand, use end-to-end encryption, meaning only the sender and recipient can read the messages. These messages are not stored on Telegram’s servers and cannot be accessed by anyone other than the two parties involved in the chat. Secret Chats are only available on Android, iOS and macOS clients.
4. **Accessing Features**: Within a session, users can send messages, create groups or channels, interact with bots, and use various Telegram features based on their needs.

**Key Differences:**

* **Purpose**: A Telegram bot is created to automate tasks and enhance user interaction without manual intervention, serving as an interface for users or groups. Meanwhile, a Telegram session is essentially the user's active period of interaction with the platform, involving direct manual control and personal usage.
* **Creation**: Bots are created through BotFather and require programming skills to define their behavior using the Telegram API. A session, however, is initiated by any user simply by logging into Telegram with their credentials.
* **Functionality**: Bots can interact with users, provide information, manage tasks, and integrate with other digital tools. Sessions allow users to engage with all Telegram functionalities, including chatting, sharing media, and interacting with bots and other users.

#### Summary

Telepathy’s user interface is designed to be intuitive for technically experienced users, and the output is tailored towards in-depth data analysis. Being open-source, it provides the flexibility for modifications and enhancements to meet specific investigative needs.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Free, with enterprise-grade versions (Telepathy Pro & TelepathyDB) available at prose.ltd for advanced needs.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

#### Prerequisites

* **Python:** Ensure you have Python installed on your system since Telepathy is a Python-based tool. You can download Python from the official website.
* **Telegram API Details:** You'll need to obtain your Telegram API details (API ID and API Hash) from my.telegram.org. This involves registering your application on Telegram to get these credentials.
* To use Telepathy effectively, users need a separate **activation number** (ie. separate number used only for this purpose) for Telegram. This number is only necessary to create an account, but not necessary to use it.
* A **VPN** and **virtual machines** are also recommended for enhanced security.

The page maintainer advises employing a separate phone number ("burner phone") and creating a unique API ID and hash directly from Telegram for its operations. These precautions help to preserve the privacy and security of the user's main Telegram account. The use of VPNs and virtual machines is also recommended to safeguard the investigation process.

## Limitations

1. **Telegram API Restrictions:** The use of Telegram's API is governed by strict rate limits and terms of use. Excessive requests or actions that violate Telegram's terms can lead to temporary or permanent bans on the API access. This limits how quickly and extensively data can be collected.
2. **Access to Private Groups and Channels:** Telepathy requires either public access or an invitation link to access private groups and channels. Without proper access, investigating private communications remains out of reach.
3. **Dependence on User's Telegram Account:** Since Telepathy uses the user's Telegram account for data collection, any limitations or restrictions placed on the account itself will impact the tool's functionality. For instance, looking up users by location requires that your account has a profile picture set to public, and certain features may only work if the account has encountered the target users or groups before.
4. **Performance and Scalability Issues:** While installing the `cryptg` library can improve performance, particularly for media downloads, the tool's overall efficiency and speed can vary depending on the size of the data being collected and the hardware it's running on. For large-scale investigations, this could lead to significant time consumption.
5. **Technical Knowledge Requirement:** While Telepathy aims to be accessible, setting it up and making the most of its features require a certain level of technical knowledge, including familiarity with command-line tools and Python. This could pose a barrier to less technically-inclined users.
6. **Potential for Future Telegram API Changes:** As with any tool that relies on a third-party API, future changes to the Telegram API or its policies could impact Telepathy's functionality or availability.
7. **Windows Compatibility Issues:** Telepathy may encounter file management and error handling issues on Windows systems, which could hinder smooth operation and require troubleshooting or future updates for resolution.
8. **Data Analysis Limitations:** While Telepathy can collect a vast amount of data, the analysis and interpretation of this data still require significant effort and expertise from the user. The tool does not provide deep analytical insights automatically; it facilitates data collection, leaving the complex analysis to the user or other tools.

## Ethical Considerations

* **Legal and Ethical Considerations:** The tool must be used in compliance with laws and ethical guidelines regarding privacy and data collection. Misuse can lead to legal consequences and ethical violations, particularly when handling sensitive information.
* **Media File Handling:** When archiving media content, users must be cautious and responsible, as they could inadvertently download and store illegal or sensitive materials on their systems. It's the user's responsibility to manage such files according to legal standards and ethical practices.

## General Advice concerning the security of Telegram

While Telegram’s encryption is robust, particularly for secret chats, several vulnerabilities and caveats make it crucial for Telegram users to remain vigilant and proactive about potential security threats.

Telegram operates using centralized servers, meaning that unlike decentralized platforms where data might be distributed across many independent nodes, Telegram's data is stored and processed on servers controlled by the company. State access to Telegram data, especially on a server within their territory, varies significantly based on the country's legal framework, the technical security of the data, and the geopolitical context. The storage of data from EU-based users is based on servers in the Netherlands and London under GDPR guidelines. Users within Europe benefit from GDPR protections, while those outside Europe should consider additional precautions to secure their data.

If Telegram’s servers are located in a country where the state has jurisdiction, it might legally compel Telegram to hand over user data or provide access to the servers. Depending on the local laws, Telegram might be required to comply with such requests.

#### Infected Clients

Common client side attacks involve modifying the encryption algorithm implemented in the client application. This could happen through tampering with the client software itself—such as a malicious update, a compromised third-party client, or a modified version of the app.

* **Compromised Application**: An infected or maliciously altered version of the Telegram app could be used to introduce malware or spyware on a user’s device. This malware might bypass encryption by capturing keystrokes, screenshots, or directly accessing messages before they are encrypted and sent, or after they are decrypted upon receipt.&#x20;
* **Third-Party Clients**: Using unofficial or third-party clients that are not vetted by Telegram can also pose significant risks, as these might not follow the same security standards or could be intentionally designed to capture user data.
* **Phishing Attacks**: Users might be tricked into downloading compromised software through phishing attacks that mimic legitimate communication from Telegram but direct users to download infected versions of the app.
* **Interception Before/After Encryption**: Even if end-to-end messages are used, threat actors could potentially intercept communications before they are encrypted or after they are decrypted by the recipient. This could be achieved through malware or spyware installed on the user’s device.

#### Mitigating These Risks

To mitigate risks associated with using Telegram, always ensure that the app is downloaded from official and reputable sources and keep it updated to protect against vulnerabilities and exploits. Additionally, use Telegram's "secret chats" feature, which offers end-to-end encryption, to secure sensitive communications against unauthorized server access or compromised clients.

* **End-to-End Encryption:** "Secret Chats" provide protection against both compromised clients (to a degree) and server access, as the decryption keys are only stored on the devices involved in the chat.
* **Regular Updates and Vigilance**: Keeping the app updated and staying vigilant about where and how it is downloaded can protect against infected clients.&#x20;
* **Using Official Clients**: Using only official Telegram clients downloaded from trusted sources like the official website or recognized app stores is advised. These versions are more likely to have undergone rigorous security testing and updates.
* **Verifying Builds**: For enhanced security, users can verify the reproducibility of the build they are using. This process ensures that the application binary is compiled from the published source code, adding an extra layer of transparency and security.

## Guide

EFIM. (2022, July 30). _Telepathy: OSINT toolkit for investigating Telegram chats_. ESPY - Fraud Prevention. [https://espysys.com/blog/telepathy-osint-toolkit-for-investigating-telegram-chats/](https://espysys.com/blog/telepathy-osint-toolkit-for-investigating-telegram-chats/)

OS2INT (Director). (2022, July 31). _Extracting and analysing disinformation data from Telegram with Telepathy_. [https://youtu.be/AiZ2LRWzYGI](https://youtu.be/AiZ2LRWzYGI)

Lerner, E. (2024, March 31). 🌟✨ Tutorial about the Best 7 Telegram Channels in 2024 & Must-Follow Top Search Bots 🤖🔍. _Medium_. [https://medium.com/@efim.lerner/tutorial-about-the-best-7-telegram-channels-in-2024-must-follow-top-search-bots-76421bf29e17](https://medium.com/@efim.lerner/tutorial-about-the-best-7-telegram-channels-in-2024-must-follow-top-search-bots-76421bf29e17)

OS2INT (Director). (2022, October 16). _Geo-locating Telegram users with Telepathy_. [https://www.youtube.com/watch?v=g\_kwzpIsB1E](https://www.youtube.com/watch?v=g\_kwzpIsB1E)

Cogliati, B., Ethan, J., Jha, A., 2023. Subverting Telegram’s End-to-End Encryption. ToSC 5–40. [https://doi.org/10.46586/tosc.v2023.i1.5-40](https://doi.org/10.46586/tosc.v2023.i1.5-40)

## Tool provider

Jordan Wildon

(Pro Version: Prose Ltd; [https://telepathydb.com/](https://telepathydb.com/))

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |

