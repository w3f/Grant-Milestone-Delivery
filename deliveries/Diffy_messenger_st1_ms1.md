# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Diffy_chat.md 
* **Milestone Number:** 1

**Context** 

P2p channels between users are set by usernames using WebRTC. This Substrate pallet is used for exchanging SDP offers. For address discovery of NAT users any public STUN server can be used. All messages between users are encrypted with user’s ed25519 keys and transactions are signed using sr25519 keys (to support Polkadot compatibility). Both keys are tied to usernames so that users do not have to generate ed25519 keys manually. This pallet will also include a “contacts” feature in the next milestone.

**Deliverables**
In this milestone our team has executed the following deliverables

- a Substrate pallet for chat initiation;
- a DOTRTC library for p2p transport implementation with test html pages for message passing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/Belsoft-rs/diffychat-pallet#readme) | Explaining basic features |
| 0c. :heavy_check_mark: | Testing Guide | [DOTRTC usage](https://github.com/Belsoft-rs/diffychat-dotrtc#usage); [Substrate pallet](https://github.com/Belsoft-rs/diffychat-pallet#getting-started) | "How To" guide |
| 1. :heavy_check_mark: | Diffy chat pallet | [See here](https://github.com/Belsoft-rs/diffychat-pallet) | The Diffy chat Substrate pallet to [register usernames](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/pallets/template/src/lib.rs#L106), [send and approve WebRTC offers](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/pallets/template/src/lib.rs#L86) for chat initiation. | 
| 2. :heavy_check_mark: | DOTRTC library | [See here](https://github.com/Belsoft-rs/diffychat-dotrtc) | This library includes [method for username registration](https://github.com/Belsoft-rs/diffychat-dotrtc/blob/main/src/Blockchain.js#L127), [an API class for organizing p2p communication](https://github.com/Belsoft-rs/diffychat-dotrtc/blob/main/src/PeerChannel.js#L3), methods for [splitting packets into chunks](https://github.com/Belsoft-rs/diffychat-dotrtc/blob/main/src/PeerChannel.js#L81) (and [reassembling](https://github.com/Belsoft-rs/diffychat-dotrtc/blob/main/src/PeerChannel.js#L132) on the receiver’s end). For secure messaging between two participants an [e2e encryption using the ed25519 algorithm](https://github.com/Belsoft-rs/diffychat-dotrtc/blob/main/src/Blockchain.js#L180) is implemented.  | 
| 3. :heavy_check_mark: | HTML test page | [See here](https://belsoft-rs.github.io/diffychat/index.html) | An HTML test page for DOTRTC library testing (setting a p2p channel between 2 users using the DOTRTC library). | 

**Additional Information**

A short video showing delivered functionality:

[![Delivery vid pic ms1](https://user-images.githubusercontent.com/126072104/232100957-aa315c8c-2c3f-440e-b2d3-0c2055c47eaf.jpg)](https://media.belsoft.rs/diffychat/diffy.mp4)
