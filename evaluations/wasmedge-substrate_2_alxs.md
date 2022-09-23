# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasmedge_substrate.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>  | https://github.com/second-state/substrate-wasmedge#license, https://github.com/second-state/substrate-wasmedge/blob/main/substrate/client/executor/wasmedge/Cargo.toml | GPL-3.0-or-later WITH Classpath-exception-2.0 | 
| 0c. | Testing Guide | <ul><li>[x] </li></ul>  | [running template node](https://github.com/second-state/substrate-wasmedge#run) | Not in the instructions: `cd substrate/client/executor && cargo t --features=wasmedge` | 
| 0d. | Docker | <ul><li>[x] </li></ul>  | Would have been nice, but indeed wasn't necessary | 
| 0e. | Article | <ul><li>[x] </li></ul>  |  | Submitted to Grants PR | 
| 1. | Software | <ul><li>[x] </li></ul>  | https://github.com/second-state/substrate-wasmedge#run | `--wasm-execution` CLI flag

## General Notes

See general notes for [milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/wasmedge-substrate_1_alxs.md).
This milestone was [amended](https://github.com/w3f/Grants-Program/pull/1146) to only really cover the CLI flag to switch execution runtime, since the scope of milestone 2 was larger than expected.
