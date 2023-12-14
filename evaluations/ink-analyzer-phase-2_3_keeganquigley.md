# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number  | Deliverable                                                                                                                                                                                                                                                                                                                            | Accepted | Link                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                                                                                                                                                                                                                                                                                | <ul><li>[x] </li></ul> | [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE).                                                                                                                                                                                                                                                            | Dual-licensed under either of MIT or Apache 2.0 licenses at the downstream user's option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **0b.** | Documentation                                                                                                                                                                                                                                                                                                                          | <ul><li>[x] </li></ul> | [Project README](https://github.com/ink-analyzer/ink-analyzer#readme) and [semantic analyzer (ink-analyzer) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer#readme) on GitHub, [semantic analyzer crate (ink-analyzer) rustdoc](https://docs.rs/ink-analyzer/latest/ink_analyzer/) documentation on docs.rs and extensive inline source documentation.                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **0c.** | Testing and Testing Guide                                                                                                                                                                                                                                                                                                              | <ul><li>[x] </li></ul> | [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).                                                                                                                                                                                                                                                                                                                                                           |  |
| **0d.** | Docker                                                                                                                                                                                                                                                                                                                                 | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.      | Semantic Analyzer: Rust crate update: Diagnostics that verify resolution of path expressions for `env` for `#[ink::contract]` and `environment` for `#[ink_e2e::test]` argument values as well as quick fixes that either fix paths (e.g. by fixing or adding a qualifier) or suggest paths to valid item definitions (where possible) | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_resolvable](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/environment.rs#L32-L135) utility in the [diagnostics/environment](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/environment.rs) submodule.               |                                                                                            |
| 2.      | Semantic Analyzer: Rust crate update: Diagnostics that verify that `env` values for `#[ink::contract]` and `environment` values for `#[ink_e2e::test]` are `impl Environment` as well as quick fixes to `impl Environment` for the target item where necessary                                                                         | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_impl_environment](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/environment.rs#L137-L193) utility in the [diagnostics/environment](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/environment.rs) submodule.        |                                                                              |
| 3.      | Semantic Analyzer: Rust crate update: Diagnostics that verify that ink! trait definition `impl` blocks implement all associated methods as well as quick fixes for implementing missing methods where necessary                                                                                                                        | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer) and the [ensure_trait_definition_impl_invariants](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/ink_impl.rs#L357-L598) utility in the [diagnostics/ink_impl](https://github.com/ink-analyzer/ink-analyzer/blob/analyzer-v0.8.14/crates/analyzer/src/analysis/diagnostics/ink_impl.rs) submodule. |                                                                                |
# General Notes

Rust unit tests pass:

<details>

  <summary>Output</summary>

```rust
    Updating crates.io index
  Downloaded countme v3.0.1
  Downloaded equivalent v1.0.1
  Downloaded dashmap v5.5.3
  Downloaded la-arena v0.3.1
  Downloaded idna v0.4.0
  Downloaded anstyle-parse v0.2.1
  Downloaded arrayvec v0.7.4
  Downloaded always-assert v0.1.3
  Downloaded anstream v0.5.0
  Downloaded aho-corasick v1.1.1
  Downloaded clap_derive v4.4.2
  Downloaded url v2.4.1
  Downloaded unicode-properties v0.1.0
  Downloaded unicode-bidi v0.3.13
  Downloaded typenum v1.17.0
  Downloaded tracing-core v0.1.32
  Downloaded tracing-attributes v0.1.27
  Downloaded tracing v0.1.40
  Downloaded synstructure v0.13.0
  Downloaded syn v2.0.37
  Downloaded subtle v2.5.0
  Downloaded scopeguard v1.2.0
  Downloaded regex-syntax v0.7.5
  Downloaded regex v1.9.5
  Downloaded ra-ap-rustc_lexer v0.20.0
  Downloaded ra-ap-rustc_abi v0.20.0
  Downloaded lsp-server v0.7.4
  Downloaded line-index v0.1.0-pre.1
  Downloaded form_urlencoded v1.2.0
  Downloaded clap_builder v4.4.4
  Downloaded unicode-ident v1.0.12
  Downloaded smol_str v0.2.0
  Downloaded smallvec v1.11.1
  Downloaded serde_repr v0.1.16
  Downloaded serde_json v1.0.107
  Downloaded serde v1.0.188
  Downloaded quote v1.0.33
  Downloaded proc-macro2 v1.0.67
  Downloaded pin-project-lite v0.2.13
  Downloaded perf-event-open-sys v1.0.1
  Downloaded memoffset v0.8.0
  Downloaded lsp-types v0.94.1
  Downloaded itertools v0.12.0
  Downloaded indexmap v2.1.0
  Downloaded digest v0.10.7
  Downloaded darling_macro v0.20.3
  Downloaded anyhow v1.0.75
  Downloaded ra-ap-rustc_index v0.20.0
  Downloaded ryu v1.0.15
  Downloaded serde_derive v1.0.188
  Downloaded lock_api v0.4.10
  Downloaded text-size v1.1.1
  Downloaded ra_ap_stdx v0.0.187
  Downloaded ra-ap-rustc_index_macros v0.20.0
  Downloaded prettyplease v0.2.15
  Downloaded perf-event v0.4.7
  Downloaded percent-encoding v2.3.0
  Downloaded once_cell v1.18.0
  Downloaded log v0.4.20
  Downloaded crossbeam-utils v0.8.16
  Downloaded clap v4.4.4
  Downloaded darling_core v0.20.3
  Downloaded anstyle v1.0.3
  Downloaded triomphe v0.1.9
  Downloaded rowan v0.15.11
  Downloaded regex-automata v0.3.8
  Downloaded parking_lot_core v0.9.8
  Downloaded memchr v2.6.3
  Downloaded libc v0.2.150
  Downloaded jod-thread v0.1.2
  Downloaded itoa v1.0.9
  Downloaded hashbrown v0.14.3
  Downloaded either v1.9.0
  Downloaded drop_bomb v0.1.5
  Downloaded generic-array v0.14.7
  Downloaded darling v0.20.3
  Downloaded crossbeam-channel v0.5.8
  Downloaded cov-mark v2.0.0-pre.1
  Downloaded clap_lex v0.5.1
  Downloaded ra_ap_profile v0.0.187
  Downloaded ra_ap_rustc-dependencies v0.0.187
  Downloaded ra_ap_limit v0.0.187
  Downloaded ra-ap-rustc_parse_format v0.20.0
  Downloaded ra_ap_text_edit v0.0.187
  Downloaded ra_ap_syntax v0.0.187
  Downloaded ra_ap_parser v0.0.187
  Downloaded 86 crates (5.5 MB) in 4.44s
   Compiling proc-macro2 v1.0.67
   Compiling unicode-ident v1.0.12
   Compiling cfg-if v1.0.0
   Compiling autocfg v1.1.0
   Compiling smallvec v1.11.1
   Compiling libc v0.2.150
   Compiling once_cell v1.18.0
   Compiling unicode-xid v0.2.4
   Compiling crossbeam-utils v0.8.16
   Compiling bitflags v1.3.2
   Compiling lock_api v0.4.10
   Compiling log v0.4.20
   Compiling parking_lot_core v0.9.8
   Compiling quote v1.0.33
   Compiling syn v2.0.37
   Compiling version_check v0.9.4
   Compiling typenum v1.17.0
   Compiling generic-array v0.14.7
   Compiling crossbeam-channel v0.5.8
   Compiling strsim v0.10.0
   Compiling hashbrown v0.14.3
   Compiling arrayvec v0.7.4
   Compiling scopeguard v1.2.0
   Compiling tracing-core v0.1.32
   Compiling serde v1.0.188
   Compiling unicode-properties v0.1.0
   Compiling pin-project-lite v0.2.13
   Compiling ra-ap-rustc_lexer v0.20.0
   Compiling dashmap v5.5.3
   Compiling memoffset v0.8.0
   Compiling ident_case v1.0.1
   Compiling tinyvec_macros v0.1.1
   Compiling rustc-hash v1.1.0
   Compiling text-size v1.1.1
   Compiling fnv v1.0.7
   Compiling countme v3.0.1
   Compiling tinyvec v1.6.0
   Compiling perf-event-open-sys v1.0.1
   Compiling either v1.9.0
   Compiling serde_json v1.0.107
   Compiling itertools v0.12.0
   Compiling perf-event v0.4.7
   Compiling unicode-normalization v0.1.22
   Compiling crypto-common v0.1.6
   Compiling block-buffer v0.10.4
   Compiling synstructure v0.13.0
   Compiling darling_core v0.20.3
   Compiling always-assert v0.1.3
   Compiling percent-encoding v2.3.0
   Compiling ryu v1.0.15
   Compiling hashbrown v0.12.3
   Compiling drop_bomb v0.1.5
   Compiling equivalent v1.0.1
   Compiling itoa v1.0.9
   Compiling la-arena v0.3.1
   Compiling ra_ap_limit v0.0.187
   Compiling jod-thread v0.1.2
   Compiling subtle v2.5.0
   Compiling unicode-bidi v0.3.13
   Compiling digest v0.10.7
   Compiling ra_ap_stdx v0.0.187
   Compiling idna v0.4.0
   Compiling rowan v0.15.11
   Compiling ra-ap-rustc_index_macros v0.20.0
   Compiling tracing-attributes v0.1.27
   Compiling serde_derive v1.0.188
   Compiling ra-ap-rustc_index v0.20.0
   Compiling ra-ap-rustc_parse_format v0.20.0
   Compiling darling_macro v0.20.3
   Compiling ra_ap_profile v0.0.187
   Compiling indexmap v2.1.0
   Compiling darling v0.20.3
   Compiling ra_ap_text_edit v0.0.187
   Compiling tracing v0.1.40
   Compiling ra-ap-rustc_abi v0.20.0
   Compiling form_urlencoded v1.2.0
   Compiling smol_str v0.2.0
   Compiling cov-mark v2.0.0-pre.1
   Compiling triomphe v0.1.9
   Compiling ink-analyzer-macro v0.7.0 (/home/ubuntu/ink-analyzer/crates/macro)
   Compiling ra_ap_rustc-dependencies v0.0.187
   Compiling ra_ap_parser v0.0.187
   Compiling serde_repr v0.1.16
   Compiling ra_ap_syntax v0.0.187
   Compiling blake2 v0.10.6
   Compiling memchr v2.6.3
   Compiling regex-syntax v0.7.5
   Compiling aho-corasick v1.1.1
   Compiling url v2.4.1
   Compiling ink-analyzer-ir v0.11.0 (/home/ubuntu/ink-analyzer/crates/ir)
   Compiling lsp-types v0.94.1
   Compiling lsp-server v0.7.4
   Compiling regex-automata v0.3.8
   Compiling utf8parse v0.2.1
   Compiling anstyle-parse v0.2.1
   Compiling anstyle v1.0.3
   Compiling anstyle-query v1.0.0
   Compiling colorchoice v1.0.0
   Compiling anstream v0.5.0
   Compiling regex v1.9.5
   Compiling anyhow v1.0.75
   Compiling ink-analyzer v0.8.14 (/home/ubuntu/ink-analyzer/crates/analyzer)
   Compiling clap_lex v0.5.1
   Compiling heck v0.4.1
   Compiling clap_derive v4.4.2
   Compiling clap_builder v4.4.4
   Compiling nohash-hasher v0.2.0
   Compiling line-index v0.1.0-pre.1
   Compiling prettyplease v0.2.15
   Compiling test-utils v0.0.0 (/home/ubuntu/ink-analyzer/crates/test-utils)
   Compiling clap v4.4.4
   Compiling ink-lsp-server v0.2.15 (/home/ubuntu/ink-analyzer/crates/lsp-server)
    Finished test [unoptimized + debuginfo] target(s) in 1m 12s
     Running unittests src/lib.rs (target/debug/deps/ink_analyzer-039366335f4f952d)

running 151 tests
test analysis::completions::tests::argument_completions_works ... ok
test analysis::actions::attr::tests::actions_works ... ok
test analysis::completions::tests::macro_completions_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::no_impl_from_status_code_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::impl_from_status_code_works ... ok
test analysis::actions::item::tests::actions_works ... ok
test analysis::diagnostics::chain_extension::error_code::tests::resolvable_error_code_works ... ok
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::chain_extension::error_code::tests::unresolvable_error_code_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
test analysis::diagnostics::constructor::tests::return_type_works ... ok
test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
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
test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
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
test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
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
test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
test analysis::hover::tests::hover_works ... ok
test analysis::inlay_hints::tests::inlay_hints_works ... ok
test codegen::tests::invalid_project_name_fails ... ok
test analysis::signature_help::tests::signature_help_works ... ok
test resolution::tests::external_crate_item_path_resolution_works ... ok
test codegen::tests::valid_project_name_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 151 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 43.81s

     Running tests/actions.rs (target/debug/deps/actions-44d0b59839792b91)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 40.84s

     Running tests/completions.rs (target/debug/deps/completions-1efcc7100bfbc78e)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.99s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-3dc752a86b0109a1)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.48s

     Running tests/hover.rs (target/debug/deps/hover-4e91b5a3cc032dc2)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.25s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-4145bed03209edd7)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.79s

     Running tests/signature_help.rs (target/debug/deps/signature_help-0796343d4bfb110c)

running 1 test
test signature_help_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.42s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-a1fca6b34594a620)

running 38 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test attrs::parser::tests::parse_ink_args_works ... ok
test chain_extension::tests::cast_works ... ok
test attrs::parser::tests::sort_ink_args_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test constructor::tests::cast_works ... ok
test environment::tests::cast_arg_works ... ok
test event::tests::cast_works ... ok
test extension::tests::cast_works ... ok
test ink_e2e_test::tests::cast_works ... ok
test ink_test::tests::cast_works ... ok
test file::tests::parse_works ... ok
test selector::tests::cast_arg_works ... ok
test message::tests::cast_works ... ok
test storage::tests::cast_works ... ok
test storage_item::tests::cast_works ... ok
test topic::tests::cast_works ... ok
test trait_definition::tests::cast_works ... ok
test tree::ast_ext::tests::parent_ast_item_works ... ok
test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
test selector::tests::compose_works ... ok
test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
test tree::utils::tests::ink_arg_by_kind_works ... ok
test ink_impl::tests::cast_works ... ok
test tree::utils::tests::ink_attrs_ancestors_works ... ok
test tree::utils::tests::ink_args_works ... ok
test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
test tree::utils::tests::ink_attrs_in_scope_works ... ok
test tree::utils::tests::ink_attrs_descendants_works ... ok
test tree::utils::tests::ink_attrs_works ... ok
test tree::utils::tests::ink_impl_closest_descendants_works ... ok
test tree::utils::tests::ink_callable_closest_descendants_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 38 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-42a2c9b51efb2230)

running 9 tests
test entity::tests::ast_only_works ... ok
test entity::tests::arg_kind_entity_works ... ok
test entity::tests::call_entity_works ... ok
test entity::tests::descendant_fields_works ... ok
test entity::tests::invalid_macro_args_fails ... ok
test entity::tests::initializer_attributes_works ... ok
test entity::tests::invalid_initializer_args_fails ... ok
test entity::tests::macro_kind_entity_works ... ok
test entity::tests::no_ast_field_fails ... ok

test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-cf312009dd1e834d)

running 23 tests
test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
test dispatch::handlers::request::tests::handle_completion_works ... ok
test dispatch::handlers::request::tests::handle_code_action_works ... ok
test dispatch::handlers::request::tests::handle_hover_works ... ok
test dispatch::handlers::request::tests::handle_execute_command_new_project_works ... ok
test dispatch::handlers::request::tests::handle_signature_help_works ... ok
test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
test dispatch::routers::notification::tests::request_router_works ... ok
test dispatch::routers::request::tests::request_router_works ... ok
test initialize::tests::server_capabilities_works ... ok
test memory::tests::memory_works ... ok
test dispatch::tests::main_loop_and_dispatcher_works ... ok
test initialize::tests::initialize_works ... ok
test translator::from_lsp::tests::offset_works ... ok
test translator::to_lsp::tests::position_works ... ok
test utils::tests::position_encoding_works ... ok
test utils::tests::code_actions_kinds_works ... ok
test utils::tests::can_create_project_via_workspace_edit_works ... ok
test utils::tests::snippet_support_works ... ok
test utils::tests::signature_support_works ... ok
test dispatch::actions::tests::publish_diagnostics_works ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/main.rs (target/debug/deps/ink_lsp_server-e935a1a293035cf8)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/actions.rs (target/debug/deps/actions-771c0ffc33876e6d)

running 1 test
test actions_works has been running for over 60 seconds
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 82.40s

     Running tests/commands.rs (target/debug/deps/commands-3fa7a9fdb82a3c6a)

running 1 test
test create_project_command_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/completions.rs (target/debug/deps/completions-0850d8b3f27e0155)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 30.36s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-d9b0e2e1170cd39d)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.45s

     Running tests/hover.rs (target/debug/deps/hover-f0574a5af4179d04)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 33.82s

     Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-47b1a2cd9e9513fe)

running 1 test
test inlay_hints_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 11.45s

     Running tests/signature_help.rs (target/debug/deps/signature_help-754e10b3eef7d7e3)

running 1 test
```
</details>

Docker build starts:
```sh
[+] Building 28.3s (8/8) FINISHED                                                                                                         docker:default
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 475B                                                                                                                   0.0s
 => [internal] load build definition from Dockerfile                                                                                                0.1s
 => => transferring dockerfile: 244B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/rust:1-slim-bullseye                                                                             1.7s
 => [1/3] FROM docker.io/library/rust:1-slim-bullseye@sha256:e265a834ad9cf9a467c5f9beea7cf936ecdc39c3e64a6bcadaf3b477867a3524                      12.9s
 => => resolve docker.io/library/rust:1-slim-bullseye@sha256:e265a834ad9cf9a467c5f9beea7cf936ecdc39c3e64a6bcadaf3b477867a3524                       0.0s
 => => sha256:7c58e9fea791e63967d35375dc93f8e93bdaaf53e5f55862984bcf16bfe68fd7 742B / 742B                                                          0.0s
 => => sha256:ef5ac75ad897ed89c183b3cbe1cd331f2cae1380dc3d68911d1f661b2f8fdae3 4.85kB / 4.85kB                                                      0.0s
 => => sha256:b7f91549542cca4b35a34cdee5364339f17468971ea730bb072864d3e78c8b94 31.42MB / 31.42MB                                                    1.2s
 => => sha256:a20f9db8715ccd93814cb5fd1bbd17d56c868c8de42aaa3adb73225beaf285a0 231.25MB / 231.25MB                                                  7.4s
 => => sha256:e265a834ad9cf9a467c5f9beea7cf936ecdc39c3e64a6bcadaf3b477867a3524 984B / 984B                                                          0.0s
 => => extracting sha256:b7f91549542cca4b35a34cdee5364339f17468971ea730bb072864d3e78c8b94                                                           1.8s
 => => extracting sha256:a20f9db8715ccd93814cb5fd1bbd17d56c868c8de42aaa3adb73225beaf285a0                                                           5.3s
 => [internal] load build context                                                                                                                   0.1s
 => => transferring context: 3.17MB                                                                                                                 0.1s
 => [2/3] WORKDIR /app                                                                                                                             13.3s
 => [3/3] COPY . .                                                                                                                                  0.2s
 => exporting to image                                                                                                                              0.1s
 => => exporting layers                                                                                                                             0.1s
 => => writing image sha256:3b8039c9a70fb247f71240e46b0d432a6f4a6d7a2baf6013a6d7a6f2bfe3b260                                                        0.0s
 => => naming to docker.io/library/ink-analyzer                                                                                                     0.0s
ubuntu@ip-172-31-17-249:~/ink-analyzer$ '
```
Docker tests also pass.
