---
updated: '2025-08-30'
description: >-
  A database providing otherwise secret information about more than 810k
  offshore companies, foundations, and trusts based on leaks like the Panama
  Papers or the Paradise Papers.
---

# ICIJ Offshore Leaks Database

## URL

[http://offshoreleaks.icij.org/](http://offshoreleaks.icij.org/)

## Description

The database is a repository of five major leaks. The first one, Offshore Leaks, was released in [2013](https://www.icij.org/investigations/offshore/icij-releases-offshore-leaks-database-revealing-names-behind-secret-companies-trusts/) and included more than 100,000 entities. The China Leaks which shed light on China’s elite hiding their wealth in tax havens through offshore companies were added in [2014](https://www.icij.org/investigations/offshore/leaked-records-reveal-offshore-holdings-of-chinas-elite/).

In[ ](https://www.icij.org/inside-icij/2016/05/icij-releases-panama-papers-offshore-company-data/)[2016](https://www.icij.org/inside-icij/2016/05/icij-releases-panama-papers-offshore-company-data/), the Panama Papers led to the addition of 214,000 entities that disclosed activities of the law firm Mossack Fonseca, whose [employees are now facing money laundering charges](https://www.theguardian.com/world/2024/apr/09/panama-papers-trial-begins-of-27-mossack-fonseca-employees) in a Panamanian court.

In [2016](https://www.icij.org/inside-icij/2016/09/icij-publishes-leaked-bahamas-info-offshore-database/) the Bahamas Leaks made corporate registry details of “more than 175,000 Bahamian companies, trusts and foundations registered between 1990 and early 2016” publicly available. More details about the Bahamas Leaks can be found[ here](https://www.icij.org/investigations/offshore/former-eu-official-among-politicians-named-new-leak-offshore-files-bahamas/).

The Paradise Papers brought the number of entries in the database to[ 785,000](https://www.icij.org/investigations/paradise-papers/data-ever-added-offshore-leaks-database/) (in 2018). Major stories from the Paradise Papers and their impact can be found [here](https://www.icij.org/investigations/paradise-papers/).

Finally, in December 2021 the[ Pandora Papers were added](https://www.icij.org/investigations/pandora-papers/icij-releases-new-pandora-papers-data-from-two-offshore-service-providers/). The data came from two offshore service firms: Alemán, Cordero, Galindo & Lee (Panama) and Fidelity Corporate Services (British Virgin Islands). In 2022, ICIJ revealed details on [offshore holdings linked to Russians](https://www.icij.org/investigations/pandora-papers/alpha-offshore-leaks-database-pandora-papers-russia/) from circles close to Putin. The data came from an offshore service provider based in the Seychelles. A list of investigations from the Pandora Papers can be found[ here](https://www.icij.org/investigations/pandora-papers/).

There are various ways to explore the database:

### Conducting searches in the whole dataset

1. Users can do searches in the whole database. Write the entity name, its jurisdiction or location in the search bar. For instance, “Mossack Fonseca.” Mossack Fonseca is a law firm disclosed in the Panama Papers, [whose employees are facing money laundering charges](https://www.theguardian.com/world/2024/apr/09/panama-papers-trial-begins-of-27-mossack-fonseca-employees) in the Panamanian court.

<figure><img src=".gitbook/assets/ICIJ step 1.png" alt="" width="563"><figcaption></figcaption></figure>

2. Results can be abundant. On the left, you can filter the results by “offshore entities,” “officers,” “intermediaries,” and “addresses.”

<figure><img src=".gitbook/assets/ICIJ step 2.png" alt="" width="563"><figcaption></figcaption></figure>

3. For instance, when you filter by “officer,” the results for “Mossack Fonseca” show “396” results. After filtering, click on the result of your choice. An interactive map shows connections between categories like "officer" and "address". The visualization explains ties between an intermediary, entity, officer, etc. and it can also list an address. Click on the nodes to receive more information.

<figure><img src=".gitbook/assets/ICIJ step w.png" alt="" width="563"><figcaption></figcaption></figure>

ICIJ also provides a detailed section on “[How to use the Offshore Leaks Database.](https://offshoreleaks.icij.org/pages/howtouse)”

### Search each database separately

ICIJ Offshore Leaks also allows users to explore each of the five datasets separately. After selecting a dataset of your choice, you can explore the results for a specific person or company based on this selection. Links to stories/investigations are also provided under each dataset window. Here is an example for the [Pandora Papers](https://www.icij.org/investigations/pandora-papers/).

### “The Power Players”

[The Power Players](https://offshoreleaks.icij.org/power-players) section enables users to search for notable names linked to "offshore connections of world leaders, politicians, and their relatives and associates" from three major leaks: Pandora Papers, Paradise Papers, and Panama Papers. Users can explore key figures of public interest from all three leaks combined or from each leak individually.

### Downloading the dataset

All five leak databases can be downloaded as [zip files](https://offshoreleaks.icij.org/pages/database). The zip files include:

1. Offshore Leaks (2013)
2. Panama Papers (2016)
3. Bahamas Leaks (2016)
4. Paradise Papers (2017)
5. Pandora Papers (2021)

For user convenience, the data is converted into multiple CSV files, providing the freedom to explore the dataset on the user's terms. The data is also available as "Neo4j" exported databases. ICIJ provides a [GitHub repository guide](https://github.com/ICIJ/offshoreleaks-data-packages) that explains how to import the data into Neo4j.

### **The New Reconciliation API**

A new[ Reconciliation API feature](https://www.icij.org/inside-icij/2025/01/explore-the-latest-tool-to-power-up-investigations-via-the-offshore-leaks-database/) allows users to match their datasets against the ICIJ database. It is funded by the German development agency Deutsche Gesellschaft für Internationale Zusammenarbeit. Users can use this API to[ match](https://www.icij.org/inside-icij/2025/01/explore-the-latest-tool-to-power-up-investigations-via-the-offshore-leaks-database/) “names, addresses and corporate entities” against ICIJ’s database. ICIJ states, “The tool accelerates investigations by integrating external data sources.”

The supported API types are[ General API](https://offshoreleaks.icij.org/docs/reconciliation), Query API, Data Extension API, Suggest API, View API, Preview API, and Namespaced API. Explore each API’s function[ here](https://offshoreleaks.icij.org/docs/reconciliation). Users can watch this[ tutorial](https://www.youtube.com/watch?v=p2783xIcfdA) by ICIJ on how to use this new feature.

### Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

The dataset is free to explore.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

The visualization of downloaded datasets requires familiarity with the Neo4j software. The same applies to the use of the Reconciliation API.

When using the dataset, you have to credit the International Consortium of Investigative Journalists.

## Limitations

Not all names behind entities will necessarily appear in the dataset: "information about ownership is often buried in emails, power-of-attorney letters and internal notes and cannot easily be extracted in a systematic manner," [says](https://offshoreleaks.icij.org/pages/faq) ICIJ.

The data does not include personal information such as bank accounts, email exchanges, or financial transactions. Researchers seeking this type of information may need to use other open source research tools or data sources.

## Ethical Considerations

Entities in the database are not necessarily involved in any wrongdoing. ICIJ states in its [FAQ](https://offshoreleaks.icij.org/pages/faq) section: "There are legitimate uses for offshore companies and trusts. We do not intend to suggest or imply that any individuals, companies or other entities included in the ICIJ Offshore Leaks Database have broken the law or otherwise acted improperly." Understanding which entities are involved and the purpose of the research is crucial.

## Guide

ICIJ offshore leaks provides a three part series on how to use the [database](https://offshoreleaks.icij.org/pages/howtouse).

Part 1: [How to search the Offshore Leaks Database by location](https://www.icij.org/inside-icij/2018/01/offshore-leaks-database-tips-location-geogrpahy/)

Part 2:[ How to explore networks and entity metadata in the Offshore Leaks Database](https://www.icij.org/inside-icij/2018/01/how-to-explore-networks-and-entity-metadata-in-the-offshore-leaks-database/)

Part 3: [How to investigate companies found in the Offshore Leaks Database](https://www.icij.org/inside-icij/2018/01/investigate-companies-found-offshore-leaks-database/)

Reconciliation API guide [here](https://offshoreleaks.icij.org/docs/reconciliation).

## Tool provider

International Consortium of Investigative Journalists (ICIJ). Link to detailed credits[ here](https://offshoreleaks.icij.org/pages/credits). ICIJ is based in Washington D.C.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Anisa Shabir    |
|                 |
