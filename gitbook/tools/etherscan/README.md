---
description: >-
  An explorer that allows researchers to track wallets, transactions and more on
  the Ethereum blockchain.
---

# Etherscan

## URL

[https://etherscan.io/](https://etherscan.io/)

## Description

Ethereum is a blockchain-based network. Its native cryptocurrency Ether (ETH) is currently the second-largest cryptocurrency in terms of value. Open source researchers can use Etherscan to look up data on the Ethereum blockchain, for instance addresses, transactions, [smart contracts](https://ethereum.org/en/smart-contracts/) and more.

#### **Addresses**

By typing any Ether address in the search bar, researchers get an overview of the current balance of the wallet’s assets in Ether and USD, the dates when the first and the last transactions were sent and an overview of all transactions.

<figure><img src=".gitbook/assets/Screenshot 2024-08-01 at 14.24.47.png" alt=""><figcaption><p>The <a href="https://etherscan.io/address/0xd8da6bf26964af9d7eed9e03e53415d37aa96045">Ethereum address</a> of Ethereum co-founder Vitalik Buterin according to <a href="https://www.forbes.com/sites/ninabambysheva/2021/05/12/vitalik-buterin-moves-13-billion-worth-of-ether-but-where/">Forbes</a>.</p></figcaption></figure>

#### **Ethereum usernames**

Since Ether addresses are long and not very user-friendly, services like [Ethereum name service](https://ens.domains/) allow users to buy a username that ends with .eth. If open source researchers find such a username online, they do not necessarily need to know the associated Ether address but can simply search for this username.&#x20;

Some Ethereum fans use their .eth username on social media platforms which can be helpful in terms of tracing digital footprints during open source investigations. Ethereum co-founder Vitalik Buterin, for instance, uses vitalik.eth for his [X account](https://x.com/VitalikButerin). A search for this name on Etherscan brings up the associated Ether address:

<figure><img src=".gitbook/assets/Screenshot 2024-08-01 at 14.32.51.png" alt=""><figcaption></figcaption></figure>

#### **Search Etherscan via Google**

[Google](https://x.com/nalin/status/1656753830862942208) displays the ETH balance (via Etherscan) directly on top of the search results if someone searches for an Ether address:

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

However, our own tests in July 2024 showed that this does not always work. Sometimes the result comes back with an empty info box:

<figure><img src=".gitbook/assets/Screenshot 2024-07-31 at 20.36.23.png" alt="" width="375"><figcaption></figcaption></figure>

It is also possible to search for a [username](https://cryptoslate.com/google-adding-ethereum-name-service-data-into-search-results-through-etherscan/) but this method currently seems to be even less reliable.

#### Transactions

Each transaction has its own transaction hash. Searching for this hash on Etherscan brings up an overview of transaction details:

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption><p>This transaction was successful and took place in block number 20393430 on July 26, 2024. It was sent from an address ending with 003 to vitalik.eth.</p></figcaption></figure>

#### Analytics

Etherscan also provides various types of analytics. Open source researchers can use those analytics to gain in-depth insights into what is happening with specific addresses over time.

Each address site has an “analytics” button. Clicking on it, opens a list of options including an overview of the Ether balance of an address. The following address has had its highest Ether balance in August 2016 but it had its highest value in USD in November 2021:

<figure><img src=".gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

The “transactions” tab shows a time series of transactions over time (the exact time frame can be chosen by adapting the date on the right hand side or by moving the slider).

<figure><img src=".gitbook/assets/Screenshot 2024-08-01 at 16.45.55.png" alt=""><figcaption><p>An overview of vitalik.eth’s transactions between January 2020 and July 2024. Outgoing and incoming addresses have different colours (black and green).</p></figcaption></figure>

## Cost

* [x] Free
* [ ] Partially Free
* [ ] Paid

## Level of difficulty

<table><thead><tr><th data-type="rating" data-max="5"></th></tr></thead><tbody><tr><td>2</td></tr></tbody></table>

The tool is easy to use but beginners might need some time to learn how to interpret the information it provides.

## Requirements

No requirements.&#x20;

Open source researchers who sign up with an e-mail address can use some additional features like creating a watchlist of addresses and receiving e-mail notifications if transactions from or to those addresses occur.

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption><p>Registered users can set up watch lists for up to 50 addresses.</p></figcaption></figure>

## Limitations

While some users share their Ether addresses on social media or other online platforms, it is important to note that most Ether addresses can not be easily linked to a specific person or organization.&#x20;

Transactions are publicly visible via the blockchain but people who are involved in illicit activities might use [mixer services](https://www.coindesk.com/learn/are-crypto-mixers-legal/) to obscure the original sender and recipients of payments making it more challenging for open source investigators to deanynomyize transactions. Trying to track down the person behind a crypto transaction can often lead to dead ends.

## Ethical Considerations

Etherscan has become the target of scams and phishing attempts. In 2023, [cloned Etherscan sites](./#phishing-scammers-have-cloned-the-websites-of-crypto-media-outlet-blockworks-and-ethereum-blockchain) were set up to trick users into providing access to their wallets. In 2024, [phishing ads](https://crypto.news/etherscan-users-targeted-in-major-phishing-campaign-via-on-site-ads/) were found on Etherscan. Those scams are aimed at gaining access to users' wallets and therefore their Ether assets. Open source researchers should be aware of the prevalence of such incidents in the crypto world.

## Guides

Etherscan Information Center: [Tutorials](https://info.etherscan.com/tag/tutorials/).

## Tool provider

Block Solutions, Malaysia

## Advertising Trackers

* [ ] This tool has not been checked for advertising trackers yet.
* [x] This tool uses tracking cookies. Use with caution.
* [ ] This tool does not appear to use tracking cookies.

| Page maintainer            |
| -------------------------- |
| Johanna Wild - Bellingcat  |
|                            |
