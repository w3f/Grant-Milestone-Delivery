# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ssal-commods-dex.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/MatteoPerona/ssal_commods/blob/1ae152fecdc5179e90d899c6dd720102deaa37ba/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/MatteoPerona/ssal_commods/blob/1ae152fecdc5179e90d899c6dd720102deaa37ba/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/MatteoPerona/ssal_commods/blob/0b04bf76e2b8358f3e892e3f47f7bf30f32d5bdc/README.md#testing-guide) | Tests updated on request. |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@matteo-perona/ssal-smart-contract-commodities-4d6f1b7f728b) | Thorough, technical description. |
| 1. | Smart Contracts | <ul><li>[ ] </li></ul> | [MatteoPerona/ssal_commods](https://github.com/MatteoPerona/ssal_commods/blob/5cb2f8df9855b5f181478fad9931d95e7b0412a5/lib.rs) | see [General Notes](#general-notes) |
| 2. | Frontend | <ul><li>[x] </li></ul> | [MatteoPerona/ssal-demo-frontend](https://github.com/MatteoPerona/ssal-demo-frontend/tree/774e04d622ed4e77f7b49b31f56a947e053f87e2) | React, not React Native |


## General Notes

### Mar 1

- `volume` changed to `weight`
- added unit and e2e tests

### Jan 31 

- I ignored the Docker deliverable, as it's unnecessary in this context.
- Only the buyer can finalize, so it's unclear how the `total` gets transferred in case that doesn't happen.
- `volume` is declared as `Grams`, so it's unclear how other units of measurement. Would each commodity have its own smart contract so that the unit is the same for all commodity contracts and different for each smart contract?
- Payments are made in fungible tokens that are created within the smart contract. Native token payments would be much more flexible.

### `cargo test` output

```sh
> cargo test --features e2e-tests
   Compiling ssal_commods v0.1.0 (/home/sebastian/work/w3f/code/grants/deliverables/ssal/ssal_commods)
 [1/*] Building cargo project
    Finished release [optimized] target(s) in 0.22s
 [1/*] Building cargo project
    Finished release [optimized] target(s) in 0.17s
    Finished test [unoptimized + debuginfo] target(s) in 18.09s
     Running unittests lib.rs (target/debug/deps/ssal_commods-88bd0e38b7d5a633)

running 9 tests
test ssal_commods::tests::default_works ... ok
test ssal_commods::tests::create_contract_fails ... ok
test ssal_commods::tests::create_contract_works ... ok
test ssal_commods::tests::buy_contract_works ... ok
test ssal_commods::tests::finalize_works ... ok
test ssal_commods::tests::finalize_fails ... ok
test ssal_commods::tests::buy_contract_fails ... ok
test ssal_commods::e2e_tests::buy_and_finalize ... ok
test ssal_commods::e2e_tests::finalize_fail_cases ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.83s

   Doc-tests ssal_commods

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```