# Baidu Maps

## URL

Main page, http://map.baidu.com/&#x20;

API documentation, https://api.map.baidu.com/

## Description

Baidu Maps offers maps, street view, satellite imagery, and real-time route planning. It is available via the web browser or as a mobile application.&#x20;

#### The Basics

In the web version, search for a location and in the bottom right corner select the layer you wish to explore — street view, satellite image, or back to default map view.

<figure><img src=".gitbook/assets/baidu_navigation.png" alt="" width="375"><figcaption></figcaption></figure>

Note that the reference number at the bottom left refers to the year when the image was approved for publication by the relevant government authority, the State Bureau of Surveying and Mapping. This is not necessarily the year when the image was captured.\
\
![](.gitbook/assets/bottom_left.png)

**Street view**

Street views are generally available on the road networks, indicated by the thickened routes. For a static preview, place the cursor onto the route. Click to enter street view mode.&#x20;

<figure><img src=".gitbook/assets/streetview_available.png" alt=""><figcaption><p>Put your cursor onto the grey route, and a static preview will be shown. </p></figcaption></figure>

<details>

<summary>Panoramic preview for street view</summary>

<img src=".gitbook/assets/right-click.png" alt="" data-size="original">

(left) From the regular map view, point to the main road, right-click to show a shortcut menu > select the first item  "panoramic preview". (right) The 360º preview is shown.

<img src=".gitbook/assets/panoramic_preview.png" alt="" data-size="original">



</details>

**Time machine 时光机**

The "time machine" function allows you to access older street view images, going as far back as 2013 (if available). From the current street view image, the time machine function is available at the bottom, indicated by a clock icon.

<figure><img src=".gitbook/assets/time_machine_example.png" alt=""><figcaption><p>The "time machine" will show older street view images available (year and month of image captured). The approval reference is in the bottom right corner.</p></figcaption></figure>

**The Enigma of Coordinates**

Most of the world uses the coordinate system WGS-84 (colloquially known as Earth coordinates), whereas China uses GCJ-02 (Mars coordinates). GCJ-02 uses an encryption algorithm that applies random offsets to the latitude and longitude of locations. Obfuscating the geographic data is for [national security purposes](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China). &#x20;

Baidu Maps goes even further in its DD-09 coordinates system, applying additional encryption based on GCJ-02.&#x20;

**Where to get the coordinates in Baidu Maps**

When searching for a location on Baidu Maps, the BB-09 coordinates are shown in the URL.&#x20;

Another way to search is to go to: https://api.map.baidu.com/lbsapi/getpoint/. Search for a location and the BB-09 coordinates are shown in the top-right. Note that in Chinese mapping tools, longitude comes before latitude.&#x20;

<figure><img src=".gitbook/assets/dafen_village (1).png" alt=""><figcaption><p>Example: Searching for Dafen Village shows the coordinates on the top-right</p></figcaption></figure>

To search by coordinates instead, enter the coordinates (longitude first) and check the box for reverse search using coordinates.&#x20;

### Similar tools

Open-source researchers can cross-reference the other leading mapping services, including AMap (also known as Gaode Maps) and Tencent Map (also known as QQ Maps).&#x20;

All 3 mapping services rely on China's BeiDou Navigation Satellite System for their real-time navigation and satellite imagery. However, the user experience design, algorithms to recommend navigation routes, and the availability of street views, indoor maps, and 3D maps will differ.&#x20;

Another tool to compare satellite imagery of China is [https://www.earthol.com/](https://www.earthol.com/)

<figure><img src=".gitbook/assets/Earthol.com (1).png" alt="" width="563"><figcaption><p>Main page, Earthol.com. The English annotations are added.</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

(Developer API use may be charged)

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web**: any modern web browser
* **Mobile**: iOS and Android (basic functionality is available without registering an account)
* **Developer Platform**_:_ email address and account registration

## Limitations

Researchers and developers should consider several limitations:

* **Geographical Restrictions**: The most detailed coverage is limited to China. Less detailed data available for other countries.&#x20;
* **Language Barrier**: The user interface is only available in Chinese.&#x20;
* **Access Speed**: International users will experience slower access speeds or need a Chinese IP address to access certain APIs.&#x20;

## Ethical Considerations

* See the Bellingcat toolkit's [About Maps and Satellites](https://bellingcat.gitbook.io/toolkit/more/all-tools/about-maps-and-satellites) page for some general caveats including censorship and content control
* **Privacy Concerns**: Like many mapping services, Baidu Maps gathers user data, raising concerns about user privacy. (Concerns about Baidu Maps' collection of user data were raised in a [2016 report from Citizen Lab, University of Toronto](https://citizenlab.ca/2016/02/privacy-security-issues-baidu-browser/) and in an [April 2021 notice from the Cyberspace Administration of China](./#url), which named all leading Chinese mapping tools among 33 apps for extensively collecting user data, beyond what is relevant to their service provision.)

## Guide

**Tutorials**

* _Baidu Maps (Baidu Ditu 百度地图) And Tutorials in English_ (no date) _BaiduinEnglish_. [https://www.baiduinenglish.com](https://www.baiduinenglish.com)
* Extracting Chinese geographic data from Baidu Map API. (December 2020) [https://journals.sagepub.com/doi/full/10.1177/1536867X20976313](https://journals.sagepub.com/doi/full/10.1177/1536867X20976313)
* Cross-platform complementarity: Assessing the data quality and availability of Google Street View and Baidu Street View (Feburary 2025). [https://doi.org/10.1177/27541231241311474](https://doi.org/10.1177/27541231241311474)

**Video Tutorial**

* _Baidu Maps : The Chinese Google Maps_ (2023). Available at: [https://www.youtube.com/watch?v=hKVUOgoDUxs](https://www.youtube.com/watch?v=hKVUOgoDUxs) (French with English transcription).

**Articles**

* Baidu found China’s “ghost cities,” but it is keeping their locations mostly a secret (2015). Quartz. https://web.archive.org/web/20151105031544/http://qz.com/540571/baidu-found-chinas-ghost-cities-but-it-is-keeping-their-locations-mostly-a-secret/

## Tool provider

Baidu Inc [http://www.baidu.com/](http://www.baidu.com/) - China

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| river\_n        |
|                 |
