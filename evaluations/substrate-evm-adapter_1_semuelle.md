# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-evm-adapter.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/subclone/subeth/blob/eccab89ed6d02f90248d95c286889cd36a934678/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [/docs](https://github.com/subclone/subeth/tree/eccab89ed6d02f90248d95c286889cd36a934678/docs) | Good inline docs and tutorials |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/subclone/subeth/blob/bd665358d2f0a1088659c9ced3332a1feef5dd4f/README.md#run-unit-and-integration-tests) | — |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/subclone/subeth/blob/eccab89ed6d02f90248d95c286889cd36a934678/Dockerfile) | — |
| 1. | ETH-RPC Adapter | <ul><li>[x] </li></ul> | [subclone/subeth](https://github.com/subclone/subeth/tree/bd665358d2f0a1088659c9ced3332a1feef5dd4f) | — |
| 2. | Deno module | <ul><li>[x] </li></ul> | [packages/deno](https://github.com/subclone/subeth/tree/bd665358d2f0a1088659c9ced3332a1feef5dd4f/packages/deno) | — |
| 3. | Javascript package | <ul><li>[x] </li></ul> | [packages/js](https://github.com/subclone/subeth/tree/bd665358d2f0a1088659c9ced3332a1feef5dd4f/packages/js) | — |
| 4. | End-to-end tests | <ul><li>[x] </li></ul> | [src/tests](https://github.com/subclone/subeth/blob/bd665358d2f0a1088659c9ced3332a1feef5dd4f/src/tests.rs) | Mostly happy-paths |


## General Notes

- —

## `cargo test` output

```sh
   Compiling subeth v0.1.0 (/home/seb/work/w3f/code/grants/deliverables/substrate-evm-adapter/subeth)
warning: unused variable: `raw`
   --> src/adapter.rs:107:13
    |
107 |         let raw = r#"{"name":"Account","keys":[[94,81,97,10,143,91,94,4,191,47,40,150,10,161,56,223,43,117,49,208,219,234,147,99,54,237,64,162,4,201,46,18]]}"#;
    |             ^^^ help: if this is intentional, prefix it with an underscore: `_raw`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: field `symbol` is never read
  --> src/sub_client.rs:31:5
   |
27 | pub struct Properties {
   |            ---------- field in this struct
...
31 |     symbol: String,
   |     ^^^^^^
   |
   = note: `Properties` has derived impls for the traits `Clone` and `Debug`, but these are intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` on by default

warning: `subeth` (bin "subeth" test) generated 2 warnings
    Finished `test` profile [unoptimized + debuginfo] target(s) in 2m 09s
     Running unittests src/main.rs (target/debug/deps/subeth-3f1317efd6e5b4c5)

running 8 tests
test adapter::tests::test_pallet_mapping_works ... ok
test cache::tests::test_capacity_limit ... ok
test adapter::tests::test_storage_key_works ... ok
test adapter::tests::test_hash_and_truncate ... ok
test cache::tests::test_insert_and_retrieve ... ok
test cache::tests::test_latest_block ... ok
Subeth RPC adapter!
Subeth RPC adapter!
[INFO ] Logger initialized
[INFO ] Logger initialized
[INFO ] Loading chain spec from: ./specs/polkadot.json
[INFO ] Connected to chain: 42
[INFO ] RPC port: 8545
[INFO ] Launching RPC server at: Some([RpcEndpoint { listen_addr: 127.0.0.1:8545, batch_config: Unlimited, max_connections: 100, max_payload_in_mb: 15, max_payload_out_mb: 15, max_subscriptions_per_connection: 1024, max_buffer_capacity_per_connection: 64, rate_limit: None, rate_limit_trust_proxy_headers: false, rate_limit_whitelisted_ips: [], cors: Some(["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]), rpc_methods: Auto, is_optional: false, retry_random_port: true }, RpcEndpoint { listen_addr: [::1]:8545, batch_config: Unlimited, max_connections: 100, max_payload_in_mb: 15, max_payload_out_mb: 15, max_subscriptions_per_connection: 1024, max_buffer_capacity_per_connection: 64, rate_limit: None, rate_limit_trust_proxy_headers: false, rate_limit_whitelisted_ips: [], cors: Some(["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]), rpc_methods: Auto, is_optional: true, retry_random_port: true }])
[WARN ] Running in --dev mode, RPC CORS has been disabled.
[INFO ] Running JSON-RPC server: addr=127.0.0.1:8545,[::1]:8545
[INFO ] Chain initialization complete for polkadot. Name: "Polkadot". Genesis hash: 0x91b1…90c3. Chain specification starting at: 0xaf96…8407 (#14442869)
[INFO ] Chain specification of polkadot contains a `genesis.raw` item. It is possible to significantly improve the initialization time by replacing the `"raw": ...` field with `"stateRootHash": "0x29d0d972cd27cbc511e9589fcb7a4506d5eb6a9e8df205f00472e5ab354a4e17"`
[WARN ] Chain specification of polkadot contains a non-empty `telemetryEndpoints` field. Smoldot doesn't support telemetry endpoints and as such this field is unused.
[WARN ] The JSON-RPC client has just called a JSON-RPC function from the legacy JSON-RPC API (chain_getFinalizedHead). Legacy JSON-RPC functions have loose semantics and cannot be properly implemented on a light client. You are encouraged to use the new JSON-RPC API <https://github.com/paritytech/json-rpc-interface-spec/> instead. The legacy JSON-RPC API functions will be deprecated and removed in the distant future.
[WARN ] Error while verifying justification: Justification targets a block (#25799168) that isn't in the chain.
test tests::test_eth_rpc_url ... ok
[INFO ] Successfully compiled runtime. Spec version: 9360. Size of `:code`: 1.3 MiB.
[INFO ] Connected to chain: 42
[INFO ] RPC port: 8546
[INFO ] Launching RPC server at: Some([RpcEndpoint { listen_addr: 127.0.0.1:8546, batch_config: Unlimited, max_connections: 100, max_payload_in_mb: 15, max_payload_out_mb: 15, max_subscriptions_per_connection: 1024, max_buffer_capacity_per_connection: 64, rate_limit: None, rate_limit_trust_proxy_headers: false, rate_limit_whitelisted_ips: [], cors: Some(["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]), rpc_methods: Auto, is_optional: false, retry_random_port: true }, RpcEndpoint { listen_addr: [::1]:8546, batch_config: Unlimited, max_connections: 100, max_payload_in_mb: 15, max_payload_out_mb: 15, max_subscriptions_per_connection: 1024, max_buffer_capacity_per_connection: 64, rate_limit: None, rate_limit_trust_proxy_headers: false, rate_limit_whitelisted_ips: [], cors: Some(["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]), rpc_methods: Auto, is_optional: true, retry_random_port: true }])
[WARN ] Running in --dev mode, RPC CORS has been disabled.
[INFO ] Running JSON-RPC server: addr=127.0.0.1:8546,[::1]:8546
test tests::test_eth_rpc_light_client ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 52.00s
```