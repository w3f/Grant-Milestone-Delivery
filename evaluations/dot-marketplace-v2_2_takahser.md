# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dot_marketplace-phase2.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/WowLabz/tasking_backend/blob/242ac67fe656b145bea4ba6ec3f5e5485cce4a1c/LICENSE) | - |
| 0b | Documentation | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/cb86225088dc61cd00cc3019ab62235c97870037/pallets/pallet-tasking/src/lib.rs), [README](https://github.com/WowLabz/dot-marketplace-v2/blob/cb86225088dc61cd00cc3019ab62235c97870037/README.md) | - |
| 0c | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/WowLabz/dot-marketplace-v2/blob/32ef80c34aa7741fb369a2a738c831ae778d181c/testing_guide.md) | See [testing guide feedback](#testing-guide-feedback) |
| 0d | Docker Image | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/WowLabz/dot_marketplace_docker/blob/03a3df03361d00522ca0fb168555310ad178a10f/docker-compose.yml) | - |
| 1 | Decentralized Court Module | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 1a | Disapprove Task  | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 1b | Disapprove Rating | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 1c | General Dispute | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 2 | Jury | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 3 | Voting module | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 4 | Escrow  | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |
| 5 | Scheduler | <ul><li>[x] </li></ul> | [Tasking Pallet](https://github.com/WowLabz/dot-marketplace-v2/blob/Phase2_Milestone2/pallets/pallet-tasking/src/lib.rs) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- The project can be built successfully:
    ```bash
    $ cargo build --release
    Compiling node-template-runtime v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/runtime)
    Compiling pallet-tasking v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-tasking)
    Compiling node-template v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/node)
        Finished release [optimized] target(s) in 1m 28s
    ```

- Tests pass:

    ```bash
    $ cargo test
    Compiling node-template v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/node)
    Compiling node-template-runtime v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/runtime)
    Compiling pallet-tasking v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-tasking)
    Compiling pallet-chat v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-chat)
        Finished test [unoptimized + debuginfo] target(s) in 29.64s
        Running unittests (target/debug/deps/node_template-007a6df45f0989e0)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/node_template-70c542aff4642b97)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/node_template_runtime-09248a89be2d40d8)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests (target/debug/deps/pallet_chat-56b834492867267d)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_storage_schema ... ok
    test tests::test_write_message ... ok
    test tests::test_mark_as_read ... ok
    test tests::test_reply_message ... ok
    test tests::stress_test_write_message ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 50.86s

        Running unittests (target/debug/deps/pallet_tasking-b5031c77f4bec62c)

    running 13 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::raise_dispute ... ok
    test tests::test_bid_for_task ... ok
    test tests::test_task_completed ... ok
    test tests::test_approve_task ... ok
    test tests::test_create_task ... ok
    test tests::test_disapprove_task ... ok
    test tests::test_cast_vote ... ok
    test tests::test_worker_disapprove_rating ... ok
    test tests::test_close_task ... ok
    test tests::test_customer_disapprove_rating ... ok
    test tests::test_accept_jury_duty ... ok
    test tests::test_provide_customer_ratings ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

    Doc-tests node-template

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests node-template-runtime

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-chat

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-tasking

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

- Clippy passes without any warnings nor errors:

    ```bash
    $ cargo clippy
    Compiling node-template v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/node)
    Compiling node-template-runtime v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/runtime)
    Checking pallet-chat v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-chat)
    Checking pallet-tasking v4.0.0-dev (/home/xxx/repos/dot-marketplace-v2/pallets/pallet-tasking)
    Finished dev [unoptimized + debuginfo] target(s) in 16.54s
    ```

- Docker works now (after it was fixed):

    ```bash
    $ docker-compose up --build -d
    Creating network "dot-marketplace-v2_default" with the default driver
    Building dot_marketplace_node
    Sending build context to Docker daemon  12.14GB
    Step 1/4 : FROM paritytech/ci-linux:production
    ---> 3bc0529bb133
    Step 2/4 : WORKDIR /var/www/dot-marketplace-v2
    ---> Running in 8805c6ce2ff8
    Removing intermediate container 8805c6ce2ff8
    ---> 7726bb1958d5
    Step 3/4 : COPY . /var/www/dot-marketplace-v2
    ---> 56ae60f5b66d
    Step 4/4 : EXPOSE 9944
    ---> Running in d1d0c996b4fe
    Removing intermediate container d1d0c996b4fe
    ---> b19a4bd21b10
    Successfully built b19a4bd21b10
    Successfully tagged dot_marketplace_node:latest
    Creating dot-marketplace-v2_dot_marketplace_node_1 ... done
    ```

- All the extrinsics were successfully tested on the polkadot js apps ui, according to the [guide](https://github.com/WowLabz/dot-marketplace-v2/blob/32ef80c34aa7741fb369a2a738c831ae778d181c/testing_guide.md#functional-guide-for-dot-marketplace)