---
description: >-
  A natural language interface for querying the OpenStreetMap database to find
  locations which meet the search criteria described by the user.
---

# Spot

## URL

[https://www.findthatspot.io](https://www.findthatspot.io/)

## Description

<figure><img src=".gitbook/assets/Screenshot 2025-08-31 at 15.24.35.png" alt=""><figcaption><p><strong>THE SPOT INTERFACE DISPLAYING RESULTS OF A SEARCH OF OPEN STREET MAP EXPRESSED IN ENGLISH LANGUAGE AT TOP LEFT, WITH RESULTS COLOURED ON THE MAP AND ONE CANDIDATE LOCATION ALSO SHOWN AS STREET VIEW IMAGERY</strong></p></figcaption></figure>

Spot provides an interface for searching OpenStreetMap[^1] using everyday language as input (multiple languages are supported in addition to English, but not specified by the Tool authors).

<details>

<summary><a href="https://www.openstreetmap.org/about">OpenStreetMap</a> (OSM) labels a very large number of both natural and man-made features, e.g. buildings, infrastructure, bodies of water. <em>Click the arrow for more on OSM</em>...</summary>

These features are labelled according to [OSM's own detailed classification system](https://wiki.openstreetmap.org/wiki/Map_features), e.g. town hall, lake, pylon, railway, ... and they can be used as search terms to express users' search criteria.&#x20;

</details>

Spot is one amongst [a range of OSM search](#user-content-fn-2)[^2] tools which exists to allow users to query OpenStreetMap.&#x20;

<mark style="color:$primary;">**Query-Building Methods:**</mark> These tools all run a search of OpenStreetMap in the same way, but they use different methods to build the user's search query:&#x20;

* some involve writing the query in a formal language&#x20;
* some use a graphical interface to build the query.&#x20;
* Spot is characterised by the use of [natural language](#user-content-fn-3)[^3] to express the users' search query, and this is a relatively new approach.&#x20;

<mark style="color:$primary;">**Location Descriptors:**</mark> The Spot user can describe a location search in terms of :

1. groupings of OSM map features, e.g. a pharmacy AND[^4] a traffic light
2. their relative distance from one another, e.g. within 70m of one another
3. the location of a geographical search area, e.g. in Cologne

e.g. Enter "_**Find a pharmacy and a traffic light and a bus stop and a bridge within 70m in Cologne**_" and, in response, Spot will return a map showing those candidate groups of features whenever they meet the user's distance criteria within the given geographical search area.&#x20;

<mark style="color:$primary;">**A common OSINV use case**</mark> involves the user describing an image or video frame which they want to geolocate, and using Spot to generate and visually inspect potential solution locations around a particular geographic region like a named city.&#x20;

### What Spot Does

Spot works in 4 stages, from natural language input to streetview comparison of outputs.&#x20;

{% stepper %}
{% step %}
### Natural Language Query Input

Spot takes natural language prompts as input from the user, i.e. sentences written in everyday language, and converts these sentences into query language code with a formal structure (which is displayed to the user in a separate box in the interface) called [Overpass Query Language](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL).

![](<.gitbook/assets/image (6) (1).png>)![](<.gitbook/assets/image (8) (1).png>)
{% endstep %}

{% step %}
### Run Overpass Query on the OpenStreetMap Database

Spot uses the query  language code to perform a search of OpenStreetMap (by building an Overpass query and running it with the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API)).

{% hint style="success" %}
This stage of the Spot service uses exactly the same process as the other OSM search tools.
{% endhint %}
{% endstep %}

{% step %}
### Display All Solution Features on A Map

Spot displays all the features which satisfy the user's input search on a map.&#x20;

{% hint style="warning" %}
Spot does not sort and group features which relate to different candidate location solutions, so if there is more than one potential solution (which is often the case):

* &#x20;the existence of multiple candidate location solutions may not be apparent to the user
* the number of candidate location solutions may well not to be apparent to the user
* which discovered features belong to which propsed candidate locations may not be to discernible to the user
{% endhint %}

<figure><img src=".gitbook/assets/Spot Paris ex 5 CROP.jpg" alt=""><figcaption></figcaption></figure>


{% endstep %}

{% step %}
### Offer A Choice of Streetview Options for Each Solution Feature

For each feature marked on the output map, Spot offers the user the option to open the location in any one of the largest three mapping services ([Google](https://app.gitbook.com/u/ViCSKrNRRpZOOjQVlfLHkPMJAqw1), [Yandex](https://bellingcat.gitbook.io/toolkit/more/all-tools/yandex-maps), and [Bing](https://bellingcat.gitbook.io/toolkit/more/all-tools/bing-maps)) and additionally provides the option directly to view Google's [street view](#user-content-fn-5)[^5] information (mainly user-supplied ground-levelphotography) on the location which is invaluable for geolocation purposes.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}

***

{% hint style="warning" %}
**USE OF 'AI' TECHNOLOGY IN SPOT IS LIMITED TO CONVERTING THE LANGUAGE OF THE SEARCH QUERY, I.E. STAGE 1 ONLY**

* **Limited AI Used:** Spot's use of AI is limited to conversion of the user's natural language search into the formal Overpass Query Language which can be used to query OpenStreetMap. This conversion is done using a [Large Language Model](https://en.wikipedia.org/wiki/Large_language_model) or LLM. The Overpass query is run by Spot via the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) in exactly the same way as all the other OSM interface tools.&#x20;
* **Search Is Not Using AI:** The quality and speed of the search is not impacted by the Large Language Model AI technology in Spot.&#x20;
* **AI Uses Most of the Search Time:** N.B. Tests run by these authors on city searches in August 2025 suggest that well over 50% of the time Spot takes to complete a search is used to run the Natural Language to Overpass Query Language conversion, NOT the Overpass query of OpenStreetMap itself.&#x20;
{% endhint %}

## The Interface

{% columns %}
{% column %}
Spot's landing page includes a modal window (a pop-up) where example queries are continuously typed out word by word to guide the user on what their input should look like.
{% endcolumn %}

{% column %}
<figure><img src=".gitbook/assets/https___files.gitbook.com_v0_b_gitbook-x-prod.appspot.com_o_spaces_2FecVZbBL9rgIln2kIW8Z8_2Fuploads_2F5pwxT2xJdDjsccHt8Hld_2FAnimated_20aut-query.avif" alt="" width="188"><figcaption></figcaption></figure>
{% endcolumn %}
{% endcolumns %}

The Spot interface uses text boxes for input data, set over a background map for result display, and an additional Street View pop up window.

<figure><img src=".gitbook/assets/SPOTINTERFACE.jpg" alt=""><figcaption></figcaption></figure>

<details>

<summary>The  “Search Parameters” box can be explanded to show more detail of location, entities, and the relationship between them, including the distance... (<em>Click here to see more on Search Parameters...)</em></summary>

Here, you can edit the OSM tags assigned to each feature. OSM tags define features of map [elements](https://taginfo.openstreetmap.org/about) which “add meaning to geographic objects.”&#x20;

According to the TagInfo site for OSM tags, “there is no fixed list of those tags. New tags can be invented and used as needed. Everybody can come up with a new tag and add it to new or existing objects.”

A tag is made of two [items](https://wiki.openstreetmap.org/wiki/Tags): a key and a value. A key describes the category or type of feature. A [value](https://wiki.openstreetmap.org/wiki/Tags#Keys_and_values) “provides detail for the key-specified feature." For example, an OSM key, “waterway”, can have multiple values that define this key. Some of them include a stream, ditch, river, drain, canal, and dam, among others. These can be adjusted depending on the needs of the search.

This feature is similar to [Bellingcat’s OpenStreetMap](https://bellingcat.gitbook.io/toolkit/more/all-tools/openstreetmap-search-tool) search tool, which uses a custom setting for adding features, enabling adjustments via the OSM key and value.

</details>

<figure><img src=".gitbook/assets/SpotSearchParameters (1).JPG" alt="" width="322"><figcaption></figcaption></figure>

To confirm which result matches our required location, one must sift through all the available possibilities on the map.&#x20;

### Data Input, Output and Formats

{% tabs %}
{% tab title="INPUT DATA" %}
Natural language description of a location to be found - includes entities at the location, their relative proximity and the geographic search area.

OR

Overpass Turbo query search parameters - references entities with the appropriate OSM tags, describes their relative proximity with distances and provides the geographic search area.&#x20;
{% endtab %}

{% tab title="SPOT OUTPUT DATA" %}
Location map marking all features in candidate solutions which satisfy the search criteria, but not marking those groups individually, giving the number of candidate solutions for the search, or providing an approximate location for viewpoints which could include them all.
{% endtab %}

{% tab title="USE CASES" %}
* Geolocation of photograph/video imagery
* Determination of the purpose, nature or further details of an entity seen in an image at a known location, e.g. the tall building is a place of worship.
{% endtab %}

{% tab title="DATA INPUT OPTIONS" %}
Enter a natural language sentence in the search box

OR

Use the search parameters box to adjust existing search features and their relative distances via a part text, part graphic subwindow.
{% endtab %}
{% endtabs %}

### Spot’s Output Result Map&#x20;

To use Spot for geolocation and understand how to use its interface, we used this image of a church posted on Instagram. The caption, “London Summer Fragments Day #1”, indicates that the photo was taken somewhere in London. However, in OSINV, finding the exact location is paramount, as accuracy is crucial.

<figure><img src=".gitbook/assets/Blurred Insta users.png" alt="" width="188"><figcaption><p><strong>INSTAGRAM POST USED FOR SPOT GEOLOCATION EXERCISE</strong></p></figcaption></figure>

The visual clues in the image provide an opportunity to locate the exact area using Spot. In this particular case, tall buildings that are 10 stories or more also appear behind the church. More importantly, a water body with fountains side by side is also visible in the image. One can also roughly estimate the distance as the features in the image seem to be close to each other.

Taking these features into account, a query for Spot can be constructed that reads: “Find a church within 100m of a building with 10 stories or more and water in the City of London.”  The interface displays all possible solutions, which looks like this:

<figure><img src=".gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

The red blobs on the map legend represent churches, blue indicates water, and yellow signifies buildings with 10 or more stories. There are 3 different churches returned by Spot which meet the criteria.

To explore a specific result, use the slider to zoom in on the result of your choice. Clicking on a specific feature from one of the results shows its details, including a link to its OSM ID. This link opens a new tab to its location on the OpenStreetMap website, where you can find this entity and explore further. In this case, clicking on the church (higlighted in red) indicates that it's called "St-Giles-without-Cripplegate", its “denomination” is “Anglican” and was “rebuilt” in “1906.” Click on the OSM ID link for more details.

<figure><img src=".gitbook/assets/Screenshot 2025-08-31 at 15.15.05.png" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/StGilesCripplegatecrop (1).jpg" alt=""><figcaption></figcaption></figure>

The exact location where the entity is situated can also be opened in the integrated mapping services like Google Maps, Bing, and Yandex. This ensures location verification through multiple mapping services in one place, thus saving time and allowing for greater flexibility. Here, opening the location for church in Google Maps reveals it's located at coordinates [51.5187148,-0.0963922](https://www.google.com/maps/place/@51.5187148,-0.0963922,543m/data=!3m1!1e3!4m6!1m5!3m4!2zNTHCsDMxJzA3LjQiTiAwwrAwNSczNy43Ilc!8m2!3d51.5187222!4d-0.0938056?entry=ttu\&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D).

Use the integrated Google Street View for location verification. Clicking on any blob on the map allows to view the street-level photography of the church's location. On Spot, select one of the points highlighting water from this area, and then open the Google Street view. Exploring the location through street view confirms that this location matches the one in the photo from Instagram above as shown here:

<figure><img src=".gitbook/assets/Screenshot 2025-08-31 at 15.24.35.png" alt=""><figcaption></figcaption></figure>

Users can also switch between map layers that include “[vector map](#user-content-fn-6)[^6]”, “[hybrid view](#user-content-fn-7)[^7]” and “[OSM Style Map](#user-content-fn-8)[^8]”. The screenshot below shows a location from search results in the hybrid view and the Google Street View tab showing street-level photography of the selected result.

<figure><img src=".gitbook/assets/hybrid view .png" alt=""><figcaption></figcaption></figure>

### Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Only sign up is required to use the tool.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Any web browser and a sign-up through GitHub or Google are required to use the tool.

## Limitations

{% hint style="info" %}
All tools which query OpenStreetMap share the limitations which the structure of the OpenStreetMap tagging scheme imposes. Knowledge of the relationship between different but connected tagging categories is needed to perform efficient searches where one tag is deemed to be a subset of another, e.g. if the stream tag is a subset of river tag, if the river tag is a subset of the water tag. Searching with the tag 'stream' will return a smaller set of results than 'river', and likewise 'river' will return a smaller set of results than 'water'. Knowing which tag to use for a search affects the number and quality of search results returned, and therefore the speed of the overall search.
{% endhint %}

1. The format of Spot's output is imprecise relative to other tools which clearly group the features supporting each different solution location proposed in response to the user's query. Spot puts all the features supporting each solution location onto the same output map, without counting the number of different solution locations and indicating the supporting features for each one. So Spot does **not** answer the question "How many different locations satisfy my criteria in the given search area? "
2. Spot's valuable integrated street view access operates at the location of each feature on the solution map. Given that usually all the features mentioned in a query will be visible in the source image which is being geolocated, the view **at** a feature location is not likely to be a match. e.g. street view imagery taken at the central co-ordinates of the Eiffel Tower is unlikely to include images where the Eiffel Tower is clearly visible.
3. When we tested the tool, Spot sometimes gave us errors (as at testing on 31/8/25). These are some of the different errors we came across:

<div><figure><img src=".gitbook/assets/Cologne system hickup.png" alt="" width="563"><figcaption></figcaption></figure> <figure><img src=".gitbook/assets/geometry2025-07-05 at 22.04.20.png" alt=""><figcaption></figcaption></figure> <figure><img src=".gitbook/assets/London Unknown error copy.png" alt=""><figcaption></figcaption></figure></div>

&#x20; &#x20;



4. Complex queries can return no results so users should simplify their search criteria as far as possible.
5. The tool exhibits strange behaviour at the time of writing in August 2025. Sometimes results may not meet the search criteria.
6. Some queries may take time to get results. This is because search time increases with the size of the search area, the number of search terms involved and the complexity of the logical combinations of search terms used in the query.
7. Spot is based on crowdsourced OpenStreet Map Data. Anything not found in OSM’s database will not be returned in results (but this does not mean that other results do not exist, they might just not have been added to OSM).&#x20;
8. Results may not always be accurate and should be double-checked against other mapping tools like Google Maps, Yandex Maps, Bing Maps, including street-view photography.&#x20;

## **Ethical Considerations**

1. Since the tool uses OpenStreetMap data, which is crowdsourced, users should always cross-check and confirm the results using other mapping services like Google, Yandex, Bing, etc., and street-level photography.
2. Spot’s Trusted AI principles page states that “The user prompts that are entered in the Spot application are being used to re-train the model on real user queries to improve the user relevance of the AI model.” Furthermore, the same page says, “User control -- no publicly anonymous available access but certain monitoring of users will be done via login functionality.” Therefore, entering any information in the query or users’ login credentials may potentially end up revealing information about the individual or the investigation to the SPOT team.
3. In their Legal & Privacy Statement, the tool provider says that the data collected is usually kept for 30 days, after which it is deleted. However, it also reiterates that “under exceptional circumstances, we need them for a longer period for the above-mentioned purposes. In such a case, we erase the data as soon as they're no longer required.”
4. Spot also uses third-party services like [Nominatim](https://nominatim.org/), [Maptiler](https://www.maptiler.com/), [Mapbox](https://www.mapbox.com/), [Versatiles](https://versatiles.org/), [OSM Tiles](https://openmaptiles.org/), [Google Street View](https://www.google.com/streetview/) and [MongoDB](https://www.mongodb.com/) to make the application work when a user enters a search prompt. Make sure to check their Legal & Privacy Statement to understand how the data is processed.

## Guides and articles

Spot offers a introductory tutorial on how to use the tool on its website:

{% embed url="https://www.youtube.com/watch?t=10s&v=vwsfaiy_5ck" fullWidth="false" %}

There is also a more detailed video on Prompting:

{% embed url="https://www.youtube.com/watch?v=wfLSdDrWMC4" %}

And a video on viewing and interpreting Spot results:

{% embed url="https://www.youtube.com/watch?v=RMRumWNf298" %}

## Similar Tools

* [Bellingcat OpenStreetMap Search](https://bellingcat.gitbook.io/toolkit/more/all-tools/openstreetmap-search-tool)
* [Overpass Turbo](https://bellingcat.gitbook.io/toolkit/more/all-tools/overpass-turbo)

## Tool provider

The tool was developed by [DW Innovation](https://innovation.dw.com/about), Germany.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool uses cookieless tracking.&#x20;
* [ ] This tool does not appear to use tracking cookies.

The tool uses “cookieless tracking”. Although the “tracking” feature can be disabled on the “Legal & Privacy Statement” page, may want to consider taking precautions, such as using VPNs and browser extensions, to block tracking and prevent the potential revealing of their location.

| Page maintainer                                                       |
| --------------------------------------------------------------------- |
| Anisa Shabir 5:00 pm PKT and Sophie Tedling (Sophie 2 10 25 11:45 UK) |
|                                                                       |

[^1]: [Open Street Map](https://app.gitbook.com/o/WQpOq5ZFue4N6m65QCJq/s/TSRCKcxTTIGI6g9ZTkHy/) is a free, open map database of the world, which is updated and maintained by a community of volunteer contributors.

[^2]: e.g. Overpass Turbo, Bellingcat OSM Search, GeoGuessr GPT, GeoSpy, EarthKit,...

[^3]: i.e. human conversational language

[^4]: AND is a [logical operator](https://www.w3schools.com/programming/prog_operators_logical.php) here, like OR.

[^5]: Street view photographs are taken at ground level (as opposed to satellite view imagery, taken from above), giving a view of what a human would see at a location by looking around.

[^6]: “Vector maps are two-dimensional maps that use geometrical shapes such as points, lines, and polygons to represent geographical features,” according to LocationIQ’s [website](https://blog.locationiq.com/vector-or-raster-maps-which-one-is-best-for-you/).&#x20;

[^7]: A Hybrid Map displays the map interface combining both satellite and vector maps.

[^8]: An OSM-style map, as the name suggests, displays the interface in OpenStreetMap view format.
