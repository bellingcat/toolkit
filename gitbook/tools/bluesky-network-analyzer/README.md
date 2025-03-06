---
description: >-
  A tool for discovering Bluesky users followed by those you follow but whom you
  don’t yet follow. Useful for network expansion, open source investigations,
  and social graph analysis.
---

# BskyFollowFinder

## URL

[https://bsky-follow-finder.theo.io/](https://bsky-follow-finder.theo.io/)

## Description

BskyFollowFinder is a web-based tool that identifies **second-degree connections** on Bluesky—specifically, it finds accounts that are followed by the people you follow but that you haven’t followed yourself. By leveraging Bluesky’s AT Protocol API, the tool automates social network analysis to recommend potential new follows. This provides valuable insight into your network by ranking suggestions based on the frequency they appear among your followees.

This functionality is especially useful for open source researchers, investigative journalists, and analysts who need to map social relationships, identify key influencers, and understand community structures on the platform.

#### Key Features:

* **Automated Second-Degree Analysis:** Retrieves your follow list and then compiles who they follow, ranking accounts that appear most frequently.
* **Prioritization by Commonality:** Suggestions are ordered by how many of your followed accounts also follow them.
* **No Login Required for Basic Use:** Enter a Bluesky handle; however, optional app password integration enables one-click following via authenticated API calls.
* **Data Retrieval:** Uses Bluesky’s public APIs for streamlined access to follow data.

***

### Example Use Cases

{% tabs %}
{% tab title="Investigative Journalism & OSINT" %}
A researcher examining disinformation networks can use BskyFollowFinder to pinpoint influential hubs. If many known disinformation actors follow a particular account, it may serve as a critical node for further investigation.
{% endtab %}

{% tab title="Detailed Steps" %}
Using **BskyFollowFinder** to pinpoint influential hubs in a disinformation network involves a systematic approach. Here’s a step-by-step guide on how you might do that:

1. **Compile a List of Known Disinformation Actors:**\
   Begin by identifying a set of Bluesky accounts that have been previously flagged or verified as disinformation sources. This can come from prior open source investigations, trusted reports, or expert lists.
2. **Run Individual Network Analyses:**\
   For each known disinformation actor, enter their Bluesky handle into BskyFollowFinder. The tool will generate a ranked list of accounts that these actors follow. Since it ranks suggestions based on the number of your contacts following them, it highlights which accounts are common among the chosen profiles.
3. **Aggregate and Compare Results:**\
   Collect the output from each disinformation actor. Look for accounts that repeatedly appear across multiple analyses. If several known disinformation actors follow a particular account, it likely serves as a central node—or influential hub—in that network.
4. **Verify the Critical Node:**\
   Once you’ve identified an account that appears frequently, dig deeper:
   * **Profile Analysis:** Review the account’s profile, bio, and content to understand its role and influence.
   * **Cross-Reference:** Check if this account is mentioned or linked in other open source research reports, social media analyses, or disinformation research.
   * **Contextual Review:** Evaluate its interactions and network position by looking at who engages with the account and what content it promotes.
5. **Enhance Your Analysis with Visualization Tools:**\
   For a broader picture, consider exporting the data and using network visualization tools like [**Gephi**](https://bellingcat.gitbook.io/toolkit/more/all-tools/gephi) or [**Maltego**](https://bellingcat.gitbook.io/toolkit/more/all-tools/maltego). Import the common nodes and their connections to visualize the network structure, which can help confirm the hub’s influence and reveal additional relationships.
6. **Document Your Findings:**\
   Record your methodology, the handles analyzed, common nodes identified, and any corroborating evidence from further investigation. This documentation strengthens your overall open source research and supports your conclusions.
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Community Growth & Influence Mapping" %}
Journalists new to Bluesky can quickly discover key voices in their niche by identifying accounts frequently followed by trusted contacts.
{% endtab %}

{% tab title="Detailed Steps" %}
To leverage BskyFollowFinder for community growth and influence mapping—helping journalists discover key voices in their niche—you can follow these steps:

1. **Identify Trusted Contacts:**\
   Start by listing the Bluesky accounts you already follow and trust. These may include colleagues, well-known activists, journalists, or experts in your area of interest.
2. **Run a Network Analysis:**\
   Enter your own Bluesky handle (or that of a trusted contact) into BskyFollowFinder. The tool will compile the follow lists of your trusted accounts and rank suggested accounts based on how many of your contacts follow them. The more frequently an account appears in these lists, the more likely it is a key influencer in your niche.
3. **Evaluate the Suggestions:**\
   Review the ranked list to identify which accounts consistently appear across multiple trusted networks. Click on these accounts to examine their profiles, read their bios, and assess their content to ensure they align with your niche and values.
4. **Expand Your Network:**\
   Once you’ve identified promising key voices, consider following them. Over time, as you build your network, run the analysis periodically to capture new influential voices emerging within your community.
5. **Integrate with Visualization Tools (Optional):**\
   For a broader perspective, you can export the list of suggestions and import it into network visualization tools like [Gephi](https://bellingcat.gitbook.io/toolkit/more/all-tools/gephi) or [Maltego](https://bellingcat.gitbook.io/toolkit/more/all-tools/maltego). These tools help you map out the social graph visually, revealing clusters and the most interconnected nodes within your community.
6. **Document and Iterate:**\
   Keep a record of the accounts you follow and monitor their influence over time. This documentation can serve as a baseline for further analysis and can help you refine your criteria for what constitutes a “key voice” in your niche.
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Corporate & Competitive Intelligence" %}
Businesses can leverage the tool to monitor industry influencers and competitors by mapping out social connections within their network.
{% endtab %}

{% tab title="Detailed Steps" %}
Businesses can use BskyFollowFinder to monitor industry influencers and competitors by systematically mapping and analyzing the social connections within their network. Here’s a detailed, step-by-step approach:

1. **Set Up a Dedicated Monitoring Account:**
   * **Corporate or Monitoring Handle:** Use an existing corporate Bluesky account or create a dedicated monitoring account that follows a curated list of known industry players, competitors, and thought leaders.
   * **Curate Your Follow List:** Ensure this account follows trusted sources within your sector. This list serves as the starting point for analysis.
2. **Run the Network Analysis with BskyFollowFinder:**
   * **Input the Handle:** Enter your corporate or monitoring account’s Bluesky handle into BskyFollowFinder.
   * **Aggregate Follow Data:** The tool retrieves the follow lists of the accounts you follow, then identifies accounts that are followed by multiple of your contacts. This second-degree analysis highlights accounts that are central to your industry network.
3. **Identify Key Influencers and Competitors:**
   * **Ranked Suggestions:** Focus on accounts that appear repeatedly across the follow lists of your trusted contacts. These high-frequency suggestions are likely influential figures or potential competitors.
   * **Profile Evaluation:** Click through to review their profiles, bios, and recent content. Evaluate their influence based on factors such as engagement, content relevance, and the extent of their network within the industry.
4. **Monitor Their Activity Over Time:**
   * **Data Collection and Export:** Document and, if possible, export the list of identified influencers/competitors. This data can be compared over time to track changes in their social connections or activity.
   * **Visualization:** For a deeper analysis, import the data into visualization tools like Gephi or Maltego. These tools can help you create visual maps of the social network, revealing how tightly these key accounts are interconnected and how they relate to your business.
5. **Benchmark and Inform Strategy:**
   * **Competitive Analysis:** Use the network insights to benchmark how your company is positioned relative to key influencers and competitors. Assess which influencers are driving the conversation in your industry and identify any gaps in your own network.
   * **Strategic Decisions:** Leverage these insights to refine your social media strategy—whether that means engaging with certain influencers, monitoring competitor activity, or identifying new partnership opportunities.
6. **Iterate and Refine Your Approach:**
   * **Regular Updates:** Periodically rerun the analysis as your industry network evolves. This helps you capture emerging influencers or shifts in the competitive landscape.
   * **Feedback Loop:** Integrate these findings into your broader competitive intelligence or marketing strategy, ensuring that your approach remains agile and data-driven.
{% endtab %}
{% endtabs %}

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

**Beginner-friendly:** No technical skills are required – just enter your Bluesky handle and review the ranked list of recommendations.

## Requirements

* A **Bluesky account** (only if you want to access and potentially follow suggested users).
* Your **Bluesky username** for personalized results.
* **Optional:** An app password to enable one-click follow actions securely.

**No additional API keys, downloads, or complex setup is necessary.**

## Limitations

* **API Rate Limits:** Processing very large follow lists may slow down queries due to Bluesky’s rate limits.
* **Only Public Data:** The tool only retrieves data from public profiles. Private or locked accounts will not be included.
* **One-Hop Analysis:** Only examines immediate follow relationships (second-degree connections) without deeper multi-hop analysis.
* **No Graph Visualization:** Outputs are provided as a ranked list; it does not generate visual network maps like [Gephi ](https://bellingcat.gitbook.io/toolkit/more/all-tools/gephi)or [Maltego](https://bellingcat.gitbook.io/toolkit/more/all-tools/maltego).

## Ethical Considerations

* **Compliance with API Terms:** Uses only publicly available data via Bluesky’s APIs.
* **Privacy Respect:** Does not scrape private information or require primary login credentials; the optional app password is designed for security.
* **Social Graph Exposure:** Revealing connections can inadvertently expose personal networks. Investigators should use insights responsibly, particularly when analyzing vulnerable subjects.
* **Best Practices:** Use the tool as part of a broader investigative methodology, ensuring conclusions are corroborated with additional data.

## Guides and articles

* **Theo Sanderson’s Bluesky Post:** [Introduction to BskyFollowFinder](https://bsky.app/profile/theo.io/post/3lapjzzqtrc2e)
* **Bluesky API Documentation:** [AT Protocol for Social Graphs](https://docs.bsky.app/docs/api/app-bsky-graph-get-follows)

### Alternatives for Open Source Research & Social Network Analysis

| Tool                    | Platform           | Use Case                                                    |
| ----------------------- | ------------------ | ----------------------------------------------------------- |
| **Gephi**               | Cross-platform     | Visualizes network graphs from exported Bluesky data        |
| **Maltego**             | Multi-source OSINT | Maps social networks across various platforms               |
| **Jaz’s Atlas**         | Bluesky            | Provides large-scale network mapping and visualization      |
| **Bluesky Directory**   | Bluesky            | Offers curated lists of user accounts by interest           |
| **Sky Follower Bridge** | Twitter → Bluesky  | Finds cross-platform identities between Twitter and Bluesky |

💡 **Best Combination:** Use BskyFollowFinder to generate a list of suggested connections, then export or integrate the data into Gephi or Maltego for advanced network analysis.

## Tool provider

[Theo Sanderson](https://theo.io/)\
Theo is a scientist and software developer with expertise in pathogen genomics and data visualization. He has also developed other Bluesky tools such as the **Bluesky User Counter** and **Firehose 3D Viewer**.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

(The [google tag manager](https://support.google.com/tagmanager/answer/11994839?hl=en) is the only cookie found on this website.)

| Page maintainer                               |
| --------------------------------------------- |
| Martin Sona (@cargocultscientist.bsky.social) |
|                                               |
