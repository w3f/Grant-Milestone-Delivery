# Evaluation


- **Status:** in progress
- **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ----- | ----------- | ------ | ------------- | ------ |
| 0a. | License | <ul><li>[x] </li></ul> |  [Link to License](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[] </li></ul> | [Link to Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) | |
| 0c. | Testing Guide | <ul><li>[] </li></ul> | See [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md)| |
| 0d. | Docker | <ul><li>[] </li></ul> | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags), see main README how to use | |
| 1. | Integrate Receipt | <ul><li>[] </li></ul> |  [Repo](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/lib.rs#L1041)| |
| 2. | fiat-ramp pallet | <ul><li>[] </li></ul> |  [Pallet](https://github.com/element36-io/ocw-ebics/tree/main/pallets/fiat-ramps) | |
| 3. | Unit Tests | <ul><li>[] </li></ul> | [Unit Tests](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/tests.rs)| |

## General Notes



## unit tests
<details>
<summary> unit test output </summary>

    running 15 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::should_fail_to_update_api_url_non_sudo ... ok
    test tests::set_risc0_image_id ... ok
    test tests::process_statements_is_permissioned ... ok
    May 21 15:22:28.274 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    May 21 15:22:28.274 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    May 21 15:22:28.274 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    test tests::test_iban_mapping ... ok
    test utils::test_unpeg_request ... ok
    test tests::should_make_http_call_and_parse ... ok
    May 21 15:22:28.331 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    May 21 15:22:28.331 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    May 21 15:22:28.331 ERROR runtime::timestamp: `pallet_timestamp::UnixTime::now` is called at genesis, invalid value returned: 0    
    test tests::test_burn_request ... ok
    test tests::test_queue_empty_statement ... ok
    test tests::test_queue_invalid_transactions ... ok
    test tests::test_queue_incoming_transactions ... ok
    test tests::test_queue_outgoing_transactions ... ok
    test tests::test_queue_multiple_statements_outgoing ... ok
    test tests::test_queue_multiple_statements ... ok
    test tests::test_verify_queued_statements_works ... ok

    test result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 4.42s 

</details>