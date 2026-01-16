---
updated: '2026-01-15'
description: >-
  F4Map is an interactive 3D map visualization tool that provides detailed
  rendering of urban landscapes and geographical features.
---

# F4Map

## URL

[https://demo.f4map.com](https://demo.f4map.com)

## Description

F4Map is a browser-based application that allows users to explore detailed 3D representations of cities and landscapes using [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) technology—no plugins required. It delivers visually rich renderings of geospatial data, especially in urban areas. However, the 3D view is limited: users can rotate and tilt the map but cannot lower the camera to ground level. This makes F4Map particularly effective for aerial exploration and general spatial analysis, rather than street-level perspectives.

## Features

* **3D View**: toggle between 2D and 3D views, rotate and tilt the camera — note that ground-level views are not supported and 3D must be manually activated.
* **Coverage:** Global but can be limited in some areas.
* **Graphic Options**:
  * Ground Elevation: On/off toggle for terrain; no other elevation options available.
  * Weather: Sun, rain or snow
  * Time (current date): Live, Night, Morning, Noon, Evening
  * Traffic: Boats
  * Display: Includes building names, landmarks, and detailed urban or natural elements (walls, power lines, forests). Visual effects include water reflections, dynamic shadows, and SSAO ([Screen Space Ambient Occlusion](https://en.wikipedia.org/wiki/Screen_space_ambient_occlusion)) for depth realism, with an option to keep SSAO active during movement.
* **Language:** interface in English only; map labels appear in multiple languages based on OpenStreetMap data.
* **Location search:** search by location name or coordinates.
* **Locate user**: share your location to centre it on the map.
* **Zoom tool:** zoom in and out on the map.

The example below shows a search result for the term Paris, displaying a detailed 3D view of the Eiffel Tower and its surroundings. The visualization includes nearby embassies, schools, parks, and urban infrastructure—making it useful for geographic orientation, urban analysis, or OSINT research.

When first opening F4Map, users may not immediately see buildings rendered in 3D. These elements only appear once zoomed in closely enough, as seen in this example. Since the platform does not follow standard 3D navigation conventions, users may need to manually zoom, tilt the view, or adjust the URL parameters (e.g., zoom, pitch, bearing) in the address bar to reach the desired perspective.

<figure><img src=".gitbook/assets/paris_4fmap.png" alt=""><figcaption><p>F4Map 3D view of central Paris, featuring the Eiffel Tower and nearby landmarks.</p></figcaption></figure>

F4Map is available in the following formats:

* Web

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* **Web:** any modern web browser.

## Use Cases and Comparison

F4Map is best suited for viewing detailed 3D structures in urban environments, where building-level data is richest. Its quick, browser-based access and visually rich rendering make it ideal for tasks such as geographic orientation, infrastructure mapping, or open-source investigations in city settings.

Compared to other tools:

* [**ShadowMap**](https://shadowmap.org/) combines 3D visualization with accurate sun positioning, making it ideal for line-of-sight and shadow analysis.
* [**PeakVisor**](https://peakvisor.com/) offers detailed elevation models with slow-rendering but more flexible camera control and photofitting features.

## Limitations

* **Data Currency and Accuracy:** F4map relies on [OpenStreetMap](https://www.openstreetmap.org/) (OSM) data, which means the accuracy and currency of the data are dependent on the contributions from the OSM community. This might result in varying levels of data quality across different regions. Learn more in the Reddit post: [Overpass Turbo Data Out of Date](https://www.reddit.com/r/openstreetmap/comments/jcamkz/overpass_turbo_data_out_of_date/).
* **Resource Intensity:** Rendering 3D maps, especially in areas with high detail, can be resource-intensive, potentially leading to slower performance on less powerful devices. F4 Maps uses [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) which has performance implications on low spec machines particularly with large amounts of data.
* **Coverage:** While F4map covers a global scale, the level of detail and the presence of 3D structures greatly vary by location, with urban areas typically having more detailed models than rural ones. There is no documentation on F4 Maps coverage.
* **Terrain Rendering**: F4Map’s 3D elevation coverage is largely confined to urban areas. In mountainous locations, the terrain abruptly flattens at city edges, leaving surrounding slopes and valleys unrepresented in 3D. This contrasts with tools like ShadeMap, which maintain continuous elevation models across broader landscapes.
* **API Usage Limits:** F4map may impose limits on API requests to manage load on their servers, which could affect users requiring high volumes of data requests for large scale projects. No documentation available.
* **Black Listing**: Windows XP and Vista have been black listed on Chrome since version 32, to force activation you can enable _Override software rendering list_ unde&#x72;_&#x63;hrome:flags. See the_ [_FAQ_](http://wiki.map.f4-group.com/faq)_._
* **Camera Perspective**: F4Map does not support ground-level or first-person views. The camera angle is restricted to aerial perspectives, which limits realism compared to tools offering more flexible or street-level navigation.
* **Weather Effects**: While the Sun, Rain, and Snow settings add visual richness, their practical value for OSINT tasks is limited. These features do not simulate real-time conditions and may serve more as aesthetic elements than analytical tools.

## Ethical Considerations

When using F4map for projects, it is important to consider the following ethical aspects:

* **Privacy:** Given F4map's reliance on OpenStreetMap data, users must be mindful of privacy concerns, especially when mapping areas that could reveal sensitive information about individuals or groups.
* **Data Accuracy and Misuse:** The responsibility of ensuring the data's accuracy before use falls on the user. Utilizing inaccurate data could lead to misleading representations or decisions. There is no documentation on how F4 Maps ensure data accuracy.
* **Sustainability:** High resource requirements for rendering detailed 3D maps may have broader environmental impacts due to increased energy consumption. Users should consider the sustainability of their usage patterns.
* **Community Contribution and Respect:** Users are encouraged to contribute back to the OpenStreetMap community to enrich the data pool and respect the community guidelines, recognizing that F4map's utility is deeply tied to the collective efforts of volunteer mappers worldwide.

## Guide

To effectively use F4Map, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**

* [https://wiki.f4map.com/](https://wiki.f4map.com/)
* [https://wiki.openstreetmap.org/wiki/F4\_Map](https://wiki.openstreetmap.org/wiki/F4_Map)

**Latest changes**

* [https://core.f4map.com/changelog](https://core.f4map.com/changelog)

#### Developer Resources

* [https://github.com/F4-Group](https://github.com/F4-Group)

**Community and Support**

* [https://wiki.f4map.com/faq](https://wiki.f4map.com/faq)
* In app feedback form.

## Tool provider

[F4 ](https://www.f4-group.com/)- A French-based mapping and visualization group known for its contributions to WebGL-based geospatial tools. F4 provides both community-oriented and commercial solutions in 3D mapping.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                     |
| --------------------------------------------------- |
| Bellingcat Volunteer Team. Reviewer Sophie Tedling; |
|                                                     |
