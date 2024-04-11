---
description: This is the JSON codeblock for this tool
---

# JSON

{% code overflow="wrap" %}
```json
{
  "name": "Tiger Trade (EIA)",
  "url": "https://tomaszjohnson.carto.com/builder/72829b4c-b009-4e4a-8001-148ca848dcd7/embed?state=%7B%22map%22%3A%7B%22ne%22%3A%5B0.9667509997666425%2C2.3730468750000004%5D%2C%22sw%22%3A%5B64.20637724320852%2C164.79492187500003%5D%2C%22center%22%3A%5B39.232253141714914%2C83.58398437500001%5D%2C%22zoom%22%3A4%7D%7D",
  "description": "Trade in tiger (parts) mapped",
  "cost": "Free",
  "details": "🐯",
  "tags": [
    "environment-and-wildlife"
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

