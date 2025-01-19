---
description: AI video tool for facial recognition and other types of insights.
---

# Azure AI Video Indexer

## URL

[https://vi.microsoft.com](https://vi.microsoft.com/en-us)

## Description

Microsoft's Azure AI Video Indexer allows open source researchers to upload videos to gain various types of insights from them.

Through the use of facial recognition the tool can automatically spot individuals that are showing up several times in a video. This feature can be helpful when analysing footage of crowd-like situations like protests or when working with vast amounts of video material.&#x20;

The Azure AI Video Indexer can also be used to generate and translate transcripts into several languages. In addition, it is able to extract insights like key topics or words that show up several times. This feature can reduce the time that is required to analyse a particular set of videos or audios, for instance from long city hall meetings.&#x20;

Other features that might be useful for open source researchers is its ability to extract text that is showing up in a video ([optical character recognition](https://learn.microsoft.com/en-us/azure/azure-video-indexer/ocr-insight)) and to do object detection. For instance, the tool is able to detect [airplanes, cars, traffic lights or fire hydrants.](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight)

## Steps

After creating an account, upload a file or add a video or audio URL by navigating to the "Library" tab.&#x20;

The advanced "Indexing presets" allows users to configure settings to include models that can help extract insights about entities that are most relevant to their analysis. Some features such as face detection require a subscription.

<figure><img src=".gitbook/assets/Azure step 2.png" alt=""><figcaption><p>Features like "Character recognition" or "Object detection" can be relevant for some types of open source investigations.</p></figcaption></figure>

## What the Insight Tab shows

We used a sample video by Microsoft, in this case “Foundation Models and Tooling - Satya Nadella at Microsoft Ignite 2023,” to avoid privacy and copyright violations.

From the above-mentioned video we can see three people have prominently appeared throughout the video. “Jensen Huang” has appeared the most (42.1% of video). Azure provides details about prominent figures who get identified in the footage.&#x20;

Users can hover over the time-bar and select areas highlighted in black to see where this person appears throughout the footage or simply press “play next” to see it in sequence.

Overall, the insight bar shows that 46 people have been observed throughout the video. A user can follow the above steps for other entities as well.

In a video uploaded by the user, they can edit the name for entities in the insight section, so it's easier to navigate. The option can found on the upper-right corner of the window.

The topics section highlights the subjects mentioned or discussed in the footage. For example, choosing "artificial intelligence" displays its occurrences throughout the footage.&#x20;

<figure><img src=".gitbook/assets/Azure 4.png" alt=""><figcaption><p>Overview of the Insights section</p></figcaption></figure>

There can be various objects that occur in the footage. This service provides insights according to what’s found in the footage.

Similarly, we can see “keywords,” “labels,” “emotions,” and much more under the “insight” section.

## Timeline section

The transcription and translation of the audio/video appears under this section. Azure provides translation and identification of languages in 50 languages. See more details [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/transcription-translation-lid-insight). On the top right corner, click on the globe icon and select a language of your choice. Language can also be changed in the video and can appear as closed subtitles.

## Cost

* [ ] Free
* [ ] Partially Free
* [x] Paid

The tool is paid but it provides a [free trial account](https://azure.microsoft.com/en-us/pricing/details/video-indexer/#pricing) which allows to work with up to 10 hours of videos (40 for API users). Pricing details can be found [here](https://azure.microsoft.com/en-us/pricing/details/video-indexer/).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

You need to create a Microsoft account for using Microsoft's Azure AI Video Indexer.&#x20;

## Limitations

Like any other tool, Azure AI indexer has its limitations. It does not cover all languages and therefore it may not be useful for all audios and videos. A list of supported languages can be found [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/language-support).&#x20;

The facial recognition feature may not work efficiently all the time, for example if the footage is of poor quality or there is bright colouring. Always make sure to double check your findings using other research methods.&#x20;

Once a user uploads a video, the tool requires to mark a checkbox that explicitly states: "that use of any facial recognition functionality in this service is not by or for a police department in the United States." In addition, all users need to confirm that they have the rights to use and store the uploaded videos before they use the tool.

It is also important to note that the tool is not able to identify individuals. It is able to spot if the same individual shows up several times in a video but the open source researcher still needs to find out who the person is (unless they are a celebrity).

While Microsoft's Azure AI Video Indexer is able to help with object detection, the supported objects are still limited. Find a list of all supported objects [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight).

## Ethical Considerations

Make sure you have the consent of the entities involved in the footage if possible, especially if the video and audio are being uploaded publicly and it doesn't infringe anyone's privacy rights.

Ethical journalism guidelines can also be helpful in understanding how to use facial recognition features in reporting. Josephine Lulamae reflects on ethical questions around the use of facial recognition tools in the AlgorithmWatch article: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone](https://algorithmwatch.org/en/face-recognition-for-everyone/) (2022).

## Guides and articles

Microsoft’s Azure Guide: [Learn about Azure AI Video Indexer](https://learn.microsoft.com/en-us/azure/azure-video-indexer/).

Microsoft Academy Hub: [Azure AI Video Indexer](https://www.youtube.com/watch?v=wssVLlLGeyU).

Henk van Ess: [Facial recognition made easy](https://gijn.org/resource/facial-recognition-made-easy/) (GIJN).

## Tool provider

Microsoft, United States.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
