- **Status:** Accepted
- **Application Document:** [ink! Analyzer](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md)
- **Milestone:** 3
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/ink_analyzer_2_dsm-w3f.md)

**Deliverables**

| Number  | Deliverable                                                                      | Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                          | [MIT](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-MIT) or [Apache 2.0](https://github.com/ink-analyzer/ink-analyzer/blob/master/LICENSE-APACHE).                                                                                                                                                                                                                                                                                               | Correct licenses                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **0b.** | Documentation                                                                    | [Project README](https://github.com/ink-analyzer/ink-analyzer#readme), [language server (ink-lsp-server) crate README](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server#readme) on GitHub (and [crates.io](https://crates.io/crates/ink-lsp-server)), [language server (ink-lsp-server) crate rustdoc](https://docs.rs/ink-lsp-server/latest/ink_lsp_server/) library documentation on docs.rs and extensive inline source documentation. | Extensive documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **0c.** | Testing and Testing Guide                                                        | [Testing guide](https://github.com/ink-analyzer/ink-analyzer#testing).                                                                                                                                                                                                                                                                                                                                                                                              | Extensive unit tests and integration are provided. All tests are passing by running it with both native Rust and Docker image. |
| **0d.** | Docker                                                                           | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/master/Dockerfile).                                                                                                                                                                                                                                                                                                                                                                                  | Dockerfile builds and all tests are passing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.      | Language Server: Rust binary crate: ink! Language Server Protocol implementation | [GitHub repository](https://github.com/ink-analyzer/ink-analyzer), [Language server crate (ink-lsp-server)](https://crates.io/crates/ink-lsp-server).                                                                                                                                                                                                                                                                                                               | Very well-written code, every piece code is commented and code coverage is high. The only non-critical issue is some warnings that clippy produces (logs attached below)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## General Notes

The project is well documented and the code is almost flawless. Can't wait to see it in action after VSCode integration in the next milestone!

### Outputs

<details>
    <summary>Clippy</summary>

```bash
warning: variables can be used directly in the `format!` string
  --> crates/test-utils/src/lib.rs:28:36
   |
28 |     lsp_types::Url::from_file_path(format!("/test_data/{}.rs", location)).unwrap()
   |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
   = note: `#[warn(clippy::uninlined_format_args)]` on by default
help: change this to
   |
28 -     lsp_types::Url::from_file_path(format!("/test_data/{}.rs", location)).unwrap()
28 +     lsp_types::Url::from_file_path(format!("/test_data/{location}.rs")).unwrap()
   |

warning: `test-utils` (lib) generated 1 warning
    Checking ink-analyzer-ir v0.7.0 (/Users/dastan@enjin.io/Documents/dastan/evaluations/ink-analyzer/crates/ir)
    Checking ink-analyzer v0.6.1 (/Users/dastan@enjin.io/Documents/dastan/evaluations/ink-analyzer/crates/analyzer)
warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/completions.rs:141:50
    |
141 | ...                   .retain(|macro_kind| format!("{}", macro_kind).starts_with(prefix));
    |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
    = note: `#[warn(clippy::uninlined_format_args)]` on by default
help: change this to
    |
141 -                             .retain(|macro_kind| format!("{}", macro_kind).starts_with(prefix));
141 +                             .retain(|macro_kind| format!("{macro_kind}").starts_with(prefix));
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/completions.rs:311:48
    |
311 | ...                   .retain(|arg_kind| format!("{}", arg_kind).starts_with(prefix));
    |                                          ^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
311 -                             .retain(|arg_kind| format!("{}", arg_kind).starts_with(prefix));
311 +                             .retain(|arg_kind| format!("{arg_kind}").starts_with(prefix));
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:131:25
    |
131 |                         format!("Unknown ink! attribute argument: '{}'.", arg_name_text)
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
131 -                         format!("Unknown ink! attribute argument: '{}'.", arg_name_text)
131 +                         format!("Unknown ink! attribute argument: '{arg_name_text}'.")
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:148:42
    |
148 | ...                   message: format!("`{}` argument shouldn't have a value.", arg_name_text),
    |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
148 -                                 message: format!("`{}` argument shouldn't have a value.", arg_name_text),
148 +                                 message: format!("`{arg_name_text}` argument shouldn't have a value."),
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:220:42
    |
220 |   ...                   message: format!(
    |  ________________________________^
221 | | ...                       "`{}` argument should have a `boolean` (`bool`) value.",
222 | | ...                       arg_name_text
223 | | ...                   ),
    | |_______________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:238:42
    |
238 |   ...                   message: format!(
    |  ________________________________^
239 | | ...                       "`{}` argument should have a `path` (e.g `my::env::Types`) value.",
240 | | ...                       arg_name_text
241 | | ...                   ),
    | |_______________________^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:467:41
    |
467 | ...                   format!("`ink! {}`", arg_kind)
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
467 -                                         format!("`ink! {}`", arg_kind)
467 +                                         format!("`ink! {arg_kind}`")
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:470:41
    |
470 | ...                   format!("`ink! {}`", macro_kind)
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
470 -                                         format!("`ink! {}`", macro_kind)
470 +                                         format!("`ink! {macro_kind}`")
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:543:45
    |
543 | ...                   format!("argument `{}`", arg_kind,)
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
543 -                                             format!("argument `{}`", arg_kind,)
543 +                                             format!("argument `{arg_kind}`",)
    |

warning: variables can be used directly in the `format!` string
   --> crates/analyzer/src/analysis/diagnostics/utils.rs:546:45
    |
546 | ...                   format!("macro `{}`", macro_kind)
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
546 -                                             format!("macro `{}`", macro_kind)
546 +                                             format!("macro `{macro_kind}`")
    |

warning: variables can be used directly in the `format!` string
  --> crates/analyzer/src/analysis/diagnostics/event.rs:95:42
   |
95 |   ...                   message: format!(
   |  ________________________________^
96 | | ...                       "`{}` attributes on event fields are not supported.",
97 | | ...                       attr
98 | | ...                   ),
   | |_______________________^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
```

</details>

<details>

  <summary>Unit and integration tests</summary>

```bash
running 132 tests
test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::actions::tests::ast_item_actions_works ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
test analysis::completions::tests::macro_completions_works ... ok
test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
test analysis::completions::tests::argument_completions_works ... ok
test analysis::actions::tests::ink_attribute_actions_works ... ok
test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
test analysis::diagnostics::contract::tests::attribute_in_mod_body_fails ... ok
test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
test analysis::diagnostics::contract::tests::missing_message_fails ... ok
test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::contract::tests::non_mod_fails ... ok
test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::constructor::tests::return_type_works ... ok
test analysis::actions::tests::is_focused_on_ast_item_declaration_works ... ok
test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
test analysis::diagnostics::event::tests::cfg_field_fails ... ok
test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::event::tests::contract_parent_works ... ok
test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
test analysis::diagnostics::event::tests::pub_struct_works ... ok
test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
test analysis::diagnostics::extension::tests::invalid_method_fails ... ok
test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
test analysis::diagnostics::extension::tests::valid_method_works ... ok
test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
test analysis::diagnostics::contract::tests::inline_mod_works ... ok
test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_fails ... ok
test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::ink_test::tests::fn_works ... ok
test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
test analysis::diagnostics::ink_impl::tests::impl_works ... ok
test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
test analysis::diagnostics::message::tests::self_return_type_fails ... ok
test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
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
test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
test analysis::diagnostics::message::tests::non_self_return_type_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
test analysis::diagnostics::message::tests::valid_callable_works ... ok
test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
test analysis::hover::tests::hover_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

test result: ok. 132 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.54s

     Running tests/actions.rs (target/debug/deps/actions-9b69adca190e239e)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.30s

     Running tests/completions.rs (target/debug/deps/completions-2fb385d575cb34b0)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.19s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-35a69d5da649290e)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.56s

     Running tests/hover.rs (target/debug/deps/hover-78b56127e91559bc)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.42s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-8d6ce456156f44e8)

running 36 tests
test attrs::meta::separator::tests::cast_works ... ok
test attrs::meta::name::tests::cast_works ... ok
test chain_extension::tests::cast_works ... ok
test event::tests::cast_works ... ok
test attrs::utils::tests::parse_ink_args_works ... ok
test attrs::meta::value::tests::cast_works ... ok
test attrs::utils::tests::sort_ink_args_works ... ok
test ink_test::tests::cast_works ... ok
test extension::tests::cast_works ... ok
test file::tests::parse_works ... ok
test constructor::tests::cast_works ... ok
test selector::tests::cast_arg_works ... ok
test storage::tests::cast_works ... ok
test attrs::tests::cast_ink_attribute_works ... ok
test topic::tests::cast_works ... ok
test storage_item::tests::cast_works ... ok
test trait_definition::tests::cast_works ... ok
test tree::ast_ext::tests::parent_ast_item_works ... ok
test message::tests::cast_works ... ok
test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
test tree::utils::tests::ink_args_works ... ok
test tree::utils::tests::ink_attrs_ancestors_works ... ok
test tree::utils::tests::ink_arg_by_kind_works ... ok
test ink_impl::tests::cast_works ... ok
test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
test tree::utils::tests::ink_attrs_in_scope_works ... ok
test tree::utils::tests::ink_attrs_descendants_works ... ok
test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
test tree::utils::tests::ink_attrs_works ... ok
test selector::tests::compose_works ... ok
test tree::item_at_offset::tests::parent_variants_works ... ok
test tree::utils::tests::ink_impl_closest_descendants_works ... ok
test tree::utils::tests::ink_callable_closest_descendants_works ... ok
test contract::tests::cast_works ... ok

test result: ok. 36 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s

     Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-fb4c468f082713c0)

running 13 tests
test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
test from_ast::tests::struct_without_ast_field_fails ... ok
test utils::tests::contains_field_works ... ok
test utils::tests::find_attribute_by_path_works ... ok
test from_syntax::tests::struct_with_syntax_field_works ... ok
test from_syntax::tests::struct_with_ast_field_works ... ok
test utils::tests::find_field_works ... ok
test from_ast::tests::struct_with_ast_field_works ... ok
test utils::tests::parse_struct_fields_works ... ok
test from_syntax::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
test from_ink_attribute::tests::optional_fields_works ... ok

test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-24199617d9fb7881)

running 17 tests
test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
test initialize::tests::server_capabilities_works ... ok
test memory::tests::memory_works ... ok
test initialize::tests::initialize_works ... ok
test dispatch::routers::notification::tests::request_router_works ... ok
test dispatch::routers::request::tests::request_router_works ... ok
test dispatch::handlers::request::tests::handle_completion_works ... ok
test translator::from_lsp::tests::offset_works ... ok
test translator::to_lsp::tests::position_works ... ok
test dispatch::actions::tests::publish_diagnostics_works ... ok
test dispatch::handlers::request::tests::handle_hover_works ... ok
test dispatch::handlers::request::tests::handle_code_action_works ... ok
test utils::tests::code_actions_kinds_works ... ok
test utils::tests::position_encoding_works ... ok
test dispatch::tests::main_loop_and_dispatcher_works ... ok

test result: ok. 17 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     Running unittests src/main.rs (target/debug/deps/ink_lsp_server-9baae7124d812d8b)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/actions.rs (target/debug/deps/actions-a68334fdf55e473c)

running 1 test
test actions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.47s

     Running tests/completions.rs (target/debug/deps/completions-7a5efa8c88c2963e)

running 1 test
test completions_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.81s

     Running tests/diagnostics.rs (target/debug/deps/diagnostics-76f62205e26b96d8)

running 1 test
test diagnostics_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.55s

     Running tests/hover.rs (target/debug/deps/hover-ce02a6d2c267a066)

running 1 test
test hover_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 8.72s

     Running unittests src/lib.rs (target/debug/deps/test_utils-fc1fbe74d610e4ef)

running 1 test
test tests::offset_at_variants_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ink-analyzer

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.33s

   Doc-tests ink-analyzer-ir

running 1 test
test src/lib.rs - (line 7) ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.21s

   Doc-tests ink-analyzer-macro

running 4 tests
test src/lib.rs - from_ink_attribute_derive (line 70) ... ok
test src/lib.rs - from_ast_derive (line 35) ... ok
test src/lib.rs - (line 6) ... ok
test src/lib.rs - from_syntax_derive (line 100) ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.91s

   Doc-tests ink-lsp-server

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests test-utils

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

<details>

<summary>Docker</summary>

```bash
> docker build -t ink-analyzer .

 => exporting to image                                                                                                             0.0s
 => => exporting layers                                                                                                            0.0s
 => => writing image sha256:f64cf8672748a96a6258864e5f85fb6d27b0c0c131fd1ae6c601934028801c6a                                       0.0s
 => => naming to docker.io/library/ink-analyzer  
```

</details>