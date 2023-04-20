# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License |<ul><li>[x] </li></ul>| [LICENSE](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/LICENSE) | Apache 2.0 | 
| 0b.| Documentation | <ul><li>[ ] </li></ul>| [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md) | Not fully evaluated yet | 
| 0c.| Testing and Testing Guide | <ul><li>[ ] </li></ul>| [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md#tutorial) | Need a manual testing guide | 
| 0d.| Docker | <ul><li>[x] </li></ul>| [README.md](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/README.md#docker) |  | 
| 1.| Connect to Substrate chains | <ul><li>[ ] </li></ul>| [main.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/main.rs#L50) | Not fully evaluated yet | 
| 2.| Block syncing | <ul><li>[ ] </li></ul>| [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/substrate.rs#L283)| Not fully evaluated yet | 
| 3.| Index writing | <ul><li>[ ] </li></ul>| [substrate.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/substrate.rs#L198) | Not fully evaluated yet | 
| 4.| Status querying | <ul><li>[ ] </li></ul>| [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/websockets.rs#L83) | Not fully evaluated yet | 
| 5.| Index querying | <ul><li>[ ] </li></ul>| [websockets.rs](https://github.com/hybrid-explorer/hybrid-indexer/blob/milestone-1/src/websockets.rs#L95) | Not fully evaluated yet | 
| 6.| Dapp | <ul><li>[ ] </li></ul>| [hybrid-dapp](https://github.com/hybrid-explorer/hybrid-dapp/tree/milestone-1) | Not fully evaluated yet | 

## Evaluation V2

### Testing

Some tests were added for `websockets.rs`, and all passed.

```
running 42 tests
test tests::test_candidate_hash_key ... ok
test tests::test_bounty_index_key ... ok
test tests::test_auction_index_key ... ok
test tests::test_account_index_key ... ok
test tests::test_account_id_key ... ok
test tests::test_para_id_key ... ok
test tests::test_message_id_key ... ok
test tests::test_pool_id_key ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_index_event_ref_index ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_auction_index ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_registrar_index_key ... ok
test tests::test_tip_hash_key ... ok
test tests::test_ref_index_key ... ok
test tests::test_proposal_index_key ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_process_msg_status ... ok
test tests::test_process_msg_proposal_index ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_candidate_hash ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_para_id ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_process_msg_registrar_index ... ok

test result: ok. 42 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.97s
```

I need a way to test AccountId, AccountIndex, AuctionIndex, BountyIndex, CandidateHash, MessageId, ParaId, PoolId, ProposalHash, ProposalIndex, RefIndex, RegistrarIndex, and TipHash. For this, I need the value to search, but only MessageId, ParaId, and PoolId appear in the logs. Please provide a way to test these other parameters. Ideally, the testing guide needs to be followed by anyone and get the same results. Could we test this using a local node? In that way, we could force these events.

### Code Quality

cargo clippy only returned one warning:

```
user@localhost:~/Documents/block/hybrid-indexer$ cargo clippy
warning: use of `unwrap_or` followed by a function call
  --> src/main.rs:49:32
   |
49 | 	let url = args.url.clone().unwrap_or("wss://rpc.polkadot.io:443".to_string());
   |                            	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try this: `unwrap_or_else(|| "wss://rpc.polkadot.io:443".to_string())`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#or_fun_call
   = note: `#[warn(clippy::or_fun_call)]` on by default

warning: `hybrid-indexer` (bin "hybrid-indexer") generated 1 warning
	Finished dev [unoptimized + debuginfo] target(s) in 0.19s
```

Were add some tests for `websockets.rs`, it has good coverage.

```
|| Tested/Total Lines:
|| src/main.rs: 0/28 +0.00%
|| src/pallets/bags_list.rs: 0/20 +0.00%
|| src/pallets/balances.rs: 0/93 +0.00%
|| src/pallets/bounties.rs: 0/52 +0.00%
|| src/pallets/child_bounties.rs: 0/40 +0.00%
|| src/pallets/claims.rs: 0/12 +0.00%
|| src/pallets/collective.rs: 0/71 +0.00%
|| src/pallets/democracy.rs: 0/94 +0.00%
|| src/pallets/election_provider_multi_phase.rs: 0/36 +0.00%
|| src/pallets/elections_phragmen.rs: 0/41 +0.00%
|| src/pallets/fast_unstake.rs: 0/18 +0.00%
|| src/pallets/identity.rs: 0/89 +0.00%
|| src/pallets/indices.rs: 0/27 +0.00%
|| src/pallets/multisig.rs: 0/46 +0.00%
|| src/pallets/nomination_pools.rs: 0/112 +0.00%
|| src/pallets/polkadot/auctions.rs: 0/63 +0.00%
|| src/pallets/polkadot/crowdloan.rs: 0/76 +0.00%
|| src/pallets/polkadot/parachains_disputes.rs: 0/29 +0.00%
|| src/pallets/polkadot/parachains_hrmp.rs: 0/39 +0.00%
|| src/pallets/polkadot/parachains_paras.rs: 0/51 +0.00%
|| src/pallets/polkadot/parachains_ump.rs: 0/41 +0.00%
|| src/pallets/polkadot/paras_registrar.rs: 0/28 +0.00%
|| src/pallets/polkadot/slots.rs: 0/16 +0.00%
|| src/pallets/proxy.rs: 0/55 +0.00%
|| src/pallets/system.rs: 0/25 +0.00%
|| src/pallets/tips.rs: 0/44 +0.00%
|| src/pallets/transaction_payment.rs: 0/12 +0.00%
|| src/pallets/treasury.rs: 0/35 +0.00%
|| src/pallets/vesting.rs: 0/18 +0.00%
|| src/shared.rs: 110/124 -0.18%
|| src/substrate.rs: 38/126 -2.04%
|| src/websockets.rs: 134/164 +81.71%
|| 
16.35% coverage, 282/1725 lines covered, +7.64% change in coverage
```


## Evaluation V1

### Testing

All unit tests passed, but the Testing Guide misses a step by step examples for manual testing. 

```
running 28 tests
test tests::test_candidate_hash_key ... ok
test tests::test_account_id_key ... ok
test tests::test_bounty_index_key ... ok
test tests::test_auction_index_key ... ok
test tests::test_account_index_key ... ok
test tests::test_message_id_key ... ok
test tests::test_pool_id_key ... ok
test tests::test_para_id_key ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_ref_index_key ... ok
test tests::test_proposal_index_key ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_tip_hash_key ... ok
test tests::test_registrar_index_key ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_ref_index ... ok
test result: ok. 28 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.82s
```

I tried to test the Dapp. I changed the block-height parameter to catch new blocks and passed an account ID from any transaction in Polkadot to search for the even. I also tried to search for some keys types that appeared in the logs, like poolID and paraID, and these searches worked. However, I coldn't test with all key types. Could you provide the manual testing guide with the keys and expected results?

I noticed the blocks in the dapp stopped to update after the newest block 15,130,436 / 15,130,436, but the indexer was catching new blocks. So after some time, the dapp counter became 15,130,436 / 15,130,840 and the searches don't find the newest events. Needing to restart the indexer to store these events, but it will stop again. This is an intended feature or a bug in the system? I missused it in some way?

### Docker 

The docker starts the application without problems.

### Code Quality

I ran `cargo clippy` to use a static analysis tool for rust and got too many warnings. There are some examples:
```
user@localhost:~/Documents/block/hybrid-indexer$ cargo clippy
warning: redundant field names in struct initialization
  --> src/substrate.rs:46:9
   |
46 |     	account_id: account_id,
   |     	^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `account_id`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
   = note: `#[warn(clippy::redundant_field_names)]` on by default
warning: redundant field names in struct initialization
  --> src/substrate.rs:47:9
   |
47 |     	block_number: block_number,
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `block_number`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
warning: redundant field names in struct initialization
  --> src/substrate.rs:48:9
   |
48 |     	i: i,
   |     	^^^^ help: replace it with: `i`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
warning: redundant field names in struct initialization
  --> src/substrate.rs:58:9
   |
58 |     	account_index: account_index,
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `account_index`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
warning: redundant field names in struct initialization
  --> src/substrate.rs:59:9
   |
59 |     	block_number: block_number,
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^ help: replace it with: `block_number`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_field_names
```

I ran `cargo tarpaulin` for testing coverage. I noticed no pallets are covered in these tests, only the `shared.rs` and `susbtrate.rs`. Could you explain if the core functions of your application are in those tested files?

```
Apr 17 10:33:55.091  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| src/main.rs: 0/28
|| src/pallets/bags_list.rs: 0/20
|| src/pallets/balances.rs: 0/93
|| src/pallets/bounties.rs: 0/52
|| src/pallets/child_bounties.rs: 0/40
|| src/pallets/claims.rs: 0/12
|| src/pallets/collective.rs: 0/71
|| src/pallets/democracy.rs: 0/94
|| src/pallets/election_provider_multi_phase.rs: 0/36
|| src/pallets/elections_phragmen.rs: 0/41
|| src/pallets/fast_unstake.rs: 0/18
|| src/pallets/identity.rs: 0/89
|| src/pallets/indices.rs: 0/27
|| src/pallets/multisig.rs: 0/46
|| src/pallets/nomination_pools.rs: 0/112
|| src/pallets/polkadot/auctions.rs: 0/63
|| src/pallets/polkadot/crowdloan.rs: 0/76
|| src/pallets/polkadot/parachains_disputes.rs: 0/29
|| src/pallets/polkadot/parachains_hrmp.rs: 0/39
|| src/pallets/polkadot/parachains_paras.rs: 0/51
|| src/pallets/polkadot/parachains_ump.rs: 0/41
|| src/pallets/polkadot/paras_registrar.rs: 0/28
|| src/pallets/polkadot/slots.rs: 0/16
|| src/pallets/proxy.rs: 0/55
|| src/pallets/system.rs: 0/25
|| src/pallets/tips.rs: 0/44
|| src/pallets/transaction_payment.rs: 0/12
|| src/pallets/treasury.rs: 0/35
|| src/pallets/vesting.rs: 0/18
|| src/shared.rs: 112/126
|| src/substrate.rs: 38/118
|| src/websockets.rs: 0/167
||
8.71% coverage, 150/1722 lines covered
```
