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
