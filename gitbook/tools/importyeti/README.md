---
updated: '2025-10-27'
description: 'Search US customs inbound sea shipment records, find company suppliers.'
---

# ImportYeti

## URL

[https://www.importyeti.com/](https://www.importyeti.com/)

## Description

Every sea shipment into the United States requires a bill of lading. ImportYeti has acquired all the bills of lading data from January 2015 [through a freedom of information request to US Customs](https://www.importyeti.com/faqs). ImportYeti provides free access to the data online. Bills of lading include fields like: Purchaser and supplier names, supplier country, weight of goods, ports shipped to and from, and product HS ([Harmonised System](https://en.wikipedia.org/wiki/Harmonized_System)) code which classifies traded products.

The tool was built to help people find suppliers of goods (e.g. manufacturers that make a product they want to sell). An OSINT researcher might use it to investigate sourcing of goods from unethical suppliers, or sanctions violations. The free search allows for searching by company name, supplier, or product. Note that you must search by a company's legal name.

It's worth signing up (it's free), as ImportYeti requires a login after 25 page views per IP address. You might be able to get free access to ImportYeti's [power query](https://www.importyeti.com/power/us) and downloads as an OSINT researcher - see [this page](https://www.importyeti.com/pricing/custom-plan?source=survey) (only visible when logged in). Power query is an advanced search - it allows you to filter by multiple values at a time, e.g. company name, supplier name, product (HS) code, address, supplier country, vessel name etc.

Here are screenshots illustrating the kinds of data you can get through ImportYeti:

<figure><img src=".gitbook/assets/Screenshot 2024-09-25 at 11.30.10.png" alt=""><figcaption><p>The top of the search results for a randomly selected company</p></figcaption></figure>

The 'Smart Bookmarks' button allows you to save companies in groups, which could be useful for different investigations or types of companies (it's only there when you are logged in). The 'Downloads' button allows for download of the bills of lading, or the full suppliers list. Downloads require you to be signed in with custom plan access.

Here's the top of Harrington Moore's table of suppliers, i.e. the list of all suppliers from which they receive shipped goods:

<figure><img src=".gitbook/assets/Screenshot 2024-09-25 at 11.30.36.png" alt=""><figcaption><p>Part of the supplier data for that company</p></figcaption></figure>

If you click on a supplier name, you can see all the companies in the database to which they ship goods.

Here's an example of how a company's product HS codes are represented:

<figure><img src=".gitbook/assets/Screenshot 2024-09-25 at 11.30.49.png" alt=""><figcaption></figcaption></figure>

The HS code data is highly structured. For instance in this example, you can see that 'Iron/Steel products' is the largest category of products that Harrington Moore receives, and the sub-categories are shown within that. This is useful if you are looking for very particular kinds of shipped goods. ImportYeti's [page](https://www.importyeti.com/hs-codes) explaining HS codes is useful.

* [x] Free
* [ ] Partially Free
* [ ] Paid

Free signup for basic searches. Request OSINT researcher access for power query and downloads.

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

## Requirements

Signup via e-mail is recommended as ImportYeti requires a login after 25 page views per IP address.

You'll need to be granted 'custom plan' access in order to use the [power query](https://www.importyeti.com/power/us) and download query results, and to download CSVs of a company's supplier list and the actual bills of lading.

## Limitations

The data is only for sea shipments into the United States. Goods transported by road and air are not included.

Companies can request that their import records are made private (see the US Customs and Border Protection's '[Electronic Vessel Manifest Confidentiality](https://www.cbp.gov/trade/automated/electronic-vessel-manifest-confidentiality)').

Sometimes supplier contact details aren't on the site. See 'How do I find a supplier's contact info?' in ImportYeti's [FAQs](https://www.importyeti.com/faqs) for tips on how to find them.

Their data does not extend before 2015.

To access trade data for countries other than the US, there are a range of commercial providers including (in alphabetical order) [Exportgenius](https://www.exportgenius.in/), [ImportGenius](https://www.importgenius.com/), [Panjiva](https://www.spglobal.com/market-intelligence/en/solutions/products/panjiva-supply-chain-intelligence?utm_source=panjiva\&utm_medium=website\&utm_content=homepage), and [Sayari](https://sayari.com). There are many more, and new suppliers can come up regularly.

## Ethical Considerations

\-

## Guide

Steve Chou: [How To Use ImportYeti To Find Your Competitor’s Suppliers For Free](https://mywifequitherjob.com/importyeti/#What_Is_ImportYeti) (Ignore the site's funny name, the guide is useful! It includes a comparison with three similar tools, Panjiva, ImportGenius and Jungle Scout.)

ImportYeti: [FAQ page](https://www.importyeti.com/faqs)

ShipHub: [Up your sourcing game with ImportYeti](https://www.shiphub.co/up-your-sourcing-game-with-importyeti/)

## Tool provider

ImportYeti, LLC, U.S.

## Advertising Trackers

* [x] This tool has not been checked for advertising trackers yet.
* [ ] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer    |
| ------------------ |
| Katherine de Tolly |
|                    |
