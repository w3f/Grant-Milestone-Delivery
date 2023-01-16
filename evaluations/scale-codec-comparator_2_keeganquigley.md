
# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/scale-codec-comparator.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.     | License   | <ul><li>[x] </li></ul> | MIT License                            |       |
| 0b.     | Documentation       | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/scale-codec-comparator                                                                        | Looks good.   |
| 1.     | Tests         | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/scale-codec-comparator#how-to-test                 | Successful.      |
| 2.     | Github action | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/scale-codec-comparator/tree/main/.github/workflows | Successful on local fork.      |

# General Notes

`make` builds successfully but generates the following warnings:

```rust
cargo build && mkdir lib && mv target/debug/libscale_ffi.dylib lib/libscale_ffi.dylib
   Compiling SCALE-testing-interface v0.1.0 (/Users/keeganquigley/scale-codec-comparator)
warning: unused import: `std::time::Duration`
 --> src/lib.rs:4:5
  |
4 | use std::time::Duration;
  |     ^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: variable does not need to be mutable
   --> src/lib.rs:194:9
    |
194 |     let mut u32_fixed: [u32; 6] = <[u32; 6]>::decode(&mut &bytes_raw[..]).unwrap();
    |         ----^^^^^^^^^
    |         |
    |         help: remove this `mut`
    |
    = note: `#[warn(unused_mut)]` on by default

warning: `SCALE-testing-interface` (lib) generated 2 warnings
    Finished dev [unoptimized + debuginfo] target(s) in 1.02s]
```

lib.rs file generates one warning during `cargo test`:
```rust
warning: variable does not need to be mutable
   --> src/lib.rs:194:9
    |
194 |     let mut u32_fixed: [u32; 6] = <[u32; 6]>::decode(&mut &bytes_raw[..]).unwrap();
    |         ----^^^^^^^^^
    |         |
    |         help: remove this `mut`
    |
    = note: `#[warn(unused_mut)]` on by default

warning: `SCALE-testing-interface` (lib test) generated 1 warning
    Finished test [unoptimized + debuginfo] target(s) in 0.84s
     Running unittests src/lib.rs (/Users/keeganquigley/scale-codec-comparator/target/debug/deps/scale_ffi-51ac330dbdd3a5f3)

running 1 test
test codec ... ok
```
`cargo clippy` generates a number of errors. Please consider checking these to see if they can be fixed.
