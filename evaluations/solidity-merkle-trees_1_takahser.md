# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-trie-verifier.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/LICENSE) | - |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Docs](https://github.com/polytope-labs/solidity-merkle-trees/tree/ca8940f328c2fffdb720367e467e096e291dee32#merkle-patricia-trie) | Very brief - contains merely npm install instructions and a code sample for each merkle tree. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [unit tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/src/merkle_patricia.rs), [patricia tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/test/MerklePatricia.t.sol), [fuzz tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/fuzz/src/lib.rs) | See [Testing Guide Feedback](#testing-guide-feedback) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/polytope-labs/solidity-merkle-trees/blob/7b6a68e68a2628b33f51920992dc1a23112a5331/Dockerfile) | See [Docker Feedback](#docker-feedback) |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1ZWzVbbYk4Yal4t_cBmoyPfDjSmS8egV9nnrOJq7DOII/edit) | - |
| 1 | Solidity SCALE Codec | <ul><li>[x] </li></ul> | [Scale Codec contract](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/ScaleCodec.sol) | - |
| 2. | KeyspacedDB | <ul><li>[x] </li></ul> | [`ReadChildProofCheck` function in MerklePatricia contract](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/MerklePatricia.sol#L99) | Solidity implementation of Substrate's [KeySpacedDB](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426). |
| 3. | MemoryDB | <ul><li>[x] </li></ul> | https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/MerklePatricia.sol#L37, https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/TrieDB.sol#L8 | Solidity implementation of Substrate's [MemoryDB](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163). |
| 4. |  NodeCodec | <ul><li>[x] </li></ul> | [SubstrateTrieDB.sol](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/SubstrateTrieDB.sol) | Solidity implementation of Substrate's [`NodeCodec` with SCALE encoding](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81). |
| 5. | Node | <ul><li>[x] </li></ul> | [`NodeKind` struct](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/Node.sol#L9) | Solidity implementation of Substrate's [`Node` enum](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184) that stores the type of node in the trie and essential information thereof. |
| 6. | NodePlan | <ul><li>[x] </li></ul> | [`NodeHandle` struct](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/Node.sol#L26) | Solidity implementation of Substrate's [`NodePlan` enum](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507). |
| 7. | NodeHeader | <ul><li>[x] </li></ul> | https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/SubstrateTrieDB.sol#L26-L62 | Solidity implementation of Substrate's [`NodeHeader` enum](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26). |
| 8. | NibbleSlicePlan | <ul><li>[x] </li></ul> | [`NibbleSliceOps` library](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/NibbleSlice.sol#L10) | Solidity implementation of Substrate's [`NibbleSlicePlan` struct](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454). |
| 9. | NibbleSlice | <ul><li>[x] </li></ul> | [`NibbleSlice` struct](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/NibbleSlice.sol#L5) | Solidity implementation of Substrate's [`NibbleSlice` struct](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180). |
| 10. | Layoutv0 | <ul><li>[x] </li></ul> | [SubstrateTrieDB.sol](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/SubstrateTrieDB.sol) | Solidity implementation of Substrate's [`LayoutV0` struct](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60). |  
| 11. | Layoutv1 | <ul><li>[x] </li></ul> |[SubstrateTrieDB.sol](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/SubstrateTrieDB.sol) | Solidity implementation of Substrate's [`LayoutV1` struct](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63) . |
| 12. | Trie Verifier | <ul><li>[x] </li></ul> | [`VerifySubstrateProof` function](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/MerklePatricia.sol#L31) | Solidity implementation of the following: [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233). |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- In the Solidity contracts, Solidity v0.8.17 is used while v0.8.19 is already available. 
- In general, very few inline comments which makes it harder to understand, especially since this is code concerning the bridging of two ecosystems, hence the likelyhood that developers that use it are fluent in both ecosystem's programming languages is rather low, when compared to code that concerns a single ecosystem, examples:
  - https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/NibbleSlice.sol
  - https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/Node.sol
  - https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/TrieDB.sol
  - https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/substrate/SubstrateTrieDB.sol
- ~~There are some incomplete TODO comments in the [EthereumTrieDB.sol contract](https://github.com/polytope-labs/solidity-merkle-trees/blob/9ec345c82b9adbe49c024a29588e5ac631976639/src/trie/ethereum/EthereumTrieDB.sol). Please specify them or remove them if they're outdated.~~ => ignored, since [not part of the grant](https://github.com/w3f/Grant-Milestone-Delivery/pull/774#discussion_r1175427387)

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

- [x] ~~0 unit tests associated with the Merkle Mountain Range library were found~~ update: command was fixed, now they pass:

  ```bash
  forge %  cargo test --lib merkle_mountain_range
      Finished test [unoptimized + debuginfo] target(s) in 1.48s
  warning: the following packages contain code that will be rejected by a future version of Rust: lalrpop v0.19.8
  note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 3`
      Running unittests src/lib.rs (target/debug/deps/solidity_merkle_trees_test-d239cb8d0b4c4c4d)

  running 2 tests
  test merkle_mountain_range::test_merkle_mountain_range ... ok
  test merkle_mountain_range::test_mmr_utils ... ok

  test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 7 filtered out; finished in 5.71s
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

- [x] docker image build for fuzz testing passes:

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

- [x] running the fuzz test `trie_proof_valid` succesfully executes:

  ```bash
  solidity-merkle-trees % docker run --memory="24g" --rm --user root -v "$PWD":/app -w /app/forge/fuzz test cargo +nightly fuzz run trie_proof_valid

  (...)

  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 70113
  Logs VerifyKeys: []
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 70137
  Logs VerifyKeys: []
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 86613
  Logs VerifyKeys: []

  ```

- [x] running the fuzz test `trie_proof_invalid` succesfully executes:

  ```bash
  solidity-merkle-trees % docker run --memory="24g" --rm --user root -v "$PWD":/app -w /app/forge/fuzz test cargo +nightly fuzz run trie_proof_invalid

  (...)

  INFO: Running with entropic power schedule (0xFF, 100).
  INFO: Seed: 978142482
  INFO: Loaded 1 modules   (5397285 inline 8-bit counters): 5397285 [0x55cad69cd500, 0x55cad6ef3025), 
  INFO: Loaded 1 PC tables (5397285 PCs): 5397285 [0x55cad6ef3028,0x55cadc14e278), 
  INFO:        0 files found in /app/forge/fuzz/corpus/trie_proof_invalid
  INFO: -max_len is not provided; libFuzzer will not generate inputs larger than 4096 bytes
  INFO: A corpus is not provided, starting from an empty corpus
  #2	INITED cov: 20 ft: 21 corp: 1/1b exec/s: 0 rss: 263Mb
  #3	NEW    cov: 20 ft: 22 corp: 2/3b lim: 4 exec/s: 0 rss: 263Mb L: 2/2 MS: 1 InsertByte-
    NEW_FUNC[1/6]: 0x55cac3cc28e0  (/app/forge/target/x86_64-unknown-linux-gnu/release/trie_proof_invalid+0x878c8e0) (BuildId: fba2fbc0f943c2bc4fc67fdac971b5ad200c69eb)
    NEW_FUNC[2/6]: 0x55cac3cd9f10  (/app/forge/target/x86_64-unknown-linux-gnu/release/trie_proof_invalid+0x87a3f10) (BuildId: fba2fbc0f943c2bc4fc67fdac971b5ad200c69eb)
  #7	NEW    cov: 63 ft: 66 corp: 3/7b lim: 4 exec/s: 0 rss: 264Mb L: 4/4 MS: 4 ChangeBit-InsertByte-ChangeBit-InsertByte-
  #175	REDUCE cov: 63 ft: 66 corp: 3/6b lim: 4 exec/s: 0 rss: 265Mb L: 1/4 MS: 3 ChangeByte-CopyPart-EraseBytes-
  #384	NEW    cov: 66 ft: 69 corp: 4/12b lim: 6 exec/s: 0 rss: 265Mb L: 6/6 MS: 4 ShuffleBytes-ShuffleBytes-ShuffleBytes-CopyPart-
  #595	NEW    cov: 68 ft: 71 corp: 5/19b lim: 8 exec/s: 0 rss: 266Mb L: 7/7 MS: 1 InsertByte-
  #596	NEW    cov: 73 ft: 76 corp: 6/27b lim: 8 exec/s: 0 rss: 266Mb L: 8/8 MS: 1 CopyPart-
  #645	NEW    cov: 74 ft: 77 corp: 7/35b lim: 8 exec/s: 0 rss: 266Mb L: 8/8 MS: 4 ChangeBinInt-ChangeBit-ChangeBinInt-CMP- DE: "\001\000\000\000\000\000\000\000"-
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  Slowest unit: 13 s:
  artifact_prefix='/app/forge/fuzz/artifacts/trie_proof_invalid/'; Test unit written to /app/forge/fuzz/artifacts/trie_proof_invalid/slow-unit-c36ee1f534bc62032e8bc87d2ed85d00ea941769
  Base64: AQEAAAAAAAAAAAA=
    NEW_FUNC[1/4982]: 0x55cac3cc0aa0  (/app/forge/target/x86_64-unknown-linux-gnu/release/trie_proof_invalid+0x878aaa0) (BuildId: fba2fbc0f943c2bc4fc67fdac971b5ad200c69eb)
    NEW_FUNC[2/4982]: 0x55cac3cc1af0  (/app/forge/target/x86_64-unknown-linux-gnu/release/trie_proof_invalid+0x878baf0) (BuildId: fba2fbc0f943c2bc4fc67fdac971b5ad200c69eb)
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  #955	NEW    cov: 43628 ft: 43154 corp: 8/46b lim: 11 exec/s: 59 rss: 1359Mb L: 11/11 MS: 4 InsertByte-PersAutoDict-PersAutoDict-CopyPart- DE: "\001\000\000\000\000\000\000\000"-"\001\000\000\000\000\000\000\000"-
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  #956	NEW    cov: 43635 ft: 44625 corp: 9/57b lim: 11 exec/s: 50 rss: 1359Mb L: 11/11 MS: 1 ShuffleBytes-
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  #982	NEW    cov: 43635 ft: 44627 corp: 10/68b lim: 11 exec/s: 46 rss: 1359Mb L: 11/11 MS: 1 CopyPart-
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  names: ["MerkleMountainRangeTest", "MerkleMultiProofTest", "MerklePatriciaTest"]
  Gas used VerifyKeys: 42871
  Logs VerifyKeys: []
  ```

