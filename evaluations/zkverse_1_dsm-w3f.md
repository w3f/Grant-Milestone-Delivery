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
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/blob/master/| Broken link |
| 0d.  |Docker |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/blob/master/docker-compose.yml| Failed to run|
| 1.  |make groth16 compatible with substrate |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/tree/master/bellman-verifier| Not fully evaluated yet |
| 2.  |adapt snarkjs and bellman |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/snarkjs-bellman-adapter/tree/main| Not fully evaluated yet |
| 3.  |ZKP education |<ul><li>[ ] </li></ul>| https://github.com/Zkvers/substrate-zk/tree/master/zk-tutorials| Not fully evaluated yet |

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
