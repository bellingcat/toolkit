---
updated: '2026-05-13'
description: >-
  Discover real-time conversations and trends in any area with X's built-in
  location search. Search by latitude and longitude coordinates or distance for
  targeted local content.
---

# Twitter/X Location Search

## URL

{% embed url="https://twitter.com/explore" %}

## Description

Users can discover posts from specific geographic areas by utilizing X's built-in location search tool. This feature enables targeted searches based on proximity, allowing users to find relevant content within a designated radius.

### How does it work?

Understanding how location data is incorporated into the platform is key to effectively leveraging location-based searches. [According to X](https://help.x.com/en/using-x/post-location), users have the option to share location details on posts. The platform seems to figure out where a tweet is from by looking at a few things:

(1) the location information a user provides,

(2) guessing by user profile,

(3) using a user’s device location, if enabled.

#### _**Self-reported location vs. Profile location**_

X frequently uses these two types of location data.

1. Manual User-Added Location: This allows users to directly add a location to posts and is displayed below the post.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 021003-marked2 (1).png" alt=""><figcaption><p>This post shows a post with an explicit location reported by the user. This location info appears at the bottom of the post. For example, we are interested in discussions about the art community around Estes Park, Colorado. On the search bar, we enter our search term "art" and the location we are interested in, "near:estes-park"</p></figcaption></figure>

2. Profile Location: In the absence of a user-specified location, X may approximate it based on factors such as the location the user specifies on his/her account profile.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 015213-marked (1).png" alt=""><figcaption><p>On the other hand, user profiles sometimes indicate where they are based as shown in this image. The platform may then use this information when generating location-based search results.</p></figcaption></figure>

#### _**Location from the user's device**_

Users who enable location settings on their devices allow X to record their location when they post.

{% hint style="warning" %}
NOTE: Precise GPS geotagging was reportedly removed sometime in 2019, according to [this article](https://www.niemanlab.org/2019/06/twitter-is-turning-off-location-data-on-tweets-a-small-win-for-privacy-but-a-small-loss-for-journalists-and-researchers/). This could mean that the level of location detail now captured on X is limited.
{% endhint %}

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 024311 (1).png" alt="" width="375"><figcaption><p>If you're looking to find posts near your current location, there's a quicker method available. Use the “posts near me” location feature. Here are the steps: Open X on a browser or the mobile app, and enter a hashtag or search term. Choose “Near you” under the “Location” heading to filter the search results to show only posts from nearby.</p></figcaption></figure>

### How to use geocode location search operators

On the search bar, users can use the following search operators in addition to their subject-matter keywords:

* Use keywords like "**near:\[cityname]**" to search within a certain area. For example, "**near:Chicago**" finds tweets around Chicago.
* You can also set a distance using "**within:\[radius]**" to narrow down results within a certain radius in [mi or km](https://developer.x.com/en/docs/twitter-api/tweets/search/integrate/build-a-query), for example “**within:2mi**”
* Combine both search operators "**near:chicago within:2mi**"

For more specificity, use latitude and longitude coordinates. Search using "**geocode:\[latitude,longitude,radius]**" For example, "**geocode:40.7128,-74.0060,10mi**" for New York City.

### What problem does it solve?

For open-source researchers, this tool helps find the signal through the noise. X's location-based search feature enables users to narrow down posts originating from specific geographic areas among a vast amount of content. This functionality facilitates the discovery of local trends, events, and conversations.

### Use cases

Open-source researchers may find this tool helpful for tracking crises and events:

* Real-time Monitoring: Pinpointing locations of protests, conflicts, or natural disasters.
* Identifying Affected Areas: Determining regions experiencing human rights violations or humanitarian crises.
* Corroborating Ground Reports: Verifying claims of incidents through geolocated content.
* Spot relevant local conversations and identify possible local experts or leads in a location in question.

However, check the limitations section of this description.&#x20;

## Cost

* [x] Free

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. A user account in X/Twitter
2. Mobile or desktop device
3. Internet connection

## Limitations

1. **The Reliance on the Users’ Reports of Data/Location Spoofing**

Self-reported location affects the reliability of results in two ways primarily: (1) Incomplete data set: X relies on users to share their location, but many don't. This means location data can be incomplete. (2) Location spoofing: It is possible that users report an incorrect or misleading location. And because the location is entered manually, it can be easy to fake this information. It's essential to remember that X's location estimates aren't always accurate.

{% hint style="warning" %}
NOTE: Location spoofing may be mitigated by a new [feature rolled out](https://x.com/xDaily/status/1991728882857525261) that now shows where the account is based and which regional app store it is connected to. However, the platform acknowledges that this new feature may be unreliable at times because it changes frequently. It is not based on the user's actual residence but on the user's recent travel or temporary IP changes.

This new feature doesn't currently affect the way location search works. There are no new operators that particularly search for this information. The "near:" operator (see above) still relies on indexed self-reported location on the bio page or the device's GPS location if turned on.
{% endhint %}

<figure><img src=".gitbook/assets/2025-12-04_11-28-48-ed (1).png" alt="" width="375"><figcaption><p>New feature rolled out by X to show where the account is based in. This can be acccessed by going to the user's main profile and clicking on "About this account". Please note that the "Account based in" information may continuously change.</p></figcaption></figure>

2. **Limited Historical Data and Scarce Geo Data on Posts**

Geocoded searches are more effective for recent posts. Older posts often lack location tags, reducing the volume of retrievable data. For instance, [Bellingcat found](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/) user profile location information used to georeference tweets only for the most recent week, leading to a drop in older tweet volumes. The 2021 study finds that: "user profile location information is only used to georeference tweets for the most recent week (seven to eight days, approximately). The effect of this is that recent tweet volume appears much greater than that from more than a week ago." In a separate test done by a Global Authentication Project volunteer in July 2024, the tool was tested to find historical location data. The conclusion was that this limitation still exists.

Also, a vast majority of tweets do not carry geo-data. This [literature](https://link.springer.com/article/10.1007/s13278-025-01494-z) estimates about 1-3 % of posts carry geolocation data.&#x20;

3. **Transparency**

According to [this case study, ](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)it's important to note that the platform's methodology for determining a tweet's location is not fully transparent, potentially impacting the precision of location-based queries.

To mitigate these limitations, users should avoid location-only searches and take advantage of other search filters provided by the platform.

4. **Inability to Distinguish Between User-Reported Location and Profile Location**

Based on our tests, the **"near:"** search operator sometimes produces irrelevant results due to the platform's limitations in accurately determining post locations. The tool sometimes struggles to differentiate between a user's profile location and the actual location where a post was created. This leads to results that include posts from people who simply live in the area, not necessarily those related to a specific event or topic being searched.

5. **X's candidate pool of posts is limited**

According to [X's own documentation](https://help.x.com/en/resources/recommender-systems/search-recommendations), when a user searches the platform, the system is designed to first recommend roughly 400-500 posts before the location filter is applied. These recommended posts also favor those with high engagement. In other words, even if a relevant post exists, it may not immediately surface because the results will recommend new posts with high engagement on an already sparse location metadata.&#x20;

6. **Search terms do not always function as location filters**&#x20;

Based on our recent tests, "near:, "within:" and "geocode:" do not always function as location filters. The platform sometimes returns posts that mention the place name as text instead of posts from that location. NOTE: Always check whether the results are genuinely location-filtered or are keyword matches before using them in your research.&#x20;

## Ethical Considerations

* Individual Privacy: Even though tweets are publicly posted, it is necessary to respect users' privacy by avoiding the disclosure of personal information without consent.
* Transparency: If sharing findings publicly, consider anonymizing personally identifiable information to protect individuals' privacy.
* Data Reliability: Be aware that Twitter's location data is not always accurate. Avoid drawing definitive conclusions based solely on location data without corroboration from other sources

## Tool provider

X.com, USA

## Guide

See Bellingcat’s Case Study into tweets during the COVID-19 crisis in India, showing the lack of precise geolocation data, requiring multiple geocoded queries to approximate geographic distribution:

[https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/](https://www.bellingcat.com/resources/2021/05/19/geofenced-searches-on-twitter-a-case-study-detailing-south-asias-covid-crisis/)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.<br>

| Page Maintainer |
| --------------- |
| Afton           |
|                 |
