---
description: >-
  Discover real-time conversations and trends in any area with X's built-in
  location search. Search by latitude and longitude coordinates or distance for
  targeted local content.
---

# Twitter/X Location Search

## URL

[https://twitter.com/explore](https://twitter.com/explore)

## Description

Users can discover posts from specific geographic areas by utilizing X's built-in location search tool. This feature enables targeted searches based on proximity, allowing users to find relevant content within a designated radius.

### How does it work?

Understanding how location data is incorporated into the platform is key to effectively leveraging location-based searches. [According to X](https://help.x.com/en/using-x/post-location), users have the option to share location details on posts. The platform figures out where a tweet is from by looking at a few things: (1) When users tell it, (2) Guessing by user profile (3) Using a user’s device location, if enabled.&#x20;

#### _**Self-reported location vs. Profile location**_&#x20;

X employs frequently uses these two types of location data.&#x20;

1. Manual User-Added Location: This allows users to directly add a location to posts and is displayed below the post. &#x20;

\[placeholder]

2. Profile Location: In the absence of a user-specified location, X may approximate it based on factors such as the location the user specifies on his/her account profile.  The platform estimates based on where users say they live in their profile.

\[placeholder]

#### _**Location from the user's device**_

If users choose to turn on location settings on their devices, X can identify the GPS coordinates of this device at the time of the post. In addition, X may use the user’s [IP address](https://developer.x.com/en/docs/twitter-api/v1/geo/places-near-location/api-reference/get-geo-search) to determine which location is attached to the post.

\[placeholder]

### How to use geocode location search operators

On the search bar, users can use the following search operators in addition to their subject-matter keywords:

* Use keywords like "**near:\[cityname]**" to search within a certain area. For example, "**near:Chicago**" finds tweets around Chicago.&#x20;
* You can also set a distance using "**within:\[radius]**" to narrow down results within a certain radius in [mi or km](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query), for example “**within:2mi**”
* Combine both search operators "**near:chicago within:2mi**"

For more specificity, use latitude and longitude coordinates. Search using "**geocode:\[latitude,longitude,radius]**" For example, "**geocode:40.7128,-74.0060,10mi**" for New York City

### What problem does it solve?&#x20;

For open-source researchers, this tool helps find the signal through the noise. X's location-based search feature enables users to narrow down posts originating from specific geographic areas amid a huge amount of content. This functionality facilitates the discovery of local trends, events, and conversations.

### Use cases

Open-source researchers may find this tool helpful for tracking crises and events

* Real-time Monitoring: Pinpointing locations of protests, conflicts, or natural disasters.
* Identifying Affected Areas: Determining regions experiencing human rights violations or humanitarian crises.
* Corroborating Ground Reports: Verifying claims of incidents through geolocated content.
* Spot relevant local conversations and identify possible local experts or leads in a location in question&#x20;

## Cost

* [x] Free

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. A user account in X/Twitter
2. Mobile or desktop device&#x20;
3. Internet connection&#x20;

## Limitations

1. **Reliance on User’s Report of Data/Location Spoofing**

Self-reported location affects the reliability of results in two ways primarily: (1) Incomplete data set: X relies on users to share their location, but many don't. This means location data can be incomplete. (2) Location spoofing: it is possible that users report an incorrect or misleading location. And because the location is entered manually, it can be easy to fake this information.  It's essential to remember that X's location estimates aren't always accurate.

2. **Limited Historical Data**

Geocoded searches are more effective for recent posts. Older posts often lack location tags, reducing the volume of retrievable data. For instance, [Bellingcat found](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/) user profile location information used to georeference tweets only for the most recent week, leading to a drop in older tweet volumes. The study finds that: "user profile location information is only used to georeference tweets for the most recent week (seven to eight days, approximately.) The effect of this is that recent tweet volume appears much greater than that from more than a week ago."&#x20;

3. [**Radius limited to 25 mi (40.23 km**](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query)**)**

According to X’s guide to building a query, distance-based searches can be limited to 25 mi. This means they can exclude relevant tweets just outside the specified area. For instance, an investigator is researching environmental impacts in a 50-mile radius around an industrial site. X’s search may only allow a smaller radius, potentially missing relevant tweets from just outside the boundary.&#x20;

4. **Transparency**

According to [this case study, ](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)it's important to note that the platform's methodology for determining a tweet's location is not fully transparent, potentially impacting the precision of location-based queries.

To mitigate these limitations, users should avoid location-only searches and take advantage of other search filters provided by the platform. &#x20;

## Tool provider

X.com

USA

## Guide

See Bellingcat’s Case Study into tweets during the COVID-19 crisis in India showing the scarcity of precise geolocation data, requiring multiple geocoded queries to approximate geographic distribution

Link: [https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.&#x20;
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.\


| Page Maintainer |
| --------------- |
| Afton           |
|                 |
