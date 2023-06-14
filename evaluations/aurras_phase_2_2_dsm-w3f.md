# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_2.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/HugoByte/aurras/blob/master/LICENSE | |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/workflow_macro | Need better instructions how to run and how to test. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/workflow_macro#testing | Need better instructions how to run and how to test. |
| 0d. | Docker File |<ul><li>[x] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/Dockerfile |  |
| 1a. | Workflow Composer: Flow Macro |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/workflow_macro/src/lib.rs | Not fully evaluated yet |
| 1b. | staking and payout features for scs/substrate-api-client |<ul><li>[x] </li></ul>| https://github.com/scs/substrate-api-client/pull/294 |  |

## Evaluation V3

### Docker

This time, I got no errors creating the .wasm using Docker.

```
user@localhost:~/Documents/aurras/aurras/workflow/composer$ cat ../examples/PolkadotPayout.yaml | docker run -i --rm hugobyte/workflow-composer generate > output.wasm
go: downloading github.com/spf13/cobra v1.6.1
go: downloading github.com/spf13/pflag v1.0.5
info: component 'rust-std' for target 'wasm32-wasi' is up to date
user@localhost:~/Documents/aurras/aurras/workflow/composer$ 
```

### Flow Macro

I ran `cargo test --not-fail-fast`, and two tests failed. I noticed the tests for Workflow Macro are passing. 

```
user@localhost:~/Documents/aurras/aurras/workflow$ cargo test --no-fail-fast
    Finished test [unoptimized + debuginfo] target(s) in 0.28s
     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_balance_filter-358e79f9f11d1f75)

running 4 tests
test tests::invoke_trigger_fail - should panic ... ok
test tests::filter_topics_pass ... ok
test tests::invoke_trigger_pass - should panic ... ok
test tests::filter_address_pass ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.72s

     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_balance_notification_registration-b6db6ee18c9dcd21)

running 5 tests
test tests::get_event_sources_invalid_method - should panic ... ok
test tests::get_event_sources_fail_getaddress - should panic ... ok
test tests::get_event_sources_pass - should panic ... ok
test tests::get_event_sources_fail ... ok
test tests::add_address_pass ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.32s

     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_event_receiver-c06d10c7016d288b)

running 2 tests
test tests::parse_event_fail - should panic ... ok
test tests::parse_event_pass ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_event_registration-8c5ff9b017dc1b01)

running 1 test
test tests::register_source_pass ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.48s

     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_push_notification-e704de5e5db4d7ff)

running 3 tests
test tests::send_notification_pass_main ... FAILED
test tests::send_notification_pass ... FAILED
test tests::send_notification_fail_main - should panic ... ok

failures:

---- tests::send_notification_pass_main stdout ----
thread 'tests::send_notification_pass_main' panicked at 'called `Result::unwrap()` on an `Err` value: NotPresent', actions/push-notification/src/lib.rs:102:53

---- tests::send_notification_pass stdout ----
thread 'tests::send_notification_pass' panicked at 'called `Result::unwrap()` on an `Err` value: NotPresent', actions/push-notification/src/lib.rs:75:51
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    tests::send_notification_pass
    tests::send_notification_pass_main

test result: FAILED. 1 passed; 2 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.46s

error: test failed, to rerun pass `-p action-push-notification --lib`
     Running unittests src/lib.rs (/home/user/Documents/aurras/aurras/target/debug/deps/action_substrate_event_processor-ffb9dc955e8c208b)

running 5 tests
test tests::parse_event_data_pass ... ok
test tests::parse_staking_event_data_pass ... ok
test tests::parse_staking_event_data_fail_invalid_category - should panic ... ok
test tests::parse_staking_event_data_method_exception - should panic ... ok
test tests::parse_event_data_fail - should panic ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (/home/user/Documents/aurras/aurras/target/debug/deps/test_util-da42c0ad9c2836a3)

running 6 tests
test tests::flow_macro_tests::test_macro ... ok
test tests::flow_macro_tests::test_flow_macro_add_node ... ok
test wasi_http::test_allowed_domains ... ok
test tests::test_car_market_place ... ok
test tests::test_map_operator ... ok
test tests::test_employee_salary_with_concat_operator ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.16s

error: 1 target failed:
    `-p action-push-notification --lib`
```

Could you provide a way for using the Workflow Macro that doesn't need any programming skill, with instructions on how to run it to check the functionality of the Workflow Macro?

### Staking and Payout Features for scs/substrate-api-client

I noticed you added a note explaining this Derivable and saying to run `cargo test --features staking-xt`, and all tests passed.

```
user@localhost:~/Documents/substrate-api-client$ cargo test --features staking-xt
    Finished test [unoptimized + debuginfo] target(s) in 0.54s
     Running unittests src/lib.rs (target/debug/deps/substrate_api_client-d6ec907760ee1c09)

running 12 tests
test api::tests::test_xt_status_as_u8 ... ok
test api::tests::test_reached_xt_status_for_broadcast ... ok
test api::rpc_api::events::tests::filter_extrinsic_events_works ... ok
test api::rpc_api::events::tests::fetch_events_from_block_works ... ok
test api::tests::test_reached_xt_status_for_finalized ... ok
test api::tests::test_reached_xt_status_for_in_block ... ok
test api::tests::test_transaction_status_is_expected ... ok
test api::tests::test_transaction_status_as_u8 ... ok
test api::tests::test_reached_xt_status_for_ready ... ok
test api::rpc_api::events::tests::retrieve_extrinsic_index_from_block_works ... ok
test api::api_client::tests::api_extrinsic_params_works ... ok
test api::api_client::tests::api_runtime_update_works ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

   Doc-tests substrate-api-client

running 1 test
test src/api/api_client.rs - api::api_client::Api (line 35) - compile ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s
```

## Evaluation V2

### Documentation 

It is missing the testing instructions to test the flow macro.

### Docker 

The command to generate the .wasm file got an error but the command for testing the .yaml file worked fine. I remember testing the .wasm generator before and it was working.
```
user@localhost:~/Documents/aurras/aurras/workflow/composer$ cat ../examples/PolkadotPayout.yaml | docker run -i --rm hugobyte/workflow-composer generate > output.wasm
go: downloading github.com/spf13/cobra v1.6.1
go: downloading github.com/spf13/pflag v1.0.5
info: component 'rust-std' for target 'wasm32-wasi' is up to date
warning: calls to `std::mem::forget` with a value that implements `Copy` does nothing
  --> src/lib.rs:63:5
   |
63 | 	std::mem::forget(ptr);
   | 	^^^^^^^^^^^^^^^^^---^
   |                  	|
   |                  	argument has type `*const u8`
   |
   = note: use `let _ = ...` to ignore the expression or result
   = note: `#[warn(forget_copy)]` on by default

user@localhost:~/Documents/aurras/aurras/workflow/composer$ cat ../examples/CarMarketPlace.yaml | docker run -i --rm hugobyte/workflow-composer test
go: downloading github.com/spf13/cobra v1.6.1
go: downloading github.com/spf13/pflag v1.0.5
Running Test ...
........
----------------------------------------------------------------------
Ran 8 tests in 2.815s

OK
Test Completed
```

### Flow Macro

The instructions to test the flow macro are missing. I assumed the way to test is using `cargo test`. So I ran `cargo test` and got some warnings. All tests passed except one what is skipped.


```
user@localhost:~/Documents/aurras/aurras$ cargo test
warning: variable does not need to be mutable
   --> actions/balance-notification-registration/src/lib.rs:119:9
	|
119 | 	let mut action = Action::new(input);
	|     	----^^^^^^
	|     	|
	|     	help: remove this `mut`
	|
	= note: `#[warn(unused_mut)]` on by default

warning: method `init` is never used
  --> actions/event-registration/src/lib.rs:36:12
   |
36 | 	pub fn init(&mut self, config: &Config) {
   |        	^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: method `connect_db` is never used
  --> actions/event-registration/src/lib.rs:47:8
   |
47 | 	fn connect_db(&self, db_url: &str, db_name: &str) -> Database {
   |    	^^^^^^^^^^

warning: unused imports: `Address`, `Deposit`, `Topic`
  --> actions/balance-filter/src/lib.rs:15:13
   |
15 | use types::{Address, Deposit, Topic};
   |         	^^^^^^^  ^^^^^^^  ^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: method `init` is never used
  --> actions/balance-filter/src/lib.rs:38:12
   |
38 | 	pub fn init(&mut self, config: &Config) {
   |        	^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: method `connect_db` is never used
  --> actions/balance-filter/src/lib.rs:49:8
   |
49 | 	fn connect_db(&self, db_url: &str, db_name: &str) -> Database {
   |    	^^^^^^^^^^

warning: unused import: `std::env`
  --> actions/push-notification/src/lib.rs:10:5
   |
10 | use std::env;
   | 	^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` on by default

warning: `action-balance-notification-registration` (lib test) generated 1 warning (run `cargo fix --lib -p action-balance-notification-registration --tests` to apply 1 suggestion)
warning: `action-event-registration` (lib test) generated 2 warnings
warning: `action-balance-filter` (lib test) generated 3 warnings (run `cargo fix --lib -p action-balance-filter --tests` to apply 1 suggestion)
warning: `action-push-notification` (lib test) generated 1 warning (run `cargo fix --lib -p action-push-notification --tests` to apply 1 suggestion)
	Finished test [unoptimized + debuginfo] target(s) in 0.27s
warning: the following packages contain code that will be rejected by a future version of Rust: nom v5.1.2
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 1`


Running unittests src/lib.rs (target/debug/deps/action_balance_notification_registration-cb24471f806560f9)

running 1 test
test tests::get_event_sources_pass ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


Running unittests src/lib.rs (target/debug/deps/action_event_receiver-67704f28cb380417)

running 1 test
test tests::parse_event_pass ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


Running unittests src/lib.rs (target/debug/deps/action_substrate_event_processor-033dc21c082cd002)

running 2 tests
test tests::parse_staking_event_data_pass ... ok
test tests::parse_event_data_pass ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

Running unittests src/main.rs (target/debug/deps/test_util-fdeb7217560eb665)

running 6 tests
test flow_macro_tests::test_flow_macro_add_node ... ok
test flow_macro_tests::test_macro ... ok
test wasi_http::test_allowed_domains ... ok
test test_car_market_place ... ok
test test_map_operator ... ok
test test_employee_salary_with_concat_operator ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.87s

 	Running unittests src/main.rs (target/debug/deps/workflow_apis-69cfa2c8692de21f)

running 14 tests
test tests::handler_test::test_index_get ... ok
test tests::handler_test::test_index_post ... ok
test tests::openwhisk_test::delete_rule_test_fail ... ok
test tests::openwhisk_test::unatharsed_delete_action_test ... ok
test tests::openwhisk_test::create_rule_test ... ok
test tests::openwhisk_test::unauthorised_delete_rule_test ... ok
test tests::openwhisk_test::get_rule_list_test_fail ... ok
test tests::openwhisk_test::delete_trigger_test ... ok
test tests::openwhisk_test::trigger_test ... ok
test tests::openwhisk_test::delete_action_test ... ok
test tests::openwhisk_test::get_rule_list_test ... ok
test tests::openwhisk_test::get_trigger_list_test ... ok
test tests::openwhisk_test::delete_rule_test ... ok
test tests::openwhisk_test::get_action_list_test ... ok

test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s
```

I tried to check the test coverage with `cargo tarpaulin` and got this error. 

```
Compiling action-substrate-event-processor v0.1.0 (/home/user/Documents/aurras/aurras/actions/substrate-event-processor)
error: could not compile `workflow_apis` due to 2 previous errors
warning: build failed, waiting for other jobs to finish...
May 22 08:27:02.456 ERROR cargo_tarpaulin: Failed to compile tests!
error: linking with `cc` failed: exit status: 1
 |
.
.
.
= note: /usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::req':
      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:180: undefined reference to `req'
      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::header_get':
      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:237: undefined reference to `header_get'
      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::headers_get_all':
      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:267: undefined reference to `headers_get_all'
      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::body_read':
      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:295: undefined reference to `body_read'
      	collect2: error: ld returned 1 exit status
     	 
  = note: some `extern` functions couldn't be found; some native libraries may need to be installed or have their path specified
  = note: use the `-l` flag to specify native libraries to link
  = note: use the `cargo:rustc-link-lib` directive to specify the native libraries to link with Cargo (see https://doc.rust-lang.org/cargo/reference/build-scripts.html#cargorustc-link-libkindname)

Error: "Failed to compile tests!\nerror: linking with `cc` failed: exit status: 1\n  |\n  = note: LC_ALL=\"C\"
.
.
.
/home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::req':\n      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:180: undefined reference to `req'\n      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::header_get':\n      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:237: undefined reference to `header_get'\n      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::headers_get_all':\n      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:267: undefined reference to `headers_get_all'\n      	/usr/bin/ld: /home/user/Documents/aurras/aurras/target/debug/deps/libwasi_experimental_http-38895d6571b1fc77.rlib(wasi_experimental_http-38895d6571b1fc77.wasi_experimental_http.2f4a9342-cgu.9.rcgu.o): in function `wasi_experimental_http::raw::body_read':\n      	/home/user/.cargo/registry/src/github.com-1ecc6299db9ec823/wasi-experimental-http-0.9.0/src/raw.rs:295: undefined reference to `body_read'\n      	collect2: error: ld returned 1 exit status\n      	\n  = note: some `extern` functions couldn't be found; some native libraries may need to be installed or have their path specified\n  = note: use the `-l` flag to specify native libraries to link\n  = note: use the `cargo:rustc-link-lib` directive to specify the native libraries to link with Cargo (see https://doc.rust-lang.org/cargo/reference/build-scripts.html#cargorustc-link-libkindname)\n\n"
```



### Substrate-API-Client

Could you explain bette this derivable and how to test it?

## Evaluation V1

### Documentation, Testing Guide and Docker File

Need better instructions how to run and how to test.

### Code Quality 

The application fail to build with some warnings and errors:

```
user@localhost:~/Documents/aurras$ cargo build --release
   Compiling actix-multipart v0.4.0
warning: unused import: `std::any::Any`
 --> primitives/src/types/execute.rs:2:5
  |
2 | use std::any::Any;
  |     ^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

   Compiling actix-web-httpauth v0.8.0
...
warning: unused import: `Path`
  --> workflow/composer-v2/src/./types/echo.rs:10:17
   |
10 | use std::path::{Path, PathBuf};
   |                 ^^^^

warning: unused import: `crate::types::Result`
 --> workflow/composer-v2/src/./errors/io.rs:3:5
  |
3 | use crate::types::Result;
  |     ^^^^^^^^^^^^^^^^^^^^

error[E0308]: mismatched types
  --> workflow/composer-v2/src/./types/echo.rs:41:13
   |
41 |         for (_, load) in ast.loads() {
   |             ^^^^^^^^^    ----------- this is an iterator with items of type `AstLoad<'_>`
   |             |
   |             expected struct `AstLoad`, found tuple
   |
   = note: expected struct `AstLoad<'_>`
               found tuple `(_, _)`

   Compiling actix_extract_multipart v1.2.0
For more information about this error, try `rustc --explain E0308`.
warning: `composer` (lib) generated 13 warnings
error: could not compile `composer` due to previous error; 13 warnings emitted
warning: build failed, waiting for other jobs to finish...
```
I ran `cargo clippy` in workflow_marco and got these warnings

```
user@localhost:~/Documents/aurras/workflow/workflow_macro$ cargo clippy
warning: redundant clone
  --> workflow/workflow_macro/src/lib.rs:15:29
   |
15 |     let workflow = ast.ident.clone();
   |                             ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> workflow/workflow_macro/src/lib.rs:15:20
   |
15 |     let workflow = ast.ident.clone();
   |                    ^^^^^^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
   = note: `#[warn(clippy::redundant_clone)]` on by default

warning: `workflow_macro` (lib) generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s

```
