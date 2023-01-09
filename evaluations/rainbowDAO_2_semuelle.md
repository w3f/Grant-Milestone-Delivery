# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/blob/2e873395db864db25af47da6992feede88b18c4d/LICENSE), [RainbowDAO-Protocol-Ink-UI-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/4810c890dcfc37bb61463d497d64b84e025db30c/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Installing and testing guide](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/blob/2e873395db864db25af47da6992feede88b18c4d/README.md), [UI setup](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/4810c890dcfc37bb61463d497d64b84e025db30c/docs/README.md), [hosted setup walkthrough](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/main/docs/RainbowDAO_DAOFactory_Ink_Introduce.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | link | Manual testing described in the docs mentioned above, unit testing improved on request. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docs/docker.md](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/blob/c9e7abcf956c778e470c92029b5e28c46be9939e/docs/docker.md) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://medium.com/rainbowcity/multi-chain-dao-infrastructure-protocol-rainbowdao-receives-a-web3-foundation-grant-143e9fac63bd) | — |
| 1. | ink! Contract: daoFactory | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_factory) | — |
| 2. | ink! Contract: template | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/template_manager) | — |
| 3. | ink! Contract: daoManage | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_manager) | — |
| 4. | ink! Contract: daoCategory | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_category) | — |
| 5. | ink! Contract: daoProposal | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_proposal) | — |
| 6. | ink! Contract: daoVote | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/erc20) | — |
| 7. | ink! Contract: daoUsers | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_users) | — |
| 8. | ink! Contract: daoVault | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_2/tree/82757d337bea22dcb8e08b4759c47ec02d67a140/dao_vault) | — |
| 9. | protocol UI | <ul><li>[x] </li></ul> | [RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_2/tree/287bf17d514da16591f704283e0c3b9dc4816bf4) | Breaking bugs and input validation fixed on request |


## General Notes

Project was improved over several rounds of feedback. Local setup was somewhat difficult due to required manual deployment of many smart contracts, though the deployed test version was kept up to date. The smart contracts are still somewhat tricky to read/use due to some magic numbers and strings. The project could really use a cross-contract call ability for testing, which at this point doesn't exist for ink!.
