# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Grant-Milestone-Delivery/pull/169
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0 | Testable features | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/tea-layer1/blob/398a12a28a4ebda1a2a8c846e2cd3f09cb09d998/pallets/recovery/src/lib.rs#L184) | Setting up, initiating, and completing Social Recovery in-browser.  |
| 1 | Update test instruction | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/gluon-app/blob/1209c6fd202b9d48bb0d867c2b28f0b0bae28d72/readme.md) | Tested through Docker. |
| 2 | Source code | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/gluon-app/tree/fe8ef43df5c06a5f6a9bfb675991a0999930568e) | — |
| 3 | Video tutorial | <ul><li>[x] </li></ul> | [youtube](https://www.youtube.com/watch?v=lUtS9-FF_UE) | — |


| Task ID | Module name | Description | Link | Evaluation Notes |
| ------- | ----------- | ----------- | ---- | ---------------- |
| 1.0 | Add social recovery API | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/tea-layer1/blob/398a12a28a4ebda1a2a8c846e2cd3f09cb09d998/pallets/recovery/src/lib.rs#L184) | — |
| 2.0 | Create social recovery page | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/gluon-app/blob/4cb984872c2ee7b99c2c15f0f09bc1837d8d1e4b/webapp/src/views/SocialRecovery.vue) | — |
| 3.0 | Social recovery if initiated from phone | <ul><li>[ ] </li></ul> | — | Removed |
| 3.1 | Scan QR code to confirm friends recovery request | <ul><li>[ ] </li></ul> | — | Removed |
| 4.1 | Suspend old account activity during the recovering process | <ul><li>[x] </li></ul> | [gh](https://github.com/tearust/gluon-pallet/blob/9a979e21085a3882a7ef5ad42d18ce06917dfd8d/gluon/src/lib.rs#L984) | — |
| 4.2 | Generate a new account to accept assets | <ul><li>[x] </li></ul> |  | Not a feature, can/must be done manually. |
| 5.0 | Verify all social recovery confirmation, transfer assets to new account | <ul><li>[x] </li></ul> | [recovery](https://github.com/tearust/tea-layer1/blob/30dd4f8efad81070e8d0905974352b6dadeeb8cb/pallets/recovery/src/lib.rs#L290-L292), [recovery](https://github.com/tearust/tea-layer1/blob/30dd4f8efad81070e8d0905974352b6dadeeb8cb/pallets/recovery/src/lib.rs#L354-L365) [gluon](https://github.com/tearust/gluon-pallet/blob/9a979e21085a3882a7ef5ad42d18ce06917dfd8d/gluon/src/lib.rs#L891) | Test to ensure assets are transferable upon completed recovery |



## General Notes

- Inline documentation lacking, improvements signaled for M3
- Recovery from mobile not possible without reworking the social recovery pallet. W3F agreed to drop deliverables (minor feature) and add hardware tests at M5 instead.
- Task 4.0 [moved](https://github.com/w3f/Open-Grants-Program/pull/434) from M2 to M3.
