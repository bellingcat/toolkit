---
description: >-
  For OSINV researchers analysing shadows in source imagery, Shadow Finder maps
  all points on the earth where a shadow of given length could occur at a given
  date and time, along with its orientation.
---

# Shadow Finder

## URL

https://colab.research.google.com/github/Bellingcat/ShadowFinder/blob/main/ShadowFinderColab.ipynb

## Description

<figure><img src=".gitbook/assets/Screenshot.JPG" alt=""><figcaption><p>THE SHADOW AND OBJECT MEASURED CAN ONLY LIE SOMEWHERE ON THE BRIGHT CIRCLE</p></figcaption></figure>

Enter either shadow length and object height, (or, instead, the angle of elevation of the sun) for a research source image, then also the date and time of the image, and see the potential locations at which such a shadow could be created for that point in time as the bright area (circle) on the world map.

{% hint style="info" %}
Shadow Finder is an open source app on GitBook, which requires users to have a (free) GitHub account and to follow instructions on how to run the app.
{% endhint %}

{% hint style="danger" %}
Shadow Finder needs the date and time of the source image containing the shadow to be able to generate potential locations. This is not always available, particularly as social media sites usually remove this type of metadata (called [ExIf data](#user-content-fn-1)[^1]). Researchers also need to take care that the time and date an image is posted online is not often the same as when it was taken. HOWEVER Shadow Finder may still be useful asa "What If?" tool to exclude&#x20;
{% endhint %}

<details>

<summary>Step by step instructions for running Shadow Finder [click the arrow]...</summary>

1. Sign up for a GitHub account if you don't already have one.
2. Log in to GitHub on a browser and type "Shadow Finder" in the search bar at the top of the Home page and press the search button.
3. From the list which the search returns, select the "Shadow Finder" tool from Bellingcat with left mouse click:

<img src=".gitbook/assets/image.png" alt="" data-size="original">

4. Scroll down the ShadowFinder page to README section and click the bright orange button labelled "TRY IT ON COLAB". This launches ShadowFinder in an easy access environment called Colab.
5. Scroll down to enter your shadow measurement details into the app. Input either object height and shadow length (using the same units) OR the elevation angle of the sun in degrees

<img src=".gitbook/assets/shadowdetails.JPG" alt="" data-size="original">

6. and then enter the date, time (and [time zone](https://en.wikipedia.org/wiki/Time\_zone) you are using:

<img src=".gitbook/assets/dateandtime.JPG" alt="" data-size="original">

4.

</details>

_For OSINV researchers who are analysing shadows in source imagery, Shadow Finder maps all the points on the earth where a shadow of given length could occur at a given date and time, along with its orientation._

_A tool to estimate the points on the Earth's surface where a shadow of a particular length could occur, for geolocation purposes._

_Using an object's height and the length of its shadow (or the angle to the sun) with the date and the time, this code estimates the possible locations of that shadow._

> _Important: The shadow length must be measured at right angles to the object 📐 This means that you might have to correct for the perspective of an image before using this tool._

{% hint style="danger" %}
The length of the shadow fed into Shadow Finder can only be measured directly from the image if the camera is at right angles to the shadow. If not, calculations will need to be made to correct for any other camera perspective.
{% endhint %}

### The Interface <a href="#use-cases-for-nasa-firms-with-input-data-output-data-and-data-input-options...-click-each-tab-to-see" id="use-cases-for-nasa-firms-with-input-data-output-data-and-data-input-options...-click-each-tab-to-see"></a>

### Use Cases for Shadow Finder with Input Data, Output Data and Data Input Options...(Click each tab to see further information) <a href="#use-cases-for-nasa-firms-with-input-data-output-data-and-data-input-options...-click-each-tab-to-see" id="use-cases-for-nasa-firms-with-input-data-output-data-and-data-input-options...-click-each-tab-to-see"></a>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

\[\[Information on the requirement for using a tool, for instance, API key, e-mail address etc.]]

## Limitations

\[\[The limitations of each tool should be described. This is important for researchers if they want to decide whether they should invest the time to learn how to use a new tool.]]

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guides and articles

[https://www.bellingcat.com/resources/2024/08/22/shadow-geolocate-geolocation-locate-image-tool-open-source-bellingcat-measure/?utm\_source=discord](https://www.bellingcat.com/resources/2024/08/22/shadow-geolocate-geolocation-locate-image-tool-open-source-bellingcat-measure/?utm\_source=discord)

## Tool provider

Bellingcat is the provider of this tool, authored by [Galen Reich](https://galen.reich.me.uk/#about), Bellingcat Tech Community Facilitator

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Sophie Tedling  |
|                 |

[^1]: EXIF data can contain non-visual information about an image, e.g. type of camera and lens, date and time the image was taken, location at which it was taken,...
