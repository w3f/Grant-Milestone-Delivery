# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by niklabh,nikw3f


| Number  | Deliverable               | Accepted                 | Link                                                           | Notes                                                        |
| ------- | ------------------------- | ------------------------ | ------------------------------------------------------------   | ------------------------------------------------------------ |
| **0a.** | License                   | <ul><li>[x] </li> </ul>  | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE)  | Apache 2.0                                                   |
| **0b.** | Documentation             | <ul><li>[x] </li> </ul>  | [docs](https://docs.melodot.io/)                               | Light client is very well documented                         |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li> </ul>  | [Testing Guide](https://github.com/ZeroDAO/melodot/blob/w3f/LIGHT_TESTING.md) | Tests are working as expected |
| **0d.** | Docker                    | <ul><li>[x] </li> </ul>  | [Start Testing](https://github.com/ZeroDAO/melodot/blob/w3f/LIGHT_TESTING.md#using-docker) | Docker is working as expected    |
| **0e.** | Article                   | <ul><li>[x] </li> </ul>  | [medium](https://zerodao.medium.com/melodot-data-availability-layer-one-block-one-movie-cf831ad40e05) | Melodot is very well explained in this article |
| 1.      | Light client              | <ul><li>[x] </li> </ul>  | [Light](https://github.com/ZeroDAO/melodot/tree/w3f/light)   | Sampling and RPC is working fine                               |
| 2.      | melo_sampling             | <ul><li>[x] </li> </ul>  | [daser](https://github.com/ZeroDAO/melodot/tree/w3f/crates/daser) | daser crate code looks good                                     |


# General Notes

Great work, milestone delivery is high quality! Light client is very well documentated. Light client functionality and sampling is working as expected. I was able to run unit tests and e2e tests on ubuntu and docker container.

**Evaluation**

## Tests

Tests are working fine.

```
± |main ✓| → make test
./scripts/init.sh
SQLite not installed. Installing dependencies...
[sudo] password for nikhil:
Hit:1 http://prerelease.keybase.io/deb stable InRelease
Hit:2 http://packages.microsoft.com/repos/code stable InRelease
Hit:3 https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64  InRelease
Get:4 https://packages.cloud.google.com/apt cloud-sdk InRelease [6.361 B]
Hit:5 http://us.archive.ubuntu.com/ubuntu jammy InRelease
Err:4 https://packages.cloud.google.com/apt cloud-sdk InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B53DC80D13EDEF05
Hit:6 https://storage.googleapis.com/bazel-apt stable InRelease
Hit:7 https://ppa.launchpadcontent.net/lttng/stable-2.12/ubuntu jammy InRelease
Reading package lists... Done
W: http://prerelease.keybase.io/deb/dists/stable/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
N: Skipping acquire of configured file 'main/binary-i386/Packages' as repository 'http://prerelease.keybase.io/deb stable InRelease' doesn't support architecture 'i386'
W: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: https://packages.cloud.google.com/apt cloud-sdk InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B53DC80D13EDEF05
W: Failed to fetch https://packages.cloud.google.com/apt/dists/cloud-sdk/InRelease  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B53DC80D13EDEF05
W: Some index files failed to download. They have been ignored, or old ones used instead.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages were automatically installed and are no longer required:
  cuda-cccl-12-2 cuda-command-line-tools-12-2 cuda-compiler-12-2 cuda-crt-12-2 cuda-cudart-12-2 cuda-cudart-dev-12-2 cuda-cuobjdump-12-2 cuda-cupti-12-2 cuda-cupti-dev-12-2 cuda-cuxxfilt-12-2
  cuda-documentation-12-2 cuda-driver-dev-12-2 cuda-gdb-12-2 cuda-libraries-12-2 cuda-libraries-dev-12-2 cuda-nsight-12-2 cuda-nsight-compute-12-2 cuda-nsight-systems-12-2 cuda-nvcc-12-2
  cuda-nvdisasm-12-2 cuda-nvml-dev-12-2 cuda-nvprof-12-2 cuda-nvprune-12-2 cuda-nvrtc-12-2 cuda-nvrtc-dev-12-2 cuda-nvtx-12-2 cuda-nvvm-12-2 cuda-nvvp-12-2 cuda-opencl-12-2 cuda-opencl-dev-12-2
  cuda-profiler-api-12-2 cuda-sanitizer-12-2 cuda-toolkit-12-2 cuda-toolkit-12-2-config-common cuda-tools-12-2 cuda-visual-tools-12-2 gds-tools-12-2 libc++1 libc++1-14 libc++abi1-14 libcublas-12-2
  libcublas-dev-12-2 libcufft-12-2 libcufft-dev-12-2 libcufile-12-2 libcufile-dev-12-2 libcurand-12-2 libcurand-dev-12-2 libcusolver-12-2 libcusolver-dev-12-2 libcusparse-12-2 libcusparse-dev-12-2
  libnpp-12-2 libnpp-dev-12-2 libnvidia-common-535 libnvjitlink-12-2 libnvjitlink-dev-12-2 libnvjpeg-12-2 libnvjpeg-dev-12-2 libunwind-14 nsight-compute-2023.2.0 nsight-compute-2023.2.1
  nsight-systems-2023.2.3
Use 'sudo apt autoremove' to remove them.
Suggested packages:
  sqlite3-doc
The following NEW packages will be installed:
  libsqlite3-dev
0 upgraded, 1 newly installed, 0 to remove and 67 not upgraded.
Need to get 847 kB of archives.
After this operation, 3.166 kB of additional disk space will be used.
Get:1 http://us.archive.ubuntu.com/ubuntu jammy/main amd64 libsqlite3-dev amd64 3.37.2-2 [847 kB]
Fetched 847 kB in 3s (291 kB/s)
Selecting previously unselected package libsqlite3-dev:amd64.
(Reading database ... 304032 files and directories currently installed.)
Preparing to unpack .../libsqlite3-dev_3.37.2-2_amd64.deb ...
Unpacking libsqlite3-dev:amd64 (3.37.2-2) ...
Setting up libsqlite3-dev:amd64 (3.37.2-2) ...
SKIP_WASM_BUILD=1 cargo test --release --all
info: syncing channel updates for 'nightly-2023-10-10-x86_64-unknown-linux-gnu'
info: latest update on 2023-10-10, rust version 1.75.0-nightly (59edd6705 2023-10-09)
info: downloading component 'cargo'
info: downloading component 'clippy'
info: downloading component 'llvm-tools'
info: downloading component 'rust-std' for 'wasm32-unknown-unknown'
info: downloading component 'rust-std'
info: downloading component 'rustc'
info: downloading component 'rustfmt'
info: installing component 'cargo'
info: installing component 'clippy'
info: installing component 'llvm-tools'
info: installing component 'rust-std' for 'wasm32-unknown-unknown'
info: installing component 'rust-std'
info: installing component 'rustc'
info: installing component 'rustfmt'
    Updating crates.io index
    Updating git repository `https://github.com/ZeroDAO/rust-kzg.git`
    Updating git repository `https://github.com/supranational/blst.git`
  Downloaded gloo-utils v0.1.7
  Downloaded jsonrpsee-types v0.16.3
  Downloaded httpdate v1.0.3
  Downloaded pbkdf2 v0.12.2
  Downloaded async-fs v1.6.0
  Downloaded async-net v1.7.0
  Downloaded time-macros v0.2.13
  Downloaded der v0.7.8
  Downloaded globset v0.4.13
  Downloaded ss58-registry v1.43.0
  Downloaded jsonrpsee-proc-macros v0.16.3
  Downloaded sp-debug-derive v3.0.0
  Downloaded dyn-clone v1.0.13
  Downloaded thiserror v1.0.50
  Downloaded thiserror-impl v1.0.50
  Downloaded jsonrpsee v0.16.3
  Downloaded const-oid v0.9.5
  Downloaded plotters-svg v0.3.5
  Downloaded jsonrpsee-ws-client v0.16.3
  Downloaded cxxbridge-flags v1.0.106
  Downloaded subxt-macro v0.31.0
  Downloaded jsonrpsee-wasm-client v0.16.3
  Downloaded clap v4.4.1
  Downloaded petgraph v0.6.4
  Downloaded jsonrpsee-client-transport v0.16.3
  Downloaded if-watch v3.1.0
  Downloaded thiserror-core v1.0.38
  Downloaded ed25519 v2.2.2
  Downloaded gloo-net v0.2.6
  Downloaded serde_bytes v0.11.12
  Downloaded thiserror-core-impl v1.0.38
  Downloaded os_str_bytes v6.5.1
  Downloaded atomic v0.5.3
  Downloaded jsonrpsee-http-client v0.16.3
  Downloaded unsigned-varint v0.7.2
  Downloaded plotters-backend v0.3.5
  Downloaded num-complex v0.4.4
  Downloaded pin-project v1.1.3
  Downloaded async-lock v2.8.0
  Downloaded fs4 v0.6.6
  Downloaded byteorder v1.5.0
  Downloaded addr2line v0.21.0
  Downloaded libp2p-identity v0.1.3
  Downloaded pin-project-internal v1.1.3
  Downloaded clap_derive v4.4.0
  Downloaded cxxbridge-macro v1.0.106
  Downloaded curve25519-dalek-derive v0.1.0
  Downloaded structopt-derive v0.4.18
  Downloaded jsonrpsee-server v0.16.3
  Downloaded structopt v0.3.26
  Downloaded fallible-streaming-iterator v0.1.9
  Downloaded jsonrpsee-core v0.16.3
  Downloaded ruzstd v0.4.0
  Downloaded flate2 v1.0.27
  Downloaded allocator-api2 v0.2.16
  Downloaded backtrace v0.3.69
  Downloaded smol v1.3.0
  Downloaded ed25519-dalek v2.0.0
  Downloaded rustls-webpki v0.100.2
  Downloaded cxx-build v1.0.106
  Downloaded bip39 v2.0.0
  Downloaded ref-cast-impl v1.0.20
  Downloaded ref-cast v1.0.20
  Downloaded filetime v0.2.22
  Downloaded num-bigint v0.4.4
  Downloaded x25519-dalek v2.0.0
  Downloaded siphasher v0.3.11
  Downloaded clap_lex v0.5.1
  Downloaded clap_builder v4.4.1
  Downloaded anstyle v1.0.2
  Downloaded anstream v0.5.0
  Downloaded aho-corasick v1.0.4
  Downloaded portable-atomic v1.4.3
  Downloaded h2 v0.3.21
  Downloaded rusqlite v0.28.0
  Downloaded gloo-timers v0.2.6
  Downloaded plotters v0.3.5
  Downloaded webrtc-dtls v0.7.2
  Downloaded rustls-webpki v0.101.4
  Downloaded slab v0.4.9
  Downloaded crossbeam-queue v0.3.8
  Downloaded bytes v1.5.0
  Downloaded anyhow v1.0.75
  Downloaded syn v2.0.29
  Downloaded clap_complete v4.4.1
  Downloaded base64 v0.21.4
  Downloaded time v0.3.27
  Downloaded async-trait v0.1.73
  Downloaded socket2 v0.5.4
  Downloaded webpki-roots v0.25.2
  Downloaded regex v1.10.2
  Downloaded gimli v0.28.0
  Downloaded pin-project-lite v0.2.13
  Downloaded rustls v0.21.7
  Downloaded curve25519-dalek v4.1.1
  Downloaded regex-syntax v0.8.2
  Downloaded clap v2.34.0
  Downloaded deranged v0.3.8
  Downloaded tempfile v3.8.0
  Downloaded regex-automata v0.4.3
  Downloaded libc v0.2.149
  Downloaded tokio v1.33.0
  Downloaded libsqlite3-sys v0.25.2
  Downloaded subxt-signer v0.31.0
  Downloaded atomic-polyfill v1.0.3
  Downloaded snow v0.9.3
  Downloaded parity-scale-codec-derive v2.3.1
  Downloaded critical-section v1.1.2
  Downloaded serde_arrays v0.1.0
  Downloaded comfy-table v6.2.0
  Downloaded sp-std v3.0.0
  Downloaded subxt-lightclient v0.31.0
  Downloaded hashlink v0.8.4
  Downloaded parity-scale-codec v2.3.1
  Downloaded sp-arithmetic v3.0.0
  Downloaded subxt-metadata v0.31.0
  Downloaded no-std-net v0.6.0
  Downloaded yap v0.11.0
  Downloaded subxt-codegen v0.31.0
  Downloaded subxt v0.31.0
  Downloaded scale-value v0.12.0
  Downloaded cxx v1.0.106
  Downloaded smoldot-light v0.6.0
  Downloaded object v0.32.0
  Downloaded rustix v0.38.9
  Downloaded smoldot v0.8.0
  Downloaded 126 crates (25.5 MB) in 6.79s (largest was `smoldot` at 10.3 MB)
   Compiling proc-macro2 v1.0.66
   Compiling unicode-ident v1.0.11
   Compiling libc v0.2.149
   Compiling autocfg v1.1.0
   Compiling version_check v0.9.4
   Compiling serde v1.0.188
   Compiling typenum v1.16.0
   Compiling cfg-if v1.0.0
   Compiling syn v1.0.109
   Compiling thiserror v1.0.50
   Compiling memchr v2.6.4
   Compiling anyhow v1.0.75
   Compiling futures-core v0.3.28
   Compiling futures-channel v0.3.28
   Compiling futures-task v0.3.28
   Compiling parking_lot_core v0.9.8
   Compiling futures-util v0.3.28
   Compiling regex-syntax v0.8.2
   Compiling generic-array v0.14.7
   Compiling bytes v1.5.0
   Compiling lock_api v0.4.10
   Compiling slab v0.4.9
   Compiling lazy_static v1.4.0
   Compiling ahash v0.7.6
   Compiling rustix v0.38.9
   Compiling once_cell v1.18.0
   Compiling subtle v2.4.1
   Compiling log v0.4.20
   Compiling indexmap v1.9.3
   Compiling pkg-config v0.3.27
   Compiling aho-corasick v1.0.4
   Compiling num-traits v0.2.16
   Compiling getrandom v0.1.16
   Compiling crc32fast v1.3.2
   Compiling unicode-xid v0.2.4
   Compiling itoa v1.0.9
   Compiling crunchy v0.2.2
   Compiling convert_case v0.4.0
   Compiling arrayvec v0.7.4
   Compiling quote v1.0.33
   Compiling paste v1.0.14
   Compiling atomic-polyfill v1.0.3
   Compiling critical-section v1.1.2
   Compiling crossbeam-utils v0.8.16
   Compiling cpufeatures v0.2.9
   Compiling const-oid v0.9.5
   Compiling byteorder v1.5.0
   Compiling serde_json v1.0.107
   Compiling syn v2.0.29
   Compiling ppv-lite86 v0.2.17
   Compiling either v1.9.0
   Compiling ryu v1.0.15
   Compiling memoffset v0.9.0
   Compiling target-lexicon v0.12.11
   Compiling crossbeam-epoch v0.9.15
   Compiling itertools v0.10.5
   Compiling io-lifetimes v1.0.11
   Compiling cranelift-isle v0.93.2
   Compiling num-integer v0.1.45
   Compiling cranelift-codegen-shared v0.93.2
   Compiling rayon-core v1.11.0
   Compiling cranelift-codegen-meta v0.93.2
   Compiling smallvec v1.11.1
   Compiling jobserver v0.1.26
   Compiling getrandom v0.2.10
   Compiling regex-automata v0.4.3
   Compiling cc v1.0.83
   Compiling rand_core v0.6.4
   Compiling rustix v0.36.15
   Compiling parking_lot_core v0.8.6
   Compiling rand_chacha v0.3.1
   Compiling rand v0.8.5
   Compiling rustix v0.37.23
   Compiling memoffset v0.6.5
   Compiling zstd-safe v5.0.2+zstd.1.5.2
   Compiling pin-project-lite v0.2.13
   Compiling libm v0.2.7
   Compiling cpp_demangle v0.3.5
   Compiling static_assertions v1.1.0
   Compiling scopeguard v1.2.0
   Compiling ref-cast v1.0.20
   Compiling arrayref v0.3.7
   Compiling wasmtime-cache v6.0.2
   Compiling keccak v0.1.4
   Compiling wasmtime v6.0.2
   Compiling num_cpus v1.16.0
   Compiling constant_time_eq v0.2.6
   Compiling byte-slice-cast v1.2.2
   Compiling blake2b_simd v1.0.1
   Compiling futures-sink v0.3.28
   Compiling futures-io v0.3.28
   Compiling rustversion v1.0.14
   Compiling ahash v0.8.3
   Compiling zstd-sys v2.0.8+zstd.1.5.5
   Compiling wasmtime-runtime v6.0.2
   Compiling psm v0.1.21
   Compiling secp256k1-sys v0.6.1
   Compiling parking_lot v0.12.1
   Compiling pin-utils v0.1.0
   Compiling bumpalo v3.13.0
   Compiling linux-raw-sys v0.4.5
   Compiling bitflags v2.4.0
   Compiling sp-std v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling backtrace v0.3.69
   Compiling async-trait v0.1.73
   Compiling opaque-debug v0.3.0
   Compiling heck v0.4.1
   Compiling regex v1.10.2
   Compiling hashbrown v0.12.3
   Compiling tracing-core v0.1.31
   Compiling tinyvec_macros v0.1.1
   Compiling tinyvec v1.6.0
   Compiling unicode-bidi v0.3.13
   Compiling bitflags v1.3.2
   Compiling Inflector v0.11.4
   Compiling sp-io v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling percent-encoding v2.3.0
   Compiling form_urlencoded v1.2.0
   Compiling cranelift-codegen v0.93.2
   Compiling rand_core v0.5.1
   Compiling radium v0.7.0
   Compiling tap v1.0.1
   Compiling wyz v0.5.1
   Compiling unicode-normalization v0.1.22
   Compiling funty v2.0.0
   Compiling instant v0.1.12
   Compiling rand_chacha v0.2.2
   Compiling base64 v0.13.1
   Compiling expander v1.0.0
   Compiling bs58 v0.4.0
   Compiling rand v0.7.3
   Compiling idna v0.4.0
   Compiling bitvec v1.0.1
   Compiling fs-err v2.9.0
   Compiling fallible-iterator v0.2.0
   Compiling crossbeam-channel v0.5.8
   Compiling stable_deref_trait v1.2.0
   Compiling url v2.4.0
   Compiling crossbeam-deque v0.8.3
   Compiling rustc-hash v1.1.0
   Compiling fxhash v0.2.1
   Compiling num-bigint v0.4.4
   Compiling signature v1.6.4
   Compiling rustc-hex v2.1.0
   Compiling slice-group-by v0.3.1
   Compiling rayon v1.7.0
   Compiling ed25519 v1.5.3
   Compiling serde_derive v1.0.188
   Compiling zeroize_derive v1.4.2
   Compiling thiserror-impl v1.0.50
   Compiling futures-macro v0.3.28
   Compiling tracing-attributes v0.1.26
   Compiling ref-cast-impl v1.0.20
   Compiling impl-trait-for-tuples v0.2.2
   Compiling derive_more v0.99.17
   Compiling zeroize v1.6.0
   Compiling sp-debug-derive v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling dyn-clonable-impl v0.9.0
   Compiling digest v0.9.0
   Compiling block-buffer v0.10.4
   Compiling crypto-common v0.1.6
   Compiling libsecp256k1-core v0.3.0
   Compiling digest v0.10.7
   Compiling sha2 v0.10.8
   Compiling sha3 v0.10.8
   Compiling twox-hash v1.6.3
   Compiling blake2 v0.10.6
   Compiling tracing v0.1.37
   Compiling sp-core-hashing v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling block-buffer v0.9.0
   Compiling libsecp256k1-gen-genmult v0.3.0
   Compiling libsecp256k1-gen-ecmult v0.3.0
   Compiling tokio-macros v2.1.0
   Compiling sha2 v0.9.9
   Compiling libsecp256k1 v0.7.1
   Compiling curve25519-dalek v3.2.0
   Compiling sp-core-hashing-proc-macro v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling regalloc2 v0.5.1
   Compiling errno v0.3.2
   Compiling num-rational v0.4.1
   Compiling linux-raw-sys v0.1.4
   Compiling wasm-bindgen-shared v0.2.87
   Compiling fixed-hash v0.8.0
   Compiling linux-raw-sys v0.3.8
   Compiling parking_lot v0.11.2
   Compiling futures-executor v0.3.28
   Compiling is-terminal v0.4.9
   Compiling generic-array v0.12.4
   Compiling futures v0.3.28
   Compiling termcolor v1.2.0
   Compiling humantime v2.1.0
   Compiling rustc-demangle v0.1.23
   Compiling env_logger v0.10.0
   Compiling wasm-bindgen-backend v0.2.87
   Compiling hmac v0.12.1
   Compiling time v0.1.45
   Compiling dirs-sys-next v0.1.2
   Compiling wasmtime-asm-macros v6.0.2
   Compiling hashbrown v0.14.0
   Compiling wasm-bindgen v0.2.87
   Compiling memfd v0.6.3
   Compiling regex-syntax v0.6.29
   Compiling iana-time-zone v0.1.57
   Compiling ansi_term v0.12.1
   Compiling byte-tools v0.3.1
   Compiling equivalent v1.0.1
   Compiling toml v0.5.11
   Compiling parity-wasm v0.45.0
   Compiling indexmap v2.0.0
   Compiling block-padding v0.1.5
   Compiling chrono v0.4.26
   Compiling directories-next v2.0.0
   Compiling hex v0.4.3
   Compiling cranelift-entity v0.93.2
   Compiling impl-serde v0.4.0
   Compiling ed25519-dalek v1.0.1
   Compiling bincode v1.3.3
   Compiling uint v0.9.5
   Compiling cranelift-bforest v0.93.2
   Compiling gimli v0.26.2
   Compiling wasmparser v0.100.0
   Compiling proc-macro-crate v1.1.3
   Compiling object v0.29.0
   Compiling ss58-registry v1.43.0
   Compiling wasm-bindgen-macro-support v0.2.87
   Compiling parity-scale-codec-derive v3.6.4
   Compiling scale-info-derive v2.9.0
   Compiling sp-runtime-interface-proc-macro v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling regex-automata v0.1.10
   Compiling file-per-thread-logger v0.1.6
   Compiling wasmtime-types v6.0.2
   Compiling parity-scale-codec v3.6.4
   Compiling wasmtime-environ v6.0.2
   Compiling sp-version-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling scale-info v2.9.0
   Compiling impl-codec v0.6.0
   Compiling wasmtime-jit-debug v6.0.2
   Compiling addr2line v0.17.0
   Compiling digest v0.8.1
   Compiling region v3.0.0
   Compiling ring v0.16.20
   Compiling wasmtime-jit-icache-coherence v6.0.2
   Compiling hash-db v0.16.0
   Compiling downcast-rs v1.2.0
   Compiling memory_units v0.4.0
   Compiling matchers v0.0.1
   Compiling wasmi_core v0.2.1
   Compiling wasm-bindgen-macro v0.2.87
   Compiling primitive-types v0.12.1
   Compiling wasmi-validation v0.5.0
   Compiling tracing-serde v0.1.3
   Compiling block-buffer v0.7.3
   Compiling crypto-mac v0.8.0
   Compiling crypto-mac v0.11.1
   Compiling sharded-slab v0.1.4
   Compiling tracing-log v0.1.3
   Compiling thread_local v1.1.7
   Compiling wasmtime-jit v6.0.2
   Compiling opaque-debug v0.2.3
   Compiling fake-simd v0.1.2
   Compiling fastrand v2.0.0
   Compiling sha2 v0.8.2
   Compiling tracing-subscriber v0.2.25
   Compiling tempfile v3.8.0
   Compiling hmac v0.8.1
   Compiling wasmi v0.13.2
   Compiling sp-storage v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling curve25519-dalek v2.1.3
   Compiling merlin v2.0.1
   Compiling environmental v1.1.4
   Compiling arrayvec v0.5.2
   Compiling sp-externalities v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling hmac-drbg v0.3.0
   Compiling hmac v0.11.0
   Compiling schnorrkel v0.9.1
   Compiling sp-tracing v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pbkdf2 v0.8.0
   Compiling pbkdf2 v0.11.0
   Compiling secrecy v0.8.0
   Compiling prost-derive v0.11.9
   Compiling num-format v0.4.4
   Compiling dyn-clone v1.0.13
   Compiling dyn-clonable v0.9.0
   Compiling substrate-bip39 v0.4.4
   Compiling tiny-bip39 v1.0.0
   Compiling bounded-collections v0.1.8
   Compiling ed25519-zebra v3.1.0
   Compiling hash256-std-hasher v0.15.2
   Compiling cranelift-frontend v0.93.2
   Compiling cranelift-native v0.93.2
   Compiling array-bytes v4.2.0
   Compiling pin-project-internal v1.1.3
   Compiling prettyplease v0.1.25
   Compiling fixedbitset v0.4.2
   Compiling nohash-hasher v0.2.0
   Compiling cranelift-wasm v0.93.2
   Compiling prost v0.11.9
   Compiling petgraph v0.6.4
   Compiling which v4.4.0
   Compiling multimap v0.8.3
   Compiling hashbrown v0.13.2
   Compiling adler v1.0.2
   Compiling httparse v1.8.0
   Compiling prost-types v0.11.9
   Compiling gimli v0.28.0
   Compiling miniz_oxide v0.7.1
   Compiling wasmtime-cranelift v6.0.2
   Compiling integer-sqrt v0.1.5
   Compiling object v0.32.0
   Compiling schnellru v0.2.1
   Compiling trie-db v0.27.1
   Compiling trie-root v0.18.0
   Compiling memory-db v0.32.0
   Compiling prost-build v0.11.9
   Compiling sp-arithmetic v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling proc-macro-error-attr v1.0.4
   Compiling proc-macro-error v1.0.4
   Compiling data-encoding v2.4.0
   Compiling blake3 v1.4.1
   Compiling vcpkg v0.2.15
   Compiling frame-metadata v15.1.0
   Compiling synstructure v0.12.6
   Compiling data-encoding-macro-internal v0.1.11
   Compiling addr2line v0.21.0
   Compiling libz-sys v1.1.12
   Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling multihash-derive v0.8.1
   Compiling libp2p-core v0.38.0
   Compiling zstd-safe v6.0.6
   Compiling send_wrapper v0.4.0
   Compiling js-sys v0.3.64
   Compiling fnv v1.0.7
   Compiling semver v1.0.18
   Compiling prometheus v0.13.3
   Compiling socket2 v0.5.4
   Compiling mio v0.8.8
   Compiling sp-panic-handler v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling signal-hook-registry v1.4.1
   Compiling tokio v1.33.0
   Compiling libp2p-swarm-derive v0.31.0
   Compiling rustc_version v0.4.0
   Compiling rustls v0.20.8
   Compiling platforms v3.0.2
   Compiling sc-executor-wasmtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling enum-as-inner v0.5.1
   Compiling snow v0.9.3
   Compiling curve25519-dalek-derive v0.1.0
   Compiling libp2p-identify v0.41.1
   Compiling libp2p-kad v0.42.1
   Compiling curve25519-dalek v4.1.1
   Compiling gloo-timers v0.2.6
   Compiling futures-timer v3.0.2
   Compiling libp2p-noise v0.41.0
   Compiling pin-project v1.1.3
   Compiling http v0.2.9
   Compiling socket2 v0.4.9
   Compiling spin v0.5.2
   Compiling untrusted v0.7.1
   Compiling asynchronous-codec v0.6.2
   Compiling tower-service v0.3.2
   Compiling try-lock v0.2.4
   Compiling event-listener v2.5.3
   Compiling http-body v0.4.5
   Compiling unsigned-varint v0.7.2
   Compiling want v0.3.1
   Compiling httpdate v1.0.3
   Compiling constant_time_eq v0.3.0
   Compiling data-encoding-macro v0.1.13
   Compiling der v0.6.1
   Compiling mockall_derive v0.11.4
   Compiling blake2s_simd v1.0.1
   Compiling core2 v0.4.0
   Compiling base64ct v1.6.0
   Compiling base-x v0.2.11
   Compiling multibase v0.9.1
   Compiling base16ct v0.1.1
   Compiling spki v0.6.0
   Compiling pkcs8 v0.9.0
   Compiling tokio-util v0.7.8
   Compiling sec1 v0.3.0
   Compiling flate2 v1.0.27
   Compiling multistream-select v0.12.1
   Compiling h2 v0.3.21
   Compiling rw-stream-sink v0.3.0
   Compiling wasm-bindgen-futures v0.4.37
   Compiling sha-1 v0.9.8
   Compiling void v1.0.2
   Compiling asn1_der v0.7.6
   Compiling soketto v0.7.1
   Compiling lru v0.8.1
   Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling kvdb v0.13.0
   Compiling sct v0.7.0
   Compiling derive-syn-parse v0.1.5
   Compiling proc-macro-warning v0.3.1
   Compiling cfg-expr v0.10.3
   Compiling frame-support-procedural-tools v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling netlink-packet-utils v0.5.2
   Compiling universal-hash v0.4.1
   Compiling cipher v0.3.0
   Compiling concurrent-queue v2.2.0
   Compiling linked-hash-map v0.5.6
   Compiling netlink-packet-core v0.4.2
   Compiling webpki v0.22.0
   Compiling async-channel v1.9.0
   Compiling sp-database v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling wasm-instrument v0.3.0
   Compiling der v0.7.8
   Compiling ipnet v2.8.0
   Compiling sc-utils v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling netlink-sys v0.8.5
   Compiling ff v0.13.0
   Compiling base16ct v0.2.0
   Compiling matches v0.1.10
   Compiling idna v0.2.3
   Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling netlink-proto v0.10.0
   Compiling group v0.13.0
   Compiling netlink-packet-route v0.12.0
   Compiling polyval v0.5.3
   Compiling aead v0.4.3
   Compiling sec1 v0.7.3
   Compiling crypto-bigint v0.5.2
   Compiling nix v0.24.3
   Compiling match_cfg v0.1.0
   Compiling hostname v0.3.1
   Compiling hyper v0.14.27
   Compiling elliptic-curve v0.13.5
   Compiling spki v0.7.2
   Compiling ghash v0.4.4
   Compiling trust-dns-proto v0.22.0
   Compiling aes v0.7.5
   Compiling chacha20 v0.8.2
   Compiling ctr v0.8.0
   Compiling poly1305 v0.7.2
   Compiling rtnetlink v0.10.1
   Compiling rfc6979 v0.4.0
   Compiling signature v2.1.0
   Compiling quick-error v1.2.3
   Compiling resolv-conf v0.7.0
   Compiling ecdsa v0.16.8
   Compiling chacha20poly1305 v0.9.1
   Compiling aes-gcm v0.9.4
   Compiling lru-cache v0.1.2
   Compiling prost-codec v0.3.0
   Compiling prometheus-client-derive-text-encode v0.3.0
   Compiling dtoa v1.0.9
   Compiling pin-project-lite v0.1.12
   Compiling quicksink v0.1.2
   Compiling k256 v0.13.1
   Compiling futures-rustls v0.22.2
   Compiling webpki-roots v0.22.6
   Compiling yamux v0.10.2
   Compiling x25519-dalek v1.1.1
   Compiling tt-call v1.0.9
   Compiling parity-send-wrapper v0.1.0
   Compiling prometheus-client v0.18.1
   Compiling trust-dns-resolver v0.22.0
   Compiling predicates-core v1.0.6
   Compiling wasm-timer v0.2.5
   Compiling float-cmp v0.9.0
   Compiling difflib v0.4.0
   Compiling termtree v0.4.1
   Compiling normalize-line-endings v0.3.0
   Compiling predicates-tree v1.0.9
   Compiling substrate-prometheus-endpoint v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling predicates v2.1.5
   Compiling downcast v0.11.0
   Compiling fragile v2.0.0
   Compiling mockall v0.11.4
   Compiling if-watch v3.1.0
   Compiling base64 v0.21.4
   Compiling rustls-pemfile v1.0.3
   Compiling openssl-probe v0.1.5
   Compiling rustls-native-certs v0.6.3
   Compiling finality-grandpa v0.16.2
   Compiling rustls v0.21.7
   Compiling linked_hash_set v0.1.4
   Compiling ip_network v0.4.1
   Compiling threadpool v1.8.1
   Compiling jsonrpsee-proc-macros v0.16.3
   Compiling strum_macros v0.24.3
   Compiling tokio-rustls v0.23.4
   Compiling hyper-rustls v0.23.2
   Compiling tokio-stream v0.1.14
   Compiling blst v0.3.11 (https://github.com/supranational/blst.git#78fee18b)
   Compiling glob v0.3.1
   Compiling rustls-webpki v0.101.4
   Compiling sc-chain-spec-derive v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling clang-sys v1.6.1
   Compiling beef v0.5.2
   Compiling bstr v1.6.0
   Compiling jsonrpsee-types v0.16.3
   Compiling async-lock v2.8.0
   Compiling tikv-jemalloc-sys v0.5.4+5.3.0-patched
   Compiling minimal-lexical v0.2.1
   Compiling globset v0.4.13
   Compiling nom v7.1.3
   Compiling web-sys v0.3.64
   Compiling jsonrpsee-core v0.16.3
   Compiling libsqlite3-sys v0.25.2
   Compiling serde_arrays v0.1.0
   Compiling spin v0.9.8
   Compiling libloading v0.7.4
   Compiling bindgen v0.64.0
   Compiling allocator-api2 v0.2.16
   Compiling lazycell v1.3.0
   Compiling unicode-width v0.1.10
   Compiling shlex v1.1.0
   Compiling tokio-rustls v0.24.1
   Compiling peeking_take_while v0.1.2
   Compiling cexpr v0.6.0
   Compiling rustls-webpki v0.100.2
   Compiling hashlink v0.8.4
   Compiling multihash v0.16.3
   Compiling multiaddr v0.16.0
   Compiling gloo-utils v0.1.7
   Compiling gloo-net v0.2.6
   Compiling libp2p-swarm v0.41.1
   Compiling libp2p-mplex v0.38.0
   Compiling libp2p-yamux v0.42.0
   Compiling libp2p-websocket v0.40.0
   Compiling libp2p-wasm-ext v0.38.0
   Compiling libp2p-ping v0.41.0
   Compiling libp2p-mdns v0.42.0
   Compiling libp2p-request-response v0.23.0
   Compiling libp2p-tcp v0.38.0
   Compiling libp2p-dns v0.38.0
   Compiling fallible-streaming-iterator v0.1.9
   Compiling tower-layer v0.3.2
   Compiling webpki-roots v0.25.2
   Compiling rusqlite v0.28.0
   Compiling jsonrpsee-client-transport v0.16.3
   Compiling libp2p-metrics v0.11.0
   Compiling libp2p v0.50.1
   Compiling webpki-roots v0.23.1
   Compiling lz4-sys v1.9.4
   Compiling hyper-rustls v0.24.1
   Compiling sc-peerset v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tower v0.4.13
   Compiling parity-scale-codec-derive v2.3.1
   Compiling jsonrpsee-server v0.16.3
   Compiling jsonrpsee-http-client v0.16.3
   Compiling jsonrpsee-ws-client v0.16.3
   Compiling jsonrpsee-wasm-client v0.16.3
   Compiling sp-debug-derive v3.0.0
   Compiling snap v1.1.0
   Compiling sp-std v3.0.0
   Compiling jsonrpsee v0.16.3
   Compiling sc-telemetry v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling memmap2 v0.5.10
   Compiling cfg_aliases v0.1.1
   Compiling strum v0.24.1
   Compiling scratch v1.0.7
   Compiling parity-scale-codec v2.3.1
   Compiling link-cplusplus v1.0.9
   Compiling strsim v0.10.0
   Compiling librocksdb-sys v0.10.0+7.9.2
   Compiling sp-arithmetic v3.0.0
   Compiling codespan-reporting v0.11.1
   Compiling sc-tracing-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling clap_derive v4.4.0
   Compiling cxxbridge-flags v1.0.106
   Compiling cxx v1.0.106
   Compiling cxx-build v1.0.106
   Compiling static_init v1.0.3
   Compiling static_init_macro v1.0.2
   Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling atty v0.2.14
   Compiling sc-sysinfo v6.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling fork-tree v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling cxxbridge-macro v1.0.106
   Compiling camino v1.1.6
   Compiling wasm-opt-sys v0.111.0
   Compiling wasm-opt-cxx-sys v0.111.0
   Compiling toml_datetime v0.6.3
   Compiling serde_spanned v0.6.3
   Compiling http-range-header v0.3.1
   Compiling semver-parser v0.7.0
   Compiling winnow v0.5.15
   Compiling utf8parse v0.2.1
   Compiling anstyle-parse v0.2.1
   Compiling semver v0.6.0
   Compiling tower-http v0.3.5
   Compiling secp256k1 v0.24.3
   Compiling cargo-platform v0.1.3
   Compiling colorchoice v1.0.0
   Compiling anstyle v1.0.2
   Compiling anstyle-query v1.0.0
   Compiling same-file v1.0.6
   Compiling anstream v0.5.0
   Compiling walkdir v2.3.3
   Compiling toml_edit v0.19.14
   Compiling cargo_metadata v0.15.4
   Compiling sc-rpc-server v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling build-helper v0.1.1
   Compiling fs2 v0.4.3
   Compiling filetime v0.2.22
   Compiling siphasher v0.3.11
   Compiling clap_lex v0.5.1
   Compiling clap_builder v4.4.1
   Compiling kvdb-memorydb v0.13.0
   Compiling toml v0.7.6
   Compiling cid v0.8.6
   Compiling fs4 v0.6.6
   Compiling rand_pcg v0.3.1
   Compiling dirs-sys v0.3.7
   Compiling directories v4.0.1
   Compiling tracing-futures v0.2.5
   Compiling exit-future v0.2.0
   Compiling platforms v2.0.0
   Compiling frame-election-provider-solution-type v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling ident_case v1.0.1
   Compiling substrate-build-script-utils v3.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-auto-config v0.9.42 (/home/nikhil/w3f/melodot/crates/auto-config)
   Compiling pallet-staking-reward-curve v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling darling_core v0.14.4
   Compiling matrixmultiply v0.3.7
   Compiling sp-std v8.0.0
   Compiling darling_core v0.20.3
   Compiling frame-metadata v16.0.0
   Compiling sp-core-hashing v9.0.0
   Compiling scale-bits v0.4.0
   Compiling clap v4.4.1
   Compiling names v0.13.0
   Compiling portable-atomic v1.4.3
   Compiling subxt-metadata v0.31.0
   Compiling secp256k1-sys v0.8.1
   Compiling subxt-codegen v0.31.0
   Compiling nalgebra-macros v0.2.1
   Compiling ckb-merkle-mountain-range v0.5.2
   Compiling ucd-trie v0.1.6
   Compiling unicode-segmentation v1.10.1
   Compiling darling_macro v0.14.4
   Compiling subtle-ng v2.5.0
   Compiling base58 v0.2.0
   Compiling yap v0.11.0
   Compiling heck v0.3.3
   Compiling curve25519-dalek-ng v4.1.1
   Compiling pest v2.7.2
   Compiling darling_macro v0.20.3
   Compiling darling v0.14.4
   Compiling scale-encode-derive v0.5.0
   Compiling scale-decode-derive v0.9.0
   Compiling darling v0.20.3
   Compiling textwrap v0.11.0
   Compiling scale-encode v0.5.0
   Compiling serde_bytes v0.11.12
   Compiling merlin v3.0.0
   Compiling derivative v2.2.0
   Compiling vec_map v0.8.2
   Compiling scale-decode v0.9.0
   Compiling bytemuck v1.13.1
   Compiling subxt-macro v0.31.0
   Compiling strsim v0.8.0
   Compiling bitcoin_hashes v0.11.0
   Compiling clap v2.34.0
   Compiling bip39 v2.0.0
   Compiling safe_arch v0.7.1
   Compiling scale-value v0.12.0
   Compiling schnorrkel v0.10.2
   Compiling kzg v0.1.0 (https://github.com/ZeroDAO/rust-kzg.git?rev=de872ad#de872ad8)
   Compiling rust-kzg-blst v0.1.0 (https://github.com/ZeroDAO/rust-kzg.git?rev=de872ad#de872ad8)
   Compiling pest_meta v2.7.2
   Compiling structopt-derive v0.4.18
   Compiling melo-das-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/das-primitives)
   Compiling meloxt v0.0.1 (/home/nikhil/w3f/melodot/crates/meloxt)
   Compiling melo-erasure-coding v0.1.0 (/home/nikhil/w3f/melodot/crates/melo-erasure-coding)
   Compiling subxt v0.31.0
   Compiling pbkdf2 v0.12.2
   Compiling structopt v0.3.26
   Compiling pest_generator v2.7.2
   Compiling wide v0.7.11
   Compiling approx v0.5.1
   Compiling num-complex v0.4.4
   Compiling rawpointer v0.2.1
   Compiling pest_derive v2.7.2
   Compiling async-recursion v1.0.4
   Compiling rtoolbox v0.0.1
   Compiling simba v0.8.1
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling rpassword v7.2.0
   Compiling console v0.15.7
   Compiling fdlimit v0.2.1
   Compiling number_prefix v0.4.0
   Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling maplit v1.0.2
   Compiling spinners v4.1.0
   Compiling indicatif v0.17.6
   Compiling handlebars v4.3.7
   Compiling comfy-table v6.2.0
   Compiling gethostname v0.2.3
   Compiling thousands v0.2.0
   Compiling ciborium-io v0.2.1
   Compiling os_str_bytes v6.5.1
   Compiling half v1.8.2
   Compiling plotters-backend v0.3.5
   Compiling plotters-svg v0.3.5
   Compiling ciborium-ll v0.2.1
   Compiling clap_lex v0.2.4
   Compiling clap_complete v4.4.1
   Compiling sc-authority-discovery v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling textwrap v0.16.0
   Compiling array-bytes v6.1.0
   Compiling cast v0.3.0
   Compiling criterion-plot v0.5.0
   Compiling clap v3.2.25
   Compiling ciborium v0.2.1
   Compiling plotters v0.3.5
   Compiling sc-proposer-metrics v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling nalgebra v0.32.3
   Compiling binary-merkle-tree v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tinytemplate v1.2.1
   Compiling anes v0.1.6
   Compiling oorandom v11.1.3
   Compiling hex-literal v0.3.4
   Compiling melodot-light-client v0.0.1 (/home/nikhil/w3f/melodot/light)
   Compiling melodot-light-client-e2e v0.0.1 (/home/nikhil/w3f/melodot/light/e2e)
   Compiling criterion v0.4.0
   Compiling linregress v0.5.2
   Compiling lz4 v1.24.0
   Compiling parity-db v0.4.10
   Compiling secp256k1 v0.27.0
   Compiling subxt-signer v0.31.0
   Compiling zstd v0.11.2+zstd.1.5.2
   Compiling zstd v0.12.4
   Compiling sp-maybe-compressed-blob v4.1.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-wasm-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-core v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-trie v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keystore v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-weights v4.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-state-machine v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-allocator v4.1.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-rpc v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-wasmi v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-state-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-application-crypto v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-keystore v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-version v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-blockchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keyring v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-npos-elections v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-block-builder v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-mmr-primitives v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-storage-proof v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-epochs v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-beefy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling mmr-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-db v0.0.1 (/home/nikhil/w3f/melodot/crates/das-db)
   Compiling melo-core-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/core-primitives)
   Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-rpc-client v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-remote-externalities v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-grandpa v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-babe-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-try-runtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-sync-state-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-grandpa-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authorship v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling node-primitives v2.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-network v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network)
   Compiling frame-system-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-system-ext)
   Compiling frame-election-provider-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-im-online v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-executive-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-executive-ext)
   Compiling pallet-transaction-payment-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-nomination-pools v1.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-melo-store v0.1.0 (/home/nikhil/w3f/melodot/crates/pallet-melo-store)
   Compiling pallet-election-provider-multi-phase v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-treasury v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-offences v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-bags-list v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-asset-tx-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-sudo v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-bounties v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-assets v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-nomination-pools-runtime-api v1.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-democracy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-elections-phragmen v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-preimage v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-collective v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-utility v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-membership v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-indices v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-scheduler v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-daser v0.0.1 (/home/nikhil/w3f/melodot/crates/daser)
   Compiling melo-das-network-protocol v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network/protocol)
   Compiling pallet-mmr v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-babe v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-beefy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-beefy-mmr v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling wasm-opt v0.111.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melodot-runtime v0.0.1 (/home/nikhil/w3f/melodot/runtime)
   Compiling substrate-test-runtime v2.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling rocksdb v0.20.1
   Compiling kvdb-rocksdb v0.18.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-rpc v0.0.1 (/home/nikhil/w3f/melodot/crates/das-rpc)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-test-client v2.0.1 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-test-runtime-client v2.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling try-runtime-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melodot-node v0.0.1 (/home/nikhil/w3f/melodot/node)
    Finished release [optimized] target(s) in 10m 35s
     Running unittests src/lib.rs (target/release/deps/frame_executive_ext-8214ffc54b02e57e)

running 23 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::bad_extrinsic_not_inserted ... ok
test tests::all_weights_are_recorded_correctly ... ok
test tests::block_hooks_weight_is_stored ... ok
test tests::balance_transfer_dispatch_works ... ok
test tests::block_weight_and_size_is_stored_per_tx ... ok
test tests::custom_runtime_upgrade_is_called_before_modules ... ok
test tests::block_import_works ... ok
test tests::last_runtime_upgrade_was_upgraded_works ... ok
test tests::offchain_worker_works_as_expected ... ok
test tests::can_not_pay_for_tx_fee_on_full_lock ... ok
test tests::runtime_upgraded_should_work ... ok
test tests::inherents_fail_validate_block ... ok
test tests::event_from_runtime_upgrade_is_included ... ok
test tests::validate_unsigned ... ok
test tests::block_import_of_bad_state_root_fails - should panic ... ok
test tests::block_import_of_bad_extrinsic_root_fails - should panic ... ok
test tests::invalid_inherents_fail_block_execution - should panic ... ok
test tests::custom_runtime_upgrade_is_called_when_using_execute_block_trait ... ok
test tests::calculating_storage_root_twice_works ... ok
test tests::invalid_inherent_position_fail - should panic ... ok
test tests::valid_inherents_position_works ... ok
test tests::block_weight_limit_enforced ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/frame_system_ext-6a2fa32b308724a4)

running 2 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::finalize_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_auto_config-3e23d67a15c2a4a8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_core_primitives-b2ca1a5dbba70a11)

running 11 tests
test header::extension::tests::test_app_lookup_get_lookup ... ok
test header::extension::tests::test_header_extension_start_at ... ok
test reliability::tests::test_app_confidence ... ok
test reliability::tests::test_block_confidence ... ok
test reliability::tests::test_max_consecutive_success_count ... ok
test reliability::tests::test_reliability_id_get_confidence ... ok
test reliability::tests::test_reliability_success_count ... ok
test reliability::tests::test_set_and_get_last_processed_block ... ok
test reliability::tests::test_set_sample_app ... ok
test reliability::tests::test_set_sample_block ... ok
test reliability::tests::test_set_sample_with_empty_commitments ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_db-b3fe68f86c66d23e)

running 5 tests
test sqlite::tests::test_set ... ok
test sqlite::tests::test_get ... ok
test sqlite::tests::test_contains ... ok
test sqlite::tests::test_remove ... ok
test sqlite::tests::test_compare_and_set ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network-b9bafc95544baf52)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_network_protocol-fd671fd63129e8d2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_primitives-8d403733423791be)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_das_rpc-12c49787a58b870e)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melo_daser-fde49a0f6acd0d60)

running 9 tests
test tx_pool_handler::tests::test_full_col_missing_data ... ok
test tx_pool_handler::tests::test_full_col_success ... ok
test tx_pool_handler::tests::test_row_success ... ok
test tx_pool_handler::tests::test_row_out_of_range ... ok
test network::tests::test_values_set_handler_empty ... ok
test network::tests::test_verify_values_valid ... ok
test network::tests::test_verify_values_invalid ... ok
test network::tests::test_values_set_handler ... ok
test network::tests::test_values_set_handler_unavailability ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.48s

     Running unittests src/lib.rs (target/release/deps/melo_erasure_coding-3ea14bd04e0d256b)

running 19 tests
test tests::test_bytes_vec_to_blobs_returns_err ... ok
test tests::test_bytes_vec_to_blobs ... ok
test tests::test_blob_bytes_conversion ... ok
test tests::test_order_segments_col ... ok
test tests::test_segment_datas_to_row ... ok
test tests::test_recovery_row_from_segments ... ok
test tests::test_poly_to_segment_vec ... ok
test tests::test_extend_poly ... ok
test tests::test_extend_fs_g1 ... ok
test tests::test_recover_poly ... ok
test tests::test_extend_and_commit_multi ... ok
test tests::test_proof_multi ... ok
test tests::test_order_segments_row ... ok
test tests::test_bytes_to_segments_round_trip ... ok
test tests::test_blob_verify_batch ... ok
test tests::test_extend_segments_col ... ok
test tests::test_extend_returns_err ... ok
test tests::test_blob_proof ... ok
test tests::test_bytes_to_segments ... ok

test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 13.91s

     Running unittests src/main.rs (target/release/deps/melodot_light-9e5dab2180abdf21)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_light_e2e-92068b441f3562c9)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melodot_node-4eb7cf200639aa12)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/release/deps/melodot_node-3ffdbfa100e21238)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/melodot_runtime-12ad6e6109d8c1af)

running 4 tests
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test tests::check_whitelist ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test config::consensus::__pallet_staking_reward_curve_test_module::reward_curve_precision ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/release/deps/meloxt-498f04de367eb4a2)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/run_examples.rs (target/release/deps/e2e-c8b38160dc5fd6d3)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/release/deps/pallet_melo_store-786f6b1bc86820cf)

running 21 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_acquire_and_release_report_lock_correctly ... ok
test tests::should_emit_event_on_successful_registration ... ok
test tests::should_fail_with_mismatched_commitments_count ... ok
test tests::should_fail_when_submitting_empty_data ... ok
test tests::should_emit_event_on_successful_submission ... ok
test tests::should_increment_app_id_on_consecutive_registrations ... ok
test tests::should_fail_when_reporting_outside_window ... ok
test tests::should_fail_when_submitting_invalid_app_id ... ok
test tests::should_fail_with_mismatched_proofs_count ... ok
test tests::should_have_expected_data_when_reported_unavailable ... ok
test tests::should_fail_when_reporting_for_future_block ... ok
test tests::should_fail_when_reporting_duplicate_indices ... ok
test tests::should_fail_when_reporting_nonexistent_data ... ok
test tests::should_change_metadata_availability_when_reports_exceed_threshold ... ok
test tests::should_send_single_unavailability_report_correctly ... ok
test tests::should_fail_when_index_set_empty ... ok
test tests::should_report_unavailable_data_successfully ... ok
test tests::should_submit_data_successfully ... ok
test tests::should_fail_when_submitting_data_exceeds_limit ... ok
test tests::should_report_unavailable_data_successfully_with_multiple_app_id_and_data ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

   Doc-tests frame-executive-ext

running 2 tests
test crates/frame-executive-ext/src/lib.rs - (line 54) ... ok
test crates/frame-executive-ext/src/lib.rs - (line 85) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.44s

   Doc-tests frame-system-ext

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-auto-config

running 4 tests
test crates/auto-config/src/lib.rs - (line 21) ... ignored
test crates/auto-config/src/lib.rs - (line 36) ... ignored
test crates/auto-config/src/lib.rs - auto_config (line 55) ... ignored
test crates/auto-config/src/lib.rs - auto_config (line 64) ... ignored

test result: ok. 0 passed; 0 failed; 4 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-core-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-db

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-network

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-network-protocol

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-primitives

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-das-rpc

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-daser

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melo-erasure-coding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melodot-node

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests melodot-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests meloxt

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests pallet-melo-store

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

Light client build is working.


```
± |main ✓| → make build-light
cargo build --release -p melodot-light-client -p melodot-light-client-e2e
   Compiling libc v0.2.149
   Compiling rand_chacha v0.3.1
   Compiling generic-array v0.14.7
   Compiling subtle v2.4.1
   Compiling once_cell v1.18.0
   Compiling crunchy v0.2.2
   Compiling num-bigint v0.4.4
   Compiling num-rational v0.4.1
   Compiling log v0.4.20
   Compiling sp-debug-derive v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling arrayvec v0.7.4
   Compiling byteorder v1.5.0
   Compiling sp-std v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tokio v1.33.0
   Compiling rustix v0.38.9
   Compiling prost v0.11.9
   Compiling data-encoding v2.4.0
   Compiling smallvec v1.11.1
   Compiling wasm-bindgen-backend v0.2.87
   Compiling tracing-core v0.1.31
   Compiling indexmap v1.9.3
   Compiling rand v0.8.5
   Compiling parity-scale-codec v3.6.4
   Compiling blake2b_simd v1.0.1
   Compiling prost-types v0.11.9
   Compiling cfg-expr v0.10.3
   Compiling hashbrown v0.12.3
   Compiling tracing v0.1.37
   Compiling futures v0.3.28
   Compiling base64 v0.13.1
   Compiling data-encoding-macro-internal v0.1.11
   Compiling digest v0.9.0
   Compiling fixed-hash v0.8.0
   Compiling primitive-types v0.12.1
   Compiling libsecp256k1-core v0.3.0
   Compiling twox-hash v1.6.3
   Compiling sp-storage v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tiny-bip39 v1.0.0
   Compiling block-buffer v0.10.4
   Compiling crypto-common v0.1.6
   Compiling wasm-bindgen-macro-support v0.2.87
   Compiling digest v0.10.7
   Compiling jobserver v0.1.26
   Compiling sp-externalities v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-core-hashing v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling cc v1.0.83
   Compiling getrandom v0.2.10
   Compiling sha2 v0.10.8
   Compiling libsecp256k1-gen-ecmult v0.3.0
   Compiling libsecp256k1-gen-genmult v0.3.0
   Compiling rand_core v0.6.4
   Compiling sha3 v0.10.8
   Compiling blake2 v0.10.6
   Compiling sp-version-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling which v4.4.0
   Compiling wasmi_core v0.2.1
   Compiling libsecp256k1 v0.7.1
   Compiling expander v1.0.0
   Compiling data-encoding-macro v0.1.13
   Compiling multibase v0.9.1
   Compiling wasm-bindgen-macro v0.2.87
   Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling wasmi v0.13.2
   Compiling tempfile v3.8.0
   Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling yamux v0.10.2
   Compiling socket2 v0.5.4
   Compiling zstd-sys v2.0.8+zstd.1.5.5
   Compiling wasmtime-runtime v6.0.2
   Compiling psm v0.1.21
   Compiling secp256k1-sys v0.6.1
   Compiling backtrace v0.3.69
   Compiling wasm-bindgen v0.2.87
   Compiling ring v0.16.20
   Compiling prost-build v0.11.9
   Compiling sp-core-hashing-proc-macro v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling blake3 v1.4.1
   Compiling js-sys v0.3.64
   Compiling sp-panic-handler v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tokio-util v0.7.8
   Compiling libz-sys v1.1.12
   Compiling netlink-sys v0.8.5
   Compiling wasmtime-jit v6.0.2
   Compiling libp2p-core v0.38.0
   Compiling h2 v0.3.21
   Compiling netlink-proto v0.10.0
   Compiling flate2 v1.0.27
   Compiling libp2p-kad v0.42.1
   Compiling rtnetlink v0.10.1
   Compiling gloo-timers v0.2.6
   Compiling futures-timer v3.0.2
   Compiling wasm-bindgen-futures v0.4.37
   Compiling soketto v0.7.1
   Compiling sc-utils v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p-identify v0.41.1
   Compiling trust-dns-proto v0.22.0
   Compiling libp2p-noise v0.41.0
   Compiling finality-grandpa v0.16.2
   Compiling web-sys v0.3.64
   Compiling rustls v0.20.8
   Compiling snow v0.9.3
   Compiling rustls v0.21.7
   Compiling blst v0.3.11 (https://github.com/supranational/blst.git#78fee18b)
   Compiling tokio-stream v0.1.14
   Compiling link-cplusplus v1.0.9
   Compiling num_cpus v1.16.0
   Compiling mio v0.8.8
   Compiling cxx v1.0.106
   Compiling cxx-build v1.0.106
   Compiling tikv-jemalloc-sys v0.5.4+5.3.0-patched
   Compiling sct v0.7.0
   Compiling hyper v0.14.27
   Compiling webpki v0.22.0
   Compiling trust-dns-resolver v0.22.0
   Compiling webpki-roots v0.22.6
   Compiling if-watch v3.1.0
   Compiling rustls-webpki v0.101.4
   Compiling gloo-utils v0.1.7
   Compiling gloo-net v0.2.6
   Compiling rustls-webpki v0.100.2
   Compiling socket2 v0.4.9
   Compiling webpki-roots v0.23.1
   Compiling futures-rustls v0.22.2
   Compiling tokio-rustls v0.23.4
   Compiling wasm-opt-sys v0.111.0
   Compiling clang-sys v1.6.1
   Compiling wasm-opt-cxx-sys v0.111.0
   Compiling substrate-prometheus-endpoint v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling jsonrpsee-core v0.16.3
   Compiling tokio-rustls v0.24.1
   Compiling hyper-rustls v0.23.2
   Compiling hyper-rustls v0.24.1
   Compiling lz4-sys v1.9.4
   Compiling bindgen v0.64.0
   Compiling jsonrpsee-types v0.16.3
   Compiling jsonrpsee-client-transport v0.16.3
   Compiling jsonrpsee-ws-client v0.16.3
   Compiling jsonrpsee-wasm-client v0.16.3
   Compiling jsonrpsee-server v0.16.3
   Compiling jsonrpsee-http-client v0.16.3
   Compiling block-buffer v0.9.0
   Compiling sha-1 v0.9.8
   Compiling jsonrpsee v0.16.3
   Compiling scale-info v2.9.0
   Compiling sp-core-hashing v9.0.0
   Compiling filetime v0.2.22
   Compiling strum v0.24.1
   Compiling sc-rpc-server v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-metadata v16.0.0
   Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling subxt-metadata v0.31.0
   Compiling secp256k1-sys v0.8.1
   Compiling scale-decode v0.9.0
   Compiling scale-encode v0.5.0
   Compiling librocksdb-sys v0.10.0+7.9.2
   Compiling multihash v0.16.3
   Compiling multiaddr v0.16.0
   Compiling subxt-codegen v0.31.0
   Compiling kzg v0.1.0 (https://github.com/ZeroDAO/rust-kzg.git?rev=de872ad#de872ad8)
   Compiling rust-kzg-blst v0.1.0 (https://github.com/ZeroDAO/rust-kzg.git?rev=de872ad#de872ad8)
   Compiling cid v0.8.6
   Compiling scale-value v0.12.0
   Compiling melo-das-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/das-primitives)
   Compiling secp256k1 v0.24.3
   Compiling libp2p-swarm v0.41.1
   Compiling libp2p-websocket v0.40.0
   Compiling libp2p-yamux v0.42.0
   Compiling libp2p-dns v0.38.0
   Compiling libp2p-tcp v0.38.0
   Compiling libp2p-mplex v0.38.0
   Compiling libp2p-wasm-ext v0.38.0
   Compiling libp2p-ping v0.41.0
   Compiling libp2p-mdns v0.42.0
   Compiling libp2p-request-response v0.23.0
   Compiling melo-erasure-coding v0.1.0 (/home/nikhil/w3f/melodot/crates/melo-erasure-coding)
   Compiling subxt-macro v0.31.0
   Compiling libp2p-metrics v0.11.0
   Compiling lz4 v1.24.0
   Compiling libp2p v0.50.1
   Compiling parity-db v0.4.10
   Compiling sc-peerset v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-telemetry v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling subxt v0.31.0
   Compiling secp256k1 v0.27.0
   Compiling subxt-signer v0.31.0
   Compiling zstd-safe v6.0.6
   Compiling zstd v0.12.4
   Compiling sp-maybe-compressed-blob v4.1.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling zstd-safe v5.0.2+zstd.1.5.2
   Compiling zstd v0.11.2+zstd.1.5.2
   Compiling wasmtime-cache v6.0.2
   Compiling wasmtime v6.0.2
   Compiling sp-wasm-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-core v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-trie v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keystore v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-weights v4.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-allocator v4.1.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-state-machine v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-rpc v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-wasmi v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-wasmtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-state-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-io v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-application-crypto v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-keystore v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-sysinfo v6.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-version v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-npos-elections v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keyring v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-block-builder v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-blockchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-storage-proof v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-db v0.0.1 (/home/nikhil/w3f/melodot/crates/das-db)
   Compiling melo-core-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/core-primitives)
   Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-try-runtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authorship v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling node-primitives v2.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-election-provider-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-network v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network)
   Compiling frame-system-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-system-ext)
   Compiling pallet-nomination-pools v1.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-treasury v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-offences v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-executive-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-executive-ext)
   Compiling pallet-bounties v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-asset-tx-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-election-provider-multi-phase v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-bags-list v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-nomination-pools-runtime-api v1.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-im-online v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-sudo v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-scheduler v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-utility v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-preimage v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-indices v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-melo-store v0.1.0 (/home/nikhil/w3f/melodot/crates/pallet-melo-store)
   Compiling pallet-membership v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-elections-phragmen v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-assets v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-democracy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-collective v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-babe v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-daser v0.0.1 (/home/nikhil/w3f/melodot/crates/daser)
   Compiling melo-das-network-protocol v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network/protocol)
   Compiling wasm-opt v0.111.0
   Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melodot-runtime v0.0.1 (/home/nikhil/w3f/melodot/runtime)
   Compiling rocksdb v0.20.1
   Compiling kvdb-rocksdb v0.18.0
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-rpc v0.0.1 (/home/nikhil/w3f/melodot/crates/das-rpc)
   Compiling meloxt v0.0.1 (/home/nikhil/w3f/melodot/crates/meloxt)
   Compiling melodot-light-client v0.0.1 (/home/nikhil/w3f/melodot/light)
   Compiling melodot-light-client-e2e v0.0.1 (/home/nikhil/w3f/melodot/light/e2e)
    Finished release [optimized] target(s) in 6m 52s
```

Node is building fine.

```
± |main ✓| → make build-default
cargo build --release -p melodot-node -p melodot-runtime
   Compiling fallible-iterator v0.2.0
   Compiling scale-info v2.9.0
   Compiling libsecp256k1 v0.7.1
   Compiling secrecy v0.8.0
   Compiling tokio v1.33.0
   Compiling libp2p-core v0.38.0
   Compiling soketto v0.7.1
   Compiling jsonrpsee v0.16.3
   Compiling rust-kzg-blst v0.1.0 (https://github.com/ZeroDAO/rust-kzg.git?rev=de872ad#de872ad8)
   Compiling parity-db v0.4.10
   Compiling clap_builder v4.4.1
   Compiling names v0.13.0
   Compiling melodot-runtime v0.0.1 (/home/nikhil/w3f/melodot/runtime)
   Compiling sc-rpc-server v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling gimli v0.26.2
   Compiling libp2p-websocket v0.40.0
   Compiling libp2p-wasm-ext v0.38.0
   Compiling libp2p-mplex v0.38.0
   Compiling primitive-types v0.12.1
   Compiling bounded-collections v0.1.8
   Compiling sp-arithmetic v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-metadata v15.1.0
   Compiling libp2p-yamux v0.42.0
   Compiling libp2p-noise v0.41.0
   Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-runtime-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-utils v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling cranelift-codegen v0.93.2
   Compiling wasmtime-environ v6.0.2
   Compiling addr2line v0.17.0
   Compiling sp-core v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tokio-util v0.7.8
   Compiling libp2p-swarm v0.41.1
   Compiling netlink-sys v0.8.5
   Compiling h2 v0.3.21
   Compiling netlink-proto v0.10.0
   Compiling wasmtime-runtime v6.0.2
   Compiling rtnetlink v0.10.1
   Compiling trust-dns-proto v0.22.0
   Compiling libp2p-ping v0.41.0
   Compiling sp-trie v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling wasmtime-jit v6.0.2
   Compiling sp-keystore v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-weights v4.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p-kad v0.42.1
   Compiling libp2p-identify v0.41.1
   Compiling sp-state-machine v0.13.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p-request-response v0.23.0
   Compiling finality-grandpa v0.16.2
   Compiling sc-allocator v4.1.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling tokio-rustls v0.24.1
   Compiling tokio-stream v0.1.14
   Compiling trust-dns-resolver v0.22.0
   Compiling libp2p-metrics v0.11.0
   Compiling sc-executor-wasmtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor-wasmi v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling hyper v0.14.27
   Compiling sp-io v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p-dns v0.38.0
   Compiling sc-peerset v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling cranelift-frontend v0.93.2
   Compiling cranelift-native v0.93.2
   Compiling tokio-rustls v0.23.4
   Compiling cranelift-wasm v0.93.2
   Compiling sc-telemetry v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-rpc v6.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling wasmtime-cranelift v6.0.2
   Compiling melo-das-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/das-primitives)
   Compiling sc-state-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling if-watch v3.1.0
   Compiling sp-application-crypto v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p-mdns v0.42.0
   Compiling libp2p-tcp v0.38.0
   Compiling wasmtime v6.0.2
   Compiling sp-runtime v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling libp2p v0.50.1
   Compiling substrate-prometheus-endpoint v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling jsonrpsee-core v0.16.3
   Compiling hyper-rustls v0.24.1
   Compiling hyper-rustls v0.23.2
   Compiling sp-wasm-interface v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-version v5.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling jsonrpsee-client-transport v0.16.3
   Compiling sp-consensus-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling jsonrpsee-ws-client v0.16.3
   Compiling jsonrpsee-wasm-client v0.16.3
   Compiling jsonrpsee-http-client v0.16.3
   Compiling jsonrpsee-server v0.16.3
   Compiling sp-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-blockchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-block-builder v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-erasure-coding v0.1.0 (/home/nikhil/w3f/melodot/crates/melo-erasure-coding)
   Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-common v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-transaction-storage-proof v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-keystore v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-sysinfo v6.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-storage-monitor v0.1.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling clap v4.4.1
   Compiling sp-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-keyring v7.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-aura v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-proposer-metrics v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-npos-elections v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-epochs v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-rpc-client v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-remote-externalities v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-babe v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sp-mmr-primitives v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-service v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-db v0.0.1 (/home/nikhil/w3f/melodot/crates/das-db)
   Compiling frame-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-core-primitives v0.1.0 (/home/nikhil/w3f/melodot/crates/core-primitives)
   Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling mmr-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-benchmarking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-grandpa v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-authority-discovery v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling try-runtime-cli v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-babe-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-consensus-grandpa-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling sc-sync-state-rpc v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melodot-node v0.0.1 (/home/nikhil/w3f/melodot/node)
   Compiling frame-try-runtime v0.10.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-timestamp v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authorship v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling node-primitives v2.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-election-provider-support v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-network v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network)
   Compiling pallet-nomination-pools v1.0.0 (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-system-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-system-ext)
   Compiling pallet-im-online v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-utility v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-elections-phragmen v5.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-membership v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-bags-list v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-election-provider-multi-phase v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling frame-executive-ext v4.0.0-dev (/home/nikhil/w3f/melodot/crates/frame-executive-ext)
   Compiling pallet-assets v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-transaction-payment-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-asset-tx-payment v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-scheduler v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-sudo v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-preimage v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-collective v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-melo-store v0.1.0 (/home/nikhil/w3f/melodot/crates/pallet-melo-store)
   Compiling pallet-treasury v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-offences v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-indices v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-democracy v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-network-protocol v0.0.1 (/home/nikhil/w3f/melodot/crates/das-network/protocol)
   Compiling melo-daser v0.0.1 (/home/nikhil/w3f/melodot/crates/daser)
   Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-nomination-pools-runtime-api v1.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-bounties v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-authority-discovery v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-babe v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling pallet-staking v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.42#ff24c60a)
   Compiling melo-das-rpc v0.0.1 (/home/nikhil/w3f/melodot/crates/das-rpc)
    Finished release [optimized] target(s) in 3m 30s

```

## Light client

Node is starting and producing blocks.

```
± |main ✓| → make run-dev
./target/release/melodot-node --dev --ws-external
2023-11-11 04:11:58 Melodot Node
2023-11-11 04:11:58 ✌️  version 0.0.1-34c748cd7ca
2023-11-11 04:11:58 ❤️  by DKLee <xiuerdwy@gmail.com>, 2017-2023
2023-11-11 04:11:58 📋 Chain specification: Development
2023-11-11 04:11:58 🏷  Node name: weak-test-2988
2023-11-11 04:11:58 👤 Role: AUTHORITY
2023-11-11 04:11:58 💾 Database: RocksDb at /tmp/substrateIiEYjS/chains/dev/db/full
2023-11-11 04:11:58 ⛓  Native runtime: melodot-1 (melodot-1.tx1.au1)
2023-11-11 04:11:58 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators
2023-11-11 04:11:58 [0] 💸 generated 1 npos targets
2023-11-11 04:11:59 🔨 Initializing Genesis block/state (state: 0x79d4…daf1, header-hash: 0x7be1…2423)
2023-11-11 04:11:59 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2023-11-11 04:11:59 👶 Creating empty BABE epoch changes on what appears to be first startup.
2023-11-11 04:12:00 Using default protocol ID "sup" because none is configured in the chain specs
2023-11-11 04:12:00 🏷  Local node identity is: 12D3KooWNkqqFzKNyex4Nxxpte3jex2X6P4zuubRb75ZZ7QEnnqp
2023-11-11 04:12:00 🚀 Starting transaction pool listener.
2023-11-11 04:12:00 💻 Operating system: linux
2023-11-11 04:12:00 💻 CPU architecture: x86_64
2023-11-11 04:12:00 💻 Target environment: gnu
2023-11-11 04:12:00 💻 CPU: AMD Ryzen 9 5900HX with Radeon Graphics
2023-11-11 04:12:00 💻 CPU cores: 8
2023-11-11 04:12:00 💻 Memory: 15397MB
2023-11-11 04:12:00 💻 Kernel: 5.15.0-48-generic
2023-11-11 04:12:00 💻 Linux distribution: Ubuntu 22.04 LTS
2023-11-11 04:12:00 💻 Virtual machine: no
2023-11-11 04:12:00 📦 Highest known block at #0
2023-11-11 04:12:00 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-11-11 04:12:00 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["*"]
2023-11-11 04:12:00 Running JSON-RPC WS server: addr=0.0.0.0:9944, allowed origins=["*"]
2023-11-11 04:12:00 👶 Starting BABE Authorship worker
2023-11-11 04:12:05 💤 Idle (0 peers), best: #0 (0x7be1…2423), finalized #0 (0x7be1…2423), ⬇ 0 ⬆ 0
2023-11-11 04:12:06 🙌 Starting consensus session on top of parent 0x7be1eb1ddcd427b07826b74efabba7a76da695c11152bb9057faeae63ccc2423
2023-11-11 04:12:06 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x12130e66554d43ddaa0b1fb120e20b966b3a6e1abc4bf44ca58cd6c0b3bc3da9; parent_hash: 0x7be1…2423; extrinsics (1): [0xb66e…8cf9]]
2023-11-11 04:12:06 🔖 Pre-sealed block for proposal at 1. Hash now 0x34d8e91f7d0a792daaf39082194a9b61beb775f77ce815d7c9e1deadddc0433b, previously 0x12130e66554d43ddaa0b1fb120e20b966b3a6e1abc4bf44ca58cd6c0b3bc3da9.
2023-11-11 04:12:06 👶 New epoch 0 launching at block 0x34d8…433b (block slot 283276021 >= start slot 283276021).
2023-11-11 04:12:06 👶 Next epoch starts at slot 283276621
2023-11-11 04:12:06 😴 Block 1 has no blob
2023-11-11 04:12:06 ✨ Imported #1 (0x34d8…433b)

```

Light client is starting and sampling block headers.


```
± |main ✓| → make run-light-dev
./scripts/init.sh
All required dependencies are already installed.
./target/release/melodot-light --dev-mode
 INFO 🚀 Melodot Light Client starting up
 INFO 👂 RPC server started at: 127.0.0.1:4177
 INFO creating instance on iface 192.168.1.21
 INFO 🌐 Subscribed to finalized block headers
 INFO ✅ Received finalized block header #3
 INFO creating instance on iface 172.19.0.1
 INFO creating instance on iface 172.20.0.1
 INFO creating instance on iface 172.22.0.1
 INFO creating instance on iface 172.17.0.1
 INFO creating instance on iface 172.18.0.1
 INFO creating instance on iface 172.21.0.1
 INFO ✅ Received finalized block header #4
 INFO ✅ Received finalized block header #5
 INFO ✅ Received finalized block header #6
 INFO ✅ Received finalized block header #7
 INFO ✅ Received finalized block header #8
```

## Docker

Docker compose is working fine.

```
± |main ✓| → ./scripts/docker_run.sh
*** Melodot ***
[+] Creating 1/0
 ✔ Network melodot_default  Created                                                                                                                                                                   0.0s
[+] Running 4/4
 ✔ dev 3 layers [⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                         43.3s
   ✔ 9d21b12d5fab Pull complete                                                                                                                                                                       2.5s
   ✔ 12fd99bf0468 Pull complete                                                                                                                                                                      34.3s
   ✔ a96623d36357 Pull complete                                                                                                                                                                      39.7s
root@68b5c6ccb321:/var/www/melodot#

```