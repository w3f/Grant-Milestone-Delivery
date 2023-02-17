# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/eightfish.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/eightfish-org/eightfish/blob/master/LICENSE| | 
| 0b. |Documentation|<ul><li>[ ] </li></ul>|https://github.com/eightfish-org/eightfish#readme|  Some commands failing | 
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>|https://github.com/eightfish-org/eightfish/blob/master/unit_tests.md| Need a more complete testing guide for system tests | 
| 0d.  | Docker |<ul><li>[ ] </li></ul>|https://github.com/eightfish-org/eightfish/blob/master/Dockerfile| Need improvements | 
| 0e. | Article |<ul><li>[ ] </li></ul>|https://medium.com/@daogangtang/eightfish-milestone-1-81ef32e4bbf2| Not fully evaluated yet | 
| 1. | Substrate module: eightfish |<ul><li>[ ] </li></ul>| 1. record the coming requests; https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L96 <br/> 2. record the coming model indexes; https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L117 <br/> 3. update the on-chain wasm code for the off-chain worker. https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L143 | Not fully evaluated yet |
| 2. | Subxt proxy |<ul><li>[ ] </li></ul>| https://github.com/eightfish-org/eightfish/tree/master/subxtproxy| Not fully evaluated yet| 
| 3. | Off-chain wasm worker |<ul><li>[ ] </li></ul>| https://github.com/eightfish-org/eightfish/tree/master/spin_worker | Not fully evaluated yet| 
| 4. | Upgrade utilities |<ul><li>[ ] </li></ul>| 1. https://github.com/eightfish-org/eightfish/blob/master/upgrade/src/bin/upload_wasm.rs <br/> 2. https://github.com/eightfish-org/eightfish/blob/master/upgrade/src/main.rs <br/> 3.  https://github.com/eightfish-org/eightfish/blob/master/upgrade/nodemon.sh | Not fully evaluated yet| 
| 5. | A set of rust derive procedural macro |<ul><li>[ ] </li></ul>| https://github.com/eightfish-org/eightfish/tree/master/eightfish-derive | Not fully evaluated yet| 
| 6. | Framework SDK interface |<ul><li>[ ] </li></ul>| https://github.com/eightfish-org/eightfish/tree/master/src | Not fully evaluated yet| 


## Evaluation V1

### Documentation

Docker builds without problems. The instructions to create postgres db and table are fine but would be better to have a script that runs these commands automatically during the build. I also notice that the ports are not being exported in the container. This can cause connectivity problems.


The commands to run services got some problems:

`target/release/eightfish_subnode --dev` the file was named as `eightfish-subnode` during the building. Please either rename the file or adjust the script command.

 `cargo build --release && target/release/subxtproxy` got some warnings during the building and fails to connect.

 ```
user@localhost:~/Documents/eightfish/subxtproxy$ cargo build --release && target/release/subxtproxy
warning: unused manifest key: worksapce
warning: unused import: `std::fmt`
 --> src/main.rs:2:5
  |
2 | use std::fmt;
  | 	^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `SubstrateConfig`
  --> src/main.rs:10:5
   |
10 | 	SubstrateConfig,
   | 	^^^^^^^^^^^^^^^

warning: unused variable: `time`
   --> src/main.rs:109:21
	|
109 |             	let time = ev.3;
	|                 	^^^^ help: if this is intentional, prefix it with an underscore: `_time`
	|
	= note: `#[warn(unused_variables)]` on by default

warning: fields `time`, `nonce`, and `randomvec` are never read
  --> src/main.rs:40:5
   |
39 | pub struct ExtPayload {
   |        	---------- fields in this struct
40 | 	time: u64,
   | 	^^^^
41 | 	nonce: u64,
   | 	^^^^^
42 | 	randomvec: Vec<u8>,
   | 	^^^^^^^^^
   |
   = note: `ExtPayload` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis
   = note: `#[warn(dead_code)]` on by default

warning: `subxtproxy` (bin "subxtproxy") generated 4 warnings
	Finished release [optimized] target(s) in 0.16s
user@localhost:~/Documents/eightfish/subxtproxy$ target/release/subxtproxy
Error: Connection refused (os error 111)
```

`cd http_gate && spin build --up --follow-all` and `cd examples/simple && spin build --up --follow-all` got many errors, for example from http_gate:

```
error[E0425]: cannot find function, tuple struct or tuple variant `Err` in this scope
	--> /home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-0.11.0+wasi-snapshot-preview1/src/lib_generated.rs:2147:14
 	|
2147 |     	_ => Err(Errno(ret as u16)),
 	|          	^^^ not found in this scope

error[E0425]: cannot find function, tuple struct or tuple variant `Ok` in this scope
	--> /home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-0.11.0+wasi-snapshot-preview1/src/lib_generated.rs:2160:14
 	|
2160 |     	0 => Ok(()),
 	|          	^^ not found in this scope

error[E0425]: cannot find function, tuple struct or tuple variant `Err` in this scope
	--> /home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-0.11.0+wasi-snapshot-preview1/src/lib_generated.rs:2161:14
 	|
2161 |     	_ => Err(Errno(ret as u16)),
 	|          	^^^ not found in this scope

Some errors have detailed explanations: E0412, E0425, E0463.
For more information about an error, try `rustc --explain E0412`.
error: could not compile `wasi` due to 204 previous errors
Error: Build command for component redis-worker failed with status Exited(101).
```



### Testing

The test in `eightfish/eightfish-derive` failed to get `spin-sdk`

```
user@localhost:~/Documents/eightfish/eightfish-derive$ cargo test
warning: unused manifest key: worksapce
error: failed to get `spin-sdk` as a dependency of package `eightfish-derive v0.1.0 (/home/user/Documents/eightfish/eightfish-derive)`

Caused by:
  failed to load source for dependency `spin-sdk`

Caused by:
  Unable to update /home/user/Documents/spin/sdk/rust

Caused by:
  failed to read `/home/user/Documents/spin/sdk/rust/Cargo.toml`

Caused by:
  No such file or directory (os error 2)
```
All tests in `eightfish/subnode` and `eightfish/subnode/pallets/eightfish` passed.

I need a complete testing guide to evaluate the system's behavior. This guide should include all features in the milestone delivery and could have print screens or videos showing how to use them. The testing guide should not need programming skills to be used. In this way, if there are programming examples they need to be complete and have scripts that we can just run to evaluate the system.

### Code Quality

I ran `cargo clippy` in some folders like eightfish (main folder), subnode and subproxy and got some warnings, for example in the main folder:

```
warning: you should consider adding a `Default` implementation for `EightFishRouter`
  --> src/router.rs:14:5
   |
14 | / 	pub fn new() -> EightFishRouter {
15 | |     	EightFishRouter {
16 | |         	router: HashMap::new(),
17 | |     	}
18 | | 	}
   | |_____^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#new_without_default
help: try adding this
   |
13 + impl Default for EightFishRouter {
14 + 	fn default() -> Self {
15 +     	Self::new()
16 + 	}
17 + }
   |

warning: you should consider adding a `Default` implementation for `Router`
  --> src/router_m/router.rs:21:5
   |
21 | / 	pub fn new() -> Router {
22 | |     	Router {
23 | |         	routers: HashMap::new(),
24 | |         	wildcard: Recognizer::new(),
25 | |     	}
26 | | 	}
   | |_____^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#new_without_default
help: try adding this
   |
20 + impl Default for Router {
21 + 	fn default() -> Self {
22 +     	Self::new()
23 + 	}
24 + }
   |

warning: `eightfish` (lib) generated 45 warnings
error: could not compile `eightfish` due to previous error; 45 warnings emitted
```

I tried to run `cargo tarpulin` in the folder `eightfish/subnode/pallets/eightfish` and the tests coverage is low:

```
Feb 17 10:30:03.673  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| node/src/chain_spec.rs: 18, 31
|| node/src/rpc.rs: 47-48, 50-52, 54
|| pallets/eightfish/rpc/src/lib.rs: 33, 36, 72-73, 75, 77-82, 84
|| pallets/eightfish/src/lib.rs: 16, 58, 63, 95-97, 99, 102-104, 109, 111, 116, 142-144, 146, 149, 151, 153, 155, 160-162, 164, 166, 171, 173
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/6
|| pallets/eightfish/rpc/src/lib.rs: 0/12
|| pallets/eightfish/src/lib.rs: 23/51
|| 
32.39% coverage, 23/71 lines covered
```

For the `subnode` folder the tests coverage is low:

```
Feb 17 10:51:27.729  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| node/src/chain_spec.rs: 18-19, 27, 31, 35-36, 39-40, 42, 47-50, 52, 54, 56-60, 66, 68, 70-71, 73, 75, 79-80, 82, 87-90, 92, 94, 96-108, 114, 116, 118, 120-121, 123, 128, 136, 140, 144, 147, 150, 154
|| node/src/command.rs: 14-15, 18-19, 22-23, 26-27, 30-31, 34, 38-43, 47, 53-54, 56-60, 62-67, 70-74, 77-81, 84-89, 92-94, 96-103, 105, 108-109, 111, 114-115, 117-118, 126-128, 130-134, 136, 138-140, 142, 144-145, 163, 165-168, 171-173
|| node/src/command_helper.rs: 44, 50-51, 53-55, 60, 67, 73-75, 77, 79, 81-86, 88, 90-92, 96-97, 100-103, 109, 112-115, 122-125, 127, 129-130
|| node/src/main.rs: 12-13
|| node/src/rpc.rs: 30, 47-48, 50-52, 54
|| node/src/service.rs: 25-26, 29-30, 39, 61-62, 65, 68-72, 78-79, 83, 86-87, 89, 91-92, 96, 99-103, 107-110, 113, 115, 117-121, 124-126, 129, 131-133, 135-137, 140-148, 152, 156, 160-169, 172-176, 183-184, 187, 190-194, 197, 200-205, 208, 211-213, 217-222, 225-226, 228, 230-231, 235-238, 240-245, 248, 250-254, 257, 260, 263, 265-270, 273-275, 278, 281-288, 294, 296, 301, 306, 308, 312, 316, 327, 329-330, 335, 337-338, 342-343
|| pallets/eightfish/rpc/src/lib.rs: 33, 36, 50-53, 67, 72-73, 75, 77-82, 84
|| pallets/eightfish/runtime-api/src/lib.rs: 9, 11
|| pallets/eightfish/src/lib.rs: 16, 58, 63, 95-97, 99, 102-104, 109, 111, 116, 142-144, 146, 149, 151, 153, 155, 160-162, 164, 166, 171, 173
|| runtime/src/lib.rs: 84, 130-131, 138, 142, 338, 340-341, 344-345, 348-349, 354-355, 360-361, 364-365, 368-369, 372-374, 376, 381-384, 386, 391-392, 397-398, 401-402, 407-408, 411-412, 414, 419-420, 423-424, 427-428, 432, 434, 437-439, 444, 449-450, 455-457, 459, 461-463, 465, 472-473
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/61
|| node/src/command.rs: 0/89
|| node/src/command_helper.rs: 0/41
|| node/src/main.rs: 0/2
|| node/src/rpc.rs: 0/7
|| node/src/service.rs: 0/156
|| pallets/eightfish/rpc/src/lib.rs: 0/17
|| pallets/eightfish/runtime-api/src/lib.rs: 0/2
|| pallets/eightfish/src/lib.rs: 23/51
|| pallets/eightfish/src/mock.rs: 3/3
|| pallets/eightfish/src/tests.rs: 25/25
|| runtime/src/lib.rs: 2/66
|| 
10.19% coverage, 53/520 lines covered
```
