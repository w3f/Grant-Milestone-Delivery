# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE chain](https://github.com/CESSProject/cess/blob/main/LICENSE), [License cess-proving-system](https://github.com/CESSProject/cess-proving-system/blob/main/LICENSE-APACHE), [storage-mining-tool License](https://github.com/CESSProject/storage-mining-tool/blob/main/LICENSE)  | **27.12.21**: storage-mining-tool has no license, **29.12.21:** The storage mining tool license was added |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Designs of Storage Mining](https://github.com/CESSProject/cess/blob/v0.1.1/docs/designs-of-storage-mining.md), [inline documentation](https://github.com/CESSProject/cess/blob/v0.1.1/c-pallets/segment-book/src/lib.rs) | Docs according to the contract |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Run Tests](https://github.com/CESSProject/cess/tree/v0.1.1#run-tests) | Very basic testing "guide", it doesn't explain how to run the tests for segment book |
| 0d. | Article/Tutorial |<ul><li>[x] </li></ul> | [module-documentation](https://github.com/CESSProject/cess/tree/v0.1.1#module-documentation) | Not really an article or tutorial. Given the size of the grant, it’s sufficient, but it would be nice if they could publish an article.  |
| 1a. | Stacked DRG Library | <ul><li>[ ] </li></ul> | []() | |
| 1b. | zk-SNARK proofs | <ul><li>[ ] </li></ul> | []() | |
| 2. | CESS Contracts | <ul><li>[ ] </li></ul> | [](https://github.com/CESSProject/cess/tree/v0.1.1/c-pallets/segment-book) | **27.12.21:** No contract,  |
| 3. | Miner Client | <ul><li>[ ] </li></ul> | [storage-mining-tool](https://github.com/CESSProject/storage-mining-tool) | |

## General Notes

29.12.21: 

<pre><font color="#26A269"><b>Running</b></font> unittests (target/release/deps/pallet_segment_book-40fbdcc532bd42d9)

running 0 tests
</pre>

27.12.21: The original application needs was updated. No contracts implemented. 	