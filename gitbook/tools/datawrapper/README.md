---
description: >-
  A tool for creating charts, maps, and tables from data, offering a
  user-friendly interface for visualizing information.
---

# Datawrapper

## URL

https://www.datawrapper.de/

## Description

The purpose of the tool is to help users convert raw data into interactive and visually appealing graphics without advanced technical skills. According to the Datawrapper co-founder:  &#x20;

"\[[t\]he idea is that you have a two-minute interaction with the tool](https://www.icij.org/inside-icij/2018/08/nine-essential-tools-from-icijs-data-journalism-and-programming-experts/)”. Its audience is primarily journalists, researchers, and data analysts to assist in communicating data insights effectively. The International Consortium of Investigative Journalism [said that](https://www.icij.org/inside-icij/2018/08/nine-essential-tools-from-icijs-data-journalism-and-programming-experts/) Datawrapper "an open source tool for anyone who wants to create a chart or map from their data, came out of the knowledge that expecting every journalist to know code is unrealistic."

### How it works

Datawrapper is particularly helpful during the analysis and presentation stage of digital open-source investigations. It supports three categories of visualizations: **Chart, Map, and Table**. Note that the chart, map, and table generated are, by default, interactive. They will respond to the user’s mouse hovering over the various data on display. &#x20;

{% hint style="success" %}
TIP: It is helpful to check the[ Datawrapper Academy](https://academy.datawrapper.de/) website or its blog prior to beginning a project. It covers straightforward descriptions of various chart, map, and table types. This is especially useful for determining which kind of data and how many data points you need for a particular type of visualization.
{% endhint %}

### CHART

Charts can turn complex data into visual representations that are easier to interpret. It simplifies information by distilling large amounts of data, making it more straightforward to grasp key trends, patterns, and outliers without wading through raw data. It can also reveal relationships between variables.&#x20;

If using Datawrapper to create a chart, users have four main steps to complete. They (1) upload their data, (2) double-check that data is displayed correctly, (3) visualize, and, finally (4) publish/download or embed the final product.&#x20;

Log in and proceed to Dashboard. Click, “Create New” and select “Chart”

#### _**Upload Data**_

Users can upload data in four ways:&#x20;

1. Copy and paste an already existing data table onto the empty field to the right.&#x20;
2. Upload an XLS/CSV file (typically one used in MS Excel)
3. Connect to Google Sheets by inputting a link. &#x20;
4. Enter a URL link to an external CSV file.

#### _**Check Data**_

Datawrapper includes this step to allow users to verify the accuracy of their uploaded data and ensure that the tool displays the information as intended. Users should carefully check that all rows and columns are present, verify that each cell contains the correct value, confirm that there are no missing data, and make sure that the categories are correctly represented.

<details>

<summary>Example Verification Steps</summary>

Suppose you’re using Datawrapper to create a chart showing the number of armed conflict incidents reported in various countries over the past year. After uploading your data, Datawrapper prompts you to review it.

1\. **Check Rows and Columns:** Ensure that your dataset includes all the countries you want to analyze and that each country has data for all relevant time periods or types of incidents. For instance, verify that rows are present for countries like “Country X,” “Country Y,” and “Country Z,” and columns are included for different types of incidents, such as “Military Engagements,” “Civilian Attacks,” and “Terrorist Incidents.”

2\. **Verify Cell Values:** Double-check that each cell displays accurate incident counts or details. For example, if “Country X” should have recorded 200 military engagements in the past year, ensure that this number appears correctly in the corresponding cell.

3\. **Look for Missing Data:** Check for any gaps in the data. If “Country Y” is missing data for “Civilian Attacks,” confirm whether this is due to a data reporting issue or if the data is genuinely unavailable. Ensure that this omission is intentional and not an error. Missing data should be addressed or noted appropriately.

4\. **Confirm Category Accuracy:** Ensure that the categories are accurately labeled. For instance, make sure that the column headers correctly represent types of armed conflict incidents and are not mistakenly labeled with unrelated categories. Also, confirm that the row headers accurately list the countries and not the types of incidents.\


</details>

#### _**Visualize**_

This section lets users customize their chart to the most minute features, allowing the audience to understand the data effectively. **Click on the different tabs below to see a representative list of features that can be customized.**&#x20;

<figure><img src=".gitbook/assets/IMG_0305.jpg" alt="" width="188"><figcaption><p>This image shows the list of charts that users can customize for their data. After uploading and checking your data, proceed to the "Visualize" step. The first customization step is selecting chart type </p></figcaption></figure>

{% tabs %}
{% tab title="Chart Type" %}
Users have about 20 types of charts to choose from based on their needs. If unsure, the web interface has hints to help users determine which chart may work well for their type of data source.&#x20;

They are bar charts, stacked bars, grouped bars, split bars, bullet bars, column chart, stacked column, grouped columns, lines, multiple lines, area chart, scatter plot, dot plot, range plot, arrow plot, election donut, pie chart, multiple pies, donut chart, multiple donuts.&#x20;
{% endtab %}

{% tab title="Refine" %}
The refine tab allows users to customize the details of your chart. This includes customizing the text, date format, and grid on the horizontal axis. As well as the formatting of the values on your chart (whether dates or currency, etc). Users can customize the opacity, colors and sort the data (smallest first, largest first, etc)&#x20;

\

{% endtab %}

{% tab title="Annotate" %}
This tab is critical for providing context on the information users are conveying. It includes the Title, Description, Notes, and, most importantly, the Data Source and links to the Data source, if available.
{% endtab %}

{% tab title="Layout" %}
The final step on the visualization tab is Layout customization.  The key features are: (1) Availability to produce output in different languages&#x20;

(2) Users can also customize the footer section of the chart. This includes links to data source download, image download options, shareable link, and social media share buttons. Sharing findings, and data sources are especially useful for open-source investigators, since investigations and methodology needs to be replicable to be reliable.&#x20;

\

{% endtab %}
{% endtabs %}

{% hint style="info" %}
TIP on the "Annotate" tab: The “Notes” section can be useful for explaining limitations to data sources, margin of errors, or other caveats about the data that should be transparent to readers.
{% endhint %}

{% hint style="warning" %}
NOTE on the "Layout" tab: Output locale language does not translate content users input but translates the built-in features of the tool itself. (See Limitations Section)
{% endhint %}

#### _**Publish/Embed**_

The final step is to publish the chart. This step is particularly important if users plan to embed it in websites, digital reports, or forward the visualization in social media platforms.&#x20;

{% hint style="info" %}
NOTE: Datawrapper does not share this publicly. The only way it becomes visible is if users forward the URL to other individuals, or if users embed it in their websites.&#x20;
{% endhint %}

Users can also export or duplicate the visualization. Users can export in PNG (image) format. This is a static and non-interactive version that users can download for printing or for integrating in reports. &#x20;

### **MAP**

The map feature in Datawrapper is especially beneficial for open-source investigations, particularly when visualizing geolocated or verified incidents.&#x20;

These maps can visually represent complex data, making understanding and communicating findings easier. Investigators can use these maps to track and display various types of information, such as geographic distributions, locations of events, or the spread of certain phenomena over time. The interactive aspect allows viewers to engage with the data, zoom in on specific areas, and access detailed information, which is crucial for transparency and thorough analysis in investigations.

The types of maps you can produce are: Choropleth map, Symbol map, and Locator map.&#x20;

### _**Choropleth maps**_

&#x20;A type of thematic map in which areas (such as countries, states, or regions) are shaded or patterned in proportion to the value of a specific variable. The purpose of a choropleth map is to visually represent the distribution of a variable across different geographic areas.

<details>

<summary>Sample use case or choropleth map</summary>

Imagine you have a map of your country, and you want to show where people have the most and least access to something, like internet speeds.&#x20;

A choropleth map is like a color-coded version of this map. Each area on the map, such as states or counties, gets a different color based on how high or low the internet speeds are there. For example:

Dark Purple - might mean super fast internet speeds.

Light orange - might mean average speeds.

Yellow -  might mean slow speeds.

So, when you look at the map, you can easily see which areas have the best internet speeds and which ones don’t. The colors help you quickly understand and compare the data across different regions.

\


</details>

#### Upload&#x20;

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. Create user account
2. Internet connection on modern browser
3. Desktop or mobile device
4. May need subscription if users want extra features&#x20;
5. Create User Account
6. Internet connection on modern browser
7. Desktop or mobile device
8. May need subscription if users want extra features. But the free version is more than &#x20;

## Limitations

\[\[The limitations of each tool should be described. This is important for researchers if they want to decide whether they should invest the time to learn how to use a new tool.]]

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guides and articles

\[\[Link to guides on this tool and to articles on research that was done with the help of this tool]]

## Tool provider

Datawrapper

Berlin, Germany&#x20;

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
