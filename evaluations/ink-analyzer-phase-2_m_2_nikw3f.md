# Ink Analyzer Phase 2 Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by nikw3f

| Number  | Deliverable                                                                                | Accepted               | Link                                                                                                                                                                                                                                                                                                                                                                                          | Notes   |
|---------|--------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **0a.** | License                                                                                    | <ul><li>[x] </li></ul> | [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE).                                                                                                                                                                                                                         | MIT, Apache. |
| **0b.** | Documentation                                                                              | <ul><li>[x] </li></ul> | [Project README](https://github.com/ink-analyzer/ink-analyzer#readme) and [semantic analyzer (ink-analyzer) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer#readme) on GitHub, [semantic analyzer crate (ink-analyzer) rustdoc](https://docs.rs/ink-analyzer/latest/ink_analyzer/) documentation on docs.rs and extensive inline source documentation. | Documentation is extensive and dev friendly.  |
| **0c.** | Testing and Testing Guide                                                                  | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).                                                                                                                                                                                                                                                                                                                        | Test coverage is good. |
| **0d.** | Docker                                                                                     | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).                                                                                                                                                                                                                                                                                                            | Docker is working fine |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.      | Semantic Analyzer: Rust crate update: Inlay hints for ink! attribute argument values       | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [inlay hints public interface](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis.rs#L77-L80) and [inlay hints module](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/inlay_hints.rs).                                                           | Inlay hints working fines. Well tested. |
| 2.      | Semantic Analyzer: Rust crate update: Signature help for ink! attribute arguments          | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [signature help public interface](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis.rs#L82-L85) and [signature help module](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/signature_help.rs).                                                  | Working fine. |
| 3.      | Semantic Analyzer: Rust crate update: Code/intent actions for "flattening" ink! attributes | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [flatten_attrs](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/actions/item.rs#L443-L484) utility in the [actions/item](https://github.com/ink-analyzer/ink-analyzer/blob/master/crates/analyzer/src/analysis/actions/item.rs#L71-L72) submodule.                            | Working fine. |

# General Notes

Thanks team for this milestone. The code is well tested, documented, well structured and easy to understand. I was able to install vs code extension as well and use it to analyse ink code. Happy to pass the milestone.

# Testing

I am able to build and test rust code.

```
➜  ink-analyzer git:(master) cargo test
    Updating crates.io index
  Downloaded anstyle v1.0.3
  Downloaded smol_str v0.2.0
  Downloaded prettyplease v0.2.15
  Downloaded ra-ap-rustc_lexer v0.10.0
  Downloaded cov-mark v2.0.0-pre.1
  Downloaded clap v4.4.4
  Downloaded triomphe v0.1.9
  Downloaded text-size v1.1.1
  Downloaded lsp-types v0.94.1
  Downloaded jod-thread v0.1.2
  Downloaded dashmap v5.5.3
  Downloaded itertools v0.11.0
  Downloaded serde_repr v0.1.16
  Downloaded countme v3.0.1
  Downloaded la-arena v0.3.1
  Downloaded drop_bomb v0.1.5
  Downloaded rowan v0.15.11
  Downloaded always-assert v0.1.3
  Downloaded unicode-properties v0.1.0
  Downloaded lsp-server v0.7.4
  Downloaded ra_ap_limit v0.0.173
  Downloaded ra_ap_profile v0.0.173
  Downloaded ra_ap_stdx v0.0.173
  Downloaded clap_builder v4.4.4
  Downloaded line-index v0.1.0-pre.1
  Downloaded ra_ap_text_edit v0.0.173
  Downloaded ra_ap_syntax v0.0.173
  Downloaded ra_ap_parser v0.0.173
  Downloaded 28 crates (966.3 KB) in 2.49s
   Compiling proc-macro2 v1.0.67
   Compiling unicode-ident v1.0.12
   Compiling cfg-if v1.0.0
   Compiling autocfg v1.1.0
   Compiling crossbeam-utils v0.8.16
   Compiling libc v0.2.148
   Compiling typenum v1.17.0
   Compiling log v0.4.20
   Compiling parking_lot_core v0.9.8
   Compiling version_check v0.9.4
   Compiling scopeguard v1.2.0
   Compiling smallvec v1.11.1
   Compiling hashbrown v0.14.0
   Compiling serde v1.0.188
   Compiling once_cell v1.18.0
   Compiling generic-array v0.14.7
   Compiling lock_api v0.4.10
   Compiling memoffset v0.8.0
   Compiling rustc-hash v1.1.0
   Compiling tinyvec_macros v0.1.1
   Compiling text-size v1.1.1
   Compiling either v1.9.0
   Compiling tinyvec v1.6.0
   Compiling unicode-xid v0.2.4
   Compiling serde_json v1.0.107
   Compiling unicode-properties v0.1.0
   Compiling ra-ap-rustc_lexer v0.10.0
   Compiling crossbeam-channel v0.5.8
   Compiling unicode-normalization v0.1.22
   Compiling itertools v0.10.5
   Compiling always-assert v0.1.3
   Compiling subtle v2.5.0
   Compiling ryu v1.0.15
   Compiling itoa v1.0.9
   Compiling la-arena v0.3.1
   Compiling unicode-bidi v0.3.13
   Compiling jod-thread v0.1.2
   Compiling ra_ap_limit v0.0.173
   Compiling drop_bomb v0.1.5
   Compiling hashbrown v0.12.3
   Compiling equivalent v1.0.1
   Compiling percent-encoding v2.3.0
   Compiling form_urlencoded v1.2.0
   Compiling idna v0.4.0
   Compiling indexmap v2.0.0
   Compiling ra_ap_text_edit v0.0.173
   Compiling ra_ap_parser v0.0.173
   Compiling ra_ap_stdx v0.0.173
   Compiling triomphe v0.1.9
   Compiling cov-mark v2.0.0-pre.1
   Compiling smol_str v0.2.0
   Compiling itertools v0.11.0
   Compiling bitflags v1.3.2
   Compiling memchr v2.6.3
   Compiling regex-syntax v0.7.5
   Compiling utf8parse v0.2.1
   Compiling anstyle-parse v0.2.1
   Compiling anstyle-query v1.0.0
   Compiling colorchoice v1.0.0
   Compiling aho-corasick v1.1.1
   Compiling anstyle v1.0.3
   Compiling heck v0.4.1
   Compiling anstream v0.5.0
   Compiling clap_lex v0.5.1
   Compiling strsim v0.10.0
   Compiling quote v1.0.33
   Compiling anyhow v1.0.75
   Compiling syn v2.0.37
   Compiling dashmap v5.5.3
   Compiling clap_builder v4.4.4
   Compiling nohash-hasher v0.2.0
   Compiling prettyplease v0.2.15
   Compiling line-index v0.1.0-pre.1
   Compiling countme v3.0.1
   Compiling regex-automata v0.3.8
   Compiling rowan v0.15.11
   Compiling ra_ap_profile v0.0.173
   Compiling block-buffer v0.10.4
   Compiling crypto-common v0.1.6
   Compiling digest v0.10.7
   Compiling ra_ap_syntax v0.0.173
   Compiling blake2 v0.10.6
   Compiling regex v1.9.5
   Compiling serde_derive v1.0.188
   Compiling serde_repr v0.1.16
   Compiling ink-analyzer-macro v0.6.1 (/Users/nikhil/w3f/ink-analyzer/crates/macro)
   Compiling clap_derive v4.4.2
   Compiling ink-analyzer-ir v0.10.2 (/Users/nikhil/w3f/ink-analyzer/crates/ir)
   Compiling clap v4.4.4
   Compiling ink-analyzer v0.8.9 (/Users/nikhil/w3f/ink-analyzer/crates/analyzer)
   Compiling url v2.4.1
   Compiling lsp-server v0.7.4
   Compiling lsp-types v0.94.1
   Compiling test-utils v0.0.0 (/Users/nikhil/w3f/ink-analyzer/crates/test-utils)
   Compiling ink-lsp-server v0.2.10 (/Users/nikhil/w3f/ink-analyzer/crates/lsp-server)
    Finished test [unoptimized + debuginfo] target(s) in 29.60s
     Running unittests src/lib.rs (target/debug/deps/ink_analyzer-ff524b9e99b1b696)

running 140 tests
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
test analysis::completions::tests::macro_completions_works ... ok
test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
test analysis::completions::tests::argument_completions_works ... ok
test analysis::actions::attr::tests::actions_works ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
test analysis::actions::item::tests::actions_works ... ok
test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
test analysis::diagnostics::contract::tests::missing_message_fails ... ok
test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::constructor::tests::return_type_works ... ok
test analysis::diagnostics::contract::tests::non_mod_fails ... ok
test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
test analysis::diagnostics::contract::tests::inline_mod_works ... ok
test analysis::diagnostics::event::tests::cfg_field_fails ... ok
test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::event::tests::contract_parent_works ... ok
test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
test analysis::diagnostics::event::tests::pub_struct_works ... ok
test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::fn_works ... ok
test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
test analysis::diagnostics::ink_e2e_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_e2e_test::tests::non_fn_fails ... ok
test analysis::diagnostics::ink_e2e_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
test analysis::diagnostics::extension::tests::valid_fn_works ... ok
test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_ignored ... ok
test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_test::tests::fn_works ... ok
test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_impl::tests::impl_works ... ok
test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::message::tests::self_return_type_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
test analysis::diagnostics::storage::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::storage::tests::contract_parent_works ... ok
test analysis::diagnostics::storage::tests::ink_descendants_fails ... ok
test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::storage::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::storage::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::storage::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::storage::tests::pub_struct_works ... ok
test analysis::diagnostics::storage_item::tests::adt_works ... ok
test analysis::diagnostics::storage_item::tests::ink_descendants_fails ... ok
test analysis::diagnostics::storage_item::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::storage_item::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::storage_item::tests::non_adt_fails ... ok
test analysis::diagnostics::topic::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::topic::tests::struct_field_works ... ok
test analysis::diagnostics::topic::tests::non_struct_field_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::message::tests::non_self_return_type_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
test analysis::diagnostics::message::tests::valid_callable_works ... ok
test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
test codegen::tests::invalid_project_name_fails ... ok
test analysis::inlay_hints::tests::inlay_hints_works ... ok
test analysis::hover::tests::hover_works ... ok
test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
test analysis::signature_help::tests::signature_help_works ... ok
test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
test codegen::tests::valid_project_name_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 140 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.68s

     Running tests/actions.rs (target/debug/deps/actions-3b46359f96f2df15)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 13.62s

     Running tests/completions.rs (target/debug/deps/completions-0056e652657368d2)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.77s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-f065ae60bf919e49)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.40s

     Running tests/hover.rs (target/debug/deps/hover-d11d389088456d42)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.94s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-03aa34f496c6e2a2)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.35s

     Running tests/signature_help.rs (target/debug/deps/signature_help-abd6d00c17ad644f)

running 1 test
test signature_help_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.54s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-2b9192e9b384e414)

running 37 tests
test attrs::meta::name::tests::cast_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test attrs::utils::tests::parse_ink_args_works ... ok
test attrs::meta::separator::tests::cast_works ... ok
test constructor::tests::cast_works ... ok
test chain_extension::tests::cast_works ... ok
test event::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
test ink_e2e_test::tests::cast_works ... ok
test selector::tests::cast_arg_works ... ok
test storage::tests::cast_works ... ok
test topic::tests::cast_works ... ok
test extension::tests::cast_works ... ok
test storage_item::tests::cast_works ... ok
test file::tests::parse_works ... ok
test attrs::utils::tests::sort_ink_args_works ... ok
test trait_definition::tests::cast_works ... ok
test tree::ast_ext::tests::parent_ast_item_works ... ok
test message::tests::cast_works ... ok
test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
test tree::utils::tests::ink_attrs_ancestors_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
test tree::utils::tests::ink_args_works ... ok
test tree::utils::tests::ink_arg_by_kind_works ... ok
test tree::utils::tests::ink_attrs_works ... ok
test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
test tree::utils::tests::ink_attrs_descendants_works ... ok
test tree::utils::tests::ink_attrs_in_scope_works ... ok
test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
test ink_impl::tests::cast_works ... ok
test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
test selector::tests::compose_works ... ok
test tree::utils::tests::ink_impl_closest_descendants_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test tree::utils::tests::ink_callable_closest_descendants_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.04s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-2e2f9edc4f67546e)

running 13 tests
test utils::tests::contains_field_works ... ok
test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
test from_ast::tests::struct_without_ast_field_fails ... ok
test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
test from_syntax::tests::struct_with_ink_attr_field_works ... ok
test from_syntax::tests::struct_with_ast_field_works ... ok
test from_ast::tests::struct_with_ast_field_works ... ok
test from_syntax::tests::struct_with_syntax_field_works ... ok
test utils::tests::find_attribute_by_path_works ... ok
test utils::tests::find_field_works ... ok
test utils::tests::parse_struct_fields_works ... ok
test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::optional_fields_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-e7e5f59579f91980)

running 21 tests
test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
test dispatch::routers::notification::tests::request_router_works ... ok
test dispatch::handlers::request::tests::handle_completion_works ... ok
test dispatch::handlers::request::tests::handle_hover_works ... ok
test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
test initialize::tests::server_capabilities_works ... ok
test memory::tests::memory_works ... ok
test dispatch::handlers::request::tests::handle_code_action_works ... ok
test translator::from_lsp::tests::offset_works ... ok
test dispatch::handlers::request::tests::handle_signature_help_works ... ok
test dispatch::routers::request::tests::request_router_works ... ok
test utils::tests::code_actions_kinds_works ... ok
test translator::to_lsp::tests::position_works ... ok
test utils::tests::position_encoding_works ... ok
test utils::tests::snippet_support_works ... ok
test utils::tests::signature_support_works ... ok
test initialize::tests::initialize_works ... ok
test dispatch::tests::main_loop_and_dispatcher_works ... ok
test dispatch::actions::tests::publish_diagnostics_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

     Running unittests src/main.rs (target/debug/deps/ink_lsp_server-ea1aee5ed19cecec)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/actions.rs (target/debug/deps/actions-a4da8665f4d38140)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 27.13s

     Running tests/completions.rs (target/debug/deps/completions-05223b9e0b02bc78)


running 1 test




test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 9.50s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-d9fda07530700368)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.35s

     Running tests/hover.rs (target/debug/deps/hover-9a3eec2a7db04efd)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 11.57s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-5b1167de80d573e2)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.86s

     Running tests/signature_help.rs (target/debug/deps/signature_help-bf481515fdbf790b)

running 1 test
test signature_help_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.84s

     Running unittests src/lib.rs (target/debug/deps/test_utils-18a1dfd32e61c5b1)

running 1 test
test tests::offset_at_variants_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test crates/analyzer/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.76s

   Doc-tests ink-analyzer-ir

running 1 test
test crates/ir/src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.74s

   Doc-tests ink-analyzer-macro

running 4 tests
test crates/macro/src/lib.rs - from_ast_derive (line 35) ... ok
test crates/macro/src/lib.rs - from_syntax_derive (line 100) ... ok
test crates/macro/src/lib.rs - (line 6) ... ok
test crates/macro/src/lib.rs - from_ink_attribute_derive (line 70) ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.54s

   Doc-tests ink-lsp-server

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests test-utils

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

# Docker 

Docker Build is working. 

```
➜  ink-analyzer git:(master) docker build -t ink-analyzer .

[+] Building 23.4s (8/8) FINISHED                                                                                                                                                                docker:desktop-linux
 => [internal] load .dockerignore                                                                                                                                                                                0.0s
 => => transferring context: 475B                                                                                                                                                                                0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                             0.0s
 => => transferring dockerfile: 247B                                                                                                                                                                             0.0s
 => [internal] load metadata for docker.io/library/rust:1.69-slim-bullseye                                                                                                                                       5.5s
 => [1/3] FROM docker.io/library/rust:1.69-slim-bullseye@sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b                                                                                18.2s
 => => resolve docker.io/library/rust:1.69-slim-bullseye@sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b                                                                                 0.0s
 => => sha256:64b11e12e14c9cafaa4361b544fb50df754a3df4f71bf6ed2af50edc8494d380 742B / 742B                                                                                                                       0.0s
 => => sha256:04706536c6ba24725cc58aee05d5d4542ec04fd23e00e3d5a0c530421bace5a4 4.86kB / 4.86kB                                                                                                                   0.0s
 => => sha256:d981f2c20c93e1c57a46cd87bc5b9a554be5323072a0d0ab4b354aabd237bbcf 30.05MB / 30.05MB                                                                                                                 1.8s
 => => sha256:c9a3025ba314322f78c072ba74c6eb614857411e28f646a8f0513a6f1e81a330 295.16MB / 295.16MB                                                                                                              13.7s
 => => sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b 984B / 984B                                                                                                                       0.0s
 => => extracting sha256:d981f2c20c93e1c57a46cd87bc5b9a554be5323072a0d0ab4b354aabd237bbcf                                                                                                                        1.0s
 => => extracting sha256:c9a3025ba314322f78c072ba74c6eb614857411e28f646a8f0513a6f1e81a330                                                                                                                        4.3s
 => [internal] load build context                                                                                                                                                                                0.1s
 => => transferring context: 2.80MB                                                                                                                                                                              0.1s
 => [2/3] WORKDIR /app                                                                                                                                                                                           0.2s
 => [3/3] COPY . .                                                                                                                                                                                               0.0s
 => exporting to image                                                                                                                                                                                           0.0s
 => => exporting layers                                                                                                                                                                                          0.0s
 => => writing image sha256:96fa8e1d18608206b190376443c0c7fecc49d7a634173097c3b165ef85d497f5                                                                                                                     0.0s
 => => naming to docker.io/library/ink-analyzer                                                                                                                                                                  0.0s
 ```

# VS code extension

Vs code extension is working fine.

<img width="849" alt="Screenshot 2023-10-16 at 11 14 33" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/142136841/faed62c2-51c5-49c3-a3ff-8d1d4b33090a">

