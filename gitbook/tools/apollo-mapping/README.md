---
description: >-
  Image Hunter is a search engine for finding and purchasing commercial
  satellite imagery (including Planet, Airbus, Maxar, and many Chinese satellite
  companies) without a subscription.
updated: '2025-09-24'
---

# Apollo Image Hunter

## URL

[https://imagehunter.apollomapping.com/](https://imagehunter.apollomapping.com/)

## Description

Use Apollo Image Hunter to find and purchase commercial satellite imagery on an a la carte basis. Unlike other satellite tools such as [Planet Explorer](https://bellingcat.gitbook.io/toolkit/more/all-tools/planet-labs), Image Hunter indexes imagery from [many different companies](https://apollomapping.com/imagery/high-resolution-imagery), including:

* Planet Labs PBC SkySat and PlanetScope (American)
* Airbus Pléiades Neo (European)
* Maxar WorldView (American)
* Jilin-1 (Chinese)
* Siwei SuperView-2 (Chinese)
* KOMPSAT (Korean)
* Beijing-3 (Chinese)
* TerraSAR-X (SAR imagery) (German)

The search interface is similar to [Sentinel Hub](https://bellingcat.gitbook.io/toolkit/more/all-tools/sentinal-hub-playground) or Planet Explorer. To find imagery, use the area selection tools to define your region of interest. By default, results are sorted by the most recent imagery, but you can also use date filters to find imagery from a particular point in time, and to filter by cloud cover, image resolution, and particular satellites.

In Image Hunter, you can only see a very low resolution preview of the image. Typically, this is enough to let you confirm that the image isn't too cloudy, but not to do much more than that. To order the image, you must first request a quote from Apollo Imaging. Within a couple days, they will email you back with the price and a link to purchase the image, then send it as a GeoTIFF.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

Satellite imagery is priced per square kilometer, typically with a minimum order of 25 square kilometers. Prices vary by satellite company and resolution. Typical prices are around $6.00/square kilometer for Jilin-1 imagery (70cm resolution), [$6.50/square kilometer for Planet SkySat imagery](https://apollomapping.com/skysat-satellite-imagery) (50cm resolution) and [$17.50/square kilometer for Maxar's WorldView-2](https://apollomapping.com/worldview-2-satellite-imagery) (25cm resolution.)

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Imagery is usually delivered in GeoTIFF format. These files are large, and best viewed in [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) or other GIS software.

## Limitations

The quotation and order process takes several business days, so it is not possible to immediately receive satellite imagery.

## Tool provider

It is operated by Apollo Mapping, an American satellite imagery broker.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Logan Williams  |
|                 |
