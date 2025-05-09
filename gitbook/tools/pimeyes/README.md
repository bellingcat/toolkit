---
description: An AI-powered facial recognition reverse image search tool.
---

# PimEyes

## URL

[https://pimeyes.com/en](https://pimeyes.com/en)

## Description

PimEyes lets users upload pictures of a person and conducts an AI search to find pictures of faces that look similar. The results contain photos with similar looking people and links to websites where those pictures show up online, often allowing identification (name, organisation etc.) of the pictured individuals. PimEyes' [website states](https://pimeyes.com/en/faq) that the tool only searches public websites and does not look at social media and videos (or video thumbnails). Back in 2020, [netzpolitik.org ](https://netzpolitik.org/2020/pimeyes-face-search-company-is-abolishing-our-anonymity/)had still found social media photos in their results list while testing the tool. According to an [interview](https://netzpolitik.org/2022/pimeyes-ceo-the-user-is-the-stalker-not-the-search-engine/) with CEO Giorgi Gobronidze, PimEyes had "approximately 2.1 billion faces maximum" hashed in 2022.

The[ ](https://pimeyes.com/en/faq)tool provider [writes](https://pimeyes.com/en/faq) that the tool is "intendend solely for personal use" and "any search pertaining to other individuals is strictly prohibited". However, no measures are taken to prevent users from also uploading photos of others.&#x20;

During the last few years, the tool has been added to the toolbox of many open source researchers and journalists. For instance, Bellingcat used Pimeyes during [an investigation (by German journalists) to search for a picture of RAF terror suspect Daniela Klette](https://www.zdf.de/nachrichten/politik/deutschland/daniela-klette-verhaftung-gesichtserkennung-pimeyes-100.html) who had long been in hiding. The tool has also played a role in [identifying US Capitol January 6 rioters](https://gijn.org/stories/how-open-source-experts-identified-the-us-capitol-rioters/).

To use Pimeyes, open source researchers can upload a photo of a person of interest. It is possible to upload up to five pictures of the same individual. If the quality of the picture is low, Pimeyes suggests uploading a better picture and provides tips like having the person in the picture "looking forward" or having "no elements covering the face". However, it is also possible to ignore those suggestions and to do a search with a low quality image. Our own tests show that even with a low quality image, the tool may still be able to provide results.

Users can choose whether they want to search for pictures that have been indexed by Pimeyes recently or they can opt for "Any Time".

<figure><img src=".gitbook/assets/Time_Date_Pimeyes.png" alt="" width="375"><figcaption></figcaption></figure>

Pimeyes indicates when each picture in the results list has been indexed by the tool. This can be seen at the bottom of the information box that comes up when clicking on a listed picture:

<figure><img src=".gitbook/assets/Date_Stamp.png" alt="" width="239"><figcaption></figcaption></figure>

By choosing "safe search" Pimeyes tries to exclude "possible adult content from results." There is also a "deep search" [option](https://pimeyes.com/en/blog/how-to-use-pimeyes-a-brief-guide#paragraph9) that is only available to users with the most expensive plan and which claims to search the index ["more thoroughly"](https://pimeyes.com/en/blog/how-to-use-pimeyes-a-brief-guide#paragraph9).

The tool provider claims that their system is deleting pictures uploaded by users for search purposes within 48 hours and that they "[do not store any private data from our users](https://pimeyes.com/en/faq)". We are not able to independently verify those claims.





In recent years, the increased use of facial recognition tools has raised concerns about potential data and privacy abuse. However, when used responsibly, this technology is beneficial. For instance, in open source investigations, PimEyes can help identify individuals [targeted](https://gijn.org/resource/facial-recognition-made-easy/) by disinformation/misinformation.



There is also a way around the paywall for accessing results.

## Using Google Dorks to circumvent PimEyes' paywall

Open-source investigation can be challenging when investigative tools require a subscription for access. Some tricks and techniques can help find simpler solutions. For instance, using Google Dorks can help circumvent the PimEyes' paywall.

To demonstrate this, we uploaded an image of the late [former](https://i.tribune.com.pk/media/images/48389-zabpic-1491300516/48389-zabpic-1491300516-400x230.webp) prime minister of Pakistan, Zulfikar Ali Bhutto.

<figure><img src=".gitbook/assets/zulfiqar ali bhutto.jpeg" alt=""><figcaption></figcaption></figure>

Running the image through PimEyes provided multiple results but access requires a subscription. Selecting the required result shows us Bhutto's photo alongside an incomplete link:

<figure><img src=".gitbook/assets/Screenshot 2025-01-22 at 11.26.41 PM (1).png" alt=""><figcaption></figcaption></figure>

If you need these results urgently for an investigation, this might tempt you to pay $14.99 for one-time full access. But there’s another way around it: by predicting the answer to our search query, we can get a required result without any payment.

We know this personality is well-known, so the first keyword for our search is "Zulfikar Ali Bhutto." The site name appears to be "thefrontierpos," which is incomplete. A further search shows that this site is likely a Pakistani local publication known as "The Frontier Post." Taking cues from this, we'll use a site operator, and our complete search on Google will be: "Zulfikar Ali Bhutto" site:thefrontierpost.com

<figure><img src=".gitbook/assets/Screenshot 2025-01-22 at 11.41.14 PM.png" alt=""><figcaption></figcaption></figure>

The search is a hit and here's the link to the required [result](https://thefrontierpost.com/zulfikar-ali-bhutto-an-ideology/), an exact match of the result that PimEyes yielded. This article was published two years ago, which can be checked against PimEyes date beneath the result that states "indexed on August 25, 2023", confirming our search result matches the one from the tool.

Users can design their search queries based on the photo and the site name using various Google operators.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

The first 10 searches are partially free: It is possible to upload pictures and to see the results list but it is not possible to click on (or see) the URLs to see on which websites the pictures from the results list are appearing.&#x20;

A subscription is always required to access the detailed results. See the pricing details [here](https://pimeyes.com/en/premium).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

A web browser and a subscription for accessing results.

## Limitations

Not all searches are effective,  see how conducting searches with PimEyes can be improved [here](https://pimeyes.com/en/blog/how-to-improve-the-facial-recognition-search-results).

PimEyes is known for pulling incorrect images of women from [pornographic](https://www.nytimes.com/2022/05/26/technology/pimeyes-facial-recognition-search.html) sites, which is a concern that needs to be addressed.

## Ethical Considerations

See Poynter's starter kit for an AI ethics policy for [newsrooms](https://www.poynter.org/ethics-trust/2024/how-to-create-newsroom-artificial-intelligence-ethics-policy/).  Also, an [interview](https://lincolncenter.asu.edu/) of experts from Arizona State's Lincoln Center for Applied Ethics about the "The ethical implications of facial recognition technology."

Josephine Lulamae's reflections on the ethical use of facial recognition tools in the AlgorithmWatch article: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone](https://algorithmwatch.org/en/face-recognition-for-everyone/) (2022).

## Guide

See detailed [guide](https://pimeyes.com/en/blog/how-to-use-pimeyes-a-brief-guide) by PimEyes.

Another guide by PimEyes on [helping](https://pimeyes.com/en/blog/your-guide-to-using-pimeyes-the-cases-when-its-beneficial) users "detect catfishing, uncover fake dating profiles, and combat revenge porn."

[Facial Recognition Made Easy](https://gijn.org/resource/facial-recognition-made-easy/) by Henk Van Ess.

## Tool provider

The website does not provide details about the tool provider. According to news reports, the details [surrounding](https://www.washingtonpost.com/technology/2021/05/14/pimeyes-facial-recognition-search-secrecy/) the initial [ownership](https://www.nytimes.com/2022/05/26/technology/pimeyes-facial-recognition-search.html) are murky. The new owner of PimEyes is [Giorgi](https://www.nytimes.com/2022/05/26/technology/pimeyes-facial-recognition-search.html) Gobronidze [as](https://netzpolitik.org/2022/pimeyes-ceo-the-user-is-the-stalker-not-the-search-engine/) of 2022.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
