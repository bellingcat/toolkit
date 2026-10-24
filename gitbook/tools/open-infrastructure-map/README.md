---
description: >-
  A map of the world's electricity, gas, water, and other infrastructure, using
  data from OpenStreetMap (OSM).
---

# Open Infrastructure Map

## URL

[https://openinframap.org](https://openinframap.org)

## Description

<div data-full-width="false"><figure><img src=".gitbook/assets/OPENINFRAMAP3.gif" alt=""><figcaption><p><strong>OPEN INFRASTRUCTURE MAP INTERFACE OVERVIEW</strong></p></figcaption></figure></div>

Open Infrastructure Map allows users to search for and view global infrastructure networks which include:

* power lines, power plants, generators, power line supports, switchgear
* telecom
* gas
* petroleum
* water
* other pipelines

Users can select and display different layers of infrastructure data at their chosen location on the globe. The map helps reveal infrastructure data from [OpenStreetMap](https://www.openstreetmap.org/) (OSM) which is not as easy to access when directly visiting [OSM](https://pmc.ncbi.nlm.nih.gov/articles/PMC8437094/).

### The Interface

The tool presents a globe that the user can turn in order to zoom in on a geographical location of interest. A location can also be selected by either typing a name or entering latitude and longitude co-ordinates into the search box on the top left of the screen.

<figure><img src=".gitbook/assets/gui2.JPG" alt=""><figcaption><p><strong>EXPLODED VIEW OF THE OPEN INFRASTRUCTURE MAP INTERFACE, SHOWING SOME OF THE FEATURES AVAILABLE</strong></p></figcaption></figure>

{% tabs %}
{% tab title="ABOUT USER DATA" %}
* **How users can contribute data**

Tutorial at [learnOSM](https://learnosm.org/)[.](https://learnosm.org/) Research the tagging guidelines for [power](http://wiki.openstreetmap.org/wiki/Power) and [telecoms](http://wiki.openstreetmap.org/wiki/Telecoms).

* **How users access the data**

Relatively small extracts of data can be generated using [Overpass Turbo](https://overpass-turbo.eu/) in GeoJSON and similar formats. Larger amounts of data the raw OSM data must be accessed and processed directly. Commercial exports in GIS formats such as Shapefile and GeoPackage are available from [Infrageomatics](https://www.infrageomatics.com/products)

* **Open Infrastructure Map components**

[Postgres](https://www.postgresql.org/)/[PostGIS](http://postgis.net/) for data storage

[Imposm3](https://imposm.org/) for filtering & importing the OSM data

[Tegola](http://tegola.io/) for vector tile rendering and serving

The [MapLibre](https://github.com/MapLibre/maplibre-gl-js)[ GL JS](https://github.com/MapLibre/maplibre-gl-js) web interface

Background map data is generated via [Protomaps](https://protomaps.com/). Search by [OpenCage](https://opencagedata.com/).

* **Code Location and Author**

OpenInfraMap code is [on GitHub](https://github.com/openinframap/openinframap), author:[Russ](https://russ.garrett.co.uk/)

* **OSM Infrastructure Mapping Community**

Join [#](irc://irc.oftc.net/osm-infrastructure)[osm](irc://irc.oftc.net/osm-infrastructure)[-infrastructure](irc://irc.oftc.net/osm-infrastructure) on the OFTC IRC network or [#](https://matrix.to/)[osm-infrastructure:matrix.org](https://matrix.to/) on Matrix. Join this channel with IRCCloud: .Follow Open Infrastructure Map on [Mastodon](https://en.osm.town/@OpenInfraMap) or [Bluesky](https://bsky.app/profile/openinframap.org)
{% endtab %}

{% tab title="GLOBAL ENERGY STATS " %}
<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="OSM DATA INFRASTRUCTURE EXPORTS " %}
* **OpenStreetMap infrastructure data exports**

5.5 million kilometres of power lines, 1 million substations, &100,000 power plants covering much of the planet's electricity transmission system. More than 2,000 datacenters, 600,000 telecoms masts, and 130,000 oil & gas sites.

* **Data Exports sold in GeoPackage or Shapefile formats**

Infrastructure data from OpenStreetMap can be purchased in GeoPackage or Shapefile format for easy use in GIS software such as QGIS or ArcGIS. These exports provide a realtime snapshot of all electricity, telecoms, water, oil, and gas objects visible on [Open Infrastructure Map](https://openinframap.org/). Samples are available for Luxembourg Price guides as at 1/8/25..

Country export including power towers GBP 80

Worldwide export including power towers GBP 700

* **Exports in KML/KMZ (Google Earth) format GBP 200\country**

These include power lines, substations, and plants, but not power generators, or other infrastructure types such as telecoms lines, masts or datacenters. NB These exports are validated to work correctly with Google Earth Pro, but due to their size they may not work in all applications which consume KML. Due to size limitations with Google Earth Pro, KML exports for larger countries (the USA, Russia, and China) are filtered to only include power assets with a voltage rating of 25 kV or above, and generation assets with an output of 50 MW and above. Worldwide KML exports are not possible due to these limitations.
{% endtab %}

{% tab title="MAP DISPLAY LAYERS" %}
<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

Clicking the **Layers button** on the right of the screen opens a checkbox list of various types of infrastructure that the user can select or deselect for display. Clicking the **Key button** provides a guide to interpreting the icons and colored lines representing various infrastructure types, which the user can consult to identify the infrastructure being displayed. For example, an icon of a tower denotes a telecom tower; a red line represents a ≥ 220 kV powerline, and so forth.

Once the user has zoomed in sufficiently on a location — e.g. a power station -- the user can left click on it, which opens a mini window containing additional details about the location.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

<sup><mark style="color:$warning;">**EXAMPLE OF A MINI WINDOW SHOWING INFORMATION ABOUT THE TERMINI IMERESE POWER PLANT IN MALTA**<mark style="color:$warning;"></sup>

The map also provides a selectable "[nighttime lights](https://mapyourgrid.org/tools/)" background option, in addition to the standard OSM background. <mark style="color:$warning;">This option could allow open source researchers to discover electrical grid damage or preservation after a natural disaster, for example.</mark>

On the top left of the screen, one can access significant functionality via the menu links labelled **About, Stats** and **Export**:

* **Stats:** This link allows for selecting an area (usually a country) to obtain statistical information on its electricity network; specifically: The proportions of different voltage power lines and their cumulative length:

<figure><img src=".gitbook/assets/statsUS3.JPG" alt=""><figcaption><p><strong>EXAMPLE OUTPUT FOR USA: POWER LINES WITH DISTRIBUTION BY VOLTAGE &#x26; LENGTH:</strong></p></figcaption></figure>

It also shows power plants by number, energy source and output in megawatts (MW):

<figure><img src=".gitbook/assets/image (1) (1).png" alt=""><figcaption><p><strong>EXAMPLE OUTPUT FOR USA: POWER PLANTS DISTRIBUTED BY NUMBER, SOURCE &#x26; MW</strong></p></figcaption></figure>

These statistics give a quick picture of the shape and composition of power generation and power networks. That said, the statistics are based on OSM data, which is crowdsourced and therefore rarely 100% reliable.

* **Export:** This link details the scope of the Open Infrastructure Map data, the available formats for export and their limitations, and gives access to purchase exported data, along with the relevant terms and conditions. At the time of writing on 30/7/25, prices ranged from GBP 80 for a power export per country to GBP 700 for a power export worldwide.

Open Infrastructure Map can support investigations around infrastructure, general geolocations and ecology/sustainability.

## Example Use Case

A user leveraged Open Infrastructure Map to [locate Los Angeles's Scattergood-Olympic underground transmission line.](https://news.ycombinator.com/item?id=29951252)

## Cost

It is free to use the tool to view and explore infrastructure data, but access to large-scale or packaged commercial data exports comes with a cost.

* [ ] Free
* [x] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

An internet connection and browser.

## Limitations

* Open Infrastructure Map may be incomplete or contain outdated information <mark style="color:$primary;">because OpenStreetMap relies on crowdsourced data, which is unlikely to be</mark>[ <mark style="color:$primary;">100% accurate</mark>](https://www.nature.com/articles/s41467-023-39698-6)<mark style="color:$primary;">.</mark>
* The infrastructure paths on the map may be schematic, i.e. they may omit information such as the exact path of the infrastructure — for example, a data cable — in favour of clearly displaying where the cable starts and finishes. (London's 'Tube' maps are a good example of schematic maps, also see [Evaluating schematic route maps in wayfinding tasks for in-car navigation by Galvado, Krukar and Schwering](https://pmc.ncbi.nlm.nih.gov/articles/PMC8437094/).
* The [data exports provided by the tool](https://www.infrageomatics.com/products/osm-export) are validated to work correctly with Google Earth Pro, but due to their size, they may not work in all applications that consume KML ([Keyhole Markup Language](https://www.geowgs84.com/post/what-exactly-is-a-kml-file-and-how-can-i-create-one)). Due to size limitations with Google Earth Pro, KML exports for larger countries (the USA, Russia, and China) are filtered to only include power assets with a voltage rating of 25 kV or above, and generation assets with an output of 50 MW and above. Worldwide KML exports are not possible due to these limitations.

## Guides and articles

Article on research conducted with this tool: [https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049](https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049)

Using the nighttime lights feature: [https://mapyourgrid.org/tools/](https://mapyourgrid.org/tools/)

## Tool provider

[Russ Garrett](https://russ.garrett.co.uk/) from London created and runs the tool. He describes himself as a generalist software developer, systems architect and operations engineer.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer       |
| --------------------- |
| Sophie Tedling/Sarah. |
|                       |
