# Evaluation

- **Status:** Accepted.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/societal_grant2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-2-submission/blob/main/LICENSE)|  |
| 0b. | Documentation | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-2-submission/blob/main/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-2-submission/blob/main/docs/AssetsTestingGuide.md)|  |
| 0d. | Docker | <ul><li>[x] </li></ul>|[Docker Image](https://hub.docker.com/layers/societal/societal-node/vb4f81a4/images/sha256-69ba2805d6eb08d8bd5721afc4c82d2975a368efcde2634356ba6568a9111e9d?context=explore)|  |
| 1. | Substrate Module: Reservable & Lockable Asset Pallet | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-2-submission) |   |  
| 2. | Client Modules | <ul><li>[x] </li></ul>| [Polkadot-JS](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) |  |

## Evaluation V2

The warnings presented during the build were fixed.

The image in the tutorial was fixed.

The automated tests are now passing. For some reason `cargo tarpaulin` fail to run and I didn't evaluate the coverage of the tests. This is not a blocker but would be nice to check.

Some warnings of cargo clippy remain.


## Evaluation V1

### Starting the back-end

When I ran `cargo run –release –  –dev` the backend started but I got some warnings. For example:
```
warning: unused variable: `dao_id`
   --> pallets/dao-primitives/src/lib.rs:303:3
	|
303 |     	dao_id: u32,
	|     	^^^^^^ help: if this is intentional, prefix it with an underscore: `_dao_id`
	|
	= note: `#[warn(unused_variables)]` on by default

warning: unused variable: `threshold`
   --> pallets/dao-primitives/src/lib.rs:304:3
	|
304 |     	threshold: u128,
	|     	^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_threshold`

warning: unused variable: `block_number`
   --> pallets/dao-primitives/src/lib.rs:305:3
	|
305 |     	block_number: u32,
	|     	^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_block_number`

warning: unused variable: `hash`
   --> pallets/dao-primitives/src/lib.rs:306:3
	|
306 |     	hash: H256,
	|     	^^^^ help: if this is intentional, prefix it with an underscore: `_hash`

warning: unused variable: `approve`
   --> pallets/dao-primitives/src/lib.rs:307:3
	|
307 |     	approve: bool,
	|     	^^^^^^^ help: if this is intentional, prefix it with an underscore: `_approve`

warning: unused variable: `dao_id`
   --> pallets/dao-primitives/src/lib.rs:318:18
	|
318 | 	fn approve_vote(dao_id: u32, hash: H256, approve: bool) -> Result<(), DispatchError> {
	|                 	^^^^^^ help: if this is intentional, prefix it with an underscore: `_dao_id`

warning: unused variable: `hash`
   --> pallets/dao-primitives/src/lib.rs:318:31
	|
318 | 	fn approve_vote(dao_id: u32, hash: H256, approve: bool) -> Result<(), DispatchError> {
	|                              	^^^^ help: if this is intentional, prefix it with an underscore: `_hash`
```
### Docker

Works fine but got the same warnings as above.

### Unit Tests

The unit tests didn't compile. When I ran `cargo test` I got the same warnings as above and many error messages. For example:

```
error[E0425]: cannot find value `Precompile1` in this scope
	--> precompiles/dao-democracy/src/tests.rs:1142:42
 	|
26   | fn precompiles() -> Precompiles<Runtime> {
 	| ---------------------------------------- similarly named function `precompiles` defined here
...
1142 |                 	EvmEvent::ExecutedFailed { address: Precompile1.into() }.into(),
 	|                                                     	^^^^^^^^^^^ help: a function with a similar name exists: `precompiles`

error[E0425]: cannot find value `Alice` in this scope
	--> precompiles/dao-democracy/src/tests.rs:1151:24
 	|
1151 |     	.with_balances(vec![(Alice.into(), 1000)])
 	|                          	^^^^^ not found in this scope

error[E0425]: cannot find value `Alice` in this scope
	--> precompiles/dao-democracy/src/tests.rs:1164:13
 	|
1164 |             	source: Alice.into(),
 	|                     	^^^^^ not found in this scope

error[E0425]: cannot find value `Precompile1` in this scope
	--> precompiles/dao-democracy/src/tests.rs:1165:13
 	|
26   | fn precompiles() -> Precompiles<Runtime> {
 	| ---------------------------------------- similarly named function `precompiles` defined here
...
1165 |             	target: Precompile1.into(),
 	|                     	^^^^^^^^^^^ help: a function with a similar name exists: `precompiles`

error[E0425]: cannot find value `Precompile1` in this scope
	--> precompiles/dao-democracy/src/tests.rs:1179:46
 	|
26   | fn precompiles() -> Precompiles<Runtime> {
 	| ---------------------------------------- similarly named function `precompiles` defined here
...
1179 |             	vec![EvmEvent::ExecutedFailed { address: Precompile1.into() }.into()]
 	|                                                      	^^^^^^^^^^^ help: a function with a similar name exists: `precompiles`

   Compiling rocksdb v0.19.0
error[E0433]: failed to resolve: use of undeclared crate or module `solidity`
	--> precompiles/dao-democracy/src/tests.rs:1187:22
 	|
1187 |     	for solidity_fn in solidity::get_selectors(file) {
 	|                        	^^^^^^^^ use of undeclared crate or module `solidity`

error[E0433]: failed to resolve: use of undeclared crate or module `solidity`
	--> precompiles/dao-democracy/src/tests.rs:1221:18
 	|
1221 |     	let selector = solidity::compute_selector(deprecated_function);
 	|                    	^^^^^^^^ use of undeclared crate or module `solidity`

Some errors have detailed explanations: E0425, E0432, E0433.
For more information about an error, try `rustc --explain E0425`.
error: could not compile `pallet-dao-democracy-precompile` due to 175 previous errors
warning: build failed, waiting for other jobs to finish...
warning: `pallet-dao-eth-governance-precompile` (lib) generated 1 warning (run `cargo fix --lib -p pallet-dao-eth-governance-precompile` to apply 1 suggestion)
warning: `pallet-dao-collective-precompile` (lib) generated 1 warning (run `cargo fix --lib -p pallet-dao-collective-precompile` to apply 1 suggestion)
warning: `pallet-dao-democracy-precompile` (lib) generated 2 warnings (run `cargo fix --lib -p pallet-dao-democracy-precompile` to apply 1 suggestion)
```

### System Tests

The application works fine, but in the testing guide in [Proposal Volting](https://github.com/sctllabs/societal-grant-2-submission/blob/main/docs/AssetsTestingGuide.md#proposal-voting) proposalWeightBound there is only one field and for me there are two fields refTime and proofSize. See the images below:

Tutorial:
![image (4)](https://user-images.githubusercontent.com/112647953/217795447-de759222-abe2-4b51-af2c-1ab49ec45469.png)


System:
![image (3)](https://user-images.githubusercontent.com/112647953/217795417-b0b105de-410f-4f80-8fda-c38caa393c78.png)


### Code Quality

The Static analysis (cargo clippy) returned many warnings. For example:

```
warning: redundant clone
   --> node/src/benchmarking.rs:167:7
	|
167 |     	call.clone(),
	|         	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
	|
167 |     	call.clone(),
	|     	^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:169:40
	|
169 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:169:31
	|
169 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                 	^^^^^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:170:8
	|
170 |     	extra.clone(),
	|          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:170:3
	|
170 |     	extra.clone(),
	|     	^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: variables can be used directly in the `format!` string
   --> node/src/benchmarking.rs:184:16
	|
184 |     	.map_err(|e| format!("creating inherent data: {:?}", e))?;
	|                  	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
	|
184 -     	.map_err(|e| format!("creating inherent data: {:?}", e))?;
184 +     	.map_err(|e| format!("creating inherent data: {e:?}"))?;
	|

warning: `precompile-utils-macro` (lib) generated 17 warnings (17 duplicates)
warning: `societal-node` (bin "societal-node") generated 17 warnings (run `cargo clippy --fix --bin "societal-node"` to apply 15 suggestions)
	Finished dev [unoptimized + debuginfo] target(s) in 0.74s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`

```

