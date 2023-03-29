# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/societal_grant2.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |   
| 0a. | License | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-client/blob/main/LICENSE)|  |
| 0b. | Documentation | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-client/blob/main/README.md) | |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-client/blob/main/docs/DemocracyTestingGuide.md)| Guide on how to test Assets Pallet Lockable/Reservable traits using the Societal client. |
| 0d. | Docker | <ul><li>[ ] </li></ul>|[Docker Image](https://hub.docker.com/layers/societal/societal-client/da970f384c893cbac9f537b52535f7b5880e609b/images/sha256-2634da97a130abe3ce0ae3db18c73061f6374c7b0b889781d7d4d15ef8dc17be?context=explore)| Can connect with a local node? |
| 0e. | Article | <ul><li>[x] </li></ul>|[GitHub repo link](https://github.com/sctllabs/societal-grant-2-submission) |   |  
| 1. | Client Modules | <ul><li>[ ] </li></ul>| [Societal Client Web Application](https://client.dev.sctl.link) | Not fully evaluated yet  |
| Note | Substrate Module: Reservable & Lockable Asset Pallet | <ul><li>[ ] </li></ul>| | Not fully evaluated yet  |  


## Evaluation V1

### Documentation

I didn't find any problem with the documentation.

### Docker

The docker works fine but I only used the docker from societal-client to launch the application connected with an external node. It is possible to use it with a local node?

### System Test

Using the local node, I tried to create a DAO. It was created in the node but doesn't appear in the frontend. Because of that, I wasn't able to finish this test using the local node. Do I need to change something for this to be working?

Using the external node, all the functions in the guide seem to be working fine.
However, when creating the DAO, I noticed the percentage circle in approve origin is not working.

![image (11)](https://user-images.githubusercontent.com/112647953/227263101-adade717-0306-494c-830e-f4d9b1d16d34.png)



### Unit Test

I ran `cargo test` in the societal-grant and got some warnings, and some tests were ignored, but all others passed.

```
warning: `pallet-dao-membership` (lib test) generated 15 warnings (run `cargo fix --lib -p pallet-dao-membership --tests` to apply 14 suggestions)
warning: `pallet-dao-collective` (lib test) generated 20 warnings (run `cargo fix --lib -p pallet-dao-collective --tests` to apply 12 suggestions)
	Finished test [unoptimized + debuginfo] target(s) in 1.97s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`
 	Running unittests src/lib.rs (target/debug/deps/dao_primitives-8b75baa477a4588b)
```
Ignored Tests
```
   Doc-tests precompile-utils

running 2 tests
test src/data/mod.rs - data::read_args (line 348) ... ignored
test src/data/mod.rs - data::read_struct (line 314) ... ignored

test result: ok. 0 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests precompile-utils-macro

running 8 tests
test src/lib.rs - generate_function_selector (line 68) ... ignored
test src/precompile/mod.rs - precompile (line 121) ... ignored
test src/precompile/mod.rs - precompile (line 157) ... ignored
test src/precompile/mod.rs - precompile (line 172) ... ignored
test src/precompile/mod.rs - precompile (line 34) ... ignored
test src/precompile/mod.rs - precompile (line 51) ... ignored
test src/precompile/mod.rs - precompile (line 96) ... ignored
test src/lib.rs - generate_function_selector (line 78) ... ok

test result: ok. 1 passed; 0 failed; 7 ignored; 0 measured; 0 filtered out; finished in 0.13s
```

I ran `yarn test` in the societal-client, and all tests passed.

```
user@localhost:~/Documents/societal/societal-client$ yarn test
yarn run v1.22.19
$ jest --silent
info  - Loaded env from /home/user/Documents/societal/societal-client/.env
 PASS  components/Countdown/Countdown.spec.tsx
 › 1 snapshot written.
 PASS  components/About/About.spec.tsx
 › 1 snapshot written.
 PASS  components/Token/Token.spec.tsx
 › 1 snapshot written.
 PASS  components/Balance/Balance.spec.tsx
 › 1 snapshot written.
 PASS  components/Hero/Hero.spec.tsx
 › 1 snapshot written.
 PASS  components/Queue/Queue.spec.tsx
 › 1 snapshot written.
 PASS  components/MainLoader/MainLoader.spec.tsx
 › 1 snapshot written.
 PASS  components/ui-kit/SidebarLink/SidebarLink.spec.tsx
 › 1 snapshot written.
 PASS  components/Search/Search.spec.tsx
 › 1 snapshot written.
 PASS  components/Overview/Overview.spec.tsx
 › 1 snapshot written.
 PASS  components/Members/Members.spec.tsx
 › 1 snapshot written.
 PASS  components/ConnectWallet/ConnectWallet.spec.tsx
 › 1 snapshot written.

Snapshot Summary
 › 12 snapshots written from 12 test suites.

Test Suites: 12 passed, 12 total
Tests:   	12 passed, 12 total
Snapshots:   12 written, 12 total
Time:    	3.561 s
Done in 7.18s.
```

### Code Quality

I ran `cargo clippy` and got too many warnings and some errors, for example:

```
warning: very complex type used. Consider factoring parts into `type` definitions
   --> node/src/service.rs:91:6
	|
91  |   ) -> Result<
	|  ______^
92  | | 	sc_service::PartialComponents<
93  | |     	FullClient,
94  | |     	FullBackend,
...   |
115 | | 	ServiceError,
116 | | > {
	| |_^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
	= note: `#[warn(clippy::type_complexity)]` on by default

warning: this function has too many arguments (8/7)
   --> node/src/service.rs:620:1
	|
620 | / fn spawn_frontier_tasks(
621 | | 	task_manager: &TaskManager,
622 | | 	client: Arc<FullClient>,
623 | | 	backend: Arc<FullBackend>,
...   |
628 | | 	fee_history_cache_limit: FeeHistoryCacheLimit,
629 | | ) {
	| |__^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
	= note: `#[warn(clippy::too_many_arguments)]` on by default

error: this looks like you are trying to swap `__clap_app` and `clap::Parser`
  --> node/src/cli.rs:46:17
   |
46 | #[derive(Debug, clap::Parser)]
   |             	^^^^^^^^^^^^
   |
   = note: or maybe you should use `std::mem::replace`?
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped
note: the lint level is defined here
  --> node/src/cli.rs:46:17
   |
46 | #[derive(Debug, clap::Parser)]
   |             	^^^^^^^^^^^^
   = note: `#[deny(clippy::almost_swapped)]` implied by `#[deny(clippy::correctness)]`
   = note: this error originates in the derive macro `clap::Parser` (in Nightly builds, run with -Z macro-backtrace for more info)

error: this looks like you are trying to swap `__clap_app` and `clap::Parser`
  --> node/src/cli.rs:46:17
   |
46 | #[derive(Debug, clap::Parser)]
   |             	^^^^^^^^^^^^
   |
   = note: or maybe you should use `std::mem::replace`?
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped
   = note: this error originates in the derive macro `clap::Parser` (in Nightly builds, run with -Z macro-backtrace for more info)

error: this looks like you are trying to swap `__clap_subcommand` and `clap::Subcommand`
  --> node/src/cli.rs:67:17
   |
67 | #[derive(Debug, clap::Subcommand)]
   |             	^^^^^^^^^^^^^^^^
   |
   = note: or maybe you should use `std::mem::replace`?
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped
note: the lint level is defined here
  --> node/src/cli.rs:67:17
   |
67 | #[derive(Debug, clap::Subcommand)]
   |             	^^^^^^^^^^^^^^^^
   = note: this error originates in the derive macro `clap::Subcommand` (in Nightly builds, run with -Z macro-backtrace for more info)

error: this looks like you are trying to swap `__clap_subcommand` and `clap::Subcommand`
  --> node/src/cli.rs:67:17
   |
67 | #[derive(Debug, clap::Subcommand)]
   |             	^^^^^^^^^^^^^^^^
   |
   = note: or maybe you should use `std::mem::replace`?
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#almost_swapped
   = note: this error originates in the derive macro `clap::Subcommand` (in Nightly builds, run with -Z macro-backtrace for more info)

warning: `societal-node` (bin "societal-node") generated 3 warnings
error: could not compile `societal-node` (bin "societal-node") due to 4 previous errors; 3 warnings emitted

```

I ran `yarn lint` in societal-client, and no warnings or error has returned

```
user@localhost:~/Documents/societal/societal-client$ yarn lint
yarn run v1.22.19
$ next lint
info  - Loaded env from /home/user/Documents/societal/societal-client/.env
✔ No ESLint warnings or errors
Done in 12.27s.
```

I ran `cargo tarpaulin` to check the coverage of the tests in societal-grant. Almost all `lib.rs` from pallets have low coverage, excluding dao-assets and dao-membership. The lib.rs from these pallets have more than 70% of coverage. The pallets dao-collective dao-primitives and dao-treasury have more than 50%, from dao 18,18%.
