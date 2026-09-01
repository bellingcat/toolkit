---
updated: '2026-08-31'
description: >-
  An archiving tool that tracks online activities and preserves essential
  information about the web pages researchers visit.
---

# Hunchly

## URL

[https://www.hunch.ly/](https://www.hunch.ly/)

## Description and common uses

Hunch.ly is an archiving tool used mostly for two things: organizing and keeping the information you find while you investigate, and to create a transparent audit trail for building credibility of collected data.

For the first common use, while short investigations don't usually produce information in large quantities, having your archive well organised might not be of great impact. However, as the complexity of the cases increase, keeping an organized archive will impact how long it takes for you to search through the data and give you a more useful data-set for different analysis.\
_**Use Case:** Think of an investigation of a network of individuals, and how useful it might be to be able to quickly find all instances a social media handle showed up during a specific week._

For the second common use, not every investigation would require an audit trail, but as you investigate, posts might get deleted, edited or websites might be taken down, and this will undermine the credibility of what you produced. Screen shots can help, but providing cryptographic hashes and digital signatures (to confirm the documents were not altered) render more weight to your credibility.\
_**Use Case:** in legal context, the admissibility of documents depends on authenticity, chain of custody, relevance, and procedure (see the_ [_Berkeley Protocol_](https://www.ohchr.org/en/publications/policy-and-methodological-publications/berkeley-protocol-digital-open-source) _for more information). No single tool would guarantee the admissibility, but a well organized archive with cryptographic hashes and digital signatures can be of good use when it comes to that._

## How it works

Hunch.ly is a desktop application that works connected to a browser extension for desktop workflows. Alternatively, you can use a browser-based workspace with [Hunchly Cloud](https://youtu.be/j2-F_ywtOjU?si=lF7aoNRqNG3ORE5S) (plan-specific).

Once you have your license, the desktop app installed and the Google Chrome Plug-in activated, Hunch.ly will capture and document every webpage you click through and save it to an assigned case in the desktop app.

While in the past investigators would collect evidence in boxes and pile them up in a storage room, Hunch.ly reduces the need for manual note-taking, screenshots, or URL logging. This information collected will be searchable, what can save you a lot of time. You can filter captured pages based on URL and title. You can also annotate images, and make notes to the content of each page, making it easier to find it in the future. No storage room diving needed.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

Hunch.ly offers [a range of pricing options](https://hunch.ly/pricing), starting with a **free 30-day trial** that provides access to all features without requiring a credit card. After the trial, the pricing for classic is on their page, but other plans requires contacting their sales team. The different plans are structured as follows:

* **Classic Subscription**: Priced per year, suitable for use on multiple computers or virtual machines by a single user.
* **Cloud Subscription**: you can investigate from your browser just like in a virtual machine. Cloud storage provided by Kasm Workspaces is encrypted and storage limited to 15GB.
* **Different offers**: [different offers](https://hunch.ly/pricing) on bulk purchases, or if you are a business or government agency that is exempt from sales tax. In both cases you need to contact their sales team.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

Hunch.ly is designed to be user-friendly, with straightforward installation and operation. However, advanced features such as [RegEx](https://support.hunch.ly/article/114-selectors-using-regular-expressions-regex) Search, [Hunchly-Maltego transforms](https://support.hunch.ly/article/47-1-using-the-hunchly-maltego-transforms), [handling Tor Hidden Services](https://www.youtube.com/watch?v=Y8Add9bq1a8), or investigations with multiple users may require additional learning or technical skills. Overall, Hunch.ly is accessible for most users, especially with the support and documentation provided.

## Requirements

For the free trial, Hunchly requires a Maltego ID, first and last name, email address, and industry selection.

For the paid tiers, Hunchly requires an email, first and last name, billing address, and credit card information.

Hunchly [_requires_](https://support.hunch.ly/article/79-what-are-the-system-requirements-for-hunchly) the following minimum system specifications:

* Windows 10 - 64-bit required
* macOS 15 (Sequoia or newer)
* Ubuntu 22.04 LTS or newer (other Debian based distros will likely work without issue)
* 8GB RAM
* 20GB of available disk space for case data
* Chromium browser able to run a Hunch.ly Plug-in.

Hunchly _recommends_ the following minimum system specifications:

* 16GB of RAM or more
* SSD storage for case data
* A modern multicore CPU (Intel Core i5/Core i7, Ryzen 3/5/7, Apple Silicon)

## Limitations

Hunchly highlights potential evidentiary challenges:

* **Memory Usage:** As default, Hunchly stores data locally, you will need to allocate space on your own HD (or external HD) dedicated to all captures. Longer investigations will generate a bigger volume of data. Alternatively, you can pay for [Hunchly Cloud](https://hunch.ly/pricing).
* **Timestamp Mismatches**: Delays in processing can cause discrepancies between the time recorded in Hunchly and the actual time of data capture, complicating evidence validation due to slight imprecisions.
* **Non-Continuous Page IDs**: Universal Page IDs across multiple cases can result in gaps or non-sequential IDs in the evidence record, which may require additional explanation in legal proceedings. This is not usually an issue for investigations with no application for judicial contexts.
* [**Hash Integrity Issues**:](https://support.hunch.ly/article/52-2-content-photo-and-attachment-hashing) Although Hunchly uses SHA-256 hashing to verify data integrity, this does not prevent tampering before the MHTML capture is reviewed. Modified content can be re-hashed to appear legitimate. Hunchly advises using additional verification methods such as GPG signatures, comparing live or archived web content, or securing original material through legal avenues to combat potential tampering.
* [**GPG Signing Vulnerabilities**](https://support.hunch.ly/article/53-3-gpg-signing): Technically adept investigators can compromise locally generated GPG keys, allowing tampering and re-signing of evidence while maintaining a valid appearance. Additional verification methods include comparison with live or archived content.
* **Static Captures**: Hunchly will only capture information you have seen on the page, but not in motion. Videos will be archived as screenshots, and you might need other tools to download the full content (you can upload them to your Hunchly case afterwards).
* **Mac computers using Intel CPUs**: Hunchly support for Intel-based Macs will end in September 2027. See [this page](https://support.hunch.ly/article/126-sep-2027-support-ending-for-intel-based-macs) check if your Mac will still be supported.&#x20;

## Integrations

When you are working on investigations that result in large quantities of data, you might want to use other tools to process that into more useful information (think of turning a contacts list or a chain of tweets into a network map, for example). Hunch.ly is a good tool to collect the data and organize it, but if you want to integrate your Hunch.ly collections to other tools, there are some integrations that can make your life easier:

* **Maltego Transforms:** since Maltego Technologies acquired Hunch.ly, the process became more straightforward. Your Hunch.ly data can be transferred into Maltego, for further processing. Here you can find a [Maltego transforms and a configuration](https://support.hunch.ly/article/47-1-using-the-hunchly-maltego-transforms) guide for Maltego users.
* **Data Forwarding:** Hunch.ly stores evidence locally, but if you would like to use your Hunch.ly collected data in another database software or platform (such as Elasticsearch or Splunk) or to perform analysis on the data across an entire team, you can use this feature to forward captured data to an HTTP(S) endpoint of your choosing. You can find [configuration instructions here](https://support.hunch.ly/article/67-2-hunchly-data-forwarding).

## Ethical Considerations

Ethical considerations when using Hunch.ly include:

* **Privacy and Consent**: Hunch.ly users should ensure that data collection complies with privacy laws and that consent is obtained when necessary.
* **Data Integrity**: To ensure the accuracy of evidence, Hunch.ly users must maintain the original state of collected data without alteration.
* **Transparency**: because OSINT investigations are open-source by nature, to trace each step of the investigation is a way to make it transparent. Transparency makes room for the public to verify the information, and demonstrates no unethical methods were used for the collection.
* **Accountability**: Hunchly users are responsible for ethically using the tool to avoid misusing data or impacting case outcomes.
* **Security**: Users must protect sensitive information against unauthorized access and breaches.

## Guide

Hunch.ly has a [Support page](https://support.hunch.ly/) in which you can find multiple articles in case you want to know about Getting Started, Hunchly Cloud, Hunchly Evidence Guide, Hunchly Mobile, Page Compatibility, Dark Web, and more. Additionally, you can find webinars available on the [Hunch.ly YouTube channel](https://www.youtube.com/c/hunchly).

## Tool provider

As of 2025, Hunch.ly was acquired by 2018-2026 by Maltego Technologies GmbH, Munich, Germany.

## Similar Tools:

* Auto Archiver: Bellingcat's tool to automatically archive social media posts, videos, and images. Free and Open-Source. Available on [GitHub](https://bellingcat.gitbook.io/toolkit/more/all-tools/auto-archiver).
* [Maltego Graph](https://bellingcat.gitbook.io/toolkit/more/all-tools/maltego): As a Maltego ID is now required to download Hunch.ly, you might want to check our Toolkit entry for Maltego Graph.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                           |
| ----------------------------------------- |
| Felipe Simoni (Bellingcat Volunteer Team) |
