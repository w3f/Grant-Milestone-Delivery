# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** takahser

| Number | Deliverable | Accepted | Specification | Notes
| --- | --- | --- | --- | --- |
| 0a. | License | <ul><li>[x] </li></ul> | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | Inline documentation. [Amendment to the original guide](https://github.com/rhysbalevicius/infimum/tree/main?tab=readme-ov-file#interacting-with-the-pallet) explaining the requirements for satisfying the verification logic. |
| 0c. | Testing | <ul><li>[x] </li></ul> | [Unit tests](https://github.com/rhysbalevicius/infimum/tree/main/pallet/src/tests) for methods added. Updated unit tests for amended methods. |
| 1a. | Pallet: verification methods | <ul><li>[x] </li></ul> | Private methods for [verifying proofs](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L784-L827) which have been generated off-chain by the CLI delivered in Milestone 3. Relies on the verification logic provided by [arkworks](https://github.com/arkworks-rs/groth16). |
| 1b. | Pallet: method modifications | <ul><li>[x] </li></ul> | Modifications to methods [1.ii.f](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L470-L552) and [1.ii.g](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L554-L634) (listed under deliverables in the project overview) to call the private verification methods defined in Milestone 2.1.a — these modifications will guard against storage updates in the case that verification fails, and publish the final poll outcome in the case of success. |
| 2. | Circom circuits  | <ul><li>[x] </li></ul> | [Fork of MACI circuits](), amended as necessary for consumption within our off-chain proof generation pipeline. |

# General Notes

## Testing

```rust
running 42 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::extrinsics::commit_outcome_invalid_proof ... ok
test tests::extrinsics::commit_outcome_invalid_commitment ... ok
test tests::extrinsics::commit_outcome_full_batch ... ok
test tests::extrinsics::commit_outcome_mismatched_state ... ok
test tests::extrinsics::commit_outcome_permuted ... ok
test tests::extrinsics::commit_outcome_full_round ... ok
test tests::extrinsics::commit_outcome_partial_success ... ok
test tests::extrinsics::commit_outcome_single_batch ... ok
test tests::extrinsics::coordinator_key_rotation_malformed ... ok
test tests::extrinsics::coordinator_key_rotation_during_poll ... ok
test tests::extrinsics::coordinator_key_rotation_after_poll ... ok
test tests::extrinsics::coordinator_registration_malformed ... ok
test tests::extrinsics::coordinator_registration_successful ... ok
test tests::extrinsics::coordinator_registration_unsigned ... ok
test tests::extrinsics::coordinator_registration_duplicated ... ok
test tests::extrinsics::merge_interaction_state_success ... ok
test tests::extrinsics::coordinator_key_rotation_successful ... ok
test tests::extrinsics::merge_interaction_voting_period ... ok
test tests::extrinsics::merge_registration_signup_period ... ok
test tests::extrinsics::merge_registration_state_success ... ok
test tests::extrinsics::participant_interaction ... ok
test tests::extrinsics::participant_interaction_outside_period ... ok
test tests::extrinsics::participant_registration_no_poll ... ok
test tests::extrinsics::participant_interaction_limit ... ok
test tests::extrinsics::commit_outcome_success ... ok
test tests::extrinsics::poll_creation_by_non_coordinator ... ok
test tests::extrinsics::participant_limit_reached ... ok
test tests::extrinsics::poll_creation_beyond_limit ... ok
test tests::extrinsics::poll_creation_during_extant ... ok
test tests::extrinsics::poll_creation_successful ... ok
test tests::extrinsics::poll_nullify_error ... ok
test tests::poseidon::bytes_ones_twos ... ok
test tests::extrinsics::register_as_participant_outside_period ... ok
test tests::poseidon::circomlibjs_compat_1_to_12_inputs ... ok
test tests::extrinsics::register_as_participant ... ok
test tests::poseidon::fr_one_two ... ok
test tests::poseidon::fr_one ... ok
test tests::extrinsics::process_messages_public_signals ... ok
test tests::poseidon::random_input ... ok
test tests::poseidon::empty_input ... ok
test tests::poseidon::with_domain_tag ... ok

test result: ok. 42 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.27s

   Doc-tests pallet_infimum

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
