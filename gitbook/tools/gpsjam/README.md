---
description: >-
  GPSJam.org is a daily map that visualizes the GPS/GNSS disruptions on aircraft
  worldwide. It collects and presents 24-hour data showing areas experiencing
  interference.
---

# GPSJam

## URL

[https://gpsjam.org/](https://gpsjam.org/)

## Description

GPSJam.org is a website that provides information on GPS interference on aircraft worldwide. It uses data from [ADS-B Exchange](https://www.adsbexchange.com/), a crowd-sourced flight tracking website, to generate daily maps displaying areas of likely GPS interference based on aircraft reports of navigation system accuracy.&#x20;

{% hint style="info" %}
NOTE:&#x20;

[GNSS (Global Navigation Satellite System)](https://eos-gnss.com/knowledge-base/gps-overview-1-what-is-gps-and-gnss-positioning) is an umbrella term that refers to any satellite navigation system that provides global coverage. It's a broader category that includes all satellite-based positioning systems. Examples: GPS (Global Positioning System) (United States), GLONASS (Russia), Galileo (European Union), BeiDou (China).
{% endhint %}

### How does it work? 

_**Some background information on flight tracking**_

Most aircraft are usually equipped with an instrument called an [ADS-B Out](https://cincinnatiavionics.com/ads-b-101-what-you-need-to-know/), which stands for “Automatic Dependent Surveillance-Broadcast.” It is a plane's way of sharing its location, speed, and altitude with air traffic control and other planes in the sky. Think of it as a plane's built-in GPS that constantly broadcasts its position. This helps prevent collisions and makes air travel safer. [It is also a critical navigation tool that guides planes towards landing](https://www.reuters.com/business/aerospace-defense/what-is-gps-jamming-why-it-is-problem-aviation-2024-04-30/). With GPS interference, aircraft have fewer ways of accurately navigating toward their destination (however, they usually have other methods, too).&#x20;

Flight professionals and enthusiasts use equipment to receive this information and "feed" that information to flight-tracking websites like ADS-B Exchange. These flight-tracking websites then visualize this information on an interactive map.       &#x20;

_**What does GPSJam do with these data?**_

In simple terms, when aircraft use ADS-B Out, **not only are they sending their position, but they are also sending the level of accuracy of their position.** According [to the tool provider](https://x.com/lemonodor/status/1553164786380070912), “when there is interference with their GPS, the uncertainty goes up.” When there is little to no interference, the uncertainty goes down. In other words, accuracy goes up when there is no interference, and accuracy goes down when there is interference. In essence, ADS-B Exchange receives data on the level of accuracy of an aircraft's position. The tool provider then aggregates this data over 24 hours and groups it into hexagons. The level of accuracy is then grouped into different colors. &#x20;

The data seems to be [manually updated daily ](https://x.com/lemonodor/status/1553107534029828096)around midnight UTC.&#x20;



<figure><img src=".gitbook/assets/ScreenRecording2024-08-16103057-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>This shows GPSJam’s interference data on 13 Aug 2024. First, we enter the date we are interested in. By clicking on “More” under the calendar, we find the location we are interested in by entering the info i.e. Moscow. We can adjust the amount of flight traffic in that area by sliding the toggle on the “traffic threshold” menu.</p></figcaption></figure>

_**Filter by date**_

To use the tool, click on the URL and then navigate to the menu in the upper left corner.&#x20;

Choose your date of interest on the calendar icon. The tool automatically shows the results worldwide.

&#x20;

{% hint style="success" %}
TIP: _Create a timeline of interference patterns using GPSJam_&#x20;

Select a date of significance (e.g., 24 Feb 2022, when the Russian army entered Ukraine). Review the data from a few days before and a few days after this date to gain a broader understanding of the interference patterns surrounding the event.&#x20;
{% endhint %}

{% hint style="info" %}
NOTE: Historical data only goes back to [14 February 2022](https://gpsjam.org/faq#incomplete-data). There is no data before this date.&#x20;
{% endhint %}

_**Filter by location**_

In addition to filtering by date, users can zoom in on a particular location of interest. Users can enter an address or a general location/city, such as “Moscow.” Users can also use coordinates for specificity.

_**Traffic Threshold**_

Users can toggle the slider under the "traffic threshold" option to filter interference data.&#x20;

### How to analyze the hexagons

The map shows areas where aircraft reported good, bad, or uncertain navigation accuracy based on 24 hours of data. The map features hexagonal divisions, [each color-coded.](https://gpsjam.org/)&#x20;

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>This legend is located at the bottom left of the map. Each hexagon is grouped into three colors depending on the level of position accuracy reported by aircraft. </p></figcaption></figure>

**GREEN:** Good navigation accuracy for over 98% of aircraft.

**YELLOW:** Between 2-10% of aircraft reported low accuracy.

**RED:** More than 10% of aircraft reported low accuracy (likely interference).

**NO COLOR:** Means [“no data.”](https://gpsjam.org/faq#why-arent-there-red-or-green) No aircraft was flying in the zone with ADS-B or no receivers feeding data to the ADS-B Exchange website.&#x20;

{% hint style="warning" %}
**NOTE:** RED/YELLOW does not always indicate jamming. According to [the tool provider](https://gpsjam.org/faq#is-it-always-jamming), “Low accuracy could be caused by factors other than jamming (e.g., military testing, protecting high-profile individuals)”.
{% endhint %}

_**Causes of GPS/GNSS Interference**_

To put more context when looking at GPSJam data, looking at possible reasons for GPS/GNSS interference may be helpful.&#x20;

Interference happens like this: Imagine you're in a room trying to listen to your friend (the satellite) whispering from far away. If someone (the jammer) suddenly shouts very loudly in the room, you won’t be able to hear your friend anymore. That's essentially how interference happens—it drowns out the important signal with a stronger one.

There are a [few factors that cause interference](https://www.flightradar24.com/data/gps-jamming).&#x20;

**Unintentional:**

1. Atmospheric conditions
2. Solar activity
3. A problem with an aircraft’s equipment (but when there are [“multiple aircraft in close proximity during the same time frame, it suggests the presence of a radio signal interfering with normal GNSS operation.” ](https://www.flightradar24.com/data/gps-jamming)
4. [Electromagnetic interference from sources like radios, cellphones, or sometimes powerlines can lead to inaccuracies. ](https://www.flightradar24.com/data/gps-jamming)

**Intentional:**&#x20;

[Satellites in space constantly send weak radio signals down to Earth,](https://www.gpsworld.com/innovation-insights-gnss-jamming-and-spoofing/) which GPS (or other GNSS) devices use to determine their location. However, there are stronger signals that may come from somewhere else. A[ GPS jammer, for example, is a small device on the ground that sends out radio signals ](https://www.reuters.com/business/aerospace-defense/what-is-gps-jamming-why-it-is-problem-aviation-2024-04-30/)at the [same frequency as satellites. ](https://www.cisa.gov/sites/default/files/2023-02/CISA-Insights_GPS-Interference_508.pdf)But the jammer's signals are much [stronger than the ones coming from space](https://www.gpsworld.com/innovation-insights-gnss-jamming-and-spoofing/). Confusion happens when this is the case. Because the jammer's signals are stronger, they overpower the satellite signals. This confuses the GPS device, and it can't correctly calculate the location. When GPS jamming happens, the device can’t read the satellite signals, so it either shows the wrong location or no location at all.

Some of the causes of [low accuracy](https://gpsjam.org/faq) are:&#x20;

1. [Deliberate testing of military jamming systems](https://gpsjam.org/faq#is-it-always-jamming) outside conflict zones (I.e., in the Southwestern United States).  [Sometimes, military exercises intentionally jam GPS signals when trying to simulate electronic warfare scenarios.](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/)&#x20;
2. Law enforcement agencies may activate GPS jamming to[ protect sensitive areas like critical infrastructure](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/) (power grids, emergency services) or government buildings.&#x20;
3. [Intentional jamming to cause navigation inaccuracy. ](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/) Large-scale interference is often seen around conflict zones. [High-intensity interference that affects a larger geographic area typically requires advanced electronic systems](https://knowmad-osint.com/gps-jamming-in-action-an-osint-perspective/), often associated with military applications.

### Use case&#x20;

When used with other data, news reports, and open-source research methods, the site can be useful for identifying patterns of GPS jamming and spoofing, often linked to military activities. Open-source researchers can supplement their investigations with this tool when monitoring incidents in conflict zones. With UAVs or unmanned aerial vehicles (“drones”) now more prominent in conflict zones, [experts say](https://breakingdefense.com/2024/04/gps-jamming-spreads-in-lebanon-civil-aviation-caught-in-the-electronic-crossfire-experts/) that jamming communication systems is one of the effective ways of countering them.&#x20;

In conflict areas where GPS-guided drones or munitions are used, [radio jammers are installed ](https://www.forbes.com/sites/davidaxe/2023/10/31/the-russians-installed-a-gps-jammer-in-ukraine-the-ukrainians-blew-it-up-with-a-gps-guided-bomb/)to help stop these from reaching their targets, i.e. in Ukraine.&#x20;

GPSJam was used in this research to give an overview of global GPS jamming between 2020 and 2023:

Dong L. Wu, Ph.D, _“Innovation: Recent GPS jamming in regions of geopolitical conflict”,_ [https://www.gpsworld.com/innovation-recent-gps-jamming-in-regions-of-geopolitical-conflict/](https://www.gpsworld.com/innovation-recent-gps-jamming-in-regions-of-geopolitical-conflict/)&#x20;

GPSJam was also used to look at instances of GPS interference allegedly against Hezbollah in Lebanon, in April 2024 affecting civil aviation.

Helou, Agnes, _“GPS jamming spreads in Lebanon, civil aviation caught in the electronic crossfire”,_ [https://breakingdefense.com/2024/04/gps-jamming-spreads-in-lebanon-civil-aviation-caught-in-the-electronic-crossfire-experts/](https://breakingdefense.com/2024/04/gps-jamming-spreads-in-lebanon-civil-aviation-caught-in-the-electronic-crossfire-experts/).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

Desktop or mobile device

Internet connection&#x20;

## Limitations

1. [**Manual update:** ](https://x.com/lemonodor/status/1553107534029828096)According to the tool provider's tweet on Jul 2022, data is updated manually by the tool provider daily around midnight UTC. Sometimes there are delays before he is able to update the data.
2. **Daily update of data susceptible to technical failures:** [Data loss or incomplete data are possible](https://gpsjam.org/faq) due to power outage, network issue, hardware failure, or data collection issues. Data are incomplete on:

<table><thead><tr><th>2022</th><th>2024</th><th>2025</th><th data-hidden></th></tr></thead><tbody><tr><td>14 Feb</td><td>28 Jan</td><td>8 Jan</td><td></td></tr><tr><td>8 Jun</td><td>30 Jan</td><td></td><td></td></tr><tr><td>9 Jun</td><td>14 Jul</td><td></td><td></td></tr><tr><td>13 Oct </td><td></td><td></td><td></td></tr><tr><td>14 Oct</td><td></td><td></td><td></td></tr><tr><td>27 Dec</td><td></td><td></td><td></td></tr></tbody></table>

_**(**&#x53;ee also lack of ADS-B data on 8 Nov 2024, based on the tool provider's post_ [_here_](https://x.com/lemonodor/status/1854905782833496270?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet)_)_

3. **Limited historical data:** Historical data only goes up to[ 14 February 2022](https://gpsjam.org/faq#incomplete-data). There is no data before this date.
4. [**GPS interference on aircraft may not be the same as on the ground interference:** ](https://gpsjam.org/faq#i-live-in-one-of-the-red-zones)GPSJam only looks at aircraft data. Because airplanes fly high in the sky, they can "see" further than devices on the ground when it comes to radio signals. This means they are more likely to detect GPS interference. Ground-level impact might be less severe. While GPSJAM data indicates potential issues with GPS signals in certain areas, the situation on the ground might not be as bad as the map suggests.

As a potential consequence, the tool may sometimes not work for drones. Because GPSJam and ADS-B Exchange measurements are taken at a specific altitude, data for UAVs at a different altitude may not necessarily be captured.  According to [this](https://www.helicomicro.com/2024/06/04/gpsjam-gps/), “In green or yellow zones, there is very little chance that GPS signals will be degraded for drones.” The only exception is [if drones are near the sources of interference. ](https://www.helicomicro.com/2024/06/04/gpsjam-gps/)GPSJam should be cross-checked with other sources and social media channels where instances of drone jamming are regularly published.&#x20;

5. [**Calculating the percentage of “bad” aircraft has the potential to bias map data:** ](https://gpsjam.org/faq#how-is-the-percentage-calculated) Think of each hex on the map as a small zone in the sky. To determine the color of each hex (green, yellow, or red), the system checks how many planes passed through that zone and whether their GPS is working correctly.&#x20;

“Good planes” are planes with functioning GPS.

“Bad planes” are planes experiencing GPS issues.

To figure out the color of the hex, the tool calculates a percentage based on the ratio of good planes to bad planes within that zone. If a lot of planes have GPS problems, the percentage of bad planes will be higher, turning the hex yellow or red. If most planes are fine, the hex stays green.

\
However, here’s the catch: in areas with very few planes, a single bad GPS reading could make it seem like there’s a serious issue, even if it’s just a one-off problem. To correct for this, they subtract one "bad plane" from the total count to reduce false alarms in zones with fewer planes.&#x20;

The downside of this process is that in areas with very few planes, this adjustment might cause the system to miss real problems because there’s not enough data to confidently show that something is wrong.

In short, they balance showing accurate issues without overreacting to random bad signals, but this approach can hide real issues in places with less air traffic.

## Ethical Considerations

**Accuracy and Misinterpretation:** Users are encouraged to look at the limitations of the tool when using it. In particular, to check dates under the FAQs section to see if they are looking at GPS interference data that is incomplete or missing. Users are encouraged to be transparent about these limitations.&#x20;

## Guide

\-

## Tool provider

[John Wiseman](https://x.com/lemonodor), US (according to the X profile)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
