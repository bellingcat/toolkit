---
description: A brief one line description of this tool
---

# Anytype

## URL

Tool page: [Anytype](https://anytype.io/?utm_source=chatgpt.com) \
(Version current as of 2025‑08)\
GitHub: [anyproto/anytype](https://github.com/anyproto/anytype?utm_source=chatgpt.com)

## Description

Anytype is a **local‑first knowledge‑management app** that blends note‑taking with database functionality. Each piece of content you create is an **object** composed of **blocks** (text, headings, checklists, media, etc.) that you can[ arrange freely](https://doc.anytype.io/anytype-docs/getting-started/object-editor/blocks). Objects can be assigned **types** (templates) and **relations** (metadata fields) to capture structured data – for example, you might define a “Source” type with properties like author, date, and link, and then create multiple Source objects using that structure. [Queries](https://doc.anytype.io/anytype-docs/getting-started/sets) act like live database views, filtering objects by type or relation and presenting results in tables, boards, galleries, or calendars. A [graph view](https://doc.anytype.io/anytype-docs/advanced/feature-list-by-platform/graph) (desktop only) shows how objects connect.

#### What problem does it solve?

Investigative work often requires managing disparate pieces of information (notes, documents, images) and linking them together. Conventional note apps lack structure, while databases lack flexibility. Anytype aims to solve this by giving users a private, offline workspace where they can both **take notes and build relationships between them**. Because data is stored locally and encrypted, the encryption keys never leave your device, and indexes are not synced.[ It suits sensitive investigations](https://doc.anytype.io/anytype-docs/advanced/data-and-security/how-we-keep-your-data-safe) that should not live on a cloud server. At the same time, its types, relations, and queries provide database‑like power without coding. It enables you to capture text, images, PDFs, and other media within encrypted vaults, then **model your information as objects connected by relations and explore those connections** through queries and a graph view. While still in beta, it offers investigators a promising way to manage and link evidence without surrendering data to external servers

#### How does it work?

* [**Block‑based editing**](https://doc.anytype.io/anytype-docs/getting-started/object-editor/blocks) – Use the orange “+” button or the `/` command to insert blocks of text, headings, checkboxes, callouts and more. Blocks can be dragged to create columns or nested hierarchies.
* **Objects and Types** – Each note or item is an object with a type. You can create custom types (e.g. Person, Event) with predefined relations. Templates let you preconfigure layouts for new objects.
* [**Relations and Queries**](https://doc.anytype.io/anytype-docs/getting-started/sets) – Relations act as fields (string, number, date, etc.) that you attach to objects. Queries are live filters that display all objects matching a type or relation; they can be sorted and edited in place. Views include list, table, board (Kanban), calendar, gallery and graph (some views are desktop‑only)
* [**Graph view**](https://doc.anytype.io/anytype-docs/advanced/feature-list-by-platform/graph) – On desktop, a graph visualizes how objects link to each other, useful for mapping relationships in complex investigations.
* [**Import & export** ](https://doc.anytype.io/anytype-docs/advanced/data-and-security/import-export)– You can import data from Obsidian, Notion, Evernote, Markdown, HTML, plain text or CSV (mapping columns to relations), and export your vault as Markdown or an **Any‑Block** (Protobuf/JSON) archive.
* [**Security & local‑first storage**](https://doc.anytype.io/anytype-docs/advanced/data-and-security/how-we-keep-your-data-safe) – Data stays on your device and is encrypted; only you hold the keys. A [local‑only mode](https://doc.anytype.io/anytype-docs/advanced/data-and-security/self-hosting/local-only) disables cloud backup and limits sync to devices on the same network
* [**Collaboration & sharing**](https://doc.anytype.io/anytype-docs/getting-started/collaboration) – Each account can create up to three shared spaces and invite others as Editors or Viewers via a link [Web publishing](https://doc.anytype.io/anytype-docs/getting-started/web-publishing) lets you publish a single object as a static page on your personal subdomain, though it currently does not support collections or queries.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

- [**Starter (free)**](https://anytype.io/pricing/) – 100 MB of network storage, unlimited local storage, peer‑to‑peer synchronization, three shared spaces, up to three editors per space, unlimited viewers and up to 10 MB for web publishing.
- **Builder (approx. US$10 per month)** – 128 GB of network storage, unlimited local storage, P2P sync, three shared spaces, up to 10 editors per space, unlimited viewers and up to 100 MB for web publishing; includes a global unique name and personalised domain.
- **Co‑Creator (US$299 for three years)** – 256 GB of network storage, unlimited local storage, P2P sync, three shared spaces, up to 10 editors per space, unlimited viewers and up to 100 MB for web publishing; also includes a shorter unique name and priority support.
- **Business** – Custom storage and collaboration limits; contact the team for pricing.
- **Discounts & self‑hosting** – Students can receive a 50 % discount. If you self‑host the Anytype network, membership fees do not apply.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

Anytype’s basic functions (creating objects, linking notes) are straightforward and require no coding. However, to fully leverage types, relations, and queries, you need to design a schema for your investigation, which can be a more involved process. Features such as the graph view, board, and calendar are currently limited to the desktop app. As the platform continues to evolve, please expect occasional bugs or interface changes.

## Requirements

* **Platforms** – Desktop apps for Windows, macOS and Linux; mobile apps for iOS and Android. Not all features are available on mobile; board, calendar and graph views are currently desktop‑only.
* **Account & hardware** – Create an Anytype account and select a vault location. Ensure sufficient disk space for your vault and network storage according to your membership tier.
* **Networking** – To sync across devices or collaborate, you need an internet connection. In[ **local‑only** mode](https://doc.anytype.io/anytype-docs/advanced/data-and-security/self-hosting/local-only), sync happens only between devices on the same local network.
* **Optional publishing** – To publish a page to the web, you must stay within your plan’s publishing limits or upgrade.

## Limitations

* **Beta maturity** – The software is under active development; some features (web publishing, collaboration) are still limited.
* **Desktop‑only features** – Graph, board and calendar views are not available on mobile.
* **Limited plugin ecosystem** – Unlike Obsidian or Logseq, Anytype’s local API and plugins are nascent, so extending functionality may require technical skills.
* **Encrypted database format** – Data is stored in an encrypted database rather than plain Markdown; although exports to Markdown and JSON exist, some structure may be lost when leaving the platform.
* **Network storage caps** – Free accounts include only 100 MB of network storage, which can fill quickly if you store media files; additional storage requires a paid membership.
* **Performance** – Extremely large graphs or media‑heavy vaults might cause slowdowns on older hardware. The mobile apps lag behind desktop in terms of features.

## Ethical Considerations

[Anytype emphasises](https://doc.anytype.io/anytype-docs/advanced/data-and-security/how-we-keep-your-data-safe) autonomy and privacy by storing data locally and encrypting it, with keys held by the user. This protects sensitive investigative data from third‑party access. Still, investigators should practice good operational security: use dedicated devices or burner accounts for high-risk projects, be cautious when inviting collaborators, and sanitize data before publishing pages online. Since the platform is in beta, be aware of potential bugs and install updates regularly. Additionally, back up critical data on a regular basis.

## Guides and articles

* **Official documentation** – The [Anytype docs](https://doc.anytype.io/?utm_source=chatgpt.com) cover getting started, objects, types, relations, queries and collaboration.
* [**Any Experience Gallery** ](https://gallery.any.coop/)– A community gallery where users share templates and demo spaces; you can export a space as an Any‑Block archive and upload it for others to import.
* **Community forum** – [forum.anytype.io](https://forum.anytype.io/) hosts user guides, tips, and troubleshooting.
* **Tutorials & comparisons** – Several blogs and videos compare Anytype with other tools, such as Obsidian and Notion. Look for reviews published in 2024–2025 for the most up-to-date insights.

## Tool provider

Anytype is developed by **Any Association (Zug, Switzerland & Berlin, Germany)**, a non‑profit organisation focused on decentralised protocols and peer‑to‑peer networks. The project is open‑source, and its community contributes to the codebase and documentation via GitHub.

## Similar tools

| Tool                                                                          | Approach & strengths                                                                                                                    | Limitations                                                                                                         |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [**Obsidian**](https://bellingcat.gitbook.io/toolkit/more/all-tools/obsidian) | Local Markdown files with a rich plugin ecosystem and graph view; highly customisable and fast.                                         | Not designed for structured databases; collaboration requires external sync; some features (sync/publish) are paid. |
| [**Logseq**](https://bellingcat.gitbook.io/toolkit/more/all-tools/logseq)     | Open‑source outliner supporting Markdown and Org‑mode; offers journaling, bidirectional links, graph view and task management.          | Steeper learning curve; performance issues on large graphs; mobile app lacks full features.                         |
| [**Datasette**](https://datasette.io/)                                        | Publishes and queries SQLite or CSV data through a web interface; ideal for analysing structured datasets; supports SQL and API access. | Not a note‑taking app; requires technical skills to prepare data; lacks multimedia and narrative note features.     |
| [**Notion**](https://www.notion.com/)                                         | Cloud‑based workspace combining documents, databases and collaboration with a polished interface.                                       | Data stored on proprietary servers; offline access is limited; end‑to‑end encryption is not provided.               |

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
