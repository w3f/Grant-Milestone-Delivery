# Evaluation

- **Status:** In Progress 
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/stone-index-on-substrate.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All evaluations by mmagician

| Number | Deliverable               | Accepted               | Link                                                                                                                                                                                  | Evaluation notes                                                                                                                                              |
|--------|---------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                   | <ul><li>[x] </li></ul> | [The Unlicense node](https://github.com/stonedefi/stoneindex-node/blob/master/LICENSE), [The Unlicense UI](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/LICENSE) |                                                                                                                                                               |
|    0b. | Documentation             | <ul><li>[x] </li></ul> | [Readme](https://github.com/stonedefi/stoneindex-node/blob/master/README.md)                                                                                                          | Copy of substrate-node-template README. Perhaps an extra note could be added at the top to explain what the pallets in this node are & how one could use them |
|    0c. | Testing Guide             | <ul><li>[x] </li></ul> | [Readme Frontend](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/README.md)                                                                                        |                                                                                                                                                               |
|    0d. | Article/Tutorial          | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/stonedefi/stone-index-substrate-ui/blob/master/tutorial/Tutorial.md)                                                                                    |                                                                                                                                                               |
|     1. | UI/UX for Stone Platform  | <ul><li>[ ] </li></ul> | [UI](https://github.com/stonedefi/stone-index-substrate-ui)                                                                                                                           |                                                                                                                                                               |
|     2. | Indexed basket management | <ul><li>[x] </li></ul> | [stone-index pallet](https://github.com/stonedefi/stoneindex-node/blob/master/pallets/stone-index/src/lib.rs)                                                                         |                                                                                                                                                               |
|     3. | DEX integration           | <ul><li>[ ] </li></ul> | [swaps-integration-demo](https://github.com/stonedefi/stoneindex-node/tree/master/pallets/swaps-integration-demo)                                                                     | Full code missing, see below                                                                                                                                  |


## General Notes

Note: this is a follow-up to [Noc2's](https://github.com/mmagician/Grant-Milestone-Delivery/blob/stone-index-eval/evaluations/stone-index-on-substrate_1_Noc2.md) evaluation.

### stone-index pallet

- The same type `AssetId` is used for StoneIndex & StoneIndexComponent. This seems confusing, as they are two separate logical structures. While the underlying type might be `u32` for both, it's better to keep the naming more explicit. This becomes problematic when your storage contains a hashmap from `AssetId` -> one can never be sure whether you're referring to the ID of StoneIndex struct or StoneIndexComponent.

### DEX integration

- The [demo](https://github.com/stonedefi/stone-index-swaps-integration-demo) is incomplete. Please create a repo which allows us to test the DEX integration out-of-the-box. I appreciate you placing it in a separate repository to address the licensing issue, but currently I can't test it easily. This ties in to my next question:
- How will you run your application in production? Currently you cannot use your fork of [substrate-node-template](https://github.com/stonedefi/stoneindex-node) since it doesn't contain the DEX. Do you have a separate repo somewhere where you're hosting both your stone-index pallet as well as the DEX integration within one runtime?

### UI

Unit tests are still failing on master branch with `yarn test`. Error output is quite long, here's a part of it:
```
FAIL src/__tests__/types.js
  ● Types Test Suite › types has at lease three value

    expect(received).toBeGreaterThanOrEqual(expected)

    Expected: >= 3
    Received:    2

      3 | describe('Types Test Suite', () => {
      4 |   it('types has at lease three value', () => {
    > 5 |     expect(Object.keys(types).length).toBeGreaterThanOrEqual(3);

...

Test Suites: 1 failed, 6 passed, 7 total
Tests:       2 failed, 9 passed, 11 total
Snapshots:   0 total
Time:        8.616 s
Ran all test suites.
```

