---
updated: '2025-06-04'
description: >-
  Tool for the retrieval of corporate and financial data from SEC's EDGAR
  (Electronic Data Gathering, Analysis, and Retrieval) database.
---

# EDGAR Command Line Interface (edgar-tool)

## URL

[https://pypi.org/project/edgar-tool/](https://pypi.org/project/edgar-tool/)

* Source code is freely available on [GitHub](https://github.com/bellingcat/EDGAR) (v 2.1.2 – 15 May 2025, last checked July 1st)
* Users can download `edgar-tool` (the CLI) directly from [PyPI](https://pypi.org/project/edgar-tool/)

## EDGAR Database Overview

[**EDGAR**](https://bellingcat.gitbook.io/toolkit/more/all-tools/edgar) (Electronic Data Gathering, Analysis, and Retrieval) serves as the SEC’s public database of corporate filings. It includes both quantitative and qualitative data for legal entities that issue securities in the U.S. Accessible since the mid-1990s, EDGAR offers its data for free, rendering it a crucial resource for corporate OSINT, financial analysis, and investigative endeavors.

#### Why Use edgar-tool Instead of the EDGAR Website?

Despite [EDGAR](https://bellingcat.gitbook.io/toolkit/more/all-tools/edgar)’s utility, its **web interface** can be difficult to use for large-scale tasks or specialized queries (e.g., no simple batch downloading, no single RSS feed for multiple entities, etc.). **edgar-tool** overcomes these limitations by:

1. **Automating Search & Download**: Scrapes EDGAR in chunks, merges results, and exports them in `.csv` or `.jsonl`, avoiding repetitive manual page-by-page downloads.
2. **Enabling Large-Scale Analysis**: The tool can handle thousands of filings, letting you run advanced queries (like tracking mentions of a keyword in multiple forms).
3. **Filterable RSS**: Subscribes to the broad EDGAR RSS feed, but filters results by the specific tickers you care about, generating a single consolidated file.

### EDGAR Command Line Interface (edgar-tool) — Detailed Overview

#### 1. Automated Bulk Retrieval of Filings

* **Challenge with EDGAR Web**: The SEC interface typically requires browsing multiple result pages and downloading PDF/HTML documents individually. This is tedious and prone to errors when dealing with dozens or hundreds of filings.
* **edgar-tool Solution**: **Text Search** automates queries, segmenting them into manageable “chunks.” It then merges all pages into a single `.csv` or `.jsonl` file and can optionally download the linked filings themselves.
  * **Example**: Searching for references to “ESG,” “cybersecurity,” or any specific phrase across 1,000 documents becomes a single command instead of manual page-by-page clicks.

#### 2. Standardized Financial Data from XBRL

* **Challenge with EDGAR Web**: While EDGAR makes data from **XBRL** filings available, companies often define their own custom tags. Basic direct comparisons of net income or total assets across different issuers can be messy or incomplete.
* **edgar-tool Solution**: It references a custom library of commonly used GAAP/XBRL tags mapped to plain-English financial metrics. This leads to more consistent results (e.g., “revenue,” “net income,” “debt,” etc.) for each company.
  * **Example**: Instantly fetch a unified time-series for any public company’s key statements (balance sheet, income statement, cash flow) without sifting through dozens of custom tag variations.

#### 3. Flexible, Filtered RSS Feed for Company Monitoring

* **Challenge with EDGAR Web**: You can subscribe to EDGAR’s broad RSS or individual company feeds, but not a single feed covering all your target companies in one place. It’s easy to miss filings or get overwhelmed by irrelevant results.
* **edgar-tool Solution**: **RSS** commands filter the main EDGAR feed by specific tickers or **CIKs** (Central Index Keys). You get a consolidated `.csv` or `.jsonl` with the latest filings from only the entities you care about.
  * **Example**: Monitor five technology stocks for new 8-K or 10-K forms. Receive daily or hourly updates in one file, rather than visiting multiple feeds or searching manually.

#### 4. Comprehensive Search Parameters & Output Options

* **Search Parameters**:
  * Keywords/Phrases: partial or exact matches (“cyber risk,” “carbon offsets”).
  * Entity Data: Tickers, CIKs, or company names for narrower focus.
  * Filing Types: Choose among annual reports (10-K), quarterly (10-Q), registration statements, or insider trading forms.
  * Date Ranges: Limit to, say, “2022-01-01 to 2022-12-31.”
  * Location: In or principal executive offices located in a certain region (e.g., “Egypt”).
* **Output Options**:
  * `.csv` (default) or `.jsonl` for easy integration with Excel, Python pandas, or other data tools.
  * `.json` or `.jsonl` for line-by-line JSON objects—handy if you want to parse them with scripts or feed them into advanced analytics (like an NLP pipeline).

#### 5. Command-Line Simplicity & Python Integration

* **CLI Usage**: A single terminal command (e.g., `edgar text_search "John Doe"`) runs queries with optional arguments for specialized tasks.
* **Python Compatibility**: If deeper analysis or automated workflows are desired, you can embed `edgar-tool` results in Jupyter notebooks, or orchestrate them within a Python pipeline (particularly helpful for large OSINT or data-mining projects).

#### 6. Support for Large Queries & Retry Logic

* **Challenge**: EDGAR enforces \~10 requests/second, and long queries can stall or fail.
* **edgar-tool**: Includes a **retries** feature, random wait intervals (`--min_wait` / `--max_wait`) to stay within EDGAR’s usage guidelines. Automates re-requests if the initial call fails, ensuring robust data acquisition over big searches.

#### 7. Periodic or On-Demand Data Gathering

* **RSS Interval**: The `--every_n_mins` option repeatedly checks for new filings, appending them to an ongoing output file. This is convenient for near real-time monitoring of evolving corporate disclosures.
* **Ad Hoc Search**: The text search can be run once for immediate insight or scheduled (e.g., weekly) to track mentions of a certain keyword over time.

#### 8. Extra Tools: Financial Profile CSV

* In addition to the real-time search & RSS, the tool’s maintainers provide a **financial dataset** in `.csv` form. This dataset aims to unify official EDGAR numbers into consistent lines for each public company, making cross-company or time-series analysis more straightforward.
  * Great for generating quick historical charts (like net income trends) in Excel or Python.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

`edgar-tool` requires the Python interpreter to download and use. It supports any currently maintained version of Python (Python >=3.9 as of this writing). Check the [_Programming Language_ section of `edgar-tool`'s release page on PyPI](https://pypi.org/project/edgar-tool/) for officially supported versions. When in doubt, use the latest stable Python version. You can download the latest version of the Python interpreter from [www.python.org/downloads/](./#url).

## Limitations

* **Data Coverage**: EDGAR is strongest post-2001, with partial coverage from 1994–2000. No private-company data.
* **Rate Limits**: The SEC enforces max requests (\~10/s). The tool handles this by spacing or retrying requests, but massive downloads still take time.
* **Potential Gaps in XBRL**: Some foreign or unusual filers may use custom or incomplete tags that limit the consistency of the standardized table. Although edgar-tool references a standard XBRL library, some foreign filers or unusual forms can break uniform tagging.
* **No Summaries**: The tool provides raw documents and structured metadata but does not generate textual summaries or deeper analytics for you.

## Ethical Considerations

* **SEC Policy Compliance**: Do not exceed EDGAR’s official usage limits or circumvent established disclaimers.
* **Legitimate Use**: Data here can be sensitive. Ensure compliance with securities laws regarding insider information or derivatives of that info.
* **Attribution**: Cite EDGAR as the data source and handle CSV outputs responsibly (especially if dealing with personal or sensitive content).
* **Data Accuracy**: Some filers might have irregular or missing data. Always cross-verify if your investigative or financial conclusions have major consequences.
* Respect the [SEC's _Internet Security Policy_](https://www.sec.gov/about/privacy-information#security) and [_Vulnerability Disclosure Policy_](https://www.sec.gov/vulnerability-disclosure-policy)
* Respect the [SEC EDGAR API's fair access policy](https://www.sec.gov/search-filings/edgar-search-assistance/accessing-edgar-data) & current 10 requests/second max request limit

## Guide

* **Official GitHub**: [Bellingcat/EDGAR](https://github.com/bellingcat/EDGAR) for usage instructions, advanced macros, and code examples.
* **Bellingcat Article**: _“New Tools Dig Deeper into Hard-to-Aggregate US Corporate Data”_ (Dec 18, 2023) by **George Dyer**.
  * Illustrates how to harness text search for ESG trends, unify financial time-series across multiple companies, and track multiple tickers via a single feed.

## Tool provider

George Dyer (former Bellingcat Tech Fellow)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
