# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_Playground.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable              | Accepted | Link                                                                                                                                                    | Notes                                                                                                                                                                                                                                                                                                                                                                |
| ------ | ------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.     | License | <ul><li>[x] </li> |
| 0b.     | Docs | <ul><li>[x] </li> | | Okay
| 0c.     | Testing Guide | <ul><li>[x] </li> | | Okay
| 0d.     | Article | <ul><li>[x] </li> | | - 
| 0e.     | Solang Playground Client | <ul><li>[x] </li> | | Works as expected.

# General Notes

Grantee resolved all issues. Builds and runs successfully. Web editor works w/ debugging:

![web editor works](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/58844d72-76ea-4197-981a-c26a33ccc50d)

```rust
ubuntu@ip-172-31-26-210:~/solang-playground$ cargo make run
[cargo-make] INFO - cargo make 0.37.9
[cargo-make] INFO - Calling cargo metadata to extract project info
[cargo-make] INFO - Cargo metadata done
[cargo-make] INFO - Build File: Makefile.toml
[cargo-make] INFO - Task: run
[cargo-make] INFO - Profile: development
[cargo-make] INFO - Running Task: run
[cargo-make] INFO - Build Done in 0.62 seconds.
```

## Tests

Unit tests now passing for all crates. Some errors still occurring in `Solang` dir but these are related to the tower-lsp deps. Okay docs but inline code comments could be better.

<details>
  <summary>Output</summary>

```rust
   Compiling tower-lsp v0.20.0
error[E0405]: cannot find trait `Decoder` in this scope
   --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/codec.rs:165:27
    |
165 | impl<T: DeserializeOwned> Decoder for LanguageServerCodec<T> {
    |                           ^^^^^^^ not found in this scope

error[E0405]: cannot find trait `AsyncRead` in this scope
  --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/transport.rs:61:8
   |
61 |     I: AsyncRead + Unpin,
   |        ^^^^^^^^^ not found in this scope
   |
help: consider importing this trait
   |
13 + use futures::AsyncRead;
   |

error[E0405]: cannot find trait `AsyncWrite` in this scope
  --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/transport.rs:62:8
   |
62 |     O: AsyncWrite,
   |        ^^^^^^^^^^ not found in this scope
   |
help: consider importing this trait
   |
13 + use futures::AsyncWrite;
   |

error[E0433]: failed to resolve: use of undeclared type `FramedRead`
   --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/transport.rs:113:32
    |
113 |         let mut framed_stdin = FramedRead::new(self.stdin, LanguageServerCodec::default());
    |                                ^^^^^^^^^^ use of undeclared type `FramedRead`

error[E0433]: failed to resolve: use of undeclared type `FramedWrite`
   --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/transport.rs:114:29
    |
114 |         let framed_stdout = FramedWrite::new(self.stdout, LanguageServerCodec::default());
    |                             ^^^^^^^^^^^ use of undeclared type `FramedWrite`

error[E0425]: cannot find function `to_jsonrpc_error` in this scope
   --> /home/ubuntu/.cargo/registry/src/index.crates.io-6f17d22bba15001f/tower-lsp-0.20.0/src/transport.rs:152:66
    |
152 |                         let res = Response::from_error(Id::Null, to_jsonrpc_error(err));
    |                                                                  ^^^^^^^^^^^^^^^^ not found in this scope

Some errors have detailed explanations: E0405, E0425, E0433.
For more information about an error, try `rustc --explain E0405`.
error: could not compile `tower-lsp` (lib) due to 6 previous errors
```
</details>

~~Compiles successfully but with a lot of warnings:~~

<details>
  <summary>Output:</summary>

```rust
warning: use of deprecated method `indexmap::IndexMap::<K, V, S>::remove`: `remove` disrupts the map order -- use `swap_remove` or `shift_remove` for explicit behavior.
  --> crates/solang/src/codegen/array_boundary.rs:64:41
   |
64 |                 cfg.array_lengths_temps.remove(&pos);
   |                                         ^^^^^^
   |
   = note: `#[warn(deprecated)]` on by default

warning: use of deprecated method `indexmap::IndexMap::<K, V, S>::remove`: `remove` disrupts the map order -- use `swap_remove` or `shift_remove` for explicit behavior.
   --> crates/solang/src/codegen/reaching_definitions.rs:196:22
    |
196 |                 vars.remove(var_no);
    |                      ^^^^^^

warning: use of deprecated method `indexmap::IndexMap::<K, V, S>::remove`: `remove` disrupts the map order -- use `swap_remove` or `shift_remove` for explicit behavior.
   --> crates/solang/src/codegen/vector_to_slice.rs:137:22
    |
137 |                 vars.remove(var_no);
    |                      ^^^^^^

warning: unused variable: `bytes`
   --> crates/solang/src/codegen/encoding/scale_encoding.rs:615:25
    |
615 |                     let bytes = value.to_bytes_be().1;
    |                         ^^^^^ help: if this is intentional, prefix it with an underscore: `_bytes`
    |
    = note: `#[warn(unused_variables)]` on by default

warning: unused variable: `loc`
  --> crates/solang/src/codegen/expression.rs:53:13
   |
53 |             loc,
   |             ^^^ help: try ignoring the field: `loc: _`

warning: unused variable: `contract_no`
  --> crates/solang/src/codegen/expression.rs:54:13
   |
54 |             contract_no,
   |             ^^^^^^^^^^^ help: try ignoring the field: `contract_no: _`

warning: unused variable: `runtime`
  --> crates/solang/src/codegen/expression.rs:55:13
   |
55 |             runtime,
   |             ^^^^^^^ help: try ignoring the field: `runtime: _`

warning: unused variable: `path`
    --> crates/solang/src/languageserver.rs:2142:16
     |
2142 |             Ok(path) => {
     |                ^^^^ help: if this is intentional, prefix it with an underscore: `_path`

warning: unused variable: `path`
    --> crates/solang/src/languageserver.rs:2188:16
     |
2188 |             Ok(path) => {
     |                ^^^^ help: if this is intentional, prefix it with an underscore: `_path`

warning: unused variable: `path`
    --> crates/solang/src/languageserver.rs:2210:23
     |
2210 |             if let Ok(path) = self.url_to_file_path(&uri) {
     |                       ^^^^ help: if this is intentional, prefix it with an underscore: `_path`

warning: unused variable: `path`
    --> crates/solang/src/languageserver.rs:2224:19
     |
2224 |         if let Ok(path) = self.url_to_file_path(&uri) {
     |                   ^^^^ help: if this is intentional, prefix it with an underscore: `_path`

warning: unused variable: `path`
    --> crates/solang/src/languageserver.rs:2405:19
     |
2405 |         if let Ok(path) = self.url_to_file_path(&uri) {
     |                   ^^^^ help: if this is intentional, prefix it with an underscore: `_path`

warning: unused variable: `p`
    --> crates/solang/src/languageserver.rs:2745:20
     |
2745 |             .map(|(p, cache)| {
     |                    ^ help: if this is intentional, prefix it with an underscore: `_p`

warning: function `update_file_contents` is never used
    --> crates/solang/src/languageserver.rs:2887:4
     |
2887 | fn update_file_contents(
     |    ^^^^^^^^^^^^^^^^^^^^
     |
     = note: `#[warn(dead_code)]` on by default

warning: `solang` (lib) generated 14 warnings (run `cargo fix --lib -p solang` to apply 10 suggestions)
   Compiling demo-lsp-browser v0.0.0 (/home/ubuntu/Solang-Playground/crates/browser)
    Finished release [optimized] target(s) in 2m 13s
[cargo-make] INFO - Running Task: build-app
[cargo-make] INFO - Build Done in 134.63 seconds.
```
</details>

There is a failing unit test in https://github.com/salaheldinsoliman/solang-playground:

```rust
warning: `solang` (lib) generated 14 warnings (run `cargo fix --lib -p solang` to apply 10 suggestions)
   Compiling demo-lsp-browser v0.0.0 (/home/ubuntu/Solang-Playground/crates/browser)
    Finished test [unoptimized + debuginfo] target(s) in 1m 46s
     Running unittests src/lib.rs (target/wasm32-unknown-unknown/debug/deps/demo_lsp_browser-333d52d60f33eb46.wasm)
error: test failed, to rerun pass `--lib`

Caused by:
  could not execute process `/home/ubuntu/Solang-Playground/target/wasm32-unknown-unknown/debug/deps/demo_lsp_browser-333d52d60f33eb46.wasm` (never executed)

Caused by:
  Exec format error (os error 8)
```
The same test fails in https://github.com/salaheldinsoliman/solang-playground-lab
