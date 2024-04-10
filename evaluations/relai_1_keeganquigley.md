# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/FuturFusion.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** N/A

# General Notes

5 unit tests passing:

```rust
running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::submit_asset_works ... ok
test tests::pub_unpub_asset_works ... ok
test tests::buy_asset_works ... ok
test tests::update_asset_works ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

Consider fixing cargo clippy warnings:

<details>
  <summary>Output</summary>

```rust
Checking futur-assets-reg v0.1.0 (/home/ubuntu/relai-network/pallets/futur-assets-reg)
warning: unused variable: `review_str`
   --> pallets/futur-assets-reg/src/lib.rs:295:9
    |
295 |                 let review_str =
    |                     ^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_review_str`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: associated functions `do_fetch_reviews` and `fetch_reviews` are never used
   --> pallets/futur-assets-reg/src/lib.rs:271:6
    |
216 |     impl<T: Config> Pallet<T> {
    |     ------------------------- associated functions in this implementation
...
271 |         fn do_fetch_reviews() -> Result<(), http::Error> {
    |            ^^^^^^^^^^^^^^^^
...
320 |         fn fetch_reviews() -> Result<(), &'static str> {
    |            ^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

warning: equality checks against false can be replaced by a negation
   --> pallets/futur-assets-reg/src/lib.rs:163:12
    |
163 |             ensure!(maybe_asset.published == false, Error::<T>::AssetIsPublished);
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try simplifying it as shown: `!maybe_asset.published`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#bool_comparison
    = note: `#[warn(clippy::bool_comparison)]` on by default

warning: the borrowed expression implements the required traits
   --> pallets/futur-assets-reg/src/lib.rs:223:41
    |
223 |             AssetRegistry::<T>::insert(asset_id, &asset);
    |                                                  ^^^^^^ help: change this to: `asset`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
    = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: this let-binding has unit value
   --> pallets/futur-assets-reg/src/lib.rs:321:4
    |
321 |             let _ = Self::do_fetch_reviews().map_err(|_| "Failed to Reviews")?;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: omit the `let` binding: `Self::do_fetch_reviews().map_err(|_| "Failed to Reviews")?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#let_unit_value
    = note: `#[warn(clippy::let_unit_value)]` on by default

warning: empty doc comment
  --> pallets/futur-assets-reg/src/lib.rs:48:12
   |
48 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs
   = note: `#[warn(clippy::empty_docs)]` on by default

warning: empty doc comment
  --> pallets/futur-assets-reg/src/lib.rs:52:12
   |
52 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs

warning: empty doc comment
  --> pallets/futur-assets-reg/src/lib.rs:61:12
   |
61 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs

warning: `futur-assets-reg` (lib) generated 8 warnings (run `cargo clippy --fix --lib -p futur-assets-reg` to apply 3 suggestions)
    Checking handlebars v4.5.0
    Checking hyper-rustls v0.24.2
    Checking sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
    Checking futur-creators-reg v0.1.0 (/home/ubuntu/relai-network/pallets/futur-creators-reg)
warning: empty doc comment
  --> pallets/futur-creators-reg/src/lib.rs:42:12
   |
42 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs
   = note: `#[warn(clippy::empty_docs)]` on by default

warning: empty doc comment
  --> pallets/futur-creators-reg/src/lib.rs:46:12
   |
46 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs

warning: empty doc comment
  --> pallets/futur-creators-reg/src/lib.rs:50:12
   |
50 |     #[pallet::storage]
   |               ^^^^^^^
   |
   = help: consider removing or filling it
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#empty_docs

warning: `futur-creators-reg` (lib) generated 3 warnings
```
</details>
