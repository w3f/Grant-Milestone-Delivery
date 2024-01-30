# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

## Application & Milestone Details

- **Application Document:** [Proof of Contract Stake](https://github.com/w3f/Grants-Program/tree/master/applications/PoCS.md).
- **Milestone** : [1. Pallet Contract Update](https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md#milestone-1---pallet-contract-update)

## Purpose

Code base set-up for developing contract staking consensus. Accomplished adding new storage variables for the same, tight coupled required pallets and tested end-to-end working of them.

## Deliverables

|Number|Deliverable|Link|Notes|
|-------------|-------------|------------- |------------- |
|0a.|License| [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) |-|
|0b.|Documentation| [Inline Documentation](https://auguth.github.io/pocs/target/doc/pallet_contracts/) |Crate Documentation for pallet_contracts (PoCS version)|
|0c.|Testing Guide| [Testing guide](https://github.com/auguth/pocs/blob/master/README.md#testing) , [Node Setup & Run](https://github.com/auguth/pocs/blob/master/README.md#pocs-node-set-up) | `nightly-2023-12-21` required and overriden|
|0d.|Docker | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage 2.45GB compressed](https://hub.docker.com/layers/jobyreuben/pocs-node/w3f_m1/images/sha256-0cc7dcf68b7cc2e3db14f8fd85102b1651967871aade6d10f0416955e0de845d?context=repo)| `docker compose up --build -d` |
|0e.|Article (Repo Readme)/External Documentation|[PoCS article](https://github.com/auguth/pocs/blob/master/README.md)|Sections for Milestone 1 Completed. Remaining sections upon Milestone 2 & 3 completion|
|1.|Delivery|[PoCS Node](https://github.com/auguth/pocs/tree/master)|PoCS Node Repository|

## Additional Information

1. Nightly specific version should be overidden `rustup override set nightly-2023-12-21` and wasm targets added `rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21`
 
   Recommended `rustup toolchain list`
   
    ```
    stable-x86_64-unknown-linux-gnu (default)
    nightly-2023-12-21-x86_64-unknown-linux-gnu (override)
    ```
    
3. PoCS Tests : `cargo test pocs`
4. To check out the changes one can run [Contracts UI](https://contracts-ui.substrate.io/). Upload any sample contract (or [use pocs-test-ink-contracts](https://github.com/auguth/ink-contracts-for-testing)), instantiate and deploy. 
5. Check `ContractStakeInfo` and `AccountStakeInfo` events emitted.
6. The [modified functions in pallet-contracts](https://github.com/auguth/pocs/blob/master/README.md#contract-staking-pallet_contracts) will undergo further adjustments. Therefore, it is preferable to conduct benchmarking weights (for pallet-contracts & pallet-staking) after the pallet-staking modifications in Milestone 2. For E.g., the function `update_delegate()` in pallet-contracts currently sets `stake_score` locally, but in Milestone 2, `stake_score` will be retrieved from pallet-staking which requires new benchmarks.
7. Next Milestone 2 will include modifying pallet-staking and delivering a pocs-npos-babe-grandpa node.

**Sections to refer in External Documentation**
- [Setting Up Node](https://github.com/auguth/pocs/blob/master/README.md#pocs-node-set-up)
- [Docker Compose](https://github.com/auguth/pocs/blob/master/README.md#docker-compose)
- [Docker Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)
- [Running Tests](https://github.com/auguth/pocs/blob/master/README.md#tests)
- [Pallet Contracts Modification Details](https://github.com/auguth/pocs/blob/master/README.md#contract-staking-pallet_contracts)
- [Testing Details](https://github.com/auguth/pocs/blob/master/README.md#testing)