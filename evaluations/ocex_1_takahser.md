# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7e34710aff6c941d2a3e65302fbcdbb1c43c466f/applications/on-chain-cash.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [License Link](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#license) |  Apache 2.0, however, the LICENSE file is currently missing. |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#how-to) | Inline docs are sufficient, base logic is covered. The build currently fails, see [Building Feedback](#building-feedback) |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Testing instructions](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#compile--run-tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 1. | Liquidity pool management methods | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L219) |  not tested yet |  
| 2. | Coupon data storage | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L60) |  not tested yet |  
| 3. | Coupon registration | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L97) |  not tested yet |
| 4. | Coupon validation | <ul><li>[ ] </li></ul> | - | not part of the delivery |  
| 5. | Coupon liquidation | <ul><li>[ ] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L236)  | not tested yet | 


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- "4. Coupon validation" is currently missing in the milestone delivery
- Build currently fails

### Testing Guide Feedback

- Despite only having 2 tests, they covers the core logic except for the `transfer_ownership` method. Please consider either adding a test or explaining why none is needed.

- Tests pass.
    ```bash
    $ cargo +nightly test --features=test
        Updating crates.io index

        Updating git repository `https://github.com/paritytech/substrate.git`
    Downloaded parking_lot_core v0.9.2
    Downloaded ref-cast-impl v1.0.7
    Downloaded ref-cast v1.0.7
    Downloaded merlin v3.0.0
    Downloaded scale-info v2.1.1
    Downloaded scale-info-derive v2.1.1
    Downloaded ink_lang v3.0.1

    (...)

    Compiling ink_storage v3.0.1
    Compiling sp-core v6.0.0 (https://github.com/paritytech/substrate.git?branch=master#1b57cff6)
    Compiling ink_lang v3.0.1
    Compiling ocex v0.1.0 (/home/seraya/repos/ocex-smartcontract)
        Finished test [unoptimized + debuginfo] target(s) in 30.87s
        Running unittests (target/debug/deps/ocex-118ac0d3c1060c34)

    running 2 tests
    test ocex::tests::insert_coupons ... ok
    test ocex::tests::insert_coupon_activation ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
    ```

### Building Feedback

- Currently, the build fails with **ERROR: The wasm-opt optimization failed**. Unfortunately, the compiler doesn't state a reason for the failrure.

    ```bash
    $ cargo +nightly contract build

    [1/5] Building cargo project
        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate.git`
    Compiling compiler_builtins v0.1.69
    Compiling core v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core)
    Compiling libc v0.2.116
    Compiling cc v1.0.69
    Compiling memchr v2.4.1
    Compiling dlmalloc v0.2.3
    Compiling std v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/std)
    Compiling proc-macro2 v1.0.37
    Compiling unicode-xid v0.2.2
    Compiling syn v1.0.91
    Compiling typenum v1.15.0
    Compiling version_check v0.9.4
    Compiling serde v1.0.136
    Compiling subtle v2.4.1
    Compiling crunchy v0.2.2
    Compiling autocfg v1.1.0
    Compiling serde_derive v1.0.136
    Compiling arrayvec v0.7.2
    Compiling either v1.6.1
    Compiling byte-slice-cast v1.2.1
    Compiling cfg-if v1.0.0
    Compiling paste v1.0.7
    Compiling heck v0.4.0
    Compiling ink_prelude v3.0.1
    Compiling itertools v0.10.3
    Compiling num-traits v0.2.14
    Compiling generic-array v0.14.5
    Compiling unwind v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/unwind)
    Compiling quote v1.0.18
    Compiling digest v0.9.0
    Compiling block-buffer v0.10.2
    Compiling crypto-common v0.1.3
    Compiling libsecp256k1-core v0.3.0
    Compiling digest v0.10.3
    Compiling blake2 v0.10.4
    Compiling libsecp256k1-gen-ecmult v0.3.0
    Compiling libsecp256k1-gen-genmult v0.3.0
    Compiling libsecp256k1 v0.7.0
    Compiling toml v0.5.9
    Compiling impl-serde v0.3.2
    Compiling synstructure v0.12.6
    Compiling ink_lang_ir v3.0.1
    Compiling thiserror-impl v1.0.30
    Compiling impl-trait-for-tuples v0.2.2
    Compiling derive_more v0.99.17
    Compiling zeroize_derive v1.3.2
    Compiling ink_storage_derive v3.0.1
    Compiling thiserror v1.0.30
    Compiling proc-macro-crate v1.1.3
    Compiling parity-scale-codec-derive v3.1.2
    Compiling parity-scale-codec v3.1.2
    Compiling rustc-std-workspace-core v1.99.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/rustc-std-workspace-core)
    Compiling ink_lang_codegen v3.0.1
    Compiling ink_primitives v3.0.1
    Compiling alloc v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/alloc)
    Compiling cfg-if v0.1.10
    Compiling adler v0.2.3
    Compiling rustc-demangle v0.1.21
    Compiling ink_lang_macro v3.0.1
    Compiling rustc-std-workspace-alloc v1.99.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/rustc-std-workspace-alloc)
    Compiling panic_unwind v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/panic_unwind)
    Compiling panic_abort v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/panic_abort)
    Compiling gimli v0.25.0
    Compiling hashbrown v0.12.0
    Compiling std_detect v0.1.5 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/stdarch/crates/std_detect)
    Compiling object v0.26.2
    Compiling miniz_oxide v0.4.0
    Compiling addr2line v0.16.0
    Compiling proc_macro v0.0.0 (/home/seraya/.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/proc_macro)
    Compiling rand_core v0.6.3
    Compiling arrayref v0.3.6
    Compiling static_assertions v1.1.0
    Compiling rlibc v1.0.0
    Compiling byteorder v1.4.3
    Compiling base64 v0.13.0
    Compiling zeroize v1.5.4
    Compiling keccak v0.1.0
    Compiling subtle-ng v2.5.0
    Compiling opaque-debug v0.3.0
    Compiling array-init v2.0.0
    Compiling hex v0.4.3
    Compiling ink_allocator v3.0.1
    Compiling rand v0.8.5
    Compiling merlin v3.0.0
    Compiling ink_env v3.0.1
    Compiling block-buffer v0.9.0
    Compiling curve25519-dalek-ng v4.1.1
    Compiling sha2 v0.9.9
    Compiling ink_storage v3.0.1
    Compiling schnorrkel v0.10.2
    Compiling ink_eth_compatibility v3.0.1
    Compiling ink_lang v3.0.1
    Compiling ocex v0.1.0 (/tmp/cargo-contract_T5ykFf)
        Finished release [optimized] target(s) in 16.39s
    [2/5] Post processing wasm file
    [3/5] Optimizing wasm file
    ERROR: The wasm-opt optimization failed.

    The error which wasm-opt returned was: 
    ```
