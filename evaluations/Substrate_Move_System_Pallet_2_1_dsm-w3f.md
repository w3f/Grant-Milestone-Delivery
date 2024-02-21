
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/35dc9e121070d89397b7fb8c4c0d70e683937ab0/applications/Substrate_Move_System_Pallet_2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| [Link](https://github.com/eigerco/pallet-move/blob/main/LICENSE) | |
| 0b. | Documentation | <ul><li>[ ] </li></ul>| The [main readme](https://github.com/eigerco/pallet-move/blob/main/README.md) & the [design document](https://github.com/eigerco/pallet-move/blob/main/doc/final-design.md) | Broken links |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>| [Testing guide](https://github.com/eigerco/pallet-move/blob/main/doc/tech_guide.md#testing) and the [tutorial](https://github.com/eigerco/pallet-move/blob/main/doc/tutorial.md) |  |
| 0d. | Docker | <ul><li>[ ] </li></ul>| [Dockerfile](https://github.com/eigerco/pallet-move/blob/main/Dockerfile) | Missing dependency |
| 1. | Rust crate: Substrate Move | <ul><li>[x] </li></ul>| [Substrate Move crate](https://github.com/eigerco/substrate-move) |  |
| 2. | System Pallet: Substrate Move SP adds Move functionality | <ul><li>[ ] </li></ul>| [pallet-move](https://github.com/eigerco/pallet-move) | Problems to run cargo clippy |
| 3. | System Pallet: Substrate Move SP APIs to interact with the Move VM | <ul><li>[x] </li></ul>| [smove tool](https://github.com/eigerco/smove) |  |

## Evaluation V1

### Documentation

The two links in the [pallet-move README in the section move-example](https://github.com/eigerco/pallet-move/blob/main/README.md#move-example) are pointing to inexistents files.

### Docker

I received this error when running the docker.

```
user@localhost:~/Documents/movevm/pallet-move$ docker run nodemove:Dockerfile
node-template: /lib/x86_64-linux-gnu/libm.so.6: version `GLIBC_2.35' not found (required by node-template)
node-template: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.30' not found (required by node-template)
node-template: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by node-template)
node-template: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32' not found (required by node-template)
node-template: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.34' not found (required by node-template)
node-template: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.33' not found (required by node-template)
```

### Pallet-move

All tests on this repository passed with good coverage. The `src/lib.rs` has 82% of coverage.

I received this error when running the `cargo clippy`

```
user@localhost:~/Documents/movevm/pallet-move$ cargo clippy --all-targets -- -D warnings
	Checking pallet-move v0.1.0 (/home/user/Documents/movevm/pallet-move)
error: items were found after the testing module
   --> tests/mock.rs:83:1
	|
83  | // frame_support::construct_runtime!(
84  | || 	pub enum Test
85  | || 	{
86  | ||     	System: frame_system,
...   ||
89  | || 	}
90  | || );
	| ||_- in this macro invocation
...   |
146 | |  	Ok((addr_32, addr_mv))
147 | |  }
	| |__^
	|
	= help: move the items to before the testing module was defined
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#items_after_test_module
	= note: `-D clippy::items-after-test-module` implied by `-D warnings`
	= note: this error originates in the macro `frame_support::construct_runtime` (in Nightly builds, run with -Z macro-backtrace for more info)

error: could not compile `pallet-move` (test "mock") due to previous error
```

I received some warnings when running the `cargo fmt`. It doesn't seem to be a problem.

```
user@localhost:~/Documents/movevm/pallet-move$ cargo fmt --all -- --check
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
Warning: can't set `imports_granularity = Crate`, unstable features are only available in nightly channel.
Warning: can't set `group_imports = StdExternalCrate`, unstable features are only available in nightly channel.
```

I was able to run the benchmark for the pallet-move.

<details>

```
 user@localhost:~/Documents/movevm/substrate-node-template-move-vm-test$ ./target/release/node-template benchmark pallet \
	--chain dev \
	--wasm-execution=compiled \
	--pallet "pallet-move" \
	--extrinsic "*" \
	--steps 50 \
	--repeat 20 \
	--output weights.rs
2024-02-19 12:39:38 Starting benchmark: pallet_move::execute    
2024-02-19 12:39:38 Starting benchmark: pallet_move::publish_module    
Pallet: "pallet_move", Extrinsic: "execute", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
Raw Storage Info
========
Storage: `System::Account` (r:1 w:0)
Proof: `System::Account` (`max_values`: None, `max_size`: Some(128), added: 2603, mode: `MaxEncodedLen`)

Median Slopes Analysis
========
-- Extrinsic Time --

Model:
Time ~=	117.9
          	µs

Reads = 1
Writes = 0
Recorded proof Size = 51

Min Squares Analysis
========
-- Extrinsic Time --

Model:
Time ~=	117.9
          	µs

Reads = 1
Writes = 0
Recorded proof Size = 51

Pallet: "pallet_move", Extrinsic: "publish_module", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
Raw Storage Info
========
Storage: `MoveModule::VMStorage` (r:1 w:1)
Proof: `MoveModule::VMStorage` (`max_values`: None, `max_size`: None, mode: `Measured`)

Median Slopes Analysis
========
-- Extrinsic Time --

Model:
Time ~=	184.8
          	µs

Reads = 1
Writes = 1
Recorded proof Size = 111

Min Squares Analysis
========
-- Extrinsic Time --

Model:
Time ~=	184.8
          	µs

Reads = 1
Writes = 1
Recorded proof Size = 111

Pallet: "pallet_move", Extrinsic: "publish_module_bundle", Lowest values: [], Highest values: [], Steps: 50, Repeat: 20
Raw Storage Info
========
Storage: `MoveModule::VMStorage` (r:1 w:1)
Proof: `MoveModule::VMStorage` (`max_values`: None, `max_size`: None, mode: `Measured`)

Median Slopes Analysis
========
-- Extrinsic Time --

Model:
Time ~=	291.3
          	µs

Reads = 1
Writes = 1
Recorded proof Size = 111

Min Squares Analysis
========
-- Extrinsic Time --

Model:
Time ~=	291.3
          	µs

Reads = 1
Writes = 1
Recorded proof Size = 111

2024-02-19 12:39:38 Starting benchmark: pallet_move::publish_module_bundle    
Created file: "weights.rs"
```

</details>

I was able to follow [the tutorial](https://github.com/eigerco/pallet-move/blob/main/doc/tutorial.md) without problems.

The tutorial gives the example of code [CarWash.move](https://github.com/eigerco/pallet-move/blob/main/tests/assets/move-projects/car-wash-example/sources/CarWash.move) and shows how to use the [pallet-move](https://github.com/eigerco/pallet-move) on the substrate and how to use [smove](https://github.com/eigerco/smove) to build, estimate the optimal amount of gas and create script transactions.

### Substrate Move

All testes in [Substrate Move](https://github.com/eigerco/substrate-move) are passing.

The move-vm-backend and move-vm-backend-common have good coverage of close to 80%. The Language could have better coverage in some parts, but I think it's good in general.
