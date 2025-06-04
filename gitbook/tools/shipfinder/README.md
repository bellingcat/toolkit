---
description: >-
  ShipFinder is an application designed to track vessels in near real-time
  across the globe.
---

# ShipFinder

## URL

[**https://shipfinder.co/**](https://shipfinder.co/)

## Description

<figure><img src=".gitbook/assets/shipfinderinterface.JPG" alt=""><figcaption><p><strong>SHIPFINDER INTERFACE SHOWING VESSELS AROUND ISTANBUL, AND DETAILS OF A SELECTED VESSEL</strong></p></figcaption></figure>

ShipFinder is an application designed to track vessels in near real-time across the globe. It has a map-based interactive interface which allows users to search for vessels based on location, name MMSI (Maritime Mobile Service Identities), destination, IMO (International Maritime Organisation) number or callsign.    &#x20;

{% hint style="info" %}
IMO numbers are unique, seven-digit tracking numbers assigned to ships and shipping companies by S\&P Global Market Intelligence on behalf of the International Maritime Organization. Unlike ship names and company names which can change, IMO numbers remain constant. More information about IMO numbers can be found on the [International Maritime Organization's website](https://www.imo.org/en/OurWork/IIIS/Pages/IMO-Identification-Number-Schemes.aspx).

MMSI (Maritime Mobile Service Identities) numbers are nine-digit numbers used to uniquely identify ships in radio and AIS (Automatic Identification System) broadcasts. MMSI numbers are issued by the country a ship is flagged to and managed by the International Telecommunications Union. More information about MMSI numbers can be found on the [International Telecommunications Union's website](https://www.itu.int/en/ITU-R/terrestrial/Pages/by-categories-faq.aspx?categorizedby=17).
{% endhint %}

The map-based layout allows users to zoom in and out to view vessel locations in specific areas or worldwide. The search function enables users to quickly find and track specific ships or ports. ShipFinder informs its map through the collection of [AIS](https://app.gitbook.com/s/zTseAuK8omzvmNw475qA/) (Automatic Identification System) data. This is broadcast over radiowaves by ships and then picked up by either ShipFinder's own receivers or those belonging to the platform's partners.&#x20;

The app is available on both mobile and desktop platforms, ensuring users can monitor marine traffic from various devices.&#x20;

**Features**

1. **(Near) Real-Time Tracking**: ShipFinder provides (near) live tracking of ships, displaying their current positions, speed, and course. This feature is beneficial for open source researchers needing to monitor fleet movements or observing ship activities.
2. **Vessel Information**: ShipFinder includes detailed information about a vessel, such as its name, type, destination, and voyage history. This data is valuable for users looking to learn more about specific ships and their operations.
3. **Based on AIS Data**: ShipFinder leverages [AIS](https://shipping.nato.int/nsc/operations/news/2021/ais-automatic-identification-system-overview) data to provide accurate and up-to-date information. AIS data is infomation on ship movements and positions that is broadcast by the vessels themselves. This is picked up by coastal stations and relayed via the internet to ShipFinder. One drawback of this system is that when a ship is out of range of coastal receivers, data reception may be limited.&#x20;
4. **Past Vessel Movement**: ShipFinder's online and free app versions allow users to playback a limited amount of a vessel's past movements. This feature gives a short term view of where a vessel has recently been and may be useful for analyzing shipping patterns, investigating incidents, or simply exploring the history of maritime activities.
5. [**Spotting Community**](https://my.pinkfroot.com/): The app also has an accompanying community page where members can post pictures of ships that they have spotted. These are often searchable by name or MMSI number.&#x20;
6. **Customizable Alerts**: Paid users of the app can set up personalized alerts for specific vessels or areas. This feature keeps users informed about significant events, such as a ship's arrival at a port or changes in its route.

**Performance**

The app's performance has minimal lag even when tracking multiple vessels simultaneously.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

The browser-based version of ShipFinder is free. However, its mobile application, currently only available on the Apple store and not on Android, has two versions. The ['lite' version](https://apps.apple.com/gb/app/ship-finder-lite/id324177409) is free, and the [full version](https://apps.apple.com/gb/app/ship-finder/id363360636) is paid. Currently, the full version [states ](https://apps.apple.com/gb/app/ship-finder/id363360636)that it includes additional features such as "route history, search, filters, bookmarks, photos, the ability to add favourite ships".&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

ShipFinder's online version does not require a user to sign up or input an email address. However, the applications on android and apple devices will require an account in their respective stores to download ShipFinder.

## Limitations

* **Advanced Features**: Compared to other maritime tracking apps, ShipFinder's online and free application versions might lack some advanced features like filtering options and comprehensive vessel databases that tools such as [MarineTraffic](https://bellingcat.gitbook.io/toolkit/more/all-tools/marinetraffic) and [VesselFinder](https://bellingcat.gitbook.io/toolkit/more/all-tools/vesselfinder) offer. Both alternatives also have access to a more compresensive AIS data network, displaying more of the ships that are in a given area. One advantage that ShipFinder offers over the alternatives is that it has no monthly fees, only a one-time purchase. This may make it more accessible for researchers that operate on a restricted budget.&#x20;
* **AIS Data**: ShipFinder's platform is based on [AIS](https://app.gitbook.com/s/y4PuseOaDGmxp1otYeL9/) data. This means that if ships are broadcasting too far from a receiver that the platform has access to, it will be lacking data on that vessel. This can occur when a ship is too far from shore for a receiver to pick up its signals. It can also occur if the ship is in a remote area where ShipFinder does not have access to the data collected by a recieving station.&#x20;
* **Subscription Costs**: The premium version of the app on the Apple Store, which offers additional features, currently [costs ](https://apps.apple.com/us/developer/pinkfroot-limited/id319726822)USD 4.99.&#x20;

## Ethical Considerations

Collating and analyzing data about specific vessels and their movements can potentially reveal sensitive information about individuals or organizations that was not intended to be public. This can raise privacy concerns. Make sure to use the tool responsibly and for research in the public interest&#x20;

## Guides and articles

\-

## Tool provider

ShipFinder is developed and maintained by an entity by the name of Pinkfroot. The entity is based in the UK and was incorporated in 2009. Pinkfroot also develops and maintains a similar tool for tracking aeroplanes called Planefinder.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer  |
| ---------------- |
| ForgottenPidgeon |
|                  |
