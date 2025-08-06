---
updated: '2025-07-01'
description: >-
  Search for people and companies in EU corporate and trade registers +
  visualize relationships
---

# North Data

## URL

[https://northdata.com](https://northdata.com)

## Description

North Data is an online platform offering detailed company information sourced from public records like trade registers, annual reports, funding registers, trademark registers, and patent registers. The platform, primarily focuses on European countries. Coverage (Aug 2025): **78 million+ companies in 24 European jurisdictions** ([newest additions](https://www.linkedin.com/company/northdata/): Netherlands, Czech Republic & Portugal).

Key features and content include:

1. **Company Profiles including**:
   * **General Information**: Includes company name, address, legal form, registration details, contact information, and identifiers such as VAT numbers.
   * **Financial Data**: Provides revenue, profit, equity, liabilities, employee numbers, average salaries, and key financial ratios like return on equity and earnings growth.
   * **Corporate Structure**: Details about subsidiaries, parent companies, affiliated entities, shareholders, and ownership structure.
   * **Management and Key Personnel**: Information on directors and key executives, historical data on management changes, and significant personnel events.
   * **Events and Filings**: Covers annual reports, capital changes, mergers and acquisitions, insolvency proceedings, patent registrations, trademark filings, and public funding events.
2. **Advanced Search and Filtering**: By industry segment, performance indicators, and events. Full attribute list available [here](https://help.northdata.com/en/center/power-search-overview).
3. **Data Accessibility**: Free basic access, premium services, and API integration.
4. **Visualization Tools**: Plotting financial information and link analysis.
5. **Power Search & EUID look-ups:** over 60 field filters (geo, turnover, ESG keywords, EUID, etc.) with export to CSV/XLSX.
6. **Google Sheets integration:** official Apps-Script template fetches live indicators into a spreadsheet.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

#### Cost & access

| Tier                       | Monthly price\*                  | What you get                                                                             |
| -------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------- |
| **Free (no login)**        | €0                               | Simple company & person look-up, first-degree network graph, last 3 years of key figures |
| **Free (registered)**      | €0                               | Custom watchlists, e-mail alerts, CSV export (≤ 1 000 rows), basic event history         |
| **Premium**                | from **€39 / mth** (single-user) | Full financials, multi-degree graphs, Power Search, PDF filings, unlimited export        |
| **API / Quarterly Export** | quote                            | JSON / XML API (OpenAPI 3), bulk dumps for data warehouses                               |

\* Prices from Help-Center billing FAQ; multi-seat & NGO concessions on request.

| Free                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Paid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><strong>Basic Company Information</strong>: Users can access general information about companies, including names, addresses, legal forms, and registration details.</p><p><strong>Limited Financial Data</strong>: Basic financial figures like revenue and employee numbers are available.</p><p><strong>Event Tracking</strong>: Basic tracking of significant events like address changes and management updates. <em>(registration required)</em><br><br><strong>Save and track data</strong>: save searches, create watchlists, and email notifications. <em>(registration required)</em></p> | <p><strong>Comprehensive Data Access</strong>: Includes detailed financial data, performance indicators, equity ratios, liabilities, and more.</p><p><strong>Advanced Search and Filtering</strong>: Users can utilize advanced filters by industry segments, keywords, and detailed performance indicators.</p><p><strong>Event and Filing Insights</strong>: Detailed tracking and history of significant company events, including mergers, acquisitions, insolvency filings, and public funding events.</p><p><strong>API Access</strong>: Premium users can access data via API for integration into other applications and databases.</p><p><strong>Visualization Tools</strong>: Enhanced tools for analyzing performance indicators and tracking company activities.</p> |

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

User registration is required for accessing certain features (see cost section).

## Limitations

* Interactive graph starts with first-degree relations (company ↔︎ persons/companies). You can click nodes to reveal second-degree links, but bulk export/API still returns first-degree only.
* Our own tests showed that some financial data or indicators are limited under a free account, are inconsistently updated or unavailable.
* The data is only limited to 24 countries, the full list of sources with update frequency can be found [here](https://www.northdata.com/_coverage#sources).
* Network graph initially shows first-degree relations; you can click nodes to reveal deeper levels, but **CSV / API export is still limited to one hop**.

## Ethical Considerations

* Individuals with common names or aliases can be misidentified without using additional information about the target, leading to false allegations.
* Data contains sensitive information such as addresses or contact information.
* It can reveal personal relationships that aren’t widely known. (For example, birthdays, passport information, addresses, etc., depending on the company-related documents retained by governmental bodies.)

## Guides and articles

[Northdata help center and FAQs (contains detailed usage guides)](https://help.northdata.com/en/center)

[API Documentation](https://github.com/northdata/api/blob/master/doc/data-api-userguide/data-api-userguide.md)

## Tool provider

[North Data GmbH](https://pitchbook.com/profiles/company/503379-01), Hermannstr. 22, 20095 Hamburg; info@northdata.com

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
