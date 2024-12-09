# Evaluation

- **Status:** accepted
- **Application Document:** [pallet verifier](https://github.com/w3f/Grants-Program/blob/master/applications/pallet-verifier.md)
- **Milestone:** 1 & 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/davidsemakula/pallet-verifier/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/davidsemakula/pallet-verifier/blob/master/LICENSE-APACHE)| Dual-licensed|
| **0b.** | Documentation | <ul><li>[x] </li></ul> |[README](https://github.com/davidsemakula/pallet-verifier/blob/master/README.md) and [Architecture](https://github.com/davidsemakula/pallet-verifier/blob/master/ARCHITECTURE.md) | very nice, good inline docs! |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> |[Testing guide](https://github.com/davidsemakula/pallet-verifier/blob/master/TESTING.md) | good |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Article](https://davidsemakula.com/blog/introducing-pallet-verifier)    | nice one! |
| **1** | Rust binary crate [m1]| <ul><li>[x] </li></ul> |[custom rustc driver](https://github.com/davidsemakula/pallet-verifier/blob/master/src/driver.rs), [custom cargo subcommand](https://github.com/davidsemakula/pallet-verifier/blob/master/src/main.rs), [MIRAI integration](https://github.com/davidsemakula/pallet-verifier/blob/master/src/callbacks/verifier.rs) ([see also](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/driver.rs#L144-L168)) and [automatic tractable entry point generation](https://github.com/davidsemakula/pallet-verifier/blob/master/src/callbacks/entry_points.rs) ([see also](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/driver.rs#L124-L142)) | nice  |
 | **1** | Rust binary crate [m2]| <ul><li>[x] </li></ul> |[adding the `mirai-annotations` crate as a dependency to FRAME pallets without editing `Cargo.toml`](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/main.rs#L259-L273) (see also [this](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/driver.rs#L196-L254), [this](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/main.rs#L180-L223) and [this](https://github.com/davidsemakula/pallet-verifier/blob/844a49f85f434442202f724c2b5a8aecd0cf9d84/src/cli_utils.rs#L128-L138)), [adding MIRAI annotations to MIR, and more specifically to support automatically adding annotations for verifying that integer `as` conversions don't overflow/underflow nor lose precision](https://github.com/davidsemakula/pallet-verifier/blob/master/src/providers/int_cast_overflow.rs)| works |




## General Notes
A dockerfile was not a deliverable for this grant.


## Testing on non Polkadot-SDK pallets
Thanks for fixing the issue about dev-dependencies. Nice one.


## Tests

Installing works as described in the readme.

`` Installed package `pallet-verifier v0.1.0 (/home/ubuntu/pallet-verifier)` (executables `cargo-verify-pallet`, `pallet-verifier`)``

All tests are passing

````
 Compiling pallet-verifier v0.1.0 (/home/ubuntu/pallet-verifier)
    Finished test [unoptimized + debuginfo] target(s) in 13.15s
     Running tests/compile-test.rs (target/debug/deps/compile_test-f311e992002ca11c)
Compiler: "PALLET_VERIFIER_NO_COLOR"="true" /home/ubuntu/pallet-verifier/target/debug/pallet-verifier "--error-format=json" "-Zui-testing" "-Aunused" "-Adeprecated" "-Anonstandard_style" "--extern" "mirai_annotations=/home/ubuntu/pallet-verifier/target/debug/deps/libmirai_annotations-1ef028860d685aa4.rlib" "--out-dir" OUT_DIR
tests/ui/driver/no-specialized-dispatchable-calls.rs ... ok
tests/ui/driver/missing-dispatchable-definition.rs ... ok
tests/ui/driver/not-frame-pallet.rs ... ok
tests/ui/driver/tractable-skeleton-safe-arith-saturating.rs ... ok
tests/ui/driver/tractable-skeleton-safe-int-cast.rs ... ok
tests/ui/driver/tractable-skeleton-safe-arith-wrapping.rs ... ok
tests/ui/driver/tractable-skeleton.rs ... ok
tests/ui/driver/tractable-skeleton-arith-overflow.rs ... ok
tests/ui/driver/tractable-skeleton-div-by-zero.rs ... ok
tests/ui/driver/tractable-skeleton-int-cast-overflow.rs ... ok
tests/ui/driver/tractable-skeleton-panic.rs ... ok                                                                                                                                                                                                                                                                             

test result: ok. 11 passed

tests/ui/cargo/no-dispatchables/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable/Cargo.toml ... ok
tests/ui/cargo/not-frame-pallet/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-panic/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-arith-overflow/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-safe-int-cast/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-div-by-zero/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-safe-arith-saturating/Cargo.toml ... ok
tests/ui/cargo/minimal-tractable-int-cast-overflow/Cargo.toml ... ok
tests/ui/cargo/no-specialized-dispatchable-calls/Cargo.toml ... ok                                                                                                                                                                                                                                                             

test result: ok. 10 passed

tests/ui/sdk/preimage/Cargo.toml ... ok
tests/ui/sdk/multisig/Cargo.toml ... ok
tests/ui/sdk/treasury/Cargo.toml ... ok
tests/ui/sdk/balances/Cargo.toml ... ok
tests/ui/sdk/assets/Cargo.toml ... ok                                                                                                                                                                                                                                                                                          

test result: ok. 5 passed
````

## testing Polkadot-SDK pallets

via ``cargo bench``

all passing.

````
Benching pallet-multisig
  Analyzing benches/multisig (sdk version)
    Comment: "possible integer cast overflow" at `multisig/sdk/src/lib.rs:545`, affects `approve_as_multi` and `as_multi`

    dispatchable: `approve_as_multi` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `as_multi` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `as_multi_threshold_1` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `cancel_as_multi` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `multi_account_id` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `timepoint` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 6 passed; 0 failed; 2 true positive(s); 0 false positive(s); 0 false negative(s); finished in 69.760s

  Analyzing benches/multisig (edited version)
    Comment: fixes "possible integer cast overflow" at `multisig/edit/src/lib.rs:545`

    dispatchable: `approve_as_multi` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `as_multi` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `as_multi_threshold_1` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `cancel_as_multi` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `multi_account_id` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `timepoint` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 6 passed; 0 failed; 0 true positive(s); 0 false positive(s); 0 false negative(s); finished in 68.454s


Benching pallet-preimage
  Analyzing benches/preimage (sdk version)
    Comment: no diagnostics expected

    dispatchable: `ensure_updated` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `note_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `request_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `unnote_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `unrequest_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 5 passed; 0 failed; 0 true positive(s); 0 false positive(s); 0 false negative(s); finished in 68.350s

  Analyzing benches/preimage (edited version)
    Comment: introduces possible panic by replacing `debug_assert!` with `assert!` at `preimage/edit/src/lib.rs:439`

    dispatchable: `ensure_updated` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `note_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `request_preimage` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `unnote_preimage` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `unrequest_preimage` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 5 passed; 0 failed; 2 true positive(s); 0 false positive(s); 0 false negative(s); finished in 68.600s


Benching pallet-treasury
  Analyzing benches/treasury (sdk version)
    Comment: "possible attempt to add with overflow" at:
      - `treasury/sdk/src/lib.rs:637` which affects `spend`
      - `treasury/sdk/src/lib.rs:511` which affects `spend_local`

    dispatchable: `check_status` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `payout` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `remove_approval` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `spend` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `spend_local` ... ok
      1 expected; 1 found; 1 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `void_spend` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `account_id` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `approvals` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `pot` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `proposal_count` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `proposals` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `spend_funds` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 12 passed; 0 failed; 2 true positive(s); 0 false positive(s); 0 false negative(s); finished in 70.473s

  Analyzing benches/treasury (edited version)
    Comment: fixes "possible attempt to add with overflow" at:
      - `treasury/edit/src/lib.rs:637` which affects `spend`
      - `treasury/edit/src/lib.rs:511` which affects `spend_local`

    dispatchable: `check_status` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `payout` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `remove_approval` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `spend` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `spend_local` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    dispatchable: `void_spend` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `account_id` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `approvals` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `pot` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `proposal_count` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `proposals` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)
    pub assoc fn: `spend_funds` ... ok
      0 expected; 0 found; 0 true positive(s); 0 false positive(s); 0 false negative(s)

    bench result: ok. 12 passed; 0 failed; 0 true positive(s); 0 false positive(s); 0 false negative(s); finished in 71.253s


total bench result: ok. 46 passed; 0 failed; 0 filtered out; 6 true positive(s); 0 false positive(s); 0 false negative(s); finished in 416.893s
````



