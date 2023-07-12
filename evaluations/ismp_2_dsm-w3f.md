# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ismp.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/LICENSE](https://github.com/polytope-labs/substrate-ismp/blob/main/LICENSE)| | 
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/README.md](https://github.com/polytope-labs/substrate-ismp/blob/main/README.md)|  |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/tests.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/tests.rs)|  |
| 0d. | Docker |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp#run-test-in-docker](https://github.com/polytope-labs/substrate-ismp#run-test-in-docker)|  |
| 0e. | Article|<ul><li>[x] </li></ul>| TBA | Shared and evaluated in private |
| 1. | pallet-ismp |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp](https://github.com/polytope-labs/substrate-ismp)|  |
| 1a. | Host |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/host.rs#L48](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/host.rs#L48)|  |
| 1b. | Router |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/dispatcher.rs#L48](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/dispatcher.rs#L48)|  |
| 1c. | `ParachainConsensusClient` |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/parachain/src/consensus.rs#L115](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/parachain/src/consensus.rs#L115)|  |
| 1d. | RPC |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/rpc/src/lib.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/rpc/src/lib.rs)|  |
| 1e. | Runtime-APIs |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/runtime-api/src/lib.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/runtime-api/src/lib.rs)|  |
| 1f. | Bechmarks |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/benchmarking.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/benchmarking.rs)|  |

## Evaluation V5

### Article

It was shared in private. 

### Test

I set up the parachains and relay chain with the polkadot-launch and tried to run the tests with `RUSTFLAGS="-C link-args=-Wl,--allow-multiple-definition" cargo test`, it ignored two tests, and two tests passed.

```
running 1 test
test config::tests::serialize ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

running 2 tests
test test_messaging_relay ... ignored
[2023-07-11T12:27:52Z INFO  tesseract] 🛰 Starting messaging relay
[2023-07-11T12:28:18Z INFO  tesseract] Events from KUSAMA-2000 [Request { dest_chain: Kusama(2001), source_chain: Kusama(2000), request_nonce: 2 }]
[2023-07-11T12:28:18Z INFO  tesseract] 🛰Submitting ismp messages from KUSAMA-2000 to KUSAMA-2001
test test_parachain_parachain_messaging_relay has been running for over 60 seconds
[2023-07-11T12:29:18Z INFO  tesseract] Events from KUSAMA-2001 [Request { dest_chain: Kusama(2000), source_chain: Kusama(2001), request_nonce: 1 }]
[2023-07-11T12:29:18Z INFO  tesseract] Latest update StateMachineUpdated { state_machine_id: StateMachineId { state_id: Kusama(2001), consensus_client: [80, 65, 82, 65] }, latest_height: 158 }
[2023-07-11T12:29:18Z INFO  tesseract] 🛰Submitting ismp messages from KUSAMA-2001 to KUSAMA-2000
[2023-07-11T12:30:06Z INFO  tesseract] Events from KUSAMA-2000 [Request { dest_chain: Kusama(2001), source_chain: Kusama(2000), request_nonce: 3 }]
[2023-07-11T12:30:06Z INFO  tesseract] 🛰Submitting GET response messages to KUSAMA-2000
test test_parachain_parachain_messaging_relay ... ok

test result: ok. 1 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 146.41s

     Running unittests src/lib.rs (target/debug/deps/tesseract_messaging-c326ab0f1e5ce648)
running 1 test
test parachain/src/codegen/relay_chain.rs - codegen::relay_chain::api::transaction_payment::constants::ConstantsApi::operational_fee_multiplier (line 5282) ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

## Evaluation V4

### Test

To configure the system, I ran the polkadot-lauch, after that, I ran the docker provided. I was able to use the ismpDemo pallet to transfer some balance from Parachain 2001 to 2000 and request the timestamp. The docker registered these actions in the log.

I also tried, without success, to run the tests from tesserac inside the docker container, using the tesserac-blake2b and the tesserac-main.

Using `docker exec -it container_id /bin/bash` and running the tests:
```
= note: ld: error: duplicate symbol: memory32_grow
          >>> defined at wasmtime_runtime.f727c6301590d743-cgu.12
          >>>            wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.f727c6301590d743-cgu.12.rcgu.o:(memory32_grow) in archive /builds/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib
          >>> defined at wasmtime_runtime.cbb1d63ff2563d91-cgu.3
          >>>            wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.cbb1d63ff2563d91-cgu.3.rcgu.o:(.text+0x0) in archive /builds/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib
          
          ld: error: duplicate symbol: table_copy
          >>> defined at wasmtime_runtime.f727c6301590d743-cgu.12
          >>>            wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.f727c6301590d743-cgu.12.rcgu.o:(table_copy) in archive /builds/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib
          >>> defined at wasmtime_runtime.cbb1d63ff2563d91-cgu.3
          >>>            wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.cbb1d63ff2563d91-cgu.3.rcgu.o:(.text+0x20) in archive /builds/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib
		  .
		  .
		  .
          ld: error: duplicate symbol: externref_global_set
          >>> defined at wasmtime_runtime.f727c6301590d743-cgu.12
          >>>            wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.f727c6301590d743-cgu.12.rcgu.o:(externref_global_set) in archive /builds/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib
          >>> defined at wasmtime_runtime.cbb1d63ff2563d91-cgu.3
          >>>            wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.cbb1d63ff2563d91-cgu.3.rcgu.o:(.text+0x220) in archive /builds/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib
          
          ld: error: duplicate symbol: memory_atomic_notify
          >>> defined at wasmtime_runtime.f727c6301590d743-cgu.12
          >>>            wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.f727c6301590d743-cgu.12.rcgu.o:(memory_atomic_notify) in archive /builds/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib
          >>> defined at wasmtime_runtime.cbb1d63ff2563d91-cgu.3
          >>>            wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.cbb1d63ff2563d91-cgu.3.rcgu.o:(.text+0x240) in archive /builds/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib
          
          ld: error: duplicate symbol: memory_atomic_wait32
          >>> defined at wasmtime_runtime.f727c6301590d743-cgu.12
          >>>            wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.f727c6301590d743-cgu.12.rcgu.o:(memory_atomic_wait32) in archive /builds/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib
          >>> defined at wasmtime_runtime.cbb1d63ff2563d91-cgu.3
          >>>            wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.cbb1d63ff2563d91-cgu.3.rcgu.o:(.text+0x260) in archive /builds/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib
          
          ld: error: too many errors emitted, stopping now (use -error-limit=0 to see all errors)
          clang: error: linker command failed with exit code 1 (use -v to see invocation)
          

error: could not compile `tesseract-integration-tests` (lib test) due to previous error
```

Running the test in tesseract-main and tesseract-blake2b:
```
		.
		.
		.
          /usr/bin/ld: /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib(wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.ad68ba448d2d484b-cgu.4.rcgu.o): in function `out_of_gas':
          wasmtime_runtime.ad68ba448d2d484b-cgu.4:(.text+0x2a0): multiple definition of `out_of_gas'; /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib(wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.782be41ea348b988-cgu.15.rcgu.o):wasmtime_runtime.782be41ea348b988-cgu.15:(.text+0x2a0): first defined here
          /usr/bin/ld: /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib(wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.ad68ba448d2d484b-cgu.4.rcgu.o): in function `new_epoch':
          wasmtime_runtime.ad68ba448d2d484b-cgu.4:(.text+0x2c0): multiple definition of `new_epoch'; /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib(wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.782be41ea348b988-cgu.15.rcgu.o):wasmtime_runtime.782be41ea348b988-cgu.15:(.text+0x2c0): first defined here
          /usr/bin/ld: /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib(wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.ad68ba448d2d484b-cgu.7.rcgu.o): in function `wasm_to_host_trampoline':
          wasmtime_runtime.ad68ba448d2d484b-cgu.7:(.text+0x0): multiple definition of `wasm_to_host_trampoline'; /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib(wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.782be41ea348b988-cgu.3.rcgu.o):wasmtime_runtime.782be41ea348b988-cgu.3:(.text+0x0): first defined here
          /usr/bin/ld: /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-02e91c626dd0510d.rlib(wasmtime_runtime-02e91c626dd0510d.wasmtime_runtime.ad68ba448d2d484b-cgu.7.rcgu.o): in function `host_to_wasm_trampoline':
          wasmtime_runtime.ad68ba448d2d484b-cgu.7:(.text+0x20): multiple definition of `host_to_wasm_trampoline'; /home/user/Documents/ismp/tesseract-main/target/debug/deps/libwasmtime_runtime-2ecb720b7671101e.rlib(wasmtime_runtime-2ecb720b7671101e.wasmtime_runtime.782be41ea348b988-cgu.3.rcgu.o):wasmtime_runtime.782be41ea348b988-cgu.3:(.text+0x20): first defined here
          collect2: error: ld returned 1 exit status

error: could not compile `tesseract-integration-tests` (lib test) due to previous error
```

## Evaluation V3

While running [these instructions for integration test](https://github.com/polytope-labs/tesseract/tree/blake2b#integration-test-guide) (private repo) I had some problems:

In Step 3, to spin-up the network, I used the polkadot-lauch specification from [here](https://github.com/polytope-labs/hyperbridge/tree/blake2b/scripts/polkadot-launch) to spin-up the parachains, but the script was not able to run the relaychain. I tried first starting manually Polkadot version 0.9.43 but this caused a problem with the metadata version in the step 4 of the tutorial, see the error below. 

```
subxt codegen --url=ws://localhost:9944 | rustfmt --edition=2018 --emit=stdout > /home/user/workspace/tesseract-blake2b/parachain/src/codegen/relay_chain.rs
error: unknown start of token: \u{1b}
 --> <stdin>:1:1
  |
1 | Could not decode metadata, only V14 metadata is supported: Cannot try_into() to Metadata: unsupported metadata version
  | ^

error: unknown start of token: \u{1b}
 --> <stdin>:1:124
  |
1 | Could not decode metadata, only V14 metadata is supported: Cannot try_into() to Metadata: unsupported metadata version
  |                                                                                                                           ^

error: this file contains an unclosed delimiter
 --> <stdin>:1:130
  |
1 | Could not decode metadata, only V14 metadata is supported: Cannot try_into() to Metadata: unsupported metadata version
  | -                                                                                                                         -    ^
  | |                                                                                                                         |
  | unclosed delimiter                                                                                                        unclosed delimiter
```

Then I changed to version 0.9.42 and the metadata problem was solved, being able to run `subxt codegen`. However, in step 5, there are some compilation errors in the code generated in step 4. See below:

```
error[E0405]: cannot find trait `StaticExtrinsic` in module `subxt::blocks`
     --> parachain/src/codegen/relay_chain.rs:21013:39
      |
21013 |                 impl ::subxt::blocks::StaticExtrinsic for ForceSubscribeVersionNotify {
      |                                       ^^^^^^^^^^^^^^^ not found in `subxt::blocks`

error[E0405]: cannot find trait `StaticExtrinsic` in module `subxt::blocks`
     --> parachain/src/codegen/relay_chain.rs:21030:39
      |
21030 |                 impl ::subxt::blocks::StaticExtrinsic for ForceUnsubscribeVersionNotify {
      |                                       ^^^^^^^^^^^^^^^ not found in `subxt::blocks`

error[E0405]: cannot find trait `StaticExtrinsic` in module `subxt::blocks`
     --> parachain/src/codegen/relay_chain.rs:21051:39
      |
21051 |                 impl ::subxt::blocks::StaticExtrinsic for LimitedReserveTransferAssets {
      |                                       ^^^^^^^^^^^^^^^ not found in `subxt::blocks`

error[E0405]: cannot find trait `StaticExtrinsic` in module `subxt::blocks`
     --> parachain/src/codegen/relay_chain.rs:21072:39
      |
21072 |                 impl ::subxt::blocks::StaticExtrinsic for LimitedTeleportAssets {
      |                                       ^^^^^^^^^^^^^^^ not found in `subxt::blocks`

For more information about this error, try `rustc --explain E0405`.
```

I changed back the code generated for the parachain and relaychain to the ones available in the repository. However, using this way the test runs but stay stuck and don't complete.

```
cargo +nightly test -p tesseract-integration-tests test_messaging_relay -- --nocapture
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: ApprovalVoting ~~{"DisputeCoordinatorMessage"}~~> DisputeCoordinator ~~{"ApprovalVotingMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"StatementDistributionMessage"}~~> StatementDistribution ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
   Compiling tesseract-parachain v0.1.0 (/home/diogo/workspace/w3f/tesseract-blake2b/parachain)
   Compiling tesseract-integration-tests v0.1.0 (/home/diogo/workspace/w3f/tesseract-blake2b/integration-tests)
    Finished test [unoptimized + debuginfo] target(s) in 3m 30s
     Running unittests src/lib.rs (target/debug/deps/tesseract_integration_tests-452855ab9d4ed01a)

running 1 test
test test_messaging_relay has been running for over 60 seconds
```

I think we could have a problem with the version of the relaychain. What is the exact version you are using? Any other configuration that I need to perform to run these tests?


## Evaluation V2

### Documentation

It was add the instructions to run without docker and also a demo. However, it is missing the instructions to run the demo. Please, provide instructions to run the demo with examples including inputs and expected outputs to demonstrate the behavior of the software.

### Testing

The tests returned better coverage. It is possible to improve even more but it isn't mandatory.

```
running 12 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_reject_expired_check_clients ... ok
test tests::should_reject_updates_within_challenge_period ... ok
test tests::should_reject_messages_for_frozen_state_machines ... ok
test tests::should_handle_post_request_timeouts_correctly ... ok
test tests::should_handle_get_request_timeouts_correctly ... ok
test tests::dispatcher_should_write_receipts_for_outgoing_requests_and_responses ... ok
test tests::should_handle_get_request_responses_correctly ... ok
test tests::should_generate_and_verify_batch_proof_correctly ... ok
test tests::should_generate_proofs_correctly_for_single_leaf_mmr ... ok
test tests::should_generate_and_verify_batch_proof_for_leaves_inserted_across_multiple_blocks_correctly ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s

Jun 13 09:36:17.846  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| ismp-demo/src/lib.rs: 0/80
|| pallet-ismp/primitives/src/mmr.rs: 12/18
|| pallet-ismp/rpc/src/lib.rs: 0/88
|| pallet-ismp/src/benchmarking.rs: 78/99
|| pallet-ismp/src/dispatcher.rs: 38/49
|| pallet-ismp/src/errors.rs: 0/29
|| pallet-ismp/src/events.rs: 0/11
|| pallet-ismp/src/handlers.rs: 0/28
|| pallet-ismp/src/host.rs: 80/89
|| pallet-ismp/src/lib.rs: 85/166
|| pallet-ismp/src/mmr/mmr.rs: 26/28
|| pallet-ismp/src/mmr/storage.rs: 46/57
|| pallet-ismp/src/mmr/utils.rs: 7/7
|| pallet-ismp/src/weight_info.rs: 0/135
|| parachain/inherent/src/lib.rs: 0/17
|| parachain/src/consensus.rs: 0/140
|| parachain/src/lib.rs: 0/50
|| 
34.10% coverage, 372/1091 lines covered
```

## Evaluation V1

### Documentation

Please create a new branch for the evaluation of the milestone to prevent new commits during the evaluation.

It would be nice if the documentation have the prerequisites and instructions to run without docker. It is missing instructions to start the substrate with the pallet and the instructions to use.

### Testing

All tests passed, but I got some warnings:

```
user@localhost:~/Documents/ismp/substrate-ismp$ cargo test
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: ApprovalVoting ~~{"ApprovalDistributionMessage"}~~> ApprovalDistribution ~~{"ApprovalVotingMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
warning: use of deprecated constant `pallet::warnings::ConstantWeight_0::_w`:
             	It is deprecated to use hard-coded constant as call weight.
             	Please instead benchmark all calls or put the pallet into `dev` mode.
    	 
             	For more info see:
                 	<https://github.com/paritytech/substrate/pull/13798>
   --> parachain/src/lib.rs:107:26
	|
107 |     	#[pallet::weight(0)]
	|                      	^
	|
	= note: `#[warn(deprecated)]` on by default

warning: use of deprecated constant `pallet::warnings::ConstantWeight_1::_w`:
             	It is deprecated to use hard-coded constant as call weight.
             	Please instead benchmark all calls or put the pallet into `dev` mode.
    	 
             	For more info see:
                 	<https://github.com/paritytech/substrate/pull/13798>
   --> parachain/src/lib.rs:119:26
	|
119 |     	#[pallet::weight(0)]
	|                      	^

warning: `ismp-parachain` (lib) generated 2 warnings
warning: `ismp-parachain` (lib test) generated 2 warnings (2 duplicates)
	Finished test [unoptimized + debuginfo] target(s) in 0.59s
 	Running unittests src/lib.rs (target/debug/deps/ismp_assets-9309e30e3c82eb88)

running 11 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_generate_proofs_correctly_for_single_leaf_mmr ... ok
test tests::should_reject_expired_check_clients ... ok
test tests::should_handle_get_request_timeouts_correctly ... ok
test tests::should_handle_get_request_responses_correctly ... ok
test tests::dispatcher_should_write_receipts_for_outgoing_requests_and_responses ... ok
test tests::should_reject_updates_within_challenge_period ... ok
test tests::should_handle_post_request_timeouts_correctly ... ok
test tests::should_generate_and_verify_batch_proof_for_leaves_inserted_across_multiple_blocks_correctly ... ok
test tests::should_reject_messages_for_frozen_state_machines ... ok
test tests::should_generate_and_verify_batch_proof_correctly ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests ismp-assets
```

I tested with docker and without. I ran `cargo tarpaulin` to check the test coverage. The coverage isn't good and can be improved.

```
Jun 06 09:17:47.663  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| ismp-assets/src/lib.rs: 0/82
|| pallet-ismp/primitives/src/mmr.rs: 7/18
|| pallet-ismp/rpc/src/lib.rs: 0/88
|| pallet-ismp/src/benchmarking.rs: 0/15
|| pallet-ismp/src/dispatcher.rs: 22/59
|| pallet-ismp/src/errors.rs: 2/43
|| pallet-ismp/src/events.rs: 0/11
|| pallet-ismp/src/handlers.rs: 0/42
|| pallet-ismp/src/host.rs: 27/89
|| pallet-ismp/src/lib.rs: 35/153
|| pallet-ismp/src/mmr/mmr.rs: 19/28
|| pallet-ismp/src/mmr/storage.rs: 27/54
|| pallet-ismp/src/mmr/utils.rs: 1/3
|| pallet-ismp/src/weight_info.rs: 0/98
|| parachain/inherent/src/lib.rs: 0/11
|| parachain/src/consensus.rs: 0/139
|| parachain/src/lib.rs: 0/45
||
14.31% coverage, 140/978 lines covered
```

Please, provide me a guide to start the substrate and use the pallet, with expected inputs and outputs.

### Article

The article isn't a deliverable of this milestone.

### Code Quality

I ran `cargo clippy` and got some warnings, for example:

```
warning: this `match` can be collapsed into the outer `match`
   --> pallet-ismp/src/lib.rs:518:43
	|
518 |               	DataOrHash::Data(leaf) => match leaf {
	|  ___________________________________________^
519 | |                 	Leaf::Request(req) => Some(req),
520 | |                 	_ => None,
521 | |             	},
	| |_________________^
	|
help: the outer pattern can be modified to include the inner pattern
   --> pallet-ismp/src/lib.rs:518:34
	|
518 |             	DataOrHash::Data(leaf) => match leaf {
	|                              	^^^^ replace this binding
519 |                 	Leaf::Request(req) => Some(req),
	|                 	^^^^^^^^^^^^^^^^^^ with this pattern
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#collapsible_match
	= note: `#[warn(clippy::collapsible_match)]` on by default

warning: this `match` can be collapsed into the outer `match`
   --> pallet-ismp/src/lib.rs:534:43
	|
534 |               	DataOrHash::Data(leaf) => match leaf {
	|  ___________________________________________^
535 | |                 	Leaf::Response(res) => Some(res),
536 | |                 	_ => None,
537 | |             	},
	| |_________________^
	|
help: the outer pattern can be modified to include the inner pattern
   --> pallet-ismp/src/lib.rs:534:34
	|
534 |             	DataOrHash::Data(leaf) => match leaf {
	|                              	^^^^ replace this binding
535 |                 	Leaf::Response(res) => Some(res),
	|                 	^^^^^^^^^^^^^^^^^^^ with this pattern
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#collapsible_match

⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: ApprovalVoting ~~{"ApprovalDistributionMessage"}~~> ApprovalDistribution ~~{"ApprovalVotingMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
warning: `pallet-ismp` (lib) generated 29 warnings (run `cargo fix --lib -p pallet-ismp` to apply 14 suggestions)
```
