---
description: >-
  RAWGraphs is an open-source data visualization tool designed for non-technical
  users, enabling the creation of customizable, editable charts without coding
  skills.
---

# RAWGraphs

## URL

[https://app.rawgraphs.io/](https://app.rawgraphs.io/)

## Description

RAWGraphs is a browser-based tool that provides a flexible platform for creating complex, data-driven visualizations. Users can upload data files, select from a wide range of chart types, map data dimensions, and export visualizations in .svg format for further editing. It supports unique visualization types, including alluvial diagrams, beeswarm plots, and stacked area charts, making it suitable for exploring complex relationships, timelines, and distributions in data.

In addition to file uploads, RAWGraphs supports SPARQL queries directly from the web app, allowing users to retrieve data from RDF-based databases and knowledge graphs (e.g., Wikidata or DBpedia) without leaving the interface. SPARQL (SPARQL Protocol and RDF Query Language) is a powerful tool for querying interconnected datasets and extracting complex relationships. This feature enables users to access up-to-date, linked data from open sources, enhancing RAWGraphs' utility for semantic web and research applications.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>The vast number of charts available.</p></figcaption></figure>

## Key Features

* **Selecting Visualization Types**: RAWGraphs provides a variety of chart types suited for different research needs, from alluvial diagrams for flow data to beeswarm plots for event timelines.
* **Contributing and Customization**: As an open-source project, RAWGraphs allows users and developers to contribute by adding features or creating custom chart types, expanding its utility for specialized visualizations.
* **Humanizing Data through Visual Impact**: When dealing with sensitive or humanitarian data, as in the Afghanistan school attack visualization, RAWGraphs enables researchers to balance emotional storytelling with data accuracy, making complex information accessible and impactful.

### **Data Import Methods in RAWGraphs**

RAWGraphs offers several ways to import data, making it easy to connect to various sources:

1. **Upload a File**: Supports **.csv**, **.tsv**, **.dsv**, and **.json** formats.
2. **Copy and Paste from a Table**: Directly paste data from a spreadsheet or text editor for quick visualizations.
3. **Load Data from a URL**: Connect to a web URL (e.g., Google Sheets, GitHub, public APIs) for live data. Just paste the URL, and use the “Refresh data from URL” feature to update your visualization as the source data changes.
   * **Google Sheets**: Publish the sheet as a .csv, copy the URL, and load it in RAWGraphs.
   * **GitHub**: Open the raw file link, copy the URL, and load it in RAWGraphs.
4. **SPARQL Query**: Retrieve data from linked data sources like **Wikidata** using SPARQL queries, perfect for accessing structured datasets directly.
5. **Use Sample Datasets**: Experiment with RAWGraphs’ built-in sample datasets for testing and learning.
6. **Open a .rawgraphs Project**: Load a saved .rawgraphs file to continue working on an existing visualization, including any mappings and settings.

### **Open-Source Structure and Contributing**

As an open-source project, RAWGraphs encourages community contributions for solving bugs, adding features, or introducing new charts. It is divided into three main modules:

1. **RAWGraphs Core**: A modular JavaScript library that simplifies the RAWGraphs workflow and allows developers to render charts programmatically. It serves as the backbone of the RAWGraphs App but can be used independently in other projects.
   * [Core GitHub Repository](https://github.com/rawgraphs/rawgraphs-core)
   * [Core Documentation](https://rawgraphs.github.io/rawgraphs-core/docs/)
2. **RAWGraphs App**: A web-based interface for creating vector-based visualizations using the RAWGraphs core. Built with React.js, the app provides an intuitive environment for users to generate and customize visualizations without writing code.
   * [App GitHub Repository](https://github.com/rawgraphs/rawgraphs-app)
3. **RAWGraphs Charts**: A curated selection of chart types available through the RAWGraphs app, enabling users to visualize various data structures.
   * [Charts GitHub Repository](https://github.com/rawgraphs/rawgraphs-charts)
   * [Charts Documentation](https://rawgraphs.github.io/rawgraphs-core/docs/chart-interface/)

### **Example Use Cases**:

1. **Investigative Journalism**: Visualize connections between offshore entities in financial data, as demonstrated in the [Panama Papers case](https://www.rawgraphs.io/gallery/the-belgians-in-the-panama-papers). Using alluvial diagrams, RAWGraphs reveals flows between individuals, intermediaries, and destinations, making complex financial relationships accessible for public understanding.
2. **Cybersecurity**: Display patterns in web traffic and botnet activities, as seen in a [case study on UK spam traffic](https://www.behance.net/gallery/37500391/WIRED-UK-The-Rise-and-Fall-of-the-UKs-Biggest-Spammer). Researchers can use stacked area charts to analyze fluctuating volumes of internet requests, revealing attack cycles and patterns.
3. **Public Space Management**: [Analyze the flow and distribution](https://www.rawgraphs.io/gallery/objects-left-behind) of lost items, like at Dublin Airport, through Sankey diagrams, mapping where items were lost and categorizing them by type.
4. **Humanitarian and Conflict Data**: [Represent sensitive data on attacks](https://www.rawgraphs.io/gallery/emergency-afghanistan20), such as those on education facilities in Afghanistan, using beeswarm plots to emphasize individual events over time, conveying both the frequency and the emotional weight of each incident.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

No registration or account is needed. RAWGraphs processes data entirely in the user’s browser, meaning no server-side data storage or processing occurs, which is ideal for handling confidential data.

## Limitations

RAWGraphs requires data to be formatted in a single table structure. Supported file types include .csv, .tsv, .dsv, and .json. If data requires extensive cleaning or transformation (e.g., restructuring from wide to narrow format), this must be done before uploading. While RAWGraphs includes basic data transformation options, more advanced manipulation may require external tools.

## Ethical Considerations

Since RAWGraphs processes data locally in the browser, it does not upload or store data on any servers, making it suitable for visualizing sensitive or confidential information. However, users should remain cautious about data privacy and take steps to protect sensitive data on their own systems.

## Guides and articles

[RAWGraphs Learning Guide](https://www.rawgraphs.io/learning)

Polimi OpenKnowledge (Director). (2020, May 29). _Create data visualizations: RAWGraphs in 8 minutes (Michele Mauri)_ \[Video recording]. [https://www.youtube.com/watch?v=Yfac2CZJrP0](https://www.youtube.com/watch?v=Yfac2CZJrP0)

UofILibrary (Director). (2022, November 30). _RAWGraphs—Data Hub Tool Talk_ \[Video recording]. [https://www.youtube.com/watch?v=A1iQb00FjUU](https://www.youtube.com/watch?v=A1iQb00FjUU)

## Tool provider

Developed by [DensityDesign](http://densitydesign.org/), [Calibro](https://www.rawgraphs.io/gallery/emergency-afghanistan20), and [Inmagik](https://www.rawgraphs.io/gallery/emergency-afghanistan20)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |
