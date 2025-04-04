---
description: >-
  Mapping application and technology from the Chinese company Alibaba. (Also
  known as AMap.)
---

# Gaode Maps

## URL

Main site: [www.amap.com](./#url)

API docs: [lbs.amap.com/api](https://lbs.amap.com/api)

## Description

Gaode Maps (AMap) offers maps, satellite imagery, directions (for driving, public transport, and walking) and real-time augmented reality navigation for drivers. It is available via the web browser or as a mobile application.&#x20;

(The app was previously known as AutoNavi, and is currently named AMap.)

* **Global data**: Maps, directions and recommended transport data are available globally, though data are the most detailed for China. &#x20;
* **Mobile app available in English**: The English app offers basic functions including map search, satellite imagery and directions. (Other functionalities may be limited, e.g., finding nearby facilities or AR.)&#x20;
* Notably, **Gaode Maps** **does not offer street view**.&#x20;

AMap is a data provider to Apple Maps, which automatically switches to using AMap data when the device is in China (e.g., when global iPhone users travel from overseas to mainland China).&#x20;

Unless specified, all functions described on this page can be accessed without registering an account.&#x20;

**Basic search**

After searching in pinyin or Chinese characters, select the layer or function.

<figure><img src=".gitbook/assets/gaode_search.png" alt="" width="563"><figcaption><p>Web browser view > after searching for a specific location (example shown: airport in Pu'er City)</p></figcaption></figure>

<details>

<summary>Select layers - see English annotations</summary>

Here are the layers and functions, annotated in English. Your view may be different depending your country.&#x20;

<figure><img src=".gitbook/assets/functions_annotated.png" alt=""><figcaption><p>Web browser view - select layer or function</p></figcaption></figure>

<figure><img src=".gitbook/assets/annotated.png" alt="" width="176"><figcaption><p>Mobile view > select layer or function</p></figcaption></figure>

</details>

On the web browser view, a reference number is shown at the bottom left, e.g., GS(2025)1234. The year refers to the year when the map was approved for publication by China's State Bureau of Surveying and Mapping.&#x20;

**No Street View Available**

Gaode Maps does not offer street view (the function was removed several years ago). Instead, the mobile app has a function called "wonder", which offers fisheye aerial photograph in some select places.&#x20;

<details>

<summary>The "wonder" 奇境 function</summary>

In the mobile app, a function called 奇境 (translates as "wonder", pinyin: _qijing_) is available for select locations, usually scenic places such as parks and tourist sites. The function allows users to view the location in different times of day, weather conditions, or seasons.

<div align="center"><figure><img src=".gitbook/assets/park.png" alt="" width="188"><figcaption><p>Example: When the user moves the slider at the bottom, they can view the location in different times of day.</p></figcaption></figure></div>

</details>

**Worldwide data**

The app provides global data for over 200 countries, including street maps, route navigation (driving, public transportation, or walking) and business locations.&#x20;

Business owners from any country could add their locations and information onto AMap (for instance, to attract Chinese travellers who may visit their countries).&#x20;

**Getting coordinates**

Within AMap, if you search for a specific location, the coordinates are shown in the URL, in longitude-latitude format.&#x20;

For background: China uses a coordinate system called GCJ-02 (colloquially known as Mars coordinates), whereas the rest of the world uses WGS-84 (Earth coordinates). Using an encryption algorithm, GCJ-02 applies random offsets to the latitude and longitude of locations. Obfuscating the geographic data is for [national security purposes](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China).&#x20;

If you use Google Maps, the coordinates you obtain for China are in the GCJ-02 system. You could copy the coordinates from Google Maps (in latitude-longitude format) and use them as a search term in AMap.

#### 3D models

API documentation for [3D map](https://lbs.amap.com/demo/javascript-api/example/3d/map3d) and [3D model](https://lbs.amap.com/demo/javascript-api/example/3d/3d-model) are available.&#x20;

**Reviews**

User-generated reviews are available in the mobile app.&#x20;



**Using AMap in English (mobile app only)**

Please note that the AMap in the web browser does not change to English, even after account registration and login. The English version is only available as a mobile app.&#x20;

<details>

<summary>How to change the AMap mobile app to English</summary>

<figure><img src=".gitbook/assets/gaode_english.png" alt=""><figcaption></figcaption></figure>

1. First, download AMap in Chinese, install, open the app, and select the user icon (indicated by the blue arrow).&#x20;
2. Select the settings icon.&#x20;
3. Scroll to the bottom, select General 通用.
4. Select Language Settings 语言设置.&#x20;
5. Select English. A pop-up message will ask you to re-start the app for the language to be updated.&#x20;

</details>



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web:** any modern web browser
* **Mobile:** iOS or Android (or HarmonyOS). Globally available.&#x20;
* **API:** Email address, Chinese phone number, and a payment method

## Limitations

* **Geographical Restrictions**: The most detailed coverage is limited to China.
* **Language Barrier**: The user interface is only available in Chinese.&#x20;
* **Access Speed**: International users will experience slower access speeds or need a Chinese IP address to access certain APIs.

## Ethical Considerations

* See the Bellingcat toolkit's [About Maps and Satellites](https://bellingcat.gitbook.io/toolkit/more/all-tools/about-maps-and-satellites) page for a general discussion on censorship and content control
* **Privacy Concerns**: Like many mapping services, Gaode Maps gathers user data, raising concerns about user privacy. (An [April 2021 notice from the Cyberspace Administration of China](./#url) named all leading Chinese mapping tools among 33 apps for extensively collecting user data, beyond what is relevant to their service provision.)

## Tool provider

Alibaba Group [https://www.alibabagroup.com](https://www.alibabagroup.com/en-US/) - China

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat volunteer team |
|                           |
