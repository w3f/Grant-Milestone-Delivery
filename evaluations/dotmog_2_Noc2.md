# Evaluation

- **Status:** In Progress 
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/265
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache](https://github.com/dotmog/SubstrateNetApi/blob/origin/LICENSE) and [AGPL](https://github.com/dotmog/substrate/blob/dotmog_v3.0.0/bin/node/pallets/dotmog/LICENSE.md) | Looks good |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [SubstrateNetApi readme](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | Looks good |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Testing Guide](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md#testing-guide) |  no testing guide for the pallet, NetApi looks good |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [readme](https://github.com/dotmog/SubstrateNetApi/blob/origin/README.md) | Not really an article, but at this price, it’s not such a big issue. |
| 1. | Second Round of refactoring and restructure the API | <ul><li>[x] </li></ul> | [commits](https://github.com/dotmog/SubstrateNetApi/commits/origin) | |
| 2. | Basic subscriptions | <ul><li>[x] </li></ul> | [Subscriptions](https://github.com/dotmog/SubstrateNetApi/blob/983b77efa4460eae413c52fe284c31123bd5a6c7/SubstrateNetApi/Modules/State.cs#L100) | Done |
| 2a. | Callback for handling multiple subscriptions with subscriptionId | <ul><li>[x] </li></ul> | [SubscriptionListener.cs](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApi/SubscriptionListener.cs) | Done |
| 2b. | Storage subscriptions | <ul><li>[x] </li></ul> | [State.cs](https://github.com/dotmog/SubstrateNetApi/blob/983b77efa4460eae413c52fe284c31123bd5a6c7/SubstrateNetApi/Modules/State.cs) | Done |
| 2c. | Unit Tests | <ul><li>[x] </li></ul> | [SubscriptionTest.cs](https://github.com/dotmog/SubstrateNetApi/blob/origin/SubstrateNetApiTest/Subscription/SubscriptionTest.cs) | Done |
| 3. | Refactoring | <ul><li>[x] </li></ul> | [commits](https://github.com/dotmog/SubstrateNetApi/commits/origin) | |
| 4. | DotMogPallet add base functionality, MogwaiStruct, AccountConfig & BreedType |  <ul><li>[ ] </li></ul> | [pallets](https://github.com/dotmog/substrate/tree/dotmog_v3.0.0/bin/node/pallets) | Unit tests don't compile |
| 5. | DotMogPallet add pairing algorithm and MogwaiBios | <ul><li>[ ] </li></ul> | [pallet](https://github.com/dotmog/substrate/tree/dotmog_v3.0.0/bin/node/pallets/dotmog/src) | only a fork,|
| 6. | Update |  <ul><li>[x] </li></ul> | [updated to 3.0.0](https://github.com/dotmog/substrate/commit/92a898c5f9f92d59cf10980f9f1623c70ffef39d#diff-572d688bd26b0a2a2fa69c889d99057d0fa1c21dcdaa4e345f5733b61a90336d) | Updated |


## General Notes

In general looks good. I have a number of smaller complaints about the pallets
- The pallets are only part of a fork: https://github.com/dotmog/substrate 
- They don't contain any testing guide
- The unit tests don't compile for me (probably because of the rust version)

And they didn't publish any article or tutorial as far as I can see it. 