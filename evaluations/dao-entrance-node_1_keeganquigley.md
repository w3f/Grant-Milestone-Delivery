# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dao-entrance-phase-1.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.    | License   | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/dao-entrance/dao-entrance-node/blob/main/LICENSE)            | Okay.      
| 0b.    | Documentation       | <ul><li>[x] </li></ul> | https://github.com/dao-entrance/dao-entrance-node/blob/main/README.md | Okay.   |
| 0c.    | Testing Guide      | <ul><li>[x] </li></ul> | https://github.com/dao-entrance/dao-entrance-node/blob/main/docs/testing-guide.md | Okay. |
| 0d.    | Docker         | <ul><li>[x] </li></ul> | https://hub.docker.com/layers/asyoume/dao-entrance-node/dev.2023-02-18-17_39/images/sha256-03d54c3ff0ba0d2394987603de13f8147a7159213cdf0c7aefa8fd6c74ca5b8d?context=repo | Okay.      |
| 1.     | Substrate module: DAO-Entrance | <ul><li>[x] </li></ul> | https://github.com/dao-entrance/dao-entrance-node/tree/main/apps/pallets | Okay.      |

# General Notes

I was able to build and run the node both manually and via Docker. Thanks for such detailed instructions! I was able to get all the way through the test guide. I could:

- Start a DAO
```rust
{
  creator: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
  startBlock: 114
  daoAccountId: 5EYCAe5gXPgoV2W3s4EjZg3E96qDSpthV951dmqeQjZfXxmF
  purpose: test
  metaData: {desc:test}
  status: Active
}
```

- Create an asset
```rust
{
  owner: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
  metadata: {
    name: mytoken
    symbol: ME
    decimals: 100
  }
}
```
- Create guilds:
```rust
[
  {
    creator: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
    startBlock: 114
    name: core team
    desc: 
    metaData: {}
    status: Active
  }
  {
    creator: 5EYCAe5gXPgoV2W3s4EjZg3E96qDSpthV951dmqeQjZfXxmF
    startBlock: 204
    name: rust
    desc: desc
    metaData: {}
    status: Active
  }
]
```
I did have trouble here:
- Apply funds for project with sudo:
<img width="327" alt="dao" src="https://user-images.githubusercontent.com/35080151/223846777-fe356a0c-ce16-4301-95b9-e9a2386dce20.png">

- I also had trouble with creating a task:
<img width="327" alt="403" src="https://user-images.githubusercontent.com/35080151/223849119-239d95c6-8fcb-4b18-8499-7fe2b83088d3.png">

Unit tests all pass.
```rust
cargo test
   Compiling node-template-runtime v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/node-pos/runtime)
   Compiling daoent-project v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-project)
   Compiling daoent-guild v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-guild)
   Compiling daoent-gov v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-gov)
   Compiling daoent-assets v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-assets)
   Compiling daoent-sudo v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-sudo)
   Compiling daoent-dao v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/pallets/daoent-dao)
   Compiling daoent-primitives v1.0.0 (/Users/keeganquigley/dao-entrance-node/apps/primitives)
   Compiling dao-entrance-node v4.0.0-dev (/Users/keeganquigley/dao-entrance-node/apps/node-pos/node)
    Finished test [unoptimized + debuginfo] target(s) in 25.64s
     Running unittests src/lib.rs (target/debug/deps/dao_entrance_node-5d7fa3b19e545393)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/dao_entrance_node-049f6ed227a26252)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/daoent_assets-9e2ba7f901ad538e)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_create_asset ... ok
test tests::test_asset_burn ... ok
test tests::test_asset_trans ... ok
test tests::test_asset_join ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/daoent_dao-289229723a1e813b)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::get_dao_account_id ... ok
test tests::get_dao ... ok
test tests::get_creator ... ok
test tests::create_dao_should_work ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/daoent_gov-e25f5147984389ab)

running 7 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::propose_should_work ... ok
test tests::vote_should_work ... ok
test tests::second_should_work ... ok
test tests::unlock_should_work ... ok
test tests::run_proposal_should_work ... ok
test tests::cancel_vote_should_work ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/daoent_guild-8adb84db7b573476)

running 2 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_guild_join_request ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/daoent_primitives-942de83394918722)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/daoent_project-28a4d6c2ccd71ce4)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_project_join_request ... ok
test tests::test_task ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/lib.rs (target/debug/deps/daoent_sudo-cad3405fd7f9f28f)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::sudo_should_work ... ok
test tests::close_sudo_should_work ... ok
test tests::set_sudo ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/node_template_runtime-d3e78aff91470f80)

running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests dao-entrance-node

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-assets

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-dao

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-gov

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-guild

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-project

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests daoent-sudo

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node-template-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
