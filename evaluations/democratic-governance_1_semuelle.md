# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/democratic-governance-1.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/encointer/pallets/blob/f6e15ecfc2a7c85905f13ec49db69073c0d3a8ae/LICENSE) | GPLv3
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [encointer/book](https://github.com/encointer/book/blob/5f780e0f358c997dc472b1881c33266cfba083ab/src/tutorials-democracy.md) | See also https://book.encointer.org/tutorials-democracy.html |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [encointer/pallets](https://github.com/encointer/pallets/blob/c84bae2fff329ac54cf966a520a44d84814d5108/democracy/src/tests.rs), [encointer/encointer-node](https://github.com/encointer/encointer-node/blob/7443a0fd3c43aecb45a21227a0a551d55c5979df/client/e2e_tests.py) | See also https://github.com/pifragile/personhood-democracy-1-submission |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [pifragile/personhood-democracy-1-submission](https://github.com/pifragile/personhood-democracy-1-submission/tree/e2c6e4f6c407260ac6395ce73061e29f6c70b5f6) | — |
| 0e. | Article | <ul><li>[x] </li></ul> | [book.encointer.org](https://book.encointer.org/protocol-democracy.html) | Very technical |
| 1. | Democracy Pallet | <ul><li>[x] </li></ul> | [encointer/pallets](https://github.com/encointer/pallets/compare/master...polkadot-v1.0.0-pallets-v1.3.0-democracy) | — |
| 3. | CLI and Integration Tests | <ul><li>[x] </li></ul> | [encointer/encointer-node](https://github.com/encointer/encointer-node/compare/master...personhood-democracy-1-delivery) | — |

## General Notes

Great delivery and documentation. No issues.

### Test output

As per: https://github.com/pifragile/personhood-democracy-1-submission

```sh
> docker run personhood-democracy-1-submission
RUNNING DEMOCRACY UNIT TESTS...

    Finished test [unoptimized + debuginfo] target(s) in 0.44s
     Running unittests src/lib.rs (target/debug/deps/pallet_encointer_democracy-46071782f35846de)

running 26 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::do_update_proposal_state_fails_with_inexistent_proposal ... ok
test tests::do_update_proposal_state_fails_with_wrong_state ... ok
test tests::eligible_reputations_works_with_inexistent_reputations ... ok
test tests::do_update_proposal_state_works_with_cancelled_proposal ... ok
test tests::eligible_reputations_fails_with_invalid_cindex ... ok
test tests::do_update_proposal_state_works_with_too_old_proposal ... ok
test tests::eligible_reputations_works_with_used_reputations ... ok
test tests::eligible_reputations_works_with_cids ... ok
test tests::do_update_proposal_state_works ... ok
test tests::eligible_reputations_works_with_different_reputations ... ok
test tests::enact_set_inactivity_timeout_works ... ok
test tests::is_passing_works ... ok
test tests::enact_remove_location_works ... ok
test tests::enact_add_location_works ... ok
test tests::enact_update_community_metadata_works ... ok
test tests::enactment_error_fires_event ... ok
test tests::enact_update_demurrage_works ... ok
test tests::proposal_submission_fails_if_proposal_in_enactment_queue ... ok
test tests::enact_update_nominal_income_works ... ok
test tests::proposal_submission_works ... ok
test tests::update_proposal_state_extrinsic_works ... ok
test tests::test_get_electorate_works ... ok
test tests::enactment_updates_proposal_metadata_and_enactment_queue ... ok
test tests::voting_works ... ok
test tests::proposal_happy_flow ... ok

test result: ok. 26 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 12.19s



RUNNING DEMOCRACY SIMULATION...

IPFS environment not set up for using gateway
Running test: test_democracy

connecting to remote chain:  ws://127.0.0.1
Registered community with cid: sqm1v79dF6b
Uploading assets to ipfs
 24.39 KiB / 24.39 KiB  100.00%QmaRYgDkmmsza2A1zyxy7H7fFE3bELPA535KvCHzEf2kee
Updating Community spec with ipfs cid: QmaRYgDkmmsza2A1zyxy7H7fFE3bELPA535KvCHzEf2kee
{'type': 'FeatureCollection', 'community': {'meta': {'name': 'Mediterranea', 'symbol': 'MTA', 'assets': 'QmaRYgDkmmsza2A1zyxy7H7fFE3bELPA535KvCHzEf2kee', 'announcementSigner': None, 'rules': 'loCo'}, 'bootstrappers': ['5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y', '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy', '5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw', '5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL']}, 'features': [{'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.543548583984375, 35.48415637985317]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.40484619140625, 35.480801595828616]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.40621948242187, 35.357696204467516]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.544921875, 35.35993616287676]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.68087768554687, 35.48751102385376]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.689117431640625, 35.37001520672124]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.4075927734375, 35.232159412017154]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.551788330078125, 35.238889532322595]}}, {'type': 'Feature', 'properties': {}, 'geometry': {'type': 'Point', 'coordinates': [18.700103759765625, 35.24898366572645]}}]}
Faucet is dripping...
Faucet drips 124414000500 to 5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y (Alice's nonce=0)
Faucet drips 124414000500 to 5FZ9AMjzMptHvfojHAjAahnAE7BhTGVkHwLg9x41CWcKhDAN (Alice's nonce=1)

Waiting for 1 blocks, such that xt's are processed...
number of communities:  1
sqm1v79dF6b: Mediterranea locations: 9
Advancing to phase: CeremonyPhase.Registering
Arrived at CeremonyPhase.Registering.
Registering Participants for cid: sqm1v79dF6b
Waiting for 1 blocks, such that xt's are processed...
listing participants for cid sqm1v79dF6b and ceremony nr 1
Querying BootstrapperRegistry
number of participants assigned:  3
BootstrapperRegistry[1, 1] = 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
BootstrapperRegistry[1, 2] = 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty
BootstrapperRegistry[1, 3] = 5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y
Querying ReputableRegistry
number of participants assigned:  0
Querying EndorseeRegistry
number of participants assigned:  0
Querying NewbieRegistry
number of participants assigned:  0
total: 3 guaranteed seats + 0 newbies = 3 total participants who would like to attend
Listing meetups
[['5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty', '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY', '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y']]
^CPerforming meetups for cid sqm1v79dF6b
Starting meetup...
Attest other attendees...
Waiting for 1 blocks, such that xt's are processed...
listing attestees for cid sqm1v79dF6b and ceremony nr 1
number of attestees:  3
listing participants for cid sqm1v79dF6b and ceremony nr 1
Querying BootstrapperRegistry
number of participants assigned:  3
Querying ReputableRegistry
number of participants assigned:  0
Querying EndorseeRegistry
number of participants assigned:  0
Querying NewbieRegistry
number of participants assigned:  0
AttestationState { community_ceremony: (sqm1v79dF6b, 1), meetup_index: 1, vote: 3, attestation_index: 1, attestor: d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...), attestees: [90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22 (5FLSigC9...), 8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48 (5FHneW46...)] }
AttestationState { community_ceremony: (sqm1v79dF6b, 1), meetup_index: 1, vote: 3, attestation_index: 2, attestor: 8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48 (5FHneW46...), attestees: [90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22 (5FLSigC9...), d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...)] }
AttestationState { community_ceremony: (sqm1v79dF6b, 1), meetup_index: 1, vote: 3, attestation_index: 3, attestor: 90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22 (5FLSigC9...), attestees: [8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48 (5FHneW46...), d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d (5GrwvaEF...)] }
Claiming rewards
Starting democracy test...
Submitting proposal id 1, SetInactivityTimeout(8)
Submitting proposal id 2, UpdateNominalIncome(cid, 44)
Alice votes aye for proposal 1
Bob votes aye for proposal 1
Charlie votes aye for proposal 1
Alice votes nay for proposal 2
Bob votes nay for proposal 2
Charlie votes aye for proposal 2
Waiting 5 blocks...
Alice updates proposal state of proposal 1
Porposal 1 approved!
Waiting 10 blocks...
Alice updates proposal state of proposal 2
Porposal 2 cancelled!
SUCCESS!!

Test success: test_democracy
```