# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/WeTEE_Network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/LICENSE)  | - |
| **0b.** | Documentation | <ul><li>[ ] </li></ul> | [M1 docs](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/grants/milestone-1-documentation.md)  | See [Documentation Feedback](#documentation-feedback) |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Test guide](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/grants/milestone-1-test.md)  | See [Testing Feedback](#testing-feedback) |
| 01. | Substrate module: worker | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides modules for the registration and staking of miner nodes, as well as accepting proof-of-work data and detailed file hashes and addresses from miners, and also provides withdrawal functions for miners, as well as closure (which can only be executed if all services have already stopped/migrated), and also provides channels for users to complain about miner nodes.<br /> 1. Worker cluster register <br /> 2. Worker cluster mortgage <br /> 3. Worker cluster upload proof of work data <br /> 4. Worker cluster withdrawal <br /> 5. Worker cluster stop <br /> 6. Worker cluster report |
| 02. | Substrate module: app | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides users with the function of deploying and updating applications, as well as an interface for topping up applications. Users can prepay for the operation of the application, and miners can only unlock the fees paid by users after uploading proof of work.<br />1. TEE app create <br /> 2. TEE app update <br /> 3. TEE app set settings <br /> 4. TEE app recharge <br /> 5. TEE app stop |
| 03. | Substrate module: task | <ul><li>[ ] </li></ul> | (to be evaluated, once 0b./0d. are accepted)  | Spec: This pallet provides users with the function of deploying and updating periodic/temporary tasks, where users can set the execution time and cycle of tasks. It also provides an interface for users to recharge their applications, allowing them to prepay for the operation of the application. Miners can only obtain revenue after uploading proof-of-work for single-task work.<br /> 1. TEE task create <br /> 2. TEE task update <br /> 3. TEE task set execute settings <br /> 4. TEE task recharge <br /> 5. TEE task stop |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker run instructions](https://github.com/wetee-dao/chain/blob/0a9e6c090402b950ab2f17b502368df6118bfb7a/docs/run-docker.md) | See [Documentation Feedback](#documentation-feedback) |



Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- [x] Build docker image: ~~currently generates an error when run on macbook pro m2~~ passes

  <details>
      <summary>Output</summary>

      ```zsh
      % docker build -f ./pos_build.Dockerfile -t wetee/wetee-node:dev .
      [+] Building 3.6s (12/12) FINISHED
      docker:desktop-linux
      => [internal] load .dockerignore  0.0s
      => => transferring context: 143B  0.0s
      => [internal] load build definition from pos_build.Dockerfile   0.0s
      => => transferring dockerfile: 465B   0.0s
      => [internal] load metadata for docker.io/library/ubuntu:22.04  2.1s
      => [internal] load metadata for docker.io/wetee/wetee-builder:2023-08-22  3.3s
      => [internal] load build context  0.2s
      => => transferring context: 579.85kB  0.2s
      => [builder 1/4] FROM docker.io/wetee/wetee-builder:2023-08-22@sha256:aa7fed6624c2f62d16960d1d011a7ab27c32299f0ef0c7fe4c1435d213c3d7f5  0.0s
      => [stage-1 1/3] FROM docker.io/library/ubuntu:22.04@sha256:e6173d4dc55e76b87c4af8db8821b1feae4146dd47341e4d431118c7dd060a74  0.0s
      => CACHED [builder 2/4] COPY . .  0.0s
      => CACHED [builder 3/4] RUN cargo build --locked --release  0.0s
      => CACHED [stage-1 2/3] COPY  --from=builder  /target/release/wetee-node /usr/local/bin   0.0s
      => CACHED [stage-1 3/3] RUN apt-get update  0.0s
      => exporting to image   0.0s
      => => exporting layers  0.0s
      => => writing image sha256:73cad5a9580598b9f7a92dbc0d0a62836a5c794aa0eba59255cdf97fa0df2f53   0.0s
      => => naming to docker.io/wetee/wetee-node:dev   
      ```
  </details>

- [x] Run node using docker:

  <details>
      <summary>Output</summary>

      ```zsh
      % docker run wetee/wetee-node:dev wetee-node --dev

      2024-01-24 10:36:59 Substrate Node    
      2024-01-24 10:36:59 ✌️  version 4.0.0-dev-34aab056407    
      2024-01-24 10:36:59 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2024    
      2024-01-24 10:36:59 📋 Chain specification: Development    
      2024-01-24 10:36:59 🏷  Node name: ludicrous-regret-4234    
      2024-01-24 10:36:59 👤 Role: AUTHORITY    
      2024-01-24 10:36:59 💾 Database: RocksDb at /tmp/substrateSasrHc/chains/dev/db/full    
      2024-01-24 10:36:59 🔨 Initializing Genesis block/state (state: 0xa7ee…372a, header-hash: 0x493f…97cf)    
      2024-01-24 10:36:59 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
      2024-01-24 10:37:00 Using default protocol ID "sup" because none is configured in the chain specs    
      2024-01-24 10:37:00 🏷  Local node identity is: 12D3KooWNxSdqFLRtLJGRH8FLGwwLQdZraXEJg35tZjZ6G7BPi5V    
      2024-01-24 10:37:00 💻 Operating system: linux    
      2024-01-24 10:37:00 💻 CPU architecture: aarch64    
      2024-01-24 10:37:00 💻 Target environment: gnu    
      2024-01-24 10:37:00 💻 Memory: 7846MB    
      2024-01-24 10:37:00 💻 Kernel: 6.5.11-linuxkit    
      2024-01-24 10:37:00 💻 Linux distribution: Ubuntu 22.04.3 LTS    
      2024-01-24 10:37:00 💻 Virtual machine: no    
      2024-01-24 10:37:00 📦 Highest known block at #0    
      2024-01-24 10:37:00 〽️ Prometheus exporter started at 127.0.0.1:9615    
      2024-01-24 10:37:00 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]    
      2024-01-24 10:37:05 💤 Idle (0 peers), best: #0 (0x493f…97cf), finalized #0 (0x493f…97cf), ⬇ 0 ⬆ 0    
      2024-01-24 10:37:06 🙌 Starting consensus session on top of parent 0x493f16fb73ffd942fa76a636cd57fa879d75ffcb2af7b1803832bb27b96f97cf    
      2024-01-24 10:37:06 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0xf2f2c0c52f09a1a659fbf1814b41e15a1b7b0a64775b2cf94fb0ea0c70758982; parent_hash: 0x493f…97cf; extrinsics (1): [0x4f60…4797]    
      2024-01-24 10:37:06 🔖 Pre-sealed block for proposal at 1. Hash now 0x23f4f0e294d0fbe649c8bd6877e93c4b8082f61c5973770d570b7fab8fc17629, previously 0xf2f2c0c52f09a1a659fbf1814b41e15a1b7b0a64775b2cf94fb0ea0c70758982.    
      2024-01-24 10:37:06 ✨ Imported #1 (0x23f4…7629)    
      2024-01-24 10:37:10 💤 Idle (0 peers), best: #1 (0x23f4…7629), finalized #0 (0x493f…97cf), ⬇ 0 ⬆ 0    
      2024-01-24 10:37:12 🙌 Starting consensus session on top of parent 0x23f4f0e294d0fbe649c8bd6877e93c4b8082f61c5973770d570b7fab8fc17629    
      2024-01-24 10:37:12 🎁 Prepared block for proposing at 2 (1 ms) [hash: 0x313c99354c1ac832592df928187f44effaa201865a81b3431eee39de90e98b8c; parent_hash: 0x23f4…7629; extrinsics (1): [0xc366…2b05]    
      2024-01-24 10:37:12 🔖 Pre-sealed block for proposal at 2. Hash now 0x86df8f3c70dc8407cf0e0f84084f7e264b2dcc273429252a4b0571ddedfb8ef7, previously 0x313c99354c1ac832592df928187f44effaa201865a81b3431eee39de90e98b8c.    
      ```

      ```
      % docker ps
      CONTAINER ID   IMAGE                  COMMAND              CREATED       STATUS       PORTS                                     NAMES
      329dec826698   wetee/wetee-node:dev   "wetee-node --dev"   6 hours ago   Up 6 hours   9615/tcp, 9933/tcp, 9944/tcp, 30333/tcp   nice_vaughan
      ```
  </details>

- [x] Run node using cargo:

  <details>
    <summary>Output</summary>

    ```zsh
    % cargo run --release -p wetee-node -- --dev

      Compiling proc-macro2 v1.0.70
      Compiling unicode-ident v1.0.12
      Compiling libc v0.2.150
      Compiling cfg-if v1.0.0
      Compiling autocfg v1.1.0
      Compiling version_check v0.9.4
      Compiling typenum v1.17.0
      Compiling syn v1.0.109
      Compiling serde v1.0.193
      Compiling subtle v2.4.1
      Compiling thiserror v1.0.50
      Compiling once_cell v1.18.0
      Compiling memchr v2.6.4
      Compiling log v0.4.20
      Compiling bytes v1.5.0
      Compiling generic-array v0.14.7
      Compiling const-oid v0.9.5
      Compiling smallvec v1.11.2
      Compiling ppv-lite86 v0.2.17
      Compiling pin-project-lite v0.2.13
      Compiling scopeguard v1.2.0
      Compiling futures-core v0.3.29
      Compiling futures-sink v0.3.29
      Compiling futures-io v0.3.29
      Compiling arrayvec v0.7.4
      Compiling slab v0.4.9
      Compiling lock_api v0.4.11
      Compiling futures-task v0.3.29
      Compiling byteorder v1.5.0
      Compiling futures-channel v0.3.29
      Compiling futures-util v0.3.29
      Compiling pin-utils v0.1.0
      Compiling equivalent v1.0.1
      Compiling parking_lot_core v0.9.9
      Compiling hashbrown v0.14.3
      Compiling indexmap v2.1.0
      Compiling either v1.9.0
      Compiling anyhow v1.0.75
      Compiling num-traits v0.2.17
      Compiling tinyvec_macros v0.1.1
      Compiling tinyvec v1.6.0
      Compiling quote v1.0.33
      Compiling syn v2.0.39
      Compiling getrandom v0.2.11
      Compiling jobserver v0.1.27
      Compiling cc v1.0.83
      Compiling rand_core v0.6.4
      Compiling rand_chacha v0.3.1
      Compiling cpufeatures v0.2.11
      Compiling rand v0.8.5
      Compiling num_cpus v1.16.0
      Compiling unicode-normalization v0.1.22
      Compiling ahash v0.8.6
      Compiling winnow v0.5.19
      Compiling pkg-config v0.3.27
      Compiling unicode-bidi v0.3.13
      Compiling keccak v0.1.4
      Compiling zerocopy v0.7.27
      Compiling percent-encoding v2.3.1
      Compiling form_urlencoded v1.2.1
      Compiling idna v0.5.0
      Compiling static_assertions v1.1.0
      Compiling arrayref v0.3.7
      Compiling aho-corasick v1.1.2
      Compiling tracing-core v0.1.32
      Compiling url v2.5.0
      Compiling unicode-xid v0.2.4
      Compiling regex-syntax v0.8.2
      Compiling num-integer v0.1.45
      Compiling constant_time_eq v0.3.0
      Compiling instant v0.1.12
      Compiling serde_derive v1.0.193
      Compiling zeroize_derive v1.4.2
      Compiling thiserror-impl v1.0.50
      Compiling futures-macro v0.3.29
      Compiling tracing-attributes v0.1.27
      Compiling zeroize v1.7.0
      Compiling parking_lot v0.12.1
      Compiling itoa v1.0.9
      Compiling paste v1.0.14
      Compiling impl-trait-for-tuples v0.2.2
      Compiling regex-automata v0.4.3
      Compiling hashbrown v0.13.2
      Compiling tracing v0.1.40
      Compiling crypto-common v0.1.6
      Compiling block-buffer v0.10.4
      Compiling ahash v0.7.7
      Compiling digest v0.10.7
      Compiling blake2b_simd v1.0.2
      Compiling zstd-sys v2.0.9+zstd.1.5.5
      Compiling sha2 v0.10.8
      Compiling sha3 v0.10.8
      Compiling crc32fast v1.3.2
      Compiling semver v1.0.20
      Compiling lazy_static v1.4.0
      Compiling regex v1.10.2
      Compiling itertools v0.10.5
      Compiling byte-slice-cast v1.2.2
      Compiling digest v0.9.0
      Compiling num-bigint v0.4.4
      Compiling indexmap v1.9.3
      Compiling futures-executor v0.3.29
      Compiling futures v0.3.29
      Compiling hashbrown v0.12.3
      Compiling core-foundation-sys v0.8.6
      Compiling bitflags v1.3.2
      Compiling toml v0.5.11
      Compiling toml_datetime v0.6.5
      Compiling toml_edit v0.20.7
      Compiling proc-macro-crate v1.1.3
      Compiling proc-macro-crate v2.0.0
      Compiling crunchy v0.2.2
      Compiling opaque-debug v0.3.0
      Compiling rustc_version v0.4.0
      Compiling ark-std v0.4.0
      Compiling ark-serialize-derive v0.4.2
      Compiling getrandom v0.1.16
      Compiling cranelift-entity v0.95.1
      Compiling ark-ff-asm v0.4.2
      Compiling derivative v2.2.0
      Compiling stable_deref_trait v1.2.0
      Compiling fallible-iterator v0.2.0
      Compiling bitflags v2.4.1
      Compiling parity-scale-codec-derive v3.6.9
      Compiling target-lexicon v0.12.12
      Compiling gimli v0.27.3
      Compiling block-buffer v0.9.0
      Compiling errno v0.3.8
      Compiling parity-scale-codec v3.6.9
      Compiling crossbeam-utils v0.8.16
      Compiling ark-serialize v0.4.2
      Compiling cranelift-isle v0.95.1
      Compiling rustix v0.38.25
      Compiling ark-ff-macros v0.4.2
      Compiling rand_core v0.5.1
      Compiling scale-info-derive v2.10.0
      Compiling derive_more v0.99.17
      Compiling cranelift-codegen-shared v0.95.1
      Compiling serde_json v1.0.108
      Compiling platforms v3.2.0
      Compiling curve25519-dalek v4.1.1
      Compiling ark-ff v0.4.2
      Compiling cranelift-codegen-meta v0.95.1
      Compiling signature v2.2.0
      Compiling ryu v1.0.15
      Compiling wasmparser v0.102.0
      Compiling fxhash v0.2.1
      Compiling slice-group-by v0.3.1
      Compiling regalloc2 v0.6.1
      Compiling cranelift-codegen v0.95.1
      Compiling object v0.30.4
      Compiling cranelift-bforest v0.95.1
      Compiling memoffset v0.9.0
      Compiling io-lifetimes v1.0.11
      Compiling scale-info v2.10.0
      Compiling base64 v0.13.1
      Compiling wasmtime-types v8.0.1
      Compiling parking_lot_core v0.8.6
      Compiling bumpalo v3.14.0
      Compiling sp-std v8.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling ed25519 v2.2.3
      Compiling Inflector v0.11.4
      Compiling crossbeam-epoch v0.9.15
      Compiling rustix v0.36.17
      Compiling hex v0.4.3
      Compiling ed25519-dalek v2.1.0
      Compiling wasmtime-environ v8.0.1
      Compiling memoffset v0.8.0
      Compiling base64 v0.21.5
      Compiling zstd-safe v5.0.2+zstd.1.5.2
      Compiling parking_lot v0.11.2
      Compiling is-terminal v0.4.9
      Compiling wasmtime-runtime v8.0.1
      Compiling generic-array v0.12.4
      Compiling cpp_demangle v0.3.5
      Compiling termcolor v1.4.0
      Compiling rayon-core v1.12.0
      Compiling rustc-demangle v0.1.23
      Compiling humantime v2.1.0
      Compiling env_logger v0.10.1
      Compiling libsecp256k1-core v0.3.0
      Compiling crossbeam-deque v0.8.3
      Compiling uint v0.9.5
      Compiling wasmtime-jit-debug v8.0.1
      Compiling memfd v0.6.4
      Compiling curve25519-dalek v3.2.0
      Compiling bincode v1.3.3
      Compiling iana-time-zone v0.1.58
      Compiling hmac v0.12.1
      Compiling psm v0.1.21
      Compiling mach v0.3.2
      Compiling dirs-sys-next v0.1.2
      Compiling wasmtime-asm-macros v8.0.1
      Compiling byte-tools v0.3.1
      Compiling regex-syntax v0.6.29
      Compiling wasmtime-cache v8.0.1
      Compiling rustc-hash v1.1.0
      Compiling ref-cast v1.0.20
      Compiling block-padding v0.1.5
      Compiling cranelift-frontend v0.95.1
      Compiling cranelift-native v0.95.1
      Compiling cranelift-wasm v0.95.1
      Compiling ark-poly v0.4.2
      Compiling wasmtime-cranelift-shared v8.0.1
      Compiling regex-automata v0.1.10
      Compiling directories-next v2.0.0
      Compiling ark-ec v0.4.2
      Compiling chrono v0.4.31
      Compiling file-per-thread-logger v0.1.6
      Compiling digest v0.8.1
      Compiling addr2line v0.19.0
      Compiling impl-serde v0.4.0
      Compiling merlin v3.0.0
      Compiling ref-cast-impl v1.0.20
      Compiling wasmtime-jit-icache-coherence v8.0.1
      Compiling rustc-hex v2.1.0
      Compiling wasmtime v8.0.1
      Compiling fflonk v0.1.0 (https://github.com/w3f/fflonk#95f3a57d)
      Compiling wasmtime-jit v8.0.1
      Compiling matchers v0.0.1
      Compiling wasmtime-cranelift v8.0.1
      Compiling ark-transcript v0.0.2 (https://github.com/w3f/ring-vrf?rev=3119f51#3119f51b)
      Compiling rayon v1.8.0
      Compiling block-buffer v0.7.3
      Compiling libsecp256k1-gen-ecmult v0.3.0
      Compiling libsecp256k1-gen-genmult v0.3.0
      Compiling rand_chacha v0.2.2
      Compiling sha2 v0.9.9
      Compiling tracing-serde v0.1.3
      Compiling sharded-slab v0.1.7
      Compiling crypto-mac v0.8.0
      Compiling crypto-mac v0.11.1
      Compiling sp-debug-derive v8.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling tracing-log v0.1.4
      Compiling secp256k1-sys v0.6.1
      Compiling thread_local v1.1.7
      Compiling opaque-debug v0.2.3
      Compiling hash-db v0.16.0
      Compiling ansi_term v0.12.1
      Compiling fake-simd v0.1.2
      Compiling sha2 v0.8.2
      Compiling tracing-subscriber v0.2.25
      Compiling sp-storage v13.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling hmac v0.8.1
      Compiling rand v0.7.3
      Compiling libsecp256k1 v0.7.1
      Compiling ark-secret-scalar v0.0.2 (https://github.com/w3f/ring-vrf?rev=3119f51#3119f51b)
      Compiling common v0.1.0 (https://github.com/w3f/ring-proof?rev=0e948f3#0e948f3c)
      Compiling fixed-hash v0.8.0
      Compiling ark-bls12-381 v0.4.0
      Compiling ark-scale v0.0.10
      Compiling curve25519-dalek v2.1.3
      Compiling ss58-registry v1.44.0
      Compiling impl-codec v0.6.0
      Compiling merlin v2.0.1
      Compiling arrayvec v0.5.2
      Compiling environmental v1.1.4
      Compiling rustversion v1.0.14
      Compiling schnorrkel v0.9.1
      Compiling ark-ed-on-bls12-381-bandersnatch v0.4.0
      Compiling sp-tracing v10.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling primitive-types v0.12.2
      Compiling ring v0.1.0 (https://github.com/w3f/ring-proof?rev=0e948f3#0e948f3c)
      Compiling dleq_vrf v0.0.2 (https://github.com/w3f/ring-vrf?rev=3119f51#3119f51b)
      Compiling hmac-drbg v0.3.0
      Compiling pbkdf2 v0.8.0
      Compiling hmac v0.11.0
      Compiling ark-scale v0.0.11
      Compiling sp-runtime-interface-proc-macro v11.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling twox-hash v1.6.3
      Compiling pbkdf2 v0.11.0
      Compiling blake2 v0.10.6
      Compiling num-format v0.4.4
      Compiling dyn-clonable-impl v0.9.0
      Compiling dyn-clone v1.0.16
      Compiling dyn-clonable v0.9.0
      Compiling sp-externalities v0.19.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling tiny-bip39 v1.0.0
      Compiling sp-core-hashing v9.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling bandersnatch_vrfs v0.0.1 (https://github.com/w3f/ring-vrf?rev=3119f51#3119f51b)
      Compiling substrate-bip39 v0.4.5
      Compiling ed25519-zebra v3.1.0
      Compiling bounded-collections v0.1.9
      Compiling hash256-std-hasher v0.15.2
      Compiling secrecy v0.8.0
      Compiling bs58 v0.5.0
      Compiling array-bytes v6.2.0
      Compiling nohash-hasher v0.2.0
      Compiling backtrace v0.3.69
      Compiling adler v1.0.2
      Compiling gimli v0.28.1
      Compiling miniz_oxide v0.7.1
      Compiling object v0.32.1
      Compiling trie-db v0.27.1
      Compiling memory-db v0.32.0
      Compiling trie-root v0.18.0
      Compiling schnellru v0.2.1
      Compiling integer-sqrt v0.1.5
      Compiling sp-arithmetic v16.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-io v23.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling async-trait v0.1.74
      Compiling proc-macro-error-attr v1.0.4
      Compiling addr2line v0.21.0
      Compiling proc-macro-error v1.0.4
      Compiling sp-panic-handler v8.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling fs-err v2.11.0
      Compiling expander v2.0.0
      Compiling parity-wasm v0.45.0
      Compiling frame-metadata v16.0.0
      Compiling sp-core-hashing-proc-macro v9.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling fnv v1.0.7
      Compiling heck v0.4.1
      Compiling sp-version-proc-macro v8.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling tokio-macros v2.2.0
      Compiling mio v0.8.9
      Compiling sp-api-proc-macro v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling signal-hook-registry v1.4.1
      Compiling socket2 v0.5.5
      Compiling tokio v1.34.0
      Compiling futures-timer v3.0.2
      Compiling asynchronous-codec v0.6.2
      Compiling sp-metadata-ir v0.1.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling data-encoding v2.5.0
      Compiling unsigned-varint v0.7.2
      Compiling http v0.2.11
      Compiling blake3 v1.5.0
      Compiling socket2 v0.4.10
      Compiling synstructure v0.12.6
      Compiling data-encoding-macro-internal v0.1.12
      Compiling httparse v1.8.0
      Compiling data-encoding-macro v0.1.14
      Compiling multihash-derive v0.8.1
      Compiling serde_spanned v0.6.4
      Compiling blake2s_simd v1.0.2
      Compiling core2 v0.4.0
      Compiling tiny-keccak v2.0.2
      Compiling base-x v0.2.11
      Compiling multibase v0.9.1
      Compiling multihash v0.17.0
      Compiling zstd-safe v6.0.6
      Compiling derive-syn-parse v0.1.5
      Compiling pin-project-internal v1.1.3
      Compiling quick-protobuf v0.8.1
      Compiling same-file v1.0.6
      Compiling bs58 v0.4.0
      Compiling walkdir v2.4.0
      Compiling tokio-util v0.7.10
      Compiling der v0.7.8
      Compiling macro_magic_core_macros v0.4.3
      Compiling tower-service v0.3.2
      Compiling http-body v0.4.5
      Compiling const-random-macro v0.1.16
      Compiling pin-project v1.1.3
      Compiling multiaddr v0.17.1
      Compiling const-random v0.1.17
      Compiling libp2p-identity v0.1.3
      Compiling ring v0.17.6
      Compiling ff v0.13.0
      Compiling base16ct v0.2.0
      Compiling try-lock v0.2.4
      Compiling h2 v0.3.22
      Compiling want v0.3.1
      Compiling macro_magic_core v0.4.2
      Compiling sec1 v0.7.3
      Compiling group v0.13.0
      Compiling rw-stream-sink v0.3.0
      Compiling multistream-select v0.12.1
      Compiling toml_edit v0.21.0
      Compiling crypto-bigint v0.5.5
      Compiling void v1.0.2
      Compiling proc-macro-warning v0.4.2
      Compiling httpdate v1.0.3
      Compiling libp2p-core v0.39.2
      Compiling macro_magic_macros v0.4.2
      Compiling spki v0.7.3
      Compiling elliptic-curve v0.13.8
      Compiling toml v0.8.8
      Compiling rfc6979 v0.4.0
      Compiling frame-support-procedural-tools-derive v3.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling include_dir_macros v0.7.3
      Compiling common-path v1.0.0
      Compiling frame-support-procedural-tools v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling include_dir v0.7.3
      Compiling cfg-expr v0.15.5
      Compiling hyper v0.14.27
      Compiling ecdsa v0.16.9
      Compiling macro_magic v0.4.2
      Compiling docify_macros v0.2.7
      Compiling prometheus v0.13.3
      Compiling untrusted v0.9.0
      Compiling k256 v0.13.2
      Compiling aquamarine v0.3.2
      Compiling kvdb v0.13.0
      Compiling docify v0.2.7
      Compiling tt-call v1.0.9
      Compiling vcpkg v0.2.15
      Compiling inout v0.1.3
      Compiling frame-support-procedural v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-database v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling cipher v0.4.4
      Compiling concurrent-queue v2.3.0
      Compiling universal-hash v0.5.1
      Compiling event-listener v2.5.3
      Compiling wasm-bindgen-shared v0.2.89
      Compiling polyval v0.6.1
      Compiling libp2p-swarm-derive v0.32.0
      Compiling async-channel v1.9.0
      Compiling wasm-instrument v0.3.0
      Compiling sha-1 v0.9.8
      Compiling libz-sys v1.1.12
      Compiling sc-executor-wasmtime v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling ghash v0.5.0
      Compiling ctr v0.9.2
      Compiling aes v0.8.3
      Compiling libp2p-swarm v0.42.2
      Compiling core-foundation v0.9.4
      Compiling substrate-prometheus-endpoint v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-utils v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling aead v0.5.2
      Compiling aes-gcm v0.10.3
      Compiling hkdf v0.12.3
      Compiling wasm-bindgen-backend v0.2.89
      Compiling x25519-dalek v2.0.0
      Compiling ring v0.16.20
      Compiling system-configuration-sys v0.5.0
      Compiling linked-hash-map v0.5.6
      Compiling ipnet v2.9.0
      Compiling flate2 v1.0.28
      Compiling soketto v0.7.1
      Compiling wasm-bindgen-macro-support v0.2.89
      Compiling wasm-bindgen v0.2.89
      Compiling matches v0.1.10
      Compiling idna v0.2.3
      Compiling wasm-bindgen-macro v0.2.89
      Compiling enum-as-inner v0.5.1
      Compiling match_cfg v0.1.0
      Compiling rustls v0.20.9
      Compiling untrusted v0.7.1
      Compiling trust-dns-proto v0.22.0
      Compiling hostname v0.3.1
      Compiling system-configuration v0.5.1
      Compiling snow v0.9.4
      Compiling if-addrs v0.10.2
      Compiling quick-error v1.2.3
      Compiling resolv-conf v0.7.0
      Compiling lru-cache v0.1.2
      Compiling pin-project-lite v0.1.12
      Compiling quicksink v0.1.2
      Compiling if-watch v3.2.0
      Compiling quick-protobuf-codec v0.1.0
      Compiling yamux v0.10.2
      Compiling x25519-dalek v1.1.1
      Compiling lru v0.10.1
      Compiling parity-send-wrapper v0.1.0
      Compiling predicates-core v1.0.6
      Compiling libp2p-yamux v0.43.1
      Compiling libp2p-identify v0.42.2
      Compiling libp2p-ping v0.42.0
      Compiling libp2p-request-response v0.24.1
      Compiling libp2p-kad v0.43.3
      Compiling libp2p-allow-block-list v0.1.1
      Compiling libp2p-tcp v0.39.0
      Compiling js-sys v0.3.66
      Compiling libp2p-connection-limits v0.1.0
      Compiling float-cmp v0.9.0
      Compiling normalize-line-endings v0.3.0
      Compiling difflib v0.4.0
      Compiling termtree v0.4.1
      Compiling wasm-timer v0.2.5
      Compiling predicates-tree v1.0.9
      Compiling predicates v2.1.5
      Compiling mockall_derive v0.11.4
      Compiling fragile v2.0.0
      Compiling downcast v0.11.0
      Compiling finality-grandpa v0.16.2
      Compiling fastrand v2.0.1
      Compiling bytemuck v1.14.0
      Compiling safe_arch v0.7.1
      Compiling linked_hash_set v0.1.4
      Compiling trust-dns-resolver v0.22.0
      Compiling wasm-bindgen-futures v0.4.39
      Compiling libp2p-wasm-ext v0.39.0
      Compiling libp2p-dns v0.39.0
      Compiling libp2p-mdns v0.43.1
      Compiling matrixmultiply v0.3.8
      Compiling num-rational v0.4.1
      Compiling ip_network v0.4.1
      Compiling partial_sort v0.2.0
      Compiling wide v0.7.13
      Compiling mockall v0.11.4
      Compiling prost-derive v0.11.9
      Compiling tempfile v3.8.1
      Compiling num-complex v0.4.4
      Compiling approx v0.5.1
      Compiling rawpointer v0.2.1
      Compiling nalgebra-macros v0.2.1
      Compiling simba v0.8.1
      Compiling prettyplease v0.1.25
      Compiling beef v0.5.2
      Compiling prost v0.11.9
      Compiling bstr v1.8.0
      Compiling scratch v1.0.7
      Compiling tower-layer v0.3.2
      Compiling fixedbitset v0.4.2
      Compiling home v0.5.5
      Compiling glob v0.3.1
      Compiling which v4.4.2
      Compiling globset v0.4.14
      Compiling petgraph v0.6.4
      Compiling clang-sys v1.6.1
      Compiling jsonrpsee-types v0.16.3
      Compiling link-cplusplus v1.0.9
      Compiling unicode-width v0.1.11
      Compiling multimap v0.8.3
      Compiling prettyplease v0.2.15
      Compiling prost-types v0.11.9
      Compiling jsonrpsee-core v0.16.3
      Compiling codespan-reporting v0.11.1
      Compiling tower v0.4.13
      Compiling tokio-stream v0.1.14
      Compiling prost-build v0.11.9
      Compiling xcm-procedural v1.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling memmap2 v0.5.10
      Compiling cxxbridge-flags v1.0.110
      Compiling minimal-lexical v0.2.1
      Compiling cxx v1.0.110
      Compiling nom v7.1.3
      Compiling cxx-build v1.0.110
      Compiling jsonrpsee-server v0.16.3
      Compiling jsonrpsee-proc-macros v0.16.3
      Compiling libloading v0.7.4
      Compiling bindgen v0.65.1
      Compiling cexpr v0.6.0
      Compiling nalgebra v0.32.3
      Compiling jsonrpsee v0.16.3
      Compiling strum_macros v0.24.3
      Compiling tikv-jemalloc-sys v0.5.4+5.3.0-patched
      Compiling lazycell v1.3.0
      Compiling shlex v1.2.0
      Compiling peeking_take_while v0.1.2
      Compiling wasm-opt-sys v0.114.2
      Compiling sc-chain-spec-derive v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling lz4-sys v1.9.4
      Compiling cfg_aliases v0.1.1
      Compiling cxxbridge-macro v1.0.110
      Compiling snap v1.1.0
      Compiling wasm-opt-cxx-sys v0.114.2
      Compiling camino v1.1.6
      Compiling static_init_macro v1.0.2
      Compiling fs2 v0.4.3
      Compiling ucd-trie v0.1.6
      Compiling utf8parse v0.2.1
      Compiling siphasher v0.3.11
      Compiling semver-parser v0.7.0
      Compiling semver v0.6.0
      Compiling anstyle-parse v0.2.2
      Compiling pest v2.7.5
      Compiling strum v0.24.1
      Compiling static_init v1.0.3
      Compiling sc-network-light v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network-bitswap v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network-sync v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling toml_edit v0.19.15
      Compiling fork-tree v3.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-tracing-proc-macro v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling cargo-platform v0.1.5
      Compiling atty v0.2.14
      Compiling anstyle-query v1.0.0
      Compiling http-range-header v0.3.1
      Compiling anstyle v1.0.4
      Compiling colorchoice v1.0.0
      Compiling sc-sysinfo v6.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling rustls v0.21.9
      Compiling anstream v0.6.4
      Compiling toml v0.7.8
      Compiling cargo_metadata v0.15.4
      Compiling tower-http v0.4.4
      Compiling pest_meta v2.7.5
      Compiling librocksdb-sys v0.11.0+8.1.1
      Compiling build-helper v0.1.1
      Compiling kvdb-memorydb v0.13.0
      Compiling cid v0.9.0
      Compiling filetime v0.2.22
      Compiling security-framework-sys v2.9.1
      Compiling rand_pcg v0.3.1
      Compiling dirs-sys v0.3.7
      Compiling strsim v0.10.0
      Compiling clap_lex v0.6.0
      Compiling names v0.13.0
      Compiling linregress v0.5.3
      Compiling clap_builder v4.4.9
      Compiling security-framework v2.9.2
      Compiling directories v4.0.1
      Compiling pest_generator v2.7.5
      Compiling sc-rpc-server v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling tracing-futures v0.2.5
      Compiling clap_derive v4.4.7
      Compiling rustls-pemfile v1.0.4
      Compiling exit-future v0.2.0
      Compiling rtoolbox v0.0.2
      Compiling sc-consensus-slots v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling safe-mix v1.0.1
      Compiling rpassword v7.3.1
      Compiling rustls-native-certs v0.6.3
      Compiling pest_derive v2.7.5
      Compiling strum_macros v0.25.3
      Compiling fdlimit v0.2.1
      Compiling frame-benchmarking-cli v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling strum v0.25.0
      Compiling substrate-build-script-utils v3.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling handlebars v4.5.0
      Compiling clap v4.4.10
      Compiling wetee-node v4.0.0-dev (/Users/xxx/repos/chain/packages/node/node)
      Compiling sc-proposer-metrics v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling threadpool v1.8.1
      Compiling gethostname v0.2.3
      Compiling thousands v0.2.0
      Compiling comfy-table v7.1.0
      Compiling lz4 v1.24.0
      Compiling parity-db v0.4.12
      Compiling secp256k1 v0.24.3
      Compiling sct v0.7.1
      Compiling webpki v0.22.4
      Compiling webpki-roots v0.22.6
      Compiling zstd v0.12.4
      Compiling rustls-webpki v0.101.7
      Compiling sp-maybe-compressed-blob v4.1.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling libp2p-noise v0.42.2
      Compiling futures-rustls v0.22.2
      Compiling libp2p-websocket v0.41.0
      Compiling libp2p v0.51.3
      Compiling sc-telemetry v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling tokio-rustls v0.24.1
      Compiling hyper-rustls v0.24.2
      Compiling zstd v0.11.2+zstd.1.5.2
      Compiling sp-wasm-interface v14.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-runtime-interface v17.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-core v21.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-trie v22.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-keystore v0.27.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-weights v20.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-allocator v4.1.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-rpc v6.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-state-db v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-executor-common v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-state-machine v0.28.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling staging-xcm v1.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wasm-opt v0.114.2
      Compiling substrate-wasm-builder v5.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wetee-runtime v1.0.0 (/Users/xxx/repos/chain/packages/node/runtime)
      Compiling sp-application-crypto v23.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-runtime v24.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-keystore v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-version v22.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-inherents v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-staking v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-keyring v24.0.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-consensus v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-timestamp v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-transaction-storage-proof v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-api v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-genesis-builder v0.1.0 (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling frame-support v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-blockchain v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-transaction-pool-api v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-executor v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-statement-store v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-consensus-grandpa v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-block-builder v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-session v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-offchain v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-consensus-slots v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-transaction-pool v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling frame-system-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sp-consensus-aura v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-client-api v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-consensus v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-block-builder v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-tracing v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-transaction-pool v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network-common v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-basic-authorship v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-statement-store v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-consensus-aura v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-chain-spec v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling frame-system v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wetee-primitives v1.0.0 (/Users/xxx/repos/chain/packages/primitives)
      Compiling orml-utilities v0.4.1-dev (https://github.com/open-web3-stack/open-runtime-module-library.git?branch=polkadot-v1.1.0#b3694e63)
      Compiling sc-rpc-api v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-rpc-spec-v2 v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling orml-traits v0.4.1-dev (https://github.com/open-web3-stack/open-runtime-module-library.git?branch=polkadot-v1.1.0#b3694e63)
      Compiling sc-informant v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network-transactions v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wetee-runtime-api v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-rpc/runtime-api)
      Compiling frame-try-runtime v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-network-gossip v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wetee-rpc v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-rpc)
      Compiling sc-offchain v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-consensus-grandpa v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-rpc v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling substrate-frame-rpc-system v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling frame-benchmarking v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling orml-tokens v0.4.1-dev (https://github.com/open-web3-stack/open-runtime-module-library.git?branch=polkadot-v1.1.0#b3694e63)
      Compiling pallet-timestamp v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-transaction-payment v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-session v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-insecure-randomness-collective-flip v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-authorship v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-aura v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling frame-executive v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-sudo v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-message-queue v7.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-transaction-payment-rpc-runtime-api v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-transaction-payment-rpc v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling pallet-grandpa v4.0.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling wetee-org v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-org)
      Compiling wetee-sudo v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-sudo)
      Compiling wetee-assets v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-assets)
      Compiling wetee-gov v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-gov)
      Compiling wetee-app v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-app)
      Compiling wetee-task v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-task)
      Compiling wetee-project v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-project)
      Compiling wetee-worker v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-worker)
      Compiling wetee-treasury v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-treasury)
      Compiling wetee-guild v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-guild)
      Compiling rocksdb v0.21.0
      Compiling kvdb-rocksdb v0.19.0
      Compiling sc-client-db v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-service v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
      Compiling sc-cli v0.10.0-dev (https://github.com/paritytech/polkadot-sdk.git?branch=release-polkadot-v1.1.0#c8d2251c)
        Finished release [optimized] target(s) in 5m 26s
        Running `target/release/wetee-node --dev`
    2024-01-24 23:32:03 Substrate Node    
    2024-01-24 23:32:03 ✌️  version 4.0.0-dev-34aab056407    
    2024-01-24 23:32:03 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2024    
    2024-01-24 23:32:03 📋 Chain specification: Development    
    2024-01-24 23:32:03 🏷  Node name: sulky-stove-4402    
    2024-01-24 23:32:03 👤 Role: AUTHORITY    
    2024-01-24 23:32:03 💾 Database: RocksDb at /var/folders/fp/c9nsbc1d6_qgvk24wfdf9yc00000gn/T/substrateDmduo0/chains/dev/db/full    
    2024-01-24 23:32:03 🔨 Initializing Genesis block/state (state: 0x17a7…28c4, header-hash: 0x0fa5…a6ab)    
    2024-01-24 23:32:03 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2024-01-24 23:32:03 Using default protocol ID "sup" because none is configured in the chain specs    
    2024-01-24 23:32:03 🏷  Local node identity is: 12D3KooWE8bsj2FPaD4c2ByoLR9ZnSTGP1PfRoi5DsFfPDiRrWUz    
    2024-01-24 23:32:03 💻 Operating system: macos    
    2024-01-24 23:32:03 💻 CPU architecture: aarch64    
    2024-01-24 23:32:03 📦 Highest known block at #0    
    2024-01-24 23:32:03 〽️ Prometheus exporter started at 127.0.0.1:9615    
    2024-01-24 23:32:03 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]    
    2024-01-24 23:32:06 🙌 Starting consensus session on top of parent 0x0fa58837d0959a9e8c200387f92cc3c580f613bdf23ce0c67fca729ce5c4a6ab    
    2024-01-24 23:32:06 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0x0ae623fee70e58aa949d53b71a5b9996b4b5205729c994b35f9c7197a213362d; parent_hash: 0x0fa5…a6ab; extrinsics (1): [0x2246…a69f]    
    2024-01-24 23:32:06 🔖 Pre-sealed block for proposal at 1. Hash now 0xa38294214264ab049317755e89cbac36d0853e4d003b430f760c4f800e6974ba, previously 0x0ae623fee70e58aa949d53b71a5b9996b4b5205729c994b35f9c7197a213362d.    
    2024-01-24 23:32:06 ✨ Imported #1 (0xa382…74ba)   
    ```
  </details>

- [x] build node works

  <details>
    <summary>Output</summary>

    ```zsh
    % cargo build --release
      Compiling wetee-primitives v1.0.0 (/Users/seraya/repos/chain/packages/primitives)
      Compiling wetee-org v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-org)
      Compiling wetee-runtime-api v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-rpc/runtime-api)
      Compiling wetee-rpc v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-rpc)
      Compiling wetee-sudo v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-sudo)
      Compiling wetee-assets v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-assets)
      Compiling wetee-gov v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-gov)
      Compiling wetee-task v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-task)
      Compiling wetee-app v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-app)
      Compiling wetee-worker v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-worker)
      Compiling wetee-treasury v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-treasury)
      Compiling wetee-guild v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-guild)
      Compiling wetee-project v1.0.0 (/Users/seraya/repos/chain/packages/pallets/wetee-project)
      Compiling wetee-runtime v1.0.0 (/Users/seraya/repos/chain/packages/node/runtime)
      Compiling wetee-node v4.0.0-dev (/Users/seraya/repos/chain/packages/node/node)
        Finished release [optimized] target(s) in 56.46s
    ```
  </details>

- [x] running from the build works

  <details>
    <summary>Output</summary>

    ```zsh
    % ./target/release/wetee-node --dev

    2024-01-24 23:46:25 Substrate Node    
    2024-01-24 23:46:25 ✌️  version 4.0.0-dev-34aab056407    
    2024-01-24 23:46:25 ❤️  by Substrate DevHub <https://github.com/substrate-developer-hub>, 2017-2024    
    2024-01-24 23:46:25 📋 Chain specification: Development    
    2024-01-24 23:46:25 🏷  Node name: quarrelsome-stream-3000    
    2024-01-24 23:46:25 👤 Role: AUTHORITY    
    2024-01-24 23:46:25 💾 Database: RocksDb at /var/folders/fp/c9nsbc1d6_qgvk24wfdf9yc00000gn/T/substrate3dTfaK/chains/dev/db/full    
    2024-01-24 23:46:25 🔨 Initializing Genesis block/state (state: 0x17a7…28c4, header-hash: 0x0fa5…a6ab)    
    2024-01-24 23:46:25 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
    2024-01-24 23:46:25 Using default protocol ID "sup" because none is configured in the chain specs    
    2024-01-24 23:46:25 🏷  Local node identity is: 12D3KooWJMxKnC4o534EYEFNPCPHhr6FLSkPJrwz7Jmo2ixwfigJ    
    2024-01-24 23:46:25 💻 Operating system: macos    
    2024-01-24 23:46:25 💻 CPU architecture: aarch64    
    2024-01-24 23:46:25 📦 Highest known block at #0    
    2024-01-24 23:46:25 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]    
    2024-01-24 23:46:25 〽️ Prometheus exporter started at 127.0.0.1:9615    
    2024-01-24 23:46:30 🙌 Starting consensus session on top of parent 0x0fa58837d0959a9e8c200387f92cc3c580f613bdf23ce0c67fca729ce5c4a6ab    
    2024-01-24 23:46:30 🎁 Prepared block for proposing at 1 (0 ms) [hash: 0xccbca0aaabef4061a7bcb7e9159c1d1f01696c41dcf35aec6c6038448af173ed; parent_hash: 0x0fa5…a6ab; extrinsics (1): [0x0d19…8b38]    
    2024-01-24 23:46:30 🔖 Pre-sealed block for proposal at 1. Hash now 0x09bef7fc229d1c687d0ac8f8e086568416290e6544272e792b225544317e2a7b, previously 0xccbca0aaabef4061a7bcb7e9159c1d1f01696c41dcf35aec6c6038448af173ed.    
    2024-01-24 23:46:30 ✨ Imported #1 (0x09be…2a7b)    
    2024-01-24 23:46:30 💤 Idle (0 peers), best: #1 (0x09be…2a7b), finalized #0 (0x0fa5…a6ab), ⬇ 0 ⬆ 0    

    ```
  </details>

- [x] help command works

  <details>
    <summary>Output</summary>

    ```zsh
    % ./target/release/wetee-node -h

    A fresh FRAME-based Substrate node, ready for hacking.

    Usage: wetee-node [OPTIONS]
          wetee-node <COMMAND>

    Commands:
      key            Key management cli utilities
      build-spec     Build a chain specification
      check-block    Validate blocks
      export-blocks  Export blocks
      export-state   Export the state of a given block into a chain spec
      import-blocks  Import blocks
      purge-chain    Remove the whole chain
      revert         Revert the chain to a previous state
      benchmark      Sub-commands concerned with benchmarking
      try-runtime    Try some command against runtime state. Note: `try-runtime` feature must be enabled
      chain-info     Db meta columns information
      help           Print this message or the help of the given subcommand(s)

    Options:
          --validator
              Enable validator mode. The node will be started with the authority role and actively participate in any consensus task that it can (e.g. depending on availability of local keys)
          --no-grandpa
              Disable GRANDPA voter when running in validator mode, otherwise disable the GRANDPA observer
          --rpc-external
              Listen to all RPC interfaces. Default is local. Note: not all RPC methods are safe to be exposed publicly. Use an RPC proxy server to filter out dangerous methods. More details: <https://docs.substrate.io/main-docs/build/custom-rpc/#public-rpcs>. Use `--unsafe-rpc-external` to suppress the warning if you understand the risks
          --unsafe-rpc-external
              Listen to all RPC interfaces. Same as `--rpc-external`
          --rpc-methods <METHOD SET>
              RPC methods to expose.
              - `unsafe`: Exposes every RPC method.
              - `safe`: Exposes only a safe subset of RPC methods, denying unsafe RPC methods.
              - `auto`: Acts as `safe` if RPC is served externally, e.g. when `--rpc--external` is
                passed, otherwise acts as `unsafe`. [default: auto] [possible values: auto, safe, unsafe]
          --rpc-max-request-size <RPC_MAX_REQUEST_SIZE>
              Set the the maximum RPC request payload size for both HTTP and WS in megabytes [default: 15]
          --rpc-max-response-size <RPC_MAX_RESPONSE_SIZE>
              Set the the maximum RPC response payload size for both HTTP and WS in megabytes [default: 15]
          --rpc-max-subscriptions-per-connection <RPC_MAX_SUBSCRIPTIONS_PER_CONNECTION>
              Set the the maximum concurrent subscriptions per connection [default: 1024]
          --rpc-port <PORT>
              Specify JSON-RPC server TCP port
          --rpc-max-connections <COUNT>
              Maximum number of RPC server connections [default: 100]
          --rpc-cors <ORIGINS>
              Specify browser Origins allowed to access the HTTP & WS RPC servers. A comma-separated list of origins (protocol://domain or special `null` value). Value of `all` will disable origin validation. Default is to allow localhost and <https://polkadot.js.org> origins. When running in --dev mode the default is to allow all origins
          --name <NAME>
              The human-readable name for this node. It's used as network node name
          --no-telemetry
              Disable connecting to the Substrate telemetry server. Telemetry is on by default on global chains
          --telemetry-url <URL VERBOSITY>
              The URL of the telemetry server to connect to. This flag can be passed multiple times as a means to specify multiple telemetry endpoints. Verbosity levels range from 0-9, with 0 denoting the least verbosity. Expected format is 'URL VERBOSITY', e.g. `--telemetry-url 'wss://foo/bar 0'`
          --prometheus-port <PORT>
              Specify Prometheus exporter TCP Port
          --prometheus-external
              Expose Prometheus exporter on all interfaces. Default is local
          --no-prometheus
              Do not expose a Prometheus exporter endpoint. Prometheus metric endpoint is enabled by default
          --max-runtime-instances <MAX_RUNTIME_INSTANCES>
              The size of the instances cache for each runtime. The values higher than 256 are illegal [default: 8]
          --runtime-cache-size <RUNTIME_CACHE_SIZE>
              Maximum number of different runtimes that can be cached [default: 2]
          --offchain-worker <ENABLED>
              Should execute offchain workers on every block. By default it's only enabled for nodes that are authoring new blocks [default: when-authority] [possible values: always, never, when-authority]
          --enable-offchain-indexing <ENABLE_OFFCHAIN_INDEXING>
              Enable Offchain Indexing API, which allows block import to write to Offchain DB. Enables a runtime to write directly to a offchain workers DB during block import [default: false] [possible values: true, false]
          --chain <CHAIN_SPEC>
              Specify the chain specification. It can be one of the predefined ones (dev, local, or staging) or it can be a path to a file with the chainspec (such as one exported by the `build-spec` subcommand)
          --dev
              Specify the development chain. This flag sets `--chain=dev`, `--force-authoring`, `--rpc-cors=all`, `--alice`, and `--tmp` flags, unless explicitly overridden
      -d, --base-path <PATH>
              Specify custom base path
      -l, --log <LOG_PATTERN>...
              Sets a custom logging filter. Syntax is `<target>=<level>`, e.g. -lsync=debug. Log levels (least to most verbose) are error, warn, info, debug, and trace. By default, all targets log `info`. The global log level can be set with `-l<level>`
          --detailed-log-output
              Enable detailed log output. This includes displaying the log target, log level and thread name. This is automatically enabled when something is logged with any higher level than `info`
          --disable-log-color
              Disable log color output
          --enable-log-reloading
              Enable feature to dynamically update and reload the log filter. Be aware that enabling this feature can lead to a performance decrease up to factor six or more. Depending on the global logging level the performance decrease changes. The `system_addLogFilter` and `system_resetLogFilter` RPCs will have no effect with this option not being set
          --tracing-targets <TARGETS>
              Sets a custom profiling filter. Syntax is the same as for logging: `<target>=<level>`
          --tracing-receiver <RECEIVER>
              Receiver to process tracing messages [default: log] [possible values: log]
          --state-pruning <PRUNING_MODE>
              Specify the state pruning mode. This mode specifies when the block's state (ie, storage) should be pruned (ie, removed) from the database. This setting can only be set on the first creation of the database. Every subsequent run will load the pruning mode from the database and will error if the stored mode doesn't match this CLI value. It is fine to drop this CLI flag for subsequent runs. Possible values: - archive: Keep the state of all blocks. - 'archive-canonical' Keep only the state of finalized blocks. - number Keep the state of the last number of finalized blocks. [default: 256]
          --blocks-pruning <PRUNING_MODE>
              Specify the blocks pruning mode. This mode specifies when the block's body (including justifications) should be pruned (ie, removed) from the database. Possible values: - 'archive' Keep all blocks. - 'archive-canonical' Keep only finalized blocks. - number Keep the last `number` of finalized blocks [default: archive-canonical]
          --database <DB>
              Select database backend to use [possible values: rocksdb, paritydb, auto, paritydb-experimental]
          --db-cache <MiB>
              Limit the memory the database cache can use
          --wasm-execution <METHOD>
              Method for executing Wasm runtime code [default: compiled] [possible values: interpreted-i-know-what-i-do, compiled]
          --wasmtime-instantiation-strategy <STRATEGY>
              The WASM instantiation method to use. Only has an effect when `wasm-execution` is set to `compiled`. The copy-on-write strategies are only supported on Linux. If the copy-on-write variant of a strategy is unsupported the executor will fall back to the non-CoW equivalent. The fastest (and the default) strategy available is `pooling-copy-on-write`. The `legacy-instance-reuse` strategy is deprecated and will be removed in the future. It should only be used in case of issues with the default instantiation strategy [default: pooling-copy-on-write] [possible values: pooling-copy-on-write, recreate-instance-copy-on-write, pooling, recreate-instance, legacy-instance-reuse]
          --wasm-runtime-overrides <PATH>
              Specify the path where local WASM runtimes are stored. These runtimes will override on-chain runtimes when the version matches
          --execution-syncing <STRATEGY>
              The means of execution used when calling into the runtime for importing blocks as part of an initial sync [possible values: native, wasm, both, native-else-wasm]
          --execution-import-block <STRATEGY>
              The means of execution used when calling into the runtime for general block import (including locally authored blocks) [possible values: native, wasm, both, native-else-wasm]
          --execution-block-construction <STRATEGY>
              The means of execution used when calling into the runtime while constructing blocks [possible values: native, wasm, both, native-else-wasm]
          --execution-offchain-worker <STRATEGY>
              The means of execution used when calling into the runtime while using an off-chain worker [possible values: native, wasm, both, native-else-wasm]
          --execution-other <STRATEGY>
              The means of execution used when calling into the runtime while not syncing, importing or constructing blocks [possible values: native, wasm, both, native-else-wasm]
          --execution <STRATEGY>
              The execution strategy that should be used by all execution contexts [possible values: native, wasm, both, native-else-wasm]
          --trie-cache-size <Bytes>
              Specify the state cache size. Providing `0` will disable the cache [default: 67108864]
          --state-cache-size <STATE_CACHE_SIZE>
              DEPRECATED Switch to `--trie-cache-size`
          --bootnodes <ADDR>...
              Specify a list of bootnodes
          --reserved-nodes <ADDR>...
              Specify a list of reserved node addresses
          --reserved-only
              Whether to only synchronize the chain with reserved nodes. Also disables automatic peer discovery. TCP connections might still be established with non-reserved nodes. In particular, if you are a validator your node might still connect to other validator nodes and collator nodes regardless of whether they are defined as reserved nodes
          --public-addr <PUBLIC_ADDR>...
              The public address that other nodes will use to connect to it. This can be used if there's a proxy in front of this node
          --listen-addr <LISTEN_ADDR>...
              Listen on this multiaddress
          --port <PORT>
              Specify p2p protocol TCP port
          --no-private-ip
              Always forbid connecting to private IPv4/IPv6 addresses (as specified in [RFC1918](https://tools.ietf.org/html/rfc1918)), unless the address was passed with `--reserved-nodes` or `--bootnodes`. Enabled by default for chains marked as "live" in their chain specifications
          --allow-private-ip
              Always accept connecting to private IPv4/IPv6 addresses (as specified in [RFC1918](https://tools.ietf.org/html/rfc1918)). Enabled by default for chains marked as "local" in their chain specifications, or when `--dev` is passed
          --out-peers <COUNT>
              Specify the number of outgoing connections we're trying to maintain [default: 8]
          --in-peers <COUNT>
              Maximum number of inbound full nodes peers [default: 32]
          --in-peers-light <COUNT>
              Maximum number of inbound light nodes peers [default: 100]
          --no-mdns
              Disable mDNS discovery. By default, the network will use mDNS to discover other nodes on the local network. This disables it. Automatically implied when using --dev
          --max-parallel-downloads <COUNT>
              Maximum number of peers from which to ask for the same blocks in parallel. This allows downloading announced blocks from multiple peers. Decrease to save traffic and risk increased latency [default: 5]
          --node-key <KEY>
              The secret key to use for libp2p networking. The value is a string that is parsed according to the choice of `--node-key-type` as follows: `ed25519`: The value is parsed as a hex-encoded Ed25519 32 byte secret key, i.e. 64 hex characters. The value of this option takes precedence over `--node-key-file`. WARNING: Secrets provided as command-line arguments are easily exposed. Use of this option should be limited to development and testing. To use an externally managed secret key, use `--node-key-file` instead
          --node-key-type <TYPE>
              The type of secret key to use for libp2p networking. The secret key of the node is obtained as follows: * If the `--node-key` option is given, the value is parsed as a secret key according to the type. See the documentation for `--node-key`. * If the `--node-key-file` option is given, the secret key is read from the specified file. See the documentation for `--node-key-file`. * Otherwise, the secret key is read from a file with a predetermined, type-specific name from the chain-specific network config directory inside the base directory specified by `--base-dir`. If this file does not exist, it is created with a newly generated secret key of the chosen type. The node's secret key determines the corresponding public key and hence the node's peer ID in the context of libp2p [default: ed25519] [possible values: ed25519]
          --node-key-file <FILE>
              The file from which to read the node's secret key to use for libp2p networking. The contents of the file are parsed according to the choice of `--node-key-type` as follows: `ed25519`: The file must contain an unencoded 32 byte or hex encoded Ed25519 secret key. If the file does not exist, it is created with a newly generated secret key of the chosen type
          --discover-local
              Enable peer discovery on local networks. By default this option is `true` for `--dev` or when the chain type is `Local`/`Development` and false otherwise
          --kademlia-disjoint-query-paths
              Require iterative Kademlia DHT queries to use disjoint paths for increased resiliency in the presence of potentially adversarial nodes. See the S/Kademlia paper for more information on the high level design as well as its security improvements
          --kademlia-replication-factor <KADEMLIA_REPLICATION_FACTOR>
              Kademlia replication factor determines to how many closest peers a record is replicated to [default: 20]
          --ipfs-server
              Join the IPFS network and serve transactions over bitswap protocol
          --sync <SYNC_MODE>
              Blockchain syncing mode. [default: full] [possible values: full, fast, fast-unsafe, warp]
          --max-blocks-per-request <COUNT>
              Maximum number of blocks per request [default: 64]
          --pool-limit <COUNT>
              Maximum number of transactions in the transaction pool [default: 8192]
          --pool-kbytes <COUNT>
              Maximum number of kilobytes of all transactions stored in the pool [default: 20480]
          --tx-ban-seconds <SECONDS>
              How long a transaction is banned for, if it is considered invalid. Defaults to 1800s
          --keystore-uri <KEYSTORE_URI>
              Specify custom URIs to connect to for keystore-services
          --keystore-path <PATH>
              Specify custom keystore path
          --password-interactive
              Use interactive shell for entering the password used by the keystore
          --password <PASSWORD>
              Password used by the keystore. This allows appending an extra user-defined secret to the seed
          --password-filename <PATH>
              File that contains the password used by the keystore
          --alice
              Shortcut for `--name Alice --validator` with session keys for `Alice` added to keystore
          --bob
              Shortcut for `--name Bob --validator` with session keys for `Bob` added to keystore
          --charlie
              Shortcut for `--name Charlie --validator` with session keys for `Charlie` added to keystore
          --dave
              Shortcut for `--name Dave --validator` with session keys for `Dave` added to keystore
          --eve
              Shortcut for `--name Eve --validator` with session keys for `Eve` added to keystore
          --ferdie
              Shortcut for `--name Ferdie --validator` with session keys for `Ferdie` added to keystore
          --one
              Shortcut for `--name One --validator` with session keys for `One` added to keystore
          --two
              Shortcut for `--name Two --validator` with session keys for `Two` added to keystore
          --force-authoring
              Enable authoring even when offline
          --tmp
              Run a temporary node. A temporary directory will be created to store the configuration and will be deleted at the end of the process. Note: the directory is random per process execution. This directory is used as base path which includes: database, node key and keystore. When `--dev` is given and no explicit `--base-path`, this option is implied
      -h, --help
              Print help (see more with '--help')
      -V, --version
              Print version
    ```
  </details>

- [ ] Access running docker-orchestrated, cargo run-orchestrated or prebuilt node from polkadot.js ui doesn't succeed, although the container seemed to run on the correct port (9944).

### Testing Feedback

All automated tests pass:

- [x] Test all pallets
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -- --nocapture
        Finished test [unoptimized + debuginfo] target(s) in 1.17s
        Running unittests src/lib.rs (target/debug/deps/wetee_app-a01ebd5a15b72652)

    running 12 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::create ... ok
    test tests::set_settings_should_fail ... ok
    test tests::get_fee ... ok
    test tests::get_fee_should_fail ... ok
    test tests::set_settings ... ok
    test tests::charge2 ... ok
    test tests::recharge ... ok
    test tests::stop ... ok
    test tests::stop_should_fail ... ok
    test tests::update ... ok
    test tests::update_should_fail ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_assets-7c9f31cb84b7d5be)

    running 4 tests

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    初始化 TOKEN 池 =>> Asset_id:5000 ||| Free_amount: 99

    Transfer =>> Asset_id:0 ||| Free_amount: 10000
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

    Transfer =>> Asset_id:0 ||| Free_amount: 10000

    Transfer =>> Asset_id:0 ||| Free_amount: 10000
    alice_dao token 99 

    test tests::test_create_asset ... ok

    alice_dao token 98

    Transfer =>> Asset_id:5000 ||| Free_amount: 1
    test tests::test_asset_burn ... ok

    alice_dao token 98 ||| bob_dao token 1

    test tests::test_asset_trans ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_gov-29e16c6fcd4b70aa)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::proposal_should_work ... ok
    test tests::vote_should_work ... ok
    test tests::cancel_vote_should_work ... ok
    test tests::run_proposal_should_work ... ok
    test tests::unlock_should_work ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_guild-4120a0677acac11f)

    running 2 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::test_guild_join_request ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_node-27b27a12fb44bfbf)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/main.rs (target/debug/deps/wetee_node-77565bc4a3cf5261)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_org-e29d937fa3e78fd2)

    running 6 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::get_dao_account_id ... ok
    test tests::get_creator ... ok
    test tests::get_dao ... ok
    test tests::roadmap_task ... ok
    test tests::create_dao_should_work ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_primitives-8d1a59034b207de8)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_project-8e50831e71cd2b03)

    running 3 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    项目成员 => BoundedVec([AccountId([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), AccountId([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])], 1000000)
    项目成员 => BoundedVec([AccountId([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), AccountId([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])], 1000000)
    test tests::test_project_join_request ... ok
    dao_id => 5000 project_dao => 19 dao => 80
    alice_dao => 99 ||| bob_dao => 100 
    dao_id => 5000 project_dao => 9 dao => 80
    alice_dao => 109 ||| bob_dao => 100 
    test tests::test_task ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_rpc-9187d2d93edf1bc3)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_runtime-3a74eb1287d7ab6f)

    running 1 test
    test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_runtime_api-dbfd4a0aa793e43d)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_sudo-31fce7a3816dff6d)

    running 4 tests
    test tests::close_sudo_should_work ... ok
    test tests::sudo_should_work ... ok
    test tests::set_sudo ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_task-70d66afd371fbde7)

    running 12 tests
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::set_settings_should_fail ... ok
    test tests::set_settings ... ok
    test tests::update_should_fail ... ok
    test tests::get_fee_should_fail ... ok
    test tests::stop_should_fail ... ok
    test tests::stop ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::update ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::get_fee ... ok
    test tests::create ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::charge2 ... ok
    test tests::recharge ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_treasury-e8aea1ab5f78d5e4)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/wetee_worker-967c630a89b086f1)

    running 26 tests
    test tests::cluster_register_should_fail3 ... ok
    test tests::cluster_register_should_fail ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::cluster_proof_upload_should_fail2 ... ok
    test tests::cluster_mortgage_should_fail2 ... ok
    test tests::cluster_register_should_fail2 ... ok
    test tests::cluster_proof_upload_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_mortgage ... ok
    test tests::cluster_mortgage_should_fail ... ok
    test tests::cluster_register ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_report ... ok
    test tests::cluster_proof_upload ... ok
    test tests::cluster_stop_should_fail ... ok
    test tests::cluster_stop_should_fail2 ... ok
    test tests::cluster_stop ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_unmortgage_should_fail2 ... ok
    test tests::cluster_report_close_should_fail ... ok
    test tests::cluster_report_close ... ok
    test tests::cluster_report_should_fail ... ok
    test tests::cluster_unmortgage ... ok
    test tests::cluster_unmortgage_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::work_proof_upload_should_fail ... ok
    test tests::cluster_unmortgage_should_fail3 ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_withdrawal ... ok
    test tests::work_proof_upload_should_fail2 ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-app

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-assets

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-gov

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-guild

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-node

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-org

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-primitives

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-project

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-rpc

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-runtime

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-runtime-api

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-sudo

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-task

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-treasury

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

      Doc-tests wetee-worker

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Worker pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-worker -- --nocapture

        Finished test [unoptimized + debuginfo] target(s) in 1.11s
        Running unittests src/lib.rs (target/debug/deps/wetee_worker-cf42e245b64419bc)

    running 26 tests
    test tests::cluster_register_should_fail3 ... ok
    test tests::cluster_register_should_fail2 ... ok
    test tests::cluster_register_should_fail ... ok
    test tests::cluster_proof_upload_should_fail2 ... ok
    test tests::cluster_proof_upload_should_fail ... ok
    test tests::cluster_mortgage_should_fail ... ok
    test tests::cluster_register ... ok
    test tests::cluster_mortgage_should_fail2 ... ok
    test tests::cluster_proof_upload ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_mortgage ... ok
    test tests::cluster_stop ... ok
    test tests::cluster_stop_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    test tests::cluster_unmortgage_should_fail ... ok
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_stop_should_fail2 ... ok
    test tests::cluster_unmortgage_should_fail3 ... ok
    test tests::cluster_unmortgage_should_fail2 ... ok
    test tests::cluster_report ... ok
    test tests::cluster_unmortgage ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::cluster_report_close_should_fail ... ok
    test tests::cluster_report_should_fail ... ok
    test tests::work_proof_upload_should_fail ... ok
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_report_close ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    +++++++++++++++++++++++++++ Cr { cpu: 1, mem: 1, disk: 1 }
    --------------------------- num 1 v: 1 score: (1, 5) cr: (Cr { cpu: 10, mem: 10, disk: 10 }, Cr { cpu: 0, mem: 0, disk: 0 })
    test tests::cluster_withdrawal ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload ... ok
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ num: 1 randoms: [1]
    test tests::work_proof_upload_should_fail2 ... ok

    test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

      Doc-tests wetee-worker

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Tee App pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-app -- --nocapture
      Compiling wetee-app v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-app)
        Finished test [unoptimized + debuginfo] target(s) in 5.89s
        Running unittests src/lib.rs (target/debug/deps/wetee_app-b102c0f9909f73ca)

    running 12 tests
    test tests::get_fee_should_fail ... ok
    test tests::stop_should_fail ... ok
    test tests::set_settings ... ok
    test tests::update_should_fail ... ok
    test tests::update ... ok
    test tests::recharge ... ok
    test tests::charge2 ... ok
    test tests::create ... ok
    test tests::get_fee ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::set_settings_should_fail ... ok
    test tests::stop ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-app

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [x] Test Tee Task pallet
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -p wetee-task -- --nocapture
      Compiling wetee-task v1.0.0 (/Users/xxx/repos/chain/packages/pallets/wetee-task)
        Finished test [unoptimized + debuginfo] target(s) in 3.13s
        Running unittests src/lib.rs (target/debug/deps/wetee_task-91635d8c308a4b3d)

    running 12 tests
    test tests::stop_should_fail ... ok
    test tests::get_fee_should_fail ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::create ... ok
    test tests::get_fee ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::update_should_fail ... ok
    test tests::charge2 ... ok
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::stop ... ok
    test tests::set_settings ... ok
    test tests::update ... ok
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    Ok(PostDispatchInfo { actual_weight: None, pays_fee: Pays::Yes })
    test tests::set_settings_should_fail ... ok
    test tests::recharge ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

      Doc-tests wetee-task

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    
    ```
  </details>

