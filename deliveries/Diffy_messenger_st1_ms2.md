# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Diffy_chat.md 
* **Milestone Number:** 2

**Context** 

P2p channels between users are set by usernames using WebRTC. Thу Diffy Chat Substrate pallet is used for exchanging SDP offers. For address discovery of NAT users any public STUN server can be used. All messages between users are encrypted with user’s ed25519 keys and transactions are signed using sr25519 keys (to support Polkadot compatibility). Both keys are tied to usernames so that users do not have to generate ed25519 keys manually. In this milestone we have also added a “contacts” feature.

**Deliverables**
In this milestone our team has executed the following deliverables

- a contacts list feature;
- a web messenger dapp MVP.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/Belsoft-rs/diffychat-client/blob/master/README.md) | Explaining basic features |
| 0c. :heavy_check_mark: | Testing Guide | [Diffy chat pallet](https://github.com/Belsoft-rs/diffychat-pallet#getting-started) | "How To" guide |
| 0d. :heavy_check_mark: | Article | [BelSoft Dev on Medium](https://medium.com/@belsoft/diffy-chat-a-secured-decentralized-messenger-194ad74d6669) | An article on Medium that explains what was achieved, how to use the new Dapp and what are the benefits of using the Diffy Chat messenger |
| 1. :heavy_check_mark: | Contacts list feature | [See here](https://github.com/Belsoft-rs/diffychat-client/blob/master/src/components/messenger/contacts/contacts.js) | The contact list [feature](https://github.com/Belsoft-rs/diffychat-pallet/blob/5ff7e47cf8b6a4bf6e26a55c3836dabe44d047d5/pallets/template/src/lib.rs#L168), that allow users to tie real names to contact’s wallet addresses and store them encrypted in a blockchain. | 
| 2. :heavy_check_mark: | Web messenger dapp MVP | [See here](https://belsoft-rs.github.io/diffychat/index.html) | The Diffy chat web messenger dapp with authorization via Polkadot.js keys, p2p messaging using developed DOTRTC library and contacts list. | 

**Additional Information**

A short video showing delivered functionality:

[![Preview](https://github.com/beoblock/Grant-Milestone-Delivery/assets/126072104/7fee3eb1-b81e-4ce2-ac20-1ffd6b04216a)](https://media.belsoft.rs/diffychat/diffychat.mp4)
