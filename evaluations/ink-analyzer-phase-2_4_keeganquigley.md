# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 4
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number  | Deliverable                                                                                                                                                                                                                                                                                                                               | Accepted | Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                                                                                                                                                                                                                                                                                   | <ul><li>[x] </li></ul> | [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE).                                                                                                                                                                                                                                                                                                          | Dual-licensed under either of MIT or Apache 2.0 licenses at the downstream user's option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **0b.** | Documentation                                                                                                                                                                                                                                                                                                                             | <ul><li>[x] </li></ul> |[Project README](https://github.com/ink-analyzer/ink-analyzer#readme) and [semantic analyzer (ink-analyzer) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer#readme) on GitHub, [semantic analyzer crate (ink-analyzer) rustdoc](https://docs.rs/ink-analyzer/latest/ink_analyzer/) documentation on docs.rs and extensive inline source documentation.                                                                                  | Ok.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **0c.** | Testing and Testing Guide                                                                                                                                                                                                                                                                                                                 | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).                                                                                                                                                                                                                                                                                                                                                                                                         | Ok. |
| **0d.** | Docker                                                                                                                                                                                                                                                                                                                                    | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).                                                                                                                                                                                                                                                                                                                                                                                             | Ok.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.      | Semantic Analyzer: Rust crate update: Diagnostics that verify that the chain extension `ErrorCode` type is `impl FromStatusCode` as well as quick fixes and code/intent actions to `impl FromStatusCode` for the target item where necessary                                                                                              | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_impl_from_status_code](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs#L88-L106) utility in the [diagnostics/chain_extension/error_code](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs) submodule.     | Ok.                 |
| 2.      | Semantic Analyzer: Rust crate update: Diagnostics for references to the chain extension's `ErrorCode` type using `Self::ErrorCode` in the chain extension and it's defined methods as well as quick fixes to replace `Self::ErrorCode` usages with the `ErrorCode` type directly                                                          | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_no_self_error_code_usage](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs#L119-L152) utility in the [diagnostics/chain_extension/error_code](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs) submodule. | Ok.                                               |
| 3.      | Semantic Analyzer: Rust crate update: Diagnostics that verify that the chain extension `ErrorCode` type implements SCALE codec traits (i.e. scale's `Encode` and `Decode` and scale-info's `TypeInfo`) as well as quick fixes and code/intent actions to implement the SCALE codec traits for the target item where necessary             | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_impl_scale_codec_traits](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs#L108-L117) utility in the [diagnostics/chain_extension/error_code](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/chain_extension/error_code.rs) submodule.  | Ok.                                      |
| 4.      | Semantic Analyzer: Rust crate update: Diagnostics that verify that input and output types of chain extension methods implement SCALE codec traits (i.e. scale's `Encode` and `Decode` and scale-info's `TypeInfo`) as well as quick fixes and code/intent actions to implement the SCALE codec traits for the target item where necessary | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_custom_types_impl_scale_codec_traits](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/extension.rs#L50-L106) utility in the [diagnostics/extension](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.17/crates/analyzer/src/analysis/diagnostics/extension.rs) submodule.                                         | Ok.

## General Notes

Everything working as expected. Clean and well-organized code. Thorough comments and great documentation. Extensive diagnosis errors. Repo is starting to gain traction with 10 stars. Crates are also starting to gain traction in [monthly downloads](https://lib.rs/crates/ink-analyzer). Great work as usual!

## Tests

Unit tests all pass, 6 were added since last milestone:

<details>
  <summary>Output</summary>

```rust
running 157 tests
test analysis::completions::tests::argument_completions_works ... ok
test analysis::actions::attr::tests::actions_works ... ok
test analysis::completions::tests::macro_completions_works ... ok
test analysis::actions::item::tests::actions_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::missing_impl_scale_codec_traits_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::no_impl_from_status_code_fails ... ok
test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::impl_from_status_code_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::self_error_code_usage_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::unresolvable_error_code_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::no_self_error_code_usage_works ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::resolvable_error_code_works ... ok
test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::impl_scale_codec_traits_works ... ok
test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::constructor::tests::return_type_works ... ok
test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
test analysis::diagnostics::contract::tests::missing_message_fails ... ok
test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::contract::tests::non_mod_fails ... ok
test analysis::diagnostics::contract::tests::inline_mod_works ... ok
test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::environment::tests::env_impl_environment_and_default_works ... ok
test analysis::diagnostics::environment::tests::env_no_impl_environment_fails ... ok
test analysis::diagnostics::environment::tests::resolvable_and_default_env_works ... ok
test analysis::diagnostics::environment::tests::unresolvable_env_fails ... ok
test analysis::diagnostics::event::tests::cfg_field_fails ... ok
test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::event::tests::contract_parent_works ... ok
test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
test analysis::diagnostics::event::tests::pub_struct_works ... ok
test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::extension::tests::custom_types_missing_impl_scale_codec_traits_fails ... ok
test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
test analysis::diagnostics::extension::tests::no_custom_types_or_impl_scale_codec_traits_works ... ok
test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
test analysis::diagnostics::extension::tests::valid_fn_works ... ok
test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::fn_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_e2e_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::non_fn_fails ... ok
test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::ink_impl::tests::impl_works ... ok
test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::ink_impl::tests::invalid_trait_definition_impl_fails ... ok
test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_ignored ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_impl::tests::valid_trait_definition_impl_works ... ok
test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_test::tests::fn_works ... ok
test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::message::tests::non_self_return_type_works ... ok
test analysis::diagnostics::message::tests::self_return_type_fails ... ok
test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
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
test analysis::diagnostics::message::tests::valid_callable_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
test analysis::inlay_hints::tests::inlay_hints_works ... ok
test analysis::hover::tests::hover_works ... ok
test codegen::tests::invalid_project_name_fails ... ok
test analysis::signature_help::tests::signature_help_works ... ok
test resolution::tests::external_crate_item_path_resolution_works ... ok
test codegen::tests::valid_project_name_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 157 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 43.50s

     Running tests/actions.rs (target/debug/deps/actions-30cfd75087ad5ef6)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 41.76s

     Running tests/completions.rs (target/debug/deps/completions-d2f6b7a7352c9cfb)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.04s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-dbb823044b5944bc)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 46.17s

     Running tests/hover.rs (target/debug/deps/hover-f8259af786a5b8e2)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.43s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-7921a62e69eb48d7)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.82s

     Running tests/signature_help.rs (target/debug/deps/signature_help-d8cbc0b04fbfe55c)

running 1 test
test signature_help_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.45s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-a7af39ffe8cdba0d)

running 39 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test attrs::parser::tests::parse_ink_args_works ... ok
test attrs::parser::tests::sort_ink_args_works ... ok
test chain_extension::tests::cast_works ... ok
test environment::tests::cast_arg_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test event::tests::cast_works ... ok
test constructor::tests::cast_works ... ok
test ink_e2e_test::tests::cast_works ... ok
test extension::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
test file::tests::parse_works ... ok
test selector::tests::cast_arg_works ... ok
test message::tests::cast_works ... ok
test storage::tests::cast_works ... ok
test storage_item::tests::cast_works ... ok
test topic::tests::cast_works ... ok
test trait_definition::tests::cast_works ... ok
test tree::ast_ext::tests::parent_ast_item_works ... ok
test selector::tests::compose_works ... ok
test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
test ink_impl::tests::cast_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
test tree::utils::tests::ink_arg_by_kind_works ... ok
test tree::utils::tests::ink_args_works ... ok
test tree::utils::tests::ink_attrs_ancestors_works ... ok
test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
test contract::tests::cast_works ... ok
test tree::ast_ext::tests::resolve_item_works ... ok
test tree::utils::tests::ink_attrs_in_scope_works ... ok
test tree::utils::tests::ink_attrs_descendants_works ... ok
test tree::utils::tests::ink_attrs_works ... ok
test tree::utils::tests::ink_impl_closest_descendants_works ... ok
test tree::utils::tests::ink_callable_closest_descendants_works ... ok

test result: ok. 39 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.08s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-b7242eed5fc31043)

running 9 tests
test entity::tests::ast_only_works ... ok
test entity::tests::arg_kind_entity_works ... ok
test entity::tests::call_entity_works ... ok
test entity::tests::descendant_fields_works ... ok
test entity::tests::invalid_macro_args_fails ... ok
test entity::tests::invalid_initializer_args_fails ... ok
test entity::tests::initializer_attributes_works ... ok
test entity::tests::no_ast_field_fails ... ok
test entity::tests::macro_kind_entity_works ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-97f19d7c98a2c0c1)

running 23 tests
test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
test dispatch::handlers::request::tests::handle_completion_works ... ok
test dispatch::handlers::request::tests::handle_code_action_works ... ok
test dispatch::handlers::request::tests::handle_hover_works ... ok
test dispatch::handlers::request::tests::handle_execute_command_new_project_works ... ok
test dispatch::handlers::request::tests::handle_signature_help_works ... ok
test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
test dispatch::routers::request::tests::request_router_works ... ok
test dispatch::routers::notification::tests::request_router_works ... ok
test initialize::tests::server_capabilities_works ... ok
test memory::tests::memory_works ... ok
test translator::from_lsp::tests::offset_works ... ok
test dispatch::tests::main_loop_and_dispatcher_works ... ok
test initialize::tests::initialize_works ... ok
test utils::tests::can_create_project_via_workspace_edit_works ... ok
test translator::to_lsp::tests::position_works ... ok
test utils::tests::position_encoding_works ... ok
test utils::tests::code_actions_kinds_works ... ok
test utils::tests::signature_support_works ... ok
test utils::tests::snippet_support_works ... ok
test dispatch::actions::tests::publish_diagnostics_works ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/main.rs (target/debug/deps/ink_lsp_server-ff9be6128a2f0a89)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/actions.rs (target/debug/deps/actions-fadb399c74fe59c2)

running 1 test
test actions_works has been running for over 60 seconds
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 261.21s

     Running tests/commands.rs (target/debug/deps/commands-ec2042358ad2cef2)

running 1 test
test create_project_command_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/completions.rs (target/debug/deps/completions-e021a785290b58de)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 28.96s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-866e387e7e47109a)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 46.29s

     Running tests/hover.rs (target/debug/deps/hover-0ae218aabc866c22)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.19s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-436f82a7a3724f3a)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.75s

     Running tests/signature_help.rs (target/debug/deps/signature_help-deafb5d4566b0b6f)

running 1 test
test signature_help_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 21.32s

     Running unittests src/lib.rs (target/debug/deps/test_utils-114757a246e6fbb6)

running 1 test
test tests::offset_at_variants_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test crates/analyzer/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.22s

   Doc-tests ink-analyzer-ir

running 1 test
test crates/ir/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.19s

   Doc-tests ink-analyzer-macro

running 2 tests
test crates/macro/src/lib.rs - entity (line 77) ... ok
test crates/macro/src/lib.rs - (line 6) ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.22s

   Doc-tests ink-lsp-server

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests test-utils

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

<details>
  <summary>Docker runs successfully</summary>

```sh
ubuntu@ip-172-31-17-145:~/ink-analyzer$ docker build -t ink-analyzer .
[+] Building 22.9s (8/8) FINISHED                                                                                                              docker:default
 => [internal] load .dockerignore                                                                                                                        0.1s
 => => transferring context: 475B                                                                                                                        0.0s
 => [internal] load build definition from Dockerfile                                                                                                     0.1s
 => => transferring dockerfile: 244B                                                                                                                     0.0s
 => [internal] load metadata for docker.io/library/rust:1-slim-bullseye                                                                                  1.5s
 => [1/3] FROM docker.io/library/rust:1-slim-bullseye@sha256:9aef12d1916584a53d7be82f913173357ced74d0d9f437c037587491c6381d03                            8.8s
 => => resolve docker.io/library/rust:1-slim-bullseye@sha256:9aef12d1916584a53d7be82f913173357ced74d0d9f437c037587491c6381d03                            0.0s
 => => sha256:0e0969fcaa8240e1eeb53f9f5d4ddd1bf89a2c9971c9cbe455eba0e66eeefb53 31.42MB / 31.42MB                                                         0.7s
 => => sha256:9aef12d1916584a53d7be82f913173357ced74d0d9f437c037587491c6381d03 4.85kB / 4.85kB                                                           0.0s
 => => sha256:9dd4dcbeb459b06143275e94fe820435b9ae20fdd2fbff463a8868e95247b77d 1.06kB / 1.06kB                                                           0.0s
 => => sha256:9213befbd899c3957de027541e6c34fc46409ce6b564c06bfb282edaba6821ee 2.67kB / 2.67kB                                                           0.0s
 => => sha256:f72d62086ab2c03ed4a3200c56c9d4e149522c580cec6cc6e81d750302c7267b 237.21MB / 237.21MB                                                       3.2s
 => => extracting sha256:0e0969fcaa8240e1eeb53f9f5d4ddd1bf89a2c9971c9cbe455eba0e66eeefb53                                                                2.0s
 => => extracting sha256:f72d62086ab2c03ed4a3200c56c9d4e149522c580cec6cc6e81d750302c7267b                                                                5.3s
 => [internal] load build context                                                                                                                        0.2s
 => => transferring context: 3.41MB                                                                                                                      0.1s
 => [2/3] WORKDIR /app                                                                                                                                  12.2s
 => [3/3] COPY . .                                                                                                                                       0.2s
 => exporting to image                                                                                                                                   0.1s
 => => exporting layers                                                                                                                                  0.1s
 => => writing image sha256:40a08e315ff51323cba8a8019cbac94b0b04c12377b4a971b898353d6a95e399                                                             0.0s
 => => naming to docker.io/library/ink-analyzer                                                                                                          0.0s
ubuntu@ip-172-31-17-145:~/ink-analyzer$ 
```
</details>
