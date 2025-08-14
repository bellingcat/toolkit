---
description: >-
  A map of the world's electricity, gas, water, and other infrastructure, using
  data from OpenStreetMap (OSM).
---

# Open Infrastructure Map

## URL

[https://openinframap.org](https://openinframap.org)

## Description

<figure><img src=".gitbook/assets/OPENINFRAMAP1.gif" alt=""><figcaption></figcaption></figure>

Open Infrastructure Map allows users to search for and view global infrastructure networks which include:

* power lines, power plants, generators, power line supports, switchgear
* telecom
* gas
* petroleum
* water
* other pipelines

The tool helps reveal infrastructure data that can be found within [OpenStreetMap](https://www.openstreetmap.org/) (OSM) but that is not easily visible when visiting OSM. Users can select and display different layers of infrastructure data at their chosen location on the globe.

### The Interface

The tool presents a globe that the user can turn in order to zoom in on a geographical location of interest.  A location can also be selected by either typing a name or entering latitude and longitude co-ordinates into the search box on the top left of the screen. &#x20;

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p><strong>EXPLODED VIEW OF THE OPEN INFRASTRUCTURE MAP INTERFACE, SHOWING SOME OF THE FEATURES AVAILABLE</strong></p></figcaption></figure>

Clicking the **Layers button** on the right of the screen opens a checkbox list of various types of infrastructure that the user can select or deselect for display.  Clicking the **Key button** provides a guide to interpreting the icons and colored lines representing various infrastructure types, which the user can consult to identify the infrastructure being displayed. For example, an icon of a tower denotes a telecom tower; a red line represents a ≥ 220 kV powerline, and so forth. &#x20;

Once the user has zoomed in sufficiently on a location — e.g. a power station -- the user can left click on it, which opens a mini window containing additional details about the location.&#x20;

The map also provides a selectable "[nighttime lights](https://mapyourgrid.org/tools/)" background option, in addition to the standard OSM background.

On the top left of the screen, one can access significant functionality via the menu links labelled **About, Stats** and **Export**:

* **About:** This link gives comprehensive information on the tool's data, including how to add to it, how to access it, what the tool's components are, where the code is located, who wrote it, and where to find user communities online.
* **Stats:** This link allows for selecting an area (usually a country) to obtain statistical information on its electricity network; specifically:
  *   The proportions of different voltage power lines and their cumulative length:

      <figure><img src=".gitbook/assets/statsUS3.JPG" alt=""><figcaption><p><strong>EXAMPLE OUTPUT FOR USA: POWER LINES WITH DISTRIBUTION BY VOLTAGE &#x26; LENGTH:</strong></p></figcaption></figure>

      *   &#x20;The power plants by number, energy source and output in megawatts (MW):

          <figure><img src=".gitbook/assets/image (1) (1).png" alt=""><figcaption><p><strong>EXAMPLE OUTPUT FOR USA: POWER PLANTS DISTRIBUTED BY NUMBER, SOURCE &#x26; MW</strong></p></figcaption></figure>

      These statistics givee a quick picture of the shape and composition of power generation and power networks.
* **Export:** This link details the scope of the Open Infrastructure Map data, the available formats for export and their limitations, and gives access to purchase exported data, along with the relevant terms and conditions. At the time of writing on 30/7/25, prices ranged from GBP 80 for a power export per country to GBP 700 for a power export worldwide.

Since Open Infrastructure Map aids in infrastructure visibility, it could assist in pursuits as varied as [researching a country's oil infrastructure](./#url),  helping companies focused on energy infrastructure planning, or assisting authorities with emergency preparedness, among many other uses.

**Example use case:** An energy company focused on accelerating the global transition towards 100% renewable energy used Open Infrastructure Map to [map and view India's power infrastructure](./#url).

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

The infrastructure paths on the map may be schematic, i.e. they may omit information such as the exact path of the infrastructure — for example, a data cable — in favour of clearly displaying where the cable starts and finishes. (London's 'Tube' maps are a good example of schematic maps.)

The data exports provided by the tool are validated to work correctly with Google Earth Pro, but due to their size, they may not work in all applications that consume KML ([Keyhole Markup Language](https://www.geowgs84.com/post/what-exactly-is-a-kml-file-and-how-can-i-create-one)). Due to size limitations with Google Earth Pro, KML exports for larger countries (the USA, Russia, and China) are filtered to only include power assets with a voltage rating of 25 kV or above, and generation assets with an output of 50 MW and above. Worldwide KML exports are not possible due to these limitations.

## Ethical Considerations

Since data could be used by bad actors to threaten national security, uploading details should be done with care.

## Guides and articles

Article on research conducted with this tool: [https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049](https://news.sky.com/story/ukraine-war-how-much-the-lights-have-gone-out-in-kyiv-revealed-for-the-first-time-by-nasa-satellites-12773049)&#x20;

Using the nighttime lights feature: [https://mapyourgrid.org/tools/](https://mapyourgrid.org/tools/)

## Tool provider

[Russ Garrett](https://russ.garrett.co.uk/) from London created and runs the tool.  He describes himself as a generalist software developer, systems architect and operations engineer.&#x20;

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Sophie/Sarah    |
|                 |
