# Evaluation

- Status: In progress
- Application Document:  https://github.com/w3f/Grants-Program/blob/master/applications/ink-pallet-benchmarking.md
- Milestone: 2
- Previously successfully merged evaluation: All by keeganquigley_

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/17be56bb0b3d3e209c97877854b7c2b8ed103513/LICENSE) | Unlicense |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Demo](https://talenticaall-my.sharepoint.com/:v:/g/personal/nikhil_desai_talentica_com/Ea_GbRhTgKBAr1bdCRsT1ZwBvIwtZZrm5Fhkom49lYTMUQ?e=kfU4b4) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/3d3614768695af687fe2e0cf931a6bd5af7472e6#pallet-extrinsic-benchmarking) | No unit tests? |
| 0d. | Article | <ul><li>[x] </li></ul> | [Article](https://talenticaall-my.sharepoint.com/:w:/g/personal/nikhil_desai_talentica_com/ESEnZ3pFvdhHi4_8VLlQLWYBKEhAuUz5_ee5gSPnKYMSkw?e=zZmrMS) | Ok.
| 1.  | Solidity smart contract (native and WASM): basic read & write | <ul><li>[x] </li></ul> | [Solidity WASM](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/tree/contracts-benchmarking/solidity-sample-contract) [Solidity Native](https://github.com/Nikhil-Desai-Talentica/substrate-node-template-benchmarking/blob/solidity-native/template/benchmark-sample/build/contracts/BenchmarkSample.json) | Ok. |
| 2.  | Adapt the benchmarking framework | <ul><li>[x] </li></ul> | - | Ok. |

# General Notes

When running `cargo test` in the `benchmarking` branch, I'm getting an error about `protoc` not being installed. This went away with `sudo apt install protoc-compiler`.

I'm getting more errors about certain libraries:
```rust
error: failed to run custom build command for `librocksdb-sys v0.8.3+7.4.4`

Caused by:
  process didn't exit successfully: `/home/ubuntu/substrate-node-template-benchmarking/target/debug/build/librocksdb-sys-deee5a2088eefb09/build-script-build` (exit status: 101)
  --- stderr
  thread 'main' panicked at 'Unable to find libclang: "couldn't find any valid shared libraries matching: ['libclang.so', 'libclang-*.so', 'libclang.so.*', 'libclang-*.so.*'], set the `LIBCLANG_PATH` environment variable to a path where one of these files can be found (invalid: [])"', /home/ubuntu/.cargo/registry/src/github.com-1ecc6299db9ec823/bindgen-0.64.0/./lib.rs:2393:31
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
warning: build failed, waiting for other jobs to finish...
```

**UPDATE:** Works when using `nightly-2022-12-30` toolchain. I am able to run all the available benchmarking tests (sample):
```rust
2023-04-01 20:24:33 🔨 Initializing Genesis block/state (state: 0x025c…0dec, header-hash: 0x2ec5…5346)    
2023-04-01 20:24:33 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.    
5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

5Fan4r49ckuMk9SKivhoRyDX3T7KnJ9o9ouLUo4EkmkiiUYS

2023-04-01 20:24:35 Running 10 warmups...    
2023-04-01 20:24:35 Executing block 100 times    
2023-04-01 20:24:35 Building block, this takes some time...    
2023-04-01 20:24:39 Extrinsics per block: 1869    
2023-04-01 20:24:39 Running 10 warmups...    
2023-04-01 20:24:43 Executing block 100 times    
2023-04-01 20:25:21 Executing a contract-test::get_num extrinsic takes[ns]:
Total: 20310808
Min: 195696, Max: 263040
Average: 203108, Median: 199061, Stddev: 12145.57
Percentiles 99th, 95th, 75th: 240891, 234942, 200436
```
## Solidity

Solidity benchmarking works both for `solang` compiled contracts as well as native. Would be cool to see more complex logic added in the future such as for cross-contract calls.
