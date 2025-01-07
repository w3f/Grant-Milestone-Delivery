# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** takahser

| Number | Deliverable | Accepted | Specification | Notes
| --- | --- | --- | --- | --- |
| 0a. | License | <ul><li>[x] </li></ul> | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline documentation. [Amendment to the original guide](https://github.com/rhysbalevicius/infimum/tree/main?tab=readme-ov-file#interacting-with-the-pallet) explaining the requirements for satisfying the verification logic. |
| 0c. | Testing | <ul><li>[x] </li></ul> | [Unit tests](https://github.com/rhysbalevicius/infimum/tree/main/pallet/src/tests) for methods added. Updated unit tests for amended methods. | Testing guide works
| 1a. | Pallet: verification methods | <ul><li>[x] </li></ul> | Private methods for [verifying proofs](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L784-L827) which have been generated off-chain by the CLI delivered in Milestone 3. Relies on the verification logic provided by [arkworks](https://github.com/arkworks-rs/groth16). | Works as expected
| 1b. | Pallet: method modifications | <ul><li>[x] </li></ul> | Modifications to methods [1.ii.f](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L470-L552) and [1.ii.g](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L554-L634) (listed under deliverables in the project overview) to call the private verification methods defined in Milestone 2.1.a — these modifications will guard against storage updates in the case that verification fails, and publish the final poll outcome in the case of success. | Works as expected
| 2. | Circom circuits  | <ul><li>[x] </li></ul> | [Fork of MACI circuits](), amended as necessary for consumption within our off-chain proof generation pipeline. | Works as expected


# General Notes

Really nice work, was able to manually test the pallets. Node runs successfully and npm tests pass.

Ports open as expected:

![ports](https://github.com/user-attachments/assets/49cc18d4-c1e6-4be7-832b-a2ab8b5cea95)

## Testing

npm test passes:

```ts
 PASS  __tests__/e2e.test.ts (146.669 s)
  End to end tests
    Only user 1 votes
      ✓ Should produce the correct outcome index (132083 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        146.734 s
Ran all test suites.
```

All unit tests passing:

```rust
running 42 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::extrinsics::commit_outcome_invalid_proof ... ok
test tests::extrinsics::commit_outcome_invalid_commitment ... ok
test tests::extrinsics::commit_outcome_full_batch ... ok
test tests::extrinsics::commit_outcome_mismatched_state ... ok
test tests::extrinsics::commit_outcome_permuted ... ok
test tests::extrinsics::commit_outcome_full_round ... ok
test tests::extrinsics::commit_outcome_partial_success ... ok
test tests::extrinsics::commit_outcome_single_batch ... ok
test tests::extrinsics::coordinator_key_rotation_malformed ... ok
test tests::extrinsics::coordinator_key_rotation_during_poll ... ok
test tests::extrinsics::coordinator_key_rotation_after_poll ... ok
test tests::extrinsics::coordinator_registration_malformed ... ok
test tests::extrinsics::coordinator_registration_successful ... ok
test tests::extrinsics::coordinator_registration_unsigned ... ok
test tests::extrinsics::coordinator_registration_duplicated ... ok
test tests::extrinsics::merge_interaction_state_success ... ok
test tests::extrinsics::coordinator_key_rotation_successful ... ok
test tests::extrinsics::merge_interaction_voting_period ... ok
test tests::extrinsics::merge_registration_signup_period ... ok
test tests::extrinsics::merge_registration_state_success ... ok
test tests::extrinsics::participant_interaction ... ok
test tests::extrinsics::participant_interaction_outside_period ... ok
test tests::extrinsics::participant_registration_no_poll ... ok
test tests::extrinsics::participant_interaction_limit ... ok
test tests::extrinsics::commit_outcome_success ... ok
test tests::extrinsics::poll_creation_by_non_coordinator ... ok
test tests::extrinsics::participant_limit_reached ... ok
test tests::extrinsics::poll_creation_beyond_limit ... ok
test tests::extrinsics::poll_creation_during_extant ... ok
test tests::extrinsics::poll_creation_successful ... ok
test tests::extrinsics::poll_nullify_error ... ok
test tests::poseidon::bytes_ones_twos ... ok
test tests::extrinsics::register_as_participant_outside_period ... ok
test tests::poseidon::circomlibjs_compat_1_to_12_inputs ... ok
test tests::extrinsics::register_as_participant ... ok
test tests::poseidon::fr_one_two ... ok
test tests::poseidon::fr_one ... ok
test tests::extrinsics::process_messages_public_signals ... ok
test tests::poseidon::random_input ... ok
test tests::poseidon::empty_input ... ok
test tests::poseidon::with_domain_tag ... ok

test result: ok. 42 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.27s

   Doc-tests pallet_infimum

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
Docker tests also work:

```rust
[+] Running 3/3
 ✔ Network infimum_default          Created                                                                                                              0.1s 
 ✔ Container infimum-pallet-base-1  Created                                                                                                              0.1s 
 ✔ Container infimum-test-1         Created                                                                                                              0.1s 
Attaching to pallet-base-1, test-1
pallet-base-1 exited with code 0
test-1         | info: syncing channel updates for 'nightly-x86_64-unknown-linux-gnu'
test-1         | info: latest update on 2024-12-17, rust version 1.85.0-nightly (6d9f6ae36 2024-12-16)
test-1         | info: downloading component 'cargo'
test-1         | info: downloading component 'clippy'
test-1         | info: downloading component 'rust-analyzer'
test-1         | info: downloading component 'rust-src'
test-1         | info: downloading component 'rust-std' for 'wasm32-unknown-unknown'
test-1         | info: downloading component 'rust-std'
test-1         | info: downloading component 'rustc'
test-1         | info: downloading component 'rustc-dev'
test-1         | info: downloading component 'rustfmt'
test-1         | info: installing component 'cargo'
test-1         | info: installing component 'clippy'
test-1         | info: installing component 'rust-analyzer'
test-1         | info: installing component 'rust-src'
test-1         | info: installing component 'rust-std' for 'wasm32-unknown-unknown'
test-1         | info: installing component 'rust-std'
test-1         | info: installing component 'rustc'
test-1         | info: installing component 'rustc-dev'
test-1         | info: installing component 'rustfmt'
test-1         | warning: virtual workspace defaulting to `resolver = "1"` despite one or more workspace members being on edition 2021 which implies `resolver = "2"`
test-1         | note: to keep the current resolver, specify `workspace.resolver = "1"` in the workspace root's manifest
test-1         | note: to use the edition 2021 resolver, specify `workspace.resolver = "2"` in the workspace root's manifest
test-1         | note: for more details see https://doc.rust-lang.org/cargo/reference/resolver.html#resolver-versions
test-1         |     Updating crates.io index
test-1         |     Updating git repository `https://github.com/paritytech/substrate.git`
test-1         |     Updating git repository `https://github.com/paritytech/polkadot-sdk.git`
test-1         |  Downloading crates ...
test-1         |   Downloaded ahash v0.7.8
test-1         |   Downloaded futures-sink v0.3.28
test-1         |   Downloaded sha2 v0.8.2
test-1         |   Downloaded wyz v0.5.1
test-1         |   Downloaded hmac v0.11.0
test-1         |   Downloaded getrandom v0.2.10
test-1         |   Downloaded macro_magic_core_macros v0.4.2
test-1         |   Downloaded impl-trait-for-tuples v0.2.2
test-1         |   Downloaded matchers v0.0.1
test-1         |   Downloaded hmac v0.12.1
test-1         |   Downloaded libsecp256k1-gen-genmult v0.3.0
test-1         |   Downloaded getrandom v0.1.16
test-1         |   Downloaded linregress v0.5.2
test-1         |   Downloaded num-rational v0.4.1
test-1         |   Downloaded nohash-hasher v0.2.0
test-1         |   Downloaded proc-macro-warning v0.4.1
test-1         |   Downloaded memfd v0.6.3
test-1         |   Downloaded impl-codec v0.6.0
test-1         |   Downloaded num-format v0.4.4
test-1         |   Downloaded iana-time-zone v0.1.57
test-1         |   Downloaded itoa v1.0.9
test-1         |   Downloaded psm v0.1.21
test-1         |   Downloaded rand_core v0.5.1
test-1         |   Downloaded quote v1.0.32
test-1         |   Downloaded wasmtime-runtime v8.0.1
test-1         |   Downloaded macro_magic_macros v0.4.2
test-1         |   Downloaded rand v0.8.5
test-1         |   Downloaded num-bigint v0.4.3
test-1         |   Downloaded rand v0.7.3
test-1         |   Downloaded itertools v0.10.5
test-1         |   Downloaded gimli v0.27.3
test-1         |   Downloaded regex-automata v0.1.10
test-1         |   Downloaded object v0.31.1
test-1         |   Downloaded tracing-subscriber v0.2.25
test-1         |   Downloaded curve25519-dalek v2.1.3
test-1         |   Downloaded rawpointer v0.2.1
test-1         |   Downloaded regex v1.9.1
test-1         |   Downloaded base16ct v0.2.0
test-1         |   Downloaded rustix v0.37.23
test-1         |   Downloaded idna v0.4.0
test-1         |   Downloaded regex-syntax v0.6.29
test-1         |   Downloaded nalgebra v0.32.3
test-1         |   Downloaded opaque-debug v0.2.3
test-1         |   Downloaded regex-syntax v0.7.4
test-1         |   Downloaded serde_derive v1.0.176
test-1         |   Downloaded pin-project-lite v0.2.10
test-1         |   Downloaded schnorrkel v0.9.1
test-1         |   Downloaded curve25519-dalek v3.2.0
test-1         |   Downloaded rand_chacha v0.3.1
test-1         |   Downloaded object v0.30.4
test-1         |   Downloaded num-traits v0.2.16
test-1         |   Downloaded syn v1.0.109
test-1         |   Downloaded syn v2.0.32
test-1         |   Downloaded regex-automata v0.3.3
test-1         |   Downloaded zerocopy v0.7.32
test-1         |   Downloaded rustix v0.36.15
test-1         |   Downloaded const-oid v0.9.4
test-1         |   Downloaded indexmap v1.9.3
test-1         |   Downloaded wasmtime v8.0.1
test-1         |   Downloaded wasmtime-environ v8.0.1
test-1         |   Downloaded macro_magic_core v0.4.2
test-1         |   Downloaded futures-util v0.3.28
test-1         |   Downloaded unicode-normalization v0.1.22
test-1         |   Downloaded libc v0.2.147
test-1         |   Downloaded linux-raw-sys v0.1.4
test-1         |   Downloaded sha3 v0.10.8
test-1         |   Downloaded linux-raw-sys v0.3.8
test-1         |   Downloaded frame-metadata v16.0.0
test-1         |   Downloaded rand_chacha v0.2.2
test-1         |   Downloaded num-complex v0.4.3
test-1         |   Downloaded crypto-common v0.1.6
test-1         |   Downloaded bytes v1.4.0
test-1         |   Downloaded proc-macro2 v1.0.66
test-1         |   Downloaded proc-macro-hack v0.5.20+deprecated
test-1         |   Downloaded ref-cast-impl v1.0.19
test-1         |   Downloaded ref-cast v1.0.19
test-1         |   Downloaded rand_core v0.6.4
test-1         |   Downloaded radium v0.7.0
test-1         |   Downloaded pkcs8 v0.10.2
test-1         |   Downloaded once_cell v1.18.0
test-1         |   Downloaded macro_magic v0.4.2
test-1         |   Downloaded wasmparser v0.102.0
test-1         |   Downloaded crunchy v0.2.2
test-1         |   Downloaded proc-macro-crate v1.1.3
test-1         |   Downloaded miniz_oxide v0.7.1
test-1         |   Downloaded memoffset v0.8.0
test-1         |   Downloaded lock_api v0.4.10
test-1         |   Downloaded libsecp256k1-gen-ecmult v0.3.0
test-1         |   Downloaded zeroize v1.6.0
test-1         |   Downloaded wasmtime-jit v8.0.1
test-1         |   Downloaded target-lexicon v0.12.10
test-1         |   Downloaded nalgebra-macros v0.2.1
test-1         |   Downloaded parking_lot v0.12.1
test-1         |   Downloaded parity-scale-codec v3.6.4
test-1         |   Downloaded serde_json v1.0.104
test-1         |   Downloaded secp256k1 v0.24.3
test-1         |   Downloaded ppv-lite86 v0.2.17
test-1         |   Downloaded log v0.4.19
test-1         |   Downloaded keccak v0.1.4
test-1         |   Downloaded pbkdf2 v0.11.0
test-1         |   Downloaded parking_lot_core v0.9.8
test-1         |   Downloaded hashbrown v0.13.2
test-1         |   Downloaded hashbrown v0.12.3
test-1         |   Downloaded wide v0.7.11
test-1         |   Downloaded tracing v0.1.37
test-1         |   Downloaded futures v0.3.28
test-1         |   Downloaded digest v0.8.1
test-1         |   Downloaded primitive-types v0.12.1
test-1         |   Downloaded pin-utils v0.1.0
test-1         |   Downloaded num_cpus v1.16.0
test-1         |   Downloaded num-integer v0.1.45
test-1         |   Downloaded pbkdf2 v0.8.0
test-1         |   Downloaded parity-wasm v0.45.0
test-1         |   Downloaded memchr v2.5.0
test-1         |   Downloaded integer-sqrt v0.1.5
test-1         |   Downloaded trie-db v0.27.1
test-1         |   Downloaded simba v0.8.1
test-1         |   Downloaded cranelift-entity v0.95.1
test-1         |   Downloaded async-trait v0.1.72
test-1         |   Downloaded merlin v2.0.1
test-1         |   Downloaded memory-db v0.32.0
test-1         |   Downloaded lazy_static v1.4.0
test-1         |   Downloaded k256 v0.13.1
test-1         |   Downloaded opaque-debug v0.3.0
test-1         |   Downloaded matrixmultiply v0.3.7
test-1         |   Downloaded io-lifetimes v1.0.11
test-1         |   Downloaded impl-serde v0.4.0
test-1         |   Downloaded wasmtime-asm-macros v8.0.1
test-1         |   Downloaded url v2.4.0
test-1         |   Downloaded tracing-core v0.1.31
test-1         |   Downloaded tiny-bip39 v1.0.0
test-1         |   Downloaded ryu v1.0.15
test-1         |   Downloaded cc v1.0.79
test-1         |   Downloaded libsecp256k1 v0.7.1
test-1         |   Downloaded typenum v1.16.0
test-1         |   Downloaded tinyvec v1.6.0
test-1         |   Downloaded bitvec v1.0.1
test-1         |   Downloaded wasmtime-types v8.0.1
test-1         |   Downloaded toml v0.5.11
test-1         |   Downloaded slab v0.4.8
test-1         |   Downloaded chrono v0.4.26
test-1         |   Downloaded aho-corasick v1.0.2
test-1         |   Downloaded libsecp256k1-core v0.3.0
test-1         |   Downloaded percent-encoding v2.3.0
test-1         |   Downloaded paste v1.0.14
test-1         |   Downloaded parity-scale-codec-derive v3.6.4
test-1         |   Downloaded uint v0.9.5
test-1         |   Downloaded tracing-log v0.1.3
test-1         |   Downloaded substrate-bip39 v0.4.4
test-1         |   Downloaded smallvec v1.11.0
test-1         |   Downloaded secp256k1-sys v0.6.1
test-1         |   Downloaded signature v1.6.4
test-1         |   Downloaded tracing-attributes v0.1.26
test-1         |   Downloaded tiny-keccak v2.0.2
test-1         |   Downloaded rfc6979 v0.4.0
test-1         |   Downloaded derive-syn-parse v0.1.5
test-1         |   Downloaded der v0.7.7
test-1         |   Downloaded crypto-bigint v0.5.2
test-1         |   Downloaded backtrace v0.3.68
test-1         |   Downloaded ark-ff v0.4.2
test-1         |   Downloaded ark-ec v0.4.2
test-1         |   Downloaded ark-crypto-primitives v0.4.0
test-1         |   Downloaded anyhow v1.0.72
test-1         |   Downloaded addr2line v0.19.0
test-1         |   Downloaded hmac-drbg v0.3.0
test-1         |   Downloaded generic-array v0.14.7
test-1         |   Downloaded wasmtime-jit-debug v8.0.1
test-1         |   Downloaded thiserror-impl v1.0.44
test-1         |   Downloaded thiserror v1.0.44
test-1         |   Downloaded schnellru v0.2.1
test-1         |   Downloaded elliptic-curve v0.13.5
test-1         |   Downloaded ecdsa v0.16.8
test-1         |   Downloaded cpp_demangle v0.3.5
test-1         |   Downloaded bs58 v0.4.0
test-1         |   Downloaded tinyvec_macros v0.1.1
test-1         |   Downloaded futures-macro v0.3.28
test-1         |   Downloaded futures-core v0.3.28
test-1         |   Downloaded futures-channel v0.3.28
test-1         |   Downloaded funty v2.0.0
test-1         |   Downloaded fs-err v2.9.0
test-1         |   Downloaded fallible-iterator v0.2.0
test-1         |   Downloaded environmental v1.1.4
test-1         |   Downloaded ed25519-zebra v3.1.0
test-1         |   Downloaded ed25519-dalek v1.0.1
test-1         |   Downloaded ed25519 v1.5.3
test-1         |   Downloaded dyn-clone v1.0.12
test-1         |   Downloaded derive_more v0.99.17
test-1         |   Downloaded derivative v2.2.0
test-1         |   Downloaded arrayvec v0.7.4
test-1         |   Downloaded ark-poly v0.4.2
test-1         |   Downloaded ark-bn254 v0.4.0
test-1         |   Downloaded adler v1.0.2
test-1         |   Downloaded hex v0.4.3
test-1         |   Downloaded hash256-std-hasher v0.15.2
test-1         |   Downloaded group v0.13.0
test-1         |   Downloaded generic-array v0.12.4
test-1         |   Downloaded futures-task v0.3.28
test-1         |   Downloaded wasmtime-jit-icache-coherence v8.0.1
test-1         |   Downloaded unicode-xid v0.2.4
test-1         |   Downloaded trie-root v0.18.0
test-1         |   Downloaded tap v1.0.1
test-1         |   Downloaded signature v2.1.0
test-1         |   Downloaded sha2 v0.10.7
test-1         |   Downloaded sha2 v0.9.9
test-1         |   Downloaded semver v1.0.18
test-1         |   Downloaded scale-info v2.9.0
test-1         |   Downloaded futures-executor v0.3.28
test-1         |   Downloaded fixed-hash v0.8.0
test-1         |   Downloaded ff v0.13.0
test-1         |   Downloaded fake-simd v0.1.2
test-1         |   Downloaded expander v2.0.0
test-1         |   Downloaded either v1.9.0
test-1         |   Downloaded dyn-clonable-impl v0.9.0
test-1         |   Downloaded digest v0.10.7
test-1         |   Downloaded digest v0.9.0
test-1         |   Downloaded crypto-mac v0.11.1
test-1         |   Downloaded crypto-mac v0.8.0
test-1         |   Downloaded crc32fast v1.3.2
test-1         |   Downloaded const-random v0.1.15
test-1         |   Downloaded cfg-expr v0.15.3
test-1         |   Downloaded byteorder v1.4.3
test-1         |   Downloaded bytemuck v1.13.1
test-1         |   Downloaded bounded-collections v0.1.8
test-1         |   Downloaded block-buffer v0.10.4
test-1         |   Downloaded blake2 v0.10.6
test-1         |   Downloaded bitflags v1.3.2
test-1         |   Downloaded base64 v0.13.1
test-1         |   Downloaded arrayref v0.3.7
test-1         |   Downloaded array-bytes v6.1.0
test-1         |   Downloaded ark-groth16 v0.4.0
test-1         |   Downloaded ahash v0.8.8
test-1         |   Downloaded zeroize_derive v1.4.2
test-1         |   Downloaded unicode-ident v1.0.11
test-1         |   Downloaded tt-call v1.0.9
test-1         |   Downloaded thread_local v1.1.7
test-1         |   Downloaded subtle v2.4.1
test-1         |   Downloaded scale-info-derive v2.9.0
test-1         |   Downloaded rustversion v1.0.14
test-1         |   Downloaded rustc-demangle v0.1.23
test-1         |   Downloaded futures-io v0.3.28
test-1         |   Downloaded form_urlencoded v1.2.0
test-1         |   Downloaded constant_time_eq v0.2.6
test-1         |   Downloaded bincode v1.3.3
test-1         |   Downloaded base64ct v1.6.0
test-1         |   Downloaded autocfg v1.1.0
test-1         |   Downloaded ark-std v0.4.0
test-1         |   Downloaded ark-serialize v0.4.2
test-1         |   Downloaded ark-ff-macros v0.4.2
test-1         |   Downloaded ark-ff-asm v0.4.2
test-1         |   Downloaded addr2line v0.20.0
test-1         |   Downloaded hmac v0.8.1
test-1         |   Downloaded hash-db v0.16.0
test-1         |   Downloaded version_check v0.9.4
test-1         |   Downloaded unicode-bidi v0.3.13
test-1         |   Downloaded twox-hash v1.6.3
test-1         |   Downloaded tracing-serde v0.1.3
test-1         |   Downloaded spki v0.7.2
test-1         |   Downloaded safe_arch v0.7.1
test-1         |   Downloaded dyn-clonable v0.9.0
test-1         |   Downloaded cpufeatures v0.2.9
test-1         |   Downloaded cfg-if v1.0.0
test-1         |   Downloaded byte-slice-cast v1.2.2
test-1         |   Downloaded block-buffer v0.9.0
test-1         |   Downloaded block-buffer v0.7.3
test-1         |   Downloaded ark-serialize-derive v0.4.2
test-1         |   Downloaded ark-relations v0.4.0
test-1         |   Downloaded approx v0.5.1
test-1         |   Downloaded Inflector v0.11.4
test-1         |   Downloaded static_assertions v1.1.0
test-1         |   Downloaded stable_deref_trait v1.2.0
test-1         |   Downloaded ss58-registry v1.41.0
test-1         |   Downloaded sharded-slab v0.1.4
test-1         |   Downloaded serde v1.0.176
test-1         |   Downloaded scopeguard v1.2.0
test-1         |   Downloaded byte-tools v0.3.1
test-1         |   Downloaded ark-snark v0.4.0
test-1         |   Downloaded ansi_term v0.12.1
test-1         |   Downloaded secrecy v0.8.0
test-1         |   Downloaded sec1 v0.7.3
test-1         |   Downloaded rustc_version v0.4.0
test-1         |   Downloaded rustc-hex v2.1.0
test-1         |   Downloaded rustc-hash v1.1.0
test-1         |   Downloaded const-random-macro v0.1.15
test-1         |   Downloaded block-padding v0.1.5
test-1         |   Downloaded blake2b_simd v1.0.1
test-1         |   Downloaded arrayvec v0.5.2
test-1         |    Compiling proc-macro2 v1.0.66
test-1         |    Compiling unicode-ident v1.0.11
test-1         |    Compiling cfg-if v1.0.0
test-1         |    Compiling libc v0.2.147
test-1         |    Compiling version_check v0.9.4
test-1         |    Compiling typenum v1.16.0
test-1         |    Compiling autocfg v1.1.0
test-1         |    Compiling generic-array v0.14.7
test-1         |    Compiling subtle v2.4.1
test-1         |    Compiling quote v1.0.32
test-1         |    Compiling syn v2.0.32
test-1         |    Compiling serde v1.0.176
test-1         |    Compiling serde_derive v1.0.176
test-1         |    Compiling getrandom v0.2.10
test-1         |    Compiling once_cell v1.18.0
test-1         |    Compiling syn v1.0.109
test-1         |    Compiling rand_core v0.6.4
test-1         |    Compiling const-oid v0.9.4
test-1         |    Compiling thiserror v1.0.44
test-1         |    Compiling ppv-lite86 v0.2.17
test-1         |    Compiling memchr v2.5.0
test-1         |    Compiling rand_chacha v0.3.1
test-1         |    Compiling toml v0.5.11
test-1         |    Compiling rand v0.8.5
test-1         |    Compiling num-traits v0.2.16
test-1         |    Compiling ahash v0.7.8
test-1         |    Compiling arrayvec v0.7.4
test-1         |    Compiling crunchy v0.2.2
test-1         |    Compiling cc v1.0.79
test-1         |    Compiling ahash v0.8.8
test-1         |    Compiling hashbrown v0.12.3
test-1         |    Compiling indexmap v1.9.3
test-1         |    Compiling zerocopy v0.7.32
test-1         |    Compiling zeroize_derive v1.4.2
test-1         |    Compiling thiserror-impl v1.0.44
test-1         |    Compiling zeroize v1.6.0
test-1         |    Compiling byteorder v1.4.3
test-1         |    Compiling paste v1.0.14
test-1         |    Compiling hashbrown v0.13.2
test-1         |    Compiling impl-trait-for-tuples v0.2.2
test-1         |    Compiling crypto-common v0.1.6
test-1         |    Compiling block-buffer v0.10.4
test-1         |    Compiling proc-macro-crate v1.1.3
test-1         |    Compiling digest v0.9.0
test-1         |    Compiling digest v0.10.7
test-1         |    Compiling bytes v1.4.0
test-1         |    Compiling parity-scale-codec-derive v3.6.4
test-1         |    Compiling byte-slice-cast v1.2.2
test-1         |    Compiling aho-corasick v1.0.2
test-1         |    Compiling tinyvec_macros v0.1.1
test-1         |    Compiling lazy_static v1.4.0
test-1         |    Compiling regex-syntax v0.7.4
test-1         |    Compiling tinyvec v1.6.0
test-1         |    Compiling parity-scale-codec v3.6.4
test-1         |    Compiling getrandom v0.1.16
test-1         |    Compiling cpufeatures v0.2.9
test-1         |    Compiling unicode-normalization v0.1.22
test-1         |    Compiling pin-project-lite v0.2.10
test-1         |    Compiling regex-automata v0.3.3
test-1         |    Compiling log v0.4.19
test-1         |    Compiling stable_deref_trait v1.2.0
test-1         |    Compiling fallible-iterator v0.2.0
test-1         |    Compiling tracing-core v0.1.31
test-1         |    Compiling gimli v0.27.3
test-1         |    Compiling unicode-bidi v0.3.13
test-1         |    Compiling io-lifetimes v1.0.11
test-1         |    Compiling percent-encoding v2.3.0
test-1         |    Compiling form_urlencoded v1.2.0
test-1         |    Compiling idna v0.4.0
test-1         |    Compiling rand_core v0.5.1
test-1         |    Compiling regex v1.9.1
test-1         |    Compiling anyhow v1.0.72
test-1         |    Compiling crc32fast v1.3.2
test-1         |    Compiling url v2.4.0
test-1         |    Compiling tracing-attributes v0.1.26
test-1         |    Compiling itoa v1.0.9
test-1         |    Compiling bitflags v1.3.2
test-1         |    Compiling static_assertions v1.1.0
test-1         |    Compiling target-lexicon v0.12.10
test-1         |    Compiling smallvec v1.11.0
test-1         |    Compiling serde_json v1.0.104
test-1         |    Compiling rustix v0.37.23
test-1         |    Compiling tracing v0.1.37
test-1         |    Compiling wasmparser v0.102.0
test-1         |    Compiling Inflector v0.11.4
test-1         |    Compiling scale-info-derive v2.9.0
test-1         |    Compiling derive_more v0.99.17
test-1         |    Compiling cranelift-entity v0.95.1
test-1         |    Compiling memoffset v0.8.0
test-1         |    Compiling ryu v1.0.15
test-1         |    Compiling rustix v0.36.15
test-1         |    Compiling linux-raw-sys v0.3.8
test-1         |    Compiling sp-std v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling scale-info v2.9.0
test-1         |    Compiling object v0.30.4
test-1         |    Compiling wasmtime-types v8.0.1
test-1         |    Compiling sha2 v0.10.7
test-1         |    Compiling wasmtime-runtime v8.0.1
test-1         |    Compiling generic-array v0.12.4
test-1         |    Compiling cpp_demangle v0.3.5
test-1         |    Compiling keccak v0.1.4
test-1         |    Compiling futures-core v0.3.28
test-1         |    Compiling rustc-demangle v0.1.23
test-1         |    Compiling linux-raw-sys v0.1.4
test-1         |    Compiling arrayref v0.3.7
test-1         |    Compiling wasmtime-environ v8.0.1
test-1         |    Compiling memfd v0.6.3
test-1         |    Compiling blake2 v0.10.6
test-1         |    Compiling libsecp256k1-core v0.3.0
test-1         |    Compiling block-buffer v0.9.0
test-1         |    Compiling psm v0.1.21
test-1         |    Compiling wasmtime-jit-debug v8.0.1
test-1         |    Compiling slab v0.4.8
test-1         |    Compiling wasmtime-asm-macros v8.0.1
test-1         |    Compiling byte-tools v0.3.1
test-1         |    Compiling regex-syntax v0.6.29
test-1         |    Compiling ref-cast v1.0.19
test-1         |    Compiling futures-channel v0.3.28
test-1         |    Compiling opaque-debug v0.3.0
test-1         |    Compiling futures-task v0.3.28
test-1         |    Compiling sha2 v0.9.9
test-1         |    Compiling block-padding v0.1.5
test-1         |    Compiling digest v0.8.1
test-1         |    Compiling addr2line v0.19.0
test-1         |    Compiling hmac v0.12.1
test-1         |    Compiling ref-cast-impl v1.0.19
test-1         |    Compiling regex-automata v0.1.10
test-1         |    Compiling bincode v1.3.3
test-1         |    Compiling impl-serde v0.4.0
test-1         |    Compiling wasmtime-jit-icache-coherence v8.0.1
test-1         |    Compiling futures-util v0.3.28
test-1         |    Compiling wasmtime v8.0.1
test-1         |    Compiling rustc-hex v2.1.0
test-1         |    Compiling futures-sink v0.3.28
test-1         |    Compiling iana-time-zone v0.1.57
test-1         |    Compiling hex v0.4.3
test-1         |    Compiling chrono v0.4.26
test-1         |    Compiling wasmtime-jit v8.0.1
test-1         |    Compiling matchers v0.0.1
test-1         |    Compiling block-buffer v0.7.3
test-1         |    Compiling libsecp256k1-gen-ecmult v0.3.0
test-1         |    Compiling libsecp256k1-gen-genmult v0.3.0
test-1         |    Compiling rand_chacha v0.2.2
test-1         |    Compiling tracing-serde v0.1.3
test-1         |    Compiling tracing-log v0.1.3
test-1         |    Compiling sharded-slab v0.1.4
test-1         |    Compiling crypto-mac v0.11.1
test-1         |    Compiling crypto-mac v0.8.0
test-1         |    Compiling sp-debug-derive v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling futures-macro v0.3.28
test-1         |    Compiling secp256k1-sys v0.6.1
test-1         |    Compiling thread_local v1.1.7
test-1         |    Compiling lock_api v0.4.10
test-1         |    Compiling parking_lot_core v0.9.8
test-1         |    Compiling opaque-debug v0.2.3
test-1         |    Compiling ansi_term v0.12.1
test-1         |    Compiling either v1.9.0
test-1         |    Compiling constant_time_eq v0.2.6
test-1         |    Compiling unicode-xid v0.2.4
test-1         |    Compiling hash-db v0.16.0
test-1         |    Compiling fake-simd v0.1.2
test-1         |    Compiling futures-io v0.3.28
test-1         |    Compiling pin-utils v0.1.0
test-1         |    Compiling ss58-registry v1.41.0
test-1         |    Compiling sha2 v0.8.2
test-1         |    Compiling blake2b_simd v1.0.1
test-1         |    Compiling tracing-subscriber v0.2.25
test-1         |    Compiling sp-storage v13.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling hmac v0.8.1
test-1         |    Compiling rand v0.7.3
test-1         |    Compiling libsecp256k1 v0.7.1
test-1         |    Compiling uint v0.9.5
test-1         |    Compiling fixed-hash v0.8.0
test-1         |    Compiling curve25519-dalek v2.1.3
test-1         |    Compiling merlin v2.0.1
test-1         |    Compiling sha3 v0.10.8
test-1         |    Compiling twox-hash v1.6.3
test-1         |    Compiling curve25519-dalek v3.2.0
test-1         |    Compiling impl-codec v0.6.0
test-1         |    Compiling num_cpus v1.16.0
test-1         |    Compiling scopeguard v1.2.0
test-1         |    Compiling environmental v1.1.4
test-1         |    Compiling arrayvec v0.5.2
test-1         |    Compiling sp-externalities v0.19.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling schnorrkel v0.9.1
test-1         |    Compiling futures-executor v0.3.28
test-1         |    Compiling primitive-types v0.12.1
test-1         |    Compiling sp-core-hashing v9.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-wasm-interface v14.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-tracing v10.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling hmac-drbg v0.3.0
test-1         |    Compiling hmac v0.11.0
test-1         |    Compiling pbkdf2 v0.8.0
test-1         |    Compiling sp-runtime-interface-proc-macro v11.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling num-format v0.4.4
test-1         |    Compiling pbkdf2 v0.11.0
test-1         |    Compiling dyn-clonable-impl v0.9.0
test-1         |    Compiling dyn-clone v1.0.12
test-1         |    Compiling rustc-hash v1.1.0
test-1         |    Compiling base64 v0.13.1
test-1         |    Compiling tiny-bip39 v1.0.0
test-1         |    Compiling dyn-clonable v0.9.0
test-1         |    Compiling substrate-bip39 v0.4.4
test-1         |    Compiling parking_lot v0.12.1
test-1         |    Compiling secp256k1 v0.24.3
test-1         |    Compiling futures v0.3.28
test-1         |    Compiling ed25519-zebra v3.1.0
test-1         |    Compiling bounded-collections v0.1.8
test-1         |    Compiling secrecy v0.8.0
test-1         |    Compiling hash256-std-hasher v0.15.2
test-1         |    Compiling sp-runtime-interface v17.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling array-bytes v6.1.0
test-1         |    Compiling bs58 v0.4.0
test-1         |    Compiling backtrace v0.3.68
test-1         |    Compiling num-integer v0.1.45
test-1         |    Compiling rustversion v1.0.14
test-1         |    Compiling adler v1.0.2
test-1         |    Compiling miniz_oxide v0.7.1
test-1         |    Compiling addr2line v0.20.0
test-1         |    Compiling object v0.31.1
test-1         |    Compiling num-bigint v0.4.3
test-1         |    Compiling memory-db v0.32.0
test-1         |    Compiling trie-db v0.27.1
test-1         |    Compiling trie-root v0.18.0
test-1         |    Compiling itertools v0.10.5
test-1         |    Compiling sp-core v21.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling schnellru v0.2.1
test-1         |    Compiling signature v1.6.4
test-1         |    Compiling nohash-hasher v0.2.0
test-1         |    Compiling ed25519 v1.5.3
test-1         |    Compiling sp-io v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling tiny-keccak v2.0.2
test-1         |    Compiling proc-macro-hack v0.5.20+deprecated
test-1         |    Compiling ed25519-dalek v1.0.1
test-1         |    Compiling sp-panic-handler v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling ark-serialize-derive v0.4.2
test-1         |    Compiling sp-trie v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-keystore v0.27.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling integer-sqrt v0.1.5
test-1         |    Compiling ark-std v0.4.0
test-1         |    Compiling sp-arithmetic v16.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-state-machine v0.28.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling ark-serialize v0.4.2
test-1         |    Compiling ark-ff-macros v0.4.2
test-1         |    Compiling ark-ff-asm v0.4.2
test-1         |    Compiling derivative v2.2.0
test-1         |    Compiling const-random-macro v0.1.15
test-1         |    Compiling sp-weights v20.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling der v0.7.7
test-1         |    Compiling ark-ff v0.4.2
test-1         |    Compiling expander v2.0.0
test-1         |    Compiling const-random v0.1.15
test-1         |    Compiling macro_magic_core_macros v0.4.2
test-1         |    Compiling derive-syn-parse v0.1.5
test-1         |    Compiling sp-application-crypto v23.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling ff v0.13.0
test-1         |    Compiling fs-err v2.9.0
test-1         |    Compiling sp-runtime v24.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling base16ct v0.2.0
test-1         |    Compiling sec1 v0.7.3
test-1         |    Compiling group v0.13.0
test-1         |    Compiling macro_magic_core v0.4.2
test-1         |    Compiling crypto-bigint v0.5.2
test-1         |    Compiling async-trait v0.1.72
test-1         |    Compiling proc-macro-warning v0.4.1
test-1         |    Compiling macro_magic_macros v0.4.2
test-1         |    Compiling elliptic-curve v0.13.5
test-1         |    Compiling spki v0.7.2
test-1         |    Compiling sp-core-hashing-proc-macro v9.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling rfc6979 v0.4.0
test-1         |    Compiling frame-metadata v16.0.0
test-1         |    Compiling sp-version-proc-macro v8.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling signature v2.1.0
test-1         |    Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling parity-wasm v0.45.0
test-1         |    Compiling frame-support-procedural-tools v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-version v22.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling ecdsa v0.16.8
test-1         |    Compiling ark-poly v0.4.2
test-1         |    Compiling ark-relations v0.4.0
test-1         |    Compiling macro_magic v0.4.2
test-1         |    Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling cfg-expr v0.15.3
test-1         |    Compiling ark-ec v0.4.2
test-1         |    Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling ark-snark v0.4.0
test-1         |    Compiling k256 v0.13.1
test-1         |    Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling tt-call v1.0.9
test-1         |    Compiling ark-crypto-primitives v0.4.0
test-1         |    Compiling ark-groth16 v0.4.0
test-1         |    Compiling ark-bn254 v0.4.0
test-1         |    Compiling sp-std v14.0.0 (https://github.com/paritytech/polkadot-sdk.git#31179c40)
test-1         |    Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v1.0.0#948fbd2f)
test-1         |    Compiling pallet-infimum v4.0.0-dev (/node/pallets/infimum)
test-1         |     Finished `test` profile [unoptimized + debuginfo] target(s) in 2m 33s
test-1         |      Running unittests src/lib.rs (target/debug/deps/pallet_infimum-b664eca577413996)
test-1         | 
test-1         | running 42 tests
test-1         | test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test-1         | test tests::extrinsics::commit_outcome_invalid_proof ... ok
test-1         | test tests::extrinsics::commit_outcome_invalid_commitment ... ok
test-1         | test tests::extrinsics::commit_outcome_full_batch ... ok
test-1         | test tests::extrinsics::commit_outcome_mismatched_state ... ok
test-1         | test tests::extrinsics::commit_outcome_permuted ... ok
test-1         | test tests::extrinsics::commit_outcome_partial_success ... ok
test-1         | test tests::extrinsics::commit_outcome_full_round ... ok
test-1         | test tests::extrinsics::commit_outcome_single_batch ... ok
test-1         | test tests::extrinsics::coordinator_key_rotation_malformed ... ok
test-1         | test tests::extrinsics::coordinator_key_rotation_after_poll ... ok
test-1         | test tests::extrinsics::coordinator_key_rotation_during_poll ... ok
test-1         | test tests::extrinsics::coordinator_registration_malformed ... ok
test-1         | test tests::extrinsics::coordinator_registration_successful ... ok
test-1         | test tests::extrinsics::coordinator_registration_unsigned ... ok
test-1         | test tests::extrinsics::coordinator_registration_duplicated ... ok
test-1         | test tests::extrinsics::merge_interaction_state_success ... ok
test-1         | test tests::extrinsics::coordinator_key_rotation_successful ... ok
test-1         | test tests::extrinsics::merge_interaction_voting_period ... ok
test-1         | test tests::extrinsics::merge_registration_signup_period ... ok
test-1         | test tests::extrinsics::merge_registration_state_success ... ok
test-1         | test tests::extrinsics::participant_interaction ... ok
test-1         | test tests::extrinsics::participant_interaction_limit ... ok
test-1         | test tests::extrinsics::participant_registration_no_poll ... ok
test-1         | test tests::extrinsics::commit_outcome_success ... ok
test-1         | test tests::extrinsics::poll_creation_by_non_coordinator ... ok
test-1         | test tests::extrinsics::participant_interaction_outside_period ... ok
test-1         | test tests::extrinsics::poll_creation_beyond_limit ... ok
test-1         | test tests::extrinsics::participant_limit_reached ... ok
test-1         | test tests::extrinsics::poll_creation_during_extant ... ok
test-1         | test tests::extrinsics::poll_creation_successful ... ok
test-1         | test tests::extrinsics::poll_nullify_error ... ok
test-1         | test tests::poseidon::bytes_ones_twos ... ok
test-1         | test tests::extrinsics::register_as_participant ... ok
test-1         | test tests::extrinsics::process_messages_public_signals ... ok
test-1         | test tests::poseidon::fr_one ... ok
test-1         | test tests::poseidon::fr_one_two ... ok
test-1         | test tests::poseidon::random_input ... ok
test-1         | test tests::poseidon::empty_input ... ok
test-1         | test tests::poseidon::with_domain_tag ... ok
test-1         | test tests::extrinsics::register_as_participant_outside_period ... ok
test-1         | test tests::poseidon::circomlibjs_compat_1_to_12_inputs ... ok
test-1         | 
test-1         | test result: ok. 42 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.34s
test-1         | 
test-1         |    Doc-tests pallet_infimum
test-1         | 
test-1         | running 0 tests
test-1         | 
test-1         | test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
test-1         | 
test-1 exited with code 0
```
Cargo clippy results in numerous warnings. Consider fixes for next milestone:

<details>
   <summary>Output</summary>

```rust
Checking pallet-infimum v4.0.0-dev (/home/ubuntu/infimum/pallet)
warning: unnecessary `>= y + 1` or `x - 1 >=`
   --> src/poll/provider.rs:203:16
    |
203 |             if current_batch_index >= self.state.registrations.count + 1 { return None; }
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: change it to: `current_batch_index > self.state.registrations.count`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#int_plus_one
    = note: `#[warn(clippy::int_plus_one)]` on by default

warning: module has the same name as its containing module
 --> src/poll/mod.rs:3:1
  |
3 | pub mod poll;
  | ^^^^^^^^^^^^^
  |
  = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#module_inception
  = note: `#[warn(clippy::module_inception)]` on by default

warning: this `let...else` may be rewritten with the `?` operator
  --> src/poll/provider.rs:84:9
   |
84 |         let Some(outcome) = outcome else { return None; };
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let outcome = outcome?;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark
   = note: `#[warn(clippy::question_mark)]` on by default

warning: this `let...else` may be rewritten with the `?` operator
  --> src/poll/provider.rs:85:9
   |
85 |         let Some(mut hasher) = Poseidon::<Fr>::new_circom(2).ok() else { return None; };
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let mut hasher = Poseidon::<Fr>::new_circom(2).ok()?;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
  --> src/poll/provider.rs:93:13
   |
93 |             let Some(tally_result) = outcome.tally_results.get(option_index) else { return None; };
   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let tally_result = outcome.tally_results.get(option_index)?;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
  --> src/poll/provider.rs:94:13
   |
94 |             let Some(tally_path) = outcome.tally_result_proofs.get(option_index) else { return None; };
   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let tally_path = outcome.tally_result_proofs.get(option_index)?;`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:98:13
    |
98  | /             let Some(root) = compute_merkle_root_from_path(
99  | |                 self.config.vote_option_tree_depth,
100 | |                 option_index as u32,
101 | |                 tally_result_bytes,
102 | |                 tally_path.clone()
103 | |             ) else { return None; };
    | |____________________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark
help: replace it with
    |
98  ~             let root = compute_merkle_root_from_path(
99  +                 self.config.vote_option_tree_depth,
100 +                 option_index as u32,
101 +                 tally_result_bytes,
102 +                 tally_path.clone()
103 +             )?;
    |

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:108:13
    |
108 |             let Some(hash) = hasher.hash(&inputs).ok() else { return None; };
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let hash = hasher.hash(&inputs).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: calls to `push` immediately after creation
   --> src/poll/provider.rs:105:13
    |
105 | /             let mut inputs: vec::Vec<Fr> = vec::Vec::<Fr>::new();
106 | |             inputs.push(Fr::from_be_bytes_mod_order(&root));
107 | |             inputs.push(Fr::from_be_bytes_mod_order(&outcome.tally_result_salt));
    | |_________________________________________________________________________________^ help: consider using the `vec![]` macro: `let inputs: vec::Vec<Fr> = vec![..];`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#vec_init_then_push
    = note: `#[warn(clippy::vec_init_then_push)]` on by default

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:113:13
    |
113 |             let Some(hash) = hasher.hash(&inputs).ok() else { return None; };
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let hash = hasher.hash(&inputs).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: calls to `push` immediately after creation
   --> src/poll/provider.rs:110:13
    |
110 | /             let mut inputs: vec::Vec<Fr> = vec::Vec::<Fr>::new();
111 | |             inputs.push(Fr::from_be_bytes_mod_order(&hash.into_bigint().to_bytes_be()));
112 | |             inputs.push(Fr::from_be_bytes_mod_order(&outcome.spent_votes_hash));
    | |________________________________________________________________________________^ help: consider using the `vec![]` macro: `let inputs: vec::Vec<Fr> = vec![..];`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#vec_init_then_push

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:129:9
    |
129 |         let Some(hash) = hasher.hash(&inputs).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let hash = hasher.hash(&inputs).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: calls to `push` immediately after creation
   --> src/poll/provider.rs:126:9
    |
126 | /         let mut inputs: vec::Vec<Fr> = vec::Vec::<Fr>::new();
127 | |         inputs.push(Fr::from_be_bytes_mod_order(&outcome.total_spent));
128 | |         inputs.push(Fr::from_be_bytes_mod_order(&outcome.total_spent_salt));
    | |____________________________________________________________________________^ help: consider using the `vec![]` macro: `let inputs: vec::Vec<Fr> = vec![..];`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#vec_init_then_push

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:134:9
    |
134 |         let Some(hash) = hasher.hash(&inputs).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let hash = hasher.hash(&inputs).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: calls to `push` immediately after creation
   --> src/poll/provider.rs:131:9
    |
131 | /         let mut inputs: vec::Vec<Fr> = vec::Vec::<Fr>::new();
132 | |         inputs.push(Fr::from_be_bytes_mod_order(&outcome.new_results_commitment));
133 | |         inputs.push(Fr::from_be_bytes_mod_order(&hash.into_bigint().to_bytes_be()));
    | |____________________________________________________________________________________^ help: consider using the `vec![]` macro: `let inputs: vec::Vec<Fr> = vec![..];`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#vec_init_then_push

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:166:13
    |
166 |             let Some(mut hasher) = Poseidon::<Fr>::new_circom(2).ok() else { return None; };
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let mut hasher = Poseidon::<Fr>::new_circom(2).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: using `clone` on type `PublicKey` which implements the `Copy` trait
   --> src/poll/provider.rs:167:33
    |
167 |             let coord_pub_key = coordinator.public_key.clone();
    |                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `coordinator.public_key`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
    = note: `#[warn(clippy::clone_on_copy)]` on by default

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:172:13
    |
172 |             let Some(coord_pub_key_hash) = hasher.hash(&coord_pub_key_fr).ok() else { return None; };
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let coord_pub_key_hash = hasher.hash(&coord_pub_key_fr).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:173:13
    |
173 |             let Some(root_bytes) = self.state.interactions.root else { return None; };
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let root_bytes = self.state.interactions.root?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:404:5
    |
404 |     let Some(mut hasher) = Poseidon::<Fr>::new_circom(VOTE_TREE_ARITY as usize).ok() else { return None; };
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let mut hasher = Poseidon::<Fr>::new_circom(VOTE_TREE_ARITY as usize).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/poll/provider.rs:425:9
    |
425 |         let Some(result) = hasher.hash(&inputs).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let result = hasher.hash(&inputs).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: binary comparison to literal `Option::None`
   --> src/poll/state.rs:182:12
    |
182 |         if self.root != None { Err(MerkleTreeError::TreeAlreadyFull)? }
    |            ^^^^^^^^^^^^^^^^^ help: use `Option::is_some()` instead: `self.root.is_some()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#partialeq_to_none
    = note: `#[warn(clippy::partialeq_to_none)]` on by default

warning: binary comparison to literal `Option::None`
   --> src/poll/state.rs:236:12
    |
236 |         if self.root != None { Err(MerkleTreeError::TreeAlreadyMerged)? }
    |            ^^^^^^^^^^^^^^^^^ help: use `Option::is_some()` instead: `self.root.is_some()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#partialeq_to_none

warning: this loop could be written as a `while let` loop
   --> src/poll/state.rs:240:9
    |
240 | /         loop
241 | |         {
242 | |             let last = match self.hashes.last()
243 | |             {
...   |
270 | |             self.hashes.push((depth + 1, hash));
271 | |         }
    | |_________^ help: try: `while let Some(&last) = self.hashes.last() { .. }`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#while_let_loop
    = note: `#[warn(clippy::while_let_loop)]` on by default

warning: unneeded `return` statement
  --> src/poll/zeroes.rs:83:20
   |
83 |     if arity == 2 {return BINARY_ZEROES;}
   |                    ^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return
   = note: `#[warn(clippy::needless_return)]` on by default
help: remove `return`
   |
83 -     if arity == 2 {return BINARY_ZEROES;}
83 +     if arity == 2 {BINARY_ZEROES}
   |

warning: unneeded `return` statement
  --> src/poll/zeroes.rs:84:11
   |
84 |     else {return QUINARY_ZEROES;}
   |           ^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return
help: remove `return`
   |
84 -     else {return QUINARY_ZEROES;}
84 +     else {QUINARY_ZEROES}
   |

warning: using `clone` on type `PublicKey` which implements the `Copy` trait
   --> src/lib.rs:347:29
    |
347 |             coordinator.public_key = public_key.clone();
    |                                      ^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `public_key`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: this function has too many arguments (9/7)
   --> src/lib.rs:35:1
    |
35  |   #[frame_support::pallet]
    |   ^-----------------------
    |   |
    |  _in this procedural macro expansion
    | |
36  | | pub mod pallet 
37  | | {
38  | |     use super::*;
...   |
382 | |             vote_options: vec::Vec<u128>
383 | |         ) -> DispatchResult
    | |___________________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
    = note: `#[warn(clippy::too_many_arguments)]` on by default
    = note: this warning originates in the attribute macro `frame_support::pallet` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: the borrowed expression implements the required traits
   --> src/lib.rs:433:23
    |
433 |             Polls::<T>::insert(&index, Poll {
    |                                ^^^^^^ help: change this to: `index`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args
    = note: `#[warn(clippy::needless_borrows_for_generic_args)]` on by default

warning: the borrowed expression implements the required traits
   --> src/lib.rs:509:24
    |
509 |                 Polls::<T>::insert(&poll_id, poll.clone());
    |                                    ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> src/lib.rs:538:24
    |
538 |                 Polls::<T>::insert(&poll_id, poll.clone());
    |                                    ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: length comparison to zero
   --> src/lib.rs:588:12
    |
588 |             ensure!(batches.len() > 0 || outcome.is_some(), Error::<T>::MalformedInput);
    |                     ^^^^^^^^^^^^^^^^^ help: using `!is_empty` is clearer and more explicit: `!batches.is_empty()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#len_zero
    = note: `#[warn(clippy::len_zero)]` on by default

warning: length comparison to zero
   --> src/lib.rs:611:7
    |
611 |             if batches.len() > 0
    |                ^^^^^^^^^^^^^^^^^ help: using `!is_empty` is clearer and more explicit: `!batches.is_empty()`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#len_zero

warning: the borrowed expression implements the required traits
   --> src/lib.rs:689:37
    |
689 |             let Some(poll) = Polls::<T>::get(&poll_id) else { Err(<Error::<T>>::PollDoesNotExist)? };
    |                                              ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> src/lib.rs:712:5
    |
712 |                 &poll_id, 
    |                 ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> src/lib.rs:750:37
    |
750 |             let Some(poll) = Polls::<T>::get(&poll_id) else { Err(<Error::<T>>::PollDoesNotExist)? };
    |                                              ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: the borrowed expression implements the required traits
   --> src/lib.rs:768:5
    |
768 |                 &poll_id, 
    |                 ^^^^^^^^ help: change this to: `poll_id`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrows_for_generic_args

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:788:3
    |
788 |         let Some(alpha_g1) = G1Affine::deserialize_uncompressed(&*vkey.alpha_g1).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let alpha_g1 = G1Affine::deserialize_uncompressed(&*vkey.alpha_g1).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:789:3
    |
789 |         let Some(beta_g2) = G2Affine::deserialize_uncompressed(&*vkey.beta_g2).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let beta_g2 = G2Affine::deserialize_uncompressed(&*vkey.beta_g2).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:790:3
    |
790 |         let Some(gamma_g2) = G2Affine::deserialize_uncompressed(&*vkey.gamma_g2).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let gamma_g2 = G2Affine::deserialize_uncompressed(&*vkey.gamma_g2).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:791:3
    |
791 |         let Some(delta_g2) = G2Affine::deserialize_uncompressed(&*vkey.delta_g2).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let delta_g2 = G2Affine::deserialize_uncompressed(&*vkey.delta_g2).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:808:6
    |
808 |         let Some(a) = G1Affine::deserialize_uncompressed(&*proof_data.pi_a).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let a = G1Affine::deserialize_uncompressed(&*proof_data.pi_a).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:809:6
    |
809 |         let Some(b) = G2Affine::deserialize_uncompressed(&*proof_data.pi_b).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let b = G2Affine::deserialize_uncompressed(&*proof_data.pi_b).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this `let...else` may be rewritten with the `?` operator
   --> src/lib.rs:810:6
    |
810 |         let Some(c) = G1Affine::deserialize_uncompressed(&*proof_data.pi_c).ok() else { return None; };
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `let c = G1Affine::deserialize_uncompressed(&*proof_data.pi_c).ok()?;`
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#question_mark

warning: this function has too many arguments (8/7)
   --> src/lib.rs:263:12
    |
263 |     #[pallet::call]
    |               ^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments

warning: `pallet-infimum` (lib) generated 45 warnings (run `cargo clippy --fix --lib -p pallet-infimum` to apply 16 suggestions)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 12s
```
</details>
