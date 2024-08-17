---
description: >-
  GPSJam.org is a daily map that visualizes the GPS/GNSS disruptions worldwide.
  It collects and presents real-time data showing areas experiencing
  interference.
---

# GPSJam

## URL

https://gpsjam.org/

## Description

GPSJam.org is a website that provides information on GPS interference on aircraft worldwide. It uses data from [ADS-B Exchange](https://www.adsbexchange.com/), a crowd-sourced flight tracking website, to generate daily maps displaying areas of likely GPS interference based on aircraft reports of navigation system accuracy.&#x20;

{% hint style="info" %}
NOTE:&#x20;

[GNSS (Global Navigation Satellite System) GNSS is an umbrella term that refers to any satellite navigation system that provides global coverage. It's a broader category that includes all satellite-based positioning systems. ](https://eos-gnss.com/knowledge-base/gps-overview-1-what-is-gps-and-gnss-positioning)Examples: GPS (Global Positioning System) (United States), GLONASS (Russia), Galileo (European Union), BeiDou (China)
{% endhint %}

### How does it work? 

_**Some background information on flight tracking**_

Most a[ircraft are usually equipped with an instrument called an ADS-B Ou](https://cincinnatiavionics.com/ads-b-101-what-you-need-to-know/)t, which stands for “Automatic Dependent Surveillance-Broadcast. ”   It is a plane's way of sharing its location, speed, and altitude with air traffic control and other planes in the sky. Think of it as a plane's built-in GPS that constantly broadcasts its position. This helps prevent collisions and makes air travel safer. [It is also a critical navigation tool that guides planes towards landing](https://www.reuters.com/business/aerospace-defense/what-is-gps-jamming-why-it-is-problem-aviation-2024-04-30/). With GPS interference, aircraft have less capability of accurately navigating toward their destination.&#x20;

Flight professionals and enthusiasts then use equipment to receive this information and “feed” that information to flight-tracking websites like ADS-B-Exchange. These flight-tracking websites then visualize this information on an interactive map.&#x20;

_**What does GPSJam do with these data?**_

In simple terms, when aircraft use ADS-B Out, **not only are they sending their position, but they are also sending the level of accuracy of their position.** According [to the tool provider](https://x.com/lemonodor/status/1553164786380070912), “when there is interference with their GPS, the uncertainty goes up.” When there is little to no interference, the uncertainty goes down. In other words, accuracy goes up when there is no interference, and accuracy goes down when there is interference. In essence, ADS-B Exchange receives data on the level of accuracy of an aircraft's position. The tool provider then aggregates this data over 24 hours and groups it into hexagons. The level of accuracy is then grouped into different colors. &#x20;

The data seems to be manually updated daily around midnight UTC.&#x20;

_**Filter by date**_

To use the tool, click on the URL and then navigate to the menu in the upper left corner.&#x20;

Choose your date of interest on the calendar icon. The tool automatically shows the results worldwide.

&#x20;

{% hint style="success" %}
TIP: Select a date of significance (e.g., 24 Feb 2022, when the Russian army entered Ukraine). Review the data from a few days before and after this date to gain a broader understanding of the interference patterns surrounding the event.
{% endhint %}

{% hint style="info" %}
NOTE: [Historical data only goes up to 14 February 2022. There is no data before this date. ](https://gpsjam.org/faq#incomplete-data)
{% endhint %}

_**Filter by location**_

In addition to filtering by date, users can zoom in on a particular location of interest. Users can enter an address or a general location/city, such as “Moscow.” Users can also use coordinates for specificity.

### How to analyze the hexagons

The map shows areas where aircraft reported good, bad, or uncertain navigation accuracy based on 24 hours of data. The map features hexagonal divisions, [each color-coded.](https://gpsjam.org/)&#x20;

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>This legend is located at the bottom left of the map. Each hexagon is grouped into three colors depending on the level of position accuracy reported by aircraft. </p></figcaption></figure>

**GREEN:** Good navigation accuracy for over 98% of aircraft.

**YELLOW:** Between 2-10% of aircraft reported low accuracy.

**RED:** More than 10% of aircraft reported low accuracy (likely interference).

**NO COLOR:** Means [“no data.”](https://gpsjam.org/faq#why-arent-there-red-or-green) No aircraft was flying in the zone with ADS-B or no receivers feeding data to the ADS-B Exchange website.&#x20;

{% hint style="warning" %}
**NOTE:** RED/YELLOW does not always indicate jamming. According to [the tool provider](https://gpsjam.org/faq#is-it-always-jamming), “Low accuracy could be caused by factors other than jamming (e.g., military testing, protecting high-profile individuals)”
{% endhint %}

_**Causes of GPS/GNSS Interference**_

To put more context when looking at GPSJam data, looking at possible reasons for GPS/GNSS interference may be helpful.&#x20;

Interference happens like this: Imagine you're in a room trying to listen to your friend (the satellite) whispering from far away. If someone (the jammer) suddenly shouts very loudly in the room, you won’t be able to hear your friend anymore. That's essentially how interference happens—it drowns out the important signal with a stronger one.

There are a [few factors that cause interference](https://www.flightradar24.com/data/gps-jamming).&#x20;

**Unintentional:**

1. Atmospheric conditions
2. Solar activity
3. A problem with an aircraft’s equipment (but when [“multiple aircraft in close proximity during the same time frame, it suggests the presence of a radio signal interfering with normal GNSS operation.” ](https://www.flightradar24.com/data/gps-jamming)
4. [Electromagnetic interference from sources like radios, cellphones, or sometimes powerlines can lead to inaccuracies. ](https://www.flightradar24.com/data/gps-jamming)

**Intentional:**&#x20;

[Satellites in space constantly send weak radio signals down to Earth,](https://www.gpsworld.com/innovation-insights-gnss-jamming-and-spoofing/) which GPS devices use to figure out their location. However, there are stronger signals that may come from somewhere else. A[ GPS jammer, for example, is a small device on the ground that sends out radio signals ](https://www.reuters.com/business/aerospace-defense/what-is-gps-jamming-why-it-is-problem-aviation-2024-04-30/)at the [same frequency as satellites. ](https://www.cisa.gov/sites/default/files/2023-02/CISA-Insights\_GPS-Interference\_508.pdf)But the jammer's signals are much [stronger than the ones coming from space](https://www.gpsworld.com/innovation-insights-gnss-jamming-and-spoofing/). Confusion happens when this is the case. Because the jammer's signals are stronger, they overpower the satellite signals. This confuses the GPS device, and it can't correctly calculate the location. When GPS jamming happens, the device can’t read the satellite signals, so it either shows the wrong location or no location at all.

1. [Deliberate testing of military jamming systems](https://gpsjam.org/faq#is-it-always-jamming) outside of conflict zones (I.e., in Southwestern United States).  [Sometimes, military exercises intentionally jam GPS signals when trying to simulate electronic warfare scenarios.](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/)&#x20;
2. Law enforcement agencies may activate GPS jamming to[ protect sensitive areas like critical infrastructure](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/) (power grids, emergency services) or government buildings.&#x20;
3. [Intentional jamming to cause navigation inaccuracy. ](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/) Large-scale interference is often times seen around conflict zones. [High-intensity interference that affects a larger geographic area typically requires advanced electronic systems](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/), often associated with military applications.

\
\
\


## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

\[\[Information on the requirement for using a tool, for instance, API key, e-mail address etc.]]

## Limitations

\[\[The limitations of each tool should be described. This is important for researchers if they want to decide whether they should invest the time to learn how to use a new tool.]]

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guide

\[\[Link to a guide on this tool]]

## Tool provider

\[\[Name the tool provider (and potentially info on them)]]

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                                |
| -------------------------------------------------------------- |
| \[\[Your name here (optional) or "Bellingcat volunteer team"]] |
|                                                                |
