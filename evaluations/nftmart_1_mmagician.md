# Evaluation

* **Status:** Rejected
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/NFTStore_Network.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable    | Accepted               | Link                                                         | Evaluation Notes                  |
|--------|----------------|------------------------|--------------------------------------------------------------|-----------------------------------|
| 0a.    | License        | <ul><li>[x] </li></ul> | https://github.com/nftt-studio/NFTMart-Node/blob/dev/LICENSE |                                   |
| 0b.    | Documentation  | <ul><li>[x] </li></ul> |                                                              |                                   |
| 0c.    | Testing Guide  | <ul><li>[x] </li></ul> |                                                              |                                   |
| 1a.    | Node Repo      | <ul><li>[ ] </li></ul> | https://github.com/nftt-studio/NFTMart-Node/tree/dev/        | Still compiling all FRAME pallets |
| 1b.    | NFTStore token | <ul><li>[x] </li></ul> |                                                              |                                   |
| 2a.    | Pallet_nft     | <ul><li>[x] </li></ul> |                                                              |                                   |
| 2b.    | Pallet_store   | <ul><li>[x] </li></ul> |                                                              |                                   |
| 3.     | Front End      | <ul><li>[ ] </li></ul> |                                                              | Fails to connect                  |
| 4.     | Docker Image   | <ul><li>[x] </li></ul> |                                                              |                                   |
## General Notes

### Repository structure

Initially the team forked the substrate repo, rather than substrate-node-template, the former being specifically suited to be a starting point for teams building their own chains with custom pallets.

After multiple rounds of back-and-forth, we converged on moving to a node-template-like structure for convenience. Still, when doing the migration there were a number of leftovers from the move, including the `runtime` directory moved from root to `node` dir, or the `executor` code left under `node` as well, instead of including it as a dependency.

The runtime still includes all the pallets originally present in the substrate repo, which shows some sloppiness with regard to doing the migration. It significantly slows down the compilation time.

`pallet-template` should be removed together with any other template code.

### Frontend

Initially I was running into issues where I couldn't select a newly created collection.

There seem to be issues with the metadata and the frontend can't connect to the node now. Error log attached in the comments section.
