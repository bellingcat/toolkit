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

Most a[ircraft are usually equipped with an instrument called an ADS-B Ou](https://cincinnatiavionics.com/ads-b-101-what-you-need-to-know/)t, which stands for “Automatic Dependent Surveillance-Broadcast. ”   It is a plane's way of sharing its location, speed, and altitude with air traffic control and other planes in the sky. Think of it as a plane's built-in GPS that constantly broadcasts its position. This helps prevent collisions and makes air travel safer.&#x20;

Flight professionals and enthusiasts then use equipment to receive this information and “feed” that information to flight-tracking websites like ADS-B-Exchange. These flight-tracking websites then visualize this information on an interactive map.&#x20;

_**What does GPSJam do with these data?**_

In simple terms, when aircraft use ADS-B Out, not only are they sending their position, but they are also sending the level of accuracy of their position. According [to the tool provider](https://x.com/lemonodor/status/1553164786380070912), “when there is interference with their GPS, the uncertainty goes up.” When there is little to no interference, the uncertainty goes down. In other words, accuracy goes up when there is no interference, and accuracy goes down when there is interference. In essence, ADS-B Exchange receives data on the level of accuracy of an aircraft's position. The tool provider then aggregates this data over 24 hours and groups it into hexagons. The level of accuracy is then grouped into different colored hexagons. &#x20;

The data seems to be manually updated daily around midnight UTC.&#x20;

_**Filter by date**_

To use the tool, click on the URL and then navigate to the menu in the upper left corner.&#x20;

Choose your date of interest on the calendar icon. The tool automatically shows the results worldwide.&#x20;

{% hint style="info" %}
NOTE: [Historical data only goes up to 14 February 2022. There is no data before this date. ](https://gpsjam.org/faq#incomplete-data)
{% endhint %}

_**Filter by location**_

In addition to filtering by date, users can zoom in on a particular location of interest. Users can enter an address or a general location/city, such as “Moscow.” Users can also use coordinates for specificity.

### How to analyze the hexagons

The map shows areas where aircraft reported good, bad, or uncertain navigation accuracy based on 24 hours of data. The map features hexagonal divisions, [each color-coded.](https://gpsjam.org/)&#x20;

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>This legend is located at the bottom left of the map. Each hexagon is grouped into three colors depending on the level of position accuracy reported by aircraft. </p></figcaption></figure>

GREEN: Good navigation for over 98% of aircraft.

YELLOW: Between 2-10% of aircraft reported low accuracy.

RED: More than 10% of aircraft reported low accuracy (likely interference).

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
