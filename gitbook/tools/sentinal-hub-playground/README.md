---
description: >-
  A user-friendly platform for visualising Sentinel data, updated every 5-10
  days with new imagery. The interface includes a number of features, including
  built-in indices and a timelapse tool.
---

# Copernicus Browser (formerly Sentinel Hub Playground, EO Browser)

## URL

[Copernicus Browser](https://browser.dataspace.copernicus.eu/)

## Description

[Copernicus Browser](https://browser.dataspace.copernicus.eu/) provides a web-based GUI to visualise imagery from the [Sentinel satellites](https://en.wikipedia.org/wiki/Copernicus_Programme#Sentinel_missions), and a range of other satellite data. Every workflow starts by choosing relevant datasets, searching by location (determined by zooming into the map), timespan, and optionally cloud cover, and plot these as an overlay onto a geographical area. Once data has been selected, the platform contains a toolkit to measure and visualise different features.

One convenient feature is the inclusion of imaging indices, including the [NDVI](https://eos.com/make-an-analysis/ndvi/) (Normalised Difference Vegetation Index) and [NDWI](https://eos.com/make-an-analysis/ndwi/) (Normalised Difference Water Index). These create false-colour images from information outside of the visible spectrum that allow for changes in vegetation coverage and water quality to be measured.

For an introduction to using the tool to create a timelapse, Annique Moussou's [guide](https://www.bellingcat.com/resources/2024/05/17/how-to-use-free-satellite-imagery-to-monitor-the-expansion-of-west-bank-settlements/) to using free satellite imagery to monitor the expansion of illegal settlements in the West Bank is a good place to start. While Annique's guide is for the due-to-be-deprecated EO browser, the functionality of Copernicus Browser is extremely similar.

Confusingly, this is a project that has been renamed multiple times, and has also briefly co-existed as two very similar tools (EO and Copernicus Browser), where EO browser's free tier also currently allows access to other satellites, such as NASA's MODIS and Landsat Programs. EO Browser is now due to be replaced by the paid [Planet Insights Platform](./#url). Older links to the 'Sentinel Hub Playground' will redirect to Copernicus Browser. Copernicus Browser allows use with or without an account and does not at present have a paid tier.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Copernicus Browser is free, while EO Browser has a paid tier (though the same functionality as Copernicus remains available for free). It is due to be deprecated, but there is no precise date given for this.

The paid tier of EO browser is managed using Sentinel Hub's [subscription model pricing](https://www.sentinel-hub.com/pricing/), which includes quotas and credits for commercial data, with plans starting at €25/mo for not-for-profit use.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

For Copernicus Browser -- just a browser. To use EO Browser, an email login is required, though this is free to obtain.

## Limitations

Copernicus Browser is limited to Sentinel Data. General limitations of satellite imagery, such as the presence of clouds, will also be an issue. Sentinel data is limited to surface reflectance, and does not include Spatial Aperture Radar, or high spatial resolution imagery.

Because these tools are a browser-based GUI and do not have an option to write code, there is a fine-grained control and customisation afforded by more specialised tools such as [Google Earth Engine](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-earth-engine) (code-based) or [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) (desktop application).

## Ethical Considerations

Like any tool using remote sensing data, it's important to remember that a satellite image is not a panacea, and is best supported with additional information from the ground. In particular, the use of indices and custom scripts to draw conclusions about the presence or not of different features should also be corroborated with other data.

## Guide

Annique Mossou: [How to use free satellite imagery to monitor the expansion of West Bank settlements](https://www.bellingcat.com/resources/2024/05/17/how-to-use-free-satellite-imagery-to-monitor-the-expansion-of-west-bank-settlements/)(Bellingcat) (for EO browser, but instructions are the same)

## Tool provider

The European Space Agency (Copernicus Browser) (pan-European but main offices in Germany)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Agnes Cameron.  |
|                 |
