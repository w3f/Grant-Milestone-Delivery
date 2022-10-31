# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Datagen_Project.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0b | Inline Documentation |<ul><li>[x] </li></ul>|  |  | 
| 0c  | Testing Guide |<ul><li>[ ] </li></ul>| [fast_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/fast_blockchain/README.md), [heavy_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/heavy_blockchain/README.md)| some doubts. |
| 0d | Docker |<ul><li>[ ] </li></ul>| [fast_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/heavy_blockchain/docker-compose.yml), [heavy_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/fast_blockchain/docker-compose.yml)| Failed to run | 
| 0e | Medium Article |<ul><li>[x] </li></ul>| [link](https://medium.com/@viacc/datagen-project-dev-blog-web3-fundation-milestone-1-b3ec2bdb1a95) |
| 1 | Pallet  |<ul><li>[x] </li></ul>| [random-node-selector](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/heavy_blockchain/pallets/random_node_selector) | |
| 2 | Pallet |<ul><li>[x] </li></ul>| [computational-work](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/fast_blockchain/pallets/computational-work) | |
| 3 | Pallet |<ul><li>[ ] </li></ul>| [check-computational-work](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/fast_blockchain/pallets/check-node-computational-work) | See doubt in testing guide |

## General Comments

### Testing guides

fast_blockchain / heavy_blockchain:
* I was not able to spin up the nodes and run the extrinsic. However, I didn't see the FinalResult event happening. There is something that I need to do to check that?
* Fixed things in code. There are some fixed behaviors in the code, like fibonacci sequence for work calculation or the nodes (or the number of nodes) in the heavy blockchain. Is this intentional? Will be removed/made flexible in some milestone?

### Docker

Run the docker compose file failed with the following error:

```
docker-compose up
Creating network "heavy_blockchain_default" with the default driver
Creating node-template ... error

ERROR: for node-template  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/diogo/workspace/datagen/Datagen-Substrate-Grant/heavy_blockchain/.local

ERROR: for dev  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/diogo/workspace/datagen/Datagen-Substrate-Grant/heavy_blockchain/.local
ERROR: Encountered errors while bringing up the project.
```

```
docker-compose up
Creating network "fast_blockchain_default" with the default driver
Creating node-template ... error

ERROR: for node-template  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/diogo/workspace/datagen/Datagen-Substrate-Grant/fast_blockchain/.local

ERROR: for dev  Cannot create container for service dev: invalid mount config for type "bind": bind source path does not exist: /home/diogo/workspace/datagen/Datagen-Substrate-Grant/fast_blockchain/.local
ERROR: Encountered errors while bringing up the project.

```

Then I created the .local folder and the following error happened on docker-compose up.

```
node-template1 |   clang: error: linker command failed with exit code 1 (use -v to see invocation)
node-template1 |   make[2]: *** [CMakeFiles/protoc.dir/build.make:86: protoc-3.19.4.0] Error 1
node-template1 |   make[1]: *** [CMakeFiles/Makefile2:111: CMakeFiles/protoc.dir/all] Error 2
node-template1 |   make: *** [Makefile:130: all] Error 2
node-template1 |   thread 'main' panicked at '
node-template1 |   command did not execute successfully, got: exit status: 2
node-template1 | 
node-template1 |   build script failed, must exit now', /var/www/node-template/.cargo/registry/src/github.com-1ecc6299db9ec823/cmake-0.1.48/src/lib.rs:975:5
node-template1 |   stack backtrace:
node-template1 |      0: rust_begin_unwind
node-template1 |                at /rustc/7737e0b5c4103216d6fd8cf941b7ab9bdbaace7c/library/std/src/panicking.rs:584:5
node-template1 |      1: core::panicking::panic_fmt
node-template1 |                at /rustc/7737e0b5c4103216d6fd8cf941b7ab9bdbaace7c/library/core/src/panicking.rs:143:14
node-template1 |      2: cmake::fail
node-template1 |      3: cmake::run
node-template1 |      4: cmake::Config::build
node-template1 |      5: build_script_build::compile
node-template1 |      6: core::ops::function::FnOnce::call_once
node-template1 |      7: core::option::Option<T>::or_else
node-template1 |      8: build_script_build::protoc
node-template1 |      9: build_script_build::main
node-template1 |     10: core::ops::function::FnOnce::call_once
node-template1 |   note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
node-template1 | warning: build failed, waiting for other jobs to finish...
node-template1 | error: build failed
node-template1 exited with code 101

```


### Test coverage

- random_node_selector - lib.rs	74 / 128 (57.81%) - some full methods not covered.

- check_node_computational_work - lib.rs	93 / 103 (90.29%) - good coverage.

- computational_work - lib.rs - 61 / 67 (91.04%) - good coverage.

### Static Analysis

In fast_blockchain and heavy_blockchain projects some warnings were generated:

```
warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
   = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:41:6
   |
41 |   ) -> Result<
   |  ______^
42 | |     sc_service::PartialComponents<
43 | |         FullClient,
44 | |         FullBackend,
...  |
59 | |     ServiceError,
60 | | > {
   | |_^
   |
   = note: `#[warn(clippy::type_complexity)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> node/src/service.rs:152:26
    |
152 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
    |                          ^^^^^^^ help: change this to: `&str`
    |
    = note: `#[warn(clippy::ptr_arg)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg

warning: `node-template` (lib) generated 3 warnings
warning: useless conversion to the same type: `u128`
   --> node/src/benchmarking.rs:105:12
    |
105 |                 value: self.value.into(),
    |                        ^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
    |
    = note: `#[warn(clippy::useless_conversion)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion

warning: redundant clone
   --> node/src/benchmarking.rs:164:7
    |
164 |         call.clone(),
    |             ^^^^^^^^ help: remove this
    |
    = note: `#[warn(clippy::redundant_clone)]` on by default
note: this value is dropped without further use
   --> node/src/benchmarking.rs:164:3
    |
164 |         call.clone(),
    |         ^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:166:40
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:166:31
    |
166 |         runtime::Signature::Sr25519(signature.clone()),
    |                                     ^^^^^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
   --> node/src/benchmarking.rs:167:8
    |
167 |         extra.clone(),
    |              ^^^^^^^^ help: remove this
    |
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
    |
167 |         extra.clone(),
    |         ^^^^^
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                                  ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 |     module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              ^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: `node-template` (bin "node-template") generated 7 warnings (2 duplicates)

```

### Code Documentation

- heavy_blockchain good code documentation.
- fast_blockchain 

This error was presented during the generation of the docs: 


```
 --> pallets/computational-work/src/lib.rs:105:3
    |
105 | /         /// Event emitted when the x block is set.
106 | |         /// [x_block]
    | |_____________________^
    |
    = note: `#[warn(rustdoc::broken_intra_doc_links)]` on by default
    = note: the link appears in this line:
            
            [x_block]
             ^^^^^^^
    = note: no item named `x_block` in scope
    = help: to escape `[` and `]` characters, add '\' before them like `\[` or `\]`

warning: `pallet-computational-work` (lib doc) generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.39s

```

Some documentation comments with // instead of ///.



