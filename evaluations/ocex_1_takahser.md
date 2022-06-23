# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7e34710aff6c941d2a3e65302fbcdbb1c43c466f/applications/on-chain-cash.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License file](https://github.com/bsn-si/ocex-smartcontract/blob/f9d3dc4ec01c713f35df9e4af410c722b9344f64/LICENSE) |  Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#how-to) | Inline docs are sufficient, base logic is covered. The build currently fails, see [Building Feedback](#building-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing instructions](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#compile--run-tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 1. | Liquidity pool management methods | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L219) |  not tested yet |  
| 2. | Coupon data storage | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L60) |  not tested yet |  
| 3. | Coupon registration | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L97) |  not tested yet |
| 4. | Coupon validation | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/f9d3dc4ec01c713f35df9e4af410c722b9344f64/lib.rs#L263) | not tested yet |  
| 5. | Coupon liquidation | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L236)  | not tested yet | 


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- "4. Coupon validation" is currently missing in the milestone delivery
- Build currently fails

### Testing Guide Feedback

- While the test for `transfer_ownership` was missing at first, it was added in the most recents commits. Hence, the core logic is now fully covered by tests.

- Tests pass. The previously existing warning has been fixed.
    ```bash
    $ cargo +nightly test --features=test
    Compiling proc-macro2 v1.0.37

    (...)

    Compiling sp-core v6.0.0 (https://github.com/paritytech/substrate.git?branch=master#1b57cff6)
    Compiling ink_lang v3.0.1
    Compiling ocex v0.1.0 (/home/seraya/repos/ocex-smartcontract)
        Finished test [unoptimized + debuginfo] target(s) in 19.39s
        Running unittests lib.rs (target/debug/deps/ocex-118ac0d3c1060c34)

    running 3 tests
    test ocex::tests::check_transfer_ownership ... ok
    test ocex::tests::insert_coupons ... ok
    test ocex::tests::insert_coupon_activation ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
    ```

### Building Feedback

- I tried installing the toolchain to `nightly-2022-05-18`, setting the `wasm` target and installing `dylint` as advised in the project's [updated README](https://github.com/bsn-si/ocex-smartcontract/tree/0d5860a10044acfdcaf14838a15eba683514095f#resolve-common-errors):

    ```bash
    rustup toolchain install nightly-2022-05-18
    rustup target add wasm32-unknown-unknown
    cargo install cargo-dylint
    ```

- I then went on to set the default toolchain and build the code:

    ```bash
    rustup default nightly-2022-05-18
    cargo +nightly contract build
    ```

- However, the build still fails with **ERROR: The wasm-opt optimization failed**. Unfortunately, the compiler doesn't state a reason for the failure. The error is now the same as in the previously reviewed state of the delivery.

    ```bash
    $ cargo +nightly contract build
    [1/5] Building cargo project
        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate.git`
        Finished release [optimized] target(s) in 0.28s
    [2/5] Post processing wasm file
    [3/5] Optimizing wasm file
    ERROR: The wasm-opt optimization failed.

    The error which wasm-opt returned was: 
    ```
