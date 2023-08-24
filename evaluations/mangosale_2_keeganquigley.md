# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoSale_Protocol.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** dsm-w3f

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                  | <ul><li>[x] </li></ul>|             [License](https://github.com/Mangoboxlabs/MangoSaleV2/blob/main/LICENSE)              | Apache 2.0                                  |
| 0b.    | Documentation            | <ul><li>[x] </li></ul>|     [Documentation](https://github.com/Mangoboxlabs/MangoSaleV2/blob/main/contract/README.md)     | Looks good.                                 |
| 0c.    | Testing Guide            | <ul><li>[x] </li></ul>| [Testing Guide](https://github.com/Mangoboxlabs/MangoSaleV2/blob/main/contract/README.md#testing) | Docs could be improved for clarity. |
| 0d.    | Docker         | <ul><li>[x] </li></ul>|              [Docker](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/docker)               | Looks good.                                          |
| 0e.    | Article         | <ul><li>[x] </li></ul>|              [Article](https://medium.com/@mangoboxlabs/encryption-project-based-on-polkadot-ecology-mangosale-503fcb5d7913)              | Looks good. |
| 1.     | Ink! Contract: Launchpad           | <ul><li>[x] </li></ul>|   [Launchpad](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/contract/launchpad)   | Looks good. |
| 2.     | Ink! Contract: Fair launch           | <ul><li>[x] </li></ul>|      [Fair Launch](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/contract/fair_launchpad)      | Looks good. |
| 3.     | Ink! Contract: Dutch Auction           | <ul><li>[x] </li></ul>|   [Dutch Auction](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/contract/dutch_auction)   | Looks good. |
| 4.     | Front-end UI	         | <ul><li>[x] </li></ul>|          [Front-end UI](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/frontend)           | Looks good.                     |
| 5.     | Front-end integration (e2e) test	         | <ul><li>[x] </li></ul>|      [e2e](https://github.com/Mangoboxlabs/MangoSaleV2/tree/main/frontend#cypress-e2e-test)  | Looks good.                |

## General Notes

`dutch_auction` contract currently fails:
```rust
test dutch_auction::tests::create_works ... ok
test dutch_auction::tests::buy_works ... ok
test dutch_auction::tests::claim_works ... ok
test dutch_auction::tests::get_all_presale_works ... ok
test dutch_auction::tests::get_current_price_works ... FAILED
test dutch_auction::tests::get_presale_charge_works ... ok
test dutch_auction::tests::get_presale_works ... ok
test dutch_auction::tests::get_reward_works ... ok
test dutch_auction::tests::get_user_presale_works ... ok
test dutch_auction::tests::state_works ... ok

failures:

---- dutch_auction::tests::get_current_price_works stdout ----
thread 'dutch_auction::tests::get_current_price_works' panicked at 'assertion failed: mp.get_current_price(0) == 0', lib.rs:329:13
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

`dutch_auction` cargo clippy also fails:
```rust
warning: `dutch_auction` (lib) generated 10 warnings (run `cargo clippy --fix --lib -p dutch_auction` to apply 10 suggestions)
```

`fair_launchpad` cargo clippy fails:
```rust
warning: `fair_launchpad` (lib) generated 10 warnings (run `cargo clippy --fix --lib -p fair_launchpad` to apply 10 suggestions)

```
`launchpad` cargo clippy fails:
```rust
warning: `launchpad` (lib) generated 6 warnings (run `cargo clippy --fix --lib -p launchpad` to apply 6 suggestions)
```

There is a lot of Solidity-style [NatSpec](https://docs.soliditylang.org/en/develop/natspec-format.html#natspec) comments in your code. As far as I'm aware, NatSpec and Doxygen formatting isn't compatible with Rust. Instead Rust uses `rustdoc` via `cargo doc`. Is there a reason you have included these?

Front-end runs dev and prod successfully:
```rust
  File                                   Size                                   Gzipped

  dist/js/chunk-vendors.af560596.js      8348.92 KiB                            3727.95 KiB
  dist/js/278.15319c3a.js                1512.30 KiB                            421.55 KiB
  dist/js/app.68f3fb1b.js                98.87 KiB                              21.75 KiB
  dist/js/45.1b6bfdc1.js                 13.81 KiB                              2.79 KiB
  dist/js/217.fe9687b3.js                13.16 KiB                              4.58 KiB
  dist/js/645.ea71e261.js                10.58 KiB                              2.57 KiB
  dist/js/842.2df80798.js                6.33 KiB                               1.38 KiB
  dist/js/521.31fd99f3.js                6.03 KiB                               2.04 KiB
  dist/js/605.f94c2c2e.js                2.14 KiB                               0.80 KiB
  dist/css/chunk-vendors.089758fa.css    509.47 KiB                             60.12 KiB
  dist/css/app.64d58fad.css              218.41 KiB                             35.52 KiB
  dist/css/645.539b17fa.css              3.11 KiB                               0.68 KiB
  dist/css/521.c0b5ce92.css              2.52 KiB                               0.58 KiB
  dist/css/45.8a4574ad.css               2.03 KiB                               0.48 KiB
  dist/css/217.f632aa8c.css              0.88 KiB                               0.38 KiB
  dist/css/605.ac6dbc63.css              0.25 KiB                               0.18 KiB
  dist/css/842.66041abe.css              0.23 KiB                               0.16 KiB

  Images and other types of assets omitted.
  Build at: 2023-08-14T16:27:14.812Z - Hash: 4e84a1474e140b7d - Time: 30664ms

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
 ```
## Evaluation V2

Thanks for making the changes! The dutch_auction test no longer fails and cargo clippy errors were fixed. Moving on, I ran into a few more issues below:

## ink! Contracts / back-end

I switched to the following toolchain settings: `nightly-2022-06-27`, `cargo-contract 0.15.0`, and all the necessary prerequisites, but when running `cargo +nightly-2022-06-27 contract build --optimization-passes=0` all three contracts fail to compile with this error about `wasm-opt`:
 ```rust
     Finished release [optimized] target(s) in 44.56s
 [2/5] Post processing wasm file
 [3/5] Optimizing wasm file
ERROR: wasm-opt not found! Make sure the binary is in your PATH environment.
We use this tool to optimize the size of your contract's Wasm binary.

wasm-opt is part of the binaryen package. You can find detailed
installation instructions on https://github.com/WebAssembly/binaryen#tools.

There are ready-to-install packages for many platforms:
* Debian/Ubuntu: apt-get install binaryen
* Homebrew: brew install binaryen
* Arch Linux: pacman -S binaryen
* Windows: binary releases at https://github.com/WebAssembly/binaryen/releases
```
This cargo-contract version is from 2021, is there a reason such an old version is used?

**Suggestion**: Also I want to add a suggestion: It would be nice to add a Cargo.toml file in the root dir or contract dir so that unit tests for all three contracts can be run at the same time, rather than having to go into each folder and run the test individually. Here is [an example](https://github.com/TheDotflow/dotflow-ink/blob/main/Cargo.toml)https://github.com/TheDotflow/dotflow-ink/blob/main/Cargo.toml. This will make it a lot easier to run tests when there are a ton of them.

## Front-end

1. purchaseToken.cy currently fails:

   <br><img width="507" alt="mangosale error 3" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/a300fed4-3f8c-49bd-a91f-b203f9544842">

2. The "Create" button (incorrectly spelled "creat") does nothing when the wallet has no funds. There should most likely be an error message here.

3. I'm not able to create a token, any parameters I enter result in a duplicate contract error:

   <br>![mangosale error 4](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/2fc361ab-c1db-479c-a722-1cb5c9d3341b)

4. If the user no balance in the auction, it displays as "not a number" when it should probably display 0:

   <br>![mangosale error 6](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/82f77f3d-df70-44f4-9697-198ad41f11f3)

## Evaluation V3

Above issues have been fixed! Now however there are two additional UI errors. When running `createToken.cy` I am able to sign the transaction with my test account:

<br><img width="552" alt="tx" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/90b323ea-3f6b-4fe5-97bd-ab7e141a4ae4">

But `createLaunchpad.cy` and `purchaseToken.cy` both fail respectively:

<br><img width="506" alt="mango fail" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/4fd3a364-99b8-4c8d-8f58-d521c377678e">
<br><img width="506" alt="mango fail 2" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/64379e3e-fd16-4924-850d-95c1e6726185">

I think this is happening because the inital createToken.cy test doesn't complete due to lack of funds in the test wallet.

## Evaluation V5

All issues have been resolved and I am able to run Cypress e2e tests in Chrome, as well as compile the contracts and test the functions manually. Everything works as expected.
