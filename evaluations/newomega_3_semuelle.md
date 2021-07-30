# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/newomega-m3m4.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/blob/7d958aa83404a7541692c4cf2d53a18618ba99f3/LICENSE) | — |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/tree/b6260660bf04f57b381828abe27571b0c2e9d7e5/newomega-capacitor-polkadot/contracts#on-chain) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [gh1](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/tree/b6260660bf04f57b381828abe27571b0c2e9d7e5/newomega-capacitor-polkadot#testing), [gh2](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/tree/b6260660bf04f57b381828abe27571b0c2e9d7e5/newomega-capacitor-polkadot/contracts#testing) | see [General Notes](#general-notes) |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [medium](https://wiktorstarczewski.medium.com/persistent-universe-comes-to-newomega-f8bf99851d72) | —
| 1. | Betting | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/blob/a7b4cd953318c31f21d44d29bfbd6929a8f659e8/newomega-capacitor-polkadot/contracts/newomegaranked/newomegaranked.rs#L226) | "Ranked" mode only, pays out after successful attack |
| 2. | Mobile Client | <ul><li>[x] </li></ul> | [play store](https://play.google.com/store/apps/details?id=org.celrisen.newomega) | installable via Play Store and locally |
| 3. | Game: Modules | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/blob/a7b4cd953318c31f21d44d29bfbd6929a8f659e8/newomega-capacitor-polkadot/contracts/newomega/newomega.rs#L638) | — |
| 4. | Game: Targeting | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/blob/a7b4cd953318c31f21d44d29bfbd6929a8f659e8/newomega-capacitor-polkadot/contracts/newomega/newomega.rs#L471) | — |
| 5. | Game: Universe | <ul><li>[x] </li></ul> | [gh](https://github.com/WiktorStarczewski/newomega-polkadot-hybrid/blob/a7b4cd953318c31f21d44d29bfbd6929a8f659e8/newomega-capacitor-polkadot/contracts/newomegauniverse/newomegauniverse.rs) | — |



## General Notes

- good gameplay and visuals. Beta version published on Play Store.
- doc-tests are failing due to misinterpreted indented text
- 60 - 83% test coverage where tests are present, no tests for "wrapping" contracts (`game`, `industrial`, `ranked`)
