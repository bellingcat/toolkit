---
updated: '2025-08-31'
description: >-
  Google Earth Engine is a platform for environmental monitoring and analysis
  through satellite imagery and geospatial data.
---

# Google Earth Engine

## URL

[https://code.earthengine.google.com/](https://code.earthengine.google.com/)

## Description

Google Earth Engine is a cloud-based platform for environmental data analysis, object and change detection. It brings together a large collection of satellite imagery and geospatial datasets with planetary-scale analysis capabilities. This tool is designed for researchers and analysts engaged in environmental monitoring, land-use change detection and object and infrastructure detection. It solves the problem of managing and analyzing large datasets that require significant computational resources and creating sophisticated interactive visualisations.

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

<figure><img src=".gitbook/assets/Screenshot 2024-06-20 at 1.18.03 PM.png" alt="Screenshot of Google Earth Engine user interface showing the War at Night case study. The interface includes a coding IDE and a map showing the brightness of lights across time which includes a timelapse image in the actual project."><figcaption><p>Screenshot of Google Earth Engine user interface showing the War at Night case study.</p></figcaption></figure>

Full description including documentation [https://earthengine.google.com/](https://earthengine.google.com/)

### Example Use Cases:

1. **Deforestation Monitoring**: Utilizing the satellite imagery available on Google Earth Engine, researchers can track deforestation over time.
2. **Urban Expansion Analysis**: Analysts can use Google Earth Engine to monitor urban sprawl and the transformation of rural areas into urban centers.
3. **Agriculture and Crop Monitoring**: Farmers and agricultural researchers can leverage satellite data to monitor crop health and estimate yields.
4. **Water Resources Monitoring**: By analyzing historical and current satellite imagery, researchers can assess changes in water bodies.
5. **Climate Change Impact Studies**: Scientists use Google Earth Engine to model climate change scenarios and assess their impacts on ecosystems, sea levels, and weather patterns.

Latest features and changes: [https://developers.google.com/earth-engine/changelog](https://developers.google.com/earth-engine/changelog).

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Google Earth Engine can be used for [free for noncommercial use](https://earthengine.google.com/noncommercial/).

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
* **Processing Power**: User code execution is limited by Google's computational resources, which might result in delays during peak usage. It's important to understand that processing on large datasets can hit processing limits see [Scaling up in Earth Engine](https://link.springer.com/chapter/10.1007/978-3-031-26588-4_29). For more information on GEE computational processing see the [Computation Overview](https://developers.google.com/earth-engine/guides/computation_overview).
* **Learning Curve**: The platform has a steep learning curve, especially for users without a programming background.
* **Export Restrictions**: There are limits on the size and rate at which data can be exported from the platform. See [Earth Engine Quotas](https://developers.google.com/earth-engine/guides/usage) for more information.
* **API Rate Limits**: Usage of the Earth Engine API is subject to daily and per-minute [rate limits](https://developers.google.com/earth-engine/guides/usage) to prevent abuse. See [Earth Engine Quotas](https://developers.google.com/earth-engine/guides/usage) for more information.

## Ethical Considerations

* **Privacy Concerns**: Remote sensing technologies can capture detailed images from space or high altitude, potentially compromising individual privacy. Researchers must balance the public interest with the rights to privacy.
* **Accuracy and Misinterpretation**: Ensuring the accurate representation of data is critical. Misinterpretation of remote sensing data can lead to misinformation, shaping public opinion based on incorrect premises. Each dataset may have different standards for accuracy see the the [Data Catalog](https://developers.google.com/earth-engine/datasets/catalog) for more information.

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

* [**Spatial Data Management with Google Earth Engine**](https://www.youtube.com/playlist?list=PLAxJ4-o7ZoPdz9LHIJIxHlZe3t-MRCn61)**:** 2024).

**Community and Support**

* [**Developer Forum**](https://groups.google.com/g/google-earth-engine-developers): A place where users can ask questions about Google Earth Engine and receive answers from the community.
* [**GIS Stack Exchange**](https://gis.stackexchange.com/questions/tagged/google-earth-engine)**:** Users can find or ask questions tagged with `google-earth-engine`, which includes topics on Google Earth Engine.

## Tool provider

Google [https://about.google/](https://about.google/) - United States

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer           |
| ------------------------- |
| Bellingcat Volunteer Team |
|                           |
