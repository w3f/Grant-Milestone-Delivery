# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1823](https://github.com/w3f/Grants-Program/blob/master/applications/Substrate_Move_System_Pallet_1.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.**| License |<ul><li>[x] </li></ul>| [MIT](https://github.com/eigerco/pallet-move/blob/main/LICENSE) | |
| **0b.** | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/eigerco/pallet-move/blob/main/README.md)  | The documentations are easy to read, which explain the working of the application.|
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| <ul> <li>[Testing guide](https://github.com/eigerco/pallet-move/blob/main/doc/testing_guide.md)</li><li>[Integration tests with mock](https://github.com/eigerco/pallet-move/tree/main/tests)</li> <li>[Testing node](https://github.com/eigerco/substrate-node-template-move-vm-test)</li> </ul> | |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/eigerco/pallet-move/blob/main/Dockerfile) | Work as expected |
| **0e.** | Article |<ul><li>[x] </li></ul>|[Design article](https://github.com/eigerco/pallet-move/blob/main/doc/design.md)| A good article which is easy to read and understand. |
| 1 | System pallet: Substrate Move |<ul><li>[x] </li></ul>| </li> <li> [Pallet](https://github.com/eigerco/pallet-move) </li> <li> [Workflows](https://github.com/eigerco/pallet-move/tree/main/.github/workflows) </li> </ul> | Work as expected|
| 2 | Rust crate: Substrate Move |<ul><li>[x] </li></ul>| [Substrate Move crate](https://github.com/eigerco/substrate-move) | Work as expected |
| 3 | Rust crate: Substrate Move documentation  |<ul><li>[x] </li></ul>| - | Be included in (2.) and in the [design article](https://github.com/eigerco/pallet-move/blob/main/doc/design.md) |

## General Notes

Overall this is a largely completed milestone, and since its described in the [application](https://github.com/w3f/Grants-Program/blob/master/applications/Substrate_Move_System_Pallet_1.md#future-plans), it is acceptable as an exploratory and evaluative milestone. Hopefully all the test cases will be finished in milestone2.


## Logs

- Test hash: c65bd6668774c76a9a45ab32853a16bc16f08329
### Code analysis

- `cargo clippy`: No error logs

### Unit Tests && Integration Tests


<details>

<summary> ut && it </summary>

```bash
running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/execute.rs (target/debug/deps/execute-2e938281c6663fb3)

running 6 tests
test execute_script_correct ... ignored, to be implemented
test execute_script_corrupted_bytecode ... ignored, to be implemented
test execute_script_insufficient_gas ... ignored, to be implemented
test execute_script_storage_correct ... ignored, to be implemented
test execute_script_wrong_user ... ignored, to be implemented
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 5 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/mock.rs (target/debug/deps/mock-01afbfe42ce8b277)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/publish.rs (target/debug/deps/publish-9dbf8f4b1b710c68)

running 9 tests
test publish_module_as_user_correct ... ignored, to be implemented
test publish_module_as_user_corrupted_bytecode ... ignored, to be implemented
test publish_module_as_user_insufficient_gas ... ignored, to be implemented
test publish_module_as_user_wrong_user ... ignored, to be implemented
test publish_package_as_user_correct ... ignored, to be implemented
test publish_package_as_user_corrupted_bytecode ... ignored, to be implemented
test publish_package_as_user_insufficient_gas ... ignored, to be implemented
test publish_package_as_user_wrong_user ... ignored, to be implemented
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 8 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-move

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

### System (black-box) tests

<details>

<summary> RPC test </summary>

```bash
➜  substrate-front-end-template git:(main) curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "mvm_gasToWeight", "params": [123]}' http://localhost:9944/
{"jsonrpc":"2.0","result":{"ref_time":1123123,"proof_size":0},"id":1}%

```

</details>

#### Screenshots

- Substrate front end

![Front end](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/ef36189b-2559-4b0b-864b-bab2f0f28f8a)

- Transfer

![Transfer](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/3da18ef1-d4dc-48d1-899d-c0b4170bf729)

- extrinsics test

![extrinsics](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/381629cf-dd63-441c-bd5c-b5e44004c110)

<details>

<summary> Doc test </summary>

```bash
   Doc-tests pallet-move

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>
