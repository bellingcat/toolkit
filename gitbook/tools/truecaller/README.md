---
description: >-
  Truecaller is a caller ID app that identifies incoming calls, blocks unwanted
  numbers and gathers phone numbers and names from contact lists. It also
  performs reverse phone number search.
---

# TrueCaller

## URL

https://www.truecaller.com/

## Description

{% hint style="success" %}
TIP: Prior to using Truecaller for passive research, users may prefer to access the tool with a research account instead of a personal account. Consider accessing the website with a browser in incognito or private mode.&#x20;
{% endhint %}

### How does it work?

Truecaller, primarily known as a caller identification app, can be a valuable tool for open source investigations when used judiciously. While its primary function is to identify unknown callers, it can provide additional insights with careful analysis. This tool can be accessed through the web or downloaded as a mobile application.&#x20;

Apps like Truecaller are designed to provide information on the identity of callers or texters by utilizing "crowdsourced" data from other users who have installed the app. They typically offer a feature to search for a phone number and find matches, providing access or having a window to a shared "contact database."

#### _Understanding Truecaller’s Features and Capabilities_

This app has several features, but for open-source community, these features are the most useful:&#x20;

* [**Reverse phone number lookup**](https://www.truecaller.com/reverse-phone-number-lookup) - Truecaller can often identify the owner of a phone number, providing basic information like name and location. It allows a user to enter a phone number and find out the name of the person to whom the number belongs.
* **Caller ID** - If using the mobile app, this tool can identify the name behind a caller using its database. When a call comes in Truecaller quickly searches it’s database and displays the callers name and personal details, if available.&#x20;
* **Ease of use and access** - Ability to sign up with just a Gmail or Microsoft Live account, with no paywall and or SMS verification required. This means to use reverse phone number lookup, users do not have to provide a phone number.&#x20;
* **Web Interface** - This is one of the few “contact book apps” that has a web interface, and does not require users to only use their mobile app.

### Use Case: Digital Footprint Tracing Through Reverse Phone Number Search

If used with other tools and methods, open-source researchers can use Truecaller’s reverse phone number lookup when trying to ID an actor in an incident. If, for instance, researchers have a telephone number as a lead in their investigations, they can use this tool to generate more leads. Ostensibly, a reverse phone number search may produce a name and a location, the countries in which they call most frequently, the comments our app’s users said about them.

Truecaller has been used in this Bellingcat investigation:

* Identifying the Russian GRU Commander associated with the MH17 crash: [https://www.bellingcat.com/news/uk-and-europe/2018/05/25/mh17-russian-gru-commander-orion-identified-oleg-ivannikov/](https://www.bellingcat.com/news/uk-and-europe/2018/05/25/mh17-russian-gru-commander-orion-identified-oleg-ivannikov/) \


### _How Truecaller Builds Its Database_ 

Truecaller primarily builds its vast database through a combination of user-contributed data and public directories.

[**User-Generated/“Permission-Based” Сrowd-sourced Data**](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered)

{% hint style="info" %}
NOTE: To use Truecaller’s features, especially on the mobile app, users typically grant app access to their contacts/phonebook. This shared information contributes to Truecaller’s database, enabling the same features for other users. In other words, it is a trade-off: access to caller ID in exchange for contact list data&#x20;
{% endhint %}

* Direct contributions: Users voluntarily add names, phone numbers, and spam/fraud reports to the Truecaller database.&#x20;
* Contact syncing: When users give permission to the app to sync their phone contacts with Truecaller, the app can access and potentially add this information to its database.
* Caller ID feedback: Users can provide feedback on incoming calls, helping Truecaller identify spammers and scammers. According to the [tool provider](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered): “For example: If an insurance spam number is saved or reported as ‘Insurance spam’ by the maximum number of our users, then that is what the caller ID will show to the receiver of the call from that particular number.”

**Public Directories**

* Public phone directories - This tool can access publicly available phone directories in some regions to supplement its database.&#x20;
* Public online directories - This app may also gather information form publicly available online directories and search engines&#x20;
* Partnerships - Truecaller has some partnerships with [third party platforms](https://www.vanguardngr.com/2018/03/truecaller-vconnect-collaborate-business-app/) and can access certain data this way.  &#x20;

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. Either a Gmail or Microsoft email account
2. Mobile or desktop device
3. If using the mobile app, requires Android 4.4 or higher, or iOS 15 or higher.&#x20;

## Limitations

1. Limited Search Requests on Web Interface: Truecaller users doing searches on the web interface rather than the mobile app can only do a limited amount of reverse phone number lookups before it suggests downloading the mobile app. (The tool provider does not specify what the quota is, but users will get an “[exceeded attempts](https://www.truecaller.com/reverse-phone-number-lookup)” message)&#x20;
2. [Mixed Accuracy of Names:](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered) Because the data is crowd-sourced or manually entered by users, the name will sometimes depend on how it appears on other people’s phonebook. For example, a Truecaller user permits access to his/her phonebook, and the phone number of an individual under investigation is labeled “Neighbor”, then it will appear as “Neighbor” in the contact list, instead of an clue to the identity of the phone number owner.&#x20;
3. User Privacy Concerns: According to this [article](https://techpoint.africa/2019/12/18/truecaller-data-developer-dive/), the app may be uploading your device information into their servers, and that the app may be using an unsecured method of uploading those data.

## Ethical Considerations

1. Use and misuse of information:

Because this tool contains personal identifiable information, it is crucial to understand that using Truecaller must adhere to legal and ethical guidelines before proceedings. It is also advisable that users double check privacy laws prior to using info in this any investigation.&#x20;

2. Other privacy related issues:&#x20;

This [article](https://techcabal.com/2018/05/02/your-data-is-our-data-a-truecaller-breakdown/) talks about the trade-off users make when using this tool: “So, say your friend downloads the Truecaller app and shares their phonebook with the app, that data is uploaded to Truecallers database and is in turn available to other people who use the service. Cool. But what you may not know is that by sharing his/her phonebook with Truecaller, your friend has also shared your name and number with its database. Maybe even your email.”&#x20;

What this means is that, whether you use the service or not, and regardless of whether you delete your data from Truecaller's database, your information can still reappear. If even one person with your number registers for Truecaller, your details could be added back into the system. Additionally, if you don't use Truecaller, you can't verify if the company has your data.&#x20;

Moreover, the [privacy policy](https://www.truecaller.com/privacy/our-privacy-policy/privacy-policy/row) seems to imply that if you share someone else's personal information with us, you must ensure they are aware of and consent to our use of their data. (“By accepting the Truecaller Privacy Policy and/or using the Services You consent to the collection, use, sharing and processing of personal information as described herein. If You provide us with personal information about someone else, You confirm that they are aware that You have provided their information and that they consent to our use of their information according to our Privacy Policy”)

## Guides&#x20;

Bellingcat guide: “Using Phone Contact Book Apps For Digital Research”, Aric Toler

[https://www.bellingcat.com/resources/how-tos/2019/04/08/using-phone-contact-book-apps-for-digital-research/](https://www.bellingcat.com/resources/how-tos/2019/04/08/using-phone-contact-book-apps-for-digital-research/)



## Tool provider

Truecaller

Sweden

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
