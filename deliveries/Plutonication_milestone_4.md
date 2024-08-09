# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
* **Milestone Number:** 4

**Context** Plutonication Extension

Chrome extension that injects the Plutonication code into any dApp that is compatible with polkadot.js-extension.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | [Plutonication](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/packages/extension/LICENSE) | MIT | 
| 0b.  | Documentation | Documentation for building the Plutonication is in [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery-4/README.md). Inline documentation is also provided. | |
| 0c. | Testing and Testing Guide | E2E testing: Download [Plutonication Extension from the Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) and [PlutoWallet from Google Play](https://play.google.com/store/apps/details?id=com.rostislavlitovkin.plutowallet). Then, you can try to go to any dApp, for example https://polkadot.js.org/apps/ and you should see the Plutonication modal. Just scan the QR code by your phone and connect your wallet. |  |
| 0d. | Docker | Not provided |  |
| 0e. | Article | [Medium article](https://medium.com/@rostislavlitovkin/plutonication-cross-platform-connection-for-polkadot-wallets-a237c342d616) | |
| 1. | Plutonication Extension | https://github.com/RostislavLitovkin/Plutonication/tree/Grant-delivery-4/packages/extension |  |
| 1a. | inject(..) | [inject](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/extension/src/page.ts#L10) |  |
| 1b. | onReceivePublicKey | [onReceivePublicKey](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L46) |  |
| 1c. | signPayloadAsync | [signPayload](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L78) |  |
| 1d. | payload_signature | [payload_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L83) |  |
| 1e. | signRawAsync | [signRaw](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L91) |  |
| 1f. | raw_signature | [raw_signature](https://github.com/RostislavLitovkin/Plutonication/blob/4ee240477af659d83e724139f403544fdb2afb47/packages/plutonication/src/PlutonicationDAppClient.ts#L96) |  |
| 2. | Chrome browser extension | Published to [Chrome web store](https://chromewebstore.google.com/detail/plutonication-extension-p/lndgpmicmhdhbmaebmghjjhaoglnaakl) | |


**Additional Information**
To reduce code duplication and to increase code sustainability, we put the PlutonicationExtension project inside of the Plutonication repository.
