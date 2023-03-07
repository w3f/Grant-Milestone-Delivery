Tests all pass.

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
