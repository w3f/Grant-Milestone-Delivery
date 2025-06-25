# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [application](https://github.com/w3f/Grants-Program/blob/master/applications/ledgerUpgrade.md) 
* **Milestone Number:** 1

**Context** (optional)
The primary objective of this project was to upgrade the [Polkadot Universal App](https://github.com/Zondax/ledger-polkadot)  to meet the evolving demands of Substrate-based blockchain networks, especially those with specialized configurations.
This initiative responds to the increasing need for secure hardware wallet support across a broader ecosystem—including projects like [Mythical Games](https://mythicalgames.com/) and the upcoming evolution of AssetHub, currently codenamed "Plaza."

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.**| License | https://github.com/Zondax/ledger-polkadot?tab=Apache-2.0-1-ov-file#readme |  | 
| **0b.**  | Documentation | https://github.com/Zondax/ledger-polkadot?tab=readme-ov-file#ledger-polkadot-app | | 
| **0c.** | Testing | https://github.com/Zondax/ledger-polkadot/tree/main/tests , https://github.com/Zondax/ledger-polkadot/tree/main/tests_integration , https://github.com/Zondax/ledger-polkadot/tree/main/tests_zemu
| **0d.** | Docker |The app is already officially available and can be installed from ledger Live. During testing phase we also provide the possibility to install the app from our hub https://hub.zondax.ch/polkadot
| 0e. | Article | https://zondax.mymidnight.blog/polkadot-universal-ledger-app-upgrade/ |  |
| 1. | Code General structure |  https://github.com/Zondax/ledger-polkadot | |
| 2a. | Code Ledger Application code |  https://github.com/Zondax/ledger-polkadot/releases/tag/v100.0.14 |  |
| 2b. | Code Ts Library Application code | https://github.com/Zondax/ledger-substrate-js  https://github.com/Zondax/ledger-substrate-js/releases/tag/v1.1.2 |  | 

**Additional Information**

The Polkadot Ledger app has been officially released by Ledger after successfully completing a mandatory security audit, ensuring a high level of reliability and safety. 
Currently, Ledger Live, Nova Wallet, and Talisman have already integrated the updated library and fully support the new version.
Meanwhile, other wallets such as PolkadotJS and Subwallet are actively working on updates to ensure compatibility with the new features.

