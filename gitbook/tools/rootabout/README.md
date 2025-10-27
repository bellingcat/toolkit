---
updated: '2025-10-26'
description: >-
  RootAbout is a reverse image search tool that pulls indexed images from the
  Internet Archive.
---

# RootAbout

## URL

[http://rootabout.com/](http://rootabout.com/)

## Description

RootAbout is a reverse image search tool that compares an uploaded image with images from the Internet Archive. It has over [37.3 million pictures](https://rootabout.com/faq.php#What%20has%20RootAbout%20indexed) from Internet Archive collections indexed and therefore does not need to host any photos itself.

To use the tool, you just need to upload an image of your choice. Under the search option, click on “Internet Archive.” Sometimes, this search option doesn’t work. You can go to the advanced search tab to adjust the size, flip and rotate the image and try again.

The Open Library search feature lets users compare book covers from its archives with an uploaded picture. As a project by the Internet Archive, [Open Library ](https://openlibrary.org/)catalogs and creates web pages for books. Anyone can create an account and contribute to the catalog.

RootAbout also provides details about image [metadata](https://rootabout.com/faq.php#What%20is%20RootAbout) after conducting the search, including its type, dimensions, creator, image type, the year it was published by its creator and its description. It also informs the user if the result is a strong match.

## Internet Archive Search

To test the tool, we uploaded the image “Doradus Nebula” from NASA's Hubble Space [collection](https://hubblesite.org/contents/media/images/2001/21/1080-Image.html) (Internet Archive version [here](https://archive.org/details/NIX-PIA04200)). The search provided three results. The first result is shown here:

<figure><img src=".gitbook/assets/Root About search result.png" alt=""><figcaption><p>The first RootAbout match is from 2003.</p></figcaption></figure>

This result informs us that it is a “strong match,” suggesting the image is a near or an exact match with the photo we uploaded. RootAbout provides metadata for its results as found on the Internet Archive. For instance, the RootAbout description states that this image was published in 2003, which is also stated on the Internet Archive’s [page](https://archive.org/details/NIX-PIA04200). It is owned/created by “NASA/Jet Propulsion Laboratory (NASA-JPL)." Finally, the size is 374,356 bytes and its unique identifier is "NIX-PIA04200."

RootAbout displays all versions of the image it has indexed from the Wayback Machine. In this case, the second result which is also a strong match, was [published](https://archive.org/details/PLAN-PIA04200) in 2001.

<figure><img src=".gitbook/assets/Screenshot 2025-01-19 at 6.25.42 PM.png" alt=""><figcaption><p>The second match is the same image published in 2001.</p></figcaption></figure>

**Important note**: Apart from a few exceptions, RootAbout does not work with [photos from the Wayback Machine](https://rootabout.com/faq.php#What%20has%20RootAbout%20indexed). For instance, we tested the images [here](https://archive.org/details/dr_future-map-of-the-world-10902000), [here](https://archive.org/details/speed-1970_20220823_1758), and [here](https://archive.org/details/contact_fingerlakes1_5381) and did not get any results. This limitation, along with other shortcomings of the tool, will be discussed in the **Limitation** section.

## **Open Library search**

To test this feature, we uploaded the cover of [Ghost Wars](https://en.wikipedia.org/wiki/Ghost_Wars) by Steve Coll. The search yielded two results, the top result is shown below:

<figure><img src=".gitbook/assets/Screenshot 2025-01-19 at 4.34.53 PM.png" alt=""><figcaption><p>The top result for the book cover of Ghost Wars using the Open Library Archive</p></figcaption></figure>

The search indicates that the top result is a “strong match". The description notes this book edition was published in 2008 (note the original version was published in 2004). It states that the file size is 31,842 bytes and it provides a link to Open Library’s [webpage](https://openlibrary.org/books/OL24251547M/Ghost_Wars) for the book.

**Note**: This search also yielded a second “fair match” result. The publication date for this [version](https://openlibrary.org/books/OL7361460M/Ghost_Wars) is 2004, which shows that RootAbout can pull various versions of the same book that it has indexed from Open Library.

<figure><img src=".gitbook/assets/Screenshot 2025-01-19 at 4.49.28 PM.png" alt=""><figcaption><p>The second result shown by RootAbout</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

The images must be in[ JPEG or PNG](https://rootabout.com/faq.php#What%20can%20I%20upload) format. However, your web browser automatically converts other formats into PNG if you upload a picture.

## Limitations

* RootAbout only indexes the Internet Archive; so unlike TinEye, Google and other search engines [it does not focus on the whole internet](https://rootabout.com/faq.php#Why%20doesnt%20my%20image%20match).
* The tool is also not able to match photos with pictures from the [Wayback Machine](https://bellingcat.gitbook.io/toolkit/more/all-tools/internet-archive) which can be a crucial limiting factor for open source researchers.
* The search is sometimes slow. This is because the tool does not store Internet Archive pictures but it finds them on the Internet Archive via a six step process which is explained [here](https://rootabout.com/faq.php#Why%20is%20RootAbout%20sometimes%20slow).
* According to the[ RootAbout website](https://rootabout.com/faq.php#What%20kinds%20of%20pictures%20will%20match), the tool only matches pictures that are nearly identical: "If your picture differs by more than 10%, then it probably won't match. Even simple changes, like cropping an edge or rotating the picture by 5° can be enough to make the picture appear different."

## Ethical Considerations

Just like when you are using reverse image search features offered by search engines, you need to check the copyright of any result image that you get from RootAbout. On its [website](https://rootabout.com/faq.php), RootAbout states: “Each picture's copyright is retained by the original copyright holder. Pictures in the search results are provided by the public collections at the Internet Archive.” Be particularly careful when you plan to use pictures from the results list elsewhere.

## Guide

RootAbout has provided a guide for its usage in its [FAQ](https://rootabout.com/faq.php).

## Tool provider

The tool is provided by Hacker Factor, also known as Dr. Neal Krawetz. More details about Hacker Factor can be found [here](https://www.hackerfactor.com/about.php).

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer         |
| ----------------------- |
| Anisa Shabir GAP member |
|                         |
