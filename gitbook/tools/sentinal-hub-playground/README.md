---
description: >-
  A free web-based platform for viewing, analyzing, and downloading satellite
  imagery from the European Space Agency's Sentinel missions, with data updated
  every 5-10 days.
updated: '2025-12-04'
---

# Copernicus Browser (formerly Sentinel Hub Playground, EO Browser)

## URL

[Copernicus Browser](https://browser.dataspace.copernicus.eu/)

## Description

#### How does it work?

[Copernicus Browser](https://browser.dataspace.copernicus.eu/) provides an intuitive web interface for accessing satellite imagery from the Sentinel constellation. Users can zoom into their area of interest on the map, and select a date range and cloud coverage threshold. The platform automatically displays available imagery matching these criteria.

The tool offers multiple visualization options, including true color imagery, false color composites, and specialized indices like NDVI (vegetation health) and NDWI (water quality). Users can create timelapses to observe changes over time, compare multiple images side-by-side, and download high-resolution images for further analysis.

A particularly powerful feature is the Custom Scripts functionality, which allows users to apply JavaScript-based processing algorithms to satellite data. These can be written from scratch or selected from the community-maintained Custom Scripts Repository, which includes specialized algorithms for detecting features like forest disturbances or monitoring agricultural growth.&#x20;

#### What problem does it solve?

Copernicus Browser democratizes access to high-quality satellite imagery that was previously difficult to obtain or required specialized software. It eliminates the need for researchers to download large datasets or install complex desktop GIS software for basic satellite image analysis.

**What are some use cases for open-source researchers?**

* **Environmental monitoring**: Track deforestation, urban expansion, agricultural development, or natural disasters over time
* **Geolocation verification**: Confirm the location and timing of events by comparing satellite imagery with photos or videos from the ground
* **Conflict monitoring**: Observe changes to military installations, refugee camps, or infrastructure damage in conflict zones
* **Chronolocation**: Determine when events occurred by identifying the most recent imagery showing specific features
* **Climate change documentation**: Monitor glacier retreat, drought conditions, flooding, or vegetation changes
* **Infrastructure analysis**: Track construction projects, mining operations, or land development

Open-source investigators have used satellite imagery tools to monitor illegal settlement expansion, verify reports of military activity, and document environmental degradation. The tool's timelapse feature is particularly valuable for creating visual evidence of changes over months or years.

**Note on naming history**: This tool has been renamed multiple times (formerly Sentinel Hub Playground, then EO Browser). As of February 2025, EO Browser has been shut down and its functionality transitioned to Copernicus Browser and the paid Planet Insights Platform. Copernicus Browser is the free successor focusing on Sentinel data.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Free. Account registration is optional but unlocks additional features like saving work and accessing a personal workspace.

**Note**: EO Browser, a related tool that provided access to additional satellite datasets (Landsat, MODIS), was shut down in February 2025. Its functionality has been split between Copernicus Browser (free, Sentinel data) and Planet Insights Platform (paid, starting at €25/month for non-profit use, includes commercial satellite data).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

For Copernicus Browser -- just a browser. To use EO Browser, an email login is required, though this is free to obtain.

## Limitations

* **Satellite-specific constraints**: Limited to Sentinel mission data only (no Landsat, MODIS, or high-resolution commercial imagery)
* **Resolution limits**: Sentinel-2 imagery maxes out at 10-meter resolution, meaning individual people or small vehicles cannot be distinguished, only buildings and larger features are visible
* **Radar limitations**: While Sentinel-1 provides radar imagery that penetrates clouds, Copernicus Browser's interface for radar data is less developed than for optical imagery
* **Browser-based constraints**: Cannot perform complex geospatial analysis that desktop software like [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) (desktop application) or code-based platforms like [Google Earth Engine](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-earth-engine) can accomplish
* **Revisit frequency**: While Sentinel-2 revisits most areas every 5-6 days, rapidly changing situations may not be captured frequently enough
* **No access to commercial imagery**: Unlike the deprecated EO Browser, Copernicus Browser cannot access high-resolution commercial satellite datasets
* **Custom script requirement**: Advanced analysis techniques require learning JavaScript and understanding satellite data processing

## Ethical Considerations

Like any tool using remote sensing data, it's important to remember that a satellite image is not a panacea, and is best supported with additional information from the ground. In particular, the use of indices and custom scripts to draw conclusions about the presence or not of different features should also be corroborated with other data.

## Guide

Annique Mossou: [How to use free satellite imagery to monitor the expansion of West Bank settlements](https://www.bellingcat.com/resources/2024/05/17/how-to-use-free-satellite-imagery-to-monitor-the-expansion-of-west-bank-settlements/) (Bellingcat) - Originally written for EO Browser, but functionality is nearly identical in Copernicus Browser

## Tool provider

The European Space Agency (Copernicus Browser) (pan-European but headquarters are in Paris, France)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Arsen Drobakha  |
|                 |
