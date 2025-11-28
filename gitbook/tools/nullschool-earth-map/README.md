---
description: >-
  View current and historic wind, weather, ocean and pollution conditions on an
  interactive animated map.
---

# Nullschool Earth Map

## URL

[https://earth.nullschool.net](https://earth.nullschool.net/#current)

## Description

{% hint style="warning" %}
As of October 2025, some of the data underlying this tool is no longer being updated due to U.S. federal funding disruptions.

This tool visualizes both historic and near real-time data. Especially when dealing with recent data, use this tool with caution. Always verify data through its original source.&#x20;

Data sources for each map layer are listed [here](https://earth.nullschool.net/about).
{% endhint %}

**Nullschool Earth Map** is an interactive visualization of global environmental data. It displays information on wind, ocean currents, waves, air pollutants and more. Users can specify a date and explore various data layers to observe environmental conditions across the planet.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2025-10-26 at 4.20.10 PM.png" alt="A globe with the Atlantic Ocean in focus. The land and oceans are blue, and there are large green swirls with white streaks flowing through the swirls. The swirls appear mostly in the ocean, but not exclusively."><figcaption><p>Surface winds on June 8, 2025</p></figcaption></figure>

### Potential Uses

Open source researchers may find this tool useful for:

* tracking the spread of particulate matter over time to infer the presence of dust & smoke
* corroborating weather conditions at a specified date/time
* analyzing ocean currents and wind conditions to support ship movement tracking
* tracking and discovering fires anywhere in the world

This is not a comprehensive list. This tool contains a wealth of data which may be useful in many ways, especially as related to environmental investigations.

### Tips & Tricks

* To open the interface panel that allows you to change the data layer, date and more, click "earth" in the bottom left corner of the screen.

<figure><img src=".gitbook/assets/Screenshot 2025-10-26 at 4.44.36 PM.png" alt=""><figcaption></figcaption></figure>

* Specify a date/time to view by clicking the calendar icon in the 'Control' row.

<figure><img src=".gitbook/assets/Screenshot 2025-10-26 at 5.36.03 PM.png" alt="User interface panel that enables users to change the date and data metric displayed on map. This screenshot highlights the calendar icon."><figcaption></figcaption></figure>

* Click a point on the map to get the interpolated value for a given metric at any given location.

<figure><img src=".gitbook/assets/Screenshot 2025-10-26 at 5.17.56 PM.png" alt="The map in Wind Mode, showing the DUex value for a point in Africa"><figcaption></figcaption></figure>

* To specify an exact latitude/longitude coordinate, select the metrics you'd like to see, then edit the end of the URL by adding `loc=YOUR_LONGITUDE_POINT,YOUR_LATITUDE_POINT`.
  * Example:
    * [https://earth.nullschool.net/#2018/08/04/2000Z/particulates/surface/level/overlay=duexttau/orthographic=54.12,6.65,449/loc=_**11.539,19.014**_](https://earth.nullschool.net/#2018/08/04/2000Z/particulates/surface/level/overlay=duexttau/orthographic=54.12,6.65,449/loc=11.539,19.014)

### Available Metrics

#### Date

Each metric can be viewed by specified date and time, in some cases as far back as January 2013. (View [#limitations](./#limitations "mention")section for more info.)

#### Air Mode

Each metric can be viewed at surface temperature, or at 1000, 850, 700, 500, 250, 70 or 10 hectopascals (hPa).

* **Wind:** Wind speed
* **Temp**: Temperature
* **RH**: Relative humidity
* **Dew**: Dew point temperature&#x20;
* **WBT**: Wet bulb temperature
* **3HPA**: 3-hour precipitation accumulation
* **CAPE**: Convective available potential energy from surface
* **TPW**: Total precipitable water
* **TCW**: Total cloud water
* **MSLP**: Mean sea level pressure
* **MI**: Misery index
* **UVI**: Ultraviolet index and erythemal dose rate
* **WPD**: Instantaneous wind power density

#### Ocean Mode

* **Currents**: Ocean currents
* **Waves**: Peak wave period
* **HTSGW**: Significant wave height
* **SST**: Sea surface temperature
* **SSTA**: Sea surface temperature anomaly (relative to 1981-2011 daily average)
* **BAA**: Bleaching alert area

#### Atmospheric Chemistry Mode

* **CO**<sub>**sc**</sub>: Carbon monoxide surface concentration
* **CO**<sub>**2**</sub>**sc**: Carbon dioxide surface concentration
* **SO**<sub>**2**</sub>**sm**: Sulfur dioxide surface mass
* **NO**<sub>**2**</sub>: Nitrogen dioxide

#### Particulates Mode

* **DUex**: Dust extinction (aerosol optical thickness, 550 nm)
* **PM**<sub>**1**</sub>: Particulate matter < 1 µm
* **PM**<sub>**2.5**</sub>: Particulate matter < 2.5 µm
* **PM**<sub>**10**</sub>: Particulate matter < 10 µm
* **OMaot**: Organic matter aerosol optical thickness (550 nm)
* **SO**<sub>**4**</sub>**ex**: Sulfate extinction (aerosol optical thickness, 550 nm)

#### Space Mode

* **Aurora**: Probability of visible aurora

#### Bio Mode

* **BAA**: Bleaching alert area
* **Fires**: Active fires

#### Animations

In any mode, the following animations can be viewed on the map:

* **Wind**
* **Currents**: Ocean surface currents
* **Waves**: Peak wave period

### Use Cases

* Identify anomalies in climate-related conditions
* Track density and spread of pollutants over time
* Identify and track the spread of fires

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

No special setup is needed. The map works well on mobile devices and is optimized to handle graphics-intensive, large datasets smoothly. However, performance may be slower on older devices or outdated browsers.

## Limitations

* **Approximate Data Between Grid Points:** Layers in Air Mode use [Global Forecast System](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C00631) data, which is is based on a global grid with points spaced [**1° apart**](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C00631)**.** This means the map is divided into squares that are 1 degree of latitude by 1 degree of longitude in size. For any location selected between these points, your browser computes a **best-guess** value using an estimation technique called [bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). If the map's projection is changed while in Air Mode, [an algorithm](https://en.wikipedia.org/wiki/Finite_difference) is used to estimate distortion during the interpolation process.&#x20;
  * Air Mode is the only mode [performing real-time interpolation](https://github.com/kkpoon/nullschool-earth/blob/master/README.md#implementation-notes). Other modes' layers should deliver the data exactly as their providers serve it.
* **Configuration Complexity and Inconsistencies:** The site stores your settings (like chosen layer, date, projection and selected point) in the URL itself. While this allows for easy sharing and bookmarking, and specifying exact latitude/longitude, it can sometimes cause strange behavior when switching between layers, leading to temporary glitches that usually quickly fix themselves.
* **Errors Fetching 2013 Data:** The interface allows the user to select dates as far back as January 2013, but for all modes, when a date prior to November 2013 is selected, an error message appears indicating that the data could not be retrieved. Some modes are not able to successfully fetch data until at least 2014.

## Ethical Considerations

* **Do not overstate precision.** Some layers of this map are based on model-based, [interpolated](https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/understanding-interpolation-analysis.htm) data. It may not be precise at a hyper-local level and should be used as supporting context, not as definitive proof.&#x20;
* **Use in combination with other sources.** Cross-reference environmental data with satellite imagery, eyewitness reports or local measurements to avoid misinterpretation.
* **Avoid misleading visuals.** Animated wind or pollution overlays can appear dramatic. Be careful not to exaggerate claims or mislead audiences based on the visual effect alone.

## Guide

* [Using: Earth.nullschool.net: How to view this beautiful interactive global view of our weather and climate.](https://arcg.is/1L9H4n0) (Storymap)
* [Tutorial by Michael Pidwirny](https://pressbooks.bccampus.ca/physgeoglabmanual1/back-matter/appendix-4-earth-nullschool-net-tutorial/), via British Columbia/Yukon Pressbooks
* [How to Use Earth Null School: Ultimate Guide to Interactive Weather Maps and Climate Data](https://www.youtube.com/watch?v=ORglL1utOV0) (Youtube tutorial)
* The site's [About page](https://earth.nullschool.net/about.html) includes detailed information about each layer of this map.
* More information about the map is also provided via Nullschool Earth Map's social media accounts ([Facebook](https://www.facebook.com/EarthWindMap), [Instagram](https://www.instagram.com/nullschool/), [Youtube](https://www.youtube.com/channel/UCZyd1nnJuvS-EZvAV-IDtPg)).
* [earth.nullschool.net news](https://news.nullschool.net/) (tool provider's newsletter)

## Tool provider

This map was created and is maintained by Cameron Beccario, who was born in the United States and is based in Japan. He can be found on [Bluesky](https://bsky.app/profile/cambecc.bsky.social) and [LinkedIn](https://www.linkedin.com/in/cambecc/).

Feedback about the map can be provided via [this form](https://docs.google.com/forms/d/e/1FAIpQLSfL0NFHIL2TXx6afSyrXCSd15liLDDfVyOTfKKHhj3ZcopZgQ/viewform).

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                        |
| ------------------------------------------------------ |
| [Courtney Cox](https://www.linkedin.com/in/court-cox/) |
|                                                        |
