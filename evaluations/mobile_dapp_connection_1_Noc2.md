# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polk-auction.md
- **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                            |  <ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/tesseract-one/Tesseract.rs/blob/master/LICENSE)  | Correct License |
| 0b.    | Documentation                      |  <ul><li>[x] </li></ul>| [README.MD](https://github.com/tesseract-one/Tesseract.rs/blob/master/README.md)  | The documentation could be a lot better, but they pointed out that they need to change it with the next milestone anyway. |                               
| 0c.    | Testing Guide                      |  <ul><li>[x] </li></ul>| [gdoc](https://docs.google.com/document/d/14kaTRfZoiHsQ7eLiC1q9jcWddrNeh9PxTa4dSA5OxNI/edit?usp=sharing)  | Very detailed document  |
| 0d.    | Docker                             |  <ul><li>[x] </li></ul>| N/A  | Which is fine  |
| 0e.    | Article                            |  <ul><li>[x] </li></ul>| [gdoc](https://docs.google.com/document/d/1PULJiNfKABkM4xsvsKp6_EgbKvxuxCZxxPbka2T7zVc/edit?usp=sharing)  | Already in contact with grantspr  |
| 1.     | Architecture                       |  <ul><li>[x] </li></ul>| [README.MD](https://github.com/tesseract-one/Tesseract.rs/blob/master/README.md), [gdoc](https://docs.google.com/document/d/1PULJiNfKABkM4xsvsKp6_EgbKvxuxCZxxPbka2T7zVc/edit?usp=sharing)  | Repo itself contains the structure.   |
| 2.     | Application-level framework        |  <ul><li>[ ] </li></ul>| [example protocol](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract-playground/src/polkadot)  | See below  |
| 3.     | Messages and envelopes             |  <ul><li>[ ] </li></ul>| [tesseract](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract)  |   |
| 4.     | Transport-level framework          |  <ul><li>[ ] </li></ul>| [example "local" transport](https://github.com/tesseract-one/Tesseract.rs/tree/master/tesseract-playground/src/plt)  |   |
| 5.     | Transport-layer development APIs   |  <ul><li>[ ] </li></ul>| [Transports](https://github.com/tesseract-one/Tesseract.rs/blob/master/EXTENDING.MD#Transport)  |   |
| 6.     | Application-layer development APIs |  <ul><li>[ ] </li></ul>| [Protocols](https://github.com/tesseract-one/Tesseract.rs/blob/master/EXTENDING.MD#Protocol)  |   |   

## General Notes

Cargo run currently produces the following output. 

```
Hello, world!
@@@@WOW@@@@ we've got response: testTransaction_signed!
!!!!UGH!!!! we've got an error (that's ok): Weird
Weird Tesseract error: intentional error for test.
```


