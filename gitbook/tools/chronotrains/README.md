---
description: >-
  Chronotrains is a free interactive map designed to explore the reach of
  Europe’s extensive rail network. Enter a starting point and travel time (up to
  8 hours) to see reachable destinations by train.
---

# Chronotrains

## URL

[https://www.chronotrains.com/en](https://www.chronotrains.com/en)

## Description

This tool is a user-friendly platform that helps you visualize train destinations within Europe. If you hover a mouse over a city or a particular train station on the map, Chronotrains then unveils a map where concentric zones radiate outward. This depicts all the destinations reachable by train within your chosen duration.&#x20;

**Using the Map:**&#x20;

&#x20;  \- Click on any train station to set it as your starting point.

&#x20;  \- Select the amount of time you want to travel (e.g., minimum 1 hour, up to 8 hours maximum).

&#x20;  \- The map will update to show the areas you can reach within the selected time frame.

**Exploring Options:**

&#x20;  \- Use the map to explore different travel possibilities. You can move around the map, click on different stations, and see how travel times change.

**Key Features:**&#x20;

1. _Interactive Map_

_**What it does:**_ The core feature of Chronotrains is it’s interactive map. Users click on any train station on the map to see how far they can travel by train within a certain time frame.&#x20;

**Why it matters:** This visualization helps users quickly understand the reach of train travel from different locations, which can be useful for trip planning and understanding regional connectivity.

2. _Travel Time Visualization_

**What it does:** It shows travel times in different colors on the map, making it easy to see the areas you can reach within 1 hour, 2 hours, and up to 8 hours.&#x20;

**Why it matters:** This feature allows users to easily compare travel times between different locations, helping them make informed decisions.&#x20;

3. _Data integration_

How it works: According to the tool’s [website](https://www.chronotrains.com/en/8), this map integrates data from [Deutsche Bahn](https://www.bahn.de/) through [Direkt Bahn Guru](https://direkt.bahn.guru/).&#x20;

### How does it work?&#x20;

The platform’s [GitHub page](https://github.com/benjamintd/chronotrains) provides an explanation of the tools' inner workings.

**What the Map Shows:**

Isochrones: Imagine you start at a specific train station. An isochrone map shows you how far you can travel from that station within a certain amount of time and in multiple directions. For example, it can show all the places you can reach in 1 hour, 2 hours, and so on, heading North, South, East, or West.

**How It Works:**

_1. Building a Graph:_

Think of a graph like a map, but instead of just showing locations, it also shows the connections between them. In this case, the "nodes" (points) on the graph are train stations. The "edges" (lines connecting the nodes) represent the journey times between these stations.

_2. Exploring the Graph:_

For each station, the system checks which other stations you can get to in a certain amount of time. For example, it might check which stations you can reach from Station A in 1 hour, 2 hours, etc.&#x20;

**Data Source:**

**Deutsche Bahn (DB) Data:** The information about train times and stations comes from Deutsche Bahn. Deutsche Bahn co-operate routes with different countries' rail systems ([https://io.deutschebahn.com/en/services/passenger-rail/](https://io.deutschebahn.com/en/services/passenger-rail/)) and therefore has data on train schedules for [international destinations](https://ibir.deutschebahn.com/2023/fileadmin/downloads/db\_ib23\_e\_web\_01.pdf) (based on 2023 Integrated Report, p.38, p.49).  According to DB International Operations’ passenger rail services, “DB’s regional services do not only operate in Germany, but also across borders and in other European countries, including the UK, Czech Republic, Denmark, the Netherlands, Poland, and Portugal.”&#x20;

**API by Direkt Bahn Guru:** This data is made easier to access and use through a tool (API) provided by Direkt Bahn Guru, which helps to organize and provide the data in a convenient format.

_Data Processing (Scraping and Pre-computing):_

* Scraping Data: This means collecting and gathering train data from its source.&#x20;
* Pre-computing Isochrones: Before you use the map, the system calculates (pre-computes) the travel times and areas you can reach in advance.

_Storing and Displaying Isochrones:_

* GeoJSON: This is a format for encoding geographic data. The isochrones are stored in this format.
* Served on Hover: When you hover your mouse over a station on the map, it shows the isochrones (areas you can reach within a certain time).

### Possible use cases

While originally used to plan trips, Chronotrains can be repurposed for open-source investigations.&#x20;

This can aid open-source investigations with a time-sensitive location element.&#x20;

It can be used to:

* Potentially verify travel claims: By entering a location and timeframe, investigators can see if a reported train travel aligns with what's realistically possible.
* Potentially track movement patterns: Analyze potential routes and locations reachable by train within a specific timeframe, helping identify areas a person of interest might have visited.
* Assess logistical feasibility: Evaluate the practicality of travel plans based on train schedules, which can help users understand a situation's logistics.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

1. Internet connection
2. Computer or mobile device

## Limitations



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

| Page maintainer                                                |
| -------------------------------------------------------------- |
| \[\[Your name here (optional) or "Bellingcat volunteer team"]] |
|                                                                |
