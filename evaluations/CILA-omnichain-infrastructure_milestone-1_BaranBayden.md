# Evaluation
- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CILA-omnichain-infrastructure.md
- **Milestone:** 1
- **Kusama Identity:** [DBeoBrck8oQxfoT4U2sTFLU4CwAuN67t8uXJ6koZqGUF5VN]
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/LICENSE-APACHE.txt | Correct License|
| 0b.  | Documentation |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/tree/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/docs | Well Written, I recommend create a seperate README.md file in docs folder for easy navigation. |
| 0c | Testing and Testing Guide |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/README.md | Documentation is acceptable but there are some shortcomings. The project uses PROTOC and Make, but you have to install PROTOC and Make manually - this is not specified in the documentation and therefore the first build gave an error. But other than that, there is no problem, it works as stated in the instructions. |
 0d. | Docker |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/Dockerfile | Dockerfile seems well-structured for building a Substrate node. Detailed evaluation in the General Notes. | 
| 1. | Event Store |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/pallets/event-store/src/lib.rs | Working as per application |
| 2. | Dispatcher |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/pallets/dispatcher/src/lib.rs  | Working as per application| Working as per application |
| 3.  | Aggregate |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/common/src/aggregate.rs | Working as per application | 
| 4.  | Event |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/proto/src/event.rs |  Working as per application  | 
| 5.  | Command |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/proto/src/command.rs | Working as per application  | 
| 6.  | Operations |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/e6b68cbf5c41a0c7b0d7e919a5c4d522051d7e0f/proto/src/operation.rs | Working as per application | 


## General Notes

License (0a):

The project uses the APACHE License, which is appropriate for open-source projects. This ensures that the software can be freely used, modified, and shared.

Documentation (0b):

The documentation is well-written, providing a clear understanding of the project's modules and their functionalities.
Recommendation: It would be beneficial to have a separate README.md file within the docs folder. This would provide an index or overview of the documentation, making it easier for users to navigate and find relevant information.
 
Testing and Testing Guide (0c):

The documentation for testing is acceptable, but there are areas for improvement.
A notable issue is the absence of instructions regarding the manual installation of PROTOC. This omission can lead to build errors for users who are unaware of this requirement.
Aside from the mentioned issue, the testing process works as described in the instructions.

Docker (0d):

The project includes a Dockerfile that appears to be well-structured for building a Substrate node. This ensures that the project can be containerized and run in isolated environments, enhancing portability and scalability.

Modules:

Event Store (1): The module, located here, functions as per its intended application, handling the storage of events.

Dispatcher (2): This module implements the dispatching of operation commands, ensuring that commands are routed and executed appropriately.

Aggregate (3): Found here, this module offers a CQRS aggregate implementation, which is crucial for event-sourced systems.

Event (4): The event module operates as per its application, likely handling the definition and processing of events.

Command (5): Located here, this module seems to handle command definitions and operations.

Operations (6): The operations module seems to handle command definitions and operations.


In summary, the project appears to be well-structured, with clear documentation and a focus on event-driven architecture. The use of Docker ensures portability, while the modular approach allows for scalability and maintainability. However, there are areas, especially in testing documentation, where improvements can be made to enhance the user experience. In my opinion, this milestone has been successfully completed.


### Dockerfile 

Two-Stage Build: The Dockerfile uses a two-stage build. The first stage (builder) is for compiling the Substrate node, and the second stage creates the final image. This approach reduces the final image size because only the compiled binary is copied over, leaving behind the build tools and intermediate files.

Phusion Base Image: The use of phusion/baseimage is a deviation from more commonly used base images like alpine or ubuntu. Phusion is designed to be used as a base image for Docker and could provide benefits like better signal handling and process management.




### 'cargo build --release' command

<details>

<summary>Attempt #1 (Failed) - Without Sourcing PROTOC because of missing part in documentation </summary>
<p>
 
```commandline

    Updating crates.io index
    Updating git repository `https://github.com/paritytech/substrate.git`
    Updating git repository `https://github.com/yahortsaryk/quick-protobuf.git`
    Downloaded asn1-rs v0.3.1
    Downloaded block-buffer v0.9.0
    Downloaded bitvec v1.0.1
    Downloaded base16ct v0.2.0
    Downloaded Inflector v0.11.4
    Downloaded array-bytes v4.2.0
    Downloaded bytes v1.4.0
  Downloaded directories-next v2.0.0
  Downloaded ecdsa v0.14.8
  Downloaded addr2line v0.19.0
  Downloaded cargo-platform v0.1.2
  Downloaded cxxbridge-macro v1.0.94
  Downloaded clang-sys v1.6.1
  Downloaded dirs-sys v0.3.7
  Downloaded digest v0.10.6
  Downloaded der v0.7.5
  Downloaded clap v4.2.7
  Downloaded hostname v0.3.1
  Downloaded dyn-clonable v0.9.0
  Downloaded fastrand v1.9.0
  Downloaded float-cmp v0.9.0
  Downloaded byte-tools v0.3.1
  Downloaded ff v0.12.1
  Downloaded errno v0.3.1
  Downloaded integer-sqrt v0.1.5
  Downloaded impl-codec v0.6.0
  Downloaded futures-core v0.3.28
  Downloaded event-listener v2.5.3
  Downloaded futures-sink v0.3.28
  Downloaded futures-macro v0.3.28
  Downloaded http-range-header v0.3.0
  Downloaded ff v0.13.0
  Downloaded itoa v1.0.6
  Downloaded fake-simd v0.1.2
  Downloaded httpdate v1.0.2
  Downloaded hmac v0.11.0
  Downloaded generic-array v0.14.7
  Downloaded crossbeam-deque v0.8.3
  Downloaded fs-err v2.9.0
  Downloaded fnv v1.0.7
  Downloaded hex v0.4.3
  Downloaded inout v0.1.3
  Downloaded getrandom v0.1.16
  Downloaded cfg-if v1.0.0
  Downloaded is-terminal v0.4.7
  Downloaded fragile v2.0.0
  Downloaded crypto-common v0.1.6
  Downloaded humantime v2.1.0
  Downloaded ghash v0.5.0
  Downloaded futures-task v0.3.28
  Downloaded group v0.13.0
  Downloaded globset v0.4.10
  Downloaded futures-executor v0.3.28
  Downloaded either v1.8.1
  Downloaded form_urlencoded v1.1.0
  Downloaded fixedbitset v0.4.2
  Downloaded futures-channel v0.3.28
  Downloaded crossbeam-utils v0.8.15
  Downloaded httparse v1.8.0
  Downloaded getrandom v0.2.9
  Downloaded hmac v0.12.1
  Downloaded crc32fast v1.3.2
  Downloaded ecdsa v0.16.6
  Downloaded env_logger v0.10.0
  Downloaded cc v1.0.79
  Downloaded indexmap v1.9.3
  Downloaded hyper-rustls v0.23.2
  Downloaded elliptic-curve v0.12.3
  Downloaded jobserver v0.1.26
  Downloaded iana-time-zone v0.1.56
  Downloaded glob v0.3.1
  Downloaded elliptic-curve v0.13.4
  Downloaded impl-serde v0.4.0
  Downloaded derive_more v0.99.17
  Downloaded codespan-reporting v0.11.1
  Downloaded flate2 v1.0.26
  Downloaded js-sys v0.3.61
  Downloaded hashbrown v0.13.2
  Downloaded http v0.2.9
  Downloaded hashbrown v0.12.3
  Downloaded itertools v0.10.5
  Downloaded jsonrpsee-server v0.16.2
  Downloaded futures-util v0.3.28
  Downloaded h2 v0.3.18
  Downloaded bzip2-sys v0.1.11+1.0.8
  Downloaded idna v0.3.0
  Downloaded bstr v1.4.0
  Downloaded libp2p-noise v0.41.0
  Downloaded adler v1.0.2
  Downloaded aho-corasick v0.7.20
  Downloaded ahash v0.8.3
  Downloaded ahash v0.7.6
  Downloaded ansi_term v0.12.1
  Downloaded aes v0.8.2
  Downloaded anstyle v1.0.0
  Downloaded anstream v0.3.2
  Downloaded async-trait v0.1.68
  Downloaded base16ct v0.1.1
  Downloaded bindgen v0.64.0
  Downloaded block-buffer v0.10.4
  Downloaded interceptor v0.8.2
  Downloaded fs4 v0.6.4
  Downloaded impl-trait-for-tuples v0.2.2
  Downloaded exit-future v0.2.0
  Downloaded hash256-std-hasher v0.15.2
  Downloaded fallible-iterator v0.2.0
  Downloaded if-watch v3.0.1
  Downloaded jsonrpsee-types v0.16.2
  Downloaded jsonrpsee v0.16.2
  Downloaded camino v1.1.4
  Downloaded cargo_metadata v0.15.4
  Downloaded cipher v0.3.0
  Downloaded chrono v0.4.24
  Downloaded cexpr v0.6.0
  Downloaded clap_derive v4.2.0
  Downloaded clap_builder v4.2.7
  Downloaded keccak v0.1.3
  Downloaded colorchoice v1.0.0
  Downloaded concurrent-queue v2.2.0
  Downloaded clap_lex v0.4.1
  Downloaded const-oid v0.9.2
  Downloaded crc-catalog v2.2.0
  Downloaded crc v3.0.1
  Downloaded kvdb-memorydb v0.13.0
  Downloaded ed25519-zebra v3.1.0
  Downloaded cranelift-entity v0.93.2
  Downloaded crypto-mac v0.8.0
  Downloaded cpufeatures v0.2.7
  Downloaded ctr v0.9.2
  Downloaded crossbeam-epoch v0.9.14
  Downloaded crypto-bigint v0.5.2
  Downloaded comfy-table v6.1.4
  Downloaded cfg_aliases v0.1.1
  Downloaded cipher v0.4.4
  Downloaded crypto-mac v0.11.1
  Downloaded cxx-build v1.0.94
  Downloaded darling_core v0.14.4
  Downloaded darling v0.14.4
  Downloaded crossbeam-channel v0.5.8
  Downloaded curve25519-dalek v2.1.3
  Downloaded libp2p-mdns v0.42.0
  Downloaded der v0.6.1
  Downloaded darling_macro v0.14.4
  Downloaded digest v0.8.1
  Downloaded libp2p-request-response v0.23.0
  Downloaded libp2p-ping v0.41.0
  Downloaded directories v4.0.1
  Downloaded dirs-sys-next v0.1.2
  Downloaded digest v0.9.0
  Downloaded cranelift-bforest v0.93.2
  Downloaded downcast v0.11.0
  Downloaded downcast-rs v1.2.0
  Downloaded dyn-clone v1.0.11
  Downloaded generic-array v0.12.4
  Downloaded heck v0.4.1
  Downloaded libp2p-identify v0.41.1
  Downloaded link-cplusplus v1.0.8
  Downloaded libm v0.2.6
  Downloaded aead v0.3.2
  Downloaded linked-hash-map v0.5.6
  Downloaded blake3 v1.3.3
  Downloaded libsecp256k1-gen-genmult v0.3.0
  Downloaded libsecp256k1 v0.7.1
  Downloaded displaydoc v0.2.4
  Downloaded difflib v0.4.0
  Downloaded derive_builder_macro v0.11.2
  Downloaded crypto-bigint v0.4.9
  Downloaded jsonrpsee-proc-macros v0.16.2
  Downloaded crunchy v0.2.2
  Downloaded enum-as-inner v0.5.1
  Downloaded ctr v0.8.0
  Downloaded byteorder v1.4.3
  Downloaded bytemuck v1.13.1
  Downloaded file-per-thread-logger v0.1.6
  Downloaded environmental v1.1.4
  Downloaded bs58 v0.4.0
  Downloaded block-padding v0.2.1
  Downloaded block-padding v0.1.5
  Downloaded block-modes v0.7.0
  Downloaded block-buffer v0.7.3
  Downloaded bitflags v1.3.2
  Downloaded aes-gcm v0.9.4
  Downloaded bincode v1.3.3
  Downloaded beef v0.5.2
  Downloaded base64ct v1.6.0
  Downloaded base64 v0.21.0
  Downloaded base64 v0.13.1
  Downloaded aead v0.4.3
  Downloaded base-x v0.2.11
  Downloaded linux-raw-sys v0.1.4
  Downloaded libz-sys v1.1.9
  Downloaded funty v2.0.0
  Downloaded libp2p-metrics v0.11.0
  Downloaded aes v0.6.0
  Downloaded asn1-rs-derive v0.1.0
  Downloaded log v0.4.17
  Downloaded http-body v0.4.5
  Downloaded futures v0.3.28
  Downloaded libp2p-core v0.39.2
  Downloaded lru-cache v0.1.2
  Downloaded lazycell v1.3.0
  Downloaded matches v0.1.10
  Downloaded match_cfg v0.1.0
  Downloaded libp2p-core v0.38.0
  Downloaded memfd v0.6.3
  Downloaded md-5 v0.10.5
  Downloaded minimal-lexical v0.2.1
  Downloaded ed25519-dalek v1.0.1
  Downloaded memoffset v0.6.5
  Downloaded libsecp256k1-core v0.3.0
  Downloaded libc v0.2.142
  Downloaded miniz_oxide v0.6.2
  Downloaded lock_api v0.4.9
  Downloaded libp2p-swarm v0.41.1
  Downloaded libp2p-mplex v0.38.0
  Downloaded aes-gcm v0.10.1
  Downloaded blake2b_simd v1.0.1
  Downloaded build-helper v0.1.1
  Downloaded libp2p-quic v0.7.0-alpha
  Downloaded blake2s_simd v1.0.1
  Downloaded byte-slice-cast v1.2.2
  Downloaded cid v0.8.6
  Downloaded aes-soft v0.6.4
  Downloaded libp2p-kad v0.42.1
  Downloaded cranelift-native v0.93.2
  Downloaded cranelift-codegen-shared v0.93.2
  Downloaded bounded-collections v0.1.6
  Downloaded memchr v2.5.0
  Downloaded memoffset v0.8.0
  Downloaded cipher v0.2.5
  Downloaded asn1-rs v0.5.2
  Downloaded hyper v0.14.26
  Downloaded data-encoding-macro-internal v0.1.10
  Downloaded data-encoding v2.3.3
  Downloaded blake2 v0.10.6
  Downloaded lz4-sys v1.9.4
  Downloaded mio v0.8.6
  Downloaded constant_time_eq v0.2.5
  Downloaded ipnet v2.7.2
  Downloaded fxhash v0.2.1
  Downloaded mockall v0.11.4
  Downloaded chacha20poly1305 v0.9.1
  Downloaded asn1_der v0.7.6
  Downloaded ed25519 v1.5.3
  Downloaded data-encoding-macro v0.1.12
  Downloaded mockall_derive v0.11.4
  Downloaded dtoa v1.0.6
  Downloaded futures-timer v3.0.2
  Downloaded gethostname v0.2.3
  Downloaded cxxbridge-flags v1.0.94
  Downloaded gimli v0.26.2
  Downloaded filetime v0.2.21
  Downloaded linked_hash_set v0.1.4
  Downloaded hkdf v0.12.3
  Downloaded handlebars v4.3.6
  Downloaded instant v0.1.12
  Downloaded libp2p-dns v0.38.0
  Downloaded group v0.12.1
  Downloaded dyn-clonable-impl v0.9.0
  Downloaded cfg-expr v0.10.3
  Downloaded multiaddr v0.17.1
  Downloaded names v0.13.0
  Downloaded libsecp256k1-gen-ecmult v0.3.0
  Downloaded libp2p-wasm-ext v0.38.0
  Downloaded libp2p-swarm-derive v0.31.0
  Downloaded libp2p-tcp v0.38.0
  Downloaded fixed-hash v0.8.0
  Downloaded cranelift-frontend v0.93.2
  Downloaded core2 v0.4.0
  Downloaded libp2p-websocket v0.40.0
  Downloaded bumpalo v3.12.1
  Downloaded normalize-line-endings v0.3.0
  Downloaded nohash-hasher v0.2.0
  Downloaded nix v0.24.3
  Downloaded netlink-packet-core v0.4.2
  Downloaded num-complex v0.4.3
  Downloaded derive_builder v0.11.2
  Downloaded num-format v0.4.4
  Downloaded object v0.30.3
  Downloaded num-traits v0.2.15
  Downloaded parking_lot_core v0.9.7
  Downloaded multibase v0.9.1
  Downloaded multihash-derive v0.8.1
  Downloaded cpp_demangle v0.3.5
  Downloaded openssl-probe v0.1.5
  Downloaded object v0.29.0
  Downloaded p256 v0.11.1
  Downloaded expander v1.0.0
  Downloaded pem v1.1.1
  Downloaded linregress v0.5.1
  Downloaded matchers v0.0.1
  Downloaded opaque-debug v0.3.0
  Downloaded memory-db v0.32.0
  Downloaded der-parser v7.0.0
  Downloaded cranelift-isle v0.93.2
  Downloaded kvdb v0.13.0
  Downloaded num-rational v0.4.1
  Downloaded libp2p-webrtc v0.4.0-alpha
  Downloaded cranelift-codegen-meta v0.93.2
  Downloaded opaque-debug v0.2.3
  Downloaded libp2p-tls v0.1.0
  Downloaded hash-db v0.16.0
  Downloaded futures-rustls v0.22.2
  Downloaded derive_builder_core v0.11.2
  Downloaded jsonrpsee-core v0.16.2
  Downloaded multimap v0.8.3
  Downloaded hmac-drbg v0.3.0
  Downloaded chacha20 v0.8.2
  Downloaded fdlimit v0.2.1
  Downloaded k256 v0.13.1
  Downloaded parking_lot_core v0.8.6
  Downloaded parking_lot v0.11.2
  Downloaded peeking_take_while v0.1.2
  Downloaded fs2 v0.4.3
  Downloaded ip_network v0.4.1
  Downloaded futures-io v0.3.28
  Downloaded lru v0.8.1
  Downloaded paste v1.0.12
  Downloaded derive-syn-parse v0.1.5
  Downloaded asynchronous-codec v0.6.1
  Downloaded backtrace v0.3.67
  Downloaded autocfg v1.1.0
  Downloaded oid-registry v0.6.1
  Downloaded atty v0.2.14
  Downloaded atomic-waker v1.1.1
  Downloaded async-channel v1.8.0
  Downloaded asn1-rs-impl v0.1.0
  Downloaded asn1-rs-derive v0.4.0
  Downloaded arrayvec v0.7.2
  Downloaded arrayvec v0.5.2
  Downloaded num-integer v0.1.45
  Downloaded arrayref v0.3.7
  Downloaded arc-swap v1.6.0
  Downloaded approx v0.5.1
  Downloaded anyhow v1.0.71
  Downloaded anstyle-query v1.0.0
  Downloaded anstyle-parse v0.2.0
  Downloaded aho-corasick v1.0.1
  Downloaded aes v0.7.5
  Downloaded finality-grandpa v0.16.2
  Downloaded ccm v0.3.0
  Downloaded aead v0.5.2
  Downloaded addr2line v0.17.0
  Downloaded cranelift-wasm v0.93.2
  Downloaded libp2p v0.50.1
  Downloaded percent-encoding v2.2.0
  Downloaded libloading v0.7.4
  Downloaded lazy_static v1.4.0
  Downloaded gimli v0.27.2
  Downloaded frame-metadata v15.1.0
  Downloaded der-parser v8.2.0
  Downloaded pem-rfc7468 v0.6.0
  Downloaded pbkdf2 v0.11.0
  Downloaded matrixmultiply v0.3.7
  Downloaded linux-raw-sys v0.3.7
  Downloaded cxx v1.0.94
  Downloaded pkcs8 v0.9.0
  Downloaded pin-project-lite v0.2.9
  Downloaded pest_meta v2.6.0
  Downloaded polyval v0.6.0
  Downloaded ppv-lite86 v0.2.17
  Downloaded pkg-config v0.3.27
  Downloaded proc-macro-error-attr v1.0.4
  Downloaded predicates-tree v1.0.9
  Downloaded pkcs8 v0.10.2
  Downloaded pin-project-internal v1.0.12
  Downloaded predicates v2.1.5
  Downloaded idna v0.2.3
  Downloaded merlin v2.0.1
  Downloaded ident_case v1.0.1
  Downloaded proc-macro-error v1.0.4
  Downloaded libp2p-identity v0.1.2
  Downloaded platforms v3.0.2
  Downloaded platforms v2.0.0
  Downloaded ghash v0.4.4
  Downloaded io-lifetimes v1.0.10
  Downloaded libp2p-yamux v0.42.0
  Downloaded parking_lot v0.12.1
  Downloaded memory_units v0.4.0
  Downloaded parity-wasm v0.45.0
  Downloaded nom v7.1.3
  Downloaded curve25519-dalek v3.2.0
  Downloaded nalgebra-macros v0.2.0
  Downloaded curve25519-dalek v4.0.0-rc.1
  Downloaded predicates-core v1.0.6
  Downloaded polyval v0.5.3
  Downloaded pest_generator v2.6.0
  Downloaded num_cpus v1.15.0
  Downloaded once_cell v1.17.1
  Downloaded prometheus-client v0.18.1
  Downloaded num-bigint v0.4.3
  Downloaded prometheus v0.13.3
  Downloaded pin-project v1.0.12
  Downloaded pin-utils v0.1.0
  Downloaded quick-error v1.2.3
  Downloaded proc-macro2 v1.0.56
  Downloaded prost-build v0.11.9
  Downloaded prettyplease v0.1.25
  Downloaded netlink-packet-utils v0.5.2
  Downloaded netlink-packet-route v0.12.0
  Downloaded psm v0.1.21
  Downloaded prost-types v0.11.9
  Downloaded radium v0.7.0
  Downloaded hmac v0.8.1
  Downloaded rand_chacha v0.3.1
  Downloaded prometheus-client-derive-text-encode v0.3.0
  Downloaded multihash v0.17.0
  Downloaded kvdb-rocksdb v0.18.0
  Downloaded rand_core v0.6.4
  Downloaded parity-scale-codec-derive v3.1.4
  Downloaded rand v0.8.5
  Downloaded multihash v0.16.3
  Downloaded rand v0.7.3
  Downloaded parity-send-wrapper v0.1.0
  Downloaded p384 v0.11.2
  Downloaded quinn-proto v0.9.3
  Downloaded oid-registry v0.4.0
  Downloaded netlink-sys v0.8.5
  Downloaded multistream-select v0.12.1
  Downloaded cranelift-codegen v0.93.2
  Downloaded rayon-core v1.11.0
  Downloaded rand_chacha v0.2.2
  Downloaded rcgen v0.9.3
  Downloaded netlink-proto v0.10.0
  Downloaded pbkdf2 v0.8.0
  Downloaded rand_pcg v0.3.1
  Downloaded rayon v1.7.0
  Downloaded rfc6979 v0.4.0
  Downloaded ref-cast v1.0.16
  Downloaded rand_core v0.5.1
  Downloaded pest_derive v2.6.0
  Downloaded resolv-conf v0.7.0
  Downloaded parity-scale-codec v3.5.0
  Downloaded regex-automata v0.1.10
  Downloaded rtoolbox v0.0.1
  Downloaded rustc_version v0.4.0
  Downloaded rustc-hash v1.1.0
  Downloaded rusticata-macros v4.1.0
  Downloaded rustversion v1.0.12
  Downloaded rustls-pemfile v1.0.2
  Downloaded rustls-native-certs v0.6.2
  Downloaded rfc6979 v0.3.1
  Downloaded same-file v1.0.6
  Downloaded regex v1.8.1
  Downloaded proc-macro-crate v1.1.3
  Downloaded pin-project-lite v0.1.12
  Downloaded rustc-demangle v0.1.23
  Downloaded ryu v1.0.13
  Downloaded poly1305 v0.7.2
  Downloaded sct v0.7.0
  Downloaded petgraph v0.6.3
  Downloaded safe_arch v0.6.0
  Downloaded primitive-types v0.12.1
  Downloaded scopeguard v1.1.0
  Downloaded multiaddr v0.16.0
  Downloaded memmap2 v0.5.10
  Downloaded regex-syntax v0.6.29
  Downloaded nalgebra v0.32.2
  Downloaded quicksink v0.1.2
  Downloaded sec1 v0.3.0
  Downloaded secrecy v0.8.0
  Downloaded sec1 v0.7.2
  Downloaded sct v0.6.1
  Downloaded parity-db v0.4.7
  Downloaded semver v1.0.17
  Downloaded semver-parser v0.7.0
  Downloaded serde_spanned v0.6.1
  Downloaded secp256k1 v0.24.3
  Downloaded rustls v0.19.1
  Downloaded sha1 v0.10.5
  Downloaded pest v2.6.0
  Downloaded regex-syntax v0.7.1
  Downloaded serde_derive v1.0.160
  Downloaded serde v1.0.160
  Downloaded schnellru v0.2.1
  Downloaded shlex v1.1.0
  Downloaded prost v0.11.9
  Downloaded proc-macro-warning v0.3.1
  Downloaded sha2 v0.9.9
  Downloaded sharded-slab v0.1.4
  Downloaded signature v2.1.0
  Downloaded signature v1.6.4
  Downloaded scale-info v2.6.0
  Downloaded spin v0.5.2
  Downloaded serde_json v1.0.96
  Downloaded spki v0.6.0
  Downloaded signal-hook-registry v1.4.1
  Downloaded rustix v0.37.19
  Downloaded soketto v0.7.1
  Downloaded snap v1.1.0
  Downloaded spki v0.7.1
  Downloaded static_assertions v1.1.0
  Downloaded stable_deref_trait v1.2.0
  Downloaded sha2 v0.10.6
  Downloaded siphasher v0.3.10
  Downloaded rcgen v0.10.0
  Downloaded socket2 v0.4.9
  Downloaded slab v0.4.8
  Downloaded rocksdb v0.20.1
  Downloaded strum v0.24.1
  Downloaded strsim v0.10.0
  Downloaded subtle v2.4.1
  Downloaded sdp v0.5.3
  Downloaded quick-protobuf v0.8.1
  Downloaded smallvec v1.10.0
  Downloaded strum_macros v0.24.3
  Downloaded tap v1.0.1
  Downloaded termcolor v1.2.0
  Downloaded syn v1.0.109
  Downloaded time-core v0.1.0
  Downloaded termtree v0.4.1
  Downloaded tinyvec_macros v0.1.1
  Downloaded syn v2.0.15
  Downloaded thread_local v1.1.7
  Downloaded rpassword v7.2.0
  Downloaded tinyvec v1.6.0
  Downloaded thiserror-impl v1.0.40
  Downloaded thiserror v1.0.40
  Downloaded synstructure v0.12.6
  Downloaded threadpool v1.8.1
  Downloaded tinytemplate v1.2.1
  Downloaded lz4 v1.24.0
  Downloaded slice-group-by v0.3.1
  Downloaded tempfile v3.5.0
  Downloaded rw-stream-sink v0.3.0
  Downloaded substring v1.4.5
  Downloaded tracing v0.1.37
  Downloaded time-macros v0.2.8
  Downloaded tokio-macros v2.1.0
  Downloaded time v0.1.45
  Downloaded tracing-attributes v0.1.24
  Downloaded scale-info-derive v2.6.0
  Downloaded rustc-hex v2.1.0
  Downloaded simba v0.8.1
  Downloaded tokio-stream v0.1.14
  Downloaded tokio-rustls v0.23.4
  Downloaded rtnetlink v0.10.1
  Downloaded tower-service v0.3.2
  Downloaded tracing-serde v0.1.3
  Downloaded scratch v1.0.5
  Downloaded toml v0.5.11
  Downloaded tracing-log v0.1.3
  Downloaded tracing-futures v0.2.5
  Downloaded time v0.3.20
  Downloaded tower-http v0.3.5
  Downloaded try-lock v0.2.4
  Downloaded semver v0.6.0
  Downloaded tracing-core v0.1.30
  Downloaded sha-1 v0.9.8
  Downloaded tokio-util v0.7.8
  Downloaded twox-hash v1.6.3
  Downloaded regalloc2 v0.5.1
  Downloaded toml_edit v0.19.8
  Downloaded typenum v1.16.0
  Downloaded tower v0.4.13
  Downloaded unicode-width v0.1.10
  Downloaded universal-hash v0.5.0
  Downloaded version_check v0.9.4
  Downloaded unicode-bidi v0.3.13
  Downloaded untrusted v0.7.1
  Downloaded waitgroup v0.1.2
  Downloaded rtp v0.6.8
  Downloaded prost-derive v0.11.9
  Downloaded void v1.0.2
  Downloaded unicode-xid v0.2.4
  Downloaded unicode-ident v1.0.8
  Downloaded rtcp v0.7.2
  Downloaded utf8parse v0.2.1
  Downloaded trust-dns-resolver v0.22.0
  Downloaded unsigned-varint v0.7.1
  Downloaded ucd-trie v0.1.5
  Downloaded tiny-bip39 v1.0.0
  Downloaded trie-root v0.18.0
  Downloaded unicode-normalization v0.1.22
  Downloaded quote v1.0.26
  Downloaded tracing-subscriber v0.2.25
  Downloaded sha2 v0.8.2
  Downloaded url v2.3.1
  Downloaded wasm-bindgen-backend v0.2.84
  Downloaded walkdir v2.3.3
  Downloaded static_init_macro v1.0.2
  Downloaded wasm-bindgen-macro-support v0.2.84
  Downloaded wasm-bindgen-shared v0.2.84
  Downloaded substrate-bip39 v0.4.4
  Downloaded wasmi_core v0.2.1
  Downloaded wasm-bindgen-macro v0.2.84
  Downloaded toml v0.7.3
  Downloaded wasmi v0.13.2
  Downloaded ss58-registry v1.40.0
  Downloaded thousands v0.2.0
  Downloaded wasm-bindgen v0.2.84
  Downloaded want v0.3.0
  Downloaded which v4.4.0
  Downloaded webpki v0.22.0
  Downloaded tikv-jemalloc-sys v0.5.3+5.3.0-patched
  Downloaded wasm-bindgen-futures v0.4.34
  Downloaded trie-db v0.27.1
  Downloaded webpki v0.21.4
  Downloaded static_init v1.0.3
  Downloaded wide v0.7.8
  Downloaded target-lexicon v0.12.7
  Downloaded x509-parser v0.14.0
  Downloaded wasmtime-jit-icache-coherence v6.0.2
  Downloaded zeroize v1.6.0
  Downloaded wyz v0.5.1
  Downloaded wasm-timer v0.2.5
  Downloaded zstd-safe v5.0.2+zstd.1.5.2
  Downloaded zstd v0.12.3+zstd.1.5.2
  Downloaded x509-parser v0.13.2
  Downloaded tower-layer v0.3.2
  Downloaded toml_datetime v0.6.1
  Downloaded zeroize_derive v1.4.2
  Downloaded zstd-safe v6.0.5+zstd.1.5.4
  Downloaded x25519-dalek v1.1.1
  Downloaded winnow v0.4.6
  Downloaded webrtc-media v0.5.1
  Downloaded webpki-roots v0.22.6
  Downloaded rustls v0.20.8
  Downloaded zstd v0.11.2+zstd.1.5.2
  Downloaded universal-hash v0.4.1
  Downloaded rawpointer v0.2.1
  Downloaded ref-cast-impl v1.0.16
  Downloaded prost-codec v0.3.0
  Downloaded tt-call v1.0.9
  Downloaded yamux v0.10.2
  Downloaded wasmparser v0.100.0
  Downloaded x25519-dalek v2.0.0-pre.1
  Downloaded uint v0.9.5
  Downloaded schnorrkel v0.9.1
  Downloaded wasmtime-asm-macros v6.0.2
  Downloaded wasmi-validation v0.5.0
  Downloaded wasm-opt v0.111.0
  Downloaded wasm-opt-cxx-sys v0.111.0
  Downloaded uuid v1.3.2
  Downloaded snow v0.9.2
  Downloaded wasmtime-jit-debug v6.0.2
  Downloaded wasmtime-jit v6.0.2
  Downloaded webrtc-util v0.7.0
  Downloaded zstd-sys v2.0.8+zstd.1.5.5
  Downloaded webrtc-data v0.6.0
  Downloaded wasmtime-types v6.0.2
  Downloaded sha3 v0.10.7
  Downloaded webrtc-srtp v0.9.1
  Downloaded turn v0.6.1
  Downloaded wasm-instrument v0.3.0
  Downloaded stun v0.4.4
  Downloaded tokio v1.28.0
  Downloaded librocksdb-sys v0.10.0+7.9.2
  Downloaded wasmtime-cache v6.0.2
  Downloaded secp256k1-sys v0.6.1
  Downloaded wasmtime-environ v6.0.2
  Downloaded trust-dns-proto v0.22.0
  Downloaded ring v0.16.20
  Downloaded wasmtime-runtime v6.0.2
  Downloaded yasna v0.5.2
  Downloaded region v3.0.0
  Downloaded webrtc-mdns v0.5.2
  Downloaded webrtc-ice v0.9.1
  Downloaded wasmtime-cranelift v6.0.2
  Downloaded webrtc-dtls v0.7.1
  Downloaded webrtc-sctp v0.7.0
  Downloaded webrtc v0.6.0
  Downloaded wasm-opt-sys v0.111.0
  Downloaded rustix v0.36.13
  Downloaded wasmtime v6.0.2
  Downloaded 665 crates (58.9 MB) in 6.28s (largest was `librocksdb-sys` at 6.2 MB)
   Compiling proc-macro2 v1.0.56
   Compiling quote v1.0.26
   Compiling unicode-ident v1.0.8
   Compiling libc v0.2.142
   Compiling syn v2.0.15
   Compiling cfg-if v1.0.0
   Compiling version_check v0.9.4
   Compiling autocfg v1.1.0
   Compiling serde_derive v1.0.160
   Compiling serde v1.0.160
   Compiling memchr v2.5.0
   Compiling syn v1.0.109
   Compiling jobserver v0.1.26
   Compiling cc v1.0.79
   Compiling typenum v1.16.0
   Compiling zeroize_derive v1.4.2
   Compiling generic-array v0.14.7
   Compiling log v0.4.17
   Compiling thiserror v1.0.40
   Compiling thiserror-impl v1.0.40
   Compiling zeroize v1.6.0
   Compiling getrandom v0.2.9
   Compiling once_cell v1.17.1
   Compiling ahash v0.7.6
   Compiling anyhow v1.0.71
   Compiling indexmap v1.9.3
   Compiling subtle v2.4.1
   Compiling bytes v1.4.0
   Compiling smallvec v1.10.0
   Compiling pin-project-lite v0.2.9
   Compiling io-lifetimes v1.0.10
   Compiling scopeguard v1.1.0
   Compiling futures-core v0.3.28
   Compiling aho-corasick v1.0.1
   Compiling rustix v0.37.19
   Compiling regex-syntax v0.7.1
   Compiling regex v1.8.1
   Compiling futures-sink v0.3.28
   Compiling num_cpus v1.15.0
   Compiling futures-io v0.3.28
   Compiling slab v0.4.8
   Compiling lock_api v0.4.9
   Compiling futures-channel v0.3.28
   Compiling arrayvec v0.7.2
   Compiling futures-task v0.3.28
   Compiling toml v0.5.11
   Compiling futures-util v0.3.28
   Compiling proc-macro-crate v1.1.3
   Compiling rand_core v0.6.4
   Compiling futures-macro v0.3.28
   Compiling pin-utils v0.1.0
   Compiling byteorder v1.4.3
   Compiling parking_lot_core v0.9.7
   Compiling cpufeatures v0.2.7
   Compiling const-oid v0.9.2
   Compiling lazy_static v1.4.0
   Compiling ppv-lite86 v0.2.17
   Compiling parking_lot v0.12.1
   Compiling block-buffer v0.10.4
   Compiling crypto-common v0.1.6
   Compiling digest v0.10.6
   Compiling rand_chacha v0.3.1
   Compiling rand v0.8.5
   Compiling pkg-config v0.3.27
   Compiling tinyvec_macros v0.1.1
   Compiling tinyvec v1.6.0
   Compiling opaque-debug v0.3.0
   Compiling unicode-normalization v0.1.22
   Compiling futures-executor v0.3.28
   Compiling digest v0.9.0
   Compiling futures v0.3.28
   Compiling hashbrown v0.12.3
   Compiling unicode-bidi v0.3.13
   Compiling bitflags v1.3.2
   Compiling percent-encoding v2.2.0
   Compiling form_urlencoded v1.1.0
   Compiling idna v0.3.0
   Compiling url v2.3.1
   Compiling getrandom v0.1.16
   Compiling sha2 v0.10.6
   Compiling block-buffer v0.9.0
   Compiling static_assertions v1.1.0
   Compiling rand_core v0.5.1
   Compiling tracing-core v0.1.30
   Compiling arrayref v0.3.7
   Compiling either v1.8.1
   Compiling num-traits v0.2.15
   Compiling tracing-attributes v0.1.24
   Compiling unicode-xid v0.2.4
   Compiling keccak v0.1.3
   Compiling itoa v1.0.6
   Compiling tracing v0.1.37
   Compiling constant_time_eq v0.2.5
   Compiling instant v0.1.12
   Compiling zstd-sys v2.0.8+zstd.1.5.5
   Compiling serde_json v1.0.96
   Compiling crc32fast v1.3.2
   Compiling blake2b_simd v1.0.1
   Compiling sha3 v0.10.7
   Compiling rand_chacha v0.2.2
   Compiling sha2 v0.9.9
   Compiling paste v1.0.12
   Compiling rand v0.7.3
   Compiling curve25519-dalek v3.2.0
   Compiling parity-scale-codec-derive v3.1.4
   Compiling impl-trait-for-tuples v0.2.2
   Compiling crunchy v0.2.2
   Compiling byte-slice-cast v1.2.2
   Compiling parity-scale-codec v3.5.0
   Compiling bs58 v0.4.0
   Compiling linux-raw-sys v0.3.7
   Compiling crossbeam-utils v0.8.15
   Compiling num-integer v0.1.45
   Compiling base64 v0.13.1
   Compiling cranelift-entity v0.93.2
   Compiling target-lexicon v0.12.7
   Compiling fallible-iterator v0.2.0
   Compiling stable_deref_trait v1.2.0
   Compiling gimli v0.26.2
   Compiling ryu v1.0.13
   Compiling cranelift-isle v0.93.2
   Compiling scale-info-derive v2.6.0
   Compiling derive_more v0.99.17
   Compiling sp-std v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling cranelift-codegen-shared v0.93.2
   Compiling cranelift-codegen-meta v0.93.2
   Compiling scale-info v2.6.0
   Compiling cranelift-codegen v0.93.2
   Compiling is-terminal v0.4.7
   Compiling wasmparser v0.100.0
   Compiling fxhash v0.2.1
   Compiling num-bigint v0.4.3
   Compiling memoffset v0.8.0
   Compiling rustix v0.36.13
   Compiling parking_lot_core v0.8.6
   Compiling hex v0.4.3
   Compiling slice-group-by v0.3.1
   Compiling regalloc2 v0.5.1
   Compiling wasmtime-types v6.0.2
   Compiling cranelift-bforest v0.93.2
   Compiling object v0.29.0
   Compiling crossbeam-epoch v0.9.14
   Compiling num-rational v0.4.1
   Compiling errno v0.3.1
   Compiling bumpalo v3.12.1
   Compiling linux-raw-sys v0.1.4
   Compiling itertools v0.10.5
   Compiling Inflector v0.11.4
   Compiling memoffset v0.6.5
   Compiling zstd-safe v5.0.2+zstd.1.5.2
   Compiling parking_lot v0.11.2
   Compiling wasmtime-environ v6.0.2
   Compiling uint v0.9.5
   Compiling blake2 v0.10.6
   Compiling generic-array v0.12.4
   Compiling wasmtime-runtime v6.0.2
   Compiling rustc-demangle v0.1.23
   Compiling signature v1.6.4
   Compiling cpp_demangle v0.3.5
   Compiling libm v0.2.6
   Compiling rayon-core v1.11.0
   Compiling humantime v2.1.0
   Compiling termcolor v1.2.0
   Compiling env_logger v0.10.0
   Compiling ed25519 v1.5.3
   Compiling libsecp256k1-core v0.3.0
   Compiling crossbeam-deque v0.8.3
   Compiling cranelift-frontend v0.93.2
   Compiling wasmtime-jit-debug v6.0.2
   Compiling crossbeam-channel v0.5.8
   Compiling memfd v0.6.3
   Compiling bincode v1.3.3
   Compiling psm v0.1.21
   Compiling wasmtime-asm-macros v6.0.2
   Compiling time v0.1.45
   Compiling dirs-sys-next v0.1.2
   Compiling iana-time-zone v0.1.56
   Compiling regex-syntax v0.6.29
   Compiling ref-cast v1.0.16
   Compiling wasmtime-cache v6.0.2
   Compiling rustc-hash v1.1.0
   Compiling byte-tools v0.3.1
   Compiling parity-wasm v0.45.0
   Compiling block-padding v0.1.5
   Compiling regex-automata v0.1.10
   Compiling chrono v0.4.24
   Compiling directories-next v2.0.0
   Compiling cranelift-wasm v0.93.2
   Compiling ed25519-dalek v1.0.1
   Compiling file-per-thread-logger v0.1.6
   Compiling digest v0.8.1
   Compiling cranelift-native v0.93.2
   Compiling addr2line v0.17.0
   Compiling region v3.0.0
   Compiling hmac v0.12.1
   Compiling impl-serde v0.4.0
   Compiling wasmtime-jit-icache-coherence v6.0.2
   Compiling ref-cast-impl v1.0.16
   Compiling wasmtime v6.0.2
   Compiling downcast-rs v1.2.0
   Compiling memory_units v0.4.0
   Compiling rustc-hex v2.1.0
   Compiling wasmi_core v0.2.1
   Compiling wasmtime-cranelift v6.0.2
   Compiling rayon v1.7.0
   Compiling matchers v0.0.1
   Compiling block-buffer v0.7.3
   Compiling wasmi-validation v0.5.0
   Compiling libsecp256k1-gen-genmult v0.3.0
   Compiling libsecp256k1-gen-ecmult v0.3.0
   Compiling tracing-log v0.1.3
   Compiling sharded-slab v0.1.4
   Compiling tracing-serde v0.1.3
   Compiling crypto-mac v0.8.0
   Compiling crypto-mac v0.11.1
   Compiling thread_local v1.1.7
   Compiling secp256k1-sys v0.6.1
   Compiling sp-debug-derive v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling fake-simd v0.1.2
   Compiling ansi_term v0.12.1
   Compiling opaque-debug v0.2.3
   Compiling hash-db v0.16.0
   Compiling sha2 v0.8.2
   Compiling tracing-subscriber v0.2.25
   Compiling sp-storage v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling hmac v0.8.1
   Compiling libsecp256k1 v0.7.1
   Compiling wasmi v0.13.2
   Compiling fixed-hash v0.8.0
   Compiling curve25519-dalek v2.1.3
   Compiling ss58-registry v1.40.0
   Compiling impl-codec v0.6.0
   Compiling merlin v2.0.1
   Compiling environmental v1.1.4
   Compiling arrayvec v0.5.2
   Compiling schnorrkel v0.9.1
   Compiling sp-externalities v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling primitive-types v0.12.1
   Compiling hmac-drbg v0.3.0
   Compiling sp-tracing v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling hmac v0.11.0
   Compiling pbkdf2 v0.8.0
   Compiling sp-runtime-interface-proc-macro v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling num-format v0.4.4
   Compiling twox-hash v1.6.3
   Compiling pbkdf2 v0.11.0
   Compiling dyn-clonable-impl v0.9.0
   Compiling dyn-clone v1.0.11
   Compiling dyn-clonable v0.9.0
   Compiling tiny-bip39 v1.0.0
   Compiling sp-core-hashing v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling substrate-bip39 v0.4.4
   Compiling ed25519-zebra v3.1.0
   Compiling hash256-std-hasher v0.15.2
   Compiling bounded-collections v0.1.6
   Compiling secrecy v0.8.0
   Compiling array-bytes v4.2.0
   Compiling rustversion v1.0.12
   Compiling nohash-hasher v0.2.0
   Compiling ahash v0.8.3
   Compiling heck v0.4.1
   Compiling hashbrown v0.13.2
   Compiling backtrace v0.3.67
   Compiling adler v1.0.2
   Compiling gimli v0.27.2
   Compiling addr2line v0.19.0
   Compiling miniz_oxide v0.6.2
   Compiling object v0.30.3
   Compiling trie-db v0.27.1
   Compiling schnellru v0.2.1
   Compiling trie-root v0.18.0
   Compiling memory-db v0.32.0
   Compiling integer-sqrt v0.1.5
   Compiling sp-arithmetic v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sp-panic-handler v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sp-io v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling async-trait v0.1.68
   Compiling fnv v1.0.7
   Compiling tokio v1.28.0
   Compiling fastrand v1.9.0
   Compiling expander v1.0.0
   Compiling tempfile v3.5.0
   Compiling mio v0.8.6
   Compiling signal-hook-registry v1.4.1
   Compiling socket2 v0.4.9
   Compiling tokio-macros v2.1.0
   Compiling fs-err v2.9.0
   Compiling sp-version-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sp-core-hashing-proc-macro v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling prost-derive v0.11.9
   Compiling frame-metadata v15.1.0
   Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling futures-timer v3.0.2
   Compiling prettyplease v0.1.25
   Compiling prost v0.11.9
   Compiling fixedbitset v0.4.2
   Compiling petgraph v0.6.3
   Compiling prost-types v0.11.9
   Compiling which v4.4.0
   Compiling multimap v0.8.3
   Compiling prost-build v0.11.9
   Compiling proc-macro-error-attr v1.0.4
   Compiling http v0.2.9
   Compiling asynchronous-codec v0.6.1
   Compiling proc-macro-error v1.0.4
   Compiling data-encoding v2.3.3
   Compiling unsigned-varint v0.7.1
   Compiling blake3 v1.3.3
   Compiling httparse v1.8.0
   Compiling data-encoding-macro-internal v0.1.10
   Compiling wasmtime-jit v6.0.2
   Compiling synstructure v0.12.6
   Compiling pin-project-internal v1.0.12
   Compiling zstd-safe v6.0.5+zstd.1.5.4
   Compiling pin-project v1.0.12
   Compiling multihash-derive v0.8.1
   Compiling data-encoding-macro v0.1.12
   Compiling blake2s_simd v1.0.1
   Compiling der v0.6.1
   Compiling core2 v0.4.0
   Compiling base-x v0.2.11
   Compiling base64ct v1.6.0
   Compiling spki v0.6.0
   Compiling multibase v0.9.1
   Compiling pkcs8 v0.9.0
   Compiling libp2p-core v0.38.0
   Compiling base16ct v0.1.1
   Compiling sec1 v0.3.0
error: failed to run custom build command for `libp2p-core v0.38.0`

Caused by:
  process didn't exit successfully: `/home/azureuser/cila-substrate/target/release/build/libp2p-core-a4f4377f2ee4e51a/build-script-build` (exit status: 101)
  --- stderr
  thread 'main' panicked at 'Could not find `protoc` installation and this build crate cannot proceed without
      this knowledge. If `protoc` is installed and this crate had trouble finding
      it, you can set the `PROTOC` environment variable with the specific path to your
      installed `protoc` binary.If you're on debian, try `apt-get install protobuf-compiler` or download it from https://github.com/protocolbuffers/protobuf/releases

  For more information: https://docs.rs/prost-build/#sourcing-protoc
  ', /home/azureuser/.cargo/registry/src/github.com-1ecc6299db9ec823/prost-build-0.11.9/src/lib.rs:1457:10
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
warning: build failed, waiting for other jobs to finish...

```
</p>
</details>

<details>

<summary>Attempt 2 # (Successfull) After sourcing PROTOC and other modules</summary>
<p>

```commandline

   Compiling librocksdb-sys v0.10.0+7.9.2
   Compiling node-template-runtime v4.0.0-dev (/home/azureuser/cila-substrate/runtime)
    Building [=======================> ] 951/987: node-template-runtime(build), librocksdb-sys(build)                           

warning: use of deprecated constant `pallet::warnings::ConstantWeight_0::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/event-store/src/lib.rs:77:20
   |
77 |         #[pallet::weight(10_000)]
   |                          ^^^^^^
   |
   = note: `#[warn(deprecated)]` on by default

warning: use of deprecated constant `pallet::warnings::ConstantWeight_1::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/event-store/src/lib.rs:88:20
   |
88 |         #[pallet::weight(10_000)]
   |                          ^^^^^^

warning: use of deprecated constant `pallet::warnings::ConstantWeight_2::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/event-store/src/lib.rs:99:20
   |
99 |         #[pallet::weight(10_000)]
   |                          ^^^^^^

warning: `pallet-event-store` (lib) generated 3 warnings
warning: use of deprecated constant `pallet::warnings::ConstantWeight_0::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/dispatcher/src/lib.rs:64:20
   |
64 |         #[pallet::weight(10_000)]
   |                          ^^^^^^
   |
   = note: `#[warn(deprecated)]` on by default

warning: use of deprecated constant `pallet::warnings::ConstantWeight_1::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/dispatcher/src/lib.rs:75:20
   |
75 |         #[pallet::weight(10_000)]
   |                          ^^^^^^

warning: use of deprecated constant `pallet::warnings::ConstantWeight_2::_w`: 
                 It is deprecated to use hard-coded constant as call weight.
                 Please instead benchmark all calls or put the pallet into `dev` mode.
         
                 For more info see:
                     <https://github.com/paritytech/substrate/pull/13798>
  --> pallets/dispatcher/src/lib.rs:86:20
   |
86 |         #[pallet::weight(10_000)]
   |                          ^^^^^^

warning: `pallet-dispatcher` (lib) generated 3 warnings
warning: unused import: `frame_system::pallet_prelude::*`
  --> pallets/nfts-aggregate/src/lib.rs:11:6
   |
11 |     use frame_system::pallet_prelude::*;
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: `pallet-nfts-aggregate` (lib) generated 1 warning (run `cargo fix --lib -p pallet-nfts-aggregate` to apply 1 suggestion)
Building [=======================> ] 976/987: librocksdb-sys(build)                                                         
                                                                                              

   Compiling rocksdb v0.20.1
   Compiling kvdb-rocksdb v0.18.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#bca8a29d)
   Compiling omnichain-prototype v4.0.0-dev (/home/azureuser/cila-substrate/node)
    Finished release [optimized] target(s) in 36m 35s

```

</p>

</details>

### ./target/release/omnichain-prototype --dev Results

<details>
 <summary>Output</summary>

 <p>
  
```commandline

2023-08-15 23:18:20 Substrate Node    
2023-08-15 23:18:20 ✌️  version 4.0.0-dev-e6b68cbf5c4    
2023-08-15 23:18:20 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2023    
2023-08-15 23:18:20 📋 Chain specification: Development    
2023-08-15 23:18:20 🏷  Node name: loud-committee-0680    
2023-08-15 23:18:20 👤 Role: AUTHORITY    
2023-08-15 23:18:20 💾 Database: RocksDb at /tmp/substrateDXUJMd/chains/dev/db/full    
2023-08-15 23:18:20 ⛓  Native runtime: node-template-100 (node-template-1.tx1.au1)    
2023-08-15 23:18:22 🔨 Initializing Genesis block/state (state: 0x0694…d309, header-hash: 0x39ea…aad4)    
2023-08-15 23:18:22 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
2023-08-15 23:18:24 Using default protocol ID "sup" because none is configured in the chain specs    
2023-08-15 23:18:24 🏷  Local node identity is: 12D3KooWKqDt3nd2i3cMjL77rZmiuQ85ZyfHMVwKyU5aY6BRjP3c    
2023-08-15 23:18:24 💻 Operating system: linux    
2023-08-15 23:18:24 💻 CPU architecture: x86_64    
2023-08-15 23:18:24 💻 Target environment: gnu    
2023-08-15 23:18:24 💻 CPU: Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz    
2023-08-15 23:18:24 💻 CPU cores: 1    
2023-08-15 23:18:24 💻 Memory: 3359MB    
2023-08-15 23:18:24 💻 Kernel: 5.15.0-1042-azure    
2023-08-15 23:18:24 💻 Linux distribution: Ubuntu 20.04.6 LTS    
2023-08-15 23:18:24 💻 Virtual machine: yes    
2023-08-15 23:18:24 📦 Highest known block at #0    
2023-08-15 23:18:24 〽️ Prometheus exporter started at 127.0.0.1:9615    
2023-08-15 23:18:24 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]    
2023-08-15 23:18:24 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["*"]    
2023-08-15 23:18:29 💤 Idle (0 peers), best: #0 (0x39ea…aad4), finalized #0 (0x39ea…aad4), ⬇ 0 ⬆ 0    
2023-08-15 23:18:30 🙌 Starting consensus session on top of parent 0x39eaf8eb46e948404719f542c2adb0c14c6924e25345319c40eef79e877baad4    
2023-08-15 23:18:30 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x751c95fa49545716d3e9a49577bcac7fb937fe6f3d492fefcc356ec60f3ef29e; parent_hash: 0x39ea…aad4; extrinsics (1): [0x6365…c24b]]    
2023-08-15 23:18:30 🔖 Pre-sealed block for proposal at 1. Hash now 0x5fde6ef1b163a888032e932a9e47ef5a688be71fe30a5a9f8a0a6366ef99459c, previously 0x751c95fa49545716d3e9a49577bcac7fb937fe6f3d492fefcc356ec60f3ef29e.    
2023-08-15 23:18:30 ✨ Imported #1 (0x5fde…459c)    
2023-08-15 23:18:34 💤 Idle (0 peers), best: #1 (0x5fde…459c), finalized #0 (0x39ea…aad4), ⬇ 0 ⬆ 0    
2023-08-15 23:18:36 🙌 Starting consensus session on top of parent 0x5fde6ef1b163a888032e932a9e47ef5a688be71fe30a5a9f8a0a6366ef99459c    
2023-08-15 23:18:36 🎁 Prepared block for proposing at 2 (0 ms) [hash: 0xcc56091c2e5a7da9467dbaf92ab17d013a6c3e502d40694b168904719fb81cce; parent_hash: 0x5fde…459c; extrinsics (1): [0xd16c…d82b]]    
2023-08-15 23:18:36 🔖 Pre-sealed block for proposal at 2. Hash now 0x5e5830decb392023a95cc95761de293add01ec2bd001d9929859a1b0cedf6e8e, previously 0xcc56091c2e5a7da9467dbaf92ab17d013a6c3e502d40694b168904719fb81cce.    
2023-08-15 23:18:36 ✨ Imported #2 (0x5e58…6e8e)    
2023-08-15 23:18:39 💤 Idle (0 peers), best: #2 (0x5e58…6e8e), finalized #0 (0x39ea…aad4), ⬇ 0 ⬆ 0    
2023-08-15 23:18:42 🙌 Starting consensus session on top of parent 0x5e5830decb392023a95cc95761de293add01ec2bd001d9929859a1b0cedf6e8e    
2023-08-15 23:18:42 🎁 Prepared block for proposing at 3 (0 ms) [hash: 0xeaf0b005c36850c7c92d9b99a2d1971356aabbbbb16bb044cc21033343a6fcc1; parent_hash: 0x5e58…6e8e; extrinsics (1): [0x2b2b…ec77]]    
2023-08-15 23:18:42 🔖 Pre-sealed block for proposal at 3. Hash now 0x67273b24ad1bd7908fd3eabf1eb6147106eea15ce42b13379e7a0a96330283ea, previously 0xeaf0b005c36850c7c92d9b99a2d1971356aabbbbb16bb044cc21033343a6fcc1.    
2023-08-15 23:18:42 ✨ Imported #3 (0x6727…83ea)    
2023-08-15 23:18:44 💤 Idle (0 peers), best: #3 (0x6727…83ea), finalized #1 (0x5fde…459c), ⬇ 0 ⬆ 0    
2023-08-15 23:18:48 🙌 Starting consensus session on top of parent 0x67273b24ad1bd7908fd3eabf1eb6147106eea15ce42b13379e7a0a96330283ea    
2023-08-15 23:18:48 🎁 Prepared block for proposing at 4 (0 ms) [hash: 0xf781c30b48ea473c860aff83c433cae9157aff35860afef261a5fb1a46a78b4c; parent_hash: 0x6727…83ea; extrinsics (1): [0xeae4…a7dc]]    
2023-08-15 23:18:48 🔖 Pre-sealed block for proposal at 4. Hash now 0xe7ba3be56851b799627df63e2831a5503c5a5d37b91754d9b83e208f6509837d, previously 0xf781c30b48ea473c860aff83c433cae9157aff35860afef261a5fb1a46a78b4c.    
2023-08-15 23:18:48 ✨ Imported #4 (0xe7ba…837d)    
2023-08-15 23:18:49 💤 Idle (0 peers), best: #4 (0xe7ba…837d), finalized #1 (0x5fde…459c), ⬇ 0 ⬆ 0    
2023-08-15 23:18:54 🙌 Starting consensus session on top of parent 0xe7ba3be56851b799627df63e2831a5503c5a5d37b91754d9b83e208f6509837d    

... Continues to operate

'''

