---
updated: '2025-08-12'
description: MW Geofind is a tool for finding geotagged YouTube videos.
---

# MW Geofind

## URL

[https://mattw.io/youtube-geofind/location](https://mattw.io/youtube-geofind/location)

## Description

MW Geofind is an online tool designed for identifying YouTube videos tagged with a geographical location.

### How to use

You can search for YouTube videos by keywords, location name, or coordinates. Additionally, you can filter results by timeframe ("past hour", "past 30 days" etc.), video duration, and language.

* To optimize the keyword search, have a look at the [documentation](https://github.com/mattwright324/youtube-geofind/wiki/YouTube-Keyword-Operators) for YouTube keyword operators.
* When searching by location, users can set a radius between 1 and 1000km.
* Search results are automatically visualized on a map, which shows icons from the YouTube videos. Click on the icon to see the video's title, channel, and other details. Alternatively, scroll down the page to see the same details listed.

<figure><img src=".gitbook/assets/map.png" alt=""><figcaption><p>Search results visualized on a map, for YouTube videos geotagged within 20km of the Hungarian State Opera House in Budapest. A radius of 20km is shown (in the green circle). Each icon represents a YouTube channel. Note that the map also shows some videos geotagged beyond the 20km radius.</p></figcaption></figure>

* Under **Geotags**, user can find a list of the search results, including a thumbnail, the video title, upload date, duration, and an excerpt of the video description. Due to restrictions from YouTube, an export function is not directly available.
* Under **Share,** a link can be copied and shared so that others can access the search results.

<details>

<summary>How to access video metadata</summary>

To access the metadata, scroll down to view the search results and click "View metadata". This opens a new tab in your web browser, showing the metadata through another tool, [MW Metadata - Bulk](https://mattw.io/youtube-metadata/bulk), by the same developer.&#x20;

<figure><img src=".gitbook/assets/geofind_ex.png" alt=""><figcaption><p>View metadata - marked in blue</p></figcaption></figure>

Here is an excerpt showing some of the JSON data available. (JSON is a format for structuring and storing data, where information is stored in text and as name-value pairs.) For each video, you will find metadata such as the date and time of upload, the geotag, and other information such as counts for the number of views, likes, favorites, and comments for the video. \
\
<img src=".gitbook/assets/json ex.png" alt="" data-size="original"><br>

Unfortunately, a bulk export function is not available [due to Youtube policy](https://github.com/mattwright324/youtube-metadata/discussions/150).

</details>

### **Understanding geotags in YouTube videos**

On YouTube, geotags are [set manually by the video creators](https://support.google.com/youtube/answer/7638112?hl=en\&co=GENIE.Platform%3DDesktop), and [not derived from the videos' EXIF data](https://github.com/mattwright324/youtube-geofind/wiki). When video creators upload their content, they can choose whether to specify a location. (Typically, they start typing the name of the location, and a dropdown list becomes available for selection. This selection mechanism can sometimes lead to inaccuracies.) Importantly, geotags are optional, i.e., video creators can leave it blank.&#x20;

Geotags can also be [imprecise](https://github.com/mattwright324/youtube-geofind/wiki), as [YouTube's metadata](https://developers.google.com/youtube/v3/docs/search/list) are set up such that the same coordinates can refer to multiple locations (e.g., "Manhattan, New York" and "United States" can have the same coordinates). Researchers should set the radius in MW Geofind to specify the search parameters. \
\
Video creators can intentionally enter an inaccurate geotag. From the creators' perspective, geotagging is [one of many factors that influence Youtube's location-based recommendation and ad targeting](https://support.google.com/youtube/answer/7638112?hl=en\&co=GENIE.Platform%3DAndroid). For example, creators located in country A may wish to attract viewers or subscribers from country B. To achieve this goal, they could choose to provide a geotag in country B. Therefore, geotags do not directly indicate the video upload's actual location. \
\
Given these caveats, researchers should use the search results from MW Geofind as one of many reference points and seek to independently verify any location information.

#### Available format

MW Geofind is available in the web browser: [https://mattw.io/youtube-geofind/location](https://mattw.io/youtube-geofind/location)

Find the code and latest commits on Github: [https://github.com/mattwright324/youtube-geofind](https://github.com/mattwright324/youtube-geofind)

### Similar tools

YouTube's search can perform a similar search by location.&#x20;

<details>

<summary>How to do a location search on YouTube</summary>

1. Enter a location name in the search bar.
2. Click "Filters".
3. Select "Location".\
   <img src=".gitbook/assets/options.png" alt="" data-size="original">

</details>

Based on our testing, searching directly on Youtube can lead to more comprehensive search results (i.e., more videos found). However, the search on Youtube also comes with a few disadvantages, as discussed in the [MW Geofind documentation](https://github.com/mattwright324/youtube-geofind/wiki):

* On YouTube, the user can only search by location name and not by coordinates.
* On YouTube, geotags are in the video creator's chosen language. E.g., a French speaker may geotag their video "États-Unis" instead of "United States". If you search by location name, you would need to use the French name if you want this video to show up in your search results. However, if you type in "United States", it will never show up in your results. In comparison, if you use MW Geofind and search by coordinates, the language a creator chose does not affect the search results.
* On YouTube, the time frame selected must be recent (i.e., the choices are limited to "last hour", "today", "this week", "this month", "this year"). MW Geofind allows more flexibility (e.g., between Jan 1 to Feb 15, 2017), enabling searches for older videos.

For those comfortable with using command line tools, [yt-dlp](https://github.com/yt-dlp/yt-dlp) might be preferable with its broader functionalities (e.g., faster downloads, audio extraction). To load the video's metadata, use: `yt-dlp --print-json [VIDEO_URL]` \
\
The metadata would include the video location only if the video was geotagged by the creator. Note that since September 2025, [additional JavaScript components are required](https://github.com/yt-dlp/yt-dlp/issues/14404) for yt-dlp to function properly.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* **Web:** any web browser.

## Limitations

* **API rate limits:** Usage of MW Geofind is subject to[ Youtube API rate limits](https://github.com/mattwright324/youtube-geofind/issues/11), which means that a few users with high-volume searches can exhaust the quota for the day. The rate limits are reset daily around 9am US Pacific time. Therefore, users who find MW Geofind unresponsive or not functioning should check back again the next day.
* **Location information may be inaccurate**: MW Geofind makes an initial search and then makes additional calls to get `recordingDetails` and `locationDescription` from the YouTube[ API](https://developers.google.com/youtube/v3/docs/videos#recordingDetails). Users should understand that the coordinates do not necessarily refer to a precise location, as the same coordinates can refer to a country, city, landmark, address, or point of interest. Again, users should seek to independently verify the location information. You can find a discussion about this issue in MW Geofind's [project wiki](https://github.com/mattwright324/youtube-geofind/wiki).
* **Search results are not comprehensive**: MW Geofind is a tool specific to finding for geotagged videos. As discussed above, the video creator can choose to omit geotagging (i.e., leaving it blank), or provide inaccurate or imprecise geotags, or geotag in a different language. Therefore, search results from MW Geofind can be seen as a narrow subset of all possible videos uploaded from a location. \
  \
  If researchers wish to find all possible videos relevant to a location, they may be better off simply typing the location name into Youtube's search bar, then adjusting through "Filters" (see [Similar Tools](./#similar-tools) above) for the upload date or other criteria. This generic Youtube search will show videos where the location name appears in the video's title, description, chapter titles, and channel name and descriptions, in addition to any algorithm-driven personalization.&#x20;

## Ethical Considerations

Video creators could have deliberately or inadvertently provided wrong location information and other identifying details in their video content, including in the metadata. Always verify any location information independently.

When using information from publicly uploaded videos, researchers should weigh privacy interests of the video creator or any individuals appearing in the video against the need for research publications in the public interest.

## Guides and articles

**Official Wiki** **from the developer**

* [https://github.com/mattwright324/youtube-geofind/wiki](https://github.com/mattwright324/youtube-geofind/wiki)

**Tutorials**

_How to find geotagged videos on YouTube | Geofind OSINT Tool Tutorial_ (2023).\
• Video: [https://www.youtube.com/watch?v=3WdeRiy1dvI](https://www.youtube.com/watch?v=3WdeRiy1dvI)\
• _Article:_ [https://gralhix.com/2022/04/21/how-to-find-geotagged-videos-on-youtube/](https://gralhix.com/2022/04/21/how-to-find-geotagged-videos-on-youtube/)

## Tool provider

Matthew Wright [https://mattw.io/](https://mattw.io/) - United States

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |
