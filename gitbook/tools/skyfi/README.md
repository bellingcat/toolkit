---
updated: '2026-03-01'
description: >-
  SkyFi is used to purchase commercial satellite imagery and task (order the
  collection of images) satellites without a subscription.
---

# SkyFi

## URL

[https://skyfi.com/](https://skyfi.com/)

## Description

Use SkyFi to order existing satellite images or task the collection of a new image. Like Apollo Image Hunter, SkyFi indexes imagery from many different companies, including:

* Planet Labs (United States)
* Satellogic (Uruguay)
* GOKTURK-1 (Turkey)
* Siwei (China)
* Umbra (SAR imagery) (United States)
* ICEYE US (SAR imagery) (United States)
* Vexcel (Aerial imagery) (Germany)
* GEOSAT (Balloon imagery) (Portugal)

SkyFi also sells analytical products, such as satellite vessel detections, mineral and petroleum analysis, and military and infrastructure detection.

The search interface is similar to [Sentinel Hub](https://bellingcat.gitbook.io/toolkit/more/all-tools/sentinal-hub-playground) or [Planet Explorer](https://bellingcat.gitbook.io/toolkit/more/all-tools/planet-labs). To find imagery, use the area selection tools to define your region of interest. By default, results are sorted by the most recent imagery, but you can also use date filters to find imagery from a particular point in time, and to filter by cloud cover, image resolution, and particular satellites.

In the SkyFi search interface, you can only see a very low resolution preview of the image. Typically, this is enough to let you confirm that the image isn't too cloudy, but not to do much more than that. To purchase an image, you can add it to your cart and checkout. SkyFi delivers the image as a GeoTIFF in 24 hours.

To task the collection of a new image, select the "New Image" tab on the left of the SkyFi user interface. Here you can select the type of image (optical or SAR), the resolution, and the date range. SkyFi allows the tasking of images at up to 25 cm resolution. When tasking a Planet Labs image in SkyFi, it is possible to select a specific date and time for the image to be captured.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

Satellite imagery is priced per square kilometer, with a minimum order of 5 to 25 square kilometers, depending on the satellite company and image resolution. Prices vary quite a lot, from $3.75/square kilometer for low resolution PlanetScope imagery to hundreds of dollar per square kilometer for specialized high resolution images.

Prices are visible in the search interface without requesting a quotation.

Sentinel-2 images are available without charge. Taskings cost $200 - $750 depending on resolution. Analytical products tend to be very expensive.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Imagery is usually delivered in GeoTIFF format. These files are large, and best viewed in [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) or other GIS software.

## Limitations

Delivery of the satellite image takes about 24 hours.

Taskings are generally not exclusive and other people will be able to order the image that you have tasked.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                                   |
| ----------------------------------------------------------------- |
| Author: Logan Williams/Bellingcat Team. Reviewed: Sophie Tedling: |
|                                                                   |
