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

### SEARCH TAB

Depending on what information a researcher already has, he/she can go to the main search tab. One can enter **a flight number, tail number, airport, city**&#x20;

### LIVE MAP

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

### &#x20;VIEWING RESULTS

FlightAware will display a list of matching flight/s. The information available is grouped into two main sections: Flight information and Aircraft Information. In addition, a live map with the flight in question is available at the lower left of the webpage.&#x20;

<figure><img src=".gitbook/assets/Results FlightAware.png" alt=""><figcaption><p>Here is a sample flight on our search results. Clicking on this particular flight will give users as much information as possible. If any detail is missing, it will indicate whether users must subscribe to get that info.  </p></figcaption></figure>

\


| Flight Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Aircraft Details                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>Call sign/Flight number</li><li>Airline</li><li>Creating flight alerts - <strong>which is helpful for OSINV monitoring</strong></li><li>Departure and arrival airports</li><li>Scheduled departure and arrival times</li><li>Flight status (delayed, on time, canceled)</li></ul><p>On the live map to the left, users can follow the flight route. A <strong>solid line</strong> refers to the plane's real-time path, and a <strong>dashed line</strong> indicates the planned route. I<strong>f users see both,</strong> this means the aircraft deviated from its planned route for many reasons, such as weather, shortcuts, traffic, and other factors.  </p><p><br><br></p> | <ul><li>Aircraft type</li><li>Registration and Tail Number (if using a paid subscription and if available)</li><li>Speed</li><li>Altitude</li><li>Distance </li><li>And photos of the aircraft type </li></ul><p>(NOTE: The aircraft photos displayed may not be specific to the exact flight you're viewing. For instance, if you're looking at a Boeing 737-800 flight, you might see photos of other Boeing 737-800 aircraft from different airlines.) </p><p><br></p> |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### PHOTOS&#x20;

FlightAware also has a photo gallery available based on aircraft type.  There are two ways to search for photos.&#x20;

**Community Page**&#x20;

First, click on the URL, hover over the “Community” link on the top right, and then click on the Photos section. Browse through the gallery or filter according to Aircraft, Airport, Airline, and Date. More importantly, if you have a tail number or registration number available, you can input this on the Search bar at the bottom right to see if there is a match.&#x20;

**Aircraft Details Page**

When clicking on a particular flight, the full detailed page will load (See image under “Viewing Results” section above) and navigate to the bottom right of the page.&#x20;

### **KML FILE OF FLIGHT LOG  FOR CERTAIN GEOLOCATION TASKS**

Lastly, for flights that have already landed or are completed, FlightAware allows users to download a KML file of the flight log. This will contain all the coordinates of its flight path, the altitude, and other information that helps users visualize. To do this, click on the flight page of a flight in question, click on “View track log”. Then navigate to the upper left corner of the page and click “+ Google Earth” icon, as shown below.&#x20;

{% hint style="warning" %}
NOTE: Remember that historical information is limited for the free account, so flight log information may not always be available.
{% endhint %}



<figure><img src=".gitbook/assets/Screenshot 2024-08-27 112020-marked merge2.png" alt=""><figcaption><p>Downloading a KML of the flight log requires two steps. First, click "View Track Log" under Flight Details as shown in the top window. This will then load another window (bottom of the image), and users can click on the Google Earth icon on the top left.   </p></figcaption></figure>

This can be helpful for specific geolocation tasks, especially for images with contrails or airplanes in the background. If there is flight information in a geolocation task, KML files overlaid on Google Earth Pro can help plot the course location and narrow down the search area based on the flight path.

Here is an example of [geolocation by Nixinte](https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/)l using a flight log KML file overlaid over Google Earth Pro, in addition to using the[ Suncalc tool](https://bellingcat.gitbook.io/toolkit/more/all-tools/suncalc). &#x20;



<figure><img src=".gitbook/assets/Screenshot 2024-08-27 173912.png" alt=""><figcaption><p>(Source: Nixintel, Steven Harris, <a href="https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/">https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/</a>) This is an example of a flight KML file used as a layer on Google Earth Pro. On the left is the source image for geolocation, while on the right is a screenshot of the Google Earth Pro in 3D Street View, with the flight path visible in the sky. The author uses the diagonal trajectory of the flight path on the right to match the trajectory of the aircraft contrail (diagonal line in the sky) on the left photo. The KML file assisted in narrowing down whether the location of the source image is north or south of the flight path.</p></figcaption></figure>

### Use case

First, flight-tracking websites like FlightAware not only assist in geolocation but also help create flight databases for countries with issues that require continues monitoring. For instance, Bellingcat has created an Open Source Flight Database for [Kazakhstan](https://www.bellingcat.com/resources/2022/01/08/launching-an-open-source-flight-database-for-kazakhstan-in-wake-of-protests/) and [Venezuela](https://www.bellingcat.com/resources/case-studies/2021/03/11/launching-an-open-source-aircraft-database-for-venezuela/).&#x20;

Second, Investigators, [such as those at OCCRP,](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) for example, who monitor aircraft, focus on two key tasks:

1. Determining which planes are owned or regularly utilized by individuals of interest
2. Following their flight histories or pinpointing their current whereabouts

However, [figuring out who really owns a plane is often the more challenging part because people often hide ownership through shell companies and other methods to keep it secret.](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) But because flight tracking is mostly publicly available, [#2 can be a useful method for filling the information gap: ](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking)

<figure><img src=".gitbook/assets/IMG_0350.PNG" alt="" width="375"><figcaption><p>According to OCCRP, flight tracking can be used to match other leads about a person's movements (obtained either from social media or other sources) with flight-tracking patterns to help researchers connect the dots. This image shows sample steps a researcher can take to match flight data to the movements of persons of interest. </p></figcaption></figure>

### Identifiers and Where to Find Them on FlightAware

When doing flight tracking for investigations, it is essential to know what data to look for and which information can potentially provide leads in an investigation. However, note that not all information may be immediately available on one flight tracking website.&#x20;

\


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
