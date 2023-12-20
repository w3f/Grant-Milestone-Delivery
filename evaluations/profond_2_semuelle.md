# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Profond.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/profondHQ/profond-analytics/blob/9922ea6effd5d5e593e954f75f93b749853d7872/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/542216b6203782e1e899681f9709c4d6f3a4312f), [profond.gitbook.io](https://profond.gitbook.io/docs/) | — |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/7b79b8c43908a0e60afb4e802a203307a2819b0d#test), [profondHQ/profond-psp22-contract](https://github.com/profondHQ/profond-psp22-contract/tree/9cdb77965af20020556253074d947a11245ea062#-run-integration-test) | Tests now working. Unclear what the e2e tests are testing. |
| 0d. | Article | <ul><li>[x] </li></ul> | [profond.gitbook.io](https://profond.gitbook.io/docs/analytics-and-api) | Added on request |
| 1. | Analytic Functionality | <ul><li>[x] </li></ul> | [profondHQ/profond-analytics](https://github.com/profondHQ/profond-analytics/tree/9922ea6effd5d5e593e954f75f93b749853d7872) | — |
| 2.  | REST API Service | <ul><li>[x] </li></ul> | [profondHQ/profond-backend-api](https://github.com/profondHQ/profond-backend-api/tree/7b79b8c43908a0e60afb4e802a203307a2819b0d) | Deployed at https://api.profond.ai/ |


## General Notes

- Deployed at https://profond.ai/

### Test output

#### Contract 

```sh
> yarn test
yarn run v1.22.19
$ mocha --require ts-node/register --recursive ./tests --extension ".spec.ts" --exit --timeout 20000


  PSP22 Testing
2023-12-20 16:02:11        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Metadata works (319ms)
2023-12-20 16:02:11        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Transfer works (221ms)
2023-12-20 16:02:12        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Mint works (209ms)
2023-12-20 16:02:12        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Burn works (249ms)
2023-12-20 16:02:12        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Get works (163ms)
2023-12-20 16:02:12        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Create sale (199ms)
2023-12-20 16:02:12        API/INIT: substrate-contracts-node/100: Not decorating runtime apis without matching versions: TransactionPaymentApi/4 (1/2/3 known), Metadata/2 (1 known)
    ✔ Buy works (303ms)


  7 passing (2s)

Done in 4.99s.
```

#### yarn run test

```sh
> yarn run test
yarn run v1.22.19
$ jest
 PASS  src/app.controller.spec.ts
 PASS  src/stats/stats.service.spec.ts
 PASS  src/coin/coin.service.spec.ts (5.624 s)
 PASS  src/collection/collection.service.spec.ts (5.638 s)

Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        6.008 s, estimated 7 s
Ran all test suites.
Done in 6.48s.
```


#### yarn run test:e2e

```sh
> yarn run test:e2e
yarn run v1.22.19
$ jest --config ./test/jest-e2e.json
 PASS  test/app.e2e-spec.ts
  AppController (e2e)
    ✓ Server works (225 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.826 s, estimated 9 s
Ran all test suites.
Done in 3.41s.
```
