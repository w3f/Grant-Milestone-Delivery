# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasmedge_substrate.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>  | https://github.com/second-state/substrate-wasmedge#license, https://github.com/second-state/substrate-wasmedge/blob/main/substrate/client/executor/wasmedge/Cargo.toml | GPL-3.0-or-later WITH Classpath-exception-2.0 | 
| 0b. | Documentation | <ul><li>[x] </li></ul>  | https://github.com/second-state/substrate-wasmedge/blob/main/README.md | Inline comments 
| 0c. | Testing Guide | <ul><li>[x] </li></ul>  | [running template node](https://github.com/second-state/substrate-wasmedge#run) | Not in the instructions: `cd substrate/client/executor && cargo t --features=wasmedge` | 
| 0d. | Docker | <ul><li>[x] </li></ul>  || Would have been nice, but indeed wasn't necessary | 
| 0e. | Article | <ul><li>[x] </li></ul>  |  | Submitted one covering M1+ M2 to Grants PR | 
| 1. | Rust API | <ul><li>[x] </li></ul>  | [code](https://github.com/WasmEdge/WasmEdge/tree/master/bindings/rust), [docs](https://wasmedge.org/book/en/embed/rust.html) | No explicit reference to wasmtime, but it is in any case compatible with Substrate
| 2. | Host wrapper | <ul><li>[x] </li></ul>  | [executor](https://github.com/second-state/substrate-wasmedge/tree/main/substrate/client/executor/wasmedge) |  | 
| 3. | Test | <ul><li>[x] </li></ul>  | | See comments

## General Notes

The project is structured as a monorepo without submodules, which made it hard to see the actual diff between vanilla Substrate and the version submitted and to gauge the scope of the work.
The team wants to merge this upstream with the next milestone, at which point this will become clearer.

The code is mostly easily readable and contains a reasonable amount of inline comments.

Strictly speaking not the entire Substrate project is tested, but I'm not sure that is possible.
The executor crate can however be tested, which should catch any errors in the implementation, and it is also possible to run the template node.

The tests produced a number of [errors](https://github.com/w3f/Grant-Milestone-Delivery/pull/547#issuecomment-1237847987), which according to the team is due to some of them testing error handling.
