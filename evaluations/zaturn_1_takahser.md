# Evaluation

- **Status:** Accepted
- **Application Document:** (private application)
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/Acurast/acurast-substrate/tree/7eed45b5a9b90d32a76e1702501bd00570177417) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [repo](https://github.com/Acurast/acurast-docs/tree/78c344025e78b67840651ef87c3ab2a4b0238f45), [deployed docs](https://docs.acurast.com/) | Inline comments are quite brief in some cases, but overall sufficient and helpful. The deployed docs are quite extensive. |
| 0c. | Tests | <ul><li>[x] </li></ul> | [test instructions](https://github.com/Acurast/acurast-core/tree/705d0b85c0c75d664f415052d70df7eed98ba95b#build--tests) | See [tests feedback](#tests-feedback) |
| 0d. | Docker Container | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Acurast/acurast-core/blob/705d0b85c0c75d664f415052d70df7eed98ba95b/Dockerfile) | See [docker feedback](#docker-feedback) |
| 1. | Substrate module: p256r1 crypto | <ul><li>[x] </li></ul> | [p256-crypto](https://github.com/Acurast/acurast-core/tree/705d0b85c0c75d664f415052d70df7eed98ba95b/p256-crypto) | Substrate module enabling p256r1 cryptography |
| 2. | Substrate module: Google Key Attestation Validator | <ul><li>[x] </li></ul> | [accurast pallet](https://github.com/Acurast/acurast-core/blob/705d0b85c0c75d664f415052d70df7eed98ba95b/pallets/acurast/src/lib.rs) | Validatable Key Attestations produced by the Google PKI |
| 3. | Substrate chain | <ul><li>[x] </li></ul> | [acurast substrate chain repo](https://github.com/Acurast/acurast-substrate/tree/7eed45b5a9b90d32a76e1702501bd00570177417) | Substrate chain that is able to validate messages signed by the HSM included on the device. Furthermore, the parachain can validate a Google Key Attestation. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Tests Feedback

- test pass:

    ```bash
    acurast-core$ cargo test
        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate`
        Updating git repository `https://github.com/paritytech/cumulus`
        Updating git repository `https://github.com/Acurast/elliptic-curves`
        Updating git repository `https://github.com/paritytech/polkadot`
    Downloaded crossbeam-epoch v0.9.13
    (...)
    Compiling polkadot-runtime-parachains v0.9.36 (https://github.com/paritytech/polkadot?branch=release-v0.9.36#dc25abc7)
    Compiling pallet-acurast-proxy v0.1.0 (/home/seraya/repos/acurast-core/pallets/proxy)
    Compiling xcm-simulator v0.9.36 (https://github.com/paritytech/polkadot?branch=release-v0.9.36#dc25abc7)
        Finished test [unoptimized + debuginfo] target(s) in 1m 15s
        Running unittests src/lib.rs (target/debug/deps/acurast_common-7a725d04f4b6cd79)

    running 25 tests
    test tests::test_schedule_execution_count_delay_fit ... ok
    test tests::test_schedule_execution_count_delay_last_not_fitting ... ok
    test tests::test_schedule_execution_count_delay_reaching_over_end ... ok
    test tests::test_schedule_execution_count_fit ... ok
    test tests::test_schedule_execution_count_last_not_fitting ... ok
    test tests::test_schedule_execution_count_one_fit ... ok
    test tests::test_schedule_execution_count_start_time_indifferent ... ok
    test attestation::tests::test_validate_pixel_untrusted_root_chain ... ok
    test tests::test_schedule_execution_count_tight ... ok
    test tests::test_schedule_execution_count_zero_fits ... ok
    test tests::test_schedule_iter_delay_fit ... ok
    test tests::test_schedule_iter_delay_fit_2 ... ok
    test tests::test_schedule_iter_delay_last_not_fitting ... ok
    test tests::test_schedule_iter_fit ... ok
    test tests::test_schedule_iter_delay_reaching_over_end ... ok
    test tests::test_schedule_iter_last_not_fitting ... ok
    test tests::test_schedule_iter_one_fit ... ok
    test tests::test_schedule_iter_tight ... ok
    test tests::test_schedule_iter_zero_fits ... ok
    test tests::test_schedule_overlaps_fit ... ok
    test tests::test_schedule_overlaps_start_time ... ok
    test tests::test_schedule_overlaps_tight ... ok
    test attestation::tests::test_validate_pixel_chain ... ok
    test attestation::tests::test_validate_pixel_invalid_signature_chain ... ok
    test attestation::tests::test_validate_samsung_chain ... ok

    test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

        Running unittests src/lib.rs (target/debug/deps/acurast_p256_crypto-6c43cc4240d0e7c0)

    running 6 tests
    test core::test::seed_and_derive_should_work ... ok
    test core::test::test_vector_should_work ... ok
    test core::test::test_vector_by_string_should_work ... ok
    test core::test::generate_account_id ... ok
    test core::test::test_account ... ok
    test core::test::default_phrase_should_be_used ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s

        Running unittests src/lib.rs (target/debug/deps/ecdsa_vendored-d566d9d9f246c5e1)

    running 7 tests
    test der::tests::test_asn1_too_short_signature ... ok
    test der::tests::test_asn1_non_der_signature ... ok
    test recovery::tests::is_x_reduced ... ok
    test der::tests::test_fixed_to_asn1_signature_roundtrip ... ok
    test recovery::tests::new ... ok
    test recovery::tests::try_from ... ok
    test recovery::tests::is_y_odd ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/lib.rs (target/debug/deps/lib-a1153a58afe3762f)

    running 1 test
    test rejects_all_zero_signature ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/elliptic_curve_vendored-2f1fe78a6edfeb6a)

    running 4 tests
    test dev::tests::round_trip ... ok
    test public_key::tests::from_encoded_point_rejects_identity ... ok
    test scalar::nonzero::tests::zeroize ... ok
    test scalar::nonzero::tests::round_trip ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/pkcs8.rs (target/debug/deps/pkcs8-9178bc809bebcf92)

    running 3 tests
    test decode_pkcs8_public_key_from_der ... ok
    test decode_pkcs8_private_key_from_der ... ok
    test decode_pkcs8_public_key_from_pem ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/secret_key.rs (target/debug/deps/secret_key-9968980676d26bb8)

    running 1 test
    test undersize_secret_key ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/p384_vendored-cc23d65f2e9e5cbe)

    running 26 tests
    test arithmetic::affine::tests::affine_negation ... ok
    test arithmetic::affine::tests::identity_encoding ... ok
    test arithmetic::affine::tests::uncompressed_round_trip ... ok
    test arithmetic::affine::tests::uncompressed_to_compressed ... ok
    test arithmetic::scalar::tests::from_to_bytes_roundtrip ... ok
    test arithmetic::scalar::tests::multiply ... ok
    test ecdsa::tests::signing_secret_key_equivalent ... ok
    test arithmetic::field::tests::sqrt ... ok
    test arithmetic::affine::tests::compressed_to_uncompressed ... ok
    test arithmetic::affine::tests::compressed_round_trip ... ok
    test arithmetic::projective::tests::test_vector_add_mixed_identity ... ok
    test arithmetic::projective::tests::projective_add_vs_double ... ok
    test arithmetic::scalar::tests::invert ... ok
    test arithmetic::projective::tests::projective_double_and_sub ... ok
    test arithmetic::projective::tests::test_vector_double_generator ... ok
    test arithmetic::field::tests::invert ... ok
    test arithmetic::projective::tests::projective_add_and_sub ... ok
    test arithmetic::projective::tests::projective_identity_addition ... ok
    test arithmetic::projective::tests::affine_to_projective ... ok
    test arithmetic::scalar::tests::sqrt ... ok
    test arithmetic::projective::tests::test_vector_repeated_add ... ok
    test arithmetic::projective::tests::test_vector_repeated_add_mixed ... ok
    test ecdsa::tests::sign::ecdsa_signing ... ok
    test ecdsa::tests::verify::ecdsa_verify_success ... ok
    test ecdsa::tests::verify::ecdsa_verify_invalid_s ... ok
    test arithmetic::projective::tests::test_vector_scalar_mult ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.71s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast-96a765ec3f05d537)

    running 14 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_registration_failure_1 ... ok
    test tests::test_update_allowed_sources_failure ... ok
    test tests::test_job_registration ... ok
    test tests::test_job_registration_failure_2 ... ok
    test tests::test_job_registration_failure_3 ... ok
    test tests::test_update_revocation_list ... ok
    test tests::test_update_allowed_sources ... ok
    test tests::test_submit_attestation_failure_3 ... ok
    test tests::test_update_revocation_list_submit_attestation ... ok
    test tests::test_submit_attestation_failure_2 ... ok
    test tests::test_submit_attestation_failure_1 ... ok
    test tests::test_submit_attestation ... ok
    test tests::test_update_revocation_list_assign_job ... ok

    test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fee_manager-fca71f6055a133f4)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::update_fee_percentage ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fulfillment_receiver-b5ef550b8e224e44)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_fulfillment_reject ... ok
    test tests::test_job_fulfillment ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_marketplace-5bee82ab00941390)

    running 4 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_no_match_schedule_overlap ... ok
    test tests::test_more_reports_than_expected ... ok
    test tests::test_match ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_proxy-f3f9865c2d187e23)

    running 13 tests
    test mock::proxy_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::acurast_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::network_tests::dmp ... ok
    test tests::network_tests::reserve_transfer ... ok
    test tests::proxy_calls::advertise ... ok
    test tests::network_tests::withdraw_and_deposit ... ok
    test tests::network_tests::xcmp ... ok
    test tests::network_tests::ump ... ok
    test tests::network_tests::query_holding ... ok
    test tests::proxy_calls::register ... ok
    test tests::proxy_calls::deregister ... ok
    test tests::proxy_calls::update_allowed_sources ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_receiver-7878a7c786f3cce1)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_fulfill ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_sender-0a31693f7e8f2365)

    running 4 tests
    test mock::runtime::receiver_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::sender_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::proxy_calls::fulfill ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/signature_derive-a261dda52a50e831)

    running 2 tests
    test tests::verifier ... ok
    test tests::signer ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/signature_vendored-a0362f6c1287123c)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/signature_derive.rs (target/debug/deps/signature_derive-fa2eb1568a64596e)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests acurast-common

    running 1 test
    test src/types.rs - types::Schedule (line 92) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests acurast-p256-crypto

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests ecdsa_vendored

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests elliptic-curve-vendored

    running 1 test
    test src/ecdh.rs - ecdh::diffie_hellman (line 54) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests p384_vendored

    running 1 test
    test src/ecdh.rs - ecdh (line 11) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.27s

    Doc-tests pallet-acurast

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-fee-manager

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-fulfillment-receiver

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-marketplace

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-proxy

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-xcm-receiver

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-xcm-sender

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests signature_derive

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests signature_vendored

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

# Docker Feedback

- docker container can be built and runs tests seamlessly:

    ```bash
    $ docker build -t acurast-core .
    $ docker run acurast-core test

    (...)

    running 25 tests
    test tests::test_schedule_execution_count_delay_fit ... ok
    test tests::test_schedule_execution_count_delay_reaching_over_end ... ok
    test tests::test_schedule_execution_count_delay_last_not_fitting ... ok
    test tests::test_schedule_execution_count_fit ... ok
    test attestation::tests::test_validate_pixel_untrusted_root_chain ... ok
    test tests::test_schedule_execution_count_last_not_fitting ... ok
    test tests::test_schedule_execution_count_one_fit ... ok
    test tests::test_schedule_execution_count_start_time_indifferent ... ok
    test tests::test_schedule_execution_count_tight ... ok
    test tests::test_schedule_execution_count_zero_fits ... ok
    test tests::test_schedule_iter_delay_fit ... ok
    test tests::test_schedule_iter_delay_fit_2 ... ok
    test tests::test_schedule_iter_delay_last_not_fitting ... ok
    test tests::test_schedule_iter_delay_reaching_over_end ... ok
    test tests::test_schedule_iter_fit ... ok
    test tests::test_schedule_iter_last_not_fitting ... ok
    test tests::test_schedule_iter_one_fit ... ok
    test tests::test_schedule_iter_tight ... ok
    test tests::test_schedule_iter_zero_fits ... ok
    test tests::test_schedule_overlaps_fit ... ok
    test tests::test_schedule_overlaps_tight ... ok
    test tests::test_schedule_overlaps_start_time ... ok
    test attestation::tests::test_validate_pixel_chain ... ok
    test attestation::tests::test_validate_pixel_invalid_signature_chain ... ok
    test attestation::tests::test_validate_samsung_chain ... ok

    test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s

        Running unittests src/lib.rs (target/debug/deps/acurast_p256_crypto-31ace85e57f00fd8)

    running 6 tests
    test core::test::seed_and_derive_should_work ... ok
    test core::test::test_vector_should_work ... ok
    test core::test::test_vector_by_string_should_work ... ok
    test core::test::generate_account_id ... ok
    test core::test::test_account ... ok
    test core::test::default_phrase_should_be_used ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s

        Running unittests src/lib.rs (target/debug/deps/ecdsa_vendored-cadb00e6d7c9d0d6)

    running 7 tests
    test der::tests::test_asn1_too_short_signature ... ok
    test recovery::tests::is_x_reduced ... ok
    test recovery::tests::is_y_odd ... ok
    test der::tests::test_asn1_non_der_signature ... ok
    test recovery::tests::new ... ok
    test recovery::tests::try_from ... ok
    test der::tests::test_fixed_to_asn1_signature_roundtrip ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/lib.rs (target/debug/deps/lib-ed4112b7b8fce194)

    running 1 test
    test rejects_all_zero_signature ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/elliptic_curve_vendored-9518e01704d24a8d)

    running 4 tests
    test dev::tests::round_trip ... ok
    test public_key::tests::from_encoded_point_rejects_identity ... ok
    test scalar::nonzero::tests::round_trip ... ok
    test scalar::nonzero::tests::zeroize ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/pkcs8.rs (target/debug/deps/pkcs8-6156019cac5ec447)

    running 3 tests
    test decode_pkcs8_public_key_from_der ... ok
    test decode_pkcs8_public_key_from_pem ... ok
    test decode_pkcs8_private_key_from_der ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/secret_key.rs (target/debug/deps/secret_key-c4389cb8e0d457be)

    running 1 test
    test undersize_secret_key ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/p384_vendored-94c51046eaefd7fe)

    running 26 tests
    test arithmetic::affine::tests::affine_negation ... ok
    test arithmetic::affine::tests::uncompressed_round_trip ... ok
    test arithmetic::affine::tests::identity_encoding ... ok
    test arithmetic::affine::tests::uncompressed_to_compressed ... ok
    test arithmetic::scalar::tests::multiply ... ok
    test arithmetic::affine::tests::compressed_round_trip ... ok
    test arithmetic::affine::tests::compressed_to_uncompressed ... ok
    test ecdsa::tests::signing_secret_key_equivalent ... ok
    test arithmetic::field::tests::sqrt ... ok
    test arithmetic::scalar::tests::from_to_bytes_roundtrip ... ok
    test arithmetic::projective::tests::projective_add_vs_double ... ok
    test arithmetic::projective::tests::projective_double_and_sub ... ok
    test arithmetic::projective::tests::test_vector_add_mixed_identity ... ok
    test arithmetic::projective::tests::test_vector_double_generator ... ok
    test arithmetic::scalar::tests::invert ... ok
    test arithmetic::field::tests::invert ... ok
    test arithmetic::projective::tests::projective_add_and_sub ... ok
    test arithmetic::projective::tests::projective_identity_addition ... ok
    test arithmetic::projective::tests::affine_to_projective ... ok
    test arithmetic::scalar::tests::sqrt ... ok
    test arithmetic::projective::tests::test_vector_repeated_add ... ok
    test arithmetic::projective::tests::test_vector_repeated_add_mixed ... ok
    test ecdsa::tests::sign::ecdsa_signing ... ok
    test ecdsa::tests::verify::ecdsa_verify_invalid_s ... ok
    test ecdsa::tests::verify::ecdsa_verify_success ... ok
    test arithmetic::projective::tests::test_vector_scalar_mult ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.07s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast-3e92032414006575)

    running 14 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_registration_failure_2 ... ok
    test tests::test_job_registration_failure_1 ... ok
    test tests::test_job_registration_failure_3 ... ok
    test tests::test_update_revocation_list ... ok
    test tests::test_job_registration ... ok
    test tests::test_update_allowed_sources ... ok
    test tests::test_update_allowed_sources_failure ... ok
    test tests::test_submit_attestation_failure_1 ... ok
    test tests::test_submit_attestation_failure_2 ... ok
    test tests::test_submit_attestation_failure_3 ... ok
    test tests::test_update_revocation_list_submit_attestation ... ok
    test tests::test_update_revocation_list_assign_job ... ok
    test tests::test_submit_attestation ... ok

    test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fee_manager-17a1b7696e5854ad)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::update_fee_percentage ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fulfillment_receiver-b8b259f5cdd54a33)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_fulfillment ... ok
    test tests::test_job_fulfillment_reject ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_marketplace-4e854aec77439ead)

    running 4 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_no_match_schedule_overlap ... ok
    test tests::test_more_reports_than_expected ... ok
    test tests::test_match ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_proxy-362f85da7de0c0d1)

    running 13 tests
    test mock::proxy_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::acurast_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::network_tests::dmp ... ok
    test tests::network_tests::ump ... ok
    test tests::network_tests::query_holding ... ok
    test tests::network_tests::withdraw_and_deposit ... ok
    test tests::network_tests::xcmp ... ok
    test tests::network_tests::reserve_transfer ... ok
    test tests::proxy_calls::register ... ok
    test tests::proxy_calls::advertise ... ok
    test tests::proxy_calls::update_allowed_sources ... ok
    test tests::proxy_calls::deregister ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_receiver-c8cbe873063e43b1)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_fulfill ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_sender-cee53298b1f575f9)

    running 4 tests
    test mock::runtime::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::sender_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::receiver_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::proxy_calls::fulfill ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/signature_derive-290a4587fca313ff)

    running 2 tests
    test tests::signer ... ok
    test tests::verifier ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/signature_vendored-7b4de7e337b5ac85)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/signature_derive.rs (target/debug/deps/signature_derive-9a4e92d46a53fc43)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests acurast-common

    running 1 test
    test src/types.rs - types::Schedule (line 92) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests acurast-p256-crypto

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests ecdsa_vendored

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests elliptic-curve-vendored

    running 1 test
    test src/ecdh.rs - ecdh::diffie_hellman (line 54) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests p384_vendored

    running 1 test
    test src/ecdh.rs - ecdh (line 11) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.32s

    Doc-tests pallet-acurast

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-fee-manager

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-fulfillment-receiver

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-marketplace

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-proxy

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-xcm-receiver

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests pallet-acurast-xcm-sender

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests signature_derive

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests signature_vendored

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```