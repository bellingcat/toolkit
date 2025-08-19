---
updated: '2025-07-14'
description: A mapping application provided by Chinese technology company Baidu Inc.
---

# Baidu Maps

## URL

Main page, [http://map.baidu.com/](http://map.baidu.com/)

API documentation, [https://api.map.baidu.com/](https://api.map.baidu.com/)

## Description

Baidu Maps offers maps, street view, satellite imagery, and real-time route planning. It is available via the web browser or as a mobile application.

#### The basics

In the web version, search for a location. To select layers, point your cursor to the bottom-right corner and 3 options will appear (i.e., default map view, satellite image, or street view). Select the layer you wish to explore.

<figure><img src=".gitbook/assets/waigaoqiao_ copy.png" alt=""><figcaption><p>For example, a search for Shanghai's Waigaoqiao (a port and commercial district) will show this view in the web browser.</p></figcaption></figure>

<div align="center"><figure><img src=".gitbook/assets/baidu_navigation.png" alt="" width="375"><figcaption><p>Navigation to the regular map, satellite image and street view, found at the bottom right corner of the web browser</p></figcaption></figure></div>

Note that the reference number at the bottom left, e.g., "GS(2023)1234", refers to the year when the image was approved for publication by the relevant government authority, China's State Bureau of Surveying and Mapping. This is not necessarily the year when the image was captured.

**Street view**

Street views are generally available on the road networks, indicated by the thickened routes. For a static preview, place the cursor onto the route. Click to enter street view mode.

<figure><img src=".gitbook/assets/streetview_available.png" alt=""><figcaption><p>The thickened gray routes indicate that street view is available.</p></figcaption></figure>

Street view images are captured by a [Baidu-operated fleet of vehicles](https://web.archive.org/web/20250519015136/https://www.cheyun.com/articleDetail/11826), which are fitted with single-lens reflex (SLR) cameras, GPS and inertial navigation sensors. However, the fleet's image capture schedules are not made public.

<details>

<summary>Panoramic preview for street view</summary>

<img src=".gitbook/assets/right-click.png" alt="" data-size="original">

See above: From the regular map view, point to the main road (where street view is more likely to be available), right-click to show a shortcut menu > select the first item which means "panoramic preview" in English.

See below: The 360º preview is shown.

<img src=".gitbook/assets/panoramic_preview.png" alt="" data-size="original">

</details>

**Time machine 时光机**

The "time machine" function allows you to access older street view images, going as far back as 2013 (if available). From the current street view image, the time machine function is available at the bottom, indicated by a clock icon.

<figure><img src=".gitbook/assets/time_machine_example.png" alt=""><figcaption><p>The "time machine" will show older street view images available (year and month of image captured). The approval reference is in the bottom right corner.</p></figcaption></figure>

**The Enigma of Coordinates in China**

Most of the world uses the coordinate system [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System) (colloquially known as Earth coordinates), whereas China uses [GCJ-02](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China#GCJ-02) (Mars coordinates). GCJ-02 uses an encryption algorithm that applies random offsets to the latitude and longitude of locations. Obfuscating the geographic data is for [national security purposes](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China).

Baidu Maps goes even further in its BD-09 coordinates system, applying additional encryption based on GCJ-02.

**Where to get the coordinates in Baidu Maps**

When searching for a location on Baidu Maps, the BD-09 coordinates are shown in the URL.

Another way to search is: [https://api.map.baidu.com/lbsapi/getpoint/](./#url). Search for a location and the BD-09 coordinates are shown in the top-right. **Note that in Chinese mapping tools, longitude comes before latitude**.

<figure><img src=".gitbook/assets/dafen_village (1).png" alt=""><figcaption><p>Example: From the Baidu Maps API getpoint page, the coordinates will show on the top-right when searching for Dafen Village, Shenzhen</p></figcaption></figure>

To search by coordinates instead, enter the coordinates (longitude first) and check the box for reverse search using coordinates.

**3D models**

A 3D view is available. Baidu Maps also offers an API for building third-party apps that leverage 3D models and live data: [https://lbs.baidu.com/solutions/threedsvisualization](https://lbs.baidu.com/solutions/threedsvisualization)

**Global coverage**

Baidu Maps' coverage and capabilities are available globally, though the user interface is only available in Chinese. When searching for locations outside China, English search terms can be used.

### **Underlying technologies and data providers**

Baidu Maps' positioning and navigation capabilities are powered by the BeiDou Navigation Satellite System 北斗卫星导航系统. BeiDou is the global positioning and satellite technology developed by the Chinese government, and [competes with GPS and Galileo](https://www.gpsworld.com/chinas-beidou-challenges-u-s-gps-dominance/). (For more about BeiDou: see [Wikipedia](https://en.wikipedia.org/wiki/BeiDou); [BeiDou official website](http://en.beidou.gov.cn/); an academic article in [_Satellite Navigation,_ 2020](https://doi.org/10.1186/s43020-019-0006-0).)

For all Chinese mapping tools, satellite imagery is provided by China Siwei Surveying & Mapping Technology, which uses data and imagery from DigitalGlobe, the US company.

Outside China, Baidu Maps has a partnership with [HERE Technologies](https://en.wikipedia.org/wiki/Here_WeGo), the Amsterdam-based mapping and data company. Other [information providers include](https://map.baidu.com/zt/client/copyrightPc/index.html) OpenStreetMap, MapKing (for Hong Kong and Southeast Asia) and LocalKing (Taiwan).

### Similar tools

Open-source researchers can cross-reference with other leading mapping services, including AMap (Gaode Maps) and Tencent Map (QQ Maps).

For open-source researchers accessing Chinese map tools from overseas, Baidu Maps is the only tool that provides street view on the web browser. (Street view is not available on AMap, and is only available in Tencent Map's mobile version.)

Note that all three mapping tools use (at least in part - for their China coverage) the BeiDou Navigation Satellite System for their positioning capabilities. The exact ways that BeiDou is leveraged in each mapping tool depends on the device, the chip, and the location where the mapping tool is used.

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
* **Developer Platform:** For individual developer accounts, only Chinese citizens can register. (Individuals must be between ages 18 and 65. Real-name registration and a selfie of the individual holding their ID are required.) Company developer accounts can be opened by overseas companies.

## Limitations

Researchers and developers should consider several limitations:

* **Language Barrier**: The user interface is only available in Chinese.
* **Access Speed**: International users will experience slower access speeds, especially if using a VPN.
* **Barriers accessing the API**: Non-Chinese individuals will have difficulty registering a Baidu developer account, preventing them from using Baidu's location-based services APIs. (See FAQ #23 for Baidu location-based services account authentication - in [Chinese](https://lbsyun.baidu.com/index.php?title=FAQ/authentication) and [English](https://lbsyun-baidu-com.translate.goog/index.php?title=FAQ/authentication&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp); [Baidu Developer Account Registration Procedure](https://app.baidu.com/newapp/docs/%E5%BC%80%E5%8F%91%E8%80%85%E5%87%86%E5%85%A5/%E5%BC%80%E5%8F%91%E8%80%85%E6%B3%A8%E5%86%8C%E6%B5%81%E7%A8%8B/) - in Chinese).

## Ethical Considerations

* See the Bellingcat toolkit's [About Maps and Satellites](https://bellingcat.gitbook.io/toolkit/more/all-tools/about-maps-and-satellites) page for some general caveats when working with maps and satellite imagery including censorship and content control.
* **Privacy Concerns**: Like many mapping services, Baidu Maps gathers user data, raising concerns about user privacy. (Concerns about Baidu Maps' collection of user data were raised in a [2016 report from Citizen Lab, University of Toronto](https://citizenlab.ca/2016/02/privacy-security-issues-baidu-browser/) and in an [April 2021 notice from the Cyberspace Administration of China](https://www.cac.gov.cn/2021-04/30/c_1621370239178608.htm), which named all leading Chinese mapping tools among 33 apps for extensively collecting user data, beyond what is relevant to their service provision.)

## Guide

**Tutorials**

* _Baidu Maps (Baidu Ditu 百度地图) And Tutorials in English_ (no date) _BaiduinEnglish_. [https://www.baiduinenglish.com](https://www.baiduinenglish.com)
* Extracting Chinese geographic data from Baidu Map API. (December 2020) [https://journals.sagepub.com/doi/full/10.1177/1536867X20976313](https://journals.sagepub.com/doi/full/10.1177/1536867X20976313)
* Cross-platform complementarity: Assessing the data quality and availability of Google Street View and Baidu Street View (Feburary 2025). [https://doi.org/10.1177/27541231241311474](https://doi.org/10.1177/27541231241311474)

**Video Tutorial**

* _Baidu Maps : The Chinese Google Maps_ (2023). Available at: [https://www.youtube.com/watch?v=hKVUOgoDUxs](https://www.youtube.com/watch?v=hKVUOgoDUxs) (French with English transcription).

**Articles**

* How China is tearing down Islam. Financial Times. (November 2023) [https://ig.ft.com/china-mosques/](https://ig.ft.com/china-mosques/)
* Interrogating China’s “Google Maps” to Investigate the Xinjiang Detention Centers. March 2021. Global Investigative Journalism Network. [https://gijn.org/stories/interrogating-chinas-google-maps-to-investigate-the-xinjiang-detention-centers/](https://gijn.org/stories/interrogating-chinas-google-maps-to-investigate-the-xinjiang-detention-centers/)
* Baidu found China’s “ghost cities,” but it is keeping their locations mostly a secret (2015). Quartz. [https://web.archive.org/web/20151105031544/http://qz.com/540571/baidu-found-chinas-ghost-cities-but-it-is-keeping-their-locations-mostly-a-secret/](./#url)

## Tool provider

Baidu Inc [http://www.baidu.com/](http://www.baidu.com/) - China

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |
