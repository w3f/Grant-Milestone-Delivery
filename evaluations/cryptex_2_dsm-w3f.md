# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cryptex.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| https://github.com/ideal-lab5/substrate/blob/etf/LICENSE-GPL3 |  | 
| **0b.** | Documentation | <ul><li>[x] </li></ul>| https://ideal-lab5.github.io | |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://docs.google.com/document/d/1wyWSHl-MJtiaFzuZqsPTAq0ABRCw9RlxIjt5m6pEOUY/edit?usp=sharing  | |
| **0d.** | Docker | <ul><li>[x] </li></ul>| https://hub.docker.com/repository/docker/ideallabs/etf/general |  |
| **0e.** | Article | <ul><li>[x] </li></ul>| https://ideallabs.substack.com/p/e1d2e89b-ec19-477d-8781-7401fc3efbbe |  |
| 1. | Light Client | <ul><li>[x] </li></ul>| [smoldot fork](https://github.com/ideal-lab5/smoldot/tree/etf), [substrate-connect fork](https://github.com/ideal-lab5/substrate-connect/tree/etf) |  |
| 2 | User Interface: setup | <ul><li>[x] </li></ul>| [the UI](https://github.com/ideal-lab5/etf.js/tree/main/examples) |  |
| 3. | SDK: Slot Scheduling | <ul><li>[x] </li></ul>| [implementation](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L42), [tests](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.test.spec.ts#L6) |  |
| 4. | SDK: Encryption | <ul><li>[x] </li></ul>| [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L138) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L72) |  |
| 5. | SDK: Decryption | <ul><li>[x] </li></ul>| [in etf.js](https://github.com/ideal-lab5/etf.js/blob/77da831ffe3a93964790a7bcf1e5a53ddf362050/src/etf.ts#L160) which calls the [client](https://github.com/ideal-lab5/etf-sdk/blob/4182f34ac51800e48e6a62d1aa1996181567513e/crypto/src/client/client.rs#L116) |  |

## Evaluation V5

The research team gave some feedback suggesting optimizations to the code that can be handled in the next milestones.

## Evaluation V4

### Etf.js

I started the smoldot using `npm install; npm start` in `./wasm-node/javascript`.

I started the ipfs using `ipfs daemon`.

I started the Etf.js changing the `./example/app.js`.

```
  const distanceBasedSlotScheduler = new DistanceBasedSlotScheduler();
  let api = new Etf(distanceBasedSlotScheduler, "0.0.0.0", 9944);
  await api.init(false);
```

I checked the developer tools.

In console:

![image (40)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/616571b1-202f-4eab-8528-dae31eff3653)


In network:

![image (41)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/d63effb9-d68d-4284-a7ad-d426db60f476)


Am I forgetting to run something? Do I need to do any extra steps?

The application works fine, using the full node and the etf0 bootnode. I will ask to someone of the research team to take a look at the cryptography part.

## Evaluation V3

### Substrate

Yes, I have ran `cargo test --package pallet-etf --features runtime-benchmarks`. All tests passed.

<details>

```
user@localhost:/mnt/encrypted_sda/workspace/cryptex/substrate/bin/node-template/node$ cargo test --package pallet-etf --features runtime-benchmarks
warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:300:60
	|
300 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed
	= note: `#[warn(noop_method_call)]` on by default

warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:317:60
	|
317 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed

warning: `frame-support` (lib) generated 2 warnings (run `cargo fix --lib -p frame-support` to apply 2 suggestions)
	Finished test [unoptimized + debuginfo] target(s) in 0.50s
 	Running unittests src/lib.rs (/mnt/encrypted_sda/workspace/cryptex/substrate/target/debug/deps/pallet_etf-bb86bac3c815b1c1)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::benchmarks::benchmark_tests::test_benchmarks ... ok
test tests::it_fails_to_update_generator_when_not_decodable ... ok
test tests::it_sets_the_genesis_state ... ok
test tests::it_allows_root_to_update_generator ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.07s

   Doc-tests pallet-etf

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

</details>

### Etf.js

The test that was failling, this time doesn't failed.

I was able to connect using the substrate and it worked without problems, but I couldn't test using the Light Client. The smoldot fork is working, but I don't know how to add and run with local chain `127.0.0.1:9944`. I tried somethings, but without success. Could you provide assistance on that?

## Evaluation V2

### Substrate

I was able to run the tests this time. Some tests were ignored, and I received some error messages but the tests passed.

My machine doesn't meet the requirements for the benchmark, but no tests failed. This would only impact if I run `cargo bench`?

```
     Running tests/benchmark_machine_works.rs (target/debug/deps/benchmark_machine_works-84f27864495d08d6)

running 2 tests
2023-08-30 09:28:19 Running machine benchmarks...    
2023-08-30 09:28:22 
+----------+----------------+-------------+-------------+-------------------+
| Category | Function       | Score       | Minimum     | Result            |
+===========================================================================+
| CPU      | BLAKE2-256     | 1.26 GiBs   | 1.00 GiBs   | ✅ Pass (125.8 %) |
|----------+----------------+-------------+-------------+-------------------|
| CPU      | SR25519-Verify | 451.92 KiBs | 666.00 KiBs | ❌ Fail ( 67.9 %) |
|----------+----------------+-------------+-------------+-------------------|
| Memory   | Copy           | 7.53 GiBs   | 14.32 GiBs  | ❌ Fail ( 52.6 %) |
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Seq Write      | 833.59 MiBs | 450.00 MiBs | ✅ Pass (185.2 %) |
|----------+----------------+-------------+-------------+-------------------|
| Disk     | Rnd Write      | 343.94 MiBs | 200.00 MiBs | ✅ Pass (172.0 %) |
+----------+----------------+-------------+-------------+-------------------+
From 5 benchmarks in total, 3 passed and 2 failed (10% fault tolerance).    
2023-08-30 09:28:22 The hardware fails to meet the requirements    
2023-08-30 09:28:22 Ignoring error since --allow-fail is set: UnmetRequirement    
2023-08-30 09:28:22 Ignoring error since --allow-fail is set: BadBuildProfile("Detected a `debug` profile")    
test benchmark_machine_works ... ok
test benchmark_machine_fails_with_slow_hardware ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 16.79s
```

Example of tests that returned some error but passed.

<details>

```
     Running unittests src/lib.rs (target/debug/deps/pallet_election_provider_e2e_test-fa0834b4d790a1e5)

running 5 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
Aug 30 09:37:14.123 ERROR runtime::election-provider: [#30] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
Aug 30 09:37:14.125 ERROR runtime::election-provider: [#60] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
test set_validation_intention_after_chilled ... ok
test enters_emergency_phase_after_forcing_before_elect ... ok
Aug 30 09:37:14.139 ERROR runtime::election-provider: [#30] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
Aug 30 09:37:14.141 ERROR runtime::election-provider: [#60] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
test block_progression_works ... ok
Aug 30 09:37:14.188 ERROR runtime::election-provider: [#570] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
Aug 30 09:37:14.189 ERROR runtime::election-provider: [#600] 🗳  Entering emergency mode: ElectionError::Fallback("`NoElection` cannot do anything.")    
test continous_slashes_below_offending_threshold ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.12s


     Running unittests src/lib.rs (target/debug/deps/pallet_grandpa-80d8dc3e61d2548a)

running 25 tests
test mock::__pallet_staking_reward_curve_test_module::reward_curve_piece_count ... ok
test tests::report_equivocation_has_valid_weight ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test benchmarking::bench_note_stalled ... ok
test tests::authorities_change_logged ... ok
Aug 30 09:37:17.175 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.175 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::authorities_change_logged_after_delay ... ok
Aug 30 09:37:17.176 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test benchmarking::bench_check_equivocation_proof ... ok
test tests::cannot_schedule_change_when_one_pending ... ok
test tests::time_slot_have_sane_ord ... ok
test tests::always_schedules_a_change_on_new_session_when_stalled ... ok
test tests::schedule_pause_only_when_live ... ok
test tests::schedule_resume_only_when_paused ... ok
test tests::dispatch_forced_change ... ok
test tests::on_new_session_doesnt_start_new_set_if_schedule_change_failed ... ok
Aug 30 09:37:17.291 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.293 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.310 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.350 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.350 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.351 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.353 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
Aug 30 09:37:17.355 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::cleans_up_old_set_id_session_mappings ... ok
test mock::__pallet_staking_reward_curve_test_module::reward_curve_precision ... ok
Aug 30 09:37:17.546 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
test tests::report_equivocation_validate_unsigned_prevents_duplicates ... ok
test tests::report_equivocation_invalid_key_owner_proof ... ok
test tests::report_equivocation_invalid_set_id ... ok
test tests::valid_equivocation_reports_dont_pay_fees ... ok
test benchmarking::tests::test_generate_equivocation_report_blob ... ok
test tests::report_equivocation_current_set_works ... ok
test tests::report_equivocation_invalid_session ... ok
test tests::report_equivocation_old_set_works ... ok
test tests::report_equivocation_invalid_equivocation_proof ... ok

test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.79s


     Running unittests src/lib.rs (target/debug/deps/sc_consensus_beefy-12f8dc0855ce0f81)

running 48 tests
test communication::tests::beefy_protocols_names ... ok
test communication::peers::tests::should_track_known_peers_progress ... ok
test metrics::tests::should_register_metrics ... ok
test keystore::tests::sign_no_keystore ... ok
test communication::gossip::tests::known_votes_insert_remove ... ok
test keystore::tests::sign_error ... ok
test keystore::tests::verify_works ... ok
test keystore::tests::authority_id_works ... ok
test keystore::tests::sign_works ... ok
test round::tests::vote_threshold ... ok
test justification::tests::should_decode_and_verify_finality_proof ... ok
test keystore::tests::verify_should_work ... ok
test communication::gossip::tests::messages_rebroadcast ... ok
test round::tests::round_tracker ... ok
test round::tests::should_provide_equivocation_proof ... ok
test round::tests::old_rounds_not_accepted ... ok
test round::tests::new_rounds ... ok
test justification::tests::should_verify_with_validator_set ... ok
test round::tests::multiple_rounds ... ok
test keystore::tests::public_keys_works ... ok
test keystore::tests::pair_works ... ok
test round::tests::add_and_conclude_votes ... ok
test worker::tests::extract_authorities_change_digest ... ok
test communication::gossip::tests::should_validate_messages ... ok
test communication::gossip::tests::messages_allowed_and_expired ... ok
test aux_schema::tests::should_load_persistent_sanity_checks ... ok
test worker::tests::should_finalize_correctly ... ok
test worker::tests::should_init_session ... ok
test worker::tests::should_vote_target ... ok
test worker::tests::vote_on_mandatory_block ... ok
test worker::tests::vote_on_min_block_delta ... ok
test worker::tests::vote_on_power_of_two ... ok
test worker::tests::vote_on_target_block ... ok
test tests::should_initialize_voter_at_latest_finalized ... ok
test tests::should_initialize_voter_at_genesis ... ok
test tests::should_initialize_voter_when_last_final_is_session_boundary ... ok
test worker::tests::test_oracle_accepted_interval ... ok
test tests::should_initialize_voter_at_custom_genesis ... ok
test worker::tests::keystore_vs_validator_set ... ok
test worker::tests::should_not_report_bad_old_or_self_equivocations ... ok
test tests::beefy_importing_justifications ... ok
test tests::beefy_finalizing_blocks ... ok
test tests::beefy_finalizing_after_pallet_genesis ... ok
test tests::beefy_reports_equivocations ... ok
test tests::gossipped_finality_proofs ... ok
test tests::lagging_validators ... ok
test tests::correct_beefy_payload ... ok
Aug 30 09:40:04.782 ERROR gossip: Got message from unregistered peer who=12D3KooWLYHA6vesbsEAUF49PbSxBCR5uYP4pNHTD9yZSxiuUnPX protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
Aug 30 09:40:04.784 ERROR gossip: Got message from unregistered peer who=12D3KooWDUFHAfkHLZJMBYhxufBPhiTeoeRHTxfn9HEGFTbfqf6B protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
Aug 30 09:40:04.785 ERROR gossip: Got message from unregistered peer who=12D3KooWSqjASF8rqNMCYqrM6TVWniGGHQP2TSnn8Vqz4uEo7cNW protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
Aug 30 09:40:04.791 ERROR gossip: Got message from unregistered peer who=12D3KooWLYHA6vesbsEAUF49PbSxBCR5uYP4pNHTD9yZSxiuUnPX protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
Aug 30 09:40:04.792 ERROR gossip: Got message from unregistered peer who=12D3KooWDUFHAfkHLZJMBYhxufBPhiTeoeRHTxfn9HEGFTbfqf6B protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
Aug 30 09:40:04.792 ERROR gossip: Got message from unregistered peer who=12D3KooWSqjASF8rqNMCYqrM6TVWniGGHQP2TSnn8Vqz4uEo7cNW protocol=/0000000000000000000000000000000000000000000000000000000000000000/beefy/2
test tests::on_demand_beefy_justification_sync ... ok

test result: ok. 48 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 20.16s
```

</details>

### ETF.js

When I tried to install it locally, I needed to change the [packge.json](https://github.com/ideal-lab5/etf.js/blob/main/examples/package.json#L8) to `"@ideallabs/etf.js": "file:../dist/etf.js",` and dist/etf.js [here](https://github.com/ideal-lab5/etf.js/blob/main/dist/etf.js#L21-L25) and [here](https://github.com/ideal-lab5/etf.js/blob/main/dist/etf.js#L70-L74).

After this, I tested the application, and it worked fine using the node `etf0.idealabs.network`. I would like to run it locally to ensure it is working. Could you explain how to do this?

One test continues to fail sometimes.

<details>

```
  ● DistanceBasedSlotScheduler › should generate a valid schedule

	expect(received).toBeLessThanOrEqual(expected)

	Expected: <= 21
	Received:	22

  	21 | 	schedule.slotIds.forEach(slot => {
  	22 |   	expect(slot).toBeGreaterThanOrEqual(currentSlot + 1);
	> 23 |   	expect(slot).toBeLessThanOrEqual(currentSlot + 1 + distance * 2);
     	|                	^
  	24 |   	expect(slot % 2).toBe(0); // Ensure the slot is even
  	25 | 	});
  	26 |   });

  	at src/etf.test.spec.ts:23:20
      	at Array.forEach (<anonymous>)
  	at Object.<anonymous> (src/etf.test.spec.ts:21:22)

Test Suites: 1 failed, 1 passed, 2 total
Tests:   	1 failed, 6 passed, 7 total
Snapshots:   0 total
Time:    	8.35 s
Ran all test suites.
```

</details>

### CLI

The CLI is working without problems.

<details>

```
user@localhost:~/Documents/cryptex/etf-cli$ ./target/debug/etf-cli encrypt "Hello World" "id1 id2 id3" 2 "hw"
Encryption worked!
Encryption ciphertext: [108, 112, 9, 184, 142, 30, 84, 52, 135, 84, 18, 201, 129, 239, 100, 210, 152, 237, 11, 195, 27, 55, 124, 84, 133, 163, 130, 223]
Encryption nonce: [48, 55, 98, 102, 11, 86, 150, 18, 110, 53, 207, 14, 18]
Encryption capsule: [12, 193, 2, 153, 154, 100, 126, 157, 74, 26, 247, 28, 26, 202, 206, 105, 202, 232, 253, 98, 201, 169, 8, 28, 159, 239, 118, 78, 70, 135, 18, 98, 71, 205, 86, 6, 8, 171, 97, 194, 94, 156, 220, 172, 190, 58, 231, 212, 30, 191, 71, 1, 114, 106, 137, 159, 140, 29, 71, 252, 18, 93, 34, 163, 165, 179, 9, 69, 167, 28, 134, 177, 150, 227, 52, 22, 41, 60, 31, 47, 194, 91, 50, 122, 28, 152, 74, 114, 63, 126, 48, 146, 121, 111, 236, 114, 114, 33, 237, 32, 0, 0, 0, 0, 0, 0, 0, 131, 114, 151, 219, 91, 166, 161, 173, 55, 120, 157, 244, 45, 156, 179, 40, 11, 8, 23, 95, 3, 151, 108, 145, 96, 31, 217, 40, 156, 255, 242, 244, 32, 0, 0, 0, 0, 0, 0, 0, 119, 12, 186, 32, 213, 135, 37, 160, 213, 40, 33, 212, 197, 130, 0, 181, 136, 174, 76, 229, 153, 43, 180, 248, 104, 197, 72, 100, 79, 143, 62, 245, 193, 2, 175, 112, 211, 128, 17, 230, 58, 205, 153, 168, 15, 145, 64, 22, 58, 182, 187, 254, 215, 17, 230, 255, 80, 178, 68, 108, 80, 150, 76, 172, 29, 177, 134, 43, 131, 99, 134, 160, 44, 149, 20, 117, 138, 18, 207, 161, 125, 37, 25, 157, 62, 77, 99, 227, 8, 191, 223, 40, 12, 75, 213, 212, 211, 87, 25, 214, 22, 147, 220, 234, 56, 38, 112, 126, 5, 139, 146, 197, 20, 0, 112, 12, 207, 44, 167, 150, 48, 33, 4, 172, 225, 205, 114, 6, 152, 183, 32, 0, 0, 0, 0, 0, 0, 0, 155, 41, 117, 225, 199, 158, 106, 169, 204, 69, 84, 154, 52, 8, 167, 152, 104, 13, 207, 6, 41, 209, 92, 163, 28, 1, 47, 166, 181, 168, 108, 26, 32, 0, 0, 0, 0, 0, 0, 0, 39, 198, 215, 175, 22, 167, 160, 201, 103, 236, 217, 245, 60, 47, 150, 225, 102, 126, 81, 5, 59, 254, 49, 220, 179, 106, 79, 90, 4, 118, 54, 68, 193, 2, 175, 66, 38, 36, 9, 92, 99, 25, 25, 233, 96, 204, 87, 255, 149, 233, 246, 131, 3, 58, 251, 1, 68, 210, 165, 192, 221, 108, 10, 86, 213, 132, 32, 14, 119, 101, 208, 52, 144, 83, 30, 115, 141, 239, 249, 0, 238, 173, 18, 4, 139, 112, 162, 220, 126, 82, 33, 146, 187, 191, 137, 159, 133, 5, 2, 156, 188, 45, 172, 89, 73, 47, 201, 186, 213, 11, 228, 124, 10, 102, 204, 186, 220, 91, 91, 203, 79, 88, 119, 50, 52, 131, 211, 215, 63, 138, 32, 0, 0, 0, 0, 0, 0, 0, 30, 42, 175, 245, 225, 82, 35, 107, 189, 213, 114, 42, 120, 203, 137, 140, 103, 233, 124, 43, 32, 82, 230, 79, 130, 146, 54, 93, 213, 188, 185, 252, 32, 0, 0, 0, 0, 0, 0, 0, 242, 154, 209, 235, 254, 155, 209, 30, 55, 72, 222, 191, 147, 233, 202, 180, 72, 231, 19, 157, 142, 53, 71, 222, 76, 21, 58, 106, 53, 73, 20, 73]
Encryption secrets: [[129, 123, 117, 88, 199, 203, 214, 217, 198, 48, 223, 171, 58, 93, 124, 66, 34, 137, 126, 98, 30, 223, 8, 193, 27, 140, 218, 97, 77, 254, 146, 7, 182, 111, 12, 243, 104, 143, 50, 76, 91, 31, 154, 7, 237, 64, 77, 38], [178, 53, 231, 253, 18, 110, 85, 138, 73, 238, 41, 97, 179, 100, 86, 44, 102, 43, 67, 245, 201, 165, 214, 201, 11, 226, 243, 246, 62, 211, 50, 203, 25, 171, 90, 229, 118, 197, 69, 230, 29, 71, 178, 148, 16, 241, 58, 23], [142, 128, 201, 113, 4, 220, 182, 86, 46, 130, 185, 60, 185, 20, 102, 243, 213, 220, 149, 94, 184, 26, 193, 91, 54, 185, 175, 240, 254, 133, 196, 223, 29, 118, 146, 62, 61, 184, 245, 126, 4, 123, 219, 28, 2, 46, 13, 139]]
Writing details to file...
File created: hw.etf


user@localhost:~/Documents/cryptex/etf-cli$ ./target/debug/etf-cli decrypt "hw.etf"
Attempting to decrypt: [112, 9, 184, 142, 30, 84, 52, 135, 84, 18, 201, 129, 239, 100, 210, 152, 237, 11, 195, 27, 55, 124, 84, 133, 163, 130, 223]
Result: Hello World

```

</details>

## Evaluation V1

### Docker

Is the docker only for the substrate part? Docker is working.

### Substrate

I tried to build and test the substrate. The build worked fine. But for the test, I received these errors.

<details>

```
error[E0063]: missing fields `initial_ibe_commitment` and `initial_ibe_pp` in initializer of `pallet::GenesisConfig`
  --> bin/node-template/pallets/etf/src/mock.rs:70:10
   |
70 |         &pallet_etf::GenesisConfig {
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^ missing `initial_ibe_commitment` and `initial_ibe_pp`

error[E0599]: no method named `len` found for tuple `(std::vec::Vec<u8>, std::vec::Vec<u8>, std::vec::Vec<u8>)` in the current scope
  --> bin/node-template/pallets/etf/src/tests.rs:17:28
   |
17 |         assert!(ibe_params.len() == 48);
   |                            ^^^ method not found in `(Vec<u8>, Vec<u8>, Vec<u8>)`

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:37:4
    |
37  |               Etf::update_ibe_params(
    |  _____________^^^^^^^^^^^^^^^^^^^^^^-
38  | |                 RuntimeOrigin::root(),
39  | |                 h_bytes,
40  | |             )
    | |_____________- two arguments of type `std::vec::Vec<u8>` and `std::vec::Vec<u8>` are missing
    |
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
    |
103 |         pub fn update_ibe_params(
    |                ^^^^^^^^^^^^^^^^^
104 |             origin: OriginFor<T>,
    |             --------------------
105 |             g: Vec<u8>,
    |             ----------
106 |             ibe_pp_bytes: Vec<u8>,
    |             ---------------------
107 |             ibe_commitment_bytes: Vec<u8>,
    |             -----------------------------
help: provide the arguments
    |
37  |             Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* std::vec::Vec<u8> */, /* std::vec::Vec<u8> */)
    |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:60:4
    |
60  |               Etf::update_ibe_params(
    |  _____________^^^^^^^^^^^^^^^^^^^^^^-
61  | |                 RuntimeOrigin::root(),
62  | |                 h_bytes,
63  | |             ),
    | |_____________- two arguments of type `std::vec::Vec<u8>` and `std::vec::Vec<u8>` are missing
    |
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
    |
103 |         pub fn update_ibe_params(
    |                ^^^^^^^^^^^^^^^^^
104 |             origin: OriginFor<T>,
    |             --------------------
105 |             g: Vec<u8>,
    |             ----------
106 |             ibe_pp_bytes: Vec<u8>,
    |             ---------------------
107 |             ibe_commitment_bytes: Vec<u8>,
    |             -----------------------------
help: provide the arguments
    |
60  |             Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* std::vec::Vec<u8> */, /* std::vec::Vec<u8> */),
    |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some errors have detailed explanations: E0061, E0063, E0599.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib test) due to 4 previous errors
warning: build failed, waiting for other jobs to finish...
```

</details>

I tried to build and test the benchmark, but I received these errors

Build

<details>

```
error[E0061]: this function takes 3 arguments but 1 argument was supplied
   --> bin/node-template/pallets/etf/src/benchmarking.rs:10:1
	|
10  | #[benchmarks]
	| ^^^^^^^^^^^^^ two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
	= note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
help: provide the arguments
	|
10  | #[benchmarks](bytes.clone(), /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|          	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

error[E0308]: mismatched types
  --> bin/node-template/pallets/etf/src/benchmarking.rs:19:3
   |
19 |     	assert_eq!(IBEParams::<T>::get(), bytes);
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |     	|
   |     	expected `(Vec<u8>, Vec<u8>, Vec<u8>)`, found `Vec<u8>`
   |     	expected because this is `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
   |
   = note: expected tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
         	found struct `frame_benchmarking::Vec<u8>`
   = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)

Some errors have detailed explanations: E0061, E0308.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib) due to 3 previous errors
warning: build failed, waiting for other jobs to finish...
	Building [=======================> ] 965/989: wasm-opt-sys(build), librocksdb-sys(build), sc-network	
```

</details>

Test

<details>

```
user@localhost:~/Documents/cryptex/substrate/bin/node-template/node/src$  cargo test --package pallet-etf --features runtime-benchmarks
warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:300:60
	|
300 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed
	= note: `#[warn(noop_method_call)]` on by default

warning: call to `.borrow()` on a reference in this situation does nothing
   --> frame/support/src/storage/generator/map.rs:317:60
	|
317 |             	Some(ref val) => unhashed::put(final_key.as_ref(), &val.borrow()),
	|                                                                    	^^^^^^^^^ help: remove this redundant call
	|
	= note: the type `V` does not implement `Borrow`, so calling `borrow` on `&V` copies the reference, which does not do anything and can be removed

warning: `frame-support` (lib) generated 2 warnings (run `cargo fix --lib -p frame-support` to apply 2 suggestions)
   Compiling pallet-etf v4.0.0-dev (/home/user/Documents/cryptex/substrate/bin/node-template/pallets/etf)
error[E0061]: this function takes 3 arguments but 1 argument was supplied
   --> bin/node-template/pallets/etf/src/benchmarking.rs:10:1
	|
10  | #[benchmarks]
	| ^^^^^^^^^^^^^ two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
	= note: this error originates in the attribute macro `benchmarks` (in Nightly builds, run with -Z macro-backtrace for more info)
help: provide the arguments
	|
10  | #[benchmarks](bytes.clone(), /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|          	+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

error[E0308]: mismatched types
  --> bin/node-template/pallets/etf/src/benchmarking.rs:19:37
   |
19 |     	assert_eq!(IBEParams::<T>::get(), bytes);
   |                                       	^^^^^ expected `(Vec<u8>, Vec<u8>, Vec<u8>)`, found `Vec<u8>`
   |
   = note: expected tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)`
         	found struct `frame_benchmarking::Vec<u8>`

Some errors have detailed explanations: E0061, E0308.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `pallet-etf` (lib) due to 4 previous errors
warning: build failed, waiting for other jobs to finish...
error[E0063]: missing fields `initial_ibe_commitment` and `initial_ibe_pp` in initializer of `pallet::GenesisConfig`
  --> bin/node-template/pallets/etf/src/mock.rs:70:10
   |
70 |     	&pallet_etf::GenesisConfig {
   |      	^^^^^^^^^^^^^^^^^^^^^^^^^ missing `initial_ibe_commitment` and `initial_ibe_pp`

error[E0599]: no method named `len` found for tuple `(frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>, frame_benchmarking::Vec<u8>)` in the current scope
  --> bin/node-template/pallets/etf/src/tests.rs:17:28
   |
17 |     	assert!(ibe_params.len() == 48);
   |                        	^^^ method not found in `(Vec<u8>, Vec<u8>, Vec<u8>)`

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:37:4
	|
37  |           	Etf::update_ibe_params(
	|  _____________^^^^^^^^^^^^^^^^^^^^^^-
38  | |             	RuntimeOrigin::root(),
39  | |             	h_bytes,
40  | |         	)
	| |_____________- two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
	|         	--------------------
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
help: provide the arguments
	|
37  |         	Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */)
	|                               	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 4 arguments but 2 arguments were supplied
   --> bin/node-template/pallets/etf/src/tests.rs:60:4
	|
60  |           	Etf::update_ibe_params(
	|  _____________^^^^^^^^^^^^^^^^^^^^^^-
61  | |             	RuntimeOrigin::root(),
62  | |             	h_bytes,
63  | |         	),
	| |_____________- two arguments of type `frame_benchmarking::Vec<u8>` and `frame_benchmarking::Vec<u8>` are missing
	|
note: associated function defined here
   --> bin/node-template/pallets/etf/src/lib.rs:103:10
	|
103 |     	pub fn update_ibe_params(
	|            	^^^^^^^^^^^^^^^^^
104 |         	origin: OriginFor<T>,
	|         	--------------------
105 |         	g: Vec<u8>,
	|         	----------
106 |         	ibe_pp_bytes: Vec<u8>,
	|         	---------------------
107 |         	ibe_commitment_bytes: Vec<u8>,
	|         	-----------------------------
help: provide the arguments
	|
60  |         	Etf::update_ibe_params(RuntimeOrigin::root(), h_bytes, /* frame_benchmarking::Vec<u8> */, /* frame_benchmarking::Vec<u8> */),
	|                               	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some errors have detailed explanations: E0061, E0063, E0308, E0599.
error: could not compile `pallet-etf` (lib test) due to 8 previous errors
```

</details>

### ETF-SDK

I `ran cargo tarpaulin` returning a good coverage.

<details>

```
Aug 29 10:45:43.544  INFO cargo_tarpaulin::process_handling::linux: Launching test
Aug 29 10:45:43.558  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/cryptex/etf-sdk/target/debug/deps/etf_sdk-d93db5e7e5c957ae

running 3 tests
test api::tests::api_decryption_works ... ok
test api::tests::api_encryption_works ... ok
test api::tests::default_api_can_verify ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

Aug 29 10:45:44.102  INFO cargo_tarpaulin::process_handling::linux: Launching test
Aug 29 10:45:44.102  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/cryptex/etf-sdk/target/debug/deps/crypto-f8abd65c22d96197

running 20 tests
test client::client::test::client_decrypt_fails_with_bad_encoding_p ... ok
test client::client::test::client_encrypt_fails_with_bad_encoding ... ok
test encryption::encryption::test::aes_encrypt_decrypt_fails_with_bad_key ... ok
test encryption::encryption::test::aes_encrypt_decrypt_works ... ok
test encryption::encryption::test::aes_encrypt_decrypt_fails_with_bad_nonce ... ok
test client::client::test::client_decrypt_fails_with_bad_encoded_capsule_ct ... ok
test encryption::encryption::test::secrets_interpolation ... ok
test proofs::dleq::tests::dleq_fails_with_wrong_extras ... ok
test proofs::dleq::tests::dleq_prepare_and_verify_works ... ok
test proofs::dleq::tests::dleq_prepare_and_verify_fails_with_wrong_generator_point ... ok
test proofs::dleq::tests::dleq_proof_is_serializable ... ok
test utils::test::utils_can_calc_sha256 ... ok
test proofs::verifier::test::can_verify_proof_is_valid ... ok
test proofs::verifier::test::can_verify_proof_is_not_valid ... ok
test ibe::fullident::test::can_encrypt_and_decrypt ... ok
test client::client::test::client_can_encrypt_decrypt_with_single_key ... ok
test client::client::test::client_decrypt_fails_with_bad_nonce ... ok
test client::client::test::client_decrypt_fails_with_bad_slot_secrets ... ok
test client::client::test::client_decrypt_fails_with_bad_ciphertext ... ok
test client::client::test::client_can_encrypt_decrypt_with_many_keys ... ok

test result: ok. 20 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.30s

Aug 29 10:45:44.867  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| api/src/api.rs: 2/10
|| api/src/lib.rs: 0/14
|| crypto/src/client/client.rs: 27/35
|| crypto/src/encryption/encryption.rs: 30/37
|| crypto/src/ibe/fullident.rs: 25/26
|| crypto/src/proofs/dleq.rs: 27/31
|| crypto/src/proofs/verifier.rs: 3/3
|| crypto/src/utils.rs: 19/24
||
73.89% coverage, 133/180 lines covered
```

</details>

I ran `wasm-pack test --node`, and the tests passed, but I received some warnings, for example:

<details>

```
warning: unused variable: `ciphertext`
   --> api/src/api.rs:169:42
	|
169 |     	fn decrypt(ibe_pp: G2Projective, ciphertext: IbeCiphertext, sk: G1Projective) -> Vec<u8> {
	|                                      	^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_ciphertext`

warning: unused variable: `sk`
   --> api/src/api.rs:169:69
	|
169 |     	fn decrypt(ibe_pp: G2Projective, ciphertext: IbeCiphertext, sk: G1Projective) -> Vec<u8> {
	|                                                                 	^^ help: if this is intentional, prefix it with an underscore: `_sk`

warning: `etf-sdk` (lib test) generated 8 warnings (run `cargo fix --lib -p etf-sdk --tests` to apply 8 suggestions)
	Finished test [optimized + debuginfo] target(s) in 0.04s
 	Running unittests src/lib.rs (/home/user/Documents/cryptex/etf-sdk/target/wasm32-unknown-unknown/debug/deps/etf_sdk-4bbaeadd397b62f9.wasm)
Set timeout to 20 seconds...
running 2 tests                              	 

test etf_sdk::test::wrapper_can_encrypt ... ok
test etf_sdk::test::wrapper_setup_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored

```

</details>

I could deploy this part but I couldn't figure out how to run it. Could you explain how to run it?

### ETF.JS

I ran `npm run test`, and sometimes this test fails, and sometimes the test passes.

<details>

```
user@localhost:~/Documents/cryptex/etf.js$ npm run test

> @ideallabs/etf.js@0.0.6-dev test
> jest

 PASS  examples/src/App.test.js
 FAIL  src/etf.test.spec.ts
  ● Console

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

	console.log
  	Mock ScProvider connected

  	at ScProvider.<anonymous> (src/__mocks__/@polkadot/rpc-provider.ts:10:15)

	console.log
  	provider connected

  	at Etf.<anonymous> (src/etf.ts:97:21)

	console.log
  	api is ready

  	at Etf.<anonymous> (src/etf.ts:104:17)

	console.log
  	wasm initialized successfully

  	at Etf.<anonymous> (src/etf.ts:122:17)

	console.log
  	etf api initialized

  	at Etf.<anonymous> (src/etf.ts:125:17)

	console.log
  	version

  	at Etf.<anonymous> (src/etf.ts:128:17)

  ● DistanceBasedSlotScheduler › should generate a valid schedule

	expect(received).toBeGreaterThanOrEqual(expected)

	Expected: >= 11
	Received:	10

  	20 | 	// Check if the generated slots are within the expected range
  	21 | 	schedule.slotIds.forEach(slot => {
	> 22 |   	expect(slot).toBeGreaterThanOrEqual(currentSlot + 1);
     	|                	^
  	23 |   	expect(slot).toBeLessThanOrEqual(currentSlot + 1 + distance * 2);
  	24 |   	expect(slot % 2).toBe(0); // Ensure the slot is even
  	25 | 	});

  	at src/etf.test.spec.ts:22:20
      	at Array.forEach (<anonymous>)
  	at Object.<anonymous> (src/etf.test.spec.ts:21:22)

Test Suites: 1 failed, 1 passed, 2 total
Tests:   	1 failed, 6 passed, 7 total
Snapshots:   0 total
Time:    	2.613 s, estimated 3 s
Ran all test suites.
```

</details>

I could compile with some warnings. But I couldn't use it because I didn't run the SDK.

<details>

```
LOG from webpack.FileSystemInfo
<w> Managed item /home/user/Documents/cryptex/etf.js/examples/node_modules/@ideallabs/etf.js isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 14 hidden lines

WARNING in ./node_modules/@chainsafe/is-ip/lib/is-ip.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/is-ip.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/is-ip.ts'

WARNING in ./node_modules/@chainsafe/is-ip/lib/parse.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parse.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parse.ts'

WARNING in ./node_modules/@chainsafe/is-ip/lib/parser.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parser.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/@chainsafe/is-ip/src/parser.ts'

WARNING in ./node_modules/dag-jose/lib/encryption.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/encryption.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/encryption.ts'

WARNING in ./node_modules/dag-jose/lib/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/index.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/index.ts'

WARNING in ./node_modules/dag-jose/lib/signing.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/signing.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/signing.ts'

WARNING in ./node_modules/dag-jose/lib/utils.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/utils.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/examples/node_modules/dag-jose/src/utils.ts'

WARNING in ../node_modules/@substrate/connect-extension-protocol/dist/mjs/index.js
Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
Failed to parse source map from '/home/user/Documents/cryptex/etf.js/node_modules/@substrate/connect-extension-protocol/src/index.ts' file: Error: ENOENT: no such file or directory, open '/home/user/Documents/cryptex/etf.js/node_modules/@substrate/connect-extension-protocol/src/index.ts'

webpack compiled with 8 warnings
```

</details>

### 
