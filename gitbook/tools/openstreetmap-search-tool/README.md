---
updated: '2026-01-15'
description: >-
  A user interface to search OpenStreetMap data for features in proximity to
  each other.
---

# Bellingcat OpenStreetMap Search

## URL

[https://osm-search.bellingcat.com/](https://osm-search.bellingcat.com/)

## Description

Bellingcat has built a tool for searching OpenStreetMap data to help geolocate images based on objects and structures that open source researchers can see in an image they are trying to geolocate. The tool searches for locations in a predefined region that fulfil several characteristics at once (for instance a location in the vicinity of a school, a supermarket and a street with sidewalks). It is a simplified version of the Overpass query language tool that some open source researchers may already be familiar with using [Overpass turbo](https://app.gitbook.com/o/WQpOq5ZFue4N6m65QCJq/s/yNF6qm7Ej1iALSmdkA3h/).

With the OpenStreetMap search tool, a researcher can find geolocation leads by searching for several features on OpenStreetMap that are placed within a certain maximum distance to each other. Large queries may take a minute to run - to increase the speed search a smaller area by zooming in on the map. Results can be browsed directly, opened in Google Maps by clicking the lat/long, or downloaded as a CSV or KML file.

The example below shows a search for _bridge_ amenities around Amsterdam on a satellite map:

<figure><img src=".gitbook/assets/Screenshot 2024-06-23 at 11.14.25 AM.png" alt="Screenshot of search for bridge amenities around Amsterdam on a satellite map. The image show the selectable tags, a map of Amsterdam with blue dots highlighting the bridges and individual selectable bridges below."><figcaption><p>Screenshot of a search for bridge amenities around Amsterdam.</p></figcaption></figure>

### **Example Use Cases**

Online Open Source Investigators can leverage the Bellingcat OpenStreetMap Search in numerous ways to enhance their reporting and storytelling, particularly in investigative journalism. Some applications include:

* **Tracking and Reporting Urban Development:** Journalists can monitor construction projects, changes in land use, and gentrification trends, providing data-backed reports on urban growth or decline.
* **Investigating Environmental Issues:** By analyzing data on green spaces, pollution sources, and changes in natural landscapes, reporters can uncover stories on environmental degradation, conservation efforts, and climate change impacts.
* **Transportation and Infrastructure Reporting:** Data on road networks, public transport facilities, and infrastructure developments can inform stories on transportation challenges, government spending, and urban mobility.
* **Disaster Reporting:** In the aftermath of natural disasters, journalists can quickly gather information on affected areas, infrastructure damage, and relief efforts to provide accurate and timely news coverage.

In each of these use cases, users can precisely tailor their queries to extract specific data points from the vast repository of geographic information available on OpenStreetMap.

Latest changes and features: [https://github.com/bellingcat/osm-search/commits/main/](https://github.com/bellingcat/osm-search/commits/main/)

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* Any modern web browser
* A Google account with an email address

## Limitations

* **Automatic logouts:** It can happen that the tool logs users out during a user session. It is recommended to refresh the tool page from time to time and to simply log in another time with the same Google account in case this happens.
* **Doesn't Support Complex Queries:** The tool only supports a constrained subset of the query language (Overpass QL).
* **Query Complexity and Performance:** Overpass Turbo might struggle with very complex queries or large data sets, leading to long response times or timeouts.
* **Data Currency:** While the tool provides access to up-to-date OSM data, there may be a minor delay in data refresh rates which could impact real-time data analysis needs.
* **Geographical Limitations:** Performance and efficiency can degrade for queries that span very large geographical areas or the entire globe.
* **OpenStreetMap:** very detailed but accuracy and completeness varies significantly around the world. This tool can be used to find possible leads, but it should not be considered exhaustive or used to exclude areas of interest.

## Ethical Considerations

Bellingcat OpenStreetMap Search has the following ethical considerations

* **Privacy and Data Sensitivity**: While the tool offers broad access to public OpenStreetMap (OSM) data, users should be cautious when querying or sharing data that could potentially reveal sensitive information about individuals or locations.
* **Responsible Use of Resources**: Given the resource-intensive nature of some queries, users should consider the impact of their actions on the availability for others. Excessive or unnecessary querying can lead to server strain, affecting the service for all users.
* **Data Accuracy and Misuse**: Users should be aware that data obtained from, as with any crowdsourced information, may not always be accurate or up to date. Misinterpretation or misuse of this data can lead to ethical concerns, especially if used in critical applications or decision-making processes.
* **Open Data Ethics**: Engaging with OSM data should align with the ethics of open data usage, including respecting licensing agreements, attributing data correctly, and contributing to the data's quality and richness where possible.

## Guide

To effectively use Bellingcat OpenStreetMap Search, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

#### Official Wiki

* Not a full wiki but the project's homepage: [https://github.com/bellingcat/osm-search](https://github.com/bellingcat/osm-search)

#### Tutorials and Articles

* Williams, L. (2023) _Finding Geolocation Leads with Bellingcat’s OpenStreetMap Search Tool_, _bellingcat_. Available at: [https://www.bellingcat.com/resources/how-tos/2023/05/08/finding-geolocation-leads-with-bellingcats-openstreetmap-search-tool/](https://www.bellingcat.com/resources/how-tos/2023/05/08/finding-geolocation-leads-with-bellingcats-openstreetmap-search-tool/) (Accessed: 5 April 2024).

#### Video Tutorials

* _Start Your Geolocation Search With Ease_ (2023). Available at: [https://www.youtube.com/watch?v=FiiRpaayqag](https://www.youtube.com/watch?v=FiiRpaayqag) (Accessed: 5 April 2024).

#### Community and Support

* Submit feature requests or bugs at [https://github.com/bellingcat/osm-search/issues](https://github.com/bellingcat/osm-search/issues) or contact [logan@bellingcat.com](mailto:logan@bellingcat.com)

## Tool provider

[Bellingcat](https://www.bellingcat.com/), Netherlands

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                  |
| -------------------------------- |
| Sophie Tedling and Anisa Shabir; |
|                                  |
