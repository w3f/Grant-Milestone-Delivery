# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/12
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** 1, for milestone 1 of Polkaj grant

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/emeraldpay/polkaj/blob/master/LICENSE)| - |
| 1. | RPC Client |<ul><li>[x] </li></ul>|[RPC Client](https://github.com/emeraldpay/polkaj/blob/master/docs/03-rpc-client.adoc)| contracts APIs are missing and chain is incomplete| 
| 2. | Example App |<ul><li>[x] </li></ul>|[Example App](https://github.com/emeraldpay/polkaj/tree/master/examples)| ...| 
| 3. | Unit Tests |<ul><li>[x] </li></ul>|[Unit Tests](https://codecov.io/gh/emeraldpay/polkaj)| ...| 
| 4. | Documentation |<ul><li>[x] </li></ul>|[Docs](https://github.com/emeraldpay/polkaj/tree/master/docs)| ...| 

## Completeness

The original milestone proposes the implementation of chain, contracts, and state APIs.
Comparing https://github.com/emeraldpay/polkaj/blob/master/docs/ref-01-api-commands.adoc with https://polkadot.js.org/api/substrate/rpc.html#chain, 
the contracts APIs are missing and others (like chain) are incomplete.

Update:
Wrappers for each RPC method has been added & problems with some existing ones fixed.


## General Notes
Good communication and responsiveness following the comments to the delivery PR:
https://github.com/w3f/Grant-Milestone-Delivery/pull/15, in particular commits: 

`466e229a30732092ecb51a50e45d8b3f8005f36a^..381483e23fe13d97afcb501f0911b2a8d78e46a3` on https://github.com/emeraldpay/polkaj/

as well as a PR https://github.com/emeraldpay/polkaj/pull/14 with cosmetic fixes like grammar and some unit tests.

### Documentation
As mentioned in the PR comments, I would love to see more detailed instructions tailored for newcomers not familiar with running a Substrate node, 
like links to relevant substrate pages etc. that would allow a user setup a node from scratch. 

I got a positive reply regarding the topic, but no follow up. Not a blocker, just nice-to-have.

### Integration tests!
As mentioned multiple times, it would be great to have an integration test suite. 

This is even more evident now in the light of a recent change in Polkadot API which broke one of the rpc examples.

However, as the original milestone proposal has explicitly stated the delivery of examples instead, this is fine for this project.
Still, a shame, as it would make the code more sustainable in my view. 
