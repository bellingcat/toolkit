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

Datasette is an Apache-2.0-licensed tool that turns one or more SQLite databases into an interactive website and stable JSON/CSV API within seconds. The growing ecosystem now counts 154 + plugins and 40 + companion tools, a macOS Desktop app (v0.2.3) with one-click plugin manager, and the hosted Datasette Cloud service, with a new “Datasette for Newsrooms” bundle for investigative teams.

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
