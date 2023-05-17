# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/openbrush-follow-up-2.md
- **Milestone:** 7
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/727-Ventures/openbrush-contracts/blob/1a9f25b0b50162371b49f28bee6fb73623707125/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [PSP22 pallet README](https://github.com/727-Ventures/openbrush-contracts/tree/1a9f25b0b50162371b49f28bee6fb73623707125/examples/psp22_pallet), [OpenBrush Docs - PSP22 Pallet](https://727-ventures.github.io/openbrush-contracts/smart-contracts/PSP22-Pallet/) | See [documentation feedback](#documentation-feedback) |
| 1. | Implement `AssetPallet` chain extension on substrate level to work with `pallet-assets` in runtime | <ul><li>[x] </li></ul> | [pallet assets chain extension](https://github.com/727-Ventures/pallet-assets-chain-extension/blob/85e30a466cf9bdaff9eefadf7a59b130c40db82f/src/substrate.rs) | - |
| 2. | Implement `AssetPallet` chain extension in OpenBrush | <ul><li>[x] </li></ul> | [pallet assets chain extension](https://github.com/727-Ventures/pallet-assets-chain-extension/blob/85e30a466cf9bdaff9eefadf7a59b130c40db82f/src/ink.rs) | - |
| 3. | Implement PSP22 with that chain extension in OpenBrush | <ul><li>[x] </li></ul> | [psp22 pallet](https://github.com/727-Ventures/openbrush-contracts/blob/1ad6286f3b93c216e13e67eb1fa5231879caa7bc/contracts/src/token/psp22_pallet/psp22_pallet.rs) | - |
| 4. | Create standards for `AssetPallet` Chain Extension and for `PSP22Asset` extension | <ul><li>[x] </li></ul> | [chain extension registration](https://github.com/paritytech/chainextension-registry/commit/5d4d180e62d0cc8df01093c2440fb13521722688) | - |
| 5. | Advanced ink! unit testing framework | <ul><li>[x] </li></ul> | [PR for cross-contract tests (open)](https://github.com/paritytech/ink/pull/1589), [support for contract deployment](https://github.com/paritytech/ink/pull/1589/files#diff-fbdf5aa06d125a406b5e67346d6929c3befb7bbf449636a72384efdbe83a19d5R587-R596), [chain extension registration](https://github.com/paritytech/chainextension-registry/commit/5d4d180e62d0cc8df01093c2440fb13521722688) | - |
| 6. | Support of XCM and cross transferring of `PSP22` tokens | <ul><li>[x] </li></ul> | [Medium Article](https://medium.com/@krikolkk/xcm-and-cross-chain-asset-transferring-6922a0ba209) | The capability of creating `pallet-assets` tokens using the `PSP22` contracts was tested. The transfer of `pallet-assets` tokens created on Westend was successfully tested as well, according to the guide. |
| 7. | Add support for ink! 4.0 | <ul><li>[x] </li></ul> | [Openbrush v3.0.0-beta release (supports ink! v4)](https://github.com/727-Ventures/openbrush-contracts/releases/tag/3.0.0-beta) | - |
| 8a. | Marketing - Create 2 educational video for OpenBrush/ink! | <ul><li>[x] </li></ul> | [Ink! Onboarding video](https://www.youtube.com/watch?v=Rp5XvMM7ba8), [Ink! PSP22 tutorial](https://www.youtube.com/watch?v=JDua1vwBR5I) | See [Video Tutorial Feedback](#video-tutorial-feedback) |
| 8b. | Marketing - The website upgrade | <ul><li>[x] </li></ul> | [PR](https://github.com/727-Ventures/openbrush-website/pull/56/files), [website repo](https://github.com/727-Ventures/openbrush-website) | - | 

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- Note that deliverable 1-8a will be addressed after the guide is added (see [documentation feedback](#documentation-feedback))
- 8b is not open-sourced yet

### Documentation Feedback

- Spec: _We will provide a report of how to transition from PSP22 on contract level to PSP22 on pallet level. Add documentation about the workflow of PSP22 and Statemint parachain._
- ~~I didn't identify any guide on how to test this delivery.~~ -> added at the bottom of the [milestone delivery report](https://github.com/w3f/Grant-Milestone-Delivery/pull/705/files?short_path=c8f1e0d#diff-c8f1e0dec04b06b1adb5decea94d4996a3b2b8a586a68865d7b95891300cb14d)
- ~~Neither did I identify _a report of how to transition from PSP22 on contract level to PSP22 on pallet level_~~ -> [OpenBrush Docs](https://727-ventures.github.io/openbrush-contracts/smart-contracts/PSP22-Pallet/)

In general, please add instructions on how to test this delivery.

### Video Tutorial Feedback

- The PSP22 tutorial video does a good job explaining how to use the PSP22 contracts.
- ~~However, it would have been helpful if the code written during the tutorial was linked in the description.~~ -> code was uploaded retrospectively [here](https://github.com/coreggon11/ink-tutorial) and will be added to the video description soon
- I uploaded the code I wrote along the tutorial to [GitHub](https://github.com/takahser/ink-brush-tutorial-contracts), however, there are errors (as discussed on Element)

### Automated Tests

- Unit tests pass:

    ```bash
    openbrush-contracts % RUSTFLAGS="-D warnings" cargo +nightly test --workspace --features test-all -- --test-threads=10
        Updating crates.io index
        Updating git repository `https://github.com/727-ventures/pallet-assets-chain-extension`
        Updating git repository `https://github.com/727-Ventures/obce`
    Downloaded tuple v0.5.1
    Downloaded 1 crate (9.6 KB) in 0.38s
    Compiling proc-macro2 v1.0.51
    
    (...)

    Compiling openbrush v3.0.0-beta.1 (/Users/seraya/repos/openbrush-contracts)
        Finished test [unoptimized + debuginfo] target(s) in 50.32s
        Running unittests src/lib.rs (target/debug/deps/openbrush-8c447b66c957da10)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/access_control.rs (target/debug/deps/access_control-e7980fa142a78d71)

    running 10 tests
    test access_control::should_return_error_when_not_self_renounce_role ... ok
    test access_control::should_renounce_role ... ok
    test access_control::should_revoke_role ... ok
    test access_control::should_grant_role ... ok
    test access_control::should_grant_role_fail ... ok
    test access_control::should_return_error_when_account_doesnt_have_role ... ok
    test access_control::should_change_role_admin ... ok
    test access_control::should_init_with_default_admin ... ok
    test access_control::should_return_error_when_not_admin_revoke_role ... ok
    test access_control::should_return_error_when_not_admin_grant_role ... ok

    test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/access_control_enumerable.rs (target/debug/deps/access_control_enumerable-d8104d301a85bde2)

    running 3 tests
    test access_control_enumerable::should_change_role_member_count ... ok
    test access_control_enumerable::get_role_member_fails ... ok
    test access_control_enumerable::should_return_role_member ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/diamond_loupe.rs (target/debug/deps/diamond_loupe-d56434fa9f5a4dd4)

    running 14 tests
    test diamond::facets_edit_facetcut_works ... ignored
    test diamond::constructor_works ... ok
    test diamond::facets_add_selectors_works ... ok
    test diamond::facets_add_facetcut_works ... ok
    test diamond::facets_empty_works ... ok
    test diamond::facets_edit_selectors_works ... ok
    test diamond::facets_not_empty_works ... ok
    test diamond::facet_code_hash_works ... ok
    test diamond::facet_code_hashes_works ... ok
    test diamond::facet_function_selectors_works ... ok
    test diamond::facets_remove_facetcut_works ... ignored
    test diamond::facets_add_facetcut_should_fail_replace_existing ... ok
    test diamond::hash_is_clear_should_fails ... ok
    test diamond::facets_remove_selectors_works ... ok

    test result: ok. 12 passed; 0 failed; 2 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/ownable.rs (target/debug/deps/ownable-14a3d5e9e71e62cd)

    running 7 tests
    test ownable::owner_works ... ok
    test ownable::renounce_ownership_fails ... ok
    test ownable::transfer_ownership_fails ... ok
    test ownable::transfer_ownership_fails_zero_account ... ok
    test ownable::transfer_ownership_works ... ok
    test ownable::constructor_works ... ok
    test ownable::renounce_ownership_works ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/pausable.rs (target/debug/deps/pausable-3f0d8711d29acc16)

    running 7 tests
    test pausable::flip_fails ... ok
    test pausable::flip_works ... ok
    test pausable::pause_works ... ok
    test pausable::switch_pause_works ... ok
    test pausable::unpause_fails ... ok
    test pausable::double_pause_fails ... ok
    test pausable::unpause_works ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/payment_splitter.rs (target/debug/deps/payment_splitter-5d502cd9cbd03895)

    running 6 tests
    test payment_splitter::correct_release_unknown_account ... ok
    test payment_splitter::correct_release_all ... ok
    test payment_splitter::correct_release_with_zero_payment ... ok
    test payment_splitter::correct_release ... ok
    test payment_splitter::correct_init_values ... ok
    test payment_splitter::correct_second_release ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/proxy.rs (target/debug/deps/proxy-35dcc715bb24d031)

    running 4 tests
    test proxy::change_delegate_code_fails ... ok
    test proxy::change_delegate_code_works ... ok
    test proxy::constructor_works ... ok
    test proxy::get_delegate_code_works ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp22.rs (target/debug/deps/psp22-95fb4957d0ce2262)

    running 10 tests
    test psp22_test::after_token_transfer_should_fail_transfer ... ok
    test psp22_test::transfer_from_works ... ok
    test psp22_test::balance_of_works ... ok
    test psp22_test::before_token_transfer_should_fail_transfer ... ok
    test psp22_test::invalid_transfer_should_fail ... ok
    test psp22_test::new_works ... ok
    test psp22_test::total_supply_works ... ok
    test psp22_test::transfer_from_fails ... ok
    test psp22_test::allowance_must_not_change_on_failed_transfer ... ok
    test psp22_test::transfer_works ... ok

    test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp22_burnable.rs (target/debug/deps/psp22_burnable-c42e39341de432b4)

    running 7 tests
    test psp22_burnable::should_not_burn_if_burn_amount_greater_than_account_balance ... ok
    test psp22_burnable::burn_requested_amount_from ... ok
    test psp22_burnable::total_supply_decreases_after_burning ... ok
    test psp22_burnable::after_token_transfer_should_fail_burn ... ok
    test psp22_burnable::burn_requested_amount ... ok
    test psp22_burnable::before_token_transfer_should_fail_burn ... ok
    test psp22_burnable::should_emit_transfer_event_after_burn ... ok

    test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp22_capped.rs (target/debug/deps/psp22_capped-1fe3c3b1731bb31e)

    running 3 tests
    test psp22_capped::initializing_works ... ok
    test psp22_capped::mint_works ... ok
    test psp22_capped::mint_fails ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp22_flashmint.rs (target/debug/deps/psp22_flashmint-954d3748bc7da797)

    running 3 tests
    test psp22_flashmint::new_works ... ok
    test psp22_flashmint::no_allowance_for_fee ... ok
    test psp22_flashmint::flashloan_works ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp22_metadata.rs (target/debug/deps/psp22_metadata-4d38e7e877c94076)

    running 1 test
    test psp22_metadata::init_with_name_and_symbol_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp22_mintable.rs (target/debug/deps/psp22_mintable-ba442739235ef36b)

    running 6 tests
    test psp22_mintable::total_supply_increases_after_minting ... ok
    test psp22_mintable::before_token_transfer_should_fail_mint ... ok
    test psp22_mintable::mint_requested_amount ... ok
    test psp22_mintable::should_emit_transfer_event_after_mint ... ok
    test psp22_mintable::should_not_mint_to_zero_address ... ok
    test psp22_mintable::after_token_transfer_should_fail_mint ... ok

    test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp22_token_timelock.rs (target/debug/deps/psp22_token_timelock-7ede8d7884c42a0c)

    running 4 tests
    test psp22_timelock::new_works ... ok
    test psp22_timelock::release_soon_should_panic ... ok
    test psp22_timelock::release_works ... ok
    test psp22_timelock::release_without_deposit_should_panic ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp22_wrapper.rs (target/debug/deps/psp22_wrapper-7ec26979b44c7689)

    running 3 tests
    test psp22_wrapper::recover_works ... ok
    test psp22_wrapper::withdraw_to_works ... ok
    test psp22_wrapper::deposit_for_works ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp34.rs (target/debug/deps/psp34-063caff8bf420550)

    running 13 tests
    test psp34::approve_works ... ok
    test psp34::after_token_transfer_should_fail_transfer ... ok
    test psp34::approve_works_fails ... ok
    test psp34::approved_transfer_works ... ok
    test psp34::approved_for_all_works ... ok
    test psp34::collection_id_works ... ok
    test psp34::not_exist_token_transfer_should_fail ... ok
    test psp34::before_token_transfer_should_fail_transfer ... ok
    test psp34::not_owned_token_transfer_should_fail ... ok
    test psp34::operator_approve_works ... ok
    test psp34::not_approved_transfer_should_fail ... ok
    test psp34::transfer_works ... ok
    test psp34::total_supply_works ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp34_burnable.rs (target/debug/deps/psp34_burnable-0efe913ccebc93d3)

    running 4 tests
    test psp34_burnable::after_token_transfer_should_fail_burn ... ok
    test psp34_burnable::before_token_transfer_should_fail_burn ... ok
    test psp34_burnable::burn_not_existing_should_fail ... ok
    test psp34_burnable::burn_works ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp34_enumerable.rs (target/debug/deps/psp34_enumerable-31bf308ceeb9372d)

    running 5 tests
    test psp34_enumerable::enumerable_should_fail ... ok
    test psp34_enumerable::enumerable_mint_works ... ok
    test psp34_enumerable::enumerable_burn_works ... ok
    test psp34_enumerable::enumerable_transfer_works ... ok
    test psp34_enumerable::token_by_index_works ... ok

    test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp34_metadata.rs (target/debug/deps/psp34_metadata-0b6525e652b0b63a)

    running 1 test
    test psp34_metadata::init_with_name_and_symbol_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp34_mintable.rs (target/debug/deps/psp34_mintable-8187e537a9555873)

    running 4 tests
    test psp34_mintable::before_token_transfer_should_fail_mint ... ok
    test psp34_mintable::after_token_transfer_should_fail_mint ... ok
    test psp34_mintable::mint_existing_should_fail ... ok
    test psp34_mintable::mint_works ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp37.rs (target/debug/deps/psp37-df7aa35706cb56c9)

    running 13 tests
    test psp37::transfer_from ... ok
    test psp37::balance_of ... ok
    test psp37::total_supply_works ... ok
    test psp37::before_received_should_fail_transfer ... ok
    test psp37::transfer_from_insufficient_balance ... ok
    test psp37::approve ... ok
    test psp37::after_token_transfer_should_fail_transfer ... ok
    test psp37::transfer_insufficient_balance ... ok
    test psp37::transfer_no_approve ... ok
    test psp37::transfer_from_no_approve ... ok
    test psp37::before_token_transfer_should_fail_transfer ... ok
    test psp37::transfer ... ok
    test psp37::transfer_from_with_approve ... ok

    test result: ok. 13 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp37_batch.rs (target/debug/deps/psp37_batch-45d62d805288c4f0)

    running 5 tests
    test psp37_batch::batch_transfer_from_insufficient_balance ... ok
    test psp37_batch::transfer_batch_from ... ok
    test psp37_batch::batch_transfer ... ok
    test psp37_batch::batch_transfer_from_no_approve ... ok
    test psp37_batch::batch_transfer_with_approve ... ok

    test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp37_burnable.rs (target/debug/deps/psp37_burnable-c441647030996542)

    running 4 tests
    test psp37_burnable::before_token_transfer_should_fail_burn ... ok
    test psp37_burnable::burn_insufficient_balance ... ok
    test psp37_burnable::after_token_transfer_should_fail_burn ... ok
    test psp37_burnable::burn_works ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp37_enumerable.rs (target/debug/deps/psp37_enumerable-6a76aa8a9528ebdd)

    running 11 tests
    test psp37_enumerable::enumerable_mint_works ... ok
    test psp37_enumerable::balance_of ... ok
    test psp37_enumerable::enumerable_should_fail ... ok
    test psp37_enumerable::enumerable_burn_works ... ok
    test psp37_enumerable::enumerable_batch_transfer_works ... ok
    test psp37_enumerable::enumerable_transfer_works ... ok
    test psp37_enumerable::burn_works ... ok
    test psp37_enumerable::enumerable_self_transfer_works ... ok
    test psp37_enumerable::total_supply_works ... ok
    test psp37_enumerable::transfer ... ok
    test psp37_enumerable::token_by_index_works ... ok

    test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/psp37_metadata.rs (target/debug/deps/psp37_metadata-1b2670f8eb8b726a)

    running 1 test
    test psp37_metadata::metadata_works ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/psp37_mintable.rs (target/debug/deps/psp37_mintable-89be5919ac321162)

    running 3 tests
    test psp37_mintable::after_token_transfer_should_fail_mint ... ok
    test psp37_mintable::before_token_transfer_should_fail_mint ... ok
    test psp37_mintable::mint_works ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running tests/reentrancy_guard.rs (target/debug/deps/reentrancy_guard-f0e75da148ea6d9f)

    running 2 tests
    test reentrancy_guard::call_flip_after_lock_fails ... ok
    test reentrancy_guard::flip_works ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/timelock_controller.rs (target/debug/deps/timelock_controller-011092676b02b78f)

    running 12 tests
    test timelock_controller::should_schedule_batch_not_proposer ... ok
    test timelock_controller::should_schedule_not_proposal ... ok
    test timelock_controller::should_cancel_not_pending_operation ... ok
    test timelock_controller::should_schedule_low_delay ... ok
    test timelock_controller::should_schedule_already_scheduled ... ok
    test timelock_controller::should_schedule ... ok
    test timelock_controller::should_schedule_batch ... ok
    test timelock_controller::should_cancel ... ok
    test timelock_controller::should_init_with_default_admin ... ok
    test timelock_controller::should_cancel_not_proposer ... ok
    test timelock_controller::should_update_delay_not_timelock_role ... ok
    test timelock_controller::should_update_delay ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/openbrush_contracts-3b7fc8cde4b4c424)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/openbrush_lang-c7b15632cd753049)

    running 9 tests
    test macros::correct_storage_key ... ok
    test storage::multi_mapping::tests::get_works ... ok
    test storage::multi_mapping::tests::insert_and_count_works ... ok
    test storage::multi_mapping::tests::remove_non_exist_works ... ok
    test storage::multi_mapping::tests::remove_works ... ok
    test storage::mapping::tests::remove_and_contains_works ... ok
    test storage::multi_mapping::tests::contain_works ... ok
    test storage::multi_mapping::tests::double_insert_and_count_works ... ok
    test storage::mapping::tests::insert_and_get_work ... ok

    test result: ok. 9 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

        Running unittests src/lib.rs (target/debug/deps/openbrush_lang_codegen-6735c2baf4a84ae2)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/openbrush_lang_macro-4ea60249b4d5b9b2)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests openbrush

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests openbrush_contracts

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests openbrush_lang

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests openbrush_lang_codegen

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests openbrush_lang_macro

    running 8 tests
    test src/lib.rs - modifiers (line 271) ... ok
    test src/lib.rs - wrapper (line 382) ... ok
    test src/lib.rs - modifier_definition (line 203) ... ok
    test src/lib.rs - trait_definition (line 105) ... ok
    test src/lib.rs - upgradeable_storage (line 435) ... ok
    test src/lib.rs - modifiers (line 234) ... ok
    test src/lib.rs - modifiers (line 318) ... ok
    test src/lib.rs - trait_definition (line 64) ... ok

    test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.55s
    ```
