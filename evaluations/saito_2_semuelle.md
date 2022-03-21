# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/saito-game-protocol-and-engine.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [SaitoTech/Saito-Game-Engine](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/LICENSE), [SaitoTech/saito-crypto-api-modules](https://github.com/SaitoTech/saito-crypto-api-modules/blob/23e8835ffd00aab60049160a08117994c257c41c/LICENSE) | Apache License 2.0
| 1. | Protocol and Library Upgrade | <ul><li>[x] </li></ul> | [SaitoTech/saito-lite](https://github.com/SaitoTech/saito-lite/blob/master/mods/gametestsuite/gametestsuite.js#L598-L654) | Token-specific transfer instructions added to game engine. Vulnerabilities and outdated packages fixed on request. |
| 2. | Documentation | <ul><li>[x] </li></ul> | [api.md](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/api.md), [saito-game-engine.md](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/saito-game-engine.md), [README.md](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/README.md), [SaitoTech/saito-crypto-api-modules](https://github.com/SaitoTech/saito-crypto-api-modules/blob/23e8835ffd00aab60049160a08117994c257c41c/README.md) | Documentation of library extensions, API, game template demo |
| 3. | Game | <ul><li>[x] </li></ul> | [SaitoTech/Saito-Game-Engine](https://github.com/SaitoTech/Saito-Game-Engine/tree/a98a920414afbbc4d3140fec49f372c33939f80b) | A test suite and Blackjack. Tested on Westend. |


## General Notes

- Secure dice roll in gametestsuite fails with `this.addTurn is not a function`
