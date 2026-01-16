---
description: >-
  Equasis provides vessel ownership and safety records, as well as shipping
  company fleet information.
---

# Equasis

## URL

[https://www.equasis.org/](https://www.equasis.org/)

## Description

Equasis, the Electric Quality Shipping Information System, is a tool designed to consolidate information about vessel ownership and safety records into one place. After creating an account, users can access a search portal to search for vessels by name or IMO number, or search for a company by name. The advanced search feature can search for vessels by call sign, MMSI number, tonnage, flag, etc, which can help to identify a vessel for which only some identifying information is known.

{% hint style="info" %}
IMO numbers are unique, seven-digit tracking numbers assigned to ships and shipping companies by S\&P Global Market Intelligence on behalf of the International Maritime Organization. Unlike ship names and company names which can change, IMO numbers remain constant. More information about IMO numbers can be found on the [International Maritime Organization's website](https://www.imo.org/en/OurWork/IIIS/Pages/IMO-Identification-Number-Schemes.aspx).

MMSI (Maritime Mobile Service Identities) numbers are nine-digit numbers used to uniquely identify ships in radio and AIS (Automatic Identification System) broadcasts. MMSI numbers are issued by the country a ship is flagged to and managed by the International Telecommunications Union. More information about MMSI numbers can be found on the [International Telecommunications Union's website](https://www.itu.int/en/ITU-R/terrestrial/Pages/by-categories-faq.aspx?categorizedby=17).
{% endhint %}

Equasis can provide a significant amount of information about vessels including name, IMO number, flag, call sign, MMSI number, gross tonnage, deadweight tonnage, year built, type of ship, status, registered owner, ISM manager, ship manager, P\&I information, classification society, partial location history, and inspection and deficiency history, as well as a history for some of this information. For companies, Equasis can provide registered addresses, a list of vessels in their fleet, and a synthesis of inspections and deficiencies for all vessels in said company's fleet.

## Use Case

An example use case for Equasis is to view the inspection records for the MV Dali (IMO 9697428) which collided with Francis Scott Key Bridge in Baltimore, Maryland in 2024.                                                                                                                 Under the "Ship Info" tab, Equasis shows the ship is owned by Grace Ocean Pte Ltd and is classified by Nippon Kaiji Kyokai (IACS). Under the "Inspections" tab, Equasis shows that the last time the Dali was inspected before its collision with the Key Bridge was in September 2023 and was carried out by the US Coast Guard in the Port of New York, New York. Equasis shows that there were no deficiencies noted during this inspection. Equasis does show that there was a deficiency noted during a prior inspection in July 2016 in the Port of Antwerp, Belgium. By clicking the details arrow associated with this inspection and viewing the "Deficiencies per Category" dropdown we can see that this deficiency was in the category of "Structural Conditions", specifically "Hull damage impairing seaworthiness." A [Reuters article](https://www.reuters.com/world/us/ship-that-hit-baltimore-bridge-also-involved-2016-antwerp-accident-2024-03-26/) provides additional context to this Equasis entry. According to Reuters "the Antwerp port authorities said the container ship Dali hit a quay on July 11, 2016, as it tried to exit the North Sea container terminal."

Finally, under the "Ship History" tab we can view prior information about the Dali such as its past ownership and flag history.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Registering for an account with Equasis requires providing an email address and password, as well as your name, address, and role concerning Equasis.

## Limitations

* Data in Equasis comes from different providers and is collated by Equasis. Data can be contradicting, incorrect or incomplete. It can hold double reporting, when a ship is inspected by port states that are members of more than one PSC.&#x20;
* Data is not updated real-time. Class related info is updated weekly and sometimes daily. The frequency of the updates differs from provider to provider but can be checked in the tab/field Last update.&#x20;
* Equasis is primarily built for individual searches and has a limit on search results. A maximum of 20 ships and owners can be saved and exported from ‘MyEquasis’. For heavier use, Equasis points to commercial tools as S\&P Global Market Intelligence, Loyds List Intelligence, Clarkson, AXS-Marine, etc.
* Reuse of the data: The data remains property of the data providers. No data can be harvested and reused in bulk without [permission](https://www.equasis.org/EquasisWeb/public/About?fs=HomePage\&P_ABOUT=MainConcern.html) from Equasis. This includes webservices and API’s.&#x20;

## Ethical Considerations

As mentioned under [limitations](./#limitations), researchers using Equasis should undertake additional work to verify the information provided by Equasis, particularly when investigating ships and companies suspected of engaging in deceptive shipping practices.

## Guides and articles

Equasis features in this general tutorial by the [Pulitzer Center](https://pulitzercenter.org/) ‘How to track ships like a pro using OSINT’, [Part I](https://pulitzercenter.org/resource/how-track-ships-pro-using-osint-part-i) and [Part II](https://pulitzercenter.org/resource/how-track-ships-pro-using-osint-part-ii).

In 2016 Forbes used Equasis to show there were "[nearly 100 safety flaws with Mauritius oil spill ship Wakashio.](https://www.forbes.com/sites/nishandegnarain/2020/11/25/96-safety-flaws-with-mauritius-oil-spill-ship-wakashio-identified-by-eu-database/)"

Bellingcat has previously used Equasis as part of investigations into [Russian grain smuggling](https://www.bellingcat.com/news/2024/04/23/from-crimea-to-iran-two-more-ships-join-russias-grain-smuggling-fleet/), an [oil spill in Tobago](https://www.bellingcat.com/news/2024/02/14/identifying-the-mystery-vessel-at-the-site-of-trinidad-tobagos-national-emergency-oil-spill/), and a [superyacht that Equatorial Guinea’s Vice President claimed was a military vessel](https://www.bellingcat.com/news/2023/11/02/public-holidays-equatorial-guineas-vice-president-insists-superyacht-in-italian-vacation-hotspots-is-a-military-vessel/).

## Tool provider

Equasis is a non-profit organization founded by the European Commission and the French Maritime Administration. Today nine member states and the European Commission make up a supervisory board governing Equasis and providing funding for it.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.
