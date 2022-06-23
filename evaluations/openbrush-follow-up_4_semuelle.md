# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openbrush-follow-up.md

- **Milestone:** 4

- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Supercolony-net/openbrush-contracts](https://github.com/Supercolony-net/openbrush-contracts/blob/69a39a2a48cddc97af967eeb178245be8b8ba8f3/LICENSE) | MIT
| 0b. | Documentation | <ul><li>[x] </li></ul>| [openbrush.io](https://docs.openbrush.io/), [github](https://github.com/Supercolony-net/openbrush-contracts/tree/69a39a2a48cddc97af967eeb178245be8b8ba8f3/docs) | Great inline docs as well.
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Supercolony-net/openbrush-contracts](https://github.com/Supercolony-net/openbrush-contracts/tree/5ba10e61dd01fd56910b320f95fd103f6881eb7c#installation--testing) | — |
| 1. | Create Proposal for Fungible token | <ul><li>[x] </li></ul> | [PSP22 - Fungible Token standard](https://github.com/w3f/PSPs/pull/22) | — |
| 2. | Implement extensions for tokens | <ul><li>[x] </li></ul> | [PSP22 - Burnable, Mintable, Metadata](https://github.com/Supercolony-net/openbrush-contracts/tree/5ba10e61dd01fd56910b320f95fd103f6881eb7c/contracts/token/psp22/extensions), [NFT and Multi token - Burnable, Mintable, Metadata](https://github.com/Supercolony-net/openbrush-contracts/pull/45), [PSP22 Extensions](https://github.com/Supercolony-net/openbrush-contracts/pull/47), [Refactor Burnable Mintable for all PSPs](https://github.com/Supercolony-net/openbrush-contracts/pull/73) | `Burnable`, `Mintable`, `Metadata` for all tokens, `FlashLender`, `Wrapper`, `Timelock`, `Capped`, `Pausable` for PSP22. |
| 3. | Create Proposal for Non Fungible token and Multi token | <ul><li>[x] </li></ul> | [PSP34 - NFT](https://github.com/w3f/PSPs/pull/34), [PSP37 - Multi Token](https://github.com/w3f/PSPs/pull/37) | PSP34 merged & in Call for Feedback, PSP37 open and in draft state. |
| 4. | Use original ink! instead of our own | <ul><li>[x] </li></ul> | [pull/53](https://github.com/Supercolony-net/openbrush-contracts/pull/53) | — |
| 5. | Refactor the contracts to be compatible with PSPs | <ul><li>[x] </li></ul> | [pull/51](https://github.com/Supercolony-net/openbrush-contracts/pull/51), [pull/74](https://github.com/Supercolony-net/openbrush-contracts/pull/74) | — |
| 6. | Refactor the structure of the OpenBrush to provide agnostic traits | <ul><li>[x] </li></ul> | [Agnostic traits](https://github.com/Supercolony-net/openbrush-contracts/tree/5ba10e61dd01fd56910b320f95fd103f6881eb7c/contracts/traits), [Wrappers for traits](https://github.com/Supercolony-net/openbrush-contracts/pull/54) | — |
