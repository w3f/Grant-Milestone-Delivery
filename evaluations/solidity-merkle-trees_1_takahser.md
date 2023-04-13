# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-trie-verifier.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/LICENSE) | - |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Docs](https://github.com/polytope-labs/solidity-merkle-trees/tree/ca8940f328c2fffdb720367e467e096e291dee32#merkle-patricia-trie) | Very brief - contains merely npm install instructions and a code sample for each merkle tree. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [unit tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/src/merkle_patricia.rs), [patricia tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/test/MerklePatricia.t.sol), [fuzz tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/fuzz/src/lib.rs) | See [Testing Guide Feedback](#testing-guide-feedback) |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | [Dockerfile](https://github.com/polytope-labs/solidity-merkle-trees/blob/7b6a68e68a2628b33f51920992dc1a23112a5331/Dockerfile) | See [Docker Feedback](#docker-feedback) |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1ZWzVbbYk4Yal4t_cBmoyPfDjSmS8egV9nnrOJq7DOII/edit) | - |
| 1 | Solidity SCALE Codec | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | This will include support for `enum{option/result}`, `Vec<Vec<u8>>` decoding and other types required for verifying state proofs as current implementations([Darwinia](https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/utils/contracts/ScaleCodec.sol), [Snowfork](https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/ScaleCodec.sol)) don't support.
| 2. | KeyspacedDB | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426). |
| 3. | MemoryDB | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163). |
| 4. |  NodeCodec | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81). |
| 5. | Node | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184). |
| 6. | NodePlan | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) |   Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507). |
| 7. | NodeHeader | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26). |
| 8. | NibbleSlicePlan | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454). |
| 9. | NibbleSlice | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180). |
| 10. | Layoutv0 | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60). |  
| 11. | Layoutv1 | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of the following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63) . |
| 12. | Trie Verifier | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233). |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- ~~Currently, the testing instructions are missing. Also, is there a reason to allow dead code in the tests, see [here](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/fuzz/src/lib.rs#L1) and [here](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/src/merkle_patricia.rs#L2)?~~
  - update: testing instructions have been added
  - update: the compiler is incorrectly reporting some types as unused, this can be verified with the fuzz test
- build:

  ```bash
  forge % forge build                                                                                    

  Missing dependencies found. Installing now...

  Updating dependencies in "/Users/xxx/repos/solidity-merkle-trees/lib"
  [⠔] Compiling...
  [⠒] Compiling 34 files with 0.8.17
  [⠃] Solc 0.8.17 finished in 3.16s
  Compiler run successful (with warnings)
  warning[2072]: Warning: Unused local variable.
    --> src/trie/ethereum/EthereumTrieDB.sol:13:9:
    |
  13 |         ByteSlice memory input = ByteSlice(encoded, 0);
    |         ^^^^^^^^^^^^^^^^^^^^^^



  warning[2072]: Warning: Unused local variable.
    --> src/trie/ethereum/EthereumTrieDB.sol:21:9:
    |
  21 |         ByteSlice memory input = node.data;
    |         ^^^^^^^^^^^^^^^^^^^^^^



  warning[2072]: Warning: Unused local variable.
    --> src/trie/ethereum/EthereumTrieDB.sol:30:9:
    |
  30 |         ByteSlice memory input = node.data;
    |         ^^^^^^^^^^^^^^^^^^^^^^



  warning[2072]: Warning: Unused local variable.
    --> src/trie/ethereum/EthereumTrieDB.sol:39:9:
    |
  39 |         ByteSlice memory input = node.data;
    |         ^^^^^^^^^^^^^^^^^^^^^^
  ```

- [x] unit test associated with the Merkle Multi Proof library passes, though there is only 1:

  ```bash
  % cargo test --lib merkle_multi_proof

    Compiling unicode-ident v1.0.6

    (...)

      Compiling solidity-merkle-trees-test v0.1.0 (/Users/xxx/repos/solidity-merkle-trees/forge)
      Finished test [unoptimized + debuginfo] target(s) in 1m 32s
  warning: the following packages contain code that will be rejected by a future version of Rust: lalrpop v0.19.8
  note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 3`
      Running unittests src/lib.rs (target/debug/deps/solidity_merkle_trees_test-d239cb8d0b4c4c4d)

  running 1 test
  test merkle_multi_proof::multi_merkle_proof ... ok

  test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 8 filtered out; finished in 5.38s
  ```

- [ ] 0 unit tests associated with the Merkle Mountain Range library were found:

  ```bash
  forge % cargo test --lib merkle_mountain_proof

      Finished test [unoptimized + debuginfo] target(s) in 1.01s
  warning: the following packages contain code that will be rejected by a future version of Rust: lalrpop v0.19.8
  note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 3`
      Running unittests src/lib.rs (target/debug/deps/solidity_merkle_trees_test-d239cb8d0b4c4c4d)

  running 0 tests

  test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 9 filtered out; finished in 0.00s
  ```

- [x] 6 unit and fuzz tests associated with the Merkle Patricia Trie library all pass:

  ```bash
  forge % cargo test --lib merkle_patricia

      Finished test [unoptimized + debuginfo] target(s) in 0.46s
  warning: the following packages contain code that will be rejected by a future version of Rust: lalrpop v0.19.8
  note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 3`
      Running unittests src/lib.rs (target/debug/deps/solidity_merkle_trees_test-d239cb8d0b4c4c4d)

  running 6 tests
  test merkle_patricia::test_nibble_slice_ops_basics ... ok
  test merkle_patricia::test_decode_nibbled_branch ... ok
  test merkle_patricia::test_nibble_slice_ops_mid ... ok
  test merkle_patricia::test_decode_leaf ... ok
  test merkle_patricia::test_merkle_patricia_trie ... ok
  test merkle_patricia::test_nibble_slice_ops_shared ... ok

  test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 3 filtered out; finished in 6.22s
  ```

### Docker Feedback

- [x] merkle verifier tests all pass, no warnings:

  ```bash

  solidity-merkle-trees % docker run --memory="24g" --rm --user root -v "$PWD":/app -w /app rust:latest cargo test --release --manifest-path=./forge/Cargo.toml

      Updating git repository `https://github.com/paritytech/substrate.git`
      Updating git repository `https://github.com/polytope-labs/merkle-mountain-range`
      Updating crates.io index
      Updating git repository `https://github.com/gakonst/ethers-rs`
      Updating git repository `https://github.com/foundry-rs/foundry`
      Updating git repository `https://github.com/polytope-labs/patricia-merkle-trie`
      Updating git repository `https://github.com/polytope-labs/rs-merkle`
  Downloading crates ...
    Downloaded block-padding v0.1.5

    (...)

    Downloaded schnorrkel v0.9.1
      Finished release [optimized] target(s) in 55.49s
  warning: the following packages contain code that will be rejected by a future version of Rust: lalrpop v0.19.8
  note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 5`
      Running unittests src/lib.rs (forge/target/release/deps/solidity_merkle_trees_test-6a297b3ba755f6a5)

  running 9 tests
  test merkle_patricia::test_decode_leaf ... ok
  test merkle_mountain_range::test_merkle_mountain_range ... ok
  test merkle_patricia::test_decode_nibbled_branch ... ok
  test merkle_patricia::test_merkle_patricia_trie ... ok
  test merkle_multi_proof::multi_merkle_proof ... ok
  test merkle_mountain_range::test_mmr_utils ... ok
  test merkle_patricia::test_nibble_slice_ops_shared ... ok
  test merkle_patricia::test_nibble_slice_ops_basics ... ok
  test merkle_patricia::test_nibble_slice_ops_mid ... ok

  test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 11.71s

    Doc-tests solidity-merkle-trees-test

  running 0 tests

  test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
  ```

  - [x] build docker image for fuzz testing:

  ```bash
  solidity-merkle-trees % docker build -t test .

  [+] Building 40.1s (6/6) FINISHED                                                                                                                                                                                                              
  => [internal] load build definition from Dockerfile                                                                                                                                                                                      0.0s
  => => transferring dockerfile: 36B                                                                                                                                                                                                       0.0s
  => [internal] load .dockerignore                                                                                                                                                                                                         0.0s
  => => transferring context: 2B                                                                                                                                                                                                           0.0s
  => [internal] load metadata for docker.io/rustlang/rust:nightly                                                                                                                                                                          2.7s
  => [1/2] FROM docker.io/rustlang/rust:nightly@sha256:967d12679b291e162943b3376dd2b86e2dde648cfe786da90c50d56272165b6e                                                                                                                   18.1s
  => => resolve docker.io/rustlang/rust:nightly@sha256:967d12679b291e162943b3376dd2b86e2dde648cfe786da90c50d56272165b6e                                                                                                                    0.0s
  => => sha256:1efadebfda1423d1b70a0e991e9ff8bb2e3fe0b08d55562359a004c265fc7c86 10.00MB / 10.00MB                                                                                                                                          1.4s
  => => sha256:11dd8bc4df9f217c50c416015b7dc68bdffeec2b230d81d97e10a19d3122cf03 1.45kB / 1.45kB                                                                                                                                            0.0s
  => => sha256:b4910c31031a0301ea4f8b7155269014925aeb17c71b869dea3ff907ba294b55 49.24MB / 49.24MB                                                                                                                                          1.8s
  => => sha256:208fd617b499747daceba851b67da426c285d1e306b316a193f06968123f49da 7.73MB / 7.73MB                                                                                                                                            0.9s
  => => sha256:967d12679b291e162943b3376dd2b86e2dde648cfe786da90c50d56272165b6e 1.61kB / 1.61kB                                                                                                                                            0.0s
  => => sha256:216cdde76a665c27267e42b463c40a5ff895b9dc68e0d0c8dee943912585d9c8 4.58kB / 4.58kB                                                                                                                                            0.0s
  => => sha256:efe7e7c438113f5e58417f97e7eb0a755b17ee63eebd85a7c3b86a2aad4c993e 52.19MB / 52.19MB                                                                                                                                          3.0s
  => => sha256:33997ebd7335eb6f55d98725b5fb8e4899166098d6db119cd6f6bc7055ffa858 183.44MB / 183.44MB                                                                                                                                        8.9s
  => => extracting sha256:b4910c31031a0301ea4f8b7155269014925aeb17c71b869dea3ff907ba294b55                                                                                                                                                 0.7s
  => => sha256:90c09ef2a62fc78bb65ecfa276790dd34bddd3775207c57f4d8f48772a56f59e 323.14MB / 323.14MB                                                                                                                                       11.9s
  => => extracting sha256:208fd617b499747daceba851b67da426c285d1e306b316a193f06968123f49da                                                                                                                                                 0.1s
  => => extracting sha256:1efadebfda1423d1b70a0e991e9ff8bb2e3fe0b08d55562359a004c265fc7c86                                                                                                                                                 0.1s
  => => extracting sha256:efe7e7c438113f5e58417f97e7eb0a755b17ee63eebd85a7c3b86a2aad4c993e                                                                                                                                                 0.9s
  => => extracting sha256:33997ebd7335eb6f55d98725b5fb8e4899166098d6db119cd6f6bc7055ffa858                                                                                                                                                 2.5s
  => => extracting sha256:90c09ef2a62fc78bb65ecfa276790dd34bddd3775207c57f4d8f48772a56f59e                                                                                                                                                 6.0s
  => [2/2] RUN cargo install cargo-fuzz                                                                                                                                                                                                   19.1s
  => exporting to image                                                                                                                                                                                                                    0.1s
  => => exporting layers                                                                                                                                                                                                                   0.1s
  => => writing image sha256:8f321e7a637d0ac38d0fdfcd0c5d7e9af12f0f61eac4cf902eb44030eef24c20                                                                                                                                              0.0s
  => => naming to docker.io/library/test 
  ```

- [ ] running the fuzz test `trie_proof_valid` throws an error:

  ```bash
  solidity-merkle-trees % docker run --memory="24g" --rm --user root -v "$PWD":/app -w /app/forge/fuzz test cargo +nightly fuzz run trie_proof_valid

      Updating git repository `https://github.com/paritytech/substrate.git`
      Updating git repository `https://github.com/polytope-labs/merkle-mountain-range`
      Updating crates.io index
      Updating git repository `https://github.com/gakonst/ethers-rs`
      Updating git repository `https://github.com/foundry-rs/foundry`
      Updating git repository `https://github.com/polytope-labs/patricia-merkle-trie`
      Updating git repository `https://github.com/polytope-labs/rs-merkle`
  Downloading crates ...
    Downloaded byteorder v1.4.3

    (...)

    Downloaded byte-tools v0.3.1
    Compiling proc-macro2 v1.0.49
    Compiling quote v1.0.23

    (...)
    
    Compiling forge-fmt v0.2.0 (https://github.com/foundry-rs/foundry?rev=b2baca32bd1a3b31b6f6ae2950a14c5bb8607cdb#b2baca32)
  error: could not compile `ethers-solc` (lib)

  Caused by:
    process didn't exit successfully: `rustc --crate-name ethers_solc --edition=2021 /usr/local/cargo/git/checkouts/ethers-rs-c3a7c0a0ae0fe6be/2eb56e6/ethers-solc/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata,link -C opt-level=3 -C embed-bitcode=no --cfg 'feature="async"' --cfg 'feature="full"' --cfg 'feature="futures-util"' --cfg 'feature="sha2"' --cfg 'feature="svm"' --cfg 'feature="svm-builds"' --cfg 'feature="svm-solc"' --cfg 'feature="tests"' -C metadata=f69445e6a958ef6c -C extra-filename=-f69445e6a958ef6c --out-dir /app/forge/target/aarch64-unknown-linux-gnu/release/deps --target aarch64-unknown-linux-gnu -L dependency=/app/forge/target/aarch64-unknown-linux-gnu/release/deps -L dependency=/app/forge/target/release/deps --extern cfg_if=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libcfg_if-5f74c00a537f008b.rmeta --extern dunce=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libdunce-0495dd100964742f.rmeta --extern ethers_core=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libethers_core-af9747ca6b0758de.rmeta --extern futures_util=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libfutures_util-13b2c648680f3560.rmeta --extern glob=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libglob-95c83e1ffec8cf90.rmeta --extern hex=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libhex-d6bb48b3d6b80161.rmeta --extern home=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libhome-e22ece10a2f64069.rmeta --extern md5=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libmd5-4d6da31dd605b33c.rmeta --extern num_cpus=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libnum_cpus-a04e9684f49cbad9.rmeta --extern once_cell=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libonce_cell-7df0b10c32b64bbe.rmeta --extern path_slash=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libpath_slash-f5316ce453a0739e.rmeta --extern rayon=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/librayon-49c786ef4b0b6210.rmeta --extern regex=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libregex-ea587b281833c888.rmeta --extern semver=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsemver-81991fd8e14033d9.rmeta --extern serde=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libserde-72a65a2686e64e68.rmeta --extern serde_json=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libserde_json-bf27c8b002394120.rmeta --extern sha2=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsha2-71db3321b3b35eaf.rmeta --extern solang_parser=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsolang_parser-a4f604cf2fe78357.rmeta --extern svm=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsvm_lib-8b1cf0279632991d.rmeta --extern svm_builds=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsvm_rs_builds-1073310d061d175f.rmeta --extern thiserror=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libthiserror-9eef04d8eb929bf7.rmeta --extern tiny_keccak=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtiny_keccak-6306ff926ac235d8.rmeta --extern tokio=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtokio-65f2f2cc9477a590.rmeta --extern tracing=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtracing-8e51370cdf152ac6.rmeta --extern walkdir=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libwalkdir-8a24133d6d019a4b.rmeta --extern yansi=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libyansi-090b2966ea8ed641.rmeta --cap-lints allow -Cpasses=sancov-module -Cllvm-args=-sanitizer-coverage-level=4 -Cllvm-args=-sanitizer-coverage-inline-8bit-counters -Cllvm-args=-sanitizer-coverage-pc-table -Cllvm-args=-sanitizer-coverage-trace-compares --cfg fuzzing -Clink-dead-code -Zsanitizer=address -Cllvm-args=-sanitizer-coverage-stack-depth -Cdebug-assertions -C codegen-units=1 -L native=/app/forge/target/aarch64-unknown-linux-gnu/release/build/ring-29484fff51ea3232/out` (signal: 9, SIGKILL: kill)
  warning: build failed, waiting for other jobs to finish...
  Error: failed to build fuzz script: ASAN_OPTIONS="detect_odr_violation=0" RUSTFLAGS="-Cpasses=sancov-module -Cllvm-args=-sanitizer-coverage-level=4 -Cllvm-args=-sanitizer-coverage-inline-8bit-counters -Cllvm-args=-sanitizer-coverage-pc-table -Cllvm-args=-sanitizer-coverage-trace-compares --cfg fuzzing -Clink-dead-code -Zsanitizer=address -Cllvm-args=-sanitizer-coverage-stack-depth -Cdebug-assertions -C codegen-units=1" "cargo" "build" "--manifest-path" "/app/forge/fuzz/Cargo.toml" "--target" "aarch64-unknown-linux-gnu" "--release" "--bin" "trie_proof_valid"
  ```

  - [ ] running the fuzz test `trie_proof_invalid` throws an error as well:

  ```bash
  solidity-merkle-trees % docker run --memory="24g" --rm --user root -v "$PWD":/app -w /app/forge/fuzz test cargo +nightly fuzz run trie_proof_invalid

      Updating git repository `https://github.com/paritytech/substrate.git`
      Updating git repository `https://github.com/polytope-labs/merkle-mountain-range`
      Updating crates.io index
      Updating git repository `https://github.com/gakonst/ethers-rs`
      Updating git repository `https://github.com/foundry-rs/foundry`
      Updating git repository `https://github.com/polytope-labs/patricia-merkle-trie`
      Updating git repository `https://github.com/polytope-labs/rs-merkle`
  Downloading crates ...
    Downloaded base16ct v0.1.1

    (...)

    Downloaded object v0.30.3
    Compiling ethers-solc v1.0.2 (https://github.com/gakonst/ethers-rs#2eb56e69)

    (...)

    Compiling foundry-evm v0.2.0 (https://github.com/foundry-rs/foundry?rev=b2baca32bd1a3b31b6f6ae2950a14c5bb8607cdb#b2baca32)
  error: could not compile `ethers-solc` (lib)

  Caused by:
    process didn't exit successfully: `rustc --crate-name ethers_solc --edition=2021 /usr/local/cargo/git/checkouts/ethers-rs-c3a7c0a0ae0fe6be/2eb56e6/ethers-solc/src/lib.rs --error-format=json --json=diagnostic-rendered-ansi,artifacts,future-incompat --crate-type lib --emit=dep-info,metadata,link -C opt-level=3 -C embed-bitcode=no --cfg 'feature="async"' --cfg 'feature="full"' --cfg 'feature="futures-util"' --cfg 'feature="sha2"' --cfg 'feature="svm"' --cfg 'feature="svm-builds"' --cfg 'feature="svm-solc"' --cfg 'feature="tests"' -C metadata=f69445e6a958ef6c -C extra-filename=-f69445e6a958ef6c --out-dir /app/forge/target/aarch64-unknown-linux-gnu/release/deps --target aarch64-unknown-linux-gnu -L dependency=/app/forge/target/aarch64-unknown-linux-gnu/release/deps -L dependency=/app/forge/target/release/deps --extern cfg_if=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libcfg_if-5f74c00a537f008b.rmeta --extern dunce=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libdunce-0495dd100964742f.rmeta --extern ethers_core=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libethers_core-af9747ca6b0758de.rmeta --extern futures_util=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libfutures_util-13b2c648680f3560.rmeta --extern glob=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libglob-95c83e1ffec8cf90.rmeta --extern hex=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libhex-d6bb48b3d6b80161.rmeta --extern home=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libhome-e22ece10a2f64069.rmeta --extern md5=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libmd5-4d6da31dd605b33c.rmeta --extern num_cpus=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libnum_cpus-a04e9684f49cbad9.rmeta --extern once_cell=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libonce_cell-7df0b10c32b64bbe.rmeta --extern path_slash=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libpath_slash-f5316ce453a0739e.rmeta --extern rayon=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/librayon-49c786ef4b0b6210.rmeta --extern regex=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libregex-ea587b281833c888.rmeta --extern semver=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsemver-81991fd8e14033d9.rmeta --extern serde=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libserde-72a65a2686e64e68.rmeta --extern serde_json=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libserde_json-bf27c8b002394120.rmeta --extern sha2=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsha2-71db3321b3b35eaf.rmeta --extern solang_parser=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsolang_parser-a4f604cf2fe78357.rmeta --extern svm=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsvm_lib-8b1cf0279632991d.rmeta --extern svm_builds=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libsvm_rs_builds-1073310d061d175f.rmeta --extern thiserror=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libthiserror-9eef04d8eb929bf7.rmeta --extern tiny_keccak=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtiny_keccak-6306ff926ac235d8.rmeta --extern tokio=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtokio-65f2f2cc9477a590.rmeta --extern tracing=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libtracing-8e51370cdf152ac6.rmeta --extern walkdir=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libwalkdir-8a24133d6d019a4b.rmeta --extern yansi=/app/forge/target/aarch64-unknown-linux-gnu/release/deps/libyansi-090b2966ea8ed641.rmeta --cap-lints allow -Cpasses=sancov-module -Cllvm-args=-sanitizer-coverage-level=4 -Cllvm-args=-sanitizer-coverage-inline-8bit-counters -Cllvm-args=-sanitizer-coverage-pc-table -Cllvm-args=-sanitizer-coverage-trace-compares --cfg fuzzing -Clink-dead-code -Zsanitizer=address -Cllvm-args=-sanitizer-coverage-stack-depth -Cdebug-assertions -C codegen-units=1 -L native=/app/forge/target/aarch64-unknown-linux-gnu/release/build/ring-29484fff51ea3232/out` (signal: 9, SIGKILL: kill)
  warning: build failed, waiting for other jobs to finish...
  ```
