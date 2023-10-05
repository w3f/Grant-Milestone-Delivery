# Evaluation

- Status: Accepted
- Application Document: https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-network2.md
- Milestone: 1
- Kusama Identity: Address
- Previously successfully merged evaluation: All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |  
| ------ | ----------- | -------- | ---- | ----------------- |
| 0a. | License | <ul><li>[x]</li></ul> | [Apache 2.0](https://github.com/Interstellar-Network/lib-garble-rs/blob/c0d249ba4696d63d26da199e3bf58252baa59c5a/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x]</li></ul> | [deployed docs](https://book.interstellar.gg/2M1.html), [repo](https://github.com/Interstellar-Network/Interstellar-Book/tree/d295059b26cd5e14c9d7c2fec1f55ef8a6fe31cd) | The documentation provides a good tutorial for getting started, however the inline comments are limited in some areas |
| 0c. | Testing and Guide | <ul><li>[x]</li></ul> | [deployed testing guide](https://book.interstellar.gg/2M1.html#testing-guide), [repo](https://github.com/Interstellar-Network/Interstellar-Book/tree/d295059b26cd5e14c9d7c2fec1f55ef8a6fe31cd) | See [Testing Feedback](#testing-feedback) |  
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

- The tests are currently failing on my macbook, but on the ubuntu machine I spinned up on AWS they all pass, though there are some warnings.
  - versions on macbook where the tests fail:
    ```bash
    % cargo --version            
    cargo 1.72.1 (103a7ff2e 2023-08-15)

    % rustc --version
    rustc 1.72.1 (d5c2e9c34 2023-09-13)
    
    % rustup toolchain list                     
    stable-aarch64-apple-darwin (default)
    nightly-2023-01-22-aarch64-apple-darwin
    nightly-aarch64-apple-darwin
    ```
  - versions on ubuntu where tests pass:
    ```bash
    $ cargo --version
    cargo 1.72.1 (103a7ff2e 2023-08-15)
    
    $ rustc --version
    rustc 1.72.1 (d5c2e9c34 2023-09-13)
    
    $ rustup toolchain list
    stable-x86_64-unknown-linux-gnu (default)
    nightly-x86_64-unknown-linux-gnu
    ```
  - output on ubuntu:
    ```bash
    $ cargo test
        Updating crates.io index
        Updating git repository `https://github.com/Interstellar-Network/lib_circuits.git`
        Updating git submodule `https://github.com/Interstellar-Network/cmake.git`
        Updating git repository `https://github.com/Interstellar-Network/image.git`
        Updating git repository `https://github.com/Interstellar-Network/imageproc.git`
        Updating git repository `https://github.com/Interstellar-Network/rs-common.git`
        Updating git submodule `https://github.com/Interstellar-Network/teaclave-sample-unit-test.git`
        Updating git repository `https://github.com/Interstellar-Network/color_quant.git`
        Updating git repository `https://github.com/apache/teaclave-sgx-sdk.git`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/mio/server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tls/tlsserver/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tls/tlsclient/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/project_template/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust-vscode-debug/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/unit-test/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/mutual-ra/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/hello-rust/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/kvdb-memdb/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/kvdb-memdb/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/zlib-lazy-static-sample/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/switchless/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tcmalloc/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tcmalloc/enclave`
    warning: skipping duplicate package `PCKIDRetrievalTool` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/dcap-pckretrieval/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/protobuf/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/wasmi/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/helloworld/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/logger/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/static-data-distribution/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/db-proxy/db-proxy/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/tr-mpc/tr-mpc-server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/net2/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/net2/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/ue-ra/ue-ra-server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/prost-protobuf/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/prost-protobuf/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/sgx-cov/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/machine-learning/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/encrypted-hello/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/pcl-seal/app`
    warning: skipping duplicate package `ue_send_recv` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/pcl/pcl-user/ue_send_recv`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/3c903bd/samplecode/http_req/app`
        Updating git repository `https://github.com/apache/teaclave-sgx-sdk.git`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/mio/server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tls/tlsserver/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tls/tlsclient/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/project_template/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust-vscode-debug/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/unit-test/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/mutual-ra/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/hello-rust/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/kvdb-memdb/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/kvdb-memdb/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/zlib-lazy-static-sample/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/switchless/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tcmalloc/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tcmalloc/enclave`
    warning: skipping duplicate package `PCKIDRetrievalTool` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/dcap-pckretrieval/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/protobuf/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/wasmi/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/helloworld/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/logger/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/static-data-distribution/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/db-proxy/db-proxy/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/tr-mpc/tr-mpc-server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/net2/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/net2/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/ue-ra/ue-ra-server/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/prost-protobuf/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/prost-protobuf/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/sgx-cov/app`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/machine-learning/app`
    warning: skipping duplicate package `Helloworldsampleenclave` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/encrypted-hello/enclave`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/pcl-seal/app`
    warning: skipping duplicate package `ue_send_recv` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/pcl/pcl-user/ue_send_recv`
    warning: skipping duplicate package `app` found at `/home/ubuntu/.cargo/git/checkouts/teaclave-sgx-sdk-be25c2ad2f03718d/d2d339c/samplecode/http_req/app`
    Downloaded num_enum_derive v0.7.0
    (...)
    Downloaded 92 crates (8.8 MB) in 4.89s (largest was `linux-raw-sys` at 1.4 MB)
    Compiling autocfg v1.1.0
    (...)
    Compiling png-utils v0.1.0 (https://github.com/Interstellar-Network/rs-common.git#beddd7b6)
    warning: variable does not need to be mutable
    --> lib-garble-rs/src/serialize_deserialize.rs:83:13
    |
    83 |         let mut ref_garb = garble_skcd(include_bytes!(
    |             ----^^^^^^^^
    |             |
    |             help: remove this `mut`
    |
    = note: `#[warn(unused_mut)]` on by default

    warning: variable does not need to be mutable
    --> lib-garble-rs/src/serialize_deserialize.rs:100:13
        |
    100 |         let mut ref_garb = garble_skcd(include_bytes!(
        |             ----^^^^^^^^
        |             |
        |             help: remove this `mut`

    warning: variable does not need to be mutable
    --> lib-garble-rs/src/serialize_deserialize.rs:147:13
        |
    147 |         let mut ref_garb = garble_skcd(include_bytes!(
        |             ----^^^^^^^^
        |             |
        |             help: remove this `mut`

    warning: `lib-garble-rs` (lib test) generated 3 warnings (run `cargo fix --lib -p lib-garble-rs --tests` to apply 3 suggestions)
        Finished test [unoptimized + debuginfo] target(s) in 1m 32s
        Running unittests src/lib.rs (target/debug/deps/lib_garble_rs-3f5a2c1a6c669644)

    running 44 tests
    test new_garbling_scheme::block::tests::test_projection_one_with_one ... ok
    test new_garbling_scheme::block::tests::test_projection_one_with_zero ... ok
    test new_garbling_scheme::block::tests::test_projection_one_with_test ... ok
    test new_garbling_scheme::block::tests::test_projection_different ... ok
    test new_garbling_scheme::block::tests::test_projection_test_with_one ... ok
    test new_garbling_scheme::delta::tests::mre_delta_nand_gate ... ignored
    test new_garbling_scheme::block::tests::test_projection_test_with_test ... ok
    test new_garbling_scheme::garble::tests::test_decoding_info ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes_2 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes ... ok
    test new_garbling_scheme::block::tests::test_projection_zero_with_one ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_different_blocks_same_tweaks_should_return_different_hashes_3 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_same_blocks_different_tweaks_should_return_different_hashes ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_0_same_blocks_same_tweaks_should_return_same_hashes ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_prime_distribution_2 ... ok
    test new_garbling_scheme::random_oracle::tests::test_random_oracle_prime_distribution_1 ... ok
    test new_garbling_scheme::tests::test_basic_buf ... ok
    test new_garbling_scheme::tests::test_basic_not ... ok
    test new_garbling_scheme::tests::test_basic_one ... ok
    test new_garbling_scheme::tests::test_basic_and ... ok
    test new_garbling_scheme::tests::test_basic_nor ... ok
    test new_garbling_scheme::tests::test_basic_nand ... ok
    test new_garbling_scheme::tests::test_basic_zero ... ok
    test new_garbling_scheme::tests::test_garble_adder ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x0 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x00 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x01 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x1 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x10 ... ok
    test new_garbling_scheme::wire_labels_set::tests::test_get_x11 ... ok
    test serialize_deserialize::tests::test_encoder_has_no_garbler_inputs_display_message_120x52_2digits ... ignored
    test new_garbling_scheme::tests::test_basic_or ... ok
    test serialize_deserialize::tests::test_serialize_deserialize_full_adder_2bits ... ok
    test new_garbling_scheme::tests::test_basic_xor ... ok
    test new_garbling_scheme::tests::test_basic_xnor ... ok
    test watermark::tests::test_convert_image_to_garbler_inputs_black_white ... ok
    test watermark::tests::test_convert_image_to_garbler_inputs_grays ... ok
    test tests::test_garble_evaluate_full_adder_2bits ... ok
    test watermark::tests::test_draw_text_french ... ok
    test watermark::tests::test_draw_text_one_line_ascii ... ok
    test watermark::tests::test_draw_text_two_lines_ascii_crlf ... ok
    test watermark::tests::test_draw_text_two_lines_ascii_lf ... ok
    test serialize_deserialize::tests::test_serialize_golden_display_message_120x52_2digits ... ok
    test serialize_deserialize::tests::test_serialize_deserialize_display_message_120x52_2digits ... ok

    test result: ok. 42 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 2.12s

        Running tests/client_server_display_tests.rs (target/debug/deps/client_server_display_tests-7da32ad2bef76fcb)

    running 1 test
    test test_server_client_display_message_120x52_2digits_zeros ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.61s

        Running tests/display_circuits_tests.rs (target/debug/deps/display_circuits_tests-9ac57589ab48d264)

    running 1 test
    test test_garble_display_message_120x52_2digits_42 ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.80s

    Doc-tests lib-garble-rs

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
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
