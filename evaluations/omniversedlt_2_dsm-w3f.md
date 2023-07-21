# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Omniverse%20DLT.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|  - [Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/milestone-2/LICENSE) <br/> -[Omniverse Ink!](https://github.com/Omniverse-Web3-Labs/omniverse-ink/blob/main/LICENSE) |  |
| 0b. | Documentation |<ul><li>[x] </li></ul>| - [A high-level Priciple of the Omniverse Swap](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/High-Level%20Principle%20of%20Omniverse%20Swap.md) <br/> - [How to dev with `Ink!`](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/dev-for-Ink!.md) <br/> - [Tutorial of how to auto-deploy](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Auto-Deployment.md) <br/> - [Tutorial of how to operate](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Auto-Tutorial.md) | |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [The test guide for milestone 2](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/test-guide/m2-test-guide.md) | |
| 0d. | Docker |<ul><li>[x] </li></ul>| [Synchronizer docker](https://github.com/Omniverse-Web3-Labs/omniverse-synchronizer/tree/milestone-2/docker)| |
| 0e. | Article |<ul><li>[x] </li></ul>| [link](https://medium.com/@xiyuzheng1984/the-ink-tech-stack-along-with-a-swap-for-o-dlt-tokens-be128bb955e6) | |
| 1. | Substrate module: swap |<ul><li>[x] </li></ul>| - [Pallet for Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2/pallets/omni-swap) <br/> -[the simulation of the o-amm](https://github.com/Omniverse-Web3-Labs/o-amm) <br/> - [off-chain calc and on-chain verify](https://github.com/Omniverse-Web3-Labs/O-AMM-ParaSim/tree/main) |  |
| 2. | Substrate chain |<ul><li>[x] </li></ul>| [Parachain itself](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2) | |  
| 3. | Ink! smart contract implementation |<ul><li>[x] </li></ul>| [Ink! tech stacks](https://github.com/Omniverse-Web3-Labs/omniverse-ink) |  |
| 4. | Off-Chain Synchronizer |<ul><li>[x] </li></ul>| [link](https://github.com/Omniverse-Web3-Labs/omniverse-synchronizer/tree/milestone-2) |  |

## Evaluation V2

All pending problems and doubts were solved and are explained [here in this comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/889#issuecomment-1614276659).

## Evaluation V1

### License

The repository [omniverse-ink](https://github.com/Omniverse-Web3-Labs/omniverse-ink/blob/main/LICENSE) shows the "GPL v3.0" LICENSE as expected.

The repository [omniverse-swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/milestone-2/LICENSE) shows "The Unlicense" as LICENSE.

### Auto testing

I followed the auto-testing documentation and achieved the expected results. However, when I attempted to execute the swap test once more using the command `node src/index.js -t swap`, it triggered a balance error within the "Test Workflow", the specific error log is provided below. Subsequently, I ran the test a few times again and it worked properly.

```sh
UnhanledRejection AssertionError [ERR_ASSERTION]: Balance error
    at Test.getAllBalance (/home/user/User/w3f/omniverse-system-test/src/tests/ft.js:434:7)
    at Test.doSwapTest (/home/user/User/w3f/omniverse-system-test/src/tests/ft.js:411:12)
    at runNextTicks (node:internal/process/task_queues:60:5)
    at listOnTimeout (node:internal/timers:538:9)
    at process.processTimers (node:internal/timers:512:7)
    at async Test.testFlow (/home/user/User/w3f/omniverse-system-test/src/tests/ft.js:256:7)
    at async Test.runTest (/home/user/User/w3f/omniverse-system-test/src/tests/ft.js:459:5)
    at async test (/home/user/User/w3f/omniverse-system-test/src/index.js:108:3)
    at async /home/user/User/w3f/omniverse-system-test/src/index.js:129:5 {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}
```

### Auto Deployment

The deployment worked as expected following the auto-deployment video, the docker containers worked as expected as well.

### Auto Tutorial

After making the deployment, the tutorial worked as expected following the auto tutorial operation video steps. The log below shows the result after following the tutorial steps to get the omniverse token balance:

```sh
node index.js --omniBalance CHAIN2,SKYWALKER,0x8bb25caae0a466afde04833610cf0c998050693974188853bdb982ed60e5e08ee71b3c9c0f900f8191512787e47908277272f71f991cb15fa364bad8018ef40b
secp256k1 unavailable, reverting to browser version
amount 4,009,900
```

Through the tutorial, I received some `secp256k1 unavailable, reverting to browser version` logs as in the above shell block, is it expected?

### Documentation

- "A high-level Priciple of the Omniverse Swap" and "How to dev with Ink!" docs are ok.

### Article

- medium article “The Ink! Tech Stack along with a Swap for O-DLT Tokens” is ok

### Off-Chain Synchronizer

- omniverse-synchronizer tested with Docker ok

### off-chain calc and on-chain verify

The tutorial produced the expected result after building and starting a node locally, following the [off-chain-calc](https://github.com/Omniverse-Web3-Labs/O-AMM-ParaSim/tree/main/off-chain-calc) :

Make a swap calculation:

```sh
node index.mjs -s 100,10000,282842712,200000000,x,y,kitty
--------------The input token information----------------
Current amount of the input token is: 10000
The real input Δamount of the input token is 100. The parameter for on-chain call needs to be 1000000
--------------The output token information----------------
The calculated output Δamount of the token to be swapped out is 110.36116839525494. The parameter for on-chain call needs to be 1103611.6839525495
The virtual amount of the output token is: 18392.66996696474. The parameter for on-chain call needs to be 183926699.6696474
--------------Full parameters for on-chain call----------------
{
  poolName: 'kitty',
  'dIn.t_name': 'x',
  'dIn.t_value': 1000000,
  'dOut.t_name': 'y',
  'dOut.t_value': 1103611,
  virtualOut: 183926699
}
```

The On-Chain verification worked as expected.

### omniverse protocol

Running the tests worked as expected, below are the tests and the tests coverage. 

```sh
running 21 tests
test omniverse_protocol::tests::check_compressed_pubkey_to_account ... ok
test omniverse_protocol::tests::new_works ... ok
test omniverse_protocol::tests::get_chain_id_works ... ok
test omniverse_protocol::tests::omniverse_mint_works ... ok
test omniverse_protocol::tests::only_owner_works ... ok
test omniverse_protocol::tests::check_omniverse_transfer_works ... ok
test omniverse_protocol::tests::check_omniverse_burn_works ... ok
test omniverse_protocol::tests::omniverse_burn_works ... ok
test omniverse_protocol::tests::get_cached_transaction_works ... ok
test omniverse_protocol::tests::check_owner_works ... ok
test omniverse_protocol::tests::omniverse_transfer_works ... ok
test omniverse_protocol::tests::get_transaction_count_works ... ok
test omniverse_protocol::tests::get_transaction_data_works ... ok
test omniverse_protocol::tests::check_execution_works ... ok
test omniverse_protocol::tests::send_omniverse_transaction_works ... ok
test omniverse_protocol::tests::send_omniverse_transaction_internal_works ... ok
test omniverse_protocol::tests::verify_signature_works ... ok
test omniverse_protocol::tests::set_members_works ... ok
test omniverse_protocol::tests::verify_transaction_works ... ok
test omniverse_protocol::tests::trigger_execution_internal_works ... ok
test omniverse_protocol::tests::trigger_execution_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

Jun 28 12:12:53.224  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| functions.rs: 10/10
|| lib.rs: 154/179
|| traits.rs: 0/2
|| types.rs: 29/29
||
87.73% coverage, 193/220 lines covered
```

### Substrate chain

- Substrate Node

The command to build the node `cargo build --release` worked as expected.

### Tests

- all omniverse-swap tests passed

```sh
Finished test [unoptimized + debuginfo] target(s) in 7m 43s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
     Running unittests src/lib.rs (target/debug/deps/node_template-3ed45e64c9440d9e)

running 2 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_whitelist ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_assets-2d82ac6157487a2e)

running 35 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::freezing_asset_should_fail ... ok
test tests::destroying_should_fail ... ok
test tests::canceling_approval_should_fail ... ok
test tests::force_asset_status_should_fail ... ok
test tests::approving_transfer_should_fail ... ok
test tests::it_fails_for_factory_handler_mint_with_signer_not_owner ... ok
test tests::freezing_should_fail ... ok
test tests::burning_should_fail ... ok
test tests::force_setting_team_should_fail ... ok
test tests::force_transferring_should_fail ... ok
test tests::creating_should_fail ... ok
test tests::it_fails_for_factory_handler_with_signature_error ... ok
test tests::force_creating_should_fail ... ok
test tests::it_fails_for_create_token_with_token_already_exist ... ok
test tests::it_fails_for_factory_handler_transfer_with_balance_overflow ... ok
test tests::force_metadata_should_work ... ok
test tests::it_works_for_create_token ... ok
test tests::it_fails_for_set_members_with_not_owner ... ok
test types::ensure_bool_decodes_to_consumer_or_sufficient ... ok
test tests::transferring_ownership_should_fail ... ok
test tests::it_fails_for_factory_handler_with_token_not_exist ... ok
test tests::setting_team_should_fail ... ok
test tests::refunding_should_fail ... ok
test tests::it_fails_for_set_members_with_token_not_exist ... ok
test tests::transferring_approved_should_fail ... ok
test tests::transferring_should_fail ... ok
test tests::thawing_should_fail ... ok
test tests::touching_should_fail ... ok
test tests::thawing_asset_should_fail ... ok
test tests::transferring_keep_alive_should_fail ... ok
test tests::minting_should_fail ... ok
test tests::it_works_for_factory_handler_mint ... ok
test tests::it_works_for_factory_handler_transfer ... ok
test tests::set_metadata_should_work ... ok

test result: ok. 35 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

     Running unittests src/lib.rs (target/debug/deps/pallet_omniverse_protocol-2032bb49dfa0e27d)

running 8 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_ethereum_signature ... ok
test tests::it_fails_for_nonce_error ... ok
test tests::it_fails_for_signature_error ... ok
test tests::it_works_for_verify_transaction ... ok
test tests::it_fails_for_signer_not_caller_error ... ok
test tests::it_works_for_malicious_transaction ... ok
test tests::it_works_for_duplicated_transaction ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_omniverse_swap-f6157a311a9882d2)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_add_liquidity ... ok
test tests::it_works_for_swap_y2x ... ok
test tests::it_works_for_swap_x2y ... ok
test tests::it_works_for_remove_liquidity ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/pallet_template-02ddf5628fb4912c)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/pallet_uniques-4dd2dd5c6dcb4914)

running 11 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::transfer_item_not_exist_not_work ... ok
test tests::set_members_with_token_not_exist_not_work ... ok
test tests::create_token_should_work ... ok
test tests::create_token_with_token_already_exist_not_work ... ok
test tests::basic_setup_works ... ok
test tests::not_owner_mint_item_with_not_work ... ok
test tests::not_item_owner_transfer_should_not_work ... ok
test tests::mint_item_should_work ... ok
test tests::mint_item_with_wrong_signature_not_work ... ok
test tests::transfer_item_should_work ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
   Doc-tests node-template
```

### Code Quality

Running `cargo clippy` in the omniverse-swap repository showed warnings in the result, see the log example below:

```sh
warning: redundant clone
   --> node/src/benchmarking.rs:167:8
    |
167 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
    |
167 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `node-template` (bin "node-template") generated 7 warnings (2 duplicates) (run `cargo clippy --fix --bin "node-template"` to apply 5 suggestions)
    Finished dev [unoptimized + debuginfo] target(s) in 4m 25s
```

- result of `cargo +nightly clippy` in the omniverse-ink repository logged 23 warnings
