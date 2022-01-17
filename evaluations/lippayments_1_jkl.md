# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/lip_payments.md
- **Milestone:** 1
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/crossbow_1_jkl.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License|<ul><li>[ X ] </li></ul>|https://github.com/virto-network/virto-node/blob/master/LICENSE| Correct License |
| 0b.   | Documentation |<ul><li>[ ] </li></ul>| https://github.com/virto-network/virto-node/blob/master/pallets/payment/README.md| Pallet documentation is sufficient. However, the general documentation for the project seems outdated. See more details in [Documentation Feedback](#documentation-feedback).|
| 0c. | Tests & benchmarks |<ul><li>[ ] </li></ul>| https://github.com/virto-network/virto-node/blob/master/pallets/payment/src/tests.rs <br> https://github.com/virto-network/virto-node/blob/master/pallets/payment/src/benchmarking.rs| See details in [Tests Feedback](#tests-feedback)|
| 1 | Escrow functionality |<ul><li>[ X ] </li></ul>| https://github.com/virto-network/virto-node/pull/95/files/de72267a8cd507275f255acf7a0e961669f81ab0  | Escrow functionality is sufficient. Side question: Your pull request was merged into master, but I can only see the payment pallet on master currently. why?|
| 2 | Dispute resolution |<ul><li>[ ] </li></ul>|https://github.com/virto-network/virto-node/pull/99/files| By what mechanism are accounts added to JudgeWhitelist? (Random, Elected, By Sudo Account or ) ? Also, is there possibility for partial refund instead of full release/cancel from escrow? Meaning, can the judge give 50% of the funds to claimant, and 50% to issuer? |



## General Notes

1. I like the fact that you have created benchmarks for your extrinsics. The reason for benchmarking is to analyse the weight off an extrinsic function. Meaning, when different parameters are inputted, we want to see how the computation inside the functions differs. For this reason, we benchmarking the extrinsic with varying inputs. In your benchmark, you are using many constants as inputs which defeats the purpose of benchmarking. 

2. I like that you are trying to simplify the build with a Makefile. Please try to document correctly the main MAKE commands for people in the ecosystem who want to use your work. 

3. I did commits on a new branch(evaluation) on your repo, but I don't have commit rights, so my commits were not accepted.

#### Documentation Feedback

Missing Readme Instructions on how to build node from source.

Please check the pull-request in your repo for updated documentation: https://github.com/virto-network/virto-node/pull/173
Please further improve...

Initially I ran cargo build --release but encountered this error.

```
Rust WASM toolchain not installed, please install it! Was fixed. 
   Compiling cumulus-client-consensus-common v0.1.0 (https://github.com/paritytech/cumulus?branch=polkadot-v0.9.13#0be8e8fc)
error: failed to run custom build command for `polkadot-runtime v0.9.13 (https://github.com/paritytech/polkadot?branch=release-v0.9.13#7d8f00b9)`

Caused by:
  process didn't exit successfully: `/Users/igorstojanov/code/evaluations/virto-node/target/release/build/polkadot-runtime-297f1ab0ff968cb2/build-script-build` (exit status: 1)
  --- stderr
  Rust WASM toolchain not installed, please install it!

  Further error information:
  ------------------------------------------------------------
     Compiling wasm-test v1.0.0 (/var/folders/bc/f51clqk55bdgvrc2yvpkkfwr0000gn/T/.tmpYXzcC5)
  error[E0463]: can't find crate for `std`
    |
    = note: the `wasm32-unknown-unknown` target may not be installed
    = help: consider downloading the target with `rustup target add wasm32-unknown-unknown`
    = help: consider building the standard library from source with `cargo build -Zbuild-std`

  For more information about this error, try `rustc --explain E0463`.
  error: could not compile `wasm-test` due to previous error
  ------------------------------------------------------------

warning: build failed, waiting for other jobs to finish...
error: build failed
```

This was resolved once I ran make dev=yes and cargo build --release again.

Another issue that I encountered is that the executable in your readme is incorrect. virto_node executable is not created, but ./target/release/virto_parachain is created. Make sure you have correct documentation that reflects you build and code.


Please update documentation accordingly. 

```shell
./target/release/virto-parachain --help
```
instead of
```shell
./target/release/virto_node --help
```



#### Tests Feedback

Running tests locally gave me the following error. 

```
error: `Tokens` does not have the std feature enabled, this will cause the `orml_tokens::GenesisConfig` type to be undefined.
  --> pallets/payment/src/mock.rs:26:1
   |
26 | / frame_support::construct_runtime!(
27 | |     pub enum Test where
28 | |         Block = Block,
29 | |         NodeBlock = Block,
...  |
35 | |     }
36 | | );
   | |_^
   |
   = note: this error originates in the macro `orml_tokens::__substrate_genesis_config_check::is_std_enabled_for_genesis` (in Nightly builds, run with -Z macro-backtrace for more info)

error[E0412]: cannot find type `GenesisConfig` in crate `orml_tokens`
  --> pallets/payment/src/mock.rs:26:1
   |
26 | / frame_support::construct_runtime!(
27 | |     pub enum Test where
28 | |         Block = Block,
29 | |         NodeBlock = Block,
...  |
35 | |     }
36 | | );
   | |_^ not found in `orml_tokens`
   |
   = note: this error originates in the macro `frame_support::construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider importing one of these items
   |
1  | use crate::mock::system::GenesisConfig;
   |
1  | use frame_system::GenesisConfig;
   |

error[E0422]: cannot find struct, variant or union type `GenesisConfig` in crate `orml_tokens`
   --> pallets/payment/src/mock.rs:136:15
    |
136 |     orml_tokens::GenesisConfig::<Test> { balances: vec![(PAYMENT_CREATOR, CURRENCY_ID, 100)] }
    |                  ^^^^^^^^^^^^^ not found in `orml_tokens`
    |
help: consider importing one of these items
    |
1   | use crate::mock::system::GenesisConfig;
    |
1   | use frame_system::GenesisConfig;
    |

error[E0283]: type annotations needed
   --> pallets/payment/src/mock.rs:26:1
    |
26  | / frame_support::construct_runtime!(
27  | |     pub enum Test where
28  | |         Block = Block,
29  | |         NodeBlock = Block,
...   |
35  | |     }
36  | | );
    | |_^ cannot infer type
    |
    = note: cannot satisfy `_: std::default::Default`
note: required by `std::default::Default::default`
    = note: this error originates in the derive macro `Default` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: unused import: `GenesisBuild`
 --> pallets/payment/src/mock.rs:5:33
  |
5 |     traits::{Contains, Everything, GenesisBuild},
  |                                    ^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

Some errors have detailed explanations: E0283, E0412, E0422.
For more information about an error, try `rustc --explain E0283`.
warning: `virto-payment` (lib test) generated 1 warning
error: could not compile `virto-payment` due to 4 previous errors; 1 warning emitted
```

This is because you are not including orml-tokens/std in your std output exclusion. I have added this via pull request to your repository: https://github.com/virto-network/virto-node/pull/173

After this fix, your tests were able to pass but your benchmarks failed:


```
Finished test [unoptimized + debuginfo] target(s) in 0.59s
     Running unittests (code/evaluations/virto-node/target/debug/deps/virto_payment-a970631e1db81881)

running 11 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_charging_fee_payment_works_when_canceled ... ok
test tests::test_charging_fee_payment_works ... ok
test tests::test_create_payment_works ... ok
test tests::test_cancel_payment_works ... ok
test tests::test_do_not_overwrite_logic_works ... ok
test tests::test_pay_with_remark_works ... ok
test tests::test_release_payment_works ... ok
test tests::test_remark_too_large_should_be_rejected ... ok
test tests::test_set_state_payment_works ... ok
test benchmarking::benchmark_tests::test_benchmarks ... FAILED

failures:

---- benchmarking::benchmark_tests::test_benchmarks stdout ----
failing benchmark tests:
resolve: "InvalidAction"
thread 'benchmarking::benchmark_tests::test_benchmarks' panicked at 'assertion failed: !anything_failed', pallets/payment/src/benchmarking.rs:82:1
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    benchmarking::benchmark_tests::test_benchmarks

test result: FAILED. 10 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
```

Can you let me know why this is? I see that you can run benchmarks also through 
```shell
./target/release/virto-parachain benchmark
```
but benchmark should be able to run independently. 
