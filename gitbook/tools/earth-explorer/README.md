---
description: >-
  "Query and order satellite images, aerial photographs, and cartographic
  products"
---

# Earth Explorer

## URL

[https://earthexplorer.usgs.gov/](https://earthexplorer.usgs.gov/)

## Description

EarthExplorer is an archive portal for searching and downloading satellite, aerial, elevation, and other geospatial data.

It is especially valuable when you need original scenes, acquisition dates, and a reproducible data trail.

Datasets include:

* Imagery from orbiting satellites
* Images taken from aircraft or drones
* Digital elevation models (DEMs) and terrain height information
* Land cover (vegetation), hydrography (rivers, lakes), cartographic products (digitized maps, boundary data)

## Features

EarthExplorer includes an interactive map interface for defining areas of interest, textual filtering criteria for date range, cloud cover, sensor type, and resolution. You can browse previews of individual scenes with full metadata.

<figure><img src=".gitbook/assets/Screenshot 2026-06-21 at 6.38.07 PM.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src=".gitbook/assets/Screenshot 2026-06-21 at 6.38.22 PM.jpg" alt=""><figcaption></figcaption></figure>

After querying and getting results you can:

* Download the original scene file (e.g., GeoTIFF, JPEG, SAFE format) with no processing applied
* See the exact acquisition date and time
* Access metadata including:
  * Sensor type (Landsat 8OLI, NAIP aerial, etc.)
  * Resolution (30 m, 60 cm)
  * Geographic projection
  * Cloud cover percentage
  * Processing level (Level-1, Level-2)
* Export query results (KML, CSV) showing what you searched for
* Create a documented trail that you can:
  * Cite in a report, article, or legal filing
  * Reproduce by showing someone exactly how to find the same scene
  * Verify independently by re-running the search

### Why this matters for open source research

In open-source investigations, you often need to:

* Prove a claim (e.g., "This military base was built in 2021")
* Document changes over time with specific dates
* Reproduce your methodology so others can verify it

EarthExplorer gives you the source data with full metadata, which is what can make your open source research work credible and verifiable.

## Datasets

EarthExplorer offers over 50 datasets presented in 20 categories. The categories are:

1. **Aerial Imagery** (NAIP, HRO, DOQ, etc.)
2. **AVHRR** (satellite climate data)
3. **CEOS Legacy**
4. **Commercial Satellites** (OrbView-3, IKONOS-2, SPOT)
5. **Declassified Data** (spy satellites: Corona, Big Bird)
6. **Digital Elevation (DEM)** (SRTM, GTOPO30, IFSAR)
7. **Digital Line Graphs**
8. **Digital Maps**
9. **EO-1** (satellite)
10. **Global Fiducials**
11. **HCMM**
12. **ISERV**
13. **Land Cover** (NLCD, VegDRI)
14. **Landsat** (8-9, 7, Legacy 1972–2003)
15. **NASA LPDAAC Collections** (MODIS, other NASA products)
16. **Radar**
17. **Sentinel** (marked as removed/deprecated)
18. **UAS** (drone imagery)
19. **Vegetation Monitoring**
20. **ISRO Resourcesat**

### OSINT Use Cases & Corresponding Datasets

<table><thead><tr><th width="277.3494873046875" valign="top">OSINT Task</th><th width="162.2265625" valign="top">Best Dataset</th><th valign="top">Why</th></tr></thead><tbody><tr><td valign="top">Geolocation of a photo/video</td><td valign="top"><strong>NAIP</strong> → then <strong>OrbView-3</strong> if pre-2008</td><td valign="top"><p>NAIP gives 30–60 cm aerial detail for matching roads, buildings, vehicles;</p><p>OrbView-3 is the only sub-meter satellite option (2003–2007)</p></td></tr><tr><td valign="top">Verifying facility/building claims</td><td valign="top"><strong>NAIP</strong> (current), <strong>Landsat Legacy</strong> (historical)</td><td valign="top">Compare current NAIP against historical Landsat to show when structures appeared/changed</td></tr><tr><td valign="top">Tracking military/infrastructure activity</td><td valign="top"><strong>Landsat 8-9 C2 L2</strong>, <strong>MODIS</strong></td><td valign="top">Medium res but 30-year history; detect new roads, pads, camps; MODIS for frequent (daily) updates</td></tr><tr><td valign="top">Natural disaster / conflict zone documentation</td><td valign="top"><strong>Landsat 8-9 C2 L2</strong>, <strong>ASTER</strong></td><td valign="top">Global coverage, 30 m resolution, natural color imagery; ASTER for thermal/DEM analysis of damage</td></tr><tr><td valign="top">Mining / resource extraction investigation</td><td valign="top"><strong>Landsat 8-9 C2 L2</strong>, <strong>NLCD</strong></td><td valign="top">Track pit expansion, waste piles, vegetation loss; NLCD for land-cover change quantification</td></tr><tr><td valign="top">Border / fence / wall construction monitoring</td><td valign="top"><strong>NAIP</strong> (US), <strong>Landsat 8-9</strong> (global)</td><td valign="top">High-res NAIP for fence details within US; Landsat for international borders</td></tr></tbody></table>

### High-Resolution Imagery (US Focus - Critical for Geolocation)

<table><thead><tr><th width="113.9976806640625" valign="top">Dataset</th><th width="120.43115234375" valign="top">Type</th><th width="120.8966064453125" valign="top">Resolution</th><th width="128.857177734375" valign="top">Coverage</th><th valign="top">Notes</th></tr></thead><tbody><tr><td valign="top"><strong>NAIP</strong></td><td valign="top">Aerial imagery</td><td valign="top">30–60 cm</td><td valign="top">Contiguous 48 US states</td><td valign="top">Primary geolocation tool for US sites. Match roads, buildings, cars, trees, shadows. Seasonal (growing season) </td></tr><tr><td valign="top"><strong>HRO</strong></td><td valign="top">Aerial imagery</td><td valign="top">1 m or finer</td><td valign="top">Partial US</td><td valign="top">Higher-quality orthorectified photos where available; better for precise measurements</td></tr><tr><td valign="top"><strong>OrbView-3</strong></td><td valign="top">Commercial satellite</td><td valign="top">1 m</td><td valign="top">Global</td><td valign="top">Only sub-meter satellite option in EarthExplorer; historical (2003–2007); useful for pre-2008 conflict documentation</td></tr><tr><td valign="top"><strong>IKONOS-2</strong></td><td valign="top">Commercial satellite</td><td valign="top">~1 m</td><td valign="top">Global</td><td valign="top">Another early-2000s high-res satellite; overlap with OrbView period</td></tr><tr><td valign="top"><strong>DOQ</strong></td><td valign="top">Aerial orthophoto</td><td valign="top">~1 m</td><td valign="top">Older US coverage</td><td valign="top">1990s–early 2000s historical US aerials; gap-filler before NAIP</td></tr></tbody></table>

### Satellite Imagery (Global - Conflict Zones, International Sites) <a href="#satellite-imagery-global--conflict-zones-internat" id="satellite-imagery-global--conflict-zones-internat"></a>

<table><thead><tr><th width="113.9976806640625" valign="top">Dataset</th><th width="120.43115234375" valign="top">Type</th><th width="121.0770263671875" valign="top">Resolution</th><th width="128.857177734375" valign="top">Time Span</th><th valign="top">Notes</th></tr></thead><tbody><tr><td valign="top"><strong>Landsat 8-9 C2 L2</strong></td><td valign="top">Satellite</td><td valign="top">30 m</td><td valign="top">2013–present</td><td valign="top">Best global sat for OSINT in EarthExplorer. Natural color, 30-year archive, frequently updated </td></tr><tr><td valign="top"><strong>Landsat Legacy</strong></td><td valign="top">Satellite</td><td valign="top">30–80 m</td><td valign="top">1972–2003</td><td valign="top">Historical baseline for long-term change (e.g., Syria since 2000, Chechnya, Kosovo) </td></tr><tr><td valign="top"><strong>MODIS / eMODIS</strong></td><td valign="top">Satellite</td><td valign="top">250 m – 1 km</td><td valign="top">2000–present</td><td valign="top">Near-daily coverage; detect fires, floods, RapidChange zones; low res but fast </td></tr><tr><td valign="top"><strong>ASTER</strong></td><td valign="top">Satellite</td><td valign="top">15 m (pan), 30 m</td><td valign="top">2000–present</td><td valign="top">Thermal analysis (burn sites, explosives), DEM for terrain; limited US coverage</td></tr><tr><td valign="top"><strong>SPOT</strong></td><td valign="top">Commercial satellite</td><td valign="top">10–20 m</td><td valign="top">1980s–present</td><td valign="top">Medium-res global; European source; useful for land cover, vegetation trends</td></tr></tbody></table>

### Elevation & Terrain (Site Analysis, Line-of-Sight) <a href="#elevation--terrain-osint-site-analysis-line-of-si" id="elevation--terrain-osint-site-analysis-line-of-si"></a>

<table><thead><tr><th width="113.9976806640625" valign="top">Dataset</th><th width="120.43115234375" valign="top">Type</th><th width="121.0770263671875" valign="top">Resolution</th><th valign="top">Notes</th></tr></thead><tbody><tr><td valign="top"><strong>SRTM 1 Arc-Second Global</strong></td><td valign="top">DEM</td><td valign="top">~30 m</td><td valign="top">Terrain analysis for military positions, line-of-sight, sniper sight lines, vehicle routes</td></tr><tr><td valign="top"><strong>IFsar Alaska</strong></td><td valign="top">DEM</td><td valign="top">2 m</td><td valign="top">Alaska-specific high-res elevation (if investigating Arctic)</td></tr></tbody></table>

### Land Cover & Environmental <a href="#land-cover--environmental-osint" id="land-cover--environmental-osint"></a>

<table><thead><tr><th width="113.9976806640625" valign="top">Dataset</th><th width="120.43115234375" valign="top">Type</th><th width="121.0770263671875" valign="top">Resolution</th><th valign="top">Notes</th></tr></thead><tbody><tr><td valign="top"><strong>Annual NLCD</strong></td><td valign="top">Land cover</td><td valign="top">30 m</td><td valign="top">Track deforestation, oil/gas pads, illegal mining, camp construction in US</td></tr><tr><td valign="top"><strong>VegDRI / QuickDRI</strong></td><td valign="top">Vegetation stress</td><td valign="top">~250 m</td><td valign="top">Drought monitoring, agricultural fraud, food security in conflict zones</td></tr></tbody></table>

### Historical & Declassified (Cold War, Conflict Documentation) <a href="#historical--declassified-cold-war-conflict-docume" id="historical--declassified-cold-war-conflict-docume"></a>

<table><thead><tr><th width="122.8489990234375" valign="top">Dataset</th><th width="120.43115234375" valign="top">Type</th><th width="121.0770263671875" valign="top">Resolution</th><th width="119.1243896484375" valign="top">Time Span</th><th>Notes</th></tr></thead><tbody><tr><td valign="top"><strong>Declassified 1–3</strong></td><td valign="top">Declassified military sat</td><td valign="top">Varies (some high-res)</td><td valign="top">1960s–1980s</td><td>Spy satellite imagery (Corona, Big Bird); Cold War sites, Soviet facilities</td></tr><tr><td valign="top"><strong>Landsat Legacy</strong></td><td valign="top">Satellite</td><td valign="top">30–80 m</td><td valign="top">1972–2003</td><td>Pre-2003 baseline for long-term studies (e.g., Syria, North Korea)</td></tr></tbody></table>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



* Most data is free and in the public domain (Landsat, NAIP, SRTM, MODIS, etc.).
* Select datasets have fees/use restrictions (indicated within EarthExplorer during search) but this is rare.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

EarthExplorer is web-based and will run in any modern browser on any OS. An internet connection is required.

Free account required to download data (ERS registration at [ers.cr.usgs.gov](https://ers.cr.usgs.gov/)).

## Limitations

* **No high-resolution global imagery:** Only sub-meter resolution (30–60 cm) is NAIP, which is US-only. For international high-res, you need paid services (e.g. Maxar, Planet).
* **Landsat is 30 m:** Too low for vehicle/person-level identification; good for infrastructure only
* **100-result limit:** Maximum 100 records per search; need to narrow by Country/Feature Class to avoid hitting this cap.
* **OrbView-3 is historical (2003–2007):** Not useful for current conflict documentation
* **Seasonal NAIP (growing season only):** Winter photos may not be available.
* **Sentinel-2 removed:** USGS stopped distributing Sentinel-2 data through EarthExplorer as of 19 Nov 2022. Use Copernicus Hub instead.
* **No API access:** Manual interface only; can't automate bulk queries programmatically.

## Ethical Considerations

**Privacy Concerns:** Remote sensing technologies can capture detailed images from space or high altitude, potentially compromising individual privacy. Researchers must balance the public interest with the rights to privacy.

**Accuracy and Misinterpretation:** Ensuring the accurate representation of data is critical. Misinterpretation of remote sensing data can lead to misinformation, shaping public opinion based on incorrect premises. Each dataset may have different standards for accuracy.

## Similar Tools

[Copernicus Data Space Ecosystem](https://dataspace.copernicus.eu/)\
[NASA Earthdata Search](https://search.earthdata.nasa.gov/)\
[EOS Data Analytics LandViewer](https://eos.com/products/landviewer/)

**Commercial Alternatives**\
[Sentinel Hub](https://www.sentinel-hub.com/)\
[Planet](https://www.planet.com/)\
[Vantor (formerly Maxar)](https://vantor.com/)

Note that, unlike with EarthExplorer and the other apps above, with many services (Google Maps, Bing Maps, satellite map apps) you cannot:

* Download the original image file
* See the exact acquisition date (down to the day/time)
* Get the metadata (sensor, resolution, projection, etc.)
* Prove where the data came from in a legal or investigative context

## Guides

[https://www.usgs.gov/centers/eros/science/earthexplorer-help-index](https://www.usgs.gov/centers/eros/science/earthexplorer-help-index)

[https://youtu.be/lkbzQunkT\_s?si=8rxsZ0I2xPuAxyqN](https://youtu.be/lkbzQunkT_s?si=8rxsZ0I2xPuAxyqN)

## Tool provider

[U.S. Geological Survey (USGS](https://www.usgs.gov/)), an agency of the United States Department of the Interior.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer                                           |
| --------------------------------------------------------- |
| Bellingcat Volunteer Team. Last updated in June/July 2026 |
|                                                           |
