# Evaluation

- **Status:** In Progress
- **Application Document:** [w3f/Grants-Program#1660](https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | https://github.com/ideal-lab5/substrate/blob/milestone1/LICENSE-GPL3, [etf-pallet](https://github.com/ideal-lab5/substrate/blob/e1b7e7bbbcdb3131edb0c635cec30dfcbe1012eb/bin/node-template/pallets/etf/Cargo.toml#L8) | GPLv3 | 
| **0b.** | Documentation | https://ideal-lab5.github.io | also see inline documentation |
| **0c.** | Testing and Testing Guide | https://docs.google.com/document/d/1XfBpWfTUq-8DYJ43ZqJGpXb_AJMEvK6PV01nEn8JwQo/edit?usp=sharing |  |
| **0d.** | Docker | https://hub.docker.com/repository/docker/ideallabs/etf/general | |
| **0e.** | Article | https://ideallabs.substack.com/p/e6bb13fb-be93-4a22-b039-f81b7c70e93c | It isn't published yet. We're waiting on the milestone's acceptance before publishing. |
| **1.** | Substrate module: IBE Pallet/IBC Setup | https://github.com/ideal-lab5/substrate/tree/milestone1/bin/node-template/pallets/etf/src | Instead of IBC it seemed more fitting to call it the ETF pallet. |
| **2.** | Substrate module: Aura Pallet | id generation: https://github.com/ideal-lab5/substrate/blob/40dca8d373ccdd59696b251f87ba89029a5bae63/client/consensus/aura/src/standalone.rs#L123, hash to curve: https://github.com/ideal-lab5/substrate/blob/502032949307b1c19cba606dbef1d2f108f71a56/client/consensus/aura/src/dleq.rs#L108 | The original thought was we needed to know these values (pubkeys) before a session started, but we didn't. Instead we are able to just calculate these on the fly, and make them publicly calculable as well. This is explained in the docs with how we derive the public key for a slot id, which occurs when blocks are proposed and imported. The first link shows how identities are derived, the second link is to the hash-to-g1 function we use to hash slot ids to a point in G1. |
| **3.** | Substrate module: Aura Client | https://github.com/ideal-lab5/substrate/tree/milestone1/client/consensus/aura/src| See the attached article link and documentation for more insights on how this piece works. Here we have introduced a DLEQ proof and have made several changes in the aura client. |
| **4.** | Substrate Module: Validator Incentives |  block header/proof verification: https://github.com/ideal-lab5/substrate/blob/502032949307b1c19cba606dbef1d2f108f71a56/client/consensus/aura/src/standalone.rs#L390, simple reward of 10 tokens/session: https://github.com/ideal-lab5/substrate/blob/cf0a5193af80e458ee585a614f7ff12ece9b56fd/frame/aura/src/lib.rs#L269 | We implemented this directly in the aura pallet. Since we're using a PoA consensus, validator incentives are really simple: blocks with invalid slot secrets are rejected and the network fails to produce more blocks. At the beginning each session, each validator is awarded 10 tokens. Note that we see the PoA version as a stepping stone, and intend to integrate with Sassafrass + Babe.  |

## General Notes

Overall, this is a solid project, well docker-compose scripts and documentation, and all promised features work as expected. 

Currently most of the tests are available, only one test case failed.

### Logs

#### Unit tests

<details>

<summary> cargo +nightly test </summary>

```bash
running 10 tests
test tests::should_generate_and_verify_proof_complex ... ok
test tests::should_generate_and_verify_proof_simple ... ok
test tests::should_generate_empty_root ... ok
test tests::should_generate_root_complex ... ok
test tests::should_generate_root_pow_2 ... ok
test tests::should_generate_single_root ... ok
test tests::should_panic_on_invalid_leaf_index - should panic ... ok
test tests::should_generate_and_verify_proof_on_test_data ... ok
test tests::should_generate_and_verify_proof_large ... ok
test tests::should_generate_and_verify_proof_large_tree ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 46.89s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 20 tests
test test::drain_filter_works ... ok
test test::finalize_root_works ... ok
test test::finalize_with_descendent_works ... ok
test test::finalize_with_ancestor_works ... ok
test test::find_node_backtracks_after_finding_highest_descending_node ... ok
test test::find_node_index_with_predicate_works ... ok
test test::find_node_index_works ... ok
test test::finalize_works ... ok
test test::find_node_works ... ok
test test::import_doesnt_add_duplicates ... ok
test test::import_doesnt_revert ... ok
test test::iter_iterates_in_preorder ... ok
test test::minimizes_calls_to_is_descendent_of ... ok
test test::prune_works_for_far_away_ancestor ... ok
test test::post_order_traversal_requirement ... ok
test test::map_works ... ok
test test::prune_works_for_in_tree_hashes ... ok
test test::prune_works_for_not_direct_ancestor ... ok
test test::rebalance_works ... ok
test test::prune_works_for_out_of_tree_hashes ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s


running 18 tests
test analysis::tests::analysis_median_slopes_should_work ... ok
test analysis::tests::analysis_min_squares_iqr_uses_multiple_samples_for_same_parameters ... ok
test analysis::tests::analysis_median_min_squares_should_work ... ok
test analysis::tests::test_linear_regression ... ok
test analysis::tests::intercept_of_a_little_under_zero_is_rounded_up_to_zero ... ok
test tests::benchmarks::benchmark_error_wipes_storage ... ok
test tests::benchmarks::benchmark_override_works ... ok
test tests::benchmarks::benchmarks_macro_rename_works ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::benchmarks::benchmarks_macro_verify_works ... ok
test tests::benchmarks::benchmarks_macro_works ... ok
test tests_instance::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::benchmarks::benchmarks_macro_works_for_non_dispatchable ... ok
test tests_instance::benchmarks::bench_set_value ... ok
test tests_instance::benchmarks::bench_other_name ... ok
test tests_instance::benchmarks::bench_sort_vector ... ok
test tests::benchmarks::benchmarks_generate_unit_tests ... ok
test tests::benchmarks::test_values_per_component ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s


running 14 tests
test machine::hardware::tests::json_static_data ... ok
test pallet::writer::test::easy_log_16_works ... ok
test pallet::writer::test::pov_mode_measured_const_works ... ok
test pallet::writer::test::pov_mode_ignored_linear_works ... ok
test pallet::writer::test::pov_mode_measured_linear_works ... ok
test pallet::writer::test::additional_trie_layers_work ... ok
test pallet::writer::test::pov_mode_mel_constant_works ... ok
test pallet::writer::test::pov_mode_mel_linear_works ... ok
test pallet::writer::test::map_results_works ... ok
test shared::stats::test_stats::stats_correct ... ok
test shared::stats::test_stats::no_panic_short_lengths ... ok
test shared::weight_params::test_weight_params::calc_weight_detects_negative_mul ... ok
test shared::weight_params::test_weight_params::calc_weight_works ... ok
test pallet::writer::test::template_works ... ok

test result: ok. 14 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s


running 16 tests
test tests::emit_event_is_free ... ok
test tests::linear_measured_size_works ... ok
test tests::killing_is_free ... ok
test tests::linear_mel_size_works ... ok
test tests::additional_layers_do_not_matter ... ok
test tests::noop_is_free ... ok
test tests::partial_unbounded_read_best_effort ... ok
test tests::reading_twice_is_the_same_as_once ... ok
test tests::mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::storage_1m_map_multiple_entry_repeated_read_single_linear ... ok
test tests::storage_single_value_ignored_read_no_pov ... ok
test tests::storage_single_value_ignored_some_read_has_pov ... ok
test tests::storage_map_read_per_component_double_linear ... ok
test tests::unbounded_read_best_effort ... ok
test tests::storage_1m_map_one_entry_repeated_read_const ... ok
test tests::writing_is_free ... ok

test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test tests::ui_fail ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 17 tests
test onchain::tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test onchain::tests::too_many_winners_when_desired_targets_exceed_max_winners ... ok
test tests::solution_type::from_and_into_assignment_works ... ok
test tests::solution_type::from_assignment_fail_too_many_voters ... ok
test onchain::tests::onchain_seq_phragmen_works ... ok
test tests::solution_type::max_encoded_len_too_small ... ok
test tests::solution_type::max_encoded_len_upper_bound ... ok
test onchain::tests::onchain_phragmms_works ... ok
test tests::solution_type::solution_into_assignment_must_report_overflow ... ok
test tests::solution_type::remove_voter_works ... ok
test tests::solution_type::solution_struct_is_codec ... ok
test tests::solution_type::target_count_overflow_is_detected ... ok
test tests::solution_type::max_encoded_len_exact ... ok
test tests::solution_type::unique_targets_len_edge_count_works ... ok
test tests::solution_type::solution_struct_works_with_and_without_compact ... ok
test tests::solution_type::zero_target_count_is_ignored ... ok
test tests::index_assignments_generate_same_solution_as_plain_assignments ... ok

test result: ok. 17 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 23 tests
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::bad_extrinsic_not_inserted ... ok
test tests::all_weights_are_recorded_correctly ... ok
test tests::block_hooks_weight_is_stored ... ok
test tests::balance_transfer_dispatch_works ... ok
test tests::block_import_of_bad_extrinsic_root_fails - should panic ... ok
test tests::block_import_of_bad_state_root_fails - should panic ... ok
test tests::block_import_works ... ok
test tests::can_not_pay_for_tx_fee_on_full_lock ... ok
test tests::calculating_storage_root_twice_works ... ok
test tests::block_weight_and_size_is_stored_per_tx ... ok
test tests::custom_runtime_upgrade_is_called_when_using_execute_block_trait ... ok
test tests::event_from_runtime_upgrade_is_included ... ok
test tests::custom_runtime_upgrade_is_called_before_modules ... ok
test tests::inherents_fail_validate_block ... ok
test tests::last_runtime_upgrade_was_upgraded_works ... ok
test tests::offchain_worker_works_as_expected ... ok
test tests::runtime_upgraded_should_work ... ok
test tests::block_weight_limit_enforced ... ok
test tests::invalid_inherents_fail_block_execution - should panic ... ok
test tests::valid_inherents_position_works ... ok
test tests::validate_unsigned ... ok
test tests::invalid_inherent_position_fail - should panic ... ok

test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s


running 2 tests
test tests::can_load_state_snapshot ... ok
test tests::can_exclude_from_snapshot ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.17s


running 145 tests
test dispatch::per_dispatch_class_tests::add_works ... ok
test dispatch::per_dispatch_class_tests::checked_accrue_does_not_modify_on_error ... ok
test dispatch::per_dispatch_class_tests::checked_accrue_works ... ok
test dispatch::per_dispatch_class_tests::reduce_works ... ok
test dispatch::per_dispatch_class_tests::total_works ... ok
test dispatch::tests::call_name ... ok
test dispatch::tests::compact_attr ... ok
test dispatch::tests::get_call_names ... ok
test dispatch::tests::encode_is_correct_and_decode_works ... ok
test dispatch::tests::module_json_metadata ... ok
test dispatch::tests::integrity_test_should_work - should panic ... ok
test dispatch::per_dispatch_class_tests::accrue_works ... ok
test dispatch::tests::on_idle_should_work_1 - should panic ... ok
test dispatch::tests::on_finalize_should_work - should panic ... ok
test dispatch::tests::on_idle_should_work_3 ... ok
test dispatch::tests::on_initialize_should_work_2 ... ok
test dispatch::tests::test_new_call_variant ... ok
test dispatch::tests::on_initialize_should_work_1 - should panic ... ok
test dispatch::tests::weight_should_attach_to_call_enum ... ok
test dispatch::tests::on_idle_should_work_2 - should panic ... ok
test dispatch::weight_tests::extract_actual_pays_fee_works ... ok
test dispatch::weight_tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test dispatch::tests::on_runtime_upgrade_should_work ... ok
test dispatch::weight_tests::extract_actual_weight_caps_at_pre_weight ... ok
test dispatch::weight_tests::extract_actual_weight_works ... ok
test dispatch::weight_tests::weights_are_correct ... ok
test dispatch_context::tests::dispatch_context_works ... ok
test hash::tests::max_lengths ... ok
test hash::tests::test_blake2_128_concat ... ok
test hash::tests::test_twox_64_concat ... ok
test storage::bounded_btree_map::test::decode_len_works ... ok
test storage::bounded_btree_set::test::decode_len_works ... ok
test storage::generator::double_map::test_iterators::double_map_iter_from ... ok
test storage::bounded_vec::test::decode_len_works ... ok
test storage::generator::map::test_iterators::map_iter_from ... ok
test storage::generator::nmap::test_iterators::n_map_double_map_identical_key ... ok
test storage::generator::double_map::test_iterators::double_map_reversible_reversible_iteration ... ok
test storage::generator::map::test_iterators::map_reversible_reversible_iteration ... ok
test storage::generator::nmap::test_iterators::n_map_reversible_reversible_iteration ... ok
test storage::generator::nmap::test_iterators::n_map_iter_from ... ok
test storage::generator::tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test storage::generator::tests::try_mutate_works ... ok
test storage::migration::tests::test_move_pallet ... ok
test storage::migration::tests::test_move_prefix ... ok
test storage::generator::tests::value_translate_works ... ok
test storage::migration::tests::test_move_storage ... ok
test storage::migration::tests::test_storage_iter ... ok
test storage::storage_noop_guard::tests::storage_noop_guard_does_not_double_panic - should panic ... ok
test storage::storage_noop_guard::tests::storage_noop_guard_panics_on_early_drop - should panic ... ok
test storage::storage_noop_guard::tests::storage_noop_guard_panics_on_changed - should panic ... ok
test storage::storage_noop_guard::tests::storage_noop_guard_works_on_changed_forget ... ok
test storage::stream_iter::tests::detect_value_deleted_in_state ... ok
test storage::storage_noop_guard::tests::storage_noop_guard_works_on_unchanged ... ok
test storage::stream_iter::tests::detects_value_total_length_change ... ok
test storage::stream_iter::tests::reading_big_intermediate_value ... ok
test storage::stream_iter::tests::reading_more_data_as_in_the_state_is_detected ... ok
test storage::stream_iter::tests::reading_with_fill_buffer ... ok
test storage::stream_iter::tests::remaining_len_works ... ok
test storage::stream_iter::tests::reading_invalid_data_from_state ... ok
test storage::stream_iter::tests::stream_read_test ... ok
test storage::test::btree_set_append_and_decode_len_works ... ok
test storage::test::contains_prefix_works ... ok
test storage::test::digest_storage_append_works_as_expected ... ok
test storage::test::key_prefix_iterator_works ... ok
test storage::test::child_trie_prefixed_map_works ... ok
test storage::test::prefix_iterator_pagination_works ... ok
test storage::test::try_append_works ... ok
test storage::transactional::tests::is_transactional_should_not_error_in_with_transaction ... ok
test storage::generator::tests::map_translate_works ... ok
test storage::test::prefixed_map_works ... ok
test storage::transactional::tests::is_transactional_should_return_false ... ok
test storage::transactional::tests::in_storage_layer_works ... ok
test storage::types::counted_map::test::migrate_keys_works ... ok
test storage::types::counted_map::test::storage_alias_works ... ok
test storage::types::counted_map::test::append_decode_len_works ... ok
test storage::types::counted_map::test::test_iter_from ... ok
test storage::types::counted_map::test::test_metadata ... ok
test storage::types::counted_map::test::test_iter_drain_translate ... ok
test storage::types::counted_map::test::translate_values ... ok
test storage::types::counted_map::test::test_option_query ... ok
test storage::transactional::tests::transaction_limit_should_work ... ok
test storage::types::counted_map::test::try_append_decode_len_works ... ok
test storage::types::double_map::test::keylenof_works ... ok
test storage::types::map::test::keylenof_works ... ok
test storage::types::counted_map::test::test_value_query ... ok
test storage::types::nmap::test::test_1_key ... ok
test storage::types::double_map::test::test ... ok
test storage::types::map::test::test ... ok
test storage::weak_bounded_vec::test::decode_len_works ... ok
test storage::types::nmap::test::test_3_keys ... ok
test tests::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_storage_parameter_type_works ... ok
test storage::types::value::test::test ... ok
test storage::types::nmap::test::test_2_keys ... ok
test tests::double_map_append_should_work ... ok
test tests::double_map_mutate_exists_should_work ... ok
test tests::double_map_basic_insert_remove_remove_prefix_should_work ... ok
test tests::double_map_basic_insert_remove_remove_prefix_with_commit_should_work ... ok
test tests::double_map_try_mutate_exists_should_work ... ok
test tests::double_map_swap_works ... ok
test tests::map_issue_3318 ... ok
test tests::storage_alias_works ... ok
test tests::map_basic_insert_remove_should_work ... ok
test tests::map_swap_works ... ok
test tests::storage_value_try_mutate_exists_should_work ... ok
test tests::storage_value_mutate_exists_should_work ... ok
test tests::map_iteration_should_work ... ok
test tests::store_metadata ... ok
test traits::dispatch::tests::either_of_diverse_works ... ok
test traits::dispatch::tests::either_of_works ... ok
test traits::filter::test_impl_filter_stack::guards_should_work ... ok
test traits::members::tests::match_types_works ... ok
test traits::filter::test_impl_filter_stack::impl_filter_stack_should_work ... ok
test traits::hooks::tests::on_idle_round_robin_works ... ok
test traits::hooks::tests::on_initialize_and_on_runtime_upgrade_weight_merge_works ... ok
test traits::metadata::tests::check_storage_version_ordering ... ok
test traits::misc::test::defensive_assert_panics - should panic ... ok
test traits::misc::test::defensive_assert_works ... ok
test traits::misc::test::defensive_min_works ... ok
test traits::misc::test::defensive_min_panics - should panic ... ok
test traits::misc::test::defensive_saturating_dec_panics - should panic ... ok
test traits::misc::test::defensive_saturating_accrue_panics - should panic ... ok
test traits::misc::test::defensive_max_panics - should panic ... ok
test traits::misc::test::defensive_max_works ... ok
test traits::misc::test::defensive_saturating_inc_panics - should panic ... ok
test traits::misc::test::defensive_strict_max_panics - should panic ... ok
test traits::misc::test::defensive_saturating_reduce_panics - should panic ... ok
test traits::misc::test::defensive_strict_max_works ... ok
test traits::misc::test::defensive_strict_min_works ... ok
test traits::misc::test::defensive_strict_min_panics - should panic ... ok
test traits::misc::test::defensive_truncate_from_slice_works ... ok
test traits::misc::test::defensive_truncate_from_vec_works ... ok
test traits::misc::test::defensive_truncating_from_vec_defensive_panics - should panic ... ok
test traits::misc::test::test_keep_opaque_wrapper ... ok
test traits::misc::test::test_opaque_wrapper ... ok
test traits::preimages::tests::bounded_basic_works ... ok
test traits::misc::test::defensive_truncating_from_slice_defensive_panics - should panic ... ok
test traits::preimages::tests::bounded_size_is_correct ... ok
test traits::preimages::tests::bounded_transmuting_works ... ok
test traits::tokens::fungible::item_of::test ... ok
test weights::block_weights::test_weights::sane ... ok
test weights::extrinsic_weights::test_weights::sane ... ok
test weights::paritydb_weights::constants::test_db_weights::sane ... ok
test weights::rocksdb_weights::constants::test_db_weights::sane ... ok
test traits::misc::test::test_opaque_wrapper_decode_limit ... ok

test result: ok. 145 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s


running 1 test
test derive_impl::test_derive_impl_attr_args_parsing ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test benchmark_ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 16 tests
test call_compact_attr ... ok
test call_codec ... ok
test call_metadata ... ok
test call_name ... ok
test call_subtype_conversion ... ok
test call_weight_should_attach_to_call_enum ... ok
test call_encode_is_correct_and_decode_works ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test event_codec ... ok
test get_call_names ... ok
test get_module_names ... ok
test origin_codec ... ok
test pallet_in_runtime_is_correct ... ok
test integrity_test_works ... ok
test check_modules_error_type ... ok
test test_metadata ... ok

test result: ok. 16 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test derive_impl_ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 7 tests
test runtime_debug_no_bound_display_correctly ... ok
test test_enum_debug_print ... ignored
test test_struct_named_debug_print ... ignored
test test_struct_unnamed_debug_print ... ignored
test test_struct_named ... ok
test test_enum ... ok
test test_struct_unnamed ... ok

test result: ok. 4 passed; 0 failed; 3 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test derive_no_bound_ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 4 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test final_keys_instance_2 ... ok
test final_keys_default_instance ... ok
test final_keys_no_instance ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 2 tests
test init_genesis_config ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 4 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test test_instance_storage_metadata ... ok
test storage_with_instance_basic_operation ... ok
test storage_instance_independence ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 2 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test create_genesis_config ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 2 tests
test origin_default_filter ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 30 tests
test assert_type_all_pallets_reversed_with_system_first_is_correct ... ok
test assert_type_all_pallets_with_system_is_correct ... ok
test assert_type_all_pallets_without_system_is_correct ... ok
test assert_type_all_pallets_with_system_reversed_is_correct ... ok
test assert_type_all_pallets_without_system_reversed_is_correct ... ok
test call_expand ... ok
test call_expand_index ... ok
test composite_expand ... ok
test inherent_expand ... ok
test error_expand ... ok
test instance_expand ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test all_pallets_type_reversed_order_is_correct ... ok
test metadata_versions ... ok
test metadata_ir_pallet_runtime_docs ... ok
test pallet_expand_deposit_event ... ok
test metadata ... ok
test pallet_new_call_variant ... ok
test metadata_at_version ... ok
test migrate_from_pallet_version_to_storage_version ... ok
test pallet_hooks_expand ... ok
test pallet_on_genesis ... ok
test test_pallet_info_access ... ok
test test_dispatch_context ... ok
test test_pallet_runtime_docs ... ok
test test_storage_alias ... ok
test test_storage_info ... ok
test storage_expand ... ok
test transactional_works ... ok
test validate_unsigned_expand ... ok

test result: ok. 30 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 12 tests
test call_expand ... ok
test error_expand ... ok
test instance_expand ... ok
test pallet_hooks_expand ... ok
test pallet_expand_deposit_event ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test storage_expand ... ok
test pallet_metadata_expands ... ok
test pallet_on_genesis ... ok
test test_pallet_info_access ... ok
test test_storage_alias ... ok
test metadata ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 1 test
test pallet_ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 2 tests
test runtime_metadata ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 1 test
test storage_alias_ui ... ignored

test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 6 tests
test storage_layer_basic_commit ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test storage_layer_commit_then_rollback ... ok
test storage_layer_basic_rollback ... ok
test storage_layer_in_pallet_call ... ok
test storage_layer_rollback_then_commit ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 6 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test storage_transaction_basic_rollback ... ok
test storage_transaction_basic_commit ... ok
test storage_transaction_commit_then_rollback ... ok
test transactional_annotation ... ok
test storage_transaction_rollback_then_commit ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s


running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


running 45 tests
test extensions::check_mortality::tests::signed_ext_check_era_should_change_longevity ... ok
test extensions::check_non_zero_sender::tests::zero_account_ban_works ... ok
test extensions::check_mortality::tests::signed_ext_check_era_should_work ... ok
test extensions::check_weight::tests::dispatch_order_does_not_effect_weight_logic ... ok
test extensions::check_weight::tests::no_max_total_should_still_be_limited_by_max_block ... ok
test extensions::check_nonce::tests::signed_ext_check_nonce_works ... ok
test extensions::check_weight::tests::full_block_with_normal_and_operational ... ok
test extensions::check_weight::tests::mandatory_extrinsic_doesnt_care_about_limits ... ok
test extensions::check_weight::tests::normal_and_mandatory_tracked_separately ... ok
test extensions::check_weight::tests::operational_extrinsic_limited_by_operational_space_limit ... ok
test extensions::check_weight::tests::normal_extrinsic_limited_by_maximum_extrinsic_weight ... ok
test extensions::check_weight::tests::operational_works_on_full_block ... ok
test extensions::check_weight::tests::register_extra_weight_unchecked_doesnt_care_about_limits ... ok
test extensions::check_weight::tests::signed_ext_check_weight_block_size_works ... ok
test extensions::check_weight::tests::signed_ext_check_weight_refund_works ... ok
test extensions::check_weight::tests::signed_ext_check_weight_actual_weight_higher_than_max_is_capped ... ok
test limits::tests::default_weights_are_valid ... ok
test extensions::check_weight::tests::signed_ext_check_weight_works_normal_tx ... ok
test extensions::check_weight::tests::zero_weight_extrinsic_still_has_base_weight ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test offchain::tests::should_send_unsigned_with_signed_payload_with_all_account_and_filter ... ok
test extensions::check_weight::tests::signed_ext_check_weight_works_operational_tx ... ok
test offchain::tests::should_send_unsigned_with_signed_payload_with_any_account ... ok
test offchain::tests::should_send_unsigned_with_signed_payload_with_all_accounts ... ok
test offchain::tests::should_send_unsigned_with_signed_payload_with_any_account_and_filter ... ok
test tests::check_whitelist ... ok
test tests::deposit_event_uses_actual_weight_and_pays_fee ... ok
test tests::event_util_functions_should_work ... ok
test tests::deposit_event_topics ... ok
test tests::ensure_signed_stuff_works ... ok
test tests::events_not_emitted_during_genesis ... ok
test tests::origin_works ... ok
test tests::extrinsics_root_is_calculated_correctly ... ok
test tests::deposit_event_should_work ... ok
test tests::provider_ref_handover_to_self_sufficient_ref_works ... ok
test tests::runtime_upgraded_with_set_storage ... ok
test tests::provider_required_to_support_consumer ... ok
test tests::self_sufficient_ref_handover_to_provider_ref_works ... ok
test tests::runtime_updated_digest_emitted_when_heap_pages_changed ... ok
test tests::prunes_block_hash_mappings ... ok
test tests::sufficient_cannot_support_consumer ... ok
test tests::set_code_checks_works ... ok
test tests::unique_datum_works ... ok
test tests::stored_map_works ... ok
test tests::set_code_with_real_wasm_blob ... ok

test result: ok. 45 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.13s


running 9 tests
test bench_remark ... ok
test bench_remark_with_event ... ok
test bench_set_code ... FAILED
test bench_set_heap_pages ... ok
test bench_set_code_without_checks ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test bench_kill_prefix ... ok
test bench_kill_storage ... ok
test bench_set_storage ... ok

failures:

---- bench_set_code stdout ----
thread 'bench_set_code' panicked at 'set_code: "InvalidSpecName"', frame/system/benchmarking/src/lib.rs:35:1
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    bench_set_code

test result: FAILED. 8 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.14s
```

</details>

<details>

<summary> etf-pallet </summary>

```bash
running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> Aura client + DLEQ implementation </summary>

```bash
running 6 tests
test dleq::tests::prove_secret_correctness_manual_testing_tool ... ok
test dleq::tests::dleq_prepare_and_verify_works ... ok
test standalone::tests::authorities_call_works ... ok
test tests::authoring_blocks ... ok
test tests::on_slot_returns_correct_block ... ok
test tests::current_node_authority_should_claim_slot ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 36.43s

   Doc-tests sc-consensus-aura

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> runtime test-utils </summary>

```bash
running 8 tests
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::check_substrate_check_signed_extension_works ... ok
test storage_key_generator::expected_keys_vec_are_matching ... ok
test tests::validate_unsigned_works ... ok
test tests::validate_storage_keys ... ok
test tests::witness_backend_works ... ok
test tests::test_storage ... ok
test tests::heap_pages_is_respected ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 10.56s

   Doc-tests substrate-test-runtime

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

<details>

<summary> Benchmark tests </summary>

```bash

Running unittests src/lib.rs (target/debug/deps/pallet_etf-bb86bac3c815b1c1)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>

### Screenshot

![monitor screenshot](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/31a651b9-bf60-4aad-b44a-0883b8721032)