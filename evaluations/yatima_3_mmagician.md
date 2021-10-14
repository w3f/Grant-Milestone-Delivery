# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yatima.md
* **Milestone:** 3
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                 | Accepted               | Link                                                                                                  | Evaluation Notes |
|--------|-----------------------------|------------------------|-------------------------------------------------------------------------------------------------------|------------------|
| 0a.    | License                     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/yatima-inc/sp-im/blob/main/LICENSE)                                      |                  |
| 0b.    | Documentation               | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/yatima/blob/main/README.md)                                    |                  |
| 0c.    | Testing Guide               | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/yatima/blob/main/README.md)                                    |                  |
| 0d.    | Nix                         | <ul><li>[x] </li></ul> | [flake.nix](https://github.com/yatima-inc/yatima/blob/main/yatima.nix)                                |                  |
| 1.     | Substrate module: sp_yatima | <ul><li>[x] </li></ul> | [yatima core](https://github.com/yatima-inc/yatima)                                                   |                  |
| 2.     | Repository: yatima-node     | <ul><li>[x] </li></ul> | [substrate-node-template](https://github.com/yatima-inc/substrate-node-template/tree/yatima-tutorial) |                  |

### General notes

The integration of yatima<>substrate at this point is limited. Substrate is basically used as a wrapper to parse yatima scipts and call into the yatima library.

This served well as a PoC and to give the yatima team an intro to substrate. I suggest future milestones to center around deeper integration goals, such as interacting with on-chain storage, calling other pallets (such as for accessing IPFS) and using yatima as an alternative for composing smart contract.
