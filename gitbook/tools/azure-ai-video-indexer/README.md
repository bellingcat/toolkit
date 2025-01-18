---
description: >-
  AI tool that indexes video and audio and extracts insights about various
  entities.
---

# Azure AI Video Indexer

## URL

[https://vi.microsoft.com](https://vi.microsoft.com/en-us)

## Description

Microsoft Azure AI Indexer allows users to gain insights from videos and audio that are hard to get.&#x20;

It’s useful for journalists and open-source researchers analyzing hours-long video footage from crowd-like situations such as protests, mobs, etc. and where facial recognition is needed for verification and where other tools often fail in such cases.

The audio analysis is particularly helpful, for instance, for city-hall meeting audios, which can be long and tedious. Azure Indexer reduces the time required for analyzing key insights extracted from files.

## Steps

After making an account, upload a video or audio by navigating to the "Library" tab.  It provides 2400 free minutes or 40 hours.&#x20;

Videos/audios from local device, or a link can be added for file upload. User can adjust setting to their needs, for instance, by changing the privacy, video source language, and the streaming quality. Navigate to advanced settings for more options.

<figure><img src=".gitbook/assets/Azure step 1.png" alt="" width="563"><figcaption><p>Option to configure before uploading a file</p></figcaption></figure>

The advanced "Indexing Preset" allows users to configure settings to include models that can help extract insights about entities most relevant to analysis. Some features such as face detection require subscription.

<figure><img src=".gitbook/assets/Azure step 2.png" alt=""><figcaption><p>Indexing Preset settings</p></figcaption></figure>

When the file is ready to upload, the service requires to mark a checkbox that explicitly states: "... that the use of any facial recognition functionality in this service is not by or for a police department in the United States..."&#x20;

<figure><img src=".gitbook/assets/Azure step 3.png" alt=""><figcaption></figcaption></figure>

After the video is uploaded and indexed, select the project to analyze the findings.

We used a sample video by Microsoft, in this case “Foundation Models and Tooling - Satya Nadella at Microsoft Ignite 2023,” to avoid privacy and copyright violations.

## What the Insight Tab shows

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
* [x] Partially Free
* [ ] Paid

The tool is partially free and provides 40 hours of footage/audio analysis.&#x20;

Pricing details [here](https://azure.microsoft.com/en-us/pricing/details/video-indexer/).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Microsoft Entra ID, personal Microsoft account or Google ID is required for using the service.

## Limitations

Like any other tool, Azure AI indexer has its limitations. It doesn’t cover all languages, so it may not be useful for all audios and videos.

Facial recognition may not work efficiently all the time, for example if the footage is of poor quality or there is bright coloring, etc. Make sure to double check your findings using other tools and additional reporting.

## Ethical Considerations

Make sure you have the consent of the entities involved in the footage if possible, especially if the video and audio are being uploaded publicly and it doesn't infringe anyone's privacy rights.

The service before uploading explicitly states to make sure "any facial recognition functionality in this service is not by or for a police department in the United States..."  Read the service's terms and conditions before uploading.

Ethical journalism guidelines can also be helpful in understanding how to use facial recognition functionalities in reporting.

## Guides and articles

Henk Van Ess on GIJN: [https://gijn.org/resource/facial-recognition-made-easy/](https://gijn.org/resource/facial-recognition-made-easy/)

Microsoft’s Azure Guide: [https://learn.microsoft.com/en-us/azure/azure-video-indexer/upload-index-media](https://learn.microsoft.com/en-us/azure/azure-video-indexer/upload-index-media)

YouTube short guide by Microsoft Academy Hub here [https://www.youtube.com/watch?v=wssVLlLGeyU](https://www.youtube.com/watch?v=wssVLlLGeyU)

## Tool provider

Microsoft&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
