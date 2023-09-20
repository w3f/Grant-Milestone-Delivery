# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License  | <ul><li>[x] </li></ul>  | [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE). |  |
| **0b.** | Documentation  | <ul><li>[ ] </li></ul>  | [Project README](https://github.com/ink-analyzer/ink-analyzer#readme) and [semantic analyzer (ink-analyzer) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer#readme) on GitHub, [semantic analyzer crate (ink-analyzer) rustdoc](https://docs.rs/ink-analyzer/latest/ink_analyzer/) documentation on docs.rs and extensive inline source documentation.  |  Not fully evaluated yet.  |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing). |  Not fully evaluated yet.  |
| **0d.** | Docker | <ul><li>[x] </li></ul>   | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).  |   |
| 1. | Semantic Analyzer: Rust crate update: Quick fixes for all existing diagnostic errors and warnings | <ul><li>[ ] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [diagnostics module](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer/src/analysis/diagnostics.rs), [diagnostics type with quickfixes field](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/diagnostics.rs#L44-L55) and [extensive updates adding quickfixes to all diagnostics and related tests](https://github.com/search?q=repo%3Aink-analyzer%2Fink-analyzer+quickfixes&type=code). |  Not fully evaluated yet.  |
| 2. | Semantic Analyzer: Rust crate update: ink_e2e macro support  | <ul><li>[ ] </li></ul>  | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and [updates across the semantic analyzer (ink-analyzer) and intermediate representation (ink-analyzer-ir) crates to support ink_e2e macro analysis](https://github.com/search?q=repo%3Aink-analyzer%2Fink-analyzer%20ink_e2e&type=code).  |  Not fully evaluated yet.  |
| 3. | Semantic Analyzer: Rust crate update: Command for creating a new ink! project with a contract stub | <ul><li>[ ] </li></ul>   | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [new_project function](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/codegen.rs#L42-L88) and [codegen module](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/codegen.rs). |  Not fully evaluated yet.  |
| 4. | Semantic Analyzer: Rust crate update: Code/intent actions for inserting code stubs/snippets for relevant ink! entities | <ul><li>[ ] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [codegen/snippets submodule](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/codegen/snippets.rs), and [actions/item](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/actions/item.rs) and [actions/entity](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/actions/entity.rs) actions submodules. | Not fully evaluated yet. | 

## Evaluation V1

### Testing

All tests passed with good coverage. 

I would like to test using the VS Code Extension. Could you provide a guide with usage examples that show these deliverables?

Test Results:

<details>

```

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer-aacf5c76bd59f5e5)

running 139 tests
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
test analysis::completions::tests::macro_completions_works ... ok
test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
test analysis::actions::item::tests::actions_works ... ok
test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
test analysis::completions::tests::argument_completions_works ... ok
test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
test analysis::actions::attr::tests::actions_works ... ok
test analysis::diagnostics::contract::tests::missing_message_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::contract::tests::non_mod_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
test analysis::diagnostics::constructor::tests::return_type_works ... ok
test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
test analysis::diagnostics::event::tests::cfg_field_fails ... ok
test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
test analysis::diagnostics::event::tests::contract_parent_works ... ok
test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
test analysis::diagnostics::event::tests::pub_struct_works ... ok
test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
test analysis::diagnostics::ink_e2e_test::tests::fn_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_e2e_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::non_fn_fails ... ok
test analysis::diagnostics::extension::tests::valid_fn_works ... ok
test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_ignored ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_impl::tests::impl_works ... ok
test analysis::diagnostics::ink_test::tests::fn_works ... ok
test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::message::tests::self_return_type_fails ... ok
test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::storage::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::storage::tests::contract_parent_works ... ok
test analysis::diagnostics::storage::tests::ink_descendants_fails ... ok
test analysis::diagnostics::storage::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::storage::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::storage::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::storage::tests::pub_struct_works ... ok
test analysis::diagnostics::storage_item::tests::adt_works ... ok
test analysis::diagnostics::storage_item::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::storage_item::tests::ink_descendants_fails ... ok
test analysis::diagnostics::storage_item::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::storage_item::tests::non_adt_fails ... ok
test analysis::diagnostics::topic::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::topic::tests::non_struct_field_fails ... ok
test analysis::diagnostics::topic::tests::struct_field_works ... ok
test analysis::diagnostics::message::tests::non_self_return_type_works ... ok
test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::message::tests::valid_callable_works ... ok
test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
test codegen::tests::invalid_project_name_fails ... ok
test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
test analysis::inlay_hints::tests::inlay_hints_works ... ok
test analysis::hover::tests::hover_works ... ok
test codegen::tests::valid_project_name_works ... ok
test analysis::diagnostics::contract::tests::inline_mod_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 139 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 18.11s

     Running tests/actions.rs (target/debug/deps/actions-17988fc1d0bccd69)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 14.18s

     Running tests/completions.rs (target/debug/deps/completions-ada8e6fca91d48d3)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.09s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-0c50e960591b25c1)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 9.76s

     Running tests/hover.rs (target/debug/deps/hover-edbea7bee176dffc)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.28s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-a7667548d9503243)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.46s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-59148f4c211d0e96)

running 37 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test ink_e2e_test::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
test storage::tests::cast_works ... ok
test chain_extension::tests::cast_works ... ok
test selector::tests::cast_arg_works ... ok
test storage_item::tests::cast_works ... ok
test topic::tests::cast_works ... ok
test attrs::utils::tests::parse_ink_args_works ... ok
test constructor::tests::cast_works ... ok
test event::tests::cast_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test extension::tests::cast_works ... ok
test tree::utils::tests::ink_args_works ... ok
test file::tests::parse_works ... ok
test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
test trait_definition::tests::cast_works ... ok
test attrs::utils::tests::sort_ink_args_works ... ok
test tree::ast_ext::tests::parent_ast_item_works ... ok
test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
test tree::utils::tests::ink_attrs_ancestors_works ... ok
test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
test tree::utils::tests::ink_attrs_works ... ok
test tree::utils::tests::ink_attrs_descendants_works ... ok
test tree::utils::tests::ink_arg_by_kind_works ... ok
test tree::utils::tests::ink_attrs_in_scope_works ... ok
test message::tests::cast_works ... ok
test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test ink_impl::tests::cast_works ... ok
test selector::tests::compose_works ... ok
test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
test tree::utils::tests::ink_impl_closest_descendants_works ... ok
test tree::utils::tests::ink_callable_closest_descendants_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-cb96351b895f6a14)

running 13 tests
test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
test from_ast::tests::struct_without_ast_field_fails ... ok
test utils::tests::find_attribute_by_path_works ... ok
test utils::tests::find_field_works ... ok
test utils::tests::contains_field_works ... ok
test utils::tests::parse_struct_fields_works ... ok
test from_syntax::tests::struct_with_syntax_field_works ... ok
test from_syntax::tests::struct_with_ast_field_works ... ok
test from_syntax::tests::struct_with_ink_attr_field_works ... ok
test from_ast::tests::struct_with_ast_field_works ... ok
test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::optional_fields_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-35d7f5b87933bf05)

running 19 tests
test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
test initialize::tests::server_capabilities_works ... ok
test dispatch::handlers::request::tests::handle_completion_works ... ok
test dispatch::routers::notification::tests::request_router_works ... ok
test memory::tests::memory_works ... ok
test translator::from_lsp::tests::offset_works ... ok
test dispatch::handlers::request::tests::handle_hover_works ... ok
test translator::to_lsp::tests::position_works ... ok
test utils::tests::code_actions_kinds_works ... ok
test utils::tests::snippet_support_works ... ok
test dispatch::handlers::request::tests::handle_code_action_works ... ok
test utils::tests::position_encoding_works ... ok
test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
test dispatch::routers::request::tests::request_router_works ... ok
test initialize::tests::initialize_works ... ok
test dispatch::tests::main_loop_and_dispatcher_works ... ok
test dispatch::actions::tests::publish_diagnostics_works ... ok

test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (target/debug/deps/ink_lsp_server-48cc77a16f66cd0a)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/actions.rs (target/debug/deps/actions-c60585e83ef2d17f)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 29.89s

     Running tests/completions.rs (target/debug/deps/completions-7feacd97de90db33)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 14.87s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-8cb67302437a8c6a)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.10s

     Running tests/hover.rs (target/debug/deps/hover-9bcceb10e249af59)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 17.59s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-ebc1b636595bd16c)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 5.85s

     Running unittests src/lib.rs (target/debug/deps/test_utils-16f4b81648e64c6d)

running 1 test
test tests::offset_at_variants_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test crates/analyzer/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

   Doc-tests ink-analyzer-ir

running 1 test
test crates/ir/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.20s

   Doc-tests ink-analyzer-macro

running 4 tests
test crates/macro/src/lib.rs - from_syntax_derive (line 100) ... ok
test crates/macro/src/lib.rs - from_ast_derive (line 35) ... ok
test crates/macro/src/lib.rs - from_ink_attribute_derive (line 70) ... ok
test crates/macro/src/lib.rs - (line 6) ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s

   Doc-tests ink-lsp-server

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests test-utils

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

Coverage:

<details>

```
|| Tested/Total Lines:
|| crates/analyzer/src/analysis/actions/attr.rs: 20/20
|| crates/analyzer/src/analysis/actions/entity.rs: 168/206
|| crates/analyzer/src/analysis/actions/item.rs: 155/178
|| crates/analyzer/src/analysis/actions.rs: 29/29
|| crates/analyzer/src/analysis/completions.rs: 181/183
|| crates/analyzer/src/analysis/diagnostics/chain_extension.rs: 138/143
|| crates/analyzer/src/analysis/diagnostics/constructor.rs: 27/30
|| crates/analyzer/src/analysis/diagnostics/contract.rs: 192/198
|| crates/analyzer/src/analysis/diagnostics/event.rs: 44/47
|| crates/analyzer/src/analysis/diagnostics/extension.rs: 8/9
|| crates/analyzer/src/analysis/diagnostics/file.rs: 22/22
|| crates/analyzer/src/analysis/diagnostics/ink_e2e_test.rs: 4/5
|| crates/analyzer/src/analysis/diagnostics/ink_impl.rs: 152/162
|| crates/analyzer/src/analysis/diagnostics/ink_test.rs: 4/5
|| crates/analyzer/src/analysis/diagnostics/message.rs: 49/51
|| crates/analyzer/src/analysis/diagnostics/storage.rs: 5/7
|| crates/analyzer/src/analysis/diagnostics/storage_item.rs: 11/12
|| crates/analyzer/src/analysis/diagnostics/topic.rs: 12/13
|| crates/analyzer/src/analysis/diagnostics/trait_definition.rs: 72/73
|| crates/analyzer/src/analysis/diagnostics/utils.rs: 656/728
|| crates/analyzer/src/analysis/diagnostics.rs: 13/13
|| crates/analyzer/src/analysis/hover/content.rs: 25/29
|| crates/analyzer/src/analysis/hover.rs: 23/23
|| crates/analyzer/src/analysis/inlay_hints.rs: 29/30
|| crates/analyzer/src/analysis/text_edit.rs: 69/75
|| crates/analyzer/src/analysis/utils.rs: 589/675
|| crates/analyzer/src/analysis.rs: 17/18
|| crates/analyzer/src/codegen.rs: 22/22
|| crates/analyzer/src/utils.rs: 11/11
|| crates/ir/src/attrs/arg.rs: 64/65
|| crates/ir/src/attrs/meta/name.rs: 7/7
|| crates/ir/src/attrs/meta/option.rs: 17/30
|| crates/ir/src/attrs/meta/separator.rs: 5/5
|| crates/ir/src/attrs/meta/value.rs: 56/62
|| crates/ir/src/attrs/meta.rs: 35/42
|| crates/ir/src/attrs/utils.rs: 66/68
|| crates/ir/src/attrs.rs: 86/92
|| crates/ir/src/chain_extension.rs: 12/13
|| crates/ir/src/constructor.rs: 2/2
|| crates/ir/src/contract.rs: 20/20
|| crates/ir/src/event.rs: 6/6
|| crates/ir/src/extension.rs: 8/8
|| crates/ir/src/file.rs: 21/21
|| crates/ir/src/ink_e2e_test.rs: 2/2
|| crates/ir/src/ink_impl.rs: 26/26
|| crates/ir/src/ink_test.rs: 2/2
|| crates/ir/src/iter.rs: 10/10
|| crates/ir/src/message.rs: 2/2
|| crates/ir/src/selector.rs: 54/64
|| crates/ir/src/storage.rs: 2/2
|| crates/ir/src/storage_item.rs: 4/4
|| crates/ir/src/topic.rs: 2/2
|| crates/ir/src/trait_definition.rs: 8/8
|| crates/ir/src/traits/ast_ext.rs: 6/6
|| crates/ir/src/traits/ast_type.rs: 4/4
|| crates/ir/src/traits/callable.rs: 8/8
|| crates/ir/src/traits/entity.rs: 4/4
|| crates/ir/src/traits/from.rs: 2/2
|| crates/ir/src/tree/ast_ext.rs: 24/26
|| crates/ir/src/tree/ink_tree.rs: 11/19
|| crates/ir/src/tree/item_at_offset.rs: 95/99
|| crates/ir/src/tree/utils.rs: 80/87
|| crates/lsp-server/src/dispatch/actions.rs: 18/19
|| crates/lsp-server/src/dispatch/handlers/notification.rs: 17/17
|| crates/lsp-server/src/dispatch/handlers/request.rs: 55/59
|| crates/lsp-server/src/dispatch/routers/notification.rs: 15/16
|| crates/lsp-server/src/dispatch/routers/request.rs: 28/32
|| crates/lsp-server/src/dispatch.rs: 40/52
|| crates/lsp-server/src/initialize.rs: 17/20
|| crates/lsp-server/src/main.rs: 0/14
|| crates/lsp-server/src/memory.rs: 22/22
|| crates/lsp-server/src/translator/from_lsp.rs: 12/12
|| crates/lsp-server/src/translator/to_lsp.rs: 85/86
|| crates/lsp-server/src/utils.rs: 22/22
|| crates/lsp-server/tests/utils/mod.rs: 5/5
|| crates/macro/src/from_ast.rs: 11/12
|| crates/macro/src/from_ink_attribute.rs: 53/58
|| crates/macro/src/from_syntax.rs: 20/20
|| crates/macro/src/lib.rs: 0/5
|| crates/macro/src/utils.rs: 15/21
|| crates/test-utils/src/fixtures.rs: 1680/1680
|| crates/test-utils/src/lib.rs: 51/51
|| 
93.50% coverage, 5664/6058 lines covered
```

</details>

### Code Quality

I ran `cargo clippy` and received some warnings:

```
user@localhost:~/Documents/ink-analyzer/ink-analyzer$ cargo clippy
warning: this `.filter_map` can be written more simply using `.filter`
   --> crates/ir/src/attrs/utils.rs:124:5
	|
124 | / 	elems
125 | |     	.iter()
126 | |     	.filter_map(|elem| (!elem.kind().is_trivia()).then_some(elem))
	| |______________________________________________________________________^
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#unnecessary_filter_map
	= note: `#[warn(clippy::unnecessary_filter_map)]` on by default

warning: unnecessarily eager cloning of iterator items
   --> crates/ir/src/tree/utils.rs:111:33
	|
111 |     	.filter_map(move |attr| attr.args().iter().cloned().find(|arg| *arg.kind() == kind))
	|                             	^^^^^^^^^^^^^^^^^^-----------------------------------------
	|                                               	|
	|                                               	help: try: `.find(|&arg| *arg.kind() == kind).cloned()`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#iter_overeager_cloned
	= note: `#[warn(clippy::iter_overeager_cloned)]` on by default

warning: unnecessarily eager cloning of iterator items
   --> crates/ir/src/tree/utils.rs:116:37
	|
116 | 	ink_attrs(node).find_map(|attr| attr.args().iter().cloned().find(|arg| *arg.kind() == kind))
	|                                 	^^^^^^^^^^^^^^^^^^-----------------------------------------
	|                                                   	|
	|                                                   	help: try: `.find(|&arg| *arg.kind() == kind).cloned()`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#iter_overeager_cloned

warning: `ink-analyzer-ir` (lib) generated 3 warnings (run `cargo clippy --fix --lib -p ink-analyzer-ir` to apply 2 suggestions)
warning: this argument is a mutable reference, but not used mutably
  --> crates/lsp-server/src/dispatch/actions.rs:14:13
   |
14 | 	memory: &mut Memory,
   |         	^^^^^^^^^^^ help: consider changing to: `&Memory`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_pass_by_ref_mut
   = note: `#[warn(clippy::needless_pass_by_ref_mut)]` on by default

warning: `ink-lsp-server` (lib) generated 1 warning
	Finished dev [unoptimized + debuginfo] target(s) in 0.04s

```
