---
description: AI video tool for facial detection and other types of insights.
---

# Azure AI Video Indexer

## URL

[https://vi.microsoft.com](https://vi.microsoft.com/en-us)

## Description

Microsoft's Azure AI Video Indexer allows open source researchers to gain various types of insights from videos.

Through the use of facial detection the tool can automatically spot individuals who appear several times throughout a video. This feature can be helpful when analysing footage of crowd-like situations like protests or when working with vast amounts of video material.

Azure AI Video Indexer is also able to extract key topics or keywords from videos and it can be used to generate transcripts (also in several languages). Those features can reduce the time that is required to analyse a particular set of videos or audios, for instance from long city hall meetings.

Other features that can be useful for open source researchers are its ability to extract text in videos ([optical character recognition](https://learn.microsoft.com/en-us/azure/azure-video-indexer/ocr-insight)) and object detection. The tool is able to detect various objects, for instance [airplanes, cars, traffic lights or fire hydrants.](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight)

## Steps

After creating an account, upload a file or add a video or audio URL by navigating to the "Library" tab.

The advanced "Indexing presets" allow users to configure settings to include models that can help extract insights about entities that are most relevant to their analysis. Some features such as face detection require a subscription.

<figure><img src=".gitbook/assets/Azure step 2.png" alt=""><figcaption><p>Features like "Character recognition" or "Object detection" can be relevant for some types of open source investigations.</p></figcaption></figure>

## What the Insight Tab shows

To test the tool, we uploaded the video ["Presenting: The Bellingcat Online Open Source Investigations Toolkit"](https://www.youtube.com/watch?v=-Y3GQ6mSGqM). The video stars Bellingcat volunteers who explain the Bellingcat toolkit and its features to the open source researcher community.

To use the object detection feature of the Video Indexer tool, users can hover over the video progress bar and click on the black boxes that indicate where objects (from the [list of objects](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight) which the tool knows) were found.

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.05.15 AM.png" alt=""><figcaption><p>Objects and topics extracted from the footage</p></figcaption></figure>

In our video, the tool identified two objects: A “laptop” which is visible at 0:56 seconds and a “clock”, which is actually the Bellingcat volunteer community logo, at 1:13 seconds. Most likely, the tool misidentified the logo as a “clock” due to its round shape.

In addition, the tool identified "Machine learning" and "Artificial intelligence" as two topics that are discussed in the video (see the screenshot above). It also indexed 30 keywords. Selecting one of the keywords brings up the exact timestamp of when this keyword was mentioned. Users can click on the black boxes on the progress bar to be brought to the relevant section of the video. To see all the instances when a particular keyword is mentioned throughout a video, just click "play next" or "play previous" beneath the progress bar.

<figure><img src=".gitbook/assets/Keywords screenshot.png" alt=""><figcaption><p>The red circles indicate where the keyword occurs. The green rectangles indicate that clicking on the black box in the progress bar takes you the corresponding timestamp in the video.</p></figcaption></figure>

Highly relevant for open source researchers is the tool's ability to extract faces from video footage. In our example, the tool has identified three individuals who mentioned their names in the video: Fraser, Laura, and Afton. On progress bar on the right, you can select a name to see where that person appears throughout the footage:

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 9.49.09 PM.png" alt=""><figcaption><p>The tool is able to extract individuals from video footage.</p></figcaption></figure>

The tool is also able to detect "brands." In our case, it has identified GitHub, and tools like "Google Maps" from the toolkit interface that are shown in the footage. If information about entities are incorrect, the details can be edited under the **Insights** tab. Tap the edit icon (a pencil) in the top right corner to make changes.

The tool also analyzes emotions that appear in videos. For instance, according to the tool, our video displays 2.17% of joy. Finally, the tool also tries to give an overview of the different scenes that appear in the footage. In our case it found 13 scenes.

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 11.07.51 PM.png" alt=""><figcaption><p>Emotions appearing in the footage</p></figcaption></figure>

If the Insight section gets too crowded, users can select or deselect various options as shown below:

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.00.51 AM.png" alt=""><figcaption></figcaption></figure>

## Timeline Section

The timeline section provides a transcript of the video and supports translations into [multiple languages](https://learn.microsoft.com/en-us/azure/azure-video-indexer/language-support). For accuracy, make sure to review the translation. If you are not familiar with the language, cross-check it with native language speakers for verification. The transcription text can also be edited by selecting the pencil icon in the top-right corner. The image below shows the translation from English into Urdu (click on the globe icon for more translation options):

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 11.34.04 PM.png" alt=""><figcaption></figcaption></figure>

It is also possible to download the results.

* [ ] Free
* [ ] Partially Free
* [x] Paid

The tool is paid but it provides a [free trial account](https://azure.microsoft.com/en-us/pricing/details/video-indexer/#pricing) which allows to work with up to 10 hours of videos (40 for API users). Pricing details can be found [here](https://azure.microsoft.com/en-us/pricing/details/video-indexer/).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

You need to create a Microsoft account or sign up through Google for using the Azure AI Video Indexer.

## Limitations

Like any other tool, Azure AI indexer has its limitations. It does not cover all languages and therefore it may not be useful for all audios and videos. A list of supported languages can be found [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/language-support).

The facial detection feature may not work efficiently all the time, for example if the footage is of poor [quality](https://www.researchgate.net/publication/374738467_Face_Recognition_Challenges_and_Solutions_using_Machine_Learning) (low resolution) or there is bright coloring. Always make sure to double check your findings using other research methods.

It is also important to note that the tool is not able to identify individuals. It is able to spot if the same [individual](https://learn.microsoft.com/en-us/azure/azure-video-indexer/face-detection-insight) shows up several times in a video but the open source researcher still needs to find out who the person is (unless they are a celebrity). Microsoft only provides access to facial recognition services to [selected users](https://learn.microsoft.com/en-us/legal/cognitive-services/computer-vision/limited-access-identity).

Once a user uploads a video, the tool requires to mark a checkbox that explicitly states: "that use of any facial recognition functionality in this service is not by or for a police department in the United States." In addition, all users need to confirm that they have the rights to use and store the uploaded videos before they use the tool.

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.20.25 AM.png" alt=""><figcaption><p>The tool requires to check a box before uploading the video</p></figcaption></figure>

While Microsoft's Azure AI Video Indexer is able to help with object detection, the supported objects are still limited. Find a list of all supported objects [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight).

## Ethical Considerations

Ethical considerations include privacy concerns. Ethical journalism guidelines can be helpful in understanding how to use facial recognition features in your reporting. For instance, Poynter developed a [starter kit](https://www.poynter.org/ethics-trust/2024/how-to-create-newsroom-artificial-intelligence-ethics-policy/) for an AI ethics policy for newsrooms. You might also want to read Josephine Lulamae's reflections on the ethical use of facial recognition tools in the AlgorithmWatch article: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone](https://algorithmwatch.org/en/face-recognition-for-everyone/) (2022).

[The Guardian](https://www.theguardian.com/technology/2022/jun/22/microsoft-limits-access-to-facial-recognition-tool-in-ai-ethics-overhaul) wrote about Microsoft's decision to limit access to facial recognition in [this article](https://www.theguardian.com/technology/2022/jun/22/microsoft-limits-access-to-facial-recognition-tool-in-ai-ethics-overhaul).

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

| Page maintainer         |
| ----------------------- |
| Anisa Shabir GAP member |
|                         |
