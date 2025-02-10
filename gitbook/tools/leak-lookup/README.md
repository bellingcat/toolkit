---
description: >-
  An online tool that allows you to search across public data breaches to
  surface credentials that may have been compromised.
---

# Leak-Lookup

## URL

[https://leak-lookup.com/](https://leak-lookup.com/)

## Description

Leak Lookup is an online tool and database search platform that allows users to check whether their personal information, such as email addresses, usernames, or passwords, has been exposed in data breaches. By entering a query, users can search its database of leaked data to identify if their information has been compromised. The tool is often used by security professionals and researchers to assess their exposure to data leaks and take necessary precautions, like updating credentials.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2025-01-24 at 3.19.13 PM.png" alt=""><figcaption></figcaption></figure>

Leak Lookup's collection appears to contain publicly available databases from web applications and services that have been breached, leaked or scraped as well as collections of credentials or personally identifiable information (PII) such as [Collection 1](https://en.wikipedia.org/wiki/Collection_No._1). For each "breach", users are able to see the data types that have been exposed such as email address, username, full name, cleartext or hashed password.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2025-01-24 at 3.20.21 PM.png" alt=""><figcaption><p>Sample record of breach information</p></figcaption></figure>

As of January 2024, Leak-Lookup also has the following API offerings:

* **Search:** The "search" API is designed to provide a simple and easy to use endpoint for end-users to search across all indexed breaches. Users can search by types of indicators such as email address, username, IP address, phone number, domain etc.&#x20;
* **Hash:** The "hash" API is designed to provide hash-cracking capabilities for end-users, meaning a user can submit a hashed value of a password and the API endpoint will return the cleartext value of the password if the hash has been "cracked."&#x20;
* **Stat:** The "stats" API is used to retrieve information relating to the current API key, this includes information such as the current request limits, daily request limits etc.

The API functionality in particular is useful in order to&#x20;

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

As of January 2025, the pricing information for credits are as follows:

<figure><img src=".gitbook/assets/Screenshot 2025-01-24 at 3.36.25 PM (1).png" alt=""><figcaption></figcaption></figure>

\


## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Users must register an account to conduct searchers; account registration is free of charge.

## Ethical Considerations & Limitations

A subscription to the service is needed in order to view the full breach details for any given record. Without a subscription, API keys have limitations on how many API calls a user can make — approximately 10 API calls per day per user. The public (i.e. free) API keys are also restricted to returning only the breach names for searched queries.&#x20;

## Guides and articles

Leak-Lookup has a general support documentation and a FAQ page [here](https://leak-lookup.com/support/general).&#x20;

Leak-Lookup has documentation on API capabilities here: [search](https://leak-lookup.com/docs/search), [hash](https://leak-lookup.com/docs/hash), [stat](https://leak-lookup.com/docs/stats).&#x20;

## Tool provider

Leak-Lookup can be reached at info(at)leak-lookup.com or on X, the social media platform formerly known as [Twitter](https://x.com/leaklookup).&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hadne           |
|                 |
