# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/blob/2e873395db864db25af47da6992feede88b18c4d/LICENSE), [RainbowDAO-Protocol-Ink-UI-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/4810c890dcfc37bb61463d497d64b84e025db30c/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Installing and testing guide](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/blob/2e873395db864db25af47da6992feede88b18c4d/README.md), [UI setup](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/4810c890dcfc37bb61463d497d64b84e025db30c/docs/README.md), [hosted setup walkthrough](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/main/docs/RainbowDAO_DAOFactory_Ink_Introduce.md) | — |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | Manual testing described in the docs mentioned above, but very little unit testing. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docs/docker.md](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/c9e7abcf956c778e470c92029b5e28c46be9939e/docs/docker.md) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://medium.com/rainbowcity/multi-chain-dao-infrastructure-protocol-rainbowdao-receives-a-web3-foundation-grant-143e9fac63bd) | — |
| 1. | ink! Contract: daoFactory | <ul><li>[ ] </li></ul> | link | missing tests |
| 2. | ink! Contract: template | <ul><li>[ ] </li></ul> | link | missing tests |
| 3. | ink! Contract: daoManage | <ul><li>[ ] </li></ul> | link | missing tests |
| 4. | ink! Contract: daoCategory | <ul><li>[ ] </li></ul> | link | missing tests |
| 5. | ink! Contract: daoProposal | <ul><li>[ ] </li></ul> | link | missing tests |
| 6. | ink! Contract: daoVote | <ul><li>[ ] </li></ul> | link | missing tests |
| 7. | ink! Contract: daoUsers | <ul><li>[ ] </li></ul> | link | missing tests |
| 8. | ink! Contract: daoVault | <ul><li>[ ] </li></ul> | link | missing tests |
| 9. | protocol UI | <ul><li>[ ] </li></ul> | link | Several breaking bugs, little to no input validation. See milestone PR for details. |


## General Notes

- Magic numbers in the contracts
- Very little testing
- Unused and unexplained variables
- Several breaking bugs in the UI
- More thorough list of issues [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/384#pullrequestreview-918553911)
