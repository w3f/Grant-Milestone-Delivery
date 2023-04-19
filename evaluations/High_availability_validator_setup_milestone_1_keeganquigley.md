# Evaluation

- **Status:** In progress.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/blob/milestone-1/LICENSE-GPL3 | MIT | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline | Ok. | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | - | - |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/bright/substrate-raft/tree/milestone-1/docker | - |
| **1** | Update Substrate | <ul><li>[x] </li></ul> |  | Ok. |
| **2** | Update Substrate client | <ul><li>[x] </li></ul> |  | Ok. |
| **3** | Integration test |  <ul><li>[x] </li></ul> |  | Ok. |

# General Notes

Running `cargo test` currently fails. Building with Docker file also gives the same error:

```rust
Compiling sp-state-machine v0.12.0 (/home/ubuntu/substrate-raft/primitives/state-machine)
   Compiling frame-election-provider-solution-type v4.0.0-dev (/home/ubuntu/substrate-raft/frame/election-provider-support/solution-type)
error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> primitives/state-machine/src/trie_backend_essence.rs:181:44
    |
181 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
   --> primitives/state-machine/src/trie_backend_essence.rs:219:44
    |
219 |         let recorder = recorder.as_mut().map(|r| r as _);
    |                                                  ^

error: could not compile `sp-state-machine` due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
```
Stack Exchange suggests `sudo apt install clang` but that doesn't do the trick. I've tried on multiple machines with multiple different specs but `cargo test` still gets stuck and Docker fails on Ubuntu. On mac it seems to get stuck while compiling the node:

![docker build](https://user-images.githubusercontent.com/35080151/233128192-93c5cba5-b95d-4f67-9c8f-1c8519838957.png)

