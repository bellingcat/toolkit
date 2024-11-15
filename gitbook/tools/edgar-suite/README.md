---
description: >-
  Tool for the retrieval of corporate and financial data from SEC's EDGAR
  (Electronic Data Gathering, Analysis, and Retrieval) database.
---

# EDGAR Command Line Interface (edgar-tool)

## URL

[https://pypi.org/project/edgar-tool/](https://pypi.org/project/edgar-tool/)

* Source code is freely available on [GitHub](https://github.com/bellingcat/EDGAR)
* Users can download `edgar-tool` (the CLI) directly from [PyPI](https://pypi.org/project/edgar-tool/)

## EDGAR Database Overview

SEC's [EDGAR ](https://bellingcat.gitbook.io/toolkit/more/all-tools/edgar)database is a public repository of filings submitted by companies, mutual funds, and other entities required to report to the U.S. Securities and Exchange Commission. EDGAR provides free access to hundreds of financial document filling types, including quarterly and annual reports, insider trading disclosures, and registration statements.

EDGAR has the goal to ensure equal access to corporate disclosures within the U.S. capital market. The database is freely accessible online for financial analysis and open-source intelligence in the finance sector. You can access the EDGAR UI at [www.sec.gov/edgar/search/](./#url).

## Bellingcat's `edgar-tool` Overview

`edgar-tool` provides programmatic access to the SEC's EDGAR database from the command line. The CLI is feature-complete, meaning all queries you can perform on [www.sec.gov/edgar/search/](./#url) are achievable with the CLI. It also simplifies the EDGAR database's RSS feed functionality.

Here are a few of the reasons you might want to use `edgar-tool`:

* **Batch Downloading of Search Results**: The EDGAR UI doesn't allow you to download all documents from a search text search at once. `edgar-tool` automates this process so you can download hundreds (or even thousands) of EDGAR documents with one command.
* **Consistent Financial Profiling**: `edgar-tool` eases financial analysis by standardizing [XBRL data tags](#user-content-fn-1)[^1] across different companies' reports. Companies often use custom tags or apply standard tags inconsistently which leads to variations that complicate direct comparisons. `edgar-tool` uses a custom table of XBRL tags to make cross-company financial comparison easier.
* **Customized RSS Feeds**: EDGAR does not allow users to subscribe to a single RSS feed for multiple companies. `edgar-tool`'s `rss` command allows you to filter EDGAR's broadest RSS feed by specific companies of interest and produce a CSV file similar to the one produced by `edgar-tools` text search functionality.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

`edgar-tool` requires the Python interpreter to download and use. It supports any currently maintained version of Python (Python >=3.9 as of this writing). Check the [_Programming Language_ section of `edgar-tool`'s release page on PyPI](https://pypi.org/project/edgar-tool/) for officially supported versions. When in doubt, use the latest stable Python version. You can download the latest version of the Python interpreter from [www.python.org/downloads/](./#url).

## Limitations

* The tool requires an active internet connection to function.
* The tool is limited by the limitations of the SEC's EDGAR database itself, such as:
  * No historical data before 2001
  * Documents are raw corporate fillings - there are no summaries or analysis
  * Limited API options compared to other financial data sources
  * No private company data - only data for public companies and some regulated entities is available

## Ethical Considerations

Users Bellingcat's `edgar-tool` must adhere to the following:

* Respect the [SEC's _Internet Security Policy_](https://www.sec.gov/about/privacy-information#security) and [_Vulnerability Disclosure Policy_](https://www.sec.gov/vulnerability-disclosure-policy)
* Respect the [SEC EDGAR API's fair access policy](https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data) & current 10 requests/second max request limit

## Guide

The most up-to-date guides on downloading & using edgar-tool are always available on [the bellingcat/EDGAR GitHub site](https://github.com/bellingcat/EDGAR). The December 18th 2023 Bellingcat article, [_New Tools Dig Deeper Into Hard-to-Aggregate US Corporate Data_](https://www.bellingcat.com/resources/2023/12/18/new-tools-dig-deeper-into-hard-to-aggregate-us-corporate-data/) by edgar-tool creator George Dyer, provides fantastic examples of using edgar-tool's text search and RSS feed functionality.

## Tool provider

George Dyer (former Bellingcat Tech Fellow)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not use tracking cookies.

| Page maintainer |
| --------------- |
|                 |
|                 |

[^1]: XBRL (eXtensible Business Reporting Language) is a framework that allows companies to tag financial data with specific identifiers, facilitating automated processing and analysis.
