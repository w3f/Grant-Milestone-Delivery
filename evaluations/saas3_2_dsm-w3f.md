# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SaaS3.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ ] </li></ul>| Apache 2.0 | License file is missing in the root of the repository
| 0b. | Documentation |<ul><li>[ ] </li></ul>|https://github.com/SaaS3-Foundation/saas3-dao| Not fully evaluated yet | 
| 0c.  | Testing Guide |<ul><li>[ ] </li></ul>|https://github.com/SaaS3-Foundation/saas3-dao| Need a manual testing guide | 
| 0d. | Docker |<ul><li>[ ] </li></ul>|  We are not able to provide a Dockerfile | Would be easier to setup with a zombienet |
| oe. | Article/Tutorial |<ul><li>[ ] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/main/Tutorial.md | Not fully evaluated yet |
| 1. | pallet-court |<ul><li>[ ] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/tree/main/pallets/court |Not fully evaluated yet |
|  | Functions |<ul><li>[ ] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L233 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L262 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L286| Not fully evaluated yet |
|  | Structs |  | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL68C1-L79C2 | |
|  | Storage |  | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL115C2-L121C4 | |
| | Events |  |https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L160 |
| 2. | pallet-treasury |<ul><li>[ ] </li></ul>| https://github.com/SaaS3-Foundation/saas3-dao/blob/main/pallets/treasury/src/lib.rs| Not fully evaluated yet |
| | Storage |   | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L117 |
| | Events |   | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L169| |
| 3. | UI & Frontend |<ul><li>[ ] </li></ul>| https://github.com/SaaS3-Foundation/SaaS3-DAO-Pallets| Not fully evaluated yet |

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
