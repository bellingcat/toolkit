---
updated: '2025-11-01'
description: >-
  DomainTools Whois provides detailed domain name registration information, and
  can be used to investigate details about domains or IP addresses.
---

# DomainTools Whois Lookup

## URL

[https://whois.domaintools.com/](https://whois.domaintools.com/)

## Description

DomainTools Whois allows you to gather information about a domain name including domain name registration information, including the registrant's contact details, registration dates. These details can help to identify ownership and administrative details of a domain.

The data fields returned in the primary Whois entry can be used to pivot to additional data points during an investigation. For example, you can see the number of other domains associated with the registrant, the number of other domains hosted on the same IP address, and the number of historical Whois records in the DomainTools database.

The main Whois page includes a mix of free and paid tools that are offered by DomainsTools. You can use these by hovering over the small arrows next to some of the entries (e.g. Name Servers, IP Address etc.), or from the Tools section on the right side of the page.

<figure><img src=".gitbook/assets/Screenshot 2024-06-15 at 2.09.32 PM.png" alt=""><figcaption></figcaption></figure>

Of these Tools, the following can be used without a DomainTools license:

* **Reverse NS:** see what other domains are served by the selected name server. This can help you understand which websites are managed by the same hosting provider or server.
  * A name server is a computer that translates domain names (such as www.google.com) into IP addresses (like 8.8.8.8), enabling computers to find and connect with each other on the internet.
* **Reverse IP Address Lookup:** find all the domain names associated with a specific IP address.
* **Current screenshot preview:** see the most recent screenshot of the content hosted on the website (if available)
* **Available TLDs:** see an overview of other domains with the same website name but different top level domains (TLDs) such as ".net", ".org" or ".info". This can be used to discover other domains associated with the website, which may be used to host discover or outdated content.

## Advantages of a paid subscription

From an investigations standpoint, one of the most valuable aspects of a paid subscription is that it will allow you to view historical information about a domain. This is increasingly important as more registrants are choosing to anonymise their identities. If the domain in question has historical ownership information, and you can compare the live version of the website to a previous version by using a web archiving tool like Wayback Machine, you might be able to infer (perhaps inconclusively) that the historical owner continues to run the webpage in question.

### Additional tools available for subscribers

Several tools are available for paying subscribers - a comprehensive breakdown can be found [here](https://www.domaintools.com/products/domain-research/pricing/). DNSDB Scout and IRIS Investigate are particularly useful in investigations:

* [DNSDB Scout](https://scout.dnsdb.info/dashboard) allows users to search an extensive database of current and historical Domain Name System (DNS) records that link domain names to IP addresses and name servers.
* [IRIS Investigate](https://www.domaintools.com/products/platform/iris-investigate/) collates a range of information on domain names, from Whois to DNS data, and presents this in one place.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

None

## Limitations & Ethical Considerations

Certain pivots and additional tools (e.g. hosting history, network tools) require a paid subscription to DomainTools.

As part of domain privacy measures, most domain registrars offer Whois privacy services that anonymize the registrant details. As a result, you may not be able to find the real name of the individual who owns a domain or other details associated with them. Instead, you will see a "Registration Private" designation where the individual's name would be, and generic email and physical addresses associated with the domain registrar. For example, Bellingcat.com's Whois record contains such privacy measures:

<figure><img src=".gitbook/assets/Screenshot 2024-06-15 at 2.17.31 PM.png" alt=""><figcaption></figcaption></figure>

## Guides and articles

All [DomainTools ](https://www.domaintools.com/resources/user-guides/?_resources_products=farsight-dnsdb-scout\&referrer=Scout)resources can be accessed in one place. User guides by DomainsTools can be found [here](https://www.domaintools.com/wp-content/uploads/Whois-User-Guide.pdf) and [here](https://www.domaintools.com/resources/user-guides/whois-history/), and guidance is also available for [DNSDB Scout](https://docs.domaintools.com/dnsdb/scout/userguide/#common-pivot-exercise-2-ip-addresses-to-fqdns) and [IRIS Investigate](https://docs.domaintools.com/iris/investigate/userguide/#domain-profile-data-panel).

API documentation can be found [here](https://docs.domaintools.com/api/).

## Tool provider

[DomainTools](https://www.domaintools.com/) is a provider of Whois and other DNS profile data for threat intelligence enrichment.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
|                 |
|                 |
