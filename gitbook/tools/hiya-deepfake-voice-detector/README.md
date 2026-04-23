---
description: A tool for detecting audio deepfakes.
---

# Hiya Deepfake Voice Detector

## URL

[https://www.hiya.com/products/deepfake-voice-detector](https://www.hiya.com/products/deepfake-voice-detector)

## Description

Hiya identifies deepfake audio. A deepfake is [synthetic](https://www.turing.ac.uk/blog/what-are-deepfakes-and-how-can-we-detect-them) media, such as audio, video, or images, that can mimic the appearance or voice of a real person by using artificial intelligence. This technology has been misused to spread disinformation and scam people, for example, by faking audio messages from [officials](https://www.abc.net.au/news/2024-01-23/ai-phonecall-posing-as-joe-biden-being-investigated/103378702) or [loved ones](https://archive.fo/cn2UV).

Hiya is available as both a standalone [Chrome](https://chromewebstore.google.com/detail/hiya-deepfake-voice-detec/akmieeldmgcllmokbpaibfelofjiilpc) extension and an integrated tool within the [InVID Verification Plugin](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid), a suite of verification tools used by journalists, researchers and fact-checkers to verify digital media. Once installed in the browser, the extension aims to detect audio deepfakes across social media, news, and other websites.&#x20;

The tool rates the audio on a scale of 1 to 100 points. The lower the score, the higher the likelihood that the sample is fake. The closer the score is to 100, the higher the probability that it is real.

<figure><img src=".gitbook/assets/Screenshot 2025-10-31 at 02.05.24.png" alt=""><figcaption><p>Hiya's Chrome extension shows a score of 3/100 ("likely a deepfake") for a portion of a video (from 0:17 to0:25), featuring the Indian Army Chief, purportedly admitting that India lost six jets to Pakistan in the India-Pakistan conflict. The video was circulating online in August 2025. <a href="https://www.sochfactcheck.com/doctored-clip-of-indian-army-chief-admitting-india-lost-six-jets-goes-viral/">The author of this text investigated this synthetic claim</a> by using - amongst other methods - Hiya's Chrome extension. Other organizations, for example <a href="https://cyberpeace.org/resources/blogs/factcheck-ai-generated-audio-falsely-claims-coas-admitted-to-loss-of-6-jets-and-250-soldiers">CyberPeace</a> and <a href="https://www.boomlive.in/fact-check/fake-news-ai-voice-over-video-army-chief-general-upendra-dwivedi-admitting-that-india-lost-6-jets-and-2-50-soldiers-factcheck-29250">Boom</a>, had also fact-checked the video.</p></figcaption></figure>

The Chrome extension needs to check just [one second](https://blog.hiya.com/hiyas-new-chrome-extension-identifies-deepfakes) of audio or video to determine whether the tool considers it as fake or real, while the version integrated into the InVID Verification Plugin allows longer media uploads ranging from two seconds to five minutes.&#x20;

[According](https://www.hiya.com/newsroom/press-releases/hiya-acquires-deepfake-voice-detection-leader-loccus-ai) to Hiya's July 2024 press release, the deepfake detection tool is able to analyze audios and videos in multiple languages.&#x20;

It is important to note that the tool is not perfect and may lead to false positives. Hiya can nevertheless be a handy tool when researching the rising tide of AI generated disinformation. Several fact-checking teams, including [AFP Fact Check](https://factcheck.afp.com/doc.afp.com.78448G3), can be seen using it as part of their research workflows.

### Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

After signing up for the extension, users can do 20 daily checks for free.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

A sign up is required to use Hiya's Chrome extension.

## Limitations

1. As deepfake technology advances, it is becoming increasingly difficult for tools to detect fake media. Hiya may not always detect deepfake audio or video. False positives or negatives are likely to occur.
2. The tool just analyses small parts by playing the media over the Chrome extension. Analyzing larger audio and video may become more time-consuming. Switching to the InVid plugin, which allows larger file uploads, might help. Even with the InVid version, it is recommended to test smaller portions of the audio sample to achieve effective testing and precise results. “Hiya.com offers a voice cloning detection tool to pinpoint AI-generated text-to-speech in audio files. Suspect a track has been tampered with? Test smaller sections for a more precise analysis. Please note, this tool cannot identify human voice mimicry or post-processing alterations,” reads a cautionary note above the InVid version integrating Hiya.
3. The tool only provides the probability that the sample is fake or real, without any contextual information. It is crucial to find other ways to verify the media, such as reaching out to experts, finding contextual information in news reports, or using other deepfake detection tools to double-check Hiya's results.

## Ethical Considerations

The tool may produce false positives or negatives. Users, especially journalists and researchers, have an ethical obligation to double-check results before drawing conclusions or publishing findings.

Public access to detection tools may help malicious actors improve evasion strategies, increasing the sophistication of future deepfakes.

## Guides and articles

\-

## Tool provider

Hiya, [Seattle](https://chromewebstore.google.com/detail/hiya-deepfake-voice-detec/akmieeldmgcllmokbpaibfelofjiilpc), U.S.

## Similar tools

A tool similar to Hiya is [Deepfake-O-Meter](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/landing_page), which is an initiative of the [University at Buffalo](https://www.buffalo.edu/home/story-repository.host.html/content/shared/university/news/ub-reporter-articles/stories/2024/09/deep-fake-o-meter.detail.html). While Hiya only verifies deepfake audio or AI-generated voice in a video, Deepfake-o-Meter allows users to analyze deepfake audio, video, and images. Both can be used simultaneously to cross-check the same sample, thus reducing the risk of false positives or false negatives.

Hiya and DeepFake-O-Meter are free to use, but they require users to sign up. Hiya’s Chrome extension verifies content across social platforms, websites, etc., allowing users to check for deepfake voices or AI-generated media directly in their browser. Whereas DeepFake-O-Meter requires users to download media and upload it manually to the platform for analysis.

Meanwhile, the InVID plugin that integrates Hiya offers additional flexibility, allowing users to either paste media links or upload files directly from their computers.

#### Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
