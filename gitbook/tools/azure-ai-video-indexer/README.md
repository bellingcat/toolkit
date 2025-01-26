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

Other features that might be useful for open source researchers are its ability to extract text in videos ([optical character recognition](https://learn.microsoft.com/en-us/azure/azure-video-indexer/ocr-insight)) and object detection. For instance, the tool is able to detect [airplanes, cars, traffic lights or fire hydrants.](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight)

## Steps

After creating an account, upload a file or add a video or audio URL by navigating to the "Library" tab.&#x20;

The advanced "Indexing presets" allows users to configure settings to include models that can help extract insights about entities that are most relevant to their analysis. Some features such as face detection require a subscription.

<figure><img src=".gitbook/assets/Azure step 2.png" alt=""><figcaption><p>Features like "Character recognition" or "Object detection" can be relevant for some types of open source investigations.</p></figcaption></figure>

## What the Insight Tab shows

We[ uploaded](https://www.youtube.com/watch?v=-Y3GQ6mSGqM) the video "Presenting: The Bellingcat Online Open Source Investigations Toolkit" to Azure AI indexer (download it first). The video stars volunteer members at Bellingcat's Global Authentication Project, who explain the new Bellingcat toolkit and its exciting features for the open-source community.

The tool identified two objects from the video: a “laptop” and a “clock”. The laptop appears at timestamp 0:56 till 1:04. Users can hover over the video progress bar and click on the black spot that indicates where the object is. Similarly, a clock, which is actually the Bellingcat volunteer community's logo, round in shape, can be seen at timestamp 1:13 to 1:16. The tool indexed the logo as a “clock” due to its round shape, which is an imperfect but near identification of object and its shape.

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.05.15 AM.png" alt=""><figcaption><p>Objects and topics extracted from the footage</p></figcaption></figure>

The results show that the volunteers in the video likely discussed 10 topics and the prominent ones are “machine learning” and “artificial intelligence.” Hover over the progress bar on the right to see where it occurs.&#x20;

Azure AI indexed 30 keywords from the video. Selecting the keyword “bellingcat staff” shows where this word was mentioned in the video. Clicking on the black spots representing this keyword will take you directly to the exact timestamp in the video. To see this particular keyword being mentioned in sequence, just click "play next" or "play previous" beneath the progress bar under the keyword section on the right.

<figure><img src=".gitbook/assets/Keywords screenshot.png" alt=""><figcaption><p>Red circles indicate where the keyword occurs. Green rectangles indicates that clicking on the black spot on the progress bar takes you the corresponding timestamp in the video</p></figcaption></figure>

The most important feature of the tool is its ability to extract entities from the footage. The tool has identified and indexed three individuals who mentioned their names in the video: Fraser, Laura, and Afton. On progress bar on the right, you can select a name to see where that person appears throughout the footage. Here’s the visual:

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 9.49.09 PM.png" alt=""><figcaption><p>Entities extracted from the footage</p></figcaption></figure>

{% hint style="warning" %}
While the tool has successfully indexed all three people in the initial moments in this example, it hasn’t done so for the latter half. This could be because the video is short, or changes in [facial expressions](https://www.researchgate.net/publication/374738467_Face_Recognition_Challenges_and_Solutions_using_Machine_Learning), head poses, or occlusion might have prevented the technology from effective indexing. See how this can be improved by [consulting](https://learn.microsoft.com/en-us/azure/azure-video-indexer/face-grouping-how-to?utm_source=chatgpt.com) [resources](https://learn.microsoft.com/en-us/azure/azure-video-indexer/customize-person-model-how-to?tabs=customizewebportal) [provided](https://learn.microsoft.com/en-us/azure/azure-video-indexer/customize-person-model-how-to?tabs=customizewebportal) by Microsoft.
{% endhint %}

Other entities include "brands." It has identified GitHub, and tools like Google Maps from the toolkit interface shown in the footage. If any references about the entities are incorrect, details under the **Insights** tab can edited. Tap the edit icon (a pencil) in the top right corner to make changes.

One can also view the emotions appearing in the video. For instance, the tool shows us that this entire video has 2.17% of joy. Select the identified area on the progress bar to see where different emotions appear. Finally, “13 scenes” appear in the footage.

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 11.07.51 PM.png" alt=""><figcaption><p>Emotions appearing in the footage</p></figcaption></figure>

If the Insight section is crowded, users can use filters by selecting or deselection various options highlighted below:

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.00.51 AM.png" alt=""><figcaption></figcaption></figure>

## Timeline Section

This section helps in capturing quotes in sequence from the footage and getting translations in the preferred language. The tool supports translation into multiple languages; see more details[ here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/language-support). For accuracy, make sure you review the translation. If you are not familiar with the language, cross-check it with experts for verification. Captions in the timeline can also be edited by selecting the pencil icon in the top-right corner. The image below shows the translation of English captions from the footage into Urdu (click on the globe icon for more translation options):

<figure><img src=".gitbook/assets/Screenshot 2025-01-25 at 11.34.04 PM.png" alt=""><figcaption></figcaption></figure>

Findings can also be downloaded as four options: insights (JSON), artifacts (ZIP), source video, and closed captions.

* [ ] Free
* [x] Partially Free
* [x] Paid

The tool is paid but it provides a [free trial account](https://azure.microsoft.com/en-us/pricing/details/video-indexer/#pricing) which allows to work with up to 10 hours of videos (40 for API users). Pricing details can be found [here](https://azure.microsoft.com/en-us/pricing/details/video-indexer/).

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

You need to create a Microsoft account or sign up through Google for using the Azure AI Video Indexer.&#x20;

## Limitations

Like any other tool, Azure AI indexer has its limitations. It does not cover all languages and therefore it may not be useful for all audios and videos. A list of supported languages can be found [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/language-support).&#x20;

The facial recognition feature may not work efficiently all the time, for example if the footage is of poor [quality](https://www.researchgate.net/publication/374738467_Face_Recognition_Challenges_and_Solutions_using_Machine_Learning) (low resolution) or there is bright coloring. Always make sure to double check your findings using other research methods.&#x20;

Once a user uploads a video, the tool requires to mark a checkbox that explicitly states: "that use of any facial recognition functionality in this service is not by or for a police department in the United States." In addition, all users need to confirm that they have the rights to use and store the uploaded videos before they use the tool.

<figure><img src=".gitbook/assets/Screenshot 2025-01-26 at 12.20.25 AM.png" alt=""><figcaption><p>Checking a box before uploading the video</p></figcaption></figure>

It is also important to note that the tool is not able to identify individuals. It is able to spot if the same [individual](https://learn.microsoft.com/en-us/azure/azure-video-indexer/face-detection-insight) shows up several times in a video but the open source researcher still needs to find out who the person is (unless they are a celebrity).

While Microsoft's Azure AI Video Indexer is able to help with object detection, the supported objects are still limited. Find a list of all supported objects [here](https://learn.microsoft.com/en-us/azure/azure-video-indexer/object-detection-insight).

## Ethical Considerations

Ethical considerations include privacy concerns. Ethical journalism guidelines can be helpful in understanding how to use facial recognition features in your reporting. For instance, Poynter developed a [starter kit](https://www.poynter.org/ethics-trust/2024/how-to-create-newsroom-artificial-intelligence-ethics-policy/) for an AI ethics policy for newsrooms. You might also want to read Josephine Lulamae's reflections on the ethical use of facial recognition tools in the AlgorithmWatch article: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone](https://algorithmwatch.org/en/face-recognition-for-everyone/) (2022).

See "Six principles to guide Microsoft’s facial recognition work" [here](https://blogs.microsoft.com/on-the-issues/2018/12/17/six-principles-to-guide-microsofts-facial-recognition-work/).

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
