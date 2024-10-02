---
description: >-
  Omnivore is a read-it-later app designed to help users organize and consume
  their reading materials across various platforms.
---

# Omnivore

## URL

[https://omnivore.app](https://omnivore.app)

## Description

Omnivore is a read-it-later open source application designed to help users save and organize articles, videos, and other digital content for future viewing. Unlike traditional bookmarking tools, Omnivore offers advanced features such as offline access, text highlighting, text to speech, and categorization options to enhance the reading experience. Omnivore allows users to easily save content from anywhere on the web and access it at their convenience. Available plugins allow to import Omnivore highlights into [Logseq](https://bellingcat.gitbook.io/toolkit/more/all-tools/logseq) and [Obsidian](https://bellingcat.gitbook.io/toolkit/more/all-tools/obsidian).

The example below shows highlighting and tagging an article in the Omnivore web interface:

<figure><img src=".gitbook/assets/Screenshot 2024-06-25 at 10.43.56 AM.png" alt="Screenshot of Omnivore showing highlighting and tagging of a saved article. The headline at the top is highlighted in yellow and a text box has been enabled to allow tagging."><figcaption><p>Screenshot of Omnivore showing highlighting and tagging of a saved article. </p></figcaption></figure>

### Use Cases

Omnivore offers several use cases for open source researchers, including:

* **Resource Collection:** Facilitates the gathering of articles, papers, and videos from various sources into a single, organized space for easier access.
* **Annotation and Highlights:** Allows for the marking of key points and annotations within saved content, making it simpler to review notes and important information.
* **Offline Access:** Enables the review and study of saved material without an internet connection.
* **Categorization:** Assists in organizing research materials into categories or projects, streamlining the research process.
* **Collaboration:** Though not explicitly mentioned, features like exporting or sharing annotated articles could support collaborative research efforts by sharing findings with peers or advisors.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Currently free with plans to introduce paid add-ons.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

Omnivore is available on the following platforms:

* [iOS](https://omnivore.app/install/ios)
* [macOS](https://omnivore.app/install/macos)
* [Safari Extension](https://omnivore.app/install/safari)
* [Android (preview release)](https://omnivore.app/install/android)
* [Chrome Extension](https://omnivore.app/install/chrome)
* [Firefox Extension](https://omnivore.app/install/firefox)
* [Edge Extension](https://omnivore.app/install/edge)

## Limitations

The Omnivore read-it-later app has several limitations that users should be aware of before deciding to incorporate it into their workflow:

* **Offline Access and Self Hosting:** Unlike some of its competitors, Omnivore offers limited offline access to saved text content but not images as this [Discord post](https://discord.com/channels/844965259462311966/1203082281506574426/1264231179809460265) makes clear. It is also possible to self-host the application, see: [Deploying a minimal self-hosted Omnivore using fly.io and bonsai.io](https://blog.omnivore.app/p/deploying-a-minimal-self-hosted-omnivore).
* **File Types:** Omnivore primarily supports saving web pages and articles. It has limited support for other content types like PDFs or multimedia files, which can be a drawback for users looking to save a variety of content. There is an outstanding issue called [Support for local files and simple notes](https://github.com/omnivore-app/omnivore/issues/3919) which may implement more file types in the future.
* **Integration with Other Apps:** There is limited integration with third-party apps and services. For example, users looking to export their saved items to note-taking apps or reference management tools might find this challenging. The [documentation](https://docs.omnivore.app/) provides information on supported integrations including [Logseq](https://logseq.com/), [Obsidian](https://obsidian.md/), [Pocket](https://getpocket.com/home), [Readwise](https://readwise.io/) and [Notion](https://www.notion.so/).&#x20;
* **Storage Limit:** While Omnivore offers a generous storage limit for saving articles and web pages, it imposes a cap on the number of items you can store, which might be a limitation for heavy users or researchers. According to the account page of the app library is initially limited to 50000 items. This is said to be a soft limit that support can raise. There is a 10mb limit on files according to [Omnivore's Discord](https://discord.com/channels/844965259462311966/943967463299764314/1118765195393769492).

## Ethical Considerations

When using the Omnivore read-it-later app, several ethical considerations come into play that users should be aware of:

* **Privacy Concerns:** The way Omnivore collects, uses, and shares user data is of paramount importance. Given the nature of saving and organizing web content, users should understand what data the app collects and how it's used, especially in relation to reading habits and saved content. Omnivore's [Privacy Policy](https://docs.omnivore.app/about/privacy-policy.html) provides more detail on this.
* **Data Security:** With the storing of personal and potentially sensitive information, the security measures Omnivore implements to protect user data from unauthorized access or breaches is an ethical concern. Users should be vigilant about the app's security protocols and updates. As an open source application Omnivore documents the application's [Security policy](https://github.com/omnivore-app/omnivore?tab=security-ov-file#readme), the specifics of how database and cloud security is implemented is less clear. &#x20;

## Guide

To effectively use Omnivore, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* [**Omnivore documentation**](https://docs.omnivore.app/)**:** official help documentation.

**Tutorials and Articles**

* Birchler, M. (2024) ‘Omnivore is a Really Good, Completely Free Read Later App’, _The Sweet Setup_, 19 February. Available at: [https://thesweetsetup.com/omnivore-is-a-really-good-completely-free-read-later-app/](https://thesweetsetup.com/omnivore-is-a-really-good-completely-free-read-later-app/) (Accessed: 12 April 2024).
* Omnivore (2021) _Omnivore and Logseq: A Complete Guide_. Available at: [https://blog.omnivore.app/p/omnivore-and-logseq-a-complete-guide](https://blog.omnivore.app/p/omnivore-and-logseq-a-complete-guide) (Accessed: 12 April 2024).

**Video Tutorials**

* _How I use Omnivore and Logseq for reading articles_ (2022). Available at: [https://www.youtube.com/watch?v=Cc6DbBtOs14](https://www.youtube.com/watch?v=Cc6DbBtOs14) (Accessed: 12 April 2024).
* _Omnivore Tutorial + Top 3 Features - YouTube_ (no date). Available at: [https://www.youtube.com/watch?v=zmxonOj87P0](https://www.youtube.com/watch?v=zmxonOj87P0) (Accessed: 12 April 2024).
* _Obsidian & Omnivore Plugin | Open Source Read-It-Later Solution_ (2024). Available at: [https://www.youtube.com/watch?v=XoOgwbbMfN4](https://www.youtube.com/watch?v=XoOgwbbMfN4) (Accessed: 12 April 2024).

#### Developer Resources

* [https://github.com/omnivore-app](https://github.com/omnivore-app)

**Community and Support**

* **Chat**: Use the Feedback menu item in the app menu to access support.
* [**Discord Server**](https://discord.gg/h2z5rppzz9): community announcements and support.

## Tool provider

Omnivore [https://omnivore.app/](https://omnivore.app/) - United States and Singapore

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                  |
| -------------------------------- |
| Paul - Bellingcat Volunteer Team |
|                                  |

