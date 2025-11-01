---
updated: '2025-10-31'
description: >-
  Logseq is an open-source knowledge management tool that enables users to
  organize their notes, tasks, and projects.
---

# Logseq

## URL

[https://logseq.com/](https://logseq.com/)\
(version 0.10.14; October 2025)

## Description

Logseq is an open‑source, local‑first knowledge management app for desktop and mobile. It works with **Markdown and Org‑mode** file graphs and (in current betas) a **database (DB) graph** that adds reliability and collaboration features. Core capabilities include block‑based outliner notes, **bidirectional links and graph view**, **tasks/flashcards**, **whiteboards**, **advanced (Datalog‑style) queries**, **PDF annotation**, plugins/themes, and **Zotero integration**. Typical OSINT workflows include journaling timelines, linking entities across sources, annotating PDFs, and pivoting through backlinks/queries.

The example below shows some of the features of Logseq, including a whiteboard diagram, a 'focused' page, and a page with a graph and other navigation.

<figure><img src="https://user-images.githubusercontent.com/25513724/221387376-4dc419c2-0d0a-460c-a920-2d211e78b456.gif" alt="Animation that shows Logseq&#x27;s user interface in dark mode with a whiteboard diagram explaining domain names,  focused writing markdown text and a page graph."><figcaption><p>Animated gif of Logseq whiteboard, focused writing page and page with navigation and graph (courtesy of Logseq)</p></figcaption></figure>

### Key Features

1. **Markdown-Based Storage**: Logseq’s reliance on Markdown ensures compatibility with various editors (e.g., VS Code, Obsidian), thereby promoting data longevity and facilitating easy integration with other tools.
2. **Journaling and Daily Logs:** Daily log pages serve as journaling tools, enabling users to record ideas and tasks in sequence. This is ideal for tracking research or investigation timelines.
3. **Block-Based Structure**: As a block-based outliner, Logseq allows hierarchical organization of notes and content, similar to Roam Research and Notion.
4. **Bidirectional Linking and Graph Database**: Users can create interconnected notes or "nodes" and view relationships between topics visually in the graph view, which is especially valuable for tracking complex networks.
5. **Task Management Integration:** Built-in task workflows allow users to assign tasks and monitor progress, providing an efficient project management tool within their notes.
6. **PDF Annotation and Asset Management:** Upload, annotate, and link PDFs directly within Logseq for seamless document handling. This is an essential feature for researchers with extensive document collections.
7. **Flexible Querying**: Advanced Boolean queries allow users to retrieve data across notes based on tags, properties, or keywords, enabling powerful search and organizational capabilities.
8. **Namespace Hierarchies and Custom Properties**: Organize notes hierarchically with namespaces (e.g., "Project/Phase") and custom properties for consistency and streamlined retrieval.

### Tips for Effective Use

* **Organize with Blocks**: Use high-level blocks (e.g., "Meetings," "Scratchpad") to consolidate related information and reduce clutter.
* **Customize Task Workflows:** For adaptable project management, set up personalized task states, such as “To Do,” “Doing,” and “Waiting. "
* **Use Sidebar Panels**: Open multiple pages in the sidebars to reference, compare, and work on parallel projects simultaneously.
* **CSS Customization**: Personalize the interface using custom CSS for visual clarity and improved readability.
* **PDF Annotation Retrieval**: Utilize hashtags and bidirectional links to tag PDF notes, enabling easy retrieval across various contexts.

### Use Cases

Logseq is well-suited for various use cases that leverage its unique features, such as bidirectional linking and easy note organization. Here are some specific use cases where Logseq excels in the context of journalism:

#### Story Development and Organization

* **Idea Collection:** Collect and organize ideas and research notes that could evolve into stories.
* **Source Management:** Link and organize source documents, interview transcripts, and notes.

#### Investigative Journalism

* **Evidence Tracking:** Keep track of evidence and link related pieces across different sources.
* **Timeline Construction:** Utilize the journaling feature to create event timelines, which helps uncover patterns or inconsistencies.
* **Network Graphs:** Develop a network of interconnected notes to identify relationships and connections among individuals or entities.

### **Comparisons with Similar Tools**

* **Obsidian**: While Obsidian is a powerful Markdown-based tool, Logseq natively supports outliner functionality without plugins, making it more streamlined for users needing hierarchical organization. Logseq's native graph database and task management integration provide additional structure, which is especially useful in large projects.
* **Roam Research**: Logseq and Roam focus on bidirectional linking and block-based structure. However, Logseq’s local Markdown storage offers more control over data storage, ensuring users retain full data ownership.
* **Notion**: Unlike Notion, Logseq offers a more robust, non-linear note structure suited for knowledge mapping and research. Logseq’s task integration and outline functionality caters to users seeking flexible project management within a private, locally-stored environment.

Latest changes: [https://github.com/logseq/logseq/releases](https://github.com/logseq/logseq/releases)

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Core app is free/open‑source (AGPL‑3.0‑only). Optional **Logseq Sync** is offered to supporters and is transitioning from beta; **Logseq Pro** (sync with own storage, real‑time collaboration) has been announced, but pricing is not finalized publicly. **Status can change; check current offers.**

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

Getting started (notes, links, tags, tasks) is straightforward. Power features, **advanced queries (Datalog)**, custom properties, and heavy plugin use require some learning and comfort with structured data concepts. Investigators can work productively without code but will benefit from reading the query explainer and official documentation.

## Requirements

* **Platforms:** Windows (x64), **macOS ≥ 11** (Intel & Apple Silicon), Linux; **iOS ≥ 14.0**; **Android ≥ 5.1**.
* **Install methods:**\
  – **Desktop:** GitHub Releases (Win EXE, macOS DMG/ZIP \[Intel/ARM], Linux AppImage/ZIP); macOS via **Homebrew** (`brew install --cask logseq`); Windows via **winget** (`Logseq.Logseq`). \
  – **Linux helper script:** `install-linux.sh` from the official repo. [GitHub](https://github.com/logseq/logseq)\
  – **Mobile:** iOS App Store; Android via **F‑Droid** (Logseq is not listed on Google Play as of 2025‑10).
* **Auth/tokens:** Not required for local graphs. **Logseq Sync** and RTC features require a Logseq account (historically provisioned via OpenCollective backer access during beta).

## Limitations

* **Learning Curve**: Logseq has a steep learning curve for users unfamiliar with markdown or outliner software.
* **Performance**: Can experience performance issues with very large databases or extensive use of plugins. Large numbers of notes can cause [performance issues](https://discuss.logseq.com/t/curious-about-performance/27708/6). The dev team is working on a [database + markdown version](https://discuss.logseq.com/t/why-the-database-version-and-how-its-going/26744) to improve this.
* **Mobile App**: The mobile app is not as fully featured as the desktop version, which may limit functionality on the go. Logseq doesn't document exactly what these features are.
* **Export Options**: While Logseq supports exporting to Markdown, org-mode, and JSON, transitioning fully formatted notes to other platforms like Microsoft Word may require additional formatting. This forum post details some solutions: [How to export to Word and maintain the outline structure?](https://discuss.logseq.com/t/how-to-export-to-word-and-maintain-the-outline-structure/18746)
* **Collaboration**: Real-time collaboration is not as straightforward as on other platforms like Google Docs. Workarounds are needed to collaborate effectively. The [database + markdown version](https://discuss.logseq.com/t/why-the-database-version-and-how-its-going/26744) is intended to improve this.
* **Plugin Ecosystem**: Although growing, the plugin ecosystem is not as extensive as more mature platforms (such as [Roam Research](https://roamresearch.com/) or [Obsidian](https://obsidian.md/)), potentially limiting customization options.

## Ethical Considerations

When evaluating Logseq from an ethical standpoint, several considerations come into play:

* **Privacy and Data Security:** Logseq emphasizes data privacy, as it allows users to store their data locally or in a self-hosted environment. This approach minimizes data exposure to third-party cloud services, but users must be aware of their own data security measures. For more information of the benefits of local storage, see [Logseq Vs Obsidian: Which Note-Taking App Is Better?](https://theprocesshacker.com/blog/logseq-vs-obsidian/) and [Logseq sync with Git and GitHub](https://hub.logseq.com/integrations/aV9AgETypcPcf8avYcHXQT/logseq-sync-with-git-and-github/krMyU6jSEN8jG2Yjvifu9i).
* **Open Source:** Logseq promotes transparency and community contributions as an open-source project. However, users and developers should consider the implications of their contributions and the potential for misuse of the platform. Misuse can include [Malware](https://en.wikipedia.org/wiki/Malware) Injection; however, open-source tools (like Logseq) rely on transparent peer review and security practices to protect users from this, see [Dev Practices](https://github.com/logseq/logseq/blob/master/docs/dev-practices.md).

## Guide

To effectively use Logseq, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**

* [**Logseq Community Hub**](https://hub.logseq.com/)**:** documentation for Logseq.

**Tutorials and Articles**

* _How to get started in Logseq_ (no date) _Logseq Community Hub_. Available at: [https://hub.logseq.com/getting-started/uQdEHALJo7RWnDLLLP7uux/how-to-get-started-in-logseq/pE1BPPvKGbWkSRXsprRnxM](https://hub.logseq.com/getting-started/uQdEHALJo7RWnDLLLP7uux/how-to-get-started-in-logseq/pE1BPPvKGbWkSRXsprRnxM) (Accessed: 11 April 2024).

**Video Tutorials**

* _How to Use Logseq for Research ft. Cara Antonaccio_ (2022). Available at: [https://www.youtube.com/watch?v=PN6tjeQfxRc](https://www.youtube.com/watch?v=PN6tjeQfxRc) (Accessed: 11 April 2024).
* _How I use Logseq Daily - A Roam Research Alternative for Notes / PKM / To Do / Journal_ (2020). Available at: [https://www.youtube.com/watch?v=JCIdJBZGQLQ](https://www.youtube.com/watch?v=JCIdJBZGQLQ) (Accessed: 11 April 2024).
* _Get started with Logseq, my Daily Workflow_ (2021). Available at: [https://www.youtube.com/watch?v=uJclYLS4oHs](https://www.youtube.com/watch?v=uJclYLS4oHs) (Accessed: 11 April 2024).

#### Developer Resources

* **GitHub:** [https://github.com/logseq/logseq](https://github.com/logseq/logseq)

**Community and Support**

* [**Community forum**](https://discuss.logseq.com/): official support forum.
* [**Discord Server**](https://discord.com/invite/logseq): community announcement and support.

## Tool provider

Logseq Inc. [https://logseq.com/](https://logseq.com/) - United States

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
