---
description: >-
  The ESA's Earth Online product offers a portal for accessing satellite imagery
  and environmental data, supporting a range of applications from climate
  monitoring to natural disaster assessment.
---

# The European Space Agency (ESA) - Earth Online

## URL

[https://earth.esa.int/eogateway/tools](https://earth.esa.int/eogateway/tools)

## Description &#x20;

The European Space Agency's Earth Online is a portal dedicated to providing a wealth of information on ESA's Earth observation activities and datasets. It serves as a comprehensive platform for scientists, researchers, and the general public interested in Earth science and environmental monitoring. Users can access up-to-date satellite imagery, data from Earth observation missions, and a range of tools designed to facilitate the analysis and interpretation of environmental data. Earth Online also features news, educational resources, and detailed mission information, making it a useful resource for anyone looking to understand our planet's dynamics and changes.

### Use Cases for European Space Agency's Earth Online

The European Space Agency's Earth Online portal offers a broad array of use cases. Some of the imagery is super high resolution (less than a meter) however although there are hundreds of datasets many of them require registration and institutional affiliation. There are a number of 'sample' datasets that are free but may not be up to date. Individual tools can be used for multiple use cases. Some of these use cases focus on environment monitoring (tracking changes in climate, land use, and natural habitats over time) others could be used for monitoring more human focused activity. Use cases include:

* **Agricultural Analysis:** Assisting in the monitoring of crop health, forecasting yields, and managing agricultural resources. For instance the [IRS-P5 (Cartosat-1) Sample Data](https://earth.esa.int/eogateway/missions/irs-p5/sample-data) provides high resolution 2.5 m resolution crop inventory and monitoring agricultural productivity.
* **Forest Loss:** The [BIOMASS Product Algorithm Laboratory (BioPAL)](https://www.biopal.org/) tool offers processing scripts and Jupyter Notebooks for monitoring Above Ground Biomass, Forest Height and Forest Disturbance.
* **Oceanography and Marine Sciences:** Supporting the study of ocean currents, sea surface temperatures, and marine ecosystems. Tools like the [Cryo2ice tool](https://cs2eo.org/cryo2ice) can monitor ocean ice cover which can impact shipping routes (limited to data between February 2021 up to 2022) and the [Ocean and Coastal Topography Thematic Data Product (TDP)](https://earth.esa.int/eogateway/catalog/tdp-for-ocean-and-coastal-topography) dataset which contains improved sea surface height anomaly data. The screenshot below shows the [Cryo2ice tool](https://cs2eo.org/cryo2ice) with a search for Arctic sea ice 2022-02-06:

<figure><img src=".gitbook/assets/Screenshot 2024-07-18 at 10.36.48 AM.png" alt="The screenshot  shows the Cryo2ice tool with a search for Arctic sea ice 2022-02-06 the results show a satellite map with satellite paths and imagery of ice cover for a specific area as an inset box lower right."><figcaption><p>Screenshot of the Cryo2ice Arctic sea ice 2022-02-06 09:24</p></figcaption></figure>

* **The atmosphere:**  The [Atmosphere Virtual Lab (AVL)](https://atmospherictoolbox.org/media/usecases/Usecase\_5\_aeolus.html) tool provides [Jupyter Notebooks](https://jupyter.org/) that can be used to analyze and visualize atmospheric earth observation data and the [GHGSat archive](https://earth.esa.int/eogateway/catalog/ghgsat-archive-and-tasking) contains data that monitors greenhouse gas emissions (currently CH4, but eventually CO2).
* **Human Activity:** The [Urban Thematic Exploitation Platform](https://urban-tep.eu/) tool requires registration but provides data and visualisation of the Global Urban Footprint and population density. The [Geohazards TEP](https://geohazards-tep.eu/) is a glacier and landslide monitoring tool that has data processed over the eastern Alps Ground Motion Service.
* **Disaster Monitoring:** Earth Online provides a number of tools that can be used for disaster monitoring, like the [SMOS Tropical Cyclone Wind Radii Fixes](https://earth.esa.int/eogateway/catalog/smos-tropical-cyclone-wind-radii-fixes-wrf) (Registration required) and provides Near Real Time tropical cyclones forecasts.
* **Educational Resources:** Earth online also serves as a tool for educators and students in the fields of earth sciences, geography, and environmental studies with tools like the [Heritage Missions app for iOS](https://apps.apple.com/lt/app/esa-heritage-missions/id1584783729) providing 3D visualisations of satellite instrumentation.

These use cases highlight the versatility of the Earth Online portal in supporting a wide range of scientific research, educational, and applied environmental management activities.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>4</td></tr></tbody></table>

Some of the tools provided require Jupyter Notebook and Python programming experience or a high degree of knowledge about remote sensing and satellite imagery.&#x20;

## Requirements

* Web: any modern web browser (individual tools will have specific requirements documented inline)
* Desktop: many of the tools provided can be run on a desktop or cloud provider (see the individual tool for further details).&#x20;

## Limitations

* **Data Availability**: While ESA's Earth Online offers extensive datasets, certain historical data or high-resolution imagery is not be readily available due to the limitations of past missions, data retention policies or registration requirements. For instance the [The Urban Thematic Exploitation Platform](https://urban-tep.eu/) only has data available for 2015. See individual dataset for more details. There are a number of 'sample' datasets that are free but may not be up to date.
* **Learning Curve**: New users may find the array of tools and associated interfaces challenging to navigate without prior experience in satellite data analysis or familiarity with similar platforms.
* **Access Restrictions**: Some datasets require specific permissions or qualifications for access, limiting use for certain research or educational purposes. This also applies to tools like: the Food Security Thematic Exploitation Platform (TEP), the Hydrology TEP, and the Forestry TEP all of which require registration and organisational affiliation. See [How to Access Data](https://www.esa.int/Applications/Observing\_the\_Earth/How\_to\_access\_data) for more information.
* **Processing Power**: Advanced data analysis and processing tasks demand significant computational resources, which may not be feasible for all users. Different tools will have different processing requirements. See the individual tool's documentation.
* **Update Frequency**: The update intervals for some datasets may not meet the needs of users requiring real-time or near-real-time information. Different datasets will have different update frequency. See the individual dataset's documentation.
* **Tool Functionality**: Not all the of tools are maintained and working. For instance the [Heritage Missions app for iOS](https://apps.apple.com/lt/app/esa-heritage-missions/id1584783729) doesn't allow users to search for current satellite data.

## Guide

The platform acts as a guide to the tools it hosts, the main way of discovering tools is through the search interface: [https://earth.esa.int/eogateway/search?category=Tools+and+toolboxes\&tools\_type=analysis\&sortby=RELEVANCE](https://earth.esa.int/eogateway/search?category=Tools+and+toolboxes\&tools\_type=analysis\&sortby=RELEVANCE) from here filters for the different tool types (Analysis, Processing and Visualisation) can be applied. &#x20;

The example below shows the default analysis tools search interface:

<figure><img src=".gitbook/assets/Screenshot 2024-04-16 at 12.57.28 PM.png" alt="Screenshot of default analysis tools search interface."><figcaption><p>Screenshot of default analysis tools search interface.</p></figcaption></figure>

## Tool provider

European Space Agency [https://www.esa.int/](https://www.esa.int/)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                      |
| ------------------------------------ |
| Bellingcat Volunteer Team/Unassigned |
|                                      |

