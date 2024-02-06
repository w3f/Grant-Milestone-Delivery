# General Notes

## Tests

Compiles successfully but with a lot of warnings:

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

