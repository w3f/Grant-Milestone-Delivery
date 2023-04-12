# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot-follow-up-2.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/LICENSE) |  | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [entry-point](https://github.com/727-Ventures/typechain-polkadot) & [auto-generated](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/docs-generated) & [docs-dir](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/docs) |  | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests directory](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/tests) & [Testing guide](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/tests/README.md) |  | 
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/Dockerfile) & [CI/CD](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/.github/workflows/ci.yml) |  | 
| 0e. | Article | <ul><li>[x] </li></ul> | [article](https://medium.com/brushfam/ways-how-to-use-typechain-polkadot-in-your-project-281ef80b8dd8) |  | 
| 1. | User-defined plugins | <ul><li>[x] </li></ul> | [docs](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/packages/typechain-polkadot#plugins) & [source code of plugin structure](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/packages/typechain-polkadot/src/types/interfaces/index.ts) |  | 
| 2. | Subscribing to events | <ul><li>[x] </li></ul> | [docs](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/docs/about.md#events) & [example](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/tests/events/general.test.ts) |  | 
| 3. | Typechain-compiler | <ul><li>[x] </li></ul> | [package](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/packages/typechain-compiler) & [guide with example project](https://github.com/727-Ventures/typechain-polkadot/blob/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/docs/about.md#typechain-compiler-case) |  | 
| 4. | Openbrush integration tests | <ul><li>[x] </li></ul> | [tests](https://github.com/727-Ventures/openbrush-contracts/tree/main/tests/e2e) |  | 
| 5. | typechain/types package | <ul><li>[x] </li></ul> | [package](https://github.com/727-Ventures/typechain-polkadot/tree/3e392c606939c26e158b25cc7c9c92ee3e18a0c6/packages/typechain-types) |  |
<br/>

## General Notes v1 - Feb 22, 2023
All the deliverables has been well integrated in the kit, which is well documented.

The testing guide is easy to follow, both for the compiler and the whole kit.

There were some minor issues using `cargo-contract`, as it's been updated recently and the toolkit didn't support the new version. This was fixed super quickly by the team (you can follow the conversation from [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/747#pullrequestreview-1307682753)).

Also I noticed there were 2 minor issues in the guide, which have been fixed by the team.