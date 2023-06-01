# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License |<ul><li>[x] </li></ul>| [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE).|   |
| **0b.** | Documentation |<ul><li>[x] </li></ul>| [Project README](https://github.com/ink-analyzer/ink-analyzer#readme) and [semantic analyzer (ink-analyzer) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer#readme) on GitHub, [semantic analyzer crate (ink-analyzer) rustdoc](https://docs.rs/ink-analyzer/latest/ink_analyzer/) documentation on docs.rs and extensive inline source documentation. |  Not fully evaluated yet |
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).|  |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).|
| 1.      | Semantic Analyzer: Rust crate update: Code completion suggestions |<ul><li>[x] </li></ul>| [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [completions public interface](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis.rs#L42-L45) and [completions module](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer/src/analysis/completions.rs).                                                           |  |
| 2.      | Semantic Analyzer: Rust crate update: Code/intent actions |<ul><li>[x] </li></ul>| [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [code/intent actions public interface](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis.rs#L47-L50) and [code/intent actions module](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer/src/analysis/actions.rs).                                               |   |
| 3.      | Semantic Analyzer: Rust crate update: Hover content   |<ul><li>[x] </li></ul>| [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [hover content public interface](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis.rs#L52-L55) and [hover content module](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer/src/analysis/hover.rs).|                                                                                                                                                       
## Evaluation V2

The grantee provided more [explanations about the integration/system tests](https://github.com/w3f/Grant-Milestone-Delivery/pull/873#issuecomment-1569335266). They are adequate to check the current milestone delivery since are using complete contracts, performing some modifications on it and checking the expected results of the features.

## Evaluation V1

### Unit Test

All tests passed.

```
user@localhost:~/Documents/ink/ink-analyzer$ cargo test
	Finished test [unoptimized + debuginfo] target(s) in 0.03s
 	Running unittests src/lib.rs (target/debug/deps/ink_analyzer-08b9db526fc0fcba)

running 132 tests
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
...
test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 132 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.39s

 	Running tests/actions.rs (target/debug/deps/actions-87ccbb830e983b66)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.18s

 	Running tests/completions.rs (target/debug/deps/completions-4364246353800349)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.11s

 	Running tests/diagnostics.rs (target/debug/deps/diagnostics-3f082fd47f67edbc)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.31s

 	Running tests/hover.rs (target/debug/deps/hover-5dfddcd762c09d02)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.28s

 	Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-4b77cbb2b4bfe1e6)

running 36 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
...
test ink_impl::tests::cast_works ... ok
test utils::tests::ink_impl_closest_descendants_works ... ok
test utils::tests::ink_callable_closest_descendants_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

 	Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-5c2121d194ffa54f)

running 13 tests
test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
test utils::tests::find_attribute_by_path_works ... ok
test utils::tests::parse_struct_fields_works ... ok
test utils::tests::contains_field_works ... ok
test from_ast::tests::struct_without_ast_field_fails ... ok
test utils::tests::find_field_works ... ok
test from_syntax::tests::struct_with_ink_attr_field_works ... ok
test from_syntax::tests::struct_with_ast_field_works ... ok
test from_syntax::tests::struct_with_syntax_field_works ... ok
test from_ast::tests::struct_with_ast_field_works ... ok
test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::optional_fields_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running unittests src/lib.rs (target/debug/deps/test_utils-78a2957b71c23099)

running 1 test
test tests::offset_at_variants_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.14s

   Doc-tests ink-analyzer-ir

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.15s

   Doc-tests ink-analyzer-macro

running 4 tests
test src/lib.rs - from_syntax_derive (line 100) ... ok
test src/lib.rs - from_ast_derive (line 35) ... ok
test src/lib.rs - (line 6) ... ok
test src/lib.rs - from_ink_attribute_derive (line 70) ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.18s

   Doc-tests test_utils

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

I checked the coverage of these tests using `cargo tarpaulin`. It has good coverage.

```
May 30 07:48:26.316  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| crates/analyzer/src/analysis/actions.rs: 125/132
|| crates/analyzer/src/analysis/completions.rs: 121/121
|| crates/analyzer/src/analysis/diagnostics/chain_extension.rs: 66/69
|| crates/analyzer/src/analysis/diagnostics/constructor.rs: 15/18
|| crates/analyzer/src/analysis/diagnostics/contract.rs: 106/111
|| crates/analyzer/src/analysis/diagnostics/event.rs: 30/33
|| crates/analyzer/src/analysis/diagnostics/extension.rs: 8/9
|| crates/analyzer/src/analysis/diagnostics/file.rs: 19/19
|| crates/analyzer/src/analysis/diagnostics/ink_impl.rs: 83/90
|| crates/analyzer/src/analysis/diagnostics/ink_test.rs: 4/5
|| crates/analyzer/src/analysis/diagnostics/message.rs: 29/31
|| crates/analyzer/src/analysis/diagnostics/storage.rs: 5/7
|| crates/analyzer/src/analysis/diagnostics/storage_item.rs: 9/10
|| crates/analyzer/src/analysis/diagnostics/topic.rs: 10/11
|| crates/analyzer/src/analysis/diagnostics/trait_definition.rs: 38/39
|| crates/analyzer/src/analysis/diagnostics/utils.rs: 330/375
|| crates/analyzer/src/analysis/diagnostics.rs: 3/3
|| crates/analyzer/src/analysis/hover/content.rs: 23/27
|| crates/analyzer/src/analysis/hover.rs: 32/32
|| crates/analyzer/src/analysis/utils.rs: 94/108
|| crates/analyzer/src/analysis.rs: 10/11
|| crates/analyzer/tests/test_data/contracts/erc20.rs: 0/4
|| crates/analyzer/tests/test_data/trait_definitions/erc20_trait.rs: 0/4
|| crates/analyzer/tests/utils/mod.rs: 2/2
|| crates/ir/src/attrs/arg.rs: 57/58
|| crates/ir/src/attrs/meta/name.rs: 7/7
|| crates/ir/src/attrs/meta/option.rs: 12/34
|| crates/ir/src/attrs/meta/separator.rs: 5/5
|| crates/ir/src/attrs/meta/value.rs: 53/59
|| crates/ir/src/attrs/meta.rs: 30/37
|| crates/ir/src/attrs/utils.rs: 64/66
|| crates/ir/src/attrs.rs: 59/63
|| crates/ir/src/chain_extension.rs: 12/13
|| crates/ir/src/constructor.rs: 2/2
|| crates/ir/src/contract.rs: 18/18
|| crates/ir/src/event.rs: 6/6
|| crates/ir/src/extension.rs: 8/8
|| crates/ir/src/file.rs: 18/18
|| crates/ir/src/ink_impl.rs: 24/24
|| crates/ir/src/ink_test.rs: 2/2
|| crates/ir/src/iter.rs: 10/10
|| crates/ir/src/message.rs: 2/2
|| crates/ir/src/selector.rs: 54/65
|| crates/ir/src/storage.rs: 2/2
|| crates/ir/src/storage_item.rs: 4/4
|| crates/ir/src/topic.rs: 2/2
|| crates/ir/src/trait_definition.rs: 8/8
|| crates/ir/src/traits/ast.rs: 4/4
|| crates/ir/src/traits/ast_ext.rs: 6/6
|| crates/ir/src/traits/callable.rs: 8/8
|| crates/ir/src/traits/entity.rs: 4/4
|| crates/ir/src/traits/from.rs: 2/2
|| crates/ir/src/tree/ink_tree.rs: 11/19
|| crates/ir/src/tree/item_at_offset.rs: 96/101
|| crates/ir/src/utils.rs: 106/117
|| crates/macro/src/from_ast.rs: 11/12
|| crates/macro/src/from_ink_attribute.rs: 53/58
|| crates/macro/src/from_syntax.rs: 20/20
|| crates/macro/src/lib.rs: 0/5
|| crates/macro/src/utils.rs: 15/21
|| crates/test_utils/src/lib.rs: 24/24
||
90.66% coverage, 1981/2185 lines covered
```

Could you explain the public interface mentioned in the deliverables in this milestone? Could you provide system/integration tests for those interfaces? Could be a guide or automated tests with a contract example, expected inputs, and outputs to test these interfaces.

### Code Quality

I ran `cargo clippy` and received no warnings.
```
user@localhost:~/Documents/ink/ink-analyzer$ cargo clippy
	Finished dev [unoptimized + debuginfo] target(s) in 0.02s
```
