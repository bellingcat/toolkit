---
description: A tool for detecting audio deepfakes.
---

# Hiya Deepfake Voice Detector

## URL

[https://www.hiya.com/products/deepfake-voice-detector](https://www.hiya.com/products/deepfake-voice-detector)

## Description

Hiya identifies deepfake audio. A deepfake is [synthetic](https://www.turing.ac.uk/blog/what-are-deepfakes-and-how-can-we-detect-them) media, such as audio, video, or images, that can mimic the appearance or voice of a real person by using artificial intelligence. This technology has been misused to spread disinformation and scam people, for example, by faking audio messages from [officials](https://www.abc.net.au/news/2024-01-23/ai-phonecall-posing-as-joe-biden-being-investigated/103378702) or [loved ones](https://archive.fo/cn2UV).

Hiya is available as both a standalone [Chrome](https://chromewebstore.google.com/detail/hiya-deepfake-voice-detec/akmieeldmgcllmokbpaibfelofjiilpc) extension and an integrated tool within the [InVID Verification Plugin](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid), a suite of verification tools used by journalists, researchers and fact-checkers to verify digital media. Once installed in the browser, the extension aims to detect audio deepfakes across social media, news, and other websites.&#x20;

To analyze audio in a video on any website, simply open that page and click the extension icon in the Chrome browser in the top right corner. Play the video seamlessly, then click the “start analyzing” tab to collect the audio sample for analysis. The media being analyzed and the extension work side by side without the need to close either.

<figure><img src=".gitbook/assets/Start analyzing.jpg" alt=""><figcaption><p>Click on the "start analyzing" option to collect and analyze the media of your choice.</p></figcaption></figure>

The tool then collects and rates the audio on a scale of 1 to 100 points. The lower the score, the higher the likelihood that the sample is fake. The closer the score is to 100, the higher the probability that it is real. For instance, Henry Cavill's voice in a YouTube interview from [December 2021](https://www.youtube.com/watch?v=tN6EIt9cq4w) analyzed via Hiya has been rated authentic.

<div><figure><img src=".gitbook/assets/Hiya collects audio.jpg" alt=""><figcaption><p>Hiya collects an audio sample from the YouTube clip being played side by side.</p></figcaption></figure> <figure><img src=".gitbook/assets/Hiya displays results .jpg" alt=""><figcaption><p>Hiya rates the sample after collection, which in this case is an authentic audio.</p></figcaption></figure></div>

Our testing shows the extension works on almost any website, including social media sites like X (formerly Twitter), Instagram, TikTok, Facebook and Bluesky, provided the websites are opened in Chrome and the tool is installed.

<figure><img src=".gitbook/assets/Screenshot 2025-10-31 at 02.05.24.png" alt=""><figcaption><p>Hiya's Chrome extension shows a score of 3/100 ("likely a deepfake") for a portion of a video (from 0:17 to0:25), featuring the Indian Army Chief, purportedly admitting that India lost six jets to Pakistan in the India-Pakistan conflict. The video was circulating online in August 2025. <a href="https://www.sochfactcheck.com/doctored-clip-of-indian-army-chief-admitting-india-lost-six-jets-goes-viral/">The author of this text investigated this synthetic claim</a> by using - amongst other methods - Hiya's Chrome extension. Other organizations, for example <a href="https://cyberpeace.org/resources/blogs/factcheck-ai-generated-audio-falsely-claims-coas-admitted-to-loss-of-6-jets-and-250-soldiers">CyberPeace</a> and <a href="https://www.boomlive.in/fact-check/fake-news-ai-voice-over-video-army-chief-general-upendra-dwivedi-admitting-that-india-lost-6-jets-and-2-50-soldiers-factcheck-29250">Boom</a>, had also fact-checked the video.</p></figcaption></figure>

The Chrome extension needs to check just [one second](https://blog.hiya.com/hiyas-new-chrome-extension-identifies-deepfakes) of audio or video to determine whether the tool considers it as fake or real, while the version integrated into the InVID Verification Plugin allows longer media uploads (audio files only) ranging from two seconds to five minutes.&#x20;

<figure><img src=".gitbook/assets/InVid uses 2 secs to five minutes copy.png" alt=""><figcaption><p>Hiya is integrated within the InVid Verification Plugin that supports media uploads ranging from two seconds to five minutes.</p></figcaption></figure>

The extension uses "[Hiya’s AI Voice detection capabilities](https://chromewebstore.google.com/detail/hiya-deepfake-voice-detec/akmieeldmgcllmokbpaibfelofjiilpc)" which are "advanced AI solutions powered by deep learning," [according](https://www.hiya.com/products/protect/ai-voice-detection) to the tool provider.

The tool provider states its deepfake detection [technology ](https://www.hiya.com/newsroom/press-releases/hiya-acquires-deepfake-voice-detection-leader-loccus-ai)is able to analyze audios and videos in multiple languages and also states that it is "[Language and channel independent](https://www.hiya.com/products/deepfake-voice-detector)..." We have not been able to independently verify claims of multiple languages supported by Hiya.

It is important to note that the tool is not perfect and may lead to false positives. Hiya can nevertheless be a handy tool when researching the rising tide of AI generated disinformation. Several fact-checking teams, including [AFP Fact Check](https://factcheck.afp.com/doc.afp.com.78448G3), can be seen using it as part of their research workflows.

### Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

After signing up for the extension, users can do 200 daily checks for free.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

A sign up via email is required to use Hiya's Chrome extension.

## Limitations

1. As deepfake technology advances, it is becoming [increasingly](https://www.thebureauinvestigates.com/stories/2026-07-30/deepfake-experts-whats-real-sam-gregory) difficult for tools to detect fake media. Hiya may not always detect deepfake audio or video. False positives or negatives are likely to occur.
2. The Chrome extension just analyses small parts of any video or audio and may therefore not be the best choice for analyzing longer audios and videos. Switching to the Hiya version within the [InVid](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid) plugin could be one option to mitigate this since it allows larger file uploads. However, even the InVid version suggests to "Test smaller sections for a more precise analysis.”
3. The tool only provides a probability score of how likely it is that the sample is fake or real but it does not provide any contextual information. It is crucial to find other ways of verification, such as reaching out to experts, finding contextual information in news reports, or using other deepfake detection tools to double-check Hiya's results.

## Ethical Considerations

The tool may produce false positives or negatives. Users, especially journalists and researchers, need to be aware that it is crucial to double-check any results before drawing conclusions. It is recommended to be transparent about the limitations of the tool when including Hiya scores in publications or when communicating them to others.

Access to detection tools may help malicious actors improve evasion [strategies](https://arxiv.org/pdf/2102.06109), increasing the sophistication of future deepfakes.

## Guides and articles

As AI-generated misinformation and disinformation continue to distort the information landscape, making it increasingly difficult to distinguish what’s real from what’s fake, some experts have taken it upon themselves to guide which tools and techniques can still be used to fight fake news. Henk Van Ess wrote a detailed guide, “[Reporter’s Guide to Detecting AI-Generated Content,](https://gijn.org/resource/guide-detecting-ai-generated-content/)” for the Global Investigative Journalism Network (GIJN) on Sept. 1, 2025. The guide recommends using Hiya’s Chrome extension, alongside techniques for detecting and debunking deepfakes.

Also check out DW’s article “[Synthetic Audio Detectors Put to the Test](https://innovation.dw.com/articles/synthetic-audio-detectors-tested)” from Sept. 29, 2025, which tested Hiya, integrated within InVid, alongside deepfake detection tools Deepfake-O-Meter and Deepfake Total.

## Tool provider

Hiya, [Seattle](https://chromewebstore.google.com/detail/hiya-deepfake-voice-detec/akmieeldmgcllmokbpaibfelofjiilpc), U.S.

## Similar tools

A tool similar to Hiya is [Deepfake-O-Meter](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/landing_page), which is an initiative of the [University at Buffalo](https://www.buffalo.edu/home/story-repository.host.html/content/shared/university/news/ub-reporter-articles/stories/2024/09/deep-fake-o-meter.detail.html). While Hiya only verifies deepfake audio or AI-generated voice in a video, Deepfake-o-Meter allows users to analyze deepfake audio, video, and images. Both can be used simultaneously to cross-check the same sample, thus reducing the risk of false positives or false negatives.

Hiya and DeepFake-O-Meter are free to use, but they require users to sign up. Hiya’s Chrome extension verifies content across social platforms, websites, etc., allowing users to check for deepfake voices or AI-generated media directly in their browser. Whereas DeepFake-O-Meter requires users to download media and upload it manually to the platform for analysis.

Meanwhile, the InVID plugin that integrates Hiya offers additional flexibility, allowing users to either paste media links or upload files directly from their computers, but a sign up is required to use it.

Another tool for audio deepfake detection and can be combined with others for effective analysis is [Deepfake Total](https://deepfake-total.com/) by Cognitive Security Technologies (CST) department of Fraunhofer AISEC ([Fraunhofer Institute for Applied and Integrated Security](https://www.aisec.fraunhofer.de/)), a research institute from [Germany](https://www.aisec.fraunhofer.de/de/impressum.html). This tools [supports](https://deepfake-total.com/) analyzing links from Instagram, YouTube, X or local file uploads.

#### Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
