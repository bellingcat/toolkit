---
description: Deep-Sea Mining Watch maps and monitors vessels involved in deep sea mining.
---

# deep-sea-mining-watch

## URL

[https://www.deepseaminingwatch.msi.ucsb.edu/](https://www.deepseaminingwatch.msi.ucsb.edu/)

## Description

{% hint style="info" %}
Deep Sea Mining is the extraction of mineral deposits from the ocean floor. Metals such as nickel and cobalt are among the most sought after, because of soaring demands for use in batteries, electric vehicles and spacecraft. Exploration contracts can be held by (state-sponsored) private companies or state-owned entities. There is still ongoing debate on environmental concerns, licensing and costs and full-scale mining has not yet been realized. The legal and political landscape is changing fast.

See the [FAQ](https://isa.org.jm/faq-for-media/) of the International Seabed Authority (ISA) for details on deep sea mining and the [Critical Minerals Data Explorer](https://www.iea.org/data-and-statistics/data-tools/critical-minerals-data-explorer) from the International Energy Agency (IEA) for the latest demand projections and industrial and domestic applications.&#x20;
{% endhint %}

Deep Sea Mining Watch displays deep sea mining vessel presence on a global map, using a heatmap to highlight areas with high mining activity.&#x20;

As deep sea mining occurs far offshore and out of sight in deep waters, open source research holds extra value for monitoring. Deep Sea Mining Watch shows vessels associated with mining activity on a map together with license boundaries and protected zones. Open researchers can use this tool to verify mining claims and activities, by checking whether a vessel's tracked position and movement pattern matches its licensed block, and investigate unexplained activity, such as a vessel operating outside its license area or inside a protected zone. As the International Seabed Authority (ISA) is the most widely acknowledged but not the only licensing authority, monitoring conflicting claims and mining activity as a source of potential geopolitical conflict is another usecase.&#x20;

{% hint style="info" %}
The USA is not a member of the international ISA and issues own licenses through the National Oceanic and Atmospheric Administration (NOAA), sometimes for the same waters. See this [visual explainer](https://www.congress.gov/crs_external_products/IG/HTML/IG10053.web.html) for details.&#x20;
{% endhint %}

<figure><img src=".gitbook/assets/Screenshot 2026-06-21 at 12.19.34.png" alt=""><figcaption><p>The Deep Sea Mining Vessels filter on the Global Fishing Watch map highlights areas with deep sea mining activity.</p></figcaption></figure>

<figure><img src=".gitbook/assets/Screenshot 2026-06-21 at 15.29.40.png" alt=""><figcaption><p>The Clarion-Clipperton Zone (CCZ) in international waters of the central Pacific, south-east of Hawaii; the current epicentre of deep sea mining activity. In purple the ISA licensed areas by resourcetype, in red the areas per contractor (not always visible due to overlap). Vessels appearing in an appointed area of particular environmental interest, the larger square boxes in this view, are a red flag.</p></figcaption></figure>





\[How, screens]

\[detail screen]&#x20;

\[what data, historical data]



## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* \[features after login]&#x20;
* The tool is actively maintained, so check the [Platform and Data Updates](https://globalfishingwatch.org/platform-and-data-updates/) section (for Global Fishing Watch platform, so not all will be relevant to the Deep Sea Mining Watch) for the latest developments.&#x20;

## Limitations

* Deep Sea Mining Watch provides the vessels as a curated list; ships involved in deep sea mining may have been missed.&#x20;
* The filter on the curated Deep Sea Mining Vessels layer relies on Automatic Identification System (AIS) data only; if a vessel turns off the transponder, it will disappear from the map.&#x20;
* Other layers such as Radar Detections (SAR), Night light detections (VIIRS) or Events as Port Visits can be added from the layer library, but are based on the complete Global Fishing Watch Map and have no connection to the Deep Sea Mining Vessels filter. Vessels found from the added general GFW layers need to be cross-checked manually as they may not be associated with deep sea mining.&#x20;
* The reference data layer for license areas is based on ISA licenses only and does not show claims and contracts for other jurisdictions such as NOAA. The vessels will be visible on the map, but without this context layer. &#x20;
* Data is not real time, but approximately 72 hours behind.&#x20;
* Limited analysis functionality: for raw data and export functionality, use [Global Fishing Watch](https://bellingcat.gitbook.io/toolkit/more/all-tools/global-fishing-watch-map#search-for-vessels-view-vessel-tracks-and-fishing-events).&#x20;

## Ethical Considerations

* \[disclaimer BOS]

## Guides and articles

This [interactive tutorial](https://www.deepseaminingwatch.msi.ucsb.edu/tutorial) on the website of Deep Sea Mining Watch will lead you through all screens and options of the tool. Inline help is available when clicking the icon with the question mark. Info icons provide background info on entities and caveats of the data layers.  &#x20;

Deep Sea Mining Watch was used in The Mongabay/CNN investigation into China’s deep-sea mining fleet (march 2026), combining [MarineTraffic](https://bellingcat.gitbook.io/toolkit/more/all-tools/marinetraffic), [QGIS](https://bellingcat.gitbook.io/toolkit/more/all-tools/qgis) and Deep Sea Mining Watch. [Mongabay](https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/) | [interactive CNN version](https://cnn.com/interactive/2026/03/world/china-deep-sea-mining-military-vis-intl/)&#x20;

Interesting for Open Source Researchers is this article for details on the used methodology: [How (and Why) We Tracked China’s Deep-Sea Mining Fleet | Pulitzer Center](https://pulitzercenter.org/resource/how-and-why-we-tracked-chinas-deep-sea-mining-fleet)

## Tool provider

[Benioff Ocean Science Laboratory](https://bosl.ucsb.edu), University of California. The platform is powered by [Global Fishing Watch’](https://bellingcat.gitbook.io/toolkit/more/all-tools/global-fishing-watch-map)s Open Ocean Project.

## Similar tools

Deep Sea Mining Watch can be combined with:&#x20;

* [Global Fishing Watch ](https://bellingcat.gitbook.io/toolkit/more/all-tools/global-fishing-watch-map)for a broader scope of (fishing) vessels
* [MarineTraffic](https://bellingcat.gitbook.io/toolkit/more/all-tools/marinetraffic) and [VesselFinder](https://bellingcat.gitbook.io/toolkit/more/all-tools/vesselfinder) as general AIS vessel trackers for (almost) live locations
* [Equasis](https://bellingcat.gitbook.io/toolkit/more/all-tools/equasis) for details on ownership of vessel and fleet
* [International Seabed Authority](https://isa.org.jm/exploration-contracts/) (ISA) or [NOAA](https://oceanservice.noaa.gov/deep-seabed-mineral-resources/deep-seabed-mining/) (US only) for info on authority and running contracts
* The [Global Critical Minerals Outlook yearly reports](https://www.iea.org/reports/global-critical-minerals-outlook-2025) of the International Energy Agency (IEA) for market trends and supply and demand projections.&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                     |
| ----------------------------------- |
| Bellingcat Volunteer Team / Lavache |
|                                     |
