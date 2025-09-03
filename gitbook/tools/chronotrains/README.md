---
description: >-
  Chronotrains is a free interactive map designed to explore the reach of
  Europe’s extensive rail network. Enter a starting point and travel time to see
  reachable destinations by train.
updated: '2025-09-02'
---

# Chronotrains

## URL

[https://www.chronotrains.com/en](https://www.chronotrains.com/en)

## Description

This tool helps users visualize train destinations within Europe. When users hover with the cursor over a city or a particular train station on the map, Chronotrains unveils a map where concentric zones radiate outward. This depicts all the destinations reachable by train within a chosen duration of up to eight hours.&#x20;

<figure><img src=".gitbook/assets/ChronotrainsPreviewEdit-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>Chronotrains can be used in two primary ways: (1) Users can hover their mouse over a particular location (or starting point) and the map will show all the possible destinations by train. (2) A second way is to click on a specific station and it will show all the results. In this second example, I clicked on the city of Bordeaux, and a range of colors appeared. These correspond to the different travel times, 1 hour (darkest red) up to 8 hours (lightest yellow). Users can also click on the left panel to select the different times they are interested in. As shown here, I selected 1 hour from Bordeaux, followed by 2 hours, etc. (<em>Image from Chronotrains.com</em>)</p></figcaption></figure>

**Using the Map:**

\- Click on any train station to set it as your starting point.

\- Select the amount of time you want to travel (e.g., minimum 1 hour, up to 8 hours maximum).

\- The map will update to show the areas you can reach within the selected time frame.&#x20;

* As of Dec 2024, the map may sometimes include not just information on the approximate travel time but also the trip's price.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-12-08 235600.png" alt=""><figcaption><p>If the data is available, the map will sometimes show not just the approximate travel time but also the price. Click to enlarge the the map of Krakow, Poland for a sample of this new map feature. </p></figcaption></figure>

**Exploring Options:**

\- Use the map to explore different travel possibilities. You can move around the map, click on different stations, and see how travel times change.

**Key Features:**

1. _Interactive Map_

**Why it matters:** This visualization helps users quickly understand the reach of train travel from different locations, which can be useful for trip planning and understanding regional connectivity.

2. _Travel Time Visualization_

**Why it matters:** This feature allows users to easily compare travel times between different locations, helping them make informed decisions.

3. _Data integration_

How it works: According to the tool’s [website](https://www.chronotrains.com/en/8), this map integrates data from [Deutsche Bahn](https://www.bahn.de/) through [Direkt Bahn Guru](https://direkt.bahn.guru/).

<figure><img src=".gitbook/assets/Chronotrains- SuggestionSample.png" alt=""><figcaption><p>In addition to the interactive map, to the left (or sometimes the bottom, depending on your screen display) you will see further location suggestions. Once you have clicked on your station or city of interest, this feature will appear in addition to the color-coded isochrones on the map.</p></figcaption></figure>

### Possible use cases

While originally used to plan trips, Chronotrains can be repurposed for open-source investigations.

This can aid open-source investigations with a time-sensitive location element.

It can be used to:

* Potentially verify travel claims: By entering a location and timeframe, investigators can determine if a reported train travel aligns with what is realistically possible.
* Potentially track movement patterns: Analyze potential routes and locations reachable by train within a specific timeframe, helping identify areas a person of interest might have visited.

### How does it work?

The platform’s [GitHub page](https://github.com/benjamintd/chronotrains) explains the tools' inner workings.

**What the Map Shows:**

Isochrones: Imagine you start at a specific train station. An isochrone map shows you how far you can travel from that station within a certain amount of time and in multiple directions. For example, it can show all the places you can reach in 1 hour, 2 hours, and so on, heading North, South, East, or West.&#x20;

**How It Works:**

_1. Building a Graph:_

Think of a graph like a map, but instead of just showing locations, it also shows their connections. In this case, the "nodes" (points) on the graph are train stations. The "edges" (lines connecting the nodes) represent the journey times between these stations.

_2. Exploring the Graph:_

For each station, the system checks which other stations you can get to in a certain amount of time. For example, it might check which stations you can reach from Station A within 1 hour, 2 hours, and so on.

**Data Source:**

**Deutsche Bahn (DB) Data:** The information about train times and stations comes from Deutsche Bahn. Deutsche Bahn cooperates routes with different countries' rail systems ([https://io.deutschebahn.com/en/services/passenger-rail/](https://io.deutschebahn.com/en/services/passenger-rail/)) and therefore has data on train schedules for [international destinations](https://ibir.deutschebahn.com/2023/fileadmin/downloads/db_ib23_e_web_01.pdf) (based on 2023 Integrated Report, p.38, p.49). According to DB International Operations’ website, “DB’s regional services do not only operate in Germany, but also across borders and in other European countries, including the UK, Czech Republic, Denmark, the Netherlands, Poland, and Portugal.”

**API by Direkt Bahn Guru:** This data is made easier to access and use through a tool (API) provided by [Direkt Bahn Guru](https://direkt.bahn.guru/), which helps organize and provide the data in a convenient format.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

1. Internet connection
2. Computer or mobile device

## Limitations

1. **Data Unavailable for Some Countries**

Currently, Chronotrains.com does not seem to provide train data for outgoing journeys from Bosnia and Herzegovina, Albania, and Belarus. However, data is available for neighboring countries, and some connections are displayed. For instance, train stations in Croatia include destinations that extend into Bosnia and Herzegovina, which are then visible on the map.

{% hint style="info" %}
NOTE: To determine if data is available for a specific location, check the individual train stations represented as dots on the map. Filled dots indicate available data, while empty (white) dots signify the absence of outgoing train information.\

{% endhint %}

As of January 2025, the map started including some train data in Turkey and Montenegro. Russia still does not have any data available on the tool.

While Ukraine is marked as available on the map, it may be incomplete. Make sure to cross-reference with other neighboring countries’ train data, such as Polrail, and Ukraine’s national railway network, Ukrainian Railways.

2. **Accuracy**

Chronotrains.com includes a caveat [that the travel times are based on estimates only provided by Deutsche Bahn data](https://www.chronotrains.com/en/8) (Under FAQs). Actual arrival times may not always match. Therefore, it is important to use this platform ony for estimates.

3. **Adding Connections (“Edges”) Between “Closeby Stations” Based on Assumed Walking Speed**

According to its [GitHub page](https://github.com/benjamintd/chronotrains), “closeby stations” and “assumed speed” are defined as follows:

**Closeby stations:** If two stations are close to each other (less than 10 km/6.2 mi apart), the system will add a connection between them, which is then reflected on the map.

**Assumed speed:** The system also assumes that you can walk/travel between these stations at a speed of 9/km/h (5.59 mph) - which is described as [“faster than walking but slower than biking.”](https://github.com/benjamintd/chronotrains)

It is important to note that this speed can vary from person to person and that this is an average estimate. So, whenever examining  data on Chronotrains, keep these limitations in mind.

4. **Local Transit Exclusion**

The tool does not display options involving connections by local transit methods such as buses, bikes, or walking. The tool provider offers the following explanation on the tool's Github page: "Because local transit is not included for most cities, there are no journeys available between different stations that can actually be connected by bus, bike, or on foot."

Specifically, as mentioned above, _if two locations are more than 10 km/6.2 mi apart_, it will not display a journey/connection. For instance, if a user wants to go from point A to point D:

a. The train stops at point B and does not go directly to point D.

b. You could take a bus or bike from point B to point C.

c. From point C, you could catch another train to reach point D.

If the distance between Point B and Point C (where the user intends to get a connecting train) is more than 10 km/6.2 mi apart, then it will not appear on the map.

These types of multi-modal journeys, which involve switching from a train to a bus or bike and then back to a train, are not included in the dataset.

4. **Assumed Interchange Time**

According to its [GitHub page](https://github.com/benjamintd/chronotrains), when switching from one train to another, the system assumes it takes 20 minutes. Since this can be variable depending on the person or unforeseen transit delays,  the data should be taken as an estimate and needs to be cross-checked with other train schedules.

6. **Some Trains May Not Be Reflected on the Map**

[A post from May 2023](https://x.com/jason_boyer/status/1663822318982889472), shows that certain train connections that should be visible on the map may not appear (to date, the issue described in the post does not seem to occur anymore at that specific location). In addition, there is another reason why some train information is missing. Since Chronotrains also uses data from Direkt Bahn Guru, this GitHub page acknowledges that: [“The API includes most trains in central Europe, but data availability gets significantly lower the further away stations are from routes (co-) operated by DB.” ](https://gist.github.com/juliuste/f9776a6b7925bc6cc2d52225dd83336e)Also, according to this page, trains from smaller companies are often not included compared to those from state-owned operators, probably because they don't share data as much.

7. **Data From Deutsche Bahn API Has** [**Limits**](https://gist.github.com/juliuste/f9776a6b7925bc6cc2d52225dd83336e)**.**

_**No Single Dataset:**_ Public transport route data in Europe remains fragmented, with no single comprehensive dataset available.

_**Incomplete Data:**_ According to this [page](https://gist.github.com/juliuste/f9776a6b7925bc6cc2d52225dd83336e), public transport data availability varies across Europe, with some countries lacking entirely.

_**Regional Data Only:**_ Other countries only provide data by region or by specific transport operators (like in France).

_**Hard to Combine:**_ Because the data is so scattered and inconsistent, it's difficult to combine it into one complete dataset.

## Ethical Considerations

Chronotrains is best used in conjunction with other tools and other sources of information. Ensure transparency, acknowledge limitations, and prioritize obtaining corroborating information through other tools.

**Transparency and Disclosure:**

As mentioned above, Chronotrains uses data based on pre-scheduled train times and not real-time tracking. It includes this caveat under its [FAQs](https://www.chronotrains.com/en) section. As mentioned under the “Limitations” section, data are based on the user’s assumed walking speed and assumed duration for changing between trains. These variables can modify the estimates that the map shows. It is, therefore, important to disclose these limitations when using it as a tool for your investigations.

**Accuracy:**

Chronotrains' data should be treated as an estimate or an investigative lead that needs further verification. While Chronotrains uses established train schedule data, it's important to consider if there could be any bias within that data itself. For instance, if certain routes are less frequently traveled or have less up-to-date scheduling information, this could skew the results generated by Chronotrains.

If less frequently traveled routes are underrepresented, the overall dataset might not accurately reflect precise travel estimates. However, this does not drastically compromise the overall quality and reliability of Chronotrains' data. These travel estimates can still be valuable, particularly when coupled with mitigation strategies such as regularly verifying data from multiple reliable sources, including real-time updates and local transit information.

## Guides and articles

A description and demo for the tool, including an interview with the tool provider: [https://www.youtube.com/watch?v=3ODcetbkq7U](https://www.youtube.com/watch?v=3ODcetbkq7U)

## Tool provider

Benjamin Tran Dinh, [https://x.com/\_benjamintd](https://x.com/_benjamintd), France, [https://x.com/chronotrains](https://x.com/chronotrains)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
