# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

## Application & Milestone Details

- **Application Document:** [Proof of Contract Stake](https://github.com/w3f/Grants-Program/tree/master/applications/PoCS.md).
- **Milestone** : 2

## Purpose

The goal is to integrate pallet-staking with pallet-contracts, ensuring NPoS and PoCS systems work together seamlessly. A working prototype of the PoCS full node is achieved. 

## Deliverables

|Number|Deliverable|Link|Notes|
|-------------|-------------|------------- |------------- |
|0a.|License| [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) |-|
|0b.|Documentation| [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/) , [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | Crate Documentation of modified `pallet_contracts` and `pallet_staking` for PoCS|
|0c.|Testing Guide| [Testing guide](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md) , [Node Setup & Run](https://github.com/auguth/pocs/blob/master/README.md#pocs-node-set-up) | `nightly-2023-12-21` required and overridden. Guide includes implementation details|
|0d.|Docker | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)| To Build and Run using Docker `docker compose up --build -d` |
|0e.|Repository Readme (External Documentation)|[PoCS README](https://github.com/auguth/pocs/blob/master/README.md)|In Milestone 3, External documentation will be a blog article.|
|1.|Delivery|[PoCS Node](https://github.com/auguth/pocs/tree/master)|PoCS Node Repository - includes modified [pallet-contracts](https://github.com/auguth/pocs/tree/master/pallets/contracts) & [pallet-staking](https://github.com/auguth/pocs/tree/master/pallets/staking)|

## Additional Information

1. [To Build & Run PoCS Node](https://github.com/auguth/pocs/blob/master/README.md#pocs-node-set-up)
2. [List of Testing Commands](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md#unit-tests--benchmarking-tests)
3. [To Build & Run using Docker Compose](https://github.com/auguth/pocs/blob/master/README.md#docker-compose)
4. [Nominator Test Using Polkadot JS and Contracts UI](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md#test-using-front-end)
5. Upcoming Final **Milestone 3** will include these deliverables,
     1. Multi Node Test
     2. Yellow Paper (Security Report Included)
     3. Sample PoCS ink! Contract (Verifying Contract's Delegate and Stake Score)
     4. PoCS Blog Article
     5. PoCS Tutorial Video

**Important:** For Compiling Node Specific Nightly Version `nightly-2023-12-21` is required with wasm target

```bash
rustup install nightly-2023-12-21

rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21

rustup override set nightly-2023-12-21
```