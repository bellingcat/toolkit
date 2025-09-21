---
description: >-
  Truecaller is a caller ID app that identifies incoming calls, blocks unwanted
  numbers, and gathers phone numbers and names from contact lists. It also
  performs a reverse phone number search.
---

# TrueCaller

## URL

[https://www.truecaller.com/](https://www.truecaller.com/)

## Description

{% hint style="success" %}
TIP: Prior to using Truecaller for passive research, users may prefer to access the tool with a research account instead of a personal account. Consider accessing the website with a browser in incognito or private mode.&#x20;
{% endhint %}

### How does it work?

Truecaller, primarily a caller identification app, can be a valuable tool for open-source investigations when used judiciously. While its primary function is identifying unknown callers and spam, it can provide additional insights with careful analysis. This tool can be accessed through the web or downloaded as a mobile application.&#x20;

Apps like Truecaller are designed to provide information on the identity of callers or texters by utilizing "crowdsourced" data from other users who have installed the app. They typically offer a feature to search for a phone number and find matches, providing access or having a window to a shared "contact database."

#### _Understanding Truecaller’s Features and Capabilities_

This app has several features, but for the open-source community, these features are the most useful:&#x20;

* [**Reverse phone number lookup**](https://www.truecaller.com/reverse-phone-number-lookup) - Truecaller can often identify the owner of a phone number, providing basic information like name and location. It allows a user to enter a phone number and find out the name of the person to whom the number might belong.
* **Caller ID** - If using the mobile app, this tool can identify the name behind a caller using its database. When a call comes in, Truecaller quickly searches its database and displays the caller's name and personal details, if available.&#x20;
* **Ease of use and access** - Ability to sign up with just a Gmail or Microsoft Live account, with no paywall or SMS verification required. This means to use reverse phone number lookup; users do not have to provide a phone number.&#x20;
* **Web Interface** - This is one of the few “contact book apps” with a web interface and does not require users to use only their mobile app.
* **(For paid subscribers) "Verified" badge -** This means that the user with this badge on their profile has[ his/her identity verified and that "you are who you say they are".](https://medium.com/@jasminedevv/before-you-make-a-bluesky-account-learn-about-the-privacy-model-de21e40ce9ad)&#x20;

{% hint style="warning" %}
NOTE: [This requires verifying the user's name to match their bank-registered name.](https://www.newsbytesapp.com/news/science/how-to-get-a-verified-badge-on-truecaller/story)&#x20;
{% endhint %}

### Use Case: Digital Footprint Tracing Through Reverse Phone Number Search

If used with other tools and methods, open-source researchers can use Truecaller’s reverse phone number lookup when trying to ID an actor in an incident. If, for instance, researchers have a telephone number as a lead in their investigations, they can use this tool to generate more leads. A reverse phone number search may produce a name and a location, the countries they call most frequently, or the comments other app users make about them.

Truecaller has been used in the following Bellingcat investigation:

* Identifying the Russian GRU Commander associated with the MH17 crash: [https://www.bellingcat.com/news/uk-and-europe/2018/05/25/mh17-russian-gru-commander-orion-identified-oleg-ivannikov/](https://www.bellingcat.com/news/uk-and-europe/2018/05/25/mh17-russian-gru-commander-orion-identified-oleg-ivannikov/) \


### How Truecaller Builds Its Database 

Truecaller primarily builds its vast database through a combination of user-contributed data and public directories.

[**User-Generated/“Permission-Based” Сrowd-sourced Data**](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered)

{% hint style="info" %}
NOTE: To use Truecaller’s features, especially on the mobile app, users typically grant app access to their contacts/phonebook. This shared information contributes to Truecaller’s database, enabling the same features for other users. In other words, it is a trade-off: access to caller ID in exchange for contact list data.
{% endhint %}

* Direct contributions: Users voluntarily add names, phone numbers, and spam/fraud reports to the Truecaller database.&#x20;
* Contact syncing: When users give permission to the app to sync their phone contacts with Truecaller, the app can access and potentially add this information to its database.
* Caller ID feedback: Users can provide feedback on incoming calls, helping Truecaller identify spammers and scammers. According to the [tool provider](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered): “For example, If an insurance spam number is saved or reported as ‘Insurance spam’ by the maximum number of our users, then that is what the caller ID will show to the receiver of the call from that particular number.”

**Public Directories**

* Public phone directories - This tool can access publicly available phone directories in some regions to supplement its database.&#x20;
* Public online directories - This app may also gather information from publicly available online directories and search engines.&#x20;
* Partnerships - Truecaller has partnerships with third-party platforms and can access certain data in this way.  &#x20;

## Cost

* [ ] Free
* [x] Partially Free
* [ ] Paid

In addition to the free version, the tool has three paid tiers: Premium, Family, and Gold. The information is available here: [https://www.truecaller.com/premium/](https://www.truecaller.com/premium/)&#x20;

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

1. Either a Gmail or a Microsoft email account
2. Mobile or desktop device
3. If using the mobile app, it requires Android 4.4 or higher, or iOS 15 or higher.&#x20;
   1. Android and iPhone devices have varying feature availability according to [this article](https://techcrunch.com/2025/01/21/truecaller-brings-real-time-caller-id-to-iphone-users/). For a while, iPhone users have not been able to take advantage of getting the identification of callers in real time. However, as of  January 2025, the tool provider has made it available for iPhone users.&#x20;

## Limitations

1. Limited Search Requests on Web Interface: Truecaller users doing searches on the web interface rather than the mobile app can only do a limited amount of reverse phone number lookups before it suggests downloading the mobile app.&#x20;

The tool provider does not specify the quota, but users will get an “[exceeded attempts](https://www.truecaller.com/reverse-phone-number-lookup)” message. Based on our tests, only a few searches were granted before being prompted to download the app.

2. [Mixed Accuracy of Names:](https://www.truecaller.com/blog/features/how-truecallers-caller-id-works-your-questions-answered) Names on this tool have mixed accuracy. Because the data is crowd-sourced or manually entered by users, the name will sometimes depend on how it appears in other people’s phonebooks. For example, if a Truecaller user permits access to his/her phonebook, and the phone number of an individual under investigation is labeled “Neighbor,” it will appear as “Neighbor” in the contact list. &#x20;

In addition, the names may not always reflect the individual’s true identity. Users can provide false names or names to a Truecaller user that do not correspond to the person behind the phone number, so the accuracy of a name may require further corroboration.

3. User Privacy Concerns: According to this [article](https://techpoint.africa/2019/12/18/truecaller-data-developer-dive/), the app may be uploading your device information to their servers, and the app may be using an unsecured method of uploading that data.
4. [Truecaller Users' Ability To Change Name on the Tool](https://support.truecaller.com/support/solutions/articles/81000392586-how-do-i-change-my-name-in-truecaller-): According to the tool provider, users who have the tool installed can change the way their name appears on the app if their phone number is showing the wrong name. Allowing users to update their name on Truecaller helps keep information accurate and up-to-date, improving user experience and reducing confusion. Still, this feature raises concerns about potential misuse, such as impersonation or fraud, if names are changed easily. While the tool provides a [verification process](https://www.truecaller.com/blog/features/truecaller-verified-badge) to check the real identity behind a phone number, it may not entirely eliminate the risk.

## Ethical Considerations

1. Use and misuse of information:

Because this tool contains personally identifiable information, it is crucial to understand that using Truecaller must adhere to legal and ethical guidelines before proceeding. It is also advisable that users double-check privacy laws prior to using Truecaller's information in any investigation. Minimize harm when presenting or publishing investigations, and publish only necessary information relevant to investigations in the public interest (for instance, in investigative journalism).

2. Other privacy-related issues:&#x20;

This [article](https://techcabal.com/2018/05/02/your-data-is-our-data-a-truecaller-breakdown/) talks about the trade-off users make when using this tool: When a friend shares their phonebook with the Truecaller app, the app uploads that data to its database, making it available to other users. This means your name, number, and possibly even your email could be shared with Truecaller without your knowledge or consent.

What this means is that whether you use the service or not, and regardless of whether you delete your data from Truecaller's database, [your information can still reappear. If even one person with your number registers for Truecaller, your details could be added back into the system](https://techcabal.com/2018/05/02/your-data-is-our-data-a-truecaller-breakdown/). Additionally, if you don't use Truecaller, you can't verify if the company has your data.&#x20;

Moreover, the [privacy policy](https://www.truecaller.com/privacy/our-privacy-policy/privacy-policy/row) seems to imply that if you share someone else's personal information with the tool, you must ensure they are aware of and consent to the tool's use of their data. (See the third paragraph of the [privacy policy.)](https://www.truecaller.com/privacy/our-privacy-policy/privacy-policy/row)

3. Enhanced Search Feature Privacy Risks:

Users need to note that when signing up with an email address, users outside the EU might inadvertently give permission to upload data associated with a particular email address without realizing it. This feature is called "Enhanced Search Feature". It is checked on the box by default when signing up. Keep an eye on this if you decide to use the tool. [ ](https://www.truecaller.com/privacy/our-privacy-policy/privacy-policy/row)

[Item 1.4 ](https://www.truecaller.com/privacy/our-privacy-policy/privacy-policy/row)of its Privacy Policy showsthat  where you get the app matters. If users download it from sources other than the App Store or Google Play, such as on the web, it might collect your contact info if you turn on a specific feature called “Truecaller Enhanced Search Functionality.” If you use the Enhanced Search feature, Truecaller can collect names, phone numbers, Google IDs, and email addresses from your contacts list.

<figure><img src=".gitbook/assets/Screenshot 2024-09-09 172809-marked.png" alt="" width="563"><figcaption><p> (Image Source: truecaller.com) This is the sign-up page for Truecaller for users outside of the EU, geared explicitly towards email address sign-up instead of telephone number sign-up. Users are prompted to sign up with either their Google or Microsoft account. Immediately below, “Enhanced Search” is automatically selected. Any concerns about privacy during an investigation should take note of this feature.    </p></figcaption></figure>

<figure><img src=".gitbook/assets/Screenshot 2024-09-09 172901.png" alt="" width="563"><figcaption><p>By contrast, users from within the EU do not have the Enhanced Search feature checked at the sign in page. </p></figcaption></figure>

## Guides&#x20;

See the following Bellingcat guide on Truecaller and similar Contact Book Apps:&#x20;

**“Using Phone Contact Book Apps For Digital Research”, Aric Toler**

[https://www.bellingcat.com/resources/how-tos/2019/04/08/using-phone-contact-book-apps-for-digital-research/](https://www.bellingcat.com/resources/how-tos/2019/04/08/using-phone-contact-book-apps-for-digital-research/)



## Tool provider

Truecaller, Sweden

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Afton           |
|                 |
