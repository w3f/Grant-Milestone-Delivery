# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ZK-Snarks%20tutorial.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** [M1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/zk-snarks-tutorial_1_dsm-w3f.md)

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>|  MIT  | |
| **0b.** | Documentation | <ul><li>[x] </li></ul>|Documentation can be found in the [README](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallets/zk-snarks/README.md) file. |  | 
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [Repository](https://github.com/bright/zk-snarks-with-substrate/) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Repository](https://github.com/bright/zk-snarks-with-substrate/) | 
| 1. | Research notes | <ul><li>[ ] </li></ul>| Notes can be found in the [QAP_NOTES](https://github.com/bright/zk-snarks-with-substrate/blob/main/notes/qap_notes.pdf) file. | Not fully evaluated yet. | 
| 2. | Groth16  proof verification method | <ul><li>[ ] </li></ul>| Code for Groth16 proof verification can be found in the [verify.rs](https://github.com/bright/zk-snarks-with-substrate/tree/main/pallets/zk-snarks/src/verify.rs) file.| Not fully evaluated yet. |
| 3. | Demo | <ul><li>[x] </li></ul>| Demo part is done in our cycle of articles, but the details commands which should be run can be found in the [README](https://github.com/bright/zk-snarks-with-substrate/tree/main/circom/README.md) file.| | 
| 4. | Circuits in circom | <ul><li>[x] </li></ul>| Circuit template is in the [task.circom](https://github.com/bright/zk-snarks-with-substrate/tree/main/circom/task.circom) file.| | 
| 5. | Blog post: Tutorial Groth16 (Part 1) | <ul><li>[ ] </li></ul>|   Blog post is in the [groth16.md](https://github.com/bright/zk-snarks-with-substrate/tree/main/blog/groth16.md) file.| Not fully evaluated yet. |
| 6. | Blog post: Tutorial Pallet (Part 2) | <ul><li>[ ] </li></ul>| Blog post is in the [zk-snark-pallet.md](https://github.com/bright/zk-snarks-with-substrate/tree/main/blog/zk-snark-pallet.md) file.| Not fully evaluated yet.  | 
| 7. | Youtube video | <ul><li>[x] </li></ul>| Video is in the [zk-snarks.mp4](https://github.com/bright/zk-snarks-with-substrate/tree/main/video/zk-snarks.mp4) file.| | 

## Evaluation V2

The formulas in the tutorial and cargo clippy warnings were fixed. The concepts in the tutorial will be checked by a zk-proof specialist and are still pending to be verified.

## Evaluation V1

### Tutorial

The tutorial is well-written. All the commands in the tutorial worked, however, some of them I needed to figure out from which path I should run the commands. Please double-check the paths in the commands since some need to run from blog/data and other from circom path. You can also indicate to the user which path is appropriate to run each command.

Some of the formulas in the tutorial are not rendering. Could you please assist with that?

![image](https://user-images.githubusercontent.com/112647953/217236118-f260accd-c78c-468a-94d2-208e9d61208c.png)


### System Test

The application works fine following the Groth16, Pallet, and Youtube video Tutorials.

### Code Quality

All unit tests are passing and the coverage is good:

Coverage: pallets	531 / 567 (93.65%).

```
user@localhost:~/Documents/zk-snarks-with-substrate$ cargo test
   Compiling node-template-runtime v4.0.0-dev (/home/user/Documents/zk-snarks-with-substrate/runtime)
   Compiling pallet-zk-snarks v4.0.0-dev (/home/user/Documents/zk-snarks-with-substrate/pallets/zk-snarks)
   Compiling node-template v4.0.0-dev (/home/user/Documents/zk-snarks-with-substrate/node)
	Finished test [unoptimized + debuginfo] target(s) in 13.06s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
 	Running unittests src/lib.rs (target/debug/deps/node_template-c9b75da72399080c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/main.rs (target/debug/deps/node_template-67e96f952a96fb4c)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/node_template_runtime-0aa05f6571276017)

running 2 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_whitelist ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/pallet_zk_snarks-a68def16010dfc20)

running 24 tests
test deserialization::tests::public_inputs_deserialization ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test deserialization::tests::test_proof_deserialization ... ok
test deserialization::tests::test_vk_deserialization ... ok
test tests::test_too_long_public_inputs ... ok
test tests::test_too_long_verification_key ... ok
test verify::tests::proof_from_correct_coordinates_is_ok ... ok
test tests::test_empty_proof ... ok
test tests::test_not_supported_proof_protocol ... ok
test tests::test_setup_verification ... ok
test tests::test_not_supported_vk_protocol ... ok
test tests::test_not_supported_proof_curve ... ok
test tests::test_too_long_proof ... ok
test tests::test_could_not_create_proof ... ok
test tests::test_public_inputs_mismatch ... ok
test tests::test_verify_without_verification_key ... ok
test tests::test_not_supported_vk_curve ... ok
test tests::test_could_not_create_verification_key ... ok
test verify::tests::verification_key_from_correct_coordinates_is_ok ... ok
test verify::tests::verify_with_incorrect_ic_len ... ok
test tests::test_verification_success ... ok
test verify::tests::verify_correct_proof ... ok
test tests::test_verification_failed ... ok
test verify::tests::verify_incorrect_proof ... ok

test result: ok. 24 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

   Doc-tests node-template

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests node-template-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-zk-snarks

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

The Static analysis (cargo clippy) returned some warning.

```
user@localhost:~/Documents/zk-snarks-with-substrate$ cargo clippy
warning: manual `RangeInclusive::contains` implementation
  --> pallets/zk-snarks/src/deserialization.rs:32:1
   |
32 | / construct_uint! {
33 | | 	pub struct U256(6);
34 | | }
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#manual_range_contains
   = note: `#[warn(clippy::manual_range_contains)]` on by default
   = note: this warning originates in the macro `$crate::construct_uint` which comes from the expansion of the macro `construct_uint` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: manual implementation of an assign operation
  --> pallets/zk-snarks/src/deserialization.rs:32:1
   |
32 | / construct_uint! {
33 | | 	pub struct U256(6);
34 | | }
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assign_op_pattern
   = note: `#[warn(clippy::assign_op_pattern)]` on by default
   = note: this warning originates in the macro `$crate::construct_uint` which comes from the expansion of the macro `construct_uint` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: manual implementation of an assign operation
  --> pallets/zk-snarks/src/deserialization.rs:32:1
   |
32 | / construct_uint! {
33 | | 	pub struct U256(6);
34 | | }
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#assign_op_pattern
   = note: this warning originates in the macro `$crate::construct_uint` which comes from the expansion of the macro `construct_uint` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: use of `offset` with a `usize` casted to an `isize`
  --> pallets/zk-snarks/src/deserialization.rs:32:1
   |
32 | / construct_uint! {
33 | | 	pub struct U256(6);
34 | | }
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_offset_with_cast
   = note: `#[warn(clippy::ptr_offset_with_cast)]` on by default
   = note: this warning originates in the macro `$crate::uint_overflowing_binop` which comes from the expansion of the macro `construct_uint` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: use of `offset` with a `usize` casted to an `isize`
  --> pallets/zk-snarks/src/deserialization.rs:32:1
   |
32 | / construct_uint! {
33 | | 	pub struct U256(6);
34 | | }
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_offset_with_cast
   = note: this warning originates in the macro `$crate::uint_overflowing_binop` which comes from the expansion of the macro `construct_uint` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: `pallet-zk-snarks` (lib) generated 10 warnings (5 duplicates)
warning: variables can be used directly in the `format!` string
  --> node/src/chain_spec.rs:19:30
   |
19 | 	TPublic::Pair::from_string(&format!("//{}", seed), None)
   |                             	^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
   = note: `#[warn(clippy::uninlined_format_args)]` on by default
help: change this to
   |
19 - 	TPublic::Pair::from_string(&format!("//{}", seed), None)
19 + 	TPublic::Pair::from_string(&format!("//{seed}"), None)
   |

warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              	^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                          	^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
   = note: `#[warn(clippy::redundant_clone)]` on by default

warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:41:6
   |
41 |   ) -> Result<
   |  ______^
42 | | 	sc_service::PartialComponents<
43 | |     	FullClient,
44 | |     	FullBackend,
...  |
59 | | 	ServiceError,
60 | | > {
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
   = note: `#[warn(clippy::type_complexity)]` on by default

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> node/src/service.rs:149:26
	|
149 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
	|                      	^^^^^^^ help: change this to: `&str`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg
	= note: `#[warn(clippy::ptr_arg)]` on by default

warning: variables can be used directly in the `format!` string
   --> node/src/service.rs:173:36
	|
173 |               	return Err(ServiceError::Other(format!(
	|  ________________________________________________^
174 | |                 	"Error hooking up remote keystore for {}: {}",
175 | |                 	url, e
176 | |             	))),
	| |_________________^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

warning: `node-template` (lib) generated 5 warnings (run `cargo clippy --fix --lib -p node-template` to apply 3 suggestions)
warning: useless conversion to the same type: `u128`
   --> node/src/benchmarking.rs:105:12
	|
105 |             	value: self.value.into(),
	|                    	^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion
	= note: `#[warn(clippy::useless_conversion)]` on by default

warning: redundant clone
   --> node/src/benchmarking.rs:164:7
	|
164 |     	call.clone(),
	|         	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:164:3
	|
164 |     	call.clone(),
	|     	^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
	= note: `#[warn(clippy::redundant_clone)]` on by default

warning: redundant clone
   --> node/src/benchmarking.rs:166:40
	|
166 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:166:31
	|
166 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                 	^^^^^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:167:8
	|
167 |     	extra.clone(),
	|          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
	|
167 |     	extra.clone(),
	|     	^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: variables can be used directly in the `format!` string
   --> node/src/benchmarking.rs:181:16
	|
181 |     	.map_err(|e| format!("creating inherent data: {:?}", e))?;
	|                  	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
	|
181 -     	.map_err(|e| format!("creating inherent data: {:?}", e))?;
181 +     	.map_err(|e| format!("creating inherent data: {e:?}"))?;
	|

warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              	^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                          	^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `node-template` (bin "node-template") generated 10 warnings (4 duplicates) (run `cargo clippy --fix --bin "node-template"` to apply 6 suggestions)
	Finished dev [unoptimized + debuginfo] target(s) in 0.48s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
```
