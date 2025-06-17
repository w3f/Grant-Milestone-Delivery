# Evaluation

- **Status:** accepted
- **Application Document:** private
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/tcdt-lab/bcdns/blob/master/LICENSE) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Readme](https://github.com/tcdt-lab/bcdns/blob/master/README.md)| incentive mechanism section added. | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/tests.rs), [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/tests.rs)   | unit tests all passing | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/Dockerfile) | works | 
| 1 | pallet-root-dns |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/lib.rs) | ok | 



## General Notes
builds successfully and all tests passing.


## Feedback
I would advise agains artificially restricting the blocks that are able to handle the heartbeats. 

## Docker
The docker image builds and runs successfully.


## Tests

````
running 18 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::register_domain_works ... ok
test tests::amend_chainspec_works ... ok
test tests::revoke_domain_works ... ok
test tests::test_accept_transfer ... ok
test tests::test_initiate_transfer ... ok
test tests::test_accept_transfer_no_permission ... ok
test tests::test_domain_expiry_check ... ok
test tests::test_initiate_transfer_no_permission ... ok
test tests::test_report_missed_heartbeat ... ok
test tests::test_report_missed_heartbeat_no_missed ... ok
test tests::test_send_heartbeat ... ok
test tests::test_revoke_transfer ... ok
test tests::test_report_missed_heartbeat_duplicate ... ok
test tests::test_send_heartbeat_not_maintainer ... ok
test tests::test_send_heartbeat_too_soon ... ok
test tests::test_threshold_revocation ... ok
````







