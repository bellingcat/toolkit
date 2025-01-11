---
description: >-
  A tool for analyzing content replication and site architecture to detect
  information laundering.
---

# The Information Laundromat

## URL

[https://informationlaundromat.com](https://informationlaundromat.com)

## Description

Information Laundromat is an open-source lead generation tool designed for identifying patterns of content laundering and infrastructural connections across websites. Developed by the Alliance for Securing Democracy (ASD) with contributions from the University of Amsterdam and the Institute for Strategic Dialogue, it provides two main functions:

1. **Content Similarity Search** - This feature identifies content replication by comparing URLs, titles, or text snippets across websites. It uses multiple sources, including the GDELT database and Copyscape, to rank results by similarity scores (e.g., 97% for near-identical copies), highlighting sites that duplicate or closely mimic the queried content. Craig Silverman notes that this feature is particularly useful for identifying networks that consistently reproduce state-sponsored content, such as from RT. This approach supports mapping out how certain narratives are amplified across networks, serving as an initial lead into further investigation.
2.  **Metadata Similarity Search** - This feature scans domains for shared infrastructure, using indicators like IP addresses, unique analytics or ad codes, and CSS classes. Results are organized by indicator tiers:

    * **Tier 1**: High-confidence indicators, such as unique Google or Yandex IDs, which strongly suggest connections.
    * **Tier 2**: Moderate indicators, such as subnets or shared response headers.
    * **Tier 3**: Lower-confidence indicators, such as shared CSS classes or common content management systems.

    These tiers help researchers assess the strength of potential connections. This added anlu crucial for drawing accurate links between sites. The tool allows for batch processing, enabling quick evaluation of multiple domains, which can then be further analyzed in more detail using DNS or analytics tools.

### Using Information Laundromat

**1. Content Similarity Search**

**Purpose**: To identify websites that replicate or closely match specific content, helping to trace how narratives or articles are redistributed across the web.

**Step-by-Step Guide**:

1. **Input Content**: Go to the _Content Similarity_ section and enter a URL, a title, or a snippet of text from the article or narrative you’re investigating. For example, if you want to track the spread of a specific article by RT, you can input either its URL or a key excerpt.
2. **Adjust Search Options**:
   * **Country and Language**: Choose the preferred country and language filters if relevant. These filters can narrow results to specific regions or language versions of the content.
   * **Search Engines and Databases**: Select databases (e.g., GDELT, search engines, and Copyscape) to broaden the scope of results. Selecting all sources is recommended for comprehensive analysis.
3. **Review Results**: The tool provides a list of sites with similar or identical content, sorted by **similarity score** (e.g., 97% for nearly identical matches).
   * **Score Interpretation**: Scores over 70% are generally more reliable for tracing duplication. Silverman suggests that results with a high similarity score are likely to have replicated content.
   * **Export Results**: If the search yields many results, download the data to an Excel file. Use tools like pivot tables to filter and analyze these entries based on similarity scores or domain patterns.
4. **Analyze the Patterns**: High-similarity scores across multiple sites could indicate a coordinated network. Consider sites with identical or near-identical replication as potential parts of a content laundering network.

***

**2. Metadata Similarity Search**

**Purpose**: To detect infrastructure-level connections between domains, such as shared IP addresses or analytics codes, which may reveal hidden relationships between websites.

**Step-by-Step Guide**:

1. **Input Domains**: In the _Metadata Similarity_ section, enter a list of domains you suspect may be related. For example, you might investigate several local news sites that publish similar political content and want to see if they are linked in any way.
2. **Run the Search**:
   * The tool scans for metadata across infrastructure indicators, including IP addresses, analytics or advertising codes, and CSS configurations.
   * For best results, enter multiple domains at once. Silverman points out that the tool’s strength is in comparing sites, making it ideal for batch processing.
3. **Interpret the Indicator Tiers**:
   * **Tier 1**: Strong connections (e.g., identical Google Analytics or Yandex IDs) indicate a high likelihood of common ownership or coordination.
   * **Tier 2**: Moderate indicators, such as subnets or similar meta tags, suggest potential links but require further validation.
   * **Tier 3**: Weaker indicators like shared CSS classes or generic CMS (e.g., WordPress) are common and should not be solely relied upon to establish a connection.
4. **Review Connections**:
   * Examine sites with multiple overlapping indicators for stronger connections.
   * For single sites or weaker indicators (Tier 3), it’s best to corroborate with other tools or methods, as the shared use of popular services (like Cloudflare) can lead to misleading connections.
5. **Export and Analyze**:
   * You can export the results to track patterns, noting which sites share multiple Tier 1 or Tier 2 indicators.
   * Use these insights to form initial hypotheses about the network structure, which can then be refined using additional analysis tools, like DNSlytics or SpyOnWeb, for further verification.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Account registration with a code from the administrators.

## Limitations

* **Content Similarity**: Does not establish content provenance or direct relationships between sites; high similarity scores are only indicative of content replication. Common phrases may yield high similarity scores with irrelevant results, especially if they are frequently discussed topics.
* **Metadata Similarity**: Connections based on shared infrastructure, such as hosting providers, can produce false positives. Researchers should carefully assess indicators, especially when connections rely on Tier 3 indicators (e.g., shared CSS), as these can be coincidental without further corroboration.

## Ethical Considerations

While using the tool, analysts must carefully assess indicator validity to avoid misattributing content or website relationships, as many elements, such as shared hosting, can create misleading connections. Careful verification is required.

## Guides and articles

Silverman, C. (2024, September 5). A look at the Information Laundromat website analysis tool \[Substack newsletter]. _Digital Investigations_. [https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat)

## Tool provider

[Alliance for Securing Democracy at the German Marshall Fund](https://securingdemocracy.gmfus.org/),&#x20;

[Institute for Strategic Dialogue](https://www.isdglobal.org/)

[University of Amsterdam (Digital Methods Institute)](https://aihr.uva.nl/humanities-labs/digital-methods-initiative/digital-methods-initiative.html)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
