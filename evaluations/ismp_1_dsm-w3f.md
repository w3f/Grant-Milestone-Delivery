# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ismp.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/LICENSE](https://github.com/polytope-labs/ismp-rs/blob/main/LICENSE)| | 
| 0b.  | Documentation |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/README.md](https://github.com/polytope-labs/ismp-rs/blob/main/README.md)| Would be nice to have instructions to install without docker  |
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/tree/main/ismp-testsuite](https://github.com/polytope-labs/ismp-rs/tree/main/ismp-testsuite)| Low testing coverage |
| 0d. | Docker |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs#run-test-in-docker](https://github.com/polytope-labs/ismp-rs#run-test-in-docker)| Not fully evaluated yet |
| 0e. | Article |<ul><li>[ ] </li></ul>| TBA | Need to be delivered |
| 0f. | ISMP Specification |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp](https://github.com/polytope-labs/ismp)| Not fully evaluated yet |
| 1 | `ismp-rs` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs](https://github.com/polytope-labs/ismp-rs)| Not fully evaluated yet |
| 1a. | `ISMPHOST` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/host.rs#L37](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/host.rs#L37)| Not fully evaluated yet |
| 1b. | `ISMPRouter` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/router.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/router.rs)| Not fully evaluated yet |
| 1c. | `ISMPModule` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/module.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/module.rs)| Not fully evaluated yet |
| 1d. | `ConsensusClient` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/consensus.rs#L91](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/consensus.rs#L91)| Not fully evaluated yet |
| | Request/Response proof verification |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/consensus.rs#L123](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/consensus.rs#L123)| Not fully evaluated yet |
| | Request Timeout verification |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/messaging.rs#L160](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/messaging.rs#L160)| Not fully evaluated yet |
| 1e. | Handlers |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers.rs)| Not fully evaluated yet |
| | `CreateConsensusClient` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/handlers/consensus.rs#L91](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/handlers/consensus.rs#L91)| Not fully evaluated yet |
| | `ConsensusMessage` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/handlers/consensus.rs#L28](https://github.com/polytope-labs/ismp-rs/blob/1932c2c45f7c6ff104dd27b87aa06769739697fb/ismp/src/handlers/consensus.rs#L28)| Not fully evaluated yet |
| | `RequestMessage` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/request.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/request.rs)| Not fully evaluated yet |
| | `ResponseMessage` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/response.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/response.rs)| Not fully evaluated yet |
| | `TimeoutMessage` |<ul><li>[ ] </li></ul>|[https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/timeout.rs](https://github.com/polytope-labs/ismp-rs/blob/main/ismp/src/handlers/timeout.rs)| Not fully evaluated yet |

## Evaluation V1

### Documentation

Please create a new branch for the evaluation of the milestone to prevent new commits during the evaluation.

It would be nice if the documentation have the prerequisites and instructions to run without docker.

### Testing

All tests passed, using docker or without.

```
user@localhost:~/Documents/ismp/ismp-rs$ cargo test --release --manifest-path=./ismp-testsuite/Cargo.toml
	Finished release [optimized] target(s) in 0.13s
 	Running unittests src/lib.rs (target/release/deps/ismp_testsuite-1a79e0ff70273bfb)

running 5 tests
test tests::dispatcher_should_write_receipts_for_outgoing_requests_and_responses ... ok
test tests::should_reject_expired_check_clients ... ok
test tests::should_process_timeouts_correctly ... ok
test tests::should_reject_updates_within_challenge_period ... ok
test tests::should_reject_messages_for_frozen_state_machines ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests ismp-testsuite

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

I ran `cargo tarpaulin` to check the test coverage.

```
Jun 06 08:23:55.976  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| ismp/src/consensus.rs: 0/2
|| ismp/src/handlers/consensus.rs: 6/51
|| ismp/src/handlers/request.rs: 2/17
|| ismp/src/handlers/response.rs: 2/39
|| ismp/src/handlers/timeout.rs: 18/51
|| ismp/src/handlers.rs: 16/23
|| ismp/src/host.rs: 6/25
|| ismp/src/messaging.rs: 0/16
|| ismp/src/router.rs: 2/31
|| ismp/src/util.rs: 12/49
|| ismp-testsuite/src/lib.rs: 83/118
|| ismp-testsuite/src/mocks.rs: 68/128
||
39.09% coverage, 215/550 lines covered
```

The tests coverage isn't good and can be improved. 

### Article

The article was not provided. 

### Code Quality

I ran `cargo clippy` and received no warnings.

```
user@localhost:~/Documents/ismp/ismp-rs$ cargo clippy
	Finished dev [unoptimized + debuginfo] target(s) in 0.13s
```
