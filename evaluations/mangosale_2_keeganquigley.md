# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoSale_Protocol.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** dsm-w3f

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                  | <ul><li>[x] </li></ul>|             [License](https://github.com/Mangoboxlabs/MangoSale/blob/main/LICENSE)              | Apache 2.0                                                        |
| 0b.    | Documentation            | <ul><li>[x] </li></ul>|     [Documentation](https://github.com/Mangoboxlabs/MangoSale/blob/main/contract/README.md)     |                                                    |
| 0c.    | Testing Guide            | <ul><li>[x] </li></ul>| [Testing Guide](https://github.com/Mangoboxlabs/MangoSale/blob/main/contract/README.md#testing) |  |
| 0d.    | Docker         | <ul><li>[x] </li></ul>|              [Docker](https://github.com/Mangoboxlabs/MangoSale/tree/main/docker)               |                                                     |
| 0e.    | Article         | <ul><li>[x] </li></ul>|              [Article](https://medium.com/@mangoboxlabs/encryption-project-based-on-polkadot-ecology-mangosale-503fcb5d7913)               | |
| 1.     | Ink! Contract: Launchpad           | <ul><li>[x] </li></ul>|   [mango_airdrop](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/mango_airdrop)   |  |
| 2.     | Ink! Contract: Fair launch           | <ul><li>[x] </li></ul>|      [mango_lock](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/mango_lock)      |  |
| 3.     | Ink! Contract: Dutch Auction           | <ul><li>[x] </li></ul>|   [token_factory](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/token_factory)   |  |
| 4.     | Front-end UI	         | <ul><li>[x] </li></ul>|          [Front-end UI](https://github.com/Mangoboxlabs/MangoSale/tree/main/frontend)           |                      |
| 5.     | Front-end integration (e2e) test	         | <ul><li>[x] </li></ul>|      [e2e](https://github.com/Mangoboxlabs/MangoSale/tree/main/frontend#cypress-e2e-test)       |                       |

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
