# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Silent Data Polkadot Integration ](https://github.com/annazambon/Grants-Program/blob/master/project_silentdata.md)
* **Milestone Number:** 1

**Context**

Silent Data is a platform for proving properties of private off-chain data in blockchain smart contract applications. This milestone extends Silent Data to support Substrate based blockchains, with Polkadot being the main focus. The Silent Data web application now includes an integration with the polkadot{.js} wallet. Support for Sr25519 and Secp256k1 signatures has been added to allow signature verification in either ink! smart contracts or Substrate pallets.

In order to improve the developer experience a Node.js library for interacting with the Silent Data API has been developed. We have also created both an example ink! smart contract and Substrate pallet to demonstrate how Silent Data can be used to securely provide off-chain data to blockchain applications.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.  | License |[Node.js library](https://github.com/appliedblockchain/silentdata-node-public/blob/main/LICENSE) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot-public/blob/main/LICENSE) | ...|
| 0b. | Documentation |[Silent Data whitepaper](https://www.linkedin.com/smart-links/AQEE0cyaT_nw0g) <br/>[Node.js library](https://github.com/appliedblockchain/silentdata-node/blob/main/README.md) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/README.md) | ...|
| 0c.  | Testing Guide |[Guide](https://docs.google.com/document/d/1B5woRIl_ZNuahx007V6nXmjW3_Ne4aQ4kVFB-I_Bu0M/edit?usp=sharing) | ...|
| 0d.  | Docker |[Node.js library usage example](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/examples/Dockerfile) <br/>[Silent Data pallet](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/docker/Dockerfile.node) | ...|
| 0e.  | Article |[Polkadot Foundation Partnership Silent Data](https://www.linkedin.com/pulse/polkadot-foundation-partnership-silent-data-silentdata)| ...|
| 1.  | Library |[silentdata-node](https://github.com/appliedblockchain/silentdata-node) | ...|
| 2.  | Smart Contract |[silentdata-polkadot](https://github.com/appliedblockchain/silentdata-polkadot) | ...|
| 3.  | Extension| ...| ...|

**Additional Information**

The reviewer will need to provide their github usernames to be given read access to the `silentdata-defi-core` and `silentdata-defi-app` repositories.
