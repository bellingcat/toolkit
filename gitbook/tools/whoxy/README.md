---
updated: '2026-05-10'
description: >-
  Whoxy is a domain search engine or "whois lookup" tool to find (the history
  of) registration information on a domain, such as the registrar, the status of
  the domain and the date of registration.
---

# Whoxy

## URL

[https://www.whoxy.com/](https://www.whoxy.com/)

## Description

Whoxy is a WHOIS lookup service. It queries the public registry of domain ownership records and returns who registered a domain, when, and through which company. A WHOIS lookup returns the registrar, registration/expiry dates, name servers, and registrant contact details.&#x20;

{% hint style="info" %}
WHOIS is a protocol, standardized by the Internet Corporation for Assigned Names and Numbers ([ICANN),](https://www.icann.org/resources/reviews/specific-reviews/whois) for querying public databases that store registration information about domain names and IP addresses. Technically, the WHOIS protocol has been replaced by the Registration Data Access Protocol (RDAP) since january 2025. RDAP does more or less the same but uses https and returns json. While the underlying technique changed, the old name WHOIS is still used for the function of looking up domain ownership. See also [WHOIS is dead, long live RDAP](https://kmcd.dev/posts/whois-from-scratch/).&#x20;
{% endhint %}

Use Whoxy to trace who’s behind a website, or to surface connections between different websites.&#x20;

Registrant names and contact details can be masked in the form of a proxy. This is often the case for domains registered after 2018, when [domain registration procedures](https://www.icann.org/en/contracted-parties/consensus-policies/registration-data-policy) were adopted to bring them into compliance with the EU's General Data Protection Regulation (GDPR).

Whoxy offers several ways to look up domain information. An account is free but only needed if you plan to do more than a few searches.

<figure><img src=".gitbook/assets/Screenshot 2025-12-15 at 21.23.43.png" alt=""><figcaption><p>Single searches on Whoxy.com are free and without login. </p></figcaption></figure>

Search options:&#x20;

* Whois Lookup. Standard whois: domain name, registrar, registered date, date of when the registry was updated, and the expiry date. Also the domain status, name servers and contact details.
* Whois History. Also shows past owners of the domain.&#x20;
* Reverse Whois:
  * Owner Name. The results will show domain names which are linked to that particular name. If the amount of results is substantial, a subset will be shown with the remark to use the Reverse Whois API.
  * Company Name. To show on which domain names are linked with that company. The results will show a list of domain names. If the amount of results is substantial, a subset will be shown with the remark to use the Reverse Whois API.
  * Email address. Enter a valid e-mail address for reversed whois results on which domain names are linked with that e-mail address.
  * Domain keyword. The results will show a list of domain names that include a given keyword. If the amount of results is substantial, a subset will be shown with the remark to use the Reverse Whois API.



The list for keywords show (if available) the domain name, registrar, and the created, updated and expiry dates for the domain.

Regular WHOIS queries and WHOIS History queries return data in standard WHOIS format, RAW, JSON, and XML.



To the right of the basic information when using the regular whois lookup, there is a smaller pane listing similar domains. There is a button to view all. The listed similar-named domains can sometimes lead to the discovery of pivot points, it can for instance provide information on the use of [typosquatting](https://en.wikipedia.org/wiki/Typosquatting).





## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Single searches are free and do not require an account. Whoxy does not require a monthly fee, and has a "pay as you go" policy if an API is used.&#x20;

{% hint style="success" %}
Free API access is available on request for academics, those working in non-profit organisations and researchers on non-commercial basis.
{% endhint %}

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* Standard lookups are free and without login. There is no documented limit on single searches.&#x20;
* API access for bulk access requires an account. The [registry form](https://www.whoxy.com/signup.php) demands personal info, full name, including address and a valid (non-disposable) email address. A company name and a tax ID are optional.

## Limitations

* Privacy protection. Ownership data can be hidden by behind a privacy proxy, a third-party service that registers the domain on the real owner's behalf and lists its own contact details in WHOIS instead. In that case, whois records will show a text like ‘Registration private’ or ‘Redacted for privacy’ instead of a name.
* Reverse whois and historical whois: note that this is not a complete register of every existing domain. Records only show up in Whoxy's database if someone already queried that domain before; not getting a result does not mean that the domain itself has no history.&#x20;
* No full coverage for whois history. Data is available from 2012, and not every domain has listed historical whois information.&#x20;

## Ethical Considerations

* Be aware that selling personal information in bulk is part of Whoxy's business model.
* Historical whois records from before 2018 (since stricter [GDPR](https://gdpr-info.eu/) and [ICANN](https://www.icann.org/en/contracted-parties/generic-top-level-domains/temporary-specification-for-gtld-registration-data-01-01-2020-en) privacy protection) may contain personal data. Personal data that you retrieve through services such as Whoxy are still bound to GDPR, even if they are older.&#x20;
* Always verify reverse-whois results. Output may for instance contain coincidental matches because it matches part of a name in the string, or a search can retrieve outdated info about domain owners that have no connection to the researched topic.

## Guides and articles

Whoxy.com is mentioned on Rae Baker's [website](https://www.raebaker.net/blog/10-free-osint-tools-for-beginners-and-pros). See also [Whoxy - WHOIS lookup Tool](https://www.youtube.com/watch?v=EVbrdnmQawc) by Forensic OSINT / Ritu Gill (2024).

## Tool provider

It is not clear who the tool provider behind [Whoxy.com](http://whoxy.com) is. There is only an emailadress and no company name, adress or legal entity mentioned on the website. Interestingly enough, A WHOIS lookup on [whoxy.com](http://whoxy.com) returns no information; the registrant details of the Whoxy domain are masked by a third-party privacy service. The raw whois output `Generator: x1.autowhois.com` shows that lookups are generated through [AutoWhois.com](http://autowhois.com), which may be part of the same organisation or company.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                          |
| ---------------------------------------- |
| Bellingcat Volunteer Community / Lavache |
|                                          |
