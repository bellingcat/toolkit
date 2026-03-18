---
updated: '2026-02-01'
description: >-
  An archiving tool that tracks online activities and preserves essential
  information about the web pages researchers visit.
---

# Hunchly

## URL

[https://www.hunch.ly/](https://www.hunch.ly/)

## Description

Hunchly is an online investigation tool that automatically captures and documents every web page a researcher visits. It eliminates the need for manual note-taking, screenshots, or URL logging.

This tool includes search functionality and history filtering of captured pages. Hunchly allows researchers to locate specific information within their saved web pages. Users can set keywords, what Hunchly calls "selectors", to track and record across web pages and can categorize these pages with tags. Hunchly supports regular expression (Regex) selectors. Users can also mark pages as important to review later or prioritize them in searches and when filtering results.

Hunchly creates a transparent audit trail, which is essential for ensuring the credibility and admissibility of collected data in professional and legal settings.

Available as a Google Chrome plugin, Mobile application, or [using Hunchly Cloud](https://youtu.be/j2-F_ywtOjU?si=lF7aoNRqNG3ORE5S) depending on your chosen plan.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

Hunchly offers [a range of pricing options](https://hunch.ly/pricing), starting with a **free 30-day trial** that provides access to all features without requiring a credit card. After the trial, the pricing for classic is on their page, but other plans requires contacting their sales team. The different plans are structured as follows:

* **Classic Subscription**: Priced per year, suitable for use on multiple computers or virtual machines by a single user.
* **Cloud Subscription**: from you browser you can investigate in a similar way as from a virtual machine, with encrypted cloud storage provided by Kasm Workspaces. Storage is limited to 15GB on your account in the Hunchly cloud. (It is possible to convert from classic to Cloud with help of their team).&#x20;
* **Discounts**: Teams, organizations, educational institutions, non-profit organizations, and students are eligible for special discounts.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

Hunchly is designed to be user-friendly, with straightforward installation and operation. However, advanced features and complex investigations may require additional learning or technical skills. Overall, Hunchly is accessible for most users, especially with the support and documentation provided.

## Requirements

For the free trial, Hunchly requires a first and last name, email address, and industry selection.

For the paid tiers, Hunchly requires an email, first and last name, billing address, and credit card information.

Hunchly _requires_ the following minimum system specifications:

* Windows 10 - 64-bit required
* macOS 15 (Sequoia or newer)
* Ubuntu 22.04 LTS or newer (other Debian based distros will likely work without issue)
* Chromium browser able to run a Hunch.ly Plug-in (unless you have a Cloud Subscrition).

Hunchly _recommends_ the following minimum system specifications:

* 16GB of RAM or more
* SSD storage for case data
* A modern multicore CPU (Intel Core i5/Core i7, Ryzen 3/5/7, Apple Silicon)

## Limitations

Hunchly highlights potential evidentiary challenges:

* **Requires Chrome(ium):** Depending on your subscription, Hunchly requires installation on your computer, but it's usage relies on a Chrome Plug-in to be used.
* **Memory Usage:** As default, Hunchly stores data locally, you will need to allocate space on you own HD (or external HD) dedicated to all captures. Longer investigations will generate a bigger volume of data. Hunchly Cloud can be set up
* **Timestamp Mismatches**: Differences in time zones or delays in processing can cause discrepancies between the time recorded in Hunchly and the actual time of data capture, complicating evidence validation.
* **Non-Continuous Page IDs**: Universal Page IDs across multiple cases can result in gaps or non-sequential IDs in the evidence record, which may require additional explanation in legal proceedings.
* **Hash Integrity Issues**: Although Hunchly uses SHA-256 hashing to verify data integrity, this does not prevent tampering before the MHTML capture is reviewed. Modified content can be re-hashed to appear legitimate. Hunchly advises using additional verification methods such as GPG signatures, comparing live or archived web content, or securing original material through legal avenues to combat potential tampering.
* **GPG Signing Vulnerabilities**: Technically adept investigators can compromise locally generated GPG keys, allowing tampering and re-signing of evidence while maintaining a valid appearance. Additional verification methods include comparison with live or archived content.
* **Static Captures**: Hunchly will only capture information you have seen on the page, but not in motion. Videos will be archived as screenshots, and you might need other tools to download the full content (you can upload them to your Hunchly case afterwards).

## Integrations

* **Maltego Transforms:** The Hunchly API enables users to pull Hunchly data into other software tools such as Maltego. We have developed transforms and a configuration file for Maltego users so they can easily pull Hunchly data.&#x20;
* **Data Forwarding:** Hunchly has the ability to forward captured data to an HTTP(S) endpoint of your choosing. Hunchly will then POST JSON data to that endpoint for each new page that is captured. This can enable teams to store content in a central database such as Elasticsearch or Splunk as well as being able to perform analysis on the data across an entire team or do full text keyword searches.

## Ethical Considerations

Ethical considerations when using Hunchly include:

* **Privacy and Consent**: Hunchly users should ensure that data collection complies with privacy laws and that consent is obtained when necessary.
* **Data Integrity**: To ensure the accuracy of evidence, Hunchly users must maintain the original state of collected data without alteration.
* **Transparency**: It's important for users to document and disclose how data is collected and processed using Hunchly in investigations.
* **Accountability**: Hunchly users are responsible for ethically using the tool to avoid misusing data or impacting case outcomes.
* **Security**: Users must protect sensitive information against unauthorized access and breaches.

## Guide

{% embed url="https://support.hunch.ly/" %}

Hunchly Webinars are available on the [Hunchly YouTube channel](https://www.youtube.com/c/hunchly)

## Tool provider

Hunchly

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                           |
| ----------------------------------------- |
| Felipe Simoni (Bellingcat Volunteer Team) |
