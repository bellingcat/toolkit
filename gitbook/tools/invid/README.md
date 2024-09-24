---
description: A toolkit that supports the verification of videos and images.
---

# InVID Verification Plugin

## URL

[https://www.invid-project.eu/tools-and-services/invid-verification-plugin/](https://www.invid-project.eu/tools-and-services/invid-verification-plugin/)

## Description

The InVID Verification Plugin is a comprehensive toolkit designed to assist journalists in verifying content on social networks. It offers a suite of tools to analyze and verify videos and images, including contextual information retrieval, reverse image search (Google, Yandex, Baidu), video fragmentation, and metadata extraction. The plugin supports multiple platforms, such as YouTube, Facebook, Twitter, and Instagram, making it a versatile tool for fact-checking and debunking tasks on social networks. (Some Twitter-related features may not work anymore due to the API policy change.)

{% hint style="info" %}
If you're a journalist, fact-checker, or researcher, take a minute to apply and register to use the advanced tools. To do this, click "Advanced Tools" and then "Register". Register with your **professional email address.** Once you’re confirmed as registered, enter your email and then copy & paste the code emailed to you.
{% endhint %}

## Features

### **Video**

**Video Analysis**

Provides contextual information and metadata for YouTube and public Facebook videos, helping users understand the video's background and related comments.

{% tabs %}
{% tab title="Video Analysis" %}
<figure><img src=".gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Results: Video Description" %}
<figure><img src=".gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Results: Channel Description" %}
<figure><img src=".gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

**Keyframes**

Segments YouTube or Facebook videos into keyframes for detailed analysis and reverse image search, enhancing verification processes.

{% tabs %}
{% tab title="Keyframes" %}
<figure><img src=".gitbook/assets/grafik (9).png" alt=""><figcaption><p>Here you can provide a source URL or upload a video and the tool will create keyframes for you for further analysis.</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src="broken-reference" alt=""><figcaption><p>If you click "Show Detailed View" the number of keyframes will increase.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

**Thumbnails**

Extracts and performs a reverse search of thumbnails from YouTube videos to check for prior usage or manipulation.

{% tabs %}
{% tab title="Thumbnails" %}
<figure><img src=".gitbook/assets/chrome_vhSht7SWlr.png" alt=""><figcaption><p>Provide a YouTube URL and place a checkmark for the reverse image search mechanism you want to use (you can select multiple). Note that if you check "Open Tabs," all result thumbnails will automatically be opened on all services, which might be a lot of tabs.</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src=".gitbook/assets/grafik (5).png" alt=""><figcaption><p>This will result in a list of clickable thumbnails, which will lead you to the previously selected reverse image search service.</p></figcaption></figure>
{% endtab %}

{% tab title="Google Fact Check example" %}
<figure><img src=".gitbook/assets/grafik (6).png" alt=""><figcaption><p>In this case, no fact checks were found. But who knows, if you had selected another service previously, you might have found out more about our Python expert.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

**Video Rights**

Retrieves and displays information on legal rights for YouTube and Twitter videos, helping users understand reuse conditions and copyright issues.

{% tabs %}
{% tab title="Video Rights" %}
<figure><img src=".gitbook/assets/chrome_HeOAeMPpuJ.png" alt=""><figcaption><p>Provide a URL to the video which you want to analyze.</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src=".gitbook/assets/grafik (4).png" alt=""><figcaption><p>The results section shows you Reuse Policy, License Summary, Contact information, as well as guide you how to give attribution to the video according to the available information.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

**Metadata**

Extracts metadata from JPEG images and videos in MP4 or M4V formats, providing details such as creation date, camera settings, and location data.

{% tabs %}
{% tab title="Metadata Extraction Tool" %}
<figure><img src=".gitbook/assets/grafik.png" alt=""><figcaption><p>You can upload an image/video or provide a URL</p></figcaption></figure>
{% endtab %}

{% tab title="Results" %}
<figure><img src=".gitbook/assets/grafik (1).png" alt=""><figcaption><p>Which will give you matadata included in the image. This may include the original data, as well as the brand and model of the camera, and can also include names and geographical locations.</p></figcaption></figure>
{% endtab %}
{% endtabs %}

* **Deepfake (Locked Feature)** - Uses a machine learning classifier to determine the probability that a video contains AI-manipulated faces, such as face swapping or face reenactment. Access is restricted to registered users.

{% tabs %}
{% tab title="Deepfake Tab" %}
<figure><img src=".gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Detection Results: clips" %}
<figure><img src=".gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Result: no Deepfake" %}
<figure><img src=".gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Result: Deepfake" %}
<figure><img src=".gitbook/assets/chrome_BQnLdsRoxX.png" alt=""><figcaption><p>This is a deepfake of German news anchor Christian Sievers, used in September 2023 for a Crypto Scam. As you can see, the deepfake video barely scores higher than an unedited video, illustrating that detection algorithms are never perfect. Results have to be manually validated through other sources.<br><em>KI-Fake klaut ZDF-Moderator die Stimme—Das steckt dahinter</em>. (2023, September 22). ZDFheute. <a href="https://www.zdf.de/nachrichten/panorama/kriminalitaet/ki-fake-sievers-heute-journal-100.html">https://www.zdf.de/nachrichten/panorama/kriminalitaet/ki-fake-sievers-heute-journal-100.html</a> </p></figcaption></figure>
{% endtab %}
{% endtabs %}

### **Image**

* **Image Analysis** - Provides contextual information for images posted on Facebook, helping to verify their origin and context.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Magnifier** - Offers a magnifying lens and photo editor to examine images in detail, allowing for close inspection of specific areas.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Metadata** - Extracts metadata from JPEG images and videos in MP4 or M4V formats, providing important information for verification.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Forensic** - Provides an enhanced toolkit to detect image forgeries, enabling detailed forensic analysis to identify manipulations.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **OCR (Optical Character Recognition)** - Extracts text from images, making it easier to analyze and verify textual content within images.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **CheckGIF (Locked Feature)** - Compares an original image with a tampered one, including cropped images, and generates a GIF highlighting differences. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Synthetic Image (Locked Feature)** - Determines the probability that an image is AI-generated, using machine learning to assess potential manipulations. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Deepfake (Locked Feature)** - Detects if an image has been manipulated through face swapping, providing insights into possible deepfake content. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Geolocalizer (Locked Feature)** - Attempts to geolocate an image using an algorithm, helping to identify where an image was taken. Access is restricted to registered users.

### **Audio**

* **Loccus (Locked Feature)** - Detects AI-generated text-to-speech (voice cloning by AI), analyzing audio files to identify potential deep fake audio. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

### **Search**

* **X Search** - Performs advanced search queries on X (formerly Twitter), including precise time intervals, enhancing the ability to find relevant content.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Fact Check Semantic Search (Locked Feature)** - Uses semantic search algorithms to find fact-checked information across various sources, improving the accuracy of verification. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **XNetwork** - Provides a customized search engine for cross-network queries, allowing searches across multiple social media platforms simultaneously.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **Factchecks** - Facilitates the discovery of fact-checked articles and reports from trusted fact-checking organizations, aiding in content verification.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

### **Data Analysis**

* **Twitter SNA (Locked Feature)** - Performs social network analysis on Twitter, analyzing interactions, trends, and relationships to understand information spread and impact. Deprecated since July 1st, 2023, due to X/Twitter code changes. Access is restricted to registered users.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

* **CSV Analysis** - Allows the import and analysis of social network data from CrowdTangle exports, providing in-depth insights into social media activity and trends.

{% tabs %}
{% tab title="First Tab" %}

{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}

## Cost

* [x] Free

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Chrome (Opera, Edge, and Firefox under development), Internet, and, for some features a professional Address

## Limitations

## Ethical Considerations

* **External Services**: Some tools within the plugin rely on external services that are not open-sourced, which may affect transparency and long-term accessibility.
* **API Restrictions**: Certain features, such as Twitter analysis, have been deprecated due to changes in platform APIs.
* **Locked Features**: Several advanced features are restricted to registered users, such as journalists and researchers, which may limit access for general users.
* **Processing Time**: The analysis of videos with a large number of comments or metadata can be slow, affecting efficiency.
* **Browser Compatibility**: The plugin is primarily designed for Chrome and Opera browsers, with limited support for other browsers like Firefox.
* **Geolocation Accuracy**: The Geolocalizer's accuracy depends on the availability and quality of metadata, which may not always be reliable.
* **AI Detection Limitations**: The accuracy of synthetic image and deepfake detection tools can vary, and false positives or negatives may occur.
* **Data Privacy**: While the plugin respects user privacy, the reliance on third-party services may involve data sharing and privacy considerations.

## Guide

[Guide To Using Reverse Image Search For Investigations](https://www.bellingcat.com/resources/how-tos/2019/12/26/guide-to-using-reverse-image-search-for-investigations/)

## Tool provider

InVID is organized by a consortium of European research groups and businesses, coordinated by The Centre for Research and Technology Hellas (CERTH) in Northern Greece.

The InVID project has received funding from the European Union’s Horizon 2020 research and innovation program.

| Page Maintainer |
| --------------- |
| Martin Sona     |
|                 |
