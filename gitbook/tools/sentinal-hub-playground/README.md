---
description: >-
  A user-friendly platform for visualising Sentinel data, updated every 5-10
  days with new imagery. The interface includes a number of features, including
  built-in indices and a timelapse tool.
---

# Copernicus Browser and EO Browser (formerly Sentinel Hub Playground)

## URL

[Copernicus Browser](https://browser.dataspace.copernicus.eu/)

[Sentinel-hub EO-Browser3](https://apps.sentinel-hub.com/eo-browser/)

## Description

[Copernicus Browser](https://browser.dataspace.copernicus.eu/) and [EO Browser](https://apps.sentinel-hub.com/eo-browser) provide web-based GUIs to visualise imagery from the [Sentinel satellites](https://en.wikipedia.org/wiki/Copernicus\_Programme#Sentinel\_missions), and a range of other satellite data. Every workflow starts by choosing relevant datasets, searching by location (determined by zooming into the map), timespan, and optionally cloud cover, and plot these as an overlay onto a geographical area. Once data has been selected, the platform contains a toolkit to measure and visualise different features.

One convenient feature is the inclusion of imaging indices, including the [NDVI](https://eos.com/make-an-analysis/ndvi/) (Normalised Difference Vegetation Index) and [NDWI](https://eos.com/make-an-analysis/ndwi/) (Normalised Difference Water Index). These create false-colour images from information outside of the visible spectrum that allow for changes in vegetation coverage and water quality to be measured.

For a guide on using the tool to create a timelapse, Annique Moussou's recent [guide](https://www.bellingcat.com/resources/2024/05/17/how-to-use-free-satellite-imagery-to-monitor-the-expansion-of-west-bank-settlements/) to using free satellite imagery to monitor the expansion of illegal settlements in the West Bank is a good place to start.

Confusingly, there are two linked browser-based tools that afford a very similar interface to Sentinel data: EO Browser, and Copernicus Browser. Older links to the 'Sentinel Hub Playground' will redirect to Copernicus Browser.

At present, EO Browser and Copernicus Browser are functionally very similar, though EO Browser also allows the inclusion of non-Sentinel satellite datasets such as Landsat and MODIS, and the inclusion of commercial data. EO Browser requires a login, and is part of Sentinel's Planet Insights platform, which has a paid tier. Copernicus Browser allows use with or without an account and does not at present have a paid tier. The splitting-off of these separate platforms is relatively recent; time will tell if their features will diverge in any significant way.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Copernicus Browser is free, while EO Browser has a paid tier (though the same functionality as Copernicus remains available for free). EO Browser can be a bit confusing in this regard -- implying you need a paid account -- but for now it is possible to use for free.

The paid tier of EO browser is managed using Sentinel Hub's [subscription model pricing](https://www.sentinel-hub.com/pricing/), which includes quotas and credits for commercial data, with plans starting at €25/mo for not-for-profit use.&#x20;

Planet Labs' hi-res data, which may also be used with the platform, is included on a separate pricing tier that starts at €5000 annually.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

For Copernicus Browser -- just a browser. To use EO Browser, an email login is required, though this is free to obtain.

## Limitations

Copernicus Browser is limited to Sentinel Data, while EO Browser is not -- however to obtain higher-resolution satellite imagery, you need to access the paid tier. General limitations of satellite imagery, such as the presence of clouds, will also be an issue.

Because these tools are a browser-based GUI and do not have an option to write code, there is a fine-grained control and customisation afforded by more specialised tools such as [Google Earth Engine](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-earth-engine) (code-based) or [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) (desktop application).

## Ethical Considerations

Like any tool using remote sensing data, it's important to remember that a satellite image is not a panacea, and is best supported with additional information from the ground. In particular, the use of indices and custom scripts to draw conclusions about the presence or not of different features should also be corroborated with other data.

EO Browser's availability of high-resolution satellite imagery involves further questions about anonymity and surveillance, as the resolution of e.g. Planet Labs imagery is sufficient to track individual vehicles.

## Guide

Annique Mossou: [How to use free satellite imagery to monitor the expansion of West Bank settlements](https://www.bellingcat.com/resources/2024/05/17/how-to-use-free-satellite-imagery-to-monitor-the-expansion-of-west-bank-settlements/)(Bellingcat)

## Tool provider

The European Space Agency (Copernicus Browser) (pan-European but main offices in Germany)\
Planet Insights Platform (EO Browser) (US)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Agnes Cameron   |
|                 |
