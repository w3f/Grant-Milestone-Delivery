# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| Unlicense  |
| 0b. | Tutorial | <ul><li>[x] </li></ul>| Tutorial is provided in the [`/ebics-demo/DEMO.md`](https://github.com/element36-io/ocw-ebics/blob/main/ebics-demo/DEMO.md) file. | 
| 1. | Buy me a coffee dApp | <ul><li>[x] </li></ul>| A decentralized [application](https://github.com/element36-io/ocw-ebics/tree/main/ebics-demo) is provided, which allows users to buy someone a coffee or simply donate to support their cause. Users can donate by either sending stablecoins or fiat to the recipient's on-chain account or bank account (IBAN). The recipient can then withdraw the funds to their bank account or send them to someone else. | 
| 2. | Docker-Compose: node & Dapp | <ul><li>[x] </li></ul>| Instead of `docker-compose` a [Makefile](https://github.com/element36-io/ocw-ebics/blob/main/Makefile) is provided with the commands that launch the chain and the demo app |

## Evaluation V2

### Manual Testing

I tested again, and the donations from Alice and Bob have increased the total donations. In this way, the application is working fine.

I found a small problem in the application that could be fixed. It's still possible to set a negative value to total donations. This negative value occurs because the substrate node has an initial balance for Jack, and the application doesn't check this balance at the start considering it as zero. In this way, it is possible to withdraw more than the balance that is shown in the frontend. It would be nice to fix this problem.

The application uses an external EBICS service which was validated in Milestone 1. So no problem to use this external service for the test.

## Evaluation V1

### Automated Testing

All Tests passed:

```
user@localhost:~/Documents/fiat/ocw-ebics$ make run-tests
Running tests...
	Finished test [unoptimized + debuginfo] target(s) in 1.00s
 	Running unittests src/lib.rs (target/debug/deps/fiat_ramps-1e0e17ae0a3ea371)

running 12 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::should_fail_to_update_api_url_non_sudo ... ok
test tests::process_statements_is_permissioned ... ok
test tests::test_iban_mapping ... ok
test tests::should_make_http_call_and_parse ... ok
test tests::test_burn_request ... ok
test tests::test_process_invalid_transactions ... ok
test tests::test_process_empty_statement ... ok
test tests::test_process_incoming_transactions ... ok
test tests::test_process_outgoing_transactions ... ok
test tests::test_process_multiple_statements_outgoing ... ok
test tests::test_process_multiple_statements ... ok

test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.46s


running 1 test
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

I ran `cargo tarpaulin` to check the coverage of the tests.

```
May 10 08:11:57.540  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/fiat-ramps/src/crypto.rs: 0/1
|| pallets/fiat-ramps/src/impls.rs: 32/49
|| pallets/fiat-ramps/src/lib.rs: 123/345
|| pallets/fiat-ramps/src/utils.rs: 39/47
|| runtime/src/lib.rs: 0/19
||
41.45% coverage, 194/468 lines covered
```

The coverage of the tests could be improved, but it isn't mandatory.

### Manual Testing

No problems to start the application, but when Alice and Bob donate to Jack, the total donations aren't increasing, but when Jack withdraws, the total donations decrease, becoming negative.

This print show after the Alice Donate.

![Screenshot 2023-05-10 at 12-24-06 Substrate Front End Template](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/6fb6f160-43b8-454a-b696-63e39a0ded91)

This print show after the Jack withdraw.

![Screenshot 2023-05-10 at 12-25-06 Substrate Front End Template](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/e24da55f-03cf-4e78-939f-63f7c7271973)


Could you explain to me if Jack could send the donations he received to someone? In the [specification of deliverable 1](https://github.com/w3f/Grant-Milestone-Delivery/pull/854/files#diff-630504d0a4dab4953c242376522f26d439de06d2c597ad4eba5637a1e136ddef) says "The recipient can then withdraw the funds to their bank account or send them to someone else.". Is it correct? Because the guide doesn't cover this feature, I checked the application and couldn't find this feature as well.

### Code Quality

`cargo clippy` returned nothing. 

```
user@localhost:~/Documents/fiat/ocw-ebics$ cargo clippy
	Finished dev [unoptimized + debuginfo] target(s) in 0.49s
```
