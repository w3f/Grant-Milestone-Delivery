# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/saito-game-protocol-and-engine.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | License | <ul><li>[x] </li></ul> | [SaitoTech/Saito-Game-Engine](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/LICENSE), [SaitoTech/saito-crypto-api-modules](https://github.com/SaitoTech/saito-crypto-api-modules/blob/23e8835ffd00aab60049160a08117994c257c41c/LICENSE) | Apache License 2.0
| 1. | Protocol and Library Upgrade | <ul><li>[ ] </li></ul> | link | Token-specific transfer instructions added to game engine / protocol.<br /> Code addig Stack-based instructions for applications adding the following common game mechanics:  <ul><li>player Y deposits assets</li><li>player Y sends assets to player X</li><li>player Y requests balance</li></ul> |
| 2. | Documentation | <ul><li>[ ] </li></ul> | [api.md](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/api.md), [saito-game-engine.md](https://github.com/SaitoTech/Saito-Game-Engine/blob/076277654fe6eec6c6a9be0a44527da9d061248c/saito-game-engine.md), link | Inline and published documentation of library extensions. |
| 3. | Game | <ul><li>[ ] </li></ul> | link | Provision of at least a single open-sourced game demonstrating the features. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
- `npm audit` shows 38 vulnerabilities (14 moderate, 24 high), `npm outdated` shows various outdated packages
