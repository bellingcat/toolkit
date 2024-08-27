---
description: >-
  FlightAware is a global flight-tracking platform that provides real-time data
  on aircraft movements. It offers live tracking, historical data, and
  predictive analytics via its website and apps.
---

# FlightAware

## URL

http://flightaware.com/

## Description

FlightAware is a global aviation tracking service that collects real-time flight information, including flight paths, statuses, and historical data.[ It works by gathering data from various sources, such as air traffic control systems, commercial data providers, and its network of ADS-B (Automatic Dependent Surveillance-Broadcast) receivers.](http://www.flightaware.com/about/faq/#data) Key features include live flight tracking, airport information, aircraft information, and alerts for delays or cancellations. Because FlightAware has multiple data sources for its flights, it tends to have better coverage in regions such as South America and Africa (See this [guide](https://gijn.org/resource/planespotting-an-updated-guide-to-tracking-aircraft-around-the-world/) under “Other Tracking Sources”).

{% hint style="info" %}
NOTE: FlightAware is useful if tracking the following types of flights  (See list of flight types under [live map](https://www.flightaware.com/live/map) and filtering options):  [commercial flights](#user-content-fn-1)[^1], [business flights](#user-content-fn-2)[^2], [cargo flights](#user-content-fn-3)[^3], [general aviation flights](#user-content-fn-4)[^4] and MEDEVAC. [However, take note that it honors requests to remove any aircraft if the owner asks for it. ](https://gijn.org/resource/planespotting-an-updated-guide-to-tracking-aircraft-around-the-world/)
{% endhint %}

{% hint style="success" %}
TIP: Check more than one flight-tracking website when doing research,[ “since one might have more information than the others.”](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/)
{% endhint %}

When used for open-source investigations, flight-tracking websites like FlightAware can assist in:&#x20;

* [Not only does it support real-time analysis, but it also contributes to entirely new narratives](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/)&#x20;
* [Monitor the movement of illegal goods](https://elearning.aljazeera.net/en/journalism-magazine/osint-tracking-ships-planes-and-weapons) (see also [here](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking))&#x20;
* [Probe/scrutinize transit/travel patterns](https://www.theguardian.com/world/2022/aug/03/flight-trackers-flightradar24-ads-b-exchange)&#x20;
* FlightAware can also be used for geolocation and verification (see example below)

### Key Features

#### Search tab

Depending on what information a researcher already has, he/she can go to the main search tab. One can enter **a flight number, tail number, airport, city**&#x20;

#### Live Map

In the tool’s landing page, below the search bar, users can see a live tracking map. [It claims to show real-time traffic worldwide](https://www.flightaware.com/). Refer to the table below to see how users can get information on the live map:

_**Search by aircraft: Hover or click on any aircraft**_

**Hovering will give a quick overview of**&#x20;

* aircraft call sign
* its altitude
* Its route using airport codes (i.e. MNL - AUH - meaning from Manila International Airport to Abu Dhabi International Airport)
* estimated landing time&#x20;
* speed&#x20;

<figure><img src=".gitbook/assets/Live MaP (1).png" alt=""><figcaption><p>This is a view of the live map of FlightAware, found on the landing page of the tool. Search an area or region of interest and hover over aircraft to find details. In this case, we are looking at a United Airlines flight 195, Call sign UAL:195, on a Boeing 772, flying at around 38000 ft, at the speed of 519 mph. The aircraft came from Munich International Airport and arrived at San Francisco International Airport. Clicking on this aircraft, by contrast, will provide more details on a separate page.</p></figcaption></figure>

**Clicking on an aircraft :** This will take you to a dedicated page for that flight with all the necessary flight information and aircraft information (as described below)

**Clicking on an airport (represented by dots and a three-letter airport code):** This will take the user to the airport page. T[he users can find incoming and outgoing flights to and from the airport:](https://www.flightaware.com/about/faq/#vicinityAirport)

* GREEN - outgoing commercial flights
* BLUE - incoming commercial flights&#x20;
* WHITE - flights passing through the airspace with different airport destinations and different airports of departure

In addition, users can flip through the different tabs for weather information, maps and diagrams.



**Filter Live Map Flights:** On the live map, users can also filter all worldwide flights according to _**Altitude, Speed, Flight Type, and Aircraft Type**_ by clicking on the icon to the right, underneath the layers map. \


<figure><img src=".gitbook/assets/ScreenRecording2024-08-26145034-ezgif.com-speed.gif" alt=""><figcaption><p>This shows how to get to the airport page from the live map. Click on an airport code. In this case, we chose MNL (Manila International Airport). We can also flip through the tabs for more information about this airport.</p></figcaption></figure>

#### &#x20;Viewing Results

FlightAware will display a list of matching flight/s. The information available is grouped into two main sections: Flight information and Aircraft Information. In addition, a live map with the flight in question is available at the lower left of the webpage.&#x20;

<figure><img src=".gitbook/assets/Results FlightAware.png" alt=""><figcaption><p>Here is a sample flight on our search results. Clicking on this particular flight will give users as much information as possible. If any detail is missing, it will indicate whether users must subscribe to get that info.  </p></figcaption></figure>

\


| Flight Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Aircraft Details                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>Call sign/Flight number</li><li>Airline</li><li>Creating flight alerts - <strong>which is helpful for OSINV monitoring</strong></li><li>Departure and arrival airports</li><li>Scheduled departure and arrival times</li><li>Flight status (delayed, on time, canceled)</li></ul><p>On the live map to the left, users can follow the flight route. A <strong>solid line</strong> refers to the plane's real-time path, and a <strong>dashed line</strong> indicates the planned route. I<strong>f users see both,</strong> this means the aircraft deviated from its planned route for many reasons, such as weather, shortcuts, traffic, and other factors.  </p><p><br><br></p> | <ul><li>Aircraft type</li><li>Registration and Tail Number (if using a paid subscription and if available)</li><li>Speed</li><li>Altitude</li><li>Distance </li><li>And photos of the aircraft type </li></ul><p>(NOTE: The aircraft photos displayed may not be specific to the exact flight you're viewing. For instance, if you're looking at a Boeing 737-800 flight, you might see photos of other Boeing 737-800 aircraft from different airlines.) </p><p><br></p> |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

\[\[Information on the requirement for using a tool, for instance, API key, e-mail address etc.]]

## Limitations

\[\[The limitations of each tool should be described. This is important for researchers if they want to decide whether they should invest the time to learn how to use a new tool.]]

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guides and articles

\[\[Link to guides on this tool and to articles on research that was done with the help of this tool]]

## Tool provider

\[\[Name the tool provider (and potentially info on them)]]

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |

[^1]: "scheduled, passenger-carrying airline flights." (According to FlightAware's landing page, under "Current Traffic" pie&#x20;

    graph)

[^2]: "private, corporate travel, including all turbine aircraft." (According to FlightAware's landing page, under "Current Traffic" pie

    graph)



    \


[^3]: "flights dedicated to transporting cargo rather than passengers" (According to FlightAware's landing page, under "Current Traffic" pie graph)

[^4]: "flights include private, hobbyist-type flights, excluding all turbine aircraft” (According to FlightAware's landing page, under "Current Traffic" pie graph)
