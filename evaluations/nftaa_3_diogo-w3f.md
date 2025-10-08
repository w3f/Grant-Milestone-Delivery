# NFTAA — Milestone 3 Evaluation

- **Status:** Changes requested 
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/nftaa.md
- **Milestone:** 3

| Number | Deliverable | Approved | Link | Notes |
|------:|-------------|:--------:|------|-------|
| 0a. | License | [x] | See multiple repos in delivery | MIT licenses are present. |
| 0b. | Documentation | [x] | Website, Pallet wiki, Testing guide | Documentation present and accessible. |
| 0c. | Testing and Testing Guide | [ ] | Testing guide, unit tests, devnet | Low unit test coverage. Lack frontend setup guide. |
| 0d. | Docker | [ ] | Dockerfile and setup guide | Containers now start, but there are no instructions to hook the local Kodadot UI to the running services. |
| 0e. | Article | [x] | Medium article | Article present. |
| 3a. | Web app integration | [ ] | koda.nftaa.xyz (marketplace) | See staking UI note below; requires staking integration per application scope. |
| 3b. | Marketplace app integration | [ ] | koda.nftaa.xyz + indexer + node | Pending manual verification; local stack runs but UI connections are undocumented and the network appears idle (no new blocks). |

## Staking UI/Flow requirement (from application M3 → 3a)

In the grant application (M3 → 3a Web app integration), you explicitly promise a UI that lets users “play with staking, increase stake and unstake handled by NFTAA.” The M3 delivery shows a KodaDot-based marketplace integration, but I don’t see any staking UI/flows nor integration with the Polkadot Staking Dashboard (or an equivalent staking interface). Can you provide an example showing that this works?

## Testing coverage (current run)

- File: `polkadot-sdk/templates/parachain/pallets/pallet-nftaa/src/lib.rs`
- Coverage (tarpaulin, llvm engine): 33 of 124 lines (~26.6%).


## Local stack status (docker compose)

- `docker compose up` now builds and starts all services without errors (nodes, processor, API, frontend).
- Relay chain and parachain nodes expose RPC endpoints (`ws://127.0.0.1:9910`–`9913` and `ws://127.0.0.1:9920`), but the network stalls after launch; no new blocks are produced beyond block 0.
- The processor container stays up yet reports `Processing 1 blocks from 0 to 0`, suggesting it is connected but the chain head is not advancing.
- The Kodadot frontend listens on `http://localhost:9090`; however, there are no documented steps to wire it to the local RPC or Subsquid GraphQL endpoint, so the UI remains unusable.
- Please document how to keep the local network producing blocks and how to configure the frontend/indexer to interact with those endpoints end-to-end.

## Local environment notes

- When starting the provided `docker compose` stack, the chain starts but stalls at the head block; please include troubleshooting steps and expected RPC endpoints so the network keeps producing blocks locally.
- Please document the full flow to run everything locally (node, indexer, frontend) and how to point Kodadot at the local RPC/GraphQL endpoints.
