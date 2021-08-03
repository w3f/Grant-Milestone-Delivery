# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Open-Grants-Program/blob/master/applications/delmonicos.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [gh1](https://github.com/Delmonicos/pallet-did/blob/56637e66f8264667e868137cab17149cdee93931/LICENSE), [gh2](https://github.com/Delmonicos/charger-node/blob/8d64f602a37b1dfff7bafbaa5540c77714568bdd/LICENSE), [notice](https://github.com/Delmonicos/charger-node/blob/f6b8ba673f6551b383b9a5b76c1e3cca5e5058f5/NOTICE) | NOTICE file added with reference to substrate-developer-hub |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/8d64f602a37b1dfff7bafbaa5540c77714568bdd/Web3-Grant/milestone2/testing-guide.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/485f580e93da5deef417016772512db26af202c3/Web3-Grant/milestone2/testing-guide.md#unit-tests) | Decent code coverage  |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/75876873fb124843dea9906e84ce4688992bb2ee/Web3-Grant/milestone2/Article.md) | —
| 1. | Substrate module: Identity | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/pallet-did/tree/56637e66f8264667e868137cab17149cdee93931) | No changes since last milestone |  
| 2. | Substrate module: Membership | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/tree/f6b8ba673f6551b383b9a5b76c1e3cca5e5058f5/pallets/registrar) | Was changed from FRAME `Membership` pallet |  
| 3. | Substrate Tariff Smart Contract | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/a956199114eda8e2908eed9b81664c1e18eb4cd8/pallets/tariff-manager/src/lib.rs#L12) | Not a smart contract, but pallet  |
| 4. | Substrate module: Payment | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/tree/485f580e93da5deef417016772512db26af202c3/pallets/session-payment) | — |  
| 5. | Substrate module: Charger | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/tree/485f580e93da5deef417016772512db26af202c3/pallets/charge-session) | — |
| 6. | Substrate chain | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/tree/485f580e93da5deef417016772512db26af202c3/node) | — |  
| 7. | Docker | <ul><li>[x] </li></ul> | [gh](https://github.com/Delmonicos/charger-node/blob/547df1e3090aeae3b89a14d7d3713b8259db9e79/Dockerfile) | — |



## General Notes

- Smart contract is a pallet, and `Membership` pallet is `registrar` pallet
- Inline documentation and test coverage could be improved
- `cargo clippy` reports several issues
