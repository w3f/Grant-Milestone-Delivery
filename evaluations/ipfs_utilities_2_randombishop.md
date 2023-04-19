# Evaluation



- **Status:** PENDING
- **Application Document:** [IPFS Utilities](https://github.com/w3f/Grants-Program/blob/master/applications/ipfs_utilities.md)
- **Milestone:** 2
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/ipfs_utilities_1_randombishop.md)

| Number | Deliverable                     | Accepted | Link                                                                                     | Evaluation Notes              |
|-------:|---------------------------------|----------|------------------------------------------------------------------------------------------|-------------------------------|
|    0a. | License                         | Yes      | [Licence](https://github.com/TDSoftware/substrate-ipfs/blob/milestone-1/LICENSE-APACHE2) | Apache 2.0                    |
|    0b. | Documentation                   | Yes      | [Doc](https://github.com/TDSoftware/substrate-ipfs/blob/master/docs/IPFS.md)             | OK. Improved from milestone 1 |
|    0c. | Testing                         | Yes      | [Doc](https://github.com/TDSoftware/substrate-ipfs/blob/milestone-2/docs/IPFS.md)        | OK                            |
|    0d. | Code                            | Yes      | [Milestone 2](https://github.com/TDSoftware/substrate-ipfs/tree/milestone-2)             | OK                            |
|    0e. | Article                         | Yes      | https://medium.com/p/6cfcb537f660                                                        | OK                            |
|     1. | Fetch File Implementation       | Yes      | [Node](https://github.com/TDSoftware/substrate-ipfs/tree/milestone-2)                    | OK                            |
|     2. | Web3 Client Extension           | No       |                                                                                          |                               |
|     3. | Local Node Fetch Implementation | Yes      | [Node](https://github.com/TDSoftware/substrate-ipfs/tree/milestone-2)                    | OK                            |


## Repositories
(Apache 2.0 licensed)

|      Component | Repo                                            | Language |
|---------------:|-------------------------------------------------|----------|
| Substrate node | https://github.com/TDSoftware/substrate-ipfs    | Rust     |
|       Frontend | https://github.com/TDSoftware/substrate-ipfs-ui | JS       |



## Logs

* cargo test --package pallet-tds-ipfs-core
```
running 19 tests
test tests::tests::test_cid_data ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::tests::test_add_bytes ... ok
test tests::tests::test_cat_bytes ... ok
test tests::tests::test_disconnect ... ok
test tests::tests::test_connect ... ok
test tests::tests::test_generate_id ... ok
test tests::tests::test_addresses_to_utf8_safe_bytes ... ok
test tests::tests::test_offchain_data ... ok
test tests::tests::test_ipfs_command_type_equality ... ok
test tests::tests::test_offchain_data_key ... ok
test tests::tests::test_offchain_storage_data_for_block_number ... ok
test tests::tests::test_offchain_storage_data_for_key ... ok
test tests::tests::test_multiple_bytes_to_utf8_safe_bytes ... ok
test tests::tests::test_store_cid_data_for_block_number ... ok
test tests::tests::test_store_cid_data_for_values ... ok
test tests::tests::test_store_cid_data_for_key ... ok
test tests::tests::test_store_cid_data_for_key_and_clear_afterwards ... ok
test tests::tests::test_store_offchain_data_read_write ... ok

test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

```

* cargo test --package pallet-tds-ipfs
```
running 4 tests
test pallet::test_find_value_of_type_in_vector ... ok
test pallet::test_type_equality ... ok
test pallet::test_contains_value_of_type_in_vector ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```


## General notes

Clean delivery and nice introduction article. Good-to-have IPFS feature in substrate and works as expected. 



