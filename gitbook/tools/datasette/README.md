---
description: >-
  Open-source “WordPress-for-data” that turns any SQLite database into an
  interactive website and JSON API in seconds; ideal for publishing, exploring
  and collaborating on datasets
---

# Datasette

## URL

[https://datasette.io](https://datasette.io)\
(v.0.65.1, retrieved July 1st 2025)

## Description

Datasette is an Apache-2.0-licensed tool that turns one or more SQLite databases into an interactive website and stable JSON/CSV API within seconds. The growing ecosystem now counts 154 + plugins and 40 + companion tools, a macOS Desktop app (v0.2.3) with a one-click plugin manager, and the hosted Datasette Cloud service, with a new “Datasette for Newsrooms” bundle for investigative teams.

**Datasette is a free, open-source tool that enables you to transform your datasets into an interactive database website, making it easy to explore and share data without requiring advanced technical skills.** It was created with data journalists and investigators in mind, but anyone who works with structured data can benefit from it. In simpler terms, if you have information in a spreadsheet or CSV file and want to find insights or share it with others, Datasette helps you publish that data online in a searchable, user-friendly format. For example, the investigative journalism group Bellingcat has used Datasette to examine leaked data –[ in one case](https://www.newsroomrobots.com/p/how-datasette-helps-with-investigative), analyzing a leaked food delivery company database to uncover links to a Russian security agency. This means that whether you’re a journalist sifting through thousands of records or a researcher sharing data with the public, Datasette can make the job easier by providing an intuitive way to browse and query your information.

Under the hood, Datasette packages your data (of almost any shape or size) into a lightweight SQLite database and automatically generates a web interface and URL [endpoints for it](https://datasette.io). However, you don’t need to know SQL or database programming to use the basic features – Datasette’s web UI lets you filter tables, sort results, and search your data through simple forms and links. At the same time, more technically inclined users **can** leverage SQL queries for complex analysis or use the provided JSON API to integrate the data into other applications. In other words, Datasette works for beginners who just want point-and-click data exploration **and** for advanced users who might script queries or build upon the data.

Some key things you can do with Datasette include:

* **Explore data interactively:** Upload or import your dataset (e.g., CSV files or other formats) and Datasette will allow you to browse the tables, view individual records, and follow relationships between tables. You can click to apply filters or conduct a full-text search of your data, helping you find stories and patterns without writing code.
* **Share data easily:** With a single command, you can deploy your data as a public or private website that others can access. It’s like publishing your spreadsheet online, but with additional features for sorting, filtering, and exporting. Colleagues or readers can use the interface to answer their own questions from the data, or download slices of the data in CSV or JSON format.
* **Export and API access:** Every table and query in Datasette can be exported. You can download results as CSV or JSON files, or access them programmatically via an API endpoint. This means other tools or journalists can fetch the data directly for further analysis or visualizations.
* **Extensibility with plugins:** Datasette has a rich plugin ecosystem that adds extra functionality. For instance, there are plugins for plotting charts, handling geospatial data, adding user authentication, and more. If you have a special need, there’s a good chance a plugin (or the option to write one) can extend Datasette to meet it.
* **Multiple deployment options:** You can run Datasette on your own computer for private analysis, or host it on cloud services to share with the world. There’s even **Datasette Desktop** (a simple application for macOS) and **Datasette Cloud** (a hosted service) if you prefer a point-and-click approach to running the tool. Advanced users can use the `datasette publish` command to deploy to platforms like Google Cloud Run or Vercel [in seconds](https://datasette.io/for/publishing-data).

**Why is this useful for journalists?** Because it eliminates a significant amount of friction in analyzing and publishing data. Instead of building a custom database or application for each dataset, Datasette provides a ready-made solution. A journalist, for example, can take a large list of public records or FOIA data, load it into Datasette, and immediately start filtering and searching for interesting entries or outliers. They can then share the same Datasette instance with editors or readers, allowing them to verify findings or explore the data further independently. The tool promotes transparency by making the “raw data” behind a story accessible in an interactive format, similar to how the Guardian’s Data Blog shares source data for readers to examine.

**Learning curve and support:** Getting started with Datasette is relatively straightforward. If you’re non-technical, you can use the Desktop app or follow a tutorial to run Datasette with just a few commands – no complex setup required. There is extensive documentation and an active community around Datasette to help new users. For those familiar with Python or databases, Datasette is highly customizable and scriptable; however, **these skills are not a prerequisite for basic usage**. Datasette lowers the barrier for journalists and researchers to unlock insights from data and publish those findings in a transparent, accessible way.

#### What problem does it solve?

Researchers and newsrooms often sit on CSVs or spreadsheets that are hard to\
search or share. Import them with `sqlite-utils` (or drag-and-drop in\
Datasette Desktop), then run:

```bash
bashCopyEditdatasette serve mydata.db
```

Seconds later, colleagues can filter tables, run SQL, download results, and\
embed charts—without needing a backend developer.

### Typical use cases

| Scenario                                    | How Datasette helps                                                                                                                                                                       |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ask natural-language questions of a dataset | `datasette-query-assistant` translates prompts to SQL & shows provenance. ([datasette.cloud](https://www.datasette.cloud/blog/2023/datasette-plot/?utm_source=chatgpt.com))               |
| Rapid exploratory data-viz                  | `datasette-plot` lets users build shareable Observable Plot charts from tables/queries. ([datasette.cloud](https://www.datasette.cloud/blog/2023/datasette-plot/?utm_source=chatgpt.com)) |
| Publish FOIA transparency data              | `datasette publish cloudrun` for a scale-to-zero interactive portal.                                                                                                                      |
| Private newsroom data room                  | Datasette Cloud with per-table permissions and Newsrooms starter bundle. ([simonwillison.net](https://simonwillison.net/tags/datasette-cloud/))                                           |
| Reproducible notebooks & APIs               | Bundle `.db` + `metadata.yaml`; anyone can clone & run.                                                                                                                                   |

#### Key features

* **Instant web interface** (table view, faceting, SQL editor, CSV export, API explorer `/-/api`).
* **Stable JSON and CSV API** with row-level permissions; **alpha JSON Write API (CRUD + alter-table)**.
* **Plugin system**—maps, Vega [& Observable Plot charts](https://www.datasette.cloud/blog/2023/datasette-plot/), GraphQL, auth, enrichments and more
* **`datasette publish`** helpers for Vercel, Fly.io, Google Cloud Run, GitHub Pages static builds
* **Datasette Desktop** one-click macOS app; **Datasette Cloud** managed SaaS (private or public) ([datasette.io](https://datasette.io/desktop?utm_source=chatgpt.com)[datasette.io](https://datasette.io/))
* Alpha-stage **write API** (`insert`, `update`, `upsert`, `alter table`) in 1.0a series ([Datasette](https://docs.datasette.io/en/latest/changelog.html?utm_source=chatgpt.com))

## Cost

* [x] Free (self-hosted)
* [ ] Partially Free
* [x] Paid

Cloud pricing on request.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* **Self-host:** Python 3.8 + (works on 3.8 – 3.13); SQLite databases (created via `sqlite-utils` or any source)
* **Desktop:** macOS 12 + (bundles Python)
* **Cloud:** Organisation account and login; browser upload or `datasette push`; optional SSO
* Optional: GitHub/Fly.io/Vercel credentials for one-command publishing

## Limitations

* Optimised for **read-heavy “small/medium” data** (10² – 10⁷ rows). Large analytical\
  workloads need tuning or external warehouse.
* **JSON Write support is experimental** and remains alpha until Datasette 1.0 stable.
* Each SQL query has a configurable row cap; oversized results are truncated\
  (`"truncated": true`). ([Datasette](https://docs.datasette.io/en/latest/changelog.html?utm_source=chatgpt.com))
* **Security defaults to public**; you must enable plugins (e.g. `datasette-auth-*`)\
  or Cloud permissions for private data.
* No built-in version control. Use CI (e.g. GitHub Actions) to rebuild and redeploy.

## Ethical Considerations

* **Risk of exposing personal data**: once a Datasette instance is public, search\
  engines can index it. Scrub or password-protect sensitive tables.
* **Licensing clarity**: publishing a DB does not change the licence of the\
  underlying data; ensure you have redistribution rights.
* **Query logs**: enable or disable query-logging based on newsroom\
  confidentiality policies.

## Guides and articles

* [Official “Getting started” docs; Exploring a DB tutorial](https://docs.dbdocs.io/)
* Simon Willison, [_Tracking FARA with GitHub Actions and Cloud Run_](https://simonwillison.net/2020/Jan/21/github-actions-cloud-run/); Blog
* Datasette Cloud blog: [_datasette-plot_ visualisation plugin; _datasette-pins_ favourites manager; _datasette-write-ui_ row editor](https://www.datasette.cloud/blog/2023/datasette-write-ui/)
* Video: [_Datasette for data journalists_](https://simonwillison.net/2024/Jul/14/pycon/) (PyCon 2024 talk)

## Tool provider

**Simon Willison / Datasette Project** – independent open-source developer;\
Datasette Cloud is operated by **Datasette Labs Ltd.**

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
