# Evaluation

- **Status:** in progress
- **Application Document:** private
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/tcdt-lab/bcdns/blob/master/LICENSE) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Readme](https://github.com/tcdt-lab/bcdns/blob/master/README.md)| detailed documentation. very nice. | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> | [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/tests.rs), [Tests](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/tests.rs)   | unit tests all passing | 
| 0d.  | Docker | <ul><li>[ ] </li></ul> | [Docker](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/Dockerfile) | not producing blocks. | 
| 1 | pallet-root-dns |<ul><li>[x] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/rootdns/src/lib.rs) | ok, see feedback | 
| 2 | pallet-tld |<ul><li>[ ] </li></ul> | [Link](https://github.com/tcdt-lab/bcdns/blob/master/polkadot-sdk-solochain-template/pallets/tld/src/lib.rs) | see feedback |



## General Notes
builds successfully and all tests passing.


## Feedback

## pallet-rootDNS
Nice to see that all inputs are being validated for maximum data size. I also suggest to work with bounded vectors directly as storage items so you are always on the safe side, even if others might add additional extrinsics to modify the data structures of the pallet later on. See here for the [official documentation](https://paritytech.github.io/polkadot-sdk/master/frame_support/storage/bounded_vec/struct.BoundedVec.html).

In the inline docs it says that data would be stored as JSON but it looks like it's all simply `vec<u8>`. Users can store literally anything right now that fits into the size limitations. It doesn't have to be data obeying the JSON standard. I suggest to rephrase that part of the documentation. Otherwise nice inline docs.

Currently it's possible to register empty chain specs. Did you think about constraining the input?

## pallet-tld

I think it's really inconvenient having to scroll to the top of the file everytime you wonder about what the documentation for a certain line of code looks like. I think it would be great if the inline docs would actually be close to the lines of the code which they document. The documentation itself looks clean though. How about you add some additional inline docs just as it's being done in the rootDNS pallet? 

Just like in rootDNS pallet I suggest to switch to bounded data structures instead of using regular vectors.

## Docker
The docker image builds and runs successfully. Thanks for the quick fix. Sadly the chain is not producing blocks if you simply use:

``sudo docker run "image-name"``

Despite a 6 second block target no blocks are produced.

````
2025-02-11 14:44:56 Running JSON-RPC server: addr=127.0.0.1:9944,[::1]:9944    
2025-02-11 14:45:01 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:06 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:11 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:16 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:21 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:26 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:31 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0    
2025-02-11 14:45:36 💤 Idle (0 peers), best: #0 (0xa045…6723), finalized #0 (0xa045…6723), ⬇ 0 ⬆ 0   
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







