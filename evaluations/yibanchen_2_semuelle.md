# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yiban_chen1.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [pallets/site/](https://github.com/YibanChen/yc-node/blob/52fd8ccc6bf140dec34f83081a1c209b3e1d7639/pallets/site/Cargo.toml#L1), [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/6018cbe5f631fb813d7f5e25dbfa4e218f4e3c70/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docs.yibanchen.com](https://docs.yibanchen.com) | See also Medium article below and [yc-node/docs](https://github.com/YibanChen/yc-node/tree/52fd8ccc6bf140dec34f83081a1c209b3e1d7639/docs) |
| 0c. | Article/Tutorial | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@david.rhodus/yiban-chen-sites-dapp-tutorial-f75c689c2db8) | Website hosting walkthrough with screenshots |
| 0d. | Testing Guide | <ul><li>[x] </li></ul> | [site-pallet](https://github.com/YibanChen/yc-node/blob/52fd8ccc6bf140dec34f83081a1c209b3e1d7639/docs/site-test-guide.md), [integration tests](https://github.com/YibanChen/YibanChenAppSeleniumTests/tree/0374e34570f2c2b463eaacca947237737670f02f#readme) | — |
| 1. | site-pallet | <ul><li>[x] </li></ul> | [YibanChen/yc-node](https://github.com/YibanChen/yc-node/tree/52fd8ccc6bf140dec34f83081a1c209b3e1d7639/pallets/site) | Creating, listing, selling & deleting sites |
| 2. | React frontend | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/tree/6018cbe5f631fb813d7f5e25dbfa4e218f4e3c70) | Hosted version: https://app.yibanchen.com/ |
| 3. | Site Search | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/6018cbe5f631fb813d7f5e25dbfa4e218f4e3c70/src/pages/AllSites.js#L118) | — |
| 4. | Connect to substrate with Polkadot.js | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/6018cbe5f631fb813d7f5e25dbfa4e218f4e3c70/src/pages/Settings.js#L135-L149) | — |
| 5. | write tests | <ul><li>[x] </li></ul> | [YibanChen/yc-node](https://github.com/YibanChen/yc-node/blob/52fd8ccc6bf140dec34f83081a1c209b3e1d7639/pallets/site/src/tests.rs), [YibanChen/YibanChenAppSeleniumTests](https://github.com/YibanChen/YibanChenAppSeleniumTests/commit/0374e34570f2c2b463eaacca947237737670f02f) | — |


## General Notes

- Tested locally and via https://app.yibanchen.com
- Requires [yc-api](https://github.com/YibanChen/yc-api)
