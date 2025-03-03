---
description: >-
  A tool for collecting, organizing, annotating, citing, and sharing research
  sources.
---

# Zotero

## URL

[https://www.zotero.org](https://www.zotero.org)

Current version: 7.0.13 (Feb 2025)

## Description

Zotero is a free, open-source reference management tool for macOS, Windows, Linux, and iOS. It enables you to collect, organize, annotate, cite, and share research materials. It works seamlessly with major web browsers (via a browser extension) and word processors (e.g., Microsoft Word, LibreOffice, Google Docs) to streamline research and citation workflows.

While Zotero primarily targets academic research, it can also serve as a powerful **archiving** tool for OSINT practitioners. You can save snapshots of web pages, attach PDFs or any other file types, and maintain detailed metadata—making it valuable for both scholarly and investigative needs.

{% hint style="info" %}
**These examples assume you have made a free account and installed Zotero and the browser plugin on your system.**
{% endhint %}

### Phase A - Research

* **Collecting Items**
  * When you visit a web page with recognized bibliographic information (e.g., a journal article), Zotero displays an icon (paper, folder, or book) in your browser’s toolbar. Clicking it **captures** metadata and (if available) a full-text PDF automatically.
  * Supports collecting a wide range of sources: academic papers, newspaper articles, websites, YouTube videos, code repositories, etc.
* **Organizing Your Research**
  * Add **tags** or create **collections** to group related items (e.g., by project or topic).
  * Bulk-edit metadata or manually correct fields if Zotero’s automatic capture is incomplete.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption><p>Search results at scholar.google.nl using the search term "Bellingcat"</p></figcaption></figure></div>

This is a review article of Elltio Higgins' book. We click on it.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure></div>

We want to save the review for later referencing. If somebody asks our opinion about the book, now we have evidence to back it up. (The review says it's good.)

### Phase B - Archiving

* **Snapshots & Attachments**
  * Save a **snapshot** of a webpage (including HTML source and a screenshot PDF).
  * Attach any relevant files to each entry (e.g., archived PDF, supporting images, source code).
* **Adding Full-Text PDFs**
  * Zotero can auto-download PDFs if it detects open-access links. Otherwise, you can attach PDFs manually.
  * Annotations can be made directly on the PDF within Zotero’s built-in reader (available in Zotero 7+).

<div data-full-width="false"><figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption><p>My browser during the search results.</p></figcaption></figure></div>

<div data-full-width="false"><figure><img src=".gitbook/assets/image (10).png" alt=""><figcaption><p>My browser on the page containing the review.</p></figcaption></figure></div>

Sleuths among you may have noticed that one icon in particular has changed. The Zotero icon has been changed from a folder to a paper. This means that Zotero has identified this as, you guessed it, a paper.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (11).png" alt=""><figcaption><p>Upon clicking the 'paper' icon, this box appears, indicating that the paper was sucessfully retrieved and archived.</p></figcaption></figure></div>

When you click the icon, you'll see identified metadata, you can select a folder to archive your paper in, and you notice that a full-text PDF is available and has conveniently already been attached to your entry.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (12).png" alt=""><figcaption><p>A screenshot of my Zotero window where you can find the review we just archived for future reference.</p></figcaption></figure></div>

Huzzah! Prolific researchers like us can't write about a review of the book without reading the book, though, can we? DEFINITELY good that we installed the browser plugin. It's totally possible to fill out these fields by hand.

### **Phase C - Capturing Book or Review Metadata**

* Zotero recognizes many publisher pages and library catalogs (Google Books, Amazon, etc.).
* Fields such as Author, Title, Publication Date, and Publisher are automatically populated.
* For OSINT, this can extend to recognized metadata from news sites, specialized databases, or blog platforms.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure></div>

Oh, it was right there? Wait, but these lead to Google Books...

<div data-full-width="false"><figure><img src=".gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure></div>

Noticed something? Correct, Zotero knows we're looking at a page that contains book metadata.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure></div>

And, obviously, we also grabbed the other one. Notice the Item Type change?

### Phase D - Citing

* Use “**Create Bibliography from Item**” to quickly generate citations or reference lists in styles like APA, MLA, Harvard, etc.
* Install Zotero’s **Word Processor Plugin** (for Word, LibreOffice, or Google Docs) to insert citations as you write.
* Multiple items can be selected to create a unified bibliography in one go.

**In-Text Citations and Bibliographies**\
OK, we're now at the point where we're starting to build an archive of books like Higgins (2021) or...

Higgins, E. (2021). _We Are Bellingcat: Global Crime, Online Sleuths, and the Bold Future of News_. Bloomsbury Publishing USA.

How to cite neatly and without effort? "Create Bibliography from Item" is one way.

<div data-full-width="false"><figure><img src=".gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure></div>

<div data-full-width="false"><figure><img src=".gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure></div>

Depending on your field, preference, or journal, you pick a Citation Style. The above will create an in-text citation like (Higgins, 2021).

<div data-full-width="false"><figure><img src=".gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure></div>

While this creates, you guessed it:

\
Sullivan, J. P. (2022). \[Review of _Review of We Are Bellingcat: Global Crime, Online Sleuths, and the Bold Future of News_, by E. Higgins]. _Journal of Strategic Security_, _15_(3), 138–141.

Now, you're ready to write your paper. A Word plugin exists:\\

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

### Examples 2 ... n

**Works also on news articles.**

<figure><img src=".gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

Mind, though, that if you want an excellent screen capture to accompany your reference, you'll need to scroll down after clicking the icon or wait a couple of seconds, depending on whether or not the content is dynamically generated. Just wait or scroll until the "Snapshot" is not greyed out anymore.

<figure><img src=".gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

Oh, and if you select multiple entries, the bibliography will also contain multiple references:

\
\&#xNAN;_Bellingcat-Analyst Nick Waters: Kriegsverbrechen in der Ukraine: „Unsere Beweise müssen vor Gericht halten“_. (2024, March 22). [https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht](https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht)

_Gefälschter BBC-Bericht: Bellingcat berichtete nicht über Waffenschmuggel der Ukraine an Hamas_. (n.d.). Retrieved August 2, 2024, from [https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/](https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/)

Here, you also see that it sometimes doesn't work correctly. You can go back to the software and change things manually very easily, though.

<figure><img src=".gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>

Knes, D. (2024, March 22). _Bellingcat-Analyst Nick Waters: Kriegsverbrechen in der Ukraine: „Unsere Beweise müssen vor Gericht halten“_. [https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht](https://www.kleinezeitung.at/politik/aussenpolitik/18296327/kriegsverbrechen-in-der-ukraine-unsere-beweise-muessen-vor-gericht)

Max, B. (2023, October 23). _Gefälschter BBC-Bericht: Bellingcat berichtete nicht über Waffenschmuggel der Ukraine an Hamas_. [https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/](https://correctiv.org/faktencheck/2023/10/23/ukraine-hamas-gefaelschter-bbc-bericht-bellingcat-bestaetigte-keinen-waffenschmuggel/)

### **It also works on Videos.**

<figure><img src=".gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

Bellingcat. (2024, February 9). _Command Line Fundamentals: Bellingcat Tech Series_ \[Video recording]. [https://www.youtube.com/watch?v=B3gm-ud91v0](https://www.youtube.com/watch?v=B3gm-ud91v0)

**Find out what else it can archive!**

### Zotero as archive tool & the Berkeley Protocol

Proper documentation is essential if the material is used in legal, academic, or policy advocacy contexts. [The Berkeley Protocol ](https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf)outlines how OSINT data should be handled to be admissible in court (at least in the context of international proceedings).

* **Berkeley Protocol Alignment**: Properly stored OSINT data improves evidentiary value in legal and policy contexts. Zotero’s ability to capture full snapshots, along with timestamps, aids transparency and reproducibility.
* **Local & Cloud Sync**: By default, Zotero stores data locally, with **optional** cloud syncing (end-to-end encrypted in transit and at rest on Zotero’s servers). For **highly sensitive data**, you can self-host the Zotero data server or forgo syncing altogether.
* **Limitations**:
  1. No native encryption of local files.
  2. No automatic hashing of archived material.
  3. No password protection built in to the Zotero desktop app.

#### Recommended Best Practices

* **Hashing**: Immediately calculate cryptographic hashes (e.g., SHA-256) of downloaded files and store them as part of each Zotero entry’s notes or attachments. This helps verify data integrity if later questioned.
* **Encrypted Backups**: Periodically back up your Zotero library to an encrypted disk or location.
* **Export Regularly**: Keep dated exports (e.g., JSON or Zotero RDF) that can be re-imported elsewhere if needed.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

With optional paid storage plans. (300MB - free; 2GB - 20$/yr; 6GB - 60$/yr; unlimited - 120$/yr)

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* Account creation (optional; for cloud storage and syncing)
* Browser plugin for web capture (optional but strongly recommended by the author)

### Strengths & Limitations

#### Strengths

* **Versatility**: Suited for both academic citations and OSINT archiving.
* **Automation**: Automatically captures metadata, attaches PDFs, and organizes items for quick retrieval.
* **Citation Management**: Word processor integration simplifies referencing in papers or reports.
* **Open Source & Free**: Broad community support, frequent updates, and no subscription fee.

#### Limitations

* **No Local Encryption**: Data stored locally on your device is **not** encrypted by default.
* **No Native Hashing**: Zotero doesn’t generate or manage hashes for file integrity.
* **Manual Cleanup**: Some websites’ metadata extraction can be incomplete or inaccurate, requiring manual edits.
* **Sync Privacy**: Relying on Zotero’s servers for sync, while encrypted, may not suffice for highly sensitive investigations.

### Additional Tips

* **Waiting for Snapshot**: If saving a dynamically generated page, wait until Zotero’s connector icon indicates that a full snapshot is available. Scrolling or a short pause may be necessary.
* **Group Libraries**: Collaborate with team members by creating a shared project library.
* **Custom Citation Styles**: Install or modify CSL (Citation Style Language) files for specialized formatting.

## Ethical Considerations

Ensure proper citation of sources to avoid plagiarism. Be cautious with sensitive data and respect copyright laws when sharing materials.

## Guide

Quinn, T. (2024). _Research Guides: Zotero: A Beginner’s Guide: About Zotero_. [https://libguides.unm.edu/Zotero/About](https://libguides.unm.edu/Zotero/About)

## Tool provider

[Corporation for Digital Scholarship](https://digitalscholar.org/), Vienna, Virginia-based nonprofit technology organization that is committed to the development of open-source software for cultural heritage institutions and researchers.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

Zotero uses cookies primarily to facilitate core functionality, such as user authentication (e.g., via reCAPTCHA when creating an account) and server-side logging to ensure service stability, security, and to diagnose technical issues. If you opt to sync your library with the Zotero servers, additional data (including IP addresses and usage logs) may be gathered for account management and fraud prevention. Zotero stores these logs for up to 90 days, after which they are anonymized or deleted. While cookies are employed to maintain certain features—like checking for translator updates or managing payment services via Stripe or PayPal—Zotero’s privacy policy emphasizes that it does not monetize user information, and you can minimize sharing by disabling or restricting syncing and update checks in the application’s preferences.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
