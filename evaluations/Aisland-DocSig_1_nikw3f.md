# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Aisland-DocSig.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> |[https://github.com/aisland-dao/docsig/blob/main/LICENSE](https://github.com/aisland-dao/docsig/blob/main/LICENSE)| Apache 2.0| 
| 0b. | Documentation | <ul><li>[x] </li></ul> |[Dapp Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md),  [Pallet Documentation](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig/README.md), [Dapp Repository](https://github.com/aisland-dao/docsig), [Pallet Repository](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig)| Dev documentation is good. User journey should also be documented. | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> |[Dapp unit tests](https://github.com/aisland-dao/docsig/blob/main/README.md#unit-tests), [Pallet unit tests](https://github.com/aisland-dao/aisland-node/blob/main/pallets/docsig/README.md#unit-tests)| Unit tests are passing after adding a template file in upload folder | 
| 0d. | Docker | <ul><li>[x] </li></ul> |[Docker Documentation](https://github.com/aisland-dao/docsig/blob/main/README.md#docker), [Docker file](https://github.com/aisland-dao/docsig/blob/main/docker-compose.yml)| Docker is working on ubuntu. Please add support for ARM as well. It is using amd64 in Dockerfile. | 
| 0e. | Article | <ul><li>[x] </li></ul> |[Article of Introduction](https://news.aisland.io/aisland-docsig-decentralised-exchange-of-signed-documents/),[Workshop Video](https://dropbox.aisland.io/index.php/s/fvIn7U4b75v6jSo)| Looks good | 
| 1.  | Substrate module: pallet-docsig | <ul><li>[x] </li></ul> |[Pallet Docsig](https://github.com/aisland-dao/aisland-node/tree/main/pallets/docsig), new functions: [newBlob()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L234), [destroyBlob()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L264), [storePublickey()](https://github.com/aisland-dao/aisland-node/blob/66433f01b1ec232ca013a7d2cb8d8ca1eaebe007/pallets/docsig/src/lib.rs#L210)| Substrate node is working fine. Please add more pallet tests. | 
| 2.  | Dapp Feature: Standard Signature Image | <ul><li>[x] </li></ul> |The main entry point is the function [render_settings()](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1676)| Working fine| 
| 3.  | Dapp Feature: Signature Marker | <ul><li>[x] </li></ul> |[Plugin Source Code](https://github.com/aisland-dao/docsig/tree/main/editorjs-signature-plugin), [UI Implementation](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1412)| Working fine| 
| 4.  | Dapp Feature: Encryption | <ul><li>[x] </li></ul> |[Encryption/Decryption Module](https://github.com/aisland-dao/docsig/blob/main/modules/cryptostream.js), [UI to manage encryption keys](https://github.com/aisland-dao/docsig/blob/84e57c3fa448fc71e412f126394355864c40c3ed/client-src/index.js#L1881), [Implementation on UI multiple points](https://github.com/aisland-dao/docsig/blob/main/client-src/index.js)| Working fine | 

# General Notes

Good work! Dev documentation is good. User journey in the product should also be documented. I was able to sign document using polkadot js extension. Clicking button to switch address is unintuative. I recommend to add a dropdown. Looking forward to the second milestone and multiple counter signatories capabilities.

Server installation instructions worked:

```
➜  docsig git:(main) ✗ ./docsig-server.sh
./docsig-server.sh: line 2: cd: /usr/src/docsig: No such file or directory
DocSig Server - v.1.00
Listening on port tcp/3000 ....
Connected to: Aisland Testnet - Substrate Node - 2.0.0-c2df9d630ef
```

Aisland substrate node is compiling successfully and creating blocks:

```
➜  aisland-node git:(main) ./target/release/aisland-node --dev

2023-09-08 13:34:44 Substrate Node
2023-09-08 13:34:44 ✌️  version 2.0.0-9070f071c51
2023-09-08 13:34:44 ❤️  by , 2017-2023
2023-09-08 13:34:44 📋 Chain specification: Development
2023-09-08 13:34:44 🏷  Node name: hushed-division-2893
2023-09-08 13:34:44 👤 Role: AUTHORITY
2023-09-08 13:34:44 💾 Database: RocksDb at /var/folders/y7/ptnfy3l129ggy6lt6lm3v7f00000gn/T/substrateKYFEv6/chains/dev/db/full
2023-09-08 13:34:44 ⛓  Native runtime: aisland-node-108 (aisland-node-1.tx1.au1)
2023-09-08 13:34:44 🔨 Initializing Genesis block/state (state: 0xb4f6…be9a, header-hash: 0x2451…9f43)
2023-09-08 13:34:44 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-09-08 13:34:44 Using default protocol ID "sup" because none is configured in the chain specs
2023-09-08 13:34:44 🏷  Local node identity is: 12D3KooWE85xKa7WN3NzTsJgrtxwkZQanm3aTiRvQpecentpJyCg
2023-09-08 13:34:44 💻 Operating system: macos
2023-09-08 13:34:44 💻 CPU architecture: aarch64
2023-09-08 13:34:44 📦 Highest known block at #0
2023-09-08 13:34:44 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-09-08 13:34:44 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]
2023-09-08 13:34:44 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]
2023-09-08 13:34:48 🙌 Starting consensus session on top of parent 0x2451468f9236590fb80c2fbe8a9dd4c7d15cdb3a12fa952b3e38af9fcf7f9f43
2023-09-08 13:34:48 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x9cbe225818525d937cfde3cb4b8996b18c9c3fc3b060ebadbf1e4ecb2fbf17dc; parent_hash: 0x2451…9f43; extrinsics (1): [0xd531…37fc]]
2023-09-08 13:34:48 🔖 Pre-sealed block for proposal at 1. Hash now 0x8aedc8b88b7d61ee114833bf46b0e923d84eb12641229a4ead6706c847754a2a, previously 0x9cbe225818525d937cfde3cb4b8996b18c9c3fc3b060ebadbf1e4ecb2fbf17dc.
2023-09-08 13:34:48 ✨ Imported #1 (0x8aed…4a2a)
2023-09-08 13:34:49 💤 Idle (0 peers), best: #1 (0x8aed…4a2a), finalized #0 (0x2451…9f43), ⬇ 0 ⬆ 0
2023-09-08 13:34:54 🙌 Starting consensus session on top of parent 0x8aedc8b88b7d61ee114833bf46b0e923d84eb12641229a4ead6706c847754a2a
2023-09-08 13:34:54 🎁 Prepared block for proposing at 2 (0 ms) [hash: 0x40e0268fe5f42b5d3c9f1892dcc25dd6da3cadcbf83e7a458b09ef369f3354f4; parent_hash: 0x8aed…4a2a; extrinsics (1): [0x4989…3613]]
2023-09-08 13:34:54 🔖 Pre-sealed block for proposal at 2. Hash now 0x23d89873b967db3ce99b49c28106f4075be4d7b8ed253e5e83e49bc880a74173, previously 0x40e0268fe5f42b5d3c9f1892dcc25dd6da3cadcbf83e7a458b09ef369f3354f4.
2023-09-08 13:34:54 ✨ Imported #2 (0x23d8…4173)
```

Pallet unit tests are passing. I would suggest to add more tests to cover more scenarios:

```
   Compiling proc-macro2 v1.0.56
   Compiling quote v1.0.26
   Compiling unicode-ident v1.0.8
   Compiling libc v0.2.142
   Compiling cfg-if v1.0.0
   Compiling version_check v0.9.4
   Compiling typenum v1.16.0
   Compiling autocfg v1.1.0
   Compiling serde_derive v1.0.160
   Compiling serde v1.0.160
   Compiling subtle v2.4.1
   Compiling thiserror v1.0.40
   Compiling memchr v2.5.0
   Compiling syn v1.0.109
   Compiling once_cell v1.17.1
   Compiling generic-array v0.14.7
   Compiling arrayvec v0.7.2
   Compiling const-oid v0.9.2
   Compiling ppv-lite86 v0.2.17
   Compiling cc v1.0.79
   Compiling byteorder v1.4.3
   Compiling ahash v0.7.6
   Compiling num-traits v0.2.15
   Compiling bytes v1.4.0
   Compiling byte-slice-cast v1.2.2
   Compiling log v0.4.17
   Compiling tinyvec_macros v0.1.1
   Compiling lazy_static v1.4.0
   Compiling tinyvec v1.6.0
   Compiling getrandom v0.2.9
   Compiling rand_core v0.6.4
   Compiling cpufeatures v0.2.7
   Compiling syn v2.0.15
   Compiling rand_chacha v0.3.1
   Compiling regex-syntax v0.7.1
   Compiling rand v0.8.5
   Compiling crunchy v0.2.2
   Compiling aho-corasick v1.0.1
   Compiling getrandom v0.1.16
   Compiling unicode-normalization v0.1.22
   Compiling regex v1.8.1
   Compiling hashbrown v0.12.3
   Compiling indexmap v1.9.3
   Compiling num-integer v0.1.45
   Compiling io-lifetimes v1.0.10
   Compiling unicode-bidi v0.3.13
   Compiling percent-encoding v2.2.0
   Compiling form_urlencoded v1.1.0
   Compiling idna v0.3.0
   Compiling sp-std v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling anyhow v1.0.71
   Compiling crc32fast v1.3.2
   Compiling url v2.3.1
   Compiling rand_core v0.5.1
   Compiling errno v0.3.1
   Compiling itoa v1.0.6
   Compiling rustix v0.37.19
   Compiling bitflags v1.3.2
   Compiling target-lexicon v0.12.7
   Compiling serde_json v1.0.96
   Compiling stable_deref_trait v1.2.0
   Compiling smallvec v1.10.0
   Compiling static_assertions v1.1.0
   Compiling fallible-iterator v0.2.0
   Compiling zeroize_derive v1.4.2
   Compiling thiserror-impl v1.0.40
   Compiling gimli v0.26.2
   Compiling zeroize v1.6.0
   Compiling Inflector v0.11.4
   Compiling memoffset v0.6.5
   Compiling num-bigint v0.4.3
   Compiling rustix v0.36.13
   Compiling impl-trait-for-tuples v0.2.2
   Compiling derive_more v0.99.17
   Compiling pin-project-lite v0.2.9
   Compiling ryu v1.0.13
   Compiling paste v1.0.12
   Compiling generic-array v0.12.4
   Compiling keccak v0.1.3
   Compiling wasmtime-runtime v6.0.2
   Compiling tracing-core v0.1.30
   Compiling num-rational v0.4.1
   Compiling crypto-common v0.1.6
   Compiling block-buffer v0.10.4
   Compiling digest v0.9.0
   Compiling rustc-demangle v0.1.23
   Compiling digest v0.10.6
   Compiling arrayref v0.3.7
   Compiling cpp_demangle v0.3.5
   Compiling futures-core v0.3.28
   Compiling libm v0.2.6
   Compiling libsecp256k1-core v0.3.0
   Compiling block-buffer v0.9.0
   Compiling memfd v0.6.3
   Compiling mach v0.3.2
   Compiling psm v0.1.21
   Compiling wasmtime-jit-debug v6.0.2
   Compiling slab v0.4.8
   Compiling wasmtime-asm-macros v6.0.2
   Compiling futures-task v0.3.28
   Compiling core-foundation-sys v0.8.4
   Compiling byte-tools v0.3.1
   Compiling futures-channel v0.3.28
   Compiling ref-cast v1.0.16
   Compiling opaque-debug v0.3.0
   Compiling regex-syntax v0.6.29
   Compiling sha2 v0.9.9
   Compiling block-padding v0.1.5
   Compiling iana-time-zone v0.1.56
   Compiling regex-automata v0.1.10
   Compiling toml v0.5.11
   Compiling cranelift-entity v0.93.2
   Compiling wasmparser v0.100.0
   Compiling object v0.29.0
   Compiling bincode v1.3.3
   Compiling proc-macro-crate v1.1.3
   Compiling impl-serde v0.4.0
   Compiling hmac v0.12.1
   Compiling sha2 v0.10.6
   Compiling digest v0.8.1
   Compiling addr2line v0.17.0
   Compiling tracing-attributes v0.1.24
   Compiling parity-scale-codec-derive v3.1.4
   Compiling scale-info-derive v2.6.0
   Compiling ref-cast-impl v1.0.16
   Compiling wasmtime-jit-icache-coherence v6.0.2
   Compiling futures-util v0.3.28
   Compiling hex v0.4.3
   Compiling downcast-rs v1.2.0
   Compiling futures-sink v0.3.28
   Compiling wasmtime v6.0.2
   Compiling rustc-hex v2.1.0
   Compiling parity-wasm v0.45.0
   Compiling memory_units v0.4.0
   Compiling wasmi_core v0.2.1
   Compiling tracing v0.1.37
   Compiling tracing-serde v0.1.3
   Compiling parity-scale-codec v3.5.0
   Compiling matchers v0.0.1
   Compiling chrono v0.4.24
   Compiling wasmi-validation v0.5.0
   Compiling wasmtime-types v6.0.2
   Compiling block-buffer v0.7.3
   Compiling libsecp256k1-gen-ecmult v0.3.0
   Compiling libsecp256k1-gen-genmult v0.3.0
   Compiling crypto-mac v0.11.1
   Compiling crypto-mac v0.8.0
   Compiling wasmtime-environ v6.0.2
   Compiling tracing-log v0.1.3
   Compiling sp-debug-derive v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling futures-macro v0.3.28
   Compiling rand_chacha v0.2.2
   Compiling sharded-slab v0.1.4
   Compiling secp256k1-sys v0.6.1
   Compiling thread_local v1.1.7
   Compiling lock_api v0.4.9
   Compiling fake-simd v0.1.2
   Compiling opaque-debug v0.2.3
   Compiling hash-db v0.16.0
   Compiling parking_lot_core v0.9.7
   Compiling futures-io v0.3.28
   Compiling pin-utils v0.1.0
   Compiling constant_time_eq v0.2.5
   Compiling ansi_term v0.12.1
   Compiling unicode-xid v0.2.4
   Compiling blake2b_simd v1.0.1
   Compiling ss58-registry v1.40.0
   Compiling sha2 v0.8.2
   Compiling tracing-subscriber v0.2.25
   Compiling rand v0.7.3
   Compiling hmac v0.8.1
   Compiling libsecp256k1 v0.7.1
   Compiling wasmi v0.13.2
   Compiling fixed-hash v0.8.0
   Compiling uint v0.9.5
   Compiling curve25519-dalek v2.1.3
   Compiling sha3 v0.10.7
   Compiling twox-hash v1.6.3
   Compiling wasmtime-jit v6.0.2
   Compiling blake2 v0.10.6
   Compiling curve25519-dalek v3.2.0
   Compiling merlin v2.0.1
   Compiling num_cpus v1.15.0
   Compiling ahash v0.8.3
   Compiling environmental v1.1.4
   Compiling scopeguard v1.1.0
   Compiling arrayvec v0.5.2
   Compiling schnorrkel v0.9.1
   Compiling sp-core-hashing v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling hmac-drbg v0.3.0
   Compiling hmac v0.11.0
   Compiling pbkdf2 v0.8.0
   Compiling sp-runtime-interface-proc-macro v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pbkdf2 v0.11.0
   Compiling dyn-clonable-impl v0.9.0
   Compiling scale-info v2.6.0
   Compiling impl-codec v0.6.0
   Compiling sp-storage v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling futures-executor v0.3.28
   Compiling sp-tracing v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling num-format v0.4.4
   Compiling sp-wasm-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling dyn-clone v1.0.11
   Compiling base64 v0.13.1
   Compiling rustc-hash v1.1.0
   Compiling tiny-bip39 v1.0.0
   Compiling dyn-clonable v0.9.0
   Compiling secp256k1 v0.24.3
   Compiling futures v0.3.28
   Compiling substrate-bip39 v0.4.4
   Compiling parking_lot v0.12.1
   Compiling ed25519-zebra v3.1.0
   Compiling secrecy v0.8.0
   Compiling hash256-std-hasher v0.15.2
   Compiling array-bytes v4.2.0
   Compiling bs58 v0.4.0
   Compiling hashbrown v0.13.2
   Compiling sp-externalities v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling backtrace v0.3.67
   Compiling gimli v0.27.2
   Compiling rustversion v1.0.12
   Compiling adler v1.0.2
   Compiling object v0.30.3
   Compiling miniz_oxide v0.6.2
   Compiling memory-db v0.32.0
   Compiling trie-db v0.27.1
   Compiling schnellru v0.2.1
   Compiling trie-root v0.18.0
   Compiling signature v1.6.4
   Compiling nohash-hasher v0.2.0
   Compiling ed25519 v1.5.3
   Compiling integer-sqrt v0.1.5
   Compiling ed25519-dalek v1.0.1
   Compiling either v1.8.1
   Compiling der v0.7.5
   Compiling ff v0.13.0
   Compiling expander v1.0.0
   Compiling base16ct v0.2.0
   Compiling group v0.13.0
   Compiling primitive-types v0.12.1
   Compiling bounded-collections v0.1.6
   Compiling sp-arithmetic v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling crypto-bigint v0.5.2
   Compiling addr2line v0.19.0
   Compiling sec1 v0.7.2
   Compiling sp-io v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling fs-err v2.9.0
   Compiling async-trait v0.1.68
   Compiling sp-runtime-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling elliptic-curve v0.13.4
   Compiling frame-metadata v15.1.0
   Compiling sp-version-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-panic-handler v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-core-hashing-proc-macro v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling rfc6979 v0.4.0
   Compiling signature v2.1.0
   Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-core v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling ecdsa v0.16.6
   Compiling frame-support-procedural-tools v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling itertools v0.10.5
   Compiling derive-syn-parse v0.1.5
   Compiling cfg-expr v0.10.3
   Compiling proc-macro-warning v0.3.1
   Compiling k256 v0.13.1
   Compiling sp-trie v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keystore v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-weights v4.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tt-call v1.0.9
   Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-state-machine v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-application-crypto v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-version v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-docsig v0.1.1 (/Users/nikhil/w3f/aisland-node/pallets/docsig)
    Finished test [unoptimized + debuginfo] target(s) in 32.46s
     Running unittests src/lib.rs (/Users/nikhil/w3f/aisland-node/target/debug/deps/pallet_docsig-b9ebd586f5dc2fc2)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_publickey ... ok
test tests::test_signature ... ok
test tests::test_documents ... ok
test tests::test_blob ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

   Doc-tests pallet-docsig

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

## Docker

Docker instructions works.
```
± |main ✓| → docker compose up -d
[+] Running 17/17
 ✔ db 8 layers [⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                     17.8s 
   ✔ 44ba2882f8eb Pull complete                                                                                                                                                                       3.7s 
   ✔ 08b8223d0cb6 Pull complete                                                                                                                                                                       3.7s 
   ✔ ef2696fb09d6 Pull complete                                                                                                                                                                       3.9s 
   ✔ 6ae32c298a0d Pull complete                                                                                                                                                                       4.0s 
   ✔ 5dc97cb97b44 Pull complete                                                                                                                                                                       4.0s 
   ✔ a3e4bee69a58 Pull complete                                                                                                                                                                      13.2s 
   ✔ b29c582204c9 Pull complete                                                                                                                                                                      13.2s 
   ✔ f05405b8aaed Pull complete                                                                                                                                                                      13.3s 
 ✔ adminer 7 layers [⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                 24.3s 
   ✔ 5dea071bb978 Pull complete                                                                                                                                                                      18.4s 
   ✔ 0d84864d5d25 Pull complete                                                                                                                                                                      19.5s 
   ✔ 792bf43687eb Pull complete                                                                                                                                                                      19.6s 
   ✔ 37ef5d260982 Pull complete                                                                                                                                                                      19.6s 
   ✔ 81b9b963ca6d Pull complete                                                                                                                                                                      19.7s 
   ✔ e57581023c92 Pull complete                                                                                                                                                                      19.7s 
   ✔ e97ed40bb1db Pull complete                                                                                                                                                                      19.8s 
[+] Building 103.7s (12/12) FINISHED                                                                                                                                                                       
 => [node internal] load build definition from Dockerfile                                                                                                                                             0.0s
 => => transferring dockerfile: 1.73kB                                                                                                                                                                0.0s
 => [node internal] load .dockerignore                                                                                                                                                                0.0s
 => => transferring context: 2B                                                                                                                                                                       0.0s
 => [node internal] load metadata for docker.io/library/node:bookworm                                                                                                                                 3.6s
 => [node auth] library/node:pull token for registry-1.docker.io                                                                                                                                      0.0s
 => [node 1/6] FROM docker.io/library/node:bookworm@sha256:69cf8e7dcc78e63db74ca6ed570e571e41029accdac21b219b6ac57e9aca63cf                                                                          30.8s
 => => resolve docker.io/library/node:bookworm@sha256:69cf8e7dcc78e63db74ca6ed570e571e41029accdac21b219b6ac57e9aca63cf                                                                                0.0s
 => => sha256:012c0b3e998c1a0c0bedcf712eaaafb188580529dd026a04aa1ce13fdb39e42b 49.56MB / 49.56MB                                                                                                     15.9s
 => => sha256:00046d1e755ea94fa55a700ca9a10597e4fac7c47be19d970a359b0267a51fbf 24.03MB / 24.03MB                                                                                                      9.8s
 => => sha256:69cf8e7dcc78e63db74ca6ed570e571e41029accdac21b219b6ac57e9aca63cf 1.21kB / 1.21kB                                                                                                        0.0s
 => => sha256:0bd93ced182308206e17448e6109a0dd0ce1c06055f4cb931d540fe351771c4f 2.00kB / 2.00kB                                                                                                        0.0s
 => => sha256:add6f751ed2b5b3807ea7f1b9795703baa208fc3524cace837a5efed0d7a1e65 7.28kB / 7.28kB                                                                                                        0.0s
 => => sha256:9f13f5a53d118643c1f1ff294867c09f224d00edca21f56caa71c2321f8ca004 64.11MB / 64.11MB                                                                                                      5.6s
 => => sha256:e13e76ad6279c3d69aa6842a935288c7db66878ec3b7815edd3bb34647bd7ed0 210.99MB / 210.99MB                                                                                                   27.0s
 => => sha256:95103e803d28f894dcd63cb26fd3ace3211c34974f1584c71a37a9251dfcbab9 3.37kB / 3.37kB                                                                                                       10.3s
 => => sha256:c3ef23edee6cf431437d4f9cc78b3b87bce5ef68e22200798c9c679fdca248eb 47.64MB / 47.64MB                                                                                                     22.7s
 => => extracting sha256:012c0b3e998c1a0c0bedcf712eaaafb188580529dd026a04aa1ce13fdb39e42b                                                                                                             0.6s
 => => sha256:cde810d346470fc963bc5c320fb13586c5a0ebb1a99281d5ac0911b9b347d938 2.28MB / 2.28MB                                                                                                       18.5s
 => => extracting sha256:00046d1e755ea94fa55a700ca9a10597e4fac7c47be19d970a359b0267a51fbf                                                                                                             0.2s
 => => extracting sha256:9f13f5a53d118643c1f1ff294867c09f224d00edca21f56caa71c2321f8ca004                                                                                                             0.8s
 => => sha256:cfeacc2c3f89e4dbfcfa2b20ea2f0987b0e9d0cc534f5a02b155a1bb80e6fe95 453B / 453B                                                                                                           18.8s
 => => extracting sha256:e13e76ad6279c3d69aa6842a935288c7db66878ec3b7815edd3bb34647bd7ed0                                                                                                             2.4s
 => => extracting sha256:95103e803d28f894dcd63cb26fd3ace3211c34974f1584c71a37a9251dfcbab9                                                                                                             0.0s
 => => extracting sha256:c3ef23edee6cf431437d4f9cc78b3b87bce5ef68e22200798c9c679fdca248eb                                                                                                             0.8s
 => => extracting sha256:cde810d346470fc963bc5c320fb13586c5a0ebb1a99281d5ac0911b9b347d938                                                                                                             0.0s
 => => extracting sha256:cfeacc2c3f89e4dbfcfa2b20ea2f0987b0e9d0cc534f5a02b155a1bb80e6fe95                                                                                                             0.0s
 => [node internal] load build context                                                                                                                                                                0.4s
 => => transferring context: 97.69MB                                                                                                                                                                  0.3s
 => [node 2/6] RUN apt-get update     && apt-get install -y wget gnupg     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -     && sh -c 'echo "deb [arch=amd6  30.9s
 => [node 3/6] RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser     && mkdir -p /home/pptruser/Downloads     && chown -R pptruser:pptruser /home/pptruser                   0.5s
 => [node 4/6] COPY ./ /home/pptruser/                                                                                                                                                                0.2s 
 => [node 5/6] WORKDIR /home/pptruser                                                                                                                                                                 0.0s 
 => [node 6/6] RUN npm install                                                                                                                                                                       33.4s 
 => [node] exporting to image                                                                                                                                                                         4.1s 
 => => exporting layers                                                                                                                                                                               4.1s 
 => => writing image sha256:3c49e1e1efe7891bd18f9ebf0898bc4c82ee973603a0ce540aaacc3be1dbbc79                                                                                                          0.0s 
 => => naming to docker.io/library/docsig-node                                                                                                                                                        0.0s 
[+] Running 3/4                                                                                                                                                                                            
 ✔ Network docsig_default      Created                                                                                                                                                                0.0s 
 ✔ Container docsig-node-1     Started                                                                                                                                                                0.7s 
 ⠿ Container docsig-db-1       Starting                                                                                                                                                               0.7s 
 ✔ Container docsig-adminer-1  Started                                                                                                                                                                0.5s 
```
I am able to open UI on `localhost:3000` and sign docs.

## UI

I am able to run UI and sign documents.

<img width="1445" alt="Screenshot 2023-09-08 at 14 07 16" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/dd943504-ea38-4a2b-a31b-77d3c8228d1b">


## Tests

Unit tests are passing. Total 30 tests:

```
➜  docsig git:(main) ✗ npm test


> docsig-server@1.0.0 test
> jest

  console.log
    http://localhost:3000/templateview?account=5FYib34nmpSpmkarhh2oxuvkVgknNF4QMQAx493zNpmgpj8B&token=e7e8c39d179b02402094cfa2b528231375ed47186d38a247dfaf773956256766&documentid=1

      at Object.log (test.js:361:13)

  console.log
    <p style="text-align:left;">Second test document</p>

      at Object.log (test.js:364:13)

  console.log
    http://localhost:3000/docview?account=5FYib34nmpSpmkarhh2oxuvkVgknNF4QMQAx493zNpmgpj8B&token=e7e8c39d179b02402094cfa2b528231375ed47186d38a247dfaf773956256766&documentid=95

      at Object.log (test.js:375:13)

  console.log
    <p style="text-align:left;">Second test document</p>

      at Object.log (test.js:378:13)

 PASS  ./test.js
  ✓ asymmetric encryption/decryption (26 ms)
  ✓ symmetric encryption/decryption (333 ms)
  ✓ symmetric encryption/decryption failed (291 ms)
  ✓ asymmetric encryption/decryption failed with wrong public key (12 ms)
  ✓ asymmetric encryption/decryption failed with wrong keys pair (17 ms)
  ✓ bytestohex valid
  ✓ bytestohex failed
  ✓ arrayBufferToBase64 valid
  ✓ arrayBufferToBase64 failed
  ✓ base64ToArrayBuffer valid
  ✓ base64ToArrayBuffer failed (1 ms)
  ✓ Api - Signin (32 ms)
  ✓ Api - Signin (5 ms)
  ✓ Api - Fetch Documents - Draft (315 ms)
  ✓ Api - Fetch Documents - Waiting (171 ms)
  ✓ Api - Fetch Documents - Action Required (13 ms)
  ✓ Api - Fetch Documents - Approved (8 ms)
  ✓ Api - Fetch Documents - Rejected (8 ms)
  ✓ Api - Fetch Templates (8 ms)
  ✓ Api - Fetch Templates Tags (8 ms)
  ✓ Api - Fetch Signature Fonts (8 ms)
  ✓ Api - Fetch Public Signature (7 ms)
  ✓ Api - Get Private Key - Not found (6 ms)
  ✓ Api - Update Signature Font (7 ms)
  ✓ Api - Update Document Counterpart  (4 ms)
  ✓ Api - Update Document Description  (6 ms)
  ✓ Api - Download document (8 ms)
  ✓ Api - Get Template Data (5 ms)
  ✓ Api - Get Template Rendering (26 ms)
  ✓ Api - Get Document Rendering (6 ms)

Test Suites: 1 passed, 1 total
Tests:       30 passed, 30 total
Snapshots:   0 total
Time:        1.575 s, estimated 2 s
Ran all test suites.
```
