# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking-phase-2.md 
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| Apache 2.0 / GPLv3 / MIT / Unlicense |  |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [README](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/README.md) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| N/A | Not provided |
| **0d.** | Docker | <ul><li>[x] </li></ul>| Not Applicable. |  |
| 0e. | Article | <ul><li>[ ] </li></ul>| https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | Not fully evaluated yet. |
| 1. | Pallet CPU-intensive extrinsic | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/template/src/lib.rs | Not fully evaluated yet. |
| 2. | Ink! CPU-intensive function | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/test/lib.rs | Not fully evaluated yet. |
| 3. | Solidity-WASM and Solidity-Native CPU-intensive function | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/solidity-sample-contract/sample.sol | Not fully evaluated yet. |
| 4. | CPU-intensive benchmarks | <ul><li>[ ] </li></ul>| https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | Not fully evaluated yet. |
| 5. | Pallet cross-contract call | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/callee/src/lib.rs | Not fully evaluated yet. |
| 6. | Ink! cross-contract call | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/inner/lib.rs | Not fully evaluated yet. |
| 7. | cross-contract benchmarks | <ul><li>[ ] </li></ul>| https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | Not fully evaluated yet. |
| 8. | Solidity-WASM and Solidity-Native cross-contract call | <ul><li>[ ] </li></ul>| Add another Solidity contract and invoke it from the sample Solidity contract. (Note: There are [unresolved issues](https://github.com/hyperledger/solang/issues/666) questioning the feasibility of cross-contract calls in Solidity-WASM and Solidity-Native. Nevertheless, an attempt will be made to see if it's possible. |  |
| 9. | Pallet events | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/pallets/template/src/lib.rs | Not fully evaluated yet. |
| 10. | Ink! events | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/test/lib.rs | Not fully evaluated yet. |
| 11. | Solidity-WASM and Solidity-Native events | <ul><li>[ ] </li></ul>| https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/contracts-benchmarking/solidity-sample-contract/sample.sol | Not fully evaluated yet. |
| 12. | Benchmark events across implementations | <ul><li>[ ] </li></ul>| https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS | Not fully evaluated yet. | 

## Evaluation V1

### Testing

It wasn't provided a testing Guide, so I followed the [demo video](https://talenticaall-my.sharepoint.com/:v:/g/personal/nikhil_desai_talentica_com/Ea_GbRhTgKBAr1bdCRsT1ZwBvIwtZZrm5Fhkom49lYTMUQ?e=kfU4b4), considering this as a testing guide.

When I ran the command `./target/release/node-template benchmark extrinsic --list` in the branch contracts-benchmarking, I received this error:

```
user@localhost:~/Documents/ink-pallet-benchmarking/substrate-node-template-benchmarking$ ./target/release/node-template benchmark extrinsic --list
2023-07-12 08:59:50 🔨 Initializing Genesis block/state (state: 0x322d…79dd, header-hash: 0x9e7c…0f64)    
2023-07-12 08:59:50 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    

====================

Version: 4.0.0-dev-4ada90b4ae0

   0: sp_panic_handler::set::{{closure}}
   1: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/alloc/src/boxed.rs:2002:9
  	std::panicking::rust_panic_with_hook
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:692:13
   2: std::panicking::begin_panic_handler::{{closure}}
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:579:13
   3: std::sys_common::backtrace::__rust_end_short_backtrace
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/sys_common/backtrace.rs:137:18
   4: rust_begin_unwind
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:575:5
   5: core::panicking::panic_fmt
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/core/src/panicking.rs:64:14
   6: core::result::unwrap_failed
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/core/src/result.rs:1790:5
   7: node_template::command::read_callee_contract_address
   8: node_template::command::run::{{closure}}
   9: node_template::command::run
  10: node_template::main
  11: std::sys_common::backtrace::__rust_begin_short_backtrace
  12: std::rt::lang_start::{{closure}}
  13: core::ops::function::impls::<impl core::ops::function::FnOnce<A> for &F>::call_once
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/core/src/ops/function.rs:287:13
  	std::panicking::try::do_call
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:483:40
  	std::panicking::try
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:447:19
  	std::panic::catch_unwind
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panic.rs:140:14
  	std::rt::lang_start_internal::{{closure}}
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/rt.rs:148:48
  	std::panicking::try::do_call
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:483:40
  	std::panicking::try
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panicking.rs:447:19
  	std::panic::catch_unwind
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/panic.rs:140:14
  	std::rt::lang_start_internal
         	at /rustc/574b64a97f52162f965bc201e47f0af8279ca65d/library/std/src/rt.rs:148:20
  14: main
  15: __libc_start_main
  16: _start


Thread 'main' panicked at 'failed to read 'callee_contract_address.txt': Os { code: 2, kind: NotFound, message: "No such file or directory" }', node/src/command.rs:21

This is a bug. Please report it at:

    support.anonymous.an
```

This problem prevented me to continue this part. 

I tested the branch solidity-native, and it worked without problems.

```
user@localhost:~/Documents/ink-pallet-benchmarking/asd/substrate-node-template-benchmarking$ ./target/release/frontier-template-node benchmark extrinsic --pallet native_solidity --extrinsic generic_call
2023-07-12 12:06:21 🔨 Initializing Genesis block/state (state: 0x52cf…b3cd, header-hash: 0x70e3…3ab1)    
2023-07-12 12:06:21 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
2023-07-12 12:06:21 Essential task `basic-block-import-worker` failed. Shutting down service.    
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
d43593c715fdd31c61141abd04a99fd6822c8558
8a50db1e0f9452cfd91be8dc004ceb11cb08832f
9ac1762f00000000000000000000000000000000000000000000000000000000000003e8
2023-07-12 12:06:21 Running 10 warmups...    
2023-07-12 12:06:21 Executing block 100 times    
2023-07-12 12:06:21 Building block, this takes some time...    
2023-07-12 12:06:22 Extrinsics per block: 174    
2023-07-12 12:06:22 Running 10 warmups...    
2023-07-12 12:06:22 Executing block 100 times    
2023-07-12 12:06:24 Executing a native_solidity::generic_call extrinsic takes[ns]:
Total: 13875562
Min: 133445, Max: 197207
Average: 138755, Median: 136566, Stddev: 7439.89
Percentiles 99th, 95th, 75th: 152960, 149610, 139231	
```

It was added some unit tests in this application? If it was, let me know how to run them properly.

### Code Quality

I ran `cargo clippy` in both repositories and received some warnings, for example, in contracts-benchmarking. It isn't mandatory to fix.

```
user@localhost:~/Documents/ink-pallet-benchmarking/substrate-node-template-benchmarking$ cargo clippy
warning: redundant field names in struct initialization
  --> pallets/callee/src/lib.rs:53:44
   |
53 |         	Self::deposit_event(Event::NumChanged { old: old, new: value });
   |                                                 	^^^^^^^^ help: replace it with: `old`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
   = note: `#[warn(clippy::redundant_field_names)]` on by default

warning: unused import: `frame_support::inherent`
  --> pallets/callee/src/lib.rs:12:6
   |
12 | 	use frame_support::inherent::*;
   |     	^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: `pallet-callee` (lib) generated 2 warnings (run `cargo clippy --fix --lib -p pallet-callee` to apply 1 suggestion)
warning: redundant field names in struct initialization
  --> pallets/template/src/lib.rs:98:44
   |
98 |         	Self::deposit_event(Event::NumChanged { old: old, new: value });
   |                                                 	^^^^^^^^ help: replace it with: `old`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
   = note: `#[warn(clippy::redundant_field_names)]` on by default

warning: unused variable: `fib_n`
   --> pallets/template/src/lib.rs:151:8
	|
151 |         	let fib_n = fib(n);
	|             	^^^^^ help: if this is intentional, prefix it with an underscore: `_fib_n`
	|
	= note: `#[warn(unused_variables)]` on by default

warning: unused variable: `odd_product_n`
   --> pallets/template/src/lib.rs:161:8
	|
161 |         	let odd_product_n = odd_prod(n);
	|             	^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_odd_product_n`

warning: unused variable: `triangle_number_n`
   --> pallets/template/src/lib.rs:171:8
	|
171 |         	let triangle_number_n = triangle_num(n);
	|             	^^^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_triangle_number_n`

warning: unused `std::result::Result` that must be used
   --> pallets/template/src/lib.rs:189:4
	|
189 |         	pallet_callee::Pallet::<T>::store_num(origin, value);
	|         	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	|
	= note: this `Result` may be an `Err` variant, which should be handled
	= note: `#[warn(unused_must_use)]` on by default

warning: `pallet-template` (lib) generated 5 warnings (run `cargo clippy --fix --lib -p pallet-template` to apply 4 suggestions)
```
