---
description: >-
  Discover real-time conversations and trends in any area with X's built-in
  location search. Search by latitude and longitude coordinates or distance for
  targeted local content.
updated: '2025-11-25'
---

# Twitter/X Location Search

## URL

[https://twitter.com/explore](https://twitter.com/explore)

## Description

Users can discover posts from specific geographic areas by utilizing X's built-in location search tool. This feature enables targeted searches based on proximity, allowing users to find relevant content within a designated radius.  &#x20;

### How does it work?

Understanding how location data is incorporated into the platform is key to effectively leveraging location-based searches. [According to X](https://help.x.com/en/using-x/post-location), users have the option to share location details on posts. The platform seems to figure out where a tweet is from by looking at a few things:&#x20;

(1) the location information a user provides,&#x20;

(2) guessing by user profile,

(3) using a user’s device location, if enabled.&#x20;

#### _**Self-reported location vs. Profile location**_&#x20;

X frequently uses these two types of location data.&#x20;

1. Manual User-Added Location: This allows users to directly add a location to posts and is displayed below the post. &#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 021003-marked2.png" alt=""><figcaption><p>This post shows a post with an explicit location reported by the user. This location info appears at the bottom of the post. For example, we are interested in discussions about the art community around Estes Park, Colorado. On the search bar, we enter our search term "art" and the location we are interested in, "near:estes-park"</p></figcaption></figure>

2. Profile Location: In the absence of a user-specified location, X may approximate it based on factors such as the location the user specifies on his/her account profile.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 015213-marked.png" alt=""><figcaption><p>On the other hand, user profiles sometimes indicate where they are based as shown in this image. The platform may then use this information when generating location-based search results. </p></figcaption></figure>

#### _**Location from the user's device**_

&#x20;If users choose to enable location settings on their devices, X can[ identify ](https://developer.x.com/en/docs/x-api/v1/geo/places-near-location/api-reference/get-geo-search)the GPS coordinates of this device at the time of the post. This is particularly helpful when users want to take advantage of the search results near their respective locations.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 024311.png" alt="" width="375"><figcaption><p>If you're looking to find posts near your current location, there's a quicker method available. Use the “posts near me” location feature. Here are the steps: Open X on a browser or the mobile app, and enter a hashtag or search term. Choose “Near you” under the “Location” heading to filter the search results to show only posts from nearby.</p></figcaption></figure>

### How to use geocode location search operators

On the search bar, users can use the following search operators in addition to their subject-matter keywords:

* Use keywords like "**near:\[cityname]**" to search within a certain area. For example, "**near:Chicago**" finds tweets around Chicago.&#x20;
* You can also set a distance using "**within:\[radius]**" to narrow down results within a certain radius in [mi or km](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query), for example “**within:2mi**”
* Combine both search operators "**near:chicago within:2mi**"

For more specificity, use latitude and longitude coordinates. Search using "**geocode:\[latitude,longitude,radius]**" For example, "**geocode:40.7128,-74.0060,10mi**" for New York City.

### What problem does it solve?&#x20;

For open-source researchers, this tool helps find the signal through the noise. X's location-based search feature enables users to narrow down posts originating from specific geographic areas among a vast amount of content. This functionality facilitates the discovery of local trends, events, and conversations.

### Use cases

Open-source researchers may find this tool helpful for tracking crises and events:

* Real-time Monitoring: Pinpointing locations of protests, conflicts, or natural disasters.
* Identifying Affected Areas: Determining regions experiencing human rights violations or humanitarian crises.
* Corroborating Ground Reports: Verifying claims of incidents through geolocated content.
* Spot relevant local conversations and identify possible local experts or leads in a location in question.

## Cost

* [x] Free

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. A user account in X/Twitter
2. Mobile or desktop device&#x20;
3. Internet connection&#x20;

## Limitations

1. **The Reliance on the Users’ Reports of Data/Location Spoofing**

Self-reported location affects the reliability of results in two ways primarily: (1) Incomplete data set: X relies on users to share their location, but many don't. This means location data can be incomplete. (2) Location spoofing: it is possible that users report an incorrect or misleading location. And because the location is entered manually, it can be easy to fake this information. It's essential to remember that X's location estimates aren't always accurate.

2. **Limited Historical Data**

Geocoded searches are more effective for recent posts. Older posts often lack location tags, reducing the volume of retrievable data. For instance, [Bellingcat found](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/) user profile location information used to georeference tweets only for the most recent week, leading to a drop in older tweet volumes. The 2021 study finds that: "user profile location information is only used to georeference tweets for the most recent week (seven to eight days, approximately). The effect of this is that recent tweet volume appears much greater than that from more than a week ago." In a separate test done by a Global Authentication Project volunteer in July 2024, the tool was tested to find historical location data. The conclusion was that this limitation still seems to exist.&#x20;

3. [**Radius limited to 25 mi (40.23 km**](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query)**)**

According to [X’s guide](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query) to building a query, distance-based searches can be limited to 25 mi. This means they can exclude relevant tweets just outside the specified area. For instance, an investigator is researching environmental impacts in a 50-mile radius around an industrial site. X’s search may only allow a smaller radius, potentially missing relevant tweets from just outside the boundary.&#x20;

4. **Transparency**

According to [this case study, ](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)it's important to note that the platform's methodology for determining a tweet's location is not fully transparent, potentially impacting the precision of location-based queries.

To mitigate these limitations, users should avoid location-only searches and take advantage of other search filters provided by the platform. &#x20;

5. **Inability to Distinguish Between User-Reported Location and Profile Location**

Based on our tests, the **"near:"** search operator sometimes produces irrelevant results due to the platform's limitations in accurately determining post locations. The tool sometimes struggles to differentiate between a user's profile location and the actual location where a post was created. This leads to results that include posts from people who simply live in the area, not necessarily those related to a specific event or topic being searched.&#x20;

## Ethical Considerations

* Individual Privacy: Even though tweets are publicly posted, it is necessary to respect users' privacy by avoiding the disclosure of personal information without consent.&#x20;
* Transparency: If sharing findings publicly, consider anonymizing personally identifiable information to protect individuals' privacy.
* Data Reliability: Be aware that Twitter's location data is not always accurate. Avoid drawing definitive conclusions based solely on location data without corroboration from other sources

## Tool provider

X.com, USA

## Guide

See Bellingcat’s Case Study into tweets during the COVID-19 crisis in India, showing the lack of precise geolocation data, requiring multiple geocoded queries to approximate geographic distribution:

[https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.&#x20;
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.<br>

| Page Maintainer |
| --------------- |
| Afton           |
|                 |
