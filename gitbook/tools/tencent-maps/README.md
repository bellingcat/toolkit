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

In Tencent Maps, user-generated reviews and photos are integrated with Dianping ([https://www.dianping.com/](https://www.dianping.com/)), the Chinese equivalent of Yelp.&#x20;

Basic search



### Getting coordinates

Search on this page in the web browser: [https://lbs.qq.com/getPoint/](https://lbs.qq.com/getPoint/)

For background: China uses a coordinate system called GCJ-02 (colloquially known as Mars coordinates), whereas the rest of the world uses WGS-84 (Earth coordinates). GCJ-02 uses an encryption algorithm to apply random offsets to the latitude and longitude of locations. Obfuscating the geographic data is for [national security purposes](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China).&#x20;

### Street view - available in mobile app only

Example - step-by-step:&#x20;

1. Select Layers > Street View. The blue lines indicate that street views may be available.&#x20;
2. Move the map to where you want to see the street view. Please note: To see the street view of another location, _**move the map**, not the pin_.&#x20;
3. A description of the location or neighborhood is shown. Click the pin or the location to enter street view.&#x20;
4. Be aware that street views may be restricted.&#x20;

Metadata such as the date of image capture or the approval reference are not available.&#x20;



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

* **Geographical Restrictions**: Certain data or features might be [restricted outside of China](./#url) due to legal or licensing issues. To set up a QQ account for map users, a Chinese phone number is required.&#x20;
* **Data availability**: Highly-detailed maps are only available for China.&#x20;
* **Limited functionalities on web browser**: The app's more extensive features, including street view, are only available on the mobile app.&#x20;
* **Language**: The mapping application, documentation and support are available in Chinese only.
* **API Rate Limits**: API calls are capped at a concurrency limit: 5 times/second/interface/Key Daily and calls: 10,000 times/interface/Key. For researchers requiring high-frequency data access, this might pose a limitation (see [here](https://lbs-qq-com.translate.goog/faq/accountQuota/faqKey?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_hist=true)).
* **Access speed**: International users will experience slower access speeds or need a Chinese IP address to access certain APIs. Researchers using an overseas VPN to visit Chinese websites may also find their access blocked.

## Ethical Considerations

* **Privacy Concerns**: Like many mapping services, Tencent Maps gathers user data, which raises questions about data privacy and protection. (An [April 2021 notice from the Cyberspace Administration of China](./#url) named all leading Chinese mapping tools among 33 apps which extensively collect user data, going beyond what is relevant to their service provision.)
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
| Bellingcat volunteer team |
|                           |
