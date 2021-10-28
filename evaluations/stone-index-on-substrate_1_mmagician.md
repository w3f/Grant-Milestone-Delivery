# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/stone-index-on-substrate.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All evaluations by mmagician

| Number | Deliverable               | Accepted               | Link                                                                                                                                                                                  | Evaluation notes                                                                                                                                              |
|--------|---------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | [The Unlicense node](https://github.com/stonedefi/stoneindex-node/blob/master/LICENSE), [The Unlicense UI](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/LICENSE) |                                                                                                                                                               |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | [Readme](https://github.com/stonedefi/stoneindex-node/blob/master/README.md)                                                                                                          | Copy of substrate-node-template README. Perhaps an extra note could be added at the top to explain what the pallets in this node are & how one could use them |
| 0c.    | Testing Guide             | <ul><li>[x] </li></ul> | [Readme Frontend](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/README.md)                                                                                        |                                                                                                                                                               |
| 0d.    | Article/Tutorial          | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/tutorial/Tutorial.md)                                                                                    |                                                                                                                                                               |
| 1.     | UI/UX for Stone Platform  | <ul><li>[x] </li></ul> | [UI](https://github.com/stonedefi/stone-index-substrate-ui)                                                                                                                           |                                                                                                                                                               |
| 2.     | Indexed basket management | <ul><li>[x] </li></ul> | [stone-index pallet](https://github.com/stonedefi/stoneindex-node/blob/master/pallets/stone-index/src/lib.rs)                                                                         |                                                                                                                                                               |
| 3.     | DEX integration           | <ul><li>[x] </li></ul> | [swaps-integration-demo](https://github.com/stonedefi/stoneindex-node/tree/master/pallets/swaps-integration-demo)                                                                     | Integration example provided                                                                                                                                  |


## General Notes

Note: this is a follow-up to [Noc2's](https://github.com/mmagician/Grant-Milestone-Delivery/blob/stone-index-eval/evaluations/stone-index-on-substrate_1_Noc2.md) evaluation.

Overall, the team made significant progress since the onset of the project and while not perfect, this milestone demonstrates their capability to write good substrate code and integrate various pallets to interact together.

### stone-index pallet

- The same type `AssetId` is used for StoneIndex & StoneIndexComponent. This seems confusing, as they are two separate logical structures. While the underlying type might be `u32` for both, it's better to keep the naming more explicit. This becomes problematic when your storage contains a hashmap from `AssetId` -> one can never be sure whether you're referring to the ID of StoneIndex struct or StoneIndexComponent.

Update: fixed, the distinction is clear now.

### DEX integration

- The [demo](https://github.com/stonedefi/stone-index-swaps-integration-demo) is somewhat minimal, but works. Perhaps a full, automated integration test showing the full user workflow would be helpful, e.g. create and mint some assets, create an index, transfer via your bridge to the DEX, swap for something, transfer back.

### UI

Unit tests were failing on master branch with `yarn test`, but fixed now.

### Tutorial

As mentioned above for 0b. notes, the documentation for the node itself could be improved.
