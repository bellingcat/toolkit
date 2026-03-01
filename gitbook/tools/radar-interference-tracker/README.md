---
updated: '2026-01-15'
description: >-
  Bellingcat's radar interference tracker can be used to locate and monitor
  active military radar systems.
---

# Radar Interference Tracker (RIT)

## URL

[https://ollielballinger.users.earthengine.app/view/bellingcat-radar-interference-tracker#lon=49.9507;lat=26.6056;zoom=4;](https://ollielballinger.users.earthengine.app/view/bellingcat-radar-interference-tracker#lon=49.9507;lat=26.6056;zoom=4;)

## Description

The Bellingcat radar interference tracker is a web-based tool that visualises radar interference which can then be used to search for and potentially locate active military radar systems around the globe.

The tool exploits a known flaw in Sentinel-1 Synthetic Aperture Radar (SAR) imagery. Systems like Patriot missile batteries emit a radar pulse when turned on that interferes with Sentinel's SAR signal creating a stripe of interference perpendicular to the orbital path of the satellite.

Locations where the tool has suggested radar systems are present according to Ollie Ballinger's [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/) include: Russia, Bahrain, Qatar, Jordan, Yemen, Dammam, Saudi Arabia, the [White Sands Missile Range](https://www.google.com/maps/@32.3785089,-106.4718007,6035m/data=!3m1!1e3) in New Mexico, USA, and the [Dimona Radar Facility](https://www.google.com/maps/place/Dimona+Radar+Facility/@30.9685089,35.0948799,782m/data=!3m2!1e3!4b1!4m5!3m4!1s0x150237648ec9b907:0xde8df259d70896ce!8m2!3d30.9685089!4d35.0970686) in Israel.

According to the [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/) among other systems the tool has been used to identify:

* US MIM-104 Patriot and PAC-2 missile defence systems
* Russia surface-to-air missile (SAM) systems in Syria and S-400 SNAR-10M1 radar systems.

Although the RIT tool can help hone in on areas of interest, a manual search of what is underneath a signal is required to identify candidates of the interference.

**Features:**

* **Zoom tool:** zoom in and out on the map.
* **Terrain**: toggle terrain visualisation on or off
* **Labels:** and toggle labels on satellite imagery off or on.
* **Search**: search by address, general location or latitude and longitude.
* **Radio interference graph:** shows dates with spikes representing when the radar source was most active.
* **Layers:** change opacity of layers.
* **Example Locations:**
  * Dammam, Saudi Arabia
  * Dimona Radar Facility, Israel
  * Rostov-on-Don, Russia
  * White Sands Missile Range, USA
  * Kashmir, India/Pakistan Border
  * Russian Occupied Crimea, Ukraine

The screenshot below show the White Sands Missile Range, USA example included with the radar interference tool.

<figure><img src=".gitbook/assets/Screenshot 2024-08-08 at 1.55.25 PM.png" alt="Screenshot using the White Sands Missile Range, USA radar interference example in the radar interference tracker. The map show a satellite image of the area overlayed with a coloured stripe indicating the radar interference."><figcaption><p>Screenshot of White Sands Missile Range, USA radar interference</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

* **Web:** any modern web browser.

## Limitations

* **Other sources of interference:** Not every instance of C-band radio frequency interference is caused by a military radar. Weather radar and telecommunications infrastructure among others use the same frequency – all of which are picked up by Sentinel-1, see Ollie Ballinger's [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/).
* **Processing time**: Aggregating by year can be slow according to the [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/).
* **Data Currency:** High resolution satellite imagery is not necessarily current. Although imagery is generally fairly recent, it can be a few years old, see Ollie Ballinger's [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/).
* **Temporal refresh rates:** Sentinel-1 has a five-day revisit time as the satellites circle the globe. However, a [recent issue](https://www.space.com/europe-sentinel-1b-earth-observation-satellite-anomaly) with one of the satellites in the constellation has doubled that time.
* **Facility verification:** there could be multiple potential sources (weather, telecommunications, etc.) in the interference stripe, and just because something looks like a military base, it doesn’t mean that it is according to the [original article](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/).

## Ethical Considerations

* see General Ethical Considerations.

## Guides and articles

To effectively use the Radar Interference Tracker, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**

* [https://github.com/bellingcat/sar-interference-tracker](https://github.com/bellingcat/sar-interference-tracker)

**Tutorials and Articles**

* Ballinger, O. (2022) _Radar Interference Tracker: A New Open Source Tool to Locate Active Military Radar Systems_, _bellingcat_. Available at: [https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/](https://www.bellingcat.com/resources/2022/02/11/radar-interference-tracker-a-new-open-source-tool-to-locate-active-military-radar-systems/) (Accessed: 8 August 2024).
* Leng, X., Ji, K. and Kuang, G. (2021) ‘Radio Frequency Interference Detection and Localization in Sentinel-1 Images’, _IEEE Transactions on Geoscience and Remote Sensing_, 59(11), pp. 9270–9281. Available at: [https://doi.org/10.1109/TGRS.2021.3049472](https://doi.org/10.1109/TGRS.2021.3049472).

**Video Tutorials**

* _Radar Interference Tracker within SAR data - Ollie Ballinger (UCL)_ (2022). Available at: [https://www.youtube.com/watch?v=qZ96MaXJmGY](https://www.youtube.com/watch?v=qZ96MaXJmGY) (Accessed: 10 August 2024).

**Community and Support**

* [https://github.com/bellingcat/sar-interference-tracker](https://github.com/bellingcat/sar-interference-tracker)

## Tool provider

[Bellingcat](https://www.bellingcat.com/), Netherlands

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                                  |
| ---------------------------------------------------------------- |
| Bellingcat Volunteer Team/Unassigned. Reviewed:r Sophie Tedling: |
|                                                                  |
