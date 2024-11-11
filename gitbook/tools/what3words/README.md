---
description: >-
  A proprietary geocode system which identifies any location on the surface of
  the earth to a resolution of 3 metres. The identifier is a unique combination
  of three words, available in 60 languagues.
---

# what3words

## URL

http://what3words.com/

## Description

<figure><img src=".gitbook/assets/screenshot1.JPG" alt=""><figcaption><p>THE <strong>WHAT3WORDS INTERFACE, SHOWING THE 3M X 3M SQUARE ON MAGDALEM BRIDGE IN OXFORD, UK, WHICH CORRESPONDS TO THE EXAMPLE 3-WORD PHRASE </strong><em><strong>BLEAT.MENTAL.LOCATE</strong></em><strong>.</strong></p></figcaption></figure>

what3words is a simple, clear and rapid way to communicate locations on earth. The world has been divided into 3m x 3m squares (around 57 trillion of them), and an unique identifier combining three words is assigned to each one. The app is available for  mobile phones and PC browsers and an AP[^1]I  is available to automate the conversion between what3word addresses and geographic co-ordinates.

What3words can be used to communicate locations without numeric format geographic co-ordinates, which is particularly helpful when communication channels are poor quality, or unreliable. It is usable in many countries to summon the emergecy services, e.g. Mountain Rescue, pinpoint meeting places, specify accurate deliveries, e.g. Hermes and Ikea use it, and advertise accurate locations. Its use in Open Source research can cover any of these applications for the technology, as part of an investigation, or simply as a device to share locations between researchers.

{% hint style="danger" %}
It is possible to use what3words in a large range of languages. The 3-word phrase assignment across the grid squares is entirely different and unrelated in each language. Therefore there is no relationship between the 3-word phrases in different languages for the same grid square. They are not translations of word meanings between languages. When a user sets up a Second Language in the system, two sets of 3-word phrases are displayed simultaneously, with the Second Language phrase below the First Language phrase.
{% endhint %}

## The Interface

{% hint style="info" %}
There is considerable variation between the app version of what3words and the PC browser version and some functions only exist in one version of the app, e.g. the compass function only exists in the mobile app version.
{% endhint %}

{% tabs %}
{% tab title="USER INPUTS" %}
* A map pin geographic location&#x20;
* A what3words location phrase
* A text address
* A pair of numeric location co-ordinates
{% endtab %}

{% tab title="WHAT3WORDS OUPUT" %}
* A map pin geographic location&#x20;
* A what3words location phrase
{% endtab %}

{% tab title="USE CASES" %}
* Input a location and convert it to another format ( co-ordinates, map pin, postal address or phrase)
* Input a location and share it via a selection of media
* Save a location to a user account
* Navigate a journey using a location
* Copy a location
{% endtab %}

{% tab title="USER INPUT OPTIONS" %}
* Type co-ordinates

<figure><img src=".gitbook/assets/screenshot2.JPG" alt=""><figcaption></figcaption></figure>

* Type 3 word phase
* Place yellow pin man icon onto map
{% endtab %}
{% endtabs %}

Using the yellow pin man icon on the map displays any Google Maps imagery relating to the location selected.

{% hint style="info" %}
The app will not draw the 3m square within the StreetView imagery.
{% endhint %}

<figure><img src=".gitbook/assets/screenshot3.JPG" alt=""><figcaption><p><strong>THE WHAT3WORDS LOCATION EXAMPLE </strong><em><strong>Yes,</strong></em><strong>  BEING SHOW ON GOOGLE MPAS BY DROPPING THE YELLO PIN MAN ICON ONTO THE STREET MAP IN THE APPROPRIATE SQUAR</strong>E.</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>1</td></tr></tbody></table>

## Requirements

* Users wishing to use the facility to save locations will need an account, which is free to set up.
* Apps and browsers need permissions to detect the user's current location for certain functionality to be available.

## Limitations

* Very similar phrases for proximate squares could cause error/confusion: At the time of writing 11/11/24, recent research on what3words has revealed some flaws in the system regarding its aim not to assign similar 3 word phrases to nearby areas. This similarity also includes homophones, i.e. words which sound similar, rather than look similar. This is because what3words is used to communicate over voice channels, particularly for the emergency services, so similar-sounding or similar-looking phrases at proximate squares is likely to lead to errors in location. The [BBC reported](https://www.bbc.co.uk/news/technology-56901363) that a researcher had found 'thousands' of 3 word phrases which were either very similar looking, or similar sounding, had been assigned to locations less than 1km  apart. On entering a user 3 word address in the Account Setup page, the locations of other similar addresses are displayed,&#x20;



<figure><img src=".gitbook/assets/screenshot7.JPG" alt=""><figcaption><p> <strong>WHAT3WORDS INTERFACE SHOWING AUTO-COMPLETED OPTIONS FOR A USER-INPUT, 3-WORD LOCATION PHRASE WITH THEIR DIFFERING GEOGRAPHICAL DETAILS</strong></p></figcaption></figure>

* The accuracy of what3words is restricted to a 3m square, whereas  geographical grid co-ordinates theoretically references a single point and can offer greater accuracy. In practice, the 3m square level of accuracy is satisfactory for very many purposes.
* what3words help is structured around a set number of use cases and FAQ, which, understandably, are not focused on Open Source research. Its natural language help interface often returns that nothing is found in response to queries which correspond to tutorial material available online.

## Ethical Considerations

\[\[The ethical considerations of each tool should be described.]]

## Guide

[what3words provides a How to Use guide for the mobile app.](https://what3words.com/how-to-use-the-what3words-app)

## Tool Provider

what3words

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer |
| --------------- |
| Sophie Tedling  |
|                 |

[^1]: Application Programming Interface
