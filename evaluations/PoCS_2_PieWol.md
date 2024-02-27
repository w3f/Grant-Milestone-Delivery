# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PoCS.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 2**
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
|0a.|License| <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/auguth/pocs/blob/master/LICENSE) | - |
|0b.|Documentation| <ul><li>[x] </li></ul> | [Pallet Contracts](https://auguth.github.io/pocs/target/doc/pallet_contracts/) , [Pallet Staking](https://auguth.github.io/pocs/target/doc/pallet_staking/) | Crate Documentation of modified `pallet_contracts` and `pallet_staking` for PoCS|
|0c.|Testing Guide| <ul><li>[x] </li></ul> | [Testing guide](https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md) , [Node Setup & Run](https://github.com/auguth/pocs/blob/master/README.md#pocs-node-set-up) | `nightly-2023-12-21` required and overridden. Guide includes implementation details|
|0d.|Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/auguth/pocs/blob/master/Dockerfile) , [Docker Compose](https://github.com/auguth/pocs/blob/master/docker-compose.yml) , [DockerImage Pull](https://github.com/auguth/pocs/blob/master/README.md#docker-pull)| To Build and Run using Docker `docker compose up --build -d` |
|0e.|Repository Readme (External Documentation)| <ul><li>[x] </li></ul> | [PoCS README](https://github.com/auguth/pocs/blob/master/README.md)|In Milestone 3, External documentation will be a blog article.|
|1.|Delivery|<ul><li>[x] </li></ul> | [PoCS Node](https://github.com/auguth/pocs/tree/master)|PoCS Node Repository - includes modified [pallet-contracts](https://github.com/auguth/pocs/tree/master/pallets/contracts) & [pallet-staking](https://github.com/auguth/pocs/tree/master/pallets/staking)|

## General Notes
TODO: fix table of deliverables

## Testing Guide
I think your testing guide could use a better structuring.
For example for unit tests and benchmarking you state these steps 
https://github.com/auguth/pocs/blob/master/TESTING-GUIDE.md#unit-tests--benchmarking-tests

But why do I need to run docker compose when afterwards all thats done is use `cargo t` + some flags? Thats all separate and during compile time those tests aren't they?

I think there is no need to paste the actual functions into your testing guide. This is just hard to read and to navigate. Also this is fairly annoying to maintain in case you will change the code and lead to a lot of confusion if not updated correctly. 

Same holds true for the structs you describe in the testing guide. This should all be inline documentation in the actual code as it's not really relevant for the testing guide. I would also appreciate it if you shorten sections where possible. 

## Article deliverable
Please stick to the agreed upon deliverables and publish an actual article. The integration details and the actual testing guide should not be mixed. 

