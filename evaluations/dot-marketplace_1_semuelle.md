# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/e52bbd4111f5b3846085f31b2fea0985c19a07c9/LICENSE), [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/blob/f98f866f757ed3b5cd7cdd6b1778212302c4e054/LICENSE), [WowLabz/authentication_service](https://github.com/WowLabz/authentication_service/blob/999596426257267dc9e54ee47ec84a77278c42e9/LICENSE) | Apache 2.0 |
| 0b | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/WowLabz/tasking_backend/blob/e52bbd4111f5b3846085f31b2fea0985c19a07c9/README.md), [WowLabz/tasking_backend/pallets/pallet-tasking](https://github.com/WowLabz/tasking_backend/blob/e52bbd4111f5b3846085f31b2fea0985c19a07c9/pallets/pallet-tasking/taskingreadme.md) | — |
| 0c | Testing Guide | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/e52bbd4111f5b3846085f31b2fea0985c19a07c9/TestingGuide.md) | Unit tests, and thorough description of manual tests. |
| 0d | Docker Image | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/e52bbd4111f5b3846085f31b2fea0985c19a07c9/docker-compose.yml), [WowLabz/dot_marketplace_docker](https://github.com/WowLabz/dot_marketplace_docker/tree/65134e3e27ce9377fb1ed8d61558841c92c79ca4) | — |
| 1 | Registration Module | <ul><li>[x] </li></ul> | [WowLabz/authentication_service](https://github.com/WowLabz/authentication_service/blob/379e8271cfa50ce758e572b5d70d8162bcb34d3f/src/controller/user_controller.rs#L13-L45) | see [General Notes](#general-notes) |
| 2 | Wallet Linking | <ul><li>[x] </li></ul> | [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/blob/d8a8a6fd4c2efe844c15fafc4026e7568a51e209/src/Components/CryptoWallet/CryptoWallet.js) | Math wallet, Guarda wallet, polkadotjs. |
| 3 | Profile Module | <ul><li>[x] </li></ul> | [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/tree/4528077c562db5541386cf6bfba2216c527aeeb5/src/View/Modules/Authorization) | — |
| 4 | Frontend App | <ul><li>[x] </li></ul> | [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/tree/d8a8a6fd4c2efe844c15fafc4026e7568a51e209) | based on substrate-front-end-template |


## General Notes

- Registration/authentication tests provided on request
- Wallet address loading fixed on request
