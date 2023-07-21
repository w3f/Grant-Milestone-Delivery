# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SaaS3.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| Apache 2.0 | 
| 0b. | Documentation |<ul><li>[x] </li></ul>|https://github.com/SaaS3-Foundation/saas3-dao|  | 
| 0c.  | Testing Guide |<ul><li>[x] </li></ul>|https://github.com/SaaS3-Foundation/saas3-dao|  | 
| 0d. | Docker |<ul><li>[x] </li></ul>|  We are not able to provide a Dockerfile | I was able to test it locally without docker |
| oe. | Article/Tutorial |<ul><li>[x] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/main/Tutorial.md |  |
| 1. | pallet-court |<ul><li>[x] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/tree/main/pallets/court |  |
|  | Functions |<ul><li>[x] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L233 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L262 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L286|  |
|  | Structs |  | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL68C1-L79C2 | |
|  | Storage |  | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL115C2-L121C4 | |
| | Events |  |https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L160 |
| 2. | pallet-treasury |<ul><li>[x] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/main/pallets/treasury/src/lib.rs|  |
| | Storage |   | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L117 |
| | Events |   | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L169| |
| 3. | UI & Frontend |<ul><li>[x] </li></ul>| https://github.com/SaaS3-Foundation/SaaS3-DAO-Pallets|  |

## Evaluation V6

The licenses were added and now the tests are passing. As declared [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/872#issuecomment-1616628303), the `removeSue` is out of the scope of the grant. 

## Evaluation V5

### License

Still missing the Apache License in both repositories.

### Automated Test

I ran `cargo +nightly test` again to check, but this time some tests failed.

```
issamu@localhost:~/Documents/saas3/saas3-dao$ cargo +nightly test
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
    Finished test [unoptimized + debuginfo] target(s) in 0.78s
     Running unittests src/lib.rs (target/debug/deps/pallet_court-5de9314ef157f9e7)

running 9 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::vote_against_works ... FAILED
test tests::vote_sue_works ... ok
test tests::contribution_works ... FAILED
test tests::process_sue_before_vote ... FAILED
test tests::remove_approved_sue ... FAILED
test tests::process_sue_works ... FAILED
test tests::submite_sue_works ... ok
test tests::remove_unapproved_sue ... ok

failures:

---- tests::vote_against_works stdout ----
thread 'tests::vote_against_works' panicked at 'Expected Ok(_). Got Err(
    BadOrigin,
)', pallets/court/src/tests.rs:156:9
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- tests::contribution_works stdout ----
thread 'tests::contribution_works' panicked at 'Expected Ok(_). Got Err(
    BadOrigin,
)', pallets/court/src/tests.rs:211:9

---- tests::process_sue_before_vote stdout ----
thread 'tests::process_sue_before_vote' panicked at 'assertion failed: `(left == right)`
  left: `Err(BadOrigin)`,
 right: `Err(Module(ModuleError { index: 2, error: [10, 0, 0, 0], message: Some("VoterCountTooLow") }))`', pallets/court/src/tests.rs:167:9

---- tests::remove_approved_sue stdout ----
thread 'tests::remove_approved_sue' panicked at 'Expected Ok(_). Got Err(
    BadOrigin,
)', pallets/court/src/tests.rs:197:9

---- tests::process_sue_works stdout ----
thread 'tests::process_sue_works' panicked at 'Expected Ok(_). Got Err(
    BadOrigin,
)', pallets/court/src/tests.rs:141:9


failures:
    tests::contribution_works
    tests::process_sue_before_vote
    tests::process_sue_works
    tests::remove_approved_sue
    tests::vote_against_works

test result: FAILED. 4 passed; 5 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

error: test failed, to rerun pass `-p pallet-court --lib`
```

### Manual Testing

I tried again, and this time, I could successfully process a lawsuit using polkadot.js and the front end. I also could claim the rewards in polkadot.js. Could you explain how `court.removeSue(lawsuitId)` should work? I think it isn't part of the deliverables, but I tested this and only noticed in the chain state the id remove from the `court.approvals()`, but the `court.proposals(u32)`, still returning `approved: true` and didn't change the frontend.

## Evaluation V4

I tried to use the frontend in the Evaluation V3, but I tested again to provide some prints. I created a lawsuit and voted with four different accounts. 

![Screenshot 2023-06-22 at 08-00-49 SaaS3 DAO Pallets](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/8e023ec3-7947-499e-ba0c-5e84e224bc1c)

With any of the jury accounts, I tried to approve the lawsuit. The frontend showed a success message but wasn't added new events in the polkadot.js. 

![image (22)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/bfa1e372-047e-4140-bbb0-c883b034d07d)

![Screenshot 2023-06-22 at 08-49-23 Polkadot_Substrate Portal](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/919e448e-ee37-4b80-a019-a4780a2c14dc)

I found another problem. I created another lawsuit, but when I voted in the second lawsuit, the frontend has sent the transaction with id 0, seeding the vote to the first lawsuit.

![Screenshot 2023-06-22 at 08-55-02 SaaS3 DAO Pallets](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/75d37c52-9673-4545-b272-1c970518078c)

![image (23)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/925e0e2e-25ee-475a-b3d7-ef6f8c92b331)

The last vote was trying to vote on the first lawsuit, but it seeded to the second one. The order of the list seems to be inverted, showing the second lawsuit on top of the list, but on top of the list, the id is 0.


## Evaluation V3

### Manual Test

I tried again to use these pallets, I followed the [guide](https://github.com/SaaS3-Foundation/saas3-dao/blob/main/Tutorial.md), and I could vote using the Charlie, Eve, Ferdie, and Dave address.

```
court.proposals: Option<PalletCourtLawsuit>
{
  plaintiff: 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
  value: 50
  defendent: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
  statement: I demand compensation for damages.
  voters: [
    5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y
    5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy
    5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw
    5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL
  ]
  votes: [
    true
    true
    true
    true
  ]
  approved: false
}
```

I got the same error, BadOrigin, when trying to Process a Lawsuit using any of the jury member's addresses.

I changed the unit test code to check if the pallet works with a signature from the jury.

Original Test
```
#[test]
fn process_sue_works() {
	new_test_ext().execute_with(|| {
		Balances::make_free_balance_be(&0, 101);
		assert_ok!(Court::submit_sue(RuntimeOrigin::signed(1), 100, 0, vec![]));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(2), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(3), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(4), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(5), 0, true));
		assert_ok!(Court::process_sue(RuntimeOrigin::root(), 0));
		assert_eq!(Court::approvals().len(), 1);
		assert_eq!(Court::proposal_count(), 1);
	});
}
```

Modified Test
```
#[test]
fn process_sue_works() {
	new_test_ext().execute_with(|| {
		Balances::make_free_balance_be(&0, 101);
		assert_ok!(Court::submit_sue(RuntimeOrigin::signed(1), 100, 0, vec![]));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(2), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(3), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(4), 0, true));
		assert_ok!(Court::vote_sue(RuntimeOrigin::signed(5), 0, true));
		assert_ok!(Court::process_sue(RuntimeOrigin::signed(2), 0));
		assert_eq!(Court::approvals().len(), 1);
		assert_eq!(Court::proposal_count(), 1);
	});
}
```

This test passed, so I don't know why this isn't working using polkadot.js. It is working for you? Did you tried it using polkadot.js? 

## Evaluation V2

### Automated Test

I ran `cargo +nightly test`, and all tests passed without warnings, with better coverage.

```
running 9 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::submite_sue_works ... ok
test tests::vote_sue_works ... ok
test tests::contribution_works ... ok
test tests::vote_against_works ... ok
test tests::process_sue_before_vote ... ok
test tests::remove_approved_sue ... ok
test tests::process_sue_works ... ok
test tests::remove_unapproved_sue ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/lib.rs (target/debug/deps/pallet_template-e0640ccd8bc222e0)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_works_for_default_value ... ok
test tests::correct_error_for_none_value ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_treasury-fa4c5da44e70add7)

running 6 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::genesis_config_works ... ok
test tests::receive_from_zero_balance_should_fail ... ok
test tests::receive_should_works ... ok
test tests::claim_rewards_exceed_claim ... ok
test tests::claim_rewards_ok ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/main.rs (target/debug/deps/saas3_dao_node-a29cbf50b04bb799)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/saas3_dao_runtime-912420306e0771b8)

running 5 tests
test weights::block_weights::constants::test_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-court
```

```
Jun 12 10:49:44.439  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/90
|| node/src/cli.rs: 0/5
|| node/src/command.rs: 0/187
|| node/src/main.rs: 0/2
|| node/src/rpc.rs: 0/6
|| node/src/service.rs: 0/155
|| pallets/court/src/lib.rs: 58/71
|| pallets/template/src/lib.rs: 9/17
|| pallets/treasury/src/lib.rs: 45/52
|| runtime/src/lib.rs: 11/97
|| runtime/src/weights/block_weights.rs: 1/1
|| runtime/src/weights/extrinsic_weights.rs: 1/1
|| runtime/src/weights/paritydb_weights.rs: 0/3
|| runtime/src/weights/rocksdb_weights.rs: 0/3
|| runtime/src/xcm_config.rs: 0/31
||
17.34% coverage, 125/721 lines covered   
```

### Manual Testing

I didn't understand what the `root user` is in this application. Is it to use `sudo` to use the command `court.processSue`? Please explain. Do I need to use the root user to approve in the frontend?
The lack of access to the root user prevented me to complete the manual testing of the application. 

### Code Quality

The EsLint warnings were fixed.

## Evaluation V1

### Documentation

During the execution of the installation steps I had one doubt. Is the [Prepare parachain node](https://github.com/SaaS3-Foundation/saas3-dao#prepare-parachain-node) step needed since the `para-2000-genesis-state` and `para-2000-wasm` files are in the repository?

In [Register with the local relay chain](https://github.com/SaaS3-Foundation/saas3-dao#register-with-the-local-relay-chain) and in the Prepare parachain node needs to specify that the user needs to access the substrate with port 9977 to do the configuration.

The testing guide needs to have examples of inputs and expected outputs. The frontend also needs a testing guide. 

### Automated Test

I ran `cargo test`. All tests passed but returned some warnings.

```
user@localhost:~/Documents/saas3/saas3-dao$ cargo +nightly test
⚡ Found 3 strongly connected components which includes at least one cycle each
cycle(001) ∈ α: DisputeCoordinator ~~{"DisputeDistributionMessage"}~~> DisputeDistribution ~~{"DisputeCoordinatorMessage"}~~>  *
cycle(002) ∈ β: CandidateBacking ~~{"CollatorProtocolMessage"}~~> CollatorProtocol ~~{"CandidateBackingMessage"}~~>  *
cycle(003) ∈ γ: NetworkBridgeRx ~~{"GossipSupportMessage"}~~> GossipSupport ~~{"NetworkBridgeRxMessage"}~~>  *
warning: unused imports: `BadOrigin`, `Dispatchable`
  --> pallets/treasury/src/tests.rs:23:11
   |
23 | 	traits::{BadOrigin, BlakeTwo256, Dispatchable, IdentityLookup},
   |          	^^^^^^^^^           	^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: unused imports: `OnInitialize`, `assert_err_ignore_postinfo`
  --> pallets/treasury/src/tests.rs:27:2
   |
27 | 	assert_err_ignore_postinfo, assert_noop, assert_ok,
   | 	^^^^^^^^^^^^^^^^^^^^^^^^^^
...
30 | 	traits::{ConstU32, ConstU64, OnInitialize},
   |                              	^^^^^^^^^^^^

warning: type alias `UtilityCall` is never used
  --> pallets/treasury/src/tests.rs:40:6
   |
40 | type UtilityCall = pallet_utility::Call<Test>;
   |  	^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: type alias `TreasuryCall` is never used
  --> pallets/treasury/src/tests.rs:41:6
   |
41 | type TreasuryCall = crate::Call<Test>;
   |  	^^^^^^^^^^^^

warning: `pallet-treasury` (lib test) generated 4 warnings (run `cargo fix --lib -p pallet-treasury --tests` to apply 2 suggestions)
	Finished test [unoptimized + debuginfo] target(s) in 2.13s
 	Running unittests src/lib.rs (target/debug/deps/pallet_court-5de9314ef157f9e7)

running 4 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::process_sue_works ... ok
test tests::submite_sue_works ... ok
test tests::vote_sue_works ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

 	Running unittests src/lib.rs (target/debug/deps/pallet_template-e0640ccd8bc222e0)

running 3 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::correct_error_for_none_value ... ok
test tests::it_works_for_default_value ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_treasury-cd031383763d0549)

running 4 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::genesis_config_works ... ok
test tests::receive_should_works ... ok
test tests::claim_rewards_exceed_claim ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/main.rs (target/debug/deps/saas3_dao_node-c357a8e56ae9f39a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/saas3_dao_runtime-26912060f765f2a3)

running 5 tests
test weights::block_weights::constants::test_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test weights::extrinsic_weights::constants::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-court

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-treasury

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests saas3-dao-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

I ran `cargo tarpaulin` to check the coverage of the tests in the pallets. The coverage can be improved.

```
Jun 01 09:06:34.358  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/90
|| node/src/cli.rs: 0/5
|| node/src/command.rs: 0/187
|| node/src/main.rs: 0/2
|| node/src/rpc.rs: 0/6
|| node/src/service.rs: 0/155
|| pallets/court/src/lib.rs: 47/70
|| pallets/template/src/lib.rs: 9/17
|| pallets/treasury/src/lib.rs: 35/51
|| runtime/src/lib.rs: 11/97
|| runtime/src/weights/block_weights.rs: 1/1
|| runtime/src/weights/extrinsic_weights.rs: 1/1
|| runtime/src/weights/paritydb_weights.rs: 0/3
|| runtime/src/weights/rocksdb_weights.rs: 0/3
|| runtime/src/xcm_config.rs: 0/31
|| 
14.46% coverage, 104/719 lines covered
```

### Manual testing

Despite the testing guide doesn't have examples of inputs and expected outputs, I tried to check the pallets and the frontend. 

I couldn't figure out what to put in the `category_type` of `Treasury.receive`. So I have done the donations using the frontend and could check the transfer to the Treasury in the substrate. I could submit a lawsuit and vote using the frontend and the substrate, but when I tried to process the lawsuit, in the frontend, nothing occurred. In the substrate, I received a BadOrigin message. So I couldn't try to claim the rewards.

### Code Quality

I ran `cargo clippy` and received some warnings, for example:

```
warning: the borrowed expression implements the required traits
   --> node/src/command.rs:271:39
	|
271 |                     	let _ = std::fs::create_dir_all(&database_path);
	|                                                     	^^^^^^^^^^^^^^ help: change this to: `database_path`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
	= note: `#[warn(clippy::needless_borrow)]` on by default

warning: unnecessary closure used to substitute value for `Option::None`
   --> node/src/command.rs:275:19
	|
275 |               	let para_id = chain_spec::Extensions::try_get(&*config.chain_spec)
	|  _______________________________^
276 | |                 	.map(|e| e.para_id)
277 | |                 	.ok_or_else(|| "Could not find parachain ID in chain-spec.")?;
	| |______________________----------------------------------------------------------^
	|                    	|
	|                    	help: use `ok_or(..)` instead: `ok_or("Could not find parachain ID in chain-spec.")`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_lazy_evaluations
	= note: `#[warn(clippy::unnecessary_lazy_evaluations)]` on by default

warning: length comparison to zero
   --> node/src/command.rs:304:61
	|
304 |             	if !collator_options.relay_chain_rpc_urls.is_empty() && cli.relay_chain_args.len() > 0 {
	|                                                                     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: using `!is_empty` is clearer and more explicit: `!cli.relay_chain_args.is_empty()`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#len_zero
	= note: `#[warn(clippy::len_zero)]` on by default

warning: `saas3-dao-node` (bin "saas3-dao-node") generated 8 warnings (run `cargo clippy --fix --bin "saas3-dao-node"` to apply 5 suggestions)
	Finished dev [unoptimized + debuginfo] target(s) in 0.61s
```

I ran `yarn lint` and received some warnings:

```
user@localhost:~/Documents/saas3/saas3-dSaaS3-DAO-Pallets$ yarn lint
yarn run v1.22.19
$ eslint src --ext js,jsx --fix src/ --report-unused-disable-directives --max-warnings 0

/home/user/Documents/saas3/saas3-dao/SaaS3-DAO-Pallets/src/pages/components/LawsuitList.jsx
  147:5  warning  Unexpected console statement  no-console

/home/user/Documents/saas3/saas3-dao/SaaS3-DAO-Pallets/src/pages/components/UserDonationsForm.jsx
  20:7  warning  Unexpected console statement  no-console

/home/user/Documents/saas3/saas3-dao/SaaS3-DAO-Pallets/src/pages/components/UserVoteForm.jsx
  22:13  warning  '_defendent' is assigned a value but never used  no-unused-vars

/home/user/Documents/saas3/saas3-dao/SaaS3-DAO-Pallets/src/provider/PolkadotWallet.jsx
  96:7  warning  Unexpected console statement  no-console

✖ 4 problems (0 errors, 4 warnings)

ESLint found too many warnings (maximum: 0).
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
