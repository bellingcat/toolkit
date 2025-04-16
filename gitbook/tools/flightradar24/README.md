---
description: >-
  Flightradar24 is a real-time flight tracking service that provides detailed
  information about aircraft positions, flight numbers, origins, destinations,
  historical data, and aircraft information.
---

# Flightradar24

## URL

[https://www.flightradar24.com](https://www.flightradar24.com)

## Description

Flightradar24 is a real-time global flight tracking service. It provides detailed information about aircraft position, flight number, and oftentimes flight origin and destination. It also includes details on the type of aircraft. It provides both real-time flight tracking and historical flight information.

Flightradar24 data can be used for open-source investigations, including but not limited to:

* support real-time news analysis, such as in the case of [Yevgeny Prigozhin’s plane crash](https://www.flightradar24.com/blog/russian-legacy-600-crashes-near-tver/);
* monitor the movement of [private jets ](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking)as potential illicit assets;
* probe/scrutinize transit/travel patterns of [high-profile individuals](https://www.theguardian.com/world/2022/aug/03/flight-trackers-flightradar24-ads-b-exchange) (see examples [here](https://www.occrp.org/en/investigation/the-chefs-global-footprints), and [here](https://www.nytimes.com/interactive/2022/06/17/world/europe/russia-private-jets.html?auth=login-google1tap\&login=google1tap));
* Flightradar24 can also be used for geolocation and verification (an example will be provided below).

{% hint style="info" %}
TIP: Finding plane information requires a multi-source approach. Check more than one flight-tracking website when doing research “since one might have more information than the others,” according to[ this Bellingcat guide](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/) to flight tracking. [OCCRP](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) recommends starting your investigation with an initial data gathering or a Google search to see everything you can find about a plane of interest (see paragraph 6 under “[How do I find out who owns a plane and where it’s going?](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking#how-do-i-find-out-who-owns-a-plane-or-where-its-going)").
{% endhint %}

Flightradar24‘s flight information comes from several data sources. One category of data called “positional data” triangulates the aircraft's position in the sky. This includes sources[ such as ADS-B, MLAT, satellite, and radar data.](https://www.flightradar24.com/how-it-works) In addition to positional data, Flightradar24 also uses flight status and flight schedule data from [airports and airlines](https://www.flightradar24.com/how-it-works). The platform uses data through the[ Open Glider Network (OGN)](https://www.flightradar24.com/how-it-works#flarm) for drones, gliders, and small aircraft.

On the filter section of the website, the tool can filter for approximately 12 aircraft categories. They are: Passenger, Cargo, Military and government, Business jets, General aviation, Helicopter, lighter-than-air, Gliders, Drones, Ground vehicles, "Other", and Non-categorized.

<figure><img src=".gitbook/assets/ScreenRecording2024-11-22180945-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>IMAGE 1: This clip shows how users can filter for aircraft on the tool. Access the filter at the bottom of the live map. If unsure, each category has helpful descriptions when hovering over the question mark icon to the right. Users can combine different filters by enabling some categories and disabling others — allowing for more granularity in search results.</p></figcaption></figure>

## But First, Identifiers and Where to Find Them

When doing flight tracking for investigations, it is essential to know what data to look for and which information can potentially provide leads. In flight-tracking, researchers usually pay attention to “Identifiers.”&#x20;

Flight-tracking websites have a plethora of information available. However, depending on the research question, researchers generally pay attention to call signs, registration, serial numbers, and hex codes.

{% hint style="info" %}
TIP: Note that not all identifiers may be immediately available on one flight tracking website. Cross-check with other platforms.
{% endhint %}

### CALL SIGN

<details>

<summary><strong>CALL SIGN: What is it and why is it important? </strong><mark style="color:green;"><strong>(CLICK TO EXPAND)</strong></mark></summary>

**What is it?**[ Call signs are used to identify specific flights/flight routes and for communication and identification in air traffic control.](https://skybrary.aero/articles/aircraft-call-sign) They are unique identifiers of an aircraft. They help differentiate each aircraft in the sky from one another. According to this Bellingcat[ guide](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/), private aircraft often use their registration number as their call sign. In contrast, commercial flights usually have call signs based on their specific routes.

According to this GIJN[ guide](https://gijn.org/resource/planespotting-an-updated-guide-to-tracking-aircraft-around-the-world/), “The call sign is more or less whatever the pilot decided to enter for that flight.” Commercial flights, on the other hand, will be the flight number or close to it, like DAL307 for Delta Airlines flight 307 from Honolulu to Minneapolis.

Call signs also often vary with each flight, and occasionally, they may change even while in the air. For instance, an aircraft might have different call signs throughout the day if it completes several trips,[ Bellingcat explains](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/).[ Keep in mind that an aircraft can also have the exact same call sign in the span of a few days.](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking)&#x20;

**Why is it important?** Call signs can be helpful when monitoring routes and flight paths and identifying potential deviations or anomalies. It can tell you what the flight path of an aircraft is, its origin, its intended destination, and where it passes by. It is also helpful for flagging private aircraft that use their registration as call signs.



</details>

**Where can I find the call sign on Flightradar24?**

_**For live flights:**_

Depending on your settings, call signs can be seen when you hover your cursor over a plane of interest in the live map. The combination of numbers and letters that appear is usually the call sign. Users can find additional details when clicking on the aircraft.

<figure><img src=".gitbook/assets/Flightradar viz4.png" alt=""><figcaption><p>IMAGE 2: This box on the left shows all the identifiers on an aircraft of interest flying in real-time on Flightradar's live map, if available. The call sign is visible in yellow font on the top of the image. The other identifiers that are labeled are aircraft type, serial number, flight route, ICAO code, and more.</p></figcaption></figure>

_**For completed/historical flights:**_

1. Determine the aircraft by either flight number, flight route, or other identifiers, if known.
2. Go to the search bar and enter the search term. This will lead users to a list of past and future-scheduled flights.
3. Select the date and time of interest, and click on the icon “PLAY” on the far right. This will take you to the details and stats associated with that particular flight.
4. Scroll down until you see the following image below.

<figure><img src=".gitbook/assets/Flightradar historical flight (1).png" alt=""><figcaption><p>IMAGE 3: This image guides users on where to find identifiers for flights already completed. Follow the four steps shown above to see the call sign.</p></figcaption></figure>

### REGISTRATION NUMBER / TAIL NUMBER

<details>

<summary>REGISTRATION NUMBER/TAIL NUMBER/N-NUMBER: What is it? Why is it important? <mark style="color:green;">(CLICK TO EXPAND)</mark></summary>

**What is it?** This number appears on the aircraft's exterior, mostly near[ the tail (para 6 of this guide).](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/) This is sometimes called a[ “Tail Number” or, in the United States, an “N-Number”.](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/) It is a unique number that tells you which country the aircraft[ was registered](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking). This[ guide](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/) specifies that an aircraft's registration is similar to a car's license plate, assigned when registered in a specific country. This registration reflects the jurisdiction of the aircraft according to this[ list](https://en.wikipedia.org/wiki/List_of_aircraft_registration_prefixes).

**Why is it important?** If available, registration information can help find clues about ownership of the aircraft or, at the very least, which country it is registered. However, there are a few caveats:

1:[ The registered owner is rarely the actual UBO](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) (Ultimate Beneficial Owner - the person who profits or benefits from a corporate entity). It is rarely an individual but a company, trust, or charter/leasing company. In these cases, use additional sources to link different pieces of information.

2: Aircraft registration can change,[ especially when sold to a new owner.](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/)

</details>

**Where can I find the registration number on Flightradar24?**

_**For live flights**_

Just like call signs, registration information is available by clicking on an aircraft of interest on the live map. This will provide a detailed window to the left, showing additional information. The registration number can be found just below the aircraft type.

_**For historical flights**_

Follow the same steps shown above for searching call signs for historical flights. Begin with entering the flight in question on the search bar. The registration is located on the far right, just below the aircraft type and the aircraft photo.&#x20;

### HEX CODE/ ICAO CODE

<details>

<summary>HEX CODE/24-BIT CODE ADDRESS/MODE-S NUMBER: What is it? Why is it important? <mark style="color:green;">(CLICK TO EXPAND)</mark></summary>

**What is it?** [A hex code is a unique ICAO (International Civil Aviation Organization) six-digit hexadecimal number assigned to an aircraft's transponder. ](https://skybrary.aero/articles/24-bit-aircraft-address)This code serves as a digital identifier or a unique “digital fingerprint”, allowing air traffic control, anti-collision systems, and flight tracking systems to distinguish one aircraft from another[ (See p.3-4 of this document)](https://elearning.aljazeera.net/en/journalism-magazine/osint-tracking-ships-planes-and-weapons). When the plane is registered, it gets a unique electronic code[ called a hex code](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking). This hex code is associated with the plane’s ADS-B (Automatic Dependent Surveillance-Broadcast)[ transponder](https://www.flightradar24.com/blog/videos/how-does-ads-b-work/), which broadcasts unencrypted data about the plane’s position, altitude, and speed. If the N-number is the physical identifier, like a car license plate, the hex code is its digital non-physical identifier.&#x20;

According to [this](https://www.icao.int/WACAF/Documents/Meetings/2023/Workshop-24-Bits/Guidelines%20for%20ICAO%2024%20Bits%20Adresses%20Assignment.pdf) document, ICAO assigns each country a block range of hex codes. [For example, Malaysia is assigned the range 750000 to 750FFF, and the US is assigned the range 00000 to AFFFFF. ](https://theaviationist.com/2020/09/29/yes-u-s-rc-135s-have-used-bogus-hex-codes-to-transmit-a-false-identity-but-its-not-to-fool-china-or-other-enemies/)So in theory, if the flight tracking website sees a hex code in this range, it will identify the aircraft as coming from that country, and, as in the case of FlightAware, display[ the flag from that country](https://blog.flightaware.com/201707-icao-and-idents-and-squawks-oh-my). &#x20;

**Why is it important?**&#x20;

**Connection to Country of Registration:** Hex codes can sometimes be necessary to find leads about which country a plane is registered in. [Hex codes are closely associated with a plane’s registratio](https://gijn.org/stories/icarus-flights-the-powerful-new-flight-tracking-tool/)n. Therefore, it may sometimes be possible to determine ownership if that information is available.&#x20;

**Vulnerability to Manipulation:** According to[ OCCRP's FAQ](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking), “most flight tracking websites link the transponder codes to registration numbers to make sense of tracking data,” especially since aircraft do not usually broadcast registration numbers over their ADS-B transponder. [However, onboard transponders can be reprogrammed according to this article.](https://theaviationist.com/2020/09/29/yes-u-s-rc-135s-have-used-bogus-hex-codes-to-transmit-a-false-identity-but-its-not-to-fool-china-or-other-enemies/) A junk hex code can then broadcast unreliable and misleading data to flight tracking sites.&#x20;

**Some Military Logistics Aircraft With No Tail Numbers:** In some cases, military aircraft such as the [US Air Mobility Command removed tail numbers for OPSEC.](https://theaviationist.com/2023/03/04/u-s-air-mobility-command-removes-tail-numbers-and-unit-markings-from-aircraft-for-opsec/) The hex code can come in handy when analyzing movements from this type of aircraft. &#x20;

\


</details>

**Where can I find the hex code on Flightradar24?**

On Flightradar24, the hex code is referred to as either “ICAO 24-Bit Address” or “”Mode-S”. And you can find it in several places depending on where you are accessing the aircraft information on the website.

_**For live flights**_

Users can search the live map for the aircraft of interest. Hover and click over that aircraft, and an information box will appear on the left. Scroll further down to and find “ICAO 24-Bit Address”.

<div align="center"><figure><img src=".gitbook/assets/Screenshot 2024-11-30 111546-ed.png" alt="" width="563"><figcaption><p>Searching for a hex code on a live flight can be done by clicking on an aircraft on the Live Map. Navigate on the information box to the left and scroll down to the ICAO 24-BIT Address. This is the hex code for a Southwest flight with call sign SWA509.</p></figcaption></figure></div>

_**For historical flights**_

1. If available, use the registration number to search for the flight of interest in the search bar. This will lead users to a list of past and future-scheduled flights.
2. Click the choice under “aircraft”. This will take you to a separate page containing the flight history of the aircraft of interest.
3. Look for the word “Mode-S” to get the hex code (Refer to the image below)

<figure><img src=".gitbook/assets/hex code historical.png" alt=""><figcaption><p>This is a sample passenger aircraft. For demonstration purposes, we look at the 2 step process of finding the hex code. In the left image, users can search for the aircraft using the registration number (if known). Click on the search result under "Aircraft". This will take users to an information page containing additional details. The hex code is labeled as "Mode-S" on the upper right as highlighted in green.</p></figcaption></figure>

### SERIAL NUMBER/ MSN

<details>

<summary>SERIAL NUMBER/ MANUFACTURER SERIAL NUMBER (MSN): What is it? Why is it important? <mark style="color:green;">(CLICK TO EXPAND)</mark></summary>

**What is it?** A serial number is a unique code given to an aircraft by the manufacturer to identify it from other planes. It's like a fingerprint for that specific aircraft designated at the time of manufacture or[ similar to a car’s VIN (vehicle Identification Number).](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/) Serial numbers never change, unlike call signs and registration numbers. It is mandated by law (see[ here](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-45), section 14.13) to collectively ensure that aircraft can be monitored, maintained, and operated safely throughout their service life.

**Why is it important?**[ OCCRP](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) states that “If you’re trying to track a plane over multiple years and ownership changes, you’ll need to know the manufacturer’s serial number.” Because an aircraft’s serial numbers don’t change, you can follow its journey. This makes it helpful in tracking a plane over time between[ owners, registrations, and nations](https://elearning.aljazeera.net/en/journalism-magazine/osint-tracking-ships-planes-and-weapons).

</details>

**Where can I find the MSN/Serial Number on Flightradar24?**

_**For live flights**_

Just like call signs, registration information is available by clicking on an aircraft of interest on the live map. This will provide a detailed window to the left, showing additional information. Scroll further; the serial number is below the registration information (see IMAGE 2 above).

_**For historical flights**_

Follow the same steps as shown above for searching for call signs for historical flights. Begin with entering the flight in question in the search bar. The serial number is located on the gray box, far right, just below the registration information (see IMAGE 3 above).

### Key Features

#### Live Map and Immediately Accessible Flight Filters

Flightradar24’s landing page prominently features its Live Map, providing users with immediate access to the real-time aircraft status in the air. The flight filter settings are accessible from the main page, allowing users to customize their view and quickly find relevant information.

The Live Map on Flightradar24 is also customizable, allowing users to add widgets for quick access to important information. These widgets can display data such as weather conditions, statistics (e.g., the number of data sources feeding flight information), and the most tracked live flights. Additionally, users can create personalized widgets to bookmark and monitor specific aircraft, flights, airports, or locations of interest. Open source investigators can use those features to track relevant flight data, monitor specific patterns, and quickly access real-time information critical for their analysis.

Map Layers and Aeronautical Charts

Users can customize the map layers on Flightradar24's Live Map, allowing for the overlay of various data sets.

#### Advanced Search

The search bar is immediately accessible on the tool's landing page. Flightradar24’s search function has features designed to help users quickly find information on a platform that contains a lot of information. Note that search results usually show both live flights and flights that are completed or recently scheduled. Here is an overview of the search feature, which includes input and output (this list is not exhaustive).

{% hint style="warning" %}
NOTE: Based on our own tests, the search bar takes most of the input explained below, except for Serial Number.
{% endhint %}

{% tabs %}
{% tab title="FLIGHT BY ROUTE" %}
**INPUT:**

The search is designed to run several keyword variations. Users can enter the ICAO Airport Code and the IATA Airport Code. Users can enter two airport codes separated by a dash.

**Example:** “AMS - LHR” to refer to the flight route from Amsterdam Schipol to Heathrow Airport.

**OUTPUT:**

This search will show all the live flights as well as recent and scheduled flights.

**INPUT:**

If the airport code is unknown, simply type the location or the airport name.

**Example:** “London”

**OUTPUT:**

Putting a location or airport name will provide a list of possible airport locations.
{% endtab %}

{% tab title="FLIGHT BY AIRLINE" %}
This is a straightforward search in which the users can type the airplane.

**INPUT:** Type the name of the airline.

**Example:** Iberia

**OUTPUT:** This will provide a list of airlines that match your query. However, users need to click the arrow down to expand the search. This will provide several options including all the live flights by the airline of interest.
{% endtab %}

{% tab title="AIRPORTS BY COUNTRY" %}
Click on this option to search for airports by country

**INPUT:** Choose the country of interest from the list automatically provided by the search feature.

**Example:** Afghanistan

**OUTPUT:** This will show a list of 11 airports in Afghanistan.

**Example:** Kabul International Airport, Kandahar Airport, Herat International Airport etc.

TIP: Click on the “down” arrow on each search result to expand more menu options. The expanded search has the option to show users the airport on the live map and a list of flights arriving, departing and on the ground, and many more.
{% endtab %}

{% tab title="NEARBY" %}
This feature is for showing flights near the user’s location. The user must enable its location and give the tool permission to access its location.
{% endtab %}
{% endtabs %}

For a more detailed guide to its search features, refer to: [https://www.flightradar24.com/blog/new-flightradar24-search/](https://www.flightradar24.com/blog/new-flightradar24-search/)

#### Custom Filters

In addition to filtering by aircraft category, users can create their own custom filters tailored to their research purpose. [Flightradar24 improved its filtering system by enabling additional parameters.](https://support.fr24.com/support/solutions/articles/3000120424-how-to-use-filters-on-the-flightradar24-website-)

OPEN each tab to get more detailed information on how to create custom filters.

{% tabs %}
{% tab title="FILTER BY AIRCRAFT" %}
Flightradar24 has enhanced its aircraft filtering capabilities. You can now precisely filter flights by their exact ICAO code.

**For example:** Searching for "A320" will only display Airbus A320 models.

To view a family of aircraft, use a wildcard symbol.

**For example:** "B737\*" will show all Boeing 737 variants. Additionally, you can filter for multiple aircraft types by separating them with commas.

This refined filtering system allows for more accurate and tailored flight tracking.
{% endtab %}

{% tab title="FILTER BY AIRPORT" %}
Users can input the airport code or airport name.

In addition, users can now search for flights to or from entire countries on Flightradar24. Just type in the country name, like "Venezuela" or "Colombia," to see all flights to or from that country. Users can further filter by inbound, outbound flights, or both.
{% endtab %}

{% tab title="FILTER BY ROUTE" %}
This powerful feature can isolate flights between two airports or between two countries. Or between three countries and four airports. Users can see the flow of traffic in one direction and can easily flip the direction if needed.

**Examples:**

1. From: United Kingdom To: United States
2. From: United Kingdom To: JFK, EWR

<figure><img src=".gitbook/assets/Screenshot 2024-11-28 130822-ed.png" alt=""><figcaption><p>Clicking the arrows will reverse the direction of the air traffic of your search results</p></figcaption></figure>

**Examples:**

1. From: United States To: United Kingdom
2. From: JFK, EWR To: United Kingdom
{% endtab %}
{% endtabs %}

#### Jetphotos Database

Another helpful feature in this tool is its photo database through [Jetphotos.](https://www.jetphotos.com/) When viewing an aircraft's details on Flightradar24, users often see photos sourced from Jetphotos. Jetphotos links back to Flightradar24 for detailed tracking data about photographed aircraft.

This integration provides a visual representation of the tracked aircraft, enhancing the user experience. More importantly, the photos shown are those of the actual plane being tracked live in the sky and not a similar aircraft type, like on [FlightAware](https://bellingcat.gitbook.io/toolkit/more/all-tools/flightaware). This is especially helpful if researchers are interested in making a visual match to the information they have.

**Example:** If a user is tracking an aircraft with registration/tail number OO-TMS, users can find that exact photo on Jetphotos' database by using the registration number/tail number as the search term.

Jetphotos and Flightradar24 are distinct platforms with complementary purposes, but they share a close relationship due to their focus on aviation and[ mutual ownership](https://www.jetphotos.com/about.php).

#### Playback

Flightradar24's playback feature is like a time machine for aviation. Flightradar24's playback feature allows users to rewind time and analyze historical flight data. This tool can be invaluable for investigative purposes, as it enables researchers to:

(a) Investigate Past Events: Examine air traffic patterns during specific incidents or events.\
(b) Verify/Cross-Check Claims: Cross-reference historical flight data with other information to confirm or refute claims. (c) Seeing Trends: Study trends by analyzing past flight patterns.

The playback feature is available on the live map (landing page) and users can see the replay of many flights simultaneously. It is also available for individual flights.

Historical data available for playback are as follows: [7 days with the basic/free plan;](https://www.flightradar24.com/premium/?change=true) [90 days with the Silver plan, 365 days with the Gold plan, 3 years with the Business plan](https://www.flightradar24.com/premium/?change=true); includes playback feature for historical analysis.



<figure><img src=".gitbook/assets/ScreenRecording2024-11-28194301-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>Users can access the playback on the live map by clicking “playback” on the menu located in the the bottom center of the live map.</p></figcaption></figure>

{% hint style="success" %}
TIP: Add a filter or your own custom filter and use the playback feature for a more granular search. For example: Use the business jet category filter and hit the playback button to see a replay of all business jets travelling in specific area during a specific time frame
{% endhint %}

For individual flights, the playback feature is accessible by first searching the flight of interest. And then scrolling through the past scheduled flights. Select the time and date of interest and click on “Play” (the farthest icon to the right).

#### KML and CSV File of Flight Log

For flights that have already landed, Flightradar24 allows users to download a KML file of the flight log. This will contain all the coordinates of its flight path, the altitude, and other information that helps users visualize flight information. Based on our test, this raw data can then be imported on [Google Earth](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-earth-pro), QGIS, or ArcGIS Earth.

In addition, users can also download a .CSV containing raw flight data for analysis.

1. To do this, enter the known flight info on the search bar and click on the flight number/call sign/route.
2. Scroll down and click on “Flight Info”
3. You will be taken to a different page containing the flight log. Scroll down to the list of recentlly scheduled flights, choose the date and time of interest.
4. Navigate to the right where you have the option to download the data in KML or CSV format or do a playback.

Using a KML file of a flight log overlaid over Google Earth Pro can sometimes help with geolocation tasks. See this [example](https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/) by Nixintel for a demonstration of this use case.

<figure><img src=".gitbook/assets/Screenshot 2024-11-27 061349-ed.png" alt=""><figcaption><p>Following the steps outlined above, the users will be taken to the flight log of the aircraft in question. Download the raw data on the area shown in purple.</p></figcaption></figure>

## Use cases

Flight tracking websites like Flightradar24 can be valuable resources for investigative journalism and open-source research:

1\. Database Creation:

* This data can be used to create open-source flight databases for countries requiring continuous monitoring.
* Example: Bellingcat's databases for [Kazakhstan](https://www.bellingcat.com/resources/2022/01/08/launching-an-open-source-flight-database-for-kazakhstan-in-wake-of-protests/) and [Venezuela](https://www.bellingcat.com/resources/case-studies/2021/03/11/launching-an-open-source-aircraft-database-for-venezuela/).

2\. Monitoring Authoritarian Regimes:

* Tools like [Dictator Alert](https://dictatoralert.org/) specialize in monitoring the flight paths of authoritarian regimes' aircraft.
* They can alert the public when these planes land in specific locations (e.g., Twitter/X alerts for major European cities).

3\. Investigating Aircraft Ownership and Movement:

* Investigators like those at [OCCRP use flight tracking for two key tasks](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking):
  * Identification: Determine which planes are owned or regularly used by individuals of interest.
  * Tracking: Follow flight histories or pinpoint the current whereabouts of these aircraft.

Challenges and Workarounds:

* Ownership Obfuscation: Figuring out real ownership can be [difficult due to shell companies and other secrecy methods](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking#what-is-plane-tracking).
* Flight tracking as a tool to generate leads: According to [OOCRP's FAQ](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking), while ownership is sometimes hidden, flight tracking data is largely publicly available, and monitoring aircraft movements can sometimes provide valuable clues to fill in the gaps of an investigation.

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

The tiered paid accounts are: Basic Free, Silver, Gold, Business, the price and feature differences are found here: [https://www.flightradar24.com/premium](https://www.flightradar24.com/premium)

The version tested for this toolkit description is the Gold Subscription.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

While the tool is straightforward to use, the difficulty rating is based on the additional time it may take for beginner users to familiarize themselves with aviation related terms and concepts. The platform also contains a plethora of data, and finding which information is important may require additional time.

## Requirements

1. Modern web browser
2. Registered account (e-mail address)

## Limitations

1. **Flightradar24 Mobile App and Precise Location Data Leak**

Investigations by [BR24, netzpolitik,org , and media partners](https://www.tagesschau.de/investigativ/br-recherche/standortdaten-apps-datenhandel-100.html) revealed that[ Flightradar24 is one of the 40,000 apps ](https://www.br.de/nachrichten/deutschland-welt/standortdaten-aus-zehntausenden-apps-bei-datenhaendler-gelandet,UZsKyDJ)that transmit their users' [precise location data](https://netzpolitik.org/2025/databroker-files-neuer-datensatz-enthuellt-40-000-apps-hinter-standort-tracking/) to data brokers. These precise coordinates may provide sensitive personal information on a user's home or work address[, thereby creating a user's "movement" profile or movement history that is sold online.  ](https://netzpolitik.org/2025/databroker-files-neuer-datensatz-enthuellt-40-000-apps-hinter-standort-tracking/)

{% hint style="warning" %}
Be aware of the risks of disclosing your location data using the app. Use precaution if possible.&#x20;
{% endhint %}

2. **Coverage: Not Everywhere, Every Time**

Flightradar24 is a great tool for tracking flights, but it's important to know it doesn't see everything, everywhere. Here's what can affect coverage:

* Aircraft Equipment: Not all planes have compatible transponders, the devices that talk to Flightradar24. So, [some planes simply won't show up](https://www.flightradar24.com/how-it-works#coverage).
* Altitude and Terrain: Planes flying high or in areas with lots of mountains [might be harder to pick up](https://www.flightradar24.com/how-it-works#coverage).
* Location: Flightradar24 [is working to improve coverage in some areas](https://support.fr24.com/support/solutions/articles/3000119387-planes-are-only-visible-after-departing-or-suddenly-disappear-when-landing), especially around major airports in Africa (Chad, Congo, Egypt, etc) or countries like China, Iran, Iraq, and Libya.

3. **Map Gaps**

Flightradar24's coverage is[ limited by several factors](https://www.flightradar24.com/blog/gaps-in-the-map-where-aircraft-arent-found-on-flightradar24/). Geopolitical tensions, like the Ukraine conflict, can lead to airspace closures, affecting flight routes. Geographical factors, such as high altitudes in Tibet, also restrict flight paths. Not all aircraft have the necessary equipment for tracking, and some regions have limited coverage. Additionally, airlines prioritize safety and efficiency, sometimes opting for longer routes to avoid risky areas.

4. **Blocking / “take down requests”**

Flightradar24 [honors take-down requests](https://www.flightradar24.com/how-it-works#blocking) from operators or owners. According to [their website](https://support.fr24.com/support/solutions/articles/3000117426-why-is-some-aircraft-information-limited-or-not-visible-): “Information about a small number of flights may be limited or blocked based on requests from owners or operators via third-party services…”. This also means that high-profile aircraft in the military and government categories will not be visible.

Based on our own tests, some of the instances where blocking might potentially happen are as follows. There are instances where:

1. Aircraft Identity is hidden: The specific aircraft model and registration number might be obscured, showing only the general aircraft type (e.g., Boeing 737).
2. Flight Path is partially hidden: The origin and registration number might be visible, but the destination or specific route may be blocked.
3. Sometimes, the platform puts N/A instead of providing information.



5. **Some Limitations on Filter Combinations:**

While combining filters may sometimes be helpful, there are some combinations that provide results that are confusing. It is important to note that combining these two filters has some limitations. Based on our tests, combining the filter “military and governments” plus a custom airport filter for “Venezuela” and “Colombia” gave mixed results. Instead of filtering for only military/government aircraft in those countries, the results included passenger flights, private/small aircraft, and possibly others.

To isolate a specific category of aircraft within a location of interest, it is recommended to zoom in instead on the area of interest, then apply a specific aircraft filter. We were able to tailor the search results by zooming in on Venezuela and Colombia and applying the “military and government” filter subsequently. The results seem to show only one category of aircraft within a specific geographic region.

6\. **Accuracy of estimates**

Flightradar24 can estimate the position of aircraft that are out of coverage for a limited time. This is done by using various parameters, but the accuracy can decrease for flights that fly over longer distances (the position can be shown [up to 200 km or 110 miles off](https://www.flightradar24.com/how-it-works#estimations)). The estimated positions are visually represented by a black trail on the map.

7\. **Incorrect flight route**

Flightradar24 uses flight schedules to determine the route an aircraft is taking. However, this can sometimes lead to inaccuracies. For example, if a[ flight is delayed or changes its route](https://support.fr24.com/support/solutions/articles/3000115504-why-is-the-route-information-incorrect-), the displayed path might not match the actual flight path. Additionally, errors in flight schedules or incorrect or old call signs can also cause route information to be incorrect. Other causes are: [Database errors](https://support.fr24.com/support/solutions/articles/3000115504-why-is-the-route-information-incorrect-) - which is when there is an error in one of the scheduling databases Flightradar24 depends on. In addition, significant flight delays can cause it to be matched with the wrong schedule.

## Ethical Considerations

**Privacy vs. Transparency:**

The ethical dilemma here revolves around the conflict between public transparency and individual privacy. Make careful determinations about how to publish research that involves tracking patterns of individuals. This[ case](https://amp.cnn.com/cnn/2024/02/06/tech/taylor-swift-private-jet-tracker/index.html), for example, highlights the tension between the right to information and the potential consequences of exposing individuals to danger. Ev

**Context matters:**

Consider the purpose behind using flight tracking data when publishing. Not all uses of aviation tracking serve the same ethical goals or carry the same implications. For instance, when flight tracking data is used to cover major events such as accidents or disasters, it provides factual context for the public's understanding of the event. Flight tracking data used in research regarding air traffic patterns, for example, or in monitoring environmental impact of the aviation industry, represents different ethical considerations than tracking specific individuals' movements. The ethical decision making around flight data publication and how to publish this data should take into consideration the intended audience,  potential harm, if any, and whether or not there are alternative data sources available for your investigation.&#x20;

**Respect Copyright:**

Flight tracking websites often have terms of service regarding data usage. Ensure you're using the information ethically and within the website's guidelines. Flightradar24's terms of service can be found [here](https://www.flightradar24.com/terms-and-conditions).

## Comparison with Other Flight Tracking Tools

Based on our tests, below is a comparison of some of the features of different flight tracking tools.&#x20;

| Feature                           | FlightAware                                                                                                                                                                                                                                                                                                                                                             | Flightradar24                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Sources                      | <p>• ADS-B receiver network (terrestrial) • Air traffic control systems in 45+ countries• Aireon global space-based ADS-B• Datalink (satellite/VHF)• Commercial data providers• Flight schedules from airlines• FAA data feeds (for US airspace)</p><p><a href="https://www.flightaware.com/about/datasources/">https://www.flightaware.com/about/datasources/</a> </p> | <p>• ADS-B receiver network (terrestrial)• MLAT (multilateration)• Satellite-based ADS-B• Radar data• North American/Australian radar data• Open Glider Network (OGN)• FLARM for gliders/small aircraft• Airline and airport schedules</p><p><a href="https://www.flightaware.com/about/datasources/">https://www.flightaware.com/about/datasources/</a></p><p><br></p> |
| Filtering by Aircraft Categories  | <p>Commercial, business, cargo, general aviation, MEDEVAC</p><p><br></p><p>(See list of flight types under <a href="https://www.flightaware.com/live/map">live map</a> and filtering options) </p>                                                                                                                                                                      | <p>More extensive: Passenger, cargo, military/government, business jets, general aviation, helicopter, lighter-than-air, gliders, drones, ground vehicles, other</p><p><br></p><p>(See list of flight types under <a href="https://www.flightradar24.com/51.50,-0.12/6">live map</a>, and click the filter icon) </p>                                                   |
| Filtering Capabilities            | Limited filtering options; difficult to focus on particular aircraft or routes                                                                                                                                                                                                                                                                                          | Advanced custom filters by aircraft type (ICAO code), airport, country, and route combinations                                                                                                                                                                                                                                                                          |
| Historical Data                   | [Basic: 3 months; Premium: 5 months; Enterprise: 8 months; Enterprise WX: 8 months](https://www.flightaware.com/commercial/premium/#subscriptions)                                                                                                                                                                                                                      | <p><a href="https://www.flightradar24.com/premium/?change=true">7 days for the Free plan</a>; <a href="https://www.flightradar24.com/premium/?change=true">90 days for Silver plan, 365 days for Gold plan, 3 years for Business plan</a>; includes playback feature for historical analysis</p><p><br></p>                                                             |
| Export Options                    | KML files for flight logs                                                                                                                                                                                                                                                                                                                                               | Both KML and CSV export options                                                                                                                                                                                                                                                                                                                                         |
| Aircraft Photos                   | Shows similar aircraft types (e.g., any Boeing 777)                                                                                                                                                                                                                                                                                                                     | Integrates with JetPhotos to show the exact aircraft being tracked                                                                                                                                                                                                                                                                                                      |
| Military Aircraft                 | Limited tracking capabilities for military/government aircraft                                                                                                                                                                                                                                                                                                          | Dedicated military and government category filter                                                                                                                                                                                                                                                                                                                       |
| Playback Feature                  | No playback option for reviewing past flight activity                                                                                                                                                                                                                                                                                                                   | Robust playback feature for historical analysis                                                                                                                                                                                                                                                                                                                         |
| Visualization                     | Can experience visual crowding; icons may not reflect actual aircraft types                                                                                                                                                                                                                                                                                             | More customizable visualization with widgets for weather, statistics, and personalized tracking                                                                                                                                                                                                                                                                         |
| Privacy/Blocked Data              | <p><a href="https://gijn.org/resource/planespotting-an-updated-guide-to-tracking-aircraft-around-the-world/">Complete removal of aircraft upon owner request</a></p><p><br><br></p>                                                                                                                                                                                     | Partial obscuring of flight information (may hide registration but show aircraft type, or show origin but block destination) or [complete removal upon request](https://support.fr24.com/support/solutions/articles/3000117426-why-is-some-aircraft-information-limited-or-not-visible-)                                                                                |
| Ownership Information             | Primarily displays US registration numbers                                                                                                                                                                                                                                                                                                                              | Broader international registration coverage                                                                                                                                                                                                                                                                                                                             |
| Map Customization                 | Limited customization options                                                                                                                                                                                                                                                                                                                                           | Highly customizable map layers and widgets                                                                                                                                                                                                                                                                                                                              |
| UI Learning Curve                 | Moderate (★★★)                                                                                                                                                                                                                                                                                                                                                          | Moderate (★★★)                                                                                                                                                                                                                                                                                                                                                          |
| Cost Structure                    | <p>Basic (Free), Premium, Enterprise, Enterprise WX</p><p><br></p><p>(https://www.flightaware.com/commercial/premium/#subscriptions )</p>                                                                                                                                                                                                                               | <p>Basic (Free), Silver, Gold, Business</p><p><br></p><p>(<a href="https://www.flightradar24.com/premium/?change=true">https://www.flightradar24.com/premium/?change=true</a>) </p>                                                                                                                                                                                     |

\


## Guide

Bellingcat Guide:

Fiorella, Giancarlo, (2019, October 15). [A beginner's guide to flight tracking](https://www.bellingcat.com/resources/how-tos/2019/10/15/a-beginners-guide-to-flight-tracking/), Bellingcat.

RC and Fiorella, Giancarlo (2021, March 11). [Flying High: The US Connection to Venezuela’s ‘Narco-Planes’](https://www.bellingcat.com/news/2021/03/11/flying-high-the-us-connection-to-venezuelas-narco-planes/), Bellingcat.

GIJN Guide:

Global Investigative Journalism Network. (n.d.). [Planespotting: An updated guide to tracking aircraft around the world](https://gijn.org/resource/planespotting-an-updated-guide-to-tracking-aircraft-around-the-world/).

Global Investigative Journalism Conference 2023, (2023, October 7). Video on [Plane and Ship Tracking](https://www.youtube.com/watch?v=zPU_FLVBi6E\&feature=youtu.be).

OCCRP Guide:

Organized Crime and Corruption Reporting Project (2022, May 21). ["FAQ: What Is Plane Tracking?"](https://www.occrp.org/en/project/russian-asset-tracker/faq-what-is-plane-tracking) Russian Asset Tracker.

IATA (International Air Transport Association) [website](https://www.iata.org/en/publications/directories/code-search/) which can help researchers decipher airline codes on particular call signs.

Nixintel (2019, October 30). [Using Flight Tracking for Geolocation](https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/). [https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/](https://nixintel.info/osint/using-flight-tracking-for-geolocation-quiztime-30th-october-2019/)

Benjamin Strick. [OSINT at Home #18](https://www.youtube.com/watch?v=8eJk0zij1iM) (Youtube video).

Benjamin Strick. Who Made The Man in The Desert? [https://x.com/BenDoBrown/status/1836392661365785018](https://x.com/BenDoBrown/status/1836392661365785018) or [https://t.co/UHPVTFQJsa](https://t.co/UHPVTFQJsa)

Al Jazeera Guide:[ OSINT: Tracking Ships, Planes and Weapons](https://elearning.aljazeera.net/en/journalism-magazine/osint-tracking-ships-planes-and-weapons).

Full list of country identifiers:[ https://en.wikipedia.org/wiki/List\_of\_aircraft\_registration\_prefixes](https://en.wikipedia.org/wiki/List_of_aircraft_registration_prefixes)

Some lists of public registries:[ AeroTransport,](https://aerotransport.org/)[ CH Aviation](https://www.ch-aviation.com/),[ Airframes](http://www.airframes.org/),[ RZJets](https://rzjets.net/aircraft/) and[ spotters](http://spotters.net.ua/),[ PlaneLogger](https://www.planelogger.com/), [LAAS Corporate Aircraft Register](https://www.laasdata.com/corpjet/corpjets-cayman-islands-icao-vp-c.php)

Photos:[ Planespotters.net](https://www.planespotters.net/),[ Jetphotos.com](https://www.jetphotos.com/)

Twitter hashtags:[ #aviation](https://twitter.com/hashtag/aviation?src=hashtag_click),[ #avgeek](https://twitter.com/hashtag/avgeek?src=hashtag_click),[ #planespotting](https://twitter.com/hashtag/planespotting?src=hashtag_click),[ #flight](https://twitter.com/hashtag/flight?src=hashtag_click), and[ #MilAvGeek](https://twitter.com/hashtag/MilAvGeek?src=hashtag_click).

This tool is often used with: [Google Earth Pro](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-earth-pro), [Suncalc](https://bellingcat.gitbook.io/toolkit/more/all-tools/suncalc), social media accounts of known flight enthusiasts and professionals. This tool is also used in conjunction with ADS-B Exchange, [FlightAware](https://bellingcat.gitbook.io/toolkit/more/all-tools/flightaware), Planes.live, JetPhotos, Airframes.

## Tool provider

Flightradar24 AB, Sweden

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
