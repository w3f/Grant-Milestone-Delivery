# Evaluation
- **Status:** Accepted
- **Application Document:** [link](https://github.com/herou/Grants-Program/blob/af324cf01e0cfe707c262d86a0edaf81b53ca340/applications/escrow_pallet.md)
- **Milestone:** 2 and 3
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable              | Accepted | Link                                                                                 							         | Notes |
|--------|--------------------------|----------|------------------------------------------------------------------------------------------------------|----------------------|
| 0a.     | License                  | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/blob/eljo-prifti/escrow/LICENSE  |Apache 2.0     |
| 0b.     | Documentation & Tutorial | <ul><li>[x] </li></ul>| https://docs.google.com/document/d/1XpxfrG6Qd9AHJ7OUVv3L3D6ZcEyizGh68w7yZxN3p_A/edit?usp=sharing |See **General Notes** |
| 0c.     | Tests                    | <ul><li>[x] </li></ul>| https://docs.google.com/document/d/1XpxfrG6Qd9AHJ7OUVv3L3D6ZcEyizGh68w7yZxN3p_A/edit?usp=sharing |Unit tests pass successfully. Core functionalities covered for `sign_contract`, `send_funds`, `withdraw_funds`.     |
| 0d.     | Article                   | <ul><li>[x] </li></ul>| https://medium.com/@elioprifti/escrow-pallet-build-on-top-of-substrate-framework-6f941c28b6fd   |  -     |
| 0e.     | Benchmarking                  | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/blob/escrow_milestone_2_and_3/pallets/escrow/src/benchmarking.rs |See **General Notes** |
| 0f.     | Substrate modules: send_funds withdraw_funds | <ul><li>[x] </li></ul>| https://github.com/herou/EscrowPallet/tree/eljo-prifti/escrow     | Ok. |

# General Notes

Overall the pallet looks good. The functionality is a bit more basic than the Interlay [escrow pallet](https://github.com/interlay/interbtc/blob/7942cfcd8a41013639285fe099285530438df3db/crates/escrow/src/lib.rs) mentioned in the application, but I would argue that it is more user friendly.
I like that it allows for locking by number of days instead of block height. Would be nice to see some added conversions such as the ability to lock by number of hours or minutes. Looking forward to your future plans for multiple senders.

## Documentation & Tutorial

Docs are sparse and don't include much other than how to setup the node and run unit tests. <br/>

**UPDATE:** Docs were greatly improved upon request. Now includes definitions for individual components as well as example scenarios. Template text was removed from readme.

## Testing

Each substrate module is tested, and all unit tests pass successfully.
```rust
running 10 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::withdraw_funds_test2 ... ok
test tests::send_funds_test2 ... ok
test tests::sign_contract_test3 ... ok
test tests::withdraw_funds_test3 ... ok
test tests::sign_contract_test2 ... ok
test tests::send_funds_test1 ... ok
test tests::withdraw_funds_test1 ... ok
test tests::sign_contract_test1 ... ok
test tests::withdraw_funds_test4 ... ok
```
Running `cargo test --features runtime-benchmarks` results in one failed test:
```rust
running 13 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::sign_contract_test1 ... ok
test tests::sign_contract_test2 ... ok
test tests::sign_contract_test3 ... ok
test tests::send_funds_test2 ... ok
test tests::send_funds_test1 ... ok
test benchmarking::bench_withdraw_funds ... FAILED
test tests::withdraw_funds_test2 ... ok
test tests::withdraw_funds_test1 ... ok
test benchmarking::bench_send_funds ... ok
test tests::withdraw_funds_test3 ... ok
test benchmarking::bench_sign_contract ... ok
test tests::withdraw_funds_test4 ... ok

failures:

---- benchmarking::bench_withdraw_funds stdout ----
thread 'benchmarking::bench_withdraw_funds' panicked at 'withdraw_funds: "WorkingDaysNotExpired"', pallets/escrow/src/benchmarking.rs:22:1
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```
Please consider fixing the failed benchmark test.
