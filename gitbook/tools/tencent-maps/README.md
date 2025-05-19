---
description: >-
  Tencent Maps is a mapping service provided by the Chinese technology company
  Tencent. Tencent Maps provides maps, satellite imagery, and street view.
---

# Tencent Maps

## URL

Main site, [http://map.qq.com/](http://map.qq.com/)\
\
API documentation, [https://lbs.qq.com/service/webService/webServiceGuide/webServiceOverview](https://lbs.qq.com/service/webService/webServiceGuide/webServiceOverview)

## Description

Tencent Maps provides detailed maps, satellite imagery, street view, directions for driving, public transport and walking, and real-time traffic conditions. In Q1 2025, a Deepseek AI assistant was launched in the mobile app for users to ask for recommendations and real-time information.&#x20;

In Tencent Maps, user-generated reviews and photos are integrated with [Dianping](https://www.dianping.com/), the Chinese equivalent of Yelp.&#x20;

### Basic search: Map and satellite imagery

Search for the location and select the layer (e.g., satellite imagery) or function (e.g., ruler).&#x20;

<figure><img src=".gitbook/assets/tencent_web (1).png" alt="" width="563"><figcaption><p>Web browser view: The example shows the area of Shanghai South Railway Station. Click the buttons on the top-left corner of the map to switch between map and satellite view. </p></figcaption></figure>

<details>

<summary>Annotated menu - mobile</summary>

<figure><img src=".gitbook/assets/layers_annotated_tencent copy (1).png" alt="" width="375"><figcaption><p>Basic mobile app menu. You may be more or fewer selections depending on your settings and location.</p></figcaption></figure>

See below section for steps to access street views.&#x20;

</details>

<details>

<summary>2D / 3D modes (mobile app) </summary>

When sufficiently zoomed in, a 2D / 3D selection button will become available in the lower right side of the screen.&#x20;

<figure><img src=".gitbook/assets/3d_models.png" alt=""><figcaption><p>2D (top) and 3D (bottom) maps of the same area in Dandong City. </p></figcaption></figure>

Tencent Maps has API documentation available for [switching between 2D/3D models](https://lbs.qq.com/webDemoCenter/glAPI/glMap/map3d) and for [showing 3D buildings](./#url).&#x20;

</details>

### Getting coordinates

Search on this page in the web browser: [https://lbs.qq.com/getPoint/](https://lbs.qq.com/getPoint/)

For background: China uses a coordinate system called GCJ-02 (colloquially known as Mars coordinates), whereas the rest of the world uses WGS-84 (Earth coordinates). GCJ-02 uses an encryption algorithm to apply random offsets to the latitude and longitude of locations. Obfuscating the geographic data is for [national security purposes](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China).&#x20;

### Street View - available in mobile app only

Steps: &#x20;

1. Select **Layers > Street View** (see **Annotated Menu - mobile app**). The blue lines along the roads indicate that street view is available.

<figure><img src=".gitbook/assets/streetview_bluelines (1).png" alt=""><figcaption><p>(English annotation added) The blue lines indicate where street views should be available. Notice that the pin is always in the middle. Move the map, not the pin. </p></figcaption></figure>

2. Move the map to where you want to see the street view. Please note: **To see the street view of another location, touch to&#x20;**_**move the map, not the pin**_**.**&#x20;
3. A location description is shown. Click the rectangle to enter street view.&#x20;

<figure><img src=".gitbook/assets/streetview_example.png" alt="" width="563"><figcaption><p>Example of Tencent Maps street view</p></figcaption></figure>

Two limitations to be aware of:&#x20;

1. Be aware that street views may be outdated, restricted or unavailable. In such cases, there may be glitches.&#x20;
2. Metadata such as the date of image capture or the approval reference are not available.&#x20;



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web:** web browser.
* **Mobile:** iOS, Android (or HarmonyOS). For researchers outside China, the mobile app is not available in the app store. Instead, install by apk.
* **API:** Email address and a method of payment, e.g., credit card.&#x20;

## Limitations

* **Geographical Restrictions**: Some data and features are [restricted outside of China](./#url) due to legal or licensing issues. Users outside of China may find it cumbersome to use Tencent Maps. For example, to set up a QQ account for map users, a Chinese phone number is required. Additionally, some foreign VPN traffic are blocked from accessing the web version.
* **Data availability**: Highly-detailed maps are only available for China. Other countries appear blank.&#x20;
* **Limited functionalities on web browser**: The app's more extensive features, including street view, are only available on the mobile app.&#x20;
* **Language**: The mapping application, documentation and support are available in Chinese only.
* **API Rate Limits**: API calls are capped at a concurrency limit: 5 times/second/interface/Key Daily and calls: 10,000 times/interface/Key. For researchers requiring high-frequency data access, this might pose a limitation (see [here](https://lbs-qq-com.translate.goog/faq/accountQuota/faqKey?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_hist=true)).
* **Access speed**: International users will experience slower access speeds or need a Chinese IP address to access certain APIs. Researchers using an overseas VPN to visit Chinese websites may also find their access blocked.

## Ethical Considerations

* **Privacy Concerns**: Like many mapping services, Tencent Maps gathers user data, which raises questions about data privacy and protection. (An [April 2021 notice from the Cyberspace Administration of China](https://www.cac.gov.cn/2021-04/30/c_1621370239178608.htm) named all leading Chinese mapping tools among 33 apps which extensively collect user data, going beyond what is relevant to their service provision.)
* **Censorship and Content Control**: Under the government censorship laws, Tencent Maps' content and functions will be omitted or geofenced for users outside of China. For a general discussion on content control, please see the [About Maps and Satellites](https://bellingcat.gitbook.io/toolkit/more/all-tools/about-maps-and-satellites) page.&#x20;

## Guides and articles

**Official Wiki**

* [https://map.qq.com/help/index.html](https://map.qq.com/help/index.html) ([English translation](https://map-qq-com.translate.goog/help/index.html?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en))

#### Developer Resources

* [https://lbs.qq.com/](https://lbs.qq.com/) ([English translation](https://lbs-qq-com.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en))

## Tool provider

Tencent Holdings Ltd. [https://www.tencent.com/](https://www.tencent.com/) - China

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |
