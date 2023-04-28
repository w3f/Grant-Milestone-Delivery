
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/zkverse.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/Zkvers/substrate-zk/blob/master/LICENSE| | 
| 0b. | Documentation | <ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/blob/master/zk-tutorials/proof-system/groth16/theory_to_practice.md| Not fully evaluated yet  | 
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| https://github.com/Zkvers/substrate-zk/|  |
| 0d.  |Docker |<ul><li>[x] </li></ul>| https://github.com/Zkvers/substrate-zk/blob/master/docker-compose.yml| Works but could be improved |
| 1.  |make groth16 compatible with substrate |<ul><li>[x] </li></ul>| https://github.com/Zkvers/substrate-zk/tree/master/bellman-verifier|  |
| 2.  |adapt snarkjs and bellman |<ul><li>[x] </li></ul>| https://github.com/Zkvers/snarkjs-bellman-adapter/tree/main|  |
| 3.  |ZKP education |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/tree/master/zk-tutorials| Not fully evaluated yet |

## Evaluation V3

### Docker 

Now Docker works without problems, but it created the folder `target` needing permission to use, and it only installs rust and starts the substrate. I still need to install other things like the circom compiler and snarkjs. Would be nice if the Docker provided a container with all requirements installed.

I tested again running the substrate with Docker, and I had no problem only needed to get permission with `chown` for the folder `target` and install the circom and snarkjs. I was able to verify the proof in the terminal and in the substrate.

## Evaluation V2

### Docker

I tried running docker again and got this error.

```
node-template  | error: failed to run custom build command for `node-template-runtime v4.0.0-dev (/var/www/node-template/runtime)`
node-template  |
node-template  | Caused by:
node-template  |   process didn't exit successfully: `/var/www/node-template/target/release/build/node-template-runtime-5b485e747cfc1397/build-script-build` (exit status: 1)
node-template  |   --- stderr
node-template  |   Rust WASM toolchain not installed, please install it!
node-template  |
node-template  |   Further error information:
node-template  |   ------------------------------------------------------------
node-template  |  	Compiling wasm-test v1.0.0 (/tmp/.tmpfb6rqv)
node-template  |   error[E0463]: can't find crate for `std`
node-template  | 	|
node-template  | 	= note: the `wasm32-unknown-unknown` target may not be installed
node-template  | 	= help: consider downloading the target with `rustup target add wasm32-unknown-unknown`
node-template  | 	= help: consider building the standard library from source with `cargo build -Zbuild-std`
node-template  |
node-template  |   error: requires `sized` lang_item
node-template  |
node-template  |   For more information about this error, try `rustc --explain E0463`.
node-template  |   error: could not compile `wasm-test` due to 2 previous errors
node-template  |   warning: build failed, waiting for other jobs to finish...
node-template  |   error: cannot find macro `println` in this scope
node-template  |	--> src/main.rs:3:5
node-template  | 	|
node-template  |   3 |             	println!("{}", env!("RUSTC_VERSION"));
node-template  | 	|             	^^^^^^^
node-template  |
node-template  |   error: could not compile `wasm-test` due to 3 previous errors
node-template  |   ------------------------------------------------------------
node-template  |
node-template  | warning: build failed, waiting for other jobs to finish...
node-template exited with code 101
```

## Evaluation V1

### Documentation

The link for the testing guide is broken.

### Testing

I tested following [this guide in the root of adapter](https://github.com/Zkvers/snarkjs-bellman-adapter#use-the-adapter) and [this other guide Theory to Pratice](https://github.com/Zkvers/substrate-zk/blob/master/zk-tutorials/proof-system/groth16/theory_to_practice.md), and they worked fine. I could check on the terminal the proof and in the substrate using the generated `vkey_hex.json` and `proof_hex.json`, all working without problems.

In [this part of the guide](https://github.com/Zkvers/snarkjs-bellman-adapter/tree/main#3-encode-the-uncompressed-data-into-affine-and-verify) I could run one unit test, and it passed.

### Docker

I tried to run the docker in the substrate and got this error:

```
user@localhost:~/Documents/zkverse/substrate-zk$ docker compose up
[+] Running 7/7
 ✔ dev 6 layers [⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                                              31.7s 
   ✔ d121f8d1c412 Pull complete                                                                                                                                                                               2.0s 
   ✔ 1b985895e9b7 Pull complete                                                                                                                                                                               2.0s 
   ✔ 809a473c961b Pull complete                                                                                                                                                                               2.1s 
   ✔ 89f7c794c3df Pull complete                                                                                                                                                                               2.2s 
   ✔ ea120af1c111 Pull complete                                                                                                                                                                              21.1s 
   ✔ de2c35bb8bf1 Pull complete                                                                                                                                                                              28.9s 
[+] Running 1/1
 ✔ Container node-template  Created                                                                                                                                                                           5.2s 
Attaching to node-template
node-template  | error: failed to parse manifest at `/var/www/node-template/node/Cargo.toml`
node-template  | 
node-template  | Caused by:
node-template  |   failed to parse the `edition` key
node-template  | 
node-template  | Caused by:
node-template  |   this version of Cargo is older than the `2021` edition, and only supports `2015` and `2018` editions.
node-template exited with code 101
```

### Code Quality


I ran `cargo clippy` and got some warnings, for example:
```
warning: redundant clone
   --> node/src/benchmarking.rs:166:40
	|
166 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:166:31
	|
166 |     	runtime::Signature::Sr25519(signature.clone()),
	|                                 	^^^^^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
warning: redundant clone
   --> node/src/benchmarking.rs:167:8
	|
167 |     	extra.clone(),
	|          	^^^^^^^^ help: remove this
	|
note: this value is dropped without further use
   --> node/src/benchmarking.rs:167:3
	|
167 |     	extra.clone(),
	|     	^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
warning: redundant clone
  --> node/src/rpc.rs:48:47
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                              	^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> node/src/rpc.rs:48:43
   |
48 | 	module.merge(System::new(client.clone(), pool.clone(), deny_unsafe).into_rpc())?;
   |                                          	^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
warning: `node-template` (bin "node-template") generated 7 warnings (2 duplicates) (run `cargo fix --bin "node-template"` to apply 5 suggestions)
	Finished dev [unoptimized + debuginfo] target(s) in 1.19s
```
