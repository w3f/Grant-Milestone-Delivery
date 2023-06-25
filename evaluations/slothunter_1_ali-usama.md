# Evaluation

- **Status:** Accepted
- **Application Document:** [slothunter](https://github.com/w3f/Grants-Program/blob/master/applications/slothunter.md) 
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable                         | Accepted               | Link                                                                                                                                           | Evaluation Notes                                           |
|--------|-------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| 0a.    | Licence                             | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/hack-ink/slothunter/blob/main/LICENSE)                                                                              | Correct Licence                                            |
| 0b.    | Documentation                       | <ul><li>[x] </li></ul> | [Guide](https://github.com/hack-ink/slothunter/blob/main/test/guide.md),<br/>[ReadMe](https://github.com/hack-ink/slothunter/tree/main#readme) | Well-structured docs                                       |
| 0c.    | Testing guide                       | <ul><li>[x] </li></ul> | [Test guide](https://github.com/hack-ink/slothunter/blob/main/test/guide.md#test-guide)                                                        | All test cases passing successfully. Outputs are attached. |
| 1.     | Auction winner calculator           | <ul><li>[x] </li></ul> | [result](https://github.com/hack-ink/slothunter/blob/main/src/primitive.rs#L104)                                                               | Working as per application                                 |
| 2.     | Notification component              | <ul><li>[x] </li></ul> | [notifications](https://github.com/hack-ink/slothunter/blob/main/src/hunter.rs#L162)                                                           | Working as per application                                 |
| 3.     | Auto bidding/contributing component | <ul><li>[x] </li></ul> |                                                                                                                                                | Working as per application                                 |
| 4.     | Slothunter configuration component  | <ul><li>[x] </li></ul> | [config file](https://github.com/hack-ink/slothunter/blob/main/test/integration/rococo.toml)                                                   | Working as per application                                 |
| 5.     | Releases                            | <ul><li>[x] </li></ul> | [build](https://github.com/hack-ink/slothunter/blob/main/build.rs)                                                                             | Working as per application                                 |


## General Notes

The delivery repo is well-structured and well-documented. The test cases most of the edge-cases and are passing successfully, without showing any issues with the docker files as well.

The [Advance testing](https://github.com/hack-ink/slothunter/blob/main/test/guide.md#advance-test), mentioned in the testing guide, was also performed and all the features mentioned in the delivery found to be working great. 
### `cargo test`
```
running 10 tests
test hunter::util::blocks2time_should_work ... ok
test hunter::graphql::query_string_should_work ... ok
test hunter::util::crowdloan_id_of_should_work ... ok
test hunter::util::combinations_should_work ... ok
test hunter::util::position_in_ranges_should_work ... ok
test hunter::util::ranges_are_intersecting_should_work ... ok
test hunter::util::winning_offset_of_should_work ... ok
test primitive::winning_result_should_work ... ok
test primitive::minimum_bid_to_win_should_work ... ok
test hunter::util::check_uri_should_work ... ok

test result: ok. 10 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
```

### `cargo test --features node-test`
```
running 11 tests
test hunter::util::blocks2time_should_work ... ok
test hunter::graphql::query_string_should_work ... ok
test hunter::util::combinations_should_work ... ok
test hunter::util::crowdloan_id_of_should_work ... ok
test hunter::util::position_in_ranges_should_work ... ok
test hunter::util::ranges_are_intersecting_should_work ... ok
test hunter::util::winning_offset_of_should_work ... ok
test primitive::winning_result_should_work ... ok
test primitive::minimum_bid_to_win_should_work ... ok
test hunter::util::check_uri_should_work ... ok
test hunter::tx::tx_should_work ... ok

test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 18.82s

```