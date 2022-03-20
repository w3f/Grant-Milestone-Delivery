# Evaluation

- **Status:** Accepted
- **Application Document:**  https://raw.githubusercontent.com/w3f/Grants-Program/master/applications/DotPay.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/main/LICENSE), [bytepayment/bytepaytest](https://github.com/bytepayment/bytepaytest/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [bytepay.online](https://bytepay.online/docs/bytepay-userguide), [github](https://github.com/bytepayment/bytepay/discussions/4) | Screenshots of basic functions |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [link](https://github.com/bytepayment/bytepay/tree/b4f888152526ebea93e9fab855cb1a81d206ae35#how-to-run-test) | Compilation issue fixed on request |
| 0d. | Docker | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/b4f888152526ebea93e9fab855cb1a81d206ae35/docker-compose.yml) | — |
| 1. | Task management | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/b4f888152526ebea93e9fab855cb1a81d206ae35/cloudfuncs/webhooks/index.ts#L71-L140) | — |
| 2. | Transfer module | <ul><li>[x] </li></ul> | [backend](https://github.com/bytepayment/bytepay/blob/b4f888152526ebea93e9fab855cb1a81d206ae35/cloudfuncs/polka_dot_transfer/index.ts), [smart contract](https://github.com/bytepayment/bytepay/blob/b4f888152526ebea93e9fab855cb1a81d206ae35/smart-contract/lib.rs#L113) | see [General Notes](#general-notes) |
| 3. | Withdraw module | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/b4f888152526ebea93e9fab855cb1a81d206ae35/smart-contract/lib.rs#L70-L86) | — |
| 4. | Informal | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/0cf981eb05b779c8795d494de00649c92127ea25/server/functions/webhooks/index.ts), [example](https://github.com/bytepayment/bytepaytest/issues/22) | — |


## General Notes

`transfer` can only be called from the the contract owner. Authors can `withdraw` funds, but must rely on the platform to transfer the correct amounts to the correct receivers.
