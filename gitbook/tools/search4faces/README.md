---
description: >-
  Upload the picture of a face and find pictures of similar looking people on
  VKontakte, Odnoklassniki, TikTok and Clubhouse.
---

# Search4Faces

## URL

[https://search4faces.com](https://search4faces.com)

## Description

**Search4Faces** is a reverse face search engine that allows users to find the profile photos of individuals across various online platforms. The tool is implemented in Python and is accessible via a web interface or as a Python library. As of June 2025, the tool has (partial) collections of the following [four databases](https://web.archive.org/web/20250616163324/https://search4faces.com/en/):

1. Avatars of the social network Vkontakte and main photos of the social network Odnoklassniki,
2. Profile photos of the social network Vkontakte (VK),&#x20;
3. Avatars of TikTok users,&#x20;
4. Avatars of ClubHouse users.

The tool also has a search feature for recognizing celebrities which - [according to the tool provider](https://web.archive.org/web/20250616164148/https://search4faces.com/index.html) - is based on Wikipedia and [IMDb](https://en.wikipedia.org/wiki/IMDb) data.&#x20;

Key features of Search4Faces include:

1. **Face Recognition Search**:
   * Searches through multiple databases, including those of social networks to find similar faces.
   * Users can specify which database to search in, and results include links to the relevant social media profiles.
2. **Customization and API Integration**:
   * Search4Faces offers an API that can be integrated into applications for automated and scalable facial recognition searches.
   * The API supports asynchronous operations and provides customizable search parameters, such as limiting the number of results or specifying whether to include hidden profiles in the search results.
   * The tool can also be configured for more targeted searches, depending on the databases and permissions set by the user.

The site is available in Russian and English. To start a search, users first need to choose a collection. They can then upload the picture of a person of interest.&#x20;

<figure><img src=".gitbook/assets/Screenshot 2025-06-16 at 18.09.44.png" alt=""><figcaption><p>A sample search within the "Avatar of Tiktok users" database. It is possible (but not required) to specify the gender, country, city or age of people of interest before starting a search.</p></figcaption></figure>

For instance, after uploading a Donald Trump picture and selecting the VK and Odnoassniki avatars collection, we received various pictures of Donald Trump that are currently being used (or have been used) as avatars by VK users:

<figure><img src=".gitbook/assets/Screenshot 2025-06-16 at 19.06.43.png" alt=""><figcaption><p>The results include a probability score indicating how likely it is according to the tool that the picture shows the same person as the picture uploaded by the user. It also provides a name for the person but this name can be wrong (for instance if someone uses the picture of Donald Trump for their personal social media account).</p></figcaption></figure>

By clicking on any of the photos in the results list, users are directly brought to the social media profile that features the picture. Keep in mind that the Search4Faces database is not updated on a regular basis. The owners of the social media accounts might have changed their avatars or the accounts might even have been deleted in the meantime.

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

Search features on the site itself are free, but [API access](https://web.archive.org/web/20250425192912/https://search4faces.com/en/api.html) is paid with multiple plans ranging from 15000 calls for 40 USD to 135000 calls for 320 USD.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* No requirements for using the search features on the site. It is not necessary to create an account.
* API can be accessed after purchasing a plan or contacting their team for trial access. The API uses JSON-RPC 2.0 protocol over HTTPS, and you can interact with it using client libraries available for Python and PHP.

## Limitations

* Since the Search4Faces database is limited, the tool is often not able to provide any results for an uploaded picture. Our own tests suggest that in those cases, the search engine appears to compare general characteristics of the provided face (hair, eye or skin color) which does not tend to be helpful for open source researchers.&#x20;
* Image data for each social networking site is not updated in real-time, most datasets end in [2022 or earlier](https://web.archive.org/web/20250520182518/https://search4faces.com/en/). The Russian language version of the tool website states that the VK profile photo database was[ last updated in 2025](https://web.archive.org/web/20250616202030/https://search4faces.com/search.html).&#x20;
* Certain user profiles can evade detection by changing their details. If you click on an image in the results list, it might bring you to a social media account whose name, avatar or posts have been changed or deleted.
* You cannot search multiple databases at once.

## Ethical Considerations

* Persons with similar faces can be misidentified without accounting for other contextual information.
* Results can leak personally identifiable information such as general location, home address or the same of associated persons.

Make sure to carefully assess whether the use of facial recognition tools is required for your type of research. Josephine Lulamae reflects on ethical questions around the use of facial recognition tools in the AlgorithmWatch article: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone](https://algorithmwatch.org/en/face-recognition-for-everyone/) (2022).

## Guide

An example of how Search4Faces was used to reveal a TikTok profile can be found [here](https://publication.osintambition.org/behind-the-steps-revealing-digital-identity-through-osint-and-socmint-unraveling-the-7735033b867d).

Search4Faces was used by Bellingcat in the following investigation: [Tracking the Faceless Killers who Mutilated and Executed a Ukrainian POW](https://www.bellingcat.com/news/2022/08/05/tracking-the-faceless-killers-who-mutilated-and-executed-a-ukrainian-pow/), 2022.

## Tool provider

The tool provider is currently unknown. The website is offered in Russian and in English. Its domain registrar is the Bahamas based Whois Privacy Corp.

## Similar Tools

While open source researcher may want to decide to test Search4Faces during investigations that involve people of interest from Russian speaking countries, other facial recognition tools may often work better for people based in other countries.&#x20;

Similar tools are [Pimeyes](https://bellingcat.gitbook.io/toolkit/more/all-tools/pimeyes) or [FaceCheck.Id](https://bellingcat.gitbook.io/toolkit/more/all-tools/facecheck.id). Unlike Search4Faces,  both of those tools are paid tools and their websites don’t list social media photos as sources. Search4Faces is currently able to identify some older TikTok accounts which may be useful for some research cases.

It is recommended to be cautious when using any of those tools since it the tool providers' identities tend to be unknown.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
