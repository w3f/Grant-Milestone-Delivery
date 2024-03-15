# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RegionX.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [CoreHub](https://github.com/RegionX-Labs/CoreHub/blob/master/LICENSE) [RegionX contracts](https://github.com/RegionX-Labs/RegionX/blob/main/LICENSE) | GPLV3 License | 
| **0b.**  | Documentation | <ul><li>[x] </li></ul> | [White Paper](https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf) [Wiki](https://regionx.gitbook.io/wiki) | Great docs! | 
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Simulated Environment](https://github.com/RegionX-Labs/Coretime-Mock) [Contract Tests](https://github.com/RegionX-Labs/RegionX?tab=readme-ov-file#3-develop) [Local frontend testing](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#set-up-development-environment) | Easy-to-follow guide | 
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Frontend Docker](https://github.com/RegionX-Labs/CoreHub?tab=readme-ov-file#run-with-docker) | Works. | 
| **0e.** | Article | <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@regionx/the-regionx-coretime-market-17c713cad755) | Good. | 
| **1.** | Cross-chain Transfer UI | <ul><li>[x] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/tree/master/src/pages/transfer) | Good. | 
| **2.** | Coretime Market Dashboard UI | <ul><li>[x] </li></ul> | [Code](https://github.com/RegionX-Labs/CoreHub/blob/master/src/pages/market/marketplace.tsx)  | Good. | 
| **3.** | Coretime Market contract | <ul><li>[x] </li></ul> | [Code](https://github.com/RegionX-Labs/RegionX/tree/main/contracts/coretime_market), [e2e-tests](https://github.com/RegionX-Labs/RegionX/tree/main/tests) | Good. | 
| **4.** | Coretime Market developer documentation | <ul><li>[x] </li></ul> | [Wiki: Integration with the market](https://regionx.gitbook.io/wiki/build/integration-with-the-coretime-market) | Good. | 

# General Notes

Nice work! The smart contracts and UI compile successfully locally, and I'm able to also manually test the deployed version. Website works great and I can purchase cores, transfer, partition, interlace, assign, sell, and unlist successfully. I was also able to make cross-chain transfers of coretime between the relay chain, contracts chain, and coretime chain.

<img width="1140" alt="core" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/5e285aa2-abda-4a28-a367-fd2b8c800443">

<img width="1064" alt="core 2" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/4d51f8df-9bbd-4852-b5a1-2fa87cc2df74">

<img width="699" alt="core 3" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/082c8cf4-d869-47c6-9d84-816cab79411a">

<img width="699" alt="core 4" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/c059b1e3-d570-47de-b90a-d4f8157350f0">

<img width="699" alt="core 5" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/ef14a96e-b0ff-4e83-a64f-f4e534994638">

<img width="1006" alt="core 6" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/33fc25ab-2477-43db-afca-7e08ab762a4b">

Launches successfully w/ Chopsticks:

<details>
  <summary>Output</summary>

```ts
> coretime-mock@1.0.0 chopsticks
> npx @acala-network/chopsticks@latest -c ./configs/coretime-rococo.yml

Need to install the following packages:
@acala-network/chopsticks@0.9.10
Ok to proceed? (y) y
npm WARN deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
[22:38:30.767] INFO: Rococo Coretime RPC listening on port 8000
    app: "chopsticks"
```
</details>

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

## Contracts

`coretime_market` 1 unit test passes:

```rust
running 1 test
test tests::calculate_region_price_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Contract builds successfully.

<details>
  <summary>Output</summary>

```rust
   Compiling metadata-gen v0.1.0 (/private/var/folders/6_/b7tdvp0d6h779ktj0h92w5km0000gn/T/cargo-contract_B0bpKF/contracts/coretime_market/.ink/metadata_gen)
    Finished `release` profile [optimized] target(s) in 1m 06s
     Running `/Users/keeganquigley/RegionX/target/ink/coretime_market/release/metadata-gen`
 [4/4] Generating bundle

Original wasm size: 52.0K, Optimized: 20.6K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/Users/keeganquigley/RegionX/target/ink/coretime_market

  - coretime_market.contract (code + metadata)
  - coretime_market.wasm (the contract's code)
  - coretime_market.json (the contract's metadata)
```
</details>

`xc_regions` 5 unit tests passing:

<details>
  <summary>Output</summary>

  ```rust
  running 5 tests
test tests::mock_environment_helper_functions_work ... ok
test tests::get_metadata_works ... ok
test tests::init_works ... ok
test tests::metadata_version_gets_updated ... ok
test tests::remove_works ... ok
```
</details>

Contract builds successfully.

<details>
  <summary>Output</summary>

```rust
   Compiling metadata-gen v0.1.0 (/private/var/folders/6_/b7tdvp0d6h779ktj0h92w5km0000gn/T/cargo-contract_Qqlsna/contracts/xc_regions/.ink/metadata_gen)
    Finished `release` profile [optimized] target(s) in 1m 05s
     Running `/Users/keeganquigley/RegionX/target/ink/xc_regions/release/metadata-gen`
 [4/4] Generating bundle

Original wasm size: 51.1K, Optimized: 17.2K

The contract was built in RELEASE mode.

Your contract artifacts are ready. You can find them in:
/Users/keeganquigley/RegionX/target/ink/xc_regions

  - xc_regions.contract (code + metadata)
  - xc_regions.wasm (the contract's code)
  - xc_regions.json (the contract's metadata)
```
</details>

## UI

Builds and runs successfully on Mac:

<details>
  <summary>Output</summary>

```js
npm start

> start
> next start

- ready started server on [::]:3000, url: http://localhost:3000
Error: ENOENT: no such file or directory, open '/Users/keeganquigley/CoreHub/.next/BUILD_ID'
    at async open (node:internal/fs/promises:633:25)
    at async Object.readFile (node:internal/fs/promises:1242:14)
    at async setupFsCheck (/Users/keeganquigley/CoreHub/node_modules/next/dist/server/lib/router-utils/filesystem.js:141:19)
    at async initialize (/Users/keeganquigley/CoreHub/node_modules/next/dist/server/lib/router-server.js:55:23)
    at async Server.<anonymous> (/Users/keeganquigley/CoreHub/node_modules/next/dist/server/lib/start-server.js:178:36) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/Users/keeganquigley/CoreHub/.next/BUILD_ID'
}
```
</details>

Fails to compile locally on Ubuntu with a lot of warnings:

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

A couple minor UI issues to improve: Everytime I switch tabs or hit refresh I have to reconnect wallet. Also it is hard to adjust the indicator in some cases to for example set the partition for 5 minutes.
