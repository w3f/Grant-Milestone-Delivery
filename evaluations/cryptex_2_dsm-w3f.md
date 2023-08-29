# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[ ] </li></ul>| https://github.com/ideal-lab5/substrate/blob/etf/LICENSE-GPL3 | GPLv3 | 
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| https://ideal-lab5.github.io | Not fully evaluated yet.|
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| https://docs.google.com/document/d/1wyWSHl-MJtiaFzuZqsPTAq0ABRCw9RlxIjt5m6pEOUY/edit?usp=sharing  | Not fully evaluated yet. |
| **0d.** | Docker | <ul><li>[ ] </li></ul>| https://hub.docker.com/repository/docker/ideallabs/etf/general | Not fully evaluated yet. |
| **0e.** | Article | <ul><li>[ ] </li></ul>| https://ideallabs.substack.com/p/e1d2e89b-ec19-477d-8781-7401fc3efbbe | unpublished, pending milestone 2 acceptance. |
| 1. | Light Client | <ul><li>[ ] </li></ul>| [smoldot fork](https://github.com/ideal-lab5/smoldot/tree/etf), [substrate-connect fork](https://github.com/ideal-lab5/substrate-connect/tree/etf) | Not fully evaluated yet. |
| 2 | User Interface: setup | <ul><li>[ ] </li></ul>| [the UI](https://github.com/ideal-lab5/etf.js/tree/main/examples) | Not fully evaluated yet. |
| 3. | SDK: Slot Scheduling | <ul><li>[ ] </li></ul>| [implementation](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L42), [tests](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.test.spec.ts#L6) | Not fully evaluated yet. |
| 4. | SDK: Encryption | <ul><li>[ ] </li></ul>| [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L138) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L72) | Not fully evaluated yet. |
| 5. | SDK: Decryption | <ul><li>[ ] </li></ul>| [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L160) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L116) | Not fully evaluated yet. |

## Evaluation V1

### Docker

Is the docker only for the substrate part? Docker is working.

### Substrate

I tried to build and test the substrate. The build worked fine. But for the test, I received these errors.

<details>

```
error[E0063]: missing fields `initial_ibe_commitment` and `initial_ibe_pp` in initializer of `pallet::GenesisConfig`
  --> bin/node-template/pallets/etf/src/mock.rs:70:10
   |
70 |         &pallet_etf::GenesisConfig {
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^ missing `initial_ibe_commitment` and `initial_ibe_pp`

error[E0599]: no method named `len` found for tuple `(std::vec::Vec<u8>, std::vec::Vec<u8>, std::vec::Vec<u8>)` in the current scope
  --> bin/node-template/pallets/etf/src/tests.rs:17:28
   |
17 |         assert!(ibe_params.len() == 48);
   |                            ^^^ method not found in `(Vec<u8>, Vec<u8>, Vec<u8>)`

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:37:4
    |
37  |               Etf::update_ibe_params(
    |  _____________^^^^^^^^^^^^^^^^^^^^^^-
38  | |                 RuntimeOrigin::root(),
39  | |                 h_bytes,
40  | |             )
    | |_____________- two arguments of type `std::vec::Vec<u8>` and `std::vec::Vec<u8>` are missing
    |
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
    |
103 |         pub fn update_ibe_params(
    |                ^^^^^^^^^^^^^^^^^
104 |             origin: OriginFor<T>,
    |             --------------------
105 |             g: Vec<u8>,
    |             ----------
106 |             ibe_pp_bytes: Vec<u8>,
    |             ---------------------
107 |             ibe_commitment_bytes: Vec<u8>,
    |             -----------------------------
help: provide the arguments
    |
37  |             Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* std::vec::Vec<u8> */, /* std::vec::Vec<u8> */)
    |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:60:4
    |
60  |               Etf::update_ibe_params(
    |  _____________^^^^^^^^^^^^^^^^^^^^^^-
61  | |                 RuntimeOrigin::root(),
62  | |                 h_bytes,
63  | |             ),
    | |_____________- two arguments of type `std::vec::Vec<u8>` and `std::vec::Vec<u8>` are missing
    |
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
    |
103 |         pub fn update_ibe_params(
    |                ^^^^^^^^^^^^^^^^^
104 |             origin: OriginFor<T>,
    |             --------------------
105 |             g: Vec<u8>,
    |             ----------
106 |             ibe_pp_bytes: Vec<u8>,
    |             ---------------------
107 |             ibe_commitment_bytes: Vec<u8>,
    |             -----------------------------
help: provide the arguments
    |
60  |             Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* std::vec::Vec<u8> */, /* std::vec::Vec<u8> */),
    |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some errors have detailed explanations: E0061, E0063, E0599.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib test) due to 4 previous errors
warning: build failed, waiting for other jobs to finish...
```

</details>

I tried to build and test the benchmark, but I received these errors

Build

<details>

```
error[E0061]: this function takes 3 arguments but 1 argument was supplied
   --> bin/node-template/pallets/etf/src/benchmarking.rs:10:1
	|
10  | #[benchmarks]
	| ^^^^^^^^^^^^^ two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
	= note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
help: provide the arguments
	|
10  | #[benchmarks](bytes.clone(), /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|          	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

error[E0308]: mismatched types
  --> bin/node-template/pallets/etf/src/benchmarking.rs:19:3
   |
19 |     	assert_eq!(IBEParams::<T>::get(), bytes);
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |     	|
   |     	expected `(Vec<u8>, Vec<u8>, Vec<u8>)`, found `Vec<u8>`
   |     	expected because this is `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
   |
   = note: expected tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
         	found struct `frame_benchmarking::Vec<u8>`
   = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)

Some errors have detailed explanations: E0061, E0308.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib) due to 3 previous errors
warning: build failed, waiting for other jobs to finish...
	Building [=======================> ] 965/989: wasm-opt-sys(build), librocksdb-sys(build), sc-network	
```

</details>

Test

<details>

```
user@localhost:~/Documents/cryptex/substrate/bin/node-template/node/src$  cargo test --package pallet-etf --features runtime-benchmarks
warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:300:60
	|
300 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed
	= note: `#[warn(noop_method_call)]` on by default

warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:317:60
	|
317 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed

warning: `frame-support` (lib) generated 2 warnings (run `cargo fix --lib -p frame-support` to apply 2 suggestions)
   Compiling pallet-etf v4.0.0-dev (/home/user/Documents/cryptex/substrate/bin/node-template/pallets/etf)
error[E0061]: this function takes 3 arguments but 1 argument was supplied
   --> bin/node-template/pallets/etf/src/benchmarking.rs:10:1
	|
10  | #[benchmarks]
	| ^^^^^^^^^^^^^ two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
	= note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
help: provide the arguments
	|
10  | #[benchmarks](bytes.clone(), /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|          	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

error[E0308]: mismatched types
  --> bin/node-template/pallets/etf/src/benchmarking.rs:19:37
   |
19 |     	assert_eq!(IBEParams::<T>::get(), bytes);
   |                                       	^^^^^ expected `(Vec<u8>, Vec<u8>, Vec<u8>)`, found `Vec<u8>`
   |
   = note: expected tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
         	found struct `frame_benchmarking::Vec<u8>`

Some errors have detailed explanations: E0061, E0308.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib) due to 4 previous errors
warning: build failed, waiting for other jobs to finish...
error[E0063]: missing fields `initial_ibe_commitment` and `initial_ibe_pp` in initializer of `pallet::GenesisConfig`
  --> bin/node-template/pallets/etf/src/mock.rs:70:10
   |
70 |     	&pallet_etf::GenesisConfig {
   |      	^^^^^^^^^^^^^^^^^^^^^^^^^ missing `initial_ibe_commitment` and `initial_ibe_pp`

error[E0599]: no method named `len` found for tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)` in the current scope
  --> bin/node-template/pallets/etf/src/tests.rs:17:28
   |
17 |     	assert!(ibe_params.len() == 48);
   |                        	^^^ method not found in `(Vec<u8>, Vec<u8>, Vec<u8>)`

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:37:4
	|
37  |           	Etf::update_ibe_params(
	|  _____________^^^^^^^^^^^^^^^^^^^^^^-
38  | |             	RuntimeOrigin::root(),
39  | |             	h_bytes,
40  | |         	)
	| |_____________- two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
	|         	--------------------
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
help: provide the arguments
	|
37  |         	Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|                               	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:60:4
	|
60  |           	Etf::update_ibe_params(
	|  _____________^^^^^^^^^^^^^^^^^^^^^^-
61  | |             	RuntimeOrigin::root(),
62  | |             	h_bytes,
63  | |         	),
	| |_____________- two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
	|         	--------------------
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
help: provide the arguments
	|
60  |         	Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */),
	|                               	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some errors have detailed explanations: E0061, E0063, E0308, E0599.
error: could not compile `pallet-etf` (lib test) due to 8 previous errors
```

</details>

### ETF-SDK

I `ran cargo tarpaulin` returning a good coverage.

<details>

```
Aug 29 10:45:43.544  INFO cargo_tarpaulin::process_handling::linux: Launching test
Aug 29 10:45:43.558  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/cryptex/etf-sdk/target/debug/deps/etf_sdk-d93db5e7e5c957ae

running 3 tests
test api::tests::api_decryption_works ... ok
test api::tests::api_encryption_works ... ok
test api::tests::default_api_can_verify ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

Aug 29 10:45:44.102  INFO cargo_tarpaulin::process_handling::linux: Launching test
Aug 29 10:45:44.102  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/cryptex/etf-sdk/target/debug/deps/crypto-f8abd65c22d96197

running 20 tests
test client::client::test::client_decrypt_fails_with_bad_encoding_p ... ok
test client::client::test::client_encrypt_fails_with_bad_encoding ... ok
test encryption::encryption::test::aes_encrypt_decrypt_fails_with_bad_key ... ok
test encryption::encryption::test::aes_encrypt_decrypt_works ... ok
test encryption::encryption::test::aes_encrypt_decrypt_fails_with_bad_nonce ... ok
test client::client::test::client_decrypt_fails_with_bad_encoded_capsule_ct ... ok
test encryption::encryption::test::secrets_interpolation ... ok
test proofs::dleq::tests::dleq_fails_with_wrong_extras ... ok
test proofs::dleq::tests::dleq_prepare_and_verify_works ... ok
test proofs::dleq::tests::dleq_prepare_and_verify_fails_with_wrong_generator_point ... ok
test proofs::dleq::tests::dleq_proof_is_serializable ... ok
test utils::test::utils_can_calc_sha256 ... ok
test proofs::verifier::test::can_verify_proof_is_valid ... ok
test proofs::verifier::test::can_verify_proof_is_not_valid ... ok
test ibe::fullident::test::can_encrypt_and_decrypt ... ok
test client::client::test::client_can_encrypt_decrypt_with_single_key ... ok
test client::client::test::client_decrypt_fails_with_bad_nonce ... ok
test client::client::test::client_decrypt_fails_with_bad_slot_secrets ... ok
test client::client::test::client_decrypt_fails_with_bad_ciphertext ... ok
test client::client::test::client_can_encrypt_decrypt_with_many_keys ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.30s

Aug 29 10:45:44.867  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| api/src/api.rs: 2/10
|| api/src/lib.rs: 0/14
|| crypto/src/client/client.rs: 27/35
|| crypto/src/encryption/encryption.rs: 30/37
|| crypto/src/ibe/fullident.rs: 25/26
|| crypto/src/proofs/dleq.rs: 27/31
|| crypto/src/proofs/verifier.rs: 3/3
|| crypto/src/utils.rs: 19/24
||
73.89% coverage, 133/180 lines covered
```

</details>

I ran `wasm-pack test --node`, and the tests passed, but I received some warnings, for example:

<details>

```
warning: unused variable: `ciphertext`
   --> api/src/api.rs:169:42
	|
169 |     	fn decrypt(ibe_pp: G2Projective, ciphertext: IbeCiphertext, sk: G1Projective) -> Vec<u8> {
	|                                      	^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_ciphertext`

warning: unused variable: `sk`
   --> api/src/api.rs:169:69
	|
169 |     	fn decrypt(ibe_pp: G2Projective, ciphertext: IbeCiphertext, sk: G1Projective) -> Vec<u8> {
	|                                                                 	^^ help: if this is intentional, prefix it with an underscore: `_sk`

warning: `etf-sdk` (lib test) generated 8 warnings (run `cargo fix --lib -p etf-sdk --tests` to apply 8 suggestions)
	Finished test [optimized + debuginfo] target(s) in 0.04s
 	Running unittests src/lib.rs (/home/user/Documents/cryptex/etf-sdk/target/wasm32-unknown-unknown/debug/deps/etf_sdk-4bbaeadd397b62f9.wasm)
Set timeout to 20 seconds...
running 2 tests                              	 

test etf_sdk::test::wrapper_can_encrypt ... ok
test etf_sdk::test::wrapper_setup_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored

```

</details>

I could deploy this part but I couldn't figure out how to run it. Could you explain how to run it?

### ETF.JS

I ran `npm run test`, and sometimes this test fails, and sometimes the test passes.

<details>

```
user@localhost:~/Documents/cryptex/etf.js$ npm run test

> @ideallabs/etf.js@0.0.6-dev test
> jest

 PASS  examples/src/App.test.js
 FAIL  src/etf.test.spec.ts
  ● Console

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

  ● DistanceBasedSlotScheduler › should generate a valid schedule

	expect(received).toBeGreaterThanOrEqual(expected)

	Expected: >= 11
	Received:	10

  	20 | 	// Check if the generated slots are within the expected range
  	21 | 	schedule.slotIds.forEach(slot => {
	> 22 |   	expect(slot).toBeGreaterThanOrEqual(currentSlot + 1);
     	|                	^
  	23 |   	expect(slot).toBeLessThanOrEqual(currentSlot + 1 + distance * 2);
  	24 |   	expect(slot % 2).toBe(0); // Ensure the slot is even
  	25 | 	});

  	at src/etf.test.spec.ts:22:20
      	at Array.forEach (<anonymous>)
  	at Object.<anonymous> (src/etf.test.spec.ts:21:22)

Test Suites: 1 failed, 1 passed, 2 total
Tests:   	1 failed, 6 passed, 7 total
Snapshots:   0 total
Time:    	2.613 s, estimated 3 s
Ran all test suites.
```

</details>

I could compile with some warnings. But I couldn't use it because I didn't run the SDK.

<details>

```
LOG from webpack.FileSystemInfo
<w> Managed item /home/user/Documents/cryptex/etf.js/examples/node_modules/@ideallabs/etf.js isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 14 hidden lines

WARNING in ./node_modules/@chainsafe/is-ip/lib/is-ip.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/is-ip.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/is-ip.ts'

WARNING in ./node_modules/@chainsafe/is-ip/lib/parse.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parse.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parse.ts'

WARNING in ./node_modules/@chainsafe/is-ip/lib/parser.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parser.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parser.ts'

WARNING in ./node_modules/dag-jose/lib/encryption.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/encryption.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/encryption.ts'

WARNING in ./node_modules/dag-jose/lib/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/index.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/index.ts'

WARNING in ./node_modules/dag-jose/lib/signing.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/signing.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/signing.ts'

WARNING in ./node_modules/dag-jose/lib/utils.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/utils.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/utils.ts'

WARNING in ../node_modules/@substrate/connect-extension-protocol/dist/mjs/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/node_modules/@substrate/connect-extension-protocol/src/index.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/node_modules/@substrate/connect-extension-protocol/src/index.ts'

webpack compiled with 8 warnings
```

</details>

### 
