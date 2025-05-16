---
description: >-
  F4Map is an interactive 3D map visualization tool that provides detailed
  rendering of urban landscapes and geographical features.
---

# F4Map

## URL

[https://demo.f4map.com](https://demo.f4map.com)

## Description

F4map is an interactive 3D mapping web application that enables users to explore and navigate through 3D city models and landscapes online. This tool leverages WebGL technology to render realistic 3D graphics directly in web browsers without the need for additional plugins. It solves the problem of visualizing geospatial data in an immersive and detailed way, providing users with a view of urban and natural environments.&#x20;

Features:

* **3D View**: toggle 2D view and rotate and change camera angle.
* **Coverage:** Global but can be limited in some areas.
* **Graphic Options**:
  * Ground Elevation
  * Weather: Sun, rain or snow
  * Time (current date): Live, Night, Morning, Noon, Evening
  * Traffic: Boats
  * Display: Building names, F4 specific buildings, Urban details (wall, chimney, power lines, street lamps...), Natural details (forest, fountain...), Real time water reflection, Dynamic shadows, SSAO, Render SSAO when moving
* **Language:** limited to English supports multiple languages
* **Location search:** search by location name or coordinates.
* **Locate user**: share your location to centre it on the map.
* **Zoom tool:** zoom in and out on the map.

The example below shows a search result for the term _Amsterdam_.

<figure><img src=".gitbook/assets/Screenshot 2024-05-07 at 7.20.27 PM.png" alt="Screenshot of F4Map search result for Amsterdam shows Amsterdam Central Station in 3D on a map."><figcaption><p>Screenshot of F4Map search result for Amsterdam shows Amsterdam Central Station in 3D on a map.</p></figcaption></figure>

F4Map is available in the following formats:

* Web

Latest changes: [https://core.f4map.com/changelog](https://core.f4map.com/changelog)

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* **Web:** any modern web browser.&#x20;

## Limitations

* **Data Currency and Accuracy:** F4map relies on OpenStreetMap (OSM) data, which means the accuracy and currency of the data are dependent on the contributions from the OSM community. This might result in varying levels of data quality across different regions. See [Overpass Turbo Data Out of Date](https://www.reddit.com/r/openstreetmap/comments/jcamkz/overpass_turbo_data_out_of_date/) for more information.
* **Resource Intensity:** Rendering 3D maps, especially in areas with high detail, can be resource-intensive, potentially leading to slower performance on less powerful devices. F4 Maps uses [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) which has performance implications on low spec machines particularly with large amounts of data.&#x20;
* **Coverage:** While F4map covers a global scale, the level of detail and the presence of 3D structures greatly vary by location, with urban areas typically having more detailed models than rural ones. There is no documentation on F4 Maps coverage. &#x20;
* **API Usage Limits:** F4map may impose limits on API requests to manage load on their servers, which could affect users requiring high volumes of data requests for large scale projects. No documentation available.
* **Black Listing**: Windows XP and Vista have been black listed on Chrome since version 32, to force activation you can enable _Override software rendering list_ unde&#x72;_&#x63;hrome:flags. See the_ [_FAQ_](http://wiki.map.f4-group.com/faq)_._&#x20;

## Ethical Considerations

When using F4map for projects, it is important to consider the following ethical aspects:

* **Privacy:** Given F4map's reliance on OpenStreetMap data, users must be mindful of privacy concerns, especially when mapping areas that could reveal sensitive information about individuals or groups.
* **Data Accuracy and Misuse:** The responsibility of ensuring the data's accuracy before use falls on the user. Utilizing inaccurate data could lead to misleading representations or decisions. There is no documentation on how F4 Maps ensure data accuracy.
* **Sustainability:** High resource requirements for rendering detailed 3D maps may have broader environmental impacts due to increased energy consumption. Users should consider the sustainability of their usage patterns.
* **Community Contribution and Respect:** Users are encouraged to contribute back to the OpenStreetMap community to enrich the data pool and respect the community guidelines, recognizing that F4map's utility is deeply tied to the collective efforts of volunteer mappers worldwide.

## Guide

To effectively use F4Map, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* [https://wiki.f4map.com/](https://wiki.f4map.com/)
* [https://wiki.openstreetmap.org/wiki/F4\_Map](https://wiki.openstreetmap.org/wiki/F4_Map)

#### Video Tutorials

* _F4Map - Free 3D Maps_ (2016). Available at: [https://www.youtube.com/watch?v=MwxLUcDYiqI](https://www.youtube.com/watch?v=MwxLUcDYiqI) (Accessed: 7 May 2024).

#### Developer Resources

* [https://github.com/F4-Group](https://github.com/F4-Group)

**Community and Support**

* [https://wiki.f4map.com/faq](https://wiki.f4map.com/faq)
* In app feedback form.

## Tool provider

F4 [https://www.f4-group.com/](https://www.f4-group.com/) - France

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |

