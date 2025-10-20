# NFTAA — Milestone 3 Evaluation

- **Status:** Approved 
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/nftaa.md
- **Milestone:** 3

| Number | Deliverable | Approved | Link | Notes |
|------:|-------------|:--------:|------|-------|
| 0a. | License | [x] | See multiple repos in delivery | MIT licenses are present. |
| 0b. | Documentation | [x] | Website, Pallet wiki, Testing guide | Documentation present and accessible. |
| 0c. | Testing and Testing Guide | [x] | Testing guide, unit tests, devnet | Tests run from the node repo; coverage is below 80% but justified given reused pallet logic and accepted per reviewer guidance. |
| 0d. | Docker | [x] | Dockerfile and setup guide | Containers build and run successfully on Linux; instructions were sufficient to bring up node, indexer, and frontend. |
| 0e. | Article | [x] | Medium article | Article present. |
| 3a. | Web app integration | [x] | koda.nftaa.xyz (marketplace) | End-to-end flow, including staking UI interactions, verified on local Linux setup. |
| 3b. | Marketplace app integration | [x] | koda.nftaa.xyz + indexer + node | Full stack (node ↔ indexer ↔ Kodadot) operates as documented; local testing confirmed blocks progress and UI connectivity. |

## Staking UI/Flow requirement (from application M3 → 3a)

The delivered Kodadot integration exposes the promised staking actions (stake increase and unstake) and they function locally; the workflow was exercised end-to-end on the provided devnet.

## Testing coverage (current run)

- File: `polkadot-sdk/templates/parachain/pallets/pallet-nftaa/src/lib.rs`
- Coverage (tarpaulin, llvm engine): 33 of 124 lines (~26.6%).

Reviewer guidance for milestone 1 explicitly accepted lower percentages when functionality relies on already-tested pallets, so the current coverage level is considered sufficient for this milestone.[^1]


## Local stack status (docker compose)

- `docker compose up` builds and starts all services without errors (nodes, processor, API, frontend).
- Relay chain and parachain nodes expose RPC endpoints (`ws://127.0.0.1:9910`–`9913` and `ws://127.0.0.1:9920`) and continue producing blocks under load.
- The processor container stays synchronized with the chain, and Kodadot connects to the local GraphQL endpoint as documented.

## Local environment notes

- Full flow (node, indexer, frontend) was reproduced on Linux following the provided documentation.

[^1]: https://github.com/w3f/Grant-Milestone-Delivery/pull/1243#issuecomment-2742803646
