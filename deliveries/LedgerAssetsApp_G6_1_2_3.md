# Milestone Delivery :mailbox:

![](https://i.imgur.com/dNlNRtv.png)

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://docs.google.com/document/d/1C-rSS84BSBwpb6S64U0VFeZdty3ZdAjJ1rUpT2QJma4/edit#
* **Milestone Number:** M1 Early Integration & M2 Feature Complete + Maintenance &  M3 Review - App Store release



**Context** 

This proposal was made with the objective to develop a Ledger app for Statemine and Statemint.These apps require specific support for both Multisig and Assets pallets.

**Deliverables Milestone 1 Early Integration** 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| Item 1 - Req 1 | Substrate-based app based on Polkadot chain and Ledger app | **Statemine** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276  <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276  |   |
| Item 1 - Req 2 | Extend support for multisig pallet | **Statemine** https://github.com/Zondax/ledger-statemine/blob/main/app/src/substrate/substrate_dispatch_V6.c#L230-L269  <br> <br>  **Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V6.c#L237-L276 |    |   | 
| Item 1 - Req 3 | Support for both ed25519 and sr25519 signature schemes |  **SR25519-Statemine** https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br>  **SR25519-Statemint** https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/tests_zemu/tests/sr25519.test.ts#L43-L203  <br> <br> **ED25519 - Statemine** https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/standard.test.ts#L40-L240 <br><br> **ED25519 - Statemint** https://github.com/Zondax/ledger-statemint/blob/main/tests_zemu/tests/standard.test.ts#L40-L240    |   |
| Item 1 - Req 4 | Extend support for Assets pallet |  **Statemine** <br><br> Documentation: https://github.com/Zondax/ledger-statemine#assets  <br> <br> Code: https://github.com/Zondax/ledger-statemine/blob/492414804baae586d051f8534dd9b1466369ef3b/app/src/substrate/substrate_dispatch_V6.c#L334-L536 <br><br> **Statemint** <br><br> Documentation https://github.com/Zondax/ledger-statemint#assets  <br><br> Code: https://github.com/Zondax/ledger-statemint/blob/ae36d96f26d0e371f61dcd77ae10465aaf8ea912/app/src/substrate/substrate_dispatch_V7.c#L372-L519 |   |
| Item 1 - Req 5 | Integration example and npm package support | Code https://github.com/Zondax/ledger-substrate-js/blob/d3e206606164c6b58f8cfefa24025099cd2eb683/src/index.js#L364-L370  <br><br> npm package: https://www.npmjs.com/package/@zondax/ledger-substrate <br><br> Statemine integration example: https://github.com/Zondax/ledger-statemine/blob/main/tests_zemu/tests/standard.test.ts#L154-L193  <br><br> Statemint integration example: https://github.com/Zondax/ledger-statemint/blob/main/tests_zemu/tests/standard.test.ts#L154-L193 |   |

**Deliverables Milestone 2 Feature Complete + Maintenance** 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.  | License | **Statemine** https://github.com/zondax/ledger-statemine/blob/master/LICENSE <br> <br> **Statemint** https://github.com/zondax/ledger-statemint/blob/master/LICENSE <br> <br> Substrate RS https://github.com/zondax/ledger-substrate-rs/blob/master/LICENSE <br> <br> Polkadot.js  https://github.com/zondax/ledger-polkadot-js/blob/master/LICENSE | Apps have been released under Apache License 2.0  |
| 0b. | Documentation | **Statemine** https://github.com/Zondax/ledger-statemine/blob/main/docs/APDUSPEC.md <br> <br>   **Statemint** https://github.com/Zondax/ledger-statemint/blob/main/docs/APDUSPEC.md| Here we specify the functionality that the apps cover |
| 0c. | Testing Guide | While we recommend using the published apps in Ledger Live to test, the following instructions indicate how to build and run unit and integration tests <br><br> **Statemine** https://github.com/Zondax/ledger-statemine/blob/master/docs/build.md <br> <br> **Statemint** https://github.com/Zondax/ledger-statemint/blob/master/docs/build.md | Files contain the installation guide   |
| 1 | Source code | **Statemine** https://github.com/zondax/statemine <br> <br> **Statemint** https://github.com/zondax/statemint | Source code is publicly available in GitHub.  |
| 2 | Deliverable | **Statemine** https://github.com/Zondax/ledger-statemine/releases/tag/v7.9230.0 <br><br> **Statemint** https://github.com/Zondax/ledger-statemint/releases/tag/v7.9230.0  | These are the latest app releases  |

**Deliverables Milestone 3 Review App Store release**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1 | Official Release | <br><br> **Statemine**  https://github.com/LedgerHQ/app-statemine/releases/tag/v6.900.2 <br><br> **Statemint** https://github.com/LedgerHQ/app-statemint/releases/tag/v6.900.2 | Both apps were forked from the Zondax repository and fully reviewed and released by Ledger. Apps can be installed from Ledger Live. 
|

**Additional Notes**

We are working on continuous improvement of these apps and we will keep them updated under a new agreement that has already been signed. 
