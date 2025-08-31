---
description: >-
  RAWGraphs is an open-source data visualization tool designed for non-technical
  users, enabling the creation of customizable, editable charts without coding
  skills.
---

# RAWGraphs

## URL

[https://app.rawgraphs.io/](https://app.rawgraphs.io/)\
(v. 2.0.1 as of August 2025)

## Description

RAWGraphs is a web-based [open-source](https://github.com/rawgraphs/rawgraphs-app) tool that facilitates [straightforward visualization of complex data](https://www.rawgraphs.io/about). It was conceived as a tool for designers and data visualization enthusiasts to bridge the gap between spreadsheet applications and vector graphics editors​. The software is built on top of the [D3.js library](https://d3js.org/) (a JavaScript framework for creating data-driven visuals) and produces graphics in the [SVG (Scalable Vector Graphics)](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics) format​.&#x20;

RAWGraphs allows users to create a variety of charts and diagrams without any coding skills. It has an intuitive drag-and-drop interface where data columns can be mapped to visual variables of a chart. This approach lets journalists, designers, researchers, and other users quickly generate visualizations and then refine them using external graphic software if needed​.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>The vast number of charts available.</p></figcaption></figure>

## Key Features

* **Free and Open Source:** RAWGraphs is free to use (no fees or registration required), and its source code is available under the [Apache 2.0 open-source license](https://github.com/rawgraphs/rawgraphs-app). This means anyone can use or modify the tool, and [community contributions](https://www.rawgraphs.io/learning/what-is-rawgraphs-our-approach-to-data-visualization) are welcome.
* **Web-Based Application:** It runs entirely in the web browser, with no installation needed. All data processing happens client-side (in your browser), so your input data is [**not uploaded or stored on any server**​.](https://www.rawgraphs.io/learning/how-to-load-and-format-your-data-for-rawgraphs)&#x20;
* **User-Friendly Interface:** The tool offers a graphical interface for building visualizations by loading data and assigning fields to chart elements. No programming knowledge is needed to create chart&#x73;**.**
* **Wide Range of Chart Types:** RAWGraphs offers nearly 30 types of visualizations, from traditional charts to more unusual layouts​. You can create basic charts like bar graphs or line plots and specialized diagrams for complex data (see the list of available chart types below).
* **Flexible Data Import:** Data can be imported in various ways, as long as it’s in a tabular (table-like) format. You can copy and paste data from spreadsheets, [upload text-based data files](https://www.rawgraphs.io/learning/how-to-load-and-format-your-data-for-rawgraphs) (CSV, [TSV ](https://en.wikipedia.org/wiki/Tab-separated_values)or other delimiter-separated values, and [JSON](https://en.wikipedia.org/wiki/JSON) formats)​, or [fetch data directly from a URL](https://www.rawgraphs.io/learning/how-to-load-and-format-your-data-for-rawgraphs) or a live [**SPARQL** ](https://en.wikipedia.org/wiki/SPARQL)query endpoint (a way to retrieve data from databases like Wikidata). RAWGraphs also provides some sample datasets, and it allows importing previously saved project files (with a `.rawgraphs` extension) to resume work.
* **Customization and Extensibility:** Advanced users can extend RAWGraphs by adding new chart types. In version 2.0.1, support for custom charts was introduced, [allowing users to load their own visualization modules “on the fly” ](https://www.rawgraphs.io/post/rawgraphs-updates-with-version-2-0-1)without modifying the core code​. This means if a needed chart type is not available by default, you can code it (following RAWGraphs’ chart specifications) and plug it into the interface for others to use.
* **Export and Editing:** RAWGraphs visualizations can be refined and exported for different uses. The tool allows adjustments to colors, shapes, and visual settings, then exports as SVG or PNG images. SVG files are particularly useful for opening in vector graphic editors like Adobe Illustrator or Inkscape for lossless editing.

<details>

<summary>Graph Types Details</summary>

**Comparison:**

* **Bar Chart** – Uses rectangular bars (vertical or horizontal) to compare values across categories, with bar length proportional to the value (​[en.wikipedia.org](https://en.wikipedia.org/wiki/Bar_chart)). This chart highlights differences between discrete categories, making it easy to compare magnitudes side by side.
* [**Multiset (Grouped) Bar Chart**](https://plotset.com/blog/create-bar-charts) – A clustered bar chart that presents multiple bars side-by-side for each category, allowing comparison of sub-categories within each group​. Each group of bars represents a category, and each bar in the group is a sub-category, facilitating comparisons both within and across categories.
* [**Line Chart**](https://www.investopedia.com/terms/l/linechart.asp) – Plots data points connected by lines to show trends or changes over continuous intervals (often time)​. It’s commonly used to compare how one or more series evolve over time, emphasizing the pattern or trend of the data rather than individual values.
* [**Radar Chart**](https://datavizproject.com/data-type/radar-diagram/) – Displays multivariate data on multiple axes starting from the same center point, with data points connected to form a polygon​. It allows comparison of multiple quantitative variables for one or more entities; for example, comparing several individuals’ performance across a set of metrics on a single radial chart.
* [**Slope Graph**](https://seeingdata.org/taketime/inside-the-chart-slope-graph/) – Connects two data points (e.g. two time periods) for each category with a line to emphasize the change (slope)​. It is essentially a “before-and-after” comparison showing increases or decreases for multiple items between two conditions, highlighting relative changes clearly.
* [**Bump Chart**](https://blog.dailydoseofds.com/p/visualise-the-change-in-rank-over) – Shows rank or order changes over time by drawing lines for each item across different time points (with the vertical position indicating rank)​. This chart is useful for comparing how the relative standing of items (e.g. team rankings, category positions) shifts between time periods.
* [**Gantt Chart**](https://opentext.ku.edu/teams/chapter/gantt-chart/) – A type of bar chart used for schedules, listing tasks on the vertical axis and time on the horizontal axis​. Each task is represented by a horizontal bar spanning its start to end time, making it easy to compare durations and timelines of tasks within a project schedule.

**Distribution:**

* [**Scatter Plot**](https://www.westga.edu/academics/research/vrc/assets/docs/scatterplots_and_correlation_notes.pdf) **(**[**Bubble Chart**](https://en.wikipedia.org/wiki/Bubble_chart)**)** – Plots individual data points on two axes to display the joint distribution of two variables​. Each point’s position shows values of one variable vs. the other, revealing patterns, correlations, or clustering (and sometimes point size or color encodes additional dimensions).
* [**Beeswarm Plot**](https://r-graph-gallery.com/beeswarm.html) – A one-dimensional scatter plot (like a strip chart) where points are jittered and packed to avoid overlap​. It displays the distribution of a single variable (or one per category) by showing each data point, with the density indicated by how tightly the points cluster (wider sections indicate more data frequency).
* [**Box Plot**](https://www.atlassian.com/data/charts/box-plot-complete-guide) – Uses a box and “whiskers” to summarize a distribution’s center and spread. The box spans the interquartile range (middle 50% of data) with a line for the median, and whiskers (with potential dots for outliers) extend to show the overall range, giving a quick view of median, variability, and outliers of one or more groups.
* [**Violin Plot**](https://www.atlassian.com/data/charts/violin-plot-complete-guide) – Combines aspects of a box plot and a kernel density plot to show distribution. It displays the density of the data at different values (wider sections mean more frequent values) for one or more groups, usually mirrored symmetrically, while often also indicating median and quartiles inside the “violin.”
* [**Histogram**](https://en.wikipedia.org/wiki/Histogram) **(**[**Hexagonal Binning**](https://www.kwanlin.com/docs/domains/data-visualization/hexbin-plot/)**)** – Groups continuous bivariate data into hexagon bins, visualizing the density of points in a scatterplot. In RAWGraphs, hexagonal binning aggregates many data points into hexagon cells and uses color or size to indicate the number of observations in each, revealing the distribution pattern and concentration areas in two-dimensional data without overplotting.
* [**Contour Plot**](https://www.itl.nist.gov/div898/handbook/eda/section3/contour.htm) – Depicts density or frequency in a two-variable distribution using contour lines (or colored bands) connecting points of equal value​. It’s like a topographic map for data: often used to show the density of observations in a scatter (with smooth curves encircling high-density regions), allowing one to see where values concentrate.
* [**Horizon Graph**](https://digitaldatastories.it/2022/12/27/socioviz-rawgraphs-what-a-combo/) – A compressed time-series area chart that layers bands of color to show a quantitative variable’s distribution over time​. The area under the line is split into bands (often with positive and negative values layered and color-coded), effectively stacking portions to allow comparison of peaks and valleys in a more compact space while still conveying the data’s variation over a continuous interval.
* [**Convex Hull Plot**](https://graphica.app/catalogue/convex-hull) – Encloses scattered data points for each category within a convex polygon (hull) to highlight the group’s span. The convex hull is the smallest convex shape containing all points of a group​ so this chart shows the overall area or spread of each cluster in a scatterplot, aiding visual separation of clusters or categories by outlining their boundaries.
* [**Voronoi Diagram**](https://en.wikipedia.org/wiki/Voronoi_diagram) – Partitioning of the plane into regions based on distance to a set of seed points (data points)​. Each data point has a corresponding cell that contains all locations closer to that point than to any other; as a visualization, a Voronoi diagram can reveal the influence area of each point and the spatial distribution structure (often used to analyze proximity or clustering in spatial data).

**Relationship:**

* [**Arc Diagram**](https://digitaldatastories.it/2022/12/27/socioviz-rawgraphs-what-a-combo/) – Displays pairwise relationships among a set of items with arcs connecting related nodes along a line​. The items (nodes) are laid out along a single axis, and connections between them are drawn as curved lines (arches) above or below the axis; this format highlights relationships (like links in a network or sequence) while maintaining a linear order of nodes.
* [Chord Chart ](https://en.wikipedia.org/wiki/Chord_diagram_\(information_visualization\))– Shows inter-relationships between categories using a circular layout​. Categories are arranged around a circle, and flows or connections between them are drawn as ribbons (chords) connecting the circle’s circumference; the width or size of each chord is proportional to the value or intensity of the relationship, making it useful for visualizing complex networks or flow between multiple groups.
* [**Parallel Coordinates**](https://en.wikipedia.org/wiki/Parallel_coordinates) – Plots high-dimensional data as lines crossing multiple parallel axes (one for each variable)​. Each record in the dataset is represented by a polyline that intersects each vertical axis at the position corresponding to its value for that variable, allowing analysts to observe relationships, patterns, or clusters across many variables simultaneously (for example, seeing if high values in one dimension correspond to low or high values in another).
* [**Circular Dendrogram**](https://blogs.library.unt.edu/digital-scholarship/2017/05/18/raw-data-visualization-dendrograms/) – A radial tree diagram for hierarchical data (a tree drawn in a circle)​. It starts with a root in the center and branches outward in concentric rings; each ring represents the next level of the hierarchy. This shows parent–child relationships in a hierarchy, like a cluster or taxonomy, in a compact circular form, useful for visualizing organizational structures or clustered data groups.
* [**Cluster Dendrogram (Linear)**](https://blogs.library.unt.edu/digital-scholarship/2017/05/18/raw-data-visualization-dendrograms/) – A traditional tree diagram that displays hierarchical relationships with a rooted tree structure (drawn top-down or left-to-right)​. Each merge or branch represents a grouping of similar items, so you can trace how individual elements join into clusters. This chart is used to illustrate classifications or cluster analysis results, emphasizing the relationship and distances between groups.
* [**Matrix Plot**](https://fastercapital.com/content/Visualization-Techniques--Matrix-Plots--Visualizing-Data-Relationships-in-Grids.html) – Uses a grid of cells to represent relationships between two sets of categories (or a pair of variables), often with color indicating the strength or value of the relationship. For example, an adjacency matrix or correlation matrix can be shown as a matrix plot, where rows and columns correspond to categories and the cell color or intensity encodes the relationship value. This provides a bird’s-eye view of all pairwise relationships in a dataset, uncovering patterns such as clusters or correlations (darker or differently colored cells signal stronger relationships)​.

**Composition:**

* [**Pie Chart**](https://act-on.com/learn/blog/data-visualization-101-how-to-make-better-pie-charts-and-bar-graphs/) – A circular chart divided into slices where each slice represents a part of the whole​. The size of each slice is proportional to its percentage of the total, making this chart ideal for showing how a whole is split among different categories (e.g. market share distribution).
* [**Stacked Bar Chart**](https://plotset.com/blog/create-bar-charts) – Shows parts of a whole by stacking sub-category values within a single bar for each category​. Each bar is divided into color-coded segments for each sub-component, so the full length of the bar represents the total, while segment lengths show each component’s contribution. This lets you compare both the overall totals across categories and the breakdown of those totals by sub-category.
* [**Streamgraph** ](https://digitaldatastories.it/2022/12/27/socioviz-rawgraphs-what-a-combo/)– A variant of a stacked area chart with a flowing, organic shape (often centered baseline) used to show how a total is composed over time​. Multiple time-series (categories) are stacked on top of each other, but typically around a central axis, creating a “stream” appearance. It visualizes the changing contributions of categories over a continuous dimension (like time), highlighting both the overall trend and the share of each component in the total at any point.
* [**Sunburst Diagram**](https://datavizproject.com/data-type/sunburst-diagram/) – A radial space-filling chart for hierarchical data depicted with concentric rings​. Each ring represents a level of the hierarchy, with the innermost circle as the top level (root) and outer rings as deeper levels. Each segment’s size shows its value proportion within its parent category. This chart reveals the composition of each branch of a hierarchy and how they contribute to the whole, in a visually compact form.
* [**Treemap**](https://www.nngroup.com/articles/treemaps/) – Displays hierarchical data as a set of nested rectangles, where each rectangle’s area is proportional to a value​. Categories are represented by rectangles, and subcategories nest inside their parent’s rectangle. The size (and often color) of each rectangle conveys the quantitative weight of each node in the hierarchy. Treemaps make efficient use of space to show parts-to-whole at multiple levels, useful for spotting large vs. small contributors in complex hierarchies.
* [**Circle Packing**](https://www.ibm.com/docs/en/watsonx/saas?topic=types-circle-packing-charts) – Similar to a treemap but uses nested circles to represent a hierarchy​. Each circle contains smaller circles representing subcategories; the area of each circle reflects the value of that item. This gives a packed bubble-like visualization of composition, emphasizing inclusion (each smaller circle is part of a larger circle) and making it easy to see hierarchical groupings, though less space-efficient than treemaps.

**Flow:**

* [**Sankey Diagram**](https://plotly.com/julia/sankey-diagram/) – A flow diagram that visualizes the movement of quantities between stages or categories, using arrows whose width is proportional to the flow volume​. It often shows inputs and outputs of a process (or transformations from one set of categories to another), with the thickness of the bands emphasizing the magnitude of the flow. This helps track how a whole breaks down into parts as it moves through a system (e.g. energy or money transfers).
* [**Alluvial Diagram**](https://digitaldatastories.it/2022/12/27/socioviz-rawgraphs-what-a-combo/) – A type of flow chart that focuses on changes in group composition over time or between states. Categories at different stages (or time points) are connected by ribbons whose width is proportional to the quantity flowing between them. It highlights how elements merge or split as they progress, visually linking categorical variables or time steps. Alluvial diagrams are great for seeing how groups evolve (e.g. how people migrate between different categories across years), with the curved flows making it easy to follow the path of each portion of the data.

**Sources:** RAWGraphs official documentation and tutorials, as well as data visualization references​. (All chart definitions above are based on the latest RAWGraphs 2.x chart types and commonly accepted descriptions of each chart).

</details>



## Using RAWGraphs involves a few simple steps:

1. **Load Your Data:** Input your dataset by pasting it into the app or uploading a file (e.g., CSV). You can also retrieve data via a web link or a SPARQL query if needed.
2. **Choose a Chart Type:** Select one of the available visualization models from the RAWGraphs gallery (e.g. a bar chart, alluvial diagram, etc.).
3. **Map Data to Visual Variables:** Assign the columns or fields of your dataset to the visual dimensions of the chart. For example, you might drag a “Category” field to a color attribute or an “Amount” field to the size or length of bars. The interface will update the chart preview accordingly.
4. **Tune and Export:** Adjust styling options like colors, margins, or labels to fine-tune the appearance. Once satisfied, export your visualization as an SVG or PNG file for sharing or further editing​.&#x20;

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

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

No registration or account is needed. RAWGraphs processes data entirely in the user’s browser, meaning no server-side data storage or processing occurs.

## Limitations

RAWGraphs requires data to be formatted in a single table structure. Supported file types include .csv, .tsv, .dsv, and .json. If data requires extensive cleaning or transformation (e.g., restructuring from wide to narrow format), this must be done before uploading. While RAWGraphs includes basic data transformation options, more advanced manipulation may require external tools.

## Ethical Considerations

Since RAWGraphs processes data locally in the browser, it does not upload or store data on any servers. However, users should remain cautious about data privacy and take steps to protect sensitive data on their systems.

## Guides and articles

[RAWGraphs Learning Guide](https://www.rawgraphs.io/learning)

Polimi OpenKnowledge (Director). (2020, May 29). _Create data visualizations: RAWGraphs in 8 minutes (Michele Mauri)_ \[Video recording]. [https://www.youtube.com/watch?v=Yfac2CZJrP0](https://www.youtube.com/watch?v=Yfac2CZJrP0)

UofILibrary (Director). (2022, November 30). _RAWGraphs—Data Hub Tool Talk_ \[Video recording]. [https://www.youtube.com/watch?v=A1iQb00FjUU](https://www.youtube.com/watch?v=A1iQb00FjUU)

## Tool provider

RAWGraphs was first released in 2013 as “RAW” by researchers at the DensityDesign Lab (Politecnico di Milano, Italy). It is maintained and developed by the [DensityDesign Lab ](https://densitydesign.org/)(Milan, Italy), the design studio [Calibro](https://calib.ro/) (Milan, Italy), and the development firm [Inmagik ](https://inmagik.com/)(Bergamo, Italy)​. [https://www.rawgraphs.io/about](https://www.rawgraphs.io/about)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
