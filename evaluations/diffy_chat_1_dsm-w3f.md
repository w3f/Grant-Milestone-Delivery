# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Diffy_chat.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License | <ul><li>[ ] </li></ul>| [LICENSE](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/LICENSE) | DOTRTC Library license is missing |
| 0b.| Documentation |<ul><li>[ ] </li></ul>| [Readme.md](https://github.com/Belsoft-rs/diffychat-pallet#readme) | Not fully evaluated yet. Need instructions to deploy locally. |
| 0c.| Testing Guide |<ul><li>[ ] </li></ul>| [DOTRTC usage](https://github.com/Belsoft-rs/diffychat-dotrtc#usage); [Substrate pallet](https://github.com/Belsoft-rs/diffychat-pallet#getting-started) | Not fully evaluated yet. |
| 1.| Diffy chat pallet |<ul><li>[ ] </li></ul>| [See here](https://github.com/Belsoft-rs/diffychat-pallet) |  Not fully evaluated yet. | 
| 2.| DOTRTC library |<ul><li>[ ] </li></ul>| [See here](https://github.com/Belsoft-rs/diffychat-dotrtc) |  Not fully evaluated yet. | 
| 3.| HTML test page |<ul><li>[ ] </li></ul>| [See here](https://belsoft-rs.github.io/diffychat/index.html) |  Not fully evaluated yet. | 

## Evaluation V1

### License and Documentation

The documentation misses instructions to run the unit tests, instructions to start the chat locally, and the License for DOTRTC Library.

### Unit Test

I ran `cargo test` for running the tests and `cargo tarpaulin` to check the coverage of the tests.

All tests passed:
```
running 6 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_register ... ok
test tests::test_register_nickname_is_already_registered ... ok
test tests::test_register_account_id_is_already_registered ... ok
test tests::answer_chat_with_static_values ... ok
test tests::offer_chat_with_static_values ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

Apr 18 08:32:46.263  INFO cargo_tarpaulin::process_handling::linux: Launching test
Apr 18 08:32:46.263  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/Diffy_messenger/diffychat-pallet/target/debug/deps/node_template_runtime-c62c772ee13c4c48

running 2 tests
test tests::check_whitelist ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
```

Tarpaulin returned a low coverage:

```
Apr 18 08:32:51.827  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/template/src/lib.rs: 10/21
|| runtime/src/lib.rs: 2/5
|| 
36.36% coverage, 12/33 lines covered
```

### Manual Testing

I tried to use the chat using the external link that you provided. In chrome the chat doesn't work, and I couldn't login using Chrome. Using Firefox, I could login and connect, but Bob didn't receive the messages from Alice. Alice received messages from Bob.


I tried to search for the application of this chat and found [this repository](https://github.com/Belsoft-rs/belsoft-rs.github.io) and [this demo in DOTRTC](https://github.com/Belsoft-rs/diffychat-dotrtc/tree/main/demo) which only have one commit on git, I tested using firefox and got the same results. Could you explain me if this chat is using the substrate?
