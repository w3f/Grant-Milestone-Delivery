# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/patron.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/Brushfam/patron-backend/blob/fcaefc0df32a58a58aa056ef5952223829f19ee7/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [CLI docs](https://github.com/Brushfam/patron-backend/blob/fcaefc0df32a58a58aa056ef5952223829f19ee7/docs/cli.md), [self-hosting instructions](https://github.com/Brushfam/patron-backend/blob/fcaefc0df32a58a58aa056ef5952223829f19ee7/docs/self-hosted.md) | See [documentation feedback](#documentation-feedback). |
| 0c. | Testing guidelines | <ul><li>[ ] </li></ul> | [Instructions in Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/871/files#diff-c6776ce4032fba925481b56ba22f31870e3afd145b38a80d8854ab970066986bR25-R167) | See [testing guidelines feedback](#testing-guidelines-feedback). |
| 0d. | Docker |<ul><li>[ ] </li></ul> | [containers.rs](https://github.com/Brushfam/patron-backend/blob/fcaefc0df32a58a58aa056ef5952223829f19ee7/crates/builder/src/process/container.rs) | Please add install instructions for nix. |
| 0e. | Article | <ul><li>[ ] </li></ul> | [Medium Article](https://medium.com/brushfam/patron-is-your-one-stop-smart-contract-manager-for-polkadot-ecosystem-b1f89a48ba40) | Rather poorly written. I assume there hasn't been any proof-reading process. Given the price tag of this grant I think it'd be fair to expect a higher quality here. |
| 1a. | Backend storage | <ul><li>[ ] </li></ul> | [db crate](https://github.com/Brushfam/patron-backend/tree/fcaefc0df32a58a58aa056ef5952223829f19ee7/crates/db) | See [backend storage feedback](#backend-storage-feedback). |
| 1b. | Sync server | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: A separate server that catches new contract deployments and events will be implemented. |
| 1c. | Smart contract builder | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: Immutable, pre-configured smart contract builders are to be implemented for verified smart contract deployment. |
| 2a. | Web UI | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: A simple web UI will be implemented to expose Patron functionality. |
| 2b. | Detailed contract information | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: Frontend to display detailed contract info (as well as verification status) will be implemented. |
| 2c. | User authentication | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: We will implement a web3-oriented authentication solution |
| 3a. | Developer CLI utility | <ul><li>[ ] </li></ul> | (will review after 0b., 0c., 0d. 1b. are fixed) | Spec: A deployment workflow unified, developer-oriented CLI utility will be implemented. |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Documentation Feedback

The spec in the proposal reads:

> We will provide API documentation for contributors to get along with the codebase, as well as a detailed self-hosting instructions for users to create their own nodes.

However, I couldn't find an "API documentation for contributors".
Also, the code has almost no inline comments, which makes it harder for contributers to understand the code. For reference you can have a look at some of parity pallets, e.g. the [assets pallet](https://github.com/paritytech/substrate/blob/e434882d5dbf3f3f6085cb7f1d017dbc4ac11f0a/frame/assets/src/lib.rs) for some inspiration on inline-comments. In a second step, you could use `rustdoc` to generate the documentation based on the inline comments you provided.

### Testing Guidelines Feedback

- tests currently fail:

```
patron-backend % cargo test
    Finished test [unoptimized + debuginfo] target(s) in 0.89s
     Running unittests src/main.rs (target/debug/deps/builder-28b73d84909f3efc)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/common-fbbf3295f160301d)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/db-ed64b4571b071d85)

running 1 test
test tests::exists ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

     Running unittests src/main.rs (target/debug/deps/event_client-752971dcc25eef01)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/migration-ebad0d10a57af4a4)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/migration-6c190ff85e487d47)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/patron-3e45bbdf3e5868ec)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/server-b6f364596d37e1a2)

running 37 tests
test handlers::auth::login::tests::successful ... FAILED
test handlers::auth::register::tests::register ... FAILED
test handlers::auth::login::tests::invalid_signature ... FAILED
test handlers::auth::login::tests::missing_account ... FAILED
test handlers::auth::login::tests::cli_token_repetition ... FAILED
test handlers::auth::login::tests::invalid_account ... FAILED
test handlers::auth::login::tests::exchange ... FAILED
test handlers::auth::login::tests::unmatching_signature ... FAILED
test handlers::build_sessions::details::tests::successful ... FAILED
test handlers::build_sessions::create::tests::invalid_source_code_id ... FAILED
test handlers::build_sessions::latest::tests::successful ... FAILED
test handlers::build_sessions::latest::tests::source_code_without_build_sessions ... FAILED
test handlers::build_sessions::create::tests::invalid_version ... FAILED
test handlers::build_sessions::details::tests::unknown ... FAILED
test handlers::build_sessions::list::tests::successful ... FAILED
test handlers::build_sessions::create::tests::create ... FAILED
test handlers::build_sessions::status::tests::unknown ... FAILED
test handlers::build_sessions::logs::tests::successful_by_code_hash ... FAILED
test handlers::build_sessions::logs::tests::unknown ... FAILED
test handlers::build_sessions::metadata::tests::unknown ... FAILED
test handlers::build_sessions::metadata::tests::successful ... FAILED
test handlers::build_sessions::logs::tests::position ... FAILED
test handlers::build_sessions::logs::tests::successful_by_id ... FAILED
test handlers::build_sessions::status::tests::successful ... FAILED
test handlers::build_sessions::wasm::tests::successful ... FAILED
test handlers::contracts::details::tests::unknown ... FAILED
test handlers::build_sessions::wasm::tests::unknown ... FAILED
test handlers::contracts::events::tests::successful ... FAILED
test handlers::contracts::events::tests::unknown ... FAILED
test handlers::contracts::details::tests::successful ... FAILED
test handlers::files::details::tests::single_file ... FAILED
test handlers::files::details::tests::file_list ... FAILED
test handlers::files::upload::tests::empty_request ... FAILED
test handlers::keys::delete::tests::list_and_delete ... FAILED
test handlers::files::details::tests::unknown_file ... FAILED
test handlers::keys::verify::tests::list_and_verify ... FAILED
test handlers::files::upload::tests::upload_and_seal ... FAILED

failures:

---- handlers::auth::login::tests::successful stdout ----
thread 'handlers::auth::login::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:160:79
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- handlers::auth::register::tests::register stdout ----
thread 'handlers::auth::register::tests::register' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/register.rs:60:79

---- handlers::auth::login::tests::invalid_signature stdout ----
thread 'handlers::auth::login::tests::invalid_signature' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:214:79

---- handlers::auth::login::tests::missing_account stdout ----
thread 'handlers::auth::login::tests::missing_account' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:260:79

---- handlers::auth::login::tests::cli_token_repetition stdout ----
thread 'handlers::auth::login::tests::cli_token_repetition' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:334:82

---- handlers::auth::login::tests::invalid_account stdout ----
thread 'handlers::auth::login::tests::invalid_account' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:190:79

---- handlers::auth::login::tests::exchange stdout ----
thread 'handlers::auth::login::tests::exchange' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:286:82

---- handlers::auth::login::tests::unmatching_signature stdout ----
thread 'handlers::auth::login::tests::unmatching_signature' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/auth/login.rs:238:79

---- handlers::build_sessions::details::tests::successful stdout ----
thread 'handlers::build_sessions::details::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/details.rs:98:79

---- handlers::build_sessions::create::tests::invalid_source_code_id stdout ----
thread 'handlers::build_sessions::create::tests::invalid_source_code_id' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/create.rs:211:79

---- handlers::build_sessions::latest::tests::successful stdout ----
thread 'handlers::build_sessions::latest::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/latest.rs:128:79

---- handlers::build_sessions::latest::tests::source_code_without_build_sessions stdout ----
thread 'handlers::build_sessions::latest::tests::source_code_without_build_sessions' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/latest.rs:150:79

---- handlers::build_sessions::create::tests::invalid_version stdout ----
thread 'handlers::build_sessions::create::tests::invalid_version' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/create.rs:185:79

---- handlers::build_sessions::details::tests::unknown stdout ----
thread 'handlers::build_sessions::details::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/details.rs:122:79

---- handlers::build_sessions::list::tests::successful stdout ----
thread 'handlers::build_sessions::list::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/list.rs:161:79

---- handlers::build_sessions::create::tests::create stdout ----
thread 'handlers::build_sessions::create::tests::create' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/create.rs:157:79

---- handlers::build_sessions::status::tests::unknown stdout ----
thread 'handlers::build_sessions::status::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/status.rs:122:79

---- handlers::build_sessions::logs::tests::successful_by_code_hash stdout ----
thread 'handlers::build_sessions::logs::tests::successful_by_code_hash' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/logs.rs:205:79

---- handlers::build_sessions::logs::tests::unknown stdout ----
thread 'handlers::build_sessions::logs::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/logs.rs:268:79

---- handlers::build_sessions::metadata::tests::unknown stdout ----
thread 'handlers::build_sessions::metadata::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/metadata.rs:129:79

---- handlers::build_sessions::metadata::tests::successful stdout ----
thread 'handlers::build_sessions::metadata::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/metadata.rs:109:79

---- handlers::build_sessions::logs::tests::position stdout ----
thread 'handlers::build_sessions::logs::tests::position' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/logs.rs:240:79

---- handlers::build_sessions::logs::tests::successful_by_id stdout ----
thread 'handlers::build_sessions::logs::tests::successful_by_id' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/logs.rs:170:79

---- handlers::build_sessions::status::tests::successful stdout ----
thread 'handlers::build_sessions::status::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/status.rs:101:79

---- handlers::build_sessions::wasm::tests::successful stdout ----
thread 'handlers::build_sessions::wasm::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/wasm.rs:68:79

---- handlers::contracts::details::tests::unknown stdout ----
thread 'handlers::contracts::details::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/contracts/details.rs:143:79

---- handlers::build_sessions::wasm::tests::unknown stdout ----
thread 'handlers::build_sessions::wasm::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/build_sessions/wasm.rs:86:79

---- handlers::contracts::events::tests::successful stdout ----
thread 'handlers::contracts::events::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/contracts/events.rs:124:79

---- handlers::contracts::events::tests::unknown stdout ----
thread 'handlers::contracts::events::tests::unknown' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/contracts/events.rs:147:79

---- handlers::contracts::details::tests::successful stdout ----
thread 'handlers::contracts::details::tests::successful' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/contracts/details.rs:122:79

---- handlers::files::details::tests::single_file stdout ----
thread 'handlers::files::details::tests::single_file' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/files/details.rs:118:79

---- handlers::files::details::tests::file_list stdout ----
thread 'handlers::files::details::tests::file_list' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/files/details.rs:160:79

---- handlers::files::upload::tests::empty_request stdout ----
thread 'handlers::files::upload::tests::empty_request' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/files/upload.rs:216:79

---- handlers::keys::delete::tests::list_and_delete stdout ----
thread 'handlers::keys::delete::tests::list_and_delete' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/keys/delete.rs:98:82

---- handlers::files::details::tests::unknown_file stdout ----
thread 'handlers::files::details::tests::unknown_file' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/files/details.rs:140:79

---- handlers::keys::verify::tests::list_and_verify stdout ----
thread 'handlers::keys::verify::tests::list_and_verify' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/keys/verify.rs:122:82

---- handlers::files::upload::tests::upload_and_seal stdout ----
thread 'handlers::files::upload::tests::upload_and_seal' panicked at 'called `Result::unwrap()` on an `Err` value: Error { tag: Tag::Default, profile: Some(Profile(Uncased { string: "default" })), metadata: None, path: [], kind: MissingField("database"), prev: None }', crates/server/src/handlers/files/upload.rs:148:82


failures:
    handlers::auth::login::tests::cli_token_repetition
    handlers::auth::login::tests::exchange
    handlers::auth::login::tests::invalid_account
    handlers::auth::login::tests::invalid_signature
    handlers::auth::login::tests::missing_account
    handlers::auth::login::tests::successful
    handlers::auth::login::tests::unmatching_signature
    handlers::auth::register::tests::register
    handlers::build_sessions::create::tests::create
    handlers::build_sessions::create::tests::invalid_source_code_id
    handlers::build_sessions::create::tests::invalid_version
    handlers::build_sessions::details::tests::successful
    handlers::build_sessions::details::tests::unknown
    handlers::build_sessions::latest::tests::source_code_without_build_sessions
    handlers::build_sessions::latest::tests::successful
    handlers::build_sessions::list::tests::successful
    handlers::build_sessions::logs::tests::position
    handlers::build_sessions::logs::tests::successful_by_code_hash
    handlers::build_sessions::logs::tests::successful_by_id
    handlers::build_sessions::logs::tests::unknown
    handlers::build_sessions::metadata::tests::successful
    handlers::build_sessions::metadata::tests::unknown
    handlers::build_sessions::status::tests::successful
    handlers::build_sessions::status::tests::unknown
    handlers::build_sessions::wasm::tests::successful
    handlers::build_sessions::wasm::tests::unknown
    handlers::contracts::details::tests::successful
    handlers::contracts::details::tests::unknown
    handlers::contracts::events::tests::successful
    handlers::contracts::events::tests::unknown
    handlers::files::details::tests::file_list
    handlers::files::details::tests::single_file
    handlers::files::details::tests::unknown_file
    handlers::files::upload::tests::empty_request
    handlers::files::upload::tests::upload_and_seal
    handlers::keys::delete::tests::list_and_delete
    handlers::keys::verify::tests::list_and_verify

test result: FAILED. 0 passed; 37 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

error: test failed, to rerun pass `-p server --bin server`
```


### Backend Storage Feedback

- regarding running the DB, please add instructions on how to install and configure it so it matches your example *Config.toml* file mentioned in the [CLI docs](https://github.com/Brushfam/patron-backend/blob/fcaefc0df32a58a58aa056ef5952223829f19ee7/docs/self-hosted.md#configuration)
- the build passes:

```bash
% cargo build --release

   Compiling proc-macro2 v1.0.59
   Compiling quote v1.0.28
   
   (...)

   Compiling tar v0.4.38
   Compiling migration v0.1.0 (/Users/xxx/repos/patron-backend/crates/migration)
   Compiling validator v0.16.0
   Compiling ink_metadata v4.2.0
   Compiling serde_plain v1.0.1
   Compiling which v4.4.0
   Compiling zip v0.6.6
   Compiling axum-derive-error v0.1.0
   Compiling home v0.5.5
   Compiling patron v0.1.0 (/Users/xxx/repos/patron-backend/crates/patron)
   Compiling event_client v0.1.0 (/Users/xxx/repos/patron-backend/crates/event_client)
   Compiling server v0.1.0 (/Users/xxx/repos/patron-backend/crates/server)
   Compiling builder v0.1.0 (/Users/xxx/repos/patron-backend/crates/builder)
    Finished release [optimized] target(s) in 5m 15s
```
