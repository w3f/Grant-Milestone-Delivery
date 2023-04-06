# General Notes

Building Docker file currently fails:

```rust
#0 1040.0 error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
#0 1040.0    --> primitives/state-machine/src/trie_backend_essence.rs:181:44
#0 1040.0     |
#0 1040.0 181 |         let recorder = recorder.as_mut().map(|r| r as _);
#0 1040.0     |                                                  ^
#0 1040.0 
#0 1040.0 error: `sp_trie::recorder::Recorder<H>::as_trie_recorder::{opaque#0}<'_>` does not live long enough
#0 1040.0    --> primitives/state-machine/src/trie_backend_essence.rs:219:44
#0 1040.0     |
#0 1040.0 219 |         let recorder = recorder.as_mut().map(|r| r as _);
#0 1040.0     |                                                  ^
#0 1040.0 
#0 1040.1 error: could not compile `sp-state-machine` due to 2 previous errors
#0 1040.1 warning: build failed, waiting for other jobs to finish...
------
substrate_builder.Dockerfile:6
--------------------
   4 |     WORKDIR /substrate
   5 |     COPY . /substrate
   6 | >>> RUN cargo build --locked --release
   7 |     
   8 |     # This is the 2nd stage: a very small image where we copy the Substrate binary."
--------------------
ERROR: failed to solve: process "/bin/sh -c cargo build --locked --release" did not complete successfully: exit code: 101

real    18m52.251s
user    0m4.746s
sys     0m2.389s
```
