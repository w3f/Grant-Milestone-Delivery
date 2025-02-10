# Evaluation

- **Status:** in progress
- **Application Document:** private
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> || detailed documentation. very nice. | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/tests.rs), [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/tests.rs)   | unit tests all passing | 
| 0d.  | Docker | <ul><li>[ ] </li></ul> | [Docker](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/Dockerfile) | builds, but doesn't start. | 
| 1 | pallet-root-dns |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/lib.rs) |manage the state of the root network | 
| 2 | pallet-tld |<ul><li>[ ] </li></ul> |[Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/lib.rs)
|  |



## General Notes
builds successfully and all tests passing.


## Feedback

## pallet-rootDNS
Nice to see that all inputs are being validated for maximum data size. I also suggest to work with bounded vectors directly as storage items so you are always on the safe side, even if others might add additional extrinsics to modify the data structures of the pallet later on. See here for the [official documentation](https://paritytech.github.io/polkadot-sdk/master/frame_support/storage/bounded_vec/struct.BoundedVec.html).

In the inline docs it says that data would be stored as JSON but it looks like it's all simply `vec<u8>`. Users can store literally anything right now that fits into the size limitations. It doesn't have to be data obeying the JSON standard. I suggest to rephrase that part of the documentation. Otherwise nice inline docs.

Currently it's possible to register empty chain specs. Did you think about constraining the input?

## pallet-tld

## Docker
The docker image builds successfully but simply starting it results in an error about the database creation. Please check it out.
````
/bcdns/polkadot-sdk-solochain-template$ sudo docker run bcdns
Error: Service(Client(Backend("Failed to create RocksDB directory: `Os { code: 13, kind: PermissionDenied, message: \"Permission denied\" }`.")))
2025-02-10 11:17:32 Substrate Node    
2025-02-10 11:17:32 ✌️  version 0.1.0-unknown    
2025-02-10 11:17:32 ❤️  by Parity Technologies <admin@parity.io>, 2017-2025    
2025-02-10 11:17:32 📋 Chain specification: Local Testnet    
2025-02-10 11:17:32 🏷  Node name: cute-jellyfish-1951    
2025-02-10 11:17:32 👤 Role: FULL    
2025-02-10 11:17:32 💾 Database: RocksDb at /polkadot/.local/share/node-template/chains/local_testnet/db/full  
````


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







