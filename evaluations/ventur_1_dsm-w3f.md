# Evaluation

- **Status:** In Progress
- **Application Document:** [Ventur Application](https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md)
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur/blob/main/LICENSE |  | 
| 0b.| Documentation |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur#run-tests |  | 
| 0c.| Testing Guide |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur#run-tests |   | 
| 0d.| Docker |<ul><li>[ ] </li></ul>| https://github.com/Popular-Coding/ventur#running-a-ventur-node-docker | Fail to run | 
| 0e.| Article |<ul><li>[x] </li></ul>| https://docs.google.com/document/d/1aQOTNwcOgZ5_8VDloDmaGEs6si9hm5dCMSDXFHwo4LY/edit?usp=sharing | | 
| 1. | Substrate module: escrow |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur/tree/main/pallets/escrow |  | 
| 2. | Substrate module: contracted-payment-process |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur/tree/main/pallets/payments |  |
| 3. | Substrate chain: Ventur |<ul><li>[x] </li></ul>| https://github.com/Popular-Coding/ventur |  |


# General Notes

# Evaluation V2


## Docker

I saw that you have pipelines in which the docker-compose and docker-build are running. However, when I tried to run it with docker-compose I got the following problems. Maybe the Rust version of the image is incompatible to build the node/pallets.

Docker compose command failed with the following msg:

```
error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/registry/src/github.com-1ecc6299db9ec823/parity-db-0.3.17/src/column.rs:553:34
    |
553 |         let stats = self.collect_stats.then_some(&self.stats);
    |                                        ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

For more information about this error, try `rustc --explain E0658`.
error: could not compile `parity-db` due to previous error
warning: build failed, waiting for other jobs to finish...
error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/git/checkouts/substrate-7e08433d4c370a21/7c4ac35/frame/support/procedural/src/construct_runtime/mod.rs:373:48
    |
373 |         let test_cfg = feature_set.remove(&&&"test").then_some(quote!(test)).into_iter();
    |                                                      ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/git/checkouts/substrate-7e08433d4c370a21/7c4ac35/frame/support/procedural/src/construct_runtime/mod.rs:387:48
    |
387 |         let test_cfg = feature_set.remove(&&&"test").then_some(quote!(test)).into_iter();
    |                                                      ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/git/checkouts/substrate-7e08433d4c370a21/7c4ac35/frame/support/procedural/src/construct_runtime/mod.rs:400:49
    |
400 |             let test_cfg = feature_set.remove(&&&"test").then_some(quote!(test)).into_iter();
    |                                                          ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/git/checkouts/substrate-7e08433d4c370a21/7c4ac35/frame/support/procedural/src/construct_runtime/mod.rs:416:48
    |
416 |         let test_cfg = feature_set.remove(&&&"test").then_some(quote!(test)).into_iter();
    |                                                      ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

error[E0658]: use of unstable library feature 'bool_to_option'
   --> /var/www/ventur-node/.cargo/git/checkouts/substrate-7e08433d4c370a21/7c4ac35/frame/support/procedural/src/construct_runtime/mod.rs:444:49
    |
444 |             let test_cfg = feature_set.remove(&&&"test").then_some(quote!(test)).into_iter();
    |                                                          ^^^^^^^^^
    |
    = note: see issue #80967 <https://github.com/rust-lang/rust/issues/80967> for more information

error: build failed
ERROR: 101

```

Docker build worked well.

## Code Quality

### Escrow Pallet

Test coverage increased.

lib.rs	219 / 255 (85.88%) (+32.64%)

All clippy warnings were fixed.

### Payments Pallet

Test coverage decreased.

lib.rs	95 / 124 (76.61%) (-5.00%)

All clippy warnings were fixed.

## Testing Guides

The requirement to lock more than the available balance was set up to not allow this case and the software is working as expected.


The payment using an escrow account worked well.


# Evaluation V1

## Docker

The script for running the system using docker failed. See the image below:

![image](https://user-images.githubusercontent.com/112647953/197856459-58eb4144-ae4d-478f-8a4d-4a7029847730.png)


## Testing Guides

### Payment Pallet

All steps of the tutorial worked well. 

### Escrow Pallet

I could lock more balance that I currently have in the Escrow when using the admin account to fund the escrow. Is this allowed?

![lock_more_than_I_have](https://user-images.githubusercontent.com/112647953/197858010-6c108144-db46-4521-aff4-7ba90553820d.jpg)


All steps of the tutorial worked well. Some steps are not included in the tutorial such as removing admin and disabling open contributions. Would be nice to include.

Regarding deliverable 3. Substrate chain: Ventur, the specification says: "Modules escrow and contracted-payment-process will be integrated into Ventur and interaction between them will be enabled, allowing for contracted-payment-process to source funds from an escrow address.". This use case is not present in the tutorial for testing. Please include.

## Code quality

### general

cargo clippy generated these warinings:

```
warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
   = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:41:6
   |
41 |   ) -> Result<
   |  ______^
42 | |     sc_service::PartialComponents<
43 | |         FullClient,
44 | |         FullBackend,
...  |
59 | |     ServiceError,
60 | | > {
   | |_^
   |
   = note: `#[warn(clippy::type_complexity)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> node/src/service.rs:152:26
    |
152 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
    |                          ^^^^^^^ help: change this to: `&str`
    |
    = note: `#[warn(clippy::ptr_arg)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: `ventur-node` (lib) generated 3 warnings
warning: useless conversion to the same type: `u128`
   --> node/src/benchmarking.rs:105:12
    |
105 |                 value: self.value.into(),
    |                        ^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
    |
    = note: `#[warn(clippy::useless_conversion)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: redundant clone
   --> node/src/benchmarking.rs:164:7
    |
164 |         call.clone(),
    |             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> node/src/benchmarking.rs:164:3
    |
164 |         call.clone(),
    |         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:166:40
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:166:31
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                     ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:167:8
    |
167 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
    |
167 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
```


### Escrow pallet

Coverage: lib.rs 148 / 278 (53.24%)
Some paths and full methods are not covered.

Good code documentation.


### Payment pallet

lib.rs	71 / 87 (81.61%) 

Some paths are not covered.


Code documentation is present but some parts are not compatible with rustdocs. Please use /// instead of // for documentation on top of methods.


cargo clippy generated this warning for the payment pallet:


```
warning: this function has too many arguments (8/7)
   --> pallets/payments/src/lib.rs:32:1
    |
32  |   #[frame_support::pallet]
    |   ^-----------------------
    |   |
    |  _in this procedural macro expansion
    | |
33  | | pub mod pallet {
34  | |     use frame_support::{
35  | |         pallet_prelude::RuntimeDebugNoBound,
...   |
252 | |             administrator_id: T::AccountId,
253 | |         ) -> DispatchResult {
    | |___________________________^
    |
    = note: `#[warn(clippy::too_many_arguments)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
    = note: this warning originates in the attribute macro `frame_support::pallet` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: `pallet-payments` (lib) generated 1 warning
```

