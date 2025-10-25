# Reusable Source Material

<details>

<summary>Spot works in 4 stages, from natural language input to streetview comparison of outputs. <em>Click for more on the 4 stages...</em></summary>

1. Spot takes natural language prompts as input from the user, i.e. sentences written in everyday language, and converts these sentences into query language  code with a formal structure (which isdisplayed to the user in a separate box in the interface) called [Overpass Query Language](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL).
2. Spot  uses the query  language code to perform a search of OpenStreetMap (by building an Overpass query).
3. Spot displays all the features which satisfy the user's input search on a map. It does not sort features which relate to different candidate location solutions, so if there is more than one potential solution,&#x20;

1) For each feature marked on the output map, Spot offers the user the option to open a [street view](#user-content-fn-1)[^1] window within the tool, using data from a choice of three of the largest providers of street view photography (Google, Yandex, and Bing).

</details>

**USE OF 'AI' TECHNOLOGY IN SPOT IS LIMITED TO STAGE 1 ONLY, I.E. LANGUAGE CONVERSION OF TH**

\[Need Venn diagram or a hierarchy demonstrating tool to show the issues of categorization, e.g. we want all military bases. If the system has categorized police buildings separately, we will need to search for those separately: they will not be returned within a military bases search. If the system has a hierarchy within which police buildings are a subset of military bases, then police buildings will be returned in a military bases search. This is an important point about categorisations. It is a generic issue, not specific to Spot]

{% embed url="https://docs.google.com/presentation/d/1VdYgTcq0P77UH44QVfEEWExu5bAzhtscxkCfDOkyfMs/edit?usp=sharing" %}

### https://docs.google.com/presentation/d/1VdYgTcq0P77UH44QVfEEWExu5bAzhtscxkCfDOkyfMs/edit?usp=sharing <a href="#react-aria6249617902-r1rkh" id="react-aria6249617902-r1rkh"></a>

docs.google.com

​[Test slides](https://docs.google.com/presentation/d/1VdYgTcq0P77UH44QVfEEWExu5bAzhtscxkCfDOkyfMs/edit?usp=sharing)

***

<figure><img src=".gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

<details>

<summary>Search Parameters</summary>

Here, you can edit the OSM tags assigned to each feature. OSM tags define features of map [elements](https://wiki.openstreetmap.org/wiki/Tags) which “add meaning to geographic objects.”&#x20;

According to the TagInfo site for OSM tags, “there is no fixed list of those tags. New tags can be invented and used as needed. Everybody can come up with a new tag and add it to new or existing objects.”

A tag is made of two [items](https://wiki.openstreetmap.org/wiki/Tags): a key and a value. A key describes the category or type of feature. A [value](https://wiki.openstreetmap.org/wiki/Tags) “provides detail for the key-specified feature." For example, an OSM key, “waterway”, can have multiple values that define this key. Some of them include a stream, ditch, river, drain, canal, and dam, among others. These can be adjusted depending on the needs of the search.

This feature is similar to [Bellingcat’s OpenStreetMap](https://osm-search.bellingcat.com/) search tool, which uses a custom setting for adding features, enabling adjustments via the OSM key and value.

</details>

After conducting a search, you can always adjust the Search Parameters to refine criteria and update results.

Spot displays the results on an interactive map. These are potential location solutions from the search appearing on the map simultaneously.&#x20;

Search features are highlighted in different colours, and users can select or deselect the ones they want to see on the interface through the “Map Legend” at the bottom left, or just make them flash momentarily by hovring the mouse over the Map Legend. The slider on the right allows you to zoom in on a single location or zoom out to view all results.

To confirm which result matches our required location, one must sift through all the available possibilities on the map.&#x20;

The exact location where the entity is situated can also be viewed in integrated mapping services, such as [Google Maps](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps), [Bing](https://app.gitbook.com/u/ViCSKrNRRpZOOjQVlfLHkPMJAqw1), and [Yandex](https://bellingcat.gitbook.io/toolkit/more/all-tools/yandex-maps). This ensures location verification through multiple mapping services in one place, thus saving time and allowing for greater flexibility.

Spot has also integrated [Google Street View](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps#street-view) for location verification. Clicking on “Open Google Street View” opens a window displaying the location's street-level photography. Use this feature to match entities and features against the photo or video being geolocated.

## The Interface

The first thing a user sees when they visit the Spot website is a modal window (a pop-up). This box includes a search box, where an example query is typed out word by word and then disappears automatically. “Find me a tram stop next to a park within 150 meters of a traffic light and a parking garage in Prague,” says the animated auto-query. This demonstrates how to phrase a search for the tool to understand. Text for the search prompt can be entered here or performed after closing this window.

<figure><img src=".gitbook/assets/Animated aut-query.png" alt="" width="188"><figcaption></figcaption></figure>

In the top left corner, a query can be entered into the search box. This is the first step, also explained in the description above, where Spot takes the input as natural language prompts.

<figure><img src=".gitbook/assets/Search parameters.png" alt=""><figcaption></figcaption></figure>

Just below the search bar is an expandable “Search Parameters” box, where the location, entities, and the relationship between them —specifically, how far apart they are from each other— can be viewed. Entities are features labelled according to OpenStreetMap’s own classification system.&#x20;

<details>

<summary>Here, you can edit the OSM tags assigned to each feature. OSM tags define features of map <a href="https://wiki.openstreetmap.org/wiki/Tags">elements</a> which “add meaning to geographic objects.” </summary>

According to the TagInfo site for OSM tags, “there is no fixed list of those tags. New tags can be invented and used as needed. Everybody can come up with a new tag and add it to new or existing objects.”

A tag is made of two [items](https://wiki.openstreetmap.org/wiki/Tags): a key and a value. A key describes the category or type of feature. A [value](https://wiki.openstreetmap.org/wiki/Tags) “provides detail for the key-specified feature." For example, an OSM key, “waterway”, can have multiple values that define this key. Some of them include a stream, ditch, river, drain, canal, and dam, among others. These can be adjusted depending on the needs of the search.

This feature is similar to [Bellingcat’s OpenStreetMap](https://osm-search.bellingcat.com/) search tool, which uses a custom setting for adding features, enabling adjustments via the OSM key and value.

</details>



After conducting a search, you can always adjust the Search Parameters to refine criteria and update results.

Spot displays the results on an interactive map. These are potential location solutions from the search appearing on the map simultaneously.&#x20;

Search features are highlighted in different colours, and users can select or deselect the ones they want to see on the interface through the “Map Legend” at the bottom left, or just make them flash momentarily by hovring the mouse over the Map Legend. The slider on the right allows you to zoom in on a single location or zoom out to view all results.

To confirm which result matches our required location, one must sift through all the available possibilities on the map.&#x20;

The exact location where the entity is situated can also be viewed in integrated mapping services, such as [Google Maps](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps), [Bing](https://app.gitbook.com/u/ViCSKrNRRpZOOjQVlfLHkPMJAqw1), and [Yandex](https://bellingcat.gitbook.io/toolkit/more/all-tools/yandex-maps). This ensures location verification through multiple mapping services in one place, thus saving time and allowing for greater flexibility.

Spot has also integrated [Google Street View](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps#street-view) for location verification. Clicking on “Open Google Street View” opens a window displaying the location's street-level photography. Use this feature to match entities and features against the photo or video being geolocated.

***

1

#### &#x20;<a href="#natural-language-query-input" id="natural-language-query-input"></a>

#### Natural Language Query Input <a href="#natural-language-query-input" id="natural-language-query-input"></a>

Spot takes natural language prompts as input from the user, i.e. sentences written in everyday language, and converts these sentences into query language code with a formal structure (which is displayed to the user in a separate box in the interface) called [Overpass Query Language](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL).​​​2

#### &#x20;<a href="#run-overpass-query-on-the-openstreetmap-database" id="run-overpass-query-on-the-openstreetmap-database"></a>

#### Run Overpass Query on the OpenStreetMap Database <a href="#run-overpass-query-on-the-openstreetmap-database" id="run-overpass-query-on-the-openstreetmap-database"></a>

Spot uses the query language code to perform a search of OpenStreetMap (by building an Overpass query and running it with the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API)).This stage of the Spot service uses exactly the same process as the other OSM search tools.3

#### &#x20;<a href="#display-all-solution-features-on-a-map" id="display-all-solution-features-on-a-map"></a>

#### Display All Solution Features on A Map <a href="#display-all-solution-features-on-a-map" id="display-all-solution-features-on-a-map"></a>

Spot displays all the features which satisfy the user's input search on a map.Spot does not sort and group features which relate to different candidate location solutions, so if there is more than one potential solution (which is often the case):

*
* the existence of multiple candidate location solutions may not be apparent to the user
*
* the number of candidate location solutions may well not to be apparent to the user
*
* which discovered features belong to which propsed candidate locations may not be to discernible to the user

4

#### &#x20;<a href="#offer-a-choice-of-streetview-options-for-each-solution-feature" id="offer-a-choice-of-streetview-options-for-each-solution-feature"></a>

#### Offer A Choice of Streetview Options for Each Solution Feature <a href="#offer-a-choice-of-streetview-options-for-each-solution-feature" id="offer-a-choice-of-streetview-options-for-each-solution-feature"></a>

For each feature marked on the output map, Spot offers the user the option to open the location in any one of the largest three mapping services (Google, [Yandex](https://bellingcat.gitbook.io/toolkit/more/all-tools/yandex-maps), and [Bing](https://bellingcat.gitbook.io/toolkit/more/all-tools/bing-maps)) and additionally provides the option directly to view Google's street view information (mainly user-supplied ground-levelphotography) on the location which is invaluable for geolocation purposes.

### Spot’s Output Result Map&#x20;

To use Spot for geolocation and understand how to use its interface, we used this image of a church posted on Instagram. The caption, “London Summer Fragments Day #1”, indicates that the photo was taken somewhere in London. However, in OSINV, finding the exact location is paramount, as accuracy is crucial.

<figure><img src=".gitbook/assets/Blurred Insta users.png" alt="" width="375"><figcaption><p><strong>INSTAGRAM POST USED FOR SPOT GEOLOCATION EXERCISE</strong></p></figcaption></figure>

[^1]: Street view photographs are taken at ground level (as opposed to satellite view imagery, taken from above), giving a view of what a human would see at a location by looking around.
