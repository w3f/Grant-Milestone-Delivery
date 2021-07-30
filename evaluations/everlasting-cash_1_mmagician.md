# Evaluation

* **Status:** Rejected
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/EverlastingCash.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                                   | Accepted               | Link | Evaluation Notes               |
|--------|-----------------------------------------------|------------------------|------|--------------------------------|
| 0a.    | License                                       |                        |      |                                |
| 0b.    | Documentation                                 |                        |      |                                |
| 0c.    | Testing Guide                                 | <ul><li>[ ] </li></ul> |      | Not a single proper unit test  |
| 1.     | ELC contracts                                 |                        |      |                                |
| 1a.    | Anti-Inflation Factor K & On-Chain Governance |                        |      |                                |
| 1b.    | Liability Ratio                               |                        |      |                                |
| 1c.    | ELC Supply Expansion mechanism                |                        |      |                                |
| 1d.    | ELC Supply Contraction                        |                        |      |                                |
| 1e.    | Oracle Price acquirement                      | <ul><li>[ ] </li></ul> |      | Expected: dual-price mechanism |

## General Notes

### Oracle

The price stored by the oracle is very simple. According to the contract, it should have been a dual-price mechanism oracle.

### Testing

Two critical issues:
1. No `ink!` native unit tests.
2. In case there are no rust tests in the contracts themselves, it might be sufficient to cover the same functionality with ts tests, as has been done for other projects and has been attempted here.
However, despite there being a number of test files, none of these contain any real unit tests. There are no extrinsics called on the contracts, no comparisons between different states and not a single assert. Given the fairly complex nature of a stablecoin algorithmic mechanism, I would expect an extensive coverage of all the methods and figuring out various edge cases.
