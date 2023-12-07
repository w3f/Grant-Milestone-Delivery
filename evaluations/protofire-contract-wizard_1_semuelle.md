# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Contract_wizard.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/LICENSE) | GNU GPL v3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [protofire/cw_docs](https://github.com/protofire/cw_docs/tree/60c13114bfa7f944e37a0e8633734eff5ae726bc) | See also https://docs.contractwizard.xyz/ |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [tests/Readme.md](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/tests/Readme.md) | see [General Notes](#general-notes) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/docker-compose.yml) | — |
| 1. | Interaction with deployed contracts | <ul><li>[x] </li></ul> | [ContractsTabInteraction.tsx](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/src/view/ContractDetailView/ContractsTabInteraction.tsx) | — |
| 2. | Interaction with custom smart contracts | <ul><li>[x] </li></ul> | [custom-contract](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/src/pages/custom-contract/index.tsx) | — |
| 3. | Shareable Contract Interaction Links | <ul><li>[x] </li></ul> | [ShareContractModal](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/src/view/components/ShareContractModal/index.tsx) | — |
| 4. | Support for multiple chains | <ul><li>[x] </li></ul> | [NetworkSelect](https://github.com/protofire/polkadot-contract-wizard/blob/75b2f69b43aff1bad92fa5c32b776e44d80f811f/src/view/components/WalletConnectButton/NetworkSelect.tsx) | — |


## General Notes

- Tested locally and deployed
- Successfully deployed and interacted with contracts on Rococo Contracts and Aleph Zero Testnet
- Everything worked out of the box both locally and on the deployed version
- UI showing if and why a transaction would fail is very useful

### `yarn test` output

```sh
 PASS  tests/sections/wizard/initialSupplyPowDecimals.test.ts
 PASS  tests/utils/isoToReadableDate.test.ts
 PASS  tests/utils/utils.test.ts
 PASS  tests/sanitize.test.ts
 PASS  tests/sections/wizard/generateContract.test.ts
 PASS  tests/formatString.test.ts
 PASS  tests/coreApp.test.ts
 PASS  tests/sections/polkadot/genChainInfo.test.ts
  ● Console

    console.warn
      Skipping network tests

      25 |     async () => {
      26 |       if (!shouldRunChainTests) {
    > 27 |         console.warn('Skipping network tests')
         |                 ^
      28 |         return
      29 |       }
      30 |       api = await ApiPromise.create({

      at Object.warn (tests/sections/polkadot/genChainInfo.test.ts:27:17)

    console.warn
      Skipping local network tests

      50 |     async () => {
      51 |       if (!shouldRunChainTests) {
    > 52 |         console.warn('Skipping local network tests')
         |                 ^
      53 |         return
      54 |       }
      55 |

      at Object.warn (tests/sections/polkadot/genChainInfo.test.ts:52:17)


Test Suites: 8 passed, 8 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        2.738 s
Ran all test suites.
```
