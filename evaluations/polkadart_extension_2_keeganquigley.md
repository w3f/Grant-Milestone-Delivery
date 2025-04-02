# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadart_extension.md
- **Milestone:** 1
- **Evaluation by:** keeganquigley

| Number | Deliverable        | Accepted | Link | Notes |
|:------:|--------------------|-------------------------------------------------------------------------------------------------------------------| -------------------- | -------------------- |
|  0a.   | License            | <ul><li>[x] </li></ul> | https://github.com/leonardocustodio/polkadart/blob/main/packages/ink_abi/LICENSE                                  |
|        |                    | <ul><li>[x] </li></ul> |  https://github.com/leonardocustodio/polkadart/blob/main/packages/ink_cli/LICENSE                                  |
|  0b.   | Documentation      | <ul><li>[x] </li></ul> | https://polkadart.dev/ink/overview/                                                                               |
|  0c.   | Examples           | <ul><li>[x] </li></ul> | https://polkadart.dev/guides/contracts-interaction/                                                               | 
|  0b.   | Test               | <ul><li>[x] </li></ul> | https://github.com/leonardocustodio/polkadart/blob/main/packages/ink_abi/test/erc_20_v5_test.dart                 |
|  1a.   | Offline Signer     | <ul><li>[x] </li></ul> | https://pub.dev/documentation/substrate_metadata/latest/metadata_merkleize/                                       |
|  1b.   | ABI                | <ul><li>[x] </li></ul> | https://pub.dev/documentation/ink_abi/latest/ink_abi/                                                             |
|  1c.   | Deploy contract    | <ul><li>[x] </li></ul> | https://pub.dev/documentation/ink_abi/latest/ink_abi/                                                             |
|  2d.   | Read contract      | <ul><li>[x] </li></ul> | https://pub.dev/documentation/ink_cli/latest/ink_cli/                                                             |
|  3e.   | Write contract     | <ul><li>[x] </li></ul> | https://pub.dev/documentation/ink_cli/latest/ink_cli/                                                             |
|  4a.   | Pub.dev            | <ul><li>[x] </li></ul> | https://pub.dev/packages/ink_cli                                                                                  |
|        |                    | <ul><li>[x] </li></ul> | https://pub.dev/packages/ink_abi                                                                                  |
|  5a.   | Document Signer    | <ul><li>[x] </li></ul> | https://polkadart.dev/guides/use-metadata-hash/                                                                   |
|  6a.   | Document Contracts | <ul><li>[x] </li></ul> | https://polkadart.dev/ink/ink_abi/                                                                                |
|  7a.   | Examples Contracts | <ul><li>[x] </li></ul> | https://polkadart.dev/ink/ink_cli/#deploying-contracts                                                            |
|        |                    |  | https://polkadart.dev/ink/ink_cli/#contract-interaction                                                           |
|        |                    |  | https://polkadart.dev/guides/contracts-interaction/#create-a-contract-object-from-the-returned-contract---address |

# General Notes

~~Currently having trouble generating the types.~~

UPDATE: Types now generate successfully:

<details>
  <summary>Output</summary>

```dart
Downloading packages... (3.5s)
< _fe_analyzer_shared 76.0.0 (was 80.0.0) (80.0.0 available)
+ _macros 0.3.3 from sdk dart
+ adaptive_number 1.0.0
< analyzer 6.11.0 (was 7.3.0) (7.3.0 available)
+ base_x 2.0.1
+ bip39_mnemonic 3.0.9
+ built_collection 5.1.1
+ built_value 8.9.5
+ code_builder 4.10.1
+ cryptography 2.7.0
+ dart_style 2.3.8 (3.0.1 available)
+ ed25519_edwards 0.3.1
+ edwards25519 1.0.5
+ equatable 2.0.7
+ ffi 2.1.4
+ fixnum 1.1.1
+ flutter_curve25519 0.1.2
+ hashlib_codecs 2.6.0
+ http 1.3.0
< js 0.6.7 (was 0.7.2) (0.7.2 available)
+ json_schema 5.2.1
+ macros 0.1.3-main.0
+ merlin 1.0.3
+ pointycastle 3.9.1 (4.0.0 available)
+ polkadart 0.6.1
+ polkadart_cli 0.6.1
+ polkadart_keyring 0.6.1
+ polkadart_scale_codec 1.4.2
+ quiver 3.2.2
+ recase 4.1.0
+ rfc_6901 0.2.0
+ ristretto255 1.0.2
+ secp256k1_ecdsa 0.6.1
+ sr25519 0.6.1
+ ss58 1.3.1
+ strobe 1.0.5
+ substrate_bip39 0.6.1
+ substrate_metadata 1.4.1
+ unorm_dart 0.3.0
+ uri 1.0.0
+ utility 1.0.3
< web_socket_channel 2.4.0 (was 3.0.2) (3.0.2 available)
These packages are no longer being depended on:
- web_socket 0.1.6
Changed 43 dependencies!
6 packages have newer versions incompatible with dependency constraints.
Try `dart pub outdated` for more information.
dart pub outdated
Showing outdated packages.
[*] indicates versions that are not the latest available.

Package Name         Current  Upgradable  Resolvable  Latest  

direct dependencies: all up-to-date.

dev_dependencies: all up-to-date.

transitive dependencies:
_fe_analyzer_shared  *76.0.0  *76.0.0     *76.0.0     80.0.0  
analyzer             *6.11.0  *6.11.0     *6.11.0     7.3.0   
dart_style           *2.3.8   *2.3.8      *2.3.8      3.0.1   
js                   *0.6.7   *0.6.7      *0.6.7      0.7.2   (discontinued)  
pointycastle         *3.9.1   *3.9.1      *3.9.1      4.0.0   
web_socket_channel   *2.4.0   *2.4.0      *2.4.0      3.0.2   
all dependencies are up-to-date.

js
    Package js has been discontinued. See https://dart.dev/go/package-discontinue
dart pub upgrade
Resolving dependencies... (1.3s)
Downloading packages... 
  _fe_analyzer_shared 76.0.0 (80.0.0 available)
  analyzer 6.11.0 (7.3.0 available)
  dart_style 2.3.8 (3.0.1 available)
  js 0.6.7 (0.7.2 available)
  pointycastle 3.9.1 (4.0.0 available)
  web_socket_channel 2.4.0 (3.0.2 available)
No dependencies changed.
6 packages have newer versions incompatible with dependency constraints.
Try `dart pub outdated` for more information.
ls
CHANGELOG.md  README.md  analysis_options.yaml  bin  lib  pubspec.lock  pubspec.yaml  test
vim pubspec.yaml
vim pubspec.yaml
vim pubspec.yaml
dart run polkadart_cli:generate -v
Building package executable... (7.5s)
Built polkadart_cli:generate.
output directory: "/home/ubuntu/polkadart/demo/lib/generated"
types/sp_core/crypto/account_id32.dart
types/frame_system/account_info.dart
types/pallet_balances/types/account_data.dart
types/pallet_balances/types/extra_flags.dart
types/frame_support/dispatch/per_dispatch_class_1.dart
types/sp_weights/weight_v2/weight.dart
types/primitive_types/h256.dart
types/sp_runtime/generic/digest/digest.dart
types/sp_runtime/generic/digest/digest_item.dart
types/frame_system/event_record.dart
types/polkadot_runtime/runtime_event.dart
types/frame_system/pallet/event.dart
types/frame_support/dispatch/dispatch_info.dart
types/frame_support/dispatch/dispatch_class.dart
types/frame_support/dispatch/pays.dart
types/sp_runtime/dispatch_error.dart
types/sp_runtime/module_error.dart
types/sp_runtime/token_error.dart
types/sp_arithmetic/arithmetic_error.dart
types/sp_runtime/transactional_error.dart
types/pallet_scheduler/pallet/event.dart
types/tuples_1.dart
types/pallet_preimage/pallet/event.dart
types/pallet_indices/pallet/event.dart
types/pallet_balances/pallet/event.dart
types/frame_support/traits/tokens/misc/balance_status.dart
types/pallet_transaction_payment/pallet/event.dart
types/pallet_staking/pallet/pallet/event.dart
types/pallet_staking/reward_destination.dart
types/sp_arithmetic/per_things/perbill.dart
types/pallet_staking/validator_prefs.dart
types/pallet_staking/forcing.dart
types/pallet_offences/pallet/event.dart
types/pallet_session/pallet/event.dart
types/pallet_grandpa/pallet/event.dart
types/tuples.dart
types/sp_consensus_grandpa/app/public.dart
types/pallet_treasury/pallet/event.dart
types/polkadot_runtime_common/impls/versioned_locatable_asset.dart
types/staging_xcm/v3/multilocation/multi_location.dart
types/xcm/v3/junctions/junctions.dart
types/xcm/v3/junction/junction.dart
types/xcm/v3/junction/network_id.dart
types/xcm/v3/junction/body_id.dart
types/xcm/v3/junction/body_part.dart
types/xcm/v3/multiasset/asset_id.dart
types/staging_xcm/v4/location/location.dart
types/staging_xcm/v4/junctions/junctions.dart
types/staging_xcm/v4/junction/junction.dart
types/staging_xcm/v4/junction/network_id.dart
types/staging_xcm/v4/asset/asset_id.dart
types/xcm/versioned_location.dart
types/xcm/v2/multilocation/multi_location.dart
types/xcm/v2/multilocation/junctions.dart
types/xcm/v2/junction/junction.dart
types/xcm/v2/network_id.dart
types/xcm/v2/body_id.dart
types/xcm/v2/body_part.dart
types/pallet_conviction_voting/pallet/event.dart
types/pallet_conviction_voting/vote/account_vote.dart
types/pallet_conviction_voting/vote/vote.dart
types/pallet_referenda/pallet/event.dart
types/frame_support/traits/preimages/bounded.dart
types/polkadot_runtime/runtime_call.dart
types/frame_system/pallet/call.dart
types/pallet_scheduler/pallet/call.dart
types/pallet_preimage/pallet/call.dart
types/pallet_babe/pallet/call.dart
types/sp_consensus_slots/equivocation_proof.dart
types/sp_runtime/generic/header/header.dart
types/sp_consensus_babe/app/public.dart
types/sp_consensus_slots/slot.dart
types/sp_session/membership_proof.dart
types/sp_consensus_babe/digests/next_config_descriptor.dart
types/sp_consensus_babe/allowed_slots.dart
types/pallet_timestamp/pallet/call.dart
types/pallet_indices/pallet/call.dart
types/sp_runtime/multiaddress/multi_address.dart
types/pallet_balances/pallet/call.dart
types/pallet_balances/types/adjustment_direction.dart
types/pallet_staking/pallet/pallet/call.dart
types/sp_arithmetic/per_things/percent.dart
types/pallet_staking/pallet/pallet/config_op_1.dart
types/pallet_staking/pallet/pallet/config_op_2.dart
types/pallet_staking/pallet/pallet/config_op_3.dart
types/pallet_staking/pallet/pallet/config_op_4.dart
types/pallet_staking/unlock_chunk.dart
types/pallet_session/pallet/call.dart
types/polkadot_runtime/session_keys.dart
types/polkadot_primitives/v8/validator_app/public.dart
types/polkadot_primitives/v8/assignment_app/public.dart
types/sp_authority_discovery/app/public.dart
types/sp_consensus_beefy/ecdsa_crypto/public.dart
types/pallet_grandpa/pallet/call.dart
types/sp_consensus_grandpa/equivocation_proof.dart
types/sp_consensus_grandpa/equivocation.dart
types/finality_grandpa/equivocation_1.dart
types/finality_grandpa/prevote.dart
types/sp_consensus_grandpa/app/signature.dart
types/finality_grandpa/equivocation_2.dart
types/finality_grandpa/precommit.dart
types/pallet_treasury/pallet/call.dart
types/pallet_conviction_voting/pallet/call.dart
types/pallet_conviction_voting/conviction/conviction.dart
types/pallet_referenda/pallet/call.dart
types/polkadot_runtime/origin_caller.dart
types/frame_support/dispatch/raw_origin.dart
types/polkadot_runtime/governance/origins/pallet_custom_origins/origin.dart
types/polkadot_runtime_parachains/origin/pallet/origin.dart
types/polkadot_parachain_primitives/primitives/id.dart
types/pallet_xcm/pallet/origin.dart
types/sp_core/void.dart
types/frame_support/traits/schedule/dispatch_time.dart
types/pallet_whitelist/pallet/call.dart
types/polkadot_runtime_common/claims/pallet/call.dart
types/polkadot_runtime_common/claims/ecdsa_signature.dart
types/polkadot_runtime_common/claims/ethereum_address.dart
types/tuples_2.dart
types/polkadot_runtime_common/claims/statement_kind.dart
types/pallet_vesting/pallet/call.dart
types/pallet_vesting/vesting_info/vesting_info.dart
types/pallet_utility/pallet/call.dart
types/pallet_proxy/pallet/call.dart
types/polkadot_runtime/proxy_type.dart
types/pallet_multisig/pallet/call.dart
types/pallet_multisig/timepoint.dart
types/pallet_bounties/pallet/call.dart
types/pallet_child_bounties/pallet/call.dart
types/pallet_election_provider_multi_phase/pallet/call.dart
types/pallet_election_provider_multi_phase/raw_solution.dart
types/polkadot_runtime/npos_compact_solution16.dart
types/sp_arithmetic/per_things/per_u16.dart
types/sp_npos_elections/election_score.dart
types/pallet_election_provider_multi_phase/solution_or_snapshot_size.dart
types/sp_npos_elections/support.dart
types/pallet_bags_list/pallet/call.dart
types/pallet_nomination_pools/pallet/call.dart
types/pallet_nomination_pools/bond_extra.dart
types/pallet_nomination_pools/pool_state.dart
types/pallet_nomination_pools/config_op_1.dart
types/pallet_nomination_pools/config_op_2.dart
types/pallet_nomination_pools/config_op_3.dart
types/pallet_nomination_pools/config_op_4.dart
types/pallet_nomination_pools/claim_permission.dart
types/pallet_nomination_pools/commission_change_rate.dart
types/pallet_nomination_pools/commission_claim_permission.dart
types/pallet_fast_unstake/pallet/call.dart
types/polkadot_runtime_parachains/configuration/pallet/call.dart
types/polkadot_primitives/v8/async_backing/async_backing_params.dart
types/polkadot_primitives/v8/executor_params/executor_params.dart
types/polkadot_primitives/v8/executor_params/executor_param.dart
types/polkadot_primitives/v8/pvf_prep_kind.dart
types/polkadot_primitives/v8/pvf_exec_kind.dart
types/polkadot_primitives/v8/approval_voting_params.dart
types/polkadot_primitives/v8/scheduler_params.dart
types/polkadot_runtime_parachains/shared/pallet/call.dart
types/polkadot_runtime_parachains/inclusion/pallet/call.dart
types/polkadot_runtime_parachains/paras_inherent/pallet/call.dart
types/polkadot_primitives/v8/inherent_data.dart
types/polkadot_primitives/v8/signed/unchecked_signed.dart
types/polkadot_primitives/v8/availability_bitfield.dart
types/bitvec/order/lsb0.dart
types/polkadot_primitives/v8/validator_index.dart
types/polkadot_primitives/v8/validator_app/signature.dart
types/polkadot_primitives/v8/backed_candidate.dart
types/polkadot_primitives/v8/committed_candidate_receipt.dart
types/polkadot_primitives/v8/candidate_descriptor.dart
types/polkadot_primitives/v8/collator_app/public.dart
types/polkadot_primitives/v8/collator_app/signature.dart
types/polkadot_parachain_primitives/primitives/validation_code_hash.dart
types/polkadot_primitives/v8/candidate_commitments.dart
types/polkadot_core_primitives/outbound_hrmp_message.dart
types/polkadot_parachain_primitives/primitives/validation_code.dart
types/polkadot_parachain_primitives/primitives/head_data.dart
types/polkadot_primitives/v8/validity_attestation.dart
types/polkadot_primitives/v8/dispute_statement_set.dart
types/polkadot_core_primitives/candidate_hash.dart
types/polkadot_primitives/v8/dispute_statement.dart
types/polkadot_primitives/v8/valid_dispute_statement_kind.dart
types/polkadot_primitives/v8/invalid_dispute_statement_kind.dart
types/polkadot_runtime_parachains/paras/pallet/call.dart
types/polkadot_primitives/v8/pvf_check_statement.dart
types/polkadot_runtime_parachains/initializer/pallet/call.dart
types/polkadot_runtime_parachains/hrmp/pallet/call.dart
types/polkadot_parachain_primitives/primitives/hrmp_channel_id.dart
types/polkadot_runtime_parachains/disputes/pallet/call.dart
types/polkadot_runtime_parachains/disputes/slashing/pallet/call.dart
types/polkadot_primitives/v8/slashing/dispute_proof.dart
types/polkadot_primitives/v8/slashing/disputes_time_slot.dart
types/polkadot_primitives/v8/slashing/slashing_offence_kind.dart
types/polkadot_runtime_parachains/on_demand/pallet/call.dart
types/polkadot_runtime_common/paras_registrar/pallet/call.dart
types/polkadot_runtime_common/slots/pallet/call.dart
types/polkadot_runtime_common/auctions/pallet/call.dart
types/polkadot_runtime_common/crowdloan/pallet/call.dart
types/sp_runtime/multi_signer.dart
types/sp_runtime/multi_signature.dart
types/polkadot_runtime_parachains/coretime/pallet/call.dart
types/pallet_broker/coretime_interface/core_assignment.dart
types/polkadot_runtime_parachains/assigner_coretime/parts_of57600.dart
types/pallet_state_trie_migration/pallet/call.dart
types/pallet_state_trie_migration/pallet/migration_limits.dart
types/pallet_state_trie_migration/pallet/migration_task.dart
types/pallet_state_trie_migration/pallet/progress.dart
types/pallet_xcm/pallet/call.dart
types/xcm/versioned_xcm_1.dart
types/xcm/v2/xcm_1.dart
types/xcm/v2/instruction_1.dart
types/xcm/v2/multiasset/multi_assets.dart
types/xcm/v2/multiasset/multi_asset.dart
types/xcm/v2/multiasset/asset_id.dart
types/xcm/v2/multiasset/fungibility.dart
types/xcm/v2/multiasset/asset_instance.dart
types/xcm/v2/response.dart
types/xcm/v2/traits/error.dart
types/xcm/v2/origin_kind.dart
types/xcm/double_encoded/double_encoded_1.dart
types/xcm/v2/multiasset/multi_asset_filter.dart
types/xcm/v2/multiasset/wild_multi_asset.dart
types/xcm/v2/multiasset/wild_fungibility.dart
types/xcm/v2/weight_limit.dart
types/xcm/v3/xcm_1.dart
types/xcm/v3/instruction_1.dart
types/xcm/v3/multiasset/multi_assets.dart
types/xcm/v3/multiasset/multi_asset.dart
types/xcm/v3/multiasset/fungibility.dart
types/xcm/v3/multiasset/asset_instance.dart
types/xcm/v3/response.dart
types/xcm/v3/traits/error.dart
types/xcm/v3/pallet_info.dart
types/xcm/v3/maybe_error_code.dart
types/xcm/v3/origin_kind.dart
types/xcm/v3/query_response_info.dart
types/xcm/v3/multiasset/multi_asset_filter.dart
types/xcm/v3/multiasset/wild_multi_asset.dart
types/xcm/v3/multiasset/wild_fungibility.dart
types/xcm/v3/weight_limit.dart
types/staging_xcm/v4/xcm_1.dart
types/staging_xcm/v4/instruction_1.dart
types/staging_xcm/v4/asset/assets.dart
types/staging_xcm/v4/asset/asset.dart
types/staging_xcm/v4/asset/fungibility.dart
types/staging_xcm/v4/asset/asset_instance.dart
types/staging_xcm/v4/response.dart
types/staging_xcm/v4/pallet_info.dart
types/staging_xcm/v4/query_response_info.dart
types/staging_xcm/v4/asset/asset_filter.dart
types/staging_xcm/v4/asset/wild_asset.dart
types/staging_xcm/v4/asset/wild_fungibility.dart
types/xcm/versioned_assets.dart
types/xcm/versioned_xcm_2.dart
types/xcm/v2/xcm_2.dart
types/xcm/v2/instruction_2.dart
types/xcm/double_encoded/double_encoded_2.dart
types/xcm/v3/xcm_2.dart
types/xcm/v3/instruction_2.dart
types/staging_xcm/v4/xcm_2.dart
types/staging_xcm/v4/instruction_2.dart
types/staging_xcm_executor/traits/asset_transfer/transfer_type.dart
types/xcm/versioned_asset_id.dart
types/pallet_message_queue/pallet/call.dart
types/polkadot_runtime_parachains/inclusion/aggregate_message_origin.dart
types/polkadot_runtime_parachains/inclusion/ump_queue_id.dart
types/pallet_asset_rate/pallet/call.dart
types/sp_arithmetic/fixed_point/fixed_u128.dart
types/pallet_beefy/pallet/call.dart
types/sp_consensus_beefy/double_voting_proof.dart
types/sp_consensus_beefy/ecdsa_crypto/signature.dart
types/sp_consensus_beefy/vote_message.dart
types/sp_consensus_beefy/commitment/commitment.dart
types/sp_consensus_beefy/payload/payload.dart
types/sp_consensus_beefy/fork_voting_proof.dart
types/sp_mmr_primitives/ancestry_proof.dart
types/sp_consensus_beefy/future_block_voting_proof.dart
types/sp_runtime/traits/blake_two256.dart
types/pallet_conviction_voting/types/tally.dart
types/pallet_whitelist/pallet/event.dart
types/frame_support/dispatch/post_dispatch_info.dart
types/sp_runtime/dispatch_error_with_post_info.dart
types/polkadot_runtime_common/claims/pallet/event.dart
types/pallet_vesting/pallet/event.dart
types/pallet_utility/pallet/event.dart
types/pallet_proxy/pallet/event.dart
types/pallet_multisig/pallet/event.dart
types/pallet_bounties/pallet/event.dart
types/pallet_child_bounties/pallet/event.dart
types/pallet_election_provider_multi_phase/pallet/event.dart
types/pallet_election_provider_multi_phase/election_compute.dart
types/pallet_election_provider_multi_phase/phase.dart
types/pallet_bags_list/pallet/event.dart
types/pallet_nomination_pools/pallet/event.dart
types/pallet_fast_unstake/pallet/event.dart
types/pallet_delegated_staking/pallet/event.dart
types/polkadot_runtime_parachains/inclusion/pallet/event.dart
types/polkadot_primitives/v8/candidate_receipt.dart
types/polkadot_primitives/v8/core_index.dart
types/polkadot_primitives/v8/group_index.dart
types/polkadot_runtime_parachains/paras/pallet/event.dart
types/polkadot_runtime_parachains/hrmp/pallet/event.dart
types/polkadot_runtime_parachains/disputes/pallet/event.dart
types/polkadot_runtime_parachains/disputes/dispute_location.dart
types/polkadot_runtime_parachains/disputes/dispute_result.dart
types/polkadot_runtime_parachains/on_demand/pallet/event.dart
types/polkadot_runtime_common/paras_registrar/pallet/event.dart
types/polkadot_runtime_common/slots/pallet/event.dart
types/polkadot_runtime_common/auctions/pallet/event.dart
types/polkadot_runtime_common/crowdloan/pallet/event.dart
types/polkadot_runtime_parachains/coretime/pallet/event.dart
types/pallet_state_trie_migration/pallet/event.dart
types/pallet_state_trie_migration/pallet/migration_compute.dart
types/pallet_state_trie_migration/pallet/error.dart
types/pallet_xcm/pallet/event.dart
types/staging_xcm/v4/traits/outcome.dart
types/pallet_message_queue/pallet/event.dart
types/frame_support/traits/messages/process_message_error.dart
types/pallet_asset_rate/pallet/event.dart
types/frame_system/phase.dart
types/frame_system/last_runtime_upgrade_info.dart
types/frame_system/code_upgrade_authorization.dart
types/frame_system/limits/block_weights.dart
types/frame_support/dispatch/per_dispatch_class_2.dart
types/frame_system/limits/weights_per_class.dart
types/frame_system/limits/block_length.dart
types/frame_support/dispatch/per_dispatch_class_3.dart
types/sp_weights/runtime_db_weight.dart
types/sp_version/runtime_version.dart
types/cow.dart
types/frame_system/pallet/error.dart
types/pallet_scheduler/scheduled.dart
types/pallet_scheduler/retry_config.dart
types/pallet_scheduler/pallet/error.dart
types/pallet_preimage/old_request_status.dart
types/pallet_preimage/request_status.dart
types/frame_support/traits/tokens/fungible/hold_consideration.dart
types/pallet_preimage/pallet/error.dart
types/sp_consensus_babe/digests/pre_digest.dart
types/sp_consensus_babe/digests/primary_pre_digest.dart
types/sp_core/sr25519/vrf/vrf_signature.dart
types/sp_consensus_babe/digests/secondary_plain_pre_digest.dart
types/sp_consensus_babe/digests/secondary_v_r_f_pre_digest.dart
types/sp_consensus_babe/babe_epoch_configuration.dart
types/pallet_babe/pallet/error.dart
types/pallet_indices/pallet/error.dart
types/pallet_balances/types/balance_lock.dart
types/pallet_balances/types/reasons.dart
types/pallet_balances/types/reserve_data.dart
types/frame_support/traits/tokens/misc/id_amount_1.dart
types/polkadot_runtime/runtime_hold_reason.dart
types/pallet_preimage/pallet/hold_reason.dart
types/pallet_delegated_staking/pallet/hold_reason.dart
types/pallet_state_trie_migration/pallet/hold_reason.dart
types/frame_support/traits/tokens/misc/id_amount_2.dart
types/polkadot_runtime/runtime_freeze_reason.dart
types/pallet_nomination_pools/pallet/freeze_reason.dart
types/pallet_balances/pallet/error.dart
types/pallet_transaction_payment/releases.dart
types/pallet_staking/staking_ledger.dart
types/pallet_staking/nominations.dart
types/pallet_staking/active_era_info.dart
types/sp_staking/exposure.dart
types/sp_staking/individual_exposure.dart
types/sp_staking/paged_exposure_metadata.dart
types/sp_staking/exposure_page.dart
types/pallet_staking/era_reward_points.dart
types/b_tree_map_1.dart
types/pallet_staking/unapplied_slash.dart
types/pallet_staking/slashing/slashing_spans.dart
types/pallet_staking/slashing/span_record.dart
types/pallet_staking/pallet/pallet/error.dart
types/sp_staking/offence/offence_details.dart
types/sp_core/crypto/key_type_id.dart
types/pallet_session/pallet/error.dart
types/pallet_grandpa/stored_state.dart
types/pallet_grandpa/stored_pending_change.dart
types/pallet_grandpa/pallet/error.dart
types/pallet_treasury/proposal.dart
types/pallet_treasury/spend_status.dart
types/pallet_treasury/payment_state.dart
types/sp_arithmetic/per_things/permill.dart
types/frame_support/pallet_id.dart
types/pallet_treasury/pallet/error.dart
types/pallet_conviction_voting/vote/voting.dart
types/pallet_conviction_voting/vote/casting.dart
types/pallet_conviction_voting/types/delegations.dart
types/pallet_conviction_voting/vote/prior_lock.dart
types/pallet_conviction_voting/vote/delegating.dart
types/pallet_conviction_voting/pallet/error.dart
types/pallet_referenda/types/referendum_info.dart
types/pallet_referenda/types/referendum_status.dart
types/pallet_referenda/types/deposit.dart
types/pallet_referenda/types/deciding_status.dart
types/pallet_referenda/types/track_info.dart
types/pallet_referenda/types/curve.dart
types/sp_arithmetic/fixed_point/fixed_i64.dart
types/pallet_referenda/pallet/error.dart
types/pallet_whitelist/pallet/error.dart
types/polkadot_runtime_common/claims/pallet/error.dart
types/pallet_vesting/releases.dart
types/pallet_vesting/pallet/error.dart
types/pallet_utility/pallet/error.dart
types/pallet_proxy/proxy_definition.dart
types/pallet_proxy/announcement.dart
types/pallet_proxy/pallet/error.dart
types/pallet_multisig/multisig.dart
types/pallet_multisig/pallet/error.dart
types/pallet_bounties/bounty.dart
types/pallet_bounties/bounty_status.dart
types/pallet_bounties/pallet/error.dart
types/pallet_child_bounties/child_bounty.dart
types/pallet_child_bounties/child_bounty_status.dart
types/pallet_child_bounties/pallet/error.dart
types/pallet_election_provider_multi_phase/ready_solution.dart
types/pallet_election_provider_multi_phase/round_snapshot.dart
types/pallet_election_provider_multi_phase/signed/signed_submission.dart
types/pallet_election_provider_multi_phase/pallet/error.dart
types/pallet_bags_list/list/node.dart
types/pallet_bags_list/list/bag.dart
types/pallet_bags_list/pallet/error.dart
types/pallet_bags_list/list/list_error.dart
types/pallet_nomination_pools/pool_member.dart
types/bounded_collections/bounded_btree_map/bounded_b_tree_map_1.dart
types/b_tree_map_2.dart
types/pallet_nomination_pools/bonded_pool_inner.dart
types/pallet_nomination_pools/commission.dart
types/pallet_nomination_pools/pool_roles.dart
types/pallet_nomination_pools/reward_pool.dart
types/pallet_nomination_pools/sub_pools.dart
types/pallet_nomination_pools/unbond_pool.dart
types/bounded_collections/bounded_btree_map/bounded_b_tree_map_2.dart
types/b_tree_map_3.dart
types/pallet_nomination_pools/pallet/error.dart
types/pallet_nomination_pools/pallet/defensive_error.dart
types/pallet_fast_unstake/types/unstake_request.dart
types/pallet_fast_unstake/pallet/error.dart
types/pallet_delegated_staking/types/delegation.dart
types/pallet_delegated_staking/types/agent_ledger.dart
types/pallet_delegated_staking/pallet/error.dart
types/polkadot_runtime_parachains/configuration/host_configuration.dart
types/polkadot_runtime_parachains/configuration/pallet/error.dart
types/polkadot_runtime_parachains/shared/allowed_relay_parents_tracker.dart
types/polkadot_runtime_parachains/inclusion/candidate_pending_availability.dart
types/polkadot_runtime_parachains/inclusion/pallet/error.dart
types/polkadot_primitives/v8/scraped_on_chain_votes.dart
types/polkadot_runtime_parachains/paras_inherent/pallet/error.dart
types/polkadot_runtime_parachains/scheduler/pallet/core_occupied.dart
types/polkadot_runtime_parachains/scheduler/pallet/paras_entry.dart
types/polkadot_runtime_parachains/scheduler/common/assignment.dart
types/b_tree_map_4.dart
types/polkadot_runtime_parachains/paras/pvf_check_active_vote_state.dart
types/polkadot_runtime_parachains/paras/pvf_check_cause.dart
types/polkadot_runtime_parachains/paras/upgrade_strategy.dart
types/polkadot_runtime_parachains/paras/para_lifecycle.dart
types/polkadot_runtime_parachains/paras/para_past_code_meta.dart
types/polkadot_runtime_parachains/paras/replacement_times.dart
types/polkadot_primitives/v8/upgrade_go_ahead.dart
types/polkadot_primitives/v8/upgrade_restriction.dart
types/polkadot_runtime_parachains/paras/para_genesis_args.dart
types/polkadot_runtime_parachains/paras/pallet/error.dart
types/polkadot_runtime_parachains/initializer/buffered_session_change.dart
types/polkadot_core_primitives/inbound_downward_message.dart
types/polkadot_runtime_parachains/hrmp/hrmp_open_channel_request.dart
types/polkadot_runtime_parachains/hrmp/hrmp_channel.dart
types/polkadot_core_primitives/inbound_hrmp_message.dart
types/polkadot_runtime_parachains/hrmp/pallet/error.dart
types/polkadot_primitives/v8/session_info.dart
types/polkadot_primitives/v8/indexed_vec_1.dart
types/polkadot_primitives/v8/indexed_vec_2.dart
types/polkadot_primitives/v8/dispute_state.dart
types/b_tree_set.dart
types/polkadot_runtime_parachains/disputes/pallet/error.dart
types/polkadot_primitives/v8/slashing/pending_slashes.dart
types/b_tree_map_5.dart
types/polkadot_runtime_parachains/disputes/slashing/pallet/error.dart
types/polkadot_runtime_parachains/on_demand/types/core_affinity_count.dart
types/polkadot_runtime_parachains/on_demand/types/queue_status_type.dart
types/polkadot_runtime_parachains/on_demand/types/queue_index.dart
types/binary_heap_1.dart
types/polkadot_runtime_parachains/on_demand/types/reverse_queue_index.dart
types/binary_heap_2.dart
types/polkadot_runtime_parachains/on_demand/types/enqueued_order.dart
types/polkadot_runtime_parachains/on_demand/pallet/error.dart
types/polkadot_runtime_parachains/assigner_coretime/schedule.dart
types/polkadot_runtime_parachains/assigner_coretime/core_descriptor.dart
types/polkadot_runtime_parachains/assigner_coretime/queue_descriptor.dart
types/polkadot_runtime_parachains/assigner_coretime/work_state.dart
types/polkadot_runtime_parachains/assigner_coretime/assignment_state.dart
types/polkadot_runtime_parachains/assigner_coretime/pallet/error.dart
types/polkadot_runtime_common/paras_registrar/para_info.dart
types/polkadot_runtime_common/paras_registrar/pallet/error.dart
types/polkadot_runtime_common/slots/pallet/error.dart
types/polkadot_runtime_common/auctions/pallet/error.dart
types/polkadot_runtime_common/crowdloan/fund_info.dart
types/polkadot_runtime_common/crowdloan/last_contribution.dart
types/polkadot_runtime_common/crowdloan/pallet/error.dart
types/polkadot_runtime_parachains/coretime/pallet/error.dart
types/pallet_xcm/pallet/query_status.dart
types/xcm/versioned_response.dart
types/pallet_xcm/pallet/version_migration_stage.dart
types/pallet_xcm/pallet/remote_locked_fungible_record.dart
types/pallet_xcm/pallet/error.dart
types/pallet_message_queue/book_state.dart
types/pallet_message_queue/neighbours.dart
types/pallet_message_queue/page.dart
types/pallet_message_queue/pallet/error.dart
types/pallet_asset_rate/pallet/error.dart
types/pallet_beefy/pallet/error.dart
types/sp_consensus_beefy/mmr/beefy_authority_set.dart
types/sp_runtime/generic/unchecked_extrinsic/unchecked_extrinsic.dart
types/tuples_3.dart
types/frame_system/extensions/check_non_zero_sender/check_non_zero_sender.dart
types/frame_system/extensions/check_spec_version/check_spec_version.dart
types/frame_system/extensions/check_tx_version/check_tx_version.dart
types/frame_system/extensions/check_genesis/check_genesis.dart
types/frame_system/extensions/check_mortality/check_mortality.dart
types/sp_runtime/generic/era/era.dart
types/frame_system/extensions/check_nonce/check_nonce.dart
types/frame_system/extensions/check_weight/check_weight.dart
types/pallet_transaction_payment/charge_transaction_payment.dart
types/polkadot_runtime_common/claims/prevalidate_attests.dart
types/frame_metadata_hash_extension/check_metadata_hash.dart
types/frame_metadata_hash_extension/mode.dart
types/polkadot_runtime/runtime.dart
pallets/system.dart
pallets/scheduler.dart
pallets/preimage.dart
pallets/babe.dart
pallets/timestamp.dart
pallets/indices.dart
pallets/balances.dart
pallets/transaction_payment.dart
pallets/authorship.dart
pallets/staking.dart
pallets/offences.dart
pallets/historical.dart
pallets/session.dart
pallets/grandpa.dart
pallets/authority_discovery.dart
pallets/treasury.dart
pallets/conviction_voting.dart
pallets/referenda.dart
pallets/whitelist.dart
pallets/claims.dart
pallets/vesting.dart
pallets/utility.dart
pallets/proxy.dart
pallets/multisig.dart
pallets/bounties.dart
pallets/child_bounties.dart
pallets/election_provider_multi_phase.dart
pallets/voter_list.dart
pallets/nomination_pools.dart
pallets/fast_unstake.dart
pallets/delegated_staking.dart
pallets/configuration.dart
pallets/paras_shared.dart
pallets/para_inclusion.dart
pallets/para_inherent.dart
pallets/para_scheduler.dart
pallets/paras.dart
pallets/initializer.dart
pallets/dmp.dart
pallets/hrmp.dart
pallets/para_session_info.dart
pallets/paras_disputes.dart
pallets/paras_slashing.dart
pallets/on_demand.dart
pallets/coretime_assignment_provider.dart
pallets/registrar.dart
pallets/slots.dart
pallets/auctions.dart
pallets/crowdloan.dart
pallets/coretime.dart
pallets/state_trie_migration.dart
pallets/xcm_pallet.dart
pallets/message_queue.dart
pallets/asset_rate.dart
pallets/beefy.dart
pallets/mmr.dart
pallets/beefy_mmr_leaf.dart
polkadot.dart
types/sp_core/crypto/account_id32.dart
types/frame_system/account_info.dart
types/pallet_balances/types/account_data.dart
types/pallet_balances/types/extra_flags.dart
types/frame_support/dispatch/per_dispatch_class_1.dart
types/sp_weights/weight_v2/weight.dart
types/primitive_types/h256.dart
types/sp_runtime/generic/digest/digest.dart
types/sp_runtime/generic/digest/digest_item.dart
types/frame_system/event_record.dart
types/staging_kusama_runtime/runtime_event.dart
types/frame_system/pallet/event.dart
types/frame_support/dispatch/dispatch_info.dart
types/frame_support/dispatch/dispatch_class.dart
types/frame_support/dispatch/pays.dart
types/sp_runtime/dispatch_error.dart
types/sp_runtime/module_error.dart
types/sp_runtime/token_error.dart
types/sp_arithmetic/arithmetic_error.dart
types/sp_runtime/transactional_error.dart
types/pallet_indices/pallet/event.dart
types/pallet_balances/pallet/event_1.dart
types/frame_support/traits/tokens/misc/balance_status.dart
types/pallet_transaction_payment/pallet/event.dart
types/pallet_staking/pallet/pallet/event.dart
types/pallet_staking/reward_destination.dart
types/sp_arithmetic/per_things/perbill.dart
types/pallet_staking/validator_prefs.dart
types/pallet_staking/forcing.dart
types/pallet_offences/pallet/event.dart
types/pallet_session/pallet/event.dart
types/pallet_grandpa/pallet/event.dart
types/tuples_1.dart
types/sp_consensus_grandpa/app/public.dart
types/pallet_treasury/pallet/event.dart
types/polkadot_runtime_common/impls/versioned_locatable_asset.dart
types/staging_xcm/v3/multilocation/multi_location.dart
types/xcm/v3/junctions/junctions.dart
types/xcm/v3/junction/junction.dart
types/xcm/v3/junction/network_id.dart
types/xcm/v3/junction/body_id.dart
types/xcm/v3/junction/body_part.dart
types/xcm/v3/multiasset/asset_id.dart
types/staging_xcm/v4/location/location.dart
types/staging_xcm/v4/junctions/junctions.dart
types/staging_xcm/v4/junction/junction.dart
types/staging_xcm/v4/junction/network_id.dart
types/staging_xcm/v4/asset/asset_id.dart
types/xcm/versioned_location.dart
types/xcm/v2/multilocation/multi_location.dart
types/xcm/v2/multilocation/junctions.dart
types/xcm/v2/junction/junction.dart
types/xcm/v2/network_id.dart
types/xcm/v2/body_id.dart
types/xcm/v2/body_part.dart
types/pallet_conviction_voting/pallet/event.dart
types/pallet_conviction_voting/vote/account_vote.dart
types/pallet_conviction_voting/vote/vote.dart
types/pallet_referenda/pallet/event_1.dart
types/frame_support/traits/preimages/bounded.dart
types/staging_kusama_runtime/runtime_call.dart
types/frame_system/pallet/call.dart
types/tuples.dart
types/pallet_babe/pallet/call.dart
types/sp_consensus_slots/equivocation_proof.dart
types/sp_runtime/generic/header/header.dart
types/sp_consensus_babe/app/public.dart
types/sp_consensus_slots/slot.dart
types/sp_session/membership_proof.dart
types/sp_consensus_babe/digests/next_config_descriptor.dart
types/sp_consensus_babe/allowed_slots.dart
types/pallet_timestamp/pallet/call.dart
types/pallet_indices/pallet/call.dart
types/sp_runtime/multiaddress/multi_address.dart
types/pallet_balances/pallet/call_1.dart
types/pallet_balances/types/adjustment_direction.dart
types/pallet_staking/pallet/pallet/call.dart
types/sp_arithmetic/per_things/percent.dart
types/pallet_staking/pallet/pallet/config_op_1.dart
types/pallet_staking/pallet/pallet/config_op_2.dart
types/pallet_staking/pallet/pallet/config_op_3.dart
types/pallet_staking/pallet/pallet/config_op_4.dart
types/pallet_staking/unlock_chunk.dart
types/pallet_session/pallet/call.dart
types/staging_kusama_runtime/session_keys.dart
types/polkadot_primitives/v8/validator_app/public.dart
types/polkadot_primitives/v8/assignment_app/public.dart
types/sp_authority_discovery/app/public.dart
types/sp_consensus_beefy/ecdsa_crypto/public.dart
types/pallet_grandpa/pallet/call.dart
types/sp_consensus_grandpa/equivocation_proof.dart
types/sp_consensus_grandpa/equivocation.dart
types/finality_grandpa/equivocation_1.dart
types/finality_grandpa/prevote.dart
types/sp_consensus_grandpa/app/signature.dart
types/finality_grandpa/equivocation_2.dart
types/finality_grandpa/precommit.dart
types/pallet_treasury/pallet/call.dart
types/pallet_conviction_voting/pallet/call.dart
types/pallet_conviction_voting/conviction/conviction.dart
types/pallet_referenda/pallet/call_1.dart
types/staging_kusama_runtime/origin_caller.dart
types/frame_support/dispatch/raw_origin.dart
types/staging_kusama_runtime/governance/origins/pallet_custom_origins/origin.dart
types/polkadot_runtime_parachains/origin/pallet/origin.dart
types/polkadot_parachain_primitives/primitives/id.dart
types/pallet_xcm/pallet/origin.dart
types/sp_core/void.dart
types/frame_support/traits/schedule/dispatch_time.dart
types/pallet_ranked_collective/pallet/call.dart
types/pallet_referenda/pallet/call_2.dart
types/pallet_whitelist/pallet/call.dart
types/pallet_parameters/pallet/call.dart
types/staging_kusama_runtime/runtime_parameters.dart
types/staging_kusama_runtime/dynamic_params/inflation/parameters.dart
types/staging_kusama_runtime/dynamic_params/inflation/min_inflation.dart
types/sp_arithmetic/per_things/perquintill.dart
types/staging_kusama_runtime/dynamic_params/inflation/max_inflation.dart
types/staging_kusama_runtime/dynamic_params/inflation/ideal_stake.dart
types/staging_kusama_runtime/dynamic_params/inflation/falloff.dart
types/staging_kusama_runtime/dynamic_params/inflation/use_auction_slots.dart
types/staging_kusama_runtime/dynamic_params/treasury/parameters.dart
types/staging_kusama_runtime/dynamic_params/treasury/burn_portion.dart
types/sp_arithmetic/per_things/permill.dart
types/staging_kusama_runtime/dynamic_params/treasury/burn_destination.dart
types/staging_kusama_runtime/burn_destination_account.dart
types/polkadot_runtime_common/claims/pallet/call.dart
types/polkadot_runtime_common/claims/ecdsa_signature.dart
types/polkadot_runtime_common/claims/ethereum_address.dart
types/tuples_2.dart
types/polkadot_runtime_common/claims/statement_kind.dart
types/pallet_utility/pallet/call.dart
types/pallet_society/pallet/call.dart
types/pallet_recovery/pallet/call.dart
types/pallet_vesting/pallet/call.dart
types/pallet_vesting/vesting_info/vesting_info.dart
types/pallet_scheduler/pallet/call.dart
types/pallet_proxy/pallet/call.dart
types/staging_kusama_runtime/proxy_type.dart
types/pallet_multisig/pallet/call.dart
types/pallet_multisig/timepoint.dart
types/pallet_preimage/pallet/call.dart
types/pallet_bounties/pallet/call.dart
types/pallet_child_bounties/pallet/call.dart
types/pallet_election_provider_multi_phase/pallet/call.dart
types/pallet_election_provider_multi_phase/raw_solution.dart
types/staging_kusama_runtime/npos_compact_solution24.dart
types/sp_arithmetic/per_things/per_u16.dart
types/sp_npos_elections/election_score.dart
types/pallet_election_provider_multi_phase/solution_or_snapshot_size.dart
types/sp_npos_elections/support.dart
types/pallet_nis/pallet/call.dart
types/pallet_balances/pallet/call_2.dart
types/pallet_bags_list/pallet/call.dart
types/pallet_nomination_pools/pallet/call.dart
types/pallet_nomination_pools/bond_extra.dart
types/pallet_nomination_pools/pool_state.dart
types/pallet_nomination_pools/config_op_1.dart
types/pallet_nomination_pools/config_op_2.dart
types/pallet_nomination_pools/config_op_3.dart
types/pallet_nomination_pools/config_op_4.dart
types/pallet_nomination_pools/claim_permission.dart
types/pallet_nomination_pools/commission_change_rate.dart
types/pallet_nomination_pools/commission_claim_permission.dart
types/pallet_fast_unstake/pallet/call.dart
types/polkadot_runtime_parachains/configuration/pallet/call.dart
types/polkadot_primitives/v8/async_backing/async_backing_params.dart
types/polkadot_primitives/v8/executor_params/executor_params.dart
types/polkadot_primitives/v8/executor_params/executor_param.dart
types/polkadot_primitives/v8/pvf_prep_kind.dart
types/polkadot_primitives/v8/pvf_exec_kind.dart
types/polkadot_primitives/v8/approval_voting_params.dart
types/polkadot_primitives/v8/scheduler_params.dart
types/polkadot_runtime_parachains/shared/pallet/call.dart
types/polkadot_runtime_parachains/inclusion/pallet/call.dart
types/polkadot_runtime_parachains/paras_inherent/pallet/call.dart
types/polkadot_primitives/v8/inherent_data.dart
types/polkadot_primitives/v8/signed/unchecked_signed.dart
types/polkadot_primitives/v8/availability_bitfield.dart
types/bitvec/order/lsb0.dart
types/polkadot_primitives/v8/validator_index.dart
types/polkadot_primitives/v8/validator_app/signature.dart
types/polkadot_primitives/v8/backed_candidate.dart
types/polkadot_primitives/v8/committed_candidate_receipt.dart
types/polkadot_primitives/v8/candidate_descriptor.dart
types/polkadot_primitives/v8/collator_app/public.dart
types/polkadot_primitives/v8/collator_app/signature.dart
types/polkadot_parachain_primitives/primitives/validation_code_hash.dart
types/polkadot_primitives/v8/candidate_commitments.dart
types/polkadot_core_primitives/outbound_hrmp_message.dart
types/polkadot_parachain_primitives/primitives/validation_code.dart
types/polkadot_parachain_primitives/primitives/head_data.dart
types/polkadot_primitives/v8/validity_attestation.dart
types/polkadot_primitives/v8/dispute_statement_set.dart
types/polkadot_core_primitives/candidate_hash.dart
types/polkadot_primitives/v8/dispute_statement.dart
types/polkadot_primitives/v8/valid_dispute_statement_kind.dart
types/polkadot_primitives/v8/invalid_dispute_statement_kind.dart
types/polkadot_runtime_parachains/paras/pallet/call.dart
types/polkadot_primitives/v8/pvf_check_statement.dart
types/polkadot_runtime_parachains/initializer/pallet/call.dart
types/polkadot_runtime_parachains/hrmp/pallet/call.dart
types/polkadot_parachain_primitives/primitives/hrmp_channel_id.dart
types/polkadot_runtime_parachains/disputes/pallet/call.dart
types/polkadot_runtime_parachains/disputes/slashing/pallet/call.dart
types/polkadot_primitives/v8/slashing/dispute_proof.dart
types/polkadot_primitives/v8/slashing/disputes_time_slot.dart
types/polkadot_primitives/v8/slashing/slashing_offence_kind.dart
types/polkadot_runtime_parachains/on_demand/pallet/call.dart
types/polkadot_runtime_common/paras_registrar/pallet/call.dart
types/polkadot_runtime_common/slots/pallet/call.dart
types/polkadot_runtime_common/auctions/pallet/call.dart
types/polkadot_runtime_common/crowdloan/pallet/call.dart
types/sp_runtime/multi_signer.dart
types/sp_runtime/multi_signature.dart
types/polkadot_runtime_parachains/coretime/pallet/call.dart
types/pallet_broker/coretime_interface/core_assignment.dart
types/polkadot_runtime_parachains/assigner_coretime/parts_of57600.dart
types/pallet_xcm/pallet/call.dart
types/xcm/versioned_xcm_1.dart
types/xcm/v2/xcm_1.dart
types/xcm/v2/instruction_1.dart
types/xcm/v2/multiasset/multi_assets.dart
types/xcm/v2/multiasset/multi_asset.dart
types/xcm/v2/multiasset/asset_id.dart
types/xcm/v2/multiasset/fungibility.dart
types/xcm/v2/multiasset/asset_instance.dart
types/xcm/v2/response.dart
types/xcm/v2/traits/error.dart
types/xcm/v2/origin_kind.dart
types/xcm/double_encoded/double_encoded_1.dart
types/xcm/v2/multiasset/multi_asset_filter.dart
types/xcm/v2/multiasset/wild_multi_asset.dart
types/xcm/v2/multiasset/wild_fungibility.dart
types/xcm/v2/weight_limit.dart
types/xcm/v3/xcm_1.dart
types/xcm/v3/instruction_1.dart
types/xcm/v3/multiasset/multi_assets.dart
types/xcm/v3/multiasset/multi_asset.dart
types/xcm/v3/multiasset/fungibility.dart
types/xcm/v3/multiasset/asset_instance.dart
types/xcm/v3/response.dart
types/xcm/v3/traits/error.dart
types/xcm/v3/pallet_info.dart
types/xcm/v3/maybe_error_code.dart
types/xcm/v3/origin_kind.dart
types/xcm/v3/query_response_info.dart
types/xcm/v3/multiasset/multi_asset_filter.dart
types/xcm/v3/multiasset/wild_multi_asset.dart
types/xcm/v3/multiasset/wild_fungibility.dart
types/xcm/v3/weight_limit.dart
types/staging_xcm/v4/xcm_1.dart
types/staging_xcm/v4/instruction_1.dart
types/staging_xcm/v4/asset/assets.dart
types/staging_xcm/v4/asset/asset.dart
types/staging_xcm/v4/asset/fungibility.dart
types/staging_xcm/v4/asset/asset_instance.dart
types/staging_xcm/v4/response.dart
types/staging_xcm/v4/pallet_info.dart
types/staging_xcm/v4/query_response_info.dart
types/staging_xcm/v4/asset/asset_filter.dart
types/staging_xcm/v4/asset/wild_asset.dart
types/staging_xcm/v4/asset/wild_fungibility.dart
types/xcm/versioned_assets.dart
types/xcm/versioned_xcm_2.dart
types/xcm/v2/xcm_2.dart
types/xcm/v2/instruction_2.dart
types/xcm/double_encoded/double_encoded_2.dart
types/xcm/v3/xcm_2.dart
types/xcm/v3/instruction_2.dart
types/staging_xcm/v4/xcm_2.dart
types/staging_xcm/v4/instruction_2.dart
types/staging_xcm_executor/traits/asset_transfer/transfer_type.dart
types/xcm/versioned_asset_id.dart
types/pallet_message_queue/pallet/call.dart
types/polkadot_runtime_parachains/inclusion/aggregate_message_origin.dart
types/polkadot_runtime_parachains/inclusion/ump_queue_id.dart
types/pallet_asset_rate/pallet/call.dart
types/sp_arithmetic/fixed_point/fixed_u128.dart
types/pallet_beefy/pallet/call.dart
types/sp_consensus_beefy/double_voting_proof.dart
types/sp_consensus_beefy/ecdsa_crypto/signature.dart
types/sp_consensus_beefy/vote_message.dart
types/sp_consensus_beefy/commitment/commitment.dart
types/sp_consensus_beefy/payload/payload.dart
types/sp_consensus_beefy/fork_voting_proof.dart
types/sp_mmr_primitives/ancestry_proof.dart
types/sp_consensus_beefy/future_block_voting_proof.dart
types/sp_runtime/traits/blake_two256.dart
types/pallet_conviction_voting/types/tally.dart
types/pallet_ranked_collective/pallet/event.dart
types/pallet_ranked_collective/vote_record.dart
types/pallet_ranked_collective/tally.dart
types/pallet_referenda/pallet/event_2.dart
types/pallet_whitelist/pallet/event.dart
types/frame_support/dispatch/post_dispatch_info.dart
types/sp_runtime/dispatch_error_with_post_info.dart
types/pallet_parameters/pallet/event.dart
types/staging_kusama_runtime/runtime_parameters_key.dart
types/staging_kusama_runtime/dynamic_params/inflation/parameters_key.dart
types/staging_kusama_runtime/dynamic_params/treasury/parameters_key.dart
types/staging_kusama_runtime/runtime_parameters_value.dart
types/staging_kusama_runtime/dynamic_params/inflation/parameters_value.dart
types/staging_kusama_runtime/dynamic_params/treasury/parameters_value.dart
types/polkadot_runtime_common/claims/pallet/event.dart
types/pallet_utility/pallet/event.dart
types/pallet_society/pallet/event.dart
types/pallet_society/group_params.dart
types/pallet_recovery/pallet/event.dart
types/pallet_vesting/pallet/event.dart
types/pallet_scheduler/pallet/event.dart
types/pallet_proxy/pallet/event.dart
types/pallet_multisig/pallet/event.dart
types/pallet_preimage/pallet/event.dart
types/pallet_bounties/pallet/event.dart
types/pallet_child_bounties/pallet/event.dart
types/pallet_election_provider_multi_phase/pallet/event.dart
types/pallet_election_provider_multi_phase/election_compute.dart
types/pallet_election_provider_multi_phase/phase.dart
types/pallet_nis/pallet/event.dart
types/pallet_balances/pallet/event_2.dart
types/pallet_bags_list/pallet/event.dart
types/pallet_nomination_pools/pallet/event.dart
types/pallet_fast_unstake/pallet/event.dart
types/pallet_delegated_staking/pallet/event.dart
types/polkadot_runtime_parachains/inclusion/pallet/event.dart
types/polkadot_primitives/v8/candidate_receipt.dart
types/polkadot_primitives/v8/core_index.dart
types/polkadot_primitives/v8/group_index.dart
types/polkadot_runtime_parachains/paras/pallet/event.dart
types/polkadot_runtime_parachains/hrmp/pallet/event.dart
types/polkadot_runtime_parachains/disputes/pallet/event.dart
types/polkadot_runtime_parachains/disputes/dispute_location.dart
types/polkadot_runtime_parachains/disputes/dispute_result.dart
types/polkadot_runtime_parachains/on_demand/pallet/event.dart
types/polkadot_runtime_common/paras_registrar/pallet/event.dart
types/polkadot_runtime_common/slots/pallet/event.dart
types/polkadot_runtime_common/auctions/pallet/event.dart
types/polkadot_runtime_common/crowdloan/pallet/event.dart
types/polkadot_runtime_parachains/coretime/pallet/event.dart
types/pallet_xcm/pallet/event.dart
types/staging_xcm/v4/traits/outcome.dart
types/pallet_message_queue/pallet/event.dart
types/frame_support/traits/messages/process_message_error.dart
types/pallet_asset_rate/pallet/event.dart
types/frame_system/phase.dart
types/frame_system/last_runtime_upgrade_info.dart
types/frame_system/code_upgrade_authorization.dart
types/frame_system/limits/block_weights.dart
types/frame_support/dispatch/per_dispatch_class_2.dart
types/frame_system/limits/weights_per_class.dart
types/frame_system/limits/block_length.dart
types/frame_support/dispatch/per_dispatch_class_3.dart
types/sp_weights/runtime_db_weight.dart
types/sp_version/runtime_version.dart
types/cow.dart
types/frame_system/pallet/error.dart
types/sp_consensus_babe/digests/pre_digest.dart
types/sp_consensus_babe/digests/primary_pre_digest.dart
types/sp_core/sr25519/vrf/vrf_signature.dart
types/sp_consensus_babe/digests/secondary_plain_pre_digest.dart
types/sp_consensus_babe/digests/secondary_v_r_f_pre_digest.dart
types/sp_consensus_babe/babe_epoch_configuration.dart
types/pallet_babe/pallet/error.dart
types/pallet_indices/pallet/error.dart
types/pallet_balances/types/balance_lock.dart
types/pallet_balances/types/reasons.dart
types/pallet_balances/types/reserve_data.dart
types/frame_support/traits/tokens/misc/id_amount_1.dart
types/staging_kusama_runtime/runtime_hold_reason.dart
types/pallet_preimage/pallet/hold_reason.dart
types/pallet_nis/pallet/hold_reason.dart
types/pallet_delegated_staking/pallet/hold_reason.dart
types/frame_support/traits/tokens/misc/id_amount_2.dart
types/staging_kusama_runtime/runtime_freeze_reason.dart
types/pallet_nomination_pools/pallet/freeze_reason.dart
types/pallet_balances/pallet/error_1.dart
types/pallet_transaction_payment/releases.dart
types/pallet_staking/staking_ledger.dart
types/pallet_staking/nominations.dart
types/pallet_staking/active_era_info.dart
types/sp_staking/exposure.dart
types/sp_staking/individual_exposure.dart
types/sp_staking/paged_exposure_metadata.dart
types/sp_staking/exposure_page.dart
types/pallet_staking/era_reward_points.dart
types/b_tree_map_1.dart
types/pallet_staking/unapplied_slash.dart
types/pallet_staking/slashing/slashing_spans.dart
types/pallet_staking/slashing/span_record.dart
types/pallet_staking/pallet/pallet/error.dart
types/sp_staking/offence/offence_details.dart
types/sp_core/crypto/key_type_id.dart
types/pallet_session/pallet/error.dart
types/pallet_grandpa/stored_state.dart
types/pallet_grandpa/stored_pending_change.dart
types/pallet_grandpa/pallet/error.dart
types/pallet_treasury/proposal.dart
types/pallet_treasury/spend_status.dart
types/pallet_treasury/payment_state.dart
types/frame_support/pallet_id.dart
types/pallet_treasury/pallet/error.dart
types/pallet_conviction_voting/vote/voting.dart
types/pallet_conviction_voting/vote/casting.dart
types/pallet_conviction_voting/types/delegations.dart
types/pallet_conviction_voting/vote/prior_lock.dart
types/pallet_conviction_voting/vote/delegating.dart
types/pallet_conviction_voting/pallet/error.dart
types/pallet_referenda/types/referendum_info_1.dart
types/pallet_referenda/types/referendum_status_1.dart
types/pallet_referenda/types/deposit.dart
types/pallet_referenda/types/deciding_status.dart
types/pallet_referenda/types/track_info.dart
types/pallet_referenda/types/curve.dart
types/sp_arithmetic/fixed_point/fixed_i64.dart
types/pallet_referenda/pallet/error_1.dart
types/pallet_ranked_collective/member_record.dart
types/pallet_ranked_collective/pallet/error.dart
types/pallet_referenda/types/referendum_info_2.dart
types/pallet_referenda/types/referendum_status_2.dart
types/pallet_referenda/pallet/error_2.dart
types/pallet_whitelist/pallet/error.dart
types/polkadot_runtime_common/claims/pallet/error.dart
types/pallet_utility/pallet/error.dart
types/pallet_society/member_record.dart
types/pallet_society/vouching_status.dart
types/pallet_society/payout_record.dart
types/pallet_society/bid.dart
types/pallet_society/bid_kind.dart
types/pallet_society/candidacy.dart
types/pallet_society/tally.dart
types/pallet_society/vote.dart
types/pallet_society/intake_record.dart
types/pallet_society/pallet/error.dart
types/pallet_recovery/recovery_config.dart
types/pallet_recovery/active_recovery.dart
types/pallet_recovery/pallet/error.dart
types/pallet_vesting/releases.dart
types/pallet_vesting/pallet/error.dart
types/pallet_scheduler/scheduled.dart
types/pallet_scheduler/retry_config.dart
types/pallet_scheduler/pallet/error.dart
types/pallet_proxy/proxy_definition.dart
types/pallet_proxy/announcement.dart
types/pallet_proxy/pallet/error.dart
types/pallet_multisig/multisig.dart
types/pallet_multisig/pallet/error.dart
types/pallet_preimage/old_request_status.dart
types/pallet_preimage/request_status.dart
types/frame_support/traits/tokens/fungible/hold_consideration.dart
types/pallet_preimage/pallet/error.dart
types/pallet_bounties/bounty.dart
types/pallet_bounties/bounty_status.dart
types/pallet_bounties/pallet/error.dart
types/pallet_child_bounties/child_bounty.dart
types/pallet_child_bounties/child_bounty_status.dart
types/pallet_child_bounties/pallet/error.dart
types/pallet_election_provider_multi_phase/ready_solution.dart
types/pallet_election_provider_multi_phase/round_snapshot.dart
types/pallet_election_provider_multi_phase/signed/signed_submission.dart
types/pallet_election_provider_multi_phase/pallet/error.dart
types/pallet_nis/pallet/bid.dart
types/pallet_nis/pallet/summary_record.dart
types/pallet_nis/pallet/receipt_record.dart
types/pallet_nis/pallet/error.dart
types/frame_support/traits/tokens/misc/id_amount_3.dart
types/pallet_balances/pallet/error_2.dart
types/pallet_bags_list/list/node.dart
types/pallet_bags_list/list/bag.dart
types/pallet_bags_list/pallet/error.dart
types/pallet_bags_list/list/list_error.dart
types/pallet_nomination_pools/pool_member.dart
types/bounded_collections/bounded_btree_map/bounded_b_tree_map_1.dart
types/b_tree_map_2.dart
types/pallet_nomination_pools/bonded_pool_inner.dart
types/pallet_nomination_pools/commission.dart
types/pallet_nomination_pools/pool_roles.dart
types/pallet_nomination_pools/reward_pool.dart
types/pallet_nomination_pools/sub_pools.dart
types/pallet_nomination_pools/unbond_pool.dart
types/bounded_collections/bounded_btree_map/bounded_b_tree_map_2.dart
types/b_tree_map_3.dart
types/pallet_nomination_pools/pallet/error.dart
types/pallet_nomination_pools/pallet/defensive_error.dart
types/pallet_fast_unstake/types/unstake_request.dart
types/pallet_fast_unstake/pallet/error.dart
types/pallet_delegated_staking/types/delegation.dart
types/pallet_delegated_staking/types/agent_ledger.dart
types/pallet_delegated_staking/pallet/error.dart
types/polkadot_runtime_parachains/configuration/host_configuration.dart
types/polkadot_runtime_parachains/configuration/pallet/error.dart
types/polkadot_runtime_parachains/shared/allowed_relay_parents_tracker.dart
types/polkadot_runtime_parachains/inclusion/candidate_pending_availability.dart
types/polkadot_runtime_parachains/inclusion/pallet/error.dart
types/polkadot_primitives/v8/scraped_on_chain_votes.dart
types/polkadot_runtime_parachains/paras_inherent/pallet/error.dart
types/polkadot_runtime_parachains/scheduler/pallet/core_occupied.dart
types/polkadot_runtime_parachains/scheduler/pallet/paras_entry.dart
types/polkadot_runtime_parachains/scheduler/common/assignment.dart
types/b_tree_map_4.dart
types/polkadot_runtime_parachains/paras/pvf_check_active_vote_state.dart
types/polkadot_runtime_parachains/paras/pvf_check_cause.dart
types/polkadot_runtime_parachains/paras/upgrade_strategy.dart
types/polkadot_runtime_parachains/paras/para_lifecycle.dart
types/polkadot_runtime_parachains/paras/para_past_code_meta.dart
types/polkadot_runtime_parachains/paras/replacement_times.dart
types/polkadot_primitives/v8/upgrade_go_ahead.dart
types/polkadot_primitives/v8/upgrade_restriction.dart
types/polkadot_runtime_parachains/paras/para_genesis_args.dart
types/polkadot_runtime_parachains/paras/pallet/error.dart
types/polkadot_runtime_parachains/initializer/buffered_session_change.dart
types/polkadot_core_primitives/inbound_downward_message.dart
types/polkadot_runtime_parachains/hrmp/hrmp_open_channel_request.dart
types/polkadot_runtime_parachains/hrmp/hrmp_channel.dart
types/polkadot_core_primitives/inbound_hrmp_message.dart
types/polkadot_runtime_parachains/hrmp/pallet/error.dart
types/polkadot_primitives/v8/session_info.dart
types/polkadot_primitives/v8/indexed_vec_1.dart
types/polkadot_primitives/v8/indexed_vec_2.dart
types/polkadot_primitives/v8/dispute_state.dart
types/b_tree_set.dart
types/polkadot_runtime_parachains/disputes/pallet/error.dart
types/polkadot_primitives/v8/slashing/pending_slashes.dart
types/b_tree_map_5.dart
types/polkadot_runtime_parachains/disputes/slashing/pallet/error.dart
types/polkadot_runtime_parachains/on_demand/types/core_affinity_count.dart
types/polkadot_runtime_parachains/on_demand/types/queue_status_type.dart
types/polkadot_runtime_parachains/on_demand/types/queue_index.dart
types/binary_heap_1.dart
types/polkadot_runtime_parachains/on_demand/types/reverse_queue_index.dart
types/binary_heap_2.dart
types/polkadot_runtime_parachains/on_demand/types/enqueued_order.dart
types/polkadot_runtime_parachains/on_demand/pallet/error.dart
types/polkadot_runtime_parachains/assigner_coretime/schedule.dart
types/polkadot_runtime_parachains/assigner_coretime/core_descriptor.dart
types/polkadot_runtime_parachains/assigner_coretime/queue_descriptor.dart
types/polkadot_runtime_parachains/assigner_coretime/work_state.dart
types/polkadot_runtime_parachains/assigner_coretime/assignment_state.dart
types/polkadot_runtime_parachains/assigner_coretime/pallet/error.dart
types/polkadot_runtime_common/paras_registrar/para_info.dart
types/polkadot_runtime_common/paras_registrar/pallet/error.dart
types/polkadot_runtime_common/slots/pallet/error.dart
types/polkadot_runtime_common/auctions/pallet/error.dart
types/polkadot_runtime_common/crowdloan/fund_info.dart
types/polkadot_runtime_common/crowdloan/last_contribution.dart
types/polkadot_runtime_common/crowdloan/pallet/error.dart
types/polkadot_runtime_parachains/coretime/pallet/error.dart
types/pallet_xcm/pallet/query_status.dart
types/xcm/versioned_response.dart
types/pallet_xcm/pallet/version_migration_stage.dart
types/pallet_xcm/pallet/remote_locked_fungible_record.dart
types/pallet_xcm/pallet/error.dart
types/pallet_message_queue/book_state.dart
types/pallet_message_queue/neighbours.dart
types/pallet_message_queue/page.dart
types/pallet_message_queue/pallet/error.dart
types/pallet_asset_rate/pallet/error.dart
types/pallet_beefy/pallet/error.dart
types/sp_consensus_beefy/mmr/beefy_authority_set.dart
types/sp_runtime/generic/unchecked_extrinsic/unchecked_extrinsic.dart
types/tuples_3.dart
types/frame_system/extensions/check_non_zero_sender/check_non_zero_sender.dart
types/frame_system/extensions/check_spec_version/check_spec_version.dart
types/frame_system/extensions/check_tx_version/check_tx_version.dart
types/frame_system/extensions/check_genesis/check_genesis.dart
types/frame_system/extensions/check_mortality/check_mortality.dart
types/sp_runtime/generic/era/era.dart
types/frame_system/extensions/check_nonce/check_nonce.dart
types/frame_system/extensions/check_weight/check_weight.dart
types/pallet_transaction_payment/charge_transaction_payment.dart
types/frame_metadata_hash_extension/check_metadata_hash.dart
types/frame_metadata_hash_extension/mode.dart
types/staging_kusama_runtime/runtime.dart
pallets/system.dart
pallets/babe.dart
pallets/timestamp.dart
pallets/indices.dart
pallets/balances.dart
pallets/transaction_payment.dart
pallets/authorship.dart
pallets/staking.dart
pallets/offences.dart
pallets/historical.dart
pallets/session.dart
pallets/grandpa.dart
pallets/authority_discovery.dart
pallets/treasury.dart
pallets/conviction_voting.dart
pallets/referenda.dart
pallets/fellowship_collective.dart
pallets/fellowship_referenda.dart
pallets/whitelist.dart
pallets/parameters.dart
pallets/claims.dart
pallets/utility.dart
pallets/society.dart
pallets/recovery.dart
pallets/vesting.dart
pallets/scheduler.dart
pallets/proxy.dart
pallets/multisig.dart
pallets/preimage.dart
pallets/bounties.dart
pallets/child_bounties.dart
pallets/election_provider_multi_phase.dart
pallets/nis.dart
pallets/nis_counterpart_balances.dart
pallets/voter_list.dart
pallets/nomination_pools.dart
pallets/fast_unstake.dart
pallets/delegated_staking.dart
pallets/configuration.dart
pallets/paras_shared.dart
pallets/para_inclusion.dart
pallets/para_inherent.dart
pallets/para_scheduler.dart
pallets/paras.dart
pallets/initializer.dart
pallets/dmp.dart
pallets/hrmp.dart
pallets/para_session_info.dart
pallets/paras_disputes.dart
pallets/paras_slashing.dart
pallets/on_demand_assignment_provider.dart
pallets/coretime_assignment_provider.dart
pallets/registrar.dart
pallets/slots.dart
pallets/auctions.dart
pallets/crowdloan.dart
pallets/coretime.dart
pallets/xcm_pallet.dart
pallets/message_queue.dart
pallets/asset_rate.dart
pallets/beefy.dart
pallets/mmr.dart
pallets/beefy_mmr_leaf.dart
kusama.dart
```
</details>

demo.dart successfully connects to the chain and runs a query:
```dart
{
  specName: polkadot,
  implName: parity-polkadot,
  authoringVersion: 0,
  specVersion: 1004001,
  implVersion: 0,
  apis: [...],
  transactionVersion: 26,
  stateVersion: 1
}
```

I'm able to see the first 10 account storage keys and their corresponding account info.
```dart
First 10 account storage keys: (0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da900000a008e9025a48fdc3b13d8cc8c4871f40d8fd44220ddbb0cd51715b46071c3a1337cf85edba112484bb944ec8ce6, 0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da900001c2ed146255b0bed7891676f22e9047ff8ec5bf639dd08672157cff3c675aec4ec17276036689e07b405a05b4449, 0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da900002ed3d34f8412441bdb1db5d4a9dfbc74238ff6bdc1b5e59208c688812cde864a815776980edd8ed2965115e01615, ..., 0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da900005dd7497447073471631b316467b5db065775048fea576b139736ebe87bff3ba288002a33aa2a91c85b32bff5fa76, 0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9000069eb42781aa99b0695f2166d6a382eabfbaabc9302400e24924da229bfdf57e9ea5f26dc4657b8eac7be066bd506)
First 10 account pubKeys: (0x00000a008e9025a48fdc3b13d8cc8c4871f40d8fd44220ddbb0cd51715b46071, 0x00001c2ed146255b0bed7891676f22e9047ff8ec5bf639dd08672157cff3c675, 0x00002ed3d34f8412441bdb1db5d4a9dfbc74238ff6bdc1b5e59208c688812cde, ..., 0x00005dd7497447073471631b316467b5db065775048fea576b139736ebe87bff, 0x000069eb42781aa99b0695f2166d6a382eabfbaabc9302400e24924da229bfdf)
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
AccountInfo: {nonce: 0, consumers: 0, providers: 0, sufficients: 0, data: {free: 0, reserved: 0, frozen: 0, flags: 170141183460469231731687303715884105728}}
```
Very thorough [extrinsics](https://polkadart.dev/metadata/extrinsics/) docs.

## Testing

I'm able to install all deps in the pubspec.yaml file:

```dart
dependencies:
  polkadart: ^0.4.7
  polkadart_cli: ^0.4.3
  polkadart_keyring: ^0.4.4
  polkadart_scale_codec: ^1.2.1
  secp256k1_ecdsa: ^0.4.1
  sr25519: ^0.4.1
  ss58: ^1.1.3
  substrate_bip39: ^0.4.1
  substrate_metadata: ^1.2.3
```
