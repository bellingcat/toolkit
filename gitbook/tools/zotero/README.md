---
updated: '2026-06-29'
description: >-
  A tool for collecting, organizing, annotating, citing, and sharing research
  sources.
---

# Zotero

## URL

[https://www.zotero.org](https://www.zotero.org)

Current version: Zotero 9.0.5 (official changelog release date: 2026-06-10; GitHub tag date: 2026-06-12) Last checked: 2026-06-29

## Description

Zotero is a free, open‑source reference manager for **Windows, macOS, Linux, iOS, and Android** that helps you collect, organize, annotate, cite, and share research materials. A desktop app works with browser “Connectors” (Chrome, Firefox, Edge, Safari) to save sources and snapshots; a built‑in reader supports **PDF/EPUB/HTML** annotation with notes that can be cited into Word, LibreOffice, and Google Docs. Libraries sync across devices via a Zotero account; attachments can sync via Zotero Storage or **WebDAV**. Group libraries support collaborative OSINT workflows and shared source curation.

{% hint style="info" %}
**These examples assume you have created a free account and installed Zotero, as well as the browser plugin, on your system.**
{% endhint %}

### Phase A - Research

* **Collecting Items**
  * When you visit a web page with recognized bibliographic information (e.g., a journal article), Zotero displays an icon (paper, folder, or book) in your browser’s toolbar. Clicking it **captures** metadata and (if available) a full-text PDF automatically.
  * Supports collecting a wide range of sources, including academic papers, newspaper articles, websites, YouTube videos, and code repositories.
* **Organizing Your Research**
  * Add **tags** or create **collections** to group related items (e.g., by project or topic).
  * Bulk-edit metadata or manually correct fields if Zotero’s automatic capture is incomplete.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (4) (3).png" alt=""><figcaption><p>Search results at scholar.google.nl using the search term "Bellingcat"</p></figcaption></figure></div>

This is a review article of Eliot Higgins' book. We click on it.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (6) (2).png" alt=""><figcaption></figcaption></figure></div>

We want to save the review for later referencing. If someone asks for our opinion about the book, we now have evidence to back it up. (The review says it's good.)

### Phase B - Archiving

* **Snapshots & Attachments**
  * **Snapshots** – Save a local **HTML snapshot** of any webpage (static copy of source & assets)
  * **Attachments** – Drag‑and‑drop or auto‑download PDFs, images, and other files.
* **Adding Full-Text PDFs**
  * Zotero can auto-download PDFs if it detects open-access links. Otherwise, you can attach PDFs manually.
  * Annotations can be made directly on PDFs, EPUBs, and saved webpage snapshots within the current Zotero desktop reader.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (8) (1).png" alt=""><figcaption><p>My browser during the search results.</p></figcaption></figure></div>

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (10) (4).png" alt=""><figcaption><p>My browser on the page containing the review.</p></figcaption></figure></div>

Sleuths among you may have noticed that one icon in particular has undergone a change. The Zotero icon has been changed from a folder to a paper. This means that Zotero has identified this as, you guessed it, a paper.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (11) (2).png" alt=""><figcaption><p>Upon clicking the 'paper' icon, this box appears, indicating that the paper was sucessfully retrieved and archived.</p></figcaption></figure></div>

When you click the icon, you'll see identified metadata, and you can select a folder to archive your paper in. You'll also notice that a full-text PDF is available and has been conveniently attached to your entry.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (12) (2).png" alt=""><figcaption><p>A screenshot of my Zotero window where you can find the review we just archived for future reference.</p></figcaption></figure></div>

Huzzah! Prolific researchers like us can't write about a review of the book without reading the book, though, can we? DEFINITELY good that we installed the browser plugin. It's totally possible to fill out these fields by hand.

### **Phase C - Capturing Book or Review Metadata**

* Zotero recognizes many publisher pages and library catalogs (Google Books, Amazon, etc.).
* Fields such as Author, Title, Publication Date, and Publisher are automatically populated.
* For OSINT, this can extend to recognized metadata from news sites, specialized databases, or blog platforms.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (14) (2).png" alt=""><figcaption></figcaption></figure></div>

Oh, it was right there? Wait, but these lead to Google Books...

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure></div>

Noticed something? Correct, Zotero knows we're looking at a page that contains book metadata.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (18) (2).png" alt=""><figcaption></figcaption></figure></div>

And, obviously, we also grabbed the other one. Notice the Item Type change?

### Phase D - Citing

* Use “**Create Bibliography from Item**” to quickly generate citations or reference lists in styles like APA, MLA, Harvard, etc.
* Install Zotero’s **Word Processor Plugin** (for Word, LibreOffice, or Google Docs) to insert citations as you write.
* Multiple items can be selected to create a unified bibliography in one go.

**In-Text Citations and Bibliographies**\
OK, we're now at the point where we're starting to build an archive of books like Higgins (2021) or...

Higgins, E. (2021). _We Are Bellingcat: Global Crime, Online Sleuths, and the Bold Future of News_. Bloomsbury Publishing USA.

How to cite neatly and without effort? "Create Bibliography from Item" is one way.

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (21) (1).png" alt=""><figcaption></figcaption></figure></div>

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (22) (1).png" alt=""><figcaption></figcaption></figure></div>

Depending on your field, preference, or journal, you pick a Citation Style. The above will create an in-text citation like (Higgins, 2021).

<div data-full-width="false"><figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure></div>

While this creates, you guessed it:

\
Sullivan, J. P. (2022). \[Review of _Review of We Are Bellingcat: Global Crime, Online Sleuths, and the Bold Future of News_, by E. Higgins]. _Journal of Strategic Security_, _15_(3), 138–141.

Now, you're ready to write your paper. A Word plugin exists.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

### Examples 2 ... n

**Also works on news articles.**

<figure><img src="../../.gitbook/assets/image (26) (2).png" alt=""><figcaption></figcaption></figure>

Mind, though, that if you want an excellent screen capture to accompany your reference, you'll need to scroll down after clicking the icon or wait a couple of seconds, depending on whether or not the content is dynamically generated. Just wait or scroll until the "Snapshot" is not greyed out anymore.

<figure><img src="../../.gitbook/assets/image (27) (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (28) (1).png" alt=""><figcaption></figcaption></figure>

Oh, and if you select multiple entries, the bibliography will also contain multiple references:

\
\&#xNAN;_Bellingcat-Analyst Nick Waters: Kriegsverbrechen in der Ukraine: „Unsere Beweise müssen vor Gericht halten“_. (2024, March 22). [https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht](https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht)

_Gefälschter BBC-Bericht: Bellingcat berichtete nicht über Waffenschmuggel der Ukraine an Hamas_. (n.d.). Retrieved August 2, 2024, from [https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/](https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/)

Here, you also see that it sometimes doesn't work correctly. You can easily go back to the software and make manual changes.

<figure><img src="../../.gitbook/assets/image (30) (1).png" alt=""><figcaption></figcaption></figure>

Knes, D. (2024, March 22). _Bellingcat-Analyst Nick Waters: Kriegsverbrechen in der Ukraine: „Unsere Beweise müssen vor Gericht halten“_. [https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht](https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht)

Max, B. (2023, October 23). _Gefälschter BBC-Bericht: Bellingcat berichtete nicht über Waffenschmuggel der Ukraine an Hamas_. [https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/](https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/)

### **It also works on Videos.**

<figure><img src="../../.gitbook/assets/image (31) (1).png" alt=""><figcaption></figcaption></figure>

Bellingcat. (2024, February 9). _Command Line Fundamentals: Bellingcat Tech Series_ \[Video recording]. [https://www.youtube.com/watch?v=B3gm-ud91v0](https://www.youtube.com/watch?v=B3gm-ud91v0)

**Find out what else it can archive!**

### Zotero as an archive tool & the Berkeley Protocol

Proper documentation is essential if the material is used in legal, academic, or policy advocacy contexts. [The Berkeley Protocol](https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf) outlines how OSINT data should be handled to be admissible in court (at least in the context of international proceedings).

* **Berkeley Protocol Alignment**: Properly stored OSINT data improves evidentiary value in legal and policy contexts. Zotero’s ability to capture full snapshots, along with timestamps, aids transparency and reproducibility.
* **Local & Cloud Sync** – Data stays local unless you enable sync. When you do, file sync traffic is encrypted in transit, and files in new accounts are AES‑256 encrypted at rest on Zotero’s AWS servers (not end‑to‑end).
* **Limitations**:
  1. No native encryption of local files.
  2. No automatic hashing of archived material.
  3. No password protection built in to the Zotero desktop app.

#### Recommended Best Practices

* **Hashing**: Immediately calculate cryptographic hashes (e.g., SHA-256) of downloaded files and store them as part of each Zotero entry’s notes or attachments. This helps verify data integrity if later questioned.
* **Encrypted Backups**: Periodically back up your Zotero library to an encrypted disk or location.
* **Export Regularly**: Keep dated exports (e.g., JSON or Zotero RDF) that can be re-imported elsewhere if needed.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Zotero’s desktop app and basic use are free. A free Zotero account includes unlimited syncing of library items and notes and 300 MB of cloud attachment storage. Paid Zotero Storage tiers are 2 GB for $20/year, 6 GB for $60/year, and Unlimited for $120/year. Group-library file storage draws from the group owner’s storage account. Zotero also lists separate storage plans for labs and institutions.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

GUI‑first and beginner‑friendly. Most users only install the desktop app and a browser connector; citing requires a supported word processor. Optional features (custom translators, API use, WebDAV) benefit from intermediate technical comfort.

## Requirements

* Zotero 9 desktop app: macOS 10.15 or later, Windows 10 or later, or Linux with the same library requirements as Firefox 140.
* Zotero Connector for desktop browser capture: Chrome or Edge current Stable/Extended Stable, Firefox 115 or later, or Safari on macOS 11 Big Sur or later. The Safari connector is bundled with Zotero.
* A Zotero account is optional for local-only use, but required for Zotero sync and group-library workflows.
* Zotero file syncing can use Zotero Storage. Personal-library files can also use WebDAV, a file-sync method provided by some institutions or storage services. Group-library files cannot use WebDAV.
* Supported word processors vary by platform; check Zotero’s system requirements before relying on Word or LibreOffice integration.

### Strengths & Limitations

#### Strengths

* **Versatility**: Suited for both academic citations and OSINT archiving.
* **Automation**: Automatically captures metadata, attaches PDFs, and organizes items for quick retrieval.
* **Citation Management**: Word processor integration simplifies referencing in papers or reports.
* **Open Source & Free**: Broad community support, frequent updates, and no subscription fee.

#### Limitations

* **Zotero is useful for organizing and citing OSINT source material, but it is not a forensic archive or evidence-management system.**
  * **Snapshot limits:** Zotero snapshots may miss dynamic content, meaning content that changes or loads after the page opens, as well as logged-in content, embedded media, or material that loads only after scrolling. Check every saved item before relying on it.
  * **No native file hashing:** Zotero does not create or manage hashes, meaning digital fingerprints used to check that a file has not changed. If integrity matters, calculate hashes outside Zotero and store them with the item.
  * **No default local encryption:** data and attachments saved on your device are not encrypted by Zotero itself. Use full-disk encryption or an encrypted storage location for sensitive work.
  * **Sync privacy:** if you enable Zotero sync, library data goes to Zotero servers. Attachment files also go to Zotero Storage unless you use WebDAV for personal-library files. Group-library files use Zotero Storage and cannot use WebDAV.
  * **Descriptive-field cleanup**: automatic capture can create incomplete or incorrect title, author, date, URL, or access-date fields, especially on news sites, social platforms, dynamically generated pages, or sites without a Zotero translator. Manually verify important entries.
  * **Free-account storage risk**: Zotero’s terms allow files in inactive free accounts to be deleted after 90 days without file synchronization. Do not use free Zotero Storage as the only archive for important material.

### Additional Tips

* **Waiting for Snapshot**: If saving a dynamically generated page, wait until Zotero’s connector icon indicates that a full snapshot is available. Scrolling or a short pause may be necessary.
* **Group Libraries**: Collaborate with team members by creating a shared project library.
* **Custom Citation Styles**: Install or modify CSL (Citation Style Language) files for specialized formatting.

## Ethical Considerations

Ensure proper citation of sources to avoid plagiarism. Be cautious with sensitive data and respect copyright laws when sharing materials.

**Before syncing sensitive OSINT material, decide whether source names, URLs, notes, snapshots, and attachments can safely be stored on third-party servers.** Zotero is local by default, but syncing sends library data to Zotero servers; file syncing sends attachments to Zotero Storage unless you use WebDAV for personal-library files. Group libraries require Zotero sync, and group attachments use the group owner’s Zotero Storage, so agree on access controls and retention before inviting collaborators.

Do not treat Zotero captures as proof on their own. Keep original URLs, access dates, notes on how you found the material, and separate hashes or archived copies for high-risk evidence. Check whether local law, organizational policy, and source-safety rules allow you to store snapshots, PDFs, or media files, especially when content includes personal information or material from vulnerable sources.

## Guide

* **Quick Start Guide** (official). [zotero.org](https://www.zotero.org/support/quick_start_guide)
* **System requirements & plugin support** (official). [zotero.org](https://www.zotero.org/support/system_requirements)
* **Connectors: how saving works** (official doc). [zotero.org](https://www.zotero.org/support/connector)
* **Zotero for Android announcement** (official blog, 2025‑06‑05).
* Quinn, T. (2024). **Research Guides: Zotero: A Beginner’s Guide**: About Zotero. [https://libguides.unm.edu/Zotero/About](https://libguides.unm.edu/Zotero/About)
* **Zotero for Android** announcement (official blog, 2025‑06‑05). [zotero.org](https://www.zotero.org/blog/zotero-for-android/)

Quinn, T. (2024). _Research Guides: Zotero: A Beginner’s Guide: About Zotero_. [https://libguides.unm.edu/Zotero/About](https://libguides.unm.edu/Zotero/About)

## Similar Tools

* [Mendeley Reference Manager](https://www.elsevier.com/products/mendeley): another free reference manager with web and desktop workflows. Use Zotero when you want an open-source tool and stronger local-first control; consider Mendeley if a team already uses Elsevier/Mendeley workflows.
* [EndNote](https://endnote.com/buy/): a commercial reference manager common in universities and libraries. Use it when your institution provides a license or requires EndNote workflows; use Zotero when cost, open-source code, or cross-platform browser capture matter more.
* [Paperpile](https://paperpile.com/): a web-first reference manager built around browser and Google Docs workflows. Use it when your writing workflow is mainly in Google Docs; use Zotero when you need a free local desktop library, WebDAV options, or open-source tooling.

## Tool provider

Zotero is a project of[ Digital Scholar](https://digitalscholar.org/) / Corporation for Digital Scholarship, a U.S. nonprofit that develops and supports open-source infrastructure for research and cultural heritage work. Its current public contact address is in Falls Church, Virginia, USA.

**License:** **AGPL‑3.0** — see license text in the [Zotero repository](https://github.com/zotero/zotero); Zotero site states source is AGPLv3

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

Zotero’s privacy policy says the desktop app stores data locally by default and can be used without an account. If you use optional online services, Zotero may collect account data, synced library data, attachment files you upload, recent IP addresses (network addresses used when your device connects), and server logs. Website access logs are retained for 90 days; Zotero/server request logs are retained for up to 90 days; failed-save reports can include the URL, browser, and version information and are stored for up to one week. Backups of server data may be retained for up to six months.

You can reduce automatic communication with Zotero servers by leaving sync unconfigured or disabling automatic sync, broken translator reporting, translator/style update checks, and other automatic requests in Zotero preferences. Keep automatic update checks enabled unless you have a specific security reason to manage updates another way.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
