# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_silentdata.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a.  | License | <ul><li>[x] </li></ul> | [Node.js library](https://github.com/appliedblockchain/silentdata-node-public/blob/main/LICENSE) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot-public/blob/main/LICENSE) | ...|
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Silent Data whitepaper](https://www.linkedin.com/smart-links/AQEE0cyaT_nw0g) <br/>[Node.js library](https://github.com/appliedblockchain/silentdata-node/blob/main/README.md) <br/>[Smart contract](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/README.md) | ...|
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> |[Guide](https://docs.google.com/document/d/1B5woRIl_ZNuahx007V6nXmjW3_Ne4aQ4kVFB-I_Bu0M/edit?usp=sharing) | ...|
| 0d.  | Docker | <ul><li>[x] </li></ul> |[Node.js library usage example](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/examples/Dockerfile) <br/>[Silent Data pallet](https://github.com/appliedblockchain/silentdata-polkadot/blob/main/docker/Dockerfile.node) | ...|
| 0e.  | Article | <ul><li>[x] </li></ul> |[Polkadot Foundation Partnership Silent Data](https://www.linkedin.com/pulse/polkadot-foundation-partnership-silent-data-silentdata)| ...|
| 1.  | Library | <ul><li>[x] </li></ul> |[silentdata-node](https://github.com/appliedblockchain/silentdata-node) | ...|
| 2.  | Smart Contract | <ul><li>[x] </li></ul> |[silentdata-polkadot](https://github.com/appliedblockchain/silentdata-polkadot) | ...|
| 3.  | Extension | <ul><li>[x] </li></ul> |[Secure enclave](https://github.com/appliedblockchain/silentdata-defi-core/compare/v0.4.0...v0.5.0-rc1) <br/>[Web application](https://github.com/appliedblockchain/silentdata-defi-app/compare/v0.4.0...v0.5.0-rc1) | Will these private repos be published? |

# General Notes

## Tests

6 tests for the pallet are successful:
```rust
running 6 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::decode_works ... ok
test tests::verify_and_decode_verify_error_catching_works ... ok
test tests::verify_and_decode_decode_error_catching_works ... ok
test tests::verify_and_decode_works ... ok
test tests::verify_works ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests silentdata

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
4 tests run successfully for the smart-contract:
```rust
running 4 tests
test silentdata::tests::decode_works ... ok
test silentdata::tests::sd_input_works ... ok
test silentdata::tests::verify_works ... ok
test silentdata::tests::verify_and_decode_works ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
