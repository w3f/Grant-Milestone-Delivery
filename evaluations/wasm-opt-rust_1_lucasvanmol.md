# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasm-opt-for-rust.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3 | MIT / Apache-2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3 | Excellent docs |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3/components/wasm-opt/tests <br> | Great. Some tests are `#[ignore]`'d - from looking at their content I assume because of the upstream issues with binaryen (mentioned in *General Notes* below). Additionally, `cargo tarpaulin` segfaults for some reason. |
| 0d. | Docker | N/A | N/A | Docker not required. |
| 1. | `wasm-opt` binary |<ul><li>[x] </li></ul>| https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3#installing-the-binary | Works |
| 2. | APIs |<ul><li>[x] </li></ul>| https://docs.rs/wasm-opt/0.0.1-preview.3/wasm_opt <br> https://docs.rs/wasm-opt-cxx-sys/0.0.1-preview.3/wasm_opt_cxx_sys <br> https://docs.rs/wasm-opt-sys/0.0.1-preview.3/wasm_opt_sys | Mostly complete, as per the M1 specification in the application. |



## General Notes

**Additional information provided by @brson in [the delivery](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/wasm-opt-for-rust-m1.md)**

> We have added CI for most configurations,
> with the exception of ARM,
> for which GitHub does not offer out-of-the box runners.
> 
> [...]
> 
> As of now there are two major bugs that we expect to resolve:
> 
> - [Some error cases cause the process to exit](https://github.com/brson/wasm-opt-rs/issues/43).
>   This is a result of Binaryen being console oriented and will require some upstream work.
> - [Non-ascii paths on Windows don't work](https://github.com/brson/wasm-opt-rs/issues/40).
>   Not clear yet where the error is, but we suspect it may be that Binaryen does not support Windows's wide character encoding. If so it could require significant upstream work, and if not a regression we will consider punting it until a future maintenance contract.
> 
> For M2 we intend to quickly post an issue to `cargo-contract`'s issue tracker soliciting feedback about how best to integrate the `wasm-opt` crate, and have that discussion drive our efforts.
> 
> We are considering adding an API that translates `wasm-opt` command line arguments into our own builder API, for conveneince in porting code that uses the `wasm-opt` CLI to using the API. `wasm-pack` for example allows arbitrary arguments to be passed to `wasm-opt`, and integrating the API would require some backward-compatibility solution. Along with this we are considering how to make it easy for integrators to quickly disable the integrated `wasm-opt` API and Binaryen C++ build, and fall back to the CLI, in the case of unforseen problems.
> 
> As of now we believe that `wasm-opt`'s fuzzing capabilities are not important for our use cases, and intend to not include them in the API. Feedback welcome.
> 
> We are maintaining issues for the remaining work: https://github.com/brson/wasm-opt-rs/issues

## `cargo tarpaulin`

Running [`cargo tarpaulin`](https://github.com/xd009642/tarpaulin) causes a segfault during tests (but I'm suspecting this might be an issue with tarpaulin itself, since `cargo test` runs fine):

```
Aug 29 13:47:53.070  INFO cargo_tarpaulin::config: Creating config
Aug 29 13:47:53.199  INFO cargo_tarpaulin: Running Tarpaulin
Aug 29 13:47:53.199  INFO cargo_tarpaulin: Building project
Aug 29 13:47:53.199  INFO cargo_tarpaulin::cargo: Cleaning project
   Compiling ...
    Finished test [unoptimized + debuginfo] target(s) in 42.64s
Aug 29 13:48:36.021  INFO cargo_tarpaulin::process_handling::linux: Launching test
Aug 29 13:48:36.021  INFO cargo_tarpaulin::process_handling: running /home/lucas/wasm-opt-rs/target/debug/deps/wasm_opt_sys-373c1b858807bbda
Aug 29 13:48:57.009 ERROR cargo_tarpaulin: Failed to get test coverage! Error: Failed to run tests: A segfault occurred while executing tests
Error: "Failed to get test coverage! Error: Failed to run tests: A segfault occurred while executing tests"
```

Possibly related issue: https://github.com/xd009642/tarpaulin/issues/463