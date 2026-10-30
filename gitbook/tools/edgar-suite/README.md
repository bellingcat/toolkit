---
updated: '2026-10-29'
description: >-
  Tool for the retrieval of corporate and financial data from SEC's EDGAR
  (Electronic Data Gathering, Analysis, and Retrieval) database.
---

# EDGAR Command Line Interface (edgar-tool)

## URL

[https://pypi.org/project/edgar-tool/](https://pypi.org/project/edgar-tool/)

* Source code is freely available on [GitHub](https://github.com/bellingcat/EDGAR) ([edgar-tool 2.1.2](https://pypi.org/project/edgar-tool/2.1.2/), released 2025-05-15).
* Users can download `edgar-tool` (the CLI) directly from [PyPI](https://pypi.org/project/edgar-tool/)

Last source/version check: 2026-10-29.

## EDGAR Database Overview

[**EDGAR**](https://bellingcat.gitbook.io/toolkit/more/all-tools/edgar) (Electronic Data Gathering, Analysis, and Retrieval) serves as the SEC’s public database of corporate filings. It includes both quantitative and qualitative data for legal entities that issue securities in the U.S. Accessible since the mid-1990s, EDGAR offers its data for free, rendering it a crucial resource for corporate OSINT, financial analysis, and investigative endeavors.

#### Why Use edgar-tool Instead of the EDGAR Website?

Despite [EDGAR](https://bellingcat.gitbook.io/toolkit/more/all-tools/edgar)’s utility, its **web interface** can be difficult to use for large-scale tasks or specialized queries (e.g., no simple batch downloading, no single RSS feed for multiple entities, etc.). **edgar-tool** overcomes these limitations by:

1. **Automating Search & Download**: Scrapes EDGAR in chunks, merges results, and exports them in `.csv` or `.jsonl`, avoiding repetitive manual page-by-page downloads.
2. **Enabling Large-Scale Analysis**: The tool can handle thousands of filings, letting you run advanced queries (like tracking mentions of a keyword in multiple forms).
3. **Filterable RSS**: Reads the SEC’s XBRL RSS feed, but filters results by the specific tickers you care about, generating a single consolidated file.

### EDGAR Command Line Interface (edgar-tool) — Detailed Overview

#### 1. Automated Bulk Retrieval of Filing Search Results

* **Challenge with EDGAR Web**: The SEC interface typically requires browsing multiple result pages and downloading PDF/HTML documents individually. This is tedious and prone to errors when dealing with dozens or hundreds of filings.
* **edgar-tool Solution**: **Text Search** automates queries, segmenting them into manageable “chunks.” It then merges all pages into a single `.csv` or `.jsonl` file and includes links to the filings; downloading those documents requires a separate workflow.
  * **Example**: Searching for references to “ESG,” “cybersecurity,” or any specific phrase across 1,000 documents becomes a single command instead of manual page-by-page clicks.

#### 2. Access to Standardized Financial Data from XBRL (Companion Dataset)

* **Challenge with EDGAR Web**: While EDGAR makes data from **XBRL** filings available, companies often define their own custom tags. Basic direct comparisons of net income or total assets across different issuers can be messy or incomplete.
* **edgar-tool Solution**: While the `edgar-tool` CLI itself is dedicated to text and metadata retrieval, Bellingcat's [December 2023 introduction](https://www.bellingcat.com/resources/2023/12/18/new-tools-dig-deeper-into-hard-to-aggregate-us-corporate-data/) described a separate financial-profile `.csv` companion dataset; its current download location and update date have not been verified for this entry. This dataset uses a custom library to map commonly used GAAP/XBRL tags to plain-English financial metric (e.g., “revenue,” “net income,” “debt,” etc.).
  * **Example**: Instead of writing complex Python scripts to parse live XBRL data or sift through dozens of custom tag variations, a copy of the historical dataset could support comparisons of public-company financial statements, provided its source, coverage, metric definitions and update date are established first.

#### 3. Flexible, Filtered RSS Feed for Company Monitoring

* **Challenge with EDGAR Web**: You can subscribe to EDGAR’s broad RSS or individual company feeds, but not a single feed covering all your target companies in one place. It’s easy to miss filings or get overwhelmed by irrelevant results.
* **edgar-tool Solution:** The **RSS** command filters the SEC’s XBRL feed by company tickers and writes a consolidated `.csv`. It does not accept CIK filters or JSONL output.
  * **Example**: Monitor selected company tickers for filings included in the XBRL RSS feed. Receive daily or hourly updates in one file, rather than visiting multiple feeds or searching manually.

#### 4. Comprehensive Search Parameters & Output Options

* **Search Parameters**:
  * Keywords/Phrases: partial or exact matches (“cyber risk,” “carbon offsets”).
  * Entity Data: Tickers, CIKs, or company names for narrower focus.
  * Filing Types: Choose among annual reports (10-K), quarterly (10-Q), registration statements, or insider trading forms.
  * Date Ranges: Limit to, say, “2022-01-01 to 2022-12-31.”
  * Location: In or principal executive offices located in a certain region (e.g., “Egypt”).
* **Output Options**:
  * `.csv` (default) or `.jsonl` for easy integration with Excel, Python pandas, or other data tools.
  * `.json` for a JSON array or `.jsonl` for line-by-line JSON objects—handy if you want to parse them with scripts or feed them into advanced analytics (like an NLP pipeline).

#### 5. Command-Line Simplicity & Python Integration

* **CLI Usage**: A single terminal command (e.g., `edgar text-search "John Doe"`) runs queries with optional arguments for specialized tasks.
* **Python / Jupyter Compatibility**: If deeper analysis or automated workflows are desired, you can integrate `edgar-tool` results in Jupyter Notebooks, or orchestrate them within a Python pipeline (particularly helpful for large OSINT or data-mining projects).

#### 6. Support for Large Queries & Retry Logic

* **Challenge**: EDGAR enforces \~10 requests/second, and long queries can stall or fail.
* **edgar-tool:** Retries failed search-page requests, but exposes no `--min_wait` or `--max_wait` CLI flags. Check results for gaps after errors; retries do not guarantee complete retrieval.

#### 7. Periodic or On-Demand Data Gathering

* **RSS Interval**: The `--every-n-mins` option repeatedly checks for new filings, appending them to an ongoing output file. This is convenient for near real-time monitoring of evolving corporate disclosures.
* **Ad Hoc Search**: The text search can be run once for immediate insight or scheduled (e.g., weekly) to track mentions of a certain keyword over time.

#### 8. Extra Tools: Financial Profile CSV

* Alongside its search and RSS tools, Bellingcat’s December 2023 introduction described a companion **financial dataset** in `.csv` form. Its current download location and maintenance status have not been verified for this entry. This dataset aims to unify official EDGAR numbers into consistent lines for each public company, making cross-company or time-series analysis more straightforward.
  * Great for generating quick historical charts (like net income trends) in Excel or Python.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

`edgar-tool` requires Python. The [PyPI metadata for edgar-tool 2.1.2](https://pypi.org/project/edgar-tool/2.1.2/) specifies Python 3.9 or later. That minimum does not establish compatibility with every newer interpreter or dependency combination; consult the project’s installation guidance for your environment. Download Python from [python.org](https://www.python.org/downloads/).

## Limitations

* **Data Coverage**: EDGAR’s archive starts in 1994/1995, while this tool’s full-text search covers filings since 2001 and defaults to five years. Some private-company filings, such as Form D notices, are available; coverage is not comprehensive.
* **Rate Limits**: The SEC enforces max requests (\~10/s). The tool handles this by spacing or retrying requests, but massive downloads still take time.
* **Potential Gaps in XBRL**: Some foreign or unusual filers may use custom or incomplete tags that limit the consistency of the standardized table. These consistency limits concern the separate companion financial dataset, rather than an XBRL-standardization feature of the CLI.
* **No Summaries**: The tool provides filing-search records and structured metadata but does not generate textual summaries or deeper analytics for you.

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
  * **note:** _actually the CLI tool will improve on direct browser access to_ [_https://www.sec.gov/edgar/search/_](https://www.sec.gov/edgar/search/) _that has generic trackers in place last time we checked: Google Tag Manager (GTM) and Akamai._

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
