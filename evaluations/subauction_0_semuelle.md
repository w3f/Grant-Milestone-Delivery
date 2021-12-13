# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/subauction.md
- **Milestone:** 0
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [galacticcouncil/Basilisk-node](https://github.com/galacticcouncil/Basilisk-node/blob/175850c7edb3cc561351e9f68255c89cadf09634/LICENSE) | — |
| 1a. | redefine traits and add more of them (these are interfaces to handle various types of auctions), current solution has only one | <ul><li>[x] </li></ul> | [pallets/auctions](https://github.com/galacticcouncil/Basilisk-node/blob/72f99e862a090d97cf9324cebaf867ae31d2a52c/pallets/auctions/src/traits.rs) | — |
| 1b. | add handlers/methods for events that operate auctions | <ul><li>[x] </li></ul> | [pallets/auctions](https://github.com/galacticcouncil/Basilisk-node/blob/72f99e862a090d97cf9324cebaf867ae31d2a52c/pallets/auctions/src/lib.rs#L169-L181) | — |
| 1c. | add structs to keep on-chain data about auctions | <ul><li>[x] </li></ul> | [pallets/auctions](https://github.com/galacticcouncil/Basilisk-node/blob/72f99e862a090d97cf9324cebaf867ae31d2a52c/pallets/auctions/src/traits.rs#L23-L41) | — |
| 2. | Deliver docker-compose file to run node | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/galacticcouncil/Basilisk-node/blob/2e367a7227ada0cf56d34442889f685940dda84c/docker-compose.yml) | To run a relay- & parachains setup, follow the [readme](https://github.com/galacticcouncil/Basilisk-node/#run). |
| 3. | The code will have proper unit-test coverage to ensure functionality and robustness. | <ul><li>[x] </li></ul> | [pallets/auctions](https://github.com/galacticcouncil/Basilisk-node/blob/175850c7edb3cc561351e9f68255c89cadf09634/pallets/auctions/src/tests.rs) | 94% `auctions` pallet code coverage according to tarpaulin |
| 4. | Provide both inline documentation of the code and a basic tutorial describing how the software can be used and tested. | <ul><li>[x] </li></ul> | [inline](https://github.com/galacticcouncil/Basilisk-node/blob/175850c7edb3cc561351e9f68255c89cadf09634/pallets/auctions/src/lib.rs), [tutorial](https://github.com/galacticcouncil/Basilisk-node/blob/5f3763eb4a1e55af65124ebe8ea1aef540ffab06/pallets/auctions/README.md) | Tutorial added on request |


## General Notes

- —
