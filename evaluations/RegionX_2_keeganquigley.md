# Evaluation


- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RegionX.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE) | GPLV3 License | 
| **0b.**  | Documentation | <ul><li>[x] </li></ul> | [White Paper](https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf) [Wiki](https://regionx.gitbook.io/wiki) |  | 
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Contract Tests](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#3-develop) [Local frontend testing](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) |  | 
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) |  | 
| **0e.** | Article | <ul><li>[ ] </li></ul> | [Medium Article](https://medium.com/@regionx/the-regionx-coretime-market-17c713cad755) |  | 
| **1.** | Cross-chain Transfer UI | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/tree/master/src/pages/transfer) |  | 
| **2.** | Coretime Market Dashboard UI | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/blob/master/src/pages/market/marketplace.tsx)  | | 
| **3.** | Coretime Market contract | <ul><li>[ ] </li></ul> | [Code](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/coretime_market), [e2e-tests](https://github.com/RegionX-Labs/RegionX/tree/main/tests) |  | 
| **4.** | Coretime Market developer documentation | <ul><li>[ ] </li></ul> | [Wiki: Integration with the market](https://regionx.gitbook.io/wiki/build/integration-with-the-coretime-market) |  | 

# General Notes

## Tests

5 e2e tests passing.

<details>
  <summary>Output</summary>

```rust
   Compiling ink_e2e v4.3.0
warning: unused import: `block_number_extension::BlockNumberProviderExtension`
  --> contracts/coretime_market/src/lib.rs:42:6
   |
42 |     use block_number_extension::BlockNumberProviderExtension;
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `RuntimeCall`, `UniquesCall`
  --> contracts/xc_regions/src/lib.rs:46:26
   |
46 |         uniques::{ItemDetails, UniquesCall},
   |                                ^^^^^^^^^^^
47 |         RuntimeCall, Version,
   |         ^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused import: `uniques_extension::UniquesExtension`
  --> contracts/xc_regions/src/lib.rs:49:6
   |
49 |     use uniques_extension::UniquesExtension;
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: `coretime_market` (lib test) generated 1 warning (run `cargo fix --lib -p coretime_market --tests` to apply 1 suggestion)
warning: `xc_regions` (lib test) generated 2 warnings (run `cargo fix --lib -p xc_regions --tests` to apply 1 suggestion)
    Finished `test` profile [unoptimized + debuginfo] target(s) in 7m 18s
     Running unittests src/lib.rs (target/debug/deps/block_number_extension-986bc510454016f5)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/coretime_market-3436cdd136e33710)

running 1 test
test tests::calculate_region_price_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/environment-2c4903f452c4e9c2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/extension-e1f10deb98e4a958)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/primitives-68b7f3f017494e6b)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/uniques_extension-c038b9289a8cec60)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/xc_regions-3d9fcd45dfdfd682)

running 5 tests
test tests::mock_environment_helper_functions_work ... ok
test tests::get_metadata_works ... ok
test tests::init_works ... ok
test tests::metadata_version_gets_updated ... ok
test tests::remove_works ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
```
</details>

Backend build successfully:

```rust
   Compiling environment v0.1.0 (/home/ubuntu/RegionX/environment)
   Compiling xc_regions v0.1.0 (/home/ubuntu/RegionX/contracts/xc_regions)
   Compiling coretime_market v0.1.0 (/home/ubuntu/RegionX/contracts/coretime_market)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 33.96s
```

## UI

Fails to compile locally with a lot of warnings:

<details>
  <summary>Output</summary>

```js
https://nextjs.org/telemetry


./src/components/Modals/Partition/index.tsx
85:6  Warning: React Hook useEffect has missing dependencies: 'regionMetadata.region' and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/Modals/TaskAssign/index.tsx
120:6  Warning: React Hook useEffect has a missing dependency: 'tasks'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/ListingCard/index.tsx
103:6  Warning: React Hook useEffect has missing dependencies: 'api', 'apiState', 'region', and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/RegionCard/index.tsx
116:6  Warning: React Hook useEffect has missing dependencies: 'api', 'apiState', 'region', and 'timeslicePeriod'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/components/elements/SaleInfo/index.tsx
54:6  Warning: React Hook useEffect has a missing dependency: 'saleInfo.saleStart'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/apis/CoretimeApi/index.tsx
43:6  Warning: React Hook useEffect has a missing dependency: 'toastError'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
48:6  Warning: React Hook useEffect has a missing dependency: 'toastSuccess'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/apis/RelayApi/index.tsx
32:6  Warning: React Hook useEffect has a missing dependency: 'toastError'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
37:6  Warning: React Hook useEffect has a missing dependency: 'toastSuccess'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
52:6  Warning: React Hook useEffect has a missing dependency: 'state'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/common/index.tsx
52:6  Warning: React Hook useEffect has a missing dependency: 'collectContextData'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/market/index.tsx
194:6  Warning: React Hook useEffect has a missing dependency: 'fetchMarket'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/regions/index.tsx
146:6  Warning: React Hook useEffect has a missing dependency: 'fetchRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
150:6  Warning: React Hook useEffect has a missing dependency: 'fetchRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/contexts/sales/index.tsx
109:6  Warning: React Hook useEffect has a missing dependency: 'fetchSaleInfo'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

./src/pages/purchase.tsx
59:6  Warning: React Hook useEffect has missing dependencies: 'fetchBalance', 'fetchCurreentPrice', and 'fetchCurrentPhase'. Either include them or remove the dependency array.  react-hooks/exhaustive-deps

./src/pages/transfer/ChainSelector.tsx
26:1  Warning: Assign arrow function to a variable before exporting as module default  import/no-anonymous-default-export

./src/pages/transfer/RegionSelector.tsx
36:1  Warning: Assign arrow function to a variable before exporting as module default  import/no-anonymous-default-export

./src/pages/transfer/index.tsx
86:6  Warning: React Hook useEffect has a missing dependency: 'handleNonWrappedRegions'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
   Linting and checking validity of types  ...Failed to compile.

./src/components/Modals/TaskAssign/index.tsx:132:15
Type error: Type 'string | number' is not assignable to type 'string | undefined'.
  Type 'number' is not assignable to type 'string'.

  130 |             </Typography>
  131 |             <Select
> 132 |               value={taskSelected || ''}
      |               ^
  133 |               onChange={(e) => selectTask(Number(e.target.value))}
  134 |             >
  135 |               {tasks.map(({ name, id }, index) => (
```
</details>

Still getting some compile errors with the `rococo-runtime` but the script continues to move on regardless:

<details>
  <summary>Output</summary>

```rust
error: failed to run custom build command for `rococo-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/rococo)`

Caused by:
  process didn't exit successfully: `/home/ubuntu/Coretime-Mock/polkadot-sdk/target/testnet/build/rococo-runtime-0acbd0cd5eba2a60/build-script-build` (exit status: 1)
  --- stderr
  Cannot compile the WASM runtime: the `wasm32-unknown-unknown` target is not installed!
  You can install it with `rustup target add wasm32-unknown-unknown` if you're using `rustup`.
warning: build failed, waiting for other jobs to finish...
    Building [====================>  ] 1348/1444: librocksdb-sys(build)
    ```

    ```rust
    ubuntu@ip-172-31-25-23:~/Coretime-Mock$ ./scripts/full_init.sh
   Compiling librocksdb-sys v0.11.0+8.1.1
warning: constant `LOG_TARGET` is never used
  --> substrate/frame/broker/src/lib.rs:48:7
   |
48 | const LOG_TARGET: &str = "runtime::broker";
   |       ^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-broker` (lib) generated 1 warning
   Compiling rococo-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/rococo)
   Compiling westend-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/westend)
   Compiling rocksdb v0.21.0
error: failed to run custom build command for `westend-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/westend)`

Caused by:
  process didn't exit successfully: `/home/ubuntu/Coretime-Mock/polkadot-sdk/target/testnet/build/westend-runtime-6135d12f406a8599/build-script-build` (exit status: 1)
  --- stderr
  Cannot compile the WASM runtime: the `wasm32-unknown-unknown` target is not installed!
  You can install it with `rustup target add wasm32-unknown-unknown` if you're using `rustup`.
warning: build failed, waiting for other jobs to finish...
error: failed to run custom build command for `rococo-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/rococo)`

Caused by:
  process didn't exit successfully: `/home/ubuntu/Coretime-Mock/polkadot-sdk/target/testnet/build/rococo-runtime-7614c5d5c33dce7b/build-script-build` (exit status: 1)
  --- stderr
  Cannot compile the WASM runtime: the `wasm32-unknown-unknown` target is not installed!
  You can install it with `rustup target add wasm32-unknown-unknown` if you're using `rustup`.
   Compiling librocksdb-sys v0.11.0+8.1.1
warning: constant `LOG_TARGET` is never used
  --> substrate/frame/broker/src/lib.rs:48:7
   |
48 | const LOG_TARGET: &str = "runtime::broker";
   |       ^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: `pallet-broker` (lib) generated 1 warning
   Compiling rococo-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/rococo)
   Compiling collectives-westend-runtime v3.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/cumulus/parachains/runtimes/collectives/collectives-westend)
   Compiling people-westend-runtime v0.1.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/cumulus/parachains/runtimes/people/people-westend)
error: failed to run custom build command for `rococo-runtime v7.0.0 (/home/ubuntu/Coretime-Mock/polkadot-sdk/polkadot/runtime/rococo)`

Caused by:
  process didn't exit successfully: `/home/ubuntu/Coretime-Mock/polkadot-sdk/target/testnet/build/rococo-runtime-0acbd0cd5eba2a60/build-script-build` (exit status: 1)
  --- stderr
  Cannot compile the WASM runtime: the `wasm32-unknown-unknown` target is not installed!
  You can install it with `rustup target add wasm32-unknown-unknown` if you're using `rustup`.
warning: build failed, waiting for other jobs to finish...
    Building [====================>  ] 1321/1444: collectives-westend-runtime(build.rs), people-westend-runtime(build.rs)             
```
</details>
