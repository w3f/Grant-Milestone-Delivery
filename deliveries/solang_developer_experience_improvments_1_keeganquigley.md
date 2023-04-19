# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/blob/main/LICENSE | Apache-2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://solang.readthedocs.io/en/latest/code_gen_options.html#log-runtime-errors <br> https://solang.readthedocs.io/en/latest/running.html | Great docs. |
| 0c. | Testing | <ul><li>[ ] </li></ul> | https://github.com/hyperledger/solang/blob/main/integration/substrate/runtime_errors.spec.ts <br> https://github.com/hyperledger/solang/blob/main/integration/substrate/release_version.spec.ts <br> https://github.com/hyperledger/solang/blob/main/integration/substrate/debug_buffer_format.spec.ts <br>  https://github.com/hyperledger/solang/blob/main/tests/substrate_tests/errors.rs <br> https://github.com/hyperledger/solang/blob/main/tests/substrate_tests/debug_buffer_format.rs|  |
| 1. | [Use structured data in the debug buffer](https://github.com/hyperledger/solang/issues/1048) | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/pull/1188  | Looks good. |
| 2&3 | [Print execution errors in the debug buffer](https://github.com/hyperledger/solang/issues/1083) &  [Execution errors to be passed with source file and line number](https://github.com/hyperledger/solang/issues/972) | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/pull/1150 | Looks good. |
| 4. | Fix [Bug: Substrate Integration tests fail to compile with -g](https://github.com/hyperledger/solang/issues/1051) | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/pull/1222 | Looks good. | 
| 5. | Add a `release` flag | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/pull/1227 | Looks good. | 

# General Notes

Relatively straight forward maintanance delivery. PRs checked and look good. I was able to install solang and play around with compiling .sol contracts. All unit tests pass except for one:
```rust
test eth_builtins ... ok
test selfdestruct ... ok
test address ... ok
test try_catch ... ok
test ethereum_solidity_tests ... FAILED

failures:

---- ethereum_solidity_tests stdout ----
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Error { depth: 0, inner: Io { path: Some("/Users/keeganquigley/solang/testdata/solidity/test/libsolidity/semanticTests"), err: Os { code: 2, kind: NotFound, message: "No such file or directory" } } }', tests/evm.rs:192:27
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Error { depth: 0, inner: Io { path: Some("/Users/keeganquigley/solang/testdata/solidity/test/libsolidity/syntaxTests"), err: Os { code: 2, kind: NotFound, message: "No such file or directory" } } }', tests/evm.rs:192:27


failures:
    ethereum_solidity_tests

test result: FAILED. 4 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
```
`cargo clippy` returns null.
