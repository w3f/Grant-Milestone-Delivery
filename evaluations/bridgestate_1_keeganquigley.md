# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/LICENSE) | Apache 2.0 license |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#readme) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/tests.rs) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#using-docker) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/Article.md) |  |
| 1. | Attestation oracle core: Off-chain worker | <ul><li>[x] </li></ul> |  |
| 2. | Attestation oracle core: Pallet | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#add-the-collateral-reader-pallet-to-your-runtime) |  |
| 3. | Attestation oracle core: RPCs | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/impls.rs) |  |
| 4. | Attestation oracle core: Collateral ratio calculation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#about-the-collateral-reader-pallet) |  |

# General Notes

Unit tests all pass, however there are some warnings about unused variables:

```rust
warning: unused variable: `expected_token`
  --> frame/collateral-reader/src/tests.rs:41:7
   |
41 |         let expected_token = token.clone();
   |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_expected_token`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused `Result` that must be used
  --> frame/collateral-reader/src/tests.rs:38:3
   |
38 |         TemplateModule::save_asset_stats(origin.into(), token_clone);
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled
   = note: `#[warn(unused_must_use)]` on by default

warning: unused `Result` that must be used
  --> frame/collateral-reader/src/tests.rs:60:4
   |
60 |          TemplateModule::save_asset_stats(origin.into(), token.clone());
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled

warning: `pallet-collateral-reader` (lib test) generated 3 warnings (run `cargo fix --lib -p pallet-collateral-reader --tests` to apply 1 suggestion)
    Finished test [unoptimized + debuginfo] target(s) in 7m 33s
     Running unittests src/lib.rs (/home/ubuntu/substrate-node/target/debug/deps/pallet_collateral_reader-dcda7472ee4c65a4)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::save_asset_stats_works ... ok
test tests::test_save_asset_event ... ok
test tests::signed_transaction_on_chain ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.41s

   Doc-tests pallet-collateral-reader

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
