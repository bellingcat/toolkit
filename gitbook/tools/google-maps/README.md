---
description: >-
  Google Maps provides mapping information, satellite imagery and Google Street
  View imagery including historical Street View images.
---

# Google Maps

## URL

[https://www.google.com/maps](https://www.google.com/maps)

## Description

Google Maps is a web-based service offering comprehensive information about geographical regions globally. It provides road maps, aerial and satellite views, and street views which makes it a useful resource for open source researchers. It includes features like real-time traffic updates, business information, 3D views, and location sharing. Accessible through web, mobile, and API integrations, Google Maps supports many geolocation needs.&#x20;

**Features:**

* **3D view**
* **Add or edit map:** add or edit items like missing places or businesses.
* **Compass North**: realign the map to compass north.
* **Current Location**: option to centre the map at the user's location.
* **Directions**: get directions from your current location or between two locations by Best Travel modes, Driving, Transit, Walking, Cycling, Flights.
* **Layers**: multiple map layers available including Transit, Traffic, Biking, Terrain, Street View, Wildfires, Air Quality, Satellite.
* **Location Sharing**: users can choose to share their location through the mobile app with friends and visualise it in the web app.
* **Measure distance:** measure the distance between points in kilometers.
* **Print**: print the current map or save it to PDF.
* **Recents**: a historical list of recent searches.
* **Save**: save custom maps and locations as Lists, Labeled, and Visited.
* **Search**: search by address, general location, or latitude and longitude.
* **Send to phone (from the web client)**: share the current view to your phone.
* **Sharing and embedding:** share selected locations as a link, embed or to social media with URL shortening available.
* **Show Imagery**: show photos uploaded by users of specific locations. This imagery also displays the capture date in very small text bottom right.&#x20;
* **Sidebar**: Iconic parts of a city's Hotels, Neighborhoods, Restaurants, Hotels, Things to do, Museums, Transit, Pharmacies, ATMs.
* **Street View**: see current and historical Street View imagery. This imagery displays the capture date in very small text bottom right and using _see more dates_ in the popup will show all street view captures across time in a timeline below the map.
* **Timeline (Mobile only)**: a record of your locations and searches.
* **Travel Time**
* **Weather**: see the current weather at the selected location.
* **Zoom tool**: zoom in and out on the map.

Google Maps is available in the following formats:

* [Web](https://www.google.com/maps)
* Mobile
* [Google Maps Platform](https://developers.google.com/maps): Developer API

The example below shows a search for _Amsterdam_:

<figure><img src=".gitbook/assets/Screenshot 2024-06-23 at 11.56.54 AM.png" alt="Screenshot of search for Amsterdam shows a street map of Amsterdam with a menu of amenities."><figcaption><p>Screenshot of a search for Amsterdam.</p></figcaption></figure>

## Use Cases

1. **Location Verification**: Researchers can use Google Maps to verify the location of a news event, checking the geographical accuracy of claims made in various reports. Be aware that not all imagery is current, see: [Google Earth imagery updates](https://support.google.com/earth/community-guide/259934888/google-earth-imagery-updates?hl=en).&#x20;
2. **Event Visualization**: By utilizing the satellite and street view features, researchers can offer readers a visual context of an event location, making stories more immersive.
3. **Investigative Research**: Google Maps can be an invaluable tool for investigative journalism, allowing reporters to explore and gather information on otherwise inaccessible locations or properties.
4. **Environmental and Urban Changes**: The historical imagery available on Google Maps enables researchers to document changes in the environment or urban expansion over time, supporting stories on climate change or urban development.&#x20;
5. **Historical Street View Imagery and Historical images:** can be useful to geolocate events.

## Using Bellingcat Filename Finder for Google Maps

A new tool, [Bellingcat Filename Finder](https://chromewebstore.google.com/detail/bellingcat-filename-finde/fdhodjpkigpaachejkipcghppfnnfdmp?pli=1), enables users to view the filenames of images that have been uploaded by users to Google Maps, providing contextual information. Filenames are not automatically displayed when viewing an image on Google Maps. However, after installing the tool as a Google Chrome extension, filenames appear on images when using Google Maps. See more about this tool in Bellingcat's guide “[What’s in a Name? Discovering Clues Hidden in Google Maps Image Filenames](https://www.bellingcat.com/resources/2024/10/15/google-maps-image-filename-finder-tool/).”

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web**: any modern web browser
* **Mobile:** iOS and Android
* **Developer Platform:** Google account with email address and a credit card.

## Limitations

* **Data Availability**: While Google Maps offers comprehensive coverage, the availability of Streetview imagery, particularly in less populated or updated areas, may vary. For more information on how and when Street View imagery is collected see [here](https://www.google.com/streetview/how-it-works/).
* **API Usage Limits**: For developers using the Google Maps API, there are usage limits. Exceeding these limits without purchasing additional credits can lead to service interruptions. Google offers many APIs for mapping, geocoding and other GIS services. Each service comes with its own limits depending on the service. [Usage limits](https://stackoverflow.com/questions/17865291/usage-limits-for-services-when-used-with-google-maps-javascript-api-v3) and [detailed billing](https://developers.google.com/maps/documentation/javascript/usage-and-billing) information of the Maps Javascript API are something to investigate before using the service but for many low workload users it will not be an issue.
* **Privacy Concerns**: There are privacy issues related to location tracking and data collection. Users should be aware of the data being shared with Google. Although Google provides information on how to [protect one's privacy](https://support.google.com/maps/answer/10400210?hl=en) it is important to be aware of [privacy concerns](https://www.vice.com/en/article/3an84b/six-reasons-why-google-maps-is-the-creepiest-app-on-your-phone).
* **Imagery Currency:** Satellite images may not be very new in some areas of the world, see [Google Earth imagery updates](https://support.google.com/earth/community-guide/259934888/google-earth-imagery-updates?hl=en).
* **Limited Offline Functionality**: While there is an option for offline maps, not all features, like real-time traffic updates, are available in this mode.

## Ethical Considerations

When journalists use Google Maps, they should consider the following ethical aspects:

* **Privacy and Anonymity**: Be cautious when reporting on sensitive areas or topics. Ensure individuals' locations or movements are not disclosed without consent, especially in contexts where revealing locations could endanger lives or privacy.
* **Data Accuracy and Misrepresentation**: Verify the accuracy of the information provided by Google Maps. Misrepresenting a location, either intentionally or accidentally due to outdated or incorrect map data, can lead to misinformation and harm reputations. Be [careful of business information](https://www.newscientist.com/article/2127150-thousands-of-fake-companies-added-to-google-maps-every-month/) in particular  and aware of the time lag behind the gathering of Street View imagery. For more information on how Google tries to ensure accuracy see [here](https://www.wired.com/2014/12/google-maps-ground-truth/) and [here](https://mapsplatform.google.com/resources/blog/9-things-know-about-googles-maps-data-beyond-map/).
* **Impartiality and Bias**: Understand the limitations of Google Maps in representing disputed territories or areas of conflict. Be aware of how the depiction of these areas might convey a particular political stance or bias. Examples of this can be seen in [border bias](https://www.washingtonpost.com/technology/2020/02/14/google-maps-political-borders/) and [local 'safety' bias](https://www.newstatesman.com/spotlight/tech-regulation/emerging-technologies/2022/08/mapping-navigational-apps-gis-safety-bias-google-maps).
* **Dependence and Verification**: While Google Maps is a powerful tool for gathering information about locations, researchers should cross-verify this information with other sources to avoid dependence on a singular digital map service.
* **Ethical Use of API**: If utilizing the Google Maps API for data visualization or storytelling, ensure that the usage complies with Google's terms of service and respects user privacy and data usage policies. Unauthorized use or manipulation of data could lead to ethical concerns and legal issues.

## Guide

To effectively use Google Maps, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* [Getting Started With Goggle Maps](https://support.google.com/maps/answer/144349)

**Tutorials and Articles**

* ‘Create Custom Maps in Google Maps’ (no date) _Berkeley Advanced Media Institute_. Available at: [https://multimedia.journalism.berkeley.edu/tutorials/create-custom-maps-in-google-maps/](https://multimedia.journalism.berkeley.edu/tutorials/create-custom-maps-in-google-maps/) (Accessed: 5 April 2024).
* _How to keep using Google Maps even when your phone is offline_ (2023) _Google_. Available at: [https://blog.google/products/maps/google-maps-offline/](https://blog.google/products/maps/google-maps-offline/) (Accessed: 4 April 2024).
* Toler, A. (2020) _How (Not) To Report On Russian Disinformation_, _bellingcat_. Available at: [https://www.bellingcat.com/resources/how-tos/2020/04/15/how-not-to-report-on-russian-disinformation/](https://www.bellingcat.com/resources/how-tos/2020/04/15/how-not-to-report-on-russian-disinformation/) (Accessed: 4 April 2024).
* Youri (2018) ‘How to tell the geolocation of places based on old sources using OSINT — a case study’, _Quiztime_, 2 November. Available at: [https://medium.com/quiztime/how-to-tell-the-geolocation-of-places-based-on-old-sources-using-osint-a-case-study-e44e0faed388](https://medium.com/quiztime/how-to-tell-the-geolocation-of-places-based-on-old-sources-using-osint-a-case-study-e44e0faed388) (Accessed: 26 June 2024).

**Video Tutorials**

* _10 Minute Tip: Google Maps for OSINT_ (2020). Available at: [https://www.youtube.com/watch?v=n\_kJJXoLo8I](https://www.youtube.com/watch?v=n_kJJXoLo8I) (Accessed: 4 April 2024).

#### Developer Resources

* **Google Maps API**: Developers looking to integrate Google Maps into their websites or applications should refer to the [Google Maps Platform](https://cloud.google.com/maps-platform/) for comprehensive documentation and coding examples.

**Community and Support**

* [**Google Maps Help Center**](https://support.google.com/maps)**:** Explore the official for guides on basic functionalities, from searching locations to understanding map views.

## Tool provider

Google [https://about.google/](https://about.google/) - United States

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer         |
| ----------------------- |
| Anisa Shabir GAP member |
|                         |

