---
description: >-
  A map of the world's electricity, gas, water, and other infrastructure, using
  data from OpenStreetMap.
---

# Open Infrastructure Map

## URL

[https://openinframap.org](https://openinframap.org)

## Description

Open Infrastructure Map allows users to search for and view global infrastructure networks, to include:

* power lines, power plants, generators, power line supports, switchgear
* telecom
* gas
* petroleum
* water
* other pipelines

The basic purpose of the tool is that infrastructure data is contained within OSM, but not exposed by default, and this tool fills that gap. Users can select and display different layers of infrastructure data at their chosen location on the globe.

### The Interface

The tool presents a globe the user can turn in order to zoom in on a geographical location of interest.  Location can also be selected by writing a text name or latitude and longitude co-ordinates into the Search text box on the top left of the screen.  Clicking the **Layers button** on the right of the screen gives a checkbox list of various types of infrastructure the user can select or deselect for display.  Clicking the **Key button** provides a guide to interpreting the icons and colored lines representing various infrastructure types, which the user can consult to identify the infrastructure being displayed. For example, an icon of a tower denotes a telecom tower; a red line represents a ≥ 220 kV powerline, and so forth. &#x20;

Once the user has zoomed in sufficiently on a location — e.g. a power station -- the user can Left click on it, which opens a mini window containing additional details about the location.&#x20;

The map also provides a selectable "[nighttime lights](https://mapyourgrid.org/tools/)" background option, in addition to the standard OSM background.

On the top left of the screen, significant functionalitfy is accessed via the menu links labelled **About, Stats** and **Export**:

* **About:** This link gives comprehensive information on the tool's data, including how to add to it, how to access it, what the tool's components are, where the code is located, who wrote it, and where to find user communities online.
*   **Stats:** This link provides a service which delivers statistical information on the electricity network of a selected area (usually a country) in terms of&#x20;

    * the proportions of different voltage power lines and their cumulative length.&#x20;
    *   **EXAMPLE OUTPUT FOR USA: POWER LINES WITH DISTRIBUTION BY VOLTAGE & LENGTH**

        <figure><img src=".gitbook/assets/statsUS3.JPG" alt=""><figcaption></figcaption></figure>
    * the power plants by number, energy source and output in MW
    *   **EXAMPLE OUTPUT FOR USA: POWER PLANTS DISTRIBUTED BY NUMBER, SOURCE & MW**

        <figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

    It gives a quick picture of the shape and composition of power generation and power networks.
* **Export:** This link details scope of the Open Infrastructure Map data, the available formats for export and their limitations, and gives access to purchase exported data, along with the relevant terms and conditions. At the time of writing on 30/7/25 prices ranged from GBP 80 for a power export per country to GBP 700 for a power export worldwide

Since Open Infrastructure Map aids in infrastructure visibility, it could assist in pursuits as varied as researching a country's oil infrastructure (as referenced, for example, in [https://www.bellingcat.com/resources/2021/04/15/what-oil-satellite-technology-and-iraq-can-tell-us-about-pollution/](https://www.bellingcat.com/resources/2021/04/15/what-oil-satellite-technology-and-iraq-can-tell-us-about-pollution/),  helping companies focused on energy infrastructure planning, or assisting authorities with emergency preparedness, among many other uses.

**Example use case:** An energy company focused on accelerating the global transition towards 100% renewable energy used Open Infrastructure Map to map and view India's power infrastructure (note: source: [https://www.linkedin.com/posts/open-energy-transition\_openinfrastructuremap-openstreetmap-osm-activity-7288222806436143105-6aLa/](https://www.linkedin.com/posts/open-energy-transition_openinfrastructuremap-openstreetmap-osm-activity-7288222806436143105-6aLa/) )

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

An internet connection and browser.

## Limitations

Open Infrastructure Map may be incomplete or contain outdated information.

The infrastructure paths on the map may be schematic, i.e. omit information like the exact path of the infrastructure, e.g. a data cable, in favour of displaying very clearly the connectivity of the cable, e.g. where it starts and finishes. City 'Tube' maps are a good example of schematic maps.

The data exports provided by the tool are validated to work correctly with Google Earth Pro, but due to their size they may not work in all applications which consume KML. Due to size limitations with Google Earth Pro, KML exports for larger countries (the USA, Russia, and China) are filtered to only include power assets with a voltage rating of 25 kV or above, and generation assets with an output of 50 MW and above. Worldwide KML exports are not possible due to these limitations.

## Ethical Considerations

Since data could be used by bad actors to threaten national security, uploading details should be done with care.

## Guides and articles

Articles on research done with this tool: [https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049](https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049)&#x20;

Using the nighttime lights feature: [https://mapyourgrid.org/tools/](https://mapyourgrid.org/tools/)

## Tool provider

[Russ Garrett](https://russ.garrett.co.uk/) from London created and runs the tool.  He describes himself as a generalist software developer, systems architect and operations engineer.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer       |
| --------------------- |
| sophie 30 07 25 21:03 |
|                       |
