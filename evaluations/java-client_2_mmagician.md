# Evaluation

* **Status:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/12
* **Milestone:** 2
* **Kusama Identity:** [None yet](https://polkascan.io/pre/kusama/account/<ID>)
* **Previously successfully merged evaluation:** 1, for milestone 1 of Polkaj grant

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/emeraldpay/polkaj/blob/master/LICENSE)| - |
| 1. | RPC Client |<ul><li>[x] </li></ul>|[RPC Client](https://github.com/emeraldpay/polkaj/blob/master/docs/03-rpc-client.adoc)| ...| 
| 2. | Example App |<ul><li>[ ] </li></ul>|[Example App](https://github.com/emeraldpay/polkaj/tree/master/examples)| ...| 
| 3. | Unit Tests |<ul><li>[x] </li></ul>|[Unit Tests](https://codecov.io/gh/emeraldpay/polkaj)| ...| 
| 4. | Documentation |<ul><li>[x] </li></ul>|[Docs](https://github.com/emeraldpay/polkaj/tree/master/docs)| ...| 

## General Notes

### More complex tests
Integration tests!
I would propose adding instructions for running a local substrate node (perhaps could be dockerized)
and a suite of tests which relies on that node running & executing both HTTP requests & subscribing to events via websocket.
