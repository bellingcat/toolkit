---
description: A Firefox add-on for extracting EXIF metadata by right-clicking an image.
---

# xIFr

## URL

[https://addons.mozilla.org/en-US/firefox/addon/xifr/](https://addons.mozilla.org/en-US/firefox/addon/xifr/) | [https://github.com/StigNygaard/xIFr](https://github.com/StigNygaard/xIFr)

## Description

xIFr is a Firefox extension designed to extract and display EXIF, IPTC, and XMP metadata from an image. This metadata can provide valuable insights on camera settings, timestamps, location (GPS data), copyright information, and editing history. If available, metadata can be useful for verifying the authenticity of images, understanding their origins, and analyzing their context.

xIFr comes with a "Deep Search" feature that allows you to access metadata from images embedded in layers, set as backgrounds, or otherwise blurred or obscured.&#x20;

Geotagged images can be viewed on OpenStreetMap, [Google Maps](https://bellingcat.gitbook.io/toolkit/more/all-tools/google-maps), [Bing Maps](https://bellingcat.gitbook.io/toolkit/more/all-tools/bing-maps), and [Flickr (explore nearby photos)](https://www.flickr.com/map?).

**EXIF, IPTC and XMP**

Digital images are enriched with metadata that provides both technical details and contextual information, primarily through standards such as EXIF, IPTC, and XMP.

* [**EXIF (Exchangeable Image File Format)**](https://en.wikipedia.org/wiki/Exif)**:** A metadata standard that records technical details about an image. Primarily designed for digital photos, it includes information such as the **camera model**, **exposure settings** (aperture, shutter speed, ISO), and may also capture **GPS coordinates** if available, providing insight into the conditions under which the photo was taken.
* [**IPTC (International Press Telecommunications Council)**](https://en.wikipedia.org/wiki/IPTC_Information_Interchange_Model)**:** A standardized set of fields designed primarily for news and media applications. It embeds descriptive information into images and other media files—such as **captions**, **keywords**, **headlines**, and **credit lines**—to provide context, attribution, and other details.
* [**XMP (Extensible Metadata Platform)**](https://en.wikipedia.org/wiki/Extensible_Metadata_Platform)**:** XMP is an Adobe-developed metadata format designed to embed information about a media file's editing history, licensing, and other descriptive details. Newer versions of EXIF and IPTC metadata standards incorporate XMP, and it's widely supported by other software as well. While it's often used for images, it may also be used for other file types such as PDFs or videos.

Both EXIF and IPTC serve to store metadata, but they were developed with different priorities in mind. Consequently, some metadata fields can overlap. For example, both can record the date and time the photo was taken or include location information. In such cases, the data might appear in both the EXIF and IPTC sections, ensuring that the relevant information is available to various applications and workflows.

This might apply to other proprietary metadata formats as well.

## How to Use

_For this guide, we'll use a photo taken by the tool developer himself as an example. The photo can be found in his guide_ [_here_](https://www.rockland.dk/xIFr/start/)_._

Right click an image and select "View EXIF data" next to the icon with a camera and a hint bubble:

<figure><img src=".gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Viewing EXIF Data can be done via the context menu</p></figcaption></figure>

A popup will open with two tabs: Image data and Map.

#### Image Data Tab

This first tab lists all metadata fields present in the image, although images found on the web may not include every field.

<figure><img src=".gitbook/assets/FireShot Capture 018 - xIFr - Image meta data - .png" alt=""><figcaption><p>Metadata of a photo taken by Stig Nygaard, the tool developer, not very far from the <em>Mont Saint-Michel Tower</em> in <em>Brittany, France</em>.</p></figcaption></figure>

Information in the example can be classified as follows:

* **File & Basic Information:** Contains details like `File Name`, `Content-Type`, `Size`, `Last Modified`, and `Dimensions`, these fields are "file-specific" and not actual metadata.
* **Descriptive Content:** Includes `Title`, `Description`, and `Keywords` for context, along with the EXIF `Date`, which shows when the photo was actually taken (distinct from the file's creation or modification date).
* **Licensing and Attribution:** Provides licensing and legal details that might be used to identify the author through fields like `Credit Line`, `Copyright`, `License URL`, `Creator`, `Creator Country`, `Creator URL`, and `Camera Owner`.
* **Capture & Technical Data:** Lists technical details such as `Date`, `Make`, `Model`, `Lens`, `Focal Length`, `Aperture`, `Exposure Time`, `ISO Equivalent`, `Flash Fired`, `White Balance`, `Distance`, `Exposure Mode`, `Exposure Bias`, `Metering Mode`, `FocalPlaneXRes`, `FocalPlaneUnits`, and `LensModel`, describing the conditions and equipment used.
* **Location Information:** Shows geolocation data including `GPS Latitude`, `GPS Longitude`, `Country`, `Province/State`, `City`, and `Sublocation`, useful for mapping and verification.
* **Post-Processing Data:** Contains information about any adjustments made after capture, like `Orientation`, `Software`, and `Color Space`.

You can find a list of common EXIF and IPTC fields here:

* [EXIF Metadata Fields](https://en.wikipedia.org/wiki/Exif#Exif_fields)
* [IPTC Metadata Fields](https://www.iptc.org/std/photometadata/documentation/userguide/#field-reference-table)

You can also notice small latin cross marks **✝** in front of the `GPS Longitude`, `GPS Latitude`, `Software` and `Color Space` fields. These are **clickable notices**. You can click on them to show additional data such as additional software or decimal latitude and longitude values.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Before clicking on the notice</p></figcaption></figure>

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>After clicking on the notice</p></figcaption></figure>

Additionally, next to the GPS coordinates, you can find the **O**, **G**, **B** and **F** icons which allows you to open the GPS coordinates in _**O**penStreetMap_, _**G**oogle Maps_, _**B**ing Maps_ and the _Explore Nearby functionality by **F**lickr_ respectively. Clicking any of these icons will open the results in a separate browser tab.

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>You can fetch the GPS coordinates on four different services using the O, G, B and F icons.</p></figcaption></figure>

#### Map Tab

If GPS data is available, the Map Tab will show up, allowing you to take a quick look on the location on OpenStreetMap.

<figure><img src=".gitbook/assets/image (5).png" alt=""><figcaption><p>Location of the example above on <a href="https://www.openstreetmap.org/?mlat=48.62388833333333&#x26;mlon=-1.5093333333333334#map=15/48.62388833333333/-1.5093333333333334">OpenStreetMap</a>.</p></figcaption></figure>

#### Options

At the bottom-right of the popup you'll find a **Copy to clipboard** icon next to an **Options** icon. The first one copies the metadata to your clipboard and the second one opens xIFr's settings.

<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption><p>Copy to Clipboard and Options Icons</p></figcaption></figure>

When clicking on the Options a new tab opens with the following content:

<figure><img src=".gitbook/assets/Screenshot 2025-02-26 at 04-20-57 xIFr Options (1).png" alt=""><figcaption><p>xIFr's settings</p></figcaption></figure>

You can customize the following settings:

* **Display Mode:** You can choose between a default (light theme), auto (system-preferred), or dark theme.
* **Popup Position:** Multiple options let you decide where the popup appears (e.g., center of screen, top left/right, left/right), although multi-display setups might affect these placements.
* **Deep Search:** This feature helps xIFr guess which image you intended to open when using the context menu. There's also a "force big" mode (activated with shift-click) that ignores smaller images. You can set the max value of the images to ignore.
* **Map Links:** You can set other cartography services to view the GPS location with including MapQuest, Here WeGo or GeoHack.

**Tip:** Some websites override the browser's default right-click context menu. You can [bypass this behaviour by holding down the Shift key while right-clicking](https://github.com/StigNygaard/xIFr) to access the browser's native context menu.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The extension is free and open source.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* Firefox browser

## Limitations

* The add-on is only available in Firefox.
* Many platforms such as social networks automatically strip metadata from uploaded media. To find images that may still contain metadata, consider using [reverse image search tools](https://bellingcat.gitbook.io/toolkit/categories/image-video/reverse-image-search) to locate other instances of the same image that might have its original metadata.
* Metadata fields are not static attributes; they can be altered by their authors to obscure contextual information or intentionally provide misleading details. Consequently, it's crucial to critically assess the metadata you find, cross-referencing it with other clues available in the image or in the context of your study. Never assume metadata is entirely reliable without verification.
* xIFr primarily supports extracting metadata from JPEG images. When webpages provide multiple image formats (e.g., AVIF, WebP, and JPEG), modern browsers often display non-JPEG formats. However, xIFr attempts to detect and parse metadata from an available JPEG variant of the image when possible.

## Ethical Considerations

Metadata can expose sensitive information such as location data or device details. Make sure to respect privacy rights.

## Guides and articles

* Stig Nygaard (tool developer): XIFr -[ Getting started](https://www.rockland.dk/xIFr/start/)
* Bellingcat's [EXIF articles](https://www.bellingcat.com/tag/exif/)

## Tool provider

Developed and maintained by Stig Nygaard ([Mastodon](https://mastodon.world/@stignygaard)), a developer and photographer from Denmark.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
