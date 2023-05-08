# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License| <ul><li>[ ] </li></ul>| [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE) and [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT).| Two licenses |
| **0b.** | Documentation| <ul><li>[x] </li></ul>| [README](https://github.com/ink-analyzer/ink-analyzer#readme) on GitHub, rustdoc documentation on docs.rs for [semantic analyzer crate (ink-analyzer)](https://docs.rs/ink-analyzer/latest/ink_analyzer/), [IR crate (ink-analyzer-ir)](https://docs.rs/ink-analyzer-ir/latest/ink_analyzer_ir/), [proc-macro crate (ink-analyzer-macro)](https://docs.rs/ink-analyzer-macro/latest/ink_analyzer_macro/) and extensive inline source documentation in all 3 crates. |  |
| **0c.** | Testing and Testing Guide| <ul><li>[x] </li></ul>| [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).| |
| **0d.** | Docker| <ul><li>[x] </li></ul>| [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).||
| 1.      | Semantic Analyzer: Rust library crate: Diagnostic errors | <ul><li>[ ] </li></ul>| [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [Semantic analyzer crate (ink-analyzer)](https://crates.io/crates/ink-analyzer), [IR crate (ink-analyzer-ir)](https://crates.io/crates/ink-analyzer-ir) and [proc-macro crate (ink-analyzer-macro)](https://crates.io/crates/ink-analyzer-macro).| Not fully evaluated yet |

## Evaluation V1

### License

The repository has 2 Licenses, Apache 2.0 and MIT. Please choose only one License.

### Documentation

The documentation is ok.

### Testing

All tests passed running with and without docker.

```
running 126 tests
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
...
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 126 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 5.91s

 	Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-eebe3c804626f4c7)

running 32 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
test chain_extension::tests::cast_works ... ok
test storage::tests::cast_works ... ok
test event::tests::cast_works ... ok
test selector::tests::cast_arg_works ... ok
test topic::tests::cast_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test trait_definition::tests::cast_works ... ok
test file::tests::parse_works ... ok
test utils::tests::ink_attrs_closest_ancestors_works ... ok
test utils::tests::ink_attrs_ancestors_works ... ok
test storage_item::tests::cast_works ... ok
test utils::tests::ink_arg_by_kind_works ... ok
test utils::tests::ink_args_works ... ok
test attrs::utils::tests::sort_ink_args_works ... ok
test utils::tests::ink_attrs_in_scope_works ... ok
test extension::tests::cast_works ... ok
test utils::tests::ink_attrs_descendants_works ... ok
test utils::tests::ink_attrs_closest_descendants_works ... ok
test utils::tests::parent_ast_item_works ... ok
test utils::tests::ink_attrs_works ... ok
test attrs::utils::tests::parse_ink_args_works ... ok
test constructor::tests::cast_works ... ok
test message::tests::cast_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test ink_impl::tests::cast_works ... ok
test utils::tests::ink_impl_closest_descendants_works ... ok
test utils::tests::ink_callable_closest_descendants_works ... ok
test selector::tests::compose_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 32 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

 	Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-9567b258339e23dc)

running 13 tests
test utils::tests::contains_field_works ... ok
test utils::tests::find_attribute_by_path_works ... ok
test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
test from_ast::tests::struct_without_ast_field_fails ... ok
test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
test utils::tests::parse_struct_fields_works ... ok
test from_syntax::tests::struct_with_ink_attr_field_works ... ok
test utils::tests::find_field_works ... ok
test from_syntax::tests::struct_with_ast_field_works ... ok
test from_ast::tests::struct_with_ast_field_works ... ok
test from_syntax::tests::struct_with_syntax_field_works ... ok
test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::optional_fields_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.16s

   Doc-tests ink-analyzer-ir

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.16s

   Doc-tests ink-analyzer-macro

running 4 tests
test src/lib.rs - from_ast_derive (line 35) ... ok
test src/lib.rs - from_syntax_derive (line 100) ... ok
test src/lib.rs - from_ink_attribute_derive (line 70) ... ok
test src/lib.rs - (line 6) ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.22s
```

I checked the coverage using `cargo tarpaulin`, and the tests have good coverage:

```
May 05 08:33:40.217  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| crates/analyzer/src/analysis/diagnostics/chain_extension.rs: 66/69
|| crates/analyzer/src/analysis/diagnostics/constructor.rs: 15/18
|| crates/analyzer/src/analysis/diagnostics/contract.rs: 102/109
|| crates/analyzer/src/analysis/diagnostics/event.rs: 30/33
|| crates/analyzer/src/analysis/diagnostics/extension.rs: 8/9
|| crates/analyzer/src/analysis/diagnostics/file.rs: 5/19
|| crates/analyzer/src/analysis/diagnostics/ink_impl.rs: 83/90
|| crates/analyzer/src/analysis/diagnostics/ink_test.rs: 4/5
|| crates/analyzer/src/analysis/diagnostics/message.rs: 29/31
|| crates/analyzer/src/analysis/diagnostics/storage.rs: 5/7
|| crates/analyzer/src/analysis/diagnostics/storage_item.rs: 9/10
|| crates/analyzer/src/analysis/diagnostics/topic.rs: 10/11
|| crates/analyzer/src/analysis/diagnostics/trait_definition.rs: 37/39
|| crates/analyzer/src/analysis/diagnostics/utils.rs: 350/393
|| crates/analyzer/src/analysis/diagnostics.rs: 0/3
|| crates/analyzer/src/analysis.rs: 0/4
|| crates/ir/src/attrs/arg.rs: 38/49
|| crates/ir/src/attrs/meta/name.rs: 7/7
|| crates/ir/src/attrs/meta/option.rs: 11/34
|| crates/ir/src/attrs/meta/separator.rs: 5/5
|| crates/ir/src/attrs/meta/value.rs: 53/59
|| crates/ir/src/attrs/meta.rs: 30/37
|| crates/ir/src/attrs/utils.rs: 64/67
|| crates/ir/src/attrs.rs: 57/62
|| crates/ir/src/chain_extension.rs: 12/13
|| crates/ir/src/constructor.rs: 2/2
|| crates/ir/src/contract.rs: 18/18
|| crates/ir/src/event.rs: 6/6
|| crates/ir/src/extension.rs: 8/8
|| crates/ir/src/file.rs: 18/18
|| crates/ir/src/ink_impl.rs: 24/24
|| crates/ir/src/ink_test.rs: 2/2
|| crates/ir/src/message.rs: 2/2
|| crates/ir/src/selector.rs: 54/65
|| crates/ir/src/storage.rs: 2/2
|| crates/ir/src/storage_item.rs: 4/4
|| crates/ir/src/topic.rs: 2/2
|| crates/ir/src/trait_definition.rs: 8/8
|| crates/ir/src/traits.rs: 26/38
|| crates/ir/src/utils.rs: 80/91
|| crates/macro/src/from_ast.rs: 11/12
|| crates/macro/src/from_ink_attribute.rs: 52/57
|| crates/macro/src/from_syntax.rs: 20/20
|| crates/macro/src/lib.rs: 0/5
|| crates/macro/src/utils.rs: 15/21
|| 
87.15% coverage, 1384/1588 lines covered
```

Could you provide some examples with an Ink! contract for performing system tests to check the Derivable 1 and the features of the crates?

### Code Quality

I ran `cargo clippy` and got no warnings:

```
user@localhost:~/Documentos/ink/ink-analyzer$ cargo clippy
   Compiling ink-analyzer-macro v0.5.0 (/home/user/Documentos/ink/ink-analyzer/crates/macro)
	Checking ink-analyzer-ir v0.5.0 (/home/user/Documentos/ink/ink-analyzer/crates/ir)
	Checking ink-analyzer v0.5.0 (/home/user/Documentos/ink/ink-analyzer/crates/analyzer)
	Finished dev [unoptimized + debuginfo] target(s) in 2.28s
```
