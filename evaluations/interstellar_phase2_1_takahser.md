# Evaluation

- Status: In Progress
- Application Document: https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-network2.md
- Milestone: 1
- Kusama Identity: Address
- Previously successfully merged evaluation: All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |  
| ------ | ----------- | -------- | ---- | ----------------- |
| 0a. | License | <ul><li>[x]</li></ul> | [Apache 2.0](https://github.com/Interstellar-Network/lib-garble-rs/blob/c0d249ba4696d63d26da199e3bf58252baa59c5a/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x]</li></ul> | [deployed docs](https://book.interstellar.gg/2M1.html), [repo](https://github.com/Interstellar-Network/Interstellar-Book/tree/d295059b26cd5e14c9d7c2fec1f55ef8a6fe31cd) | The documentation provides a good tutorial for getting started, however the inline comments are limited in some areas |
| 0c. | Testing and Guide | <ul><li>[ ]</li></ul> | [deployed testing guide](https://book.interstellar.gg/2M1.html#testing-guide), [repo](https://github.com/Interstellar-Network/Interstellar-Book/tree/d295059b26cd5e14c9d7c2fec1f55ef8a6fe31cd) | See [Testing Feedback](#testing-feedback) |  
| 0d. | Docker | <ul><li>[ ]</li></ul> | - | not delivered |
| 1. | Garble Circuit pallet update | <ul><li>[x]</li></ul> | [`lib-garble-rs` repo](https://github.com/Interstellar-Network/lib-garble-rs/tree/c0d249ba4696d63d26da199e3bf58252baa59c5a) | See [General Notes](#general-notes) |

## General Notes

The delivery achieves the goal of 60 fps throughput in many cases, however there are some limitations:

- The in-line documentation is sparse in some areas and could be expanded
- There are currently 99 unresolved TODO comments in the code
- In our testing, the 60 fps goal was not consistently met on all devices and operating system languages (works on tested device with English only)
- The avg fps was above 60 but sometimes dropped below 60 on the test device
- 1 test is currently failing
- clippy is showing a bunch of warnings but I suspect it's due to a downstream dependency

### Testing Feedback

- The tests are currently failing:
    ```bash
    ％ cargo test
    running 44 tests
    test new_garbling_scheme::block::tests::test_projection_one_with_test ... ok
    test new_garbling_scheme::block::tests::test_projection_one_with_one ... ok
    test new_garbling_scheme::block::tests::test_projection_different ... ok
    test new_garbling_scheme::delta::tests::mre_delta_nand_gate ... ignored
    test new_garbling_scheme::block::tests::test_projection_zero_with_one ... ok
    test new_garbling_scheme::block::tests::test_projection_test_with_one ... ok
    test new_garbling_scheme::block::tests::test_projection_one_with_zero ... ok
    test new_garbling_scheme::block::tests::test_projection_test_with_test ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes_2 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes_3 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_same_blocks_different_tweaks_should_return_different_hashes ... ok
    test new_garbling_scheme::garble::tests::test_decoding_info ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_same_blocks_same_tweaks_should_return_same_hashes ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_prime_distribution_1 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_prime_distribution_2 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x0 ... ok
    test new_garbling_scheme::tests::test_basic_buf ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x00 ... ok
    test new_garbling_scheme::tests::test_basic_one ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x01 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x1 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x10 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x11 ... ok
    test serialize_deserialize::tests::test_encoder_has_no_garbler_inputs_display_message_120x52_2digits ... ignored
    test new_garbling_scheme::tests::test_basic_not ... ok
    test serialize_deserialize::tests::test_serialize_deserialize_full_adder_2bits ... ok
    test watermark::tests::test_convert_image_to_garbler_inputs_black_white ... ok
    test watermark::tests::test_convert_image_to_garbler_inputs_grays ... ok
    test new_garbling_scheme::tests::test_basic_zero ... ok
    test new_garbling_scheme::tests::test_garble_adder ... ok
    test watermark::tests::test_draw_text_french ... ok
    test watermark::tests::test_draw_text_one_line_ascii ... ok
    test tests::test_garble_evaluate_full_adder_2bits ... ok
    test watermark::tests::test_draw_text_two_lines_ascii_lf ... ok
    test watermark::tests::test_draw_text_two_lines_ascii_crlf ... ok
    test new_garbling_scheme::tests::test_basic_nand ... ok
    test new_garbling_scheme::tests::test_basic_or ... ok
    test new_garbling_scheme::tests::test_basic_xor ... ok
    test new_garbling_scheme::tests::test_basic_and ... ok
    test new_garbling_scheme::tests::test_basic_nor ... ok
    test new_garbling_scheme::tests::test_basic_xnor ... ok
    test serialize_deserialize::tests::test_serialize_deserialize_display_message_120x52_2digits ... ok
    test serialize_deserialize::tests::test_serialize_golden_display_message_120x52_2digits ... FAILED

    failures:

    ---- serialize_deserialize::tests::test_serialize_golden_display_message_120x52_2digits stdout ----
    thread 'serialize_deserialize::tests::test_serialize_golden_display_message_120x52_2digits' panicked at 'assertion failed: `(left == right)`
    left: `[251, 49, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 1, 129, 1, 130, 1, 131, 1, 132, 1, 133, 1, 134, 1, 135, 1, 136, 1, 137, 1, 138, 1, 139, 1, 140, 1, 141, 1, 142, 1, 143, 1, 144, 1, 145, 1, 146, (...)]`: failed [
        251,
        49,
        (...)
        86,
    ]', lib-garble-rs/src/serialize_deserialize.rs:138:9
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


    failures:
        serialize_deserialize::tests::test_serialize_golden_display_message_120x52_2digits

    test result: FAILED. 41 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 1.18s
    ```

- clippy is currently printing a lot of warnings, but it seems like it has to do with the `teaclave-sgx-sdk` downstream dependency:

    ```bash
    % cargo clippy
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/net2/app`
    warning: skipping duplicate package `PCKIDRetrievalTool` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/dcap-pckretrieval/enclave`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/helloworld/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tr-mpc/tr-mpc-server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/logger/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tcmalloc/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tcmalloc/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/http_req/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/unit-test/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/wasmi/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/prost-protobuf/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/prost-protobuf/enclave`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/encrypted-hello/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/pcl-seal/app`
    warning: skipping duplicate package `ue_send_recv` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/pcl-user/ue_send_recv`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tls/tlsclient/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tls/tlsserver/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust-vscode-debug/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust-vscode-debug/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/project_template/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/kvdb-memdb/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/kvdb-memdb/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/sgx-cov/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/switchless/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/zlib-lazy-static-sample/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/machine-learning/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/db-proxy/db-proxy/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/ue-ra/ue-ra-server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/static-data-distribution/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/protobuf/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/mio/server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/mio/client/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/net2/app`
    warning: skipping duplicate package `PCKIDRetrievalTool` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/dcap-pckretrieval/enclave`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/helloworld/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tr-mpc/tr-mpc-server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/logger/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tcmalloc/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tcmalloc/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/http_req/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/unit-test/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/wasmi/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/prost-protobuf/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/prost-protobuf/enclave`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/encrypted-hello/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/pcl-seal/app`
    warning: skipping duplicate package `ue_send_recv` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/pcl-user/ue_send_recv`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tls/tlsclient/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tls/tlsserver/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust-vscode-debug/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust-vscode-debug/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/project_template/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/kvdb-memdb/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/kvdb-memdb/enclave`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/sgx-cov/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/switchless/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/zlib-lazy-static-sample/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/machine-learning/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/db-proxy/db-proxy/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/ue-ra/ue-ra-server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/static-data-distribution/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/protobuf/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/mio/server/app`
    warning: skipping duplicate package `app` found at `/Users/xxx/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/mio/client/app`
    Compiling num-traits v0.2.16
    ```
