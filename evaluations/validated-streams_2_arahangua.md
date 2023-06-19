# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/validated-streams.md
- **Milestone:** 2 
- **Kusama Identity:** [HZrUkonEQc9tReQNndBTML5NbYWBaj8KGaHUGGxwq3jP9PY](https://explorer.polkascan.io/kusama/account/HZrUkonEQc9tReQNndBTML5NbYWBaj8KGaHUGGxwq3jP9PY)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/comrade-coop/validated-streams/blob/5dc862fc2fe3cab7e8b6e2272b89ff21607a4038/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/comrade-coop/validated-streams/blob/feed169d51143e1fd303a14a9aaaaaddb6f2a831/README.md) | easy to follow description with a schematic |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Running tests](https://github.com/comrade-coop/validated-streams/blob/feed169d51143e1fd303a14a9aaaaaddb6f2a831/README.md#testing) <br> [proofs](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/proofs/tests.rs) <br> [events](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/events/tests.rs) <br> [pallet](https://github.com/comrade-coop/validated-streams/blob/a8a55ab7f2f16401c8aefefccdcdfa4638ddb39a/pallet/src/tests.rs) | <ul><li> With 'on-chain proofs' : the project could be built successfully with ```cargo build --release --no-default-features```. However, tests for on-chain proofs fail (see below Outstanding Issues) </li></ul><ul><li> Without 'on-chain proofs' : `cargo tarpaulin` reports ~33% test coverage for the 'consensus' crate with 19 tests and ~7% coverage for the 'pallet' with 3 tests. The links provided for ['proofs'](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/proofs/tests.rs) and ['events'](https://github.com/comrade-coop/validated-streams/blob/main/vstreams/src/events/tests.rs) seem to point at invalid urls. Presumably these links are outdated with the recent changes (i.e., renaming of 'vstream' to 'consensus_validated_streams', integration of 'proof'/'event' to the 'consensus' crate).</li></ul><ul><li> Could not build benchmarks follwing the instruction (see Outstanding Issues).</li></ul> |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Main](https://github.com/comrade-coop/validated-streams/blob/64db1c20f561115f807f41c5da58bca7b3325d5a/Dockerfile) <br> [IRC](https://github.com/comrade-coop/validated-streams/blob/beb99456091f33f1f1b3cf6a555ff656c107e9cf/samples/irc/Dockerfile) <br> [Test script](https://github.com/comrade-coop/validated-streams/blob/main/scripts/run-example.sh) <br> [Benchmark](https://github.com/comrade-coop/validated-streams/blob/64db1c20f561115f807f41c5da58bca7b3325d5a/samples/tps-benchmark/Dockerfile) | <ul><li> Again, [Test script](https://github.com/comrade-coop/validated-streams/blob/main/scripts/run-example.sh) seems to point at the old url. Shouldn't it be https://github.com/comrade-coop/validated-streams/tree/main/samples/basic/run_example.sh ? </li></ul><ul><li> Also path to the stream.proto should be corrected (in run_example.sh) if we intend to use the same sample solution as in M1 for the integration test </li></ul>|
| **0e.** | Article |  <ul><li>[x] </li></ul> |[Google Docs link](https://docs.google.com/document/u/1/d/12EsVUDydsDWfngQP6-zYRiC-dFbn696Evr3VSxgcpjU/edit) | --
| 1. | Substrate module: Witnessed events block import | <ul><li>[x] </li></ul> |[Old](https://github.com/comrade-coop/validated-streams/blob/fa7e20c5f0bf34cd8b89f975eceb6e29955202ab/node/src/streams/services/witness_block_import.rs) <br><br>[New](https://github.com/comrade-coop/validated-streams/blob/9d1dd933395f9cca69834ccb43b3330922d531c4/consensus/src/block_import.rs) | The new implementation matches the description in delivery documentation. |
| 2. | Real-life testing | <ul><li>[x] </li></ul> | [TPS benchmark](https://github.com/comrade-coop/validated-streams/tree/c083a83ad497dcb338501c66691680b1acfc29f0/samples/tps-benchmark) | With the use of Docker, the benchmark runs smoothly. However, I was unable to test the benchmark without using Docker. (Didn't have access to multiple hardwares) |
| 3. | .NET client sample | <ul><li>[x] </li></ul> | [IRC sample](https://github.com/comrade-coop/validated-streams/tree/5dc862fc2fe3cab7e8b6e2272b89ff21607a4038/samples/irc) | IRC sample worked nicely 


</br>

## General Notes
- **19.06.23** : 
  - The main delta of M2 compared to M1 seemed to be 1) implementation of a substrate module for importing witnessed events and 2) devising a practical benchmark/application sample.
  - Inconsistent paths/urls should be corrected to confirm the full functionality of the contribution.  

</br>

## Outstanding Issues
**19.06.23** : <br>
**1. Problems with tests ('on-chain proofs')(rustc = 1.68.0)**

`cargo test -p consensus-validated-streams --no-default-features`
```rust
error[E0432]: unresolved import `super::RocksDbEventProofs`
 --> consensus/src/proofs/tests.rs:2:69
  |
2 |     EventProofsTrait, InMemoryEventProofs, OffchainStorageEventProofs, RocksDbEventProofs,
  |                                                                        ^^^^^^^^^^^^^^^^^^ no `RocksDbEventProofs` in `proofs`

warning: function `verify_events_validity` is never used
  --> consensus/src/events/mod.rs:99:15
   |
99 | pub(crate) fn verify_events_validity<Block, EventProofs, Client, AuthorityId>(
   |               ^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

For more information about this error, try `rustc --explain E0432`.
error: could not compile `consensus-validated-streams` due to previous error
warning: build failed, waiting for other jobs to finish...
warning: `consensus-validated-streams` (lib) generated 1 warning
```

`cargo test -p pallet-validated-streams --no-default-features`

<details>
<summary> open error output (click to expand) </summary>

```rust
error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/traits/metadata.rs:87:17
|
87 |         let mut res = vec![];
|                       ^^^
|
= note: consider importing one of these items:
        codec::alloc::vec
        crate::sp_std::vec
        scale_info::prelude::vec
        sp_std::vec

error: cannot find macro `vec` in this scope
    --> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/traits/misc.rs:1089:17
    |
1089 |             .type_params(vec![TypeParameter::new("T", Some(meta_type::<T>()))])
    |                          ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
    --> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/traits/misc.rs:1002:17
    |
1002 |             .type_params(vec![TypeParameter::new("T", Some(meta_type::<T>()))])
    |                          ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/value.rs:268:3
    |
268 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/value.rs:248:3
    |
248 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/value.rs:225:54
    |
225 |         let docs = if cfg!(feature = "no-metadata-docs") { vec![] } else { docs };
    |                                                            ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/nmap.rs:609:3
    |
609 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/nmap.rs:583:3
    |
583 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/nmap.rs:554:54
    |
554 |         let docs = if cfg!(feature = "no-metadata-docs") { vec![] } else { docs };
    |                                                            ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/map.rs:471:3
    |
471 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/map.rs:443:3
    |
443 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/map.rs:419:14
    |
419 |                 hashers: vec![Hasher::METADATA],
    |                          ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/map.rs:413:54
    |
413 |         let docs = if cfg!(feature = "no-metadata-docs") { vec![] } else { docs };
    |                                                            ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/double_map.rs:724:3
    |
724 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/double_map.rs:693:3
    |
693 |         vec![StorageInfo {
    |         ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/double_map.rs:666:14
    |
666 |                 hashers: vec![Hasher1::METADATA, Hasher2::METADATA],
    |                          ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/double_map.rs:660:54
    |
660 |         let docs = if cfg!(feature = "no-metadata-docs") { vec![] } else { docs };
    |                                                            ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/counted_map.rs:468:5
    |
468 |                 vec!["Counter for the related counted storage map"]
    |                 ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/types/counted_map.rs:466:5
    |
466 |                 vec![]
    |                 ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/migration.rs:291:16
    |
291 |     let mut key = vec![0u8; 32 + hash.len()];
    |                   ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/migration.rs:261:16
    |
261 |     let mut key = vec![0u8; 32 + hash.len()];
    |                   ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/migration.rs:250:16
    |
250 |     let mut key = vec![0u8; 32 + hash.len()];
    |                   ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/migration.rs:241:16
    |
241 |     let mut key = vec![0u8; 32 + hash.len()];
    |                   ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `vec` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/storage/migration.rs:232:16
    |
232 |     let mut key = vec![0u8; 32 + hash.len()];
    |                   ^^^
    |
    = note: consider importing one of these items:
            codec::alloc::vec
            crate::sp_std::vec
            scale_info::prelude::vec
            sp_std::vec

error: cannot find macro `thread_local` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/dispatch_context.rs:90:1
|
90 | environmental::environmental!(DISPATCH_CONTEXT: BTreeMap<TypeId, Box<dyn Any>>);
| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
|
= note: `thread_local` is in scope, but it is an attribute: `#[thread_local]`
= note: this error originates in the macro `$crate::thread_local_impl` which comes from the expansion of the macro `environmental::environmental` (in Nightly builds, run with -Z macro-backtrace for more info)

error[E0425]: cannot find value `GLOBAL` in this scope
--> /home/takim/.cargo/git/checkouts/substrate-7e08433d4c370a21/98f2e34/frame/support/src/dispatch_context.rs:90:1
|
90 | environmental::environmental!(DISPATCH_CONTEXT: BTreeMap<TypeId, Box<dyn Any>>);
| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ not found in this scope
|
= note: this error originates in the macro `environmental::environmental` (in Nightly builds, run with -Z macro-backtrace for more info)

For more information about this error, try `rustc --explain E0425`.
error: could not compile `frame-support` due to 29 previous errors

```
</details>

<br>

**2. Outdated urls?**
  - links for 'proofs' and 'events' in deliverable 0c are not valid. 
  - link 'Test_script' in deliverable 0d is not valid

**3. Problems with building benchmarks**
  - we get the same error for both with / without 'on-chain proofs' cases
```rust
   Compiling pallet-validated-streams v0.1.0 (/home/takim/work/grant_projects/validated-streams/pallet)
   Compiling vstreams-node-runtime v0.1.0 (/home/takim/work/grant_projects/validated-streams/runtime)
error[E0308]: mismatched types
  --> pallet/src/benchmarking.rs:18:24
   |
15 | / benchmarks! {
16 | |     validate_event {
17 | |         let event_id: T::Hash = T::Hash::default();
18 | |     }: _(RawOrigin::None, event_id, None)
   | |                           ^^^^^^^^ expected struct `H256`, found associated type
...  |
26 | |     )
27 | | }
   | |_- arguments to this function are incorrect
   |
   = note:       expected struct `sp_core::H256`
           found associated type `<T as frame_system::Config>::Hash`
   = help: consider constraining the associated type `<T as frame_system::Config>::Hash` to `sp_core::H256`
   = note: for more information, visit https://doc.rust-lang.org/book/ch19-03-advanced-traits.html
note: associated function defined here
  --> pallet/src/lib.rs:95:10
   |
95 |         pub fn validate_event(
   |                ^^^^^^^^^^^^^^
96 |             origin: OriginFor<T>,
97 |             event_id: H256,
   |             --------------

error[E0599]: no function or associated item named `verify_event` found for struct `Pallet` in the current scope
  --> pallet/src/benchmarking.rs:20:42
   |
20 |         assert!(pallet_validated_streams::<T>::verify_event(event_id));
   |                                                ^^^^^^^^^^^^ function or associated item not found in `Pallet<T>`
   |
  ::: pallet/src/lib.rs:43:5
   |
43 |     pub struct Pallet<T>(_);
   |     -------------------- function or associated item `verify_event` not found for this struct

Some errors have detailed explanations: E0308, E0599.
For more information about an error, try `rustc --explain E0308`.
error: could not compile `pallet-validated-streams` due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
error: failed to run custom build command for `vstreams-node-runtime v0.1.0 (/home/takim/work/grant_projects/validated-streams/runtime)`

Caused by:
  process didn't exit successfully: `/home/takim/work/grant_projects/validated-streams/target/release/build/vstreams-node-runtime-263ed3eed4608505/build-script-build` (exit status: 1)
  --- stdout
  Information that should be included in a bug report.
  Executing build command: RUSTFLAGS="-C link-arg=--export-table -Clink-arg=--export=__heap_base -C link-arg=--import-memory  " SKIP_WASM_BUILD="" "/home/takim/.rustup/toolchains/nightly-2023-01-01-x86_64-unknown-linux-gnu/bin/cargo" "rustc" "--target=wasm32-unknown-unknown" "--manifest-path=/home/takim/work/grant_projects/validated-streams/target/release/wbuild/vstreams-node-runtime/Cargo.toml" "--color=always" "--profile" "release"
  Using rustc version: rustc 1.68.0-nightly (574b64a97 2022-12-31)


  --- stderr
     Compiling pallet-validated-streams v0.1.0 (/home/takim/work/grant_projects/validated-streams/pallet)
     Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.40#98f2e345)
  error[E0308]: mismatched types
    --> /home/takim/work/grant_projects/validated-streams/pallet/src/benchmarking.rs:18:24
     |
  15 | / benchmarks! {
  16 | |     validate_event {
  17 | |         let event_id: T::Hash = T::Hash::default();
  18 | |     }: _(RawOrigin::None, event_id, None)
     | |                           ^^^^^^^^ expected struct `H256`, found associated type
  ...  |
  26 | |     )
  27 | | }
     | |_- arguments to this function are incorrect
     |
     = note:       expected struct `sp_core::H256`
             found associated type `<T as frame_system::Config>::Hash`
     = help: consider constraining the associated type `<T as frame_system::Config>::Hash` to `sp_core::H256`
     = note: for more information, visit https://doc.rust-lang.org/book/ch19-03-advanced-traits.html
  note: associated function defined here
    --> /home/takim/work/grant_projects/validated-streams/pallet/src/lib.rs:95:10
     |
  95 |         pub fn validate_event(
     |                ^^^^^^^^^^^^^^
  96 |             origin: OriginFor<T>,
  97 |             event_id: H256,
     |             --------------

  error[E0599]: no function or associated item named `verify_event` found for struct `Pallet` in the current scope
    --> /home/takim/work/grant_projects/validated-streams/pallet/src/benchmarking.rs:20:42
     |
  20 |         assert!(pallet_validated_streams::<T>::verify_event(event_id));
     |                                                ^^^^^^^^^^^^ function or associated item not found in `Pallet<T>`
     |
    ::: /home/takim/work/grant_projects/validated-streams/pallet/src/lib.rs:43:5
     |
  43 |     pub struct Pallet<T>(_);
     |     -------------------- function or associated item `verify_event` not found for this struct

  Some errors have detailed explanations: E0308, E0599.
  For more information about an error, try `rustc --explain E0308`.
  error: could not compile `pallet-validated-streams` due to 2 previous errors
  warning: build failed, waiting for other jobs to finish...
```
