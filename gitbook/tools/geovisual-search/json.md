---
description: This is the JSON codeblock for this tool
---

# JSON

{% code overflow="wrap" %}
```json
{
  "draft": true,
  "name": "GeoVisual Search",
  "url": "http://search.descarteslabs.com/?layer=naip\\_v2\\_rgb\\_2014-2015#lat=39.2322531\\&lng=-100.8544921\\&skipTut=true\\&zoom=5",
  "description": "Search engine that lets users visually query images for similar geographic features. The platform from Descartes Labs is built on satellite imagery from Landsat, the National Agriculture Imagery Program (NAIP), and PlanetScope.",
  "cost": "Free",
  "details": "[Guide](https://medium.com/descarteslabs-team/searching-the-world-wide-world-357828cf479a)",
  "tags": [
    "maps-and-satellites",
    "reverse-image-search",
    "geolocation",
    "satellite-imagery"
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

