---
description: A guide to using map and satellite tools.
---

# About Maps and Satellites

### Introduction Maps and satellite imagery

Maps and satellite imagery are vitally important tools for open source researchers engaged in geolocation and chronolocation. Most people are familiar with maps and their use in helping to orient and direct us in our daily lives. However, this familiarity is something open source researchers should be wary of. Maps and satellites have many uses for open source researchers but they also come with important ethical considerations and technical limitations.

This section describes some of these general issues whilst the individual tools descriptions describe tool specific issues.

### Ethical Considerations

#### Cultural Bias

Maps are inherently political artefacts. Many maps explicitly define borders of countries but the politics of mapping goes much deeper than this. A classic example of this is the reversal of the North South map shown below:

<figure><img src=".gitbook/assets/Reversed_Earth_map_1000x500.jpg" alt=""><figcaption><p>By Poulpy, from a work by jimht at shaw dot ca, modified by Rodrigocd - self-made, from Image:Earthmap1000x500compac.jpg, <a href="https://commons.wikimedia.org/w/index.php?curid=3692020">Public Domain</a>.</p></figcaption></figure>

Bias towards the Global North can produce inaccuracy in reporting and research. The way maps are drawn also often reflects this bias.

This has real accuracy implications for open source researchers. The familiar [Mercator projection](https://en.wikipedia.org/wiki/Mercator\_projection) and the [Mercator Web Projection](https://en.wikipedia.org/wiki/Web\_Mercator\_projection) used by Google Maps, Open Street map, Bing Maps, etc. are not accurate representations of countries and continents. The [Gall–Peters projection](https://en.wikipedia.org/wiki/Gall%E2%80%93Peters\_projection) featured in the following _West Wing_ clip may be enlightening: &#x20;

{% embed url="https://www.youtube.com/watch?v=vVX-PrBRtTY" %}
_Gall--Peters Projection_ (2010). Available at: [https://www.youtube.com/watch?v=vVX-PrBRtTY](https://www.youtube.com/watch?v=vVX-PrBRtTY) (Accessed: 26 August 2024).
{% endembed %}

Even 'North' itself is not necessarily something we can take for granted. There are many 'Norths' according to Yung Au in [Thinking Critically About Maps: Researching, Resisting and Re-imagining the World](https://kit.exposingtheinvisible.org/en/critical-maps.html) including:

* **True North:** The northern most point on the spherical earth (which is distorted when looking at flat maps).
* **Grid north:** The north that runs upwards alongside the grid lines on a flat map.
* **Magnetic North:** The north as indicated by a compass which shifts over time.
* **Google Maps’ North**

Maps are intertwined with cultural biases. Many other cultures create maps that have deeper layers of meaning than Western map makers. In Australia indigenous cultures create maps for locating water holes but also as ancestral records [Painting Country: Maps of the Country](https://aso.gov.au/titles/documentaries/painting-country/clip2/).

Some resources that explore these issues in more depth include:

* _Thinking Critically About Maps: Researching, Resisting and Re-imagining the World — The Kit 1.0 documentation_ (no date). Available at: [https://kit.exposingtheinvisible.org/en/critical-maps.html](https://kit.exposingtheinvisible.org/en/critical-maps.html) (Accessed: 13 August 2024).
* Houston, D. (2017) _Five maps that will change how you see the world_, _The Conversation_. Available at: [http://theconversation.com/five-maps-that-will-change-how-you-see-the-world-74967](http://theconversation.com/five-maps-that-will-change-how-you-see-the-world-74967) (Accessed: 26 August 2024).
* Lucchesi, A.H. (2018) ‘“Indians Don’t Make Maps”: Indigenous Cartographic Traditions and Innovations’, _American Indian Culture and Research Journal_, 42(3). Available at: [https://doi.org/10.17953/aicrj.42.3.lucchesi](https://doi.org/10.17953/aicrj.42.3.lucchesi)

**3D Space**

Three-dimensional space can also be another challenge for maps and map makers. Eyal Weisman's Open Democracy essay [_The Politics of Verticality_](https://www.opendemocracy.net/en/article\_801jsp/) explores how three-dimensional, political and cultural space in the occupied West Bank are constructed and reproduced through architecture and maps_._ Much of Weisman's research agency [Forensic Architecture](https://forensic-architecture.org/)'s work is engaged in mapping violence across time and space using forensic methods to counter institutional bias.   &#x20;

#### Privacy

Open source researchers need to be aware of how satellite imagery platforms track and use researcher's data. In Europe the [General Data Protection Regulation (GDPR)](https://gdpr-info.eu/) requires companies, government bodies, and individuals to provide clear and transparent information about how personal data will be used. Google Maps for instance provides information about how it [protects individual's privacy](https://support.google.com/maps/answer/10400210?hl=en) and how personal information is used. However, this information is not always easy to find or in a standard, easy to understand format. It's the responsibility of researchers to understand and protect their data. The Vice article [Six Reasons Why Google Maps Is the Creepiest App On Your Phone](https://www.vice.com/en/article/six-reasons-why-google-maps-is-the-creepiest-app-on-your-phone/) will give you an idea of how much data maps track.

Researchers in turn have a responsibility to ensure the right to privacy of individuals or groups they may be monitoring.

In regard to further ethical considerations the following may be helpful:

* Bennett, M.M. et al. (2024) ‘Bringing satellites down to Earth: Six steps to more ethical remote sensing’, Global Environmental Change Advances, 2, p. 100003. Available at: [https://doi.org/10.1016/j.gecadv.2023.100003](https://doi.org/10.1016/j.gecadv.2023.100003).
* February 2021, M.P.// 25 (2021) Why we need to think about ethics when using satellite data for development, Devex. Available at: [https://www.devex.com/news/sponsored/why-we-need-to-think-about-ethics-when-using-satellite-data-for-development-99148](https://www.devex.com/news/sponsored/why-we-need-to-think-about-ethics-when-using-satellite-data-for-development-99148) (Accessed: 3 April 2024).

### Limitations

Mapping and satellite imaging services all have generalised limitations that open source researchers need to be aware of so they can present transparent and verifiable results.

#### **Data Accuracy**

Satellite imagery has limitations around accuracy that researchers should understand and be transparent about. The following video from European Space Imaging although focused on the commercial application of satellite imagery may help researchers understand some of these limitation better.&#x20;

{% embed url="https://youtu.be/CqtmNu3IsTk?si=3Jih1BGc5BCzSUqE" %}
_Satellite Image Accuracy - What is geolocational accuracy and what does it mean for your data?_ (2021). Available at: [https://www.youtube.com/watch?v=CqtmNu3IsTk](https://www.youtube.com/watch?v=CqtmNu3IsTk) (Accessed: 3 September 2024).
{% endembed %}

The video explains that there are a number of different considerations when talking about 'accuracy'. These include:

* **Absolute Accuracy:** Does the pixel in the image correlate identically with its position on earth?
* **Relative Accuracy:** the distance between objects in the images.
* **Resolution:** in general the higher the resolution the imagery the more accuracy.&#x20;
* **Orthorectofication:** the curve of the earth, the angle of the satellite, the altitude of the ground captured are all processed using orthorectofication elevation models to provide a two dimensional representation. Different companies use different algorithms to do this correction with implications for accuracy. A good example of what orth-correction does can be seen [here](https://guides.geospatial.bas.ac.uk/10-things-to-know-about-vhr-satellite-data/4.-spatial-accuracy-and-ortho-correction).

Accuracy is not measured in the same way by all satellite imagery. There are two main ways of assessing accuracy in satellite imagery:

* [**Circular Error at the 90th percentile**](https://en.wikipedia.org/wiki/Circular\_error\_probable) **(CE90):** This means that a minimum of 90 percent of the points measured has a horizontal error less than the stated CE90 value. Used by European Space Agency.
* [**Root Mean Squared Error (RMSE**)](https://en.wikipedia.org/wiki/Root\_mean\_square\_deviation): other platforms use RMSE to assess accuracy. &#x20;

Every mapping and satellite tool in the Bellingcat toolkit has it's own standards regarding accuracy which we aim to reference in the individual toolkit entry. An example of platform documenting accuracy would be [How accurate is Google Earth’s measurements?](https://www.ncesc.com/geographic-faq/how-accurate-is-google-earths-measurements/)

For some use cases aerial imagery rather than satellite imagery, can offer better location accuracy down to pixels and [resolutions down to centimetres](https://aerometrex.com.au/resources/blog/key-factors-consider-when-choosing-between-aerial-satellite-imagery/).

#### Data Currency&#x20;

Satellite data may not always be up to date. Researchers should verify important information through other sources where possible.&#x20;

With satellite imagery two factors are important to consider. First, the [**temporal resolution**](https://sentiwiki.copernicus.eu/web/s2-mission) of a satellite in orbit is the revisit frequency of the satellite to a particular location. The more often it revisits a location the more chance that the area will be cloud free when the satellite passes over the location and the greater the chance of identifying when exactly things change on the ground. The second factor to be aware of is the [**data latency**](https://www.earthdata.nasa.gov/learn/backgrounders/data-latency) between the satellite taking the image and the image being made available publicly on the satellite imagery platform. This can vary by location as well as by platform and the documentation isn't always easy to find. We aim to include this data with the individual toolkit entry.

#### Political Bias and Missing Data

As inherently political artefacts there are practical implications for researchers using mapping tools. Most maps not only exhibit political bias but deliberately exclude, blur or only provide low resolution imagery of state related facilities or some regions of the world.

Google Maps is a good example of a platform that chooses to restrict access to data they deem as sensitive. A full List of Google satellite map images with missing or unclear data is provided [here](https://en.wikipedia.org/wiki/List\_of\_satellite\_map\_images\_with\_missing\_or\_unclear\_data) by Wikipedia. Researchers should be aware that areas of conflict are particularly sensitive to being excluded.

It's also important to realise that where you are in the world will influence the imagery you have access to, see [Google redraws the borders on maps depending on who’s looking](https://www.washingtonpost.com/technology/2020/02/14/google-maps-political-borders/).

Some countries have legislation which makes mapping services located in those countries particularly problematic. China, for instance, has specific legislation restricting digital mapping services including [incorrect alignment of street maps with satellite maps in various applications](https://en.wikipedia.org/wiki/Restrictions\_on\_geographic\_data\_in\_China). Users inside China are also restricted from accessing many of the services Western researchers take for granted by the '[Great Firewall](https://www.internetsociety.org/resources/internet-fragmentation/the-chinese-firewall/)' of China.

These issues are important to consider when working with maps and satellite imagery and particularly when publishing open source research where being transparent about these limitations is important.&#x20;

See also:

Aberneithie, C. (2022) ‘Do mapping apps exacerbate prejudice?’, _New Statesman_, 15 August. Available at: [https://www.newstatesman.com/spotlight/2022/08/mapping-navigational-apps-gis-safety-bias-google-maps](https://www.newstatesman.com/spotlight/2022/08/mapping-navigational-apps-gis-safety-bias-google-maps) (Accessed: 15 September 2024).

‘Widespread Blurring of Satellite Images Reveals Secret Facilities’ (no date) _Federation of American Scientists_. Available at: [https://fas.org/publication/widespread-blurring-of-satellite-images-reveals-secret-facilities/](https://fas.org/publication/widespread-blurring-of-satellite-images-reveals-secret-facilities/) (Accessed: 26 August 2024). &#x20;

&#x20;**Crowdsourced data**

Crowdsourced data can be particularly prone to bias in the geographic coverage, text and image content. Some areas may be over-represented while others are under-represented. For a general overview of bias in crowd sourced applications see [Crowdsourced geospatial data quality: challenges and future directions.](https://www.tandfonline.com/doi/full/10.1080/13658816.2019.1593422)

### Other resources

#### Wikis

* _SentiWiki_ (no date). Available at: [https://sentiwiki.copernicus.eu/web/sentiwiki](https://sentiwiki.copernicus.eu/web/sentiwiki) (Accessed: 3 September 2024).

#### Tutorials and Articles

* ‘Buying Optical Satellite Imagery? The Top Ten Things to Consider - Home - Aerial/Satellite Digital Mapping Solutions - LAND INFO ... landinfo.com’ (2020), 6 April. Available at: [https://landinfo.com/buying-optical-satellite-imagery-the-top-ten-things-to-consider/](https://landinfo.com/buying-optical-satellite-imagery-the-top-ten-things-to-consider/) (Accessed: 25 August 2024).
* _1. Introduction to The Politics of Verticality_ (no date) _openDemocracy_. Available at: [https://www.opendemocracy.net/en/article\_801jsp/](https://www.opendemocracy.net/en/article\_801jsp/) (Accessed: 30 August 2024).
* _Key factors to consider when choosing between aerial & satellite imagery- Aerometrex_ (no date). Available at: [https://aerometrex.com.au/resources/blog/key-factors-consider-when-choosing-between-aerial-satellite-imagery/](https://aerometrex.com.au/resources/blog/key-factors-consider-when-choosing-between-aerial-satellite-imagery/) (Accessed: 3 September 2024).
* _4. Spatial accuracy and Ortho-correction | 10 things to know about VHR satellite data_ (2022). Available at: [https://guides.geospatial.bas.ac.uk/10-things-to-know-about-vhr-satellite-data/4.-spatial-accuracy-and-ortho-correction](https://guides.geospatial.bas.ac.uk/10-things-to-know-about-vhr-satellite-data/4.-spatial-accuracy-and-ortho-correction) (Accessed: 3 September 2024).
* Earth Science Data Systems, N. (2019) _What is Remote Sensing? | Earthdata_. Earth Science Data Systems, NASA. Available at: [https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing](https://www.earthdata.nasa.gov/learn/backgrounders/remote-sensing) (Accessed: 3 September 2024).
* Earth Science Data Systems, N. (2020) _What is Data Latency? | Earthdata_. Earth Science Data Systems, NASA. Available at: [https://www.earthdata.nasa.gov/learn/backgrounders/data-latency](https://www.earthdata.nasa.gov/learn/backgrounders/data-latency) (Accessed: 3 September 2024).
* Earth Science Data Systems, N. (2020) _What is Synthetic Aperture Radar? | Earthdata_. Earth Science Data Systems, NASA. Available at: [https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar](https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar) (Accessed: 3 September 2024).
* _Tutorials | Center for Spatial Research_ (no date). Available at: [https://c4sr.columbia.edu/tutorials](https://c4sr.columbia.edu/tutorials) (Accessed: 15 September 2024).

**Video Tutorials**

* _Video course: Mapping for Journalists_ (no date) _DataJournalism.com_. Available at: [https://datajournalism.com/watch/mapping-for-journalists](https://datajournalism.com/watch/mapping-for-journalists) (Accessed: 26 August 2024).

**Books**

* Kurgan, L. (2022) _Close up at a distance: mapping, technology, and politics_. First paperback edition 2022. New York: Zone Books.
* Bélanger, P. and Arroyo, A. (2016) _Ecologies of power: countermapping the logistical landscapes & military geographies of the U.S. Department of Defense_. Cambridge, Massachusetts London, England: The MIT Press.
* Weizman, E. (2017) _Forensic architecture: violence at the threshold of detectability_. Brooklyn, NY: Zone Books.



### &#x20;



\



| Page maintainer                                                |
| -------------------------------------------------------------- |
| \[\[Your name here (optional) or "Bellingcat volunteer team"]] |
|                                                                |

