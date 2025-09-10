# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subsmt.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License                        | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/LICENSE | Apache 2.0 |
| **0b.** | Documentation                  | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/README.md | See [Testing Feedback](#testing-feedback) |
| **0c.** | Testing and Testing Guide      | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/docs/test-guide-m2.md | See [Testing Feedback](#testing-feedback), [General Notes](#general-notes) |
| **0d.** | Docker                         | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/README.md#docker | See [Docker Feedback](#docker-feedback) |
| **0e.** | Article                        | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/docs/about%20subsmt.md | Ok |
|      1. | rust crate: smt-paritydb-store | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/backend/src/parity/parity_db.rs, https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/backend/src/parity/parity_store.rs | Ok |
|      2. | paritydb-store-api             | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/blob/3cde7d625490393b9be33accc375608d50a211a4/backend/src/parity/parity_apis.rs | Ok |
|      3. | common-backend                 | <ul><li>[x] </li></ul> | https://github.com/farcloud-labs/subsmt/tree/3cde7d625490393b9be33accc375608d50a211a4/backend/src/common-backend | Ok |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### May 22, 2025

Issues raised fixed on request.

### May 5, 2025

Most deliverables worked out-of-the-box. However, the coverage report threw an error, a dep seems to be missing here. Also, the smoke test failed: The POST /update call would timeout when sent with the suggested request body:

```json
{
"address": "1H4GsGKaAv6VCwgx7gRgPm9AmCKqzEDjb2GyWoERj9xBRAH",
"balance": "1000000000000",
"nonce": 1,
"prefix": 0
}
```

### Testing Feedback

- [x] Project builds without problems, but with some warnings
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo build --release

    warning: /Users/xxx/repos/subsmt/Cargo.toml: unused manifest key: workspace.package.author
    warning: /Users/xxx/repos/subsmt/primitives/Cargo.toml: unused manifest key: package.author
    warning: /Users/xxx/repos/subsmt/pallet/SMT/Cargo.toml: unused manifest key: package.author
    warning: /Users/xxx/repos/subsmt/backend/Cargo.toml: unused manifest key: package.author
        Blocking waiting for file lock on package cache
        Blocking waiting for file lock on package cache
        Finished `release` profile [optimized] target(s) in 8.94s
    ```
  </details>


- [x] Project runs without problems, but with some warnings
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo run --bin paritydb-smt-backend
      warning: /Users/xxx/repos/subsmt/Cargo.toml: unused manifest key: workspace.package.author
      warning: /Users/xxx/repos/subsmt/primitives/Cargo.toml: unused manifest key: package.author
      warning: /Users/xxx/repos/subsmt/pallet/SMT/Cargo.toml: unused manifest key: package.author
      warning: /Users/xxx/repos/subsmt/backend/Cargo.toml: unused manifest key: package.author
          Blocking waiting for file lock on build directory
          Finished `dev` profile [unoptimized + debuginfo] target(s) in 4m 32s
          Running `target/debug/paritydb-smt-backend`
      log path: "./logs"INFO [actix_server::builder] starting 12 workers
      INFO [actix_server::server] Actix runtime found; starting in Actix runtime
      INFO [actix_server::server] starting service: "actix-web-service-0.0.0.0:8080", workers: 12, listening on: 0.0.0.0:8080
    ```
  </details>

- [x] Tests pass, but there are warnings.
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo test -- --nocapture

      warning: /Users/xxx/repos/subsmt/primitives/Cargo.toml: unused manifest key: package.author
      warning: /Users/xxx/repos/subsmt/Cargo.toml: unused manifest key: workspace.package.author
      warning: /Users/xxx/repos/subsmt/backend/Cargo.toml: unused manifest key: package.author
      warning: /Users/xxx/repos/subsmt/pallet/SMT/Cargo.toml: unused manifest key: package.author
        Compiling proc-macro2 v1.0.92

        (...)

        Compiling smt-backend v0.1.0 (/Users/xxx/repos/subsmt/backend)
          Finished `test` profile [unoptimized + debuginfo] target(s) in 2m 36s
          Running unittests src/lib.rs (target/debug/deps/pallet_smt-f6e0167ee1e5cae9)

      running 3 tests
      test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
      test mock::test_genesis_config_builds ... ok
      test tests::it_works_for_smt_verify ... ok

      test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.64s

          Running unittests lib.rs (target/debug/deps/smt-4f878f263f63fc2e)

      running 1 test
      test smt::tests::smt_verify_works ... ok

      test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

          Running unittests src/lib.rs (target/debug/deps/smt_backend_lib-e4551a33bb9b60e0)

      running 8 tests
      test parity::parity_db::tests::test_column_bounds ... ok
      test rocks::store::test::test_store ... ok
      test parity::parity_db::tests::test_basic_operations ... ok
      test parity::parity_db::tests::test_reset_column ... ok
      test parity::parity_store::tests::test_store ... ok
      test rocks::apis::test::test_apis ... ok
      test parity::parity_db::tests::test_clear_column ... ok
      test parity::parity_apis::tests::test_apis ... ok

      test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 25.40s

          Running unittests src/common-backend/parity_backend.rs (target/debug/deps/paritydb_smt_backend-5d305f148cfbef2a)

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/common-backend/rocks_backend.rs (target/debug/deps/rocksdb_smt_backend-ac189f82417efed4)

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/smt_primitives-bbe380c3f6f8ce6e)

      running 2 tests
      test kv::test::test_value ... ok
      test keccak_hasher::test::test_hasher ... ok

      test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests pallet_smt

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests smt

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests smt_backend_lib

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Doc-tests smt_primitives

      running 0 tests

      test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [] Coverage report is failing (error: no such command: `tarpaulin`)
  
  <details>
    <summary>Output</summary>

    ```zsh
    cargo tarpaulin --out Html --output-dir ./docs --exclude-files ./sparse-merkle-tree/*

      error: no such command: `tarpaulin`

              View all installed commands with `cargo --list`
              Find a package to install `tarpaulin` with `cargo search cargo-tarpaulin`
    ```
  </details>

#### Docker Feedback

- [xv] Docker infra starts successfully
  
  <details>
    <summary>Output</summary>

    ```zsh
    % docker compose up
      WARN[0000] /Users/xxx/repos/subsmt/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
      [+] Running 3/3
      ✔ Container subsmt-smt_node-1              Created                                                                                                               0.0s 
      ✔ Container subsmt-paritydb-smt-backend-1  Created                                                                                                               0.0s 
      ✔ Container subsmt-rocksdb-smt-backend-1   Created                                                                                                               0.0s 
      Attaching to paritydb-smt-backend-1, rocksdb-smt-backend-1, smt_node-1
      rocksdb-smt-backend-1   | log path: "/data/logs"INFO [actix_server::builder] starting 12 workers
      rocksdb-smt-backend-1   | INFO [actix_server::server] Actix runtime found; starting in Actix runtime
      rocksdb-smt-backend-1   | INFO [actix_server::server] starting service: "actix-web-service-0.0.0.0:8080", workers: 12, listening on: 0.0.0.0:8080
      paritydb-smt-backend-1  | log path: "/data/logs"INFO [actix_server::builder] starting 12 workers
      paritydb-smt-backend-1  | INFO [actix_server::server] Actix runtime found; starting in Actix runtime
      paritydb-smt-backend-1  | INFO [actix_server::server] starting service: "actix-web-service-0.0.0.0:8080", workers: 12, listening on: 0.0.0.0:8080
      smt_node-1              | It isn't safe to expose RPC publicly without a proxy server that filters available set of RPC methods.
      smt_node-1              | 2025-05-05 21:24:55 Substrate Node    
      smt_node-1              | 2025-05-05 21:24:55 ✌️  version 3.0.0-dev-5983487e930    
      smt_node-1              | 2025-05-05 21:24:55 ❤️  by Parity Technologies <admin@parity.io>, 2017-2025    
      smt_node-1              | 2025-05-05 21:24:55 📋 Chain specification: Development    
      smt_node-1              | 2025-05-05 21:24:55 🏷  Node name: waggish-cellar-4698    
      smt_node-1              | 2025-05-05 21:24:55 👤 Role: AUTHORITY    
      smt_node-1              | 2025-05-05 21:24:55 💾 Database: RocksDb at /data/chains/dev/db/full    
      smt_node-1              | 2025-05-05 21:24:59 [0] 💸 generated 1 npos voters, 1 from validators and 0 nominators    
      smt_node-1              | 2025-05-05 21:24:59 [0] 💸 generated 1 npos targets    
      smt_node-1              | 2025-05-05 21:24:59  creating SingleState txpool Limit { count: 8192, total_bytes: 20971520 }/Limit { count: 819, total_bytes: 2097152 }.    
      smt_node-1              | 2025-05-05 21:25:00 Using default protocol ID "sup" because none is configured in the chain specs    
      smt_node-1              | 2025-05-05 21:25:00 🏷  Local node identity is: 12D3KooWQzhXpuQoU8F2h28hez5fKpD5vdsijYLjenayqxwZy6nJ    
      smt_node-1              | 2025-05-05 21:25:00 Running libp2p network backend    
      smt_node-1              | 2025-05-05 21:25:00 💻 Operating system: linux    
      smt_node-1              | 2025-05-05 21:25:00 💻 CPU architecture: aarch64    
      smt_node-1              | 2025-05-05 21:25:00 💻 Target environment: gnu    
      smt_node-1              | 2025-05-05 21:25:00 💻 Memory: 7837MB    
      smt_node-1              | 2025-05-05 21:25:00 💻 Kernel: 6.10.14-linuxkit    
      smt_node-1              | 2025-05-05 21:25:00 💻 Linux distribution: Ubuntu 22.04.5 LTS    
      smt_node-1              | 2025-05-05 21:25:00 💻 Virtual machine: no    
      smt_node-1              | 2025-05-05 21:25:00 📦 Highest known block at #396    
      smt_node-1              | 2025-05-05 21:25:00 〽️ Prometheus exporter started at 127.0.0.1:9615    
      smt_node-1              | 2025-05-05 21:25:00 Running JSON-RPC server: addr=0.0.0.0:9944,[::]:34941    
      smt_node-1              | 2025-05-05 21:25:00 🏁 CPU single core score: 1.03 GiBs, parallelism score: 994.83 MiBs with expected cores: 8    
      smt_node-1              | 2025-05-05 21:25:00 🏁 Memory score: 28.44 GiBs    
      smt_node-1              | 2025-05-05 21:25:00 🏁 Disk score (seq. writes): 2.22 GiBs    
      smt_node-1              | 2025-05-05 21:25:00 🏁 Disk score (rand. writes): 79.65 MiBs    
      smt_node-1              | 2025-05-05 21:25:00 ⚠️  The hardware does not meet the minimal requirements Failed checks: Rnd Write(expected: 420.00 MiBs, found: 79.65 MiBs),  for role 'Authority'.    
      smt_node-1              | 2025-05-05 21:25:00 👶 Starting BABE Authorship worker    
      smt_node-1              | 2025-05-05 21:25:00 🥩 BEEFY gadget waiting for BEEFY pallet to become available...    
      smt_node-1              | 2025-05-05 21:25:02 🙌 Starting consensus session on top of parent 0x506947765c3333bb988e53a63ad78ebca821fed99b3c6af727dbbb2fb22e0f4d (#396)    
    ```
  </details>
