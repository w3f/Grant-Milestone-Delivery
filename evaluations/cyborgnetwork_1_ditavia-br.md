# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Cyborg.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [License](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/LICENSE)  | |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [Documentation](https://docs.google.com/document/d/1p5JJ1K6iTV20h4qU1s38e-lRKMvXN6j2MsjITLswqEQ/edit#heading=h.mm3nklvp0xtd) | The system is complex, and we couldn't put the system to work reading the testing guide. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| [Testing and Testing Guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/INSTRUCTIONS.md) | We couldn't set up the system to test. |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Docker](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6) | The instructions to use the Docker image would be appreciated if added, but it has instructions to run using the Zumbienet. It is a complex system to set up using Docker. |
| 1. | Working Demo | <ul><li>[x] </li></ul>| [Working Demo](https://drive.google.com/file/d/1cBpTbd4xRPdUz4_RgGIU7axy9Cb4MjD2/view?usp=sharing) |  |
| 2. | Task Examples | <ul><li>[ ] </li></ul>| [Task Examples](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/README.md#task-examples) | Not fully evaluated yet. |
| 3. | Substrate Module: Verification | <ul><li>[x] </li></ul>| [Substrate Module: Verification](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6/pallets/task-management) |  |
| 4. | Substrate Module: Edge Connect | <ul><li>[ ] </li></ul>| [Substrate Module: Edge Connect](https://github.com/Cyborg-Network/cyborg-parachain/tree/9685a55711b2e1ec63fdbc6603965e7b3784f8d6/pallets/edge-connect) | We couldn't use this pallet on the chains |
| 5. | Worker K3S Operator | <ul><li>[ ] </li></ul>| [Worker K3S Operator](https://github.com/Cyborg-Network/Worker) | Can this be tested without the front end? |
| 6. | Worker logs | <ul><li>[ ] </li></ul> |  | Not fully evaluated yet. |

## Evaluation V3

### Testing

We set up the master-node and the worker-node using the Azura Virtual Machine as recomended. 



Master-node VM

![image (61)](https://github.com/user-attachments/assets/129aaa66-f9ee-40e4-85d4-8e6b7a1d3f83)




Worker-node VM

![image (62)](https://github.com/user-attachments/assets/cc8b0eae-9b74-4001-a9d9-0229af00ec50)




This time, the node was showing corret:

```
ditavia@cyborg1:~/cyborg/Worker$ kubectl get nodes
NAME        	STATUS   ROLES              	AGE   VERSION
k3s-master-01   Ready	control-plane,master   21h   v1.30.3+k3s1
worker-one  	Ready	<none>             	31s   v1.30.3+k3s1
```

We send the request

```
curl -X POST http://172.174.200.217:3000/deploy \
-H "Content-Type: application/json" \
-d '{"imageUrl": "hello-world"}'
```

Received the response:

```
{"message":"Deployment dynamic-deployment-0em6ht and Service created","nodePort":"31086"}
```

Master-node Log:

```
stdout: deployment.apps/dynamic-deployment-0em6ht created
service/dynamic-deployment-0em6ht-service created

stderr: 
```

We notice the pallet edge-connect isn't available in any of the three chains on the extrinsics.

So we have done this on the [hosted chain](https://polkadot.js.org/apps/?rpc=wss://fraa-flashbox-3239-rpc.a.stagenet.tanssi.network#/extrinsics). I registered the node. The image shows the node registered.


![image (63)](https://github.com/user-attachments/assets/b10fb5b9-fa8b-49af-bc54-d3319a07d6c0)


We tested different versions of the front on the branch main, parachain-update (it was indicated to use this branch before, but now the guide doesn't specify a branch to test), and the hosted version. We used the hosted node because the local node hasn't finished the deployment. We need to test it locally to ensure the functionality. The hosted node registered the task but didn't return anything about the task on the logs like on the second evaluation.

Image showing the console log when we tried to use the local node.

![image (65)](https://github.com/user-attachments/assets/30727b45-9e56-4b62-8223-357a5bd11446)

Image showing one of the task registrations done using the front end.

![image (66)](https://github.com/user-attachments/assets/2e927482-89c2-4e28-b7b2-b719ce947018)

Image showing the front end.

![image (67)](https://github.com/user-attachments/assets/bd6f2511-ce3b-4c4b-b4c9-8cf14dbe10d9)


Image showing the console log on the front end (parachain-update). There seems to be some connection problem with the worker. No additional logs were generated on the Master-node or the frontend terminal. Using the branch main I received a similar log.

![image (68)](https://github.com/user-attachments/assets/dec56b10-94eb-4277-bd8c-ac901b544f30)


We also noticed some instructions on the guide saying to use one function of the pallet, but the print uses another.

## Evaluation V2

### Documentation

The testing guide improved, adding more details on how to set up the system and use the pallets. We tested the pallets, but we had some problems with the K3s. 

### Pallets

We tested the pallets `workerCluster` and `taskManagement`.

Image showing the cluster registration and the creation of the task schedule.

![unnamed](https://github.com/user-attachments/assets/94f30282-98a8-4c46-bd5f-9342ba8d875f)

Task submitted as completed:

![unnamed(1)](https://github.com/user-attachments/assets/95ece585-91c1-4eca-9d2e-b2b83c19a311)

The chain state showing the task completed:

![unnamed(2)](https://github.com/user-attachments/assets/2a1745da-05c2-42f9-a831-4b554865290a)

### K3s

We had some trouble to set up the K3s system. We ran the script `MasterSetup.sh` to run the cluster on port 3000, and we ran the script `WorkerSetup.sh` in another machine, but when we tried to verify the master node and the worker node running, we didn't get the expected results. 

```
ditavia@localhost:~/Documents/w3f/cyborg/Worker$ kubectl get nodes
E0809 08:39:30.875318   26883 memcache.go:265] couldn't get current server API group list: Get "https://127.0.0.1:6443/api?timeout=32s": dial tcp 127.0.0.1:6443: connect: connection refused
E0809 08:39:30.875666   26883 memcache.go:265] couldn't get current server API group list: Get "https://127.0.0.1:6443/api?timeout=32s": dial tcp 127.0.0.1:6443: connect: connection refused
E0809 08:39:30.877826   26883 memcache.go:265] couldn't get current server API group list: Get "https://127.0.0.1:6443/api?timeout=32s": dial tcp 127.0.0.1:6443: connect: connection refused
E0809 08:39:30.878412   26883 memcache.go:265] couldn't get current server API group list: Get "https://127.0.0.1:6443/api?timeout=32s": dial tcp 127.0.0.1:6443: connect: connection refused
E0809 08:39:30.880141   26883 memcache.go:265] couldn't get current server API group list: Get "https://127.0.0.1:6443/api?timeout=32s": dial tcp 127.0.0.1:6443: connect: connection refused
The connection to the server 127.0.0.1:6443 was refused - did you specify the right host or port?
```

We also tried to specify the host and port to verify, pointing to the process running on port 3000:

```
ditavia@localhost:~/Documents/w3f/cyborg/Worker$ kubectl get nodes -s 192.168.0.35:3000
E0809 08:42:13.336275   28738 memcache.go:265] couldn't get current server API group list: the server could not find the requested resource
E0809 08:42:13.339509   28738 memcache.go:265] couldn't get current server API group list: the server could not find the requested resource
E0809 08:42:13.342129   28738 memcache.go:265] couldn't get current server API group list: the server could not find the requested resource
E0809 08:42:13.345192   28738 memcache.go:265] couldn't get current server API group list: the server could not find the requested resource
E0809 08:42:13.348266   28738 memcache.go:265] couldn't get current server API group list: the server could not find the requested resource
Error from server (NotFound): the server could not find the requested resource
```

### Frontend

The front end on the branch `parachain-updates` has some problems:

![unnamed(3)](https://github.com/user-attachments/assets/aa20fe24-0b6e-491d-93de-0c27cd88a768)


We returned to the `main` branch to check this problem. It only occurs when using the `parachain-updates` branch. We didn't get this problem again when we changed back to the branch `parachain-updates`. We could replicate this problem by cloning the repository again.

We tried to test using the hosted chain. We registered the public IP:

![unnamed(4)](https://github.com/user-attachments/assets/48140fff-2947-4983-afc2-3fa77404e7ff)


Uploaded the `hello-world` example, but the dashboard showed an error for that task:

![unnamed(5)](https://github.com/user-attachments/assets/c0656f99-5676-4f9b-96fd-be734bc7d7ae)

We checked the events on the chain to confirm if the chain got the task:

![unnamed(6)](https://github.com/user-attachments/assets/a9f7b090-a53c-4ed9-9f8e-edcacf1103b0)

We checked on the Chain state of this task:

![unnamed(7)](https://github.com/user-attachments/assets/46211f5d-7d7d-454f-b266-5ba2d6ceedd9)


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
Footer
