# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Jeton_Network_follow_up.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/blob/7ccfbe97a39861471528d451e56b480ec9b4d63f/LICENSE) | Apache 2 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [wiki](https://github.com/JetonNetwork/SubstrateNetApi/wiki) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [wiki](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Testing) | Successfully running tests on Linux requires [patch](https://github.com/JetonNetwork/SubstrateNetApi/tree/a76220c46b0987ea8605a9ec685016dfe00ae4f0) |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [medium](https://medium.com/polkadot-play/project-introduction-681820988416) | —
| 1a. | Extend Generic Types for Vec & Option | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/tree/bab8aaf23a63d5c6115af9a9d424ef358602851c/SubstrateNetApi/Model/Types/Struct) | — |
| 1b. | Implement Extension Custom Pallets & Types | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/tree/bab8aaf23a63d5c6115af9a9d424ef358602851c/SubstrateNetApi/Model/Custom) | — |
| 1c. | Generic Approach on Encode & Decode of Types | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/blob/bab8aaf23a63d5c6115af9a9d424ef358602851c/SubstrateNetApi/TypeConverters/GenericTypeConverter.cs) | — |
| 1d. | Implement Rust special enums | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/Open-Grants-Program/issues/9#issuecomment-860231871) | — |
| 2. | Reintegrate Schnorrkel | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/commit/3a844139cbaf38d09b3e8d06671b2efd32bbcdcc) | — |
| 2a. | Publish Schnorrkel project | <ul><li>[x] </li></ul> | [nuget](https://www.nuget.org/packages/Schnorrkel/) | license & copyright added with v1.1.3 |
| 2b. | Implement SR25519 | <ul><li>[x] </li></ul> | [gh](https://github.com/dotmog/Schnorrkel/blob/main/Schnorrkel/Sr25519v091.cs) | — |
| 3. | Add mnemonic seed | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/commit/01abe3aa3d9e8aca0bf63a5c6f9bbfbd2eb780a0) | — |
| 3a. | Recovery on lost password or wallet file | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/blob/503c3c1b73ab4a2e6fd6fcf3b653af0b5375da31/SubstrateNetWallet/Wallet.cs#L125) | — |
| 6. | Documentation | <ul><li>[ ] </li></ul> | gh | "Documentation referencing prev. milestone 1 https://github.com/w3f/Grant-Milestone-Delivery/pull/102#issuecomment-795929390"  |
| 6a. | Inline Documentation | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApi/search?q=%3Csummary%3E) | XML docs |
| 6b. | Wiki | <ul><li>[x] </li></ul> | [wiki](https://github.com/JetonNetwork/SubstrateNetApi/wiki) | — |
| 6c. | Documentation on workflow for adding types and maintaining the api | <ul><li>[x] </li></ul> | [wiki](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Types) | — |
| 6d. | Documentation how to setup live node-template testing | <ul><li>[x] </li></ul> | [wiki](https://github.com/JetonNetwork/SubstrateNetApi/wiki/Testing#node-template) | Successfully running tests on Linux requires [patch](https://github.com/JetonNetwork/SubstrateNetApi/tree/a76220c46b0987ea8605a9ec685016dfe00ae4f0) |
| 6e. | Custom Test | <ul><li>[x] </li></ul> | [gh](https://github.com/JetonNetwork/SubstrateNetApiExt/tree/6c9f5456ee7ea4a306eb0793bc277ae30eac6bf8) | JetonNetwork/SubstrateNetApiExt |
| 7. | Jeton Network | <ul><li>[x] </li></ul> | [www](https://www.polkadotplay.com) | jeton.network -> polkadotplay.com |
| 7a. | Jeton Network | <ul><li>[ ] </li></ul> | [medium](https://medium.com/polkadot-play/project-introduction-681820988416) | "Article and Blog about this open grant and the deliverables, at least one deep dive post into each milestone subject area, SubstrateNetApi, GameEngine, ServiceLayer & ConnectFour (if accpeted)" |


## General Notes

-
