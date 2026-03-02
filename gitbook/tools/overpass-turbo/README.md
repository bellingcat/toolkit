---
updated: '2026-03-01'
description: >-
  Overpass Turbo is a web-based tool for querying and visualizing OpenStreetMap
  crowd sourced data, aiding in extracting specific information like locations
  of amenities e.g.hospitals.
---

# Overpass Turbo

## URL

[https://overpass-turbo.eu/](https://overpass-turbo.eu/)

## Description

Overpass Turbo is a web application designed for querying and analyzing crowd sourced data from OpenStreetMap (OSM), providing an interface for conducting complex queries on OSM's expansive database. This tool is particularly valuable for users interested in geographic information systems (GIS), offering functionalities crucial for data mining and research in various fields like urban planning, disaster management, and environmental studies. Through Overpass Turbo, users can extract specific information such as the location of amenities, road networks, and geographical features, facilitating detailed analysis and visualization of geographic data across the globe.

The full list of searchable map features is available [here](https://wiki.openstreetmap.org/wiki/Map_features) and a visual guide to OSM tags is available [here](https://taginfo.openstreetmap.org/).

**Features:**

* **Current Location**: option to centre map at users location.
* **Coverage:** Global but can be limited in some areas.
* **Export**: options to export in numerous formats including for data (GeoJSON, GPX, KML, raw OSM data), Map (as a PNG image or interactive Map) or the query alone. Also supports conversion options.
* **Help**: inline help.
* **Language:** supports multiple languages.
* **Location search:** search by location name.
* **Raw Data**: toggle to preview the query as raw data.
* **Sharing:** share the current code state and map state.
* **Toggle Data**: display data overlay.
* **Wide map**: Toggle Wide map
* **Wizard**: includes a wizard for building queries.
* **Zoom to data:** zoom to include all data points.
* **Zoom tool:** zoom in and out on the map.

The example below shows a query for Drinking Water fountain amenities:

<figure><img src=".gitbook/assets/Screenshot 2024-03-31 at 12.44.00 PM (1).png" alt="Screenshot of Overpass Turbo with a query for drinking water fountains and a map with the fountains highlighted in red."><figcaption><p>Screenshot of search results for a query for Drinking Water fountain amenities.</p></figcaption></figure>

### **Example Use Cases**

Online Open Source Investigators can leverage Overpass Turbo in numerous ways to enhance their reporting and storytelling, particularly in investigative journalism. Some applications include:

* **Tracking and Reporting Urban Development:** Journalists can monitor construction projects, changes in land use, and gentrification trends, providing data-backed reports on urban growth or decline.
* **Investigating Environmental Issues:** By analyzing data on green spaces, pollution sources, and changes in natural landscapes, reporters can uncover stories on environmental degradation, conservation efforts, and climate change impacts.
* **Transportation and Infrastructure Reporting:** Data on road networks, public transport facilities, and infrastructure developments can inform stories on transportation challenges, government spending, and urban mobility.
* **Disaster Reporting:** In the aftermath of natural disasters, journalists can quickly gather information on affected areas, infrastructure damage, and relief efforts to provide accurate and timely news coverage.

In each of these use cases, users can precisely tailor their queries to extract specific data points from the vast repository of geographic information available on OpenStreetMap, demonstrating the flexibility and utility of Overpass Turbo for various open source research applications.

Latest features and changes: [https://github.com/tyrasd/overpass-turbo/commits/master/](https://github.com/tyrasd/overpass-turbo/commits/master/)

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

Any modern web browser.

## Limitations

* **Query Complexity and Performance:** Overpass Turbo might struggle with very complex queries or large data sets, leading to long response times or timeouts. There are some performance hints in [the documentation](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL).
* **Learning Curve:** For new users, the query language (Overpass QL) has a steep learning curve.
* **Resource Intensity:** Running intensive queries can put a significant load on the Overpass servers, potentially leading to throttling or temporary bans. More information on [rate limits and quotas](https://dev.overpass-api.de/overpass-doc/en/preface/commons.html) plus a some performance advice is available at the end of [_A Turbo Introduction to Overpass_](https://upload.wikimedia.org/wikipedia/commons/f/fe/A_turbo_introduction_to_Overpass_\(with_notes\).pdf).
* **Data Currency:** While Overpass Turbo provides access to up-to-date OSM data, there may be a minor delay in data refresh rates which could impact real-time data analysis needs. See [Overpass Turbo Data Out of Date](https://www.reddit.com/r/openstreetmap/comments/jcamkz/overpass_turbo_data_out_of_date/) for more information.
* **Geographical Limitations:** Performance and efficiency can degrade for queries that span very large geographical areas or the entire globe.
* **User Interface:** While functional, the user interface may not be as intuitive or user-friendly for those not familiar with geographical information systems (GIS) or coding.
* **Crowdsourced data**: availability of data depends on the data users have provided to OSM. There is evidence that data from Volunteered Geographic Information Research can be more current in times of humanitarian crisis (the 2010 [Haiti](https://onlinelibrary.wiley.com/doi/abs/10.2202/1948-4682.1069) earthquake for example) but this may not always be the case.

## Ethical Considerations

Overpass Turbo has the following ethical considerations

* **Privacy and Data Sensitivity**: While Overpass Turbo offers broad access to public OpenStreetMap (OSM) data, users should be cautious when querying or sharing data that could potentially reveal sensitive information about individuals or locations.
* **Responsible Use of Resources**: Given the resource-intensive nature of some queries, users should consider the impact of their actions on the availability of Overpass Turbo for others. Excessive or unnecessary querying can lead to server strain, affecting the service for all users (see [Heavy Traffic](https://www.browserstack.com/guide/why-website-loading-slow)).
* **Data Accuracy and Misuse**: Users should be aware that data obtained from Overpass Turbo, as with any crowdsourced information, may not always be accurate or up to date. Misinterpretation or misuse of this data can lead to ethical concerns, especially if used in critical applications or decision-making processes.
* **Open Data Ethics**: Engaging with Overpass Turbo and OSM data should align with the ethics of open data usage, including respecting licensing agreements, attributing data correctly, and contributing to the data's quality and richness where possible.

## Guide

To effectively use Overpass Turbo, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

#### Official Wiki

* [**Overpass API Language Guide**](https://wiki.openstreetmap.org/wiki/Overpass_API/Language_Guide)**:** A comprehensive guide to understanding the query language used in Overpass Turbo.
* [**Overpass API By Example**](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example)**:** Offers a wide range of example queries that can help users learn through practical scenarios.

#### Tutorials and Articles

* [_Overpass Tutorial_](https://osm-queries.ldodds.com/tutorial/index.html) (no date). Available at: [https://osm-queries.ldodds.com/tutorial/index.html](https://osm-queries.ldodds.com/tutorial/index.html) (Accessed: 15 January 2026).
* [_Learn Overpass._](https://osmlab.github.io/learnoverpass/en/) (no date). Available at: [https://osmlab.github.io/learnoverpass//en/](https://osmlab.github.io/learnoverpass/en/) (Accessed: 15 January 2026).

#### Video Tutorials

* [_A turbo introduction to Overpass_](https://www.youtube.com/watch?v=q9QI4AfwHoM) _- MInh Nguyễn_ (2019). Available at: [https://www.youtube.com/watch?v=q9QI4AfwHoM](https://www.youtube.com/watch?v=q9QI4AfwHoM) (Accessed: 15 January 2026).

#### Community and Support

* [**OSM Help Forum**](https://help.openstreetmap.org/)**:** A place where users can ask questions about Overpass Turbo and receive answers from the community.
* [**Stack Overflow**](https://stackoverflow.com/questions/tagged/overpass-api)**:** Users can find or ask questions tagged with `overpass-api`, which includes topics on Overpass Turbo.

By exploring these resources, users can build a strong foundation in using Overpass Turbo for their OpenStreetMap (OSM) data querying needs.

## Tool provider

_Overpass Turbo_ is maintained by Martin Raifer (tyr.asd at gmail.com) [_Open Street Maps_](https://osmfoundation.org/wiki/About) United Kingdom

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer                                            |
| ---------------------------------------------------------- |
| Author: Bellingcat Volunteer Team Reviewer: Sophie Tedling |

## See Also

{% embed url="https://www.bellingcat.com/resources/how-tos/2023/05/08/finding-geolocation-leads-with-bellingcats-openstreetmap-search-tool/" %}
Bellingcat article
{% endembed %}

{% embed url="https://osm-search.bellingcat.com/" %}
Bellingcat tool
{% endembed %}
