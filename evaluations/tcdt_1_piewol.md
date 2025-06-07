# Evaluation

- **Status:** accepted
- **Application Document:** private
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/tcdt-lab/bcdns/blob/master/LICENSE) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Readme](https://github.com/tcdt-lab/bcdns/blob/master/README.md)| detailed documentation. very nice. | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/tests.rs), [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/tests.rs)   | unit tests all passing | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/Dockerfile) | works | 
| 1 | pallet-root-dns |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/lib.rs) | ok | 
| 2 | pallet-tld |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/lib.rs) | ok |



## General Notes
builds successfully and all tests passing.


## Feedback
Nice to see that all inputs are being validated. I appreciate the pivot to bounded vectors in both pallets. Both pallets look good to me. Thanks for improving the pallet-tld documentation.

## Docker
The docker image builds and runs successfully. Thanks for the quick fix.


## Tests

````
/pallet_rootdns-b8a52eb2420dc771)

running 6 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::register_tld_fails_for_duplicate ... ok
test tests::register_tld_works ... ok
test tests::remove_tld_fails_for_non_existent ... ok
test tests::remove_tld_works ... ok

test result: ok. 6 passed
````

````
/pallet_tld-1a9ee0fe7d745010)

running 10 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::register_domain_works ... ok
test tests::amend_chainspec_works ... ok
test tests::revoke_domain_works ... ok
test tests::test_initiate_transfer ... ok
test tests::test_accept_transfer ... ok
test tests::test_initiate_transfer_no_permission ... ok
test tests::test_accept_transfer_no_permission ... ok
test tests::test_revoke_transfer ... ok

test result: ok. 10 passed
````







