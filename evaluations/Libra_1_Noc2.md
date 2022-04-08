# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Libra.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/atscaletech/libra/blob/main/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/atscaletech/libra/blob/main/README.md), [Readme lrp-protocol](https://github.com/atscaletech/libra/tree/main/pallets/lrp#lrp-protocol), [Readme Currencies registry](https://github.com/atscaletech/libra/tree/main/pallets/currencies-registry#currencies-registry)  | Only readme files, no inline documentation, but according to contract.  |
| 0c. | Testing | <ul><li>[x] </li></ul> | [lrp tests](https://github.com/atscaletech/libra/blob/main/pallets/lrp/src/tests.rs), [currencies tests](https://github.com/atscaletech/libra/blob/main/pallets/currencies-registry/src/tests.rs) | cargo test under pallets/lrp doesn't work, see below. Similar output for pallets/currencies-registry **Update 08.04.22:** Tests work now |
| 0d. | Live testnet |<ul><li>[x] </li></ul> | [wss://rpc.libra.atscale.xyz](wss://rpc.libra.atscale.xyz) | The testnet is currently not running or producing any blocks **Update 08.04.22:** Testnet is working |
| 1. | Substrate module: LRP pallet | <ul><li>[x] </li></ul> | [lrp](https://github.com/atscaletech/libra/blob/main/pallets/lrp) | Tests currently don't work, inline documentation would be nice **Update 08.04.22:** Everything works now and inline documentation was added |
| 2. | Substrate module: Currencies pallet | <ul><li>[x] </li></ul> | [currencies-registry](https://github.com/atscaletech/libra/blob/main/pallets/currencies-registry) | Tests currently don't work, inline documentation would be nice **Update 08.04.22:** Everything works now and inline documentation was added |
| 3. | Substrate based chain | <ul><li>[x] </li></ul> | [libra](https://github.com/atscaletech/libra) | Correct |

## General Notes

Initial delivery had some small issues, but they fixed everything very quickly. Given the price and scope of the application, they did a good job. 

**Cargo Test Error under pallets/lrp**

```
   Compiling pallet-lrp v0.0.0 (/Users/davidhawig/source/evaluations/libra/pallets/lrp)
error: `Balances` does not have the std feature enabled, this will cause the `pallet_balances::GenesisConfig` type to be undefined.
   --> pallets/lrp/src/mock.rs:150:1
    |
150 | / construct_runtime!(
151 | |     pub enum Runtime where
152 | |         Block = Block,
153 | |         NodeBlock = Block,
...   |
163 | |     }
164 | | );
    | |_^
    |
    = note: this error originates in the macro `pallet_balances::__substrate_genesis_config_check::is_std_enabled_for_genesis` (in Nightly builds, run with -Z macro-backtrace for more info)

error[E0412]: cannot find type `GenesisConfig` in crate `pallet_balances`
   --> pallets/lrp/src/mock.rs:150:1
    |
150 | / construct_runtime!(
151 | |     pub enum Runtime where
152 | |         Block = Block,
153 | |         NodeBlock = Block,
...   |
163 | |     }
164 | | );
    | |_^ not found in `pallet_balances`
    |
    = note: this error originates in the macro `construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider importing one of these items
    |
3   | use frame_system::GenesisConfig;
    |
3   | use orml_tokens::GenesisConfig;
    |

error[E0422]: cannot find struct, variant or union type `GenesisConfig` in crate `pallet_balances`
   --> pallets/lrp/src/mock.rs:185:20
    |
185 |         pallet_balances::GenesisConfig::<Runtime> { balances: vec![(ALICE, 1_000), (BOB, 1_000)] }
    |                          ^^^^^^^^^^^^^ not found in `pallet_balances`
    |
help: consider importing one of these items
    |
3   | use frame_system::GenesisConfig;
    |
3   | use orml_tokens::GenesisConfig;
    |

error[E0277]: the trait bound `CurrencyId<H256>: Serialize` is not satisfied
   --> pallets/lrp/src/mock.rs:104:2
    |
104 |     type CurrencyId = CurrencyId<Hash>;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `Serialize` is not implemented for `CurrencyId<H256>`
    |
note: required by a bound in `orml_tokens::Config::CurrencyId`
   --> /Users/davidhawig/source/evaluations/libra/open-runtime-module-library/tokens/src/lib.rs:189:48
    |
189 |         type CurrencyId: Parameter + Member + Copy + MaybeSerializeDeserialize + Ord + TypeInfo + MaxEncodedLen;
    |                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^ required by this bound in `orml_tokens::Config::CurrencyId`

error[E0277]: the trait bound `for<'de> CurrencyId<H256>: Deserialize<'de>` is not satisfied
   --> pallets/lrp/src/mock.rs:104:2
    |
104 |     type CurrencyId = CurrencyId<Hash>;
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `for<'de> Deserialize<'de>` is not implemented for `CurrencyId<H256>`
    |
note: required by a bound in `orml_tokens::Config::CurrencyId`
   --> /Users/davidhawig/source/evaluations/libra/open-runtime-module-library/tokens/src/lib.rs:189:48
    |
189 |         type CurrencyId: Parameter + Member + Copy + MaybeSerializeDeserialize + Ord + TypeInfo + MaxEncodedLen;
    |                                                      ^^^^^^^^^^^^^^^^^^^^^^^^^ required by this bound in `orml_tokens::Config::CurrencyId`

error[E0283]: type annotations needed
   --> pallets/lrp/src/mock.rs:150:1
    |
150 | / construct_runtime!(
151 | |     pub enum Runtime where
152 | |         Block = Block,
153 | |         NodeBlock = Block,
...   |
163 | |     }
164 | | );
    | |_^ cannot infer type
    |
    = note: cannot satisfy `_: std::default::Default`
```

