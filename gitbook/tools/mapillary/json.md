---
description: This is the JSON codeblock for this tool
---

# JSON

{% code overflow="wrap" %}
```json
{
  "name": "Mapillary",
  "description": "Mapillary is a crowdsourced street-level imagery platform with up-to-date visual data for investigative journalism, event coverage, and fact-checking.",
  "url": "https://www.mapillary.com/",
  "tags": [
    "free",
    "international",
    "streetview",
    "maps",
    "environment",
    "geospatial-information",
    "geospatial",
    "geographic-data-analysis",
    "spatial-analysis",
    "amenities",
    "road-networks",
    "traffic-signs",
    "streetlights",
    "rubbish-bins",
    "CCTV",
    "crowdsourced-mapping",
    "crowdsourced",
    "data-collection",
    "machine-learning",
    "photo-mapping",
    "osm",
    "open-street-map-integration",
    "open-street-map"
  ]
}
```
{% endcode %}

Keep the codeblock updated with accurate information. Only edit the **values** (words to the right of the `:` on each line, in dark blue font). Do not change the key names (left side, slightly light blue) or any of the other formatting. Every line should end in a comma except the last line. Every key and value should be enclosed in quotation marks. See below for an explanation of each line.&#x20;

## name, description (optional)

If omitted, the name and description will be copied from the page title and page description of the main content. If present, the JSON values override the main content.

## draft (optional)

If set to `true`, this prevents this tool from being listed in relevant category pages. Useful if the tool does not yet have a url and description set. Omit or set to false to publish.

## url

A hyperlink directly to the tool, for quick-access from the category page. Be sure to use the secure (http**S**) version if possible.

## tags

This list of tags will determine which category pages the tool appears on. Tags should be lowercase with dashes between words and no spaces: e.g., "facial-recognition". Seperate tags with a comma `,`.

If a tool is completely free to use, include the tag "free".

If the tool is focused on one specific country (or a limited number of them), tag it with the name of the country as well as "international".

