# Evaluation

- **Status:** Accepted
- **Application Document:** (private application)
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [acurast-docs (MIT)](https://github.com/Acurast/acurast-docs/blob/8b73070d5235fc98e3efa8ff539c3b21720e60f3/LICENSE.md), [acurast-core (MIT)](https://github.com/Acurast/acurast-core/blob/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/LICENSE.md), [acurast-substrate (Unlincense)](https://github.com/Acurast/acurast-substrate/blob/7eed45b5a9b90d32a76e1702501bd00570177417/LICENSE), [acurast-processor (GPLv3)](https://github.com/Acurast/acurast-processor/blob/28d0b7aeb57e1e0963d50520c598b425ea30e607/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docusaurus docs](https://github.com/Acurast/acurast-docs) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Tests | <ul><li>[x] </li></ul> | [testing instructions](https://github.com/Acurast/acurast-core/tree/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444#build--tests) | See [Testing Feedback](#testing-feedback) |
| 0d. | Docker Container | <ul><li>[x] </li></ul> | [devcontainer](https://github.com/Acurast/acurast-core/tree/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/.devcontainer) | See [Docker Container Feedback](#docker-container-feedback) |
| 1. | Deployment of testnet | <ul><li>[x] </li></ul> | https://polkadot.js.org/apps/?rpc=wss://wss.collator-1.acurast.papers.tech#/explorer | - |
| 2. | Job Scheduler Module | <ul><li>[x] </li></ul> | [marketplace pallet](https://github.com/Acurast/acurast-core/tree/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/pallets/marketplace) | - |
| 3. | Consumable Attested Data Module | <ul><li>[x] </li></ul> | [fullfilment receiver pallet](https://github.com/Acurast/acurast-core/tree/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/pallets/acurast-fulfillment-receiver) | - |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

As this milestone involves work in multiple repositories, I'm going to provide my feedback seperately for each of them.

- [x] [acurast-processor repo](https://github.com/Acurast/acurast-processor): See M2 evaluation
- [x] [acurast-docs](https://github.com/Acurast/acurast-docs)
- [x] [acurast-substrate](https://github.com/Acurast/acurast-substrate/tree/develop): ~~There are a lot of functions that have no explanatory inline comments, for example [here](https://github.com/Acurast/acurast-substrate/blob/7eed45b5a9b90d32a76e1702501bd00570177417/runtime/src/lib.rs#L343-L1009), [here](https://github.com/Acurast/acurast-substrate/blob/7eed45b5a9b90d32a76e1702501bd00570177417/runtime/src/xcm_adapters.rs#L33-L99), [here](https://github.com/Acurast/acurast-substrate/blob/7eed45b5a9b90d32a76e1702501bd00570177417/node/src/chain_spec.rs#L316-L327) or [here](https://github.com/Acurast/acurast-substrate/blob/7eed45b5a9b90d32a76e1702501bd00570177417/node/src/command.rs#L316-L450)~~ -> inline comments have been added
- [x] ~~[acurast-core](https://github.com/Acurast/acurast-core): similarly to the acurast-substrate repo, I think more inline comments would make the code easier to understand for other devs. For some examples, see [here](https://github.com/Acurast/acurast-core/blob/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/pallets/acurast/src/lib.rs#L294-L317) or [here](https://github.com/Acurast/acurast-core/blob/130e3abfbb6a1c4ef85c595e72c5ff00f6c7d444/pallets/acurast/p384/ecdsa/src/lib.rs#L233-L404). Please note that this is not a complete list.~~ -> inline comments have been added

### Testing Feedback

- Tests pass:

    ```bash
    % cargo test

        Finished test [unoptimized + debuginfo] target(s) in 0.87s
        Running unittests src/lib.rs (target/debug/deps/acurast_common-e335d3a7c95f8a55)

    running 25 tests
    test tests::test_schedule_execution_count_delay_reaching_over_end ... ok
    test tests::test_schedule_execution_count_delay_last_not_fitting ... ok
    test tests::test_schedule_execution_count_delay_fit ... ok
    test tests::test_schedule_execution_count_fit ... ok
    test tests::test_schedule_execution_count_one_fit ... ok
    test tests::test_schedule_execution_count_last_not_fitting ... ok
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
    test attestation::tests::test_validate_pixel_untrusted_root_chain ... ok
    test tests::test_schedule_iter_tight ... ok
    test tests::test_schedule_iter_zero_fits ... ok
    test tests::test_schedule_overlaps_fit ... ok
    test tests::test_schedule_overlaps_start_time ... ok
    test tests::test_schedule_overlaps_tight ... ok
    test attestation::tests::test_validate_pixel_invalid_signature_chain ... ok
    test attestation::tests::test_validate_pixel_chain ... ok
    test attestation::tests::test_validate_samsung_chain ... ok

    test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

        Running unittests src/lib.rs (target/debug/deps/acurast_p256_crypto-b0a10cd5c1f0ea49)

    running 6 tests
    test core::test::seed_and_derive_should_work ... ok
    test core::test::test_vector_should_work ... ok
    test core::test::test_vector_by_string_should_work ... ok
    test core::test::generate_account_id ... ok
    test core::test::test_account ... ok
    test core::test::default_phrase_should_be_used ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.12s

        Running unittests src/lib.rs (target/debug/deps/ecdsa_vendored-fddd688c04dcfeea)

    running 7 tests
    test recovery::tests::is_x_reduced ... ok
    test recovery::tests::new ... ok
    test der::tests::test_asn1_too_short_signature ... ok
    test recovery::tests::is_y_odd ... ok
    test recovery::tests::try_from ... ok
    test der::tests::test_asn1_non_der_signature ... ok
    test der::tests::test_fixed_to_asn1_signature_roundtrip ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/lib.rs (target/debug/deps/lib-1b84e783ee96cef2)

    running 1 test
    test rejects_all_zero_signature ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/elliptic_curve_vendored-8fd8d99c18a48159)

    running 4 tests
    test public_key::tests::from_encoded_point_rejects_identity ... ok
    test scalar::nonzero::tests::round_trip ... ok
    test dev::tests::round_trip ... ok
    test scalar::nonzero::tests::zeroize ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/pkcs8.rs (target/debug/deps/pkcs8-97f278a92baa6eb5)

    running 3 tests
    test decode_pkcs8_public_key_from_pem ... ok
    test decode_pkcs8_public_key_from_der ... ok
    test decode_pkcs8_private_key_from_der ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/secret_key.rs (target/debug/deps/secret_key-fdd2bdcc9d1c8eee)

    running 1 test
    test undersize_secret_key ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/p384_vendored-c4b7aaff6f63a197)

    running 26 tests
    test arithmetic::affine::tests::affine_negation ... ok
    test arithmetic::affine::tests::uncompressed_round_trip ... ok
    test arithmetic::affine::tests::identity_encoding ... ok
    test arithmetic::affine::tests::uncompressed_to_compressed ... ok
    test arithmetic::affine::tests::compressed_round_trip ... ok
    test arithmetic::field::tests::sqrt ... ok
    test arithmetic::projective::tests::projective_add_vs_double ... ok
    test arithmetic::projective::tests::projective_double_and_sub ... ok
    test arithmetic::field::tests::invert ... ok
    test arithmetic::projective::tests::test_vector_add_mixed_identity ... ok
    test arithmetic::projective::tests::test_vector_double_generator ... ok
    test arithmetic::projective::tests::projective_identity_addition ... ok
    test arithmetic::affine::tests::compressed_to_uncompressed ... ok
    test arithmetic::scalar::tests::from_to_bytes_roundtrip ... ok
    test arithmetic::projective::tests::projective_add_and_sub ... ok
    test arithmetic::projective::tests::affine_to_projective ... ok
    test arithmetic::scalar::tests::invert ... ok
    test arithmetic::scalar::tests::multiply ... ok
    test ecdsa::tests::signing_secret_key_equivalent ... ok
    test arithmetic::scalar::tests::sqrt ... ok
    test arithmetic::projective::tests::test_vector_repeated_add_mixed ... ok
    test arithmetic::projective::tests::test_vector_repeated_add ... ok
    test ecdsa::tests::sign::ecdsa_signing ... ok
    test ecdsa::tests::verify::ecdsa_verify_invalid_s ... ok
    test ecdsa::tests::verify::ecdsa_verify_success ... ok
    test arithmetic::projective::tests::test_vector_scalar_mult ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.91s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast-02743f8efb78bb58)

    running 14 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_registration_failure_1 ... ok
    test tests::test_job_registration_failure_2 ... ok
    test tests::test_update_allowed_sources_failure ... ok
    test tests::test_job_registration_failure_3 ... ok
    test tests::test_job_registration ... ok
    test tests::test_update_allowed_sources ... ok
    test tests::test_update_revocation_list ... ok
    test tests::test_submit_attestation_failure_1 ... ok
    test tests::test_submit_attestation_failure_3 ... ok
    test tests::test_submit_attestation_failure_2 ... ok
    test tests::test_update_revocation_list_submit_attestation ... ok
    test tests::test_update_revocation_list_assign_job ... ok
    test tests::test_submit_attestation ... ok

    test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fee_manager-8693daf2bd619401)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::update_fee_percentage ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_fulfillment_receiver-6dfb84c9f40b5da1)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_job_fulfillment_reject ... ok
    test tests::test_job_fulfillment ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_marketplace-0a7f566588cfda09)

    running 4 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_no_match_schedule_overlap ... ok
    test tests::test_match ... ok
    test tests::test_more_reports_than_expected ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_proxy-c146984b31b6be9e)

    running 13 tests
    test mock::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::acurast_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::proxy_runtime::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::network_tests::reserve_transfer ... ok
    test tests::network_tests::query_holding ... ok
    test tests::network_tests::ump ... ok
    test tests::proxy_calls::advertise ... ok
    test tests::network_tests::xcmp ... ok
    test tests::network_tests::withdraw_and_deposit ... ok
    test tests::network_tests::dmp ... ok
    test tests::proxy_calls::deregister ... ok
    test tests::proxy_calls::register ... ok
    test tests::proxy_calls::update_allowed_sources ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_receiver-1c0ff0bd37b277bd)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_fulfill ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/pallet_acurast_xcm_sender-c26dff39a41fae13)

    running 4 tests
    test mock::runtime::relay_chain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::sender_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test mock::runtime::receiver_parachain::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::proxy_calls::fulfill ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/signature_derive-9b88a92b705803d8)

    running 2 tests
    test tests::signer ... ok
    test tests::verifier ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/signature_vendored-1f73816a97a2865c)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/signature_derive.rs (target/debug/deps/signature_derive-b3d8a91a1829f2d4)

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

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.50s

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

### Docker Container Feedback

- The developer container is fully functional:

    ```bash
    Running the postCreateCommand from devcontainer.json...

    [76338 ms] Start: Run in container: /bin/sh -c ~/.windows.sh
    Unix host detected, symlinking /mnt/ssh to ~/.ssh
    ln: failed to create symbolic link '/root/.ssh/ssh': File exists
    Done. Press any key to close the terminal.
    ```
