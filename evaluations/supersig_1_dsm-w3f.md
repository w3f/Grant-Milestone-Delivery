# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|  Apache 2.0  |  | |
| 0b. | Documentation |<ul><li>[x] </li></ul>|  https://decentration.medium.com/, https://wiki.kabocha.network/docs/Supersig/introduction |  |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>|  https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded/src/tests | Need a testing / verification guide for deliverable 2 |
| 0d. | Article and Video  |<ul><li>[x] </li></ul>|  https://medium.com/@decentration/supersig-statemine-cbe6533233c2, https://www.loom.com/share/ea2fe68f99c44a4b91baaa85828b1745 |  |
| 1. | Substrate module: pallet_supersig |<ul><li>[x] </li></ul>|   pallet_supersig https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded |  |
| 2. | Supersig-app: polkadot-js-ui (fork) |<ul><li>[ ] </li></ul>|  https://github.com/decentration/apps |Not fully evaluated yet 
| 3. | Benchmarking |<ul><li>[x] </li></ul>|  https://github.com/decentration/pallet_supersig/blob/master/src/weights.rs  |   | 

## Evaluation V3

### Testing 

I ran `yarn build` and it finished without problems.

I ran `yarn lint` and got these errors:

```
user@localhost:~/Documents/supersig/apps$ yarn lint
$ polkadot-dev-run-lint 
$ yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documents/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documents/supersig/apps
$ eslint --fix --resolve-plugins-relative-to /home/user/Documents/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documents/supersig/apps

/home/user/Documents/supersig/apps/packages/apps-config/src/api/spec/kabocha.ts
  66:11  error  Expected object keys to be in ascending order. 'no_of_members' should be before 'proposal_info'  sort-keys
  70:11  error  Expected object keys to be in ascending order. 'no_of_members' should be before 'proposal_info'  sort-keys

/home/user/Documents/supersig/apps/packages/page-supersig/src/Supersig/Dashboard/index.tsx
  4:15  warning  '__AugmentedRpc' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/supersig/apps/packages/page-supersig/src/index.tsx
  29:5  error  Expected object keys to be in ascending order. 'dashboard' should be before 'decode'  sort-keys

✖ 4 problems (3 errors, 1 warning)

node:internal/errors:857
  const err = new Error(message);
              ^

Error: Command failed: yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documents/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documents/supersig/apps
    at checkExecSyncError (node:child_process:861:11)
    at Object.execSync (node:child_process:932:15)
    at execSync (file:///home/user/Documents/supersig/apps/node_modules/@polkadot/dev/scripts/util.mjs:79:6)
    at file:///home/user/Documents/supersig/apps/node_modules/@polkadot/dev/scripts/polkadot-dev-run-lint.mjs:31:3
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async loadESM (node:internal/process/esm_loader:91:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12) {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 185350,
  stdout: null,
  stderr: null
}
```

I'm using node 16.20.0 in the branch main-fellowship-1.

```
user@localhost:~/Documents/supersig/apps$ node -v
v16.20.0

user@localhost:~/Documents/supersig/apps$ git branch
* main-fellowship-1
```

## Evaluation V2

### Automate Testing

All tests passed but got some warnings:

```
user@localhost:~/Documentos/supersig/pallet_supersig$ cargo test
warning: unused variable: `i`
   --> src/tests/propose_call.rs:158:8
	|
158 |         	for i in 1..=3 {
	|             	^ help: if this is intentional, prefix it with an underscore: `_i`
	|
	= note: `#[warn(unused_variables)]` on by default

warning: unused variable: `i`
   --> src/tests/propose_call.rs:255:8
	|
255 |         	for i in 1..3 {
	|             	^ help: if this is intentional, prefix it with an underscore: `_i`

warning: unused variable: `i`
   --> src/tests/propose_call.rs:400:7
	|
400 |     	for i in 1..=3 {
	|         	^ help: if this is intentional, prefix it with an underscore: `_i`

warning: unused `Result` that must be used
   --> src/tests/propose_call.rs:168:5
	|
168 | /             	Supersig::propose_call(
169 | |                 	RawOrigin::Signed(ALICE()).into(),
170 | |                 	supersig_account.clone(),
171 | |                 	Box::new(call.clone())
172 | |             	);
	| |_________________^
	|
	= note: this `Result` may be an `Err` variant, which should be handled
	= note: `#[warn(unused_must_use)]` on by default

warning: unused `Result` that must be used
   --> src/tests/propose_call.rs:256:6
	|
256 | /                 	Supersig::propose_call(
257 | |                     	RawOrigin::Signed(ALICE()).into(),
258 | |                     	supersig_account.clone(),
259 | |                     	Box::new(call.clone()),
260 | |                 	);
	| |_____________________^
	|
	= note: this `Result` may be an `Err` variant, which should be handled

warning: unused `Result` that must be used
   --> src/tests/propose_call.rs:401:4
	|
401 | /         	Supersig::propose_call(
402 | |             	RawOrigin::Signed(ALICE()).into(),
403 | |             	supersig_account.clone(),
404 | |             	Box::new(call.clone()),
405 | |         	);
	| |_____________^
	|
	= note: this `Result` may be an `Err` variant, which should be handled

warning: `pallet-supersig` (lib test) generated 6 warnings (run `cargo fix --lib -p pallet-supersig --tests` to apply 3 suggestions)
	Finished test [unoptimized + debuginfo] target(s) in 0.25s
 	Running unittests src/lib.rs (target/debug/deps/pallet_supersig-edef3eb98bb587b9)

running 43 tests
test tests::create_supersig::create_with_empty_list ... ok
test tests::add_members::add_users_unknown_supersig ... ok
test tests::add_members::add_users_not_allowed ... ok
test tests::approve_call::approve_not_a_member ... ok
test tests::approve_call::approve_supersig_doesnt_exist ... ok
test tests::delete_supersig::cannot_delete_supersig ... ok
test tests::create_supersig::create_supersig_with_master ... ok
test tests::create_supersig::create_supersig ... ok
test tests::mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::approve_call::user_already_voted ... ok
test tests::delete_supersig::cannot_liquidate_supersig ... ok
test tests::approve_call::approve_call ... ok
test tests::add_members::add_members ... ok
test tests::delete_supersig::delete_supersig_unknown_supersig ... ok
test tests::leave_supersig::leave_supersig_last_user ... ok
test tests::delete_supersig::delete_supersig ... ok
test tests::approve_call::approve_failing_call_as_master ... ok
test tests::create_supersig::create_multiple_supersig ... ok
test tests::leave_supersig::leave_supersig_not_a_member ... ok
test tests::approve_call::approve_call_until_threshold ... ok
test tests::leave_supersig::leave_unknown_supersig ... ok
test tests::propose_call::propose_call_data_too_large ... ok
test tests::approve_call::approve_call_as_master ... ok
test tests::leave_supersig::leave_supersig ... ok
test tests::propose_call::submit_supersig_doesnt_exist ... ok
test tests::propose_call::test_active_proposals_decrement_on_approve ... ok
test tests::delete_supersig::delete_supersig_with_call ... ok
test tests::propose_call::test_live_proposals_limit ... ok
test tests::propose_call::propose_calls ... ok
test tests::propose_call::test_propose_call_max_active_proposals ... ok
test tests::remove_call::remove_unknown_call ... ok
test tests::remove_call::non_allowed_remove_call ... ok
test tests::remove_members::remove_users_leaving_0_users ... ok
test tests::remove_call::remove_call ... ok
test tests::remove_members::remove_users_unknown_supersig ... ok
test tests::remove_members::remove_users_not_allowed ... ok
test tests::remove_members::remove_members ... ok
test tests::propose_call::test_remove_call_active_proposals ... ok
test tests::rpc_calls::get_proposal_state ... ok
test tests::rpc_calls::list_members ... ok
test tests::propose_call::test_propose_call_active_proposals_multiple_accounts ... ok
test tests::rpc_calls::get_proposals ... ok
test tests::rpc_calls::get_account_supersigs ... ok

test result: ok. 43 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 5.38s

   Doc-tests pallet-supersig

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

I checked the coverage of the tests with `cargo tarpaulin`. The coverage could be improved, but it isn't mandatory.

```
test result: ok. 43 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 35.31s

May 08 07:36:44.289  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| rpc/src/lib.rs: 0/28
|| src/benchmarking.rs: 0/3
|| src/lib.rs: 246/333
|| src/rpc.rs: 29/38
|| src/types.rs: 1/2
|| src/weights.rs: 0/53
||
60.39% coverage, 276/457 lines covered
```

### Manual Testing

The error with adding a member I reported in Evaluation V1 has occurred because the supersig doesn't have enough funds. With a supersig with enough funds, I could add the member without problems.

Could you provide a testing guide for the derivable 2 and explain better about this derivable? 

## Evaluation V1

### Automate Testing

I tried to run the tests but got some warnings and this error:

```
...
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
   --> src/weights.rs:125:11
	|
125 |     	Weight::from_ref_time(110_730_000u64)
	|             	^^^^^^^^^^^^^
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
   --> src/weights.rs:134:11
	|
134 |     	Weight::from_ref_time(53_207_000u64)
	|             	^^^^^^^^^^^^^
warning: `pallet-supersig` (lib) generated 13 warnings
   Compiling pallet-supersig v1.1.1 (/home/user/Documentos/supersig/pallet_supersig)
error[E0046]: not all trait items implemented, missing: `HoldIdentifier`, `FreezeIdentifier`, `MaxHolds`, `MaxFreezes`
  --> src/tests/mock.rs:68:1
   |
68 | impl pallet_balances::Config for Test {
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ missing `HoldIdentifier`, `FreezeIdentifier`, `MaxHolds`, `MaxFreezes` in implementation
   |
   = help: implement the missing item: `type HoldIdentifier = Type;`
   = help: implement the missing item: `type FreezeIdentifier = Type;`
   = help: implement the missing item: `type MaxHolds = Type;`
   = help: implement the missing item: `type MaxFreezes = Type;`
...
For more information about this error, try `rustc --explain E0046`.
warning: `pallet-supersig` (lib test) generated 13 warnings (1 duplicate)
error: could not compile `pallet-supersig` due to previous error; 13 warnings emitted
```

### Manual Testing

I got the error mentioned with `yarn build`:

```
FATAL: page-supersig/src/Supersig/Dashboard/Summary.tsx:: line 1:: Invalid header definition::
    // Copyright 2017-2022 @decentration/page-supersig authors & contributors
page-supersig/src/Supersig/Dashboard/Table.tsx:: line 1:: Invalid header definition::
    
page-supersig/src/Supersig/Dashboard/index.tsx:: line 1:: Invalid header definition::
    
page-supersig/src/SupersigDecoder/index.tsx:: line 1:: Invalid header definition::
    
page-supersig/src/definitions.ts:: line 1:: Invalid header definition::
    // import OverrideRpcDefinition from '@polkadot/types/interfaces/jsonrpc';
page-supersig/src/util.ts:: line 1:: Invalid header definition::
```

I followed [this guide](https://decentration.medium.com/add-supersig-to-your-chain-789de9356de1) to set up the substrate to test the pallets. I only had one problem with adding members. I created the supersig with Alice (Master) and Bob (Standard) and tried to add Charlie through propose_call, I voted with Alice and Bob, and the vote passed, but Charlie wasn't added. With only Alice in the supersig, I could add Bob or Charlie, but not both in the same propose_call. I didn't have problems with other functions.

Could you provide a testing guide for the derivable 2? 

I tried to run the lint but got this error:

```
user@localhost:~/Documentos/supersig/apps$ yarn lint
$ polkadot-dev-run-lint
$ yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps
$ eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps
/home/user/Documentos/supersig/apps/packages/page-supersig/src/index.tsx
  49:5  error  Expected object keys to be in ascending order. 'dashboard' should be before 'decode'  sort-keys
✖ 1 problem (1 error, 0 warnings)
node:internal/errors:857
  const err = new Error(message);
          	^
Error: Command failed: yarn polkadot-exec-eslint --fix --resolve-plugins-relative-to /home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts --ext .js,.cjs,.mjs,.ts,.tsx /home/user/Documentos/supersig/apps
	at checkExecSyncError (node:child_process:861:11)
	at Object.execSync (node:child_process:932:15)
	at execSync (file:///home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts/util.mjs:79:6)
	at file:///home/user/Documentos/supersig/apps/node_modules/@polkadot/dev/scripts/polkadot-dev-run-lint.mjs:31:3
	at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
	at async Promise.all (index 0)
	at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
	at async loadESM (node:internal/process/esm_loader:91:5)
	at async handleMainPromise (node:internal/modules/run_main:65:12) {
  status: 1,
  signal: null,
  output: [ null, null, null ],
  pid: 182729,
  stdout: null,
  stderr: null
}
```
