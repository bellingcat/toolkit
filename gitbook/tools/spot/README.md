---
description: >-
  A natural language (i.e. human conversational language) interface for querying
  the OpenStreetMap database to find locations which meet the user's search
  criteria.
---

# Spot

## URL

https://www.findthatspot.io

## Description

Spot provides an interface to Open Street Map, which is a free, open map database of the world, updated and maintained by a community of volunteers via collaborative working. Open Street Map contains the locations of a large number of features such as buildings and infrastructure, e.g. town hall, water, pylon, railway. The Spot user can describe a location search in terms of these features and a given search area, and Spot will return a map showing those candidate groups of features whenever they meet the user's criteria. The location can be described in terms of a large vocabulary of map features, their proximity and their geography. A common OSINV use case involves the user describing an image or video frame which they want to geolocate, and using Spot to generate potential solution locations around a particular geographic region like a named city.

\---------------------------------------------reworked down to here-----------------------------------------

Structure of Spot

Spot works in 3 stages:

1. uses natural language prompts as input,&#x20;
2. converts them into code to perform a search
3. displays the results on a map. Natural language [refers](https://www.ft.com/content/c0c8d205-e158-409e-963c-a3ac821cd7ba?utm_source=chatgpt.com) to human speech or text processed by artificial intelligence, and this process is known as Natural Language Processing (NLP). Spot also supports multiple languages for effective location searches in addition to English.

\
The integration of mapping services like Google, Yandex, and Bing further enhances the tool. Users can also view their location of interest in Google Street View. Collaboration is facilitated by enabling users to save, download, and share their sessions.

\


\[Need Venn diagram or a hierarchy demonstrating tool to show the issues of categorization, e.g. we want all military bases. If the system has categorized police buildings separately, we will need to search for those separately: they will not be returned within a military bases search. If the system has a hierarchy within which police buildings are a subset of military bases, then police buildings will be returned in a military bases search. This is an important point about categorisations.]

### The Interface





Data Input, Output and Formats

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





## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

\[\[Information on the requirement for using a tool, for instance, API key, e-mail address etc.]]

## Limitations

1. Spot gives various errors. These are the different errors users will come across:

<figure><img src=".gitbook/assets/Cologne system hickup.png" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/London Unknown error.png" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/geometry2025-07-05 at 22.04.20.png" alt=""><figcaption></figcaption></figure>

Hallucinates.&#x20;

1. Complex queries can return no results. Simplify the search as much as possible.
2. Some queries may take time to get results.&#x20;
3. Spot is based on OpenStreet Map Data. Anything not found in OSM’s database will not be returned in results.
4. Results may not always be accurate and may represent a broader area. For instance, in the Paris search, the rectangular box shown below shows a large search area, and does not represent the exact elements from our search. Make sure to double-check your findings against other mapping tools like Google Maps and OpenStreetMap.
5. Just because it says it's AI-powered doesn't mean the tool is a magic wand that fulfills every wish, especially when it comes to searching for geolocation. AI here should not be conflated with accuracy, as [LLMs](https://www.bellingcat.com/resources/how-tos/2025/06/06/have-llms-finally-mastered-geolocation/) have come a long way in helping geolocate images, but are still far from mastering it.

Something about how the LLM was trained in a way that may introduce biases, as it may not be all-encompassing.

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guides and articles

\[\[Link to guides on this tool and to articles on research that was done with the help of this tool]]

## Tool provider

The tool was developed by [DW Innovation](https://innovation.dw.com/en/articles) and is [co-funded](https://corporate.dw.com/en/geolocation-made-easy-with-new-dw-tool-spot/a-71256709) by the “German Secretary of State for Culture and the Media (BKM) via the KID2 Project (Künstliche Intelligenz gegen Desinformation #2).”

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                                |
| -------------------------------------------------------------- |
| \[\[Your name here (optional) or "Bellingcat volunteer team"]] |
|                                                                |
