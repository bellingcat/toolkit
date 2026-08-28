---
updated: '2026-08-27'
description: >-
  Google Earth Engine is a platform for environmental monitoring, land use
  change and object/infrastructure detection through satellite imagery and
  geospatial data analysis.
---

# Google Earth Engine

## URL

[https://code.earthengine.google.com/](https://code.earthengine.google.com/)

## Description

Google Earth Engine (GEE) is a cloud-based platform for environmental data analysis, object and change detection. It brings together a large collection of satellite imagery and geospatial datasets with planetary-scale analysis capabilities. This tool is designed for researchers and analysts engaged in environmental monitoring, land-use change detection and object and infrastructure detection. It solves the problem of managing and analyzing large datasets that require significant computational resources and creating sophisticated interactive visualisations.

GEE can be used with the following programming languages and tools:

* [Javascript Code Editor](https://code.earthengine.google.com/) - using Javascript.
* [Earth Engine Python client library](https://developers.google.com/earth-engine/guides/python_install) - using Python.
* [rgee](https://github.com/r-spatial/rgee) - using R.
* [QGIS Earth Engine Plugin](https://gee-community.github.io/qgis-earthengine-plugin/) - using QGIS.

There's a huge range of climate and weather, imagery and geophysical datasets available here:

* [Earth Engine Data Catalog](https://developers.google.com/earth-engine/datasets)

**Features:**

* **Language:** supports multiple languages.

The example below is from Bellingcat's [Google Earth Engine Remote Sensing tutorial](https://bellingcat.github.io/RS4OSINT/). The [War at Night case study](https://bellingcat.github.io/RS4OSINT/C1_Lights.html) is an example use case using satellite images of Iraq taken at night to track the destruction caused by the fight against the Islamic State. If cities and villages are demolished, they become often less visible from space since they emit less light.

<figure><img src=".gitbook/assets/Screenshot 2024-06-20 at 1.18.03 PM (1).png" alt="Screenshot of Google Earth Engine user interface showing the War at Night case study. The interface includes a coding IDE and a map showing the brightness of lights across time which includes a timelapse image in the actual project."><figcaption><p>Screenshot of Google Earth Engine user interface showing the War at Night case study.</p></figcaption></figure>

Full description including documentation [https://earthengine.google.com/](https://earthengine.google.com/)

### Example Use Cases:

1. **Deforestation Monitoring**: Utilizing the satellite imagery available on Google Earth Engine, researchers can track deforestation over time.
2. **Urban Expansion Analysis**: Analysts can use Google Earth Engine to monitor urban sprawl and the transformation of rural areas into urban centers.
3. **Agriculture and Crop Monitoring**: Farmers and agricultural researchers can leverage satellite data to monitor crop health and estimate yields.
4. **Water Resources Monitoring**: By analyzing historical and current satellite imagery, researchers can assess changes in water bodies.
5. **Climate Change Impact Studies**: Scientists use Google Earth Engine to model climate change scenarios and assess their impacts on ecosystems, sea levels, and weather patterns.
6. **Disaster Damage Assessment:** Before/after imagery comparison allows analysts to map damage extent from earthquakes, floods, and storms within days of an event, often used by humanitarian and emergency response organisations.&#x20;
7. **Wildfire Monitoring and Burn Severity:** Tracking active fire fronts, burned area extent, and post fire vegetation recovery using thermal and optical satellite bands
8. **Glacier and Ice Sheet Monitoring:** Measuring ice extent, calving events, and long term retreat trends in polar and mountain regions.&#x20;
9. **Conflict and Infrastructure Monitoring:** Detecting military build up, troop movements' physical traces, checkpoint construction, or damage to buildings and infrastructure over time.
10. **Illegal Resource Extraction Detection:** Identifying unauthorised mining, logging, or fishing activity by spotting land cover disturbance patterns inconsistent with permitted activity.&#x20;
11. **Coastal Erosion and Shoreline Change:** Tracking coastline retreat or accretion over decades relevant to both climate research and infrastructure risk assessment
12. **Biodiversity and Habitat Loss Mapping:** Assessing fragmentation or loss of specific habitat types (wetlands, forests, coral reefs) to support conservation planning.&#x20;
13. **Air Quality and Atmospheric Monitoring:** Using satellite-derived datasets (e.g. Sentinel-5P) to track pollutant concentrations like NO2, aerosols, and methane over time and location.
14. **Archaeological and Cultural Heritage Site Monitoring:** Detecting looting, encroachment, or environmental damage to known heritage sites via repeat imagery.

Note: GEEs strength is longer time series and archive depth, rather than speed on a specific breaking event. Some of the use cases therefore push the boundaries of what GEE is good at when compared with purpose built tools.

Latest features and changes: [https://developers.google.com/earth-engine/changelog](https://developers.google.com/earth-engine/changelog).

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Google Earth Engine is free on the basis that the work stays personal and unpaid. [Free for noncommercial use](https://earthengine.google.com/noncommercial/) includes non profits, academic/educational instiatuions, news media organisations, and certain government agencies.&#x20;

Since April 2026 free accounts are caped by monthly compute quotas, meaning that "free" now means witin a usage limit, not unlimited.&#x20;



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

## Requirements

Individual sign up Earth Engine access (easy):

* **Google Account -** a Google email address and associated account (see: [https://developers.google.com/earth-engine/guides/access#individual-signup](https://developers.google.com/earth-engine/guides/access#individual-signup))

A role on a Google Cloud project (more complicated but more secure. See: [https://developers.google.com/earth-engine/guides/access#a-role-in-a-cloud-project](https://developers.google.com/earth-engine/guides/access#a-role-in-a-cloud-project)):

* **Google Account** - a Google email address and associated account.
* **Google Cloud Project** - a credit card and Google Cloud Project role with API access.

## Limitations

* **Data Availability**: Not all satellite data might be available or up-to-date. Each individual data set available in the [Data Catalog](https://developers.google.com/earth-engine/datasets/catalog) details the availability of the individual dataset.
* **Processing Power**: User code execution is limited by Google's computational resources, which might result in delays during peak usage. It's important to understand that processing on large datasets can hit processing limits see [Scaling up in Earth Engi](https://developers.google.com/earth-engine/guides/scale). For more information on GEE computational processing see the [Computation Overview](https://developers.google.com/earth-engine/guides/computation_overview).
* **Learning Curve**: The platform has a steep learning curve, especially for users without a programming background. Additionaly, the coding paradigm means familiar imperative coding habites fail or time out, adding friction beyond the initial learning curve.
* **Export Restrictions**: There are limits on the size and rate at which data can be exported from the platform. See [Earth Engine Quotas](https://developers.google.com/earth-engine/guides/usage) for more information.
* **API Rate Limits**: Usage of the Earth Engine API is subject to daily and per-minute [rate limits](https://developers.google.com/earth-engine/guides/usage) to prevent abuse. See [Earth Engine Quotas](https://developers.google.com/earth-engine/guides/usage) for more information.
* **Vendor Lock in:** Scripts and workflows are tied into Google's proprietary API and won't transfer to standard geospatial tools if there was a need to move off the platform.
* **Reproducibility:** Google can update datasets or algorithms, meaning that analysis undertaken may not be able to be reproduced like for like in the future.&#x20;
* **Privacy:** Every query and area of interest searched is logged against your Google account, with no local or air gapped option, this could be a risk for sensitive personal investigations.&#x20;
* **Hard Computational Ceilings:** Fixed limits mean some analyses fail regardless of budget or patience, until restructured as batch/export jobs.
* **Thin Support Model:** As a free noncommercial user only community support is available, with no guaranteed uptime and a risk of account suspension without much recourse.&#x20;
* **Dataset Restrictions:** Some high resolution or politically sensitive locations are blurred, restricted, or missing from the catalog entirely, potentially at exactly the moment coverage is needed.&#x20;

## Ethical Considerations

* **Privacy Concerns**: Remote sensing technologies can capture detailed images from space or high altitude, potentially compromising individual privacy. Researchers must balance the public interest with the rights to privacy.
* **Accuracy and Misinterpretation**: Ensuring the accurate representation of data is critical. Misinterpretation of remote sensing data can lead to misinformation, shaping public opinion based on incorrect premises. Each dataset may have different standards for accuracy see the the [Data Catalog](https://developers.google.com/earth-engine/datasets/catalog) for more information.
* **Dual-Use and Harm Potential:** Analysis intended for legitimate investigations can equally be used by bad actors for targeting or harm once published.
* **Consent and Surveillance Asymmetry:** Individuals, communities, and private landowners captured in imagery have not consented to being monitored, and remote sensing tools are disproportionately available to well resource institutions and states over the people being observed, adding to the rising power imbalance between watcher and the watched.&#x20;
* **Evidentiary Standards and Reputational Risk:** If findings feed into publications or accusations, the standards of proof needs to match the consequences.  Remote sensing alone doesn't constitute definitive evidence, and premature or overconfident public claims can cause serious reputational or even physical harm to people or entities implicated.&#x20;
* **Data Colonialism:** Using Global North controlled infrastructure to monitor land, resources, or communities in the Global South without any benefit sharing or consultation with those communities raises questions about who the analysis ultimately serves.&#x20;

## Guide

To effectively use Google Earth Engine, especially for beginners or those looking to refine their skills, the following resources are highly recommended:

**Official Wiki**

* [**Earth Engine Official Documentation**](https://developers.google.com/earth-engine)**:** full documentation in GEE.
* [**JavaScript and Python Guides**](https://developers.google.com/earth-engine/guides): guides to the Javascript and Python APIs.
* [**Earth Engine Data Catalog**](https://developers.google.com/earth-engine/datasets): catalog of all the available datasets.

**Tutorials and Articles**

* [**Remote Sensing for OSINT**](https://bellingcat.github.io/RS4OSINT)**:** Bellingcat's tutorial to GEE written by Ollie Ballinger.
* [**End-to-End Google Earth Engine**](https://courses.spatialthoughts.com/end-to-end-gee.html)**:** full online course

**Video Tutorials**

* [**Spatial Data Management with Google Earth Engine**](https://www.youtube.com/playlist?list=PLAxJ4-o7ZoPdz9LHIJIxHlZe3t-MRCn61)

**Community and Support**

* [**Developer Forum**](https://groups.google.com/g/google-earth-engine-developers): A place where users can ask questions about Google Earth Engine and receive answers from the community.
* [**GIS Stack Exchange**](https://gis.stackexchange.com/questions/tagged/google-earth-engine)**:** Users can find or ask questions tagged with `google-earth-engine`, which includes topics on Google Earth Engine.

## Tool provider

Google [https://about.google/](https://about.google/) - United States.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer                                     |
| --------------------------------------------------- |
| Bellingcat Volunteer Team, Reviewed Sophie Tedling. |
|                                                     |
