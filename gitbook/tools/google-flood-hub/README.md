---
description: >-
  A visual tool to monitor river levels and forecast floods based on AI models
  developed by Google Research.
---

# Google Flood Hub

## URL

[https://sites.research.google/floods/](https://sites.research.google/floods/)

## Description

Google Flood Hub is developed by Google Research and uses [AI models to forecast floods](https://www.nature.com/articles/s41586-024-07145-1). It [combines](https://sites.research.google/gr/floodforecasting/) two AI models that process diverse publicly available data sources: the [Hydrologic Model](https://sites.research.google/gr/floodforecasting/hydrology-model/) forecasts the amount of water flowing in a river, and the Inundation Model predicts what areas will be affected and how high the water level will be. Flood Hub offers users flood data and forecasts specific to their location, with predictions extending up to 7 days, and presents the data visually by showing local river flood maps and water trends.

Open source researchers, especially those focusing on environmental research and natural disaster monitoring, can use Google Flood Hub's predictive analytics as well as real-time monitoring to keep track of developments in areas of interest.&#x20;

As of November 2024, Flood Hub [covers](https://sites.research.google/gr/floodforecasting/) river basins in over 80 countries worldwide, providing critical flood forecasting for over 1,800 sites and, covering a population of 460M people.

<figure><img src=".gitbook/assets/Screenshot 2024-11-21 at 4.18.55 PM.png" alt=""><figcaption><p>View of Pittsburgh, Pennsylvania on Google Flood Hub including current and expected river water and danger levels. </p></figcaption></figure>

Scrolling around the world map will show different colored pins indicating points of measurement (called river gauges here). Each color represents the level of danger from a flood. The filters can be used to exclude/include the normal river levels and/or the ones marked as warnings and dangerous.

**Additional coverage**

Additionally, you can chose to see lower confidence gauges that do not meet Google's standards for the data necessary for evaluation, but can provide a more complete picture. The default setting shows only the high confidence data, but this can be toggled to show the lower confidence data points.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2025-02-25 at 8.29.32 PM.png" alt=""><figcaption><p>River gouges for Cuanza River in Angola - regular view (L) and the additional coverage (lower confidence gauges) turned on (R)</p></figcaption></figure>

**Inundation probability and Inundation history**

Inundation probability show the areas likely to be submerged under water during a flood. Please be advised that this metric is not supported for all gauges (sometimes the Google model may not have shown clear inundation patterns. In these regions we decide to only share the hydrologic information).&#x20;

Inundation history shows the frequency of inundation in the past. This helps identifying higher risk areas based on historical records. The different levels do not show how deep the water was, but how often the area was under water. According to Google's documentation, this layer has limitations and "does not extend to the extreme northern or southern points." It is restricted to the following latitudes and longitudes:

* **Minimum latitude:** -39.0
* **Minimum longitude:** -125.0
* **Maximum latitude:** 43.0
* **Maximum longitude:** 170.0

<figure><img src=".gitbook/assets/Screenshot 2025-02-25 at 8.54.59 PM.png" alt="" width="375"><figcaption><p>Inundation history around Orinoco River in Venezuela</p></figcaption></figure>

You can find details on how to read the gauge side panel [here](https://support.google.com/flood-hub/answer/15636998?hl=en\&ref_topic=15636596\&sjid=7162562628577014661-EU). To see a gauge panel, click on a gauge pin to find additional information for past trends and forecasts, water level measurements, coordinates and the size of the water basin, among others.&#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Internet connection.

&#x20;

## Limitations

Access to the flood forecasting API is limited to pilot participants of the program and Google asks the research community to register for the [API pilot waiting list](https://docs.google.com/forms/d/e/1FAIpQLSfcKhe3CHsncM-_NQ66zLheEfXKnNbDPBtuIT7BSYCqYkmOaA/viewform) if they would like to use the API functionality.

Currently this tool does not work without a connection to the web. However, [Google.org appears to be collaborating with organizations](https://blog.google/outreach-initiatives/sustainability/flood-hub-ai-flood-forecasting-more-countries/) to help offline alerting to areas where access to a smartphone or internet is limited or non-existent.

## Ethical Considerations

[According](https://sites.research.google/gr/floodforecasting/flood-hub-expert-mode/) to Google, the Flood Hub's "virtual gauges are intended for use by experts and hydrologists who need additional and more complex views to improve flood forecasting alerting and response decisions, and/ or organizations that would like to use the flood forecasting tools for evaluation, history analysis, and other research purposes." Again, according to Google, the new version of the tool, which is currently in use, [has](https://blog.google/technology/ai/expanding-flood-forecasting-coverage-helping-partners/) "reliability comparable to state-of-the-art global flooding nowcasts." We are not able to check this statement at this point in time.

## Guides

[Google Flood Hub FAQ](https://sites.research.google/gr/floodforecasting/resources/)

[How to get started with the Google FloodHub](https://www.youtube.com/watch?v=Klu3zlbUy0Y) - Google Research video on YouTube

[How to use Google Flood Hub](https://support.google.com/flood-hub/#topic=15636596) - official Google guide

[Presentation on Google Flood Hub](https://www.youtube.com/watch?v=YKZlc7Fk6ik) - presentation by Moriah Royz, Senior Product Manager in Google Research

## Tool provider

[Google Research](https://research.google/), U.S.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                    |
| ---------------------------------- |
| Bellingcat Volunteer Team/LPetrova |
