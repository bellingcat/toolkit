---
description: >-
  A tool for analyzing content replication and site architecture to detect
  information laundering.
---

# The Information Laundromat

## URL

[https://informationlaundromat.com](https://informationlaundromat.com)

## Description

Information Laundromat is an open-source **lead generation tool** designed for identifying patterns of **content laundering -** that is, reprinting or republishing content (often from state-sponsored or otherwise questionable sources) in ways that mask or obscure its original publisher - and **infrastructural connections** across websites. Developed by the Alliance for Securing Democracy (ASD) with contributions from the University of Amsterdam and the Institute for Strategic Dialogue (ISD), it provides two main functions:

### **1. Content Similarity Search**

* Compares URLs, titles, or text snippets (≥15 words) across the open web.
* Uses multiple sources—such as the [**Global Database of Events, Language, and Tone (GDELT)**](https://www.gdeltproject.org/), various search engines, and the [**Copyscape** ](https://www.copyscape.com/)plagiarism detection service—to identify near-duplicate or highly similar content. (Note: **GDELT** is a global database that logs worldwide broadcasts/online news, and **Copyscape** checks plagiarism by comparing text across its index.)
* Provides similarity scores (e.g., 97% for near-identical copies) to help investigators see which sites replicate or closely mimic the queried text.
* **Craig Silverman** (2024, [_Digital Investigations_](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat)) describes the Laundromat as “one of the newest and most interesting free website analysis tools I’ve come across,” and notes how ASD used it to detect repeated reprinting of Russia Today (RT) content.
* According to Silverman’s interview with the tool’s developer, Peter Benzoni, items scoring [**70% or higher**](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat) on content similarity are “likely to be most of interest.”

{% tabs %}
{% tab title="Content Similarity Search" %}
<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>"Content Similarity” input form: shows how to enter a URL or text snippet, select a country, language, and search engines, and then run a search for reprinted or near-identical content</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption><p>“Results with Similar Titles or Content”: a table listing domains, article titles, text snippets, and match percentages, illustrating how the tool surfaces sites sharing overlapping text from the query.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

### **2. Metadata Similarity Search**



{% tabs %}
{% tab title="Metadata Similarity Search" %}
<figure><img src=".gitbook/assets/image (7).png" alt=""><figcaption><p>“Metadata Similarity” input form: displays fields to enter one or more domains, along with options like ‘Run URLSCAN’ or ‘In-group matching,’ enabling users to detect shared technical indicators among websites.</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption><p>“Indicators” results page: a color-coded table (Tier 1 in green, Tier 2 in yellow, Tier 3 in teal) detailing unique or moderate-to-weak indicators (certificates, IPs, subnets, cookies, etc.) found for the queried domain(s).</p></figcaption></figure>
{% endtab %}
{% endtabs %}

Scans domains to find shared infrastructure, such as [**IP addresses**](https://en.wikipedia.org/wiki/IP_address), [**unique analytics/advertising codes** (e.g., Google Analytics or Yandex IDs)](https://www.bellingcat.com/resources/2024/01/09/using-the-wayback-machine-and-google-analytics-to-uncover-disinformation-networks/), or **CSS classes** (design and style rules that are reusable across websites) and ranks results in three-tiered “indicator” categories.

#### **Indicator categories**

<details>

<summary><strong>Tier 1</strong>: High-confidence indicators that strongly suggest a connection.</summary>

1.  **Adobe Analytics ID (`1-adobe_analytics_id`)**

    Adobe Analytics uses a unique ID to track site traffic and user behavior. If two sites share the same ID, it can suggest that a single entity or marketing team manages both. However, agencies managing multiple clients might reuse IDs, causing false positives.
2.  **Domain Certificate (`1-cert-domain`)**

    An SSL/TLS certificate authenticating a website’s identity for secure (HTTPS) connections. If a single certificate explicitly covers two or more domains, it is typically strong evidence they share ownership or management. \
    However, DDoS protection services and Content Delivery Networks (CDNs) sometimes issue “universal” or “shared” certificates to multiple unrelated sites. These platforms, such as Cloudflare or Akamai, are designed to shield websites from Distributed denial-of-service (DDoS) attacks, which can overwhelm a site’s servers with malicious traffic. Similarly, CDNs are networks of servers distributed globally that cache and deliver web content (e.g., images and scripts) closer to end users, improving performance and reducing load times.
3.  **Cryptocurrency Wallet (`1-crypto-wallet`)**

    A wallet address for cryptocurrencies (e.g., Bitcoin, Ethereum) is used to send, receive, or store digital assets. **OSINT Note**: An identical wallet address on two sites strongly suggests a common financial link or ownership. However, cryptocurrency’s pseudonymous nature means additional data is needed to confirm identities or relationships.
4.  **Domain Name (`1-domain`)**

    The primary identifier (e.g., `example.com`) that a site uses. Observing how domain names are chosen can reveal shared naming conventions or patterns hinting at affiliation. Still, domains are easy to register so a shared domain pattern may be only a **partial** lead.
5.  **Domain Suffix (`1-domain_suffix`)**

    The top-level domain or country code at the end of a URL (e.g., `.com`, `.ru`, `.co.uk`).

    Shared suffixes might indicate a regional or organizational link. Yet, many TLDs are globally accessible, so it’s rarely a standalone proof of connection.
6.  **Facebook Pixel ID (`1-fb_pixel_id`)**

    A unique analytics/tracking code used by Facebook to measure ad performance on a site. Sites sharing a **Facebook Pixel ID** could have the same operator or marketing strategy. However, external agencies can configure one pixel across numerous clients, risking **misattribution**.
7.  **Google Analytics ID (`1-ga_id`)**

    A unique identifier in Google Analytics for tracking site visitors. Shared Google Analytics IDs strongly hint at common site administration. However, third-party services or marketing agencies may reuse an ID, so confirm with additional indicators if possible.
8.  **Google Analytics Tag ID (`1-ga_tag_id`)**

    &#x20;A tag ID for Google Analytics events or user interactions, supplementing or refining the overall GA tracking. Similar to a general GA ID, a shared tag ID may indicate common ownership or marketing. Again, watch out for agencies or widely used templates that could cause overlaps.
9.  **IP Address (`1-ip`)**

    A unique numeric identifier for a device or server on the internet. Shared IP addresses can reflect typical hosting or even the same physical server. However, **dynamic IP** allocation or large **shared hosting** environments make this a partial indicator; many unrelated sites can share one IP.
10. **Shodan Hostnames (`1-ip_shodan_hostnames`)**\
    Hostnames for an IP address as recorded by **Shodan**, a search engine for internet-connected devices. Overlapping hostnames may reveal consistent usage or ownership across multiple sites. But ephemeral or outdated Shodan data can lead to “ghost” hostnames no longer valid.
11. **Verification ID (`1-verification_id`)**\
    A code used to prove site ownership or authenticity (e.g., Google Site Verification).\
    When legitimate, matching verification IDs indicate a shared account or admin. However, if not carefully validated, verification tokens may expire, be reused, or be spoofed.
12. **Yandex Tag ID (`1-yandex_tag_id`)**\
    An analytics identifier from **Yandex Metrica**, Russia’s counterpart to Google Analytics. Similar to other analytics IDs, a **Yandex Tag ID** shared across sites can imply shared management. But third-party marketing or template usage may produce superficial overlaps.

</details>

<details>

<summary><strong>Tier 2</strong>: Moderate indicators  requiring more verification.</summary>

1.  **Ads.txt File (`2-ads_txt`)**

    A file indicating which companies are authorized to sell a site’s ad inventory (an **IAB** (Interactive Advertising Bureau) transparency initiative for digital ad sellers).\
    Overlapping ads.txt entries might point to common advertising partners or strategies. However, large ad networks can appear on many unrelated sites.
2.  **Shodan Vulnerabilities (`2-ip_shodan_vuln`)**

    Security weaknesses discovered by **Shodan** (a search engine for internet-connected devices) on a specific IP address.\
    If two sites share the same vulnerability profile, they might share hosting or configuration. Yet, popular software with known vulnerabilities can mislead investigators.
3.  **Subnet (`2-subnet`)**

    A subdivided portion of an IP network, often allocated by an **ISP** (Internet Service Provider) to multiple clients or internal networks, managed or allocated to specific clients or areas. Domains in the same subnet could share physical/ or virtual hosting or be organized under the same corporate network. Yet, subnets are frequently owned by major ISPs that host many disparate clients.
4.  **Technology Stack (`2-techstack`)**

    The software frameworks or components powering a website (e.g., **LAMP**—Linux, Apache, MySQL, PHP—or **MERN**—MongoDB, Express.js, React, Node.js).\
    Matching stacks might show a shared developer approach, but these stacks are common, so interpret in context with other indicators
5.  **URLScan Autonomous System Number (`2-urlscan_asn`)**

    An ASN (Autonomous System Number) is assigned to a network entity that controls a range of IP addresses (e.g., large hosts like Amazon AWS or OVH). The same ASN can reflect the same hosting/ISP. However, large providers may host thousands of unrelated sites.
6.  **URLScan Console Messages (`2-urlscan_consolemessages`)**

    Console output from a site’s JavaScript (a programming language for web pages) or debugging logs, as captured by **URLScan** (a website scanner).

    If multiple sites consistently produce the same unique console messages, it could signal a shared developer or codebase. However, standard libraries or frameworks can produce identical messages on unrelated sites.
7.  **URLScan Cookies (`2-urlscan_cookies`)**

    Cookies identified during a **URLScan** crawl (small text files for stateful interactions, user tracking, or authentication). Shared or identical cookies (e.g., duplicate names and values) can hint at a common login system, analytics, or marketing frameworks. However, many mainstream platforms issue similar cookies, so they corroborate with other data.
8.  **URLScan Domains on Page (`2-urlscan_domainsonpage`)**

    The set of **external or embedded domains** found on a page, as captured by **URLScan**. Overlapping domains can reveal shared ad networks, tracking scripts, or content providers. Still, widely used services (social media, CDN scripts) appear on countless sites.
9.  **URLScan Global Variable (`2-urlscan_globalvariable`)**

    JavaScript global variables (pieces of data that can be accessed outside of scripts running on the URL in question) discovered by [**URLScan**](https://urlscan.io/). If two sites define the same distinctive global variable, that may imply a single developer or library. Generic libraries or frameworks also define similar variables, so interpret them carefully.
10. **URLScan URLs on Page (`2-urlscan_urlssonpage`)**

    All hyperlinks or references discovered on a webpage by [**URLScan**](https://urlscan.io/). Overlaps in outbound links or embedded resources can highlight common affiliates, but popular references (YouTube, social icons) are too common to confirm a relationship alone.
11. **URLScan Hrefs (`2-urlscanhrefs`)**

    The `href` attribute values (links) found in [**URLScan**](https://urlscan.io/). If unusual or distinctive link patterns match across two sites, it suggests a shared editorial approach. However, typical links to major sites or networks may appear on countless web pages.

</details>

<details>

<summary><strong>Tier 3</strong>: Weaker indicators are often seen on many sites and thus are less conclusive.</summary>

1.  **CDN Domain (`3-cdn-domain`)**

    A domain used by a **Content Delivery Network** (a network of servers worldwide that stores/caches website assets closer to visitors to reduce load times).\
    When two sites share the same CDN domain, it might simply mean they both use a popular CDN (e.g., Cloudflare, Akamai). This is common and not, by itself, evidence of connected ownership.
2.  **Content Management System (`3-cms`)**

    A platform (WordPress, Drupal, Joomla) for creating and managing web content. Its widespread use means identical CMS platforms usually offer little insight into relationships—unless you see unique plugins or custom code shared between sites.
3.  **CSS Classes (`3-css_classes`)**

    Classes defined in **CSS** (a styling language specifying how HTML elements are displayed).\
    If multiple sites have the same distinctive CSS class names, this might suggest shared developers or templates. However, standard frameworks (e.g., Bootstrap, and Tailwind) reuse many classes, reducing their significance.
4.  **Facebook Link (`3-facebook`)**

    A link to a **Facebook** (a major social media platform) page or post.\
    Most sites link to Facebook, so seeing a generic Facebook link is a weak indicator unless it’s the same specific group or user profile.
5.  **Footer Text (`3-footer-text`)**

    The text content found in the **footer** (the bottom section of an HTML page).\
    Repetitive or unique disclaimers can indicate a shared origin, but many sites have generic or default footers.
6. **Gab Link (`3-gab`)**\
   A link to **Gab** (a social network popular among the alt-right) profiles or posts.\
   Similar to Facebook links, this can indicate a shared audience or stance, but alone is not proof of deeper ties. It might show a shared audience or editorial stance, but it is insufficient to prove a deeper connection.
7.  **Non-Standard Header Value (`3-header-nonstd-value`)**

    A custom or unusual **HTTP header** (the information a web server sends along with site data, the part of the **HTTP header** listing server software (e.g., Apache, Nginx). However, caution is needed; some hosting providers add these headers, or site owners may emulate them.
8.  **Server Header (`3-header-server`)**

    The part of the **HTTP header** listing server software (e.g., Apache, Nginx).\
    Since many sites use the same software, a standard server string is weak evidence. Look for distinct or rare server signatures.
9.  **ID Tags (`3-id_tags`)**

    Unique identifiers in **HTML** (the standard markup language for the web) that label specific page elements.\
    Identical custom IDs across sites can imply the same template or developer. Generic frameworks often create overlaps with no real relationship. Distinctively named ID tags on multiple sites may indicate shared templates or developers.
10. **Iframe ID Tags (`3-iframe_id_tags`)**

    Unique HTML IDs for `<iframe>` elements, which embed external content. Iframes are widely used for embedding videos, ads, or forms. Repeated custom iframe IDs across multiple sites can suggest a single dev or template. Standard ones (e.g., from YouTube) are too common to matter.
11. **Shodan CPE (`3-ip_shodan_cpe`)**

    A **Common Platform Enumeration** (a naming scheme for software/hardware) string from **Shodan** (an engine that indexes internet-connected devices). Identical CPE data may point to the same device or the same unique software version. However, widely used hosting or hardware can also yield duplicates across unrelated sites.
12. **Shodan Ports (`3-ip_shodan_ports`)**

    Shodan discovered the open network ports on a given IP. Shared open ports or configurations may reflect a similar environment or host. Standard ports (80, 443) are nearly universal, so only unusual port combos are more telling.
13. **IP Range Owner Address (`3-ipms_domain_iprangeowner_address`)**

    The physical address of whoever owns the IP range. Overlapping hosting addresses can hint at a shared data center or colocation. Yet, many hosting providers serve diverse, unrelated clients at the same address.
14. **IP Range Owner CIDR (`3-ipms_domain_iprangeowner_cidr`)**

    The **CIDR** (Classless Inter-Domain Routing) block indicating a group of IP addresses allocated to an entity. Huge CIDR blocks often host numerous unrelated sites, so matches here alone can be superficial.
15. **IP Range Owner Name (`3-ipms_domain_iprangeowner_ownerName`)**

    The name of the organization or individual owning that IP range. If a niche or smaller entity owns an IP range, that’s more telling than seeing it’s from a massive cloud provider. Large hosts can add noise, a large cloud provider can host countless unrelated domains.
16. **Domain Name Server (`3-ipms_domain_nameserver`)**

    A DNS server that translates domain names to IP addresses for hosting. Shared nameservers might imply the same host or domain provider, but popular DNS services (e.g., Cloudflare DNS) support countless distinct sites.
17. **Other IPs Used by Domain (`3-ipms_domain_otheripused`)**

    Additional IPs a domain has used historically or currently. Overlapping secondary IPs can reveal migrations or multiple addresses for the same entity. Still, dynamic or short-lived IP assignments might confound this.
18. **Former Sites on This IP (`3-ipms_siteonthisip_before`)**

    Sites previously hosted on the same IP address are no longer there, which might indicate historical relationships or migrations. Yet hosting turnover is common, and ephemeral overlaps often occur.
19. **Broken Sites on This IP (`3-ipms_siteonthisip_broken`)**

    Currently non-functional sites found on the same IP. This can show the hosting environment’s status, but if multiple sites are “down,” it may reflect server issues or discontinued projects. Multiple broken sites may reflect hosting issues rather than an intentional network.
20. **Current Sites on This IP (`3-ipms_siteonthisip_now`)**

    There are currently sites that share the IP . Co-hosting can hint at a shared environment. Yet, many shared hosting solutions group dozens or even hundreds of random sites together.
21. **User Agents (`3-ipms_useragents`)**

    An HTTP request sends browser/device strings indicating software, OS, etc. Patterns in user agents can inform who visits or manages a site. However, user agent strings are easily spoofed and widely repeated.
22. **Link Href Attributes (`3-link_href`)**

    The `href` values for hyperlinks on a webpage. Distinctive or unusual link patterns across sites can indicate a relationship (e.g., referencing the same obscure subdomain). Yet, many links (e.g., to Twitter or YouTube) are too generic.
23. **Generic Meta Tags (`3-meta_generic`)**

    Standard **meta tags** (brief pieces of info placed in HTML) like description, keywords, or author.

    If these tags are extremely specific or identical across multiple sites, that suggests a shared template. But broad or default meta tags appear on numerous unrelated websites.
24. **Social Media Meta Tags (`3-meta_social`)**

    Social meta tags (e.g., Open Graph, Twitter Cards, formatting metadata that defines how links appear on social media) define how a webpage is shown on social platforms. Identical or highly specific social meta tags might reflect a single developer's approach or a cloned site. However, many platforms apply default social meta tags.
25. **Outbound Domain (`3-outbound-domain`)**

    Any external domains to which a website links or redirects. Common outbound links can point to shared references or affiliates, but well-known domains (news outlets, social platforms) are widely shared.
26. **Patreon Link (`3-patreon`)**

    A link to a **Patreon** page (a crowdfunding service for creators). If multiple sites link to the **same** Patreon, it may reveal a single content creator or organization. But Patreon usage alone is common for funding and not necessarily a sign of shared site ownership.
27. **Script Source Attributes (`3-script_src`)**

    The `src` attribute in `<script>` tags, indicating the URL of a JavaScript file (JavaScript file locations). That can be telling if two sites embed the same unusual or custom script source. However, widely used libraries (e.g., jQuery from a CDN) are ubiquitous.
28. **Sitemap Entries (`3-sitemap_entries`)**\
    The URLs listed in a site’s sitemap.xml (an XML file for search engine indexing) are used for SEO or site indexing. Overlapping or identical sitemaps can suggest a shared approach or direct copying. Still, standard templates can generate similar structures.
29. **Telegram Link (`3-telegram`)**\
    A link to **Telegram** (a chat/messaging platform) channels or posts.\
    &#x20;Similar to other social links, it may indicate a shared Telegram community or operator. However, Telegram is widely used, so handle it as a supporting detail, not primary proof.
30. **Twitter Link (`3-twitter`)**\
    A link to a **Twitter** (a major social media platform) profile or tweet. Common or popular tweets/profiles might appear on many sites. If the same **unusual** handle or tweet is referenced, that’s more meaningful.
31. **UUID (`3-uuid`)**\
    A Universally Unique Identifier (128-bit code) labels objects in computer systems. If multiple sites share the same UUID in code or database references, this strongly indicates a shared system or development approach. Collisions in UUIDs are rare, so if confirmed genuine, this can be significant.
32. **WHOIS Registrar (`3-whois-registrar`)**\
    The **domain registrar** (company that registers domain names, e.g., GoDaddy, Namecheap). Popular registrars serve countless unrelated websites, so alone it’s not a strong indicator. But an obscure registrar used by both sites could add weight to a potential link.
33. **WHOIS Creation Date (`3-whois_creation_date`)**\
    The date a domain was initially registered.\
    Similar or identical creation dates might hint at a coordinated batch registration. But popular times (e.g., big domain discount day) can produce coincidences.
34. **WHOIS Server (`3-whois_server`)**\
    A **WHOIS server** that hosts registration info for the domain’s TLD or registrar.\
    Using the same WHOIS server often just means the same TLD or registrar, not necessarily a real connection.
35. **WordPress Blocks (`3-wp-blocks`)**\
    Content blocks used in the **WordPress block editor** (nicknamed Gutenberg). Shared or custom WordPress blocks can suggest a common theme or developer, but default blocks are universal in WordPress sites.
36. **WordPress Categories (`3-wp-categories`)** \
    WordPress uses taxonomic “categories” to organize posts by topic. Identical category structures could indicate a cloned or commonly owned site, but generic categories (e.g., “News,” “Politics,” etc.) are too common to assume a link.
37. **WordPress Pages (`3-wp-pages`)**\
    Static or special “pages” in **WordPress** (different from blog posts). Overlapping or identical page structures might point to a shared template or theme. Popular themes can produce coincidental parallels across many sites.
38. **WordPress Posts (`3-wp-posts`)**\
    Blog posts or articles in **WordPress**.\
    If two sites have extremely similar post structures or post slugs, they could be connected. However, WordPress is widely used, so look for more distinctive correlations.
39. **WordPress Tags (`3-wp-tags`)**\
    Keywords or descriptors assigned to WordPress posts for navigation and organization.\
    Non-generic tags repeated across sites might indicate a shared editorial approach or staff, but general tags are too common to confirm a link alone.
40. **WordPress Users (`3-wp-users`)**\
    The user accounts within a WordPress site typically have roles like Admin, Editor, and Author. Detecting the same custom user (beyond “admin”) in multiple sites strongly suggests shared ownership or staff. Standard default roles are not unique enough on their own.
41. **YouTube Link (`3-youtube`)**\
    A link to a **YouTube** (video-sharing platform) channel or video. If the same channel or video repeatedly appears on different sites, that might reflect a unified content strategy. However, YouTube is extremely popular, so confirm with more robust indicators.

</details>

By combining these searches, users can quickly spot patterns of content laundering and potential infrastructure overlaps. **Batch processing** is available via registration, enabling a rapid first-pass examination of multiple URLs or domains.

## Using Information Laundromat

### **Step-by-step guide: Content Similarity Search**

To identify websites that replicate or closely match specific content, helping to trace how narratives or articles are redistributed across the web.

1. **Input Content**
   * In the Content Similarity area, enter a URL, title, or snippet of text (≥15 words).
   * For instance, to track the spread of a particular article, input its exact URL or a key excerpt.
2. **Adjust Search Options**
   * **Country & Language**: If supported by the chosen search engines, narrow your query to specific regions or languages.
   * **Search Engines & Databases**: Pick from [GDELT](https://www.gdeltproject.org/), [Copyscape](https://www.copyscape.com/), and other engines.&#x20;
3. **Review Results**
   * [Results appear with **similarity scores**](https://informationlaundromat.com/dashboard) (e.g., 97% means near-duplicate).
   * According to the developer Peter Benzoni (via Craig Silverman’s [interview](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat)), a 70% or higher similarity rating usually indicates that content is heavily replicated.
   * If there are many hits, you can **export** them (e.g., .csv or .xlsx) for further filtering or pivot table analysis. (Excel pivot tables help by grouping data by domain or score.)
4. **Interpret Carefully**
   * High similarity among multiple sites may imply a broader content-laundering network.
   * However, the tool alone **does not** confirm the content’s true origin or prove a direct relationship - only that text is overlapping.

***

### **Step-by-step-guide: Metadata Similarity Search**

**Purpose**: To detect infrastructure-level connections between domains, such as shared IP addresses or analytics codes, which may reveal hidden relationships between websites.

**Step-by-Step Guide**:

1. **Input Domains**: In “Metadata Similarity,” enter one or more domain names (e.g., domain1.com, domain2.com) you suspect might share ownership or design.
2. **Run the Search**:
   * The system inspects metadata such as[ IP addresses, SSL certificates, analytics codes, CSS overlap](https://informationlaundromat.com/indicators), etc.
   * “If you have a set of sites \[...], this is a good way to do a quick snapshot \[...]” says developer **Benzoni** in [Silverman’s piece](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat).
3.  **Interpret the** [**Indicator Tiers**](https://informationlaundromat.com/about#Interpreting%20Indicator%20Validity) **(see above)**

    **Combine multiple indicators**—especially from Tier 1 or Tier 2—for more substantial evidence of a link.

    * **Popular CDN services** like [**Cloudflare** ](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)can mask a site’s true IP address or SSL certificate by serving the site’s content from worldwide caches.
      * Because CDNs hide the actual hosting details, an investigator might encounter “shared IPs” or “shared SSL” that are unrelated. Recognizing CDN usage helps avoid false positives when linking websites.
4. **Review Connections**:
   * Examine sites with multiple overlapping indicators for stronger connections.
   * For single sites or weaker indicators (Tier 3), it’s best to corroborate with other tools or methods, as the shared use of popular services can lead to misleading connections.
5. **Export and Analyze**:
   * Export results to cross-check using external OSINT platforms like [DNSlytics](https://dnslytics.com/), or passive DNS providers. **Passive DNS providers** log and display historical DNS data—like past IP addresses, name server changes, or subdomains—over time. These archives allow investigators to piece together domain ownership changes, prior hosting details, and hidden network relationships that typical live DNS lookups may no longer reveal.
   * Investigators should integrate these findings with manual verification.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* **Account Registration** (with a provided code) for batch features is done via email after validation.&#x20;
* Familiarity with domain analysis, IP addresses, and analytics tools is recommended.

## Limitations

* **Content Similarity**: Does not establish content provenance or direct relationships between sites; high similarity scores only indicate content replication. Common phrases may yield high similarity scores with irrelevant results, especially if they are frequently discussed topics.
* **Metadata Similarity**: Connections based on shared infrastructure, such as hosting providers, can produce false positives. Researchers should carefully assess indicators, especially when connections rely on Tier 3 indicators (e.g., shared CSS), as these can be coincidental without further corroboration.

## Ethical Considerations

**Indicator Validity**: Distinguish between high-confidence Tier 1 data vs. broad Tier 3 overlaps.

**Avoid Misattribution**: Investigate thoroughly before concluding sites are connected, especially with free or commonly used hosting solutions. While using the tool, analysts must carefully assess indicator validity to avoid misattributing content or website relationships, as many elements, such as shared hosting, can create misleading connections. Careful verification is required.

## Guides and articles

Silverman, C. (2024, September 5). A look at the Information Laundromat website analysis tool \[Substack newsletter]. _Digital Investigations_. [https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat](https://digitalinvestigations.substack.com/p/a-look-at-the-information-laundromat) (discusses how the tool was applied in ASD’s research into RT content laundering and interviews the tool’s developer, Peter Benzoni).

## Tool provider

[Alliance for Securing Democracy (German Marshall Fund](https://securingdemocracy.gmfus.org/) of the United States),&#x20;

[Institute for Strategic Dialogue](https://www.isdglobal.org/) (based in the UK)

[University of Amsterdam (Digital Methods Initiative)](https://aihr.uva.nl/humanities-labs/digital-methods-initiative/digital-methods-initiative.html)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
