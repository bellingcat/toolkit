---
description: A command line tool for obtaining information about Google accounts.
---

# Ghunt

## URL

[https://github.com/mxrch/GHunt](https://github.com/mxrch/GHunt)

## Description

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.49.53 PM.png" alt=""><figcaption></figcaption></figure>

GHunt is an open-source tool designed to gather detailed information about Google accounts using the target's Gmail address. By using publicly accessible data, Ghunt surfaces various aspects of a Google user's digital footprint, including their YouTube channels, Google Photos, Google Maps reviews, and more. By analyzing this information, GHunt can provide insights into the target's online activities and digital footprint.&#x20;

Ghunt has two supported browser extensions for [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/ghunt-companion/) and [Google Chrome](https://chromewebstore.google.com/detail/ghunt-companion/dpdcofblfbmmnikcbmmiakkclocadjab).

The developers have provided 2 scripts that leverage the tool [here](https://github.com/mxrch/GHunt/tree/master/examples).

The easiest way to authenticate into Ghunt is to use authentication option 2 alongside the Ghunt browser extension. After selecting option 2, go to your browser extension and obtain the base64-encoded credentials. You can use these to authenticate to Ghunt.

<figure><img src=".gitbook/assets/Screenshot 2024-07-29 at 10.47.52 PM.png" alt=""><figcaption></figcaption></figure>

Once authenticated, you have the following search options:

* **email**: Get information on an email address.&#x20;
* **gaia**: Get information on a [Gaia ID](https://developers.google.com/issue-tracker/concepts/access-control).&#x20;
* **drive**: Get information on a Drive file or folder.&#x20;
* **geolocate**: Geolocate a [BSSID](https://www.gorelo.io/blog/what-is-bssid/).

<figure><img src=".gitbook/assets/Screenshot 2024-08-20 at 12.06.20 PM.png" alt=""><figcaption><p>A sample search using a Gmail email address</p></figcaption></figure>





## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>3</td></tr></tbody></table>

## Requirements

Need to install [pipx](https://github.com/pypa/pipx) in your environment; the download instructions on Ghunt's Github asks you to do this as well. &#x20;

## Limitations

Since April 2024, Ghunt no longer shows the name of the account holder in the results it returns. Ghunt developers [commented](https://github.com/mxrch/GHunt/issues/515#issuecomment-2040998530) that this was a feature that Google has actively tried to block and advised users to not expect the return of this feature.&#x20;

Some social media users have [speculated](https://x.com/chrisd9r/status/1777728428621328820) that the removal of this feature may be related to an April 2024 [article](https://www.theguardian.com/world/2024/apr/05/top-israeli-spy-chief-exposes-his-true-identity-in-online-security-lapse) by the Guardian which identified the head of Israel's Unit 8200, an Israeli Intelligence Corps unit of the Israel Defense Forces (IDF). According to the investigative methodology described in the article, Ghunt may have been used to identify Sariel.

## Ethical Considerations

This project is under [AGPL Licence](https://choosealicense.com/licenses/agpl-3.0/). The developers require that it is used "only in personal, criminal investigations, pentesting, or open-source projects."

## Guides and articles

Jake Creps: [OSINT Newsletter - Ghunt](https://osintnewsletter.com/p/ghunt)

Joseph Jones: [Investigating Google Accounts with GHunt](https://os2int.com/toolbox/investigating-google-accounts-with-ghunt/)

## Tool provider

"mxrch", self-described as "a group of cybersecurity enthusiasts" and a Capture the Flag (CTF) "team from France founded in 2019".&#x20;

Github: [https://github.com/mxrch](https://github.com/mxrch)

Twitter: [https://twitter.com/mxrchreborn](https://twitter.com/mxrchreborn)

Website: [https://hideandsec.sh/books/about-us](https://hideandsec.sh/books/about-us)

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| hande           |
|                 |
