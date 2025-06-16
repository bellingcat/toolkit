---
description: A tool that allows forensic analysis of images.
---

# Image Verification Assistant

## URL

[https://mever.iti.gr/forensics/](https://mever.iti.gr/forensics/)

## Description

Image Verification Assistant allows users to detect manipulations in images. The tool uses multiple image tampering detection algorithms, and provides features such as an in-depth metadata analysis of an image.

With increasing disinformation, the tool is essential for fact-checkers who regularly analyze altered images. It features various forensic filters, allowing users to switch between them, which effectively enables them to spot the sneakiest alterations that would otherwise go unnoticed.

The tool has also been [integrated](https://weverify.eu/tools/image-verification-assistant/) into InVid’s Verification Plugin, which offers a range of video and image forensic capabilities. However, it can be used as a standalone tool for image verification. Read more about InVid in our toolkit [here](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid).

To get started, copy paste the link or “drag and drop an image from the web” into the top-most field and click “analyze.” You can also upload an image into the field below the first option for local files.

## **The results page**

After uploading the image, users can view the collective results or analyze each applied filter individually.

The **Fusion** section displays collective results. OMGFuser highlights altered areas in red, and provides a net probability of image forgery based on various “AI-based filters that analyze different low-level traces of the image, using a novel deep-learning framework, thus greatly reducing the amount of false-positives.”

The TruFor algorithm provides an overall probability for image manipulation, and highlights visually altered areas in red against the blue background. It uses an AI-based filter, called Noiseprint++, which captures noise patterns in the image.

<figure><img src=".gitbook/assets/Fusion screenshot image.png" alt=""><figcaption><p>Fusion section provides collective results</p></figcaption></figure>

MM-Fusion and OW-Fusion do not assign an overall probability, but when combined with the above algorithms, can help in a deeper understanding of image forgery.\
&#x20;

The **Forensic** section on the results page allows users to apply individual filters for forensic analysis. One option is Double JPEG quantization which identifies “the traces left by consecutive JPEG compressions on an image.” JPEG Ghosts detects forgeries that result from “a splice \[that] is taken from a JPEG image and placed in another one of different quality, traces of the original JPEG compression are carried over.”  Users can also try JPEG blocking artifact inconsistencies (BLOCK), Error Level analysis, high-frequency noise (WAVELET) among the range of available filters for effective forensic analysis of a forged image.

## Reverse image search, Zooming and metadata analysis

This tool brings Google reverse image search, zoom option and metadata analysis in one place. After uploading an image, clicking on the reverse-search option beneath the image will open a new tab displaying the results.

To use the zoom, hover your pointer on the image under the results page; this feature allows granular analysis of an image.

Metadata analysis is highly relevant for open-source researchers who want a deeper understanding of an image. It provides details about the software used to create the photo. For example, if an image is from social media, it will identify the platform such as Facebook. This section will show details such as the file size and type, file modification date, and much more.

<figure><img src=".gitbook/assets/metadata analysis.png" alt=""><figcaption><p>Metadata section</p></figcaption></figure>

## &#x20;Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

Understanding the forensic filters may require some experience.

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

None.

## Limitations

The tool may be slow and take a while to display the results. Additionally, social media strips images of its metadata, which can hinder the tool's ability to analyze metadata effectively.

It is possible the results may include false positives. Cross-check the results with other verification methods or available verification tools.

## **Ethical Considerations**

Metadata associated with an image may raise privacy concerns. While metadata is crucial for open-source investigations, understanding how journalists can use it responsibly is important.  Read "Why journalists need to learn about metadata" by [ICFJ](https://ijnet.org/en/story/why-journalists-need-learn-about-metadata) and "Metadata 101: Understanding the basics of media metadata" by  [Freedom of the Press Foundation](https://freedom.press/digisec/blog/metadata-101/).

## Guides and articles

Image Verification Assistant's webpage provides an interactive [tutorial](https://mever.iti.gr/forensics/?tour=start) for the tool. For understanding results and forensic filters, click on "What does it mean?" that appears with each filter and result.&#x20;

## Tool provider

Image Verification Assistant is [developed](https://mever.iti.gr/forensics/about.html) by CERTH-ITI, a research organization and Deutsche Welle (DW), Germany’s international broadcaster.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
