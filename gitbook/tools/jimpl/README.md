---
description: Online EXIF data viewer
---

# Jimpl

## URL

[https://jimpl.com/](https://jimpl.com/)

## Description

Jimpl is a web-based tool for viewing [EXIF](https://www.canon-europe.com/pro/infobank/all-about-exif/) (or exchangeable image file format) metadata for images. EXIF is a type of data that is hidden within image and audio files that can be read by a computer but aren't visible or audible within the viewed file. It's how your smartphone knows where an image was taken, an audio recording knows the exact time it was recorded, and even contains the exact settings that a digital camera used to capture a photo. There are over 300 different fields of EXIF data, ranging from time and location data to commentary inserted by the creator.&#x20;

Jimpl also contains an EXIF scrubber that takes your uploaded file and returns to you a file that contains no identifying EXIF data. The scrubbing tool and data viewer tool are visually quite similar, so be sure to return to the website's home page if you need to use the data viewer tool and not the scrubber.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

No login is required and the program runs entirely online. You just need a compatible image or audio file.

## Limitations

* Jimpl does not process images larger than 50mb. This is problematic because compressing an image or audio file, depending on the mechanism, can cause you to lose EXIF data.
* [Many online platforms](https://scanly.co/blog/social-media-exif-stripping) will scrub the EXIF data of an image for privacy reasons when posting them. Instagram, Discord, and X, among others, all remove most identifying EXIF information. For this reason, Jimpl data is often very limited unless you have an unscrubbed version of the original file.

## Ethical Considerations

* Jimpl operates by looking at the metadata of a file that you upload to their server. While the website claims that all files are never shared with others and deleted after 24 hours, there may be security cases that dictate that you should avoid uploading the file to a third-party source such as Jimpl.
* As with all open-source research, it is the researcher's duty to use discovered information legally and ethically. Data that you discover through EXIF tools may contain personal information that should not be published or disseminated in the interest of individuals' rights to privacy.
* Metadata is easy to remove or alter. Nothing that you discover through Jimpl should be taken as fact without cross-verification.
* Jimpl is a website with a lot of personalized ad space. If you're sharing your screenshots, you may wish to crop them out or to access Jimpl in a private/icognito browser to avoid giving away personal information.

## Guide

A basic example of an investigation with Jimpl.

{% tabs %}
{% tab title="Open Jimpl and upload image" %}
<figure><img src=".gitbook/assets/Screen Shot 2026-09-23 at 10.28.19 AM.png" alt=""><figcaption><p>Navigate to <a href="https://jimpl.com/">https://jimpl.com/</a> and upload your image. You can paste a link to a web image or drag and drop a file from your computer.</p></figcaption></figure>
{% endtab %}

{% tab title="Review the metadata" %}
<figure><img src=".gitbook/assets/Screen Shot 2026-09-23 at 10.39.37 AM.png" alt=""><figcaption><p>In this case, we used the Metadata Test Image available on <a href="https://commons.wikimedia.org/wiki/File:Metadata_test_file_-_includes_data_in_IIM,_XMP,_and_Exif.jpg">Wikimedia</a> that contains data in a plethora of EXIF fields. At the top, you can see tabs for different types of metadata which Jimpl has sorted into distinct fields.</p></figcaption></figure>
{% endtab %}

{% tab title="Navigate the tabs" %}
<figure><img src=".gitbook/assets/Screen Shot 2026-09-23 at 10.46.11 AM.png" alt=""><figcaption><p>Each tab can be found by clicking on it at the top, or by simply scrolling down. The location tab, for example, contains both the geographic coordinates that the photo was taken at, as well as a Google Maps widget giving you a visual representation of that location.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

## Tool provider

Jimpl was made by a web developer named [Toni](./#url) from Romania.

| Page maintainer                                          |
| -------------------------------------------------------- |
| Maintained by Nathan Burke. Late updated in August 2026. |
