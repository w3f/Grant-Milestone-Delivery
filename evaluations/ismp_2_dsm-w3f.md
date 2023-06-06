# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ismp.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/LICENSE](https://github.com/polytope-labs/substrate-ismp/blob/main/LICENSE)| | 
| 0b.  | Documentation |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/README.md](https://github.com/polytope-labs/substrate-ismp/blob/main/README.md)| Would be nice to have instructions to run without docker |
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/tests.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/tests.rs)| Need a manual testing guide |
| 0d. | Docker |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp#run-test-in-docker](https://github.com/polytope-labs/substrate-ismp#run-test-in-docker)| Not fully evaluated yet |
| 0e. | Article|<ul><li>[ ] </li></ul>| TBA | Not a deliverable for this milestone |
| 1. | pallet-ismp |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp](https://github.com/polytope-labs/substrate-ismp)| Not fully evaluated yet |
| 1a. | Host |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/host.rs#L48](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/host.rs#L48)| Not fully evaluated yet |
| 1b. | Router |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/dispatcher.rs#L48](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/pallet-ismp/src/dispatcher.rs#L48)| Not fully evaluated yet |
| 1c. | `ParachainConsensusClient` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/parachain/src/consensus.rs#L115](https://github.com/polytope-labs/substrate-ismp/blob/88c262e3d10c6d74ce0ae29bc2d50b000ab0f7be/parachain/src/consensus.rs#L115)| Not fully evaluated yet |
| 1d. | RPC |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/rpc/src/lib.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/rpc/src/lib.rs)| Not fully evaluated yet |
| 1e. | Runtime-APIs |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/runtime-api/src/lib.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/runtime-api/src/lib.rs)| Not fully evaluated yet |
| 1f. | Bechmarks |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/benchmarking.rs](https://github.com/polytope-labs/substrate-ismp/blob/main/pallet-ismp/src/benchmarking.rs)| Not fully evaluated yet |

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
