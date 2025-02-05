---
description: Open-source network analysis and visualization software
---

# Gephi

## URL

[https://gephi.org](https://gephi.org)

## Description

Gephi is a free, open-source tool for network visualization and analysis, widely used to explore and represent relationships in large datasets, such as social networks, links between documents, or web structures. Gephi allows users to create customizable network graphs, analyze metrics (like centrality and clustering), and identify patterns within complex datasets. The tool supports importing various data formats (CSV, GEXF) and offers plugins for advanced functionality. It is commonly used in journalism and open-source research to visually analyze and reveal hidden connections in data, such as by examining online misinformation networks.

Gephi is praised for its ability to create detailed, interactive, and visually compelling network graphs. This visual appeal helps to highlight complex relationships within data, making it easier for journalists to uncover hidden links between entities like individuals, companies, or groups. This capability can be particularly valuable for investigative stories where clear visual representation of connections can be crucial for audience understanding.

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption><p>Visualization of a network of Telegram actors. (by J.Weißer, M.Engel, C.Jelonek, M. Hallbach, 2024, used with permission)</p></figcaption></figure>

### **Core SNA Metrics**

**Closeness** (proximity to the network’s center), **Centrality** (number of connections), and **Betweenness** (gatekeeping roles within the network) are essential metrics within SNA. Gephi’s capability to analyze and display these metrics helps identify influential nodes, gatekeepers, or isolated actors within a network.

### Gephi in Investigative Journalism

Social network analysis has been used to investigate political influence through campaign contributions, social media manipulation (e.g., election interference via coordinated accounts), and even tracking of criminal or extremist networks. Gephi's network analysis features allow journalists to trace these relationships systematically. Noteworthy examples of the use of Gephi in high-profile cases include:

* **Panama Papers (ICIJ)**: Gephi was integral in the Panama Papers investigation, allowing journalists to visualize the networks of offshore entities and expose connections among influential individuals involved in tax evasion and corruption globally.
* **9/11 Terrorist Network**: Researcher Valdis E. Krebs used network analysis to map the terrorist cells responsible for the 9/11 attacks. By identifying key nodes (individuals) with high “betweenness” centrality, Krebs demonstrated how certain individuals acted as critical connectors within the network, offering insights into the organizational structure of the cells.
* **They Rule Project**: This project by Josh On used network analysis to expose interlocking directorates among major US corporations, showing how corporate power is often concentrated among a few interconnected individuals. Gephi’s visual tools allow users to explore and identify these overlapping board memberships, revealing power dynamics that might otherwise remain invisible.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid



## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Learning Curve

Gephi has a moderate learning curve due to its extensive features. Still, beginners can start with basic tutorials and sample datasets to understand the interface and critical functions like layouts, filters, and metrics. A good strategy is to focus on one feature at a time: experiment with layouts to arrange nodes, use filters to simplify complex networks, and apply basic metrics like centrality to interpret relationships. Users can explore plugins and advanced features like time-based visualizations for more tailored analyses as they become comfortable. Gephi’s active community offers additional support with resources and examples that showcase creative applications across journalism and research. For an optimal learning experience, start with simple datasets, progress to custom data, and consult community forums for inspiration and troubleshooting.

## Requirements

No account is needed, but Java installation is required.

## Limitations

Gephi is resource-intensive, making it challenging for users with limited computing power. It can be less intuitive for beginners, and certain advanced functions may require plugins or scripting knowledge.

## Ethical Considerations

Using Gephi to visualize networks from **sensitive or personal data** requires ethical handling, particularly regarding privacy and consent, and careful interpretation to avoid misrepresenting the connections shown.

**Data integrity is crucial** for users of Gephi, as the accuracy and reliability of network visualizations depend directly on the quality of input data. For investigative journalism, any insights or patterns revealed through Gephi's analysis are only as trustworthy as the data provided. Poor data quality — such as incomplete records, unverified sources, or outdated information — can lead to misleading visualizations that misrepresent relationships or inflate the importance of specific network nodes. To ensure meaningful results, Gephi users must verify data sources, validate accuracy, and cross-check information before visualizing it. Maintaining high data integrity not only strengthens the credibility of the analysis but also allows for responsible storytelling, helping to prevent the spread of misinformation and ensuring that network insights are grounded in factual, well-vetted data.

## Guides

Since Gephi isn't only a piece of software but is representative for an analysis approach and a tool of the scientific method, this list provides somewhat more extensive literature in lieu of examples.

#### Complete Beginners

Levallois, C. (2017, January 20). _Simple Gephi Project from A to Z_. [https://seinecle.github.io/gephi-tutorials/generated-html/simple-project-from-a-to-z-en.html](https://seinecle.github.io/gephi-tutorials/generated-html/simple-project-from-a-to-z-en.html)

#### General / Advanced / Multi-Language

Levallois, C. (2024, November 27). _Gephi Tutorials_. [https://seinecle.github.io/gephi-tutorials/](https://seinecle.github.io/gephi-tutorials/)

Grandjean, M. (2024). _Gephi_. Retrieved November 30, 2024, from [https://www.martingrandjean.ch/gephi/](https://www.martingrandjean.ch/gephi/) \
(Tutorials incl 30 Gephi examples)

#### Videos

Martin Grandjean. (2022, September 21). _GEPHI - Introduction to Network Analysis and Visualization (Tutorial)_ \[Video recording]. [https://www.youtube.com/watch?v=GXtbL8avpik](https://www.youtube.com/watch?v=GXtbL8avpik)

#### Journalism-Specific

Global Investigative Journalism Network (Director). (2023, September 30). _GIJC23—Using Social Network Analysis for Investigations_ \[Video recording]. [https://www.youtube.com/watch?v=-D8E8JY86b4](https://www.youtube.com/watch?v=-D8E8JY86b4)

#### Books

Cherven, K. (2015). _Mastering Gephi Network Visualization_. Packt Pub Ltd.

_Gephi Cookbook | Cloud & Networking | Print_. (n.d.). Packt. Retrieved November 10, 2024, from [https://www.packtpub.com/en-us/product/gephi-cookbook-9781783987405?type=print](https://www.packtpub.com/en-us/product/gephi-cookbook-9781783987405?type=print)

Barabási, A.-L. (2016). _Network Science_. [http://networksciencebook.com/](http://networksciencebook.com/) \
(this is EXCELLENT!)

#### Open Datasets&#x20;

_Datasets_. GitHub. Retrieved November 30, 2024, from [https://github.com/gephi/gephi/wiki/Datasets](https://github.com/gephi/gephi/wiki/Datasets)

_ASNR - Animal Network Data_. Retrieved November 30, 2024, from [https://bansallab.github.io/asnr/data.html](https://bansallab.github.io/asnr/data.html) \
(ASNR aims to assemble and provide a comprehensive index of real-world animal interaction data sets, across all taxa. Only high-value peer-reviewed data.)

### Comparison with similar software

* **Gephi**: An open-source tool renowned for its customizable, visually rich network graphs, Gephi is ideal for investigative journalism and projects that require detailed visualization. It supports extensive plugins and handles both small and large datasets well, though it can be resource-intensive and has a learning curve for beginners.
* **NodeXL**: Integrated with Microsoft Excel, NodeXL offers a straightforward approach to network analysis, making it accessible for beginners. While limited in visual customization and available only on Windows, it’s suitable for quick, small-to-medium analyses without requiring extensive technical knowledge.
* **Palladio**: A web-based, user-friendly tool focused on humanities projects, Palladio enables quick, basic network visualizations without software installation. However, it lacks scalability and advanced features, making it best for smaller, less complex datasets.
* **PyVis**: Built as a Python interface to the JavaScript Vis.js library, PyVis is tailored for interactive network visualizations in Jupyter notebooks or web applications. It provides a user-friendly way to create interactive, dynamic visualizations without extensive coding, though it has limited analytical depth compared to NetworkX or igraph. PyVis is useful when the emphasis is on interactivity and presentation.
* **Neo4j** (with Datashare Plugin): Neo4j is a graph database optimized for managing highly connected data, particularly useful for investigative journalism when paired with ICIJ’s Datashare platform. With the Datashare plugin, journalists can create and analyze networks from massive document sets, such as corporate leaks, using Neo4j’s Cypher query language and tools like Bloom for interactive exploration. Neo4j is highly scalable, supporting real-time analysis, and allows users to uncover intricate relationships in complex data, though it requires familiarity with Cypher. Ideal for investigations involving extensive data linkage, Neo4j is often used in projects like the Panama Papers, where rapid and thorough data connection is crucial.

## Tool provider

Gephi Consortium (open-source community, CTO : Mathieu Bastian)

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [x] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Martin Sona     |
|                 |

