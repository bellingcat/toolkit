---
description: A browser extension to reverse search an image on multiple search engines.
---

# Search by Image

## URL

[Github](https://github.com/dessant/search-by-image) | [Firefox](https://addons.mozilla.org/firefox/addon/search_by_image/) | [Chrome](https://chrome.google.com/webstore/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci) | [Edge](https://microsoftedge.microsoft.com/addons/detail/search-by-image/hckehkfhdkpmdlonmjaagiodlpjbonmc) | [Safari](https://apps.apple.com/us/app/search-by-image-for-safari/id1544552106?platform=mac) | [Opera](https://addons.opera.com/extensions/details/search-by-image/)

## Description

**Search by Image** is a browser extension that enables reverse image searching on multiple search engines, including Google Lens, Bing, Yandex, and TinEye. It allows users to reverse search an image directly from the contextual menu (right-clicking on the image) or from the toolbar.

After selecting an engine, the tool opens a new tab with the search results. Users can also search across all supported engines simultaneously, opening multiple tabs for broader results.

This tool is designed to support journalists, investigators, and fact-checkers in verifying image origins, finding higher resolutions, and locating similar images across the web.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Reverse searching an image from the contextual menu</p></figcaption></figure>

### Features

* **Support for** [**41 search engines and image services**](https://github.com/dessant/search-by-image/wiki/Search-engines) in addition to the default options. You can toggle and re-order them in the extension’s settings.
* **Multiple ways to reverse search an image**:
  * **Select URL (default mode):** Queries the selected engine using the image URL.
  * **Select Image:** Uploads the image to the selected engine: this is useful when reverse searching images from sites where contextual menu is disabled (Pinterest) or where images cannot be accessed by their URL (Instagram).
  * **Capture:** Allows you to capture and search a specific area of an image/the web page.
  * **Browse:** Enables you to upload an image from your local files (supports copy/paste).
  * **URL:** Allows you to paste a URL for querying.

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>Use the Capture Mode to select an area to reverse search</p></figcaption></figure>

**Note:** By default, tabs open as active. You can adjust this setting in the options to open a tab in the foreground instead.

### Mechanics

**Search by Image** detects images by parsing the entire web page, identifying images embedded in various ways (like canvas, CSS, or object elements) rather than relying solely on `<img>` tags. This approach ensures compatibility across diverse websites, capturing images regardless of how they’re embedded. Read [this post](https://github.com/dessant/search-by-image/wiki/Why-is-the-extension-always-visible-in-the-context-menu%3F) for more details.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The tool is free and open-source.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

Most search engines need Javascript to be enabled.

## Limitations

Even though the extension seems to be actively maintained, certain events—such as browser updates, engine inaccessibility, or changes in how an engine processes image queries—may require updates to the extension.

## Ethical Considerations

Make sure you have the right to use the selected search engines in your location.

Be aware that some search engines may retain data on images that are queried. This could include image URLs or metadata, which may raise privacy concerns if sensitive images are searched.

Engaging in doxxing, harassment, or sharing explicit content without consent is illegal and carries serious consequences under many jurisdictions' laws.

## Guides and articles

[This guide](https://www.bellingcat.com/resources/how-tos/2019/12/26/guide-to-using-reverse-image-search-for-investigations/) does not use this specific extension but explains how to use reverse image searches in investigations.

## Tool provider

Armin Sebastian ([@dessant on GitHub](https://github.com/dessant)) is a developer specializing in open source browser extensions that enhance user experience and accessibility.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

Extension does not use tracking cookies but most of the search engines do. For your privacy, make sure to check the search engines' privacy policies.

Read the extension's [privacy policy](https://github.com/dessant/search-by-image/wiki/Privacy-policy) here.

| Page maintainer |
| --------------- |
| f0rked          |
