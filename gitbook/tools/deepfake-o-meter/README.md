---
description: >-
  DeepFake-O-Meter is an online tool designed to detect deepfake media and help
  users differentiate between genuine and manipulated content.
---

# DeepFake-O-Meter

## URL

[https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/)

## Description

A simple drag-and-drop online tool, DeepFake-O-Meter allows users to upload photo, video or audio content to check for potential deepfakes: digital images that have been convincingly generated or altered to portray people or things that are not real. The tool also allows separate, direct YouTube link uploads of less than three minutes.

Users can upload material in any of the following formats:

**Images:** JPG, PNG, BMP and TIFF\
**Video:** MP4, AVI, MOV\
**Audio:** WAV, MP3

After the user submits the material, the tool will begin its analysis using a variety of AI detectors, and provide an estimated wait time for completion. Users can learn more about each AI detector on the ["Models" subpage](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/models), which provides brief descriptions.

Across various samples, there is dramatic variance among the different detection models. Sample analysis conducted on screenshots of imagery from the site ThisPersonDoesNotExist.com, a random AI face generator, took under two minutes and resulted in ratings ranging from 0% certainty of artificial content to 100% for a single photo, with many in between.

<figure><img src=".gitbook/assets/dfom-1.png" alt=""><figcaption><p>Screenshot displaying the ratings across various models for one sample image</p></figcaption></figure>

To view an overall assessment, users can click on "View Submission Report". This will provide a rating of overall confidence in whether the supplied content is genuine or artificially generated, by aggregating ratings from the various AI detectors. It will also provide a measure of confidence in that assessment.

<figure><img src=".gitbook/assets/dfom-2.png" alt=""><figcaption><p>Screenshot displaying the overall assessment as "inconclusive" for one sample image</p></figcaption></figure>

While tools like DeepFake-O-Meter are designed to help combat the growing tide of visual misinformation and disinformation online, providing open-source researchers with a quick and simple method for attempting to verify or debunk content, such tools are [notoriously unreliable](https://www.newsguardtech.com/special-reports/leading-ai-image-detection-tools-mislead-online-users-often-declaring-authentic-content-fake/) (see Limitations section below).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

You must register using a valid email address in order to use the site.

## Limitations

* **Accuracy:** AI detectors are [notoriously unreliable](https://www.newsguardtech.com/special-reports/leading-ai-image-detection-tools-mislead-online-users-often-declaring-authentic-content-fake/), often providing mixed or uncertain results; running the same image through DeepFake-O-Meter more than once may result in different ratings. DeepFake-O-Meter acknowledges that its [authenticity scores](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/) "reflect statistical similarity to training data patterns and do not constitute definitive proof of authenticity or manipulation", noting that the results should be "interpreted in conjunction with contextual and investigative analysis".
* **File size:** Larger files may cause the system to hang or stop functioning midway through the processing attempt, which could be an issue for lengthy or high-resolution videos.
* **Processing times:** These may fluctuate depending on file size, with larger videos taking more time to analyze than smaller images. Before starting an analysis, users have the option to exclude detection models with longer processing times, thereby speeding up the overall task.

## Ethical Considerations

* **Privacy:** Users must consider the privacy implications of submitting personal or sensitive videos or images to an online service for deepfake detection.
* **Bias and fairness:** Algorithms, such as those powering DeepFake-O-Meter, might be subject to [biases](https://guides.library.utoronto.ca/c.php?g=735513\&p=5297043) in their training data. This could potentially result in unequal performance across different demographics, such as gender or ethnicity.

## Guides and articles

* [Developer resources](https://github.com/yuezunli/deepfake-o-meter) on Github
* [Tutorial](https://www.youtube.com/watch?v=Om4-bE9a61I) by project director Siwei Lyu
* [The Reuters Institute](https://reutersinstitute.politics.ox.ac.uk/news/truth-casualty-how-indian-fact-checkers-debunked-false-claims-during-india-pakistan-crisis) describes how an Indian fact-checking site used DeepFake-O-Meter to investigate audio clips falsely attributed to Prime Minister Narendra Modi and other government officials.
* [AFP Fact Check](https://factcheck.afp.com/doc.afp.com.89RJ49E) used DeepFake-O-Meter to help debunk a video purporting to show a Bangladeshi woman pleading for help.
* [Forbes](https://www.forbes.com/sites/emmawoollacott/2026/04/21/theres-no-such-thing-as-brain-honey/) referenced Deep Fake-O-Meter in an article debunking online advertisements for a product claiming to cure Alzheimer's disease.

## Tool provider

The [UB Media Forensics Lab](https://ubmdfl.cse.buffalo.edu/), based at the University at Buffalo in New York, describes itself as a team of researchers and engineers "dedicated to advancing synthetic media detection". Contact information for the project team is [available here](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/contact).

## Similar tools

[AmIReal](https://seintpl.github.io/AmIReal/): This GAN detector can be used to help determine whether faces were generated by ThisPersonDoesNotExist.com.

[InVID](https://bellingcat.gitbook.io/toolkit/more/all-tools/invid): This toolkit, which supports the verification of images, videos and audio, enables registered users to assess the probability that content has been manipulated by AI.

| Page maintainer           |
| ------------------------- |
| Bellingcat volunteer team |
| August 2026               |

