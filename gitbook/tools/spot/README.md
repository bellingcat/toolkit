---
description: >-
  A natural language (i.e. human conversational language) interface for querying
  the OpenStreetMap database to find locations which meet the user's search
  criteria.
---

# Spot

## URL

[https://www.findthatspot.io](https://www.findthatspot.io/)

## Description

Spot provides an interface for searching OpenStreetMap[^1] using everyday language ( multiple languages are supported in addition to English.

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) shows a very large number of both natural and man-made features, e.g. buildings, infrastructure, bodies of water.  These features are labelled according to [OSM's own detailed classification system](https://wiki.openstreetmap.org/wiki/Map_features), e.g. town hall, lake, pylon, railway, ... and they can be used as search terms to express users' search criteria. An example Spot user search might be "_**Find a car park near a cafe and a marina within 80m in the Hague**_".&#x20;

Spot is one amongst a range of tools which exists to allow users to query OpenStreetMap (See Similar Tools below). These tools use different methods to build the user's search query: some involve a formal language, some use a graphical interface. Spot is characterised by the use of [natural language](#user-content-fn-2)[^2] to express the users' search query, and this is relatively unusual.&#x20;

The Spot user can describe a location search in terms of&#x20;

* logical groupings of these map features, e.g. a pharmacy AND[^3] a traffic light
* their relative distance from one another, e.g. within 70m of one another
* the location of a geographical search area, e.g. in Cologne

e.g. "_**Find a pharmacy and a traffic light and a bus stop and a bridge within 70m in Cologne**_" and, in response, Spot will return a map showing those candidate groups of features whenever they meet the user's distance criteria within the given location.&#x20;

A common OSINV use case involves the user describing an image or video frame which they want to geolocate, and using Spot to generate potential solution locations around a particular geographic region like a named city.

### What Spot Does

Spot works in 4 stages:

1. Spot takes natural language prompts as input from the user, i.e. sentences written in everyday language and converts these sentences into query language  code with a formal structure (which is displayed to the user in a separate box in the interface).
2. Spot  uses the query  language code to perform a search of OpenStreetMap (by building an Overpass query).
3. Spot displays all the features which satisfy the user's input search on a map.&#x20;
4. For each feature marked on the output map, Spot offers the user the option to open a [street view](#user-content-fn-4)[^4] window within the tool, using data from a choice of three of the largest providers of street view photography (Google, Yandex, and Bing).

\


{% hint style="info" %}
Hint here that only stage 1 uses AI, the others do not. So quality of search is not AI.
{% endhint %}

\[Need Venn diagram or a hierarchy demonstrating tool to show the issues of categorization, e.g. we want all military bases. If the system has categorized police buildings separately, we will need to search for those separately: they will not be returned within a military bases search. If the system has a hierarchy within which police buildings are a subset of military bases, then police buildings will be returned in a military bases search. This is an important point about categorisations. It is a generic issue, not specific to Spot]

### The Interface

The first thing a user sees when they visit the Spot website is a modal window (a pop-up). This box includes a search box, where an example query is typed out word by word and then disappears automatically. “Find me a tram stop next to a park within 150 metres of a traffic light and a parking garage in Prague,” says the animated auto-query. This demonstrates how to phrase a search for the tool to understand. Text for the search prompt can be entered here or performed after closing this window.

In the top left corner, a query can be entered into the search box. This is the first step, also explained in the description above, where Spot takes the input as natural language prompts.

Just below the search bar is an expandable “Search Parameters” box, where the location, entities, and the relationship between them —specifically, how far apart they are from each other— can be viewed. Entities are features labelled according to OpenStreetMap’s own classification system.&#x20;

<details>

<summary>Search Parameters</summary>

Here, you can edit the OSM tags assigned to each feature by clicking the “pencil” icon. OSM tags define features of map[ elements](https://wiki.openstreetmap.org/wiki/Tags) which “add meaning to geographic objects.” Elements are the “nodes”, “ways” and “relations”

According to the TagInfo site for OSM tags, “there is no fixed list of those tags. New tags can be invented and used as needed. Everybody can come up with a new tag and add it to new or existing objects.”

A tag is made of two [items](https://wiki.openstreetmap.org/wiki/Tags): a key and a value. A key describes the category or type of feature. A [value](https://wiki.openstreetmap.org/wiki/Tags) “provides detail for the key-specified feature." For example, an OSM key, “waterway”, can have multiple values that define this key. Some of them include a stream, ditch, river, drain, canal, and dam, among others. These can be adjusted depending on the needs of the search.

This feature is similar to [Bellingcat’s OpenStreetMap](https://osm-search.bellingcat.com/) search tool, which utilises a custom setting for adding features, enabling adjustments via the OSM key and value.

</details>

After conducting a search, you can always adjust the Search Parameters to refine criteria and update results.

Spot displays the results on an interactive map. These are potential location solutions from the search appearing on the map simultaneously.&#x20;

Entities from the search are highlighted in different colours, and users can select or deselect the ones they want to see on the interface through the “Map Legend” at the bottom left. The slider on the right allows you to zoom in on a single location or zoom out to view all results.

To confirm which result matches our required location, one must sift through all the available possibilities on the map.&#x20;

The exact location where the entity is situated can also be viewed in integrated mapping services, such as Google Maps, Bing, and Yandex. This ensures location verification through multiple mapping services in one place, thus saving time and allowing for greater flexibility.

Spot has also integrated Google Street View for location verification. Clicking on “Open Google Street View” opens a window displaying the location's street-level photography. Use this feature to match entities and features against the photo or video being geolocated.

### Data Input, Output and Formats

{% tabs %}
{% tab title="INPUT DATA" %}
Natural language description of a location to be found - includes entities at the location, their relative proximity and the geographic search area.

OR

Overpass Turbo query - references entities with the appropriate OSM tags, describes their relative proximity with distances and provides the geographic search area. (Search parameters)
{% endtab %}

{% tab title="SPOT OUTPUT DATA" %}
Location map marking all entities in groups which satisfy the search criteria, but not marking those groups individually.
{% endtab %}

{% tab title="USE CASES" %}
Geolocation of photograph/video imagery

Determination of the purpose, nature or further details of an entity seen in an image at a known location, e.g. the tall building is a place of worship.
{% endtab %}

{% tab title="DATA INPUT OPTIONS" %}

{% endtab %}
{% endtabs %}

### Exploring and understanding results on Spot’s map interface

To understand the results and how to use the Spot's interface, the following search query was used as an example: “Find a building with 10 stories or more within 50m of water and a church in the City of London”.  The tool's interface with possible locations (results) looks like this:

<figure><img src=".gitbook/assets/Spot results .png" alt=""><figcaption></figcaption></figure>

The purple blobs on the map legend represent churches, orange indicates water, and red signifies buildings with 10 or more stories. The church, water, and the building can be entities from an image or video showing a specific location that a user is geolocating.

Clicking on a specific entity from one of the results shows details, which include a link to its OSM ID. This link opens a new tab to its location on the OpenStreetMap website, where you can find this entity and explore further. In this case, clicking on the church indicates that its “denomination” is “Anglican” and was “rebuilt” in “1906.” Click on the OSM ID link for more details.

<figure><img src=".gitbook/assets/Spot church details.png" alt=""><figcaption><p>Details about the church.</p></figcaption></figure>

The exact location where the entity is situated can also be opened in the integrated mapping services like Google Maps, Bing, and Yandex. This ensures location verification through multiple mapping services in one place, thus saving time and allowing for greater flexibility.

Spot has also integrated Google Street View for location verification.  Clicking on “Open Google Street View” opens a window displaying the location's street-level photography. Use this feature to match entities and features against the photo or video being geolocated.

Users can also switch between map layers that include “[vector map](#user-content-fn-5)[^5]”, “hybrid view” and “OSM Style Map”. The screenshot below shows a location from search results in the hybrid view and the Google Street View tab showing street-level photography of the selected result.

<figure><img src=".gitbook/assets/Spot hybrid view on map.png" alt=""><figcaption></figcaption></figure>

\
Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Only sign up is required to use the tool.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Any web browser and a sign-up through GitHub or Google are required to use the tool.

## Limitations

All tools which query OpenStreetMap share the limitations which the structure of the Overpass Turbo query language

1. The format of Spot's output is imprecise relative to other tools which clearly group the factors supporting each different solution location proposed in response to the user's query. Spot puts all the factors supporting each solution location onto the same output map, without counting the number of different solution locations and indicating the supporting features for each one. So Spot does not answer the question "How many different locations satisfy my criteria in the given search area?&#x20;
2. Spot's valuable integrated street view access operates at the location of each feature on the solution map. Given that usually  all the features mentioned in a query will be visible in the source image which is being geolocated, the view **at** a feature location is not likely to be a match. e.g. street view imagery taken at the central co-ordinates of the Eiffel Tower is unlikely to include images where the Eiffel Tower is clearly visible.
3. Spot gives various errors (as at testing on 31/8/25). These are some of the different errors users will come across:

<div><figure><img src=".gitbook/assets/Cologne system hickup.png" alt="" width="563"><figcaption></figcaption></figure> <figure><img src=".gitbook/assets/geometry2025-07-05 at 22.04.20.png" alt=""><figcaption></figcaption></figure> <figure><img src=".gitbook/assets/London Unknown error copy.png" alt=""><figcaption></figcaption></figure></div>

&#x20; &#x20;



4. Complex queries can return no results so users should simplify their search criteria as far as possible.
5. The tool exhibits strange behaviour. Sometimes results may not meet the search criteria.
6. Some queries may take time to get results.&#x20;
7. Spot is based on OpenStreet Map Data. Anything not found in OSM’s database will not be returned in results.
8. Results may not always be accurate and should be double-checked against other mapping tools like Google Maps, Yandex Maps, Bing Maps, including street-view photography.&#x20;

## **Ethical Considerations**

1. Users should verify the accuracy of the results, as they may not always match the search criteria. Since the tool uses OpenStreetMap data, which is crowdsourced, users should always cross-check and confirm the results using other mapping services like Google, Yandex, Bing, etc., and street-level photography.
2. Spot’s Trusted AI principles page states that “The user prompts that are entered in the Spot application are being used to re-train the model on real user queries to improve the user relevance of the AI model.” Furthermore, the same page says, “User control -- no publicly anonymous available access but certain monitoring of users will be done via login functionality.” Therefore, entering any information in the query or users’ login credentials may potentially end up revealing sensitive information about the individual or the investigation.
3. The tool uses “cookieless tracking”. Although the “tracking” feature can be disabled on the “Legal & Privacy Statement” page, users should still take precautions, such as using VPNs and browser extensions, to block tracking and prevent the potential revealing of their location.

In their Legal & Privacy Statement, the tool provider says that the data collected is usually kept for 30 days, after which it is deleted. However, it also reiterates that “under exceptional circumstances, we need them for a longer period for the above-mentioned purposes. In such a case, we erase the data as soon as they're no longer required.”

Spot also uses third-party services like [Nominatim](https://nominatim.org/), [Maptiler](https://www.maptiler.com/), [Mapbox](https://www.mapbox.com/), [Versatiles](https://versatiles.org/), [OSM Tiles](https://openmaptiles.org/), [Google Street View](https://www.google.com/streetview/) and [MongoDB](https://www.mongodb.com/) to make the application work when a user enters a search prompt. Make sure to check their Legal & Privacy Statement to understand how the data is processed.

## Guides and articles

Spot offers a introductory tutorial on how to use the tool on its website

{% embed url="https://www.youtube.com/watch?t=10s&v=vwsfaiy_5ck" fullWidth="false" %}

There is a more detailed video on Prompting

{% embed url="https://www.youtube.com/watch?v=wfLSdDrWMC4" %}

There is also training on viewing and interpreting Spot results

{% embed url="https://www.youtube.com/watch?v=RMRumWNf298" %}

### Similar Tools

_**Maybe a table here? We need to test with reference to Spot paper Table 1**_

## Tool provider

The tool was developed by [DW Innovation](https://innovation.dw.com/en/articles) and is [co-funded](https://corporate.dw.com/en/geolocation-made-easy-with-new-dw-tool-spot/a-71256709) by the “German Secretary of State for Culture and the Media (BKM) via the KID2 Project (Künstliche Intelligenz gegen Desinformation #2).”

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool uses cookieless tracking.&#x20;
* [ ] This tool does not appear to use tracking cookies.

It is possible for users to disable cookiless tracking

| Page maintainer                       |
| ------------------------------------- |
| Anisa Shabir 6:10 pm PKT on August 30 |
|                                       |

[^1]: [Open Street Map](https://www.openstreetmap.org/) is a free, open map database of the world, updated and maintained by a community of volunteers via collaborative working.&#x20;

[^2]: i.e. human conversational language

[^3]: AND is a [logical operator](https://www.w3schools.com/programming/prog_operators_logical.php) here, like OR.

[^4]: Street view photographs are taken at ground level (as opposed to satellite view imagery, taken from above), giving a view of what a human would see at a location by looking around.

[^5]: Definition here
