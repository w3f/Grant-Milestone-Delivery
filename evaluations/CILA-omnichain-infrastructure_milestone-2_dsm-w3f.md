# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CILA-omnichain-infrastructure.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/LICENSE-APACHE.txt | | 
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/docs/autotest.md | Not fully evaluated yet. | 
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/autotests/README.md | Not fully evaluated yet. | 
| 0d. | Docker |<ul><li>[ ] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/Dockerfile | Some problems. | 
| 0e. | Article |<ul><li>[x] </li></ul>| https://www.linkedin.com/pulse/implementing-cqrs-event-sourcing-substrate-technical-guide-alex-shkor/ | | 
| 1. | Substrate Chain |<ul><li>[ ] </li></ul>| N/A | Not fully evaluated yet. | 
| 2.  | Automated Tests |<ul><li>[ ] </li></ul>| https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/autotests/substrate.test.js  | Not fully evaluated yet.|

## Evaluation V1

### Docker

I followed these [instructions](https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/run-docker.md) to run the Docker. I received this error:

```
user@localhost:~/Documents/cila/cila-substrate$ docker run -v $(pwd)/substrate-data:/substrate substrate-node-image
docker: Error response from daemon: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "./target/release/omnichain-prototype": stat ./target/release/omnichain-prototype: no such file or directory: unknown.
ERRO[0000] error waiting for container: 
```

### Testing

In this [documentation](https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/autotests/README.md), the command `cd autotest` should be `cd autotests`. 

The tests passed:

```
 PASS  ./substrate.test.js
  Substrate Tests
    ✓ Send Mint NFT transaction (21 ms)
    ✓ Add router (18 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.262 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

'This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

Ideally, it could have more tests to deliver better coverage.

I have some questions.

- Are these tests enough to cover the Deliverable 2?
- Don't these tests need to use two different chains? I only saw one `Wsprovider` in this test. 
- How do I test the Deliverable 1? Is it possible to test this Deliverable manually?

### Code Quality

I ran `cargo clippy` and received some warnings. For example:

```
warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:40:6
   |
40 |   ) -> Result<
   |  ______^
41 | | 	sc_service::PartialComponents<
42 | |     	FullClient,
43 | |     	FullBackend,
...  |
58 | | 	ServiceError,
59 | | > {
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
   = note: `#[warn(clippy::type_complexity)]` on by default

warning: this expression creates a reference which is immediately dereferenced by the compiler
  --> node/src/service.rs:71:57
   |
71 | 	let executor = sc_service::new_native_or_wasm_executor(&config);
   |                                                        	^^^^^^^ help: change this to: `config`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow
   = note: `#[warn(clippy::needless_borrow)]` on by default

warning: `omnichain-prototype` (lib) generated 2 warnings (run `cargo clippy --fix --lib -p omnichain-prototype` to apply 1 suggestion)
warning: useless conversion to the same type: `u128`
  --> node/src/benchmarking.rs:87:12
   |
87 |             	value: self.value.into(),
   |                    	^^^^^^^^^^^^^^^^^ help: consider removing `.into()`: `self.value`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#useless_conversion
   = note: `#[warn(clippy::useless_conversion)]` on by default

warning: large size difference between variants
  --> node/src/cli.rs:13:1
   |
13 | / pub enum Subcommand {
14 | | 	/// Key management cli utilities
15 | | 	#[command(subcommand)]
16 | | 	Key(sc_cli::KeySubcommand),
   | | 	-------------------------- the second-largest variant contains at least 264 bytes
...  |
41 | | 	Benchmark(frame_benchmarking_cli::BenchmarkCmd),
   | | 	----------------------------------------------- the largest variant contains at least 488 bytes
...  |
52 | | 	ChainInfo(sc_cli::ChainInfoCmd),
53 | | }
   | |_^ the entire enum is at least 488 bytes
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#large_enum_variant
   = note: `#[warn(clippy::large_enum_variant)]` on by default
help: consider boxing the large fields to reduce the total size of the enum
   |
41 | 	Benchmark(Box<frame_benchmarking_cli::BenchmarkCmd>),
   |           	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

warning: `omnichain-prototype` (bin "omnichain-prototype") generated 4 warnings (2 duplicates) (run `cargo clippy --fix --bin "omnichain-prototype"` to apply 1 suggestion)
	Finished dev [unoptimized + debuginfo] target(s) in 0.50s
```

