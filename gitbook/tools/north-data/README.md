---
updated: '2025-09-05'
description: >-
  Search for people and companies in EU corporate and trade registers +
  visualize relationships
---

# North Data

## URL

[https://northdata.com](https://northdata.com)

## Description

North Data is a business intelligence platform for investigating companies, executives, and financial relationships across [21](https://www.northdata.com/_coverage#countries) European countries (some in beta) + a ‘Tax Havens’ bundle. It aggregates official registry data, court publications, and financial statements, making it a useful resource for financial and corporate OSINT investigations.

Key features and content include:

1. **Company Profiles including**:
   * **General Information**: This includes the company name, address, legal form, registration details, contact information, and identifiers such as VAT numbers.
   * **Financial Data**: Provides revenue, profit, equity, liabilities, employee numbers, average salaries, and key financial ratios like return on equity and earnings growth.
   * **Corporate Structure**: Details about subsidiaries, parent companies, affiliated entities, shareholders, and ownership structure.
   * **Management and Key Personnel**: Information on directors and key executives, historical data on management changes, and significant personnel events.
   * **Events and Filings**: Covers annual reports, capital changes, mergers and acquisitions, insolvency proceedings, patent registrations, trademark filings, and public funding events.
2. **Advanced Search and Filtering**: By industry segment, performance indicators, and events. Full attribute list available [here](https://help.northdata.com/en/center/power-search-overview).
3. **Data Accessibility**: Free basic access, premium services, and API integration.
4. **Visualization Tools**: Plotting financial information and link analysis.
5. **Power Search & EUID look-ups:** over 60 field filters (including geo, turnover, ESG keywords, and EUID) with export to CSV/XLSX.
6. **Search & IDs.** The **Quick Search accepts EUID and VAT IDs** directly. For discovery at scale, use **Power Search**; for automation, use the **Data API**.
7. **Google Sheets integration:** official Apps Script template fetches live indicators into a spreadsheet.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

{% hint style="success" %}
**Accredited journalists can**[ **request a complimentary Premium account.**](https://www.northdata.com/_journalism)
{% endhint %}

* **Free (no login):** Quick lookups and basic company/person pages
* **Premium Service Account**: Starts at €49/month or €490/year (single user).
* **API Access**: Starts at €500/month and includes all jurisdictions.
* **Data Export**: Starts at €2,250/quarter per country.
* **Investigative Accounts for Journalists**: Free premium access for journalists upon request and approval (email-based process).
* No free tier is available; event tracking and data saving are premium-only features.

\
\* Prices from Help-Center billing FAQ; multi-seat & NGO concessions on request.

| Free                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Paid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><strong>Basic Company Information</strong>: Users can access general information about companies, including names, addresses, legal forms, and registration details.</p><p><strong>Limited Financial Data</strong>: Basic financial figures like revenue and employee numbers are available.</p><p><strong>Event Tracking</strong>: Basic tracking of significant events like address changes and management updates. <em>(registration required)</em><br><br><strong>Save and track data</strong>: save searches, create watchlists, and email notifications. <em>(registration required)</em></p> | <p><strong>Comprehensive Data Access</strong>: Includes detailed financial data, performance indicators, equity ratios, liabilities, and more.</p><p><strong>Advanced Search and Filtering</strong>: Users can utilize advanced filters by industry segments, keywords, and detailed performance indicators.</p><p><strong>Event and Filing Insights</strong>: Detailed tracking and history of significant company events, including mergers, acquisitions, insolvency filings, and public funding events.</p><p><strong>API Access</strong>: Premium users can access data via API for integration into other applications and databases.</p><p><strong>Visualization Tools</strong>: Enhanced tools for analyzing performance indicators and tracking company activities.</p> |

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

North Data has a user-friendly search interface and auto-generated relationship diagrams. However, deeper insights (e.g., ownership webs, financial figures, watchlists) require paid access and some experience navigating corporate records.

## Requirements

User registration is required to access certain features (see the cost section).

## Limitations

* The interactive graph starts with first-degree relations (company ↔︎ persons/companies). You can click nodes to reveal second-degree links, but bulk export/API still returns first-degree only.
* Our own tests showed that some financial data or indicators are limited under a free account, are inconsistently updated, or unavailable.
* **Person location may be stale.** It’s taken from the trade register at the time of filing and isn’t maintained thereafter.
* **Legal status is standardized.** Labels such as Active, Liquidation, and Terminated are North-Data standardizations and may differ from jurisdiction-specific terms.
* **Financials appear only if published.** Availability varies by size and filing rules; some figures are estimates (flagged as “uncertain”) or not published.
* **VAT search caveat.** VAT isn’t a universal key in every jurisdiction (e.g., constraints in Germany).
* **Network depth.** Network graph initially shows first-degree relations; you can click nodes to reveal deeper levels, but **CSV / API export is still limited to one hop**. API/CSV can include **direct relations**; multi-hop graphs generally require iterative calls.

## Ethical Considerations

* Individuals with common names or aliases can be misidentified without using additional information about the target, leading to false allegations.
* North Data surfaces PII from official filings (e.g., addresses, dates of birth). Minimize collection, preserve only what’s necessary, and document your methodology. For open-source investigations standards on **accuracy**, **data minimization**, **preservation**, and **privacy**, see the _Berkeley Protocol on Digital Open Source Investigations_ (OHCHR/UC Berkeley).
* Data contains sensitive information such as addresses or contact information.
* It can reveal personal relationships that aren’t widely known. (For example, birthdays, passport information, addresses, etc., depending on the company-related documents retained by governmental bodies.)

## Guides and articles

[Northdata help center and FAQs (contains detailed usage guides)](https://help.northdata.com/en/center)

[API Documentation](https://github.com/northdata/api/blob/master/doc/data-api-userguide/data-api-userguide.md)

**For developers**

* **Data API (OpenAPI):** [https://northdata.github.io/doc/api/](https://northdata.github.io/doc/api/)
* **Power Search overview:** [https://help.northdata.com/en/center/power-search-overview](https://help.northdata.com/en/center/power-search-overview)
* **Filters:**&#x20;
  * Events: [https://help.northdata.com/en/center/event-filter ](https://help.northdata.com/en/center/event-filter)
  * Performance indicators: [https://help.northdata.com/en/center/power-search-performance-indicator ](https://help.northdata.com/en/center/power-search-performance-indicator)
  * Legal forms: [https://help.northdata.com/en/center/power-search-legal-forms](https://help.northdata.com/en/center/power-search-legal-forms)
* **Data API & Exports (when quarterly exports still matter):** [https://help.northdata.com/en/center/data-api-and-export](https://help.northdata.com/en/center/data-api-and-export)
* **Google Sheets tutorial (Apps Script):** [https://blog.northdata.com/company-data-on-your-google-sheets-spreadsheet](https://blog.northdata.com/company-data-on-your-google-sheets-spreadsheet)

### **See also**

* **OpenCorporates:** broader global registry aggregation and an open data posture: [https://bellingcat.gitbook.io/toolkit/more/all-tools/opencorporates](https://bellingcat.gitbook.io/toolkit/more/all-tools/opencorporates)
* **Companies House (UK):** freshest UK filings and the ROE (overseas entities): [https://bellingcat.gitbook.io/toolkit/more/all-tools/companies-house](https://bellingcat.gitbook.io/toolkit/more/all-tools/companies-house)

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
