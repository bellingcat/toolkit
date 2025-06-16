---
description: >-
  Upload the picture of a face and find pictures of similar looking people on
  VKontakte, Odnoklassniki, TikTok and Clubhouse.
---

# Search4Faces

## URL

[https://search4faces.com](https://search4faces.com)

## Description

**Search4Faces** is a reverse face search engine that allows users to find the profile photos of individuals across various online platforms. The tool is implemented in Python and is accessible via a web interface or as a Python library. As of June 2025, the tool [has](https://search4faces.com/en/index.html) complete or partial collection of the following four databases:

1. Avatars of the social network Vkontakte and main photos of the social network Odnoklassnik
2. Profile photos of the social network Vkontakte,&#x20;
3. Avatars of Tiktok users,&#x20;
4. Avatars of ClubHouse users.

In addition, the tool has a search feature for recognizing celebrities which - according to the tool provider - is based on Wikipedia and Imdb data. [https://search4faces.com/index.html](https://search4faces.com/index.html)

<figure><img src=".gitbook/assets/Screenshot 2024-12-12 at 9.37.30 AM.png" alt=""><figcaption><p>A sample search using a stock image within the "Avatar of Tiktok users" database</p></figcaption></figure>

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

Search features on the site itself are free, but [API access](https://search4faces.com/en/api.html) is paid with multiple plans ranging from 15000 calls for 40 USD to 135000 calls for 320 USD.&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

* API can be accessed after purchasing a plan or contacting their team for trial access. The API uses JSON-RPC 2.0 protocol over HTTPS, and you can interact with it using client libraries available for Python and PHP.
* No requirements for using the search features on the site itself. It is not necessary to create an account.

## Limitations

* The results are not very accurate for most datas, the search engine appears to compare general characteristics of the provided face (hair, eye or skin color) rather than any specifics.&#x20;
* Image data for each social networking site is not updated in real-time, most datasets end around 2022. Certain user profiles can evade detection by changing their details.&#x20;
* The tool relies on other parameters (such as, age and gender) to improve results, using estimates of the values may limit its accuracy.
* You cannot search multiple databases at once.

## Ethical Considerations

* Persons with similar faces can be misidentified without accounting for other contextual information.
* Results can leak personally identifiable information such as general location, home address or the same of associated persons.

Josephine Lulamae, Algorith Watch: [War Crimes OSINT, Harassment, Doxxing Police and Protesters: Face Recognition for Everyone.](https://algorithmwatch.org/en/face-recognition-for-everyone/)

## Guide

[Example investigation using the tool](https://publication.osintambition.org/behind-the-steps-revealing-digital-identity-through-osint-and-socmint-unraveling-the-7735033b867d)

Key features of Search4Faces include:

1. **Face Recognition Search**:.
   * Searches through multiple databases, including those of social networks (VKontakte, Odnoklassniki, TikTok, and Clubhouse), to find similar faces.
   * Users can specify which database to search in, and results include links to the relevant social media profiles.
2. **Customization and API Integration**:
   * Search4Faces offers an API that can be integrated into applications for automated and scalable facial recognition searches.
   * The API supports asynchronous operations and provides customizable search parameters, such as limiting the number of results or specifying whether to include hidden profiles in the search results.
   * The tool can also be configured for more targeted searches, depending on the databases and permissions set by the user.![](<.gitbook/assets/Screenshot 2024-12-12 at 9.36.35 AM.png>)

## Tool provider

The tool provider is currently unknown. The website is offered in Russian and in English. Its domain registrar is the Bahamas based Whois Privacy Corp.

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
