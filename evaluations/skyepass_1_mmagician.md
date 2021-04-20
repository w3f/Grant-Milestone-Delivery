# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/212
* **Milestone:** 0
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [vault](https://github.com/skyekiwi/skyepass-vault/blob/master/LICENSE.txt), [ux](https://github.com/skyekiwi/skyepass-ux/blob/master/LICENSE.txt) | |
| 0b. | Documentations | <ul><li>[x] </li></ul> | [instructions on how to run](https://github.com/skyekiwi/skyepass-vault/blob/master/README.md) | |
| 1.  | Smart Contract | <ul><li>[x] </li></ul> | [smart contract](https://github.com/skyekiwi/skyepass-vault/blob/master/contracts/lib.rs) | |
| 2.  | Client Side PoC | <ul><li>[x] </li></ul> | 1. [Local data storage schema and adapters with lowDB](https://github.com/skyekiwi/skyepass-vault/blob/master/client/db.ts)<br/>2. [IPFS](https://github.com/skyekiwi/skyepass-vault/blob/master/client/ipfs.ts)<br/>3. [ECIES encryption & decryption](https://github.com/skyekiwi/skyepass-vault/blob/master/client/metadata.ts)<br/>4. [Shamir secret sharing](https://github.com/skyekiwi/skyepass-vault/blob/master/client/metadata.ts#L71)<br/>5. [integration test](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts#L25)<br/>6. [Unit testing](https://github.com/skyekiwi/skyepass-vault/blob/master/tests/skyepassvault.test.ts) | |
| 3.  | Client Side UI/UX | <ul><li>[x] </li></ul> | [app](https://github.com/skyekiwi/skyepass-ux/tree/master) | | 

## General Notes

The first milestone is very minimal in its functionality. 
It was noticable that the team didn't have extensive Rust experience (and overall experience?). There were some doubts regarding the design of data structures, though the team was able to mostly defend their choices. 

Testing wasn't very polished: duplicated & unsused code, some tests missed to cover the functionality (data structure was updated in a test, but never actually propagated to its parent structure). 

For the next milestone, it's also worth running `cargo clippy` to clean up the code :)

The final outcome after some rounds of fixes was quite good and the team seems motivated to learn and build in the ecosystem.

