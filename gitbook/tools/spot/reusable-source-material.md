# Reusable Source Material

<details>

<summary>Spot works in 4 stages, from natural language input to streetview comparison of outputs. <em>Click for more on the 4 stages...</em></summary>

1. Spot takes natural language prompts as input from the user, i.e. sentences written in everyday language, and converts these sentences into query language  code with a formal structure (which isdisplayed to the user in a separate box in the interface) called [Overpass Query Language](https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL).
2. Spot  uses the query  language code to perform a search of OpenStreetMap (by building an Overpass query).
3. Spot displays all the features which satisfy the user's input search on a map. It does not sort features which relate to different candidate location solutions, so if there is more than one potential solution,&#x20;

1) For each feature marked on the output map, Spot offers the user the option to open a [street view](#user-content-fn-1)[^1] window within the tool, using data from a choice of three of the largest providers of street view photography (Google, Yandex, and Bing).

</details>

[^1]: Street view photographs are taken at ground level (as opposed to satellite view imagery, taken from above), giving a view of what a human would see at a location by looking around.
