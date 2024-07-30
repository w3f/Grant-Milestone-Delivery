# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Cyborg.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE)  | |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [Documentation](https://docs.google.com/document/d/1p5JJ1K6iTV20h4qU1s38e-lRKMvXN6j2MsjITLswqEQ/edit#heading=h.mm3nklvp0xtd) | We haven't fully evaluated this yet, some comments in the evaluation. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/INSTRUCTIONS.md) | We couldn't set up the system to test.|
| **0d.** | Docker | <ul><li>[ ] </li></ul>| [Docker](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6) | Missing the instruction to use the Docker image. |
| 1. | Working Demo | <ul><li>[x] </li></ul>| [Working Demo](https://drive.google.com/file/d/1cBpTbd4xRPdUz4_RgGIU7axy9Cb4MjD2/view?usp=sharing) |  |
| 2. | Task Examples | <ul><li>[ ] </li></ul>| [Task Examples](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/README.md#task-examples) | Not fully evaluated yet. |
| 3. | Substrate Module: Verification | <ul><li>[ ] </li></ul>| [Substrate Module: Verification](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6/pallets/task-management) |  Not fully evaluated yet. |
| 4. | Substrate Module: Edge Connect | <ul><li>[ ] </li></ul>| [Substrate Module: Edge Connect](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6/pallets/edge-connect) | Not fully evaluated yet. |
| 5. | Worker K3S Operator | <ul><li>[ ] </li></ul>| [Worker K3S Operator](https://github.com/Cyborg-Network/Worker) | Not fully evaluated yet. |
| 6. | Worker logs | <ul><li>[ ] </li></ul> |  | Not fully evaluated yet. |


## Evaluation V1

### Documentation

We noticed that the "Link" column on the deliverables table is missing. Please add this column with the appropriate links. 

The [parachain repository](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6) is missing the instructions to use the docker to setup the chains. Ideally, the docker should set up all the systems, not only the chains.

The [parachain repository](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6) should have the instructions to run the tests.

### Test

We couldn't set up all the systems to test locally. We were able to run the chains using the Zumbinet and the front end without problems, but we couldn't successfully run the Worker.

Image showing the networks launched.

![Captura de tela de 2024-07-30 10-41-18](https://github.com/user-attachments/assets/4ff39206-b1e2-4e1d-9fc0-69593fd4be32)

Image showing the front end.

![Captura de tela de 2024-07-30 10-41-50](https://github.com/user-attachments/assets/80e63da4-8a81-4558-88e1-72831681b0ee)


We were able to save the `k3s-node-token.txt` and use the command `node KubeServiceNodePort.js` using the script provided:

```
ditavia@localhost:~/Documents/w3f/Worker$ sh MasterSetup.sh
The k3s node token has been saved to ./k3s-node-token.txt. Use this token to connect worker nodes to the cluster.
Updated Server listening on port 3000
```

We couldn't use the command below successfully. Could you explain better how to use it or give some examples?

```
sh WorkerSetup.sh <worker-name> <master-ip> <token>
```

We tried to use the front end but it was stuck on this part of the process:

![Captura de tela de 2024-07-30 10-42-03](https://github.com/user-attachments/assets/ddde7fb3-c22e-4dbe-a78d-d24e6e7a9be5)

We tried to test the hosted version to check it but we don't know what is the chain connected to get some balance.

![unnamed (2)](https://github.com/user-attachments/assets/abb5f427-7754-4276-a245-b9f2b4517524)


One question, can we use the polkadot.js extension as the wallet to confirm the transaction? Because this only appeared when using the talismã wallet.

We executed the tests on the [parachain repository](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6) to check the pallet functionality. One test was ignored, and all the other tests passed.

<details>
<summary><b>Test Results</b></summary>

```
     Running unittests src/lib.rs (target/debug/deps/cyborg_runtime-aaf857bb1aae1125)

running 6 tests
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::block_weights::constants::test_weights::sane ... ok
test test_genesis_config_builds ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/orml_oracle-da8d838859985862)

running 13 tests
test mock::test_genesis_config_builds ... ok
test tests::should_return_none_for_non_exist_key ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_not_feed_values_from_root_directly ... ok
test tests::should_feed_values_from_root ... ok
test tests::change_member_should_work ... ok
test tests::should_feed_values_from_member ... ok
test tests::multiple_calls_should_fail ... ok
test tests::should_read_raw_values ... ok
test tests::should_combined_data ... ok
test tests::should_clear_data_for_removed_members ... ok
test tests::get_all_values_should_work ... ok
test tests::values_are_updated_on_feed ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/orml_traits-d9adbe25f1987f82)

running 15 tests
test data_provider::tests::median_value_data_provider_works ... ok
test get_by_key::tests::get_by_key_should_work ... ok
test location::tests::no_reserve_chain_for_absolute_self_for_relative ... ok
test location::tests::child_parachain_as_reserve_chain ... ok
test location::tests::non_chain_part_works ... ok
test location::tests::parent_as_reserve_chain ... ok
test location::tests::sibling_parachain_as_reserve_chain ... ok
test parameters::tests::test_define_aggregrated_parameters_aggregrated_key_value ... ok
test parameters::tests::test_define_aggregrated_parameters_key_convert ... ok
test parameters::tests::test_define_parameters_aggregrated_key_value ... ok
test parameters::tests::test_define_parameters_value_convert ... ok
test parameters::tests::test_define_parameters_key_convert ... ok
test price::test::get_price_should_work ... ok
test price::test::price_is_zero_should_not_panic ... ok
test price::test::price_is_none_should_not_panic ... ok

test result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/orml_utilities-c0ee81cba68f2125)

running 11 tests
test ordered_set::tests::clear ... ok
test ordered_set::tests::contains ... ok
test ordered_set::tests::exceeding_max_size_should_fail ... ok
test ordered_set::tests::from ... ok
test ordered_set::tests::insert ... ok
test ordered_set::tests::remove ... ok
test tests::test_genesis_config_builds ... ok
test tests::storage_transaction_basic_commit ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::simulate_execution_works ... ok
test tests::storage_transaction_basic_rollback ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_edge_connect-9a8663a843d5d5c2)

running 8 tests
test tests::it_works_for_registering_domain ... ok
test mock::test_genesis_config_builds ... ok
test tests::it_fails_for_removing_non_existent_worker ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_registering_ip ... ok
test tests::it_works_for_removing_worker ... ok
test tests::it_fails_for_registering_without_ip_or_domain ... ok
test tests::it_fails_for_registering_duplicate_worker ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_task_management-747199f1906b9b62)

running 9 tests
test mock::test_genesis_config_builds ... ok
test tests::it_fails_when_no_workers_are_available ... ok
test tests::it_works_for_task_scheduler ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_submit_completed_task ... ok
test tests::it_assigns_resolver_when_dispute_in_verification_and_resolves_task ... ok
test tests::it_works_when_verifying_task ... ok
test tests::it_fails_when_submit_completed_task_with_invalid_owner ... ok
test tests::it_reassigns_task_when_resolver_fails_to_resolve ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests cyborg-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests orml-oracle

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests orml-traits

running 3 tests
test orml/traits/src/get_by_key.rs - get_by_key::parameter_type_with_key (line 12) ... ignored
test orml/traits/src/parameters.rs - parameters::define_parameters (line 117) ... ok
test orml/traits/src/parameters.rs - parameters::define_aggregrated_parameters (line 288) ... ok

test result: ok. 2 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 1.22s
```

</details>

We also ran the command `cargo tarpaulin` to check the test coverage for the pallets. It could be better for the pallet edge-connect, but the improvement isn't mandatory.

```
|| pallets/edge-connect/src/lib.rs: 26/41
|| pallets/edge-connect/src/weights.rs: 0/10
|| pallets/task-management/src/lib.rs: 98/110
|| pallets/task-management/src/weights.rs: 0/22
```

### Code Quality

We ran the command `npm run eslint:check` for the repository [cyborg-connect](https://github.com/Cyborg-Network/cyborg-connect/tree/b5f123c4b9d4af210f6343bddb8311dac2b6787a), it returned some warnings. For example:

```
/home/ditavia/Documents/w3f/cyborg-connect/src/cyborg/layouts/Header.js
  10:17  warning  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  14:13  warning  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  15:17  warning  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text

/home/ditavia/Documents/w3f/cyborg-connect/src/cyborg/layouts/SideBar.js
  28:25  warning  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text
  50:25  warning  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  51:29  warning  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images                                                                                                                                                                                                                                                                 jsx-a11y/alt-text

✖ 20 problems (0 errors, 20 warnings)
```

We also ran the command `cargo clippy` for the [parachain repository](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6), it returned some warnings. For example:

```
warning: length comparison to zero
   --> pallets/task-management/src/lib.rs:277:15
    |
277 |                         ensure!(workers.len() > 0, Error::<T>::NoNewWorkersAvailable);
    |                                 ^^^^^^^^^^^^^^^^^ help: using `!is_empty` is clearer and more explicit: `!workers.is_empty()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#len_zero

warning: dereferencing a tuple pattern where every element takes a reference
   --> pallets/task-management/src/lib.rs:343:16
    |
343 |                         .filter(|&(_, ref worker)| worker.status == WorkerStatusType::Inactive // change Inactive to Active with oracle 
    |                                  ^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrowed_reference
help: try removing the `&` and `ref` parts
    |
343 -                         .filter(|&(_, ref worker)| worker.status == WorkerStatusType::Inactive // change Inactive to Active with oracle 
343 +                         .filter(|(_, worker)| worker.status == WorkerStatusType::Inactive // change Inactive to Active with oracle 
    |

warning: length comparison to zero
   --> pallets/task-management/src/lib.rs:349:15
    |
349 |                         ensure!(workers.len() > 0, Error::<T>::NoNewWorkersAvailable);
    |                                 ^^^^^^^^^^^^^^^^^ help: using `!is_empty` is clearer and more explicit: `!workers.is_empty()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#len_zero

warning: `pallet-task-management` (lib) generated 8 warnings (run `cargo clippy --fix --lib -p pallet-task-management` to apply 8 suggestions)
```

The fix of these warnings isn't mandatory but would be nice to have.
