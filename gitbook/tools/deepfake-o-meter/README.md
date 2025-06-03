---
description: >-
  Deepfake-o-meter is an online tool designed for detecting deepfake videos,
  leveraging advanced detection techniques to help users differentiate between
  genuine and artificially manipulated content.
---

# DeepFake-O-Meter

## URL

[https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/](https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/)

## Description

The Deepfake-o-meter is an innovative tool developed by researchers at the University of Buffalo and is hosted on the university's zinc.cse.buffalo.edu portal. This web-based application is designed to identify and analyze deepfake videos, which are synthetic media in which a person in an existing image or video is replaced with someone else's likeness using artificial neural networks. Deepfake technology has implications in misinformation, privacy violations, and security threats, making the Deepfake-o-meter a timely and essential tool for verifying the authenticity of digital media.

The tool works by using advanced algorithms to detect inconsistencies or artifacts in videos that may not be noticeable to the human eye. It aims to address the growing problem of deepfake content circulating on the internet, which can often be used for malicious purposes, such as spreading false information or impersonating individuals.

**Warning:** automated deepfake and generative AI detection is notoriously inaccurate see the Limitations section.&#x20;

The example below shows the results for a generative AI image using Beijing Jiaotong University's image detector (2024). The result shows the image has a 50% chance of being fake which shows these detectors still have a way to go in detecting fake AI material.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-06-21 at 12.05.31 PM.png" alt="Screenshot of results for a generative AI image using Beijing Jiaotong University&#x27;s image detector (2024) the image shows text results with links to further information plus the original generative AI image.i"><figcaption><p>Screenshot of results for a generative AI image using Beijing Jiaotong University's image detector (2024).</p></figcaption></figure>

### Use Cases

Open source researchers often face the challenge of validating the authenticity of audio, video and image content that comes their way, especially in an era where deepfake technology has become increasingly sophisticated. The Deepfake-o-meter serves as a crucial tool for open source researchers in various scenarios:

1. **Verification of Source Material:** Before running a story, journalists can use the Deepfake-o-meter to ensure that any video, audio or still image evidence or statements from public figures haven't been tampered with or fabricated.
2. **Fact-checking:** In the fight against fake news, open source researchers can employ the Deepfake-o-meter to fact-check video content shared on social media or other platforms, helping to prevent the spread of misinformation.
3. **Political Reporting:** Video and audio involving politicians or political events are highly susceptible to manipulation. Open source researchers investigating politics can use the tool to vet content for authenticity before broadcasting or publishing it.
4. **Interview Authenticity:** Before using interview clips that could potentially be harmful or defamatory if fabricated, open source researchers can analyze the footage to confirm if the individuals actually said what is claimed.

By integrating the Deepfake-o-meter into their workflow combined with manual techniques, open source researchers can uphold the integrity of their reporting, ensuring that they are not unintentionally complicit in the spread of deepfake content.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* any modern web browser
* an email address to register for an account

## Limitations

Deepfake and Generative AI are notoriously difficult to detect using tools. Some of the limitations of this technology include:&#x20;

* **Accuracy**: While Deepfake-o-meter is a powerful tool for detecting deepfakes, it is not 100% accurate. There are instances where the tool might fail to detect sophisticated deepfake videos.
* **File Size**: Users are limited to submitting video files that do not exceed a certain size (e.g., 500MB), which might be an issue for high-resolution or long-duration videos.
* **Processing Time**: Depending on the server load and the size of the video submitted, the processing time can vary significantly, ranging from a few minutes to several hours.
* **Video Formats**: The tool may not support all video formats, thus requiring users to convert their videos to a compatible format before submission.
* **Privacy Concerns**: Users must consider the privacy implications of submitting personal or sensitive videos to an online service for deepfake detection.

For more information on why Deepfakes and Generative AI are hard to detect see:

* _Can Deepfakes Be Detected?_ (no date) _Can Deepfakes Be Detected?_ Available at: [https://serokell.io/blog/deepfakes-detection](https://serokell.io/blog/deepfakes-detection) (Accessed: 16 April 2024).
* Jaiman, A. (2022) _Deepfake detection is super hard!_, _Medium_. Available at: [https://towardsdatascience.com/deepfake-detection-is-super-hard-38f98241ee49](https://towardsdatascience.com/deepfake-detection-is-super-hard-38f98241ee49) (Accessed: 16 April 2024).
* Le, B. _et al._ (2023) ‘Why Do Facial Deepfake Detectors Fail?’, in _Proceedings of the 2nd Workshop on Security Implications of Deepfakes and Cheapfakes_. New York, NY, USA: Association for Computing Machinery (WDC ’23), pp. 24–28. Available at: [https://doi.org/10.1145/3595353.3595882](https://doi.org/10.1145/3595353.3595882).&#x20;
* anlen, shirin and Vázquez Llorante, R. (2024) _Spotting Deepfakes in an Election Year: How AI Detection Tools Work — and Sometimes Fail_. Available at: [https://gijn.org/stories/spotting-deepfakes-election-year/](https://gijn.org/stories/spotting-deepfakes-election-year/) (Accessed: 17 April 2024).
* _Spotting the deepfakes in this year of elections: how AI detection tools work and where they fail | Reuters Institute for the Study of Journalism_ (no date). Available at: [https://reutersinstitute.politics.ox.ac.uk/news/spotting-deepfakes-year-elections-how-ai-detection-tools-work-and-where-they-fail](https://reutersinstitute.politics.ox.ac.uk/news/spotting-deepfakes-year-elections-how-ai-detection-tools-work-and-where-they-fail) (Accessed: 26 April 2024).

## Ethical Considerations

When using the Deepfake-o-meter, several ethical considerations must be taken into account:

* **Privacy and Consent**: The necessity to upload potentially sensitive videos for analysis raises concerns about user privacy and the consent of individuals depicted in the videos. Users should ensure that they have permission before submitting content featuring other people.
* **Misuse Potential**: While the tool is designed to detect deepfakes, there is a risk that individuals could misuse the platform to improve their ability to create more sophisticated deepfakes that are harder to detect.
* **Bias and Fairness**: The algorithms behind the Deepfake-o-meter may be subject to biases present in their training data. This could potentially result in unequal performance across different demographics, such as gender or ethnicity, inadvertently reinforcing societal biases.
* **Transparency**: There is an ethical imperative for the creators of the Deepfake-o-meter to be transparent about the tool's accuracy, limitations, and the methodologies used to analyze videos. This transparency is crucial to build trust with users and ensure they are informed about the tool's capabilities and limitations.
* **Accountability**: In cases where the Deepfake-o-meter fails to accurately detect a deepfake, or mistakenly identifies genuine content as a deepfake, it is important to consider who is accountable for these mistakes, especially if they lead to reputational damage or other harms.

## Guide

To effectively use DeepFake-O-Meter, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**&#x20;

* No official wiki.

**Tutorials and Articles**

* Lyu, S. (no date) ‘Fighting DeepFakes with Technologies’. Available at: [https://commission.europa.eu/system/files/2022-04/presentation\_siwei\_lyu.pdf](https://commission.europa.eu/system/files/2022-04/presentation_siwei_lyu.pdf).
* Li, Y. _et al._ (2021) ‘DeepFake-o-meter: An Open Platform for DeepFake Detection’. arXiv. Available at: [https://doi.org/10.48550/arXiv.2103.02018](https://doi.org/10.48550/arXiv.2103.02018).
* _Investigating Elections: Threat from AI Audio Deepfakes_ (no date). Available at: [https://gijn.org/resource/investigating-elections-threat-from-ai-audio-deepfakes/](https://gijn.org/resource/investigating-elections-threat-from-ai-audio-deepfakes/) (Accessed: 16 April 2024).

**Video Tutorials**

* _Tutorial to the DeepFake-o-meter platform_ (2020). Available at: [https://www.youtube.com/watch?v=Om4-bE9a61I](https://www.youtube.com/watch?v=Om4-bE9a61I) (Accessed: 16 April 2024).
* _Building the DeepFake-o-Meter: Algorithms to Expose Digital Forgeries - UB Media Forensic Lab_ (2024). Available at: [https://www.youtube.com/watch?v=HkxXt9Xw6rA](https://www.youtube.com/watch?v=HkxXt9Xw6rA) (Accessed: 16 April 2024).

#### Developer Resources

* [https://github.com/yuezunli/deepfake-o-meter](https://github.com/yuezunli/deepfake-o-meter)

**Community and Support**

* &#x20;The Univeristy of Buffalo Media Forensic Laboratory [https://ubmdfl.cse.buffalo.edu/](https://ubmdfl.cse.buffalo.edu/)

By utilizing these resources, users can enhance their DeepFake-O-Meter experience, whether for personal navigation, planning trips, or developing custom mapping solutions.

## Tool provider

UB Media Forensic Lab [https://ubmdfl.cse.buffalo.edu/](https://ubmdfl.cse.buffalo.edu/) - United States

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Unassigned      |
|                 |

