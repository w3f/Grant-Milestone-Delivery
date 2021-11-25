# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/fractapp.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [fractapp/fractapp](https://github.com/fractapp/fractapp/blob/65d567b00934357031a45eff7099a5f6bb45721f/LICENSE), [fractapp/staking-bot](https://github.com/fractapp/staking-bot/blob/b667c9bb285ce643352a0118a67de0c7b889695d/LICENSE), [fractapp/fractapp-server](https://github.com/fractapp/fractapp-server/blob/06d727f510648105f39667247f79070e971b1e29/LICENSE) | Apache License 2.0 |
| 1. | Chat | <ul><li>[x] </li></ul> | [fractapp/fractapp](https://github.com/fractapp/fractapp/blob/65d567b00934357031a45eff7099a5f6bb45721f/src/screens/Chat.tsx#L53) | Was already delivered with [M2](https://github.com/w3f/Grant-Milestone-Delivery/pull/117) |  
| 2. | Staking bot | <ul><li>[x] </li></ul> | [fractapp/staking-bot](https://github.com/fractapp/staking-bot/tree/b667c9bb285ce643352a0118a67de0c7b889695d) | Chat bot guiding through staking (DOT & KSM) process. |  
| 3. | Documentation | <ul><li>[x] </li></ul> | [Swagger](https://api.fractapp.com/swagger/index.html), [typedoc](https://github.com/fractapp/fractapp/tree/65d567b00934357031a45eff7099a5f6bb45721f/docs), [server readme](https://github.com/fractapp/fractapp-server/blob/06d727f510648105f39667247f79070e971b1e29/README.md) | Very little inline documentation in `fractapp-server`, but API documentation using Swagger, code documentation generated from TypeDoc and READMEs with setup instructions in all repositories. |
| 4. | Unit-testing | <ul><li>[x] </li></ul> | [fractapp/staking-bot](https://github.com/fractapp/staking-bot/tree/b667c9bb285ce643352a0118a67de0c7b889695d/__tests__), [fractapp/fractapp](https://github.com/fractapp/fractapp/tree/65d567b00934357031a45eff7099a5f6bb45721f/__tests__), [fractapp/fractapp-server](https://github.com/fractapp/fractapp-server/blob/2ed4f99e885777c3ce42f0236434119176df78a6/Makefile#L8-L13) | Server: 75.5%, app: 80%, staking-bot 85% |
| 5. | Distributing | <ul><li>[x] </li></ul> | [APK](https://github.com/fractapp/fractapp/releases/tag/v1.1.0), [Google Play](https://play.google.com/store/apps/details?id=com.fractapp) | App cannot be published on F-Droid as F-Droid forbids use of Play services and firebase: https://f-droid.org/en/docs/Inclusion_Policy/ |


## General Notes

Tested with local build on emulator and Pixel 3a as well as through Play Store install. Other than initial problems with the server setup, everything worked without a hitch. Staking bot works nicely. UI/UX/Documentation suggestions from last milestones addressed.
