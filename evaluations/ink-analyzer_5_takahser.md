# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 5
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/ink-analyzer/ink-analyzer/blob/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/LICENSE-MIT), [Apache License](https://github.com/ink-analyzer/ink-analyzer/blob/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/LICENSE-APACHE) | - |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/ink-analyzer/ink-analyzer/tree/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0#readme), [language server docs](https://github.com/ink-analyzer/ink-analyzer/tree/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/crates/lsp-server#readme) and (identical) [crate docs](https://crates.io/crates/ink-lsp-server), [`ink_lsp_server` crate docs](https://docs.rs/ink-lsp-server/latest/ink_lsp_server/) | - |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/ink-analyzer/ink-analyzer/tree/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0#testing) | See [Testing Guide Feedback](#testing-guide-feedback) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-analyzer/blob/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/Dockerfile) | See [Docker Feedback](#docker-feedback) |
|      1. | Rust binary crate update: ink! Language Server updates | <ul><li>[x] </li></ul> | [`ink_lsp_server` crate](https://github.com/ink-analyzer/ink-analyzer/tree/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/crates/lsp-server), [diagnostics](https://github.com/ink-analyzer/ink-analyzer/blob/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/crates/lsp-server/src/dispatch/actions.rs), [request handlers](https://github.com/ink-analyzer/ink-analyzer/blob/700e7eb8218fa16c8076cea3e5e26a327aa3e1d0/crates/lsp-server/src/dispatch/handlers/request.rs) | See [Language Server Feedback](#language-server-feedback) |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- [x] `rustdoc`s can be built and run:
    ```zsh
    % cargo doc --open
    Compiling proc-macro2 v1.0.67
        Checking cfg-if v1.0.0
    Compiling unicode-ident v1.0.12
    Compiling autocfg v1.1.0
    Compiling libc v0.2.148
    Compiling typenum v1.17.0
    Compiling parking_lot_core v0.9.8
        Checking scopeguard v1.2.0
        Checking smallvec v1.11.1
    Compiling version_check v0.9.4
    Documenting unicode-ident v1.0.12
        Checking hashbrown v0.14.0
    Compiling crossbeam-utils v0.8.16
        Checking once_cell v1.18.0
        Checking log v0.4.20
    Documenting cfg-if v1.0.0
    Compiling serde v1.0.188
    Compiling generic-array v0.14.7
    Compiling lock_api v0.4.10
        Checking text-size v1.1.1
        Checking rustc-hash v1.1.0
    Compiling memoffset v0.8.0
        Checking tinyvec_macros v0.1.1
        Checking either v1.9.0
        Checking unicode-xid v0.2.4
        Checking unicode-properties v0.1.0
        Checking tinyvec v1.6.0
        Checking ra-ap-rustc_lexer v0.10.0
        Checking itertools v0.10.5
        Checking always-assert v0.1.3
        Checking ra_ap_limit v0.0.173
        Checking hashbrown v0.12.3
        Checking utf8parse v0.2.1
    Documenting hashbrown v0.14.0
    Documenting proc-macro2 v1.0.67
    Compiling quote v1.0.33
        Checking subtle v2.5.0
        Checking crossbeam-channel v0.5.8
    Compiling syn v2.0.37
    Documenting libc v0.2.148
        Checking jod-thread v0.1.2
    Documenting quote v1.0.33
    Compiling serde_json v1.0.107
    Documenting smallvec v1.11.1
        Checking equivalent v1.0.1
        Checking la-arena v0.3.1
        Checking drop_bomb v0.1.5
    Documenting scopeguard v1.2.0
        Checking memchr v2.6.3
        Checking unicode-normalization v0.1.22
    Documenting syn v2.0.37
    Documenting crossbeam-utils v0.8.16
    Documenting lock_api v0.4.10
    Documenting typenum v1.17.0
        Checking dashmap v5.5.3
    Documenting parking_lot_core v0.9.8
        Checking unicode-bidi v0.3.13
    Documenting log v0.4.20
        Checking itoa v1.0.9
        Checking ryu v1.0.15
    Documenting once_cell v1.18.0
        Checking percent-encoding v2.3.0
    Documenting crossbeam-channel v0.5.8
        Checking aho-corasick v1.1.1
        Checking ra_ap_parser v0.0.173
        Checking countme v3.0.1
        Checking indexmap v2.0.0
        Checking ra_ap_stdx v0.0.173
        Checking ra_ap_profile v0.0.173
    Documenting dashmap v5.5.3
        Checking rowan v0.15.11
        Checking ra_ap_text_edit v0.0.173
        Checking anstyle-parse v0.2.1
        Checking smol_str v0.2.0
        Checking triomphe v0.1.9
    Documenting rustc-hash v1.1.0
        Checking anstyle-query v1.0.0
        Checking colorchoice v1.0.0
    Documenting tinyvec_macros v0.1.1
    Documenting text-size v1.1.1
        Checking crypto-common v0.1.6
        Checking block-buffer v0.10.4
        Checking regex-syntax v0.7.5
        Checking anstyle v1.0.3
        Checking cov-mark v2.0.0-pre.1
        Checking idna v0.4.0
        Checking digest v0.10.7
    Documenting countme v3.0.1
        Checking form_urlencoded v1.2.0
    Documenting tinyvec v1.6.0
    Documenting unicode-xid v0.2.4
    Documenting unicode-properties v0.1.0
        Checking blake2 v0.10.6
        Checking anstream v0.5.0
        Checking ra_ap_syntax v0.0.173
    Documenting always-assert v0.1.3
    Documenting memoffset v0.8.0
    Documenting generic-array v0.14.7
        Checking itertools v0.11.0
    Documenting ra-ap-rustc_lexer v0.10.0
    Documenting utf8parse v0.2.1
    Documenting jod-thread v0.1.2
    Documenting percent-encoding v2.3.0
    Documenting unicode-normalization v0.1.22
    Documenting ryu v1.0.15
    Documenting unicode-bidi v0.3.13
        Checking clap_lex v0.5.1
    Documenting crypto-common v0.1.6
    Documenting block-buffer v0.10.4
    Documenting equivalent v1.0.1
    Documenting itoa v1.0.9
    Documenting drop_bomb v0.1.5
    Documenting either v1.9.0
    Documenting subtle v2.5.0
        Checking strsim v0.10.0
    Documenting ra_ap_limit v0.0.173
    Documenting memchr v2.6.3
    Documenting la-arena v0.3.1
    Documenting indexmap v2.0.0
    Documenting idna v0.4.0
    Documenting digest v0.10.7
    Documenting form_urlencoded v1.2.0
    Documenting ra_ap_parser v0.0.173
    Documenting ra_ap_stdx v0.0.173
    Documenting ra_ap_profile v0.0.173
    Documenting aho-corasick v1.1.1
    Documenting anstyle-parse v0.2.1
    Documenting rowan v0.15.11
    Documenting serde_derive v1.0.188
    Documenting ra_ap_text_edit v0.0.173
    Documenting regex-syntax v0.7.5
        Checking regex-automata v0.3.8
    Compiling anyhow v1.0.75
    Documenting anstyle v1.0.3
    Documenting anstyle-query v1.0.0
    Documenting smol_str v0.2.0
    Documenting cov-mark v2.0.0-pre.1
    Compiling heck v0.4.1
        Checking bitflags v1.3.2
    Documenting triomphe v0.1.9
    Documenting colorchoice v1.0.0
    Documenting blake2 v0.10.6
    Documenting serde_repr v0.1.16
    Documenting ink-analyzer-macro v0.6.1 (/Users/xxx/repos/ink-analyzer/crates/macro)
    Documenting itertools v0.11.0
        Checking clap_builder v4.4.4
    Documenting anstream v0.5.0
    Documenting ra_ap_syntax v0.0.173
    Documenting strsim v0.10.0
    Documenting heck v0.4.1
    Documenting bitflags v1.3.2
        Checking nohash-hasher v0.2.0
    Documenting clap_lex v0.5.1
    Documenting nohash-hasher v0.2.0
    Documenting clap_derive v4.4.2
        Checking line-index v0.1.0-pre.1
    Documenting anyhow v1.0.75
    Documenting regex-automata v0.3.8
    Documenting clap_builder v4.4.4
    Documenting line-index v0.1.0-pre.1
    Compiling serde_derive v1.0.188
    Compiling ink-analyzer-macro v0.6.1 (/Users/xxx/repos/ink-analyzer/crates/macro)
    Compiling serde_repr v0.1.16
    Compiling clap_derive v4.4.2
        Checking regex v1.9.5
        Checking ink-analyzer-ir v0.10.4 (/Users/xxx/repos/ink-analyzer/crates/ir)
    Documenting ink-analyzer-ir v0.10.4 (/Users/xxx/repos/ink-analyzer/crates/ir)
    Documenting regex v1.9.5
        Checking clap v4.4.4
    Documenting clap v4.4.4
        Checking ink-analyzer v0.8.11 (/Users/xxx/repos/ink-analyzer/crates/analyzer)
    Documenting serde v1.0.188
    Documenting ink-analyzer v0.8.11 (/Users/xxx/repos/ink-analyzer/crates/analyzer)
    Documenting serde_json v1.0.107
        Checking url v2.4.1
    Documenting url v2.4.1
        Checking lsp-types v0.94.1
        Checking lsp-server v0.7.4
    Documenting lsp-types v0.94.1
    Documenting lsp-server v0.7.4
    Documenting test-utils v0.0.0 (/Users/xxx/repos/ink-analyzer/crates/test-utils)
    Documenting ink-lsp-server v0.2.12 (/Users/xxx/repos/ink-analyzer/crates/lsp-server)
        Finished dev [unoptimized + debuginfo] target(s) in 12.85s
        Opening /Users/xxx/repos/ink-analyzer/target/doc/ink_analyzer/index.html
    ```
- [x] tests pass:
    ```zsh
    % cargo test
        Finished test [unoptimized + debuginfo] target(s) in 0.06s
        Running unittests src/lib.rs (target/debug/deps/ink_analyzer-aefafa2b15f4796a)

    running 142 tests
    running 142 tests
    test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
    test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
    test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
    test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
    test analysis::completions::tests::macro_completions_works ... ok
    test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
    test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
    test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
    test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
    test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
    test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
    test analysis::completions::tests::argument_completions_works ... ok
    test analysis::actions::attr::tests::actions_works ... ok
    test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
    test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
    test analysis::actions::item::tests::actions_works ... ok
    test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
    test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
    test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
    test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
    test analysis::diagnostics::contract::tests::missing_message_fails ... ok
    test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
    test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
    test analysis::diagnostics::contract::tests::non_mod_fails ... ok
    test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
    test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
    test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
    test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
    test analysis::diagnostics::constructor::tests::return_type_works ... ok
    test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
    test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
    test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
    test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::event::tests::cfg_field_fails ... ok
    test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
    test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
    test analysis::diagnostics::event::tests::contract_parent_works ... ok
    test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
    test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
    test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
    test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
    test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
    test analysis::diagnostics::event::tests::pub_struct_works ... ok
    test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
    test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
    test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
    test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
    test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
    test analysis::diagnostics::extension::tests::valid_fn_works ... ok
    test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
    test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
    test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
    test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
    test analysis::diagnostics::ink_e2e_test::tests::fn_works ... ok
    test analysis::diagnostics::ink_e2e_test::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::ink_e2e_test::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::ink_e2e_test::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::ink_e2e_test::tests::non_fn_fails ... ok
    test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
    test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
    test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
    test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
    test analysis::diagnostics::ink_impl::tests::invalid_trait_definition_impl_fails ... ok
    test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_ignored ... ok
    test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
    test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
    test analysis::diagnostics::ink_impl::tests::impl_works ... ok
    test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
    test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
    test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::ink_test::tests::fn_works ... ok
    test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
    test analysis::diagnostics::ink_impl::tests::valid_trait_definition_impl_works ... ok
    test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
    test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
    test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
    test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::contract::tests::inline_mod_works ... ok
    test analysis::diagnostics::message::tests::self_return_type_fails ... ok
    test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
    test analysis::diagnostics::storage::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::storage::tests::contract_parent_works ... ok
    test analysis::diagnostics::storage::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
    test analysis::diagnostics::storage::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::storage::tests::non_pub_struct_fails ... ok
    test analysis::diagnostics::storage::tests::non_contract_parent_fails ... ok
    test analysis::diagnostics::storage::tests::pub_struct_works ... ok
    test analysis::diagnostics::storage_item::tests::adt_works ... ok
    test analysis::diagnostics::storage_item::tests::ink_descendants_fails ... ok
    test analysis::diagnostics::storage_item::tests::no_ink_descendants_works ... ok
    test analysis::diagnostics::topic::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::storage_item::tests::non_adt_fails ... ok
    test analysis::diagnostics::topic::tests::struct_field_works ... ok
    test analysis::diagnostics::storage_item::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::topic::tests::non_struct_field_fails ... ok
    test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
    test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
    test analysis::diagnostics::message::tests::non_self_return_type_works ... ok
    test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
    test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
    test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
    test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
    test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
    test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
    test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
    test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
    test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
    test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
    test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
    test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
    test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
    test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
    test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
    test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
    test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
    test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
    test codegen::tests::invalid_project_name_fails ... ok
    test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
    test analysis::hover::tests::hover_works ... ok
    test analysis::inlay_hints::tests::inlay_hints_works ... ok
    test analysis::diagnostics::message::tests::valid_callable_works ... ok
    test analysis::signature_help::tests::signature_help_works ... ok
    test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
    test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
    test codegen::tests::valid_project_name_works ... ok
    test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
    test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
    test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
    test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

    test result: ok. 142 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.99s

        Running tests/actions.rs (target/debug/deps/actions-dc77a9222cfde900)

    running 1 test
    test actions_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 14.26s

        Running tests/completions.rs (target/debug/deps/completions-95c4175788d99172)

    running 1 test
    test completions_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.75s

        Running tests/diagnostics.rs (target/debug/deps/diagnostics-6938b99cf0de36a0)

    running 1 test
    test diagnostics_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.56s

        Running tests/hover.rs (target/debug/deps/hover-df35a7efd9708db6)

    running 1 test
    test hover_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.94s

        Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-070fdbba8c2ac9d9)

    running 1 test
    test inlay_hints_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.32s

        Running tests/signature_help.rs (target/debug/deps/signature_help-3f9aa4417c75252f)

    running 1 test
    test signature_help_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.53s

        Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-b2859d253cdc9261)

    running 37 tests
    test attrs::meta::separator::tests::cast_works ... ok
    test attrs::meta::name::tests::cast_works ... ok
    test ink_e2e_test::tests::cast_works ... ok
    test ink_test::tests::cast_works ... ok
    test event::tests::cast_works ... ok
    test chain_extension::tests::cast_works ... ok
    test extension::tests::cast_works ... ok
    test file::tests::parse_works ... ok
    test storage::tests::cast_works ... ok
    test topic::tests::cast_works ... ok
    test selector::tests::cast_arg_works ... ok
    test storage_item::tests::cast_works ... ok
    test attrs::utils::tests::parse_ink_args_works ... ok
    test attrs::meta::value::tests::cast_works ... ok
    test constructor::tests::cast_works ... ok
    test tree::ast_ext::tests::parent_ast_item_works ... ok
    test message::tests::cast_works ... ok
    test attrs::tests::cast_ink_attribute_works ... ok
    test attrs::utils::tests::sort_ink_args_works ... ok
    test trait_definition::tests::cast_works ... ok
    test tree::utils::tests::ink_args_works ... ok
    test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
    test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
    test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
    test tree::utils::tests::ink_attrs_ancestors_works ... ok
    test ink_impl::tests::cast_works ... ok
    test tree::utils::tests::ink_attrs_in_scope_works ... ok
    test tree::utils::tests::ink_arg_by_kind_works ... ok
    test tree::utils::tests::ink_attrs_descendants_works ... ok
    test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
    test tree::utils::tests::ink_attrs_works ... ok
    test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
    test selector::tests::compose_works ... ok
    test tree::utils::tests::ink_impl_closest_descendants_works ... ok
    test tree::utils::tests::ink_callable_closest_descendants_works ... ok
    test tree::item_at_offset::tests::parent_variants_works ... ok
    test contract::tests::cast_works ... ok

    test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

        Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-2ca655dea17fa4ad)

    running 13 tests
    test utils::tests::find_attribute_by_path_works ... ok
    test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
    test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
    test from_ast::tests::struct_without_ast_field_fails ... ok
    test utils::tests::find_field_works ... ok
    test utils::tests::contains_field_works ... ok
    test utils::tests::parse_struct_fields_works ... ok
    test from_syntax::tests::struct_with_syntax_field_works ... ok
    test from_syntax::tests::struct_with_ast_field_works ... ok
    test from_ast::tests::struct_with_ast_field_works ... ok
    test from_syntax::tests::struct_with_ink_attr_field_works ... ok
    test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
    test from_ink_attribute::tests::optional_fields_works ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-66fe4323a0c948ff)

    running 23 tests
    test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
    test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
    test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
    test initialize::tests::server_capabilities_works ... ok
    test memory::tests::memory_works ... ok
    test dispatch::routers::notification::tests::request_router_works ... ok
    test translator::from_lsp::tests::offset_works ... ok
    test dispatch::handlers::request::tests::handle_execute_command_new_project_works ... ok
    test translator::to_lsp::tests::position_works ... ok
    test utils::tests::can_create_project_via_workspace_edit_works ... ok
    test dispatch::routers::request::tests::request_router_works ... ok
    test utils::tests::code_actions_kinds_works ... ok
    test utils::tests::position_encoding_works ... ok
    test dispatch::handlers::request::tests::handle_hover_works ... ok
    test utils::tests::signature_support_works ... ok
    test utils::tests::snippet_support_works ... ok
    test dispatch::handlers::request::tests::handle_completion_works ... ok
    test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
    test initialize::tests::initialize_works ... ok
    test dispatch::handlers::request::tests::handle_signature_help_works ... ok
    test dispatch::tests::main_loop_and_dispatcher_works ... ok
    test dispatch::handlers::request::tests::handle_code_action_works ... ok
    test dispatch::actions::tests::publish_diagnostics_works ... ok

    test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

        Running unittests src/main.rs (target/debug/deps/ink_lsp_server-5607f919b3060b2c)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/actions.rs (target/debug/deps/actions-4440a57d6ec4b81b)

    running 1 test
    test actions_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 28.65s

        Running tests/commands.rs (target/debug/deps/commands-39ced2272091392d)

    running 1 test
    test create_project_command_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/completions.rs (target/debug/deps/completions-eebcc2244bbc1f7a)

    running 1 test
    test completions_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.07s

        Running tests/diagnostics.rs (target/debug/deps/diagnostics-a67922b13413df1a)

    running 1 test
    test diagnostics_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.82s

        Running tests/hover.rs (target/debug/deps/hover-b842dee03f53bd8f)

    running 1 test
    test hover_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 12.47s

        Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-b0216bd9d18428d9)

    running 1 test
    test inlay_hints_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.13s

        Running tests/signature_help.rs (target/debug/deps/signature_help-7c75d56b93794a3b)

    running 1 test
    test signature_help_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 7.32s

        Running unittests src/lib.rs (target/debug/deps/test_utils-8734d34d6781b231)

    running 1 test
    test tests::offset_at_variants_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests ink-analyzer

    running 1 test
    test crates/analyzer/src/lib.rs - (line 7) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.72s

    Doc-tests ink-analyzer-ir

    running 1 test
    test crates/ir/src/lib.rs - (line 7) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.28s

    Doc-tests ink-analyzer-macro

    running 4 tests
    test crates/macro/src/lib.rs - from_ast_derive (line 35) ... ok
    test crates/macro/src/lib.rs - from_syntax_derive (line 100) ... ok
    test crates/macro/src/lib.rs - from_ink_attribute_derive (line 70) ... ok
    test crates/macro/src/lib.rs - (line 6) ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.72s

    Doc-tests ink-lsp-server

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests test-utils

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    ```

### Docker Feedback

- [x] docker image build passes:
    ```zsh
    % docker build -t ink-analyzer .
    [+] Building 14.5s (8/8) FINISHED docker:desktop-linux
    => [internal] load build definition from Dockerfile 0.0s
    => => transferring dockerfile: 247B 0.0s
    => [internal] load .dockerignore 0.0s
    => => transferring context: 475B 0.0s
    => [internal] load metadata for docker.io/library/rust:1.69-slim-bullseye 3.8s
    => [1/3] FROM docker.io/library/rust:1.69-slim-bullseye@sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b 10.3s
    => => resolve docker.io/library/rust:1.69-slim-bullseye@sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b 0.0s
    => => sha256:02e0b15432c05bf3b4c2f6216a4345e9658d6240bc5145edcb535e6922b8536b 984B / 984B 0.0s
    => => sha256:64b11e12e14c9cafaa4361b544fb50df754a3df4f71bf6ed2af50edc8494d380 742B / 742B 0.0s
    => => sha256:04706536c6ba24725cc58aee05d5d4542ec04fd23e00e3d5a0c530421bace5a4 4.86kB / 4.86kB 0.0s
    => => sha256:d981f2c20c93e1c57a46cd87bc5b9a554be5323072a0d0ab4b354aabd237bbcf 30.05MB / 30.05MB 0.9s
    => => sha256:c9a3025ba314322f78c072ba74c6eb614857411e28f646a8f0513a6f1e81a330 295.16MB / 295.16MB 6.3s
    => => extracting sha256:d981f2c20c93e1c57a46cd87bc5b9a554be5323072a0d0ab4b354aabd237bbcf 0.9s
    => => extracting sha256:c9a3025ba314322f78c072ba74c6eb614857411e28f646a8f0513a6f1e81a330 3.7s
    => [internal] load build context 0.1s
    => => transferring context: 2.94MB 0.0s
    => [2/3] WORKDIR /app 0.3s
    => [3/3] COPY . . 0.0s
    => exporting to image 0.1s
    => => exporting layers 0.0s
    => => writing image sha256:c9ba83086c5d4315772f25b1e6411d4a17b055e597104db86e299d7138dcd501 0.0s
    => => naming to docker.io/library/ink-analyzer 0.0s

    What's Next?
    View a summary of image vulnerabilities and recommendations → docker scout quickview

    % docker image ls
    REPOSITORY     TAG       IMAGE ID       CREATED SIZE
    ink-analyzer   latest    c9ba83086c5d   About a minute ago   1.04GB
    ```
- [ ] running the docker container ~~fails with "Either upgrade to rustc 1.70" although I'm running rustc 1.73.0 on my machine~~ successfully runs the tests:
    ```zsh
         % docker run -it ink-analyzer      
     Updating crates.io index
     Downloaded la-arena v0.3.1
     Downloaded nohash-hasher v0.2.0
     Downloaded smol_str v0.2.0
     Downloaded tinyvec_macros v0.1.1
     Downloaded subtle v2.5.0
     Downloaded heck v0.4.1
     Downloaded line-index v0.1.0-pre.1
     Downloaded equivalent v1.0.1
     Downloaded colorchoice v1.0.0
     Downloaded anstyle v1.0.3
     Downloaded rustc-hash v1.1.0
     Downloaded countme v3.0.1
     Downloaded lsp-server v0.7.4
     Downloaded unicode-xid v0.2.4
     Downloaded itoa v1.0.9
     Downloaded jod-thread v0.1.2
     Downloaded form_urlencoded v1.2.0
     Downloaded always-assert v0.1.3
     Downloaded strsim v0.10.0
     Downloaded perf-event-open-sys v1.0.1
     Downloaded text-size v1.1.1
     Downloaded percent-encoding v2.3.0
     Downloaded block-buffer v0.10.4
     Downloaded crypto-common v0.1.6
     Downloaded anstyle-query v1.0.0
     Downloaded generic-array v0.14.7
     Downloaded digest v0.10.7
     Downloaded utf8parse v0.2.1
     Downloaded anstyle-parse v0.2.1
     Downloaded perf-event v0.4.7
     Downloaded drop_bomb v0.1.5
     Downloaded cov-mark v2.0.0-pre.1
     Downloaded parking_lot_core v0.9.8
     Downloaded crossbeam-utils v0.8.16
     Downloaded rowan v0.15.11
     Downloaded blake2 v0.10.6
     Downloaded unicode-bidi v0.3.13
     Downloaded log v0.4.20
     Downloaded tinyvec v1.6.0
     Downloaded serde_derive v1.0.188
     Downloaded unicode-ident v1.0.12
     Downloaded ryu v1.0.15
     Downloaded indexmap v2.0.0
     Downloaded url v2.4.1
     Downloaded memchr v2.6.3
     Downloaded itertools v0.11.0
     Downloaded aho-corasick v1.1.1
     Downloaded itertools v0.10.5
     Downloaded regex v1.9.5
     Downloaded regex-syntax v0.7.5
     Downloaded regex-automata v0.3.8
     Downloaded libc v0.2.148
     Downloaded syn v2.0.37
     Downloaded idna v0.4.0
     Downloaded serde_json v1.0.107
     Downloaded hashbrown v0.12.3
     Downloaded unicode-normalization v0.1.22
     Downloaded clap_builder v4.4.4
     Downloaded hashbrown v0.14.0
     Downloaded proc-macro2 v1.0.67
     Downloaded crossbeam-channel v0.5.8
     Downloaded clap v4.4.4
     Downloaded serde v1.0.188
     Downloaded lsp-types v0.94.1
     Downloaded unicode-properties v0.1.0
     Downloaded prettyplease v0.2.15
     Downloaded smallvec v1.11.1
     Downloaded dashmap v5.5.3
     Downloaded typenum v1.17.0
     Downloaded clap_derive v4.4.2
     Downloaded anyhow v1.0.75
     Downloaded lock_api v0.4.10
     Downloaded once_cell v1.18.0
     Downloaded quote v1.0.33
     Downloaded triomphe v0.1.9
     Downloaded version_check v0.9.4
     Downloaded anstream v0.5.0
     Downloaded either v1.9.0
     Downloaded clap_lex v0.5.1
     Downloaded autocfg v1.1.0
     Downloaded serde_repr v0.1.16
     Downloaded cfg-if v1.0.0
     Downloaded memoffset v0.8.0
     Downloaded scopeguard v1.2.0
     Downloaded bitflags v1.3.2
     Downloaded ra_ap_limit v0.0.173
     Downloaded ra_ap_stdx v0.0.173
     Downloaded ra_ap_text_edit v0.0.173
     Downloaded ra_ap_profile v0.0.173
     Downloaded ra-ap-rustc_lexer v0.10.0
     Downloaded ra_ap_parser v0.0.173
     Downloaded ra_ap_syntax v0.0.173
     Downloaded 92 crates (5.6 MB) in 1.56s
     Compiling proc-macro2 v1.0.67
     Compiling unicode-ident v1.0.12
     Compiling cfg-if v1.0.0
     Compiling libc v0.2.148
     Compiling autocfg v1.1.0
     Compiling crossbeam-utils v0.8.16
     Compiling parking_lot_core v0.9.8
     Compiling typenum v1.17.0
     Compiling log v0.4.20
     Compiling version_check v0.9.4
     Compiling scopeguard v1.2.0
     Compiling smallvec v1.11.1
     Compiling hashbrown v0.14.0
     Compiling once_cell v1.18.0
     Compiling serde v1.0.188
     Compiling text-size v1.1.1
     Compiling tinyvec_macros v0.1.1
     Compiling either v1.9.0
     Compiling rustc-hash v1.1.0
     Compiling tinyvec v1.6.0
     Compiling unicode-xid v0.2.4
     Compiling unicode-properties v0.1.0
     Compiling generic-array v0.14.7
     Compiling lock_api v0.4.10
     Compiling memoffset v0.8.0
     Compiling serde_json v1.0.107
     Compiling ra-ap-rustc_lexer v0.10.0
     Compiling itertools v0.10.5
     Compiling always-assert v0.1.3
     Compiling ra_ap_limit v0.0.173
     Compiling hashbrown v0.12.3
     Compiling itoa v1.0.9
     Compiling crossbeam-channel v0.5.8
     Compiling quote v1.0.33
     Compiling subtle v2.5.0
     Compiling syn v2.0.37
     Compiling ryu v1.0.15
     Compiling drop_bomb v0.1.5
     Compiling jod-thread v0.1.2
     Compiling equivalent v1.0.1
     Compiling la-arena v0.3.1
     Compiling perf-event-open-sys v1.0.1
     Compiling unicode-bidi v0.3.13
     Compiling percent-encoding v2.3.0
     Compiling ra_ap_stdx v0.0.173
     Compiling indexmap v2.0.0
     Compiling dashmap v5.5.3
     Compiling perf-event v0.4.7
     Compiling unicode-normalization v0.1.22
     Compiling form_urlencoded v1.2.0
     Compiling ra_ap_parser v0.0.173
     Compiling smol_str v0.2.0
     Compiling cov-mark v2.0.0-pre.1
     Compiling triomphe v0.1.9
     Compiling itertools v0.11.0
     Compiling countme v3.0.1
     Compiling bitflags v1.3.2
     Compiling memchr v2.6.3
     Compiling regex-syntax v0.7.5
     Compiling utf8parse v0.2.1
     Compiling block-buffer v0.10.4
     Compiling crypto-common v0.1.6
     Compiling idna v0.4.0
     Compiling rowan v0.15.11
     Compiling digest v0.10.7
     Compiling ra_ap_text_edit v0.0.173
     Compiling ra_ap_profile v0.0.173
     Compiling blake2 v0.10.6
     Compiling anstyle-parse v0.2.1
     Compiling aho-corasick v1.1.1
     Compiling anstyle-query v1.0.0
     Compiling ra_ap_syntax v0.0.173
     Compiling anstyle v1.0.3
     Compiling colorchoice v1.0.0
     Compiling heck v0.4.1
     Compiling strsim v0.10.0
     Compiling anstream v0.5.0
     Compiling clap_lex v0.5.1
     Compiling anyhow v1.0.75
     Compiling clap_builder v4.4.4
     Compiling nohash-hasher v0.2.0
     Compiling prettyplease v0.2.15
     Compiling line-index v0.1.0-pre.1
     Compiling regex-automata v0.3.8
     Compiling serde_derive v1.0.188
     Compiling ink-analyzer-macro v0.6.1 (/app/crates/macro)
     Compiling serde_repr v0.1.16
     Compiling clap_derive v4.4.2
     Compiling regex v1.9.5
     Compiling ink-analyzer-ir v0.10.4 (/app/crates/ir)
     Compiling ink-analyzer v0.8.11 (/app/crates/analyzer)
     Compiling clap v4.4.4
     Compiling url v2.4.1
     Compiling lsp-types v0.94.1
     Compiling lsp-server v0.7.4
     Compiling test-utils v0.0.0 (/app/crates/test-utils)
     Compiling ink-lsp-server v0.2.12 (/app/crates/lsp-server)
     Finished test [unoptimized + debuginfo] target(s) in 24.51s
          Running unittests src/lib.rs (target/debug/deps/ink_analyzer-4c348acc98a9bebe)

     running 142 tests
     test analysis::diagnostics::chain_extension::tests::invalid_quasi_direct_descendant_fails ... ok
     test analysis::diagnostics::chain_extension::tests::multiple_error_code_types_fails ... ok
     test analysis::diagnostics::chain_extension::tests::missing_error_code_type_fails ... ok
     test analysis::diagnostics::chain_extension::tests::invalid_trait_properties_fails ... ok
     test analysis::completions::tests::macro_completions_works ... ok
     test analysis::diagnostics::chain_extension::tests::non_overlapping_ids_works ... ok
     test analysis::diagnostics::chain_extension::tests::one_error_code_type_works ... ok
     test analysis::completions::tests::argument_completions_works ... ok
     test analysis::actions::attr::tests::actions_works ... ok
     test analysis::diagnostics::constructor::tests::ink_descendants_fails ... ok
     test analysis::diagnostics::chain_extension::tests::overlapping_ids_fails ... ok
     test analysis::actions::item::tests::actions_works ... ok
     test analysis::diagnostics::chain_extension::tests::valid_trait_properties_works ... ok
     test analysis::diagnostics::constructor::tests::missing_return_type_fails ... ok
     test analysis::diagnostics::chain_extension::tests::valid_trait_items_works ... ok
     test analysis::diagnostics::constructor::tests::self_receiver_fails ... ok
     test analysis::diagnostics::constructor::tests::invalid_callable_fails ... ok
     test analysis::diagnostics::chain_extension::tests::valid_quasi_direct_descendant_works ... ok
     test analysis::diagnostics::chain_extension::tests::invalid_trait_items_fails ... ok
     test analysis::diagnostics::contract::tests::invalid_quasi_direct_descendant_fails ... ok
     test analysis::diagnostics::contract::tests::missing_constructor_fails ... ok
     test analysis::diagnostics::contract::tests::missing_message_fails ... ok
     test analysis::diagnostics::contract::tests::missing_storage_fails ... ok
     test analysis::diagnostics::chain_extension::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::contract::tests::non_impl_parent_for_callables_fails ... ok
     test analysis::diagnostics::contract::tests::multiple_storage_items_fails ... ok
     test analysis::diagnostics::contract::tests::non_mod_fails ... ok
     test analysis::diagnostics::contract::tests::multiple_wildcard_selectors_fails ... ok
     test analysis::actions::item::tests::is_focused_on_item_declaration_and_body_works ... ok
     test analysis::diagnostics::constructor::tests::no_ink_descendants_works ... ok
     test analysis::diagnostics::constructor::tests::valid_callable_works ... ok
     test analysis::diagnostics::contract::tests::out_of_line_mod_fails ... ok
     test analysis::diagnostics::constructor::tests::return_type_works ... ok
     test analysis::diagnostics::constructor::tests::no_self_receiver_works ... ok
     test analysis::diagnostics::constructor::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::contract::tests::root_items_not_in_root_fails ... ok
     test analysis::diagnostics::event::tests::cfg_field_fails ... ok
     test analysis::diagnostics::event::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::event::tests::contract_parent_works ... ok
     test analysis::diagnostics::event::tests::ink_topic_field_works ... ok
     test analysis::diagnostics::event::tests::non_cfg_field_works ... ok
     test analysis::diagnostics::contract::tests::overlapping_selectors_fails ... ok
     test analysis::diagnostics::event::tests::non_contract_parent_fails ... ok
     test analysis::diagnostics::event::tests::non_pub_struct_fails ... ok
     test analysis::diagnostics::event::tests::pub_struct_works ... ok
     test analysis::diagnostics::event::tests::non_topic_ink_field_fails ... ok
     test analysis::diagnostics::event::tests::struct_with_no_generics_works ... ok
     test analysis::diagnostics::event::tests::struct_with_generics_fails ... ok
     test analysis::diagnostics::extension::tests::ink_descendants_fails ... ok
     test analysis::diagnostics::extension::tests::invalid_fn_fails ... ok
     test analysis::diagnostics::extension::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::extension::tests::no_ink_descendants_works ... ok
     test analysis::diagnostics::extension::tests::self_receiver_fails ... ok
     test analysis::diagnostics::extension::tests::no_self_receiver_works ... ok
     test analysis::diagnostics::file::tests::invalid_quasi_direct_descendant_fails ... ok
     test analysis::diagnostics::extension::tests::valid_fn_works ... ok
     test analysis::diagnostics::file::tests::multiple_contract_definitions_fails ... ok
     test analysis::diagnostics::file::tests::no_contract_definitions_works ... ok
     test analysis::diagnostics::file::tests::valid_quasi_direct_descendant_works ... ok
     test analysis::diagnostics::file::tests::one_contract_definition_works ... ok
     test analysis::diagnostics::ink_e2e_test::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::ink_e2e_test::tests::fn_works ... ok
     test analysis::diagnostics::ink_e2e_test::tests::ink_descendants_fails ... ok
     test analysis::diagnostics::ink_e2e_test::tests::no_ink_descendants_works ... ok
     test analysis::diagnostics::ink_e2e_test::tests::non_fn_fails ... ok
     test analysis::diagnostics::ink_impl::tests::annotated_or_contains_callables_works ... ok
     test analysis::diagnostics::ink_impl::tests::impl_parent_for_callables_works ... ok
     test analysis::diagnostics::ink_impl::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::ink_impl::tests::invalid_impl_properties_fails ... ok
     test analysis::diagnostics::ink_impl::tests::invalid_quasi_direct_descendant_fails ... ok
     test analysis::diagnostics::ink_impl::tests::invalid_trait_definition_impl_fails ... ok
     test analysis::diagnostics::ink_impl::tests::missing_annotation_and_no_callables_ignored ... ok
     test analysis::diagnostics::ink_impl::tests::non_impl_fails ... ok
     test analysis::diagnostics::ink_impl::tests::non_impl_parent_for_callables_fails ... ok
     test analysis::diagnostics::ink_impl::tests::impl_works ... ok
     test analysis::diagnostics::ink_impl::tests::valid_impl_properties_works ... ok
     test analysis::diagnostics::ink_impl::tests::valid_quasi_direct_descendant_works ... ok
     test analysis::diagnostics::ink_test::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::ink_test::tests::fn_works ... ok
     test analysis::diagnostics::ink_test::tests::ink_descendants_fails ... ok
     test analysis::diagnostics::ink_test::tests::no_ink_descendants_works ... ok
     test analysis::diagnostics::ink_test::tests::non_fn_fails ... ok
     test analysis::diagnostics::contract::tests::one_or_multiple_messages_works ... ok
     test analysis::diagnostics::contract::tests::one_or_no_wildcard_selectors_works ... ok
     test analysis::diagnostics::message::tests::ink_descendants_fails ... ok
     test analysis::diagnostics::message::tests::invalid_callable_fails ... ok
     test analysis::diagnostics::ink_impl::tests::valid_trait_definition_impl_works ... ok
     test analysis::diagnostics::message::tests::non_self_ref_receiver_fails ... ok
     test analysis::diagnostics::contract::tests::inline_mod_works ... ok
     test analysis::diagnostics::message::tests::self_return_type_fails ... ok
     test analysis::diagnostics::contract::tests::one_storage_item_works ... ok
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
     test analysis::diagnostics::trait_definition::tests::invalid_quasi_direct_descendant_fails ... ok
     test analysis::diagnostics::trait_definition::tests::invalid_trait_items_fails ... ok
     test analysis::diagnostics::trait_definition::tests::invalid_trait_properties_fails ... ok
     test analysis::diagnostics::trait_definition::tests::missing_message_fails ... ok
     test analysis::diagnostics::trait_definition::tests::multiple_messages_works ... ok
     test analysis::diagnostics::trait_definition::tests::one_message_works ... ok
     test analysis::diagnostics::contract::tests::valid_quasi_direct_descendant_works ... ok
     test analysis::diagnostics::message::tests::no_ink_descendants_works ... ok
     test analysis::diagnostics::message::tests::compound_diagnostic_works ... ok
     test analysis::diagnostics::contract::tests::one_or_multiple_constructors_works ... ok
     test analysis::diagnostics::utils::tests::duplicate_attributes_and_arguments_fails ... ok
     test analysis::diagnostics::utils::tests::identifiers_not_prefixed_with_ink_works ... ok
     test analysis::diagnostics::utils::tests::identifiers_prefixed_with_ink_fails ... ok
     test analysis::diagnostics::utils::tests::conflicting_attributes_and_arguments_fails ... ok
     test analysis::diagnostics::utils::tests::invalid_attribute_argument_format_and_value_type_fails ... ok
     test analysis::diagnostics::trait_definition::tests::valid_trait_properties_works ... ok
     test analysis::diagnostics::message::tests::valid_callable_works ... ok
     test analysis::diagnostics::utils::tests::known_ink_attributes_works ... ok
     test analysis::diagnostics::utils::tests::unknown_ink_attributes_fails ... ok
     test analysis::diagnostics::message::tests::self_ref_receiver_works ... ok
     test analysis::diagnostics::utils::tests::no_conflicting_attributes_and_arguments_works ... ok
     test analysis::diagnostics::utils::tests::valid_attribute_argument_format_and_value_type_works ... ok
     test codegen::tests::invalid_project_name_fails ... ok
     test analysis::hover::tests::hover_works ... ok
     test analysis::diagnostics::trait_definition::tests::valid_quasi_direct_descendant_works ... ok
     test analysis::diagnostics::utils::tests::no_duplicate_attributes_and_arguments_works ... ok
     test analysis::inlay_hints::tests::inlay_hints_works ... ok
     test analysis::diagnostics::trait_definition::tests::valid_trait_items_works ... ok
     test analysis::signature_help::tests::signature_help_works ... ok
     test analysis::diagnostics::contract::tests::non_overlapping_selectors_works ... ok
     test analysis::diagnostics::trait_definition::tests::compound_diagnostic_works ... ok
     test codegen::tests::valid_project_name_works ... ok
     test analysis::diagnostics::contract::tests::root_items_in_root_works ... ok
     test analysis::diagnostics::contract::tests::impl_parent_for_callables_works ... ok
     test analysis::diagnostics::contract::tests::compound_diagnostic_works ... ok

     test result: ok. 142 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 9.78s

          Running tests/actions.rs (target/debug/deps/actions-3a275d3f05bfffb5)

     running 1 test
     test actions_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 12.95s

          Running tests/completions.rs (target/debug/deps/completions-d748789d93067f10)

     running 1 test
     test completions_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.70s

          Running tests/diagnostics.rs (target/debug/deps/diagnostics-76c75b734005a0e9)

     running 1 test
     test diagnostics_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.05s

          Running tests/hover.rs (target/debug/deps/hover-3ad9e30033092c4a)

     running 1 test
     test hover_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.86s

          Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-b62abe365b2fdc8f)

     running 1 test
     test inlay_hints_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.30s

          Running tests/signature_help.rs (target/debug/deps/signature_help-3a7dd83751b280ad)

     running 1 test
     test signature_help_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.48s

          Running unittests src/lib.rs (target/debug/deps/ink_analyzer_ir-0e8943f3eaaeb225)

     running 37 tests
     test attrs::meta::separator::tests::cast_works ... ok
     test attrs::meta::name::tests::cast_works ... ok
     test chain_extension::tests::cast_works ... ok
     test attrs::meta::value::tests::cast_works ... ok
     test extension::tests::cast_works ... ok
     test ink_test::tests::cast_works ... ok
     test attrs::utils::tests::parse_ink_args_works ... ok
     test ink_e2e_test::tests::cast_works ... ok
     test attrs::utils::tests::sort_ink_args_works ... ok
     test storage::tests::cast_works ... ok
     test file::tests::parse_works ... ok
     test event::tests::cast_works ... ok
     test constructor::tests::cast_works ... ok
     test selector::tests::cast_arg_works ... ok
     test topic::tests::cast_works ... ok
     test attrs::tests::cast_ink_attribute_works ... ok
     test trait_definition::tests::cast_works ... ok
     test tree::ast_ext::tests::parent_ast_item_works ... ok
     test storage_item::tests::cast_works ... ok
     test tree::utils::tests::ink_attrs_ancestors_works ... ok
     test ink_impl::tests::cast_works ... ok
     test tree::utils::tests::ink_attrs_closest_ancestors_works ... ok
     test message::tests::cast_works ... ok
     test tree::utils::tests::ink_attrs_closest_descendants_works ... ok
     test tree::utils::tests::ink_attrs_in_scope_works ... ok
     test tree::item_at_offset::tests::probable_and_normalized_parent_variants_works ... ok
     test tree::utils::tests::ink_arg_by_kind_works ... ok
     test tree::item_at_offset::tests::focused_token_and_affixes_works ... ok
     test tree::utils::tests::ink_attrs_descendants_works ... ok
     test tree::utils::tests::ink_attrs_works ... ok
     test tree::utils::tests::ink_args_works ... ok
     test tree::item_at_offset::tests::prev_and_next_token_variants_works ... ok
     test selector::tests::compose_works ... ok
     test tree::utils::tests::ink_impl_closest_descendants_works ... ok
     test tree::utils::tests::ink_callable_closest_descendants_works ... ok
     test tree::item_at_offset::tests::parent_variants_works ... ok
     test contract::tests::cast_works ... ok

     test result: ok. 37 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

          Running unittests src/lib.rs (target/debug/deps/ink_analyzer_macro-3fd272b386411353)

     running 13 tests
     test from_ast::tests::struct_without_ast_field_fails ... ok
     test from_ink_attribute::tests::struct_without_ink_attr_field_fails ... ok
     test from_ast::tests::struct_with_ast_field_works ... ok
     test from_syntax::tests::struct_with_none_of_expected_fields_fails ... ok
     test utils::tests::contains_field_works ... ok
     test from_syntax::tests::struct_with_ast_field_works ... ok
     test from_syntax::tests::struct_with_ink_attr_field_works ... ok
     test utils::tests::find_attribute_by_path_works ... ok
     test utils::tests::find_field_works ... ok
     test utils::tests::parse_struct_fields_works ... ok
     test from_ink_attribute::tests::struct_with_ink_attr_field_works ... ok
     test from_syntax::tests::struct_with_syntax_field_works ... ok
     test from_ink_attribute::tests::optional_fields_works ... ok

     test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running unittests src/lib.rs (target/debug/deps/ink_lsp_server-8ed8a4b440cfad67)

     running 23 tests
     test dispatch::handlers::notification::tests::handle_did_change_text_document_works ... ok
     test dispatch::handlers::notification::tests::handle_did_close_text_document_works ... ok
     test dispatch::handlers::notification::tests::handle_did_open_text_document_works ... ok
     test dispatch::handlers::request::tests::handle_hover_works ... ok
     test dispatch::handlers::request::tests::handle_completion_works ... ok
     test initialize::tests::server_capabilities_works ... ok
     test translator::from_lsp::tests::offset_works ... ok
     test memory::tests::memory_works ... ok
     test dispatch::handlers::request::tests::handle_signature_help_works ... ok
     test dispatch::handlers::request::tests::handle_inlay_hint_works ... ok
     test dispatch::handlers::request::tests::handle_code_action_works ... ok
     test dispatch::handlers::request::tests::handle_execute_command_new_project_works ... ok
     test translator::to_lsp::tests::position_works ... ok
     test dispatch::routers::notification::tests::request_router_works ... ok
     test initialize::tests::initialize_works ... ok
     test utils::tests::can_create_project_via_workspace_edit_works ... ok
     test dispatch::routers::request::tests::request_router_works ... ok
     test utils::tests::position_encoding_works ... ok
     test utils::tests::code_actions_kinds_works ... ok
     test utils::tests::snippet_support_works ... ok
     test utils::tests::signature_support_works ... ok
     test dispatch::tests::main_loop_and_dispatcher_works ... ok
     test dispatch::actions::tests::publish_diagnostics_works ... ok

     test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

          Running unittests src/main.rs (target/debug/deps/ink_lsp_server-54f429ab5215bc1f)

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running tests/actions.rs (target/debug/deps/actions-10a8f74121cc16c0)

     running 1 test
     test actions_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 25.47s

          Running tests/commands.rs (target/debug/deps/commands-57208716426662f0)

     running 1 test
     test create_project_command_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

          Running tests/completions.rs (target/debug/deps/completions-430fb8c6ce666ae4)

     running 1 test
     test completions_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 9.07s

          Running tests/diagnostics.rs (target/debug/deps/diagnostics-4e7adb641f4893cb)

     running 1 test
     test diagnostics_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.03s

          Running tests/hover.rs (target/debug/deps/hover-c14ababb61228484)

     running 1 test
     test hover_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 11.11s

          Running tests/inlay_hints.rs (target/debug/deps/inlay_hints-2d1f6363627bc24a)

     running 1 test
     test inlay_hints_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 3.68s

          Running tests/signature_help.rs (target/debug/deps/signature_help-590656b5acc056f8)

     running 1 test
     test signature_help_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 6.49s

          Running unittests src/lib.rs (target/debug/deps/test_utils-49d5af7b7c0a3a4d)

     running 1 test
     test tests::offset_at_variants_works ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Doc-tests ink-analyzer

     running 1 test
     test crates/analyzer/src/lib.rs - (line 7) ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s

     Doc-tests ink-analyzer-ir

     running 1 test
     test crates/ir/src/lib.rs - (line 7) ... ok

     test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.11s

     Doc-tests ink-analyzer-macro

     running 4 tests
     test crates/macro/src/lib.rs - from_ast_derive (line 35) ... ok
     test crates/macro/src/lib.rs - from_syntax_derive (line 100) ... ok
     test crates/macro/src/lib.rs - from_ink_attribute_derive (line 70) ... ok
     test crates/macro/src/lib.rs - (line 6) ... ok

     test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s

     Doc-tests ink-lsp-server

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Doc-tests test-utils

     running 0 tests

     test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

### Language Server Feedback

- the installation of the [vs code extension](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer) as well as their features, such as commands, diagnostics, quickfixes, auto-completions, hover contents, code actions, inlay hints and signature helps have been successfully smoke-tested
