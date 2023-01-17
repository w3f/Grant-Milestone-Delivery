
# Evaluation

- **Status:** Accepted
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

1 test fails when running `polkadot-js` test inside of /scale-codec-comparator/polkadot-js:

```js
 FAIL  test/base.spec.ts
  base ffi codec
    ✓ encodes compact<u32> (36 ms)
    ✓ decode compact<u32> (2 ms)
    ✕ encodes option<bool> (3 ms)
    ✓ decode option<bool> (40 ms)
    ✓ encodes bool (11 ms)
    ✓ decode bool (1 ms)
    ✓ encode result<u32,string> (4 ms)
    ✓ decode result<u32,string> (65 ms)
    ✓ encode struct (9 ms)
    ✓ decode struct (2 ms)
    ✓ encode enum (2 ms)
    ✓ decode enum (3 ms)
    ✓ encode (u32,u32) (3 ms)
    ✓ decode (u32,u32) (3 ms)
    ✓ encodes string (2 ms)
    ✓ decode string (3 ms)
    ✓ encode [u32;6] (3 ms)
    ✓ decode [u32;6] (1 ms)
    ✓ encode vec<u32> (30 ms)
    ✓ decode <u32> (2 ms)

  ● base ffi codec › encodes option<bool>

    expect(received).toEqual(expected) // deep equality

    Expected: "01"
    Received: "0101"

      80 |     it('encodes option<bool>', (): void => {
      81 |         expect(tohex(new Option(registry, bool, null).toU8a())).toEqual(libm.option_bool_encode("NONE"));
    > 82 |         expect(tohex(new Option(registry, bool, true).toU8a())).toEqual(libm.option_bool_encode("true"));
         |                                                                 ^
      83 |         expect(tohex(new Option(registry, bool, false).toU8a())).toEqual(libm.option_bool_encode("false"));
      84 |     });
      85 |     it('decode option<bool>', (): void => {

      at Object.<anonymous> (test/base.spec.ts:82:65)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 19 passed, 20 total
Snapshots:   0 total
Time:        2.751 s
Ran all test suites.
```
