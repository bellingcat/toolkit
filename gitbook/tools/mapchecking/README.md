---
description: >-
  This tool helps you estimate and fact-check the maximum number of people
  standing in a given area.
---

# MapChecking

## URL

[https://www.mapchecking.com/](https://www.mapchecking.com/)

## Description

This tool helps users estimate the maximum number of people standing in a particular area. MapChecking is a crowd-counting tool designed to assist in visualizing and analyzing the area covered by a specific event or situation, typically protests, demonstrations, or other gatherings. The tool allows users to input parameters such as the area they are expected to occupy, the shape of the area (by drawing a polygon), and the estimated density of the crowd.

Based on the steps below, MapChecking can calculate the estimated density of participants in the overall space they cover on a map. The tool allows users to do all the steps on one webpage.&#x20;

1. Input Location
2. Draw a Polygon To Delineate the Area of Interest
3. Map Visualization and Matching
4. Determine Crowd Density Per Square Meter
5. Calculate Total Estimated Crowd Size&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-09-04 062958.png" alt=""><figcaption><p>(Image source: Mapchecking.com) This shows a sample location using the tool. Users can delineate the area of interest using a polygon (shown here with a yellow shaded area). Users can view the area on the regular Google map overlay or satellite view. To the right of the map is a slider that users can drag to estimate the crowd density "from "Light" to "Crowded" to "Packed". The total estimated number in black font changes as the slider moves. </p></figcaption></figure>

### Why is crowd counting important?&#x20;

The number of crowds can often be a [point of dispute ](https://apnews.com/general-news-f445adb3d0cf468ba0eb9caeab549577)between [participants and official statements](https://www.salon.com/2003/01/24/crowds/). Crowd sizes can also serve as evidence of how many people participated in a demonstration and [can be indicative of the significance](https://nixintel.info/osint/counting-crowds-in-public-spaces/) or reach of the event. Crowd counting is not only relevant for open source researchers. According to [this article](https://pmc.ncbi.nlm.nih.gov/articles/PMC10116033/), “\[e]stimation of crowd size for large gatherings is an indispensable metric for \[...] local authorities, and emergency management.”&#x20;

Traditional crowd counting methods are either less publicly available, [such as entrance censors/turnstiles and ticket sales, or are a tedious and time-consuming procedure that includes cumbersome manual processes such as using people counters](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10116033/).

For this reason, open-source investigators may find MapChecking a valuable tool for verification.&#x20;

### Here's how the tool generally works

For this tool description, we take the protest in Tel Aviv on 1 September 2024 as an example.

Our source image is a clip from the video uploaded by [the user](https://x.com/BarakRavid/status/1830292233922482540), potentially during the early hours of the event (before more people arrive). It mentions "tens of thousands of protesters" in Tel Aviv.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-09-02 153133.png" alt=""><figcaption><p>(Image Source: Still from a video posted on <a href="https://x.com/BarakRavid/status/1830292233922482540">https://x.com/BarakRavid/status/1830292233922482540</a>) This mentions that tens of thousands arrived to protest in Tel Aviv about the delay in the Gaza hostage deal. </p></figcaption></figure>

### **STEP 1: Input Location**

{% hint style="info" %}
It may be helpful that the location you put in the tool is **already geolocated/verified.**&#x20;
{% endhint %}

Input the address of an already verified location into the map interface. For simplicity, we will use only one image of the event to demonstrate the tool’s features.

We geolocated this area and found it in Democracy Square in Tel Aviv, at the intersection of Eli'ezer Kaplan Street and Giv'at HaTah̠moshet Street. The coordinates are 32.073368,  34.790295.&#x20;

While many protests in Tel Aviv happen in this area frequently, this footage taken from this particular angle seems to to come from the 1st of September 2024, coinciding with the [sun's approximate position](https://www.suncalc.org/#/32.0732,34.7907,17/2024.09.01/20:08/1/3) around sunset.

{% hint style="info" %}
NOTE: Putting the coordinates on the map does not seem to work at the time of testing the tool on both Firefox and Chrome browsers. Use street address instead to find location in question
{% endhint %}

{% hint style="warning" %}
**TIP:** Enhancing Image Analysis: Combining Images and Minding Obstacles

When analyzing images, especially those depicting large crowds, combining multiple source images taken from different angles is often beneficial. This helps to capture the full scope of the event and avoid blind spots caused by obstructions.

_Remember:_ Even with combined images, obstructions like buildings or bridges can limit visibility. Always be mindful of these factors and consider the potential limitations of the visual data.
{% endhint %}

<figure><img src=".gitbook/assets/Screenshot 2024-09-02 155032.png" alt="" width="375"><figcaption><p> In addition to other verification methods, Google Street View was used in this image to verify the general area of protest. We also used the the 3d buildings to assist us in matching the general area.  </p></figcaption></figure>

### **STEP 2: Drawing A Polygon and Map Visualization**

The next step is to delineate the area of interest by drawing a polygon. The defined area is automatically overlaid on a map.

<figure><img src=".gitbook/assets/Screenshot 2024-09-04 111639.png" alt=""><figcaption><p>This is the location of the protests. The red-shaded area shows where crowds have gathered based on our source image. For accuracy, we exclude areas within our blind spots or those that we don’t have complete visibility.</p></figcaption></figure>

### **STEP 3: Matching and Double-checking**

It may be helpful to double-check that the source image area matches the polygon drawn in the tool. In this case, users may choose to draw a polygon on the source image in a separate program and approximate a visual match for both (as shown in the picture below).

<figure><img src=".gitbook/assets/MapChecking.png" alt=""><figcaption><p>On the left is the source image overlaid with a polygon using Paint, and to the right is the polygon drawn utilizing the tool. The right image is rotated to approximate the camera's direction, as shown in the source image. </p></figcaption></figure>

### STEP 4: Determine Crowd Density Per Square Meter

The next step walks through estimating crowd density per square meter, which helps determine the total estimated number of people in a specific area. Does the crowd appear light, crowded or packed?

First, it can help to gather reference images. Find close-up crowd photos. If possible, look for high-resolution images or verified footage from the event that show the crowd density up close. This helps assess how packed different sections are.

Second, compare that same close up reference image to the visual guides the tool provides. This step may sound complicated at first but fortunately, users can utilize resources like the research by Keith Still (linked below). These guides show what different crowd densities may look like (e.g., 1 person per square meter, 2 people per square meter).

<figure><img src=".gitbook/assets/Screenshot 2024-09-04 133753-marked.png" alt="" width="563"><figcaption><p>To find the reference guides on what the crowd density may look like, click on either link to have an idea of how packed the event in question is. Use these guides to make comparisons with the image from your protest.  This can be found just to the right of the tool's  map interface. </p></figcaption></figure>

{% hint style="info" %}
Note: [This link](https://www.gkstill.com/Support/crowd-density/625sm/Density6.html) can be used if you have a **"static" crowd** (mostly stationary). For **moving crowds** ("crowd flow"), users may use the reference on this link:[ https://www.gkstill.com/Support/crowd-flow/4People.html](https://www.gkstill.com/Support/crowd-flow/4People.html)&#x20;
{% endhint %}

<figure><img src=".gitbook/assets/Density Comparison.png" alt=""><figcaption><p>On the left is a reference guide showing crowd density for 4 people per square meter and 4.5 people per square meter. On the right is a drone footage from the event in question. Looking at both images can assist users in making estimations on crowd density. </p></figcaption></figure>

In this example, we used [drone footage from AP](https://youtu.be/KAOQ9MevvRU?feature=shared), to find a clip that shows the density in the area we are interested in.  By comparing Keith Still’s image reference, I can see that the protest crowd maybe somewhere between 4 people per square meter and 4.5 people per square meter.&#x20;

Remember: Even with reference images, obstructions like buildings or bridges can limit your ability to see the entire crowd. Be mindful of these limitations when making your estimations.

### STEP 5: Calculate the Total Estimated Crowd Size&#x20;

The final step is to  drag the slider to where it says “Packed” and match the tool’s estimated density shown in the previous step. In this case,  we drag the slider to around 4.25 people per square meter since the estimated crowd density is somewhere between 4 and 4.5 square meter.&#x20;

The estimated total crowd count for the area of interest is 57,917 (shown in bold letters on the tool)&#x20;

{% hint style="info" %}
NOTE: The total estimate changes, as the crowd density slides from light to crowded to packed. Keep in mind that an ultra-precise count will not be possible with this tool.&#x20;
{% endhint %}

<figure><img src=".gitbook/assets/Screenshot 2024-09-04 134055-marked.png" alt="" width="375"><figcaption><p>The final step is dragging the slider (shown in orange circle) between the different crowd density. When dragging the slider to "Packed", users can see that the density per square meter is 4.25 (shown in the yellow rectangle) matches our Step 4 estimate.  </p></figcaption></figure>



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

1. Internet Connection
2. Modern browser

## Limitations

_Field of View Restrictions_

The tool works better if you can clearly delineate the area visible in the image. There could be more people outside the camera's view or areas where the camera did not pan. Any such exclusions should be clearly mentioned.

_Snapshot in Time_

The estimate is only valid for the specific point in time when the image was captured. Any changes in crowd size or movement after that moment are not reflected.

_Static vs. Dynamic Crowds_

&#x20;The tool is less effective for[ dynamic or moving crowds ](https://www.aware-online.com/en/calculate-the-number-of-people-during-a-demonstration/)since crowd locations can shift rapidly. It works best when counting static crowds at a given moment.

\
&#xNAN;_&#x55;neven Crowd Density_

Crowd density [is not uniform](https://www.aware-online.com/en/calculate-the-number-of-people-during-a-demonstration/) across all areas of an image. Some patches may have fewer people, while others may be densely packed. As seen in the source image above, there are patches in the protest area that are loosely packed and there are patches that are fully packed. For greater accuracy, it may be beneficial to draw separate polygons for areas with lower and higher crowd densities.

## Ethical Considerations

Exclusions for Low Visibility Areas: Certain areas of the source image may have low visibility or fewer people, which can affect the overall count. Highlighting these areas can improve the transparency of the estimate.

Transparency in Methodology: It is essential to be transparent about the limitations of the tool, especially regarding its reliance on clear images and fixed points in time. Users must communicate that the estimate provided is based on specific conditions and may not reflect the total count, particularly if areas are outside the camera's view or affected by poor visibility.

Accuracy and Validation: Ethical use of Mapchecking requires combining it with multiple methods and sources to arrive at a more accurate estimate. Relying solely on one tool without cross-referencing other data (e.g., additional images, videos, or on-the-ground reports) may lead to underestimating or overestimating crowd sizes.

Dynamic Nature of Crowds: Since crowds are dynamic and people move around, counting static points may not capture the real-time fluctuations of the crowd size. Ethical considerations require informing users and stakeholders that the count is a snapshot in time and may not fully reflect the dynamic nature of demonstrations or events.

&#x20;Density Variability: Since crowd density is not uniform ethical practice encourages users to analyze density variations carefully and provide separate estimates for different areas where appropriate.

&#x20;Possibility of Misrepresentation: In the context of politically sensitive events, such as demonstrations, overestimating or underestimating crowd sizes can have significant implications. Ethical use of Mapchecking is encouraged.&#x20;

## Guides and articles

[https://nixintel.info/osint/counting-crowds-in-public-spaces/](https://nixintel.info/osint/counting-crowds-in-public-spaces/)

[https://www.aware-online.com/en/calculate-the-number-of-people-during-a-demonstration/](https://www.aware-online.com/en/calculate-the-number-of-people-during-a-demonstration/)

## Tool provider

[Anthony Catel](https://github.com/paraboul)

France&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
