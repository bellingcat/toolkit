---
description: >-
  Open-source international database of sanctions data, persons of interest and
  politically exposed persons.
---

# OpenSanctions

## URL

[https://www.opensanctions.org/](https://www.opensanctions.org/)

## Description

OpenSanctions provides a structured database of people and entities that are subject to sanctions or other financial restrictions. The database is curated by a team of researchers and journalists, and is designed to be easily accessible and usable by individuals, organizations, and governments. The data includes information on individuals, organizations, and vessels that are subject to sanctions, as well as the legal frameworks and sanctions regimes that apply to them. OpenSanctions is intended to help individuals and organizations comply with international sanctions laws, as well as to facilitate research and investigative journalism into financial crime and corruption.

Here is a [use-case article](https://www.opensanctions.org/articles/2024-05-03-guernsey-fiu/) on how the Guernsey Financial Intelligence Unit used OpenSanctions to fight money laundering and drug trafficking

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

OpenSanctions is free for non-commercial users. Business and commercial users must either acquire a data license to use our high-quality dataset, or subscribe to the pay-as-you-go API service.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

No specific requirements for desktop research. Some requirements and set-up needed to use their API.&#x20;

## Limitations

Does not cover a lot of jurisdictions when it comes to politically exposed persons (PEPs).

Possible duplication of entries in the databases.

The vessels database is very limited with just over 2,000 entries.

The search returns different number of results or no results at all if the searched keyword is typed in Cyrillic (e.g. using search term _Gazprom_ returns 44 results, while using _Газпром_ returns 327 results).

## Ethical Considerations

Personally Identifiable Information (PII) is usually masked or hidden and the information comes from public sources, usually government ones, however if PII has not been redacted, it should be used with caution.&#x20;

## Guide

OpenSactions API user and implementation [guide](https://api.opensanctions.org/#section/Introduction).

OpenSantions datasets [collections](https://www.opensanctions.org/datasets/) in `.json` format that are downloadable, with the option to be integrated in other systems and databases.

For basic desktop research, go to [https://www.opensanctions.org/research/](https://www.opensanctions.org/research/) and type the name of an entity, a person or a vessel in the search bar.&#x20;

**Example 1: Search for an entity**

* Type the name of an entity in the search bar. In this case Ascotec Steel. The search returns  4  results, because this company has subsidiaries with the word Ascotec in the name, and because the data comes from separate data sources.

<figure><img src=".gitbook/assets/OS1.png" alt="" width="563"><figcaption></figcaption></figure>

* Review all the results to locate the company of interest, in this case Ascotec Steel Trading GmbH. The profile for this company includes information on its incorporation date, jurisdiction, addresses and the sanctioning authorities.

<div>

<figure><img src=".gitbook/assets/OS2.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src=".gitbook/assets/OS3.png" alt=""><figcaption></figcaption></figure>

</div>

* The little arrows next to each data point open a pop-up window showing additional information regarding the type of sanction. For more details on a specific saction, you can visiti the websites provided in the urls from OpenSanctions to conduct further research on the company.

<div>

<figure><img src=".gitbook/assets/OS4.1.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src=".gitbook/assets/OS4.2.png" alt=""><figcaption></figcaption></figure>

</div>

**Example 2: Search for an individual**

* Type the name of an individual in the search bar. If you are uncertain about the full legal name, try using the individual's last name. In this case Ivanov. The search returns 531  results for a last name Ivanov, and these results can be filtered by topics, data sources and countries using the lists on the right.

<figure><img src=".gitbook/assets/OS8.png" alt="" width="563"><figcaption></figcaption></figure>

* Once you have located the individual of interest, click on the name to open their profile. Please note that individuals appearing on the OpenSanctions website iclude sanctioned persons, as well as politically exposed persons (politicians, government officials, government employees). In this case the individual is politician - member of a national parliament.

<figure><img src=".gitbook/assets/OS9.png" alt="" width="563"><figcaption></figcaption></figure>

**Example 3: Search for a vessel**

* Type the name of a vessel. In this case the vessel is Artemis Offshore. The search returns two separate results because the data comes from separate data sources. However, looking into each results indicates that this vessel was sanctions by the U.S. Office of Foreign Assets Control (OFAC).

<figure><img src=".gitbook/assets/OS5.png" alt="" width="563"><figcaption><p>Search results for the Artemis Offshore vessel</p></figcaption></figure>

* The first result does not provide a lot of information, other than the sanctioning authority and the data source for the entry.

<figure><img src=".gitbook/assets/OS6.png" alt="" width="563"><figcaption></figcaption></figure>

* The second result provides more detailed information, most importantly the call sign of the vessel, under which flag it operates, and who owns it. In this case it is owned by the Russian Marine Rescue Service. This information can be used to cross-reference the vessel through other tools such as [VesselFinder.com](https://www.vesselfinder.com/)

<figure><img src=".gitbook/assets/OS7.png" alt=""><figcaption></figcaption></figure>

## Tool provider

OpenSanctions, Germany

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| LPetrova        |
|                 |
