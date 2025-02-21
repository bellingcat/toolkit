---
description: Database of corporate filings for the US
---

# EDGAR

## URL

[https://www.sec.gov/edgar/search/](https://www.sec.gov/edgar/search/)

## Description

EDGAR (Electronic Data Gathering, Analysis, and Retrieval system) is a database of corporate filings maintained by the U.S. Securities and Exchange Commission. These filings contain a wealth of quantitative and qualitative information on every legal entity that issues non-exempt securities in the United States.

EDGAR is the primary system for companies and others to submit documents under the Securities Act of 1933, the Securities Exchange Act of 1934, the Trust Indenture Act of 1939, and the Investment Company Act of 1940.

The EDGAR database provides access to corporate information, allowing research of public companies' financial information and operations. It also includes information provided by mutual funds (including money market funds), exchange-traded funds (ETFs), and variable annuities.

Best uses are to track annual reports, top level management of companies, subsidiaries, shareholders, mergers & acquisitions.

Search by keyword, company name, ticker symbol, location or the name of an individual.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

None

## Limitations

* Users cannot download at once all the documents returned by a text search of the database.
* The data only covers publicly traded companies. For every other company not traded on a stock exchange, research has to be done separately in the business divisions of the Secretaries of State.
* Owing to shifting data tags, it’s extremely cumbersome to create financial profiles for single companies or to perform comparisons between their respective financial metrics.
* RSS feeds are available, but each company is its own RSS Feed, there is no functionality to group several in one place. There are [group RSS feeds](https://www.sec.gov/structureddata/rss-feeds) for the most recent filings, and are updated every 10 minutes during business hours, but the format, output and content of these may change without prior notice.

See more about these limitations in: George Dyer:[ New Tools Dig Deeper Into Hard-to-Aggregate US Corporate Data](https://www.bellingcat.com/resources/2023/12/18/new-tools-dig-deeper-into-hard-to-aggregate-us-corporate-data/), Bellingcat.

According to their own [website](https://www.sec.gov/edgar/searchedgar/aboutedgar.htm):

> Not all documents filed with the Commission by public companies will be available on EDGAR. Companies were phased in to EDGAR filing over a three-year period, ending May 6, 1996. As of that date, all public domestic companies were required to make their filings on EDGAR, except for filings made in paper because of a hardship exemption. Third-party filings with respect to these companies, such as tender offers and Schedules 13D, are also filed on EDGAR.
>
> However, some documents are not yet permitted to be filed electronically, and consequently will not be available on EDGAR. Other documents may be filed on EDGAR voluntarily, and consequently may or may not be available on EDGAR. For example:
>
> * Form 144 (notice of proposed sale of securities) may be filed on EDGAR at the option of the filer.
> * Forms 3, 4, and 5 (security ownership and transaction reports filed by corporate insiders) filed before June 30, 2003 may be filed on EDGAR at the option of the filer, but those filed on or after that date must be filed on EDGAR.
> * Filings by foreign companies and foreign governments before November 4, 2002 either could be made on EDGAR at the option of the filer, or were not permitted to be filed electronically, but from that date on, these filings must be made on EDGAR.

## Ethical Considerations

\-

## Guide

* Public company search - type the company’s name or ticker symbol in the search bar [here](https://www.sec.gov/search-filings). Retrieves filings for a specific company and to find company information — registered name, address, telephone number, state of incorporation, [_Central Index Key (CIK)_](#user-content-fn-1)[^1] number, [_Standard Industrial Classification (SIC)_](#user-content-fn-2)[^2] code, and fiscal year end.
* A more detailed search can be performed [here](https://www.sec.gov/edgar/search/) - allows search by keywords, company name, [_stock ticker_](#user-content-fn-3)[^3], CIK number, and individual's name. This search allows to filter filings by date, type and also has a dropdown menu for location (principal executive offices in - the primary location associated with a filing - could be in the US or other countries).
* The largest amount of information is usually in the annual, quarterly and current reports. Some companies also have beneficial ownership filings.
* The filings show up like this and can be opened in a `.htm` or `.xml` format.

<figure><img src=".gitbook/assets/Image 3.png" alt="" width="563"><figcaption><p>Basic company name search in the search bar for Boeing</p></figcaption></figure>

* The `.xml` format is somewhat better, because it contains hyperlinks that lead to every associated document in a specific filing including each submitted SEC form and exhibit. To get to a specific filing in an `.xml` format, click on any of the hyperlinked results (in blue) in the Form & File column.

_**Example**_: Search for Boeing in the search bar, select Boeing Co. Below are the results that show up when you hit the search button. From the Form & File column, click on the 8-K (Current report) or any other filing.

<figure><img src=".gitbook/assets/Image 2.png" alt="" width="563"><figcaption><p>Search results page</p></figcaption></figure>

<figure><img src=".gitbook/assets/Image 4.png" alt="" width="563"><figcaption><p>Selected file from results page</p></figcaption></figure>

Select Open Document to reach the `.htm` file or Open filing to reach the `.xml` file (each option opens a new tab in your browser)

The `.xml` file will contain different hyperlinks for document and data files. In this example the 8-K file (document ba-20240731.htm iXBRL) links to the full form 8-K filing (known as a “current report” and it is the report that companies must file with the SEC to announce major events that shareholders should know about).

<figure><img src=".gitbook/assets/image 5.png" alt=""><figcaption><p>Example of an .xml file from a filing with the US Securities and Exchange Commission</p></figcaption></figure>

If you want to parse EDGAR data, The Comprehensive R Archive Network have published this PDF guide - [Tool for the U.S. SEC EDGAR Retrieval and Parsing of Corporate Filings](ttps://cran.r-project.org/web/packages/edgar/edgar.pdf).

Alphanome have [published a parser for SEC data](https://sec-parser.readthedocs.io/en/stable/notebooks/user_guide.html). The guide is a walk-through for the steps needed to install and use the library for parsing SEC EDGAR HTML documents into semantic elements and trees.

SEC have their own guides on how to use EDGAR, accessible [here](https://www.sec.gov/search-filings/edgar-search-assistance/how-do-i-use-edgar).

SEC also have some basic information on how to access their [EDGAR RESTful APIs here](https://www.sec.gov/search-filings/edgar-application-programming-interfaces).&#x20;

## Tool provider

[U.S. Securities and Exchange Commission (SEC)](https://www.sec.gov/), United States

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| LPetrova        |

[^1]: A Central Index Key or CIK number is a unique number assigned to an individual, company, filing agent or foreign government by the United States Securities and Exchange Commission. The number is used to identify its filings in several online databases, including EDGAR. The numbers are up to ten digits in length and are permanent identifiers that may not be changed.

[^2]: The Standard Industrial Classification (SIC) is a system for classifying industries by a four-digit code to indicate the company's type of business. The SIC codes are also used in the Division of Corporation Finance as a basis for assigning review responsibility for the company's filings. Full ist of SIC codes can be found [here](https://www.sec.gov/search-filings/standard-industrial-classification-sic-code-list).

[^3]: A stock ticker symbol or stock symbol is an abbreviation used to uniquely identify publicly traded shares of a particular stock on a particular stock market. Stock tickers are arrangements of symbols or characters representing specific assets or securities listed on a stock exchange or traded publicly. For example XNYS:BA is the stock ticker for Boeing on the New York Stock Exchange.
