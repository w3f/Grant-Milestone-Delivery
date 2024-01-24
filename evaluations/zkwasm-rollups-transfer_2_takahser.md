# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/KogarashiNetwork/Kogarashi/blob/6cfe4cdc1d2cc232b18e04899e78d81840c65e09/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Tutorial](https://kogarashinetwork.github.io/tutorial/nova_pallet/) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Test instructions](https://github.com/KogarashiNetwork/Kogarashi/tree/master/pallet/nova#test) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/KogarashiNetwork/Kogarashi/blob/master/Dockerfile) | I know it's just a simple Dockerfile that runs tests, but please add instructions on how to test it. Also, it'd have been nice to have a docker setup that allows to spin up a node which uses your nova pallet. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Tutorial](https://kogarashinetwork.github.io/tutorial/nova_pallet/) | - |
| 1. | `bn254/grumpkin` implementation | <ul><li>[ ] </li></ul> | (will be reviewed once 0b., 0d. are fixed) | SPEC: We are going to implement fully Polkadot compatible `bn254/grumpkin` curve for efficient verifier encoder by [cycle of curves](https://eprint.iacr.org/2023/969.pdf).|
| 2. | `groth16` implementation | <ul><li>[ ] </li></ul> | (will be reviewed once 0b., 0d. are fixed) | SPEC: We are going to implement fully Polkadot compatible `groth16` for recursive Snarks verifier circuit.|
| 3. | `recursive proof` implementation | <ul><li>[ ] </li></ul> | (will be reviewed once 0b., 0d. are fixed) | SPEC: We are going to implement `recursive proof` with Nova folding scheme. `recursive proof` allows us to compress multiple statements to prove.|
| 4. | `Nova pallet` implementation | <ul><li>[ ] </li></ul> | (will be reviewed once 0b., 0d. are fixed) | SPEC: We are going to implement `Nova folding pallet`. `Nova folding pallet` allows us to verify Nova recursive proof which proves multiple statements with a single proof.|


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- [ ] The tutorial is currently difficult to follow. There are a couple of inconsistencies:
  - [ ] in step 3 you mention that the tutorial is based on the [sum-storage](https://github.com/JoshOrndorff/recipes/blob/master/pallets/sum-storage/src/main.rs) pallet; I think it'd be better to mention it at the very beginning
  - [ ] in step 4 you mention `TestRuntime` and show the code found in `recipes/pallets/sum-storage/src/tests.rs` in the 1st code snippet, however, you print a different path: `runtime/src/main.rs`
  - [ ] still in step 4, in the 2nd code snippet you print the same path again
  - [ ] in step 5 you mention the `/src/main.rs` which doesn't exist neither within the `sum-storage` pallet nor the `recipes` repo
  - [ ] similarly, in step 2 you mention the `/src/main.rs` which doesn't exist neither within the `sum-storage` pallet nor the `recipes` repo

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
