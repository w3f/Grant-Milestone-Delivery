# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [SubstrateNetApi License](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) | Unity3DExample is missing the license file |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | They also use inline documentation |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md#testing-guide) | Looks good |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [readme](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | Not really an article, but at this price, it’s not such a big issue. |
| 1. | Basic Wallet | <ul><li>[x] </li></ul> | [SubstrateNetWallet](https://github.com/dotmog/SubstrateNetApi/tree/origin/SubstrateNetWallet) | |
| 1a. | AES wallet file encryption | <ul><li>[x] </li></ul> | [ManagedAes.cs](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetWallet/ManagedAes.cs) | Implemented, I haven’t checked the security of the implementation |
| 1b. | Create, subscription to account and updates | <ul><li>[x] </li></ul> | [Wallet.cs](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWallet/Wallet.cs) | Implemented |
| 1c. | Wallet events | <ul><li>[x] </li></ul> | [SubscribeAccountInfoAsync](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWallet/Wallet.cs#L269) | Implemented |
| 2. | Unity3D Examples | <ul><li>[ ] </li></ul> | [Unity3DExample](https://github.com/dotmog/Unity3DExample) | Ideally the readme should contain more information. |
| 2a. | Connection example | <ul><li>[x] </li></ul> | [MetaDataCrawler.cs](https://github.com/dotmog/Unity3DExample/blob/master/Assets/Scripts/MetaDataCrawler.cs#L11) | |
| 2b. | Wallet examples | <ul><li>[ ] </li></ul> | [WalletTest.cs](https://github.com/dotmog/SubstrateNetApi/blob/3d2a4f42260baac8961bf887db2cb9f6e1a3df77/SubstrateNetWalletTest/WalletTest.cs#L175) | But no wallet example as part of Unity3D as far as I can see.  |
| 3. | Documentation | <ul><li>[x] </li></ul> | [readme of api](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | |

## General Notes

- Unity3DExample is missing the license file 
- Unity3DExample readme should ideally contain a little bit more information or at least link to the other repo.
- Unity3DExample doesn't seem to contain a wallet example