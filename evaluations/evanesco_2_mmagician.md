# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/evanesco_networks.md
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable      | Accepted               | Link                                                                              | Evaluation notes |
|--------|------------------|------------------------|-----------------------------------------------------------------------------------|------------------|
| 0a.    | License          | <ul><li>[ ] </li></ul> | License missing from https://github.com/Evanesco-Labs/WhiteNoise-client.rs        |                  |
| 0b.    | Documentation    | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise-client.rs/blob/main/README.md) |                  |
| 0c.    | Testing Guide    | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise-client.rs/blob/main/README.md) |                  |
| 0d.    | Article/Tutorial | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise-client.rs/blob/main/README.md) |                  |
| 1.     | P2Private-cli    | <ul><li>[ ] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise-client.rs/blob/main/README.md) |                  |

## General notes

The WhiteNoise-client.rs repository is basically a copy of the sdk directory in your WhiteNoise.rs repo, with some methods renamed.
Could be simplified to reduce code duplication. Is there any reason this was not done? Some ideas:
- either enable compilation into a cli from WhiteNoise.rs, or
- create a submodule to share the code

Feel free to suggest other approaches, or alternatively defend your design choice of code structure.
