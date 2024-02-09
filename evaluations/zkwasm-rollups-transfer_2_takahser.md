# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/KogarashiNetwork/Kogarashi/blob/6cfe4cdc1d2cc232b18e04899e78d81840c65e09/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Tutorial](https://kogarashinetwork.github.io/tutorial/nova_pallet/) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Test instructions](https://github.com/KogarashiNetwork/Kogarashi/tree/master/pallet/nova#test) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/KogarashiNetwork/Kogarashi/blob/master/Dockerfile) | I know it's just a simple Dockerfile that runs tests, but please add instructions on how to test it. Also, it'd have been nice to have a docker setup that allows to spin up a node which uses your nova pallet. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Tutorial](https://kogarashinetwork.github.io/tutorial/nova_pallet/) | - |
| 1. | `bn254/grumpkin` implementation | <ul><li>[x] </li></ul> | [bn254 curve](https://github.com/KogarashiNetwork/Kogarashi/tree/dc1450971ccfd35b9d337a8d9f7bc997cbe02d89/bn254), [grumpkin curve](https://github.com/KogarashiNetwork/Kogarashi/tree/dc1450971ccfd35b9d337a8d9f7bc997cbe02d89/grumpkin) | - |
| 2. | `groth16` implementation | <ul><li>[x] </li></ul> | [groth16 zkSNARKs](https://github.com/KogarashiNetwork/Kogarashi/tree/dc1450971ccfd35b9d337a8d9f7bc997cbe02d89/groth16) | - |
| 3. | `recursive proof` implementation | <ul><li>[x] </li></ul> | [nova implementation](https://github.com/KogarashiNetwork/Kogarashi/tree/dc1450971ccfd35b9d337a8d9f7bc997cbe02d89/nova) | - |
| 4. | `Nova pallet` implementation | <ul><li>[x] </li></ul> | [nova pallet](https://github.com/KogarashiNetwork/Kogarashi/tree/dc1450971ccfd35b9d337a8d9f7bc997cbe02d89/pallet/nova) | - |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- [x] ~~The tutorial is currently difficult to follow. There are a couple of inconsistencies:~~ => all incorrect references have been updated, a sample app has been added, links to the code files have been added and the tutorial has been improved overall
  - [x] ~~in step 3 you mention that the tutorial is based on the [sum-storage](https://github.com/JoshOrndorff/recipes/blob/master/pallets/sum-storage/src/main.rs) pallet; I think it'd be better to mention it at the very beginning~~
  - [x] ~~in step 4 you mention `TestRuntime` and show the code found in `recipes/pallets/sum-storage/src/tests.rs` in the 1st code snippet, however, you print a different path: `runtime/src/main.rs`~~
  - [x] ~~still in step 4, in the 2nd code snippet you print the same path again~~
  - [x]~~ in step 5 you mention the `/src/main.rs` which doesn't exist neither within the `sum-storage` pallet nor the `recipes` repo~~
  - [x] ~~similarly, in step 2 you mention the `/src/main.rs` which doesn't exist neither within the `sum-storage` pallet nor the `recipes` repo~~

### Testing Feedback

- [x] Tests pass
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test --all --release
        Finished release [optimized + debuginfo] target(s) in 0.58s
        Running unittests src/lib.rs (target/release/deps/bn_254-f2f916791de4eb7c)

    running 68 tests
    test fq::tests::to_fr_and_back ... ok
    test ff_compat::fr::tests::field_operations ... ok
    test ff_compat::fq::tests::field_operations ... ok
    test fqn::tests::fq12_field_addition_test ... ok
    test fqn::tests::fq12_field_inversion_test ... ok
    test fqn::tests::fq12_field_subtraction_test ... ok
    test fqn::tests::fq12_field_equivalence_test ... ok
    test fqn::tests::fq2_field_addition_test ... ok
    test fqn::tests::fq2_field_equivalence_test ... ok
    test fqn::tests::fq2_field_inversion_test ... ok
    test fqn::tests::fq12_field_squaring_test ... ok
    test fqn::tests::fq2_field_subtraction_test ... ok
    test fqn::tests::fq2_mul_nonresidue_test ... ok
    test fqn::tests::fq12_field_multiplication_test ... ok
    test fqn::tests::fq6_field_addition_test ... ok
    test fqn::tests::fq6_field_equivalence_test ... ok
    test fqn::tests::fq6_field_inversion_test ... ok
    test fqn::tests::fq2_field_squaring_test ... ok
    test fqn::tests::fq2_field_multiplication_test ... ok
    test fqn::tests::fq6_field_subtraction_test ... ok
    test fr::tests::bn254_scalar_addition_test ... ok
    test fr::tests::bn254_scalar_equivalence_test ... ok
    test fr::tests::bn254_scalar_inversion_test ... ok
    test fr::tests::test_root_of_unity ... ok
    test fr::tests::bn254_scalar_subtraction_test ... ok
    test fr::tests::test_sqrt ... ok
    test fr::tests::to_fq_and_back ... ok
    test fr::tests::bn254_scalar_squaring_test ... ok
    test fqn::tests::fq6_field_squaring_test ... ok
    test g1::tests::bn254_affine_identity_test ... ok
    test g1::tests::bn254_affine_is_on_curve_test ... ok
    test g1::tests::bn254_affine_doubling_test ... ok
    test g1::tests::bn254_affine_addition_test ... ok
    test g1::tests::bn254_mix_addition_test ... ok
    test g1::tests::bn254_coordinate_transformation_test ... ok
    test g1::tests::bn254_affine_scalar_test ... ok
    test g1::tests::bn254_operations ... ok
    test fr::tests::bn254_scalar_multiplication_test ... ok
    test g1::tests::bn254_mix_doubling_test ... ok
    test g1::tests::bn254_projective_identity_test ... ok
    test g1::tests::bn254_projective_is_on_curve_test ... ok
    test g1::tests::bn254_mix_scalar_test ... ok
    test g1::tests::test_batch_normalize ... ok
    test g1::tests::bn254_projective_doubling_test ... ok
    test g1::tests::bn254_projective_scalar_test ... ok
    test g2::tests::bn254_affine_identity_test ... ok
    test g2::tests::bn254_affine_is_on_curve_test ... ok
    test g2::tests::bn254_affine_doubling_test ... ok
    test fqn::tests::fq6_mul_nonresidue_test ... ok
    test g2::tests::bn254_mix_addition_test ... ok
    test g1::tests::bn254_projective_addition_test ... ok
    test g2::tests::bn254_affine_scalar_test ... ok
    test g2::tests::bn254_coordinate_transformation_test ... ok
    test g2::tests::bn254_mix_doubling_test ... ok
    test g2::tests::bn254_projective_identity_test ... ok
    test g2::tests::bn254_projective_is_on_curve_test ... ok
    test g2::tests::bn254_mix_scalar_test ... ok
    test g2::tests::bn254_affine_addition_test ... ok
    test fqn::tests::fq6_field_multiplication_test ... ok
    test g2::tests::bn254_projective_scalar_test ... ok
    test g2::tests::bn254_projective_doubling_test ... ok
    test g2::tests::bn254_projective_addition_test ... ok
    test fqn::tests::fq6_mul_by_01_test ... ok
    test fqn::tests::fq6_mul_by_1_test ... ok
    test fqn::tests::fq12_frobenius_map_test ... ok
    test fqn::tests::test_fq12_mul_by_034 ... ok
    test fq::tests::test_serde ... ok
    test fr::tests::test_serde ... ok

    test result: ok. 68 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.82s

        Running tests/pairing.rs (target/release/deps/pairing-c6b9bfda15e507c3)

    running 5 tests
    test final_exp_test ... ok
    test generator_pairing_test ... ok
    test unitary_test ... ok
    test pairing_test ... ok
    test multi_miller_loop_test ... ok

    test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

        Running unittests src/lib.rs (target/release/deps/grumpkin-ae8fa0ed054359ad)

    running 16 tests
    test curve::tests::grumpkin_affine_is_on_curve_test ... ok
    test curve::tests::grumpkin_affine_identity_test ... ok
    test curve::tests::grumpkin_mix_addition_test ... ok
    test curve::tests::grumpkin_projective_identity_test ... ok
    test curve::tests::grumpkin_projective_is_on_curve_test ... ok
    test curve::tests::test_batch_normalize ... ok
    test curve::tests::grumpkin_operations ... ok
    test curve::tests::grumpkin_projective_doubling_test ... ok
    test curve::tests::grumpkin_affine_doubling_test ... ok
    test curve::tests::grumpkin_coordinate_transformation_test ... ok
    test curve::tests::grumpkin_affine_scalar_test ... ok
    test curve::tests::grumpkin_mix_doubling_test ... ok
    test curve::tests::grumpkin_mix_scalar_test ... ok
    test curve::tests::grumpkin_projective_scalar_test ... ok
    test curve::tests::grumpkin_projective_addition_test ... ok
    test curve::tests::grumpkin_affine_addition_test ... ok

    test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/release/deps/pallet_nova-123d81b89273bee3)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::ivc_pallet_tests::three_steps_ivc has been running for over 60 seconds
    test tests::ivc_pallet_tests::three_steps_ivc ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 96.87s

        Running unittests src/lib.rs (target/release/deps/zkgroth16-48847ea7dfbf68f6)

    running 7 tests
    test poly::tests::polynomial_division_test ... ok
    test poly::tests::polynomial_scalar ... ok
    test poly::tests::polynomial_subtraction_test ... ok
    test fft::tests::fft_multiplication_test ... ok
    test fft::tests::fft_transformation_test ... ok
    test msm::tests::multi_scalar_multiplication_test ... ok
    test tests::arithmetic_test ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s

        Running unittests src/lib.rs (target/release/deps/zknova-e19bbb57f6c51699)

    running 21 tests
    test driver::grumpkin_gadget_tests::field_mul_test ... ok
    test driver::grumpkin_gadget_tests::field_ops_test ... ok
    test driver::grumpkin_gadget_tests::field_add_test ... ok
    test gadget::big_nat::tests::bignat_allocation_from_bigint ... ok
    test gadget::big_nat::tests::bignat_add ... ok
    test gadget::instance::tests::instance_assignment ... ok
    test gadget::relaxed_instance::tests::relaxed_instance_assignment ... ok
    test driver::grumpkin_gadget_tests::range_proof_bits_test ... ok
    test gadget::big_nat::tests::bignat_allocation_from_field_assignment ... ok
    test prover::tests::nifs_folding_test ... ok
    test gadget::big_nat::tests::bignat_red_mod ... ok
    test relaxed_r1cs::tests::relaxed_r1cs_test ... ok
    test gadget::big_nat::tests::bignat_mult_mod ... ok
    test driver::grumpkin_gadget_tests::curve_double_test ... ok
    test verifier::tests::recursive_nifs_test ... ok
    test driver::grumpkin_gadget_tests::curve_add_test ... ok
    test circuit::transcript::tests::mimc_circuit ... ok
    test driver::grumpkin_gadget_tests::range_proof_test ... ok
    test driver::grumpkin_gadget_tests::curve_scalar_mul_test ... ok
    test gadget::relaxed_instance::tests::instance_assignment_hash ... ok
    test circuit::augmented::tests::augmented_circuit_dummies ... ok

    test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 19.94s

        Running unittests src/lib.rs (target/release/deps/zkstd-69a30761676e3ce4)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/limbs.rs (target/release/deps/arithmetics-546249c6949fd992)

    running 12 tests
    test bls12_381_limbs_tests::bls12_381_limbs_tests_add_test ... ok
    test bls12_381_limbs_tests::bls12_381_limbs_tests_mul_test ... ok
    test bls12_381_limbs_tests::bls12_381_limbs_tests_square_test ... ok
    test bls12_381_limbs_tests::bls12_381_limbs_tests_invert_test ... ok
    test bls12_381_limbs_tests::bls12_381_limbs_tests_sub_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_add_test ... ok
    test bls12_381_limbs_tests::bls12_381_limbs_tests_power_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_invert_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_mul_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_sub_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_power_test ... ok
    test jubjub_limbs_tests::jubjub_limbs_tests_square_test ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/jubjub.rs (target/release/deps/jubjub-d3e8a78218b682ec)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/points.rs (target/release/deps/points-91989f0502f0b29f)

    running 4 tests
    test twisted_edwards_points_tests::scalar_test ... ok
    test twisted_edwards_points_tests::is_on_curve_affine ... ok
    test twisted_edwards_points_tests::addition_test ... ok
    test twisted_edwards_points_tests::is_on_curve_extended ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests bn-254

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests grumpkin

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests pallet-nova

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests zkgroth16

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests zknova

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests zkstd

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

### Documentation

- [x] Tests in sample app pass
  
  <details>
    <summary>Output</summary>

    ```zsh
    sample % cargo test --release 
        Updating git repository `https://github.com/KogarashiNetwork/Kogarashi`
        Updating crates.io index
    ^C     Fetch [============>            ]  54.19%, (58145/147264) resolving deltas                                                                                                                         
    xxx@P9K6HTK4H5-w3f sample % cargo test --release
        Updating crates.io index
      Downloaded indexmap v2.2.1
      Downloaded futures-sink v0.3.30
      Downloaded futures-core v0.3.30
      Downloaded cpufeatures v0.2.12
      Downloaded futures-task v0.3.30
      Downloaded ref-cast v1.0.22
      Downloaded futures-executor v0.3.30
      Downloaded futures-macro v0.3.30
      Downloaded keccak v0.1.5
      Downloaded ref-cast-impl v1.0.22
      Downloaded itoa v1.0.10
      Downloaded async-trait v0.1.77
      Downloaded iana-time-zone v0.1.59
      Downloaded semver v1.0.21
      Downloaded thiserror v1.0.56
      Downloaded futures-io v0.3.30
      Downloaded thiserror-impl v1.0.56
      Downloaded quote v1.0.35
      Downloaded futures-channel v0.3.30
      Downloaded once_cell v1.19.0
      Downloaded smallvec v1.13.1
      Downloaded futures v0.3.30
      Downloaded anyhow v1.0.79
      Downloaded proc-macro2 v1.0.78
      Downloaded getrandom v0.2.12
      Downloaded ryu v1.0.16
      Downloaded serde v1.0.196
      Downloaded serde_derive v1.0.196
      Downloaded memchr v2.7.1
      Downloaded serde_json v1.0.113
      Downloaded hashbrown v0.14.3
      Downloaded winnow v0.5.35
      Downloaded futures-util v0.3.30
      Downloaded chrono v0.4.33
      Downloaded regex v1.10.3
      Downloaded object v0.32.2
      Downloaded syn v2.0.48
      Downloaded regex-automata v0.4.5
      Downloaded libc v0.2.152
      Downloaded 39 crates (3.9 MB) in 6.03s
      Compiling proc-macro2 v1.0.78
      Compiling unicode-ident v1.0.12
      Compiling libc v0.2.152
      Compiling autocfg v1.1.0
      Compiling cfg-if v1.0.0
      Compiling serde v1.0.196
      Compiling syn v1.0.96
      Compiling typenum v1.17.0
      Compiling equivalent v1.0.1
      Compiling hashbrown v0.14.3
      Compiling tap v1.0.1
      Compiling toml_datetime v0.6.5
      Compiling radium v0.6.2
      Compiling winnow v0.5.35
      Compiling once_cell v1.19.0
      Compiling arrayvec v0.7.4
      Compiling wyz v0.2.0
      Compiling num-traits v0.2.17
      Compiling funty v1.1.0
      Compiling version_check v0.9.4
      Compiling byte-slice-cast v1.2.2
      Compiling indexmap v2.2.1
      Compiling byteorder v1.5.0
      Compiling num-integer v0.1.45
      Compiling subtle v2.4.1
      Compiling ppv-lite86 v0.2.17
      Compiling generic-array v0.14.7
      Compiling getrandom v0.1.16
      Compiling memchr v2.7.1
      Compiling toml_edit v0.19.15
      Compiling paste v1.0.14
      Compiling sp-std v3.0.0
      Compiling crunchy v0.2.2
      Compiling proc-macro-crate v1.3.1
      Compiling quote v1.0.35
      Compiling syn v2.0.48
      Compiling bitvec v0.20.4
      Compiling generic-array v0.12.4
      Compiling smallvec v1.13.1
      Compiling digest v0.8.1
      Compiling getrandom v0.2.12
      Compiling rand_core v0.6.4
      Compiling cpufeatures v0.2.12
      Compiling rand_chacha v0.3.1
      Compiling static_assertions v1.1.0
      Compiling pin-project-lite v0.2.13
      Compiling aho-corasick v1.1.2
      Compiling tracing-core v0.1.32
      Compiling num-bigint v0.2.6
      Compiling rand v0.8.5
      Compiling byte-tools v0.3.1
      Compiling rustc-hex v2.1.0
      Compiling sp-std v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling regex-syntax v0.8.2
      Compiling digest v0.9.0
      Compiling arrayref v0.3.7
      Compiling block-padding v0.1.5
      Compiling serde_derive v1.0.196
      Compiling rand_core v0.5.1
      Compiling zeroize_derive v1.4.2
      Compiling slab v0.4.9
      Compiling rand_chacha v0.2.2
      Compiling rand_pcg v0.2.1
      Compiling rand v0.7.3
      Compiling lock_api v0.4.11
      Compiling num-rational v0.2.4
      Compiling zeroize v1.3.0
      Compiling regex-syntax v0.6.29
      Compiling log v0.4.20
      Compiling serde_json v1.0.113
      Compiling hex v0.4.3
      Compiling parking_lot_core v0.8.6
      Compiling regex-automata v0.4.5
      Compiling core-foundation-sys v0.8.6
      Compiling ref-cast v1.0.22
      Compiling iana-time-zone v0.1.59
      Compiling uint v0.9.5
      Compiling regex-automata v0.1.10
      Compiling impl-trait-for-tuples v0.2.2
      Compiling parity-scale-codec-derive v2.3.1
      Compiling regex v1.10.3
      Compiling sp-debug-derive v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling block-buffer v0.7.3
      Compiling ref-cast-impl v1.0.22
      Compiling block-buffer v0.9.0
      Compiling fixed-hash v0.7.0
      Compiling instant v0.1.12
      Compiling parity-wasm v0.41.0
      Compiling unicode-xid v0.2.4
      Compiling futures-sink v0.3.30
      Compiling lazy_static v1.4.0
      Compiling subtle v1.0.0
      Compiling scopeguard v1.2.0
      Compiling fake-simd v0.1.2
      Compiling opaque-debug v0.2.3
      Compiling ryu v1.0.16
      Compiling opaque-debug v0.3.0
      Compiling futures-core v0.3.30
      Compiling itoa v1.0.10
      Compiling futures-channel v0.3.30
      Compiling sharded-slab v0.1.7
      Compiling sha2 v0.9.9
      Compiling sha2 v0.8.2
      Compiling wasmi-validation v0.3.0
      Compiling toml v0.5.11
      Compiling parity-scale-codec v2.3.1
      Compiling impl-serde v0.3.2
      Compiling tracing-serde v0.1.3
      Compiling crypto-mac v0.7.0
      Compiling Inflector v0.11.4
      Compiling synstructure v0.12.6
      Compiling proc-macro-crate v0.1.5
      Compiling matchers v0.0.1
      Compiling chrono v0.4.33
      Compiling tracing-log v0.1.4
      Compiling futures-macro v0.3.30
      Compiling crypto-mac v0.11.1
      Compiling crypto-mac v0.8.0
      Compiling tracing v0.1.40
      Compiling keccak v0.1.5
      Compiling thread_local v1.1.7
      Compiling parity-util-mem v0.9.0
      Compiling arrayvec v0.4.12
      Compiling thiserror v1.0.56
      Compiling pin-utils v0.1.0
      Compiling tinyvec_macros v0.1.1
      Compiling impl-codec v0.5.1
      Compiling zkstd v0.0.11
      Compiling memory_units v0.3.0
      Compiling primitive-types v0.9.1
      Compiling anyhow v1.0.79
      Compiling ahash v0.4.8
      Compiling ansi_term v0.12.1
      Compiling futures-io v0.3.30
      Compiling futures-task v0.3.30
      Compiling constant_time_eq v0.3.0
      Compiling hash-db v0.15.2
      Compiling blake2b_simd v1.0.2
      Compiling tracing-subscriber v0.2.25
      Compiling futures-util v0.3.30
      Compiling hashbrown v0.9.1
      Compiling bls-12-381 v0.0.11
      Compiling wasmi v0.6.2
      Compiling tinyvec v1.6.0
      Compiling sp-storage v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling merlin v2.0.1
      Compiling parity-util-mem-derive v0.1.0
      Compiling parking_lot v0.11.2
      Compiling hmac v0.7.1
      Compiling curve25519-dalek v2.1.3
      Compiling thiserror-impl v1.0.56
      Compiling num_cpus v1.16.0
      Compiling signature v1.6.4
      Compiling environmental v1.1.4
      Compiling arrayvec v0.5.2
      Compiling tiny-keccak v2.0.2
      Compiling nodrop v0.1.14
      Compiling schnorrkel v0.9.1
      Compiling futures-executor v0.3.30
      Compiling sp-externalities v0.9.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling ed25519 v1.5.3
      Compiling hmac-drbg v0.2.0
      Compiling unicode-normalization v0.1.22
      Compiling sp-wasm-interface v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling sp-tracing v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling jub-jub v0.0.12
      Compiling pbkdf2 v0.4.0
      Compiling hmac v0.8.1
      Compiling hmac v0.11.0
      Compiling pbkdf2 v0.8.0
      Compiling sp-runtime-interface-proc-macro v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling dyn-clonable-impl v0.9.0
      Compiling curve25519-dalek v3.2.1
      Compiling rustc-hash v1.1.0
      Compiling constant_time_eq v0.1.5
      Compiling dyn-clone v1.0.16
      Compiling blake2-rfc v0.2.18
      Compiling dyn-clonable v0.9.0
      Compiling tiny-bip39 v0.8.2
      Compiling ed25519-dalek v1.0.1
      Compiling substrate-bip39 v0.4.5
      Compiling red-jubjub v0.0.16
      Compiling libsecp256k1 v0.3.5
      Compiling futures v0.3.30
      Compiling secrecy v0.7.0
      Compiling hash256-std-hasher v0.15.2
      Compiling twox-hash v1.6.3
      Compiling rand_xorshift v0.3.0
      Compiling ahash v0.7.7
      Compiling base58 v0.1.0
      Compiling cc v1.0.83
      Compiling adler v1.0.2
      Compiling gimli v0.28.1
      Compiling miniz_oxide v0.7.1
      Compiling sp-runtime-interface v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling object v0.32.2
      Compiling rustc-demangle v0.1.23
      Compiling backtrace v0.3.69
      Compiling async-trait v0.1.77
      Compiling hashbrown v0.11.2
      Compiling memory-db v0.26.0
      Compiling trie-root v0.16.0
      Compiling trie-db v0.22.6
      Compiling num-bigint v0.3.3
      Compiling convert_case v0.4.0
      Compiling sp-core v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling addr2line v0.21.0
      Compiling derive_more v0.99.17
      Compiling radium v0.7.0
      Compiling integer-sqrt v0.1.5
      Compiling wyz v0.5.1
      Compiling sp-trie v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling funty v2.0.0
      Compiling sp-panic-handler v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling sp-state-machine v0.9.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling sp-arithmetic v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling either v1.9.0
      Compiling zkstd v0.0.22 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling num-bigint v0.4.4
      Compiling frame-metadata v13.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling bitvec v1.0.1
      Compiling frame-support-procedural-tools v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling sp-keystore v0.9.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling addchain v0.2.0
      Compiling sp-inherents v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling ff_derive v0.13.0
      Compiling bitflags v1.3.2
      Compiling fullcodec_rand_xorshift v0.2.0
      Compiling frame-support-procedural v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling ff v0.13.0
      Compiling sp-io v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling bn-254 v0.0.1 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling sp-application-crypto v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling grumpkin v0.0.1 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling zkgroth16 v0.0.1 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling sp-runtime v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling zknova v0.0.1 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling sp-staking v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling sp-version v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling frame-support v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling frame-system v3.0.0 (https://github.com/KogarashiNetwork/zksubstrate?branch=v3.0.0#95f493c4)
      Compiling pallet-nova v0.1.0 (https://github.com/KogarashiNetwork/Kogarashi?branch=master#32aec185)
      Compiling zk-storage v3.0.0 (/Users/xxx/repos/Kogarashi/sample)
        Finished release [optimized] target(s) in 4m 03s
        Running unittests src/lib.rs (target/release/deps/zk_storage-a20d7b9656a84f7b)

    running 3 tests
    test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::default_sum_zero ... ok
    test tests::sums_thing_one ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 51.99s

      Doc-tests zk-storage

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>
