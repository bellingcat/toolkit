---
description: >-
  Open-source “WordPress-for-data” that turns any SQLite database into an
  interactive website and JSON API in seconds; ideal for publishing, exploring
  and collaborating on datasets
---

# Datasette

## URL

[https://datasette.io](https://datasette.io)

## Description

Datasette is an Apache-2.0-licensed tool for **exploring and publishing data**.\
Give it one or more SQLite files and it spins up a web UI plus a versioned JSON\
API; add plugins for full-text search, maps, visualisations or AI query\
assistants. The ecosystem now includes **150 + plugins**, a macOS Desktop app\
and the hosted **Datasette Cloud** service. [datasette.io](https://datasette.io/)

#### What problem does it solve?

Researchers and newsrooms often sit on CSVs or spreadsheets that are hard to\
search or share. Import them with `sqlite-utils` (or drag-and-drop in\
Datasette Desktop), then run:

```bash
bashCopyEditdatasette serve mydata.db
```

Seconds later colleagues can filter tables, run SQL, download results, and\
embed charts—without needing a backend developer.

### Typical use cases

| Scenario                                            | How Datasette helps                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Publish transparency data** after an FOIA request | Host the db on Cloud Run via `datasette publish cloudrun`; readers get an interactive portal |
| **Quick, private team data room**                   | Sign up to Datasette Cloud and upload multiple databases; set per-table permissions          |
| **Reproducible data journalism**                    | Bundle the SQLite file and a `metadata.yaml`; anyone can clone and run locally               |
| **Prototype an API**                                | The automatic REST-style API supports pagination, SQL parameters and CORS                    |

#### Key features

* **Instant web interface** (table views, faceting, SQL editor, CSV export)
* **Stable JSON and CSV API** with row-level permissions
* **Plugin system**—maps, Vega & Observable Plot charts, GraphQL, auth, enrichments and more ([datasette.io](https://datasette.io/plugins?utm_source=chatgpt.com))
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

* **Self-host:** Python 3.9 +; SQLite databases (created via `sqlite-utils` or any source)
* **Desktop:** macOS 12 + (bundles Python)
* **Cloud:** Organisation account and login; browser upload or `datasette push`; optional SSO
* Optional: GitHub/Fly.io/Vercel credentials for one-command publishing

## Limitations

* Optimised for **read-heavy “small/medium” data** (10² – 10⁷ rows). Large analytical\
  workloads need tuning or external warehouse.
* **Write support is experimental** until Datasette 1.0 stable.
* Each SQL query has a configurable row cap; oversized results are truncated\
  (`"truncated": true`). ([Datasette](https://docs.datasette.io/en/latest/changelog.html?utm_source=chatgpt.com))
* Security defaults to public; you must enable plugins (e.g. `datasette-auth-*`)\
  or Cloud permissions for private data.
* No built-in version control—use GitHub Actions to rebuild and redeploy.

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
