---
description: A web-based tool for verifying the authenticity of images.
---

# Image Verification Assistant

## URL

[https://mever.iti.gr/forensics/](https://mever.iti.gr/forensics/)

## Description

Image Verification Assistant by [Media Analysis, Verification and Retrieval group](https://mever.gr/post/mever-tools-for-image-and-video-verification-within-weverify/) (MeVer) detects image manipulations. Users can upload either upload an image or provide a link to an online photo to get started.

The tool employs multiple image tampering detection algorithms and provides features such as detailed photo metadata analysis. Specifically, MeVer integrates 12 filters and displays the results on individual maps, each with a different detection filter for each type of inconsistency or tampering. One such filter, JPEG Ghosts, detects traces left when a part of a JPEG image is copied and pasted into another photo with a different compression quality, appearing as areas of high contrast when viewed through this filter.

Similarly, Error Level Analysis (ELA) looks for differences in compression quality. Areas of interest appear brighter in ELA than the rest of the image, especially when comparing similar regions, such as edges with edges. To explore other filters, hover over “What does it mean?” to open a pop-up box that explains its function and result.

<figure><img src=".gitbook/assets/Maps latest.png" alt=""><figcaption><p>12 forensic filters are displayed on an individual map for each result (source: test image results available on the tool's website).</p></figcaption></figure>

The tool also provides an overall probability via Fusion for forgery, which combines multiple forensic filters. A higher percentage through fusion warrants further investigation of the image, either via each filter or similar tools such as Forensically and FotoForensics.

MeVer allows users to verify the origins of potentially tampered images through an integrated Google Reverse Image Search. By simply clicking the option below the input image on the results page, a new tab opens with Google results. This enables users to perform reverse searches without leaving the tool, providing greater convenience and flexibility.

Just above the reverse search option, hovering over the input image activates the zoom option, allowing one to view the photo's granular details. &#x20;

<figure><img src=".gitbook/assets/Input image and zoom.png" alt="" width="375"><figcaption><p>Input image, zoom option, and Google reverse image search.</p></figcaption></figure>

The tool’s most essential feature is detailed metadata analysis of images, which reveals information such as the software used to create each photo. Although metadata yields crucial information in any investigation, most [social](https://datajournalism.com/read/handbook/verification-1/verifying-images/4-verifying-images) media platforms strip images of their metadata, limiting the tool’s usefulness in those cases.

<figure><img src=".gitbook/assets/Metadata analysis mever.png" alt="" width="375"><figcaption><p>Metadata analysis of the test image available on the website of the Image Verification Assistant.</p></figcaption></figure>

The InVid Verification Plugin has also [incorporated](https://weverify.eu/tools/image-verification-assistant/) Mever into its suite of tools for journalists and fact-checkers, offering a range of forensic options for video and image analysis. As a result, it can be used independently for verification or integrated within InVid. Read more about InVid in [Bellingcat’s Online Investigation Toolkit](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid).

### Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

Understanding the forensic filters may require some experience.

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

A web browser to use the tool.

## Limitations

The tool is sometimes  slow and takes time to display results.&#x20;

Additionally, social media strips images of its metadata, which prevents the tool's ability to analyze metadata.

It is possible the results may include false positives. Cross-check the results with other verification methods or available verification tools.

## **Ethical Considerations**

Metadata associated with an image may raise privacy concerns. While metadata is crucial for open-source investigations, understanding how journalists can use it responsibly is important.  Read "Why journalists need to learn about metadata" by [ICFJ](https://ijnet.org/en/story/why-journalists-need-learn-about-metadata) and "Metadata 101: Understanding the basics of media metadata" by  [Freedom of the Press Foundation](https://freedom.press/digisec/blog/metadata-101/).

## Guides and articles

Image Verification Assistant's webpage provides an interactive [tutorial](https://mever.iti.gr/forensics/?tour=start) for the tool. For understanding results and forensic filters, click on "What does it mean?" that appears with each filter and result.&#x20;

### **Similar tools**

Tools similar to Mever include [Forensically](https://bellingcat.gitbook.io/toolkit/more/all-tools/forensically), [FotoForensics](https://fotoforensics.com/), and the [InVid Verification Plugin](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid).&#x20;

Since InVid has incorporated Mever into its suite of verification tools, both platforms share the same image analysis filters. However, InVid allows users to verify video and audio in addition to images, and Mever does not. Both Mever and InVid support reverse image searches via Google, but InVid also integrates other search engines like Yandex, Bing, and TinEye for conducting a wider search, which Mever does not.

Furthermore, Mever, Forensically, and FotoForensics all offer forensic image analysis through features like Error Level Analysis (ELA) and metadata examination. Among these, FotoForensics provides a more limited set of features than Mever and Forensically, which offer a broader range of forensic tools and analysis options.

### Tool provider

The Image Verification Assistant was [developed](https://mever.iti.gr/forensics/about.html) by CERTH-ITI in collaboration with Deutsche Welle (DW), Germany’s international broadcaster.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
