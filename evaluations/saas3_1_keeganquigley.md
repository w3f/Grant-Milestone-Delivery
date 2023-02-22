# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SaaS3.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.    | License   | <ul><li>[x] </li></ul> | MIT            |               |
| 0b.    | Documentation       | <ul><li>[ ] </li></ul> | https://docs.saas3.io/dapi/get-started |    |
| 0c.    | Testing Guide      | <ul><li>[ ] </li></ul> | https://github.com/SaaS3-Foundation/dRuntime-fat#test |  |
| 0d.    | Article/Tutorial        | <ul><li>[ ] </li></ul> | https://docs.saas3.io/demo-case
| 1.     | dRuntime-fat | <ul><li>[ ] </li></ul> | https://github.com/SaaS3-Foundation/dRuntime-fat |       |
| 1a.    | Functions | <ul><li>[ ] </li></ul> | [Link](https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L418) [Link 2](https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L100)  |
| 1b.    | Structs | <ul><li>[ ] </li></ul> | [Link](https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L45)
| 1c.    | Storage | <ul><li>[ ] </li></ul> | [Link](https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L34)

# General Notes

1. Both `cargo clippy` and `cargo +nightly test` commands generate this error. Do I need to get an ABI file from somewhere?

```rust
error: failed to get `abi` as a dependency of package `druntime v2.0.9 (/Users/keeganquigley/dRuntime-fat)`

Caused by:
  failed to load source for dependency `abi`

Caused by:
  Unable to update /Users/keeganquigley/abi

Caused by:
  failed to read `/Users/keeganquigley/abi/Cargo.toml`

Caused by:
  No such file or directory (os error 2)
```
2. Running `cd src/js && yarn run build` results in this:

```js
yarn run v1.22.15
warning ../../../package.json: No license field
$ webpack
/bin/sh: webpack: command not found
error Command failed with exit code 127.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
3. Running `cargo +nightly contract build --release` displays this:

ERROR: Error invoking `cargo metadata`

# Smart Contract

Was able to upload contract to POC-5 testnet and play around with it.

![save](https://user-images.githubusercontent.com/35080151/220463276-349d9baf-d6f8-4b0f-a837-ec0005fe11de.png)

It would be nice if you could include some docs for how to use the contract. 
- For example, what `url` and `path` am I entering for the `test_run_js`?
- Do I still need to configure the oracle to test it?
- What is the `js_engine_code_hash` field for?
- Where can I get the contract address for `anchor_contract_addr`?
