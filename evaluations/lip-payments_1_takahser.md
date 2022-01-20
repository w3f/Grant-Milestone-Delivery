# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/9f7b7d042b9af9bf2bf9e3c24f2ed05fceaf8276/applications/lip_payments.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x]</li></ul> | ['Unlicence' License](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/LICENSE) | "Unlicense" License |
| 0b. | Documentation | <ul><li>[]</li></ul> | [Main README](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/README.md) | See [Documentation](#documentation) section |
| 0c. | Tests and benchmarks | <ul><li>[]</li></ul> | [tests](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/tests.rs) | See [Tests & benchmarks](#tests-and-benchmarks) section |
| 1. | Escrow functionality | <ul><li>[x]</li></ul> | [Payment Pallet](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/lib.rs) | payment pallet contains escrow logic |  
| 2. | Dispute resolution  | <ul><li>[x]</li></ul> | [Payment Pallet](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/lib.rs) | payment pallet contains dispute logic |  

## General Notes

### Documentation

**Main README**

- Here you wrote
    > `virto` is a parachain node, which means it _must_ connect to a relay chain and be onboarded in order to
produce blocks.

    This is not entirely correct. Blocks can be produced by a parachain node however, they cannot be finalized.

- Instructions on how to run tests are missing (I used `cargo test`).

**Payment Pallet README**

- seems to be outdated. For example, I can't find any `create` extrinsic in your code while the `pay` and `pay_with_remark` extrinsics are missing in the doc. Please also make sure to format the document properly as especially the extrinsics section looks a bit messy.
- I also opened a [PR](https://github.com/virto-network/virto-node/pull/178/files) for some minor changes/improvments in your README.

**Inline docs**

- Pls fix [this](https://github.com/virto-network/virto-node/blob/bc0bd8ca74deb58499b9258094fcae462b96729d/pallets/payment/src/lib.rs#L45) copy-paste error

### Tests and benchmarks
  - The following information is missing in your README
    - How can I check the benchmarks? I tried both `cargo build --features runtime-benchmarks --tests` and `cargo test --features runtime-benchmarks` but both failed.

```
% cargo test --features runtime-benchmarks
   Compiling virto-runtime v0.3.0 (/Users/xxx/repos/virto-node/runtime)
   Compiling pallet-collective v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling pallet-babe v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling pallet-staking v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling pallet-beefy v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling pallet-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate?branch=polkadot-v0.9.13#fcc54a72)
   Compiling polkadot-erasure-coding v0.9.13 (https://github.com/paritytech/polkadot?branch=release-v0.9.13#7d8f00b9)
   Compiling pallet-collator-selection v3.0.0 (https://github.com/paritytech/cumulus?branch=polkadot-v0.9.13#0be8e8fc)
   Compiling cumulus-pallet-session-benchmarking v3.0.0 (https://github.com/paritytech/cumulus?branch=polkadot-v0.9.13#0be8e8fc)
   Compiling parachain-info v0.1.0 (https://github.com/paritytech/cumulus?branch=polkadot-v0.9.13#0be8e8fc)
error[E0046]: not all trait items implemented, missing: `successful_origin`
    --> /Users/xxx/.cargo/git/checkouts/substrate-7e08433d4c370a21/fcc54a7/frame/collective/src/lib.rs:990:1
     |
990  | / impl<
991  | |         O: Into<Result<RawOrigin<AccountId, I>, O>> + From<RawOrigin<AccountId, I>>,
992  | |         AccountId: Default,
993  | |         I,
...    |
1007 | |     }
1008 | | }
     | |_^ missing `successful_origin` in implementation
     |
     = help: implement the missing item: `fn successful_origin() -> OuterOrigin { todo!() }`

error[E0046]: not all trait items implemented, missing: `successful_origin`
    --> /Users/xxx/.cargo/git/checkouts/substrate-7e08433d4c370a21/fcc54a7/frame/collective/src/lib.rs:1011:1
     |
1011 | / impl<
1012 | |         O: Into<Result<RawOrigin<AccountId, I>, O>> + From<RawOrigin<AccountId, I>>,
1013 | |         N: U32,
1014 | |         AccountId,
...    |
1029 | |     }
1030 | | }
     | |_^ missing `successful_origin` in implementation
     |
     = help: implement the missing item: `fn successful_origin() -> OuterOrigin { todo!() }`

error[E0046]: not all trait items implemented, missing: `successful_origin`
    --> /Users/xxx/.cargo/git/checkouts/substrate-7e08433d4c370a21/fcc54a7/frame/collective/src/lib.rs:1035:1
     |
1035 | / impl<
1036 | |         O: Into<Result<RawOrigin<AccountId, I>, O>> + From<RawOrigin<AccountId, I>>,
1037 | |         N: U32,
1038 | |         D: U32,
...    |
1054 | |     }
1055 | | }
     | |_^ missing `successful_origin` in implementation
     |
     = help: implement the missing item: `fn successful_origin() -> OuterOrigin { todo!() }`

error[E0046]: not all trait items implemented, missing: `successful_origin`
    --> /Users/xxx/.cargo/git/checkouts/substrate-7e08433d4c370a21/fcc54a7/frame/collective/src/lib.rs:1060:1
     |
1060 | / impl<
1061 | |         O: Into<Result<RawOrigin<AccountId, I>, O>> + From<RawOrigin<AccountId, I>>,
1062 | |         N: U32,
1063 | |         D: U32,
...    |
1079 | |     }
1080 | | }
     | |_^ missing `successful_origin` in implementation
     |
     = help: implement the missing item: `fn successful_origin() -> OuterOrigin { todo!() }`

   Compiling orml-xtokens v0.4.1-dev (https://github.com/open-web3-stack/open-runtime-module-library?branch=polkadot-v0.9.13#1f520348)
   Compiling cumulus-pallet-xcmp-queue v0.1.0 (https://github.com/paritytech/cumulus?branch=polkadot-v0.9.13#0be8e8fc)
For more information about this error, try `rustc --explain E0046`.
error: could not compile `pallet-collective` due to 4 previous errors
warning: build failed, waiting for other jobs to finish...
error: build failed
```

  - Tests pass, however, there are only 10. Is there any specific reason, you didn't add unit tests for `create_payment`, `release_payment`, `cancel_payment` and `get_payment_details` functions that are part of the `PaymentHandler` in the payment pallet?
    ```
    % cargo test                                       
        Finished test [unoptimized + debuginfo] target(s) in 0.72s
        Running unittests (target/debug/deps/virto_parachain-0e3c4fbc21459394)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/virto_payment-e5adb8ad365e13b7)

    running 10 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_remark_too_large_should_be_rejected ... ok
    test tests::test_charging_fee_payment_works ... ok
    test tests::test_create_payment_works ... ok
    test tests::test_pay_with_remark_works ... ok
    test tests::test_charging_fee_payment_works_when_canceled ... ok
    test tests::test_release_payment_works ... ok
    test tests::test_do_not_overwrite_logic_works ... ok
    test tests::test_cancel_payment_works ... ok
    test tests::test_set_state_payment_works ... ok

    test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
    ```