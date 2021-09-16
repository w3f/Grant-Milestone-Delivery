# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yiban_chen1.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [YibanChen/yc-node/pallets/note](https://github.com/YibanChen/yc-node/blob/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e/pallets/note/Cargo.toml#L1), [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/999f0851a121774fd495bcaac8910327661a73b7/LICENSE) | — |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [YibanChen/yc-node](https://github.com/YibanChen/yc-node/blob/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e/docs/test-guide.md), [Medium](https://medium.com/@david.rhodus/yiban-chen-notes-dapp-tutorial-db6c28c237d0) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [YibanChen/yc-node](https://github.com/YibanChen/yc-node/blob/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e/docs/test-guide.md) | see [General Notes](#general-notes) |
| 1. | note-pallet | <ul><li>[x] </li></ul> | [YibanChen/yc-node/pallets/note](https://github.com/YibanChen/yc-node/tree/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e/pallets/note) | — |
| 2. | Substrate Testnet Chain | <ul><li>[x] </li></ul> | [YibanChen/yc-node](https://github.com/YibanChen/yc-node/tree/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e) | — |
| 3. | Build React app structure | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/tree/51f305066e097f1486688e7e201cb9dde8622739) | tested locally and on https://app.yibanchen.com |
| 4. | Settings screen: wallet selection | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/51f305066e097f1486688e7e201cb9dde8622739/src/pages/Settings.js#L199) | — |
| 4b. | Settings screen: IPFS storage configuration | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/51f305066e097f1486688e7e201cb9dde8622739/src/pages/Settings.js#L124) | — |
| 5. | Sending a note | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/51f305066e097f1486688e7e201cb9dde8622739/src/pages/Compose.js#L73) | — |
| 6. | Receiving a note | <ul><li>[x] </li></ul> | [YibanChen/yibanchen-app](https://github.com/YibanChen/yibanchen-app/blob/51f305066e097f1486688e7e201cb9dde8622739/src/pages/Notes.js) | — |
| 6. | Write tests | <ul><li>[x] </li></ul> | [YibanChen/yc-node/pallets/note/](https://github.com/YibanChen/yc-node/blob/e2c79de45e1645b889dc8a0ddecad3a0aceb2a0e/pallets/note/src/tests.rs) | see [General Notes](#general-notes) |



## General Notes

- Tested with remote (testnet.yibanchen.com:443) and local node, with and without personal pinata account
- Selenium tests failed initially with `selenium.common.exceptions.WebDriverException: Message: 'chromedriver' executable needs to be in PATH.`, apparently an Ubuntu issue.
- `yibanchen-app` tests fixed on request
- Unit tests very limited
