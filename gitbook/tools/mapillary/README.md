---
description: Mapillary is a crowdsourced street-level imagery platform.
updated: '2025-12-04'
---

# Mapillary

## URL

[https://www.mapillary.com/](https://www.mapillary.com/)

## Description

Mapillary is a street-level imagery platform that uses crowdsourced photos and videos to map the world. This tool allows users to upload images and videos taken from various devices, which are then used to create detailed, immersive maps. The primary problem Mapillary solves is the lack of street view imagery from all around the world. It utilizes computer vision technology to analyze and stitch together images.

Mapillary lets you filter results by date and feature e.g. streetlights, rubbish bins, traffic signs, CCTV cameras, etc.

Available in the following formats:

* Web
* Mobile
* Command line and desktop image uploaders are also available



<figure><img src=".gitbook/assets/Screenshot 2024-04-06 at 1.25.01 PM.png" alt="Screenshot of a search for street level imagery in Amsterdam with Mapillary shows a map with individual markers as dots on the map where street level imagery exists.."><figcaption><p>Screenshot of a search for street level imagery in <em>Amsterdam with</em> Mapillary </p></figcaption></figure>

### **Example Use Cases**

Online Open Source Investigators can leverage Mapilliary in numerous ways:

* **Geolocation** The primary use for Mapilliary is geolocation where users can identify and confirm the geographic position of an image or video from landmarks, public utilities, and service locations.
* **Fact-Checking:** Mapillary can also serve as a tool for fact-checking statements or claims about specific locations. Open source researchers can verify the existence of certain buildings, street signs, or other landmarks to authenticate claims.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Mapillary is completely free for all users, including commercial use. After Meta's acquisition in 2020, the platform eliminated its paid tier and made all imagery available for both non-commercial and commercial purposes at no cost. API access is also free but subject to rate limits

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web**: any modern web browser and an account requires an email address
* **Mobile**: Android and iOS

## Limitations

Mapillary, while providing an extensive database of street-level imagery, carries certain limitations that researchers and users must be aware of:

* **Coverage Gaps**: Not all locations are equally covered. Remote or less-traveled areas may have sparse or outdated imagery. For instance, [The State of Mapillary: An Exploratory Analysis](https://www.mdpi.com/2220-9964/9/1/10) found data coverage showing less contributor inequality than in OpenStreetMap but significant seasonal variation.
* **Data Accuracy**: like other services Mapillary has data accuracy issues (for instance [Cleaning up Mapillary Coverage](https://forum.mapillary.com/t/cleaning-up-mapillary-coverage/5487)) that researchers should be aware of.
* **Image Quality**: The quality of the images can vary significantly depending on the equipment used and the conditions at the time of capture.
* **Data Freshness**: The platform may not have up-to-date imagery for all locations, which can impact the relevance of the data for certain applications (see Coverage Gaps).
* **Processing Delays**: Due to the need for privacy filtering and data processing, there is a delay between when images are uploaded and when they are visible on the platform, see [Troubleshoot image processing delays and failed sequences](https://help.mapillary.com/hc/en-us/articles/4408023385874-Troubleshoot-image-processing-delays-and-failed-sequences).
* **API Rate Limits**: The use of Mapillary's API is subject to rate limits, which can affect how quickly and extensively data can be accessed for projects (see: [https://www.mapillary.com/developer/api-documentation#rate-limits](https://www.mapillary.com/developer/api-documentation#rate-limits)).

## Ethical Considerations

When embedding or using data from Mapillary, several ethical considerations should be taken into account:

* **Privacy Concerns**: Images on Mapillary may include individuals or property inadvertently, despite efforts to blur faces and license plates. Consider the impact of sharing such images especially in sensitive or private areas.
* **Data Usage**: Understand and respect the terms of use set by Mapillary regarding how their data can be used, especially for commercial purposes. Misusing the data could have legal and ethical implications,  see [Mapillary Vistas Dataset](https://www.mapillary.com/dataset/vistas) and the [Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).
* **Bias in Data**: Acknowledge any potential bias in the geographic coverage and content of the images. Some areas may be over-represented while others are under-represented, which could affect the fairness and inclusivity of projects using Mapillary data. For a general overview of bias in crowd sourced applications like Mapillary see [Crowdsourced geospatial data quality: challenges and future directions](https://www.tandfonline.com/doi/full/10.1080/13658816.2019.1593422).

It's important to weigh these considerations carefully and engage in best practices to mitigate any potential harm.

## Guide

To effectively use Mapillary, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

#### Official Wiki

* [Mapillary Help Centre](https://help.mapillary.com/)

#### Tutorials and Articles

* Team, B.I. (2022) _Unravelling the Killing of Shireen Abu Akleh_, _bellingcat_. Available at: [https://www.bellingcat.com/news/mena/2022/05/14/unravelling-the-killing-of-shireen-abu-akleh/](https://www.bellingcat.com/news/mena/2022/05/14/unravelling-the-killing-of-shireen-abu-akleh/) (Accessed: 6 April 2024).
* Fiorella, G. (2020) _Geolocating Venezuelan Lawmakers In Europe_, _bellingcat_. Available at: [https://www.bellingcat.com/news/2020/01/21/geolocating-venezuelan-lawmakers-in-europe/](https://www.bellingcat.com/news/2020/01/21/geolocating-venezuelan-lawmakers-in-europe/) (Accessed: 6 April 2024).

#### Video Tutorials

* [_Mapillary YouTube channel_](https://www.youtube.com/@Mapillary)

#### Community and Support

* [Mapillary Community](https://forum.mapillary.com/)

## Tool provider

Meta [https://about.meta.com/](https://about.meta.com/) - United States (Mapillary AB, based in Malmö, Sweden acquired by Meta Platforms in 2020)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Arsen Drobakha  |

