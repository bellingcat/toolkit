---
description: >-
  A tool for creating interactive charts, maps, and tables from your data,
  offering a user-friendly interface for visualizing information.
---

# Datawrapper

## URL

https://www.datawrapper.de/

## Description

The purpose of the tool is to help users convert raw data into interactive and visually appealing graphics without advanced technical skills. According to a Datawrapper co-founder:  &#x20;

"\[[t\]he idea is that you have a two-minute interaction with the tool](https://www.icij.org/inside-icij/2018/08/nine-essential-tools-from-icijs-data-journalism-and-programming-experts/)”. Its audience is primarily journalists, researchers, and data analysts to assist in communicating data insights effectively. The International Consortium of Investigative Journalism [said that](https://www.icij.org/inside-icij/2018/08/nine-essential-tools-from-icijs-data-journalism-and-programming-experts/) Datawrapper "an open source tool for anyone who wants to create a chart or map from their data, came out of the knowledge that expecting every journalist to know code is unrealistic."

### How it works

Datawrapper is particularly helpful during the analysis and presentation stage of digital open-source investigations. It supports three categories of visualizations: **Chart, Map, and Table**. Note that the chart, map, and table generated are, by default, interactive. They will respond to the user’s mouse hovering over the various data on display. &#x20;

{% hint style="success" %}
TIP: It is helpful to check the[ Datawrapper Academy](https://academy.datawrapper.de/) website or its blog prior to beginning a project. It covers straightforward descriptions of various chart, map, and table types. This is especially useful for determining which kind of data and how many data points you need for a particular type of visualization.
{% endhint %}

{% hint style="warning" %}
NOTE: Prepare your data. Ensure that your data is organized, complete and refined prior to adding the data on the interface.
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

<summary>Sample Steps for Checking Your Data</summary>

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

The final step is to publish the chart. This step is particularly important if users plan to embed it in websites or blogs or share the visualization on social media platforms. Visualizations are private by default unless users publish them. &#x20;

{% hint style="warning" %}
NOTE: Datawrapper does not share visualizations publicly even after publishing. It becomes visible only if users forward the URL to other individuals or embed them in their websites.&#x20;
{% endhint %}

Users can also export or duplicate the visualization. Users can export in PNG (image) format. This is a static and non-interactive version that users can download for printing or for integrating in reports.

{% hint style="info" %}
TIP: Once published, any changes to formatting or editing will not be reflected. Users will have to republish their visualization after making any changes, Go to the publish section, and click “Republish.” &#x20;
{% endhint %}

Users will end up with something that looks like this (Area Chart):&#x20;

{% embed url="https://datawrapper.dwcdn.net/w94Ay/1/" %}
This is a sample “Area Chart” generated from Datawrapper using a sample dataset provided by the tool. It has been published on Datawrapper and embedded in this toolkit description using a URL. This is an interactive chart, and readers can hover over details on the chart to see more information. This chart is also created with an output language in Amharic. It translates built-in features into Amharic, but the data inputted manually in English remains in English. (NOTE: The chart and data are for demonstration purposes only)
{% endembed %}

### **MAP**

The map feature in Datawrapper is especially beneficial for open-source investigations, particularly when visualizing geolocated or verified incidents.&#x20;

These maps can visually represent complex data, making understanding and communicating findings easier. Investigators can use these maps to track and display various types of information, such as geographic distributions, locations of events, or the spread of certain phenomena over time. The interactive aspect allows viewers to engage with the data, zoom in on specific areas, and access detailed information, which is crucial for transparency and thorough analysis in investigations.

The types of maps you can produce are: Choropleth map, Symbol map, and Locator map.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-08-12 003558.png" alt=""><figcaption><p>These are the map options users have in Datawrapper. Note the description in each type informs users about which maps may best communicate their data. </p></figcaption></figure>

### _**Choropleth map**_

&#x20;A type of thematic map in which areas (such as countries, states, or regions) are shaded or patterned in proportion to the value of a specific variable. The purpose of a choropleth map is to visually represent the distribution of a variable across different geographic areas.

<details>

<summary>Potential open-source use case for choropleth map</summary>

Imagine you have a map of your country, and you want to show where people have the most and least access to something, like internet speeds.&#x20;

A choropleth map is like a color-coded version of this map. Each area on the map, such as states or counties, gets a different color based on how high or low the internet speeds are there. For example:

Dark Purple - might mean super fast internet speeds.

Light orange - might mean average speeds.

Yellow -  might mean slow speeds.

So, when you look at the map, you can easily see which areas have the best internet speeds and which ones don’t. The colors help you quickly understand and compare the data across different regions.

\


</details>

#### **Select your map**

This step allows users to select what kind of base map is needed for data visualization. The Datawrapper list of maps contains a huge selection. The types of maps available are: World maps, regional maps, and country maps. As a plus. some countries have different subtypes available as well. For instance,  Argentina also includes a map divided by departments, or by electoral districts, by provinces. It also has available a map subtype that is city-specific such as the Argentina - Buenos Aires Metropolitan Area.&#x20;

{% hint style="success" %}
TIP: Users can also upload their own maps. However, this is a slightly advanced feature and may consult [this guide.](https://academy.datawrapper.de/article/145-how-to-upload-your-own-map)
{% endhint %}

**Add your data**

_**Step 1 - Upload:**_ There are four ways to add your data:&#x20;

1. Fill in the automatically generated table (located on the right of the screen):&#x20;

This section is automatically prefilled with two columns: Column A for the name of the Country or/Territory and Column B for the values. You can enter the values manually in Column B based on your dataset.&#x20;

2. Upload a file: CSV or Excel (located to the left) &#x20;
3. Copy and paste data (located to the left)&#x20;
4. Connect a remote data set: input a link to external data (i.e. data from NASA) or connect to Google Sheets&#x20;

{% hint style="warning" %}
NOTE: The pre-made table seems to depend on the kind of map you select in the previous step. If you choose a World Map for your data, it will populate Column A with a list of countries in that map. If you choose a map of Asia, it will fill Column A with a list of countries for that continent.
{% endhint %}

_**Step 2 - Match:**_ To use the map, your data needs to have information like country names, short names, and codes. In this step, choose the preferred naming convention for countries. In addition, make sure you have all the columns and rows you need to display your data.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2024-08-09 235302.png" alt="" width="375"><figcaption><p>In this image, the user is creating a map showing the top 10 countries with the fastest internet speed.  The user chooses a world map. A CSV file is then uploaded. The table is automatically populated with a list of countries. Under the "Match" Tab,  we make sure that Column A corresponds to the name of the Country/Territory, and Column B corresponds to the values -- in this case the "median download speed" of the internet in each country. Notice that this will automatically use the first row for labels (we selected this by ticking the box on the top left)  (NOTE: The data on this image is for demonstration purposes only) </p></figcaption></figure>

{% hint style="info" %}
NOTE: If the user does not use the rest of the countries/locations on the list, they will be grayed out in the map.
{% endhint %}

#### Visualize&#x20;

Just like in the CHART section above, the Visualize tab lets users customize their map to the most minute features, allowing the audience to understand the data effectively. Click on the different tabs below to see a representative list of features that can be customized.

{% tabs %}
{% tab title="Refine" %}
The refine tab allows users to customize the details of the map. This includes:

* &#x20;customizing the colors to represent different values,
* &#x20;whether you want the legend on display and the way the legend looks
* Making the map zoomable or not, and the location of the zoom button&#x20;
* Map appearance: whether you want a full map or a partial map on display, the size in pixels, map alignment
* Appearance of region borders or not
{% endtab %}

{% tab title="Annotate" %}
Like above, this tab is critical for providing context on the information users are conveying. It includes the Title, Description, Notes, and, most importantly, the Data Source and links to the Data source, if available.

\
TIP: The “Notes” section can be useful for explaining limitations to data sources, margin of errors or other caveats that should be transparent to readers.&#x20;
{% endtab %}

{% tab title="Layout" %}
Similarly, the final tab under “Visualize”  is Layout customization.  The key features are: - -

* Availability to produce output in different languages&#x20;
* &#x20;Customize the footer section of the chart to include links to data source download, image download options
* Ability to include a shareable link and social media share buttons&#x20;
{% endtab %}
{% endtabs %}

Below is a sample interactive symbol map to demonstrate what the final product may look like:

{% embed url="https://datawrapper.dwcdn.net/UKoIL/3/" %}
This is an example of an interactive choropleth map using data from Ookla on internet speeds by country in 2023 (via Wikipedia). Users can hover over each detail to see more information. Darker colors represent faster speeds, and lighter colors represent slightly slower speeds. (NOTE: This map and data are for demonstration purposes only)
{% endembed %}

### _**Symbol map**_

A symbol map, sometimes called a point map or dot map, is a type of thematic map used in data analysis to represent data points or values across geographic areas using symbols. Instead of shading regions like in a choropleth map, a symbol map uses symbols, such as dots, icons, or shapes, to show the location and magnitude of a variable.&#x20;

<details>

<summary><strong>Key Features of Symbol Maps</strong></summary>

1. Symbols Represent Data: Each symbol on the map represents a specific quantity or value. For instance, a dot might represent a certain number of people, a business, or an event.
2. Size and Color: The size and color of the symbols can vary to convey different magnitudes or categories. Larger or differently colored symbols can indicate higher values or different categories.
3. Geographic Context: Symbols are placed on the map according to their geographic locations. This helps visualize how data points are distributed across different regions.

Comparing Values: Symbol maps allow users to see patterns, trends, and distributions of the data across different areas. They are useful for understanding spatial relationships and concentrations.

</details>

<details>

<summary>Potential open-source use cases of symbol map</summary>

Tracking outbreak in armed clashes in a region or disease outbreaks

_Armed clashes in a region:_ Symbol maps can visualize and analyze the distribution and frequency of armed clashes across various regions in a country over a specified period.

_Disease Outbreaks:_ If tracking a disease outbreak, symbols could represent the number of reported cases in various locations, helping to visualize areas with higher or lower case numbers.

</details>

&#x20;

{% hint style="warning" %}
**NOTE #1:** **Prepare your data (do not skip this step)**: Whether you are using your own data or using data from an external source, it is important to make sure the data has all the information required by Datawrapper. For symbol maps, “[Datawrapper](https://academy.datawrapper.de/article/114-how-to-create-a-symbol-map-in-datawrapper) will **need**  **(1)addresses/place names or (2) latitudes/longitudes** to know where you want your points to be.” Users should be as specific as possible.&#x20;



Example of specificity of **addresses/place names** as provided by the [tool](https://academy.datawrapper.de/article/193-symbol-location-accuracy-using-addresses-place-names):&#x20;

* Neighborhood: Williamsburg, Brooklyn, New York
* City: New York City, New York
* Zip Code: 11212, Kings County, New York
* County: Kings County, New York
* State/Land: New York State, USA

**NOTE #2:** **Use latitude/longitude coordinates for better precision**. According to the tool, uploading latitudes and longitudes ensures accurate mapping because city names can be ambiguous or duplicated. For instance, the name "Vancouver" could refer to cities in different locations, like Vancouver, Canada, or Vancouver, Washington. Geocoders, including Datawrapper, might default to the most prominent city with that name unless precise coordinates are provided. By using latitudes and longitudes, you ensure that the exact locations are mapped correctly, avoiding confusion from similar or differently named places.
{% endhint %}

The steps for creating a symbol map are very similar to those for the choropleth map (See above). There is a slight difference in the “Visualize” section of symbol maps. Click on each tab below to see the different features.&#x20;

{% tabs %}
{% tab title="Refine" %}
* Customize symbols of your choice and their size.&#x20;
* Users can also customize the colors, and choose the column you want to be highlighted on the map. For example, if looking at incidents of armed clashes in Burkina Faso, a user might want to highlight how many of those are civilian targeting. In this case, select the column “civilian targeting”. &#x20;
* Customize map features: by making map zoomable, by including an “inset map” to provide context on the location for those not familiar
{% endtab %}

{% tab title="Annotate" %}
Just like in charts, this section is critical for providing context on your data. It includes putting a Title, Description, Notes, and, most importantly, the Data Source and links to the Data source, if available.

\
TIP: The “Notes” section can be useful for explaining limitations to data sources, margin of errors or other caveats that should be transparent to readers.&#x20;
{% endtab %}

{% tab title="Layout" %}
Similarly, the final tab is Layout customization.  The key features are:&#x20;

* Availability to produce output in different languages&#x20;
* &#x20;Customize the footer section of the chart to include links to data source download, image download options
* Ability to include a shareable link and social media share buttons&#x20;
{% endtab %}
{% endtabs %}

Below is a sample symbol map. After doing the steps outlined above, the symbol map should look something like this:

{% embed url="https://datawrapper.dwcdn.net/aXyPY/3/" %}
This is a sample interactive symbol map generated through Datawrapper. We first went to ACLED to download our data, which we then uploaded as a CSV file on the tool. We have chosen “spikes” as a symbol to demonstrate the number of armed clashes during a short timeframe in Burkina Faso. We have customized the look of the map to provide more info to a reader who may be unfamiliar with the region. We have included visible regional boundaries and, an inset map (a world map to show where Burkina Faso is relative to the rest of the world). We have also included a zoom option and social media share options. More importantly, we have annotated it in such a way that we provide a title, description, and data source for the readers.
{% endembed %}

### Locator Map

Before we dive into the process, it's essential to clarify what a locator map is. A locator map is a small map that shows the location of a specific area within a larger context. It's often used to orient viewers and provide a geographical perspective. According to[ the tool provide](https://academy.datawrapper.de/article/161-how-to-create-a-locator-map)r, “They are a great choice if you want to show where something is located or happened.”

<details>

<summary>Possible open-source use case for locator maps</summary>

Locator maps are essential tools for open-source investigators. They provide a visual context for data, helping to: &#x20;

* [Visualize Geographic Scope](https://www.aktek.io/blog/using-location-intelligence-in-open-source-investigations): Understand the spread of events or information across a region.
* Identify Patterns: Recognize trends or clusters in data distribution.
* [Corroborate Information:](https://www.aktek.io/blog/using-location-intelligence-in-open-source-investigations) Compare different data sets to verify accuracy and completeness.
* [Communicate Findings ](https://www.aktek.io/blog/using-location-intelligence-in-open-source-investigations) (Especially of Geolocated Incidents In Conflicts or Violent Protests) Effectively convey complex information to audiences through visual storytelling.

By placing data in a geographic context, investigators can gain deeper insights and uncover hidden connections.  &#x20;

For example: [An article ](https://www.bbc.com/news/world-middle-east-60691503)showing mass demolitions and forced evictions in Jeddah, Saudi Arabia, may benefit from showing the different locations of demolished buildings in the neighborhood. &#x20;

</details>

Below are the main steps for creating locator maps:

#### **Data Preparation**

* Identify locations: Determine the specific locations you want to highlight on your map.
* Gather coordinates: Collect the latitude and longitude coordinates for each location. You can use tools like Google Maps to obtain this information.
* Prepare data: Organize your location data into a CSV or Excel file with columns for latitude, longitude, and location name (optional).

**Create a New Map**

* Log in to your Datawrapper account or create a new one.
* Click on "Start Creating" and then select "New Map."
* Choose the "Locator Map" option.

**Add Markers**

Markers are [“the symbols, lines, areas, and/or text that you add on top of the map.”](https://academy.datawrapper.de/article/161-how-to-create-a-locator-map)&#x20;

{% hint style="info" %}
NOTE: Every marker's position is fixed to the map's position; if you move the map view, the markers will move along with it.&#x20;
{% endhint %}

* &#x20;Click on the "Add Markers" button.
*   You have two options:

    (1) Manual input: Enter the latitude and longitude coordinates for each location directly into the fields.

    (2) Upload CSV: If you prepared your data in a CSV, upload it here. Datawrapper will automatically populate the map with markers based on the latitude and longitude columns.
* Customize marker appearance (color, size, icon) as needed.

**Design Your Map**

* Base map: Choose an appropriate base map from the available options. Consider the style and level of detail required for your map.
* Zoom level: Adjust the zoom level to focus on the desired area while providing enough context.
* Map style: Customize the map appearance with colors, fonts, and other design elements to match your branding or preferences.

{% hint style="success" %}
TIP: Users can adjust the zoom level, rotation, tilt, and height of the map. Decreasing the tilt can show mountains if the location has dramatic terrain.
{% endhint %}

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

\[\[Pricing or subscription information, if relevant.]]

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. Create User Account
2. Internet Connection on modern browser
3. Desktop Device
4. An organized external dataset
5. May need subscription if users want extra features. The free version, however, is more than enough to use. &#x20;

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
