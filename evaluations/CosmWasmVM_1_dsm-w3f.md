
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CosmWasmVM-CoreProduct.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul>| [https://github.com/ComposableFi/composable/blob/main/code/parachain/frame/cosmwasm/License.md] |  |
| 0b  | Documentation | <ul><li>[ ] </li></ul>| [CosmWasm VM Docs](https://docs.composable.finance/products/cosmwasm-vm-overview), [CLI Docs](https://docs.composable.finance/developer-guides/cosmwasm-cli) | Not fully Evaluated yet. |
0c    | Testing   | <ul><li>[x] </li></ul>| [https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm]       |        |
|  0d          | Docker  | <ul><li>[x] </li></ul>| [https://hub.docker.com/r/composablefi/devnet]    |  |
|  1a   | Development  | <ul><li>[x] </li></ul>| [Core Pallet](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm) | 
| 1b    | Development | <ul><li>[ ] </li></ul>| Any pallet can be called via precompile contracts (CosmWasm messaging interface for pallets as if thry were usual contracts). XCM can be called via [this precompile](https://github.com/ComposableFi/composable/blob/main/code/xcvm/lib/core/src/transport/xcm/mod.rs), Pallet src has [Fuzzing test](https://github.com/ComposableFi/composable/tree/main/code/parachain/frame/cosmwasm/fuzz_targets) | Not fully Evaluated yet.| |
1c    | Testing | <ul><li>[ ] </li></ul>| Benchamrks for pallet extrinics and gas metering of WASM instuctions are done using parity benchmarking infrastucture. You can run our devnet via the docker file or running `nix run composable#devnet-picasso` - Guide for running the CLI on a local network included in the CLI docs. CW20(analog of ERC-20) contract and 2 Composable contracts are embedded into genesis. VM can be tested via `cargo test`, examples of tests are [here](https://github.com/ComposableFi/cosmwasm-vm/blob/main/orchestrate/README.md), run of contracts in simulator and asserts of results. | Not fully Evaluated yet. |


## Evaluation V1

### Testing

I ran `cargo test` in the [repository](https://github.com/ComposableFi/cosmwasm-vm/blob/main), and all tests passed.

<details>

```
user@localhost:~/Documents/cosmWasm/cosmwasm-vm$ cargo test
    Finished test [unoptimized + debuginfo] target(s) in 7.34s
     Running unittests src/lib.rs (target/debug/deps/cosmwasm_orchestrate-d487dffca63e2a93)

running 2 tests
test vm::address::tests::cosmos_handler ... ok
test vm::address::tests::substrate_handler ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/crypto_verify.rs (target/debug/deps/crypto_verify-dbc724dbec373134)

running 12 tests
test tendermint_signatures_batch_verify_message_multisig_works ... ok
test tendermint_signature_verify_works ... ok
test tendermint_signature_verify_fails ... ok
test tendermint_signatures_batch_verify_works ... ok
test tendermint_signatures_batch_verify_fails ... ok
test tendermint_signatures_batch_verify_single_public_key_works ... ok
test cosmos_signature_verify_fails ... ok
test cosmos_signature_verify_works ... ok
test ethereum_signature_verify_fails_for_corrupted_message ... ok
test ethereum_signature_verify_fails_for_corrupted_signature ... ok
test ethereum_signature_verify_works ... ok
test verify_ethereum_transaction_works ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.55s

     Running unittests src/lib.rs (target/debug/deps/cosmwasm_vm-b715f70a31c9e01a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/cosmwasm_vm_wasmi-98444fad8d618b12)

running 11 tests
test semantic::test_riffle_shuffle_encode_decode ... ok
test semantic::test_riffle_shuffle ... ok
test semantic::test_code_gen::instantiate_response ... ok
test semantic::test_code_gen::basic ... ok
test semantic::test_recursion ... ok
test semantic::test_bare ... ok
test semantic::test_hook ... ok
test semantic::test_orchestration_base ... ok
test semantic::cw20_ics20::test_ics20_ibc_orchestration ... ok
test semantic::test_reply ... ok
test semantic::test_orchestration_advanced ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.06s

     Running unittests bin/research.rs (target/debug/deps/research-6f520194658df34f)

running 2 tests
test test_riffle_shuffle ... ok
test test_riffle_shuffle_encode_decode ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests cosmwasm-orchestrate

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests cosmwasm-vm

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests cosmwasm-vm-wasmi

running 1 test
test src/host_functions.rs - host_functions::encode_sections (line 480) ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>

I ran cargo tarpaulin to check the coverage of the pallet. It returned ~75% for the lib.rs of this pallet, which is good. 

<details>

```
Sep 15 09:49:14.967  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| orchestrate/examples/custom_address_handler.rs: 0/5
|| orchestrate/examples/custom_handler.rs: 0/7
|| orchestrate/src/api.rs: 22/95
|| orchestrate/src/error.rs: 0/2
|| orchestrate/src/fetcher.rs: 0/34
|| orchestrate/src/ibc.rs: 0/166
|| orchestrate/src/vm/account.rs: 8/32
|| orchestrate/src/vm/address.rs: 34/41
|| orchestrate/src/vm/bank.rs: 0/44
|| orchestrate/src/vm/error.rs: 0/21
|| orchestrate/src/vm/mod.rs: 66/408
|| orchestrate/src/vm/state.rs: 36/91
|| orchestrate/src/wasm_builder.rs: 0/26
|| orchestrate/tests/crypto_verify.rs: 19/19
|| research/bin/research.rs: 13/422
|| vm/src/executor.rs: 75/227
|| vm/src/memory.rs: 41/74
|| vm/src/system.rs: 170/358
|| vm/src/tagged.rs: 2/2
|| vm/src/vm.rs: 3/3
|| vm-wasmi/src/code_gen.rs: 163/210
|| vm-wasmi/src/error.rs: 2/12
|| vm-wasmi/src/host_functions.rs: 137/312
|| vm-wasmi/src/lib.rs: 47/62
|| vm-wasmi/src/validation.rs: 0/128
|| vm-wasmi/src/vm.rs: 95/195
|| 
31.14% coverage, 933/2996 lines covered
```

</details>

### Docker

The Docker is starting the local networking without problems.

### Manual Test

I tried to follow this [document](https://docs.composable.finance/developer-guides/cosmwasm-cli) but faced some problems. I tried to install the `ccw-vm` but got this error.

```
user@localhost:~/Documents/cosmWasm/composable$ cargo install --git https://github.com/ComposableFi/composable ./composable/code/parachain/frame/cosmwasm/cli
    Updating git repository `https://github.com/ComposableFi/composable`
error: could not find `./composable/code/parachain/frame/cosmwasm/cli` in https://github.com/ComposableFi/composable with version `*`

user@localhost:~/Documents/cosmWasm/composable$ nix run profile install composable#ccw
error: cannot find flake 'flake:profile' in the flake registries
```

I already had the nix installed. Do I need to do some configuration before running these commands? 
So, I used the Docker to launch the local networking. 
I was not able follow the [walkthrough:cw20_base](https://docs.composable.finance/developer-guides/cosmwasm/walkthrough) because it uses the `ccw-vm`, 
so I followed [this documentation](https://github.com/ComposableFi/composable/blob/main/docs/docs/products/cosmwasm/deploy-and-run-cosmwasm-contracts-with-pdjs.md) 
showing the usage of the pallet cosmwasm using the polkadotJS. The commands of this pallet are working. 

Is the CosmWasm CLI part of the deriverable of this milestone? 

Could you explain how to run the tests for the deliverable 1b?
