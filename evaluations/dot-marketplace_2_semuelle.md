# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/242ac67fe656b145bea4ba6ec3f5e5485cce4a1c/LICENSE), [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/blob/f98f866f757ed3b5cd7cdd6b1778212302c4e054/LICENSE) | Apache 2 |
| 0b | Documentation | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/tree/c8473964da6ac14bad7a5b3a419c881e9673cfef#readme) | — |
| 0c | Testing Guide | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/c8473964da6ac14bad7a5b3a419c881e9673cfef/TestingGuide.md) | — |
| 0d | Docker Image | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/c8473964da6ac14bad7a5b3a419c881e9673cfef/docker-compose.yml) | — |
| 1 | Rating Module | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/5739b69a871be98e7cd6d30013770daf2fb114fb/pallets/pallet-tasking/src/lib.rs#L267-L342) | — |
| 2 | Programmatic Wallet Transfer | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/5739b69a871be98e7cd6d30013770daf2fb114fb/pallets/pallet-tasking/src/lib.rs#L329-L342) | — |
| 3 | Asset Restrictions | <ul><li>[x] </li></ul> | [WowLabz/tasking_backend](https://github.com/WowLabz/tasking_backend/blob/5739b69a871be98e7cd6d30013770daf2fb114fb/pallets/pallet-tasking/src/lib.rs#L331-L332) | Contract declares locking "by time", but locks depend on task status only |
| 4 | Frontend App | <ul><li>[x] </li></ul> | [WowLabz/tasking_frontend](https://github.com/WowLabz/tasking_frontend/tree/bb406f65d4f0e7fd18c79934a30a838154bc50e2) | Various issues, as described in PR. |


## General Notes

Submitted and evaluated alongside [M1](https://github.com/w3f/Grant-Milestone-Delivery/blob/8fd08df6e43622a31c4e6041dca9ea7956cc087e/evaluations/dot-marketplace_1_semuelle.md).
